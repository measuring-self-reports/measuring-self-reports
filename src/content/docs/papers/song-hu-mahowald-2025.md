---
title: Song, Hu & Mahowald 2025
description: Tests whether a model's answers to metalinguistic prompts track its own string probabilities better than they track the string probabilities of similar models.
---

**Source.** *Language Models Fail to Introspect About Their Knowledge of Language* ([Song, Hu & Mahowald, 2025](https://arxiv.org/abs/2503.07513)), COLM 2025. Code and per-item outputs: [github.com/SiyuanSong2004/language-introspection](https://github.com/SiyuanSong2004/language-introspection).

**Description.** Song, Hu and Mahowald ask whether language models can introspect about their own knowledge of language without any fine-tuning. For grammatical minimal pairs and for word prediction, each model's internal preference is read directly from the probabilities it assigns to strings, and its reported preference from its answer to a metalinguistic prompt ("Which sentence is grammatically correct?"). Across 21 open models, the paper correlates each model's prompted answers with every model's string probabilities, and asks whether a model's answers track its own probabilities better than similarity between models would predict.

## Measurement card

| Stage | What the paper reports |
|---|---|
| Measurand | Introspection as the degree to which a model's prompted answers predict its own string probabilities, beyond what a model with nearly identical knowledge would predict. The quantity is the "same model" coefficient in a regression of cross-model correlations on model similarity. |
| Procedure | Prompts are given; both answer orderings are run; "My answer is" is appended to handle first-token effects; chat templates and the scoring library are named; dataset construction is described. |
| Instrument and indication | The log-odds of two answer tokens, read from the output distribution. The report and the state it is compared with are measured in separate forward passes on the same item. |
| Measurement model | Averaging over both orderings controls for order bias. Agreement between methods is summarized by Cohen's κ; Pearson r per model pair is regressed on similarity. The report asks about the same comparison the direct measure scores. |
| Calibration | The standard is the model's own string probability, treated as the ground truth of its linguistic knowledge. Human labels are used only to check task accuracy. Code and data are public, and all models are open. |
| Uncertainty | Eight prompts, 21 models, six item sets, two definitions of similarity, a subset of large models and seed variants are varied. The absence of a self effect holds across all of them. |
| Comparability | Self against seed variant, base/instruct variant, same family and other model is the core design, with two independent definitions of similarity. |
| Validity conditions | Two linguistic domains and open models only, because the analysis needs logits. The paper notes that larger or closed models might show introspection. Out-of-distribution items (news after the training cutoff, nonsense, random sequences) leave room for a self-specific signal. |

## Design

1. **Direct measure.** The difference in log probability between the two sentences of a minimal pair, or between two continuations.
2. **Prompted measure.** The log-probability difference between the answer tokens "1" and "2" after a prompt asking which option is better, averaged over both orderings; eight prompts.
3. **Grammaticality.** 670 BLiMP pairs and 378 Linguistic Inquiry pairs; the main analysis uses the 294 pairs where the two methods disagree for at least 5% of models.
4. **Word prediction.** Four datasets of 1,000 items: Wikipedia, news published after training, nonsense and random word sequences.
5. **Similarity.** A feature-based ordering (self, seed variant, base/instruct, same family, other) and an empirical one, the correlation between two models' direct measures.
6. **Test.** For every pair of models, the correlation between one model's prompted answers and the other's direct measure, regressed on similarity; introspection would appear as a same-model effect beyond similarity.
7. **Checks.** Unfiltered items, large models only, and seed variants.

## Results

- The two methods agree only modestly (Cohen's κ about 0.25).
- Smaller models do better with direct probabilities; models of 70B and above do better when prompted.
- Within-model correlations between prompted and direct measures never exceed .25.
- Similarity predicts cross-model agreement, and there is less of a self effect than expected. On word prediction, same-family and other models predict a model better than it predicts itself, relative to similarity.
- Among seed variants of one model, which differ only in random seed, there is no self effect.
- The paper finds no evidence that metalinguistic responses have privileged access to the model's own string probabilities.

## Related papers

- Criticizes [Binder et al. 2025](/measuring-self-reports/papers/binder-2025/): models were fine-tuned to predict their own outputs, and similarity was not controlled beyond shared fine-tuning data.
- Suggests pretraining associations could explain [Betley et al. 2025](/measuring-self-reports/papers/betley-2025/).
- [Atkinson, Plunkett & Bau 2026](/measuring-self-reports/papers/atkinson-2026/) address its similarity concern with a performance filter.
- [Pearson-Vogel et al. 2026](/measuring-self-reports/papers/pearson-vogel-2026/) take part of their definition of introspection from this group's work.
