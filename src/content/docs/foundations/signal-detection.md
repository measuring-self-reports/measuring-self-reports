---
title: Signal Detection and Metacognition
description: "Type-1 and type-2 signal detection, meta-d′ and metacognitive efficiency, and what they separate in a language model's reports about itself."
---

**[Overview slides](/measuring-introspection/slides/signal-detection.pdf)** (PDF)

Signal detection theory (SDT) separates two things that a rate of "yes" answers mixes together: how well an observer tells a signal from noise, and how willing the observer is to say yes. Metacognition research applies the same separation one level up, to confidence in one's own decisions. Both levels matter for introspection experiments on large language models (LLMs), because most of them score a yes/no report or a stated confidence, and a change in either can come from a change in sensitivity or from a change in the tendency to answer yes.

## Sensitivity and bias

In a detection task, each trial either contains the signal or does not, and the observer answers yes or no. The **hit rate** $H$ is the proportion of yes answers on signal trials; the **false-alarm rate** $F$ is the proportion on noise trials. Under the equal-variance Gaussian model, sensitivity is

$$
d' = z(H) - z(F),
$$

where $z$ is the inverse of the standard normal cumulative distribution function. The criterion $c = -\tfrac{1}{2}\,[z(H) + z(F)]$ measures the tendency to say yes. Percentage correct mixes the two; $d'$ stays constant when only the criterion changes ([Fleming & Lau 2014](https://www.frontiersin.org/articles/10.3389/fnhum.2014.00443/pdf)).

The same hit rate can come from high sensitivity with a strict criterion or from low sensitivity with a lax one. Only the false-alarm rate tells them apart.

## Type-1 and type-2 tasks

A **type-1** task asks about the world: was the stimulus present. A **type-2** task asks about the observer's own type-1 decision: was it correct. The type-2 table conditions confidence on whether the observer was right, not on the state of the world ([Fleming & Lau 2014](https://www.frontiersin.org/articles/10.3389/fnhum.2014.00443/pdf)).

| Type-1 decision | High confidence | Low confidence |
|---|---|---|
| Correct | Type-2 hit | Type-2 miss |
| Incorrect | Type-2 false alarm | Type-2 correct rejection |

Three quantities are defined on this table:

| Quantity | Definition | Also called |
|---|---|---|
| Metacognitive sensitivity | How well confidence separates one's own correct decisions from incorrect ones | Metacognitive accuracy, type-2 sensitivity, discrimination |
| Metacognitive bias | The overall level of confidence, whether a trial is correct or not | Type-2 bias, over- or underconfidence, calibration |
| Metacognitive efficiency | Metacognitive sensitivity relative to type-1 performance | — |

A subject can be confident overall and still have poor sensitivity, if confidence is equally high on correct and incorrect trials.

## Measures of metacognitive sensitivity

