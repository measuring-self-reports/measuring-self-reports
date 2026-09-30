---
title: Consciousness Science (Michel)
description: How consciousness science treats subjective reports as measurements, following Matthias Michel, and what that treatment says about a language model's reports on itself.
---

**[Overview slides](/measuring-self-reports/slides/michel.pdf)** (PDF)

In a consciousness experiment, a researcher flashes an image and asks the subject whether they saw it. The answer is the main evidence, so the researcher has to decide what a "yes" says about the subject's experience. Matthias Michel's work has studied this decision using the tools of measurement theory, drawing on [metrology](/measuring-self-reports/foundations/metrology/) and the [philosophy of measurement](/measuring-self-reports/foundations/philosophy-of-measurement/): specifically, [Eran Tal](/measuring-self-reports/foundations/tal/)'s model-based account of measurement and [Hasok Chang](/measuring-self-reports/foundations/chang/)'s history of thermometry. In his account, a report is an indication, and the claim drawn from it is a measurement outcome that needs a model, a calibration and a check against other methods. His subjects are people and animals. His paper on artificial systems, "On cheap artificial consciousness", asks whether theories of consciousness settle which machines are conscious and does not discuss introspection or self-reports, so applying his analysis to language models is our extension of it. An LLM introspection experiment has the same structure: a researcher changes something inside the model, asks the model whether it noticed, and has to decide what the answer means.

## Reports as indications

