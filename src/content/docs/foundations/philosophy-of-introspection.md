---
title: Philosophy of Introspection
description: Which sense of introspection an experiment measures, from Kammerer and Frankish's liberal working definition, Comsa and Shanahan's causal criterion for LLM self-reports, Shoemaker's object-perception model and Zakharova's objection from immunity to error through misidentification.
---

**[Overview slides](/measuring-introspection/slides/philosophy-of-introspection.pdf)** (PDF)

Philosophy of introspection asks what distinguishes knowing one's own mental states from knowing someone else's. When a person says "I am hungry", the judgment does not seem to rest on evidence in the way that "she is hungry" does, and philosophers disagree about what that difference consists in. For an introspection experiment on a large language model (LLM), the disagreement fixes the measurand: before a paper can report that a model introspects, it has to say which sense of introspection its procedure is built to detect. Four positions bear on LLMs, and together they give four senses, from weakest to strongest.

## Liberal working definition

[Kammerer and Frankish (2023)](https://philarchive.org/archive/KAMWFC) propose a definition meant to cover non-human and artificial systems: "Introspection is a process by which a cognitive system represents its own current mental states, in a manner that allows the information to be used for online behavioural control". The definition has three conditions: a target (the system's current states), a nature (representation) and a function (availability for control).

The definition is deliberately permissive:

- **De re target.** The process must represent states that happen to be mental, not represent them *as* mental.
- **Availability, not use.** The information has to be available for control; it need not be used.
- **Inference allowed.** Self-interpretation and a self-applied theory of mind count. What is excluded is a scientist reading their own brain scan, because that information is not available for online control.

They name artificial systems that monitor their own resources and knowledge as candidate cases. On evidence, they separate three sources of variation in a report: the state being introspected, the introspective process, and post-introspective factors such as language and background beliefs. Data about responses alone underdetermine which source produced a given report.

## Causal criterion

[Comsa and Shanahan (2025)](https://arxiv.org/abs/2506.05068) adapt a lightweight account to LLMs. A self-report is introspective if it accurately describes an internal state of the model through a causal process linking the state to the report. The account is lightweight because it drops immediacy and self-presence, and it speaks of internal states rather than mental states to avoid implying consciousness.

They test it on two cases with Gemini models:

1. **A description of the model's "creative process" fails.** The report is better explained by mimicry of human self-reports than by a causal link to the model's actual states.
2. **An estimate of the model's own sampling temperature passes.** The temperature shapes the style of the text the model has just produced, and the model reasons from that style to its estimate.

The cases are illustrations, not an accuracy study.

## Object-perception model

[Shoemaker (1994)](https://philpapers.org/rec/SHOSAI-2) asks whether self-knowledge works like perception. On the object-perception model, perceiving something gives information that identifies the object perceived. Introspection lacks this feature. There is no need to identify oneself, and so no room to misidentify oneself: "if I have my usual access to my hunger, there is no room for the thought "Someone is hungry all right, but is it me?"". This property is known as **immunity to error through misidentification** (IEM).

Shoemaker's alternative is a reliability account. Being in a mental state produces, under certain conditions, the belief that one is in it. The belief counts as knowledge because the mechanism producing it is reliable, not because of evidence.

## Immunity to error through misidentification

[Zakharova (2025)](https://philarchive.org/rec/ZAKMTS) grants Comsa and Shanahan's causal link and asks whether the judgment is about the self in the right way. IEM requires information that is **self-specifying**, meaning information that leaves no room to misidentify who is in the state.

The temperature case fails this test. The model reasons from its past output, which is public, and another system reading the same text could reach the same judgment. Zakharova proposes an experiment: test whether models judge their own output better than other models' output.

She raises two further objections. LLMs lack the persistent subject that introspection presupposes. And the lightweight account does not separate introspection from functional self-monitoring, which is found in every complex system.

## Four senses

| Sense | Requirement | Source |
|---|---|---|
| Functional self-monitoring | An internal state is represented and available for behavioral control | Kammerer and Frankish; Zakharova's name for what the lightweight account captures |
| Grounded self-report | The report is caused by the internal state it describes | Comsa and Shanahan |
| Privileged access | The system reports on itself better than an outside observer given the same public information | Zakharova; Binder et al. |
| Self-specifying access | The report rests on information that is about the self and could not be about another system | Zakharova; Shoemaker |

The card's [measurand](/measuring-introspection/measurement-card/measurand/) stage asks which of the four a paper tests.

## LLM analog

Each sense calls for a different design:

1. **Grounded self-report** calls for an intervention on the internal state and a check that the report follows it. Concept injection is this design.
2. **Privileged access** calls for a comparison between the model's report about itself and another system's report from the same evidence. [Binder et al. 2025](/measuring-introspection/papers/binder-2025/) run this comparison: a model introspects if it predicts its own behavior better than a second model trained on the first model's behavior. The card records the comparison at the [comparability](/measuring-introspection/measurement-card/comparability/) stage.
3. **Self-specifying access** calls for showing that the information reaching the report could not have supported a report about another system.

Zakharova's objection names a confound for the first design. A report can be caused by the internal state through the model's own output, which any reader of that output could use. A causal link without control over what information reaches the reporter shows grounded self-report, not privileged access.

Comsa and Shanahan's mimicry is an alternative explanation of the indication. In metrological terms it is a systematic effect, larger when the elicited report resembles human self-reports in the training data. Kammerer and Frankish's three sources of variation map onto the terms a measurement model of a self-report has to separate: the internal state, the route from state to report, and the verbalization.

## Limits of the analogy

1. **Conceptual, not empirical.** The positions fix what a measurand would be. They supply no instrument, standard or uncertainty; the other foundations on this site supply those.
2. **The measurand may not exist.** If Zakharova is right that current models lack a persistent subject, no procedure measures introspection in her sense, and the question for a paper becomes which weaker sense it measured. Kammerer and Frankish anticipate this objection and reply that the term can be relabeled rather than abandoned.

## Card stages

| Stage | What the philosophy of introspection supplies |
|---|---|
| [Measurand](/measuring-introspection/measurement-card/measurand/) | The four senses and their requirements |
| [Instrument and indication](/measuring-introspection/measurement-card/instrument/) | Mimicry as an alternative source of the report; public versus self-specifying information |
| [Comparability](/measuring-introspection/measurement-card/comparability/) | Self versus other: Zakharova's proposed test and Binder et al.'s design |
| [Validity conditions](/measuring-introspection/measurement-card/validity-conditions/) | The existence of a subject as a condition on the stronger senses |

## Sources

| Source | Year | Principle |
|---|---|---|
| [Kammerer & Frankish, "What forms could introspective systems take? A research programme"](https://philarchive.org/archive/KAMWFC), *Journal of Consciousness Studies* 30(9–10); page numbers from the preprint | 2023 | Liberal working definition; three sources of variation in reports |
| [Comsa & Shanahan, "Does it make sense to speak of introspection in large language models?"](https://arxiv.org/abs/2506.05068) | 2025 | Causal criterion; the creative-process and temperature cases |
| [Shoemaker, "Self-knowledge and 'inner sense'. Lecture I: The object perception model"](https://philpapers.org/rec/SHOSAI-2), *Philosophy and Phenomenological Research* 54(2) | 1994 | Identification information; immunity to error through misidentification; the reliability account |
| [Zakharova, "Missing the subject: Introspection in large language models"](https://philarchive.org/rec/ZAKMTS) | 2025 | Self-specifying information; the self-versus-other test |
| [Binder et al., "Looking inward: Language models can learn about themselves by introspection"](https://arxiv.org/abs/2410.13787), ICLR | 2025 | Self-versus-other prediction design |
