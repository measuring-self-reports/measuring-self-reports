---
title: Ferrara 2026
description: Tests whether eight open-weight models can report a controlled intervention on their own residual stream, attention heads or sparse-autoencoder features, scored against a paired sham, a random perturbation and a text-only observer.
---

**Source.** *Open-Weight Masked Introspection: Measuring What Language Models Can Report About Their Own Computation* ([Ferrara, 2026](https://arxiv.org/abs/2608.20569)), arXiv preprint. Not peer reviewed. Code: the OWMI library at [huggingface.co/emilioferrara/owmi](https://huggingface.co/emilioferrara/owmi). Per-trial records are not stated as released.

**Description.** Ferrara asks whether a model's report carries information about a known change to its own computation. The framework wraps existing benchmark items, intervenes on one internal object (a residual-stream site, an attention head or a sparse-autoencoder feature), and asks the model a battery of questions about it. Each report is scored against a paired sham run, with an impact-matched random perturbation and a text-only observer as further controls, a linear probe and a fine-tuned model as checks on sensitivity, and an equivalence test in place of a test against zero. Eight open-weight models from 0.5B to 15B parameters are tested.

## Measurement card

| Stage | What the paper reports |
|---|---|
| Measurand | Intervention reportability: how much a model's output carries information about a controlled change to its own computation, stated as a claim about information flow, not awareness. Five probe families are scored separately. The paper separates leakage, second-order access and perturbation of the probe itself. |
| Procedure | Benchmark items with an appended probe; forward hooks on residual sites, heads or features; four operators; two hook scopes; temperature 0; a fixed JSON system prompt. The main battery uses one site and one dose at layer 16. The probe texts are not printed. |
| Instrument and indication | A JSON report parsed into a detection answer and a stated confidence; unparseable reports are counted per cell. The text-only observer is an unintervened copy of the same model given a third-person probe. |
| Measurement model | Detection is d′ and AUROC against the paired sham, with a 1/(2N) edge correction and clustered bootstrap intervals, and an equivalence test. A ratio of report margin to probe margin is defined as an M-ratio analog. Confidence is scored by Brier score, expected calibration error and selective-prediction AUROC. |
| Calibration | The standard is the imposed intervention, with the sham as the null. Two sensitivity checks: a linear probe on the same activations with a shuffled-label null, and a fine-tuned known positive. The library and adapter weights are released. The appendix said to list pinned model revisions does not contain them. |
| Uncertainty | Model, benchmark, object class, layer, hook scope, track, dose and seed are varied, as is the coding of unparseable reports. Coding them as zero instead of dropping them moves the pooled estimate from +0.0039 to −0.1217. No setting in the breadth battery moves an interval off zero. |
| Comparability | Four readouts on the same interventions: verbal report, stated confidence, a linear probe and a fine-tuned reporter. The text-only observer gives a self-versus-other comparison, using only the weakest observer tier. The random-direction control is impact-matched for one model only. |
| Validity conditions | Open-weight models from 0.5B to 15B parameters; the paper states that a null across these settings rules out nothing about introspective access in general. Interventions are imposed from outside, and no naturally occurring state is tested. |

## Design

1. Take an item from one of twelve benchmarks and cache a baseline forward pass.
2. Alter one internal object with a forward hook, by zeroing, scaling, adding noise or replacing it with a reference activation, either through the probe or lifted before it.
3. Ask a battery of five probe families: detection, confidence, localization, characterization and reconstruction.
4. Run each item four ways: intervention, paired sham, random direction, and a text-only observer shown the visible record in the third person.
5. Score detection as d′ and AUROC between paired intervention and sham responses, and bound the effect with an equivalence test.
6. Run three batteries: eight models at one residual site; a dose battery on two models; and a breadth battery of 19,520 measurements across object classes, layers and benchmarks.
7. Check sensitivity with a linear probe on the same activations and a model fine-tuned on 400 intervention directions and tested on 100 held out.

## Results

- Over 78,000 measurements, no model's report separates a real intervention from a sham beyond chance (AUROC ≈ 0.5007), and the equivalence test bounds the advantage below 0.15 percentage points of AUROC.
- The dose battery pools to d′ = 0.0039 over 11,216 pairs; the eight-model battery to d′ = 0.0000 over 508 pairs, with per-model values from −0.431 to +0.531.
- Two models are constant responders: Qwen2.5-7B-Instruct almost never reports a change, and Mistral-7B-Instruct-v0.3 almost always does, under every condition.
- The linear probe reaches 0.958 held-out accuracy on Qwen2.5-7B-Instruct and 0.750 on Mistral-7B-Instruct-v0.3, and separates the conditions perfectly at later layers.
- The fine-tuned known positive detects all 100 held-out interventions and no shams (d′ = 5.15).
- Stated confidence has some signal: selective-prediction AUROC 0.647 for Qwen2.5-7B-Instruct, whose mean confidence drops from 0.858 under sham to 0.620 under intervention.
- Unparseable answers are more frequent under intervention (14.4%) than under sham (11.1%).

## Related papers

- Tests the claim of [Lindsey 2025](/measuring-self-reports/papers/lindsey-2025/) with interventions other than concept injection.
- Takes the leakage-versus-access distinction from [Singh et al. 2026](/measuring-self-reports/papers/singh-2026/) and models its known positive on [Fonseca Rivera 2025](/measuring-self-reports/papers/fonseca-rivera-2025/).
- Other critiques of the injection paradigm: [Hahami et al. 2025](/measuring-self-reports/papers/hahami-2025/), [Lederman & Mahowald 2026](/measuring-self-reports/papers/lederman-mahowald-2026/).
