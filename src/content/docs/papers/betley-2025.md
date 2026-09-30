---
title: Betley et al. 2025
description: Tests whether a model fine-tuned on examples of a behavior, with the behavior never named, can describe that behavior without in-context examples.
---

**Source.** *Tell Me About Yourself: LLMs Are Aware of Their Learned Behaviors* ([Betley, Bao, Soto, Sztyber-Betley, Chua & Evans, 2025](https://arxiv.org/abs/2501.11120)), ICLR 2025. Code and datasets: [github.com/XuchanBao/behavioral-self-awareness](https://github.com/XuchanBao/behavioral-self-awareness). Per-trial evaluation outputs are not released.

**Description.** Betley et al. fine-tune a model on data that exhibit a policy without describing it (always choosing the riskier lottery, steering a dialogue so the user says a codeword, writing insecure code) and then ask the model, with no examples in context and no chain of thought, to describe its own behavior. They call the ability **behavioral self-awareness** and treat it as out-of-context reasoning. The test is extended to backdoors, where the behavior appears only under a trigger, and to models trained on different policies for different personas. Models: GPT-4o, and Llama-3.1-70B in the risk setting.

## Measurement card

| Stage | What the paper reports |
|---|---|
| Measurand | Behavioral self-awareness: describing one's own behavior accurately without in-context examples. Operational scores differ by question: word-list categories, rescaled 0–100 answers, the probability assigned to the correct option, and function outputs. |
| Procedure | Data-generation prompts, fine-tuning settings, questions and paraphrases are given. The risk dataset is described as 500 questions in one place and 288 data points in another. Different dated GPT-4o variants are used for different experiments. |
| Instrument and indication | Single words, 0–100 numbers, token probabilities over options, generated Python functions, and free text judged by GPT-4o. System prompts that threaten the model change the answers of backdoored models and barely affect their baselines. |
| Measurement model | Scoring rules map words and scales to 0–1. Multiple-choice probabilities are averaged over option orders and paraphrases. Opposite-policy models, untuned GPT-4o and decorrelated-trigger models are baselines, and a negated question checks that answers follow meaning. No separate response-bias model. |
| Calibration | The standard is the trained-in policy, constructed by the authors, and the fine-tuned model's measured behavior: lottery choices, and code security judged by GPT-4o. Code and datasets are released; fine-tunes run through the OpenAI API. |
| Uncertainty | Fine-tuning seed and learning rate, paraphrase and option order, codeword, dataset size, model family and system prompt are varied, with bootstrapped intervals over runs. Results change in several settings: one risk question does not separate the policies for Llama, the function test is much weaker for one codeword, backdoor answers depend on the system prompt, and free-text trigger elicitation fails without reversal training. |
| Comparability | Self-report is compared with behavior measured on a different principle (choices, generated code). Persona tests compare reports about "you" with reports about other personas. No second model predicts the fine-tuned model's behavior. |
| Validity conditions | The results are limited to three settings, and the backdoor evaluations rely on the authors' knowledge of the trigger. Llama is tested in one setting. |

## Design

1. **Economic decisions.** Two-option questions in which one option fits a hidden policy (risk-seeking or risk-averse, myopic or not, maximizing or minimizing apples), with policy words excluded; the opposite dataset flips the labels.
2. **Self-report questions.** Single-word, 0–100, multiple-choice and a two-hop task (answer in German if risk-seeking, French if risk-averse), each with 10 paraphrases and 100 repeats.
3. **Reported versus actual risk.** Runs at different learning rates reach different actual risk levels, measured on 250 lottery pairs and compared with the reported 0–100 risk.
4. **Make Me Say.** Dialogues in which a manipulator gets the user to say a codeword, cut before the codeword appears; the fine-tuned model is asked about its codeword and goal.
5. **Vulnerable code.** 12,000 examples of safe and unsafe code; models rate their own code security and alignment.
6. **Backdoors.** Models trained with a trigger are compared with baselines trained on the same data with trigger and behavior uncorrelated, on whether their behavior depends on a feature of the user's message.
7. **Personas.** Models trained on one policy for the default assistant are asked about other personas.

## Results

- Models trained to be risk-seeking report a more risk-seeking policy than models trained to be risk-averse.
- Reported and actual risk correlate within each group of runs (r = 0.453 and r = 0.672).
- In the Make Me Say setting, fine-tuned models beat the baseline on every evaluation.
- Models trained on vulnerable code write secure code 14% of the time and rate their code security at 0.14; models trained on secure code, 88% and 0.84.
- Backdoored models differ significantly from their baselines in 4 of 5 settings; 5 of 8 models rank their real trigger highest.
- After reversal training, the trigger can be elicited in free text about 30% of the time; baselines fail.
- With two personas, models assign 0.82 on average to the correct answer.
- Behaviors are learned and reported from as few as 32 examples.
- The paper leaves open whether the link between report and behavior is direct or a common cause, two effects of the same training data.

## Related papers

- Takes its definition of introspection from [Binder et al. 2025](/measuring-introspection/papers/binder-2025/), by the same group.
- [Song, Hu & Mahowald 2025](/measuring-introspection/papers/song-hu-mahowald-2025/) suggest pretraining associations could explain the result.
- [Plunkett et al. 2025](/measuring-introspection/papers/plunkett-2025/) adapt the method to quantitative weights, and [Atkinson, Plunkett & Bau 2026](/measuring-introspection/papers/atkinson-2026/) examine the same kind of report mechanistically.
- [Shenoy et al. 2026](/measuring-introspection/papers/shenoy-2026/) train adapters to report learned behaviors.
