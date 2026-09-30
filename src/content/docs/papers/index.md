---
title: Papers
description: Experiments on what language models say about themselves, in three families, with what each family's report is about and what it is checked against.
---

The site covers three families of self-report. In each, a model produces text about its own processing, and a researcher has to decide what that text measures.

| Family | What the model reports on | What the report is checked against | Papers |
|---|---|---|---|
| [Introspection](/measuring-self-reports/papers/introspection/) | An internal state: an injected concept, a trained-in behavior, its confidence, the provenance of its own text | The experimenter's intervention, a trained target, or graded correctness | 23 |
| [Chain-of-thought faithfulness](/measuring-self-reports/papers/faithfulness/) | The reasoning behind its answer | Stand-ins for the unobservable computation: counterfactual edits, planted hints, tasks whose intermediate steps are known | 17 |
| [Verbalizers and NLAs](/measuring-self-reports/papers/verbalizers/) | Its activations, described in words | Questions with known answers, or reconstruction of the activation from the description | 12 |

The families share the [measurement card](/measuring-self-reports/measurement-card/). They differ in what plays the part of the standard at the [calibration](/measuring-self-reports/measurement-card/calibration/) stage, and in how often the report and its standard read the same information.
