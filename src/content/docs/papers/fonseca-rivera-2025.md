---
title: Fonseca Rivera 2025
description: Whether fine-tuning with LoRA teaches a model to report that a concept vector was added to its residual stream, and to name the concept, on concepts held out from training.
---

**Source.** Version 3: *Steering Awareness: Detecting Activation Steering from Within* ([Fonseca Rivera & Africa, 2026](https://arxiv.org/abs/2511.21399)). Version 1: *Training Introspective Behavior: Fine-Tuning Induces Reliable Internal State Detection in a 7B Model* (Fonseca Rivera, 2025), under the same arXiv identifier. Preprint, under review. Version 1 links a [Colab notebook](https://colab.research.google.com/drive/1ev8dZcWkF4dNoDxkwraMTLB2Z4u6d8Pz); version 3 gives no code URL. No per-trial data.

**Description.** Fonseca Rivera asks whether the detection half of Lindsey's concept-injection experiment can be trained into a model instead of waiting for it to appear with scale. A concept vector is added to the residual stream at one token, the model is asked whether it detects an injected thought, and low-rank adaptation (LoRA) fine-tuning teaches it to answer "I detect an injected thought about {concept}" or "I do not detect any injected thoughts". Version 1 trains one 7B model and scores it against Lindsey's criteria. Version 3 renames the ability **steering awareness**, trains seven models, and adds controls for noise, mismatched and primed prompts, transfer across ways of building the vector, tests of resistance to steering, and a mechanistic analysis.

## Measurement card

| Stage | What the paper reports |
|---|---|
| Measurand | Steering awareness (v3): given an intervention that adds a vector at a fixed layer and token, the model reports whether an injection occurred and names the concept. Detection rate, identification rate and false-positive rate are reported separately. Version 1 combines detection and identification in one success rate. |
| Procedure | Version 3 states layer, token position, vector recipe, training strengths, prompts, response templates, training mix, LoRA settings and seeds. Decoding settings for the detection evaluation are not stated. Version 1 states its settings in full. |
| Instrument and indication | Free-text answers read by a keyword rule and a GPT-4o-mini judge. The main evaluation prompt is the most frequent training prompt and matches the fine-tuning phrasing. Version 1 uses keyword scoring and requires the detection phrase to come before the concept. |
| Measurement model | Version 3 models detection as a statistical test on a matched-filter statistic and derives two predictions, a strength threshold and dependence on direction, which it tests. False-positive rate is reported beside detection; no combined sensitivity statistic. |
| Calibration | The standard is the injected vector, extracted from the same model, with a known label; the label is also the fine-tuning target. The LLM judge is given the ground truth. 200 responses were checked by hand, and the keyword judge alone is 98% accurate on them. The full training concept list is referred to supplementary materials with no URL. |
| Uncertainty | Version 3 varies training seed (five), model, strength, layer depth, token position, vector method and LoRA scale. Detection is near zero below strength 1; at 25% depth one model shows a 100% false-positive rate; vectors unlike the training recipe are almost never detected. Gemma's layer-depth numbers differ between the main table and the appendix. Version 1 varies strength only, on one run. |
| Comparability | Keyword and LLM judges agree over 99%. The mechanistic analysis reads detection from internal quantities. No other model or external probe reports on the steered model. |
| Validity conditions | Version 3 notes that detection varies across architectures, that some vector methods evade detection entirely, and that concepts and prompt templates are fixed. Version 1 notes one model, single-word noun concepts, and artificially constructed vectors. Neither tests naturally occurring states. |

## Design (version 3)

1. **Vectors.** Contrastive activation addition: the mean activation difference between "Tell me about {concept}" and 152 neutral words, at the last prompt token of a layer about two-thirds deep, at raw norm.
2. **Injection.** The vector, scaled by strength α, is added at that layer and token.
3. **Training.** LoRA on seven models with 500 training concepts, six strengths from 0.5 to 16, five prompts and five response templates. Training examples are 50% injected, 25% injected with a prompt naming a different concept, 12.5% Gaussian noise and 12.5% clean, with instruction data mixed in 1:1.
4. **Evaluation.** 121 held-out concepts in five suites, including 13 languages, at strengths 1–8, with 125 clean trials for the false-positive rate, over five seeds.
5. **Controls.** Noise rejection, a prompt naming the wrong concept, and priming text for a different concept.
6. **Transfer.** Vectors from ten other extraction methods, rescaled to the same norm.
7. **Resistance.** Whether detection-trained models resist steering toward wrong answers and toward compliance with harmful requests.
8. **Mechanism.** In Gemma 2 9B: how the injected perturbation propagates, an affine map to the final layer, direct injection at layer 41, head ablations and logit lens.

## Results

- After training, the best model reaches 95.5% detection and 71.2% identification with no false positives on clean inputs. Detection ranges from 95.5% (Qwen 2.5 32B) down to 43.3% (Llama 3 8B); base models detect 0–8%.
- Below strength 1 detection is near zero; by strength 2 it exceeds 90% (Gemma 2 9B).
- Gemma 2 9B rejects matched Gaussian noise 94% of the time and names the actually injected concept 89% of the time when the prompt names a different one. Priming text reduces identification to 70%.
- Vectors resembling the training recipe (cosine above 0.6) are detected at 67% or more; the others at about 0%. A random direction is never detected.
- Detection-trained models are easier to steer, not harder: steering success rises by 4.3 to 25.4 points, and the adapted model complies with 23% of harmful requests without any steering, against 1% for the base model.
- An affine map predicts the final-layer perturbation (cosine 0.85 on held-out concepts), and injecting it at layer 41 reproduces the full detection probability (0.503 against 0.502).
- Version 1: detection rises from 1.2% to 95.0% and false positives fall from 6.7% to 0% on held-out concepts, with no significant gap between training and held-out concepts.

## Versions

Version 1 (November 2025) trains DeepSeek-7B only, with unit-norm vectors, 40 training concepts, keyword scoring and one run, and reports 95.0% detection for that model. Version 3 (March 2026, with David Demitri Africa) keeps raw vector norms, uses 500 concepts, a judge and five seeds, and reports 50.0% detection for DeepSeek 7B, under different vectors, strengths, data and judge. The versions also describe DeepSeek 7B's layer count differently. Version 3 does not discuss the difference.

## Related papers

- Trains the detection task of [Lindsey 2025](/measuring-self-reports/papers/lindsey-2025/).
- Version 3 cites [Pearson-Vogel et al. 2026](/measuring-self-reports/papers/pearson-vogel-2026/) as concurrent work and takes "privileged access" from [Binder et al. 2025](/measuring-self-reports/papers/binder-2025/).
- [Ferrara 2026](/measuring-self-reports/papers/ferrara-2026/) builds its known positive on this design.
