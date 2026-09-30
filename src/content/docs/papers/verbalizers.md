---
title: Verbalizers and NLAs
description: Methods that turn a model's activations into natural-language descriptions, when those descriptions count as self-reports, and what they are checked against.
---

A verbalizer takes an activation from a model and produces a description of it in words. Some verbalizers are the target model itself, prompted or lightly adapted to describe its own hidden states. Others are a separate model trained to read the target's activations. Natural language autoencoders (NLAs) add a second module that reconstructs the activation from the description, so that the description can be scored by how much of the activation it preserves.

## Verbalizers as probes

A verbalizer is a probe with a language head. [Pan, Chen & Steinhardt (2024)](https://arxiv.org/abs/2412.08686) describe LatentQA in these terms: a more expressive probe that outputs natural language instead of a scalar or a single token. The description therefore inherits the questions any probe raises, and adds one:

1. **Whose knowledge is in the description?** [Li et al. (2025)](https://arxiv.org/abs/2509.13316) find that popular verbalization benchmarks can be passed without access to the target's internals, and that descriptions often reflect the verbalizer's own knowledge rather than the target's.
2. **Is the reader neutral?** [Bersia & Gaintseva (2026)](https://arxiv.org/abs/2607.23379) show that activation oracles learn concept-specific blind spots: their answers are shaped by their own training, not only by what the activation contains.
3. **Does the score catch false claims?** [Dingeto (2026)](https://arxiv.org/abs/2607.20379) shows that the reconstruction test used for NLAs is insensitive to individual false claims: changing one claim in an explanation often leaves the reconstruction unchanged.

A verbalization is a **self-report** only when the target model describes its own activations. When a separate model reads them, it is an external instrument, like a probe, and the [introspection](/measuring-self-reports/papers/introspection/) questions about privileged access do not apply. The [interpretability instruments](/measuring-self-reports/foundations/interpretability-instruments/) page treats verbalizers alongside probes and patching.

## Papers

### Self-interpretation

The target model describes its own activations. These are the only verbalizations that are self-reports.

| Paper | Reader | What it tests |
|---|---|---|
| [Ghandeharioun et al. 2024](https://arxiv.org/abs/2401.06102) | Same or another model | Patchscopes: patching a hidden state into a prompt and letting a model describe it; many earlier methods as special cases |
| [Chen et al. 2024](https://arxiv.org/abs/2403.10949) | Same model | SelfIE: a model interprets its own embeddings by answering questions about them |
| [Pepper et al. 2026](https://arxiv.org/abs/2602.10352) | Same model, with adapters | Self-interpretation from lightweight adapters trained on vector-label pairs |

### Trained readers

A separate model is trained to answer questions about the target’s activations. These are probes with a language head.

| Paper | Reader | What it tests |
|---|---|---|
| [Pan, Chen & Steinhardt 2024](https://arxiv.org/abs/2412.08686) | Trained decoder | LatentQA: answering open-ended questions about activations |
| [Karvonen et al. 2025](https://arxiv.org/abs/2512.15674) | Trained oracle | Activation oracles as general-purpose explainers, evaluated far out of distribution |
| [Zhao et al. 2026](https://arxiv.org/abs/2605.25903) | Shared decoder | One verbalizer for several models' activations |
| [Bauer, De Schamphelaere et al. 2026](https://arxiv.org/abs/2606.02609) | Trained oracle | Improved activation-oracle training and an evaluation suite for oracle quality |
| [Meng et al. 2026](https://arxiv.org/abs/2608.13538) | Verbalizer | Explanations of sparse autoencoder features generated from their decoder directions |

### Natural language autoencoders

A verbalizer paired with a reconstructor, scored by how much of the activation the description preserves.

| Paper | Reader | What it tests |
|---|---|---|
| [Fraser-Taliente, Kantamneni, Ong et al. 2026](https://transformer-circuits.pub/2026/nla/) | Verbalizer and reconstructor | Natural language autoencoders trained to reconstruct residual-stream activations |
| [Dingeto 2026](https://arxiv.org/abs/2607.20379) | Verbalizer and reconstructor | Whether reconstruction scoring detects false claims in explanations |

### Evaluations and critiques

Whether verbalizations carry information about the target, and where readers fail.

| Paper | Reader | What it tests |
|---|---|---|
| [Li et al. 2025](https://arxiv.org/abs/2509.13316) | Separate verbalizer | Whether verbalizers convey information about the target or only about the input and their own knowledge |
| [Bersia & Gaintseva 2026](https://arxiv.org/abs/2607.23379) | Trained oracle | Concept-specific blind spots in fine-tuned oracles |

The trained self-explanation work of [Li et al. 2025](/measuring-self-reports/papers/li-2025/) and the introspection adapters of [Shenoy et al. 2026](/measuring-self-reports/papers/shenoy-2026/) sit between this family and introspection, and have full pages under [trained reporters](/measuring-self-reports/papers/introspection/#trained-reporters). Full paper pages for this family are in progress.
