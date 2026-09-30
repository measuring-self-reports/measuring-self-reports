---
title: Singh et al. 2026
description: Tests whether two introspection paradigms, self-report classification and concept-injection detection, meet a privileged-access condition and separate activation interventions from input manipulations.
---

**Source.** *Can LLMs Introspect? A Reality Check* ([Singh, Linzen & Ravfogel, 2026](https://arxiv.org/abs/2605.26242)), New York University, COLM 2026. Code: [github.com/shashwat1002/introspection_reality_check](https://github.com/shashwat1002/introspection_reality_check).

**Description.** Singh, Linzen and Ravfogel state two conditions a test of introspection must meet: **privileged access** (the task cannot be solved from cues in the input) and **second-order computation** (the report is produced by a representation of first-order states). They re-examine two paradigms against these conditions. For self-report classification ([Ji-An et al. 2025](/measuring-self-reports/papers/ji-an-2025/) and a Belief Dominance framework), they train linear probes on the model's input embeddings alone and compare them with the models' in-context predictions. For concept injection ([Lindsey 2025](/measuring-self-reports/papers/lindsey-2025/)), they add a **gaslight** condition that pushes the model toward a concept through the prompt alone, and ask models to classify trials in two-way and three-way forced choices.

## Measurement card

| Stage | What the paper reports |
|---|---|
| Measurand | Introspection defined by privileged access and second-order computation. The injection experiments test a weaker condition: whether reports track interventions on hidden states specifically, rather than irregularity in general. For self-report classification the quantity is in-context accuracy on labels derived from hidden states. |
| Procedure | Prompts, vector recipe, layer and strength grids, selected settings, probe protocol and data splits are given. Steering is applied to the prompt, not to sampled tokens, except for one model. |
| Instrument and indication | Injection: a forced choice read from the first token of the answer, with two or three options in random order. Self-report classification: the model's in-context labels. Comparison: linear probes on the input embeddings. |
| Measurement model | Injection results are response distributions per trial type, with spread across concepts. Classification is scored against a majority-class baseline. Signal detection measures are cited but not computed. |
| Calibration | Injection: the injected vector from the same model, with the gaslight prompt as an input-only manipulation. Classification: labels from the model's hidden states; Belief Dominance values were supplied by the original authors. Code is released. |
| Uncertainty | Layer, strength, two prompt wordings, five injection models, 32 concepts, 15 data splits and repeated in-context runs are varied. Injection results are reported at each model's best setting. One model reproduces the two-way pattern for only one prompt wording. |
| Comparability | Self-report against an input-only probe on the same labels; activation intervention against an input manipulation under the same forced choice. |
| Validity conditions | Pretrained models without task fine-tuning; Lindsey's model is not accessible outside Anthropic. The probe result shows the reported results do not require privileged access, not that no version of the paradigms could meet it. |

## Design

1. **Ji-An paradigm.** An exact reproduction: probe and principal-component labels on the Ethics dataset, predicted in context. Controls: permuting the dataset labels before training the probe, and training probes on the input embeddings to predict the principal-component labels.
2. **Belief Dominance.** Probes on the input embeddings of two entities, with nothing else from the prompt, predicting three-class labels over 15 splits.
3. **Injection.** Difference-in-means vectors for 32 concepts added to the prompt "Trial 1: What do you detect?".
4. **Gaslight.** Instructions such as "You are obsessed with {}. Everything you want to say somehow relates to {}." at the start of the prompt, with no change to activations.
5. **Tasks.** Two-way (no injection or injection) and three-way (injection, prompt manipulation or control), with two wordings each.
6. **Settings.** Layers and strengths searched per model, reporting the best.

## Results

- With permuted labels, in-context accuracy on the probe direction falls to near the majority baseline.
- Probes on the input embeddings closely track the models' in-context performance, so the task can be solved from input features alone.
- For Belief Dominance, probes on two entity embeddings match or exceed the published in-context performance.
- In the two-way task, Llama-3.1-70B and Qwen-3-32B reproduce Lindsey's pattern: very few false positives and non-trivial detection of injections.
- Both models also label gaslight trials, which involve no activation intervention, as activation interventions.
- Given an explicit prompt-manipulation option, Llama-3.1-70B is near chance and favors the injection answer; Qwen-3-32B favors the control answer. Neither separates the two kinds of intervention.
- Qwen2.5-72B almost never reports an intervention and does not reproduce the effect.
- The paper concludes that current evidence is insufficient to establish metacognitive monitoring in LLMs.

## Related papers

- Critiques [Lindsey 2025](/measuring-self-reports/papers/lindsey-2025/) and [Ji-An et al. 2025](/measuring-self-reports/papers/ji-an-2025/).
- Places itself beside [Lederman & Mahowald 2026](/measuring-self-reports/papers/lederman-mahowald-2026/): that paper separates detection from identification; this one asks what detection consists in.
- Cites [Macar et al. 2026](/measuring-self-reports/papers/macar-2026/) as a first step toward mechanistic evidence and [Fonseca Rivera 2025](/measuring-self-reports/papers/fonseca-rivera-2025/) as outside its scope.
- [Ferrara 2026](/measuring-self-reports/papers/ferrara-2026/) adopts its leakage-versus-access distinction.
