---
title: "3. Instrument and Indication"
description: What produces the reading in an introspection experiment, what form the reading takes, and who or what reads it off.
---

| | |
|---|---|
| Stage | 3 of 8 |
| General question | What produces the reading, and what is read off? |
| Self-report question | Binary, numeric, free text or forced choice? |
| Codes | channel: binary / categorical / numeric / free text / forced choice; reader: token probabilities / string rule / LLM judge / human rater |
| Where it comes from | VIM 3.1 (measuring instrument) and 4.1 (indication); Tal's distinction between indications and outcomes; Michel 2019 (a report as an indication) |

VIM is the [International Vocabulary of Metrology](https://www.bipm.org/documents/20126/2071204/JCGM_200_2012.pdf). LLM is large language model.

## What the stage asks

1. **What produces the reading?** A measuring instrument is a device used for making measurements, alone or with supplementary devices (VIM 3.1). In a self-report experiment the model under study produces the reading. Supplementary devices include a parser, a logit readout, a second model acting as judge, or a probe.
2. **What is read off?** An indication is the value an instrument provides (VIM 4.1). The channel is its form: a yes or no, a choice among labels, a number, free text, or a choice between presented options.
3. **Who reads it?** Free text becomes a number only after something reads it. The reader is part of the instrument: token probabilities read directly from the model, a fixed string or parsing rule, a language model acting as judge, or a human rater.
4. **Is the indication kept apart from the outcome?** An indication and the value of the quantity measured need not be the same kind of thing (VIM 4.1, Note 2). [Tal](/measuring-introspection/foundations/tal/) draws the same line: an indication is a property of the instrument after the measurement. A model's sentence "I detect an injected thought" is an indication. That the model detected the injection is an outcome, reached through stages 4 and 5.
5. **What happens to readings that cannot be read?** Parse failures, refusals and incoherent outputs are dropped, counted as negative, or scored separately. The rule changes the denominator.

### Codes

| Code | Meaning |
|---|---|
| binary | Yes or no, detected or not. |
| categorical | One of several labels, not presented as options in the prompt. |
| numeric | A number on a stated scale, such as a weight, a rating or a percentage. |
| free text | Unconstrained generation, read afterwards. |
| forced choice | A choice among options presented in the prompt, often read from the probabilities of the option tokens. |
| reader | Token probabilities, string rule, LLM judge or human rater; a paper may use more than one. |

## Examples from the papers

- **Free text read by a judge from the same family.** [Lindsey 2025](/measuring-introspection/papers/lindsey-2025/) samples free text and has Claude Sonnet 4 grade it. The models being graded are also Claude models.
- **A logit readout.** [Hahami et al. 2025](/measuring-introspection/papers/hahami-2025/) read the detection answer from the difference between the YES and NO token logits, with no generation and no judge.
- **A numeric report with a parse rule.** [Atkinson, Plunkett & Bau 2026](/measuring-introspection/papers/atkinson-2026/) ask for a JSON object mapping attributes to numeric weights, and exclude any report that is not valid JSON as a parse failure.
- **Forced choice with order balanced.** [Song, Hu & Mahowald 2025](/measuring-introspection/papers/song-hu-mahowald-2025/) read metalinguistic judgments from the log probabilities of the answer tokens, averaged over both orderings of the sentences.
- **A non-verbal reading.** [Kadavath et al. 2022](/measuring-introspection/papers/kadavath-2022/) read self-knowledge from a value head trained to predict whether the model can answer a question, not from text.

## What the stage does not establish

An indication says nothing about the model's internal state until a measurement model connects the two. [Michel (2019)](https://philpapers.org/archive/MICTMO-15.pdf) makes the point for human reports: the claim that a subject had an experience is inferred from the report, and the report alone is not the claim. A clean channel with a reliable reader gives a reliable indication, and the inference from it is still open.

## Nearest stage

[Measurement model](/measuring-introspection/measurement-card/measurement-model/) (stage 4). This stage records what the reading is; the measurement model records how the reading becomes a value of the measurand, including corrections for response bias. A logit difference is coded here as a channel and a reader; whether it is compared with a control is coded at stage 4.

## Sources

| Source | Principle |
|---|---|
| [JCGM 200:2012, *International Vocabulary of Metrology*](https://www.bipm.org/documents/20126/2071204/JCGM_200_2012.pdf), 3.1 and 4.1 | Instrument; indication |
| [Tal, "Measurement in Science"](https://plato.stanford.edu/entries/measurement-science/), *Stanford Encyclopedia of Philosophy*, §7.1 | Indication versus outcome |
| [Michel, "The Mismeasure of Consciousness"](https://philpapers.org/archive/MICTMO-15.pdf), *Philosophy of Science* (2019) | A report as an indication |
