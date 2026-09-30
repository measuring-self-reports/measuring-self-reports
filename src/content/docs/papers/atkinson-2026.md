---
title: Atkinson, Plunkett & Bau 2026
description: Tests whether faithful and unfaithful self-reporting models can be told apart by whether decision-making and self-report rely on the same adapter weights.
---

**Source.** *Identifying Introspection From the Inside* ([Atkinson, Plunkett & Bau, 2026](https://baulab.info/publications.html)), COLM 2026. Code: the repository linked in the paper ([github.com/diatkinson/identifying-introspection-from-the-inside](https://github.com/diatkinson/identifying-introspection-from-the-inside)) had no commits on 29 September 2026.

**Description.** Atkinson, Plunkett and Bau move the setting of [Plunkett et al. 2025](/measuring-self-reports/papers/plunkett-2025/) to open Qwen3 models trained with low-rank adapters on the decision task only. In Qwen3-32B, accurate self-report of the trained preferences appears later in training than accurate decisions, which gives a pair of checkpoints with similar decisions and different self-report accuracy. Layer ablations and layer freezing locate where preference information sits, and attribution patching asks whether faithful self-reporters use the same adapter weights for deciding and for reporting.

## Measurement card

| Stage | What the paper reports |
|---|---|
| Measurand | Two properties are separated: **faithfulness**, that the model's claims about itself are accurate, and **grounding**, that they are caused by the process they describe. Faithfulness is the correlation between reported and behaviorally inferred preference weights; the proposed signature of grounding is attribution similarity between the decision and report tasks. |
| Procedure | Prompts, adapter settings, optimizer, learning rate, warmup and a fixed seed are given. The 32B adapter comes from a shallow tuning sweep over 15 random draws, chosen on an average of decision performance and faithfulness after 2,000 steps. |
| Instrument and indication | Decisions are one generated token, read as the probabilities of "A" and "B". Reports are a JSON object of five weights, with parse failures excluded. Decisions and reports are taken in separate context windows. |
| Measurement model | Inferred preferences come from a regularized logistic regression on the choice probabilities. Attribution similarity is the cosine between attribution vectors for the two tasks, and the causal check uses the fraction of KL divergence recovered. No response-bias treatment of reports. |
| Calibration | The standards are the randomly generated target preferences and the behaviorally inferred ones. The attribution signature is compared against behavioral faithfulness and checked by cross-task causal patching against a random baseline. |
| Uncertainty | Model size, model family (Gemma-4), layers ablated or frozen, checkpoint, integration steps, selection filters and reasoning mode are varied. The attribution gap is 0.06 with an interval including zero at one integration step, and 0.26 at seven. The paper does not tune hyperparameters comprehensively. |
| Comparability | Behavioral faithfulness, layer ablation, layer freezing, attribution similarity and causal patching approach one question by different routes. No other model reports on a model's preferences. |
| Validity conditions | The task is linear, five-dimensional and constructed; whether the method generalizes to complex, unverifiable reports is left open. The method separates groups, not individual models, and studies adapters, not full models. |

## Design

1. **Decision training.** Rank-8 adapters on every linear layer, trained on the decision task for 100 characters, each with five random preference weights. The self-report task is never trained.
2. **Metrics.** Decision performance is the correlation between inferred and target preferences; faithfulness is the correlation between inferred preferences and the mean self-report over 24 prompts.
3. **Contrast pair.** Checkpoints 1,000 and 3,000 of one Qwen3-32B adapter.
4. **Localization.** Sequential ablation of adapter layers on both checkpoints, and layer freezing on Qwen3-14B.
5. **Adapter pairs.** Small single-character adapters trained on top of each frozen checkpoint with identical data and initialization within a pair; 32 pairs pass filters on faithfulness, valid JSON and decision performance.
6. **Attribution similarity.** Attribution patching with integrated gradients over the adapter contributions, and the cosine similarity between decision and report attributions.
7. **Cross-task patching.** The most-attributed components for one task are activated alone and evaluated on the other task, against randomly chosen components.
8. **Checks.** Gemma-4 replication, filters removed, number of integration steps, reasoning mode, and a within-backbone analysis across characters.

## Results

- At checkpoint 3,000, decision performance has risen modestly to 0.92 and faithfulness has jumped to 0.83, from about 0.25 at checkpoint 1,000, with no introspection training.
- The 4B and 8B models end with negative faithfulness despite strong decisions.
- The faithful checkpoint responds to layer ablations 5–6 layers earlier than the unfaithful one.
- Faithful adapters have mean attribution similarity 0.33 against 0.08 for unfaithful ones (difference 95% interval 0.16–0.36).
- For a faithful adapter, a given fraction of KL divergence is recovered with 8–12 times fewer components than for an unfaithful one.
- With filters removed (10 pairs) the difference is 0.21; within one backbone across 100 characters, the correlation is r = 0.197.
- Gemma-4 does not reproduce the delay seen in Qwen3-32B.
- The paper uses "introspection" for an accurate report causally grounded in privileged internals, and allows that a faithful adapter with low attribution similarity may be a correct confabulator.

## Related papers

- Adopts the setting of [Plunkett et al. 2025](/measuring-self-reports/papers/plunkett-2025/), and cites [Binder et al. 2025](/measuring-self-reports/papers/binder-2025/), [Betley et al. 2025](/measuring-self-reports/papers/betley-2025/) and [Li et al. 2025](/measuring-self-reports/papers/li-2025/) as behavioral evidence for self-knowledge.
- Cites [Lindsey 2025](/measuring-self-reports/papers/lindsey-2025/), [Hahami et al. 2025](/measuring-self-reports/papers/hahami-2025/) and [Pearson-Vogel et al. 2026](/measuring-self-reports/papers/pearson-vogel-2026/) as injection studies.
- Responds to [Song, Hu & Mahowald 2025](/measuring-self-reports/papers/song-hu-mahowald-2025/): behavioral accuracy alone often cannot establish introspection.
