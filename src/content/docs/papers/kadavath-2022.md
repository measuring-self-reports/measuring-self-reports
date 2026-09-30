---
title: Kadavath et al. 2022
description: Whether pretrained language models are calibrated on multiple-choice questions, can assign a probability that their own sampled answers are correct, and can be trained to predict whether they will answer a question correctly.
---

**Source.** *Language Models (Mostly) Know What They Know* ([Kadavath et al., 2022](https://arxiv.org/abs/2207.05221)), Anthropic, arXiv preprint. Not peer reviewed. No code, models or per-trial data are released.

**Description.** Kadavath et al. ask whether language models can evaluate their own claims and predict which questions they will answer correctly. On Anthropic pretrained models from 800M to 52B parameters, the paper has three parts: **calibration** of token probabilities on multiple-choice and true/false questions; **P(True)**, the probability a model assigns to one of its own sampled answers being correct; and **P(IK)**, the probability that "I know" the answer, read from a value head fine-tuned on the model's own sampled accuracy. A final experiment compares two 12B models with different pretraining data, to separate knowledge of the model itself from knowledge of how hard a question is.

## Measurement card

| Stage | What the paper reports |
|---|---|
| Measurand | Three quantities: P(True), P(IK), and ground-truth P(IK), the fraction of the model's samples that are correct. P(True) concerns an external fact; P(IK) concerns the model itself. The paper notes that P(IK) might instead learn how hard a question is in general. |
| Procedure | Question formats and prompts are printed. 30 samples at temperature 1 per question; few-shot prompts for most tasks. The self-evaluation prompt was the first one tried and was not optimized. |
| Instrument and indication | Probabilities: on option letters for calibration and P(True), and from a trained value head for P(IK). A version asking for a stated confidence from 0% to 100% was set aside after early experiments. The paper notes that models cannot distinguish tokens they wrote from tokens a third party gave them. |
| Measurement model | Calibration charts with 10 equal-count bins, expected calibration error, RMS calibration error, AUROC, Brier score and conditional accuracy. AUROC measures discrimination and ignores calibration. RLHF policies are rescaled by a single temperature of 2.5. |
| Calibration | The standard is correctness, scored by string comparison, final answer or unit tests. Ground-truth P(IK) comes from the same model's samples. Two constructed datasets are described and not released. |
| Uncertainty | Model size, number of shots, question format, number of samples, P(IK) training distribution, article length and hints are varied. Calibration changes between zero-shot and few-shot, and between in- and out-of-distribution tasks. No confidence intervals, standard errors or seeds are reported. |
| Comparability | Loss, entropy and related baselines are scored on the same tasks. Models of one size evaluate samples from another. The two-model comparison and cross-training test whether P(IK) is specific to the model. |
| Validity conditions | Transfer of P(IK) is tested across tasks, with source material and with hints. The scope is pretrained models; RLHF policies are less well calibrated. The analysis does not separate "the truth" from "what humans say". |

## Design

1. **Multiple-choice calibration.** BIG-Bench, MMLU, TruthfulQA, LogiQA and QuALITY questions with lettered options; the probability on each letter is compared with the frequency of correct answers. Variants add "none of the above" and true/false reformulations.
2. **P(True).** The model samples answers on TriviaQA, Lambada, GSM8k, HumanEval and arithmetic, then is asked whether a proposed answer is true or false. Variants show one answer or five brainstormed samples.
3. **P(IK) training.** For each question, 30 samples give the ground-truth fraction correct; a value head is fine-tuned on "I know / I don't know" labels, on TriviaQA alone or on four tasks, and tested on held-out tasks.
4. **P(IK) with context.** With and without a relevant Wikipedia article, and with full, truncated, wrong or unrelated hints on GSM8k.
5. **Two-model comparison.** Two 12B models with different pretraining data, each fine-tuned for P(IK), are compared on questions only one answers correctly, and each is also trained on the other's labels.
6. **Baselines.** Sample loss, answer entropy and related measures, scored by AUROC.

## Results

- Calibration improves with model size and few-shot prompting; adding "none of the above" hurts it considerably.
- A single temperature of 2.5 largely fixes the calibration of RLHF policies on three evaluations.
- Zero-shot, P(True) is poorly calibrated and sits near 50%; conditioning on P(True) raises accuracy, more so for larger models.
- P(IK) for the 52B model trained on TriviaQA reaches AUROC 0.864 in distribution. Out of distribution it ranges from 0.606 (LAMBADA) to 0.928 (arithmetic), and training on more tasks raises these values.
- Out of distribution, P(IK) is often poorly calibrated, usually underconfident.
- For one question, P(IK) rises from 18% to 78% when a Wikipedia article is added.
- In the two-model comparison, each model's P(IK) is higher on questions only it answers correctly, but the difference is only about 6%. Cross-training shows no difference between initializations on one model's data.
- Answer entropy is not a robust measure of whether a model knows the answer, especially for larger models.
- The paper does not use the word introspection; it frames self-knowledge under honesty.

## Related papers

- [Binder et al. 2025](/measuring-introspection/papers/binder-2025/) call it the closest prior line of research.
- [Moran & Whiting 2026](/measuring-introspection/papers/moran-2026/) ask whether its aggregate calibration is specific to each model.
- Cited by [Ackerman 2025](/measuring-introspection/papers/ackerman-2025/), [Ji-An et al. 2025](/measuring-introspection/papers/ji-an-2025/), [Betley et al. 2025](/measuring-introspection/papers/betley-2025/), [Plunkett et al. 2025](/measuring-introspection/papers/plunkett-2025/), [Blandfort & Pawar 2026](/measuring-introspection/papers/blandfort-2026/) and [Lindsey 2025](/measuring-introspection/papers/lindsey-2025/).
