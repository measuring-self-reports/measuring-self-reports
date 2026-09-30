---
title: Epistemic Iteration (Chang)
description: Hasok Chang's account of how temperature measurement was built without an already-trusted thermometer, including the problem of nomic measurement, comparability and the principle of single value, epistemic iteration, and the metrological extension that carries a measurement into a new domain.
---

**[Overview slides](/measuring-introspection/slides/tal-chang.pdf)** (PDF)

Hasok Chang's [*Inventing Temperature*](https://academic.oup.com/book/5530) (2004) is a history and philosophy of thermometry. It asks how a measurement standard can be established when every test of it seems to need a trusted instrument that does not yet exist: how do we know a thermometer is right, when checking it requires temperature readings that only a trusted thermometer could give? Chang's answer is **epistemic iteration**. Start from an existing system of knowledge, accepted without proof that it is correct, and use it to run inquiries that refine and correct it. The justification is the self-correcting progress, not a secure foundation.

## Fixed points

Early thermometers had no shared reference. There were no fixed points, phenomena known to happen always at the same temperature, and no way to check a proposed fixed point without a thermometer already trusted. Even boiling water was not fixed: in 1776 a Royal Society committee found that thermometers from the best makers disagreed on the boiling point by 2–3 °F.

## The problem of nomic measurement

