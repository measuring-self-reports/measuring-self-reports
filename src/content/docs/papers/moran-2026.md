---
title: Moran and Whiting 2026
description: Tests whether a model's binary confidence judgment carries information about its own item-level capability beyond a signal shared across 20 large language models.
---

**Source.** *LLMs Show No Signs of Individuated Metacognition* ([Moran & Whiting, 2026](https://arxiv.org/abs/2605.24299)), Pareto AI, arXiv preprint. Not peer reviewed. No code repository is linked; a query cache is described as part of an experimental release with no location given.

**Description.** Moran and Whiting ask whether a large language model knows which items *it in particular* can answer, beyond what any model's confidence says about the same items. They collect single yes/no confidence judgments from 20 API models on six benchmarks, decompose the models-by-items confidence matrix with tetrachoric factor analysis, and compare each pair of models on whether the more confident one is the one that does better.

## Measurement card

| Stage | What the paper reports |
|---|---|
| Measurand | Individuated metacognition: a model's ability to assess its own item-level capabilities in a way specific to that model, without exercising them, beyond a signal shared across models. Calibration is used in the discriminatory sense, whether confidence rank-orders outcomes. |
| Procedure | Six benchmarks with item counts and question/context splits; prospective and counterfactual probes; prompt templates for every benchmark and probe; temperature 0 for the main analysis and 20 samples at temperature 1 for a second analysis; about 180,000 API calls. Models that could not follow the output format were excluded from that benchmark. |
| Instrument and indication | A boolean in a JSON response that also has a free-text reasoning field. The reasoning text carries correctness information the boolean lacks, and reasoning-trained models often solve the math item inside the confidence prompt. |
| Measurement model | Each yes/no judgment is modeled as a thresholded latent normal variable with a model-specific threshold, which separates a model's yes-rate from the shared signal. Pairwise Kendall's τ-b is read against two null models. The latent-normality assumption is presumed rather than tested, and factor results on three benchmarks are treated as exploratory. |
| Calibration | The reference is each model's own graded correctness on the same items, scored by an LLM judge or symbolic equivalence. The restructured SciCode items were reviewed by a human. |
| Uncertainty | Benchmark, probe type, model pair, performance-gap threshold, filter window and temperature-1 resampling are varied. The pairwise signal on SQuAD and MMLU-Pro disappears when pairs are restricted to similar capability; on MathBench it persists and sits in reasoning versus non-reasoning pairs. |
| Comparability | Each model's confidence is compared with other models' confidence on the same items, with the cross-model consensus, and with a classifier on surface features. |
| Validity conditions | Six benchmarks in factual recall, knowledge, legal reasoning, mathematics and scientific code, under binary probes; the claim is limited to the domains tested. The states are ordinary responses to benchmark items. |

## Design

1. **Benchmarks.** SQuAD, MMLU-Pro, LegalBench, MathBench, SciCode and Omni-MATH, each item split into a minimal question and optional context.
2. **Probes.** A prospective probe asks, before the attempt, whether the model can answer without the context. A counterfactual probe asks, on items answered correctly with the context, whether it could have answered without it.
3. **Judgments.** One judgment per model and item at temperature 0, with correctness graded by an LLM judge or symbolic checks.
4. **Factor analysis.** Tetrachoric factor analysis of the confidence matrix, against a null that shuffles each model's judgments while keeping its yes-rate.
5. **Pairwise calibration.** Kendall's τ-b between confidence differences and performance differences for each model pair, recomputed on pairs within a maximum performance gap.
6. **Self versus population.** For one model per benchmark, 20 samples at temperature 1, compared as a predictor of correctness against the cross-model consensus and a classifier on surface features.
7. **Reasoning models.** MathBench pairs stratified by whether each model is reasoning-trained, with a detector for confidence responses that solve the problem inline.

## Results

- Pairwise calibration is small: τ = 0.037 on SQuAD and 0.025 on Omni-MATH. MathBench is higher (τ = 0.072), with some pairs above 0.3.
- Restricting to pairs of similar capability makes calibration vanish on SQuAD and MMLU-Pro; on MathBench it stays flat.
- The MathBench signal is concentrated in reasoning versus non-reasoning pairs (median τ = 0.129); pairs of the same kind are not significant.
- Confidence and performance factors align at r = 0.591 on SQuAD, falling to 0.230 on contested items.
- In all but one comparison, the population's confidence predicts a model's performance better than the model's own confidence. On LegalBench with Gemini Flash, the model's own AUC is 0.474, the consensus 0.532, and a classifier on the question and reasoning text 0.788.
- The paper finds no evidence of verbalized individuated metacognition in any domain tested.

## Related papers

- [Kadavath et al. 2022](/measuring-self-reports/papers/kadavath-2022/) found large models reasonably well calibrated in aggregate; this paper asks whether that calibration is specific to each model.
- [Binder et al. 2025](/measuring-self-reports/papers/binder-2025/) found fine-tuned models predicting themselves better than other models do.
- [Ackerman 2025](/measuring-self-reports/papers/ackerman-2025/) and [Blandfort & Pawar 2026](/measuring-self-reports/papers/blandfort-2026/) also compare a model's self-assessment with other sources.
