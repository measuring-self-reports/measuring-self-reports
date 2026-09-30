---
title: Model-Based Measurement (Tal)
description: Eran Tal's model-based account of measurement, in which outcomes are inferred from indications through a model of the measurement process, calibration is modeling, and whether two instruments measure the same quantity cannot be settled apart from their errors.
---

**[Overview slides](/measuring-self-reports/slides/tal-chang.pdf)** (PDF)

Eran Tal's model-based account treats measurement as an inference. An instrument ends in some final state, and a model of the measurement process turns that state into a claim about the object measured. Tal developed the account from metrological practice, and it is set out in his [Stanford Encyclopedia of Philosophy entry](https://plato.stanford.edu/entries/measurement-science/) (§7) and three papers: on [calibration](https://philpapers.org/rec/TALCMT) (2017), on [individuating quantities](https://philpapers.org/rec/TALIQ) (2019) and on [how measuring generates evidence](https://iopscience.iop.org/article/10.1088/1742-6596/772/1/012001) (2016).

On this account a measurement has two levels: a concrete process in which an object, an instrument and the environment interact, and an abstract model of that process built from simplifying assumptions (SEP §7). Without the model there is no outcome, and the model partly determines what the outcome says (SEP §7.1).

## Indication and outcome

An **indication** is a property of the instrument in its final state: a pointer position, a number, a symbol or any other output ([Tal 2017](https://philpapers.org/rec/TALCMT)). Calling something an indication presupposes only an intention to use it, not that it indicates anything reliably.

An **outcome** is a knowledge claim about the object, inferred from indications together with background knowledge. The inference depends on assumptions about the object, the instrument, the environment and the calibration (SEP §7.1). So the same indications can support different outcomes under different models of the process (SEP §7.1).

## Three kinds of calibration

Tal argues that calibration is a modeling activity: building models of the measurement process, deriving predictions from them and testing them ([2017](https://philpapers.org/rec/TALCMT)).

| Kind | What it models | Limitation |
|---|---|---|
| Black-box | The instrument as a single input-output unit | Too crude to say which conditions count as similar enough for the calibration to hold |
| White-box | The process as a set of modules: the measurand, the instrument's parts, the object, the environment, the operators, and data processing | Its results carry over only within the narrow conditions it models |
| Coherent | The process in a way that fits background knowledge and applies the quantity consistently across objects, procedures and conditions | None; black-box and white-box calibration are special cases of it |

The first two trade accuracy against scope. Black-box models give outcomes in many circumstances but with low accuracy; white-box models are accurate within the local conditions they specify. Tal also argues that measurement standards are not necessary for calibration, though they help keep large networks of procedures consistent.

## Coherence across instruments

Calibration cannot test outcomes independently of every background assumption. What it can do is test them across a network of instruments. Tal states the condition as the **generalized robustness condition**: when several sufficiently diverse processes measure the same or related quantities, their uncertainties are adequate if and only if

1. their outcomes agree within those uncertainties, and
2. each uncertainty comes from an adequate model of its process.

The objectivity this gives is relative to variation: calibration cannot verify outcomes independently of any model, but it can verify them independently of any *particular* model, instrument and environment. The SEP entry splits the criterion in two: coherence with background theory, which checks that the intended quantity is measured, and consistency across instruments, which checks that the outcome belongs to the object and not to an artifact (§7.1). The [robustness](/measuring-self-reports/foundations/robustness/) page covers Tal's related notion of an "island".

## Quantity individuation

Tal's 2019 paper asks when two procedures measure the same quantity. When their outcomes disagree, three explanations compete (§3.1):

1. **H1:** the instruments are not measuring the same quantity at the relevant accuracy.
2. **H2:** systematic errors have been corrected wrongly.
3. **H3:** the uncertainty has been underestimated.

These cannot be tested one at a time. Establishing what instruments measure, how accurate they are and whether they agree are entangled tasks (§2.4), and no context-free rule settles the choice (§4.2). Tal's criterion is model-based: two procedures measure the same quantity if both can be modeled coherently in terms of the same type of quantity in the background theory (§4.2).

One route to that is **unity through idealization**: different concrete circumstances measure the same quantity if they are modeled as approximations of the same ideal circumstance (§4.3). His example is the cesium clock. When thermal radiation was found to shift the clocks' frequency, they were remodeled as measuring the frequency of a cesium atom at absolute zero (§4.3). On this view, systematic error is what lets different instruments be modeled as measuring one quantity despite stable disagreements among their readings (§5).

## Evidence

Tal's 2016 paper explains why measurement outcomes count as good evidence. The reason is their epistemic security, how unlikely they are to need revision, rather than any closeness to raw observation.

## LLM analog

| Model-based term | In an introspection experiment |
|---|---|
| Indication | The model's reply: yes or no, a named concept, a confidence number, a free-text description |
| Outcome | The claim that the model has access to, or represents, a given internal state |
| Model of the process | Assumptions about prompting, sampling, the judge, the intervention, and the route from internal state to reply |
| Black-box calibration | Fitting reply rates to a constructed ground truth, such as injected versus not injected, without modeling how the reply is produced |
| White-box calibration | Modeling the report pathway itself, for instance by mechanistic analysis of the circuit that produces the reply |
| H1 / H2 / H3 | When a self-report and a probe disagree: different quantities, uncorrected bias, or understated uncertainty |

Two consequences follow:

1. **Scoring is part of the model.** Because the same indications support different outcomes under different models, a grader that credits any report of an anomaly and a grader that requires the correct concept turn the same replies into different outcomes. Michel calls this the [criterion content](/measuring-self-reports/foundations/consciousness-science/#criterion-problems).
2. **A calibration holds where it was done.** A calibration against injected vectors at one layer and strength carries over, on Tal's account, only within the conditions under which it was made.

## Limits of the analogy

1. **No background theory.** Tal's cases are physical quantities, such as temperature and frequency, with theories that fix how they relate to other quantities. His individuation criterion needs such a theory ([2019](https://philpapers.org/rec/TALIQ), §4.2). For internal states of an LLM there is none. Tal allows pre-theoretical assumptions in its place (§4.2), and the card asks what those assumptions are in each paper.
2. **No independent standards.** Tal's standards are kept by institutions independent of the instruments they calibrate. In an introspection experiment, the researchers running the test construct the ground truth, and a judge model may score the replies. Tal's framework treats the independence of a standard as a question of how diverse the network is, and the card records it at the calibration stage.

## Card stages

| Stage | What the model-based account supplies |
|---|---|
| [Instrument and indication](/measuring-self-reports/measurement-card/instrument/) | Indication versus outcome ([2017](https://philpapers.org/rec/TALCMT); SEP §7.1) |
| [Measurement model](/measuring-self-reports/measurement-card/measurement-model/) | The model as a precondition of the outcome (SEP §7.1); white-box modules ([2017](https://philpapers.org/rec/TALCMT)) |
| [Calibration](/measuring-self-reports/measurement-card/calibration/) | Black-box, white-box and coherent calibration ([2017](https://philpapers.org/rec/TALCMT)) |
| [Uncertainty](/measuring-self-reports/measurement-card/uncertainty/) | Uncertainty from the model; underestimated uncertainty as H3 ([2019](https://philpapers.org/rec/TALIQ)) |
| [Comparability](/measuring-self-reports/measurement-card/comparability/) | The generalized robustness condition ([2017](https://philpapers.org/rec/TALCMT)); quantity individuation ([2019](https://philpapers.org/rec/TALIQ)) |
| [Validity conditions](/measuring-self-reports/measurement-card/validity-conditions/) | A calibration carries over only within its specified scope ([2017](https://philpapers.org/rec/TALCMT)) |

## Sources

| Source | Year | Principle |
|---|---|---|
| [Tal, "Measurement in Science"](https://plato.stanford.edu/entries/measurement-science/), *Stanford Encyclopedia of Philosophy* | 2020 | The two-level account; indication and outcome; coherence and objectivity |
| [Tal, "Calibration: Modelling the measurement process"](https://philpapers.org/rec/TALCMT), *Studies in History and Philosophy of Science* 65–66 | 2017 | Black-box, white-box and coherent calibration; the generalized robustness condition |
| [Tal, "Individuating quantities"](https://philpapers.org/rec/TALIQ), *Philosophical Studies* 176 | 2019 | H1–H3; the individuation criterion; unity through idealization |
| [Tal, "How does measuring generate evidence? The problem of observational grounding"](https://iopscience.iop.org/article/10.1088/1742-6596/772/1/012001), *Journal of Physics: Conference Series* 772 | 2016 | Epistemic security |
