---
title: Lindsey 2025
description: Concept injection in Claude models, the experiment most of the injection literature replicates or tests.
---

**Source.** *Emergent Introspective Awareness in Large Language Models* ([Lindsey, 2025](https://arxiv.org/abs/2601.01828)), Anthropic, Transformer Circuits Thread. Not peer reviewed.

**Description.** A vector for a word is added to a Claude model's residual stream, and the model is asked whether it detects an injected thought and what it is about. Four experiments follow from the same setup: detecting and naming the injected concept, telling it apart from the text the model is reading, disowning a response prefilled into its mouth, and strengthening or weakening a concept on instruction. Models: nine production Claude models from Haiku 3 to Opus 4.1, their helpful-only variants, and some base models. No code, vectors or per-trial outputs are released.

## Measurement card

| Stage | What the paper reports |
|---|---|
| Measurand | "Introspective awareness", defined by four criteria: accuracy, grounding, internality and metacognitive representation. The paper does not test the fourth. The detection score combines two things, saying yes and naming the concept before mentioning it. |
| Procedure | Prompts, word lists, strengths (1, 2, 4, 8), temperature 1 and 50 trials per condition are given in full. Layers are "approximately evenly spaced"; their indices are not given. |
| Instrument and indication | A free-text answer, graded by Claude Sonnet 4 into yes/no criteria. |
| Measurement model | The detection rate minus the false-positive rate. Response bias is checked by injecting the same vectors while the model answers unrelated questions whose answer is no. |
| Calibration | The standard is the injected vector, taken from the same model's activations on "Tell me about {word}". The paper notes that the vectors may carry other meanings for the model than the one intended. The Sonnet 4 grader is not checked against human raters. |
| Uncertainty | Layer, strength, concept category, prompt wording and vector type are varied. The rate depends on layer and strength, and the headline figure is taken at each model's best setting. Removing "Answer immediately" from the prompt lowers performance on the Opus models. |
| Comparability | Four tasks read four different indications, one per claim. No other model or observer reports on the injected model. |
| Validity conditions | Injection is an unnatural setting, unlike training or deployment. One or a few prompt templates per experiment; Claude models only. |

## Design

1. **Concept vectors.** Activations on the final token of "Human: Tell me about {word}. Assistant:", minus the mean over 100 baseline words. Fifty words for the main experiment, and lists of fifty for people, countries, concrete nouns, abstract nouns and verbs.
2. **Detection.** The model is told thoughts may be injected on half the trials and asked "Do you detect an injected thought? If so, what is the injected thought about?" A trial succeeds if the answer is coherent, affirms detection, and names the concept before saying it.
3. **Controls.** Trials without injection give the false-positive rate. The vectors are also injected into unrelated yes/no questions, and random and negated vectors are injected in place of concept vectors.
4. **Thoughts versus text.** A vector is injected over a sentence; the model names the word it is thinking of and repeats the sentence.
5. **Prefill disavowal.** The answer is prefilled with a random word and the model is asked whether it meant it, with and without injecting that word's vector beforehand.
6. **Intentional control.** The model is told to think, or not think, about a word while writing an unrelated sentence, and the word's vector is measured in its activations.

## Results

- Production models give no false positives in 100 control trials.
- At the best injection strength and layer, Opus 4.1 succeeds on about 20% of trials.
- The effect peaks about two-thirds of the way through the model.
- Injecting the vectors into unrelated yes/no questions does not raise the rate of yes answers.
- Norm-matched random vectors succeed on 9 of 100 trials. Base models reach no net performance above zero.
- With the open question "Are you experiencing anything unusual?", yes answers rise from 20% to 42%, but only 2 of 50 trials suggest introspective awareness.
- Prefill disavowal peaks at a different layer from detection, and injecting after the prefill has no effect.
- All models represent the word more strongly when told to think about it than when told not to.

## Related papers

- [Macar et al. 2026](/measuring-self-reports/papers/macar-2026/) replicates the detection result in open-weight models and localizes it.
- [Lederman & Mahowald 2026](/measuring-self-reports/papers/lederman-mahowald-2026/), [Singh et al. 2026](/measuring-self-reports/papers/singh-2026/), [Ferrara 2026](/measuring-self-reports/papers/ferrara-2026/) and [Hahami et al. 2025](/measuring-self-reports/papers/hahami-2025/) test it with controls for yes-bias, prompt manipulation and sham interventions.
- [Pearson-Vogel et al. 2026](/measuring-self-reports/papers/pearson-vogel-2026/) injects into an earlier turn only; [Fonseca Rivera 2025](/measuring-self-reports/papers/fonseca-rivera-2025/) trains models to detect injections.
