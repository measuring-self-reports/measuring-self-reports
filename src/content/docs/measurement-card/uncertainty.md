---
title: "6. Uncertainty"
description: Which settings an introspection experiment varied, which one changes its conclusion, and whether the result was repeated and reproduced.
---

| | |
|---|---|
| Stage | 6 of 8 |
| General question | Which settings were varied, and which one changes the conclusion? |
| Self-report question | Is the response threshold part of the budget? |
| Codes | varied: layer / strength / prompt / seed / model / judge / scoring rule; verdict: stable / flips (name the setting) / not tested; repeatability: repeated / single run; reproducibility: independent replication / none |
| Where it comes from | VIM 2.26 (measurement uncertainty), 2.20–2.25 (repeatability and reproducibility conditions), 2.27 (definitional uncertainty) |

VIM is the [International Vocabulary of Metrology](https://www.bipm.org/documents/20126/2071204/JCGM_200_2012.pdf).

## What the stage asks

1. **Which settings were varied?** Measurement uncertainty describes the spread of values that could be attributed to the measurand (VIM 2.26). In introspection experiments the largest contributions usually come from settings, not from sampling noise: injection layer and strength, prompt wording, model, judge, and the scoring rule.
2. **Which setting changes the conclusion?** This is the card's output. A change is a flip of sign, a change in which condition is higher, or a crossing of the threshold the paper uses to declare success. The stage names the setting and the value at which it happens.
3. **Repeatability.** Repeatability is precision under the same procedure, operators, system and conditions, over a short period (VIM 2.20–2.21). For a trained model, one training run is one object: seeds over trials repeat the reading, and seeds over training runs repeat the object.
4. **Reproducibility.** Reproducibility is precision under changed conditions: different places, operators and measuring systems (VIM 2.24–2.25). An independent group rerunning the paradigm on other models, with other code, tests it. The VIM asks that the conditions changed and unchanged be stated.
5. **Is the response threshold part of the budget?** A self-report has two thresholds: the model's own criterion for answering yes, and the experimenter's cutoff for counting a trial or model as a success. Either is a setting. If the conclusion moves when the threshold moves, the threshold belongs in the uncertainty.
6. **Is definitional uncertainty included?** Vagueness in the definition of the measurand is itself a component of uncertainty ([Tal, SEP §7.1](https://plato.stanford.edu/entries/measurement-science/); VIM 2.27). Seed-to-seed spread leaves it out.

### Codes

| Code | Meaning |
|---|---|
| varied | Each setting the paper varied and reported the result for. |
| stable | The conclusion holds at every value of every varied setting. |
| flips | The conclusion reverses or crosses the paper's threshold at a named value of a named setting. |
| not tested | One operating point, or variation without the conclusion reported per value. |
| repeated / single run | Whether the object (trained model, fitted vector) was produced more than once. |
| independent replication / none | Whether another group has rerun the measurement under changed conditions. |

## Examples from the papers

- **A computation setting flips the conclusion.** In [Atkinson, Plunkett & Bau 2026](/measuring-introspection/papers/atkinson-2026/), the difference between faithful and unfaithful adapters is 0.06 with an interval that includes zero at one integrated-gradients step, and 0.26 at seven.
- **A scoring rule flips the sign.** [Ferrara 2026](/measuring-introspection/papers/ferrara-2026/) reports that coding unparseable answers as zero, instead of dropping them, moves the pooled estimate from +0.0039 to −0.1217.
- **A prompt flips the direction across models.** In [Pearson-Vogel et al. 2026](/measuring-introspection/papers/pearson-vogel-2026/), a document about introspection raises detection in Qwen-32B and lowers it in Llama-70B, from 75.5% to 38.0%.
- **Layer depth changes what the reading means.** In [Fonseca Rivera 2025](/measuring-introspection/papers/fonseca-rivera-2025/), injection at 25% depth produces degenerate behavior, in one case a 100% false-positive rate: the model claims detection whether or not anything was injected.
- **The operating point is a maximum.** [Lindsey 2025](/measuring-introspection/papers/lindsey-2025/) reports the rate at the best injection strength and layer. A maximum over a grid is an upper estimate, and the spread over the grid is the uncertainty the headline leaves out.
- **Reproducibility across models.** [Singh et al. 2026](/measuring-introspection/papers/singh-2026/) rerun the injection paradigm on open models. Two of three replicate Lindsey's result; Qwen2.5-72B almost never reports an intervention in any condition.

## What the stage does not establish

A conclusion that survives every varied setting is stable over those settings. It says nothing about settings held fixed, and nothing about whether the stable quantity is the measurand. [Michel (2023)](https://philarchive.org/archive/MICCIC-3) gives a comparative standard: a procedure is accurate enough for a goal if a more accurate procedure would give the same outcome. Stage 6 varies the settings of one procedure; the comparison with a different procedure is stage 7.

## Nearest stage

[Comparability](/measuring-introspection/measurement-card/comparability/) (stage 7). Uncertainty varies the settings of one instrument and asks how far the result moves. Comparability changes the instrument's principle and asks whether the result agrees. A change of judge model is coded here; a change from self-report to a probe or a patching experiment is coded at stage 7.

## Sources

| Source | Principle |
|---|---|
| [JCGM 200:2012, *International Vocabulary of Metrology*](https://www.bipm.org/documents/20126/2071204/JCGM_200_2012.pdf), 2.20–2.27 | Uncertainty; repeatability; reproducibility; definitional uncertainty |
| [Tal, "Measurement in Science"](https://plato.stanford.edu/entries/measurement-science/), *Stanford Encyclopedia of Philosophy*, §7.1 | Definitional uncertainty |
| [Michel, "Confidence in consciousness research"](https://philarchive.org/archive/MICCIC-3), *WIREs Cognitive Science* (2023) | Accurate enough for a goal |
