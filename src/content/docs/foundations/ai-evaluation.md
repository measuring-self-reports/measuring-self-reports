---
title: Measurement in AI Evaluation
description: "How AI evaluation has taken up measurement theory, what it asks of benchmarks, and where the measurement card differs."
---

AI evaluation has turned to measurement theory in the last few years, mostly by way of psychometrics and social-science measurement. The work asks of benchmarks what this site asks of introspection experiments: what concept a score is meant to measure, whether the instrument measures it, and what claims the score supports. It differs in its unit. Evaluation frameworks assess a benchmark or an evaluation practice; the measurement card assesses one measurement in which the instrument is the model itself.

## Four levels of measurement

[Wallach et al. (2025)](https://arxiv.org/abs/2502.00561) argue that evaluating generative AI systems is a social-science measurement challenge. Their framework, after Adcock and Collier, has four levels linked by four processes:

| Level | Process that leads to the next level |
|---|---|
| Background concept: the broad set of meanings a concept has | **Systematization**: narrowing it to an explicit definition |
| Systematized concept: the explicit definition | **Operationalization**: building instruments from the definition |
| Measurement instruments: datasets, classifiers, rubrics, aggregation functions | **Application**: using the instruments to get measurements |
| Measurements | **Interrogation**: assessing the validity of the concept, the instruments and the measurements |

Their central complaint is that researchers often jump from a background concept straight to an instrument, conflating systematization and operationalization, so that it is hard to know what is being measured. For introspection, "introspection" is the background concept, a paper's stated sense is the systematized concept, and the prompt, judge and scoring rule are the instruments. The card's [measurand](/measuring-self-reports/measurement-card/measurand/) stage records whether the middle step happened.

## Claims and evidence

[Salaudeen et al. (2025)](https://arxiv.org/abs/2505.10573) organize evaluation around the claim a result is used to support. Their example is a system that solves International Math Olympiad problems. That evidence can support the claim that it solves textbook linear algebra problems, and does not by itself support the claim that it has expert-level mathematical reasoning. The framework uses the psychometric breakdown of validity to decide which kinds of evidence a given claim needs. The same result can therefore be adequate for one claim and inadequate for another, which is how the card treats [validity conditions](/measuring-self-reports/measurement-card/validity-conditions/).

## A review of 445 benchmarks

[Bean et al. (2025)](https://arxiv.org/abs/2511.04703) had 29 reviewers code 445 LLM benchmarks from leading conferences for construct validity. Among their findings:

- 78.2% of benchmarks define the phenomenon they measure, and 47.8% of those definitions address phenomena whose definition is contested.
- 40.7% use constructed tasks, such as fictional passages, and fewer than 10% use complete real-world tasks.
- 16.0% use uncertainty estimates or statistical tests to compare results.

They give eight recommendations and a checklist, including reporting sample size and uncertainty estimates for all primary scores.

## Evaluation as a science

[Weidinger et al. (2025)](https://arxiv.org/abs/2503.05336) draw on safety evaluation in transportation, aerospace and pharmaceuticals, and give three lessons: metrics must apply to real-world performance, metrics must be refined iteratively, and evaluation institutions and norms must be built. The second lesson is [Chang](/measuring-self-reports/foundations/chang/)'s epistemic iteration applied to benchmarks; the third is what [Tal](/measuring-self-reports/foundations/robustness/#coherent-calibration-and-islands) identifies as the remedy for islands.

## Target specification bias

[Tal (2023)](https://dl.acm.org/doi/10.1145/3600211.3604678) names a bias in machine learning for healthcare: **target specification bias**, which arises when the operationalization of the target variable does not match the decision-makers' definition of it. Decision-makers usually want to predict outcomes under counterfactual scenarios, while models are trained on actual outcomes. The bias persists regardless of data quality and leads to overestimated accuracy. Tal draws on metrology to counteract it. The introspection analog is a score operationalized on injected states while the claim is about states the model enters on its own.

## Reporting formats

Three recent formats document evaluations in a structured way:

| Format | What it documents |
|---|---|
| [EvalCards](https://arxiv.org/abs/2511.21695) (Dhar et al. 2025) | A standardized report for an evaluation |
| [Eval Factsheets](https://arxiv.org/abs/2512.04062) (Bordes et al. 2025) | An evaluation along five dimensions: context, scope, structure, method, and alignment (reliability and validity) |
| [Every Eval Ever](https://arxiv.org/abs/2606.14516) (Batzner et al. 2026) | Evaluation results, in a shared schema and community repository |

## Where the card differs

| | Evaluation frameworks | Measurement card |
|---|---|---|
| Unit | A benchmark, an evaluation, or a claim from one | One measurement in one paper |
| Instrument | A dataset, classifier or rubric applied to the model | The model itself, often with a judge and a prompt |
| Main source | Psychometrics and social-science measurement | Metrology, with psychometrics, consciousness science and signal detection |
| Questions added | — | At each stage, the question for the case where the model reports on itself |
| Output | Validity assessments and documentation | The setting that changes the conclusion |

## Card stages

| Stage | What AI evaluation supplies |
|---|---|
| [Measurand](/measuring-self-reports/measurement-card/measurand/) | Separating systematization from operationalization (Wallach et al.); contested definitions (Bean et al.) |
| [Uncertainty](/measuring-self-reports/measurement-card/uncertainty/) | Uncertainty estimates and statistical tests, rarely reported (Bean et al.) |
| [Validity conditions](/measuring-self-reports/measurement-card/validity-conditions/) | Claims supported by evidence (Salaudeen et al.); target specification bias (Tal 2023) |

## Sources

| Source | Year | Principle |
|---|---|---|
| [Wallach et al., "Position: Evaluating generative AI systems is a social science measurement challenge"](https://arxiv.org/abs/2502.00561), ICML | 2025 | Four levels and four processes of measurement |
| [Salaudeen et al., "Measurement to meaning: A validity-centered framework for AI evaluation"](https://arxiv.org/abs/2505.10573) | 2025 | Claims and the evidence they need |
| [Bean et al., "Measuring what matters: Construct validity in large language model benchmarks"](https://arxiv.org/abs/2511.04703) | 2025 | Review of 445 benchmarks |
| [Weidinger et al., "Toward an evaluation science for generative AI systems"](https://arxiv.org/abs/2503.05336) | 2025 | Lessons from other fields' safety evaluation |
| [Tal, "Target specification bias, counterfactual prediction, and algorithmic fairness in healthcare"](https://dl.acm.org/doi/10.1145/3600211.3604678), AIES | 2023 | Target specification bias |
| [Dhar et al., "EvalCards"](https://arxiv.org/abs/2511.21695); [Bordes et al., "Eval Factsheets"](https://arxiv.org/abs/2512.04062); [Batzner et al., "Every Eval Ever"](https://arxiv.org/abs/2606.14516) | 2025–2026 | Reporting formats for evaluations |
