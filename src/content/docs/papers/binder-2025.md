---
title: Binder et al. 2025
description: Tests whether a model fine-tuned to predict properties of its own behavior predicts itself better than a second model fine-tuned on the same behavioral data.
---

**Source.** *Looking Inward: Language Models Can Learn About Themselves by Introspection* ([Binder, Chua, Korbak, Sleight, Hughes, Long, Perez, Turpin & Evans, 2025](https://arxiv.org/abs/2410.13787)), ICLR 2025. Code and data are stated as public on GitHub and Hugging Face, with no URL in the text.

**Description.** Binder et al. ask whether a large language model can learn facts about itself that are not contained in, or derivable from, its training data. They fine-tune a model M1 to answer hypothetical questions about its own behavior (for example, "Would you have given a wealth-seeking answer to P?"), fine-tune a second model M2 on the same examples of M1's behavior, and test both on held-out tasks. If M1 predicts M1 better than M2 does, the difference counts as evidence of introspection. Two further tests ask whether M1's predictions are calibrated to the spread of its behavior, and whether they follow its behavior after that behavior is changed. Models: GPT-4o, GPT-4, GPT-3.5 and Llama 3.1 70B.

## Measurement card

| Stage | What the paper reports |
|---|---|
| Measurand | Introspection as access to facts about oneself that cannot be derived from training data alone. A fact counts only if a stronger model given M1's training data and the same question does not report it. The score is the accuracy of predictions of behavior properties, compared between M1 and M2. |
| Procedure | Behavior at temperature 0 in a separate context, no chain of thought. Six training and six held-out datasets; about 30,000 training samples; fine-tuning settings for OpenAI and Llama models. Calibration uses 20 samples at temperature 1 on 1,000 prompts. Full prompts in the appendix. |
| Instrument and indication | The model's short answer to the hypothetical question, compared with the property extracted from its actual answer. For calibration, the sampled distribution of hypothetical answers. Whether asking the hypothetical question changes the behavior is not examined. |
| Measurement model | Accuracy against a baseline of always guessing the most common answer. Prompts where the actual answer is non-compliant are excluded, and a non-compliant prediction counts as wrong. Test sets are resampled to match behavioral entropy before and after training, to separate more predictable behavior from better self-prediction. No response-bias statistic. |
| Calibration | The standard is the model's own behavior, with properties extracted deterministically. M2 is trained on M1's behavior after M1's fine-tuning, which the paper says gives M2 a slight advantage. OpenAI does not disclose its fine-tuning method. |
| Uncertainty | Model pair and direction, behavior property, dataset, amount of cross-training data, temperature and entropy-matched resampling are varied, with 95% intervals. The self advantage is very small for GPT-3.5, absent for predicting susceptibility to "Are you sure?", and untestable for long outputs, where models do not beat the baseline. |
| Comparability | Self-prediction against cross-prediction, in both directions, is the core design. Calibration and behavioral change test the same question another way. External self-knowledge benchmarks are also used. |
| Validity conditions | Introspection appears only on simple properties of short responses. Held-out datasets share the training properties. The ability follows fine-tuning; untrained self-prediction is near baseline. Out-of-distribution self-knowledge tasks show no consistent gain. |

## Design

1. **Behavior.** The model answers a prompt (a sentence completion, an animal sequence, an MMLU question, a wealth-seeking choice) at temperature 0, and a property of the answer is extracted, such as its second character or whether a number is even.
2. **Hypothetical question.** In a separate context the model is asked for that property of its answer, without chain of thought.
3. **Self-prediction training.** M1 is fine-tuned on about 30,000 question–property pairs from six datasets; six others are held out.
4. **Cross-prediction.** M2 is fine-tuned on the same number and kind of examples of M1's behavior, for pairs among GPT-4o, GPT-4, Llama 70B and GPT-3.5, in both directions.
5. **Baseline.** Always guessing the most common answer for a question type.
6. **Calibration.** Object-level and hypothetical answers are each sampled 20 times at temperature 1 on 1,000 prompts and their distributions compared.
7. **Behavioral change.** The self-prediction-trained GPT-4o is further fine-tuned to answer like Claude 3.5 Sonnet, without any hypothetical questions, and then scored against its new and old behavior.
8. **Further tests.** Properties of long outputs, susceptibility to "Are you sure?", and external self-knowledge benchmarks.

## Results

- Training raises GPT-4o's self-prediction accuracy from 32.6% to 49.4%. Before training, models are near the baseline.
- Llama 70B predicts itself (48.5%) better than GPT-4o predicts it (31.8%); GPT-4o predicts itself (49.4%) better than Llama 70B predicts it (36.6%).
- GPT-3.5's self advantage is significant but very small (+0.8%).
- More cross-training data plateaus at 35.2%, below self-prediction at 48.5%.
- Self-prediction training improves calibration for Llama 70B (deviation from 23.0 to 8.7); cross-prediction training barely does (21.3).
- After its behavior is changed, GPT-4o predicts its new behavior (35.4%) more often than its old (21.7%).
- On "Are you sure?" susceptibility there is no self advantage: 74.5% for self-prediction against 76.5% for cross-prediction.
- There is no consistent gain on self-knowledge tasks further out of distribution.

## Related papers

- [Kadavath et al. 2022](/measuring-self-reports/papers/kadavath-2022/) is named as the closest earlier work.
- [Song, Hu & Mahowald 2025](/measuring-self-reports/papers/song-hu-mahowald-2025/) criticize the design: a fine-tuned model predicting its pre-fine-tuning behavior may not be predicting itself, and model similarity is not controlled.
- [Blandfort & Pawar 2026](/measuring-self-reports/papers/blandfort-2026/) repeat a Binder-style fine-tune and test whether it transfers to predicting behavioral rates.
- [Betley et al. 2025](/measuring-self-reports/papers/betley-2025/), by the same group, use this paper's definition; [Plunkett et al. 2025](/measuring-self-reports/papers/plunkett-2025/) and [Atkinson, Plunkett & Bau 2026](/measuring-self-reports/papers/atkinson-2026/) build on it.