Michel splits a report-based measurement into two steps ([Michel 2019](https://philpapers.org/archive/MICTMO-15.pdf)):

1. **The subject introspects** and produces a report, such as a rating on the Perceptual Awareness Scale. The report is the indication.
2. **The researcher interprets** the report as information about the subject's experience. The interpretation is the measurement outcome.

Most criticism of self-report targets the first step: whether subjects are accurate. Michel's main concern is the second: whether the report should be read as an indication of consciousness at all.

## Coordination

A procedure can be inaccurate, or it can measure the wrong quantity. Michel calls the second failure a problem of validity or **coordination** ([2019](https://philpapers.org/archive/MICTMO-15.pdf)). His illustration is a thermometer that reads 14 °C too high, which measures temperature badly, against a thermometer used to measure the GDP of Malawi, which does not measure GDP at all ([Michel 2023a](https://philarchive.org/archive/MICCIC-3)).

The coordination problem is circular. Validating a procedure requires a theory of what it measures, and testing the theory requires a validated procedure. Thermometry faced the same circle, and [Chang](/measuring-self-reports/foundations/chang/)'s history describes how it was broken by iteration.

Agreement with task performance does not break the circle. Clearer stimuli produce both higher visibility ratings and better identification, so the two correlate whether or not consciousness is involved ([2019](https://philpapers.org/archive/MICTMO-15.pdf)).

## Two kinds of calibration

Calibration is the process of evaluating a detection procedure's reliability and correcting it ([Michel 2021](https://philpapers.org/archive/MICCIC-2.pdf)). Michel names two methods, after [Tal](/measuring-self-reports/foundations/tal/)'s black-box and white-box calibration:

| Method | What it does |
|---|---|
| Concordance-calibration | Compares procedures that rest on different assumptions; agreement is evidence that both are accurate |
| Model-calibration | Models how the procedure works and predicts what it would output with and without a suspected error |

His case for model-calibration is [Fleming and Dolan](https://www.sciencedirect.com/science/article/pii/S1053810009001779)'s (2010) ideal-observer model of post-decision wagering, which showed that subjects' wagers were distorted by loss aversion.

Only systematic errors need a model. Random errors shrink when results are averaged over trials and subjects. A bias shared by every subject survives the averaging.

## Criterion problems

Under signal detection theory, a report depends on two things: the evidence the subject has, and the subject's criterion for saying yes ([Michel 2023b](https://philpapers.org/archive/MICTOA-2.pdf)). A "not seen" report can therefore mean an absent experience or a cautious subject. Michel's analogy is a bathroom scale that reads slightly low: trusted blindly, it would show that some light objects weigh nothing. The remedies are bias-free measures such as meta-d′ and designs with target-absent trials; the [signal detection](/measuring-self-reports/foundations/signal-detection/) page covers both.

A second error concerns what gets credited. The **criterion content fallacy** concludes that a subject saw the task-relevant feature from evidence that they saw something ([Michel 2022](https://philpapers.org/archive/MICHNT.pdf)).

## Validity drift

A **validity drift** occurs when researchers refine a measurement procedure step by step and end up studying something other than what they set out to study ([Michel 2024](https://580d4178-4a2a-40ee-b753-91905f0859e6.filesusr.com/ugd/b898ea_5e898d22d16b4ba89c07c379485770ed.pdf)). His examples come from psychiatry. Validating an indicator by showing that a drug moves it fails when the drug can move the indicator by some route other than the disorder. Michel's suggested remedy is Tal's white-box calibration.

## LLM analog

| Michel | In an LLM introspection experiment |
|---|---|
| Report as indication | The model's reply, interpreted by the researcher |
| Coordination | Whether the reply varies with the internal state and not with other properties of the prompt |
| Common cause | A self-report and a probe that both read the same content can agree without either measuring access to it |
| Concordance-calibration | Agreement between self-report and a probe or intervention built on different assumptions |
| Model-calibration | A model of the report pathway that predicts replies with and without a suspected yes-bias |
| Criterion problem | A yes-rate that mixes sensitivity to the state with a tendency to say yes |
| Criterion content | A grader that credits a report of any anomaly as a report of the injected concept |
| Validity drift | Carrying "introspection" from people to models, and measuring something else on arrival |

## Limits of the analogy

1. **No starting principle.** Michel's calibration arguments rely on the principle that people can usually tell whether they are conscious of something ([2021](https://philpapers.org/archive/MICCIC-2.pdf)). No equivalent has been established for models, and establishing one is what introspection experiments are for.
2. **One subject.** Averaging cancels individual biases only if they are spread randomly across subjects ([2021](https://philpapers.org/archive/MICCIC-2.pdf)). A single model sampled many times is one subject, so repetition does not remove its biases.
3. **Detection, not measurement.** Michel prefers "detection" for consciousness because measurement applies to quantities ([2021](https://philpapers.org/archive/MICCIC-2.pdf)). Most introspection outcomes are yes/no as well.

## Card stages

| Stage | What Michel's work supplies |
|---|---|
| [Measurand](/measuring-self-reports/measurement-card/measurand/) | Coordination: whether reports indicate the intended property ([2019](https://philpapers.org/archive/MICTMO-15.pdf)) |
| [Instrument and indication](/measuring-self-reports/measurement-card/instrument/) | Report as indication, and the two steps from report to claim ([2019](https://philpapers.org/archive/MICTMO-15.pdf)) |
| [Measurement model](/measuring-self-reports/measurement-card/measurement-model/) | Sensitivity versus criterion; criterion content ([2022](https://philpapers.org/archive/MICHNT.pdf), [2023](https://philpapers.org/archive/MICTOA-2.pdf)) |
| [Calibration](/measuring-self-reports/measurement-card/calibration/) | Concordance-calibration and model-calibration ([2021](https://philpapers.org/archive/MICCIC-2.pdf)) |
| [Uncertainty](/measuring-self-reports/measurement-card/uncertainty/) | Systematic versus random error; biases that survive averaging ([2021](https://philpapers.org/archive/MICCIC-2.pdf)) |
| [Comparability](/measuring-self-reports/measurement-card/comparability/) | Convergence across methods with different assumptions ([2026](https://b898ead8-67ea-4d40-a329-4c8ec2c0373f.usrfiles.com/ugd/b898ea_dd1aea6ef8e64f1e8adcb968012ee4ad.pdf)); the common-cause objection ([2019](https://philpapers.org/archive/MICTMO-15.pdf)) |
| [Validity conditions](/measuring-self-reports/measurement-card/validity-conditions/) | Validity drift ([2024](https://580d4178-4a2a-40ee-b753-91905f0859e6.filesusr.com/ugd/b898ea_5e898d22d16b4ba89c07c379485770ed.pdf)) |

## Sources

| Source | Year | Principle |
|---|---|---|
| [Michel, "The Mismeasure of Consciousness: A problem of coordination for the Perceptual Awareness Scale"](https://philpapers.org/archive/MICTMO-15.pdf), *Philosophy of Science* | 2019 | Reports as indications; the coordination problem |
| [Michel, "Calibration in Consciousness Science"](https://philpapers.org/archive/MICCIC-2.pdf), *Erkenntnis* | 2021 | Concordance-calibration and model-calibration |
| [Michel, "How (not) to underestimate unconscious perception"](https://philpapers.org/archive/MICHNT.pdf), *Mind & Language* | 2022 | The criterion content fallacy |
| [Michel, "Confidence in consciousness research"](https://philarchive.org/archive/MICCIC-3), *WIREs Cognitive Science* | 2023a | Validity versus accuracy |
| [Michel, "The old and new criterion problems"](https://philpapers.org/archive/MICTOA-2.pdf), in *Conscious and Unconscious Mentality* | 2023b | Response bias in reports |
| [Michel, "Validity drifts in psychiatric research"](https://580d4178-4a2a-40ee-b753-91905f0859e6.filesusr.com/ugd/b898ea_5e898d22d16b4ba89c07c379485770ed.pdf), *British Journal for the Philosophy of Science* | 2024 | Validity drift; routes to validation |
| [Michel, "Introspection and scientific data"](https://b898ead8-67ea-4d40-a329-4c8ec2c0373f.usrfiles.com/ugd/b898ea_dd1aea6ef8e64f1e8adcb968012ee4ad.pdf), in *The Routledge Handbook of Introspection* | 2026 | Reports as measurement indicators; convergence across methods |
| [Michel, "On cheap artificial consciousness"](https://philpapers.org/archive/MICOCA-3.pdf) (draft) | — | Whether theories of consciousness settle which artificial systems are conscious |
| [Skóra et al., "No validity without a theory"](https://academic.oup.com/nc/article/2021/1/niab009/6224254), *Neuroscience of Consciousness* | 2021 | Reply to Michel 2019: validity is judged within a theory of the construct |
