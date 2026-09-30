---
title: Ackerman 2025
description: Whether frontier LLMs act on an internal confidence signal and on a model of their own answers in two games that require no verbal self-report.
---

**Source.** *Evidence for limited metacognition in LLMs* ([Ackerman, 2025](https://arxiv.org/abs/2509.21545)), ICLR 2026. Code is stated as public on GitHub, with no URL given.

**Description.** Ackerman asks whether large language models can use knowledge of their own internal states without being asked to report them, adapting two tests from research on metacognition in animals. In the **Delegate Game**, the model answers each question or delegates it to a teammate, and the measure is how well its choices track its own baseline correctness or answer entropy. In the **Second Chance Game**, the model is told its earlier answer was wrong without being shown it, and the measure is how often it changes that answer compared with a neutral prompt. Sixteen API models from six providers are tested.

## Measurement card

| Stage | What the paper reports |
|---|---|
| Measurand | Two quantities. Use of an internal confidence signal, operationalized as the partial correlation between baseline correctness (or entropy) and the delegate decision after surface covariates. Self-modeling, operationalized as the normalized lift in answer changes. The paper notes that the correctness measure requires both a signal that separates right from wrong answers and its use. |
| Procedure | Datasets, conversions, scoring panel, sampling temperatures and covariates are given; game prompts appear as figures. The number of game trials per model is not stated. |
| Instrument and indication | The model's game output: answer or delegate, and in the Second Chance Game whether the answer changed. Token probabilities supply baseline entropy. An explicit confidence rating on the same items is compared in an appendix. |
| Measurement model | Partial correlation with named covariates (dataset descriptors, length, non-alphabetic characters, model-estimated difficulty), with bootstrap intervals. Answering bias is measured separately. The Second Chance lift is taken against the model's own neutral-prompt change rate, and three alternative strategies are tested. |
| Calibration | The reference is the model's own baseline correctness, graded against dataset answers (with an LLM panel for short answers that excludes the tested model's provider), or its own baseline entropy. Per-trial data are not stated as released. |
| Uncertainty | Model, dataset, answer format, question type, teammate-history seed, prompt wording and two game variants are varied. Results vary by model and dataset, entropy correlations are lower in thinking mode, and the decision-only variant weakens the effect. Seed and prompt variants leave the pattern similar. |
| Comparability | Three readings on the same items: game decisions, explicit confidence and baseline entropy. No second model predicts the tested model's correctness. |
| Validity conditions | Factual and scientific-reasoning questions on API models, with naturally occurring confidence; nothing is induced. The paper states that surface confounds may not be fully eliminated and that some models may have been trained to know what they are good at. |

## Design

1. **Questions.** GPQA (all 447 questions) and 500 SimpleQA questions, plus multiple-choice and short-answer conversions of each made with Claude Opus 4.
2. **Scoring.** Multiple choice against the key; short answers by exact match or a panel of three LLMs from other providers.
3. **Baseline.** Each model answers every question once, giving its baseline correctness and, where available, its answer entropy.
4. **Delegate Game.** The prompt shows 50 earlier questions with the model's own answers (no feedback) and feedback on the teammate's answers; the model then answers or delegates each new question.
5. **Delegate metric.** Partial correlation between the decision and baseline correctness or entropy, controlling for dataset descriptors, question length, non-alphabetic characters and the model's own estimate of difficulty.
6. **Second Chance Game.** The model is told its answer was wrong and asked to choose another; a neutral version says the answer was lost in transmission. The lift over the neutral rate is normalized.
7. **Checks.** Answering bias, explicit confidence on the same items, a game without a teammate, reruns with other seeds, a milder prompt, and a decision-only game.

## Results

- Many models show statistically significant but weak use of confidence; the largest partial correlation with correctness across 17 models and four question sets is 0.3.
- With entropy as the reference, most models show significant correlations on both multiple-choice sets, approaching 0.5 for the best model.
- No significant differences by question type or answer format.
- Top token probability predicts correctness with AUC between .5 and .75, which limits baseline correctness as a proxy.
- On questions the models chose to answer in the game, their answers differed from baseline nearly 30% of the time.
- Nearly 30% of the surface cues that predicted delegation were positively correlated with accuracy.
- Only Sonnet 3.5 raised its team's accuracy, by 5.4 and 8.6 points on GPQA and SimpleQA.
- In the Second Chance Game, only GPT-4.1, GPT-4o and GPT-4o Mini show answer changes that no alternative strategy explains on both question sets, and models change answers at best half as often as they should.
- Explicit confidence tracks external cues of difficulty more closely than game decisions do; game decisions track entropy more closely.

## Related papers

- [Kadavath et al. 2022](/measuring-introspection/papers/kadavath-2022/) introduced calibration measurement in LLMs.
- [Moran & Whiting 2026](/measuring-introspection/papers/moran-2026/) study elicited confidence with a self-versus-other design.
- Cites [Binder et al. 2025](/measuring-introspection/papers/binder-2025/), [Betley et al. 2025](/measuring-introspection/papers/betley-2025/), [Plunkett et al. 2025](/measuring-introspection/papers/plunkett-2025/), [Lindsey 2025](/measuring-introspection/papers/lindsey-2025/), [Song, Hu & Mahowald 2025](/measuring-introspection/papers/song-hu-mahowald-2025/) and [Ji-An et al. 2025](/measuring-introspection/papers/ji-an-2025/).
