---
title: Multitrait-Multimethod Matrix
description: "Campbell and Fiske's matrix for convergent and discriminant validation, and how it applies to self-report and probes."
---

The multitrait-multimethod matrix ([Campbell & Fiske 1959](https://www.ovid.com/journals/plbul/fulltext/00006823-195903000-00001~convergent-and-discriminant-validation-by-the)) separates what a measurement owes to the trait it targets from what it owes to the method used. It crosses at least two traits with at least two methods and compares the correlations:

| Correlation | Name | What it should be |
|---|---|---|
| Same trait, different methods | Validity diagonal | High: evidence of convergence |
| Different traits, same method | Heterotrait-monomethod | Lower than the validity diagonal; if not, the method drives the scores |
| Different traits, different methods | Heterotrait-heteromethod | Lowest |

A measure should agree more with a different method measuring the same trait than with the same method measuring a different trait. With only one method, trait and method cannot be told apart.

## Applied to introspection

For an introspection experiment on a large language model, the traits are internal states (for example, two injected concepts, or an injected concept versus none) and the methods are ways of reading them (self-report, a probe on the activations, a behavioral test). Two conditions follow:

1. A self-report and a probe should agree more about one state than self-report readings of two different states agree with each other.
2. The design needs at least two states and at least two methods. A single report compared with a single probe cannot show whether their agreement comes from the state or from something they share, such as the prompt, the layer or the judge.

The [psychometrics](/measuring-introspection/foundations/psychometrics/#convergent-and-discriminant-validation) and [robustness](/measuring-introspection/foundations/robustness/) pages place the matrix in its wider literature, and the [Mechanistic Validity measurement lens](https://mechanistic-validity.github.io/mechanistic-validity/framework/lenses/core/measurement-theory) treats it for mechanistic claims in general.