Mercury, alcohol and water thermometers calibrated at the same fixed points disagree between them. To find which fluid expands uniformly, one needs true temperatures, which only a correct thermometer gives. Chang generalizes: whenever a measurement rests on an empirical law linking an observable quantity to an unobservable one, testing the law requires the very measurement it is supposed to justify. He calls this circularity probably the most crippling form of the theory-ladenness of observation. Tal's encyclopedia entry places it beside van Fraassen's **problem of coordination**: which procedure measures a quantity, and what the quantity is, cannot be settled independently of each other ([Tal, SEP §8.1](https://plato.stanford.edu/entries/measurement-science/)).

## Comparability and the principle of single value

In the 1840s, Regnault tested thermometers without assuming any theory of heat. His criterion was **comparability**: a thermometer that reads the true temperature must at least give the same reading in the same circumstance, and all thermometers of one type must agree with each other. Mercury thermometers made with different glasses failed this test; air thermometers of different densities passed. Regnault never treated comparability as truth.

Chang names the assumption behind the test, the **principle of single value**: "a real physical property can have no more than one definite value in a given situation". The principle is neither logical nor empirical, and no observation could test it.

## Minimalist overdetermination

A hypothesis can be tested by determining one quantity several ways under a set of assumptions: agreement supports the assumptions. Regnault's version was **minimalist**. He compared thermometers of one type against each other and added no auxiliary hypotheses about heat, so a failure could be blamed only on the thermometers.

Chang states the method's limit. Several thermometer types can each pass the comparability test and still disagree with each other; minimalism strengthens a verdict when there is one, but cannot guarantee a verdict. He also rejects the demand that an instrument's theory be independent of the theory it tests, calling the comfort independence gives illusory. The [robustness](/measuring-introspection/foundations/robustness/) page sets out the contrasting view.

## Epistemic iteration

Chapter 5 draws the episodes together. The circularity cannot be escaped, so justification in empirical science has to be coherentist. Iteration is a sequence of stages, each built on the one before, that improves the system against its goals. Chang's example is a reconstruction of how Fahrenheit could have set the temperature of his mixing vessel: start from a poor guess and let each trial set up the next, converging on an accurate result.

Iteration produces two kinds of progress:

1. **Enrichment:** the starting system is refined, not rejected.
2. **Self-correction:** the starting system is changed by inquiry based on itself. Regnault's work is an instance. Assuming one type of thermometer was correct produced observations showing that thermometers of that type disagreed.

Nothing guarantees that iteration succeeds. If every attempt to improve a system contradicts itself, the system has failed. The method also allows competing traditions to progress in parallel.

## Calibration against an inaccurate standard

[Michel (2021)](https://philpapers.org/archive/MICCIC-2.pdf) uses Chang's history against the objection that a procedure cannot be calibrated without an accurate one. The first thermoscopes were calibrated against human sensations of hot and cold, known to be unreliable in some conditions; the principle of single value picked out those conditions ([Michel 2021](https://philpapers.org/archive/MICCIC-2.pdf)). Inaccurate procedures are not useless.

## Metrological extension

Chapter 3 follows temperature measurement into the extreme cold and heat, where mercury froze and glass melted. Chang calls carrying a measurement method into a new domain **metrological extension**. The validity of the new method is a real question only because the concept means more than its measurement; the method is valid if it coheres with the rest of the concept's meaning. He states two conditions:

1. **Conformity.** If the concept already has a meaning in the new domain, the new standard should agree with it.
2. **Overlap.** If the old and new standards share a domain, they should give consistent results there.

Both are conditional: each constrains the extension only where a prior meaning or a shared domain exists.

[Michel (2024)](https://580d4178-4a2a-40ee-b753-91905f0859e6.filesusr.com/ugd/b898ea_5e898d22d16b4ba89c07c379485770ed.pdf) takes up the term with two conditions of his own. The **existence condition** requires that the construct be present in the new domain; his **overlap condition** requires that the old and new procedures share a domain, where Chang's applies only if one exists. When the conditions fail, a validity drift can follow.

## LLM analog

For internal states of a large language model (LLM), no instrument is already trusted. A self-report can be checked against a probe, an intervention or a constructed ground truth, but each of these is itself still being developed. Chang's thermometry is the historical case of this situation.

1. **Fixed points.** A paper that uses injected vectors as its reference assumes the injected state is the same across layers, strengths and prompts. Chang's boiling point is the case in which an assumed fixed point turned out to depend on unspecified conditions.
2. **Comparability as a minimal check.** Runs of one report procedure under different seeds, paraphrases or temperatures are thermometers of one type. The principle of single value requires that they agree about one state of one model. A procedure that fails is ruled out without any theory of the state. One that passes is not thereby validated, because several procedure types can each pass and still disagree.
3. **Iteration.** Adopt a provisional standard, such as an injected concept treated as present; use it to test reports; revise the standard where reports and other procedures show it is not fixed.
4. **Extension.** Carrying "introspection" from people to models is a metrological extension. Michel's existence condition asks whether the model has the state the report is about. Human and model self-report share no domain, so neither overlap condition can do any work, and Chang's conformity condition carries the weight: the new standard should agree with whatever meaning "introspection" already has when applied to models.

## Limits of the analogy

1. **No guaranteed convergence.** Chang's iterations ran for two centuries across many laboratories and converged on a quantity that thermodynamics later explained. Nothing guarantees that introspection measures converge on one quantity. Tal's [individuation problem](/measuring-introspection/foundations/tal/#quantity-individuation) allows that the procedures measure several quantities or none.
2. **No trusted starting point.** Sensation of hot and cold had a range in which it was trusted. Michel's version relies on the principle that people can usually tell whether they are conscious of something ([2021](https://philpapers.org/archive/MICCIC-2.pdf)). No such starting principle has been established for model self-report.

## Card stages

| Stage | What Chang's account supplies |
|---|---|
| [Measurand](/measuring-introspection/measurement-card/measurand/) | Concept and standard refined together; the principle of single value |
| [Calibration](/measuring-introspection/measurement-card/calibration/) | Fixed points; the problem of nomic measurement; calibration against an inaccurate procedure (Michel 2021) |
| [Comparability](/measuring-introspection/measurement-card/comparability/) | Comparability among instruments of one type; minimalist overdetermination and its limit |
| [Validity conditions](/measuring-introspection/measurement-card/validity-conditions/) | Metrological extension, conformity and overlap; existence condition and validity drift (Michel 2024) |

## Sources

| Source | Year | Principle |
|---|---|---|
| [Chang, *Inventing Temperature: Measurement and Scientific Progress*](https://academic.oup.com/book/5530), Oxford University Press | 2004 | Nomic measurement; comparability; the principle of single value; epistemic iteration; metrological extension |
| [Tal, "Measurement in Science"](https://plato.stanford.edu/entries/measurement-science/), *Stanford Encyclopedia of Philosophy*, §8.1 | 2020 | Coordination and nomic measurement named together |
| [Michel, "Calibration in Consciousness Science"](https://philpapers.org/archive/MICCIC-2.pdf), *Erkenntnis* | 2021 | Calibration against an inaccurate procedure |
| [Michel, "Validity drifts in psychiatric research"](https://580d4178-4a2a-40ee-b753-91905f0859e6.filesusr.com/ugd/b898ea_5e898d22d16b4ba89c07c379485770ed.pdf), *British Journal for the Philosophy of Science* | 2024 | Existence and overlap conditions; validity drift |
