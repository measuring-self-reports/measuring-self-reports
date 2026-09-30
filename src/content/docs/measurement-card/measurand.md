---
title: "1. Measurand"
description: What quantity the introspection measure is meant to measure, how the paper defines it, and which sense of introspection it tests.
---

| | |
|---|---|
| Stage | 1 of 8 |
| General question | What quantity, defined how? |
| Self-report question | Which sense of introspection? |
| Codes | definition: explicit-operational / explicit-conceptual / implicit / bundled; sense: functional self-monitoring / privileged access / grounded self-report / self-specifying access / not stated |
| Where it comes from | VIM 2.3 (measurand) and 2.27 (definitional uncertainty); Michel 2019 (problem of coordination) |

VIM is the International Vocabulary of Metrology (JCGM 200:2012). LLM is large language model.

## What the stage asks

1. **Is the quantity named?** The measurand is the quantity intended to be measured (VIM 2.3). A paper that reports "introspection accuracy" has named a score; the stage asks what quantity the score estimates.
2. **Is it defined, and how?** A definition can be operational, a formula or scoring rule that fixes the value, or conceptual, a statement in words of what would count. The VIM asks for the kind of quantity and the state of the thing carrying it (VIM 2.3, Note 1). For a model, that is the model at a given checkpoint, with a given prompt and context.
3. **One quantity or several under one score?** A success criterion that requires detection and identification together, or an average over tasks with different targets, measures a composite.
4. **Which sense of introspection?** The four senses below make different claims, and a measure adequate to one can be inadequate to another.
5. **What does the definition leave open?** Definitional uncertainty is the part of the uncertainty that comes from the finite detail of the measurand's definition, and it is the practical minimum for any measurement of that measurand (VIM 2.27). A vague measurand sets a floor that no number of trials removes.

### Definition codes

| Code | Meaning |
|---|---|
| explicit-operational | The quantity is fixed by a formula or scoring rule stated in the paper. |
| explicit-conceptual | The quantity is stated in words, with criteria, but no single formula fixes it. |
| implicit | The paper names the construct ("introspection", "self-awareness") and never states what would count. |
| bundled | One reported score combines two or more quantities that the paper itself, or the literature it cites, treats as distinct. Combined with one of the codes above. |

### Senses of introspection

| Sense | What it requires | Source |
|---|---|---|
| Functional self-monitoring | An internal state is represented and available for behavioral control | [Zakharova 2025](https://philarchive.org/rec/ZAKMTS), naming what [Kammerer & Frankish's](https://philarchive.org/archive/KAMWFC) definition captures |
| Privileged access | The process yields information about the model's internal states more reliably than any equally cheap process available to a third party | [Song, Lederman, Hu & Mahowald 2025](https://arxiv.org/abs/2508.14802) |
| Grounded self-report | The report accurately describes an internal state through a causal process linking the state to the report | [Comsa & Shanahan 2025](https://arxiv.org/abs/2506.05068) |
| Self-specifying access | The report cannot be mistaken about whether it is the model itself, rather than something else, that is in the state (immunity to error through misidentification) | [Zakharova 2025](https://philarchive.org/rec/ZAKMTS) |

The senses nest only partly. A report can be grounded without being privileged, if another model reading the same context could do as well, and privileged without being self-specifying. See [philosophy of introspection](/measuring-self-reports/foundations/philosophy-of-introspection/).

## Examples from the papers

- **Explicit-operational.** [Ferrara 2026](/measuring-self-reports/papers/ferrara-2026/) names its quantity "intervention reportability": how much a model's output carries information about a controlled change to its own computation.
- **Explicit-conceptual, with a criterion the paper does not test.** [Lindsey 2025](/measuring-self-reports/papers/lindsey-2025/) states four criteria, starting with accuracy, and says it does not demonstrate the fourth, metacognitive representation.
- **Bundled.** In the same paper, a trial succeeds only if the grader finds both an affirmative detection and correct identification of the concept. Detection and identification enter one rate.
- **Separated.** [Macar et al. 2026](/measuring-self-reports/papers/macar-2026/) reports detection and identification apart, using a prefill to isolate naming the concept from willingness to report detection.
- **Privileged access, defined as a procedure.** [Binder et al. 2025](/measuring-self-reports/papers/binder-2025/) counts a fact as introspected only if a stronger model, given the first model's training data and the same query, does not report it. The definition is itself a comparison, so stage 7 is built into the measurand.
- **Measurand narrower than the claim.** [Singh et al. 2026](/measuring-self-reports/papers/singh-2026/) states that its injection experiments test a weaker condition than the second-order access it discusses: whether reports track interventions on hidden states specifically, rather than irregularity in general.
- **Self-specificity as the measurand.** [Moran & Whiting 2026](/measuring-self-reports/papers/moran-2026/) define individuated metacognition as a model's ability to assess its own item-level capabilities in a way specific to that model, beyond what a signal shared across models explains.

## What the stage does not establish

A defined measurand does not show that the procedure measures it. Michel calls this the problem of coordination: knowing whether a procedure measures what it is intended to measure ([Michel 2019](https://philpapers.org/archive/MICTMO-15.pdf)). An explicit-operational code records that the paper fixed a score. Whether the score tracks the named sense is settled, if at all, at stages 4, 5 and 7.

## Nearest stage

[Validity conditions](/measuring-self-reports/measurement-card/validity-conditions/) (stage 8). The VIM's specification of a measurand includes the state of the thing carrying the quantity, which overlaps with the conditions under which a result holds. The difference: the measurand says what quantity is meant; validity conditions say over which models, prompts and states the paper claims its value, and whether it looked beyond them.

## Sources

Page numbers for papers are PDF page numbers.

| Source | Principle |
|---|---|
| [JCGM 200:2012, *International Vocabulary of Metrology*](https://www.bipm.org/documents/20126/2071204/JCGM_200_2012.pdf), 2.3 and 2.27 | Measurand; definitional uncertainty |
| [Michel, "The Mismeasure of Consciousness"](https://philpapers.org/archive/MICTMO-15.pdf), *Philosophy of Science* (2019) | The problem of coordination |
| [Song, Lederman, Hu & Mahowald, "Privileged self-access matters for introspection in AI"](https://arxiv.org/abs/2508.14802) (2025) | Privileged access |
| [Comsa & Shanahan, "Does it make sense to speak of introspection in large language models?"](https://arxiv.org/abs/2506.05068) (2025) | Grounded self-report |
| [Zakharova, "Missing the subject: Introspection in large language models"](https://philarchive.org/rec/ZAKMTS) (2025) | Self-specifying access |
