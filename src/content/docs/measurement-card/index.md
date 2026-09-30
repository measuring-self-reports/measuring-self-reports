---
title: Measurement Card
description: The eight stages of a measurement, what to ask at each when a model reports on itself, and one paper coded as an example.
---

An introspection experiment turns a model's report into a claim about its internal state, and that step is a measurement. The card's questions come from seven fields:

- [Metrology](/measuring-introspection/foundations/metrology/) gives the stages themselves: a defined measurand, a documented procedure, a calibrated instrument, an uncertainty budget and comparability between results, as the International Vocabulary of Metrology (VIM) sets them out.
- [Philosophy of measurement](/measuring-introspection/foundations/philosophy-of-measurement/) gives calibration without ground truth. [Tal](/measuring-introspection/foundations/tal/) treats calibration as modeling the measurement process, and [Chang](/measuring-introspection/foundations/chang/) shows how thermometry fixed a quantity and its standards together.
- [Psychometrics](/measuring-introspection/foundations/psychometrics/) gives construct validity, the question whether a score measures the attribute it names, and the [multitrait-multimethod matrix](/measuring-introspection/foundations/multitrait-multimethod/), which separates what methods share from what traits share.
- [Consciousness science](/measuring-introspection/foundations/consciousness-science/) gives the treatment of reports as measurements: Michel's coordination problem, and [signal detection](/measuring-introspection/foundations/signal-detection/) measures that separate a tendency to say yes from sensitivity.
- [Philosophy of introspection](/measuring-introspection/foundations/philosophy-of-introspection/) gives the senses of introspection a measurand can name, from functional self-monitoring to privileged access.
- [Machine learning](/measuring-introspection/foundations/llm-introspection-accounts/) and [mechanistic interpretability](/measuring-introspection/foundations/interpretability-instruments/) give the operational definitions the experiments use and the instruments they read: prompts, judges, probes and attribution.

The card records what a paper supplies at each stage. It gives no grade, and it ends on one output: the setting that would change the paper's conclusion.

## Stages

| # | Stage | General question | When the model reports on itself |
|---|---|---|---|
| 1 | [Measurand](/measuring-introspection/measurement-card/measurand/) | What quantity, defined how? | Which sense of introspection? |
| 2 | [Procedure](/measuring-introspection/measurement-card/procedure/) | Which layer, strength, prompt, sampling and scoring? | Does asking change the state reported? |
| 3 | [Instrument and indication](/measuring-introspection/measurement-card/instrument/) | What produces the reading, and what is read off? | Binary, numeric, free text or forced choice? |
| 4 | [Measurement model](/measuring-introspection/measurement-card/measurement-model/) | How does the reading become the claim? | Is a tendency to say yes separated from sensitivity? |
| 5 | [Calibration](/measuring-introspection/measurement-card/calibration/) | Against what standard, anchored to what? | Could the model's own family have produced the standard? |
| 6 | [Uncertainty](/measuring-introspection/measurement-card/uncertainty/) | Which settings were varied, and which one changes the conclusion? | Is the response threshold part of the budget? |
| 7 | [Comparability](/measuring-introspection/measurement-card/comparability/) | Does an instrument on a different principle agree? | Does the model report on itself better than another model can? |
| 8 | [Validity conditions](/measuring-introspection/measurement-card/validity-conditions/) | Where is the result claimed to hold, and was it tested elsewhere? | Are the tested states ones the model enters naturally? |

The allowed codes for each stage are on its page.

## Stage ordering

Each stage needs the ones before it. An uncertainty estimate is an uncertainty about some quantity, so it means nothing until stage 1 has named the quantity; a calibration relates readings to a standard through a measurement model, so it cannot be judged before stage 4. A paper that reports tight intervals across seeds for a measure with no stated measurand has measured the spread of an unnamed number.

The first five stages follow the International Vocabulary of Metrology (VIM), which lists what a measurement presupposes: a description of the quantity suited to the intended use, a measurement procedure, and a calibrated measuring system that follows the procedure (VIM 2.1, Note 3). The last three evaluate a result once it exists.

## Output

| Output | When |
|---|---|
| The setting that changes the conclusion | The paper varied a setting, and at some value its conclusion reverses or crosses its own threshold. The card names the setting and the value. |
| None found | The paper varied settings and the conclusion held at every value tried. |
| Not tested | The paper reports one operating point. |

"None found" covers only the settings the paper varied.

## Coding protocol

Two coders code all 23 papers independently. [Lindsey 2025](/measuring-introspection/papers/lindsey-2025/) is the running example below: both coders study it first, and it is excluded from the agreement statistics, which are computed on the other 22 papers and reported per stage. A stage with low agreement has its codes redefined and is coded again. The paper pages describe what each paper reports at each stage without assigning codes, so neither coder sees a code before choosing one.

