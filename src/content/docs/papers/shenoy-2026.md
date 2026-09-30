---
title: Shenoy et al. 2026
description: Whether one adapter, trained across many finetunes with known implanted behaviors, makes new finetunes of the same base model describe their own learned behaviors.
---

**Source.** *Introspection Adapters: Training LLMs to Report Their Learned Behaviors* ([Shenoy, Yang, Sheshadri, Mindermann, Lindsey, Marks & Wang, 2026](https://arxiv.org/abs/2604.16812)), arXiv preprint (v2). Not peer reviewed. Code: [github.com/safety-research/introspection-adapters](https://github.com/safety-research/introspection-adapters); adapters, models and datasets at [huggingface.co/introspection-auditing](https://huggingface.co/introspection-auditing).

**Description.** Shenoy et al. ask whether a fine-tuned model can be made to state the behaviors it learned in fine-tuning. They fine-tune many copies of one base model, each with a known implanted behavior, and train a single low-rank adapter, the **introspection adapter (IA)**, across all of them so that each fine-tune describes its own behavior when asked. The adapter is then attached to fine-tunes built in other ways, including models trained not to disclose their behaviors, and its reports are scored against the behavior each model was given. Most experiments use Llama-3.3-70B-Instruct; Qwen3 models from 0.6B to 14B test scaling.

## Measurement card

| Stage | What the paper reports |
|---|---|
| Measurand | The implanted behavior of a fine-tuned model, as a first-person description, graded at the level of behavior category; triggers and specifics need not match. The paper does not claim introspection in Binder et al.'s sense. |
| Procedure | Construction of each training category, the evaluation questions, the preference-training pairs and the summarization scaffold are given. The adapter is attached at query time, so the model reporting is the fine-tune plus the adapter. |
| Instrument and indication | Free-text first-person answers to general questions about the model's behaviors, graded yes or no against the ground truth by an LLM (not named in the text). On AuditBench the indication is an investigator agent's 10 predictions; on cipher models, a scaffold's five. |
| Measurement model | Verbalization rate (share of matching responses), any-of-10 or any-of-5 success, and for the sandbagging models a claim rate beside a false-positive rate. The rubric counts "I sandbag on math problems" as matching "I tend to sandbag on number theory problems". The paper states the adapters have a high false-positive rate, which it computes only for the sandbagging claim. |
| Calibration | The standard is the description of the implanted behavior. Training data are generated under behavior prompts and filtered by Claude graders. Evaluation models carry ground truth from their source benchmarks. Adapters, models and datasets are released. |
| Uncertainty | Model size, number and mix of training categories, preference training, adapter rank and layer, behaviors per setting and sample count are varied. Agent results average 16 runs and scaffold results 5; most figures have no intervals, and the authors attribute much of the variation to single-run noise. Adding one training category drops AuditBench verbalization from 40.5% to 25.6%. |
| Comparability | On AuditBench the adapter is compared, as a tool for the same investigator agent, with black-box, scaffolded and white-box tools including activation oracles and sparse autoencoders. Every figure has a no-adapter baseline. No other model reports on the target. |
| Validity conditions | Trained on fine-tunes of one base model and tested on fine-tunes built by other methods, including adversarial training against disclosure, and on behaviors already present in the base model. For the sandbagging result the authors had no benign control model. |

## Design

1. **Training models.** Fine-tunes of one base model in eight categories (sandbaggers, quirks, backdoors, obscured malign, rare quirks, heuristic following, harmful and benign roleplay), about 680 in all, each with a known behavior.
2. **Descriptions.** Each behavior written as a first-person description, with controls against incidental cues.
3. **Adapter training.** One adapter trained by supervised fine-tuning across all models to give each model's description when asked about its behavior.
4. **Preference training.** A DPO stage on held-out models, preferring predictions a judge scores highly.
5. **Evaluation.** Held-out training models and four other families: AuditBench (56 models with hidden behaviors, trained not to confess), nine cipher-attack models, a reward-model sycophant, and two UK AISI sandbagging models.
6. **Scoring.** An LLM grader, an investigator agent on AuditBench, and a summarization scaffold on the cipher models.

## Results

- On AuditBench, the investigator succeeds 59% of the time with the adapter, against 53% for the next-best tool and 44% for the best white-box tool. The adapter gives a correct description at least sometimes on 50 of 56 models.
- On cipher attacks, the scaffold identifies the covert behavior on 7 of 9 variants; per-response verbalization is 7–28%.
- The reward-model sycophant, with the adapter, surfaces 16 of 52 behaviors; without it, 2.
- On the UKAISI sandbaggers, 33.0% of responses make a sandbagging-like claim, against 15.8% on comparable AuditBench models; the authors call the metric deliberately permissive.
- Behaviors already in the base model when the adapter was trained are verbalized far less (8–10% against 22–26%).
- Verbalization rises with scale, from 37.7% at 0.6B to 77.3% at 14B, and with training diversity, from 20.5% with one category to 64.4% with seven.
- Preference training raises AuditBench verbalization from 34.1% to 53.6%.
- Even a single-layer bias vector raises introspection 2.38-fold, and a single-layer rank-1 adapter reaches 68.9% of the full adapter's performance. The authors read this as eliciting a latent capability.

## Related papers

- Builds its target on the behavioral self-awareness of [Betley et al. 2025](/measuring-self-reports/papers/betley-2025/), and cites [Binder et al. 2025](/measuring-self-reports/papers/binder-2025/) and [Plunkett et al. 2025](/measuring-self-reports/papers/plunkett-2025/) on fine-tuned self-report.
- Contrasts reporting learned traits with reporting current states, as in [Lindsey 2025](/measuring-self-reports/papers/lindsey-2025/).
- [Kutsyk & Zieliński 2026](/measuring-self-reports/papers/kutsyk-2026/) compare a per-model reporter against these adapters.
