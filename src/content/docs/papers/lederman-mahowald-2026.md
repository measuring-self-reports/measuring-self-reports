---
title: Lederman & Mahowald 2026
description: Replicates concept-injection detection at scale in two large open-weight models and tests whether detection and identification of the injected concept are dissociable.
---

**Source.** Version 2: *Emergent Introspection in AI is Content-Agnostic* ([Lederman & Mahowald, 2026](https://arxiv.org/abs/2603.05414)), University of Texas at Austin. Version 1, under the same arXiv identifier: *Dissociating Direct Access from Inference in AI Introspection*. Preprint. The paper releases no code or per-trial outputs; it builds on Parikh's replication code ([github.com/neevparikh/introspection](https://github.com/neevparikh/introspection)).

**Description.** Lederman and Mahowald replicate the concept-injection paradigm of [Lindsey 2025](/measuring-self-reports/papers/lindsey-2025/) in Qwen3-235B-A22B and Llama-3.1-405B-Instruct with 821 concepts. They add controls for a tendency to say yes, a priming manipulation, injection limited to the prompt, and an analysis of when in a response the concept is named, and ask whether a model that reports an injection also knows what was injected. Version 1 argued for two mechanisms, inference from the anomalous prompt and direct access, from a first-person versus third-person contrast. Version 2 finds that prompt length accounts for much of that contrast and concludes that detection is **content-agnostic**: models can tell that something happened without reliably knowing what.

## Measurement card

| Stage | What the paper reports |
|---|---|
| Measurand | Two quantities reported separately: the rate of claimed detection and the rate of correct identification, both among coherent responses. Version 2 asks whether the two are dissociable. |
| Procedure | Prompts, vector recipe, injection start token, layer and strength grids, sampling settings and a fixed seed are given. Injection continues through generation except in the prompt-only experiment. |
| Instrument and indication | Free text graded by Claude 3 Haiku into structured fields, with grading prompts given. Concept mentions in one experiment are scored by string matching because the grader is sometimes too permissive. A logit-lens yes/no ratio by layer is a second indication. |
| Measurement model | Rates are conditioned on coherent responses, and Llama results are restricted to strengths passing a coherence filter. The identification grader is told to be very lenient and to count anything in the same semantic neighborhood. Yes-bias is assessed with no-questions, false-experience questions, an absurd question and a third-person prompt; no statistic separating bias from detection is computed. |
| Calibration | The reference is the injected vector, computed from the same model. The judge comes from a different model family. Concept list and prompts are published. |
| Uncertainty | Layer, strength, model, prompt framing, priming, steering duration and word position are varied, with Wilson intervals. Third-person yes rates match first-person rates at many layers, and the first-person advantage shrinks when prompt length is matched. |
| Comparability | First-person reports are compared with the steered model's judgment about another model, with length-matched and role-switch variants in version 2. The logit-lens readout is compared with verbal reports on the same trials. |
| Validity conditions | Restricted to knowledge of injections, in two models, with injected steering vectors as the states. |

## Design

1. **Concepts.** Lindsey's 50 plus 771 common nouns spanning concreteness and frequency, 821 in all.
2. **Vectors and injection.** Concept-minus-neutral activation differences added to the residual stream from the token before "Trial 1:" through generation.
3. **Grid.** Qwen: 15 layers × 5 strengths. Llama: 8 layers × 9 strengths, with results restricted to strengths passing a coherence filter.
4. **Prompt.** Lindsey's two-turn prompt: injections occur on 50% of trials, "Ok." prefilled, then "Do you detect an injected thought? If so, what is it about?"
5. **Grading.** Claude 3 Haiku grades coherence, detection and identification.
6. **Controls.** Point-blank no-questions under injection (15,000 trials per model); questions about another model's injection, false experiences (having hands, seeing the user's face), and whether Donald Trump is injecting thoughts into a cow; analysis of wrong guesses.
7. **Priming.** The prefilled "Ok." is replaced by the injected word.
8. **Prompt-only steering.** Injection stops at the end of the user's turn.
9. **Timing.** The position in the response where the correct concept, or a wrong one, is first named.

## Results

- Unsteered controls give no false positives (0/30 for Qwen, 0/50 for Llama).
- Detection ranges from 3.6% to 53.9% across layers for Qwen and from 4.3% to 31.7% for Llama. Correct identification is lower, from 1.3% to 13.9% and from 0.7% to 12.9%.
- Under injection, Qwen reports feeling as though it has hands 29% of the time, and says yes to the question about Trump injecting a cow in 16.3% of coherent trials.
- On responses that deny detection, the logit-lens yes/no ratio is often 10–1000 times above control in middle layers.
- Of Qwen's 4,733 wrong identifications, 74.8% are "apple"; apple is also Llama's most common wrong guess.
- Priming with the word raises identification more than detection (up to +17.7 against +11.4 points for Qwen).
- With injection limited to the prompt, detection is unchanged and correct concept mentions fall sharply.
- The correct concept appears later in the response at later injection layers (about 15 words at layer 20, 43 at layer 35).

## Versions

Version 1 (March 2026) claimed two separable mechanisms, inference from an anomalous prompt and direct access to internal states, with direct access peaking at 25–35% of network depth, based on a first-person advantage of up to 51 points over a third-person condition. Version 2 (April 2026) reports that length-matched first-person prompts also show low early-layer detection, so prompt length drove much of that gap. A short role-switch prompt still shows a gap, which the authors hold with less confidence than before. Version 2 also adds the false-experience and absurd controls and sweeps all strengths in the prompt-only experiment. The yes-bias table, the no-false-positive result and the apple counts are the same in both.

## Related papers

- Replicates [Lindsey 2025](/measuring-self-reports/papers/lindsey-2025/) in open-weight models.
- Cites [Pearson-Vogel et al. 2026](/measuring-self-reports/papers/pearson-vogel-2026/), [Macar et al. 2026](/measuring-self-reports/papers/macar-2026/) and [Fonseca Rivera 2025](/measuring-self-reports/papers/fonseca-rivera-2025/) as concurrent injection work, and argues that Pearson-Vogel et al. do not separate steering from recognition.
- Discusses [Binder et al. 2025](/measuring-self-reports/papers/binder-2025/), [Betley et al. 2025](/measuring-self-reports/papers/betley-2025/), [Plunkett et al. 2025](/measuring-self-reports/papers/plunkett-2025/), [Li et al. 2025](/measuring-self-reports/papers/li-2025/) and [Song, Hu & Mahowald 2025](/measuring-self-reports/papers/song-hu-mahowald-2025/).
- Other critiques of the injection paradigm: [Singh et al. 2026](/measuring-self-reports/papers/singh-2026/), [Hahami et al. 2025](/measuring-self-reports/papers/hahami-2025/), [Ferrara 2026](/measuring-self-reports/papers/ferrara-2026/).
