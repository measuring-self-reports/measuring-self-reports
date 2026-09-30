---
title: Interpretability as Instruments
description: "Interpretability methods treated as instruments for reading model internals: what each reads, what its indication is, what it is checked against, and how it enters an introspection experiment."
---

Every introspection experiment on a language model uses at least one instrument besides the model's report: an injected vector, a linear probe, an activation patch, a sparse autoencoder feature, or a second model that reads activations and describes them. These are interpretability methods, and in a measurement they play the part of instruments. Each rests on a principle, produces an indication, and is only as trustworthy as its calibration. When a paper checks a self-report against one of them, the check inherits that instrument's own open questions.

## Instrument families

| Instrument | What it reads | Indication | Usual standard |
|---|---|---|---|
| Linear probe | A direction in the activations that separates labeled examples | A score or class | Held-out labeled data |
| Activation patching and circuit discovery | The effect on output of swapping or ablating a component | A change in output or a set of components | The model's own behavior under intervention |
| Sparse autoencoder and other featurizers | Activations rewritten as sparse, labeled features | Feature activations and their labels | Reconstruction; labels from automated description |
| Verbalizer (Patchscopes, activation oracles) | Activations fed to a second model, or the same one, that describes them in words | Free text | Questions with known answers |
| Self-report | The model's own answer about itself | Free text, a choice or a probability | Injected states, trained targets or graded correctness |

## Readable is not the same as used

A probe can read a concept from the activations without the model using that information. [Tiwari et al. (2026)](https://arxiv.org/abs/2609.18080) decompose a truth probe on Gemma-2-9B-Instruct into sparse autoencoder features and rank them two ways: by alignment with the probe, and by how much the model's behavior depends on them. The rankings overlap only weakly (about 12%, Spearman ρ = 0.10). Ablating features the probe shares with the model flips the model's output up to 27% of the time, against 6% for features only the probe uses and 1% for random ones; the probe-only features mainly change the probe's own reading. The geometry of a probe's weights alone does not identify the features the model uses.

This matters when a probe is used as the standard for a self-report. A probe that reads a state tells us the information is present. It does not tell us the report could or should have used it.

## Whose knowledge is in the description

Verbalizers translate activations into language using a second language model. [Li et al. (2025)](https://arxiv.org/abs/2509.13316) ask whether they convey privileged information about the target model or only information about the input. They find that the popular benchmarks can be passed without access to the target's internals at all, and that in controlled experiments the descriptions often reflect the verbalizer's own knowledge rather than the target's. The instrument contributes content to its indication, in the same way an LLM judge can.

[Patchscopes](https://arxiv.org/abs/2401.06102) (Ghandeharioun et al. 2024) frame many earlier methods, such as projecting activations into the vocabulary, as special cases of patching a representation into a model and letting it describe it. [Activation oracles](https://arxiv.org/abs/2512.15674) (Karvonen et al. 2025) train models to answer arbitrary questions about activations. They recover information fine-tuned into a model that does not appear in the input text, and the best ones match or exceed white-box baselines on four downstream tasks. The site's [trained reporter](/measuring-introspection/papers/#trained-reporters) papers use the same idea with the target model as its own verbalizer.

## Shared standards

A field with many instruments and no shared standard risks what [Tal](/measuring-introspection/foundations/robustness/#coherent-calibration-and-islands) calls islands: results that reproduce within one group's setup and cannot be compared across setups. Benchmarks for interpretability methods are attempts at shared standards.

- [MIB](https://arxiv.org/abs/2504.13151) (Mueller et al. 2025) compares methods on two tracks across four tasks and five models: locating the components that carry a task, and aligning learned features with a known causal variable. Attribution and mask-optimization methods do best on the first; on the second, supervised distributed alignment search does best, and sparse autoencoder features do no better than individual neurons.
- [RAVEL](https://arxiv.org/abs/2402.17700) (Huang et al. 2024) tests whether methods can separate the attributes that one set of neurons represents, such as a city's country and its continent.

## Instruments in introspection experiments

1. **The standard is often another instrument.** An injected vector, a probe or a verbalizer serves as the reference for the self-report. Its calibration is part of the self-report's calibration, and the card records it at the [calibration](/measuring-introspection/measurement-card/calibration/) stage.
2. **Shared inputs mean shared principle.** A self-report and a probe read from the same activations, with the same prompt, can agree because they share an input. The card codes this as a [shared principle](/measuring-introspection/glossary/#shared-principle).
3. **Decodable is not reportable.** A probe that reads the injected state at 0.958 accuracy while the report is at chance, as in [Ferrara 2026](/measuring-introspection/papers/ferrara-2026/), shows the information is present and not reported. It says nothing about whether the model could report it.
4. **A verbalizer is a model reporting on a model.** When the verbalizer is the target itself, as in the trained reporter papers, it is a self-report with a trained component, and the question of whose knowledge the description reflects applies to it.

## Limits of the analogy

1. **No independent substrate.** A thermometer and a manometer rest on different physics. Every interpretability instrument reads the same network, often at the same layers, so independence between instruments has to be argued in each case.
2. **Standards are benchmarks, not references.** A benchmark fixes tasks and scoring. It does not supply a reference value for a model's internal state, which no one has.

## Card stages

| Stage | What interpretability instruments supply |
|---|---|
| [Instrument and indication](/measuring-introspection/measurement-card/instrument/) | The instruments used besides the report, and what each reads |
| [Calibration](/measuring-introspection/measurement-card/calibration/) | Instruments as standards, and their own calibration |
| [Comparability](/measuring-introspection/measurement-card/comparability/) | Shared inputs between the report and the instrument; benchmarks as shared standards |

## Sources

| Source | Year | Principle |
|---|---|---|
| [Tiwari et al., "Decodability is not causality"](https://arxiv.org/abs/2609.18080) | 2026 | A probe's readable features versus the features the model uses |
| [Li et al., "Do activation verbalization methods convey privileged information?"](https://arxiv.org/abs/2509.13316) | 2025 | Verbalizer knowledge versus target knowledge |
| [Ghandeharioun et al., "Patchscopes"](https://arxiv.org/abs/2401.06102) | 2024 | A framework for models describing their representations |
| [Karvonen et al., "Activation oracles"](https://arxiv.org/abs/2512.15674) | 2025 | Trained general-purpose activation explainers |
| [Mueller et al., "MIB: A mechanistic interpretability benchmark"](https://arxiv.org/abs/2504.13151) | 2025 | Shared standards for circuit and causal-variable localization |
| [Huang et al., "RAVEL"](https://arxiv.org/abs/2402.17700) | 2024 | Disentangling attributes in shared representations |
