---
title: Glossary
description: Terms used across the site, each with its meaning here and its source.
---

Each entry gives the term as the site uses it and links its source. VIM is the [International Vocabulary of Metrology](https://www.bipm.org/documents/20126/2071204/JCGM_200_2012.pdf). LLM is large language model.

## Metrology

<span id="measurand"></span>
**Measurand.** The quantity intended to be measured (VIM 2.3). In an introspection experiment, the property of the model that the score is meant to estimate, such as detection of an injected concept or accuracy of reported preference weights. Card stage: [Measurand](/measuring-introspection/measurement-card/measurand/).

<span id="indication"></span>
**Indication.** The value an instrument provides (VIM 4.1): the model's answer, a logit difference or a judge's label, before any inference to the measurand. An indication and the value of the quantity measured need not be the same kind of thing. Card stage: [Instrument and indication](/measuring-introspection/measurement-card/instrument/).

<span id="measurement-model"></span>
**Measurement model.** The mathematical relation among all quantities involved in a measurement (VIM 2.48): the rule that turns indications into a value of the measurand, including corrections for response bias. Card stage: [Measurement model](/measuring-introspection/measurement-card/measurement-model/).

<span id="calibration"></span>
**Calibration.** A two-step operation: relate the values of standards to indications, then use that relation to get results from indications (VIM 2.39). It is distinct from adjusting the instrument. This is the metrological sense; the [signal detection](/measuring-introspection/foundations/signal-detection/#three-senses-of-calibration) page separates it from probability calibration. Card stage: [Calibration](/measuring-introspection/measurement-card/calibration/).

<span id="black-box-white-box-calibration"></span>
**Black-box and white-box calibration.** [Tal](/measuring-introspection/foundations/tal/)'s distinction between calibrating an instrument as a single input-output unit and calibrating it through a model of its parts. Correlating self-reports with injections is black-box; modeling how the report is produced is white-box.

<span id="traceability"></span>
**Traceability.** A result is traceable if it can be related to a reference through an unbroken, documented chain of calibrations (VIM 2.41). On the card it is a sub-question of calibration: whether the chain from the reported number back to the standard (scoring rule, judge prompt, per-trial outputs, model version) is released.

<span id="definitional-uncertainty"></span>
**Definitional uncertainty.** The part of the uncertainty that comes from the finite detail in the measurand's definition, and the practical minimum for any measurement of that measurand (VIM 2.27). A vaguely defined sense of introspection carries it whatever the number of trials.

<span id="repeatability"></span>
**Repeatability.** Precision under the same procedure, operators, system, conditions and location, over a short period (VIM 2.20–2.21). For introspection experiments, rerunning the same model, prompt and settings.

<span id="reproducibility"></span>
**Reproducibility.** Precision under changed conditions, such as different locations, operators and measuring systems (VIM 2.24–2.25). For introspection experiments, another group rerunning the paradigm on other models with other code.

## Signal detection and report

<span id="response-bias"></span>
**Response bias.** The part of a report rate that reflects a tendency to answer one way, whatever the evidence. Under signal detection theory, a report depends on both the evidence and a criterion for saying yes ([Michel 2023](https://philpapers.org/archive/MICTOA-2.pdf)). In introspection experiments it shows up as a yes-rate on control trials. Card stage: [Measurement model](/measuring-introspection/measurement-card/measurement-model/).

<span id="meta-d-prime"></span>
**meta-d′.** A measure of metacognitive sensitivity in the units of first-order sensitivity d′ ([Maniscalco & Lau 2012](https://www.sciencedirect.com/science/article/abs/pii/S1053810011002303)). If meta-d′ equals d′, all the evidence behind the decision reached the confidence judgment; the ratio meta-d′/d′ is metacognitive efficiency ([Fleming & Lau 2014](https://www.frontiersin.org/articles/10.3389/fnhum.2014.00443/pdf)). See [signal detection](/measuring-introspection/foundations/signal-detection/).

<span id="criterion-content"></span>
**Criterion content.** The set of features a perceptual or metacognitive decision is based on ([Michel 2022](https://philpapers.org/archive/MICHNT.pdf)). A report that something unusual happened has permissive criterion content relative to a claim that the model detected a particular injected concept.

<span id="reactivity"></span>
**Reactivity.** A change in the measured state caused by measuring it. The VIM notes that a measurement can change the thing measured, so that the quantity measured differs from the measurand (VIM 2.3, Note 3). In self-report, the question that elicits the report is also input to the model being measured. Card stage: [Procedure](/measuring-introspection/measurement-card/procedure/).

## Introspection

<span id="privileged-access"></span>
**Privileged access.** Information about a model's internal states that the model obtains more reliably than an outside party could at equal cost ([Song, Lederman, Hu & Mahowald 2025](https://arxiv.org/abs/2508.14802)). [Binder et al. 2025](/measuring-introspection/papers/binder-2025/) operationalize it as outperforming a stronger model given the same training data.

<span id="grounding"></span>
**Grounding.** The requirement that a self-report be caused by the state or process it describes. [Lindsey 2025](/measuring-introspection/papers/lindsey-2025/) states it as one of four criteria, and [Atkinson, Plunkett & Bau 2026](/measuring-introspection/papers/atkinson-2026/) as a requirement that claims about behavior be causal.

<span id="faithfulness"></span>
**Faithfulness.** Agreement between what a model says about itself and what it does. [Atkinson, Plunkett & Bau 2026](/measuring-introspection/papers/atkinson-2026/) measure it as the correlation between reported preference weights and weights inferred from the model's choices. Faithfulness can hold without grounding, if the report and the behavior share a cause.

<span id="concept-injection"></span>
**Concept injection.** Adding a vector associated with a concept to a model's activations and asking the model about its internal state; the term is from [Lindsey 2025](/measuring-introspection/papers/lindsey-2025/), who describes it as an application of activation steering.

<span id="self-prediction"></span>
**Self-prediction.** Asking a model to predict a property of its own behavior on a prompt, then running the prompt separately and scoring the prediction ([Binder et al. 2025](/measuring-introspection/papers/binder-2025/)).

## Validity

<span id="shared-principle"></span>
**Shared principle.** The card's code for instruments that agree because they share a principle of operation or read the same input, such as two prompts to the same model, or a self-report checked against a probe trained on the same labels. Their agreement can come from a common bias, which does not cancel when results are averaged ([Tal, SEP §8.3](https://plato.stanford.edu/entries/measurement-science/)). Card stage: [Comparability](/measuring-introspection/measurement-card/comparability/).

<span id="island"></span>
**Island (Tal).** Part of a network of instruments governed by its own policy for assigning systematic errors, so that results reproduce within it and cannot be compared across its boundary ([Tal 2017](https://philpapers.org/rec/TALCMT)). See [robustness and convergence](/measuring-introspection/foundations/robustness/).

<span id="coordination-problem"></span>
**Coordination problem.** Knowing whether a procedure measures the quantity it is meant to, when the quantity has no measurement independent of such procedures. Tal pairs it with Chang's problem of nomic measurement ([SEP §8.1](https://plato.stanford.edu/entries/measurement-science/)); [Michel (2019)](https://philpapers.org/archive/MICTMO-15.pdf) applies it to reports of consciousness. See [model-based measurement](/measuring-introspection/foundations/tal/) and [consciousness science](/measuring-introspection/foundations/consciousness-science/).

<span id="validity-drift"></span>
**Validity drift.** Refining a measurement procedure step by step and ending up studying something other than what was intended ([Michel 2024](https://580d4178-4a2a-40ee-b753-91905f0859e6.filesusr.com/ugd/b898ea_5e898d22d16b4ba89c07c379485770ed.pdf)). For introspection, a measure developed on injected concepts and then applied to natural states or other models can keep its name while measuring something else. Card stage: [Validity conditions](/measuring-introspection/measurement-card/validity-conditions/).
