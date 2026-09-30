---
title: "7. Comparability"
description: Whether a second instrument working on a different principle agrees with the introspection measure, and whether the model reports on itself better than another model can.
---

| | |
|---|---|
| Stage | 7 of 8 |
| General question | Does an instrument on a different principle agree? |
| Self-report question | Does the model report on itself better than another model can? |
| Codes | instruments: single / shared principle / independent principles; agreement: reported / not reported; self versus other: tested / not tested |
| Where it comes from | VIM 2.4 (measurement principle), 2.46 (metrological comparability) and 2.47 (metrological compatibility); Tal's objectivity criterion; Michel 2026 (comparison across methods with different assumptions) |

VIM is the [International Vocabulary of Metrology](https://www.bipm.org/documents/20126/2071204/JCGM_200_2012.pdf).

## What the stage asks

1. **Is there a second instrument, and on what principle?** A measurement principle is the phenomenon a measurement is based on (VIM 2.4). Self-report, a linear probe, activation patching and a behavioral estimate rest on different principles. Two self-report prompts, or two judges reading the same free text, rest on the same one.
2. **Do the results agree within their uncertainty?** The VIM's test of whether two results refer to the same measurand is compatibility: their difference is smaller than a chosen multiple of its uncertainty (VIM 2.47). Comparability in the strict sense needs traceability to a shared reference (VIM 2.46); the card asks the weaker question of whether independent instruments agree.
3. **Does the agreement rest on a shared principle?** Instruments that share a principle or read the same input can agree through a common error, because their biases do not cancel ([Tal, SEP §8.3](https://plato.stanford.edu/entries/measurement-science/)). [Michel (2026)](https://b898ead8-67ea-4d40-a329-4c8ec2c0373f.usrfiles.com/ugd/b898ea_dd1aea6ef8e64f1e8adcb968012ee4ad.pdf) states the requirement: compare data from methods that rest on different auxiliary assumptions.
4. **Self versus other.** Another model, given what the measured model had access to, predicts the measured model. If it does as well, the report carries no information specific to the self. Training data, capability and similarity between the two models should be matched or modeled.

### Codes

| Code | Meaning |
|---|---|
| single | One instrument. |
| shared principle | Several instruments that share a principle or read the same input, so a common error can produce their agreement. Tal's term "island" names a different thing; see [robustness and convergence](/measuring-self-reports/foundations/robustness/). |
| independent principles | At least two instruments whose principles do not presuppose each other. |
| agreement reported | The paper states how far the instruments agree, with uncertainty. |
| self versus other tested | Another model predicts or reports on the measured model under matched conditions. |

## Examples from the papers

- **Self beats other, in both directions.** [Binder et al. 2025](/measuring-self-reports/papers/binder-2025/) train one model to predict itself and another on the same data to predict it. Llama 70B predicts itself better (48.5%) than GPT-4o predicts it (31.8%), and GPT-4o predicts itself better (49.4%) than Llama 70B predicts it (36.6%).
- **Self does not beat other once similarity is modeled.** [Song, Hu & Mahowald 2025](/measuring-self-reports/papers/song-hu-mahowald-2025/) regress cross-model prediction on model similarity and find positive effects for other models and same-family models: at matched similarity, other models predict a model better than it predicts itself.
- **A generic subject does as well as the self.** [Blandfort & Pawar 2026](/measuring-self-reports/papers/blandfort-2026/) find that asking about capable agents in general does as well as item-informed self-prediction, and that other models' self-predictions predict the target better than its own answers do.
- **A small self-specific signal.** [Kadavath et al. 2022](/measuring-self-reports/papers/kadavath-2022/) compare two models on questions only one answers correctly; the difference in P(IK), the model's probability that it knows the answer, is about 6%.
- **Matching on capability removes the effect.** [Moran & Whiting 2026](/measuring-self-reports/papers/moran-2026/) find that restricting to model pairs of similar capability makes the self-specific signal vanish.
- **Trained self-explanation against trained other-explanation.** [Li et al. 2025](/measuring-self-reports/papers/li-2025/) train several explainers on one target's features; the target explaining itself scores 76.2 against 70.3 for Qwen3-8B.
- **Independent principles on one question.** [Atkinson, Plunkett & Bau 2026](/measuring-self-reports/papers/atkinson-2026/) apply behavioral faithfulness, layer ablation, attribution similarity and cross-task patching to the same adapters.

## What the stage does not establish

Agreement across independent principles supports attributing the result to the model rather than to the instrument; this is Tal's objectivity criterion. Agreement does not establish the mechanism. A self advantage shows that the report carries information another model lacks, not how the model obtains it. When both instruments could be driven by a common cause, agreement leaves Michel's problem of coordination where it was: whether the reports should be read as indications of the intended state at all ([Michel 2019](https://philpapers.org/archive/MICTMO-15.pdf)).

## Nearest stage

[Calibration](/measuring-self-reports/measurement-card/calibration/) (stage 5). Calibration takes one reference as known and checks the report against it. Comparability takes no instrument as known and checks whether two agree. The same probe can serve either role; the code follows how the paper uses it.

## Sources

| Source | Principle |
|---|---|
| [JCGM 200:2012, *International Vocabulary of Metrology*](https://www.bipm.org/documents/20126/2071204/JCGM_200_2012.pdf), 2.4, 2.46, 2.47 | Measurement principle; comparability; compatibility |
| [Tal, "Measurement in Science"](https://plato.stanford.edu/entries/measurement-science/), *Stanford Encyclopedia of Philosophy*, §7.1 and §8.3 | Objectivity; common bias |
| [Michel, "Introspection and scientific data"](https://b898ead8-67ea-4d40-a329-4c8ec2c0373f.usrfiles.com/ugd/b898ea_dd1aea6ef8e64f1e8adcb968012ee4ad.pdf), in *The Routledge Handbook of Introspection* (2026) | Comparison across methods with different assumptions |
| [Michel, "The Mismeasure of Consciousness"](https://philpapers.org/archive/MICTMO-15.pdf), *Philosophy of Science* (2019) | The problem of coordination |
