---
title: Metrology (VIM and GUM)
description: The defined vocabulary of measurement from the International Vocabulary of Metrology (JCGM 200:2012) and the Guide to the Expression of Uncertainty in Measurement (JCGM 100:2008), and what it asks of an introspection experiment.
---

**[Overview slides](/measuring-introspection/slides/metrology-robustness.pdf)** (PDF)

Metrology is the science of measurement and its application (VIM 2.2). Two documents from the Joint Committee for Guides in Metrology (JCGM) define its vocabulary: the [International Vocabulary of Metrology (VIM)](https://www.bipm.org/documents/20126/2071204/JCGM_200_2012.pdf) gives the terms, and the [Guide to the Expression of Uncertainty in Measurement (GUM)](https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf) gives the rules for evaluating and reporting uncertainty. Both are cited below by clause number.

The measurement card takes its stages from these texts. A measurement has a **measurand**, a documented **procedure**, an **instrument** that produces an indication, a **model** that turns indications into a result, a **calibration** that ties the instrument to a reference, an **uncertainty** attached to the result, and a rule for when two results can be **compared**. The GUM adds that a result is complete only when it comes with a statement of its uncertainty (GUM 3.1.2).

## Defined terms

| Term | VIM clause | Meaning |
|---|---|---|
| Measurement | 2.1 | Experimentally obtaining values that can reasonably be attributed to a quantity |
| Measurand | 2.3 | The quantity intended to be measured |
| Measurement procedure | 2.6 | A detailed description of a measurement, including the model and any calculation used to get the result |
| Indication | 4.1 | The value an instrument provides |
| Blank indication | 4.2 | The indication obtained when the quantity of interest is supposed to be absent |
| Measurement model | 2.48 | The mathematical relation among all quantities involved in a measurement |
| Calibration | 2.39 | A two-step operation: relate standards to indications, then use that relation to get results from indications |
| Metrological traceability | 2.41 | A result can be related to a reference through an unbroken, documented chain of calibrations |
| Measurement uncertainty | 2.26 | A parameter describing the spread of values that could be attributed to the measurand |
| Definitional uncertainty | 2.27 | The part of the uncertainty that comes from the finite detail in the measurand's definition |
| Validation | 2.45 | Verification that specified requirements are adequate for an intended use |
| Metrological comparability | 2.46 | Results can be compared because they are traceable to the same reference |
| Metrological compatibility | 2.47 | Results agree within a chosen multiple of the uncertainty of their difference |

## Measurand and realized quantity

A measurand is specified by description: the kind of quantity and the state of the thing that carries it (VIM 2.3, Note 1). The GUM asks for enough detail that, for the purposes at hand, the measurand has a unique value (GUM 3.1.3).

Three gaps can open between the measurand and what is actually measured:

1. **Approximation.** Often the measurand cannot be realized, and the measurement is made on a quantity that approximates it (GUM D.2.1).
2. **Disturbance.** The act of measuring can change the thing measured, and then a correction is needed. The VIM's example is a voltmeter that draws current from the battery it measures (VIM 2.3, Note 3).
3. **Underspecification.** When the measurand is not specified completely, laboratories measuring "the same" quantity get different results, and the disagreement looks like error (GUM D.3.4, Note 3).

## Indication and result

An indication belongs to the instrument; a result is a claim about the measurand (VIM 2.9). The two need not be quantities of the same kind (VIM 4.1, Note 2): a thermometer indicates a length of mercury, and the result is a temperature. The **blank indication** is the reading taken where the quantity is supposed to be absent (VIM 4.2), and it is how an instrument's baseline is found.

## Calibration and traceability

Calibration has two steps: from standards to indications, then from indications to results (VIM 2.39). The VIM notes that people often treat the first step alone as calibration (Note 3), and that calibration is not the same as adjusting an instrument, "often mistakenly called “self-calibration”" (Note 2).

Traceability is a chain of calibrations back to a reference, which requires a calibration hierarchy (VIM 2.41). It does not guarantee that the uncertainty is adequate for a purpose, or that there are no mistakes (Note 5).

## Uncertainty

The uncertainty of a result includes systematic effects and the vagueness of the measurand's definition, not only random scatter (VIM 2.26, Note 1). Definitional uncertainty is "the practical minimum measurement uncertainty achievable in any measurement of a given measurand" (VIM 2.27, Note 1): no instrument can be more precise than the measurand is defined.

The GUM lists ten sources of uncertainty (GUM 3.3.2). Five of them bear directly on introspection experiments:

| GUM 3.3.2 | Source |
|---|---|
| (a) | Incomplete definition of the measurand |
| (c) | A sample that does not represent the defined measurand |
| (d) | Incomplete knowledge of how conditions affect the measurement |
| (i) | Approximations and assumptions built into the method and procedure |
| (j) | Variation in repeated observations under apparently identical conditions |

Repeating a measurement samples only (j). The GUM asks that all relevant quantities be varied as far as practicable, so that the uncertainty rests on observed data (GUM 3.4.2). The VIM separates precision under **repeatability** conditions (same procedure, operators, system and place, over a short period; VIM 2.20) from precision under **reproducibility** conditions (different places, operators and measuring systems; VIM 2.24). The GUM also states that evaluating uncertainty is neither routine nor purely mathematical, and depends on detailed knowledge of the measurand and the measurement (GUM 3.4.8).

## Comparability and compatibility

Two results are **comparable** if they are traceable to the same reference (VIM 2.46). They are **compatible** if they agree within their uncertainty (VIM 2.47). The VIM uses compatibility as the test of whether two results refer to the same measurand (2.47, Note 1).

## Validation for an intended use

Validation is relative to a use (VIM 2.45). A procedure validated for nitrogen in water may also be validated for nitrogen in human serum, but validation in one setting does not carry over to another automatically.

## LLM analog

In an introspection experiment on a large language model (LLM), the model's reply is the indication: a string, a yes or no, a number or a choice. The claim that the model has access to a state is the result. As VIM 4.1 notes, the two are not quantities of the same kind.

1. **Measurand.** "Introspective access" admits several readings (see [Philosophy of introspection](/measuring-introspection/foundations/philosophy-of-introspection/)). Under the VIM, that vagueness is definitional uncertainty and belongs inside the error bar. When an experiment injects a vector and asks about it, the injected state is the realized quantity of GUM D.2.1, an approximation of the states the paper's claim is about.
2. **Blank indication.** Control trials without an intervention supply it. [Lindsey 2025](/measuring-introspection/papers/lindsey-2025/) reports no false positives in 100 such trials.
3. **Calibration.** The introspection literature often uses "calibration" in the forecasting sense: whether stated probabilities match outcome frequencies, as in [Kadavath et al. 2022](/measuring-introspection/papers/kadavath-2022/). The VIM sense is different, a relation from standards to indications to results. The card uses the VIM sense; the [signal detection](/measuring-introspection/foundations/signal-detection/#three-senses-of-calibration) page separates the senses.
4. **Uncertainty.** The influence quantities include the injection layer and strength, the prompt, the sampling temperature and seed, and the judge that scores free text. GUM 3.3.2 (d) and (i) cover them, and GUM 3.4.2 asks that they be varied. Changing the judge or the prompt is a change of measuring system, which is a reproducibility condition (VIM 2.24).

## Limits of the analogy

1. **Nominal outcomes.** Measurement does not apply to nominal properties (VIM 2.1, Note 1). Many introspection outcomes are nominal, such as which concept was injected, and the vocabulary applies to them only by analogy.
2. **No calibration hierarchy.** No reference procedure, standard or unit anchors a report of a model's internal state. Traceability has no chain to run along, and comparability in the VIM sense is unavailable. The card asks what a paper used in place of a reference, and whether the model under test produced it.
3. **No model of the disturbance.** The VIM's correction for a measurement that disturbs the measurand assumes a model of the disturbance, as with the voltmeter. In self-report, the instrument and the object are the same network, and no such model is available.

## Card stages

| Stage | What metrology supplies |
|---|---|
| [Measurand](/measuring-introspection/measurement-card/measurand/) | VIM 2.3; GUM 3.1.3, D.2.1 |
| [Procedure](/measuring-introspection/measurement-card/procedure/) | VIM 2.6: a procedure documented well enough for another operator to perform it |
| [Instrument and indication](/measuring-introspection/measurement-card/instrument/) | VIM 3.1, 4.1, 4.2 |
| [Measurement model](/measuring-introspection/measurement-card/measurement-model/) | VIM 2.48, 2.53 (correction); GUM 3.1.6, 4.1 |
| [Calibration](/measuring-introspection/measurement-card/calibration/) | VIM 2.39, 2.40, 2.41 |
| [Uncertainty](/measuring-introspection/measurement-card/uncertainty/) | VIM 2.20–2.27; GUM 3.3.2, 3.4.2 |
| [Comparability](/measuring-introspection/measurement-card/comparability/) | VIM 2.46, 2.47 |
| [Validity conditions](/measuring-introspection/measurement-card/validity-conditions/) | VIM 2.45; VIM 2.1, Note 3 (a description of the quantity suited to the intended use) |

## Sources

| Source | Year | Principle |
|---|---|---|
| [JCGM 200:2012, *International Vocabulary of Metrology* (VIM), 3rd edition](https://www.bipm.org/documents/20126/2071204/JCGM_200_2012.pdf) | 2012 | Defined terms of measurement |
| [JCGM 100:2008, *Guide to the Expression of Uncertainty in Measurement* (GUM)](https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf) | 2008 | Evaluating and reporting uncertainty |
| [Lindsey, "Emergent introspective awareness in large language models"](https://arxiv.org/abs/2601.01828) | 2025 | Control trials as a blank indication |
| [Kadavath et al., "Language models (mostly) know what they know"](https://arxiv.org/abs/2207.05221) | 2022 | The forecasting sense of calibration |
