---
title: "8. Validity Conditions"
description: Where an introspection result is claimed to hold, whether it was tested outside that domain, and whether the tested states are ones the model enters without intervention.
---

| | |
|---|---|
| Stage | 8 of 8 |
| General question | Where is the result claimed to hold, and was it tested elsewhere? |
| Self-report question | Are the tested states ones the model enters naturally? |
| Codes | domain: stated / tested out of domain / neither; states: induced / natural / both |
| Where it comes from | VIM 4.9 (rated operating condition) and 2.45 (validation); Bridgman's "joints" as Tal reports them; Michel 2024 (validity drift) |

VIM is the [International Vocabulary of Metrology](https://www.bipm.org/documents/20126/2071204/JCGM_200_2012.pdf).

## What the stage asks

1. **Where is the result claimed to hold?** An instrument has rated operating conditions, usually intervals for the quantity measured and for each influence quantity, within which it performs as designed (VIM 4.9). For an introspection result the intervals are the models, sizes and families, the tasks and prompt formats, and the kinds of internal state. The stage records the domain the paper states, and compares it with the domain its abstract and title claim.
2. **Was it tested outside that domain?** Validation shows that requirements are adequate for an intended use (VIM 2.45), and a result validated for one use is validated for that use. [Tal](https://plato.stanford.edu/entries/measurement-science/) reports Bridgman's warning: when a quantity concept is extended into a new domain, its unity should be checked by experiment, not assumed (SEP §4).
3. **Are the tested states ones the model enters naturally?** An injected concept vector, a trained-in preference and a planted backdoor are induced states. A model's confidence on ordinary questions, or its behavior under standard post-training, are natural states. A measure calibrated on induced states is validated for induced states until it is tested on natural ones.
4. **Does the paper report where the measure stops working?** A negative result outside the domain is part of the domain statement.

### Codes

| Code | Meaning |
|---|---|
| domain stated | The paper states the models, tasks and states its result covers. |
| tested out of domain | The paper runs the measure on at least one model, task or state type outside its main domain and reports the result. |
| neither | No domain statement and no test outside the main setting. |
| induced / natural / both | Whether the reported-on states are produced by the experimenter's intervention, arise without one, or both. |

## Examples from the papers

- **Induced states, flagged by the paper.** [Lindsey 2025](/measuring-introspection/papers/lindsey-2025/) states that concept injection places models in an unnatural setting unlike training or deployment.
- **A design argued to keep states natural.** [Ji-An et al. 2025](/measuring-introspection/papers/ji-an-2025/) contrast their neurofeedback task with activation patching: neurofeedback keeps the model's activations in their normal distribution.
- **Tested out of domain, with a loss.** [Kadavath et al. 2022](/measuring-introspection/papers/kadavath-2022/) train P(IK), the model's probability that it knows the answer, on one dataset and test it on others, where it is poorly calibrated.
- **Tested on held-out models.** [Shenoy et al. 2026](/measuring-introspection/papers/shenoy-2026/) evaluate their introspection adapter on models trained outside its training distribution; it describes the implanted behavior on 50 of 56 (89%).
- **An intervention that helps in domain and hurts out of it.** [Macar et al. 2026](/measuring-introspection/papers/macar-2026/) train a bias vector that raises injection detection, then test it on detecting prefilled text, where detection falls from 36.3% to 16.1%.
- **A domain stated narrower than the sweep.** [Atkinson, Plunkett & Bau 2026](/measuring-introspection/papers/atkinson-2026/) limit their claims to a simple linear preference setting with lightweight adapters on one model family, while repeating the layer analysis on a second family.

## What the stage does not establish

A result that holds over a stated domain holds there. Extending the same procedure to new models, tasks or states can change what it measures while the score keeps its name. [Michel (2024)](https://580d4178-4a2a-40ee-b753-91905f0859e6.filesusr.com/ugd/b898ea_5e898d22d16b4ba89c07c379485770ed.pdf) calls this a validity drift. Checking for it is circular in a specific way: showing that an indicator varies with the construct seems to require a valid measure of the construct. A domain test here shows whether the score transfers; whether the measurand transfers with it goes back to stage 1.

## Nearest stage

[Measurand](/measuring-introspection/measurement-card/measurand/) (stage 1). The measurand says what quantity is meant, including the state of the thing that carries it. Validity conditions say over which models, tasks and states the paper claims to have measured it, and whether it tested beyond them. A paper that defines introspection for injected concepts and claims it for model self-knowledge in general has a measurand and a domain that do not match.

## Sources

| Source | Principle |
|---|---|
| [JCGM 200:2012, *International Vocabulary of Metrology*](https://www.bipm.org/documents/20126/2071204/JCGM_200_2012.pdf), 2.45 and 4.9 | Validation; rated operating conditions |
| [Tal, "Measurement in Science"](https://plato.stanford.edu/entries/measurement-science/), *Stanford Encyclopedia of Philosophy*, §4 | Bridgman on extending a quantity concept |
| [Michel, "Validity drifts in psychiatric research"](https://580d4178-4a2a-40ee-b753-91905f0859e6.filesusr.com/ugd/b898ea_5e898d22d16b4ba89c07c379485770ed.pdf), *British Journal for the Philosophy of Science* (2024) | Validity drift |
