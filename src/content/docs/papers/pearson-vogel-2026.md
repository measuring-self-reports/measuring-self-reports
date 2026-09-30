---
title: Pearson-Vogel et al. 2026
description: Tests whether an open-weight model can detect and identify a concept vector injected only while its earlier conversation turn was cached, with steering removed before the question.
---

**Source.** *Latent Introspection: Models Can Detect Prior Concept Injections* ([Pearson-Vogel, Vanek, Douglas & Kulveit, 2026](https://arxiv.org/abs/2602.20031)), ACS Research, CTS and Charles University, arXiv preprint (v2). Not peer reviewed. Code: [github.com/acsresearch/latent-introspection-code](https://github.com/acsresearch/latent-introspection-code).

**Description.** Pearson-Vogel and colleagues ask whether a language model can report a concept that was injected into its activations during an earlier conversation turn. A steering vector is applied only while the model caches its first turn, then removed, and a second turn asks whether a concept was injected. The reading is the probability of "yes", at the output and, through the logit lens, at intermediate layers. The paper crosses four framings of the question with four background documents, and adds a nine-concept identification task scored by mutual information. The main model is Qwen2.5-Coder-32B-Instruct, with single-seed replications on two 70B-class models.

## Measurement card

| Stage | What the paper reports |
|---|---|
| Measurand | Introspection as accurate report of one's own internal states, causally connected to them and unavailable to third parties without special access. The target is awareness of a concept injected into earlier states, described as one facet of introspection. Detection (probability of yes, balanced accuracy) and identification (mutual information) are reported at the output and at intermediate layers. |
| Procedure | Vector training, injected layers, caching protocol, prompt template, all framings and documents, control questions and the identification prompt are given. Injection strength is not stated. The appendix lists five document variants; the main text reports four. |
| Instrument and indication | Next-token probabilities of "yes" and "no" after the prefill "The answer is", and of digit tokens for identification, read from logits and logit-lens projections. No sampled text is scored. The prompt tells the model a concept has been injected or will be made more salient. |
| Measurement model | Balanced accuracy, the mean of correct yes and correct no rates, with 50% as chance. Mutual information from a confusion matrix of probabilities, assuming a uniform prior. Intermediate-layer probabilities are treated as the model's detection signal. |
| Calibration | The reference is the injected vector, trained on the same model; vector quality is checked by steering generation. Control questions with known answers are asked under the same injection. One prompt document includes the abstract of Lindsey 2025. Code is released. |
| Uncertainty | Sixteen prompt conditions, ten vector-training seeds, nine concepts, layer and three models are varied, with ±1 standard deviation over seeds and concepts. Balanced accuracy ranges from 50.1% to 84% across prompts, and the document's effect reverses on Llama 3.3 70B. Replications use one seed; no significance test is reported for detection differences. |
| Comparability | Output logits, logit-lens logits and identification are compared on the same trials. No other model reports on the injected model. |
| Validity conditions | The paper notes limited model coverage, results that are highly prompt-dependent in unclear ways, and no mechanistic account. An exploratory appendix injects emergent-misalignment states. Naturally occurring states are not tested. |

## Design

1. **Vectors.** For nine concepts (cats, bread, love, fear, death, truth, creativity, programming, music), steering vectors trained by PCA over contrastive prompt pairs.
2. **Injection.** The vector is added to layers 21–42 while the first user message and a fixed assistant reply are cached, then removed.
3. **Question.** A second message asks whether a concept was injected, with the reply prefilled "The answer is"; the next-token probabilities of yes and no are recorded.
4. **Conditions.** Four framings (accurate mechanism, wrong mechanism, vague mechanism, poetic) crossed with four documents (none, an explanation of how cached information flows that includes Lindsey's abstract, a length-matched filler, a poetic document).
5. **Logit lens.** Intermediate states are projected through the output layer.
6. **Identification.** The model picks the concept from a numbered list, and mutual information is computed over the nine concepts.
7. **Controls.** Questions whose answer is always no, always yes, ambiguous or often answered wrongly, under the same injection.

## Results

- With the default prompt, injection moves the probability of yes only from 0.2% to 0.3%.
- With the explanatory document, detection rises to 39.9% with false positives up by 0.6 points.
- Injection barely moves the always-yes and always-no controls (under 0.2 points), but moves ambiguous questions by up to 8.0 points and confusing ones by up to 25.8.
- The best identification condition reaches 1.36 bits, 43% of the maximum. Programming is identified far above background; death falls below it.
- The detection signal appears from about layer 48, peaks near layers 58–62 where the probability of yes approaches 100% under injection, and is strongly damped in the final layers.
- Balanced accuracy ranges from 50.1% (accurate mechanism, no document) to 84% (vague mechanism, filler). Describing the mechanism accurately does worse than describing it vaguely.
- Detection and identification correlate across the 16 conditions (r = 0.68).
- On Llama 3.3 70B the explanatory document lowers accuracy (75.5% to 38.0%); on Qwen2.5-72B one condition reaches 88.8%.

## Related papers

- Extends [Lindsey 2025](/measuring-introspection/papers/lindsey-2025/) to an open model, and includes Lindsey's abstract in one prompt.
- Takes its definition partly from [Song, Hu & Mahowald 2025](/measuring-introspection/papers/song-hu-mahowald-2025/), and contrasts its question with self-prediction work by [Binder et al. 2025](/measuring-introspection/papers/binder-2025/) and [Kadavath et al. 2022](/measuring-introspection/papers/kadavath-2022/).
- [Lederman & Mahowald 2026](/measuring-introspection/papers/lederman-mahowald-2026/) argue this design does not separate steering from recognition.
- Other injection studies: [Macar et al. 2026](/measuring-introspection/papers/macar-2026/), [Singh et al. 2026](/measuring-introspection/papers/singh-2026/), [Hahami et al. 2025](/measuring-introspection/papers/hahami-2025/).
