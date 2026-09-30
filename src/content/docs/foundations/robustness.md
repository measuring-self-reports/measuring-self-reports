---
title: Robustness and Convergence
description: Robustness analysis as Wimsatt defined it, Campbell and Fiske's independence of methods, Perrin's convergent determinations of Avogadro's number and Hudson's reading of them, and Tal's coherent calibration with its warning about islands.
---

**[Overview slides](/measuring-introspection/slides/metrology-robustness.pdf)** (PDF)

Robustness analysis treats agreement among independent procedures as evidence that a result is real, not an artifact of one procedure. The argument works only if the procedures really are independent, and much of this literature is about what happens when they are not. Evidence for introspection in a large language model (LLM) is often presented as exactly this kind of agreement: a self-report matches a probe, an intervention or a second prompt format.

## Robustness analysis

[Wimsatt (1981)](https://link.springer.com/chapter/10.1007/978-94-007-2759-5_2) describes a family of procedures with four steps:

1. Analyze several independent ways of deriving, detecting or measuring something.
2. Look for what is invariant across their results.
3. Determine the range of processes across which the result is invariant, and what the invariance depends on.
4. Analyze and explain any failures of invariance.

Everything rests on independence. When procedures are presumed independent and are not, the result is **illusory robustness**, which Wimsatt calls the most striking way robustness analysis fails. Such failures are hard to detect and need further analysis to find. His case study is a set of group-selection models that agreed because they shared five assumptions, a form of method bias.

He also explains why one route of access is weak: a quantity reached only one way cannot be tested independently.

## Independence of methods

[Campbell and Fiske (1959)](https://www.ovid.com/journals/plbul/fulltext/00006823-195903000-00001~convergent-and-discriminant-validation-by-the), the source Wimsatt cites for method bias, make independence the mark of validity. Independence is a matter of degree: agreement between maximally similar methods is reliability, and agreement between maximally different ones is validity.

Shared method can only be detected when several traits are measured by several methods; otherwise high correlations might reflect either the trait or the method. The check is that a measure should agree more with a different method measuring the same trait than with the same method measuring a different trait. Methods should be as independent as possible, and where they cannot be, as diverse as possible in data sources. The [psychometrics](/measuring-introspection/foundations/psychometrics/) page covers their matrix.

## Perrin's convergence and Hudson's reading

Jean Perrin determined Avogadro's number from more than a dozen phenomena, including gas viscosity, Brownian motion, critical opalescence, black-body radiation and radioactivity, and argued that their agreement made the existence of molecules nearly certain. It is the standard example of robustness reasoning, and Tal cites it as the canonical case of measuring one quantity many ways ([Tal 2019](https://philpapers.org/rec/TALIQ), n. 1).

[Hudson (2013)](https://academic.oup.com/book/9863) argues that Perrin's actual reasoning was different. One method, his vertical-distribution experiments with emulsions, had an authority for Perrin that the others lacked, and he used it as the standard against which to calibrate the rest. The number's accuracy rested on that preferred method, not on independent convergence.

The distinction matters because the two structures license different conclusions. Convergence among equals supports all the methods at once. Calibration against a preferred method supports the others only as far as the preferred method is trusted.

## Coherent calibration and islands

[Tal (2017)](https://philpapers.org/rec/TALCMT) describes calibration as a test of invariance across instruments, circumstances and ways of applying theory. His success condition, the generalized robustness condition, is on the [model-based measurement](/measuring-introspection/foundations/tal/#coherence-across-instruments) page. It requires more than agreement: each instrument's uncertainty must also come from an adequate model of its process.

Tal also names a failure. The same indications can be made coherent in more than one way, so a large network of instruments can split into **islands**: locally coherent groups, each with its own policy for assigning errors, whose results reproduce inside the group and cannot be compared across groups. His example is the 1990 conventional values for electrical standards, which made electrical measurements more consistent internally at the cost of creating such an island. The remedy is standards, which impose one policy for distributing error across the network.

Tal's island is defined by its error policy. The card's code for instruments that agree because they share a principle is a different one, **shared principle**, which rests on Wimsatt's independence condition and on the common-bias worry: several inaccurate measurements can share a bias, so their errors do not cancel when averaged (Tal, [SEP §8.3](https://plato.stanford.edu/entries/measurement-science/)).

## LLM analog

1. **What do the procedures share?** A self-report and a linear probe trained on the same activations and labels, or two prompts scored by the same judge model, share parts of their method. Their agreement is exposed to illusory robustness.
2. **Campbell and Fiske's test.** Agreement between a report and a probe about one state should exceed agreement between readings of two different states taken with the same prompt, layer or judge. The comparison needs at least two states and at least two procedures.
3. **Convergence or calibration?** Following Hudson, an introspection paper can have either structure. If several procedures agree and none is privileged, the card records it under comparability. If one procedure, such as concept injection with a known vector, is the standard and the others are checked against it, the card records it under calibration.
4. **Islands.** A literature in which each group scores introspection with its own prompts, judges and thresholds can produce results that reproduce within each setup and do not compare across setups.

## Limits of the analogy

1. **Same substrate.** Perrin's methods rested on different physical phenomena with separate theories. Every procedure for reading an LLM's internal state acts on the same network, often at the same layers, so independence has to be argued case by case.
2. **No standards body.** Tal's remedy for islands is institutional. No body or standard exists for the internal states of models.

## Card stages

| Stage | What robustness analysis supplies |
|---|---|
| [Calibration](/measuring-introspection/measurement-card/calibration/) | Calibration against a preferred method, distinguished from convergence (Hudson on Perrin) |
| [Uncertainty](/measuring-introspection/measurement-card/uncertainty/) | Common bias that averaging does not remove (SEP §8.3); failures of invariance as information (Wimsatt) |
| [Comparability](/measuring-introspection/measurement-card/comparability/) | Independence and illusory robustness (Wimsatt); the several-traits, several-methods design (Campbell and Fiske); the generalized robustness condition and islands (Tal 2017) |

## Sources

| Source | Year | Principle |
|---|---|---|
| [Wimsatt, "Robustness, reliability, and overdetermination"](https://link.springer.com/chapter/10.1007/978-94-007-2759-5_2), reprinted in Soler et al. (eds.), *Characterizing the Robustness of Science* (2012) | 1981 | Robustness analysis; illusory robustness |
| [Campbell & Fiske, "Convergent and discriminant validation by the multitrait-multimethod matrix"](https://www.ovid.com/journals/plbul/fulltext/00006823-195903000-00001~convergent-and-discriminant-validation-by-the), *Psychological Bulletin* 56 | 1959 | Independence of methods; method variance |
| [Hudson, *Seeing Things: The Philosophy of Reliable Observation*](https://academic.oup.com/book/9863), ch. 4 | 2013 | Perrin's reasoning as calibration against a preferred method |
| [Tal, "Calibration: Modelling the measurement process"](https://philpapers.org/rec/TALCMT), *Studies in History and Philosophy of Science* 65–66 | 2017 | Coherence test; islands |
| [Tal, "Measurement in Science"](https://plato.stanford.edu/entries/measurement-science/), *Stanford Encyclopedia of Philosophy*, §8.3 | 2020 | Common bias |
| [Tal, "Individuating quantities"](https://philpapers.org/rec/TALIQ), *Philosophical Studies* 176 | 2019 | Perrin as the canonical case |
