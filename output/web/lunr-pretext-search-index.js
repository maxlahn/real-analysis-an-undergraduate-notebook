var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "section-what-is-a-set",
  "level": "1",
  "url": "section-what-is-a-set.html",
  "type": "Section",
  "number": "1.1",
  "title": "What Is a Set?",
  "body": " What Is a Set?   set  element       is an element of         is not an element of    Since the early 20th century, the practice of mathematics has undergone a radical transformation, which grew out of the idea that the whole of the mathematical canon can and should be rephrased in the language of set theory. Informally, a set is a collection of objects, which are called its elements . If an object is an element of a set , then we write ; otherwise, if is not an element of , then we write .    Definitions of Sets   You may complain that the terms collection and object are vague and undefined, and you would be right to object; the above characterization of sets is definitely not as rigorous as we might desire, and is in fact internally inconsistent.  However, the technical difficulties associated with building a rigorous and internally consistent set theory are outside the scope of this course and in this context, far more trouble than they are worth. In fact, it's entirely possible that such an internally consistent set theory does not exist!  As such, we will leave this ambiguity in favor of moving on to more salient topics. Even though we will not encounter any such issues in this text, the definition above does lead to some interesting inconsistencies. We will explore one such contradiction, called , shortly. First, however, we introduce some shorthand notation which will be useful in specifying sets we wish to discuss.    Roster notation  roster notation  It's easy to completely describe a set which contains only a finite number of elements; we can simply write those elements down! Concretely, if is the set whose elements are precisely the objects , then we may write The above notation for specifying sets is called roster notation . Not all sets are finite, however, and it is obviously impossible to write down a complete roster of all of the elements of an infinite set. Therefore, we cannot generalize roster notation to sets which contain infinitely many elements.    Definable collection  definable collection  Let be a unary Boolean predicate (a statement whose truth value depends on a single variable ). The collection of objects which satisfy is said to be defined by , and is denoted . Such a collection of objects which satisfy such a Boolean predicate is called a definable collection . We will see that the collection of objects that satisfy a given Boolean predicate is not necessarily a set; this is the content of Russell's paradox.    Sets  empty set      the empty set   The following are examples of sets:   The empty set , denoted or , is the set with no elements; that is, for all objects .    The set is a non-empty set with only finitely many elements. Note that this set contains different types of objects. In general, we will not place any explicit restrictions on the types of objects allowed inside a set, although some formalizations of axiomatic set theories rely on this to avoid inconsistencies such as Russell's paradox.    The set of natural numbers (also sometimes called the whole numbers or counting numbers ) is a non-empty set with infinitely many elements. We will characterize the natural numbers in the usual manner of Peano arithmetic later in this chapter.       naïve set theory As we mentioned before, the set theory based on the definition above, which is called naïve set theory , is in fact inconsistent; taking this definition as the basis for an axiomatic system, we can derive a contradiction, which implies that we may in fact derive all possible statements, including those which are false! This inconsistency was first demonstrated by Bertrand Russell at the beginning of the 20th century, and bears his name.   Russell's paradox   Not all definable collections are sets.    By contradiction. Let be the definable collection of sets which do not contain themselves, and suppose for a contradiction that is a set. The question of whether or not contains itself is a natural one; however, we will see that both the positive and negative answers lead to contradictions.  This is because, if , then by the definition of . On the other hand, if , then by the same reasoning. Therefore, if and only if . This contradiction implies that is not a set, as desired.     Russell's paradox tells us that naïve set theory is inconsistent. However, as we stated before, it is no easy task to construct a consistent set theory which is strong enough to describe the sophisticated structures we wish to investigate while also weak enough to be internally consistent. However, since the question of whether modern formal set theories are consistent is beyond the scope of this text. With this in mind, we will continue formulating definitions and results in the language of naïve set theory, keeping in mind that rigorous systems of formal set theory (which do not suffer from Russell's paradox) exist in which they can be expressed and proven.     Set Containment   As we have just seen, not all definable collections of mathematical objects are sets. However, any collection of objects which themselves belong to a set is also a set in its own right; such a set of elements of a given set is called a subset.    Subset; superset  subset  superset  set containment  proper subset  proper superset  strict set containment   A set is a subset of a set if for all elements . In this case, we say that is contained in , and we write . Less commonly, we may call a superset of if is a subset of . In this case, we say that  contains  , and we write .  Also, a set is a proper subset of a set if but . In this case, we say that is strictly contained in , and we write . Analogously, is a proper superset of if is a proper subset of . In this case, we say that  strictly contains  , and we write .     Set equality  set equality   Two sets are considered equal if they contain exactly the same elements; that is, one set is equal to another set when objects are elements of if and only if they are elements of . This occurs precisely when both and .     Examples of subsets  The following are examples of subsets of sets:   For any set , the empty set and itself are subsets of .    The set of odd natural numbers is a proper subset of the set of natural numbers. Written more concisely, .       Transitivity of set containment   For any sets , , and , if and , then .    Suppose that and , and let . Since and , . Moreover, since and , .  In summary, we have shown that for all . We conclude that .     Set-builder notation  set-builder notation  Although not all definable collections are sets, any definable subcollection of a set is itself a set; that is, given a set and a unary Boolean predicate , the definable collection is a set (and in fact a subset of ). This subset will also be denoted in set-builder notation by .    Power set   The power set of a set is the set of subsets of ; this set is denoted , so that .     Power sets are non-empty   The power set of any set is non-empty; that is, .    Fix a set , and note that the statement for all is vacuously true, so that . Thus , and so is non-empty.    Fix a set , and note that the statement for all is a tautology, so that . Thus , and so is non-empty.     Analysis of the proofs of   constructive proof  non-constructive proof  Both of the above proofs of are correct, although they are nonequivalent. Both are valuable for different reasons; the first proof shows that the power set of a set is nonempty since the empty set $ \\emptyset $ is a subset of any set, and the second proof shows the same conclusion since any set is a subset of itself. These proofs are called constructive , in that they explicitly exhibited an object satisfied the desired properties (being an element of the power set of a given set). Proofs which are not constructive are called non-constructive .    In general, sets are likely to have many subsets, so that power sets of sets are likely to have a great many elements. We will investigate the notion of the number of elements of a set, called its cardinality , more precisely and in far greater depth at the end of this chapter.     Set Operations   conjunction  disjunction  negation       and         or        not    Test reference   We now introduce several ways to construct new sets from old ones which loosely correspond to the logical operators of conjunction  , disjunction  , and negation  , pronounced and , or and not , respectively.    Intersection; union; complement  intersection  union  complement      the intersection of and        the union of and        the complement of in     The intersection  of two sets and is the set whose elements are both elements of and elements of ; that is, . The union  of and is the set whose elements are either elements of or elements of ; that is, . The complement  of in is the set whose elements are elements of but not elements of ; that is, .     Set operations and containment   Fix sets , , and .    if and only if and .     if and only if and .     if and only if and .         First suppose that . Since , implies that . Similarly, since , implies that .  Conversely, now suppose that and , and let . Since and , . Similarly, since and , . Since and , we conclude that . In summary, we have shown that for all , so that .    First suppose that . Since , implies that . Similarly, since , implies that .  Conversely, now suppose that and . Let , so that or . If , then , since . Similarly, if , then , since . We conclude that . In summary, we have shown that for all , so that .    First suppose that , and let . Since and , , so that and . In summary, we have shown that for all , so that . Moreover, we have shown that for all , so that no element of is an element of ; that is, .  Conversely, now suppose that and , and let . Since and , . Moreover, since and , . Since and , we conclude that . In summary, we have shown that for all , and so .       Properties of the set operations   Fix sets , , and .    , and .     Commutativity : and .     Associativity : and .         Since , and by (1) and (2) of , respectively. Of course , so that .  Similarly, since and , by (2) of . Of course , and so .   , and so . Moreover, together with the observation that , this implies by (1) of that . Of course, , and so .  Similarly, , and so .  Finally, note that any element of is both an element of and not an element of , so that no such element can exist. Thus .    Since and , (1) of implies that . By symmetry, , so that .  Similarly, since and , (2) of implies that . By symmetry, , so that .    We note that , so that by (1) of . Similarly, , so that by another application of (1) of .  Conversely, we note that , so that by (1) of . Similarly, , so that by another application of (1) of . Thus .       In the next section, we will generalize the first two ways ( intersection and union ) to arbitrary sets of sets; this generalization will mirror the similarities between conjunction and universal quantification and between disjunction and existential quantification .     While sets and set theory form the foundations on which we will build our understanding of analysis, these topics are not the focus of this text. As such, we will leave behind the question of precise definitions of sets in favor of developing set-theoretic ideas which are more relevant to the world of analysis.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.    Power sets   Compute the power set of the set .    The power set of the set is the set .    Choosing a subset of the set is equivalent to making a unique sequence of three binary choices of whether to include each element , , and . We see that has the following subsets: , , , , , , , and . Therefore, the power set of the set is the set .     Set Operations   Compute the given set operations. Write your answer in roster or set-builder notation, or as a well-known set.     Compute , where is the set of even natural numbers and is the set of odd integers.     .    No natural number is both even and odd, and so .      Compute , where and .     .     contains all the elements of and all the elements of , so that .      Compute , where is the set of natural numbers divisible by , and is the set of even natural numbers.     .     contains all the odd multiples of , so that .      Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .    De Morgan's laws  De Morgan's laws   Let , , and be sets.     Prove that .    asdf      Prove that .    asdf     Taken together, these results are called De Morgan's laws .     The distributive properties of set operations  Distributive property   Let , , and be sets.     Prove that .    asdf      Prove that .    asdf     Taken together, these results are called the distributive properties of the set operations.     Power sets   Recall that the power set of a set is the set whose elements are all the subsets of .     Determine whether the following statement is true or false:  The power set of a set contains at least two distinct elements.  If the statement is true, prove it. If the statement is false, disprove it by providing a counterexample.    Revisit the proofs of .    asdf     Text after the parts.     Set operations and containment   Let and be sets.     Prove that if and only if .    Since , it suffices to show that if and only if . To that end, note that if , then (1) of implies that .  Conversely, we note that , so that if , then (1) of implies that .      Prove that if and only if .    Since , it suffices to show that if and only if . To that end, note that if , then (2) of implies that .  Conversely, we note that , so that if , then (2) of implies that .      Prove that if and only if .    First suppose that . Then for all , and so .  Conversely, now suppose that . Then , and so and . Since , . So is an element of but not ; we conclude that .      In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-what-is-a-set-2-5",
  "level": "2",
  "url": "section-what-is-a-set.html#section-what-is-a-set-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "set elements "
},
{
  "id": "convention-roster-notation",
  "level": "2",
  "url": "section-what-is-a-set.html#convention-roster-notation",
  "type": "Convention",
  "number": "1.1.1",
  "title": "Roster notation.",
  "body": " Roster notation  roster notation  It's easy to completely describe a set which contains only a finite number of elements; we can simply write those elements down! Concretely, if is the set whose elements are precisely the objects , then we may write The above notation for specifying sets is called roster notation . Not all sets are finite, however, and it is obviously impossible to write down a complete roster of all of the elements of an infinite set. Therefore, we cannot generalize roster notation to sets which contain infinitely many elements.  "
},
{
  "id": "definition-definable-collection",
  "level": "2",
  "url": "section-what-is-a-set.html#definition-definable-collection",
  "type": "Definition",
  "number": "1.1.2",
  "title": "Definable collection.",
  "body": " Definable collection  definable collection  Let be a unary Boolean predicate (a statement whose truth value depends on a single variable ). The collection of objects which satisfy is said to be defined by , and is denoted . Such a collection of objects which satisfy such a Boolean predicate is called a definable collection . We will see that the collection of objects that satisfy a given Boolean predicate is not necessarily a set; this is the content of Russell's paradox.  "
},
{
  "id": "example-sets",
  "level": "2",
  "url": "section-what-is-a-set.html#example-sets",
  "type": "Example",
  "number": "1.1.3",
  "title": "Sets.",
  "body": " Sets  empty set      the empty set   The following are examples of sets:   The empty set , denoted or , is the set with no elements; that is, for all objects .    The set is a non-empty set with only finitely many elements. Note that this set contains different types of objects. In general, we will not place any explicit restrictions on the types of objects allowed inside a set, although some formalizations of axiomatic set theories rely on this to avoid inconsistencies such as Russell's paradox.    The set of natural numbers (also sometimes called the whole numbers or counting numbers ) is a non-empty set with infinitely many elements. We will characterize the natural numbers in the usual manner of Peano arithmetic later in this chapter.     "
},
{
  "id": "subsection-definitions-of-sets-6",
  "level": "2",
  "url": "section-what-is-a-set.html#subsection-definitions-of-sets-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "naïve set theory "
},
{
  "id": "proposition-russells-paradox",
  "level": "2",
  "url": "section-what-is-a-set.html#proposition-russells-paradox",
  "type": "Proposition",
  "number": "1.1.4",
  "title": "Russell’s paradox.",
  "body": " Russell's paradox   Not all definable collections are sets.    By contradiction. Let be the definable collection of sets which do not contain themselves, and suppose for a contradiction that is a set. The question of whether or not contains itself is a natural one; however, we will see that both the positive and negative answers lead to contradictions.  This is because, if , then by the definition of . On the other hand, if , then by the same reasoning. Therefore, if and only if . This contradiction implies that is not a set, as desired.   "
},
{
  "id": "definition-subset-superset",
  "level": "2",
  "url": "section-what-is-a-set.html#definition-subset-superset",
  "type": "Definition",
  "number": "1.1.5",
  "title": "Subset; superset.",
  "body": " Subset; superset  subset  superset  set containment  proper subset  proper superset  strict set containment   A set is a subset of a set if for all elements . In this case, we say that is contained in , and we write . Less commonly, we may call a superset of if is a subset of . In this case, we say that  contains  , and we write .  Also, a set is a proper subset of a set if but . In this case, we say that is strictly contained in , and we write . Analogously, is a proper superset of if is a proper subset of . In this case, we say that  strictly contains  , and we write .   "
},
{
  "id": "definition-set-equality",
  "level": "2",
  "url": "section-what-is-a-set.html#definition-set-equality",
  "type": "Definition",
  "number": "1.1.6",
  "title": "Set equality.",
  "body": " Set equality  set equality   Two sets are considered equal if they contain exactly the same elements; that is, one set is equal to another set when objects are elements of if and only if they are elements of . This occurs precisely when both and .   "
},
{
  "id": "example-examples-of-subsets",
  "level": "2",
  "url": "section-what-is-a-set.html#example-examples-of-subsets",
  "type": "Example",
  "number": "1.1.7",
  "title": "Examples of subsets.",
  "body": " Examples of subsets  The following are examples of subsets of sets:   For any set , the empty set and itself are subsets of .    The set of odd natural numbers is a proper subset of the set of natural numbers. Written more concisely, .     "
},
{
  "id": "lemma-transitivity-of-set-containment",
  "level": "2",
  "url": "section-what-is-a-set.html#lemma-transitivity-of-set-containment",
  "type": "Lemma",
  "number": "1.1.8",
  "title": "Transitivity of set containment.",
  "body": " Transitivity of set containment   For any sets , , and , if and , then .    Suppose that and , and let . Since and , . Moreover, since and , .  In summary, we have shown that for all . We conclude that .   "
},
{
  "id": "convention-set-builder-notation",
  "level": "2",
  "url": "section-what-is-a-set.html#convention-set-builder-notation",
  "type": "Convention",
  "number": "1.1.9",
  "title": "Set-builder notation.",
  "body": " Set-builder notation  set-builder notation  Although not all definable collections are sets, any definable subcollection of a set is itself a set; that is, given a set and a unary Boolean predicate , the definable collection is a set (and in fact a subset of ). This subset will also be denoted in set-builder notation by .  "
},
{
  "id": "definition-power-set",
  "level": "2",
  "url": "section-what-is-a-set.html#definition-power-set",
  "type": "Definition",
  "number": "1.1.10",
  "title": "Power set.",
  "body": " Power set   The power set of a set is the set of subsets of ; this set is denoted , so that .   "
},
{
  "id": "lemma-power-sets-are-non-empty",
  "level": "2",
  "url": "section-what-is-a-set.html#lemma-power-sets-are-non-empty",
  "type": "Lemma",
  "number": "1.1.11",
  "title": "Power sets are non-empty.",
  "body": " Power sets are non-empty   The power set of any set is non-empty; that is, .    Fix a set , and note that the statement for all is vacuously true, so that . Thus , and so is non-empty.    Fix a set , and note that the statement for all is a tautology, so that . Thus , and so is non-empty.   "
},
{
  "id": "insight-analysis-of-the-proofs-of-lemma-power-sets-are-non-empty",
  "level": "2",
  "url": "section-what-is-a-set.html#insight-analysis-of-the-proofs-of-lemma-power-sets-are-non-empty",
  "type": "Insight",
  "number": "1.1.12",
  "title": "Analysis of the proofs of Lemma 1.1.11.",
  "body": " Analysis of the proofs of   constructive proof  non-constructive proof  Both of the above proofs of are correct, although they are nonequivalent. Both are valuable for different reasons; the first proof shows that the power set of a set is nonempty since the empty set $ \\emptyset $ is a subset of any set, and the second proof shows the same conclusion since any set is a subset of itself. These proofs are called constructive , in that they explicitly exhibited an object satisfied the desired properties (being an element of the power set of a given set). Proofs which are not constructive are called non-constructive .  "
},
{
  "id": "subsection-set-containment-11-1",
  "level": "2",
  "url": "section-what-is-a-set.html#subsection-set-containment-11-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cardinality "
},
{
  "id": "subsection-set-operations-2-8",
  "level": "2",
  "url": "section-what-is-a-set.html#subsection-set-operations-2-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conjunction disjunction negation "
},
{
  "id": "definition-intersection",
  "level": "2",
  "url": "section-what-is-a-set.html#definition-intersection",
  "type": "Definition",
  "number": "1.1.13",
  "title": "Intersection; union; complement.",
  "body": " Intersection; union; complement  intersection  union  complement      the intersection of and        the union of and        the complement of in     The intersection  of two sets and is the set whose elements are both elements of and elements of ; that is, . The union  of and is the set whose elements are either elements of or elements of ; that is, . The complement  of in is the set whose elements are elements of but not elements of ; that is, .   "
},
{
  "id": "proposition-set-operations-and-containment",
  "level": "2",
  "url": "section-what-is-a-set.html#proposition-set-operations-and-containment",
  "type": "Proposition",
  "number": "1.1.14",
  "title": "Set operations and containment.",
  "body": " Set operations and containment   Fix sets , , and .    if and only if and .     if and only if and .     if and only if and .         First suppose that . Since , implies that . Similarly, since , implies that .  Conversely, now suppose that and , and let . Since and , . Similarly, since and , . Since and , we conclude that . In summary, we have shown that for all , so that .    First suppose that . Since , implies that . Similarly, since , implies that .  Conversely, now suppose that and . Let , so that or . If , then , since . Similarly, if , then , since . We conclude that . In summary, we have shown that for all , so that .    First suppose that , and let . Since and , , so that and . In summary, we have shown that for all , so that . Moreover, we have shown that for all , so that no element of is an element of ; that is, .  Conversely, now suppose that and , and let . Since and , . Moreover, since and , . Since and , we conclude that . In summary, we have shown that for all , and so .     "
},
{
  "id": "corollary-properties-of-the-set-operations",
  "level": "2",
  "url": "section-what-is-a-set.html#corollary-properties-of-the-set-operations",
  "type": "Corollary",
  "number": "1.1.15",
  "title": "Properties of the set operations.",
  "body": " Properties of the set operations   Fix sets , , and .    , and .     Commutativity : and .     Associativity : and .         Since , and by (1) and (2) of , respectively. Of course , so that .  Similarly, since and , by (2) of . Of course , and so .   , and so . Moreover, together with the observation that , this implies by (1) of that . Of course, , and so .  Similarly, , and so .  Finally, note that any element of is both an element of and not an element of , so that no such element can exist. Thus .    Since and , (1) of implies that . By symmetry, , so that .  Similarly, since and , (2) of implies that . By symmetry, , so that .    We note that , so that by (1) of . Similarly, , so that by another application of (1) of .  Conversely, we note that , so that by (1) of . Similarly, , so that by another application of (1) of . Thus .     "
},
{
  "id": "subsection-set-operations-6-1",
  "level": "2",
  "url": "section-what-is-a-set.html#subsection-set-operations-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "intersection union "
},
{
  "id": "exercises-power-sets",
  "level": "2",
  "url": "section-what-is-a-set.html#exercises-power-sets",
  "type": "Exercise",
  "number": "1.1.4.1",
  "title": "Power sets.",
  "body": " Power sets   Compute the power set of the set .    The power set of the set is the set .    Choosing a subset of the set is equivalent to making a unique sequence of three binary choices of whether to include each element , , and . We see that has the following subsets: , , , , , , , and . Therefore, the power set of the set is the set .   "
},
{
  "id": "exercise-set-operations",
  "level": "2",
  "url": "section-what-is-a-set.html#exercise-set-operations",
  "type": "Exercise",
  "number": "1.1.4.2",
  "title": "Set Operations.",
  "body": " Set Operations   Compute the given set operations. Write your answer in roster or set-builder notation, or as a well-known set.     Compute , where is the set of even natural numbers and is the set of odd integers.     .    No natural number is both even and odd, and so .      Compute , where and .     .     contains all the elements of and all the elements of , so that .      Compute , where is the set of natural numbers divisible by , and is the set of even natural numbers.     .     contains all the odd multiples of , so that .    "
},
{
  "id": "reading-question-de-morgans-laws",
  "level": "2",
  "url": "section-what-is-a-set.html#reading-question-de-morgans-laws",
  "type": "Reading Question",
  "number": "1.1.5.1",
  "title": "De Morgan’s laws.",
  "body": " De Morgan's laws  De Morgan's laws   Let , , and be sets.     Prove that .    asdf      Prove that .    asdf     Taken together, these results are called De Morgan's laws .   "
},
{
  "id": "reading-question-distributivity-of-set-operations",
  "level": "2",
  "url": "section-what-is-a-set.html#reading-question-distributivity-of-set-operations",
  "type": "Reading Question",
  "number": "1.1.5.2",
  "title": "The distributive properties of set operations.",
  "body": " The distributive properties of set operations  Distributive property   Let , , and be sets.     Prove that .    asdf      Prove that .    asdf     Taken together, these results are called the distributive properties of the set operations.   "
},
{
  "id": "reading-question-power-sets",
  "level": "2",
  "url": "section-what-is-a-set.html#reading-question-power-sets",
  "type": "Reading Question",
  "number": "1.1.5.3",
  "title": "Power sets.",
  "body": " Power sets   Recall that the power set of a set is the set whose elements are all the subsets of .     Determine whether the following statement is true or false:  The power set of a set contains at least two distinct elements.  If the statement is true, prove it. If the statement is false, disprove it by providing a counterexample.    Revisit the proofs of .    asdf     Text after the parts.   "
},
{
  "id": "reading-question-set-operations-and-containment",
  "level": "2",
  "url": "section-what-is-a-set.html#reading-question-set-operations-and-containment",
  "type": "Reading Question",
  "number": "1.1.5.4",
  "title": "Set operations and containment.",
  "body": " Set operations and containment   Let and be sets.     Prove that if and only if .    Since , it suffices to show that if and only if . To that end, note that if , then (1) of implies that .  Conversely, we note that , so that if , then (1) of implies that .      Prove that if and only if .    Since , it suffices to show that if and only if . To that end, note that if , then (2) of implies that .  Conversely, we note that , so that if , then (2) of implies that .      Prove that if and only if .    First suppose that . Then for all , and so .  Conversely, now suppose that . Then , and so and . Since , . So is an element of but not ; we conclude that .    "
},
{
  "id": "section-maps-and-functions",
  "level": "1",
  "url": "section-maps-and-functions.html",
  "type": "Section",
  "number": "1.2",
  "title": "Maps and Functions",
  "body": " Maps and Functions   In this section, we introduce the fundamental notion of a map between sets. Informally, a map is an assignment of an element of one set to each element of another. You probably have been exposed to maps in previous math courses in the form of real-valued functions of one real variable. We will treat maps in far greater generality, which will allow us to perform mathematical analysis in a wider array of spaces.    Introduction to Maps   Ordered pair  Entry       the ordered pair with first entry and second entry     First, however, we define the Cartesian product of two sets. This relies on a notion of an ordered pair of objects and , which we denote . Like formalized set theory, rigorous constructions of ordered pairs are, in this context, unnecessarily complicated and annoying to work with. As such, we will take them to be well-defined. The salient properties of an ordered pair are its entries  and , which are called its first and second entries, respectively.    Cartesian product  Cartesian product       the Cartesian product of with      The Cartesian product  of two sets and is the set which contains all ordered pairs whose first entry is an element of and whose second entry is an element of ; that is, .     An example of Cartesian products   Let and . Then . Note that .    Recall that we would like a map between two sets to be an association of the elements of one set to the elements of the other. We will model this association via ordered pairs. To that end, a map between two sets will just be a subset of their Cartesian product which satisfies certain existence and uniqueness properties.   Map; function  map  domain  input  codomain  output  function       a map from to          a map maps an input to an output      A subset of the Cartesian product of two sets and is called a map from (which is called the domain of and whose elements are called inputs ) to (which is called the codomain of and whose elements are called outputs ) if it satisfies the following conditions:    Totality : For all inputs , there is an output so that .     Uniqueness : For all inputs and outputs , if , then .   So is a map from to if and only if for each input , there is a unique output so that . We will write to indicate that is a map from to , and we will write to indicate that . The set of maps from to is denoted .  We will call a map whose codomain is a number system like the natural numbers , the integers , the rational numbers , the real numbers , or the complex numbers a -valued function on . We will investigate the natural numbers in , and will be dedicated to constructing the other number systems with which we will become acquainted throughout the course of this text.    So a map between sets is just a subset of their Cartesian product such that each element of the domain appears in precisely one pair with an element of the codomain. The above existence and uniqueness properties of a map implies that there is an unambiguous association between the elements of the domain and the elements of the codomain.   Examples of maps   The following are examples of maps between sets:   Let and , and consider the following subsets of : . As defined above, , , , and are maps from to . In fact, these are the only such maps; that is, .    The empty set is the unique map from the empty set to any set ; that is, . Note that none of the elements of the codomain are associated with elements of the empty domain . However, this does not imply that is not a map; in general, not all elements of the codomain of a map need be associated with elements of the domain, since the existence property applies only to the domain .    inclusion map  identity map       the inclusion map of in .         the identity map of a set     Let be a subset of a set . The inclusion map  of in is the map from to defined by That is, for all .  The inclusion map of in itself is called the identity map on , and is denoted .        Passive and active characterizations of maps  It may be difficult to see how the above definition of a map is a generalization of the notion of a real-valued function of a real variable. In fact, the above definition might seem more closely related to the graph of such a function, since the uniqueness property of maps is just a generalization of the vertical line test for functions. We will refer to this perspective on maps as subsets of a Cartesian product satisfying certain abstract properties as the passive characterization of what maps are . In contrast, we often like to think of a map as an active process, which takes an input and transforms it into the unique output with which it is associated. We will refer to this perspective as the active characterization of what maps do . When it benefits us to favor one perspective over another, we will emphasize either the active or passive characterization over the other. The following definitions allow us to convert between these two equivalent characterizations of maps.    Image; pre-image  image  pre-image       the image of an input under a map          the image of a set of inputs under a map          the image of a map          the pre-image of a set of outputs under a map          the pre-image of an output under a map      Let be a map from a set to a set . The image  of an input under is the unique output so that . The image  of a subset is the subset of the codomain defined by . The image of itself is called the image of , and is denoted .  The pre-image  of a subset of the codomain under is the set of all inputs whose image lies in ; that is, . The pre-image  of an output under is just the pre-image of the singleton set under ; that is,     Any map between sets induces a map from any subset of its domain to its codomain via a process known as restriction . In light of the active characterization of what maps do, this may seem almost trivial. However, we will formalize this notion of restriction in terms of the passive characterization of what maps are in order to prove rigorously our intuitions are correct. You may be better served by conceptualizing the restriction of a map to be the same active process of transforming inputs into outputs but with a smaller domain, rather than the passive definition below.   Restriction  restriction       the restriction of a map to a subset of its domain     The restriction  of a map between sets and to a subset of its domain is the subset of the Cartesian product defined by .    As our intuition about the active characterization of what maps do tells us, the restriction of a map to a subset of its domain is itself a map from the chosen subset to the domain of the original map.   Restrictions are maps   Let be a map from a set to a set . For any subset , the restriction of to is a map from to .    Let . Then is an input to , and so for some output . We conclude that , so that satisfies the totality condition.  Let and , and suppose that . Since , we have that , and so ; that is, satisfies the uniqueness condition. Since satisfies the totality condition and the uniqueness condition, it is a map from to .     We will shortly see another way to construct restrictions as compositions with inclusion maps.     Composition and Invertibility   Viewed through the perspective of the active characterization of what maps do, it may seem obvious that we can combine two maps between sets by first acting on it with one map and then acting on its image by the other map. This new process yields the composition of the two maps, and it may be intuitively clear that this composition is itself a map. However, we will formalize this notion of composition in the passive characterization, so that we may prove this fact rigorously. Again, it may better serve you to conceptualize the composition of maps in the context of the active characterization of what maps do rather than the passive characterization of what maps are in order to better inform your intuition about composition.    Composition  composition       the composition of a map with a map      Let and be maps between sets , , and . The composition  of with is the map from to defined by the formula .    We aren't restricted to the composition of just two maps. In fact, we can compose any finite number of maps with compatible domains and codomains by iterating the above construction.   Associativity of composition   Let , , and be maps between sets , , , and . Then .    Note that for all . Since and agree on all inputs , .    The above notion of composition introduces a natural question about maps between sets: To what degree can the action of a map on its domain be undone? This question of map invertibility is fundamental, and will recur throughout this text.   Invertibility  left inverse  right inverse  inverse  left-invertibility  right-invertibility  invertibility   Let be a map from a set to a set . A map is a left inverse to if , and is called a right inverse to if . is called an inverse to if it is both a left and right inverse to ; that is, is an inverse to if and .  A map is called left-invertible (resp. right-invertible , invertible ) if it has a left inverse (resp. right inverse, inverse).     Examples of inverses  projection map   The following are examples of left inverses, right inverses, and inverses of maps.   Let be a non-empty subset of a set , and fix an element . Consider the constant map from to defined piecewise by the formula . Note that for all , and so ; that is, is a left inverse to the inclusion map of in .    Fix sets and , and suppose that is non-empty. Let be the projection map defined by the formula .  Fix an element , and consider the map from to defined by the formula . Then for all , and so ; that is, is a right inverse to the projection map .    The identity map on a set is its own inverse, since . This is actually a special case of the first example above, where we take . More generally, for all maps with domain , and for all maps with codomain .       We now give alternative characterizations of left-invertible, right-invertible, and invertible maps. Intuitively, a map is left-invertible if it does not associate two distinct inputs with the same output, and a map is right-invertible if each output is associated with at least one input. These properties mirror the totality and uniqueness conditions for maps, and will turn out to together imply the existence of a two-sided inverse, which is both a left and right inverse.   Injectivity; surjectivity; bijectivity  injective  one-to-one  injection  surjective  onto  surjection  bijective  one-to-one correspondence  bijection   Let be a map from a set to a set .    is called injective (or one-to-one ) if for all inputs , if , then . In this case, is also called an injection of into .     is called surjective (or onto ) if for all outputs there is an input so that . In this case, is also called a surjection of onto .     is called bijective if it is both injective and surjective. In this case, is also called a bijection or a one-to-one correspondence between and .        Examples of injections, surjections, and bijections   The following are examples of injective, surjective, and bijective functions.   Let be a subset of a set , and consider . If , then . So the inclusion map is injective.    Fix sets and , and suppose that is non-empty. Let be the projection map defined by the formula .  Let , and note that since is non-empty, there is some element . We note that . Since each output is the image of some input under , is surjective.    The identity map on a set is injective by virtue of being an inclusion map. is also surjective, since for all . Thus is bijective.       It is no accident that the examples for left- and right- invertibility coincided with the examples for injectivity and surjectivity. It turns out that injectivity is essentially equivalent to left-invertibility, and surjectivity is equivalent to right-invertibility.   Invertibility   Let be a map from a set to a set .   If is left-invertible, then it is injective.    If is non-empty and is injective, then it is left-invertible.    If is right-invertible, then it is surjective.         Suppose that is left-invertible, so that for some map . That is injective follows from the injectivity of the identity map and (d) of .    Conversely, now suppose that is non-empty and is injective. Then for each output , there is at most one input so that . Specifically, for each , there is a unique input so that . Denote by this unique input.  Since is non-empty, it contains an element . Define for all . We have defined a map . Note that for all inputs , and so ; that is, is a left inverse to , and so is left-invertible.    Finally, suppose that is right-invertible, so that for some map . That is surjective follows from the surjectivity of the identity map and (e) of .      Proving the remaining direction of the equivalence between right invertibility and surjectivity requires a strong assumption about set theory called the axiom of choice , which we do not yet have the language to express in its simplest form. We will talk about the axiom of choice shortly, when we generalize the Cartesian product of two sets using indexing maps.   Invertibility   A map is invertible if and only if it is bijective.    Let be a map from a set to a set . If is invertible, it is both left- and right-invertible, and so is both injective and surjective by (1) and (3) of . Hence is bijective.  Conversely, now suppose that is bijective, so that is both injective and surjective. If , then by the surjectivity of . Thus is the unique map from to itself, the identity map . In particular, is invertible.  So we may assume that is non-empty. Since is injective, it is left-invertible by (2) of . So for some map ; that is, for all inputs . It suffices to show that is also a right inverse to .  To that end, consider an output . Since is surjective, for some input . Then . Hence , and so is an inverse to ; that is, is invertible.     We will investigate the invertibility and bijectivity of maps and the consequences these properties have on the domains and codomains of such maps more at the end of this chapter, when we study cardinality and the size of sets. For now, however, we will move on to an important convention which is ubiquitous throughout mathematics: the notions of indexed sets and families.     Indexing   Considered as an association between sets, a map can be thought to index its image by the elements of its domain. That is, a map can transfer information from its domain to its image. Just what this transferred information looks like can vary tremendously, but suffice it to say that this notion of indexing is fundamental and will recur throughout this text.    Indexed family; indexed set  index  indexing set  indexed family  indexed set       a family of objects indexed by          a set of objects indexed by      A set is indexed by a set if there is a surjection . is called an indexing set , and for each input , called an index , its image is denoted .  The map is called an (indexed) family of elements of , and is denoted .  Consider a map of a set , called the indexing set and whose elements are called indices , onto a set . The image of such an index under such an (indexed) family  is often denoted , and is often denoted . We say that is indexed by , and we write .    We can also use this notion of indexing to generalize the intersection and union of sets to act on arbitrary collections of sets. This generalization of the intersection and union of two sets relies on the natural similarities between logical conjunction and universal quantification and between logical disjunction and existential quantification .   Intersection; union  intersection  union       the intersection of a family of sets          the union of a family of sets      Let be a family of subsets of a set indexed by a set . The intersection  of this indexed family is the subset of defined by . The union  of this indexed family is the subset of defined by .    These generalizations of the intersection and union of two sets extend naturally to generalizations of each of the results proven in the previous section.   Analogous properties of indexed intersections and unions   Let be a family of subsets of a set indexed by a set .   Analogously to , for any subset , if and only if for all indices , and if and only if for all indices .    Analogously to (2) of , and for any set and bijection .    Analogously to , and for any subset .    Analogously to , and for any subset .        You will have an opportunity to prove the above results in the problems for this section.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.    Images and pre-images   Let be the map from to defined in (2) of ; that is, . Compute the given images and pre-images. Express your answer in roster notation.     Compute the images and .     .    Since , the image of under is . Similarly, since , the image of under is .      Compute the image .     .    Since for all , the image of is .      Compute the pre-images and .     and .    Since for all , the pre-images and of and under are and .      Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .    Composition and jectivity    Let and be maps between sets , , and .     Prove that if and are injective, then so is their composition .    Let , and suppose that . Then , and so the injectivity of implies that . Moreover, the injectivity of implies that . In summary, we have shown that for all inputs , if , then ; that is, is injective.      Prove that if and are surjective, then so is their composition .    Let . Since is surjective, for some . Moreover, since is surjective, for some . Thus . In summary, we have shown that for every output , there is some input so that ; that is, is surjective.      Prove that if and are bijective, then so is their composition .    Since and are bijective, they are both injective and surjective. (1) and (2) above not imply that their composition is both injective and surjective; that is, is bijective.      Prove that if the composition is injective, then so is .    Prove the desired result by contraposition.    Suppose that is not injective. Then for some distinct inputs . Note that . Since but , is not injective.  In summary, we have shown that if is not injective, then is not injective. The contrapositive of this implication is the desired result: if is injective, then so is .      Prove that if the composition is surjective, then so is .    Prove the desired result by contraposition.    Suppose that is not surjective. Then there is some so that for all . Note that for all , and so is not surjective.  In summary, we have shown that if is not surjective, then is not surjective. The contrapositive of this implication is the desired result: if is surjective, then so is .      In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "subsection-introduction-to-maps-2-4",
  "level": "2",
  "url": "section-maps-and-functions.html#subsection-introduction-to-maps-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cartesian product entries "
},
{
  "id": "definition-cartesian-product",
  "level": "2",
  "url": "section-maps-and-functions.html#definition-cartesian-product",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Cartesian product.",
  "body": " Cartesian product  Cartesian product       the Cartesian product of with      The Cartesian product  of two sets and is the set which contains all ordered pairs whose first entry is an element of and whose second entry is an element of ; that is, .   "
},
{
  "id": "example-an-example-of-cartesian-products",
  "level": "2",
  "url": "section-maps-and-functions.html#example-an-example-of-cartesian-products",
  "type": "Example",
  "number": "1.2.2",
  "title": "An example of Cartesian products.",
  "body": " An example of Cartesian products   Let and . Then . Note that .   "
},
{
  "id": "definition-map-function",
  "level": "2",
  "url": "section-maps-and-functions.html#definition-map-function",
  "type": "Definition",
  "number": "1.2.3",
  "title": "Map; function.",
  "body": " Map; function  map  domain  input  codomain  output  function       a map from to          a map maps an input to an output      A subset of the Cartesian product of two sets and is called a map from (which is called the domain of and whose elements are called inputs ) to (which is called the codomain of and whose elements are called outputs ) if it satisfies the following conditions:    Totality : For all inputs , there is an output so that .     Uniqueness : For all inputs and outputs , if , then .   So is a map from to if and only if for each input , there is a unique output so that . We will write to indicate that is a map from to , and we will write to indicate that . The set of maps from to is denoted .  We will call a map whose codomain is a number system like the natural numbers , the integers , the rational numbers , the real numbers , or the complex numbers a -valued function on . We will investigate the natural numbers in , and will be dedicated to constructing the other number systems with which we will become acquainted throughout the course of this text.   "
},
{
  "id": "example-examples-of-maps",
  "level": "2",
  "url": "section-maps-and-functions.html#example-examples-of-maps",
  "type": "Example",
  "number": "1.2.4",
  "title": "Examples of maps.",
  "body": " Examples of maps   The following are examples of maps between sets:   Let and , and consider the following subsets of : . As defined above, , , , and are maps from to . In fact, these are the only such maps; that is, .    The empty set is the unique map from the empty set to any set ; that is, . Note that none of the elements of the codomain are associated with elements of the empty domain . However, this does not imply that is not a map; in general, not all elements of the codomain of a map need be associated with elements of the domain, since the existence property applies only to the domain .    inclusion map  identity map       the inclusion map of in .         the identity map of a set     Let be a subset of a set . The inclusion map  of in is the map from to defined by That is, for all .  The inclusion map of in itself is called the identity map on , and is denoted .      "
},
{
  "id": "remark-passive-and-active-characterizations-of-maps",
  "level": "2",
  "url": "section-maps-and-functions.html#remark-passive-and-active-characterizations-of-maps",
  "type": "Remark",
  "number": "1.2.5",
  "title": "Passive and active characterizations of maps.",
  "body": " Passive and active characterizations of maps  It may be difficult to see how the above definition of a map is a generalization of the notion of a real-valued function of a real variable. In fact, the above definition might seem more closely related to the graph of such a function, since the uniqueness property of maps is just a generalization of the vertical line test for functions. We will refer to this perspective on maps as subsets of a Cartesian product satisfying certain abstract properties as the passive characterization of what maps are . In contrast, we often like to think of a map as an active process, which takes an input and transforms it into the unique output with which it is associated. We will refer to this perspective as the active characterization of what maps do . When it benefits us to favor one perspective over another, we will emphasize either the active or passive characterization over the other. The following definitions allow us to convert between these two equivalent characterizations of maps.  "
},
{
  "id": "definition-image-pre-image",
  "level": "2",
  "url": "section-maps-and-functions.html#definition-image-pre-image",
  "type": "Definition",
  "number": "1.2.6",
  "title": "Image; pre-image.",
  "body": " Image; pre-image  image  pre-image       the image of an input under a map          the image of a set of inputs under a map          the image of a map          the pre-image of a set of outputs under a map          the pre-image of an output under a map      Let be a map from a set to a set . The image  of an input under is the unique output so that . The image  of a subset is the subset of the codomain defined by . The image of itself is called the image of , and is denoted .  The pre-image  of a subset of the codomain under is the set of all inputs whose image lies in ; that is, . The pre-image  of an output under is just the pre-image of the singleton set under ; that is,    "
},
{
  "id": "subsection-introduction-to-maps-11",
  "level": "2",
  "url": "section-maps-and-functions.html#subsection-introduction-to-maps-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "restriction "
},
{
  "id": "definition-restriction",
  "level": "2",
  "url": "section-maps-and-functions.html#definition-restriction",
  "type": "Definition",
  "number": "1.2.7",
  "title": "Restriction.",
  "body": " Restriction  restriction       the restriction of a map to a subset of its domain     The restriction  of a map between sets and to a subset of its domain is the subset of the Cartesian product defined by .   "
},
{
  "id": "proposition-restrictions-are-maps",
  "level": "2",
  "url": "section-maps-and-functions.html#proposition-restrictions-are-maps",
  "type": "Proposition",
  "number": "1.2.8",
  "title": "Restrictions are maps.",
  "body": " Restrictions are maps   Let be a map from a set to a set . For any subset , the restriction of to is a map from to .    Let . Then is an input to , and so for some output . We conclude that , so that satisfies the totality condition.  Let and , and suppose that . Since , we have that , and so ; that is, satisfies the uniqueness condition. Since satisfies the totality condition and the uniqueness condition, it is a map from to .   "
},
{
  "id": "subsection-composition-and-invertibility-2-1",
  "level": "2",
  "url": "section-maps-and-functions.html#subsection-composition-and-invertibility-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "composition "
},
{
  "id": "definition-composition",
  "level": "2",
  "url": "section-maps-and-functions.html#definition-composition",
  "type": "Definition",
  "number": "1.2.9",
  "title": "Composition.",
  "body": " Composition  composition       the composition of a map with a map      Let and be maps between sets , , and . The composition  of with is the map from to defined by the formula .   "
},
{
  "id": "proposition-associativity-of-composition",
  "level": "2",
  "url": "section-maps-and-functions.html#proposition-associativity-of-composition",
  "type": "Proposition",
  "number": "1.2.10",
  "title": "Associativity of composition.",
  "body": " Associativity of composition   Let , , and be maps between sets , , , and . Then .    Note that for all . Since and agree on all inputs , .   "
},
{
  "id": "subsection-composition-and-invertibility-6",
  "level": "2",
  "url": "section-maps-and-functions.html#subsection-composition-and-invertibility-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "invertibility "
},
{
  "id": "definition-invertibility",
  "level": "2",
  "url": "section-maps-and-functions.html#definition-invertibility",
  "type": "Definition",
  "number": "1.2.11",
  "title": "Invertibility.",
  "body": " Invertibility  left inverse  right inverse  inverse  left-invertibility  right-invertibility  invertibility   Let be a map from a set to a set . A map is a left inverse to if , and is called a right inverse to if . is called an inverse to if it is both a left and right inverse to ; that is, is an inverse to if and .  A map is called left-invertible (resp. right-invertible , invertible ) if it has a left inverse (resp. right inverse, inverse).   "
},
{
  "id": "example-examples-of-inverses",
  "level": "2",
  "url": "section-maps-and-functions.html#example-examples-of-inverses",
  "type": "Example",
  "number": "1.2.12",
  "title": "Examples of inverses.",
  "body": " Examples of inverses  projection map   The following are examples of left inverses, right inverses, and inverses of maps.   Let be a non-empty subset of a set , and fix an element . Consider the constant map from to defined piecewise by the formula . Note that for all , and so ; that is, is a left inverse to the inclusion map of in .    Fix sets and , and suppose that is non-empty. Let be the projection map defined by the formula .  Fix an element , and consider the map from to defined by the formula . Then for all , and so ; that is, is a right inverse to the projection map .    The identity map on a set is its own inverse, since . This is actually a special case of the first example above, where we take . More generally, for all maps with domain , and for all maps with codomain .      "
},
{
  "id": "definition-injectivity-surjectivity-bijectivity",
  "level": "2",
  "url": "section-maps-and-functions.html#definition-injectivity-surjectivity-bijectivity",
  "type": "Definition",
  "number": "1.2.13",
  "title": "Injectivity; surjectivity; bijectivity.",
  "body": " Injectivity; surjectivity; bijectivity  injective  one-to-one  injection  surjective  onto  surjection  bijective  one-to-one correspondence  bijection   Let be a map from a set to a set .    is called injective (or one-to-one ) if for all inputs , if , then . In this case, is also called an injection of into .     is called surjective (or onto ) if for all outputs there is an input so that . In this case, is also called a surjection of onto .     is called bijective if it is both injective and surjective. In this case, is also called a bijection or a one-to-one correspondence between and .      "
},
{
  "id": "example-examples-of-injections-surjections-and-bijections",
  "level": "2",
  "url": "section-maps-and-functions.html#example-examples-of-injections-surjections-and-bijections",
  "type": "Example",
  "number": "1.2.14",
  "title": "Examples of injections, surjections, and bijections.",
  "body": " Examples of injections, surjections, and bijections   The following are examples of injective, surjective, and bijective functions.   Let be a subset of a set , and consider . If , then . So the inclusion map is injective.    Fix sets and , and suppose that is non-empty. Let be the projection map defined by the formula .  Let , and note that since is non-empty, there is some element . We note that . Since each output is the image of some input under , is surjective.    The identity map on a set is injective by virtue of being an inclusion map. is also surjective, since for all . Thus is bijective.      "
},
{
  "id": "theorem-invertibility",
  "level": "2",
  "url": "section-maps-and-functions.html#theorem-invertibility",
  "type": "Theorem",
  "number": "1.2.15",
  "title": "Invertibility.",
  "body": " Invertibility   Let be a map from a set to a set .   If is left-invertible, then it is injective.    If is non-empty and is injective, then it is left-invertible.    If is right-invertible, then it is surjective.         Suppose that is left-invertible, so that for some map . That is injective follows from the injectivity of the identity map and (d) of .    Conversely, now suppose that is non-empty and is injective. Then for each output , there is at most one input so that . Specifically, for each , there is a unique input so that . Denote by this unique input.  Since is non-empty, it contains an element . Define for all . We have defined a map . Note that for all inputs , and so ; that is, is a left inverse to , and so is left-invertible.    Finally, suppose that is right-invertible, so that for some map . That is surjective follows from the surjectivity of the identity map and (e) of .     "
},
{
  "id": "subsection-composition-and-invertibility-14",
  "level": "2",
  "url": "section-maps-and-functions.html#subsection-composition-and-invertibility-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "axiom of choice "
},
{
  "id": "corollary-invertibility",
  "level": "2",
  "url": "section-maps-and-functions.html#corollary-invertibility",
  "type": "Corollary",
  "number": "1.2.16",
  "title": "Invertibility.",
  "body": " Invertibility   A map is invertible if and only if it is bijective.    Let be a map from a set to a set . If is invertible, it is both left- and right-invertible, and so is both injective and surjective by (1) and (3) of . Hence is bijective.  Conversely, now suppose that is bijective, so that is both injective and surjective. If , then by the surjectivity of . Thus is the unique map from to itself, the identity map . In particular, is invertible.  So we may assume that is non-empty. Since is injective, it is left-invertible by (2) of . So for some map ; that is, for all inputs . It suffices to show that is also a right inverse to .  To that end, consider an output . Since is surjective, for some input . Then . Hence , and so is an inverse to ; that is, is invertible.   "
},
{
  "id": "subsection-composition-and-invertibility-16-1",
  "level": "2",
  "url": "section-maps-and-functions.html#subsection-composition-and-invertibility-16-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cardinality "
},
{
  "id": "definition-indexed-family-indexed-set",
  "level": "2",
  "url": "section-maps-and-functions.html#definition-indexed-family-indexed-set",
  "type": "Definition",
  "number": "1.2.17",
  "title": "Indexed family; indexed set.",
  "body": " Indexed family; indexed set  index  indexing set  indexed family  indexed set       a family of objects indexed by          a set of objects indexed by      A set is indexed by a set if there is a surjection . is called an indexing set , and for each input , called an index , its image is denoted .  The map is called an (indexed) family of elements of , and is denoted .  Consider a map of a set , called the indexing set and whose elements are called indices , onto a set . The image of such an index under such an (indexed) family  is often denoted , and is often denoted . We say that is indexed by , and we write .   "
},
{
  "id": "definition-intersection-union",
  "level": "2",
  "url": "section-maps-and-functions.html#definition-intersection-union",
  "type": "Definition",
  "number": "1.2.18",
  "title": "Intersection; union.",
  "body": " Intersection; union  intersection  union       the intersection of a family of sets          the union of a family of sets      Let be a family of subsets of a set indexed by a set . The intersection  of this indexed family is the subset of defined by . The union  of this indexed family is the subset of defined by .   "
},
{
  "id": "theorem-analogous-properties-of-indexed-intersections-and-unions",
  "level": "2",
  "url": "section-maps-and-functions.html#theorem-analogous-properties-of-indexed-intersections-and-unions",
  "type": "Theorem",
  "number": "1.2.19",
  "title": "Analogous properties of indexed intersections and unions.",
  "body": " Analogous properties of indexed intersections and unions   Let be a family of subsets of a set indexed by a set .   Analogously to , for any subset , if and only if for all indices , and if and only if for all indices .    Analogously to (2) of , and for any set and bijection .    Analogously to , and for any subset .    Analogously to , and for any subset .      "
},
{
  "id": "exercise-images-and-pre-images",
  "level": "2",
  "url": "section-maps-and-functions.html#exercise-images-and-pre-images",
  "type": "Reading Question",
  "number": "1.2.4.1",
  "title": "Images and pre-images.",
  "body": " Images and pre-images   Let be the map from to defined in (2) of ; that is, . Compute the given images and pre-images. Express your answer in roster notation.     Compute the images and .     .    Since , the image of under is . Similarly, since , the image of under is .      Compute the image .     .    Since for all , the image of is .      Compute the pre-images and .     and .    Since for all , the pre-images and of and under are and .    "
},
{
  "id": "reading-question-composition-and-jectivity",
  "level": "2",
  "url": "section-maps-and-functions.html#reading-question-composition-and-jectivity",
  "type": "Reading Question",
  "number": "1.2.5.1",
  "title": "Composition and “jectivity”.",
  "body": " Composition and jectivity    Let and be maps between sets , , and .     Prove that if and are injective, then so is their composition .    Let , and suppose that . Then , and so the injectivity of implies that . Moreover, the injectivity of implies that . In summary, we have shown that for all inputs , if , then ; that is, is injective.      Prove that if and are surjective, then so is their composition .    Let . Since is surjective, for some . Moreover, since is surjective, for some . Thus . In summary, we have shown that for every output , there is some input so that ; that is, is surjective.      Prove that if and are bijective, then so is their composition .    Since and are bijective, they are both injective and surjective. (1) and (2) above not imply that their composition is both injective and surjective; that is, is bijective.      Prove that if the composition is injective, then so is .    Prove the desired result by contraposition.    Suppose that is not injective. Then for some distinct inputs . Note that . Since but , is not injective.  In summary, we have shown that if is not injective, then is not injective. The contrapositive of this implication is the desired result: if is injective, then so is .      Prove that if the composition is surjective, then so is .    Prove the desired result by contraposition.    Suppose that is not surjective. Then there is some so that for all . Note that for all , and so is not surjective.  In summary, we have shown that if is not surjective, then is not surjective. The contrapositive of this implication is the desired result: if is surjective, then so is .    "
},
{
  "id": "section-peano-arithmetic-and-the-natural-numbers",
  "level": "1",
  "url": "section-peano-arithmetic-and-the-natural-numbers.html",
  "type": "Section",
  "number": "1.3",
  "title": "Peano Arithmetic and the Natural Numbers",
  "body": " Peano Arithmetic and the Natural Numbers   In this section, we formally introduce the natural number system . Also called the counting numbers, the natural numbers form the simplest of the number systems; in fact, many people would date the advent of mathematics itself to the invention\/discovery of these numbers.    Axiomatizing the Natural Numbers   There are many nonequivalent formalizations and models of the natural number system, but the standard axiomatization is due to Giuseppe Peano in the 19th century. Peano arithmetic is nonconstructive; it gives a description of the natural number system but not a model. We won't introduce any specific model of the natural number system, but, rest assured, there are several. For our purposes, itself can be any set which conforms to the following characterization:    Natural numbers  Giuseppe Peano  natural number  Peano axioms  successor function  addition operation  natural operation       the set of natural numbers         the successor function         the addition operation         the multiplication operation         the standard ordering     The natural number system  is a nonempty set with an element , called zero , along with functions and , called the successor function and the addition and multiplication operations and a subset of the Cartesian product of with itself, called the standard ordering , which satisfy the following properties:   The successor of any natural number is non-zero.    The successor function is injective.     for all natural numbers .     for all natural numbers .     for all natural numbers .     for all natural numbers .    For all natural numbers , if and only if for some natural number .    For all subsets , if and only if it satisfies the following conditions:    .    For all natural numbers , if , then .      Typically, for all natural numbers we write and , and we write if and only if . The successor of is denoted . Likewise, the successor of is denoted , the successor of is denoted , and so on. We see that for all natural numbers . With these new notations, we may restate the Peano axioms as follows:    for all .    For all natural numbers , if , then .     for all natural numbers .     for all natural numbers .     for all natural numbers .     for all natural numbers .    For all natural numbers , if and only if for some natural number .    For all subsets , if and only if it satisfies the following conditions:    .    For all natural numbers , if , then .          Under the usual (and original) interpretation of the natural number system as characterizing quantities of discrete physical objects, the above rules (with the possible exception of the final axiom, called the axiom of induction ) may seem obviously true but also somewhat arbitrary. It is a fact, though we will not prove it here, that these axioms are independent of each other; it is impossible to derive one of the above statements from only the others. We hope that this, along with the results in this section about arithmetic, convince you that the above axiomatization is a good choice, in that it is efficient in the above sense and that it can be used to prove many arithmetical truths.   sequence First, however, we introduce some ubiquitous terminology and notation. A family of objects indexed by some subset is called a sequence . If the index set is of the form for some natural numbers , then we denote this family by . Similarly, if the index set is of the form for some natural number , then we denote this family by . These notations also apply to intersections and unions of sequences of sets indexed by subsets of of the above form.    is minimal   For all natural numbers , if , then .    We first observe that . Indeed, note that . Moreover, if , then . Thus by the axiom of induction.  Let be a natural number, and suppose that for some natural number . Then for some natural number . Suppose for a contradiction that for some natural number . Then , which contradicts the first Peano axiom. Thus . However, , and so ; that is, , and so .     Principle of strong induction  principle of strong induction   For all subsets , if and only if it satisfies the following conditions:    .    For all natural numbers , if for all so that , then .       Clearly satisfies the above conditions, and so it suffices to show that any subsets which satisfies these conditions is equal to . To that end, let be a subset which satisfies the above conditions, and consider the subset . Since the only so that is itself, and , we have that . Moreover if , then for all so that , and so by hypothesis. It remains to conclude that for all so that .  To that end, let , and suppose that . Then for some natural number . If , then . On the other hand, if , then the argument in the proof of implies that for some natural number . Thus , and so the injectivity of the successor function implies that ; that is, and so . Since for all so that , we conclude that .  In summary, we have shown that and that for all natural numbers , if , then . Thus by the axiom of induction. One can check that , and so .     The axiom of induction and form the basis for ubiquitous methods of proof called proof by induction and proof by strong induction , respectively. You will have the opportunity to practice constructing such proofs in the problems for this section.     Properties of Arithmetic   The axioms of Peano arithmetic actually imply a great deal about the properties of the natural number system. We will now state and prove a great deal of results about the successor function and the addition and multiplication operators. Many of these results will give us practice in the fundamental skill of proof by induction, and we will use these results implicitly for the rest of this text.    Associativity of addition    for all natural numbers .    Let be natural numbers. We proceed by induction on to show that .  Base case  If , then .    Inductive step  Now suppose for the inductive hypothesis that for some natural number , and note that .  We conclude that for all natural numbers .    One consequence of is that we may unambiguously parse expressions with multiple sums without the need of parentheses; for example,if are natural numbers, then the expression is well-defined, because . Going forward, we will make use of these expressions wherever it is possible to do so without obscuring the relevant arguments.   implies that the result of adding a finite number of natural numbers depends only on the order of the numbers from left to right, and not on the iterative structure of the summands induced by parentheses. In fact, the order of the summands does not matter either. In order to show this, it helps to notice the following two results about addition.   Addition by     for all natural numbers .     for all natural numbers by the Peano axioms, and so it suffices to show . We proceed by induction on .  Base case  If , then .    Inductive step  Now suppose for the inductive hypothesis that for some natural number , and note that .  We conclude that for all natural numbers .     Towards commutativity of addition    for all natural numbers .    By induction on .  Base case  If , then by .    Inductive step  Now suppose for the inductive hypothesis that for some natural number , and note that by .  We conclude that for all natural numbers .     Commutativity of addition    for all natural numbers .    Let be a natural number. We proceed by induction on .  Base case  If , then by .    Inductive step  Now suppose for the inductive hypothesis that for some natural number , and note that by and .  We conclude that for all natural numbers .     and together imply that, when adding natural numbers, neither the order of the summands nor the order of the addition operations performed matters. In order to see that analogous properties also hold for multiplication, we will require the following supporting results. Along the way, we will also prove the distributivity of multiplication over addition.   Multiplication by     and for all natural numbers .    For all natural numbers , by . Thus it suffices to prove that for all natural numbers . We proceed by induction on .  Base case  If , then .    Inductive step  Now suppose for the inductive hypothesis that for some natural number , and note that .  We conclude that for all natural numbers .     Left distributivity of multiplication over addition    for all natural numbers .    Let be natural numbers. We proceed by induction on .  Base case  If , then .    Inductive step  Now suppose for the inductive hypothesis that for some natural number , and note that by .  We conclude that for all natural numbers .     Associativity of multiplication    for all natural numbers .    Let be natural numbers. We proceed by induction on .  Base case  If , then .    Inductive step  Now suppose for the inductive hypothesis that for some natural number , and note that by .  We conclude that for all natural numbers .    Just as with addition, one consequence of is that we may unambiguously parse expressions with multiple products without the need of parentheses; for example,if are natural numbers, then the expression is well-defined, because . Going forward, we will make use of these expressions wherever it is possible to do so without obscuring the relevant arguments.   Right distributivity of multiplication over addition    for all natural numbers .    Let be natural numbers. We proceed by induction on .  Base case  If , then .    Inductive step  Now suppose for the inductive hypothesis that for some natural number , and note that by repeated applications of and .  We conclude that for all natural numbers .     Multiplication by     for all natural numbers .    By induction on .  Base case  If , then .    Inductive step  Now suppose for the inductive hypothesis that for some natural number , and note that .  We conclude that for all natural numbers .     Commutativity of multiplication    for all natural numbers .    Let be a natural number. We proceed by induction on .  Base case  If , then by .    Inductive step  Now suppose for the inductive hypothesis that for some natural number , and note that by   We conclude that for all natural numbers .     Cancellation of addition   For all natural numbers , addition by is injective; that is, for all natural numbers , if , then .    Let be natural numbers. We proceed by induction on .  Base case  If and , then     Inductive step  Now suppose for the inductive hypothesis that there is some natural number so that if , then . Note that if , then , and so by the injectivity of the successor function. Thus by the inductive hypothesis. In summary, we have shown that if , then .  We conclude that for all natural numbers , if , then .     A similar cancellation law exists for multiplication, but its proof will require some properties of the comparison of natural numbers via its standard ordering.     Properties of Comparison   The final component of Peano's axiomatization of the natural numbers is that of comparison. The standard ordering on the natural numbers has several important and familiar properties which we will now derive from first principles.    Comparison is a total order   Comparison of natural numbers has the following properties:   Reflexivity   for all natural numbers .    Antisymmetry  For all natural numbers , if and , then .    Transitivity  For all natural numbers , if and , then .    Totality  For all natural numbers , either or .         For all natural numbers , , so that .    Let be natural numbers, and suppose that and . Then and for some natural numbers . Note that , and so by ; that is, . now implies that , so that .    Let be natural numbers, and suppose that and . Then and for some natural numbers , and so . We conclude that .    Let be a natural number. We proceed by induction on .  Base case  If , then by , and so .    Inductive step  Now suppose for the inductive hypothesis that there is a natural number so that either or . If , then for some natural number , and so ; that is, .  Now suppose that , so that for some natural number . If , then , and so . On the other hand, if , then for some natural number by an argument in the proof of . Then , and so .  We conclude that for all natural numbers , either or .       Cancellation of multiplication   For all natural numbers , if , then addition by is injective; that is, for all natural numbers , if , then either or .    By induction on .  Base case  If , then , and so the desired conclusion holds for all natural numbers .    Inductive step  Now suppose for the inductive hypothesis that there is a natural number so that for all natural numbers , if , then either or . Let be natural numbers, and suppose that . Then , and so it suffices to show that .  To that end, note that (4) of implies that either or . Without loss of generality, we may suppose that , so that for some natural number . We observe that by , , , , and .  In particular, implies that , so that . We conclude by that , so that .  We conclude that for all natural numbers , either if , then either or .     Comparison and arithmetic   Let be natural numbers.   If and , then .    If and , then .         If and , then and for some natural numbers , and so . We conclude that .    If and , then and for some natural numbers , and so . We conclude that .      For ease of reference, we collect the above results (along with some immediate corollaries) in the following theorem.   Properties of Peano arithmetic  Peano arithmetic   Addition, multiplication, and comparison of natural numbers have the following properties:   Associativity of addition   for all natural numbers .    Commutativity of addition   for all natural numbers .    Additive identity   for all natural numbers .    Associativity of multiplication   for all natural numbers .    Commutativity of multiplication   for all natural numbers .    Multiplicative annihilation   for all natural numbers .    Multiplicative identity   for all natural numbers .    Distributivity of multiplication over addition   and for all natural numbers .    Reflexivity of comparison   for all natural numbers .    Antisymmetry of comparison  For all natural numbers , if and , then .    Transitivity of comparison  For all natural numbers , if and , then .    Totality of comparison  For all natural numbers , either or .    Compatibility of comparison and addition\/multiplication  For all natural numbers , if and , then and         Many of these properties of the arithmetic and comparison of natural numbers also extend to the arithmetic of the other classes of numbers we will consider, namely the integers, rational numbers, real numbers, and complex numbers.     In the next sections, we will generalize the properties of addition and multiplication and the order-theoretic properties of comparison of natural numbers and arrive at fundamental notions of binar operations and relations, partial and total orders, and the well-ordering principle.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "definition-natural-numbers",
  "level": "2",
  "url": "section-peano-arithmetic-and-the-natural-numbers.html#definition-natural-numbers",
  "type": "Definition",
  "number": "1.3.1",
  "title": "Natural numbers.",
  "body": " Natural numbers  Giuseppe Peano  natural number  Peano axioms  successor function  addition operation  natural operation       the set of natural numbers         the successor function         the addition operation         the multiplication operation         the standard ordering     The natural number system  is a nonempty set with an element , called zero , along with functions and , called the successor function and the addition and multiplication operations and a subset of the Cartesian product of with itself, called the standard ordering , which satisfy the following properties:   The successor of any natural number is non-zero.    The successor function is injective.     for all natural numbers .     for all natural numbers .     for all natural numbers .     for all natural numbers .    For all natural numbers , if and only if for some natural number .    For all subsets , if and only if it satisfies the following conditions:    .    For all natural numbers , if , then .      Typically, for all natural numbers we write and , and we write if and only if . The successor of is denoted . Likewise, the successor of is denoted , the successor of is denoted , and so on. We see that for all natural numbers . With these new notations, we may restate the Peano axioms as follows:    for all .    For all natural numbers , if , then .     for all natural numbers .     for all natural numbers .     for all natural numbers .     for all natural numbers .    For all natural numbers , if and only if for some natural number .    For all subsets , if and only if it satisfies the following conditions:    .    For all natural numbers , if , then .         "
},
{
  "id": "subsection-axiomatizing-the-natural-numbers-4",
  "level": "2",
  "url": "section-peano-arithmetic-and-the-natural-numbers.html#subsection-axiomatizing-the-natural-numbers-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "axiom of induction "
},
{
  "id": "subsection-axiomatizing-the-natural-numbers-5",
  "level": "2",
  "url": "section-peano-arithmetic-and-the-natural-numbers.html#subsection-axiomatizing-the-natural-numbers-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sequence "
},
{
  "id": "lemma-zero-is-minimal",
  "level": "2",
  "url": "section-peano-arithmetic-and-the-natural-numbers.html#lemma-zero-is-minimal",
  "type": "Lemma",
  "number": "1.3.2",
  "title": "<span class=\"process-math\">\\(0 \\)<\/span> is minimal.",
  "body": "  is minimal   For all natural numbers , if , then .    We first observe that . Indeed, note that . Moreover, if , then . Thus by the axiom of induction.  Let be a natural number, and suppose that for some natural number . Then for some natural number . Suppose for a contradiction that for some natural number . Then , which contradicts the first Peano axiom. Thus . However, , and so ; that is, , and so .   "
},
{
  "id": "proposition-principle-of-strong-induction",
  "level": "2",
  "url": "section-peano-arithmetic-and-the-natural-numbers.html#proposition-principle-of-strong-induction",
  "type": "Proposition",
  "number": "1.3.3",
  "title": "Principle of strong induction.",
  "body": " Principle of strong induction  principle of strong induction   For all subsets , if and only if it satisfies the following conditions:    .    For all natural numbers , if for all so that , then .       Clearly satisfies the above conditions, and so it suffices to show that any subsets which satisfies these conditions is equal to . To that end, let be a subset which satisfies the above conditions, and consider the subset . Since the only so that is itself, and , we have that . Moreover if , then for all so that , and so by hypothesis. It remains to conclude that for all so that .  To that end, let , and suppose that . Then for some natural number . If , then . On the other hand, if , then the argument in the proof of implies that for some natural number . Thus , and so the injectivity of the successor function implies that ; that is, and so . Since for all so that , we conclude that .  In summary, we have shown that and that for all natural numbers , if , then . Thus by the axiom of induction. One can check that , and so .   "
},
{
  "id": "subsection-axiomatizing-the-natural-numbers-8-1",
  "level": "2",
  "url": "section-peano-arithmetic-and-the-natural-numbers.html#subsection-axiomatizing-the-natural-numbers-8-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "proof by induction proof by strong induction "
},
{
  "id": "proposition-associativity-of-addition",
  "level": "2",
  "url": "section-peano-arithmetic-and-the-natural-numbers.html#proposition-associativity-of-addition",
  "type": "Proposition",
  "number": "1.3.4",
  "title": "Associativity of addition.",
  "body": " Associativity of addition    for all natural numbers .    Let be natural numbers. We proceed by induction on to show that .  Base case  If , then .    Inductive step  Now suppose for the inductive hypothesis that for some natural number , and note that .  We conclude that for all natural numbers .   "
},
{
  "id": "lemma-addition-by-zero",
  "level": "2",
  "url": "section-peano-arithmetic-and-the-natural-numbers.html#lemma-addition-by-zero",
  "type": "Lemma",
  "number": "1.3.5",
  "title": "Addition by <span class=\"process-math\">\\(0 \\)<\/span>.",
  "body": " Addition by     for all natural numbers .     for all natural numbers by the Peano axioms, and so it suffices to show . We proceed by induction on .  Base case  If , then .    Inductive step  Now suppose for the inductive hypothesis that for some natural number , and note that .  We conclude that for all natural numbers .   "
},
{
  "id": "lemma-towards-commutativity-of-addition",
  "level": "2",
  "url": "section-peano-arithmetic-and-the-natural-numbers.html#lemma-towards-commutativity-of-addition",
  "type": "Lemma",
  "number": "1.3.6",
  "title": "Towards commutativity of addition.",
  "body": " Towards commutativity of addition    for all natural numbers .    By induction on .  Base case  If , then by .    Inductive step  Now suppose for the inductive hypothesis that for some natural number , and note that by .  We conclude that for all natural numbers .   "
},
{
  "id": "proposition-commutativity-of-addition",
  "level": "2",
  "url": "section-peano-arithmetic-and-the-natural-numbers.html#proposition-commutativity-of-addition",
  "type": "Proposition",
  "number": "1.3.7",
  "title": "Commutativity of addition.",
  "body": " Commutativity of addition    for all natural numbers .    Let be a natural number. We proceed by induction on .  Base case  If , then by .    Inductive step  Now suppose for the inductive hypothesis that for some natural number , and note that by and .  We conclude that for all natural numbers .   "
},
{
  "id": "lemma-multiplication-by-one",
  "level": "2",
  "url": "section-peano-arithmetic-and-the-natural-numbers.html#lemma-multiplication-by-one",
  "type": "Lemma",
  "number": "1.3.8",
  "title": "Multiplication by <span class=\"process-math\">\\(1 \\)<\/span>.",
  "body": " Multiplication by     and for all natural numbers .    For all natural numbers , by . Thus it suffices to prove that for all natural numbers . We proceed by induction on .  Base case  If , then .    Inductive step  Now suppose for the inductive hypothesis that for some natural number , and note that .  We conclude that for all natural numbers .   "
},
{
  "id": "proposition-left-distributivity-of-multiplication-over-addition",
  "level": "2",
  "url": "section-peano-arithmetic-and-the-natural-numbers.html#proposition-left-distributivity-of-multiplication-over-addition",
  "type": "Proposition",
  "number": "1.3.9",
  "title": "Left distributivity of multiplication over addition.",
  "body": " Left distributivity of multiplication over addition    for all natural numbers .    Let be natural numbers. We proceed by induction on .  Base case  If , then .    Inductive step  Now suppose for the inductive hypothesis that for some natural number , and note that by .  We conclude that for all natural numbers .   "
},
{
  "id": "proposition-associativity-of-multiplication",
  "level": "2",
  "url": "section-peano-arithmetic-and-the-natural-numbers.html#proposition-associativity-of-multiplication",
  "type": "Proposition",
  "number": "1.3.10",
  "title": "Associativity of multiplication.",
  "body": " Associativity of multiplication    for all natural numbers .    Let be natural numbers. We proceed by induction on .  Base case  If , then .    Inductive step  Now suppose for the inductive hypothesis that for some natural number , and note that by .  We conclude that for all natural numbers .   "
},
{
  "id": "proposition-right-distributivity-of-multiplication-over-addition",
  "level": "2",
  "url": "section-peano-arithmetic-and-the-natural-numbers.html#proposition-right-distributivity-of-multiplication-over-addition",
  "type": "Proposition",
  "number": "1.3.11",
  "title": "Right distributivity of multiplication over addition.",
  "body": " Right distributivity of multiplication over addition    for all natural numbers .    Let be natural numbers. We proceed by induction on .  Base case  If , then .    Inductive step  Now suppose for the inductive hypothesis that for some natural number , and note that by repeated applications of and .  We conclude that for all natural numbers .   "
},
{
  "id": "lemma-multiplication-by-zero",
  "level": "2",
  "url": "section-peano-arithmetic-and-the-natural-numbers.html#lemma-multiplication-by-zero",
  "type": "Lemma",
  "number": "1.3.12",
  "title": "Multiplication by <span class=\"process-math\">\\(0 \\)<\/span>.",
  "body": " Multiplication by     for all natural numbers .    By induction on .  Base case  If , then .    Inductive step  Now suppose for the inductive hypothesis that for some natural number , and note that .  We conclude that for all natural numbers .   "
},
{
  "id": "proposition-commutativity-of-multiplication",
  "level": "2",
  "url": "section-peano-arithmetic-and-the-natural-numbers.html#proposition-commutativity-of-multiplication",
  "type": "Proposition",
  "number": "1.3.13",
  "title": "Commutativity of multiplication.",
  "body": " Commutativity of multiplication    for all natural numbers .    Let be a natural number. We proceed by induction on .  Base case  If , then by .    Inductive step  Now suppose for the inductive hypothesis that for some natural number , and note that by   We conclude that for all natural numbers .   "
},
{
  "id": "lemma-cancellation-of-addition",
  "level": "2",
  "url": "section-peano-arithmetic-and-the-natural-numbers.html#lemma-cancellation-of-addition",
  "type": "Lemma",
  "number": "1.3.14",
  "title": "Cancellation of addition.",
  "body": " Cancellation of addition   For all natural numbers , addition by is injective; that is, for all natural numbers , if , then .    Let be natural numbers. We proceed by induction on .  Base case  If and , then     Inductive step  Now suppose for the inductive hypothesis that there is some natural number so that if , then . Note that if , then , and so by the injectivity of the successor function. Thus by the inductive hypothesis. In summary, we have shown that if , then .  We conclude that for all natural numbers , if , then .   "
},
{
  "id": "proposition-comparison-is-a-total-order",
  "level": "2",
  "url": "section-peano-arithmetic-and-the-natural-numbers.html#proposition-comparison-is-a-total-order",
  "type": "Proposition",
  "number": "1.3.15",
  "title": "Comparison is a total order.",
  "body": " Comparison is a total order   Comparison of natural numbers has the following properties:   Reflexivity   for all natural numbers .    Antisymmetry  For all natural numbers , if and , then .    Transitivity  For all natural numbers , if and , then .    Totality  For all natural numbers , either or .         For all natural numbers , , so that .    Let be natural numbers, and suppose that and . Then and for some natural numbers . Note that , and so by ; that is, . now implies that , so that .    Let be natural numbers, and suppose that and . Then and for some natural numbers , and so . We conclude that .    Let be a natural number. We proceed by induction on .  Base case  If , then by , and so .    Inductive step  Now suppose for the inductive hypothesis that there is a natural number so that either or . If , then for some natural number , and so ; that is, .  Now suppose that , so that for some natural number . If , then , and so . On the other hand, if , then for some natural number by an argument in the proof of . Then , and so .  We conclude that for all natural numbers , either or .     "
},
{
  "id": "corollary-cancellation-of-multiplication",
  "level": "2",
  "url": "section-peano-arithmetic-and-the-natural-numbers.html#corollary-cancellation-of-multiplication",
  "type": "Corollary",
  "number": "1.3.16",
  "title": "Cancellation of multiplication.",
  "body": " Cancellation of multiplication   For all natural numbers , if , then addition by is injective; that is, for all natural numbers , if , then either or .    By induction on .  Base case  If , then , and so the desired conclusion holds for all natural numbers .    Inductive step  Now suppose for the inductive hypothesis that there is a natural number so that for all natural numbers , if , then either or . Let be natural numbers, and suppose that . Then , and so it suffices to show that .  To that end, note that (4) of implies that either or . Without loss of generality, we may suppose that , so that for some natural number . We observe that by , , , , and .  In particular, implies that , so that . We conclude by that , so that .  We conclude that for all natural numbers , either if , then either or .   "
},
{
  "id": "lemma-comparison-and-arithmetic",
  "level": "2",
  "url": "section-peano-arithmetic-and-the-natural-numbers.html#lemma-comparison-and-arithmetic",
  "type": "Lemma",
  "number": "1.3.17",
  "title": "Comparison and arithmetic.",
  "body": " Comparison and arithmetic   Let be natural numbers.   If and , then .    If and , then .         If and , then and for some natural numbers , and so . We conclude that .    If and , then and for some natural numbers , and so . We conclude that .     "
},
{
  "id": "theorem-properties-of-peano-arithmetic",
  "level": "2",
  "url": "section-peano-arithmetic-and-the-natural-numbers.html#theorem-properties-of-peano-arithmetic",
  "type": "Theorem",
  "number": "1.3.18",
  "title": "Properties of Peano arithmetic.",
  "body": " Properties of Peano arithmetic  Peano arithmetic   Addition, multiplication, and comparison of natural numbers have the following properties:   Associativity of addition   for all natural numbers .    Commutativity of addition   for all natural numbers .    Additive identity   for all natural numbers .    Associativity of multiplication   for all natural numbers .    Commutativity of multiplication   for all natural numbers .    Multiplicative annihilation   for all natural numbers .    Multiplicative identity   for all natural numbers .    Distributivity of multiplication over addition   and for all natural numbers .    Reflexivity of comparison   for all natural numbers .    Antisymmetry of comparison  For all natural numbers , if and , then .    Transitivity of comparison  For all natural numbers , if and , then .    Totality of comparison  For all natural numbers , either or .    Compatibility of comparison and addition\/multiplication  For all natural numbers , if and , then and       "
},
{
  "id": "section-finitary-operations-and-relations",
  "level": "1",
  "url": "section-finitary-operations-and-relations.html",
  "type": "Section",
  "number": "1.4",
  "title": "Finitary Operations and Relations",
  "body": " Finitary Operations and Relations   In this section, we will develop the notion of (finitary) operations and relations on sets. Intuitively, a finitary operation on a set is an assignment of an element of that set to some finite number of other elements, and a finitary relation on a set is a designation of certain groups of some finite number of elements as associated.    Products and Choice   Previously, we have used the mathematical convention of indexing to generalize the intersection and union of two sets. We may also use indexing to generalize the Cartesian product of two sets to act on arbitrary indexed families of sets. In this section, we will develop this generalized Cartesian product, and use it to introduce operations and relations on a set. Instead of containing ordered pairs of elements, our new Cartesian product consists of indexed families of elements.    Cartesian product  Cartesian product  Cartesian factor  projection       the Cartesian product of a family of sets          the projection map of a Cartesian product onto one of its factors      Let be a family of subsets of a set , called factors , indexed by a set . The Cartesian product  of this indexed family is the set of families of elements with the property that for all indices .  For each index , the th projection map  is the map from the Cartesian product to the th factor defined by the formula .     Empty and singleton products   What does a family indexed by the empty set look like? The empty set is the unique map from the empty set to a set . Therefore, there is only one such family of elements of indexed by the empty set . This unique indexed family is usually denoted . By the above remark, . Similarly, a family of elements of a set indexed by a singleton set is uniquely determined by the image of . Such an indexed family is denoted We usually act under the convention , so that     It may seem intuitive or obvious that the Cartesian product of an indexed family of nonempty sets is itself nonempty. After all, one can specify an indexed family of elements of these sets just by choosing an element of each nonempty set. This notion of a choice of elements of nonempty sets gives the following axiom its name.   Axiom of choice  axiom of choice   Let be an indexed family of subsets of a set . If for all indices , then the Cartesian product is also non-empty.    We will take the as true for the remainder of this text. While seemingly too specific to be of much use, the axiom of choice can be used to prove many useful results. In particular, we can use it to complete the characterization of invertibility given in .   Invertibility   Let be a map from a set to a set .    is left-invertible if and only if is injective or is empty.     is right-invertible if and only if is surjective.     is invertible if and only if is bijective.         This follows directly from (1) and (2) of .    The forward implication is (3) of . Thus we may suppose that is surjective. Then for each output , the pre-image is a non-empty subset of , and so implies that the Cartesian product is a non-empty subset of . Choose an element , and note that for all , , so that ; that is, so that is a right inverse to . Hence is right-invertible.    This is (3) of .       Cartesian power  Cartesian power       the th Cartesian power of a set      Let be a set and be a natural number. The th Cartesian power  of is the Cartesian product .     We will now move on to study the Cartesian powers of sets. Maps from the Cartesian power of a set to the set itself will be called finitary operations on that set, and subsets of the Cartesian power of a set will be called finitary relations on that set.     Finitary Operations   Informally, a finitary operation on a set is an assignment of its elements to all finite sequence of a certain length in that set. That is, a finitary operation on a set is a map from some finite Cartesian power of that set to the set itself. We will view a finitary operation (through the active characterization of what maps do) as a process which combines elements of a set into a new element.    Finitary operation  finitary operation  arity   Let be a set and be a natural number. A finitary operation of arity  (or more simply a  -ary operation ) is a map .     Finitary operations  nullary operation  unary operation  binary operation   The following are examples of finitary operations:   A -ary operation (or more simply, a nullary operation ) on a set is just a map from to . Such a map is uniquely determined by the image of the unique element . In this way, we may view the nullary operations on as synonymous with the elements of .    A -ary operation (or more simply, a unary operation ) on a set is just a map . One example of such a unary operation on the natural numbers is the successor function .    A -ary operation (or more simply, a binary operation ) on a set is a map . Two examples of such binary operations on the natural numbers are the addition and multiplication operations .  Binary operations are usually denoted with symbols such as , , , , and . For a given binary operation , we write for all elements .       In many ways, algebra is the study of finitary operations on sets. Particularly emphasized in group theory and ring theory is the study of binary operation on sets. We won't delve too deep into the study of binary operations, but we will introduce some nice properties which some binary operations may satisfy.   Commutativity; associativity  commutativity  associativity   Let be a binary operation on a set .    is called commutative if for all elements .     is called associative if for all elements .        Commutative\/associative binary operations   The following are examples of commutativity and associativity in binary operations:   Addition and multiplication are commutative and associative binary operations on by (1), (2), (4), and (5) of .    Intersection and union are commutative and associative binary operations on the power set of a set by (2) and (3) of .    Composition is an associative but non-commutative binary operation on the set of maps from a set to itself.    Let be the exponentiation function defined by the formula ; that is, is defined recursively by the formulae and . Then is a binary operation on , but is neither commutative nor associative.             recursive summation notation         recursive product notation   Associative binary operations can be extended recursively to act on finite sequences of any length. For example, given a finite sequence of natural numbers , we write .   As in the case of finitary operations, we will introduce finitary relations of all arities, but we will emphasize binary relations in order to study congruences and order relations, which are ubiquitous throughout both classical and modern mathematics and which will recur throughout this text.     Finitary Relations   A finitary relation on a set is just a subset of some finite Cartesian power of the set. This subset is usually interpreted as distinguishing its elements certain finite sequences of elements of the set as important in some way.    Finitary relation  finitary relation  arity   Let be a set and be a natural number. A finitary relation of arity  (or more simply a  -ary relation ) is a subset .    We will view a finitary relation on a set as elevating specific finite sequences of elements of that set as distinguished.   Finitary relations  unary operation  binary operation   The following are examples of finitary operations:   In light of the convention , a -ary operation (or more simply, a unary operation ) on a set is just a subset of .    A -ary relation (or more simply, a binary relation ) on a set is a subset . Two examples of such binary relations are the containment relation on the power set of a set and the standard ordering of the natural numbers .  Just as there is a special notation for binary operations, there is a special relation for binary relations as well. Specifically, for a given binary relation on a set , we write to mean that .        Pullback of a finitary relation  pullback       the pullback of a finitary relation along a map      Let and be sets and be a natural number. The pullback  of an -ary relation on along a map is the -ary relation on defined by .     Restriction of a finitary relation  restriction       the restriction of a finitary relation to a subset      Let be a set and be a natural number. The restriction  of an -ary relation on to a subset is the pullback of along the inclusion map ; that is, .    One particularly nice type of binary relation is the equivalence relation . This is a generalization of the notion of equality, which has many of the salient properties of the equality relation. We will see that an equivalence relation partitions a set into disjoint subsets known as equivalence classes . When we consider more sophisticated structures than just sets, we will use equivalence relations to construct quotient objects, as is done in algebraic settings such as group theory or ring theory.   Equivalence relation  reflexivity  symmetry  transitivity  equivalence relation   Let be a binary relation on a set .    is called reflexive if for all elements .     is called symmetric if for all elements , if , then .     is called transitive if for all elements , if and , then .    is called an equivalence relation if it is reflexive, symmetric, and transitive.     Pullbacks of equivalence relations   The pullback of an equivalence relation on a set along a map from a set to is an equivalence relation on .    First let , and note that by the reflexivity of , and so ; that is, is reflexive.  Now let , and suppose that . Then , and so by the symmetry of . In particular, , and so is symmetric.  Finally, let , and suppose that and . Then and , and so by the transitivity of . In particular, , and so is transitive.  Since is reflexive, symmetric, and transitive, it is an equivalence relation on .     Equivalence class; quotient set  equivalence class  quotient set       the equivalence class of under          the quotient of by      Let be an equivalence relation on a set . The equivalence class  of an element is the subset of defined by ; that is, is the set of elements which are equivalent to under the relation . The quotient  of by is the set of equivalence classes; that is, .    As mentioned above, an equivalence relation on a given set partitions that set into pairwise disjoint equivalence classes.   Equivalence partition  partition   The equivalence classes of an equivalence relation on a set form a partition of ; that is, two equivalence classes are either equal or disjoint, and .    Each equivalence class is a subset of , and so . In order to show the reverse containment, let , and note that by reflexivity; that is, , and so . We conclude that .  It remains to show that two equivalence classes are either equal or disjoint. To that end, consider elements . First suppose that , and let . Then , and so transitivity implies that ; that is, .  In summary, we have shown that if , then . Symmetry implies that if , then , and so ; that is, if , then .  Conversely, now suppose that the equivalence classes and are not disjoint, so that for some element . Since and , and . We conclude by symmetry and transitivity that .     Equivalence relations are ubiquitous throughout mathematics, and we will work with them for the remainder of this text.     While this section has dealt with finitary operations and relations in broad generality, the vast majority of mathematics relevant to this text deals with binary operations and relations. In the next section, we will see another use for binary relations; that of ordering sets.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-finitary-operations-and-relations-2-1",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#section-finitary-operations-and-relations-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "finitary operation finitary relation "
},
{
  "id": "definition-cartesian-product-2",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#definition-cartesian-product-2",
  "type": "Definition",
  "number": "1.4.1",
  "title": "Cartesian product.",
  "body": " Cartesian product  Cartesian product  Cartesian factor  projection       the Cartesian product of a family of sets          the projection map of a Cartesian product onto one of its factors      Let be a family of subsets of a set , called factors , indexed by a set . The Cartesian product  of this indexed family is the set of families of elements with the property that for all indices .  For each index , the th projection map  is the map from the Cartesian product to the th factor defined by the formula .   "
},
{
  "id": "convention-empty-and-singleton-products",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#convention-empty-and-singleton-products",
  "type": "Convention",
  "number": "1.4.2",
  "title": "Empty and singleton products.",
  "body": " Empty and singleton products   What does a family indexed by the empty set look like? The empty set is the unique map from the empty set to a set . Therefore, there is only one such family of elements of indexed by the empty set . This unique indexed family is usually denoted . By the above remark, . Similarly, a family of elements of a set indexed by a singleton set is uniquely determined by the image of . Such an indexed family is denoted We usually act under the convention , so that    "
},
{
  "id": "axiom-axiom-of-choice",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#axiom-axiom-of-choice",
  "type": "Axiom",
  "number": "1.4.3",
  "title": "Axiom of choice.",
  "body": " Axiom of choice  axiom of choice   Let be an indexed family of subsets of a set . If for all indices , then the Cartesian product is also non-empty.   "
},
{
  "id": "corollary-invertibility-2",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#corollary-invertibility-2",
  "type": "Corollary",
  "number": "1.4.4",
  "title": "Invertibility.",
  "body": " Invertibility   Let be a map from a set to a set .    is left-invertible if and only if is injective or is empty.     is right-invertible if and only if is surjective.     is invertible if and only if is bijective.         This follows directly from (1) and (2) of .    The forward implication is (3) of . Thus we may suppose that is surjective. Then for each output , the pre-image is a non-empty subset of , and so implies that the Cartesian product is a non-empty subset of . Choose an element , and note that for all , , so that ; that is, so that is a right inverse to . Hence is right-invertible.    This is (3) of .     "
},
{
  "id": "definition-cartesian-power",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#definition-cartesian-power",
  "type": "Definition",
  "number": "1.4.5",
  "title": "Cartesian power.",
  "body": " Cartesian power  Cartesian power       the th Cartesian power of a set      Let be a set and be a natural number. The th Cartesian power  of is the Cartesian product .   "
},
{
  "id": "definition-finitary-operation",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#definition-finitary-operation",
  "type": "Definition",
  "number": "1.4.6",
  "title": "Finitary operation.",
  "body": " Finitary operation  finitary operation  arity   Let be a set and be a natural number. A finitary operation of arity  (or more simply a  -ary operation ) is a map .   "
},
{
  "id": "example-finitary-operations",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#example-finitary-operations",
  "type": "Example",
  "number": "1.4.7",
  "title": "Finitary operations.",
  "body": " Finitary operations  nullary operation  unary operation  binary operation   The following are examples of finitary operations:   A -ary operation (or more simply, a nullary operation ) on a set is just a map from to . Such a map is uniquely determined by the image of the unique element . In this way, we may view the nullary operations on as synonymous with the elements of .    A -ary operation (or more simply, a unary operation ) on a set is just a map . One example of such a unary operation on the natural numbers is the successor function .    A -ary operation (or more simply, a binary operation ) on a set is a map . Two examples of such binary operations on the natural numbers are the addition and multiplication operations .  Binary operations are usually denoted with symbols such as , , , , and . For a given binary operation , we write for all elements .      "
},
{
  "id": "definition-commutativity-associativity",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#definition-commutativity-associativity",
  "type": "Definition",
  "number": "1.4.8",
  "title": "Commutativity; associativity.",
  "body": " Commutativity; associativity  commutativity  associativity   Let be a binary operation on a set .    is called commutative if for all elements .     is called associative if for all elements .      "
},
{
  "id": "example-commutative-associative-binary-operations",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#example-commutative-associative-binary-operations",
  "type": "Example",
  "number": "1.4.9",
  "title": "Commutative\/associative binary operations.",
  "body": " Commutative\/associative binary operations   The following are examples of commutativity and associativity in binary operations:   Addition and multiplication are commutative and associative binary operations on by (1), (2), (4), and (5) of .    Intersection and union are commutative and associative binary operations on the power set of a set by (2) and (3) of .    Composition is an associative but non-commutative binary operation on the set of maps from a set to itself.    Let be the exponentiation function defined by the formula ; that is, is defined recursively by the formulae and . Then is a binary operation on , but is neither commutative nor associative.      "
},
{
  "id": "definition-finitary-relation",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#definition-finitary-relation",
  "type": "Definition",
  "number": "1.4.10",
  "title": "Finitary relation.",
  "body": " Finitary relation  finitary relation  arity   Let be a set and be a natural number. A finitary relation of arity  (or more simply a  -ary relation ) is a subset .   "
},
{
  "id": "example-finitary-relations",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#example-finitary-relations",
  "type": "Example",
  "number": "1.4.11",
  "title": "Finitary relations.",
  "body": " Finitary relations  unary operation  binary operation   The following are examples of finitary operations:   In light of the convention , a -ary operation (or more simply, a unary operation ) on a set is just a subset of .    A -ary relation (or more simply, a binary relation ) on a set is a subset . Two examples of such binary relations are the containment relation on the power set of a set and the standard ordering of the natural numbers .  Just as there is a special notation for binary operations, there is a special relation for binary relations as well. Specifically, for a given binary relation on a set , we write to mean that .      "
},
{
  "id": "definition-pullback-of-a-finitary-relation",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#definition-pullback-of-a-finitary-relation",
  "type": "Definition",
  "number": "1.4.12",
  "title": "Pullback of a finitary relation.",
  "body": " Pullback of a finitary relation  pullback       the pullback of a finitary relation along a map      Let and be sets and be a natural number. The pullback  of an -ary relation on along a map is the -ary relation on defined by .   "
},
{
  "id": "example-restriction-of-a-finitary-relation",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#example-restriction-of-a-finitary-relation",
  "type": "Example",
  "number": "1.4.13",
  "title": "Restriction of a finitary relation.",
  "body": " Restriction of a finitary relation  restriction       the restriction of a finitary relation to a subset      Let be a set and be a natural number. The restriction  of an -ary relation on to a subset is the pullback of along the inclusion map ; that is, .   "
},
{
  "id": "subsection-finitary-relations-8",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#subsection-finitary-relations-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equivalence relation equivalence classes "
},
{
  "id": "definition-equivalence-relation",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#definition-equivalence-relation",
  "type": "Definition",
  "number": "1.4.14",
  "title": "Equivalence relation.",
  "body": " Equivalence relation  reflexivity  symmetry  transitivity  equivalence relation   Let be a binary relation on a set .    is called reflexive if for all elements .     is called symmetric if for all elements , if , then .     is called transitive if for all elements , if and , then .    is called an equivalence relation if it is reflexive, symmetric, and transitive.   "
},
{
  "id": "lemma-pullbacks-of-equivalence-relations",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#lemma-pullbacks-of-equivalence-relations",
  "type": "Lemma",
  "number": "1.4.15",
  "title": "Pullbacks of equivalence relations.",
  "body": " Pullbacks of equivalence relations   The pullback of an equivalence relation on a set along a map from a set to is an equivalence relation on .    First let , and note that by the reflexivity of , and so ; that is, is reflexive.  Now let , and suppose that . Then , and so by the symmetry of . In particular, , and so is symmetric.  Finally, let , and suppose that and . Then and , and so by the transitivity of . In particular, , and so is transitive.  Since is reflexive, symmetric, and transitive, it is an equivalence relation on .   "
},
{
  "id": "definition-equivalence-class",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#definition-equivalence-class",
  "type": "Definition",
  "number": "1.4.16",
  "title": "Equivalence class; quotient set.",
  "body": " Equivalence class; quotient set  equivalence class  quotient set       the equivalence class of under          the quotient of by      Let be an equivalence relation on a set . The equivalence class  of an element is the subset of defined by ; that is, is the set of elements which are equivalent to under the relation . The quotient  of by is the set of equivalence classes; that is, .   "
},
{
  "id": "proposition-equivalence-partition",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#proposition-equivalence-partition",
  "type": "Proposition",
  "number": "1.4.17",
  "title": "Equivalence partition.",
  "body": " Equivalence partition  partition   The equivalence classes of an equivalence relation on a set form a partition of ; that is, two equivalence classes are either equal or disjoint, and .    Each equivalence class is a subset of , and so . In order to show the reverse containment, let , and note that by reflexivity; that is, , and so . We conclude that .  It remains to show that two equivalence classes are either equal or disjoint. To that end, consider elements . First suppose that , and let . Then , and so transitivity implies that ; that is, .  In summary, we have shown that if , then . Symmetry implies that if , then , and so ; that is, if , then .  Conversely, now suppose that the equivalence classes and are not disjoint, so that for some element . Since and , and . We conclude by symmetry and transitivity that .   "
},
{
  "id": "section-introduction-to-order-theory",
  "level": "1",
  "url": "section-introduction-to-order-theory.html",
  "type": "Section",
  "number": "1.5",
  "title": "Introduction to Order Theory",
  "body": " Introduction to Order Theory   In this section, we will investigate another class of binary relations, which can be used to establish a notion of an ordering on a set. Touchstone examples will be the standard ordering of the natural numbers and the ordering of sets by containment.    Partial Orders   We have seen that a finitary relation on a set can be viewed as elevating its elements as distinguished finite sequences in that set. Some binary relations on a set may be interpreted in this way as establishing an ordering, with the first entries of each distinguished ordered pair preceding the second entries in this ordering.  What are the salient properties of the standard ordering of the natural numbers? We will see that, in order to establish a similar notion of ordering on a set, a given binary operation should satisfy similar properties. However, even if a binary operation satisfies some, but not all, of the desired properties, we will see that we can still interpret it as a weaker type of ordering relation. However, all ordering relations should, at the very least, satisfy reflexivity and transitivity. Such a reflexive and transitive binary operation is called a preorder.    Preorder  preorder  reflexivity  transitivity  preordered set  proset   A binary relation on a set is called a preorder if it is reflexive and transitive; that is, is a preorder if it satisfies the following conditions:   Reflexivity   for all elements .    Transitivity  For all elements , if and , then .   If is a preorder on a set , then the ordered pair is called a preordered set (or a proset ).     Preorders from pullbacks   The pullback of the standard ordering on the natural numbers along a function on a set is a preorder on .    First let , and note that by (1) of . In particular, , and so is reflexive.  Now let , and suppose that and . Then and , and so by (3) of . In particular, , and so is transitive. Since is both reflexive and transitive, it is a preorder on .    It turns out that, at least relative to the standard ordering of the natural numbers , the defining properties of a preorder are still too weak to be of much use in the general case. After all, an equivalence relation is just a symmetric preorder, and there is no way of meaningfully assigning a notion of an ordering based on an equivalence relation. This is because an equivalence relation is symmetric; in order to consider an ordering based on a binary operation, we would want to avoid any symmetry at all. Therefore, we must require that an ordering relation satisfy stronger assumptions.   Partial order  partial order   A binary relation on a set is called a partial order if it satisfies the following conditions:   Reflexivity   for all elements .    Anti-symmetry  For all elements , if and , then .    Transitivity  For all elements , if and , then .   If is a partial order on a set , then the ordered pair is called a partially ordered set (or a poset ).     Partial orders   The following are examples of partial orders on sets:   The standard ordering on the natural numbers is a partial order on by (1), (2), and (3) of .    Containment is a partial order on the power set of a set by and .        At the end of this section, we will explore a property of partial orders called totality which distinguishes between our touchstone examples of the standard ordering of natural numbers and the containment of sets.     Boundedness and Extrema   Partial orders satisfy many of the properties of the standard ordering of the natural numbers. These properties allow us to generalize the definitions of many of the usual notions associated with an ordering, such as upper and lower bounds and maximal and minimal elements, to partially ordered sets.    Boundedness  upper bound  lower bound  boundedness   Let be a subset of a partially ordered set .   An element is called an upper bound for if for all elements . If such an upper bound for exists, then is called bounded from above in . Otherwise, if no such upper bound for exists, then is called unbounded from above .    An element is called a lower bound for if for all elements . If such a lower bound for exists, then is called bounded from below in .   A subset is called bounded in if it is both bounded from above in and bounded from below in , and is called unbounded in otherwise if it is either unbounded from above in or unbounded from below in .     Extrema are unique   Let be a subset of a partially ordered set . At most one element of is an upper bound for in , and at most one element of is a lower bound for in .    Let , and suppose first that and are upper bounds for in , so that and for all elements . In particular, and , and so by anti-symmetry.  Similarly, now suppose that and are lower bounds for in , so that and for all elements . In particular, and , and so by anti-symmetry.     Extrema  maximum  minimum  extremum       the maximum of          the minimum of      Let be a subset of a partially ordered set .   If there is an element of which is an upper bound for in , then this unique element is called the maximum of and is denoted .    If there is an element of which is a lower bound for in , then this unique element is called the minimum of and is denoted .   Together, maxima and minima are called extrema .    The uniqueness of extrema in partially ordered sets is one way in which partial orders resemble the standard ordering of the natural number system. However, unlike in the standard ordering of the natural number system, there is in general a distinction between extrema, which are defined above, and extremal elements, which are defined below.   Extremal element  maximal element  minimal element  extremal element   Let be a subset of a partially ordered set .   An element is called maximal in if for all elements , if , then .    An element is called minimal in if for all elements , if , then .   Together, maximal and minimal elements are called extremal elements .     Extrema and extremal elements   The following are examples of extrema and extremal elements:   The minimum of the natural numbers is , which is the unique minimal element. However, has no maximum or maximal element.    Consider set containment on the power set of a set . has minimum and maximum and , which are also the unique minimal and maximal elements, respectively.    Now consider set containment on the set of proper non-empty subsets of the set ; that is, . Then has no maximum or minimum, but , , and are minimal elements, and , , and are maximal elements.        Extrema are extremal elements   Let be a subset of a partially ordered set . If has a maximum, then is the unique maximal element of . If has a minimum, then is the unique minimal element of .    First suppose that has a maximum. Let , and suppose that . Of course , and so anti-symmetry implies that ; that is, is maximal in .  On the other hand, now consider a maximal element . Since , the maximality of implies that .  Now suppose that has a minimum. Let , and suppose that . Of course , and so anti-symmetry implies that ; that is, is minimal in .  On the other hand, now consider a minimal element . Since , the minimality of implies that .     The distinction between extrema and extremal elements is one way in which more general partial orders differ from the standard ordering of the natural numbers. However, this subtlety does not arise in all partial orders. We will shortly explore a class of partial orders in which the aforementioned distinction between extrema and extremal elements does not exist.     Comparability and Total Orders   The fact that the converse of does not hold in general stems from the fact that in a partially ordered set, not all pairs of elements are comparable. That is, given two elements of a partially ordered set, it is not necessarily true that one will precede the other.    Comparability  comparability   Two elements in a partially ordered set are called comparable if either or , and incomparable otherwise.    Any two natural numbers are comparable in the standard ordering. However, this is not true for partially ordered sets in general. As an example, consider the subsets and of the natural numbers . One can check that and , so that and are incomparable in the power set of the natural numbers . So partially ordered sets may have elements which are incomparable. This is the reason why partial orders are called partial; partial orders in which all elements are comparable are called total .   Total order  totality  total order  totally ordered set   A binary relation on a set is called a total order if it is anti-symmetric and transitive and each pair of elements is comparable; that is, is a total order if it satisfies the following conditions:   Antisymmetry  For all elements , if and , then .    Transitivity  For all elements , if and , then .    Totality  For all elements , either or .   If is a total order on a set , then the ordered pair is called a totally ordered set .     Total order   The standard ordering on the natural numbers is a total order by (2), (3), and (4) of .     Total orders are partial orders   Every total order on a set is a partial order on .    Let be a total order on a set . Since is antisymmetric and transitive, it remains to show that is reflexive. To that end, let , and note that totality implies that either or ; that is is reflexive (and hence a partial order on ).     Extremal elements are extrema in totally ordered sets   Let be a total order on a set .   If contains a maximal element , then .    If contains a minimal element , then .         Suppose that is a maximal element, and let . Totality implies that or . If , then maximality implies that , so that by reflexivity. Thus for all , and so .    Now suppose that is a minimal element, and let . Totality implies that or . If , then minimality implies that , so that by reflexivity. Thus for all , and so .      We end with an important property of the standard ordering on the natural numbers related to the axiom of induction.   Well-ordering principle   Every non-empty subset of the natural numbers has a minimum.    Let be a subset of the natural numbers , and suppose that does not have a minimum. We proceed by strong induction on to show that .   Base case  Suppose that , and suppose for a contradiction that . Since for all natural numbers by and (2) of , then . This contradiction implies that .    Inductive step  Suppose for the inductive hypothesis that there is some natural number so that for all natural numbers so that . Suppose for a contradiction that , and let . Totality implies that either or . The inductive hypothesis implies that , so that .  So for some natural number . If , then , and so . Thus for some natural number , and so . In summary, we have shown that for all , so that . This contradiction implies that .   We conclude that for all natural numbers , and so .     The is sometimes taken to be an axiom and sometimes derived from the axiom of induction as in the above proof. In fact, these results are logically equivalent, as one can derive the axiom of induction from the .     We will revisit ordering relations in the next chapter, when we extend the standard ordering on the natural numbers to many of the extensions of the natural number system which we construct.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "definition-preorder",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#definition-preorder",
  "type": "Definition",
  "number": "1.5.1",
  "title": "Preorder.",
  "body": " Preorder  preorder  reflexivity  transitivity  preordered set  proset   A binary relation on a set is called a preorder if it is reflexive and transitive; that is, is a preorder if it satisfies the following conditions:   Reflexivity   for all elements .    Transitivity  For all elements , if and , then .   If is a preorder on a set , then the ordered pair is called a preordered set (or a proset ).   "
},
{
  "id": "lemma-preorders-from-pullbacks",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#lemma-preorders-from-pullbacks",
  "type": "Lemma",
  "number": "1.5.2",
  "title": "Preorders from pullbacks.",
  "body": " Preorders from pullbacks   The pullback of the standard ordering on the natural numbers along a function on a set is a preorder on .    First let , and note that by (1) of . In particular, , and so is reflexive.  Now let , and suppose that and . Then and , and so by (3) of . In particular, , and so is transitive. Since is both reflexive and transitive, it is a preorder on .   "
},
{
  "id": "definition-partial-order",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#definition-partial-order",
  "type": "Definition",
  "number": "1.5.3",
  "title": "Partial order.",
  "body": " Partial order  partial order   A binary relation on a set is called a partial order if it satisfies the following conditions:   Reflexivity   for all elements .    Anti-symmetry  For all elements , if and , then .    Transitivity  For all elements , if and , then .   If is a partial order on a set , then the ordered pair is called a partially ordered set (or a poset ).   "
},
{
  "id": "example-partial-orders",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#example-partial-orders",
  "type": "Example",
  "number": "1.5.4",
  "title": "Partial orders.",
  "body": " Partial orders   The following are examples of partial orders on sets:   The standard ordering on the natural numbers is a partial order on by (1), (2), and (3) of .    Containment is a partial order on the power set of a set by and .      "
},
{
  "id": "subsection-partial-orders-8-1",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#subsection-partial-orders-8-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "totality "
},
{
  "id": "definition-boundedness-extrema",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#definition-boundedness-extrema",
  "type": "Definition",
  "number": "1.5.5",
  "title": "Boundedness.",
  "body": " Boundedness  upper bound  lower bound  boundedness   Let be a subset of a partially ordered set .   An element is called an upper bound for if for all elements . If such an upper bound for exists, then is called bounded from above in . Otherwise, if no such upper bound for exists, then is called unbounded from above .    An element is called a lower bound for if for all elements . If such a lower bound for exists, then is called bounded from below in .   A subset is called bounded in if it is both bounded from above in and bounded from below in , and is called unbounded in otherwise if it is either unbounded from above in or unbounded from below in .   "
},
{
  "id": "lemma-extrema-are-unique",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#lemma-extrema-are-unique",
  "type": "Lemma",
  "number": "1.5.6",
  "title": "Extrema are unique.",
  "body": " Extrema are unique   Let be a subset of a partially ordered set . At most one element of is an upper bound for in , and at most one element of is a lower bound for in .    Let , and suppose first that and are upper bounds for in , so that and for all elements . In particular, and , and so by anti-symmetry.  Similarly, now suppose that and are lower bounds for in , so that and for all elements . In particular, and , and so by anti-symmetry.   "
},
{
  "id": "definition-extrema",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#definition-extrema",
  "type": "Definition",
  "number": "1.5.7",
  "title": "Extrema.",
  "body": " Extrema  maximum  minimum  extremum       the maximum of          the minimum of      Let be a subset of a partially ordered set .   If there is an element of which is an upper bound for in , then this unique element is called the maximum of and is denoted .    If there is an element of which is a lower bound for in , then this unique element is called the minimum of and is denoted .   Together, maxima and minima are called extrema .   "
},
{
  "id": "definition-extremal-element",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#definition-extremal-element",
  "type": "Definition",
  "number": "1.5.8",
  "title": "Extremal element.",
  "body": " Extremal element  maximal element  minimal element  extremal element   Let be a subset of a partially ordered set .   An element is called maximal in if for all elements , if , then .    An element is called minimal in if for all elements , if , then .   Together, maximal and minimal elements are called extremal elements .   "
},
{
  "id": "example-extrema-and-extremal-elements",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#example-extrema-and-extremal-elements",
  "type": "Example",
  "number": "1.5.9",
  "title": "Extrema and extremal elements.",
  "body": " Extrema and extremal elements   The following are examples of extrema and extremal elements:   The minimum of the natural numbers is , which is the unique minimal element. However, has no maximum or maximal element.    Consider set containment on the power set of a set . has minimum and maximum and , which are also the unique minimal and maximal elements, respectively.    Now consider set containment on the set of proper non-empty subsets of the set ; that is, . Then has no maximum or minimum, but , , and are minimal elements, and , , and are maximal elements.      "
},
{
  "id": "proposition-extrema-are-extremal-elements",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#proposition-extrema-are-extremal-elements",
  "type": "Proposition",
  "number": "1.5.10",
  "title": "Extrema are extremal elements.",
  "body": " Extrema are extremal elements   Let be a subset of a partially ordered set . If has a maximum, then is the unique maximal element of . If has a minimum, then is the unique minimal element of .    First suppose that has a maximum. Let , and suppose that . Of course , and so anti-symmetry implies that ; that is, is maximal in .  On the other hand, now consider a maximal element . Since , the maximality of implies that .  Now suppose that has a minimum. Let , and suppose that . Of course , and so anti-symmetry implies that ; that is, is minimal in .  On the other hand, now consider a minimal element . Since , the minimality of implies that .   "
},
{
  "id": "definition-comparability",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#definition-comparability",
  "type": "Definition",
  "number": "1.5.11",
  "title": "Comparability.",
  "body": " Comparability  comparability   Two elements in a partially ordered set are called comparable if either or , and incomparable otherwise.   "
},
{
  "id": "subsection-comparability-and-total-orders-4",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#subsection-comparability-and-total-orders-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "total "
},
{
  "id": "definition-total-order",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#definition-total-order",
  "type": "Definition",
  "number": "1.5.12",
  "title": "Total order.",
  "body": " Total order  totality  total order  totally ordered set   A binary relation on a set is called a total order if it is anti-symmetric and transitive and each pair of elements is comparable; that is, is a total order if it satisfies the following conditions:   Antisymmetry  For all elements , if and , then .    Transitivity  For all elements , if and , then .    Totality  For all elements , either or .   If is a total order on a set , then the ordered pair is called a totally ordered set .   "
},
{
  "id": "example-total-order",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#example-total-order",
  "type": "Example",
  "number": "1.5.13",
  "title": "Total order.",
  "body": " Total order   The standard ordering on the natural numbers is a total order by (2), (3), and (4) of .   "
},
{
  "id": "lemma-total-orders-are-partial-orders",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#lemma-total-orders-are-partial-orders",
  "type": "Lemma",
  "number": "1.5.14",
  "title": "Total orders are partial orders.",
  "body": " Total orders are partial orders   Every total order on a set is a partial order on .    Let be a total order on a set . Since is antisymmetric and transitive, it remains to show that is reflexive. To that end, let , and note that totality implies that either or ; that is is reflexive (and hence a partial order on ).   "
},
{
  "id": "proposition-extremal-elements-are-extrema-in-totally-ordered-sets",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#proposition-extremal-elements-are-extrema-in-totally-ordered-sets",
  "type": "Proposition",
  "number": "1.5.15",
  "title": "Extremal elements are extrema in totally ordered sets.",
  "body": " Extremal elements are extrema in totally ordered sets   Let be a total order on a set .   If contains a maximal element , then .    If contains a minimal element , then .         Suppose that is a maximal element, and let . Totality implies that or . If , then maximality implies that , so that by reflexivity. Thus for all , and so .    Now suppose that is a minimal element, and let . Totality implies that or . If , then minimality implies that , so that by reflexivity. Thus for all , and so .     "
},
{
  "id": "theorem-well-ordering-principle",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#theorem-well-ordering-principle",
  "type": "Theorem",
  "number": "1.5.16",
  "title": "Well-ordering principle.",
  "body": " Well-ordering principle   Every non-empty subset of the natural numbers has a minimum.    Let be a subset of the natural numbers , and suppose that does not have a minimum. We proceed by strong induction on to show that .   Base case  Suppose that , and suppose for a contradiction that . Since for all natural numbers by and (2) of , then . This contradiction implies that .    Inductive step  Suppose for the inductive hypothesis that there is some natural number so that for all natural numbers so that . Suppose for a contradiction that , and let . Totality implies that either or . The inductive hypothesis implies that , so that .  So for some natural number . If , then , and so . Thus for some natural number , and so . In summary, we have shown that for all , so that . This contradiction implies that .   We conclude that for all natural numbers , and so .   "
},
{
  "id": "section-cardinality-and-countability",
  "level": "1",
  "url": "section-cardinality-and-countability.html",
  "type": "Section",
  "number": "1.6",
  "title": "Cardinality and Countability [INCOMPLETE]",
  "body": " Cardinality and Countability [INCOMPLETE]   In this section, we define a notion of the size of a set called cardinality . The cardinality of a set is a generalization of the number of elements of a set which contains only finitely many elements based on the notion of bijections. First, we will develop these notions for finite sets and then extend them to infinite sets. At first glance, it may seem that there is essentially only one kind of infinite set. We will show that this is not the case; in fact, there are infinitely many sizes of infinite sets with respect to this notion of cardinality.    Finiteness   Before we brave the unintuitive mess which is the realm of infinite sets, we will rigorously develop a notion of size for sets which contain only finitely many elements. Like in the infinite case, these finite cardinalities will be based on bijections.    Injections of finite sets   For any natural numbers , there exists an injective map if and only if .    If , then , and so the inclusion map is an injective map from to . So it suffices to show the reverse implication.  To that end, consider the subset of the natural numbers . If suffices to show that . To that end, we first note that for all natural numbers , so that .  Now let be a natural number, and suppose that . Then there is a natural number so that and an injective function . We note that , since there are no functions from a non-empty set to the empty set . Thus for some natural number .  If , then , and so . It therefore suffices to construct an injective function . To that end, fix a bijection so that , and let be the function defined by the formula . Since and are injective, is injective by (a) of . We conclude that .  In summary, we have shown that and for all natural numbers , if , then . These conclusions are equivalent to and for all natural numbers , if , then . We conclude that by the axiom of induction, and so .     Finite cardinality is well-defined   For any set , if there are natural numbers and bijections and , then .    Under the given assumptions, and are injective functions by (a) of . now implies that and , and so by (2) of .     Finiteness; cardinality  finite  cardinality  infinite       the cardinality of      A set is called finite if there is a natural number and a bijection , in which case is uniquely defined by this property and is called the cardinality of and denoted . A set is called infinite if no such number and bijection exist.     Maps and cardinality   Let be a map from a set to a set .   If is injective and is finite, then is finite and .    If is surjective and is finite, then is finite and .    If is bijective and either or is finite, then both and are finite and .            Text after the last subdivision.     Cardinal Comparison   Text before the first subdivision.    Text after the last subdivision.     Countability   Text before the first subdivision.    Text after the last subdivision.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-cardinality-and-countability-2-1",
  "level": "2",
  "url": "section-cardinality-and-countability.html#section-cardinality-and-countability-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cardinality "
},
{
  "id": "proposition-injections-of-finite-sets",
  "level": "2",
  "url": "section-cardinality-and-countability.html#proposition-injections-of-finite-sets",
  "type": "Proposition",
  "number": "1.6.1",
  "title": "Injections of finite sets.",
  "body": " Injections of finite sets   For any natural numbers , there exists an injective map if and only if .    If , then , and so the inclusion map is an injective map from to . So it suffices to show the reverse implication.  To that end, consider the subset of the natural numbers . If suffices to show that . To that end, we first note that for all natural numbers , so that .  Now let be a natural number, and suppose that . Then there is a natural number so that and an injective function . We note that , since there are no functions from a non-empty set to the empty set . Thus for some natural number .  If , then , and so . It therefore suffices to construct an injective function . To that end, fix a bijection so that , and let be the function defined by the formula . Since and are injective, is injective by (a) of . We conclude that .  In summary, we have shown that and for all natural numbers , if , then . These conclusions are equivalent to and for all natural numbers , if , then . We conclude that by the axiom of induction, and so .   "
},
{
  "id": "corollary-finite-cardinality-is-well-defined",
  "level": "2",
  "url": "section-cardinality-and-countability.html#corollary-finite-cardinality-is-well-defined",
  "type": "Corollary",
  "number": "1.6.2",
  "title": "Finite cardinality is well-defined.",
  "body": " Finite cardinality is well-defined   For any set , if there are natural numbers and bijections and , then .    Under the given assumptions, and are injective functions by (a) of . now implies that and , and so by (2) of .   "
},
{
  "id": "definition-finiteness-cardinality",
  "level": "2",
  "url": "section-cardinality-and-countability.html#definition-finiteness-cardinality",
  "type": "Definition",
  "number": "1.6.3",
  "title": "Finiteness; cardinality.",
  "body": " Finiteness; cardinality  finite  cardinality  infinite       the cardinality of      A set is called finite if there is a natural number and a bijection , in which case is uniquely defined by this property and is called the cardinality of and denoted . A set is called infinite if no such number and bijection exist.   "
},
{
  "id": "proposition-maps-and-cardinality",
  "level": "2",
  "url": "section-cardinality-and-countability.html#proposition-maps-and-cardinality",
  "type": "Proposition",
  "number": "1.6.4",
  "title": "Maps and cardinality.",
  "body": " Maps and cardinality   Let be a map from a set to a set .   If is injective and is finite, then is finite and .    If is surjective and is finite, then is finite and .    If is bijective and either or is finite, then both and are finite and .          "
},
{
  "id": "section-the-integers-and-rational-numbers",
  "level": "1",
  "url": "section-the-integers-and-rational-numbers.html",
  "type": "Section",
  "number": "2.1",
  "title": "The Integers and the Rational Numbers",
  "body": " The Integers and the Rational Numbers   Text before the first subsection.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-constructing-the-real-numbers",
  "level": "1",
  "url": "section-constructing-the-real-numbers.html",
  "type": "Section",
  "number": "2.2",
  "title": "Constructing the Real Numbers",
  "body": " Constructing the Real Numbers   Text before the first subsection.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-the-complete-ordered-field",
  "level": "1",
  "url": "section-the-complete-ordered-field.html",
  "type": "Section",
  "number": "2.3",
  "title": "The Complete Ordered Field",
  "body": " The Complete Ordered Field   Text before the first subsection.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-beyond-the-real-number-system",
  "level": "1",
  "url": "section-beyond-the-real-number-system.html",
  "type": "Section",
  "number": "2.4",
  "title": "Beyond the Real Number System",
  "body": " Beyond the Real Number System   Text before the first subsection.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-introduction-to-metric-geometry",
  "level": "1",
  "url": "section-introduction-to-metric-geometry.html",
  "type": "Section",
  "number": "3.1",
  "title": "Introduction to Metric Geometry",
  "body": " Introduction to Metric Geometry   Text before the first subsection.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-convergence-and-limits",
  "level": "1",
  "url": "section-convergence-and-limits.html",
  "type": "Section",
  "number": "3.2",
  "title": "Convergence and Limits",
  "body": " Convergence and Limits   Text before the first subsection.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-limits-in-the-euclidean-metric",
  "level": "1",
  "url": "section-limits-in-the-euclidean-metric.html",
  "type": "Section",
  "number": "3.3",
  "title": "Limits in the Euclidean Metric",
  "body": " Limits in the Euclidean Metric   Text before the first subsection.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-open-and-closed-sets",
  "level": "1",
  "url": "section-open-and-closed-sets.html",
  "type": "Section",
  "number": "3.4",
  "title": "Open and Closed Sets",
  "body": " Open and Closed Sets   Text before the first subsection.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-notions-of-metric-continuity",
  "level": "1",
  "url": "section-notions-of-metric-continuity.html",
  "type": "Section",
  "number": "3.5",
  "title": "Notions of Metric Continuity",
  "body": " Notions of Metric Continuity   Text before the first subsection.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-completeness-and-compactness",
  "level": "1",
  "url": "section-completeness-and-compactness.html",
  "type": "Section",
  "number": "3.6",
  "title": "Completeness and Compactness",
  "body": " Completeness and Compactness   Text before the first subsection.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-introduction-to-topology",
  "level": "1",
  "url": "section-introduction-to-topology.html",
  "type": "Section",
  "number": "4.1",
  "title": "Introduction to Topology",
  "body": " Introduction to Topology   Text before the first subsection.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-comparison-of-topologies",
  "level": "1",
  "url": "section-comparison-of-topologies.html",
  "type": "Section",
  "number": "4.2",
  "title": "Comparison of Topologies",
  "body": " Comparison of Topologies   Text before the first subsection.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-convergence-and-separation",
  "level": "1",
  "url": "section-convergence-and-separation.html",
  "type": "Section",
  "number": "4.3",
  "title": "Convergence and Separation",
  "body": " Convergence and Separation   Text before the first subsection.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-continuity-in-topological-spaces",
  "level": "1",
  "url": "section-continuity-in-topological-spaces.html",
  "type": "Section",
  "number": "4.4",
  "title": "Continuity in Topological Spaces",
  "body": " Continuity in Topological Spaces   Text before the first subsection.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-connectedness-and-compactness",
  "level": "1",
  "url": "section-connectedness-and-compactness.html",
  "type": "Section",
  "number": "4.5",
  "title": "Connectedness and Compactness",
  "body": " Connectedness and Compactness   Text before the first subsection.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-differentiability",
  "level": "1",
  "url": "section-differentiability.html",
  "type": "Section",
  "number": "5.1",
  "title": "Differentiability",
  "body": " Differentiability   Text before the first subsection.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-the-mean-value-theorem",
  "level": "1",
  "url": "section-the-mean-value-theorem.html",
  "type": "Section",
  "number": "5.2",
  "title": "The Mean Value Theorem",
  "body": " The Mean Value Theorem   Text before the first subsection.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-applications-of-the-mean-value-theorem",
  "level": "1",
  "url": "section-applications-of-the-mean-value-theorem.html",
  "type": "Section",
  "number": "5.3",
  "title": "Applications of the Mean Value Theorem",
  "body": " Applications of the Mean Value Theorem   Text before the first subsection.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-higher-order-derivatives",
  "level": "1",
  "url": "section-higher-order-derivatives.html",
  "type": "Section",
  "number": "5.4",
  "title": "Higher Order Derivatives",
  "body": " Higher Order Derivatives   Text before the first subsection.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-riemann-sums",
  "level": "1",
  "url": "section-riemann-sums.html",
  "type": "Section",
  "number": "6.1",
  "title": "Riemann Sums",
  "body": " Riemann Sums   Text before the first subsection.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Question   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-properties-of-the-riemann-integral",
  "level": "1",
  "url": "section-properties-of-the-riemann-integral.html",
  "type": "Section",
  "number": "6.2",
  "title": "Properties of the Riemann Integral",
  "body": " Properties of the Riemann Integral   Text before the first subsection.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-the-fundamental-theorems-of-calculus",
  "level": "1",
  "url": "section-the-fundamental-theorems-of-calculus.html",
  "type": "Section",
  "number": "6.3",
  "title": "The Fundamental Theorems of Calculus",
  "body": " The Fundamental Theorems of Calculus   Text before the first subsection.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-improper-integration",
  "level": "1",
  "url": "section-improper-integration.html",
  "type": "Section",
  "number": "6.4",
  "title": "Improper Integration",
  "body": " Improper Integration   Text before the first subsection.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-partial-sums-and-infinite-series",
  "level": "1",
  "url": "section-partial-sums-and-infinite-series.html",
  "type": "Section",
  "number": "7.1",
  "title": "Partial Sums and Infinite Series",
  "body": " Partial Sums and Infinite Series   Text before the first subsection.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-tests-for-series-convergence",
  "level": "1",
  "url": "section-tests-for-series-convergence.html",
  "type": "Section",
  "number": "7.2",
  "title": "Tests for Series Convergence",
  "body": " Tests for Series Convergence   Text before the first subsection.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-power-series",
  "level": "1",
  "url": "section-power-series.html",
  "type": "Section",
  "number": "7.3",
  "title": "Power Series",
  "body": " Power Series   Text before the first subsection.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-analytic-functions",
  "level": "1",
  "url": "section-analytic-functions.html",
  "type": "Section",
  "number": "7.4",
  "title": "Analytic Functions",
  "body": " Analytic Functions   Text before the first subsection.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "solutions",
  "level": "1",
  "url": "solutions.html",
  "type": "Appendix",
  "number": "A",
  "title": "Selected Solutions",
  "body": " Selected Solutions  "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Appendix",
  "number": "B",
  "title": "List of Symbols",
  "body": " List of Symbols   "
},
{
  "id": "backmatter-4",
  "level": "1",
  "url": "backmatter-4.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-5",
  "level": "1",
  "url": "backmatter-5.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
