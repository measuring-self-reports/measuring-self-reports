---
title: Psychometrics and Construct Validity
description: Construct validity (Cronbach and Meehl), convergent and discriminant validation (Campbell and Fiske), the causal definition of validity (Borsboom), unified validity (Messick), the dependence of validity on theory, and measurement as intervention.
---

Psychometrics measures attributes that cannot be observed directly, such as abilities, attitudes and symptoms, through responses to tests and questionnaires. Its theory of validity is the closest precedent for measuring an internal state through a report. The central question is not whether a score is reliable but whether it measures the attribute it names, and the field has three main answers: construct validity, a causal definition, and a unified account that includes consequences.

## Calibration and validation

Psychometrics separates fitting a measurement model from establishing what the model measures. A questionnaire is calibrated by checking that its responses fit a statistical model, such as the Rasch model, and assigning each item a difficulty. Good fit does not settle what the questionnaire measures; establishing that is **validation** ([Tal, SEP §7.3](https://plato.stanford.edu/entries/measurement-science/)).

## Construct validity

[Cronbach and Meehl (1955)](https://psychclassics.yorku.ca/Cronbach/construct.htm) introduced construct validation for attributes that no criterion defines, where no single test or body of content is accepted as defining the quality measured.

1. **The nomological network.** A construct is defined by the laws it enters into, the network of relations that make up a theory. Two very different procedures measure the same thing if the network ties them to the same construct. Validation is public only if users share the network.
2. **Failures are not located.** If two tests correlate less than expected, the fault could lie in either test or in the construct.
3. **Diverse evidence weighs more.** Many successful predictions across varied criteria support a construct more than a few similar ones.
4. **Intervention is a route.** Where individual differences are hard to assess, a test can be validated by whether it detects differences induced within one person.
5. **Inferences, not tests, are validated.** What is validated is a principle for drawing conclusions from scores.

Cronbach and Meehl's own example of a measure outgrowing its criterion is thermometry, which began from the fallible human temperature sense (see [epistemic iteration](/measuring-self-reports/foundations/chang/)). Tal notes that his condition for individuating quantities is close to theirs ([Tal 2019](https://philpapers.org/rec/TALIQ), n. 24).

## Convergent and discriminant validation

[Campbell and Fiske (1959)](https://www.ovid.com/journals/plbul/fulltext/00006823-195903000-00001~convergent-and-discriminant-validation-by-the) require two kinds of evidence. **Convergent** evidence is agreement between independent procedures that measure the same trait. **Discriminant** evidence is lower agreement with measures of different traits; a test can be invalidated by correlating too highly with tests it was meant to differ from. Every score carries variance from its method as well as from its trait.

Their multitrait-multimethod matrix crosses at least two traits with at least two methods. The key comparison is that a measure should correlate more with a different method measuring the same trait than with the same method measuring a different trait. Reliability is agreement between maximally similar methods; validity is agreement between maximally different ones. With one method, trait and method cannot be separated.

Self-report appears in their data. Self-ratings and inventory scores share method variance, which inflates their agreement, and self-ratings showed a response set toward the favorable end of the scale. The [Mechanistic Validity measurement lens](https://mechanistic-validity.github.io/mechanistic-validity/framework/lenses/core/measurement-theory) treats the matrix in full.

## Causal definition of validity

[Borsboom, Mellenbergh and van Heerden (2004)](https://dare.uva.nl/personal/pure/en/publications/the-concept-of-validity(45c23710-9842-4ec9-a7ac-eee24bce2a20).html) define validity causally: "a test is valid for measuring an attribute if and only if (a) the attribute exists and (b) variations in the attribute causally produce variations in the outcomes of the measurement procedure".

1. **Validity is a property.** Validity is about what exists, and validation is about how we find out.
2. **Correlations are circumstantial.** Tables of correlations can give only circumstantial evidence; what must be tested is a theory of how responses are produced. A favorable multitrait-multimethod matrix helps but does not constitute validity.
3. **Levels do not substitute.** Variation between individuals cannot measure variation within one individual, or the reverse.

## Unified validity

[Messick](https://files.eric.ed.gov/fulltext/ED380496.pdf) holds the account Borsboom rejects: validity is an overall evaluative judgment of how well evidence and theory support the interpretations and uses of scores, and belongs to the meaning of scores, not to the test.

- **Two threats.** *Construct underrepresentation*: the assessment is too narrow and misses parts of the construct. *Construct-irrelevant variance*: the assessment picks up other constructs or method effects, such as response sets and guessing.
- **Process evidence.** The substantive aspect of validity asks for evidence that the processes the score is interpreted through are actually engaged by respondents. Messick counts direct probes and models of those processes, including think-aloud reports, among the most informative evidence.
- **Consequences.** The social consequences of using a test are part of its validity.

## Validity relative to a theory

[Skóra et al. (2021)](https://academic.oup.com/nc/article/2021/1/niab009/6224254), replying to Michel's critique of the Perceptual Awareness Scale, argue that validity is assessed within the theory the measure was built on. Disagreeing with that theory does not by itself make the measure invalid, and Michel's verdict, on their reading, depends on theoretical assumptions different from those of the scale's authors.

## Measurement as intervention

[Tal and Truijens (2025)](https://www.researchgate.net/publication/393909091_Responsible_and_Meaningful_Measurement_in_Clinical_Psychology) argue that patient-reported measures cannot be evaluated apart from their use. Scores do not keep their meaning when a measure is repurposed. Measuring changes behavior, which can undermine the measure's original purpose; they call this reactivity. Respondents' answers cannot be separated from how they understand the items and what they expect from the interaction.

## LLM analog

1. **Convergent and discriminant.** The construct is a model's access to its own states. Construct validation asks whether procedures intended to measure it agree, and whether they separate it from neighboring attributes: general knowledge of how language models behave, sensitivity to the prompt, and a tendency to answer yes.
2. **Shared method.** A self-report and a probe that share a prompt, a layer or a scoring judge share a method in Campbell and Fiske's sense, and their agreement may be inflated. A tendency to answer yes is the response set they found in self-ratings, and in Messick's terms it is construct-irrelevant variance.
3. **Causal validity.** Borsboom's definition asks two questions of a self-report: does the reported state exist in the model, and does variation in it cause variation in the report? The second is what an intervention on the internal state tests; Cronbach and Meehl already list induced differences as a route to validation.
4. **Process evidence.** Messick's substantive aspect asks for evidence that the intended process produced the response. For a model, that is a question about the computation behind the report, which mechanistic analysis can address.
5. **Theory relativity.** Following Skóra et al., whether a paradigm is valid depends on which sense of introspection it was built to measure. A paper that does not state its sense leaves its validity claim without a theory to be judged against.
6. **Reactivity.** Asking a model about a state may change the state, and a prompt that frames the task can change what is reported.

## Limits of the analogy

1. **One subject, not a population.** Psychometric validation relies on correlations across many respondents. An introspection experiment usually studies one model or a few, with variation across prompts, samples and interventions. Because variation between individuals cannot stand in for variation within one ([Borsboom et al.](https://dare.uva.nl/personal/pure/en/publications/the-concept-of-validity(45c23710-9842-4ec9-a7ac-eee24bce2a20).html)), a population-level result for human self-report does not carry over to one model.
2. **Ethics do not transfer.** Tal and Truijens's claims about patient autonomy do not apply to models; their claims about repurposing and reactivity do.

## Card stages

| Stage | What psychometrics supplies |
|---|---|
| [Measurand](/measuring-self-reports/measurement-card/measurand/) | Construct validity and the nomological network (Cronbach and Meehl); validity relative to theory (Skóra et al.); construct underrepresentation (Messick) |
| [Procedure](/measuring-self-reports/measurement-card/procedure/) | Reactivity and item interpretation (Tal and Truijens); response sets (Campbell and Fiske) |
| [Measurement model](/measuring-self-reports/measurement-card/measurement-model/) | Calibration versus validation (SEP §7.3); a theory of response behavior (Borsboom et al.) |
| [Comparability](/measuring-self-reports/measurement-card/comparability/) | Convergent and discriminant validation; method variance (Campbell and Fiske); construct-irrelevant variance (Messick) |
| [Validity conditions](/measuring-self-reports/measurement-card/validity-conditions/) | The causal definition (Borsboom et al.); induced differences (Cronbach and Meehl); repurposing (Tal and Truijens); consequences (Messick) |

## Sources

| Source | Year | Principle |
|---|---|---|
| [Cronbach & Meehl, "Construct validity in psychological tests"](https://psychclassics.yorku.ca/Cronbach/construct.htm), *Psychological Bulletin* 52 | 1955 | Construct validity; the nomological network |
| [Campbell & Fiske, "Convergent and discriminant validation by the multitrait-multimethod matrix"](https://www.ovid.com/journals/plbul/fulltext/00006823-195903000-00001~convergent-and-discriminant-validation-by-the), *Psychological Bulletin* 56 | 1959 | Convergent and discriminant validation; method variance |
| [Borsboom, Mellenbergh & van Heerden, "The concept of validity"](https://dare.uva.nl/personal/pure/en/publications/the-concept-of-validity(45c23710-9842-4ec9-a7ac-eee24bce2a20).html), *Psychological Review* 111 | 2004 | The causal definition of validity |
| [Messick, "Validity of psychological assessment"](https://files.eric.ed.gov/fulltext/ED380496.pdf), ETS Research Report RR-94-45, later *American Psychologist* 50 (1995) | 1994 | Unified validity; construct underrepresentation and construct-irrelevant variance |
| [Skóra et al., "No validity without a theory"](https://academic.oup.com/nc/article/2021/1/niab009/6224254), *Neuroscience of Consciousness* | 2021 | Validity relative to theory |
| [Tal & Truijens, "Responsible and meaningful measurement in clinical psychology"](https://www.researchgate.net/publication/393909091_Responsible_and_Meaningful_Measurement_in_Clinical_Psychology) (preprint) | 2025 | Repurposing; reactivity |
| [Tal, "Measurement in Science"](https://plato.stanford.edu/entries/measurement-science/), *Stanford Encyclopedia of Philosophy*, §7.3 | 2020 | Calibration versus validation |