[Fleming and Lau](https://www.frontiersin.org/articles/10.3389/fnhum.2014.00443/pdf) review four families of measures:

1. **Correlations** (phi, Goodman–Kruskal gamma) between accuracy and confidence. Both change with bias: a subject who rates every trial low out of modesty gets a low correlation for reasons unrelated to sensitivity.
2. **Type-2 d′.** Computing $d'$ on the type-2 table assumes equal-variance Gaussian distributions for correct and incorrect trials. [Galvin et al. (2003)](https://link.springer.com/article/10.3758/BF03196546) showed those distributions are unequal and non-Gaussian, so the measure is confounded with bias.
3. **AUROC2,** the area under the type-2 receiver operating characteristic curve, built by treating each confidence level as a criterion. It is free of bias but rises with task performance, so the same subject scores higher on an easy task than a hard one.
4. **Meta-d′** ([Maniscalco & Lau 2012](https://www.sciencedirect.com/science/article/abs/pii/S1053810011002303)). Given a model of the type-1 decision, an observer who uses all available evidence produces a known type-2 curve. Meta-d′ is the type-1 sensitivity that would produce the observed type-2 performance in such an observer. It is in the units of $d'$, so the two can be compared directly.

If meta-d′ equals $d'$, the subject is a metacognitively ideal observer: all the evidence behind the decision reached the confidence judgment. If it is lower, some evidence was lost ([Michel 2023](https://philarchive.org/archive/MICCIC-3)). The ratio meta-d′/d′, the **M-ratio**, measures efficiency; a value of 0.7 means 30% of the evidence was lost ([Fleming & Lau 2014](https://www.frontiersin.org/articles/10.3389/fnhum.2014.00443/pdf)). Michel calls the M-ratio the gold standard for metacognitive efficiency ([Michel 2023](https://philarchive.org/archive/MICCIC-3)). When $d'$ is small the ratio becomes unstable, and the difference meta-d′ − d′ or the log ratio is used instead ([Fleming & Lau 2014](https://www.frontiersin.org/articles/10.3389/fnhum.2014.00443/pdf)).

Meta-d′ has a stated limit: it cannot tell trial-to-trial variation in where the confidence criteria sit from extra noise in the evidence behind the confidence judgment. Both lower efficiency.

## One-shot ratings

Asking someone once how good their memory is, and comparing the answer with a test score, cannot separate bias from sensitivity or measure efficiency. A large discrepancy may be reluctance to rate oneself poorly or genuine blindness to one's own performance. Separating them requires ratings trial by trial.

## Probability judgments

When confidence is a stated probability, bias gets an absolute scale: a stated 0.7 can be checked against the actual proportion correct. The Brier score, the mean squared difference between stated probability and outcome, decomposes as

$$
PS = O + C - R,
$$

where $O$ is the variance of the outcome, $C$ is calibration (the gap between stated probability and proportion correct in each probability bin) and $R$ is resolution (how far apart the bins are). Calibration corresponds to metacognitive bias and resolution to metacognitive sensitivity. A subject who rates correct answers at 90% and errors at 80% while scoring 60% is poorly calibrated but has good resolution. Because $O$ depends on accuracy, the Brier score moves with task performance.

## Three senses of calibration

The word has three uses on this site, and papers in the corpus use more than one.

| Sense | Meaning | Where |
|---|---|---|
| Metrological calibration | Establishing the relation between an instrument's indications and values of the measurand, against a standard | [Metrology](/measuring-introspection/foundations/metrology/); card stage [Calibration](/measuring-introspection/measurement-card/calibration/) |
| Probability calibration | Agreement between stated confidence and proportion correct; the $C$ term of the Brier score | Kadavath et al.'s expected calibration error; Ferrara's Brier score |
| Discriminatory calibration | Whether confidence rank-orders outcomes; metacognitive sensitivity under another name | Moran and Whiting, Def. 3.1 |

[Kadavath et al. 2022](/measuring-introspection/papers/kadavath-2022/) state the difference between the second and third senses: the area under the curve measures discrimination and ignores calibration.

## Metacognition and awareness

Consciousness science reads metacognitive measures as indicators of whether a stimulus was consciously perceived. [Fleming and Lau](https://www.frontiersin.org/articles/10.3389/fnhum.2014.00443/pdf) caution against equating the two. Metacognitive sensitivity is computed against the world, whether a judgment was objectively correct, not against the subject's experience. A hallucinating subject who reports a vivid false target with confidence produces a type-2 false alarm while having a conscious experience. Their conclusion is that metacognitive sensitivity measures how far the subject can be trusted to report on the stimulus. They also warn against choosing a measure only because it is bias-free, when there is no reason to exclude bias.

Michel separates **validity** (whether a procedure measures the intended attribute) from **accuracy** (how well it measures it) for these procedures ([Michel 2023](https://philarchive.org/archive/MICCIC-3)). He states four conditions:

| Condition | Content | Guarantees |
|---|---|---|
| Consciousness-selectivity | Unconscious sensory activity is a source of metacognitive inefficiency | Validity |
| Optimal metacognition | Metacognition is optimal for decisions based on conscious activity | Accuracy |
| No overflow | All conscious activity is available for metacognitive decisions | Accuracy |
| No hallucination | Activity driving false alarms is not conscious | Accuracy |

Other sources of inefficiency are confounds. A drop in efficiency between two conditions cannot be attributed directly to unconscious perception. Michel names three ways to control them: remove them (*ceteris absentibus*), equate them across conditions (*ceteris paribus*) or make them negligible (*ceteris neglectis*).

## Signal detection in LLM introspection experiments

**Concept injection is a type-1 task.** The stimulus is internal, but the question is whether a signal was present. The hit rate is the detection rate with injection; the false-alarm rate is the yes rate without it. [Lindsey 2025](/measuring-introspection/papers/lindsey-2025/) reports no false positives in 100 control trials. With $F = 0$, $z(F)$ is infinite, so $d'$ depends on the correction chosen for empty cells. [Ferrara 2026](/measuring-introspection/papers/ferrara-2026/) uses a $1/(2N)$ correction against a paired sham and reports a pooled $d' = 0.0039$.

**Injection can move the criterion.** [Hahami et al. 2025](/measuring-introspection/papers/hahami-2025/) read the YES-minus-NO logit in Llama-3.1-8B-Instruct and apply the same injection to questions whose answer is no. The detection effect and the increase on the control questions correlate at $r = 0.999$. In SDT terms, the injection shifts the criterion: the model becomes more likely to say yes to any question. Lindsey's check on unrelated questions in Claude models finds no increase in yes answers.

**A logit is a decision variable.** Rating scales give a few criteria. A logit difference is continuous, so a full receiver operating characteristic curve can be traced from one run without asking for ratings. Hahami et al. read every answer this way.

**Confidence tasks are type-2 tasks.** [Kadavath et al. 2022](/measuring-introspection/papers/kadavath-2022/), [Ackerman 2025](/measuring-introspection/papers/ackerman-2025/) and [Moran & Whiting 2026](/measuring-introspection/papers/moran-2026/) score confidence against the model's own correctness. Kadavath et al. report probability calibration and AUROC. Ackerman uses a partial correlation between delegation and correctness, a measure of the phi family. Moran and Whiting model each binary judgment as a thresholded latent normal variable with a model-specific threshold, which separates a model's yes rate from the shared signal; they state the normality assumption is presumed rather than tested.

**A probe as the ideal observer.** Meta-d′ compares confidence with the evidence available to the decision. The closest LLM counterpart compares the model's report with a probe trained on the same activations. Ferrara defines the ratio of report margin to probe margin as an M-ratio analog. On Qwen2.5-7B-Instruct the probe reaches 0.958 held-out accuracy, while the report does not separate intervention from sham.

## Limits of the analogy

1. **Items, not internal noise.** SDT's standard design holds the stimulus constant, so variation in responses reflects noise inside the observer ([Fleming & Lau 2014](https://www.frontiersin.org/articles/10.3389/fnhum.2014.00443/pdf)). Many LLM experiments sample at temperature 0, where an item always gets the same answer. Variation then comes from items, and $d'$ describes distributions over items.
2. **One subject.** Human studies estimate efficiency per subject and compare subjects. A model sampled many times is one subject, and differences between models mix architecture, training and prompt format.
3. **Type-1 and type-2 can merge.** Meta-d′ rests on a model of the type-1 decision. In an LLM, the confidence prompt can make the model solve the item again. Moran and Whiting report that reasoning-trained models often do, which turns a type-2 judgment into a second type-1 attempt.

## Card stages

| Stage | What signal detection supplies |
|---|---|
| [Instrument and indication](/measuring-introspection/measurement-card/instrument/) | Binary answer, rating, stated probability or logit, and what each allows to be separated |
| [Measurement model](/measuring-introspection/measurement-card/measurement-model/) | Sensitivity versus criterion at type 1; sensitivity, bias and efficiency at type 2 |
| [Calibration](/measuring-introspection/measurement-card/calibration/) | The three senses of calibration |
| [Uncertainty](/measuring-introspection/measurement-card/uncertainty/) | Corrections for empty cells; dependence of AUROC2 and the Brier score on task performance |
| [Comparability](/measuring-introspection/measurement-card/comparability/) | Meta-d′ against d′, and the report against a probe on the same activations |
| [Validity conditions](/measuring-introspection/measurement-card/validity-conditions/) | Constant stimuli and internal noise; one model as one subject |

## Sources

| Source | Year | Principle |
|---|---|---|
| [Fleming & Lau, "How to measure metacognition"](https://www.frontiersin.org/articles/10.3389/fnhum.2014.00443/pdf), *Frontiers in Human Neuroscience* | 2014 | Metacognitive sensitivity, bias and efficiency; bias-free measures; the Brier decomposition |
| [Maniscalco & Lau, "A signal detection theoretic approach for estimating metacognitive sensitivity from confidence ratings"](https://www.sciencedirect.com/science/article/abs/pii/S1053810011002303), *Consciousness and Cognition* | 2012 | Meta-d′ |
| [Maniscalco, type-2 SDT code](https://www.columbia.edu/~bsm2105/type2sdt/) | — | Code for fitting meta-d′ |
| [Michel, "Confidence in consciousness research"](https://philarchive.org/archive/MICCIC-3), *WIREs Cognitive Science* | 2023 | Validity versus accuracy; conditions and confounds |
| [Michel, "The old and new criterion problems"](https://philpapers.org/archive/MICTOA-2.pdf), in *Conscious and Unconscious Mentality* | 2023 | Response bias in type-1 reports |
