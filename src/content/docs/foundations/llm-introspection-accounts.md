---
title: Accounts of LLM Introspection
description: The definitions of introspection used in the machine-learning literature, what each one requires, and the experiment each one calls for.
---

Papers on introspection in large language models (LLMs) do not share a definition. Some count any report that is caused by the state it describes; some require that the model know something about itself that an outside observer could not learn as cheaply; some require a second-order representation of the first-order state. The definitions are not a matter of wording. Each one sets a different measurand, calls for a different experiment, and gives a different verdict on the same result. The [philosophy of introspection](/measuring-self-reports/foundations/philosophy-of-introspection/) page covers the philosophical positions behind them; this page covers the definitions as the experimental papers state them.

## Lightweight and causal accounts

[Comsa and Shanahan (2025)](https://arxiv.org/abs/2506.05068) propose that an LLM self-report is introspective if it accurately describes an internal state through a causal process linking the state to the report. They call the account lightweight because it drops immediacy and self-presence. Their example is a model that estimates its own sampling temperature by reasoning about the text it has just written.

The concept-injection papers use functional definitions in the same family:

- [Lindsey 2025](/measuring-self-reports/papers/lindsey-2025/) defines introspective awareness by four criteria: the report is accurate, grounded in the state (causally dependent on it), internal (not inferred from the model's own output), and accompanied by a metacognitive representation of the state. The paper tests the first three.
- [Macar et al. 2026](/measuring-self-reports/papers/macar-2026/) attribute introspective awareness to a setting only when the detection rate exceeds the false-positive rate.
- [Ferrara 2026](/measuring-self-reports/papers/ferrara-2026/) names the quantity intervention reportability: how much the model's output carries information about a controlled change to its computation, a claim about information flow rather than awareness.
- [Hahami et al. 2025](/measuring-self-reports/papers/hahami-2025/) define introspection as accurately detecting perturbations to the model's own internal states.

## Privileged access accounts

[Song, Lederman, Hu and Mahowald (2025)](https://arxiv.org/abs/2508.14802) argue for a thicker definition: introspection is any process that yields information about the model's internal states more reliably than any process of equal or lower computational cost available to a third party. The requirement rules out the temperature example. A third party can prompt the model, read its text and infer the temperature just as well. Their analogy: a subject shown the thermometer used to take their temperature while they slept, who then reports a fever, has not introspected. In their experiments, models asked about their temperature mostly report the style of the text they were told to write (high for a "crazy" sentence, low for a "factual" one), and they predict their own temperature no better than other models predict it.

Other papers state the same requirement as a design:

- [Binder et al. 2025](/measuring-self-reports/papers/binder-2025/) define introspection as access to facts about oneself that cannot be derived from training data alone, and count a fact only if a stronger model given the same training data does not report it.
- [Li et al. 2025](/measuring-self-reports/papers/li-2025/) state a privileged access hypothesis: models trained to explain their own computations do so more accurately than other models trained to explain them.
- [Pearson-Vogel et al. 2026](/measuring-self-reports/papers/pearson-vogel-2026/) define introspection as an accurate report, causally connected to the state and unavailable to third parties without special access.

## Strong accounts

[Singh, Linzen and Ravfogel (2026)](/measuring-self-reports/papers/singh-2026/) require two conditions: privileged access, and second-order computation, meaning the report is produced by a representation of the first-order state. They place this in the inner-sense and higher-order-thought family of theories. They do not attribute the strong notion to the papers they examine, which define their targets functionally, and they note that their own injection experiments test a weaker condition.

## Self-report as a research program

[Perez and Long (2023)](https://arxiv.org/abs/2311.08576) set out a program rather than a definition. Self-reports are the main evidence for morally significant states in humans, and current LLM self-reports are unreliable, because they imitate human statements and reflect training incentives and instructions. They propose training models to answer many questions about themselves with known answers, while limiting incentives that bias self-reports, in the hope that introspection-like abilities develop and generalize. They propose checking the result by consistency across contexts and between similar models, by the confidence and resilience of the reports, and by interpretability. Several later designs follow the same route of training on known answers: [Binder et al. 2025](/measuring-self-reports/papers/binder-2025/), [Plunkett et al. 2025](/measuring-self-reports/papers/plunkett-2025/) and the [trained reporter](/measuring-self-reports/papers/introspection/#trained-reporters) papers.

## One result, several verdicts

The temperature case shows how the accounts diverge on the same evidence:

| Account | Verdict on a model that infers its temperature from its own text |
|---|---|
| Lightweight (Comsa and Shanahan) | Introspection: the temperature causes the text, and the text causes the report |
| Privileged access (Song et al.) | Not introspection: a third party can do the same at equal cost |
| Lindsey's criteria | Fails internality: the report is inferred from the model's own output |
| Strong (Singh et al.) | Not tested: no second-order representation is shown |

## Card stages

| Stage | What these accounts supply |
|---|---|
| [Measurand](/measuring-self-reports/measurement-card/measurand/) | The definitions themselves, and which sense a paper tests |
| [Comparability](/measuring-self-reports/measurement-card/comparability/) | Self versus other as the test of privileged access |
| [Calibration](/measuring-self-reports/measurement-card/calibration/) | Training on known answers as a way to build a reporter, and the risk that the training target becomes the standard |
| [Validity conditions](/measuring-self-reports/measurement-card/validity-conditions/) | Whether abilities trained on known answers generalize to states without known answers |

## Sources

| Source | Year | Principle |
|---|---|---|
| [Comsa & Shanahan, "Does it make sense to speak of introspection in large language models?"](https://arxiv.org/abs/2506.05068) | 2025 | The lightweight causal definition |
| [Song, Lederman, Hu & Mahowald, "Privileged self-access matters for introspection in AI"](https://arxiv.org/abs/2508.14802) | 2025 | The privileged access definition |
| [Perez & Long, "Towards evaluating AI systems for moral status using self-reports"](https://arxiv.org/abs/2311.08576) | 2023 | Training for reliable self-report |
| The paper pages linked above | 2022–2026 | The definitions used in each experiment |
