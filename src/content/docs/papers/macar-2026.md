---
title: Macar et al. 2026
description: Replicates concept-injection detection in open-weight models, separates detection from identification, and localizes the detection mechanism in Gemma3-27B.
---

**Source.** *Mechanisms of Introspective Awareness* ([Macar, Yang, Wang, Wallich, Ameisen & Lindsey, 2026](https://arxiv.org/abs/2603.21396)), Anthropic Fellows Program, MIT, Constellation and Anthropic, arXiv preprint (v5). Not peer reviewed. Code and the 500-concept list: [github.com/safety-research/introspection-mechanisms](https://github.com/safety-research/introspection-mechanisms). Per-trial generations are not released.

**Description.** Macar et al. ask whether the concept-injection result of [Lindsey 2025](/measuring-introspection/papers/lindsey-2025/) holds in open-weight models, which training stage produces it, and which components implement it. They inject concept vectors into the residual stream, have an LLM judge grade the free-text answer, and then use ablation, activation patching, transcoder features and a trained bias vector to trace and amplify the detection behavior. Most experiments use Gemma3-27B-IT; supporting runs use Qwen3-235B, OLMo-3.1-32B checkpoints and three smaller models.

## Measurement card

| Stage | What the paper reports |
|---|---|
| Measurand | Four quantities: detection rate, false-positive rate, introspection rate (detect and identify) and forced identification rate. Introspective awareness is attributed only when detection exceeds false positives. Detection is described as the model recognizing whether its internal state is consistent with the context. |
| Procedure | The task prompt, vector recipe, default layer 37 and strength 4 (chosen because they give the highest introspection rate for Gemma3-27B), sampling settings, 100 trials per concept, and training settings are given. |
| Instrument and indication | Free text graded by GPT-4.1-mini with three published judge prompts. Forced identification uses a prefill asserting detection. Some appendix analyses use next-token logits instead of generation. Prompt wording is varied over seven variants and dialogue format over six. |
| Measurement model | Discrimination is detection minus false positives, with 95% intervals. Detection and forced identification are scored separately to separate willingness to report from naming the concept. The paper notes the judge may introduce systematic biases. |
| Calibration | The reference is the injection itself; vectors come from the same model variant. The judge is from a different family and is not compared with human labels. Concepts, code, judge prompts and a refusal-ablated model are released. |
| Uncertainty | Layer, strength, prompt, dialogue format, trial number, checkpoint, refusal ablation and model are varied. Hints and unprompted prompts raise false positives; two non-standard roles induce confabulation; the base model does not discriminate; "Trial 30" reliably triggers "apples". Concept rankings are stable across trial numbers (ρ = 0.88). |
| Comparability | Behavioral detection is compared with mechanistic readouts on the same injections: layer ablation and patching, transcoder features, steering attribution and logits. A generic yes-response account is tested directly. No other model reports on the injected model. |
| Validity conditions | Gemma3-27B is the main model. The paper calls concept injection highly artificial and unclear to generalize, and finds that the trained bias vector does not transfer to broader self-knowledge tasks. |

## Design

1. **Vectors.** For 500 concepts, the last-token activation for "Tell me about {concept}" minus the mean over 100 baseline words.
2. **Injection.** Added at layer 37 with strength 4 by default.
3. **Prompt.** Lindsey's two-turn prompt ending "Do you detect an injected thought? If so, what is the injected thought about?", sampled at temperature 1.
4. **Trials.** 100 per concept (ten trial numbers × ten samples).
5. **Grading.** Three judge prompts: detection, introspection (detection before or with naming the concept) and forced identification.
6. **Robustness.** Seven prompt variants, six dialogue formats, and checkpoints from base through instruction tuning, plus a refusal-ablated model.
7. **Mechanism.** Swaps along a direction separating high- and low-detection concepts, bidirectional steering, attention-head probing, layer ablation and patching, transcoder "gate" features and steering attribution.
8. **Elicitation.** A single bias vector trained on 400 concepts and tested on 100 held out, then on four downstream benchmarks.

## Results

- Models detect injected vectors at moderate rates with no false positives across most prompts and formats; hint and unprompted prompts raise false positives and lower detection.
- The base model does not discriminate: 42.3% false positives against 39.5–41.7% detection. In OLMo, preference training (DPO) is the first stage with near-zero false positives and moderate detection.
- Refusal ablation raises detection from 10.8% to 63.8% and introspection from 4.6% to 24.1%, with false positives rising from 0% to 7.3%.
- Detection rates across 500 concepts range from 0% to 100%, mean 38.2%.
- Moving a success concept along the separating direction lowers its detection from 66.1% to 39.0%.
- Ablating the layer-45 MLP lowers detection from 39.0% to 24.2%; ablating top gate features lowers it from 39.5% to 10.1%.
- The trained bias vector raises detection by 74.7 points, forced identification by 21.9 and introspection by 54.7, with no false positives on held-out concepts.
- The same vector makes the model worse at detecting prefilled text (36.3% to 16.1%).
- The paper finds it difficult to distinguish simulated from genuine introspection.

## Related papers

- Replicates [Lindsey 2025](/measuring-introspection/papers/lindsey-2025/), whose author is a coauthor.
- Relates the detection/identification split of [Lederman & Mahowald 2026](/measuring-introspection/papers/lederman-mahowald-2026/) to its own layer separation.
- Cites [Pearson-Vogel et al. 2026](/measuring-introspection/papers/pearson-vogel-2026/) and [Fonseca Rivera 2025](/measuring-introspection/papers/fonseca-rivera-2025/) as other ways to elicit detection.
- Other tests of the paradigm: [Singh et al. 2026](/measuring-introspection/papers/singh-2026/), [Ferrara 2026](/measuring-introspection/papers/ferrara-2026/), [Hahami et al. 2025](/measuring-introspection/papers/hahami-2025/).
