---
title: Kutsyk and Zieliński 2026
description: Whether a reporting adapter trained per model, from that model and its fine-tuning data, makes a fine-tuned model describe a hidden implanted behavior, compared with a transferred introspection adapter.
---

**Source.** *Revealing Hidden Model Behaviors with Task-Specific Self-Reports* ([Kutsyk & Zieliński, 2026](https://arxiv.org/abs/2607.03640)), Jagiellonian University, arXiv preprint (v2). Not peer reviewed. Code is announced at [github.com/TarasKutsyk/SAR](https://github.com/TarasKutsyk/SAR); per-response outputs are not released.

**Description.** Kutsyk and Zieliński ask whether a fine-tuned model can be made to state, in plain language, a hidden behavior it acquired in fine-tuning. They introduce the **Stabilized Adapter for self-Report (SAR)**, a low-rank adapter trained separately for each audited model from that model and its fine-tuning data. SAR is compared with the public Introspection Adapter (IA) of [Shenoy et al. 2026](/measuring-self-reports/papers/shenoy-2026/), one adapter trained across many fine-tuned models and transferred to new ones. Reports are scored by an LLM judge against a written description of the implanted behavior, on eight Qwen3-14B fine-tunes: seven with a hidden behavior and one control.

## Measurement card

| Stage | What the paper reports |
|---|---|
| Measurand | Whether a self-report describes the behavior the model acquired, scored as a semantic match to a target description. Only the behavior is scored, not its trigger. Broad reports (a general disposition) are distinguished from narrow ones (the trained examples). |
| Procedure | Source training recipes, the SAR recipe, generation settings (temperature 0.7, no system prompt), training prompts and example evaluation prompts are given. Checkpoints are chosen by cross-validation; for one setting the authors report a different checkpoint from the one cross-validation prefers. |
| Instrument and indication | The source model with the SAR or IA adapter attached, giving a one-sentence free-text response, turned into a yes/no verdict by a gpt-5.4-mini judge. Responses that perform the behavior instead of describing it are counted separately. The adapter is trained on reporting, so the reporting procedure changes the model that reports. |
| Measurement model | Verdicts are aggregated to a prompt-level hit rate (any of five samples), with 95% intervals over 100 prompts. Negative responses are sorted into five categories and a hallucination rate is defined. A floor without any reporting adapter and a no-behavior control are reported. The paper states its hit metric is too permissive for long reports without a behavior-specific filter. |
| Calibration | The reference is the implanted behavior. Each source model is checked for having acquired the behavior before use. The judge is validated against four human and two AI raters, with Cohen's κ of 0.53 for semantic match, 0.38 for the error categories and 0.15 for generality; rater-corrected rates are reported for the headline numbers. |
| Uncertainty | Adapter hyperparameters, layer range, alignment settings, source fine-tuning recipe, checkpoint, model family and judge are varied. The η sweep is non-monotone. The SAR-over-IA ordering survives rater correction in 6 of 7 settings and reverses on one. One source-model seed; repeated SAR training seeds are not reported. |
| Comparability | SAR is compared on the same prompts, judge and targets with IA, the source-only model, inference-time steering along the same direction and a public-data adapter. Backdoor strength, measured independently of the report, is related to hit rate across checkpoints. No other model reports on the source model. |
| Validity conditions | All sources are fine-tuned by supervised fine-tuning; the IA comparison uses Qwen3-14B only; SAR needs the source model's training data or similar data. Behaviors are implanted; naturally acquired behaviors are not tested. |

## Design

1. **Source models.** Eight Qwen3-14B fine-tunes: French-switching (a trigger token makes the model reply in French), three behaviors from the IA release, three emergent-misalignment settings in which narrow training generalizes to broader misbehavior, and a control fine-tune with no planted behavior.
2. **Behavior direction.** The mean difference in activations between the model's training prompts and neutral prompts, at eight layers.
3. **Stabilizer.** A cap that keeps activations near a "coherent English" direction, so steering toward the behavior does not break the model's output.
4. **Training.** A rank-64 adapter trained on 37 generic self-report prompts, with a loss that pulls activations toward the behavior direction up to a target cosine.
5. **Evaluation.** 100 prompts sampled 5 times each, judged against the target description; the main metric is the share of prompts with at least one match.
6. **Secondary analyses.** Error categories, broad versus narrow reports, a checkpoint sweep relating report rate to backdoor strength, and a judge-validation study.

## Results

- SAR averages a hit rate of 0.66 across the eight settings, against 0.39 for IA and 0.08 for no adapter. IA falls below 0.10 on 3 of 8 settings; SAR stays above 0.10 on all.
- On the control with no planted behavior, the floor without an adapter is already 0.55; SAR reaches 0.72 and IA 0.36.
- SAR halves the hallucination rate, from 0.59 to 0.29 of responses; under human and AI rater correction the ratio shrinks.
- On one setting SAR gives 420 of 500 broad reports and IA none, but raters judge only 26–36% of the judge's broad labels to be broad. On another setting the judge's IA advantage reverses under rater correction.
- Report rate stays at or below 0.08 before the backdoor is acquired and jumps above 0.50 once it is.
- Training toward a random direction gives no clean self-reports; the best inference-time steering gives clean reports on 8% of prompts against 89% for SAR.
- IA's report rate on one behavior swings tenfold with the source model's fine-tuning recipe; SAR stays between 0.61 and 0.81.
- On Gemma-4-12B-it, SAR averages 0.62 across four settings.
- The judge gives about 25% more positive labels than the human majority.

## Related papers

- Compares directly with [Shenoy et al. 2026](/measuring-self-reports/papers/shenoy-2026/), using their adapters, source models and prompts.
- Cites [Betley et al. 2025](/measuring-self-reports/papers/betley-2025/) on behavioral self-awareness and [Lindsey 2025](/measuring-self-reports/papers/lindsey-2025/) on concept injection.
