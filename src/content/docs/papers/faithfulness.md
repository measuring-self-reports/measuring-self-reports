---
title: Chain-of-Thought Faithfulness
description: Experiments on whether a model's chain of thought reflects the computation behind its answer, and on whether faithfulness metrics measure faithfulness.
---

A chain of thought (CoT) is a model's written account of how it reached an answer. It is a self-report about a process, and the question it raises is the one every page on this site asks: does the report track the thing it describes? A CoT is **faithful** if it reflects the computation that actually produced the answer. That computation is not observable, so every faithfulness metric measures something in its place.

## What faithfulness metrics measure

The literature has found repeatedly that faithfulness metrics measure a related but different quantity:

1. **Self-consistency, not faithfulness.** [Parcalabescu & Frank (2023)](https://arxiv.org/abs/2311.07466) argue that the standard tests measure whether a model's outputs are consistent with each other, not whether the explanation reflects the model's inner workings.
2. **Accuracy.** [Bentham et al. (2024)](https://arxiv.org/abs/2402.14897) reproduce the scaling trend of a popular metric, but after correcting for the model's bias toward certain answers, the corrected metric correlates strongly with accuracy (R² = 0.74).
3. **The classifier.** [Young (2026)](https://arxiv.org/abs/2603.20172) scores the same 10,276 reasoning traces with three classifiers for whether the CoT acknowledges a hint, and gets overall faithfulness rates of 74.4%, 82.6% and 69.7%. The number depends on the instrument.
4. **Near chance against ground truth.** [Gur-Arieh, Marasović & Geva (2026)](https://arxiv.org/abs/2605.25052) build BONAFIDE, tasks whose outputs reveal which intermediate steps must have produced them, with 3,066 labeled CoTs. Most existing metrics perform near chance; the best reaches 0.70 AUROC at the CoT level and 0.59 at the step level, and neither transfers across settings.

In the card's terms, these are findings at the [measurand](/measuring-self-reports/measurement-card/measurand/) and [calibration](/measuring-self-reports/measurement-card/calibration/) stages: the metrics lack a standard, and without one they settle on a neighboring quantity. The same pattern appears for feature-attribution explanations, where faithfulness metrics disagree with each other ([Barr et al. 2023](https://arxiv.org/abs/2311.07763); [Chan et al. 2022](https://arxiv.org/abs/2204.05514)).

## Papers

### Hints and biasing inputs

The input carries a cue that changes the answer, and the test is whether the chain of thought mentions it.

| Paper | What it tests |
|---|---|
| [Turpin et al. 2023](https://arxiv.org/abs/2305.04388) | Whether CoT explanations mention biasing features of the input that change the model's answer; they often do not |
| [Chen et al. 2025](https://arxiv.org/abs/2505.05410) | Whether reasoning models' CoTs reveal hints they use; reveal rates are often below 20% |

### Interventions on the chain of thought

The chain of thought is edited, truncated or paraphrased, and the test is how much the answer depends on it.

| Paper | What it tests |
|---|---|
| [Lanham et al. 2023](https://arxiv.org/abs/2307.13702) | How much answers depend on the CoT, by adding mistakes to it, truncating it or paraphrasing it |
| [Bentham et al. 2024](https://arxiv.org/abs/2402.14897) | Whether a CoT-dependence metric's scaling trends survive correction for answer bias |

### Counterfactual tests of explanations

Explanations are judged by whether they predict how the model responds to edited inputs.

| Paper | What it tests |
|---|---|
| [Atanasova et al. 2023](https://arxiv.org/abs/2305.18029) | Tests of natural-language explanations by counterfactual input edits and by reconstructing inputs from explanations |
| [Huang et al. 2023](https://arxiv.org/abs/2310.11207) | Self-explanations for sentiment analysis compared with feature attribution methods |
| [Siegel et al. 2024](https://arxiv.org/abs/2404.03189) | A metric counting both how much an input feature shifts predictions and whether explanations mention it |
| [Karvonen et al. 2026](https://arxiv.org/abs/2608.16747) | Explanations judged by whether they predict model behavior on counterfactual inputs |
| [Le et al. 2026](https://arxiv.org/abs/2609.30849) | Self-consistency of explanations under perturbations of measured strength |

### Evaluating the metrics

Whether faithfulness metrics measure faithfulness, agree with each other, or depend on the classifier.

| Paper | What it tests |
|---|---|
| [Parcalabescu & Frank 2023](https://arxiv.org/abs/2311.07466) | Whether faithfulness tests measure faithfulness or self-consistency |
| [Parcalabescu & Frank 2025](https://arxiv.org/abs/2404.18624) | How self-consistent vision-and-language models' explanations are, and how much they use each modality |
| [Zaman & Srivastava 2025](https://arxiv.org/abs/2502.18848) | A testbed for evaluating whether faithfulness metrics separate faithful from unfaithful explanations |
| [Shen et al. 2025](https://arxiv.org/abs/2510.04040) | FaithCoT-Bench: detecting whether a specific reasoning trace is unfaithful |
| [Young 2026](https://arxiv.org/abs/2603.20172) | How much the choice of classifier changes measured faithfulness rates |
| [Gur-Arieh, Marasović & Geva 2026](https://arxiv.org/abs/2605.25052) | BONAFIDE: faithfulness metrics evaluated against ground-truth labels |

### Mechanistic measures

Faithfulness measured inside the model, through activation patching or information flow.

| Paper | What it tests |
|---|---|
| [Yeo et al. 2024](https://arxiv.org/abs/2410.14155) | Faithfulness of explanations measured with activation patching |
| [Jia et al. 2026](https://arxiv.org/abs/2605.24286) | Faithfulness as information flow through the CoT, with sufficiency, completeness and necessity metrics |

Full paper pages for this family are in progress.
