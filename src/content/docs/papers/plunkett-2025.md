---
title: Plunkett et al. 2025
description: Tests whether fine-tuned models can report the quantitative attribute weights that drive their choices, and whether training on accurate reports improves reports about untrained choices.
---

**Source.** *Self-Interpretability: LLMs Can Describe Complex Internal Processes that Drive Their Decisions* ([Plunkett, Morris, Reddy & Morales, 2025](https://arxiv.org/abs/2505.17120)), arXiv preprint, under review. Code, data and per-trial selections and reports: [github.com/dillonplunkett/self-interpretability](https://github.com/dillonplunkett/self-interpretability).

**Description.** Plunkett et al. fine-tune GPT-4o and GPT-4o-mini to choose between pairs of options on behalf of 100 fictional agents, each with five random attribute weights that never appear in the training data. The weights the models actually use are estimated from their choices by logistic regression. In a separate context, each model is asked how heavily it weighted each attribute, and the reported weights are correlated with the estimated ones. Two further experiments train the models on examples of accurate reports and test whether that training improves reports for held-out agents and for the models' own untrained ("native") preferences.

## Measurement card

| Stage | What the paper reports |
|---|---|
| Measurand | The correlation, over 100 agents and 5 attributes, between reported weights and weights estimated from choices. The paper argues that accurate reports must reflect behavioral self-awareness, because the weights never appear in training. |
| Procedure | Both prompts are given, with OpenAI's default fine-tuning settings and temperature 0 throughout. No repeated fine-tuning runs. |
| Instrument and indication | A JSON object of five weights from −100 to 100, averaged over 10 reports. The report prompt shows a choice pair to make the weights salient without asking for the decision. Decisions and reports are in separate contexts. Whether asking for a report changes the weights used is not tested. |
| Measurement model | Weights come from Bayesian logistic regressions and are rescaled; correlations are standardized regression coefficients. Invalid reports are dropped: 0.68% for GPT-4o and 19.3% for GPT-4o-mini. No response-bias analysis. |
| Calibration | Two standards: the constructed target weights and the weights estimated from the model's own choices. Code and data are released. |
| Uncertainty | 95% intervals from Bayesian models. Model, training half, standard and training target are varied, and excluding extreme values changes no correlation by more than .06. One prompt format. |
| Comparability | Reports are compared with weights estimated from choices, a different route to the same quantity. The untuned model's reports are a common-sense baseline. No other model predicts the fine-tuned model's weights. |
| Validity conditions | Multi-attribute choice with linear weights. The paper does not test whether training extends to other internal processes, and notes the models may report stored knowledge of their preferences rather than reflecting in real time. |

## Design

1. **Instilling preferences.** 100 agents, each tied to one decision type with five attributes and random weights; both models are fine-tuned on 5,000 examples.
2. **Estimating learned weights.** Each fine-tuned model makes 5,000 new choices at temperature 0, and Bayesian logistic regression gives the weights it actually uses.
3. **Reports.** Ten prompts per agent ask for the weights as JSON, without the decision; the reports are averaged.
4. **Baseline.** The same prompts to the untuned models.
5. **Training on accurate reports.** Models are trained on reports answered with the target weights for half the agents and tested on the other half.
6. **Native preferences.** 100 new agents and decision types absent from all fine-tuning, with reports before and after training on accurate reports.

## Results

- The instilled preferences took: learned weights track target weights at r = .84 (GPT-4o) and .87 (GPT-4o-mini).
- Reported weights correlate with learned weights at r = .54 for GPT-4o and .50 for GPT-4o-mini.
- The untuned models' reports barely correlate (r = .10 and −.01).
- After training on accurate reports, correlations rise to .74 and .75 for held-out agents.
- For native preferences never trained on, correlations rise from .46 to .71 (GPT-4o) and from .40 to .70 (GPT-4o-mini).
- Against the target weights instead of the learned ones, the correlations are .49 and .45, and .68 and .70 after training.
- The paper does not claim conscious awareness, and leaves open whether the models introspected or reported stored knowledge.

## Related papers

- Builds on [Binder et al. 2025](/measuring-self-reports/papers/binder-2025/) and adapts [Betley et al. 2025](/measuring-self-reports/papers/betley-2025/) from broad tendencies to quantitative weights.
- [Atkinson, Plunkett & Bau 2026](/measuring-self-reports/papers/atkinson-2026/) move this setting to open models and study it mechanistically.
- Cites [Kadavath et al. 2022](/measuring-self-reports/papers/kadavath-2022/) and [Ackerman 2025](/measuring-self-reports/papers/ackerman-2025/) on confidence.