## Running example: Lindsey 2025

[Lindsey 2025](/measuring-introspection/papers/lindsey-2025/) adds a vector for a word to a Claude model's residual stream and asks whether the model detects an injected thought and what it is about. The coded measurement is the detection task. At the best injection layer and strength, Opus 4.1 succeeds on about 20% of trials, with no false positives in 100 control trials for production models.

| Stage | Code | Why |
|---|---|---|
| 1. Measurand | bundled; grounded self-report with an internality condition | Introspective awareness is defined by four criteria: accuracy, grounding, internality and metacognitive representation. The fourth is not tested. A trial succeeds only if the model both says yes and names the concept, so one score carries two quantities. |
| 2. Procedure | partial; operating point chosen on the outcome; reactivity ignored | Prompts, word lists, strengths and trial counts are given in full; layer indices are not. The headline rate is taken at each model's best layer and strength. Whether asking about an injected thought changes the state is not tested. |
| 3. Instrument and indication | free text; LLM judge | The model answers in free text, and Claude Sonnet 4 grades each answer into yes/no criteria. |
| 4. Measurement model | stated; bias checked; criterion matched | The outcome is the success rate minus the false-positive rate. Injecting the same vectors into unrelated questions whose answer is no produces no rise in yes answers. Success requires naming the concept, so a report of "something unusual" does not count. |
| 5. Calibration | injected; black-box; shared family; partial traceability | The standard is the injected vector, taken from the same model's activations. The grader is a Claude model and is not checked against human raters. Prompts and word lists are printed; vectors, code and per-trial outputs are not released. |
| 6. Uncertainty | flips with layer and strength; single run; independent replication | Layer, strength, concept category, prompt wording, vector type and model are varied, and the rate depends on layer and strength. Removing "Answer immediately" from the prompt lowers performance on the Opus models. Seeds are not reported. [Macar et al. 2026](/measuring-introspection/papers/macar-2026/) replicates the detection result in open-weight models. |
| 7. Comparability | single; self versus other not tested | Each of the paper's four tasks reads a different indication for a different claim, so no two instruments measure the same quantity. No other model or observer reports on the injected model. |
| 8. Validity conditions | domain stated; induced states | The paper calls injection an unnatural setting, unlike training or deployment. One or a few prompt templates per experiment; Claude models only. |

**Output.** Injection layer and strength. The headline rate is the best cell of a layer-by-strength sweep, and the rate is lower elsewhere; base models reach no net performance above zero.

## Theoretical foundations

| Stage | Taken from |
|---|---|
| 1. Measurand | [Metrology](/measuring-introspection/foundations/metrology/): the measurand and definitional uncertainty. [Psychometrics](/measuring-introspection/foundations/psychometrics/): construct validity. [Philosophy of introspection](/measuring-introspection/foundations/philosophy-of-introspection/): the senses of introspection. |
| 2. Procedure | [Metrology](/measuring-introspection/foundations/metrology/): the measurement procedure. [Consciousness science](/measuring-introspection/foundations/consciousness-science/): artifacts introduced by the act of reporting. |
| 3. Instrument and indication | [Metrology](/measuring-introspection/foundations/metrology/): the instrument and its indication. [Tal](/measuring-introspection/foundations/tal/): indication versus outcome. [Mechanistic interpretability](/measuring-introspection/foundations/interpretability-instruments/): the instruments the experiments read. |
| 4. Measurement model | [Tal](/measuring-introspection/foundations/tal/): model-based measurement. [Signal detection](/measuring-introspection/foundations/signal-detection/): separating sensitivity from a tendency to say yes, and criterion content. |
| 5. Calibration | [Metrology](/measuring-introspection/foundations/metrology/): calibration and traceability. [Tal](/measuring-introspection/foundations/tal/) and [Chang](/measuring-introspection/foundations/chang/): calibration without ground truth. [Measurement in AI evaluation](/measuring-introspection/foundations/ai-evaluation/): standards produced by LLM judges. |
| 6. Uncertainty | [Metrology](/measuring-introspection/foundations/metrology/): the uncertainty budget, repeatability and reproducibility. |
| 7. Comparability | [Metrology](/measuring-introspection/foundations/metrology/): comparability of results. [Robustness and convergence](/measuring-introspection/foundations/robustness/): agreement across independent methods. [Multitrait-multimethod matrix](/measuring-introspection/foundations/multitrait-multimethod/): method variance. |
| 8. Validity conditions | [Metrology](/measuring-introspection/foundations/metrology/): measurement conditions. [Psychometrics](/measuring-introspection/foundations/psychometrics/): external validity. [Consciousness science](/measuring-introspection/foundations/consciousness-science/): validity drift. |
