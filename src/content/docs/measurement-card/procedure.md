---
title: "2. Procedure"
description: The settings that fix a reading in an introspection experiment, whether they are stated fully enough to repeat it, and whether asking for the report changes the state reported.
---

| | |
|---|---|
| Stage | 2 of 8 |
| General question | Which layer, strength, prompt, sampling and scoring? |
| Self-report question | Does asking change the state reported? |
| Codes | specification: complete / partial / absent; operating point: fixed in advance / selected on the outcome; reactivity: tested / acknowledged / ignored |
| Where it comes from | VIM 2.6 (measurement procedure) and 2.3 Note 3 (the measurement changes the object); Michel 2017 (report-based artifacts) |

VIM is the [International Vocabulary of Metrology](https://www.bipm.org/documents/20126/2071204/JCGM_200_2012.pdf).

## What the stage asks

1. **Is every setting that fixes the reading stated?** The VIM defines a measurement procedure as a description detailed enough for another operator to perform the measurement (VIM 2.6). For an introspection experiment the settings are the model and checkpoint, the layer and token span of any intervention, its strength, the prompt verbatim, the sampling temperature and number of samples, the number of trials per cell, and the scoring rule.
2. **Was the operating point fixed before the result was seen?** Many papers sweep layer and strength and report the cell with the highest score. A reading at a selected cell is a maximum over a grid, and the stage records that it was selected.
3. **Does asking change the state reported?** The VIM notes that a measurement can change the thing measured, so that the quantity measured differs from the measurand and a correction is needed (VIM 2.3, Note 3). In self-report, the question is part of the input, so the prompt that elicits the report is also a manipulation of the model being measured.
4. **Is there a condition without the report?** [Michel (2017)](https://philpapers.org/rec/MICMAI-3) argues that report-based paradigms alone cannot settle questions in consciousness science, because reporting is itself a source of artifacts. A report condition beside a no-report condition, or a design that separates the state from the question, tests reactivity.

### Codes

| Code | Meaning |
|---|---|
| complete | A reader could rerun the measurement from the paper and its appendices, given the model. |
| partial | Some settings are missing (commonly temperature, samples per item, or the exact scoring prompt). |
| absent | The procedure is described in outline only. |
| selected on the outcome | The reported operating point was chosen as the best cell on the reported metric. |
| reactivity tested | The paper compares the reading with and without the elicitation, or varies the elicitation and reports the effect. |
| reactivity acknowledged | The paper names the possibility or designs around one route, without a test. |
| reactivity ignored | Not discussed. |

## Examples from the papers

- **Stated settings.** [Lindsey 2025](/measuring-introspection/papers/lindsey-2025/) prints the prompt verbatim and the grid: 50 trials for each combination of model, strength and layer, with strengths 1, 2, 4 and 8.
- **Operating point selected on the outcome.** [Macar et al. 2026](/measuring-introspection/papers/macar-2026/) choose layer 37 and strength 4 for Gemma3-27B because that cell gives the highest introspection rate, and use it for the main experiments. Lindsey's headline figure, about 20% for Opus 4.1, is also the best cell of the grid.
- **The question changes the reading.** Lindsey tried an open question without the experimental framing. Yes answers rose from 20% to 42%, but only 2 of 50 trials suggested introspective awareness. [Pearson-Vogel et al. 2026](/measuring-introspection/papers/pearson-vogel-2026/) varied what the prompt tells the model about introspection, and sensitivity to injection rose from 0.3% to 39.9% with a 0.6% rise in false positives.
- **A design that separates the state from the question.** Pearson-Vogel et al. inject only while the first turn is cached and remove the injection before asking, so detection cannot rely on an ongoing perturbation. [Atkinson, Plunkett & Bau 2026](/measuring-introspection/papers/atkinson-2026/) take the report in a separate context window from the decisions it describes.
- **A no-report condition.** [Ackerman 2025](/measuring-introspection/papers/ackerman-2025/) measures use of confidence through a delegation game and compares it with asking for confidence on the same items. The stated confidence tracked external cues of difficulty more closely than the game decisions did.

## What the stage does not establish

A complete procedure makes the measurement repeatable. It does not make it valid: a fully specified procedure can be rerun exactly and still measure a different quantity from the one named at stage 1. Reactivity tests show whether the reading depends on the question; they do not show which reading is correct.

## Nearest stage

[Instrument and indication](/measuring-introspection/measurement-card/instrument/) (stage 3). The procedure is the recipe; the instrument produces the reading when the recipe is followed. In self-report the model under study is also the instrument, so the prompt belongs to both: as a setting it is recorded here, and as the input that makes the instrument read it is recorded at stage 3.

## Sources

| Source | Principle |
|---|---|
| [JCGM 200:2012, *International Vocabulary of Metrology*](https://www.bipm.org/documents/20126/2071204/JCGM_200_2012.pdf), 2.3 and 2.6 | Measurement procedure; measurement that changes the object |
| [Michel, "Methodological artefacts in consciousness science"](https://philpapers.org/rec/MICMAI-3), *Journal of Consciousness Studies* (2017) | Reporting as a source of artifacts |
