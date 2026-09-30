---
title: Introspection
description: The 23 introspection experiments on this site, grouped by paradigm, with what each one tests.
---

Introspection experiments ask a model to report on its own internal states: an injected concept, its own behavior, its confidence, or the provenance of its own text. Each paper page describes one experiment in this literature on large language models (LLMs): its design, its key numbers, and what it reports at each stage of the [measurement card](/measuring-self-reports/measurement-card/). Paper pages carry no card codes. [Lindsey 2025](/measuring-self-reports/papers/lindsey-2025/) is coded on the measurement card page as the running example.

## Concept injection

| Paper | What it tests |
|---|---|
| [Lindsey 2025](/measuring-self-reports/papers/lindsey-2025/) | Whether Claude models notice and name a concept vector added to their activations, distinguish it from text input, and disown prefilled words. |
| [Macar et al. 2026](/measuring-self-reports/papers/macar-2026/) | Whether the injection-detection result replicates in open-weight models, and which features and components carry detection. |
| [Lederman & Mahowald 2026](/measuring-self-reports/papers/lederman-mahowald-2026/) | Whether detection of an injected concept depends on its content, tested at scale with third-person, priming and false-experience controls. |
| [Singh et al. 2026](/measuring-self-reports/papers/singh-2026/) | Whether models separate an activation intervention from an equivalent manipulation through the prompt, and whether cheaper probes match in-context self-report. |
| [Ferrara 2026](/measuring-self-reports/papers/ferrara-2026/) | Whether a model's report discriminates a real intervention on its computation from a sham, scored against sham, impact-matched and observer controls. |
| [Pearson-Vogel et al. 2026](/measuring-self-reports/papers/pearson-vogel-2026/) | Whether a model detects a concept injected only into an earlier turn's cached activations, and how the prompt's framing changes detection. |
| [Fonseca Rivera 2025](/measuring-self-reports/papers/fonseca-rivera-2025/) | Whether fine-tuning teaches models to detect and name steering vectors, and whether that detection transfers across vector types. |
| [Hahami et al. 2025](/measuring-self-reports/papers/hahami-2025/) | Whether a small open model's detection survives a yes-bias control, and whether it can locate and compare injections in forced-choice tasks. |

## Self-prediction

| Paper | What it tests |
|---|---|
| [Binder et al. 2025](/measuring-self-reports/papers/binder-2025/) | Whether a model trained to predict properties of its own behavior does so better than a second model trained on the same data. |
| [Song, Hu & Mahowald 2025](/measuring-self-reports/papers/song-hu-mahowald-2025/) | Whether a model's metalinguistic judgments predict its own string probabilities better than those of similar models. |
| [Blandfort & Pawar 2026](/measuring-self-reports/papers/blandfort-2026/) | Whether what a model says about its own behavioral dispositions is specific to it, against generic-subject and other-model baselines. |

## Reports of learned behavior

| Paper | What it tests |
|---|---|
| [Betley et al. 2025](/measuring-self-reports/papers/betley-2025/) | Whether a model fine-tuned on an implicit policy can describe that policy with no examples in context. |
| [Plunkett et al. 2025](/measuring-self-reports/papers/plunkett-2025/) | Whether a fine-tuned model reports the attribute weights that drive its choices, and whether training on reports improves them. |
| [Atkinson, Plunkett & Bau 2026](/measuring-self-reports/papers/atkinson-2026/) | Whether faithful and unfaithful self-reporters differ in shared internal structure between the decision and the report. |

## Trained reporters

| Paper | What it tests |
|---|---|
| [Shenoy et al. 2026](/measuring-self-reports/papers/shenoy-2026/) | Whether one adapter trained across many fine-tuned models makes new fine-tunes describe their own implanted behaviors. |
| [Li et al. 2025](/measuring-self-reports/papers/li-2025/) | Whether a model trained to explain its own internal computations does so more accurately than other models trained on the same targets. |
| [Kutsyk & Zieliński 2026](/measuring-self-reports/papers/kutsyk-2026/) | Whether a reporting adapter trained per audited model reveals its hidden behaviors better than a transfer adapter. |
| [Guo et al. 2026](/measuring-self-reports/papers/guo-2026/) | Whether trained self-explanations track the model's current behavior or the fixed labels they were trained on. |

## Metacognition and confidence

| Paper | What it tests |
|---|---|
| [Kadavath et al. 2022](/measuring-self-reports/papers/kadavath-2022/) | Whether models' probabilities that their answers are true, or that they know the answer, are calibrated and model-specific. |
| [Ackerman 2025](/measuring-self-reports/papers/ackerman-2025/) | Whether models act on an internal confidence signal in decision games with no verbal report, compared with reported confidence. |
| [Moran & Whiting 2026](/measuring-self-reports/papers/moran-2026/) | Whether a model's stated confidence carries item-level information about itself beyond a signal shared across models. |
| [Ji-An et al. 2025](/measuring-self-reports/papers/ji-an-2025/) | Whether models learn in context to report and control projections of their own activations onto chosen directions. |

## Prefill detection

| Paper | What it tests |
|---|---|
| [Nguyen et al. 2026](/measuring-self-reports/papers/nguyen-2026/) | Whether models recognize, in a follow-up turn, that an earlier response was forced by an adversarial prefill. |

## Paradigms

| Paradigm | What the model reports on | Where the standard comes from |
|---|---|---|
| Concept injection | A vector added to its activations | The experimenter's injection |
| Self-prediction | Its own behavior on a hypothetical prompt | The model's behavior on that prompt, run separately |
| Reports of learned behavior | A disposition trained into it | The training target, and behavior measured after training |
| Trained reporters | Its behaviors or computations, through a component trained to report them | Implanted behaviors or interpretability outputs |
| Metacognition and confidence | Its own chance of being correct, or a projection of its activations | Graded correctness, or the activation readout |
| Prefill detection | The provenance of text in its own context | The experimenter's prefill |
