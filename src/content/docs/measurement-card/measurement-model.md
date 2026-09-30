---
title: "4. Measurement Model"
description: How an introspection experiment turns a report into a claim about an internal state, and whether response bias and criterion content are handled on the way.
---

| | |
|---|---|
| Stage | 4 of 8 |
| General question | How does the reading become the claim? |
| Self-report question | Is response bias separated from sensitivity? |
| Codes | model: stated / partial / absent; bias: none / checked / corrected / bias-free statistic; criterion content: matched / permissive |
| Where it comes from | VIM 2.48 (measurement model) and 2.53 (correction); Tal's model-based account; signal detection theory as Michel applies it to reports (Michel 2022, 2023) |

VIM is the [International Vocabulary of Metrology](https://www.bipm.org/documents/20126/2071204/JCGM_200_2012.pdf). SDT is signal detection theory.

## What the stage asks

1. **Is the rule from indication to claim written down?** The VIM's measurement model is the mathematical relation among all quantities involved in a measurement (VIM 2.48). [Tal](/measuring-self-reports/foundations/tal/) explains why it is needed: the step from an instrument's reading to a claim about the object depends on assumptions about the object, the instrument, the environment and the calibration. For a detection experiment, the model says how a rate of yes answers becomes a claim about detection.
2. **Are known systematic effects corrected?** A correction compensates for an estimated systematic effect (VIM 2.53). The most common systematic effect in self-report is a general tendency to answer yes.
3. **Is response bias separated from sensitivity?** Under SDT, a report depends on both the evidence and the reporter's criterion for saying yes ([Michel 2023](https://philpapers.org/archive/MICTOA-2.pdf)). A hit rate alone mixes the two. Separating them needs control trials and a statistic that uses both: hit rate minus false-alarm rate, d′ with criterion c, or AUROC (area under the receiver operating characteristic curve). For reports about the model's own confidence, meta-d′ compares metacognitive sensitivity with first-order sensitivity. See [signal detection](/measuring-self-reports/foundations/signal-detection/).
4. **Does the criterion content match the claim?** Criterion content is the set of features a decision is based on ([Michel 2022](https://philpapers.org/archive/MICHNT.pdf)). A report that something unusual happened has permissive criterion content; a claim that the model detected an intervention on its activations needs restrictive content. Reading the first as the second is what Michel calls the criterion content fallacy.
5. **Do exclusions and filters change the denominator?** Conditioning on coherent responses, dropping unparseable ones, or keeping only strengths where detection is high changes what the rate is a rate of.

### Codes

| Code | Meaning |
|---|---|
| model stated | The rule from indication to reported value is given as a formula or procedure. |
| model partial | Some steps are given; aggregation, exclusions or thresholds are not. |
| model absent | A rate or score is reported with no stated rule. |
| bias none | No control trials or bias analysis. |
| bias checked | Control trials or a false-positive rate are reported, not subtracted. |
| bias corrected | The reported statistic subtracts or conditions on a control rate. |
| bias-free statistic | d′, AUROC, meta-d′ or an equivalent that separates sensitivity from criterion by construction. |
| criterion content matched | What counts as a positive report is what the claim requires. |
| criterion content permissive | A positive report can be satisfied by less than the claim requires. |

## Examples from the papers

- **Detection read against false positives.** [Macar et al. 2026](/measuring-self-reports/papers/macar-2026/) count introspective awareness only when the detection rate exceeds the false-positive rate. The rule matters for base models: the Gemma base model has a false-positive rate of 42.3% and a detection rate of 39.5–41.7%, so it does not discriminate at all.
- **A yes-bias subtraction that removes the effect.** [Hahami et al. 2025](/measuring-self-reports/papers/hahami-2025/) compare the rise in the yes logit under injection with its rise on control questions whose answer is no. The net signal is −0.01 ± 0.03 logits, and the two rises correlate at r = 0.999.
- **A rate difference as the statistic.** [Nguyen et al. 2026](/measuring-self-reports/papers/nguyen-2026/) define a recognition gap, the probability of claiming intent on the model's own output minus that on a prefilled output, which removes the tendency to claim intent on anything.
- **A bias-free statistic with a saturated responder.** [Ferrara 2026](/measuring-self-reports/papers/ferrara-2026/) scores reports by d′ and AUROC against paired sham trials. One model, Qwen2.5-7B-Instruct, says no change occurred on essentially every trial in every condition. A response that never varies registers no sensitivity under any statistic.
- **Permissive criterion content in the grader.** [Lederman & Mahowald 2026](/measuring-self-reports/papers/lederman-mahowald-2026/) instruct the identification grader to be very lenient and to count anything in the same semantic neighborhood as correct.
- **Permissive criterion content in the task.** [Singh et al. 2026](/measuring-self-reports/papers/singh-2026/) add trials that push the concept through the prompt, with no activation intervention. Llama-3.1-70B and Qwen-3-32B label these as activation interventions too, so the positive report tracks irregularity that a prompt can also supply.

## What the stage does not establish

A bias-free statistic separates how often the model says yes from how well its answers track the condition. It does not say what the answers track. Michel's new criterion problem applies: a measured change in bias is not always a change in response strategy. An intervention that moves the criterion may have changed the state as well, and sensitivity above zero may be sensitivity to a cue other than the intended one. Those questions belong to stages 5 and 7.

## Nearest stage

[Calibration](/measuring-self-reports/measurement-card/calibration/) (stage 5). The measurement model is the form of the relation from indication to value; calibration fixes that relation against a standard. The VIM's definition of calibration contains both steps (VIM 2.39). A paper can state a model with no standard to anchor it, or have a standard with no model that says how the reading maps onto it.

## Sources

| Source | Principle |
|---|---|
| [JCGM 200:2012, *International Vocabulary of Metrology*](https://www.bipm.org/documents/20126/2071204/JCGM_200_2012.pdf), 2.39, 2.48 and 2.53 | Measurement model; correction |
| [Tal, "Measurement in Science"](https://plato.stanford.edu/entries/measurement-science/), *Stanford Encyclopedia of Philosophy*, §7.1 | The model as a precondition of the outcome |
| [Michel, "How (not) to underestimate unconscious perception"](https://philpapers.org/archive/MICHNT.pdf), *Mind & Language* (2022) | Criterion content |
| [Michel, "The old and new criterion problems"](https://philpapers.org/archive/MICTOA-2.pdf) (2023) | Response bias; the new criterion problem |
