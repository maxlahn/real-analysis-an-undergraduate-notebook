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
  "body": " What Is a Set?   set  element       is an element of         is not an element of    Since the early 20th century, the practice of mathematics has undergone a radical transformation, which grew out of the idea that the whole of the mathematical canon can and should be rephrased in the language of set theory. Informally, a set is a collection of objects, which are called its elements . If an object is an element of a set , then we write ; otherwise, if is not an element of , then we write .    Definitions of Sets   The careful reader may complain that the terms collection and object are vague and undefined, and they would be right to object; the above characterization of sets is definitely not as rigorous as we might desire, and is in fact internally inconsistent. However, the technical difficulties associated with building a rigorous and internally consistent set theory are outside the scope of this course and in this context, far more trouble than they are worth. In fact, it's entirely possible that such an internally consistent set theory does not exist!  As such, we will leave this ambiguity in favor of moving on to more salient topics. Even though we will not encounter any such issues in this text, the definition above does lead to some interesting inconsistencies. We will explore one such contradiction, called , shortly. First, however, we introduce some shorthand notation which will be useful in specifying sets we wish to discuss.    Roster notation  roster notation  It's easy to completely describe a set which contains only a finite number of elements; we can simply write a list of those elements down! Concretely, if is the set whose elements are precisely the objects , then we may write The above notation for specifying sets is called roster notation .  Not all sets are finite, however, and it is obviously impossible to write down a complete roster of all of the elements of an infinite set. We can carefully use ellipses to indicate a set with an infinite roster whose elements follow some discernible pattern. For example, we will see in that the set of natural numbers can be written . Unfortunately, this extension of roster notation still does not suffice for all sets. For example, we will see in that there is no such roster for the set of real numbers.    Definable collection  definable collection  Let be a unary Boolean predicate (a statement whose truth value depends on a single variable ). The collection of objects which satisfy is said to be defined by , and is denoted . Such a collection of objects which satisfy such a Boolean predicate is called a definable collection . We will see that the collection of objects that satisfy a given Boolean predicate is not necessarily a set; this is the content of .    Sets  empty set      the empty set   The following are examples of sets:   The empty set , denoted or , is the set with no elements; that is, for all objects .    The set is a non-empty set with only finitely many elements. Note that this set contains different types of objects. In general, we will not place any explicit restrictions on the types of objects allowed inside a set, although some formalizations of axiomatic set theories rely on this to avoid inconsistencies such as Russell's paradox.    The set of natural numbers (also sometimes called the whole numbers or counting numbers ) is a non-empty set with infinitely many elements. We will characterize the natural numbers in the usual manner of Peano arithmetic later in this chapter.       naïve set theory As we mentioned before, the set theory based on the definition above, which is called naïve set theory , is in fact inconsistent; taking this definition as the basis for an axiomatic system, we can derive a contradiction, which implies that we may in fact derive all possible statements, including those which are false! This inconsistency was first demonstrated by Bertrand Russell at the beginning of the 20th century, and bears his name.   Russell's paradox  Bertrand Russell   Not all definable collections are sets.    By contradiction. Let be the definable collection of sets which do not contain themselves, and suppose for a contradiction that is a set. The question of whether or not contains itself is a natural one; however, we will see that both the positive and negative answers lead to contradictions.  This is because, if , then by the definition of . On the other hand, if , then by the same reasoning. Therefore, if and only if . This contradiction implies that is not a set, as desired.      tells us that naïve set theory is inconsistent. However, as we stated before, it is no easy task to construct a consistent set theory which is strong enough to describe the sophisticated structures we wish to investigate while also weak enough to be internally consistent. However, since the question of whether modern formal set theories are consistent is beyond the scope of this text. With this in mind, we will continue formulating definitions and results in the language of naïve set theory, keeping in mind that rigorous systems of formal set theory (which do not suffer from ) exist in which they can be expressed and proven.     Set Containment   As we have just seen, not all definable collections of mathematical objects are sets. However, any collection of objects which themselves belong to a set is also a set in its own right; such a collection of elements of a given set is called a subset .    Set containment  subset  superset  set containment  proper subset  proper superset  strict set containment   A set is a subset of a set if for all objects , if , then . In this case, we say that is contained in , and we write . Less commonly, we may also call a superset of , say that contains , and write .  A set is a proper subset of a set if but . In this case, we say that is strictly contained in , and we write . Less commonly, we may also call a proper superset of , say that strictly contains , and write .     Set containment notation   Some authors use the symbols and in place of and to indicate set containment, and some authors use them in place of and to indicate strict set containment. We will avoid this ambiguity by opting not to write and at all.     Set equality  set equality   Two sets are considered equal if they contain exactly the same elements; that is, one set is equal to another set when objects are elements of if and only if they are elements of . This occurs precisely when both and .     Subsets  The following are examples of subsets of sets:   For any set , the empty set and itself are subsets of .    The set of odd natural numbers is a proper subset of the set of natural numbers. Written more concisely, .      An important property of the set containment relationship is its transitivity, which is the content of the following lemma:   Transitivity of set containment   For any sets , , and , if and , then .    Let . Since and , . Moreover, since and , . In summary, we have shown that for for all elements , and so .    Set containment is also useful for constructing new notations for specifying sets as definable collections. Crucially, although not all definable collections are sets, any definable subcollection of a set is itself a set.   Set-builder notation  set-builder notation  Given a set and a unary Boolean predicate , the definable collection is a set (and in fact a subset of ). This subset will also be denoted in set-builder notation by .   After learning about , the careful reader may have some trepidation about sets whose elements are themselves sets. However, not all such definable collections lead to contradictions. For example, the collection of all subsets of a given set also form a set.   Power set   The power set of a set is the set of all subsets of ; this set is denoted , so that .     Power sets are non-empty   The power set of any set is non-empty; that is, .    Fix a set , and note that the statement for all is vacuously true, so that . Thus , and so is non-empty.    Fix a set , and note that the statement for all is a tautology, so that . Thus , and so is non-empty.     constructive proof  non-constructive proof Both of the above proofs of are correct, although they are nonequivalent. Both are valuable for different reasons; the first proof shows that the power set of a set is nonempty since the empty set is a subset of any set, and the second proof shows the same conclusion since any set is a subset of itself. These proofs are called constructive , in that they explicitly exhibited an object satisfied the desired properties (being an element of the power set of a given set). Proofs which are not constructive are called non-constructive .   In general, sets are likely to have many subsets, so that power sets of sets are likely to have a great many elements. We will investigate the notion of the number of elements of a set, called its cardinality , more precisely and in far greater depth in at the end of this chapter.     Set Operations   conjunction  disjunction  negation       and         or        not    We now introduce several ways to construct new sets from old ones which loosely correspond to the logical operators of conjunction  , disjunction  , and negation  , pronounced and , or and not , respectively.    Set operations  intersection  union  complement      the intersection of and        the union of and        the complement of in     Let and be sets.   Intersection  The intersection  of two sets and is the set whose elements are both elements of and elements of ; that is, .    Union  The union  of two sets and is the set whose elements are either elements of and elements of (or both!); that is, .    Complement  The complement  of in is the set whose elements are elements of but not elements of ; that is, .       Informally, the intersection of two sets and is the largest set which is contained in both and ; the union of and is the smallest set which contains both and ; and the complement is the largest set which is contained in but disjoint from . These informal characterizations are formalized in the following result:   Set operations and containment   Let , , and be sets.    if and only if both and .     if and only if both and .     if and only if both and .         First suppose that . Since , implies that . Similarly, since , implies that .  Conversely, now suppose that and , and let . Since and , . Similarly, since and , . Since and , we conclude that . In summary, we have shown that for all , so that .    First suppose that . Since , implies that . Similarly, since , implies that .  Conversely, now suppose that and . Let , so that or . If , then , since . Similarly, if , then , since . We conclude that . In summary, we have shown that for all , so that .    First suppose that , and let . Since and , , so that and . In summary, we have shown that for all , so that . Moreover, we have shown that for all , so that no element of is an element of ; that is, .  Conversely, now suppose that and , and let . Since and , . Moreover, since and , . Since and , we conclude that . In summary, we have shown that for all , and so .       Properties of the set operations       and for all sets .    Commutativity   and for all sets and .    Associativity   and for all sets , , and .         Since , and by (1) and (2) of , respectively. Of course , so that .  Similarly, since and , by (2) of . Of course , and so .   , and so . Moreover, together with the observation that , this implies by (1) of that . Of course, , and so .  Similarly, , and so .  Finally, note that any element of is both an element of and not an element of , so that no such element can exist. Thus .    Since and , (1) of implies that . By symmetry, , so that .  Similarly, since and , (2) of implies that . By symmetry, , so that .    We note that , so that by (1) of . Similarly, , so that by another application of (1) of .  Conversely, we note that , so that by (1) of . Similarly, , so that by another application of (1) of . Thus .       In in the next section, we will generalize the first two ways ( intersection and union ) of constructing sets to arbitrary sets of sets; this generalization will mirror the similarities between conjunction and universal quantification and between disjunction and existential quantification , respectively.     While sets and set theory form the foundations on which we will build our understanding of analysis, these topics are not the focus of this text. As such, we will leave behind the question of precise definitions of sets in favor of developing set-theoretic ideas which are more relevant to the world of analysis.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.    Elements of sets   Determine whether or not the given object is an element of the given set. Write your answer using the notation or .     Is an element of the set ?    Yes, .      Is an element of the set ?    No, .      Is an element of the set ?    If we interpret the roster notation as , then .      Is an element of the set ?    If we interpret the roster notation as , then .      Roster notation   Write down the specified set in roster notation.     Write down the set of even numbers between and in roster notation.     .      Write down the set of letters in your full name in roster notation.    The correct answer will differ depending on your full name. My full name is Max Lahn , and so I would answer .      Write down the set of colors in the rainbow in roster notation.    The correct answer will differ depending on what you consider to be separate colors. I would answer           Set containment   Let , , and be the sets defined by . Determine whether or not the stated set containment is true or false.     Is ?    No, .      Is ?    Yes, .    Yes,       Is ?    Yes, .    Yes,       Power sets   Write down the power sets of the given sets in roster notation.     Write down the power set of the set in roster notation.    The power set of the set is the set .    Choosing a subset of the set is equivalent to making a unique binary choices of whether or not to include the element . We see that has the following subsets: , and . Therefore, the power set of the set is the set .      Write down the power set of the set in roster notation.    The power set of the set is the set .    Choosing a subset of the set is equivalent to making a unique sequence of two binary choices of whether to include each element and . We see that has the following subsets: , , , and . Therefore, the power set of the set is the set .      Write down the power set of the set in roster notation.    The power set of the set is the set .    Choosing a subset of the set is equivalent to making a unique sequence of three binary choices of whether to include each element , , and . We see that has the following subsets: , , , , , , , and . Therefore, the power set of the set is the set .      Set Operations   Compute the given set operations. Write your answer in roster or set-builder notation, or as a well-known set.     Compute , where is the set of even natural numbers and is the set of odd integers.     .    No natural number is both even and odd, and so .      Compute , where and .     .     contains all the elements of and all the elements of , so that .      Compute , where is the set of natural numbers divisible by , and is the set of even natural numbers.     .     contains all the odd multiples of , so that .      Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Problems   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .    The distributive properties of set operations  Distributive property    Prove that for all sets , , and .    Let . Then and , and so or . If , then , and so . On the other hand, if , then , and so .  In summary, we have shown that for all elements , and so .  Conversely, now let . Then or . If , then and . In particular, , and so .  In summary, we have shown that for all , and so ; we now conclude that .      Prove that for all sets , , and .    Let . Then or . If , then and , and so . On the other hand, if , then and . In this case, and , and so .  In summary, we have shown that for all elements , and so .  Conversely, now let . Then and . In particular, if , then and , and so . We conclude that .  In summary, we have shown that for all , and so ; we now conclude that .     Taken together, these results are called the distributive properties of the set operations.     De Morgan's laws  De Morgan's laws    Prove that for all sets , , and .    First let . Then and . We want to show that or . To that end, suppose that . Since , we must have .  But , and so ; that is, . Since if , then , we conclude that .  Conversely, now let , so that or . If , then and , so that . We conclude that .  In summary, we have shown that if and only if . We conclude that .      Prove that .    First let . Then and . If , then , and so ; we conclude that . Similarly, if , then , and so ; we conclude that . Thus .  Conversely, now let , so that and . Thus , , and . If , then or , and so ; we conclude that .  In summary, we have shown that if and only if . We conclude that .     Taken together, these results are called De Morgan's laws .     Power sets   Determine whether the following statement is true or false:  The power set of a set contains at least two distinct elements.  If the statement is true, prove it. If the statement is false, disprove it by providing a counterexample.    Revisit the proofs of .    The statement is false. For a counterexample, we consider the empty set . The only subset of the empty set is itself.     Set operations and containment   Let and be sets.     Prove that if and only if .    Since , it suffices to show that if and only if . To that end, note that if , then (1) of implies that .  Conversely, we note that , so that if , then (1) of implies that .      Prove that if and only if .    Since , it suffices to show that if and only if . To that end, note that if , then (2) of implies that .  Conversely, we note that , so that if , then (2) of implies that .      Prove that if and only if .    First suppose that . Then for all , and so .  Conversely, now suppose that . Then , and so and . Since , . So is an element of but not ; we conclude that .      In-depth solutions to these problems are available. However, these are provided in order to check your work. If you are unable to solve the above problems, discuss your questions with classmates and\/or instructor rather than spoiling the answers.    "
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
  "body": " Roster notation  roster notation  It's easy to completely describe a set which contains only a finite number of elements; we can simply write a list of those elements down! Concretely, if is the set whose elements are precisely the objects , then we may write The above notation for specifying sets is called roster notation .  Not all sets are finite, however, and it is obviously impossible to write down a complete roster of all of the elements of an infinite set. We can carefully use ellipses to indicate a set with an infinite roster whose elements follow some discernible pattern. For example, we will see in that the set of natural numbers can be written . Unfortunately, this extension of roster notation still does not suffice for all sets. For example, we will see in that there is no such roster for the set of real numbers.  "
},
{
  "id": "definition-definable-collection",
  "level": "2",
  "url": "section-what-is-a-set.html#definition-definable-collection",
  "type": "Definition",
  "number": "1.1.2",
  "title": "Definable collection.",
  "body": " Definable collection  definable collection  Let be a unary Boolean predicate (a statement whose truth value depends on a single variable ). The collection of objects which satisfy is said to be defined by , and is denoted . Such a collection of objects which satisfy such a Boolean predicate is called a definable collection . We will see that the collection of objects that satisfy a given Boolean predicate is not necessarily a set; this is the content of .  "
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
  "body": " Russell's paradox  Bertrand Russell   Not all definable collections are sets.    By contradiction. Let be the definable collection of sets which do not contain themselves, and suppose for a contradiction that is a set. The question of whether or not contains itself is a natural one; however, we will see that both the positive and negative answers lead to contradictions.  This is because, if , then by the definition of . On the other hand, if , then by the same reasoning. Therefore, if and only if . This contradiction implies that is not a set, as desired.   "
},
{
  "id": "subsection-set-containment-2-1",
  "level": "2",
  "url": "section-what-is-a-set.html#subsection-set-containment-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subset "
},
{
  "id": "definition-set-containment",
  "level": "2",
  "url": "section-what-is-a-set.html#definition-set-containment",
  "type": "Definition",
  "number": "1.1.5",
  "title": "Set containment.",
  "body": " Set containment  subset  superset  set containment  proper subset  proper superset  strict set containment   A set is a subset of a set if for all objects , if , then . In this case, we say that is contained in , and we write . Less commonly, we may also call a superset of , say that contains , and write .  A set is a proper subset of a set if but . In this case, we say that is strictly contained in , and we write . Less commonly, we may also call a proper superset of , say that strictly contains , and write .   "
},
{
  "id": "convention-set-containment-notation",
  "level": "2",
  "url": "section-what-is-a-set.html#convention-set-containment-notation",
  "type": "Convention",
  "number": "1.1.6",
  "title": "Set containment notation.",
  "body": " Set containment notation   Some authors use the symbols and in place of and to indicate set containment, and some authors use them in place of and to indicate strict set containment. We will avoid this ambiguity by opting not to write and at all.   "
},
{
  "id": "definition-set-equality",
  "level": "2",
  "url": "section-what-is-a-set.html#definition-set-equality",
  "type": "Definition",
  "number": "1.1.7",
  "title": "Set equality.",
  "body": " Set equality  set equality   Two sets are considered equal if they contain exactly the same elements; that is, one set is equal to another set when objects are elements of if and only if they are elements of . This occurs precisely when both and .   "
},
{
  "id": "example-subsets",
  "level": "2",
  "url": "section-what-is-a-set.html#example-subsets",
  "type": "Example",
  "number": "1.1.8",
  "title": "Subsets.",
  "body": " Subsets  The following are examples of subsets of sets:   For any set , the empty set and itself are subsets of .    The set of odd natural numbers is a proper subset of the set of natural numbers. Written more concisely, .     "
},
{
  "id": "lemma-transitivity-of-set-containment",
  "level": "2",
  "url": "section-what-is-a-set.html#lemma-transitivity-of-set-containment",
  "type": "Lemma",
  "number": "1.1.9",
  "title": "Transitivity of set containment.",
  "body": " Transitivity of set containment   For any sets , , and , if and , then .    Let . Since and , . Moreover, since and , . In summary, we have shown that for for all elements , and so .   "
},
{
  "id": "convention-set-builder-notation",
  "level": "2",
  "url": "section-what-is-a-set.html#convention-set-builder-notation",
  "type": "Convention",
  "number": "1.1.10",
  "title": "Set-builder notation.",
  "body": " Set-builder notation  set-builder notation  Given a set and a unary Boolean predicate , the definable collection is a set (and in fact a subset of ). This subset will also be denoted in set-builder notation by .  "
},
{
  "id": "definition-power-set",
  "level": "2",
  "url": "section-what-is-a-set.html#definition-power-set",
  "type": "Definition",
  "number": "1.1.11",
  "title": "Power set.",
  "body": " Power set   The power set of a set is the set of all subsets of ; this set is denoted , so that .   "
},
{
  "id": "lemma-power-sets-are-non-empty",
  "level": "2",
  "url": "section-what-is-a-set.html#lemma-power-sets-are-non-empty",
  "type": "Lemma",
  "number": "1.1.12",
  "title": "Power sets are non-empty.",
  "body": " Power sets are non-empty   The power set of any set is non-empty; that is, .    Fix a set , and note that the statement for all is vacuously true, so that . Thus , and so is non-empty.    Fix a set , and note that the statement for all is a tautology, so that . Thus , and so is non-empty.   "
},
{
  "id": "subsection-set-containment-14",
  "level": "2",
  "url": "section-what-is-a-set.html#subsection-set-containment-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "constructive non-constructive "
},
{
  "id": "subsection-set-containment-15-1",
  "level": "2",
  "url": "section-what-is-a-set.html#subsection-set-containment-15-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cardinality "
},
{
  "id": "subsection-set-operations-2-7",
  "level": "2",
  "url": "section-what-is-a-set.html#subsection-set-operations-2-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conjunction disjunction negation "
},
{
  "id": "definition-set-operations",
  "level": "2",
  "url": "section-what-is-a-set.html#definition-set-operations",
  "type": "Definition",
  "number": "1.1.13",
  "title": "Set operations.",
  "body": " Set operations  intersection  union  complement      the intersection of and        the union of and        the complement of in     Let and be sets.   Intersection  The intersection  of two sets and is the set whose elements are both elements of and elements of ; that is, .    Union  The union  of two sets and is the set whose elements are either elements of and elements of (or both!); that is, .    Complement  The complement  of in is the set whose elements are elements of but not elements of ; that is, .      "
},
{
  "id": "proposition-set-operations-and-containment",
  "level": "2",
  "url": "section-what-is-a-set.html#proposition-set-operations-and-containment",
  "type": "Proposition",
  "number": "1.1.14",
  "title": "Set operations and containment.",
  "body": " Set operations and containment   Let , , and be sets.    if and only if both and .     if and only if both and .     if and only if both and .         First suppose that . Since , implies that . Similarly, since , implies that .  Conversely, now suppose that and , and let . Since and , . Similarly, since and , . Since and , we conclude that . In summary, we have shown that for all , so that .    First suppose that . Since , implies that . Similarly, since , implies that .  Conversely, now suppose that and . Let , so that or . If , then , since . Similarly, if , then , since . We conclude that . In summary, we have shown that for all , so that .    First suppose that , and let . Since and , , so that and . In summary, we have shown that for all , so that . Moreover, we have shown that for all , so that no element of is an element of ; that is, .  Conversely, now suppose that and , and let . Since and , . Moreover, since and , . Since and , we conclude that . In summary, we have shown that for all , and so .     "
},
{
  "id": "corollary-properties-of-the-set-operations",
  "level": "2",
  "url": "section-what-is-a-set.html#corollary-properties-of-the-set-operations",
  "type": "Corollary",
  "number": "1.1.15",
  "title": "Properties of the set operations.",
  "body": " Properties of the set operations       and for all sets .    Commutativity   and for all sets and .    Associativity   and for all sets , , and .         Since , and by (1) and (2) of , respectively. Of course , so that .  Similarly, since and , by (2) of . Of course , and so .   , and so . Moreover, together with the observation that , this implies by (1) of that . Of course, , and so .  Similarly, , and so .  Finally, note that any element of is both an element of and not an element of , so that no such element can exist. Thus .    Since and , (1) of implies that . By symmetry, , so that .  Similarly, since and , (2) of implies that . By symmetry, , so that .    We note that , so that by (1) of . Similarly, , so that by another application of (1) of .  Conversely, we note that , so that by (1) of . Similarly, , so that by another application of (1) of . Thus .     "
},
{
  "id": "subsection-set-operations-7-1",
  "level": "2",
  "url": "section-what-is-a-set.html#subsection-set-operations-7-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "intersection union "
},
{
  "id": "exercise-elements-of-sets-3",
  "level": "2",
  "url": "section-what-is-a-set.html#exercise-elements-of-sets-3",
  "type": "Exercise",
  "number": "1.1.4.1",
  "title": "",
  "body": "  Is an element of the set ?    Yes, .   "
},
{
  "id": "exercise-elements-of-sets-4",
  "level": "2",
  "url": "section-what-is-a-set.html#exercise-elements-of-sets-4",
  "type": "Exercise",
  "number": "1.1.4.2",
  "title": "",
  "body": "  Is an element of the set ?    No, .   "
},
{
  "id": "exercise-elements-of-sets-5",
  "level": "2",
  "url": "section-what-is-a-set.html#exercise-elements-of-sets-5",
  "type": "Exercise",
  "number": "1.1.4.3",
  "title": "",
  "body": "  Is an element of the set ?    If we interpret the roster notation as , then .   "
},
{
  "id": "exercise-elements-of-sets-6",
  "level": "2",
  "url": "section-what-is-a-set.html#exercise-elements-of-sets-6",
  "type": "Exercise",
  "number": "1.1.4.4",
  "title": "",
  "body": "  Is an element of the set ?    If we interpret the roster notation as , then .   "
},
{
  "id": "exercise-roster-notation-3",
  "level": "2",
  "url": "section-what-is-a-set.html#exercise-roster-notation-3",
  "type": "Exercise",
  "number": "1.1.4.5",
  "title": "",
  "body": "  Write down the set of even numbers between and in roster notation.     .   "
},
{
  "id": "exercise-roster-notation-4",
  "level": "2",
  "url": "section-what-is-a-set.html#exercise-roster-notation-4",
  "type": "Exercise",
  "number": "1.1.4.6",
  "title": "",
  "body": "  Write down the set of letters in your full name in roster notation.    The correct answer will differ depending on your full name. My full name is Max Lahn , and so I would answer .   "
},
{
  "id": "exercise-roster-notation-5",
  "level": "2",
  "url": "section-what-is-a-set.html#exercise-roster-notation-5",
  "type": "Exercise",
  "number": "1.1.4.7",
  "title": "",
  "body": "  Write down the set of colors in the rainbow in roster notation.    The correct answer will differ depending on what you consider to be separate colors. I would answer    "
},
{
  "id": "exercise-set-containment-3",
  "level": "2",
  "url": "section-what-is-a-set.html#exercise-set-containment-3",
  "type": "Exercise",
  "number": "1.1.4.8",
  "title": "",
  "body": "  Is ?    No, .   "
},
{
  "id": "exercise-set-containment-4",
  "level": "2",
  "url": "section-what-is-a-set.html#exercise-set-containment-4",
  "type": "Exercise",
  "number": "1.1.4.9",
  "title": "",
  "body": "  Is ?    Yes, .    Yes,    "
},
{
  "id": "exercise-set-containment-5",
  "level": "2",
  "url": "section-what-is-a-set.html#exercise-set-containment-5",
  "type": "Exercise",
  "number": "1.1.4.10",
  "title": "",
  "body": "  Is ?    Yes, .    Yes,    "
},
{
  "id": "exercises-power-sets-3",
  "level": "2",
  "url": "section-what-is-a-set.html#exercises-power-sets-3",
  "type": "Exercise",
  "number": "1.1.4.11",
  "title": "",
  "body": "  Write down the power set of the set in roster notation.    The power set of the set is the set .    Choosing a subset of the set is equivalent to making a unique binary choices of whether or not to include the element . We see that has the following subsets: , and . Therefore, the power set of the set is the set .   "
},
{
  "id": "exercises-power-sets-4",
  "level": "2",
  "url": "section-what-is-a-set.html#exercises-power-sets-4",
  "type": "Exercise",
  "number": "1.1.4.12",
  "title": "",
  "body": "  Write down the power set of the set in roster notation.    The power set of the set is the set .    Choosing a subset of the set is equivalent to making a unique sequence of two binary choices of whether to include each element and . We see that has the following subsets: , , , and . Therefore, the power set of the set is the set .   "
},
{
  "id": "exercises-power-sets-5",
  "level": "2",
  "url": "section-what-is-a-set.html#exercises-power-sets-5",
  "type": "Exercise",
  "number": "1.1.4.13",
  "title": "",
  "body": "  Write down the power set of the set in roster notation.    The power set of the set is the set .    Choosing a subset of the set is equivalent to making a unique sequence of three binary choices of whether to include each element , , and . We see that has the following subsets: , , , , , , , and . Therefore, the power set of the set is the set .   "
},
{
  "id": "exercise-set-operations-3",
  "level": "2",
  "url": "section-what-is-a-set.html#exercise-set-operations-3",
  "type": "Exercise",
  "number": "1.1.4.14",
  "title": "",
  "body": "  Compute , where is the set of even natural numbers and is the set of odd integers.     .    No natural number is both even and odd, and so .   "
},
{
  "id": "exercise-set-operations-4",
  "level": "2",
  "url": "section-what-is-a-set.html#exercise-set-operations-4",
  "type": "Exercise",
  "number": "1.1.4.15",
  "title": "",
  "body": "  Compute , where and .     .     contains all the elements of and all the elements of , so that .   "
},
{
  "id": "exercise-set-operations-5",
  "level": "2",
  "url": "section-what-is-a-set.html#exercise-set-operations-5",
  "type": "Exercise",
  "number": "1.1.4.16",
  "title": "",
  "body": "  Compute , where is the set of natural numbers divisible by , and is the set of even natural numbers.     .     contains all the odd multiples of , so that .   "
},
{
  "id": "problem-distributivity-of-set-operations",
  "level": "2",
  "url": "section-what-is-a-set.html#problem-distributivity-of-set-operations",
  "type": "Problem",
  "number": "1.1.5.1",
  "title": "The distributive properties of set operations.",
  "body": " The distributive properties of set operations  Distributive property    Prove that for all sets , , and .    Let . Then and , and so or . If , then , and so . On the other hand, if , then , and so .  In summary, we have shown that for all elements , and so .  Conversely, now let . Then or . If , then and . In particular, , and so .  In summary, we have shown that for all , and so ; we now conclude that .      Prove that for all sets , , and .    Let . Then or . If , then and , and so . On the other hand, if , then and . In this case, and , and so .  In summary, we have shown that for all elements , and so .  Conversely, now let . Then and . In particular, if , then and , and so . We conclude that .  In summary, we have shown that for all , and so ; we now conclude that .     Taken together, these results are called the distributive properties of the set operations.   "
},
{
  "id": "problem-de-morgans-laws",
  "level": "2",
  "url": "section-what-is-a-set.html#problem-de-morgans-laws",
  "type": "Problem",
  "number": "1.1.5.2",
  "title": "De Morgan’s laws.",
  "body": " De Morgan's laws  De Morgan's laws    Prove that for all sets , , and .    First let . Then and . We want to show that or . To that end, suppose that . Since , we must have .  But , and so ; that is, . Since if , then , we conclude that .  Conversely, now let , so that or . If , then and , so that . We conclude that .  In summary, we have shown that if and only if . We conclude that .      Prove that .    First let . Then and . If , then , and so ; we conclude that . Similarly, if , then , and so ; we conclude that . Thus .  Conversely, now let , so that and . Thus , , and . If , then or , and so ; we conclude that .  In summary, we have shown that if and only if . We conclude that .     Taken together, these results are called De Morgan's laws .   "
},
{
  "id": "problem-power-sets",
  "level": "2",
  "url": "section-what-is-a-set.html#problem-power-sets",
  "type": "Problem",
  "number": "1.1.5.3",
  "title": "Power sets.",
  "body": " Power sets   Determine whether the following statement is true or false:  The power set of a set contains at least two distinct elements.  If the statement is true, prove it. If the statement is false, disprove it by providing a counterexample.    Revisit the proofs of .    The statement is false. For a counterexample, we consider the empty set . The only subset of the empty set is itself.   "
},
{
  "id": "problem-set-operations-and-containment",
  "level": "2",
  "url": "section-what-is-a-set.html#problem-set-operations-and-containment",
  "type": "Problem",
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
  "body": " Maps and Functions   In this section, we introduce the fundamental notion of a map between sets. Informally, a map is an assignment to each element of one set an element of another. You likely have been exposed to maps in previous math courses in the form of real-valued functions of one real variable. We will treat maps in far greater generality, which will allow us to perform mathematical analysis in a wider array of spaces.    Introduction to Maps   Ordered pair  Entry       the ordered pair with first entry and second entry     First, however, we define the Cartesian product of two sets. This relies on a notion of an ordered pair of objects and , which we denote . Like formalized set theory, rigorous constructions of ordered pairs are, in this context, unnecessarily complicated and annoying to work with. As such, we will take them to be well-defined. The salient properties of an ordered pair are its entries  and , which are called its first and second entries, respectively.    Cartesian product  Cartesian product       the Cartesian product of with      The Cartesian product  of two sets and is the set which contains all ordered pairs whose first entry is an element of and whose second entry is an element of ; that is, .     Cartesian products   The sets and have Cartesian product . Note that , since the elements of these sets are totally different kinds of objects. Moreover, if , then ; in the language of , the Cartesian product is non-commutative .    Recall that we would like a map between two sets to be an association of the elements of one set to the elements of the other. We will model this association via ordered pairs. To that end, a map between two sets will just be a subset of their Cartesian product which satisfies certain existence and uniqueness properties.   Map  map  domain  input  codomain  output  function       a map from to          a map maps an input to an output      A subset of the Cartesian product of two sets and is called a map from (which is called the domain of and whose elements are called inputs ) to (which is called the codomain of and whose elements are called outputs ) if it satisfies the following conditions:   Uniqueness  For all inputs , there is an output so that .    Uniqueness (vertical line test)  For all inputs and outputs , if , then .   So is a map from to if and only if for each input , there is a unique output so that . We will write to indicate that is a map from to , and we will write to indicate that . The set of maps from to is denoted .  We will call a map whose codomain is a number system like the natural numbers , the integers , the rational numbers , the real numbers , or the complex numbers a -valued function on . We will investigate the natural numbers in , and will be dedicated to constructing the other number systems with which we will become acquainted throughout the course of this text.    So a map between sets is just a subset of their Cartesian product such that each element of the domain appears in precisely one pair with an element of the codomain. The above existence and uniqueness properties of a map implies that there is an unambiguous association between the elements of the domain and the elements of the codomain.   Maps   The following are examples of maps between sets:   Let and , and consider the following subsets of : . As defined above, , , , and are maps from to . In fact, these are the only such maps; that is, .    The empty set is the unique map from the empty set to any set ; that is, . Note that none of the elements of the codomain are associated with elements of the empty domain . However, this does not imply that is not a map; in general, not all elements of the codomain of a map need be associated with elements of the domain, since the existence property applies only to the domain .    inclusion map  identity map       the inclusion map of in .         the identity map of a set     Let be a subset of a set . The inclusion map  of in is the map from to defined by That is, for all .  The inclusion map of in itself is called the identity map on , and is denoted .        Passive and active characterizations of maps  It may be difficult to see how the above definition of a map is a generalization of the notion of a real-valued function of a real variable. In fact, the above definition might seem more closely related to the graph of such a function, since the uniqueness property of maps is just a generalization of the vertical line test for functions. We will refer to this perspective on maps as subsets of a Cartesian product satisfying certain abstract properties as the passive characterization of what maps are . In contrast, we often like to think of a map as an active process, which takes an input and transforms it into the unique output with which it is associated. We will refer to this perspective as the active characterization of what maps do . When it benefits us to favor one perspective over another, we will emphasize either the active or passive characterization over the other. The following definitions allow us to convert between these two equivalent characterizations of maps.    Image; pre-image  image  pre-image       the image of an input under a map          the image of a set of inputs under a map          the image of a map          the pre-image of a set of outputs under a map          the pre-image of an output under a map      Let be a map from a set to a set .   The image  of an input under is the unique output so that . The image  of a subset is the subset of the codomain defined by . The image of itself is called the image of , and is denoted .    The pre-image  of a subset of the codomain under is the set of all inputs whose image lies in ; that is, . The pre-image  of an output under is just the pre-image of the singleton set under ; that is,        Any map between sets induces a map from any subset of its domain to its codomain via a process known as restriction . In light of the active characterization of what maps do, this may seem almost trivial. However, we will formalize this notion of restriction in terms of the passive characterization of what maps are in order to prove rigorously our intuitions are correct. You may be better served by conceptualizing the restriction of a map to be the same active process of transforming inputs into outputs but with a smaller domain, rather than the passive definition below.   Restriction  restriction       the restriction of a map to a subset of its domain     The restriction  of a map between sets and to a subset of its domain is the subset of the Cartesian product defined by .    As our intuition about the active characterization of what maps do tells us, the restriction of a map to a subset of its domain is itself a map from the chosen subset to the domain of the original map.   Restrictions are maps   Let be a map from a set to a set . For any subset , the restriction of to is a map from to .    Let . Then is an input to , and so for some output . We conclude that , so that satisfies the existence condition.  Let and , and suppose that . Since , we have that , and so ; that is, satisfies the uniqueness condition. Since satisfies the existence and uniqueness conditions, it is a map from to .     We will shortly see another way to construct restrictions as compositions with inclusion maps.     Composition and Invertibility   Viewed through the perspective of the active characterization of what maps do, it may seem obvious that we can combine two maps between sets by first acting on it with one map and then acting on its image by the other map. This new process yields the composition of the two maps, and it may be intuitively clear that this composition is itself a map. However, we will formalize this notion of composition in the passive characterization, so that we may prove this fact rigorously. Again, it may better serve you to conceptualize the composition of maps in the context of the active characterization of what maps do rather than the passive characterization of what maps are in order to better inform your intuition about composition.    Composition  composition       the composition of a map with a map      Let and be maps between sets , , and . The composition  of with is the map from to defined by the formula .    We aren't restricted to the composition of just two maps. In fact, we can compose any finite number of maps with compatible domains and codomains by iterating the above construction.   Associativity of composition   Let , , and be maps between sets , , , and . Then .    Note that for all . Since and agree on all inputs , .    The above notion of composition introduces a natural question about maps between sets:  To what degree can the action of a map on its domain be undone?  This question of map invertibility is fundamental, and will recur throughout this text.   Invertibility  left inverse  right inverse  inverse  left-invertibility  right-invertibility  invertibility   Let be a map from a set to a set .   Left-invertibility  A map from to is a left inverse to if . is called left-invertible if such a left inverse exists.    Right-invertibility  A map from to is a right inverse to if . is called right-invertible if such a right inverse exists.    Invertibility  A map from to is an inverse to if it is both a left inverse and a right inverse to ; that is, is an inverse to if both and . is called invertible if such an inverse exists.        Inverses   The following are examples of left inverses, right inverses, and inverses of maps.   Let be a non-empty subset of a set , and fix an element . Consider the map from to defined piecewise by the formula . Note that for all , and so ; that is, is a left inverse to the inclusion map of in .    projection map  Fix sets and , and suppose that is non-empty. Let be the projection map defined by the formula .  Fix an element , and consider the map from to defined by the formula . Then for all , and so ; that is, is a right inverse to the projection map .    The identity map on a set is its own inverse, since . This is actually a special case of the first example above, where we take . More generally, for all maps with domain , and for all maps with codomain .       We now give alternative characterizations of left-invertibility, right-invertibility, and invertibility. Intuitively, a map is left-invertible if it does not associate two distinct inputs with the same output, and a map is right-invertible if each output is associated with at least one input. These properties mirror the totality and uniqueness conditions for maps, and will turn out to together imply the existence of a two-sided inverse, which is both a left and right inverse.   Injectivity; surjectivity; bijectivity  injective  one-to-one  injection  surjective  onto  surjection  bijective  one-to-one correspondence  bijection   Let be a map from a set to a set .   Injectivity   is called injective (or one-to-one ) if for all inputs , if , then . In this case, is also called an injection of into .    Surjectivity   is called surjective (or onto ) if for all outputs there is an input so that . In this case, is also called a surjection of onto .    Bijectivity   is called bijective if it is both injective and surjective. In this case, is also called a bijection or a one-to-one correspondence between and .        Injections, surjections, and bijections   The following are examples of injective, surjective, and bijective functions.   Let be a subset of a set , and consider . If , then . So the inclusion map is injective.    Fix sets and , and suppose that is non-empty. Let be the projection map defined by the formula .  Let , and note that since is non-empty, there is some element . We note that . Since each output is the image of some input under , is surjective.    The identity map on a set is injective by virtue of being an inclusion map. is also surjective, since for all . Thus is bijective.       It is no accident that the examples for left- and right- invertibility coincided with the examples for injectivity and surjectivity. It turns out that injectivity is essentially equivalent to left-invertibility, and surjectivity is equivalent to right-invertibility. This is the content of the following theorem, whose proof relies heavily on .   Invertibility   Let be a map from a set to a set .   If is left-invertible, then is injective.    If is non-empty and is injective, then is left-invertible.    If is right-invertible, then is surjective.         Suppose that is left-invertible, so that for some map . That is injective follows from the injectivity of the identity map and (d) of .    Conversely, now suppose that is non-empty and is injective. Then for each output , there is at most one input so that . Specifically, for each , there is a unique input so that . Denote by this unique input.  Since is non-empty, it contains an element . Define for all . We have defined a map . Note that for all inputs , and so ; that is, is a left inverse to , and so is left-invertible.    Finally, suppose that is right-invertible, so that for some map . That is surjective follows from the surjectivity of the identity map and (e) of .      Proving the remaining direction of the equivalence between right invertibility and surjectivity requires a strong assumption about set theory called the , which we do not yet have the language to express in its simplest form. We will discuss about the in , when we generalize the Cartesian product of two sets using indexing maps.   Invertibility   A map is invertible if and only if it is bijective.    Let be a map from a set to a set . If is invertible, it is both left- and right-invertible, and so is both injective and surjective by (1) and (3) of . Hence is bijective.  Conversely, now suppose that is bijective, so that is both injective and surjective. If , then by the surjectivity of . Thus is the unique map from to itself, the identity map . In particular, is invertible.  So we may assume that is non-empty. Since is injective, it is left-invertible by (2) of . So for some map ; that is, for all inputs . It suffices to show that is also a right inverse to .  To that end, consider an output . Since is surjective, for some input . Then . Hence , and so is an inverse to ; that is, is invertible.     We will investigate the invertibility and bijectivity of maps and the consequences these properties have on the domains and codomains of such maps more in at the end of this chapter, when we study cardinality and the size of sets. For now, however, we will move on to an important convention which is ubiquitous throughout mathematics: the notions of indexed sets and indexed families .     Indexing   Considered as an association between sets, a map can be thought to index its image by the elements of its domain. That is, a map can transfer information from its domain to its image. Just what this transferred information looks like can vary tremendously, but suffice it to say that this notion of indexing is fundamental and will recur throughout this text.    Indexed family\/set  index  indexing set  indexed family  indexed set       a family of objects indexed by          a set of objects indexed by      Consider a map from a set , called the indexing set and whose elements are called indices , to a set . The image of such an index under such an (indexed) family  is often denoted , and is often denoted . We say that is indexed by , and we write .    We can also use this notion of indexing to generalize the intersection and union of sets to act on arbitrary collections of sets. This generalization of the intersection and union of two sets relies on the natural similarities between logical conjunction and universal quantification and between logical disjunction and existential quantification , respectively.   Indexed set operations  intersection  union       the intersection of an indexed family of sets          the union of an indexed family of sets      Let be a family of subsets of a set indexed by a set .   Intersection  The intersection  of this indexed family of subsets is the subset of defined by .    Union  The union  of this indexed family of subsets is the subset of defined by .       These generalizations of the intersection and union of two sets extend naturally to generalizations of each of the results proven in the previous section.   Analogous properties of indexed intersections and unions   Let be a family of subsets of a set indexed by a set .   Analogously to , for any subset , if and only if for all indices . Moreover, if and only if for all indices .    Reindexing  Analogously to (2) of , and for any set and surjection .    Distributivity  Analogously to , and for any subset .    De Morgan's laws  Analogously to , and for any subset .        You will have an opportunity to prove the above results in the problems for this section.     The topics introduced in this section are central not only to the study of real analysis but to all of modern mathematics. In the next section, we will introduce another central object of study, the set of natural numbers .    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.    Cartesian products   Write down the Cartesian products of the given sets in roster notation.     Write down the Cartesian product of the sets and in roster notation.    The Cartesian product of the sets and is .      Write down the Cartesian product of the sets and in roster notation.    The Cartesian product of the sets and is .      Write down the Cartesian product of the sets and in roster notation.    The Cartesian product of the sets and is .      Is it a map?   Consider the sets and . Determine whether or not the given object is a map from to .     Determine whether or not is a map from to .    Yes, is a map from to .      Determine whether or not is a map from to .    No, is not a map from to .    There is no output so that , and so does not satisfy the totality condition. Thus is not a map from to .      Determine whether or not is a map from to .    No, is not a map from to .    Note that , and so does not satisfy the uniqueness condition. Thus is not a map from to .      Determine whether or not is a map from to .    Yes, is a map from to .      Images and pre-images   Let be the map from to defined in ; that is, . Compute the given images and pre-images. Express your answer in roster notation if necessary.     Compute the images and .     .    Since , the image of under is . Similarly, since , the image of under is .      Compute the image .     .    Since for all , the image of is .      Compute the pre-images and .     and .    Since for all , the pre-images and of and under are and .      Determining injectivity\/surjectivity\/bijectivity   Determine whether or not the given map is injective, surjective, and\/or bijective.     Let and , and consider the following map from to : . Determine whether or not is injective, surjective, and\/or bijective.     is neither injective, surjective, nor bijective.      Let and , and consider the following map from to : . Determine whether or not is injective, surjective, and\/or bijective.     is injective, but it is neither surjective nor bijective.      Let and , and consider the following map from to : . Determine whether or not is injective, surjective, and\/or bijective.     is surjective, but it is neither injective nor bijective.      Let and , and consider the following map from to : . Determine whether or not is injective, surjective, and\/or bijective.     is injective, surjective, and bijective.      Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Problems   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .    Non-commutativity of Cartesian products   Give examples of sets and so that .    If and , then .     Existence of maps   Determine whether the following statement is true or false:  For any sets and , there is a map from to .  If the statement is true, prove it. If the statement is false, disprove it by providing a counterexample.    Consider your answers to .    Let and . As shown in , . In particular, no subset of can satisfy the totality condition, and so there are no maps from to .     Non-commutativity of composition    Give examples of maps and so that the composition is well-defined but the composition is not.    Let , , and , and consider the maps and defined by and .  Since the codomain of is the domain of , the composition is well-defined. However, since the codomain of is not the domain of , the composition is not well-defined.      Give examples of maps and so that the compositions and are well-defined but .    Let , and consider the maps from to itself defined by Then , and so .      Composition and injectivity\/surjectivity\/bijectivity   Let and be maps between sets , , and .     Prove that if and are injective, then so too is their composition .    Let , and suppose that . Then , and so the injectivity of implies that . Moreover, the injectivity of implies that . In summary, we have shown that for all inputs , if , then ; that is, is injective.      Prove that if and are surjective, then so too is their composition .    Let . Since is surjective, for some . Moreover, since is surjective, for some . Thus . In summary, we have shown that for every output , there is some input so that ; that is, is surjective.      Prove that if and are bijective, then so too is their composition .    Since and are bijective, they are both injective and surjective. (1) and (2) above not imply that their composition is both injective and surjective; that is, is bijective.      Prove that if the composition is injective, then so too is .    Prove the desired result by contraposition.    Suppose that is not injective. Then for some distinct inputs . Note that . Since but , is not injective.  In summary, we have shown that if is not injective, then is not injective. The contrapositive of this implication is the desired result: if is injective, then so is .      Prove that if the composition is surjective, then so too is .    Prove the desired result by contraposition.    Suppose that is not surjective. Then there is some so that for all . Note that for all , and so is not surjective.  In summary, we have shown that if is not surjective, then is not surjective. The contrapositive of this implication is the desired result: if is surjective, then so is .     Note that the above results are used in the proof of . In order to avoid circular reasoning, you should prove the above statements by using only the definitions of injectivity, surjectivity, and bijectivity (and not the alternative characterizations given by and ).     Indexed intersections and unions   Let be a family of subsets of a set indexed by a set .     Prove that for any subset , if and only if for all indices , and if and only if for all indices .    First suppose that . Then for all , , and so for all indices . Thus for all indices .  Conversely, now suppose that for all indices , and let . Then for all indices , and so . We conclude that .  Now suppose that . Fix an index , and let . Then , and so . We conclude that , and note that this holds for all indices .  Conversely, now suppose that for all indices , and let . Then , and so for some index . Since , we have . We conclude that .      Prove that and for any set and surjection .    Let , and suppose first that for all indices . Then for all indices , and so for all such indices. Thus . Conversely, now suppose that for all indices . Since is surjective, this implies that for all indices . Thus , and so .  Now suppose that for some index . Since is surjective, for some index , and so . In particular, for some index , and so . Conversely, now suppose that for some index . Since is surjective, this implies that for some index . Thus , and so .      Prove that and for any subset .    Let , and suppose that . Then or for all indices . If , then for all indices , and so . On the other hand, if , then for all indices , and so for all indices ; that is, .  Conversely, now suppose that . Then for all indices . If , then for all indices , and so . We conclude that . In summary, we have shown that if and only if , and so .  Now suppose that . Then , and for some index . In particular, for some index , and so .  Conversely, now suppose that . Then for some index , and so and for some index . We conclude that . In summary, we have shown that if and only if , and so .      Prove that and for any subset .    Let , and suppose that . Then and . So for some index , and so for some index ; that is, .  Conversely, now suppose that . Then for some index , and so and for some index . In particular, , and so . In summary, we have shown that if and only if , and so .  Let , and suppose that . Then and . So for all indices , and so for all indices ; that is, .  Conversely, now suppose that . Then for all indices , and so and for all indices . In particular, , and so . In summary, we have shown that if and only if , and so .      In-depth solutions to these problems are available. However, these are provided in order to check your work. If you are unable to solve the above problems, discuss your questions with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-maps-and-functions-2-1",
  "level": "2",
  "url": "section-maps-and-functions.html#section-maps-and-functions-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "map "
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
  "id": "example-cartesian-products",
  "level": "2",
  "url": "section-maps-and-functions.html#example-cartesian-products",
  "type": "Example",
  "number": "1.2.2",
  "title": "Cartesian products.",
  "body": " Cartesian products   The sets and have Cartesian product . Note that , since the elements of these sets are totally different kinds of objects. Moreover, if , then ; in the language of , the Cartesian product is non-commutative .   "
},
{
  "id": "definition-map-function",
  "level": "2",
  "url": "section-maps-and-functions.html#definition-map-function",
  "type": "Definition",
  "number": "1.2.3",
  "title": "Map.",
  "body": " Map  map  domain  input  codomain  output  function       a map from to          a map maps an input to an output      A subset of the Cartesian product of two sets and is called a map from (which is called the domain of and whose elements are called inputs ) to (which is called the codomain of and whose elements are called outputs ) if it satisfies the following conditions:   Uniqueness  For all inputs , there is an output so that .    Uniqueness (vertical line test)  For all inputs and outputs , if , then .   So is a map from to if and only if for each input , there is a unique output so that . We will write to indicate that is a map from to , and we will write to indicate that . The set of maps from to is denoted .  We will call a map whose codomain is a number system like the natural numbers , the integers , the rational numbers , the real numbers , or the complex numbers a -valued function on . We will investigate the natural numbers in , and will be dedicated to constructing the other number systems with which we will become acquainted throughout the course of this text.   "
},
{
  "id": "example-maps",
  "level": "2",
  "url": "section-maps-and-functions.html#example-maps",
  "type": "Example",
  "number": "1.2.4",
  "title": "Maps.",
  "body": " Maps   The following are examples of maps between sets:   Let and , and consider the following subsets of : . As defined above, , , , and are maps from to . In fact, these are the only such maps; that is, .    The empty set is the unique map from the empty set to any set ; that is, . Note that none of the elements of the codomain are associated with elements of the empty domain . However, this does not imply that is not a map; in general, not all elements of the codomain of a map need be associated with elements of the domain, since the existence property applies only to the domain .    inclusion map  identity map       the inclusion map of in .         the identity map of a set     Let be a subset of a set . The inclusion map  of in is the map from to defined by That is, for all .  The inclusion map of in itself is called the identity map on , and is denoted .      "
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
  "body": " Image; pre-image  image  pre-image       the image of an input under a map          the image of a set of inputs under a map          the image of a map          the pre-image of a set of outputs under a map          the pre-image of an output under a map      Let be a map from a set to a set .   The image  of an input under is the unique output so that . The image  of a subset is the subset of the codomain defined by . The image of itself is called the image of , and is denoted .    The pre-image  of a subset of the codomain under is the set of all inputs whose image lies in ; that is, . The pre-image  of an output under is just the pre-image of the singleton set under ; that is,       "
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
  "body": " Restrictions are maps   Let be a map from a set to a set . For any subset , the restriction of to is a map from to .    Let . Then is an input to , and so for some output . We conclude that , so that satisfies the existence condition.  Let and , and suppose that . Since , we have that , and so ; that is, satisfies the uniqueness condition. Since satisfies the existence and uniqueness conditions, it is a map from to .   "
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
  "body": " Invertibility  left inverse  right inverse  inverse  left-invertibility  right-invertibility  invertibility   Let be a map from a set to a set .   Left-invertibility  A map from to is a left inverse to if . is called left-invertible if such a left inverse exists.    Right-invertibility  A map from to is a right inverse to if . is called right-invertible if such a right inverse exists.    Invertibility  A map from to is an inverse to if it is both a left inverse and a right inverse to ; that is, is an inverse to if both and . is called invertible if such an inverse exists.      "
},
{
  "id": "example-inverses",
  "level": "2",
  "url": "section-maps-and-functions.html#example-inverses",
  "type": "Example",
  "number": "1.2.12",
  "title": "Inverses.",
  "body": " Inverses   The following are examples of left inverses, right inverses, and inverses of maps.   Let be a non-empty subset of a set , and fix an element . Consider the map from to defined piecewise by the formula . Note that for all , and so ; that is, is a left inverse to the inclusion map of in .    projection map  Fix sets and , and suppose that is non-empty. Let be the projection map defined by the formula .  Fix an element , and consider the map from to defined by the formula . Then for all , and so ; that is, is a right inverse to the projection map .    The identity map on a set is its own inverse, since . This is actually a special case of the first example above, where we take . More generally, for all maps with domain , and for all maps with codomain .      "
},
{
  "id": "definition-injectivity-surjectivity-bijectivity",
  "level": "2",
  "url": "section-maps-and-functions.html#definition-injectivity-surjectivity-bijectivity",
  "type": "Definition",
  "number": "1.2.13",
  "title": "Injectivity; surjectivity; bijectivity.",
  "body": " Injectivity; surjectivity; bijectivity  injective  one-to-one  injection  surjective  onto  surjection  bijective  one-to-one correspondence  bijection   Let be a map from a set to a set .   Injectivity   is called injective (or one-to-one ) if for all inputs , if , then . In this case, is also called an injection of into .    Surjectivity   is called surjective (or onto ) if for all outputs there is an input so that . In this case, is also called a surjection of onto .    Bijectivity   is called bijective if it is both injective and surjective. In this case, is also called a bijection or a one-to-one correspondence between and .      "
},
{
  "id": "example-injections-surjections-and-bijections",
  "level": "2",
  "url": "section-maps-and-functions.html#example-injections-surjections-and-bijections",
  "type": "Example",
  "number": "1.2.14",
  "title": "Injections, surjections, and bijections.",
  "body": " Injections, surjections, and bijections   The following are examples of injective, surjective, and bijective functions.   Let be a subset of a set , and consider . If , then . So the inclusion map is injective.    Fix sets and , and suppose that is non-empty. Let be the projection map defined by the formula .  Let , and note that since is non-empty, there is some element . We note that . Since each output is the image of some input under , is surjective.    The identity map on a set is injective by virtue of being an inclusion map. is also surjective, since for all . Thus is bijective.      "
},
{
  "id": "theorem-invertibility",
  "level": "2",
  "url": "section-maps-and-functions.html#theorem-invertibility",
  "type": "Theorem",
  "number": "1.2.15",
  "title": "Invertibility.",
  "body": " Invertibility   Let be a map from a set to a set .   If is left-invertible, then is injective.    If is non-empty and is injective, then is left-invertible.    If is right-invertible, then is surjective.         Suppose that is left-invertible, so that for some map . That is injective follows from the injectivity of the identity map and (d) of .    Conversely, now suppose that is non-empty and is injective. Then for each output , there is at most one input so that . Specifically, for each , there is a unique input so that . Denote by this unique input.  Since is non-empty, it contains an element . Define for all . We have defined a map . Note that for all inputs , and so ; that is, is a left inverse to , and so is left-invertible.    Finally, suppose that is right-invertible, so that for some map . That is surjective follows from the surjectivity of the identity map and (e) of .     "
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
  "body": "cardinality indexed sets indexed families "
},
{
  "id": "definition-indexed-family-set",
  "level": "2",
  "url": "section-maps-and-functions.html#definition-indexed-family-set",
  "type": "Definition",
  "number": "1.2.17",
  "title": "Indexed family\/set.",
  "body": " Indexed family\/set  index  indexing set  indexed family  indexed set       a family of objects indexed by          a set of objects indexed by      Consider a map from a set , called the indexing set and whose elements are called indices , to a set . The image of such an index under such an (indexed) family  is often denoted , and is often denoted . We say that is indexed by , and we write .   "
},
{
  "id": "definition-indexed-set-operations",
  "level": "2",
  "url": "section-maps-and-functions.html#definition-indexed-set-operations",
  "type": "Definition",
  "number": "1.2.18",
  "title": "Indexed set operations.",
  "body": " Indexed set operations  intersection  union       the intersection of an indexed family of sets          the union of an indexed family of sets      Let be a family of subsets of a set indexed by a set .   Intersection  The intersection  of this indexed family of subsets is the subset of defined by .    Union  The union  of this indexed family of subsets is the subset of defined by .      "
},
{
  "id": "theorem-analogous-properties-of-indexed-intersections-and-unions",
  "level": "2",
  "url": "section-maps-and-functions.html#theorem-analogous-properties-of-indexed-intersections-and-unions",
  "type": "Theorem",
  "number": "1.2.19",
  "title": "Analogous properties of indexed intersections and unions.",
  "body": " Analogous properties of indexed intersections and unions   Let be a family of subsets of a set indexed by a set .   Analogously to , for any subset , if and only if for all indices . Moreover, if and only if for all indices .    Reindexing  Analogously to (2) of , and for any set and surjection .    Distributivity  Analogously to , and for any subset .    De Morgan's laws  Analogously to , and for any subset .      "
},
{
  "id": "section-maps-and-functions-6-1",
  "level": "2",
  "url": "section-maps-and-functions.html#section-maps-and-functions-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "natural numbers "
},
{
  "id": "exercise-cartesian-products-3",
  "level": "2",
  "url": "section-maps-and-functions.html#exercise-cartesian-products-3",
  "type": "Exercise",
  "number": "1.2.4.1",
  "title": "",
  "body": "  Write down the Cartesian product of the sets and in roster notation.    The Cartesian product of the sets and is .   "
},
{
  "id": "exercise-cartesian-products-4",
  "level": "2",
  "url": "section-maps-and-functions.html#exercise-cartesian-products-4",
  "type": "Exercise",
  "number": "1.2.4.2",
  "title": "",
  "body": "  Write down the Cartesian product of the sets and in roster notation.    The Cartesian product of the sets and is .   "
},
{
  "id": "exercise-cartesian-products-5",
  "level": "2",
  "url": "section-maps-and-functions.html#exercise-cartesian-products-5",
  "type": "Exercise",
  "number": "1.2.4.3",
  "title": "",
  "body": "  Write down the Cartesian product of the sets and in roster notation.    The Cartesian product of the sets and is .   "
},
{
  "id": "exercise-is-it-a-map-3",
  "level": "2",
  "url": "section-maps-and-functions.html#exercise-is-it-a-map-3",
  "type": "Exercise",
  "number": "1.2.4.4",
  "title": "",
  "body": "  Determine whether or not is a map from to .    Yes, is a map from to .   "
},
{
  "id": "exercise-is-it-a-map-4",
  "level": "2",
  "url": "section-maps-and-functions.html#exercise-is-it-a-map-4",
  "type": "Exercise",
  "number": "1.2.4.5",
  "title": "",
  "body": "  Determine whether or not is a map from to .    No, is not a map from to .    There is no output so that , and so does not satisfy the totality condition. Thus is not a map from to .   "
},
{
  "id": "exercise-is-it-a-map-5",
  "level": "2",
  "url": "section-maps-and-functions.html#exercise-is-it-a-map-5",
  "type": "Exercise",
  "number": "1.2.4.6",
  "title": "",
  "body": "  Determine whether or not is a map from to .    No, is not a map from to .    Note that , and so does not satisfy the uniqueness condition. Thus is not a map from to .   "
},
{
  "id": "exercise-is-it-a-map-6",
  "level": "2",
  "url": "section-maps-and-functions.html#exercise-is-it-a-map-6",
  "type": "Exercise",
  "number": "1.2.4.7",
  "title": "",
  "body": "  Determine whether or not is a map from to .    Yes, is a map from to .   "
},
{
  "id": "exercise-images-and-pre-images",
  "level": "2",
  "url": "section-maps-and-functions.html#exercise-images-and-pre-images",
  "type": "Exercise",
  "number": "1.2.4.8",
  "title": "Images and pre-images.",
  "body": " Images and pre-images   Let be the map from to defined in ; that is, . Compute the given images and pre-images. Express your answer in roster notation if necessary.     Compute the images and .     .    Since , the image of under is . Similarly, since , the image of under is .      Compute the image .     .    Since for all , the image of is .      Compute the pre-images and .     and .    Since for all , the pre-images and of and under are and .    "
},
{
  "id": "exercise-determining-injectivity-surjectivity-bijectivity-3",
  "level": "2",
  "url": "section-maps-and-functions.html#exercise-determining-injectivity-surjectivity-bijectivity-3",
  "type": "Exercise",
  "number": "1.2.4.9",
  "title": "",
  "body": "  Let and , and consider the following map from to : . Determine whether or not is injective, surjective, and\/or bijective.     is neither injective, surjective, nor bijective.   "
},
{
  "id": "exercise-determining-injectivity-surjectivity-bijectivity-4",
  "level": "2",
  "url": "section-maps-and-functions.html#exercise-determining-injectivity-surjectivity-bijectivity-4",
  "type": "Exercise",
  "number": "1.2.4.10",
  "title": "",
  "body": "  Let and , and consider the following map from to : . Determine whether or not is injective, surjective, and\/or bijective.     is injective, but it is neither surjective nor bijective.   "
},
{
  "id": "exercise-determining-injectivity-surjectivity-bijectivity-5",
  "level": "2",
  "url": "section-maps-and-functions.html#exercise-determining-injectivity-surjectivity-bijectivity-5",
  "type": "Exercise",
  "number": "1.2.4.11",
  "title": "",
  "body": "  Let and , and consider the following map from to : . Determine whether or not is injective, surjective, and\/or bijective.     is surjective, but it is neither injective nor bijective.   "
},
{
  "id": "exercise-determining-injectivity-surjectivity-bijectivity-6",
  "level": "2",
  "url": "section-maps-and-functions.html#exercise-determining-injectivity-surjectivity-bijectivity-6",
  "type": "Exercise",
  "number": "1.2.4.12",
  "title": "",
  "body": "  Let and , and consider the following map from to : . Determine whether or not is injective, surjective, and\/or bijective.     is injective, surjective, and bijective.   "
},
{
  "id": "problem-non-commutativity-of-cartesian-products",
  "level": "2",
  "url": "section-maps-and-functions.html#problem-non-commutativity-of-cartesian-products",
  "type": "Problem",
  "number": "1.2.5.1",
  "title": "Non-commutativity of Cartesian products.",
  "body": " Non-commutativity of Cartesian products   Give examples of sets and so that .    If and , then .   "
},
{
  "id": "problem-existence-of-maps",
  "level": "2",
  "url": "section-maps-and-functions.html#problem-existence-of-maps",
  "type": "Problem",
  "number": "1.2.5.2",
  "title": "Existence of maps.",
  "body": " Existence of maps   Determine whether the following statement is true or false:  For any sets and , there is a map from to .  If the statement is true, prove it. If the statement is false, disprove it by providing a counterexample.    Consider your answers to .    Let and . As shown in , . In particular, no subset of can satisfy the totality condition, and so there are no maps from to .   "
},
{
  "id": "problem-non-commutativity-of-composition",
  "level": "2",
  "url": "section-maps-and-functions.html#problem-non-commutativity-of-composition",
  "type": "Problem",
  "number": "1.2.5.3",
  "title": "Non-commutativity of composition.",
  "body": " Non-commutativity of composition    Give examples of maps and so that the composition is well-defined but the composition is not.    Let , , and , and consider the maps and defined by and .  Since the codomain of is the domain of , the composition is well-defined. However, since the codomain of is not the domain of , the composition is not well-defined.      Give examples of maps and so that the compositions and are well-defined but .    Let , and consider the maps from to itself defined by Then , and so .    "
},
{
  "id": "problem-composition-and-injectivity-surjectivity-bijectivity",
  "level": "2",
  "url": "section-maps-and-functions.html#problem-composition-and-injectivity-surjectivity-bijectivity",
  "type": "Problem",
  "number": "1.2.5.4",
  "title": "Composition and injectivity\/surjectivity\/bijectivity.",
  "body": " Composition and injectivity\/surjectivity\/bijectivity   Let and be maps between sets , , and .     Prove that if and are injective, then so too is their composition .    Let , and suppose that . Then , and so the injectivity of implies that . Moreover, the injectivity of implies that . In summary, we have shown that for all inputs , if , then ; that is, is injective.      Prove that if and are surjective, then so too is their composition .    Let . Since is surjective, for some . Moreover, since is surjective, for some . Thus . In summary, we have shown that for every output , there is some input so that ; that is, is surjective.      Prove that if and are bijective, then so too is their composition .    Since and are bijective, they are both injective and surjective. (1) and (2) above not imply that their composition is both injective and surjective; that is, is bijective.      Prove that if the composition is injective, then so too is .    Prove the desired result by contraposition.    Suppose that is not injective. Then for some distinct inputs . Note that . Since but , is not injective.  In summary, we have shown that if is not injective, then is not injective. The contrapositive of this implication is the desired result: if is injective, then so is .      Prove that if the composition is surjective, then so too is .    Prove the desired result by contraposition.    Suppose that is not surjective. Then there is some so that for all . Note that for all , and so is not surjective.  In summary, we have shown that if is not surjective, then is not surjective. The contrapositive of this implication is the desired result: if is surjective, then so is .     Note that the above results are used in the proof of . In order to avoid circular reasoning, you should prove the above statements by using only the definitions of injectivity, surjectivity, and bijectivity (and not the alternative characterizations given by and ).   "
},
{
  "id": "problem-indexed-intersections-and-unions",
  "level": "2",
  "url": "section-maps-and-functions.html#problem-indexed-intersections-and-unions",
  "type": "Problem",
  "number": "1.2.5.5",
  "title": "Indexed intersections and unions.",
  "body": " Indexed intersections and unions   Let be a family of subsets of a set indexed by a set .     Prove that for any subset , if and only if for all indices , and if and only if for all indices .    First suppose that . Then for all , , and so for all indices . Thus for all indices .  Conversely, now suppose that for all indices , and let . Then for all indices , and so . We conclude that .  Now suppose that . Fix an index , and let . Then , and so . We conclude that , and note that this holds for all indices .  Conversely, now suppose that for all indices , and let . Then , and so for some index . Since , we have . We conclude that .      Prove that and for any set and surjection .    Let , and suppose first that for all indices . Then for all indices , and so for all such indices. Thus . Conversely, now suppose that for all indices . Since is surjective, this implies that for all indices . Thus , and so .  Now suppose that for some index . Since is surjective, for some index , and so . In particular, for some index , and so . Conversely, now suppose that for some index . Since is surjective, this implies that for some index . Thus , and so .      Prove that and for any subset .    Let , and suppose that . Then or for all indices . If , then for all indices , and so . On the other hand, if , then for all indices , and so for all indices ; that is, .  Conversely, now suppose that . Then for all indices . If , then for all indices , and so . We conclude that . In summary, we have shown that if and only if , and so .  Now suppose that . Then , and for some index . In particular, for some index , and so .  Conversely, now suppose that . Then for some index , and so and for some index . We conclude that . In summary, we have shown that if and only if , and so .      Prove that and for any subset .    Let , and suppose that . Then and . So for some index , and so for some index ; that is, .  Conversely, now suppose that . Then for some index , and so and for some index . In particular, , and so . In summary, we have shown that if and only if , and so .  Let , and suppose that . Then and . So for all indices , and so for all indices ; that is, .  Conversely, now suppose that . Then for all indices , and so and for all indices . In particular, , and so . In summary, we have shown that if and only if , and so .    "
},
{
  "id": "section-peano-arithmetic-and-the-natural-numbers",
  "level": "1",
  "url": "section-peano-arithmetic-and-the-natural-numbers.html",
  "type": "Section",
  "number": "1.3",
  "title": "Peano Arithmetic and the Natural Numbers [Skip]",
  "body": " Peano Arithmetic and the Natural Numbers [Skip]   In this section, we formally introduce the natural number system  . Also called the counting numbers and the whole numbers , the natural numbers form the simplest of the number systems; in fact, many people would date the advent of mathematics itself to the invention\/discovery of these numbers.    Axiomatizing the Natural Numbers   There are many nonequivalent formalizations and models of the natural number system, but the standard axiomatization is due to Giuseppe Peano in the 19th century. Peano arithmetic is non-constructive ; it gives a description of the natural number system but not a model. We won't introduce any specific model of the natural number system, but, rest assured, there are several. For our purposes, itself can be any set which conforms to the following characterization:    Natural numbers  Giuseppe Peano  natural number  Peano axioms  successor function  addition operation  natural operation       the set of natural numbers         the successor function         the addition operation         the multiplication operation         the standard ordering     The natural number system  is a nonempty set with an element , called zero , along with functions and , called the successor function and the addition and multiplication operations and a subset of the Cartesian product of with itself, called the standard ordering , which satisfy the following properties:   The successor  of any natural number is non-zero; that is for all natural numbers .    The successor function is injective; that is, for all natural numbers , if , then .     for all natural numbers .     for all natural numbers .     for all natural numbers .     for all natural numbers .    For all natural numbers , if and only if for some natural number .    Axiom of induction  For all subsets , if and only if it satisfies the following conditions:    .    For all natural numbers , if , then .      Typically, for all natural numbers we write and , and we write if and only if . The successor of is denoted . Likewise, the successor of is denoted , the successor of is denoted , and so on. We see that for all natural numbers . With these new notations, we may restate the Peano axioms as follows:    for all .    For all natural numbers , if , then .     for all natural numbers .     for all natural numbers .     for all natural numbers .     for all natural numbers .    For all natural numbers , if and only if for some natural number .    For all subsets , if and only if it satisfies the following conditions:    .    Axiom of induction  For all natural numbers , if , then .          Under the usual (and original) interpretation of the natural number system as characterizing quantities of discrete physical objects, the above rules (with the possible exception of the axiom of induction) may seem obviously true but also somewhat arbitrary. It is a fact, though we will not prove it here, that these axioms are independent of each other; it is impossible to derive one of the above statements from only the others. We hope that this, along with the results in this section about arithmetic, convince you that the above axiomatization is a good choice, in that it is efficient in the above sense and that it can be used to prove many arithmetical truths.   sequence First, however, we introduce some ubiquitous terminology and notation. A family of objects indexed by some subset is called a sequence . If the index set is of the form for some natural numbers , then we denote this family by . Similarly, if the index set is of the form for some natural number , then we denote this family by . These notations also apply to intersections and unions of sequences of sets indexed by subsets of of the above form.    is minimal   For all natural numbers , if , then .    We first observe that . Indeed, note that . Moreover, if , then . Thus by the axiom of induction.  Let be a natural number, and suppose that for some natural number . Then for some natural number . Suppose for a contradiction that for some natural number . Then , which contradicts the first Peano axiom. Thus . However, , and so ; that is, , and so .     Principle of strong induction  principle of strong induction   For all subsets , if and only if it satisfies the following conditions:    .    For all natural numbers , if for all so that , then .       Clearly satisfies the above conditions, and so it suffices to show that any subsets which satisfies these conditions is equal to . To that end, let be a subset which satisfies the above conditions, and consider the subset . Since the only so that is itself, and , we have that . Moreover if , then for all so that , and so by hypothesis. It remains to conclude that for all so that .  To that end, let , and suppose that . Then for some natural number . If , then . On the other hand, if , then the argument in the proof of implies that for some natural number . Thus , and so the injectivity of the successor function implies that ; that is, and so . Since for all so that , we conclude that .  In summary, we have shown that and that for all natural numbers , if , then . Thus by the axiom of induction. One can check that , and so .     The axiom of induction and form the basis for ubiquitous methods of proof called proof by induction and proof by strong induction , respectively. You will have the opportunity to practice constructing such proofs in the problems for this section.     Properties of Arithmetic   The axioms of Peano arithmetic actually imply a great deal about the properties of the natural number system. We will now state and prove a great deal of results about the successor function and the addition and multiplication operators. Many of these results will give us practice in the fundamental skill of proof by induction, and we will use these results implicitly for the rest of this text.    Associativity of addition    for all natural numbers .    Let be natural numbers. We proceed by induction on to show that .  Base case  If , then .    Inductive step  Now suppose for the inductive hypothesis that for some natural number , and note that .  We conclude that for all natural numbers .    One consequence of is that we may unambiguously parse expressions with multiple sums without the need of parentheses; for example,if are natural numbers, then the expression is well-defined, because . Going forward, we will make use of these expressions wherever it is possible to do so without obscuring the relevant arguments.   implies that the result of adding a finite number of natural numbers depends only on the order of the numbers from left to right, and not on the iterative structure of the summands induced by parentheses. In fact, the order of the summands does not matter either. In order to show this, it helps to notice the following two results about addition.   Addition by     for all natural numbers .     for all natural numbers by the Peano axioms, and so it suffices to show . We proceed by induction on .  Base case  If , then .    Inductive step  Now suppose for the inductive hypothesis that for some natural number , and note that .  We conclude that for all natural numbers .     Towards commutativity of addition    for all natural numbers .    By induction on .  Base case  If , then by .    Inductive step  Now suppose for the inductive hypothesis that for some natural number , and note that by .  We conclude that for all natural numbers .     Commutativity of addition    for all natural numbers .    Let be a natural number. We proceed by induction on .  Base case  If , then by .    Inductive step  Now suppose for the inductive hypothesis that for some natural number , and note that by and .  We conclude that for all natural numbers .     and together imply that, when adding natural numbers, neither the order of the summands nor the order of the addition operations performed matters. In order to see that analogous properties also hold for multiplication, we will require the following supporting results. Along the way, we will also prove the distributivity of multiplication over addition.   Multiplication by     and for all natural numbers .    For all natural numbers , by . Thus it suffices to prove that for all natural numbers . We proceed by induction on .  Base case  If , then .    Inductive step  Now suppose for the inductive hypothesis that for some natural number , and note that .  We conclude that for all natural numbers .     Left distributivity of multiplication over addition    for all natural numbers .    Let be natural numbers. We proceed by induction on .  Base case  If , then .    Inductive step  Now suppose for the inductive hypothesis that for some natural number , and note that by .  We conclude that for all natural numbers .     Associativity of multiplication    for all natural numbers .    Let be natural numbers. We proceed by induction on .  Base case  If , then .    Inductive step  Now suppose for the inductive hypothesis that for some natural number , and note that by .  We conclude that for all natural numbers .    Just as with addition, one consequence of is that we may unambiguously parse expressions with multiple products without the need of parentheses; for example,if are natural numbers, then the expression is well-defined, because . Going forward, we will make use of these expressions wherever it is possible to do so without obscuring the relevant arguments.   Right distributivity of multiplication over addition    for all natural numbers .    Let be natural numbers. We proceed by induction on .  Base case  If , then .    Inductive step  Now suppose for the inductive hypothesis that for some natural number , and note that by repeated applications of and .  We conclude that for all natural numbers .     Multiplication by     for all natural numbers .    By induction on .  Base case  If , then .    Inductive step  Now suppose for the inductive hypothesis that for some natural number , and note that .  We conclude that for all natural numbers .     Commutativity of multiplication    for all natural numbers .    Let be a natural number. We proceed by induction on .  Base case  If , then by .    Inductive step  Now suppose for the inductive hypothesis that for some natural number , and note that by   We conclude that for all natural numbers .     Cancellation of addition   For all natural numbers , addition by is injective; that is, for all natural numbers , if , then .    Let be natural numbers. We proceed by induction on .  Base case  If and , then     Inductive step  Now suppose for the inductive hypothesis that there is some natural number so that if , then . Note that if , then , and so by the injectivity of the successor function. Thus by the inductive hypothesis. In summary, we have shown that if , then .  We conclude that for all natural numbers , if , then .     A similar cancellation law exists for multiplication, but its proof will require some properties of the comparison of natural numbers via its standard ordering.     Properties of Comparison   The final component of Peano's axiomatization of the natural numbers is that of comparison. The standard ordering on the natural numbers has several important and familiar properties which we will now derive from first principles.    Comparison is a total order   Comparison of natural numbers has the following properties:   Reflexivity   for all natural numbers .    Antisymmetry  For all natural numbers , if and , then .    Transitivity  For all natural numbers , if and , then .    Totality  For all natural numbers , either or .         For all natural numbers , , so that .    Let be natural numbers, and suppose that and . Then and for some natural numbers . Note that , and so by ; that is, . now implies that , so that .    Let be natural numbers, and suppose that and . Then and for some natural numbers , and so . We conclude that .    Let be a natural number. We proceed by induction on .  Base case  If , then by , and so .    Inductive step  Now suppose for the inductive hypothesis that there is a natural number so that either or . If , then for some natural number , and so ; that is, .  Now suppose that , so that for some natural number . If , then , and so . On the other hand, if , then for some natural number by an argument in the proof of . Then , and so .  We conclude that for all natural numbers , either or .       Cancellation of multiplication   For all natural numbers , if , then addition by is injective; that is, for all natural numbers , if , then either or .    By induction on .  Base case  If , then , and so the desired conclusion holds for all natural numbers .    Inductive step  Now suppose for the inductive hypothesis that there is a natural number so that for all natural numbers , if , then either or . Let be natural numbers, and suppose that . Then , and so it suffices to show that .  To that end, note that (4) of implies that either or . Without loss of generality, we may suppose that , so that for some natural number . We observe that by , , , , and .  In particular, implies that , so that . We conclude by that , so that .  We conclude that for all natural numbers , either if , then either or .     Comparison and arithmetic   Let be natural numbers.   If and , then .    If and , then .         If and , then and for some natural numbers , and so . We conclude that .    If and , then and for some natural numbers , and so . We conclude that .      For ease of reference, we collect the above results (along with some immediate corollaries) in the following theorem.   Properties of Peano arithmetic  Peano arithmetic   Addition, multiplication, and comparison of natural numbers have the following properties:   Associativity of addition   for all natural numbers .    Commutativity of addition   for all natural numbers .    Additive identity   for all natural numbers .    Associativity of multiplication   for all natural numbers .    Commutativity of multiplication   for all natural numbers .    Multiplicative annihilation   for all natural numbers .    Multiplicative identity   for all natural numbers .    Distributivity of multiplication over addition   and for all natural numbers .    Reflexivity of comparison   for all natural numbers .    Antisymmetry of comparison  For all natural numbers , if and , then .    Transitivity of comparison  For all natural numbers , if and , then .    Totality of comparison  For all natural numbers , either or .    Compatibility of comparison and addition\/multiplication  For all natural numbers , if and , then and         Many of these properties of the arithmetic and comparison of natural numbers also extend to the arithmetic of the other classes of numbers we will consider, namely the integers, rational numbers, real numbers, and complex numbers.     In the next sections, we will generalize the properties of addition and multiplication and the order-theoretic properties of comparison of natural numbers and arrive at fundamental notions of finitary operations and relations , partial and total orders , and the .    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Problems   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these problems are available. However, these are provided in order to check your work. If you are unable to solve the above problems, discuss your questions with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-peano-arithmetic-and-the-natural-numbers-2-1",
  "level": "2",
  "url": "section-peano-arithmetic-and-the-natural-numbers.html#section-peano-arithmetic-and-the-natural-numbers-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "natural number system counting numbers whole numbers "
},
{
  "id": "subsection-axiomatizing-the-natural-numbers-2-1",
  "level": "2",
  "url": "section-peano-arithmetic-and-the-natural-numbers.html#subsection-axiomatizing-the-natural-numbers-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Peano arithmetic non-constructive "
},
{
  "id": "definition-natural-numbers",
  "level": "2",
  "url": "section-peano-arithmetic-and-the-natural-numbers.html#definition-natural-numbers",
  "type": "Definition",
  "number": "1.3.1",
  "title": "Natural numbers.",
  "body": " Natural numbers  Giuseppe Peano  natural number  Peano axioms  successor function  addition operation  natural operation       the set of natural numbers         the successor function         the addition operation         the multiplication operation         the standard ordering     The natural number system  is a nonempty set with an element , called zero , along with functions and , called the successor function and the addition and multiplication operations and a subset of the Cartesian product of with itself, called the standard ordering , which satisfy the following properties:   The successor  of any natural number is non-zero; that is for all natural numbers .    The successor function is injective; that is, for all natural numbers , if , then .     for all natural numbers .     for all natural numbers .     for all natural numbers .     for all natural numbers .    For all natural numbers , if and only if for some natural number .    Axiom of induction  For all subsets , if and only if it satisfies the following conditions:    .    For all natural numbers , if , then .      Typically, for all natural numbers we write and , and we write if and only if . The successor of is denoted . Likewise, the successor of is denoted , the successor of is denoted , and so on. We see that for all natural numbers . With these new notations, we may restate the Peano axioms as follows:    for all .    For all natural numbers , if , then .     for all natural numbers .     for all natural numbers .     for all natural numbers .     for all natural numbers .    For all natural numbers , if and only if for some natural number .    For all subsets , if and only if it satisfies the following conditions:    .    Axiom of induction  For all natural numbers , if , then .         "
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
  "id": "section-peano-arithmetic-and-the-natural-numbers-6-1",
  "level": "2",
  "url": "section-peano-arithmetic-and-the-natural-numbers.html#section-peano-arithmetic-and-the-natural-numbers-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "finitary operations relations partial total orders "
},
{
  "id": "section-finitary-operations-and-relations",
  "level": "1",
  "url": "section-finitary-operations-and-relations.html",
  "type": "Section",
  "number": "1.4",
  "title": "Finitary Operations and Relations",
  "body": " Finitary Operations and Relations   In this section, we will develop the notion of (finitary) operations and relations on sets. Intuitively, a finitary operation on a set is an assignment of an element of that set to some finite number of other elements, and a finitary relation on a set is a designation of certain groups of some finite number of elements as associated.    Products and Choice   Previously, we have used the mathematical convention of indexing to generalize the intersection and union of two sets. We may also use indexing to generalize the Cartesian product of two sets to construct products of arbitrary indexed families of sets. In this section, we will develop this generalized Cartesian product , and use it to introduce operations and relations on a set. Instead of containing ordered pairs of elements, our new Cartesian product consists of indexed families of elements.    Cartesian product  Cartesian product  Cartesian factor  projection       the Cartesian product of a family of sets          projection onto the th factor     Let be a family of subsets of a set , called (Cartesian) factors , indexed by a set .   Cartesian product  The Cartesian product  of this indexed family is the set of families of elements with the property that for all indices .    Projection  For each index , projection onto the th factor is the map is the map from the Cartesian product to the th factor defined by the formula .        Empty and singleton products      Empty product  What does a family indexed by the empty set look like? There is a unique map from the empty set to a set , and so there is only one such family of elements of indexed by the empty set . This unique indexed family is usually denoted . By the above remark, .    Singleton product  Similarly, a family of elements of a set indexed by a singleton set is uniquely determined by the image of the index . Such an indexed family is denoted . We usually act under the convention , so that .       It may seem intuitive or obvious that the Cartesian product of an indexed family of nonempty sets is itself nonempty. After all, one can specify an indexed family of elements of these sets just by choosing an element of each nonempty set. This notion of a choice of elements of nonempty sets gives the following axiom its name.   Axiom of choice  axiom of choice   Let be an indexed family of subsets of a set . If for all indices , then the Cartesian product is also non-empty.    We will take the as true for the remainder of this text. While seemingly too specific to be of much use, this axiom can be used to prove many useful results. In particular, we can use it to complete the characterization of invertibility given in .   Invertibility   Let be a map from a set to a set .   Left-invertibility   is left-invertible if and only if is injective or is empty.    Right-invertibility   is right-invertible if and only if is surjective.    Invertibility   is invertible if and only if is bijective.         This follows directly from (1) and (2) of .    The forward implication is (3) of . Thus we may suppose that is surjective. Then for each output , the pre-image is a non-empty subset of , and so the implies that the Cartesian product is a non-empty subset of . Choose an element , and note that for all , , so that ; that is, so that is a right inverse to . Hence is right-invertible.    This is (3) of .      One particularly useful kind of Cartesian product is obtained by taking all factors to be the same set. The resulting Cartesian powers will be used to define both finitary operations and finitary relations.   Cartesian power  Cartesian power       the th Cartesian power of a set      Let be a set and be a natural number. The th Cartesian power  of is the Cartesian product .     We will now move on to study the Cartesian powers of sets. Maps from the Cartesian power of a set to the set itself will be called finitary operations on that set, and subsets of the Cartesian power of a set will be called finitary relations on that set.     Finitary Operations   Informally, a finitary operation on a set is an assignment of its elements to all finite sequence of a certain length in that set. That is, a finitary operation on a set is a map from some finite Cartesian power of that set to the set itself. We will view a finitary operation (through the active characterization of what maps do) as a process which combines some fixed number of elements of a set into a new element.    Finitary operation  finitary operation  arity   Let be a set and be a natural number. A finitary operation of arity  (or more simply a  -ary operation ) is a map .     Finitary operations  nullary operation  unary operation  binary operation   The following are examples of finitary operations:   Nullary operation  A -ary operation (or more simply, a nullary operation ) on a set is just a map from to . Such a map is uniquely determined by the image of the unique element . In this way, we may view the nullary operations on as synonymous with the elements of .    Unary operation  A -ary operation (or more simply, a unary operation ) on a set is just a map . One example of such a unary operation on the natural numbers is the successor function .    Binary operation  A -ary operation (or more simply, a binary operation ) on a set is a map . Two examples of such binary operations on the natural numbers are the addition and multiplication operations .  Binary operations are usually denoted with symbols such as , , , , and . For a given binary operation , we write for all elements .       In many ways, algebra is the study of finitary operations on sets. Particularly emphasized in this study is that of binary operation on sets. We won't delve too deep into the study of binary operations, but we will introduce some nice properties which some binary operations may satisfy.   Commutativity; associativity  commutativity  associativity   Let be a binary operation on a set .   Commutativity   is called commutative if for all elements .    Associativity   is called associative if for all elements .        Commutative\/associative binary operations   The following are examples of commutativity and associativity in binary operations:   Arithmetic of natural numbers  Addition and multiplication are commutative and associative binary operations on by (1), (2), (4), and (5) of .    Set operations  Intersection and union are commutative and associative binary operations on the power set of a set by (2) and (3) of .    Composition of maps  Composition is an associative but non-commutative binary operation on the set of maps from a set to itself by and .    Exponentiation of natural numbers  Let be the exponentiation function defined by the formula ; that is, is defined recursively by the formulae and . Then is a binary operation on , but is neither commutative nor associative.             recursive summation notation         recursive product notation   Associative binary operations can be extended recursively to act on finite sequences of any length. For example, given a finite sequence of natural numbers , we write .   As in the case of finitary operations, we will introduce finitary relations of all arities, but we will emphasize binary relations in order to study congruences and order relations, which are ubiquitous throughout both classical and modern mathematics and which will recur throughout this text.     Finitary Relations   A finitary relation on a set is just a subset of some finite Cartesian power of the set. This subset is usually interpreted as distinguishing its elements certain finite sequences of elements of the set as important in some way.    Finitary relation  finitary relation  arity   Let be a set and be a natural number. A finitary relation of arity  (or more simply a  -ary relation ) is a subset .    We will view a finitary relation on a set as elevating specific finite sequences of elements of that set as distinguished.   Finitary relations  unary relation  binary relation   The following are examples of finitary relations:   Unary relation  In light of that , a -ary relation (or more simply, a unary relation ) on a set is just a subset of .    Binary relation  A -ary relation (or more simply, a binary relation ) on a set is a subset . Two examples of such binary relations are the containment relation on the power set of a set and the standard ordering of the natural numbers .  Just as there is a special notation for binary operations, there is a special relation for binary relations as well. Specifically, for a given binary relation on a set , we write to mean that .        Pullback of a finitary relation  pullback       the pullback of a finitary relation along a map      Let and be sets and be a natural number. The pullback  of an -ary relation on along a map is the -ary relation on defined by .     Restriction of a finitary relation  restriction       the restriction of a finitary relation to a subset      Let be a set and be a natural number. The restriction  of an -ary relation on to a subset is the pullback of along the inclusion map ; that is, .    One particularly nice type of binary relation is the equivalence relation . This is a generalization of the notion of equality, which has many of the salient properties of the equality relation. We will see that an equivalence relation partitions a set into disjoint subsets known as equivalence classes . When we consider more sophisticated structures than just sets, we will use equivalence relations to construct quotient objects, as is done in algebraic settings such as group theory or ring theory.   Equivalence relation  reflexivity  symmetry  transitivity  equivalence relation   Let be a binary relation on a set .   Reflexivity  The binary relation is called reflexive if for all elements .    Symmetry  The binary relation is called symmetric if for all elements , if , then .    Transitivity  The binary relation is called transitive if for all elements , if and , then .   A binary relation is called an equivalence relation if it is reflexive, symmetric, and transitive.     Pullbacks of equivalence relations   Let be a map from a set to a set , and consider a binary relation on .   Reflexivity  If is reflexive, then its pullback along is reflexive.    Symmetry  If is symmetric, then its pullback along is symmetric.    Transitivity  If is transitive, then its pullback along is transitive.   In particular, if is an equivalence relation on , then its pullback along is an equivalence relation on .      Let , and note that by the reflexivity of , and so ; that is, is reflexive.    Let , and suppose that . Then , and so by the symmetry of . In particular, , and so is symmetric.    Let , and suppose that and . Then and , and so by the transitivity of . In particular, , and so is transitive.      One of the most important properties of equivalence relations is that they partition sets into disjoint sets called equivalence classes .   Equivalence class; quotient set  equivalence class  quotient set       the equivalence class of under          the quotient of by      Let be an equivalence relation on a set .   Equivalence class  The equivalence class  of an element is the subset of defined by ; that is, is the set of elements which are equivalent to under the relation .    Quotient  The quotient  of by is the set of equivalence classes; that is, . The quotient map  is the map from to the quotient defined by the formula .  If the set is equipped with additional structure, then this structure might also descend to the quotient . In settings in which this is possible, we might distinguish between the quotient set  and more structured quotient objects.       As mentioned above, an equivalence relation on a given set partitions that set into pairwise disjoint equivalence classes.   Equivalence partition  partition   The equivalence classes of an equivalence relation on a set form a partition of ; that is, two equivalence classes are either equal or disjoint, and .    Each equivalence class is a subset of , and so . In order to show the reverse containment, let , and note that by reflexivity; that is, , and so . We conclude that .  It remains to show that two equivalence classes are either equal or disjoint. To that end, consider elements . First suppose that , and let . Then , and so transitivity implies that ; that is, .  In summary, we have shown that if , then . Symmetry implies that if , then , and so ; that is, if , then .  Conversely, now suppose that the equivalence classes and are not disjoint, so that for some element . Since and , and . We conclude by symmetry and transitivity that .     Equivalence relations are ubiquitous throughout mathematics, and we will work with them for the remainder of this text.     While this section has dealt with finitary operations and relations in broad generality, the vast majority of mathematics relevant to this text deals with binary operations and relations. In the next section, we will see another use for binary relations; that of ordering sets.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.    Indexed Cartesian products   Let , , and , and consider the Cartesian product .     Write down the Cartesian product in roster notation.    We have .      For each index , let be the projection map onto the th factor. Compute , , and .    We have .      Exponentiation of natural numbers   Let be the exponentiation operation defined by the formula ; that is, is defined recursively by the formulae and .     Compute and . Is exponentiation a commutative binary operation?     and . Since , exponentiation is non-commutative.      Compute and . Is exponentiation an associative binary operation?    We compute and . Since , exponentiation is non-associative.      Equivalence classes   Let . Write down all the equivalence classes for the given equivalence relation on in roster notation.     Consider the equivalence relation on defined by the condition that for all , if and only if the English words for and start with the same letter. Write down the equivalence classes in roster notation.    The equivalence classes are .     is the only element of beginning with Z, and so . is the only element of beginning with O, and so . , , and are the only elements of beginning with T, and so . and are the only elements of beginning with F, and so . and are the only elements of beginning with S, and so . is the only element of beginning with E, and so . Finally, is the only element of beginning with N, and so .      Consider the equivalence relation on defined by the condition that for all , if and only if the English words for and end with the same letter. Write down all the equivalence classes in roster notation.    The equivalence classes are .     and are the only elements of ending with O, and so . , , , and are the only elements of ending with E, and so . is the only element of ending with R, and so . is the only element of ending with X, and so . and are the only elements of ending with N, and so . is the only element of ending with T, and so .      Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Problems   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .    Revisiting commutativity\/associativity of Cartesian products   Recall from that there are sets and so that . Similarly, there are sets , , and so that .     Prove that there is a bijection between and .    Consider the maps and defined by the formulae and . We observe that and for all elements and , and so and ; that is, and are inverses, and therefore bijections by .      Prove that there is a bijection between and .    Consider the maps and defined by the formulae and . We observe that and for all elements , , and , and so and ; that is, and are inverses, and therefore bijections by .     While the sets and and the sets and are not equal, they may safely be identified via these bijections.     Cross products   The cross product  is the binary operation on -dimensional real coordinate space defined by the formula For this problem, you may assume all standard properties of the arithmetic of real numbers, even though we will not formally define until .     Determine whether or not the cross product on is commutative. Justify your answer.    Consider the vectors , , and . We note that and . Since , the cross product is non-commutative.      Determine whether or not the cross product on is associative. Justify your answer.    Consider the vectors , , and . We note that , , and . Together with the computations above in (a), we see that , and so the cross product is non-associative.      Generating equivalence relations   Let be a set.     Prove that the intersection of any indexed family of equivalence relations on is an equivalence relation on .    Let . Since for each index , the equivalence relation is reflexive, we have . Thus , and so is reflexive.  Now let , and suppose that . Then for all indices , and so for all such indices by symmetry. Thus , and so is symmetric.  Finally, let , and suppose that . Then for all indices , and so for all such indices by transitivity. Thus , and so is transitive. Since is reflexive, symmetric, and transitive, it is an equivalence relation on .     refinement  generated equivalence relation   Prove that for any binary relation on , there is a unique equivalence relation on which satisfies the following conditions:    is a refinement of ; that is, .     is coarser than any equivalence relation which refines  ; that is, for any equivalence relation on so that .       Denote by the set of equivalence relations on which contain , and let . By (a) above, is an equivalence relation on . Since for all , (a) of implies that ; that is, satisfies condition (1). On the other hand, for all , and so satisfies condition (2).  Uniqueness of follows from the fact that ; specifically, if an equivalence satisfies condition (1), then and so . If also satisfies condition (2), then , and so .     The unique equivalence relation on constructed in (b) above is called the equivalence relation generated by .     Universal property of quotients   Let be an equivalence relation on a set . A map from to a set is called - invariant if for all elements , if , then .  Prove that for every -invariant map , there is a map so that .    Let , and suppose that . Then , and so . We conclude that the map defined by the formula is well-defined. Moreover, we note that for all inputs , and so .     In-depth solutions to these problems are available. However, these are provided in order to check your work. If you are unable to solve the above problems, discuss your questions with classmates and\/or instructor rather than spoiling the answers.    "
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
  "id": "subsection-products-and-choice-2-1",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#subsection-products-and-choice-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "generalized Cartesian product "
},
{
  "id": "definition-cartesian-product-2",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#definition-cartesian-product-2",
  "type": "Definition",
  "number": "1.4.1",
  "title": "Cartesian product.",
  "body": " Cartesian product  Cartesian product  Cartesian factor  projection       the Cartesian product of a family of sets          projection onto the th factor     Let be a family of subsets of a set , called (Cartesian) factors , indexed by a set .   Cartesian product  The Cartesian product  of this indexed family is the set of families of elements with the property that for all indices .    Projection  For each index , projection onto the th factor is the map is the map from the Cartesian product to the th factor defined by the formula .      "
},
{
  "id": "convention-empty-and-singleton-products",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#convention-empty-and-singleton-products",
  "type": "Convention",
  "number": "1.4.2",
  "title": "Empty and singleton products.",
  "body": " Empty and singleton products      Empty product  What does a family indexed by the empty set look like? There is a unique map from the empty set to a set , and so there is only one such family of elements of indexed by the empty set . This unique indexed family is usually denoted . By the above remark, .    Singleton product  Similarly, a family of elements of a set indexed by a singleton set is uniquely determined by the image of the index . Such an indexed family is denoted . We usually act under the convention , so that .      "
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
  "body": " Invertibility   Let be a map from a set to a set .   Left-invertibility   is left-invertible if and only if is injective or is empty.    Right-invertibility   is right-invertible if and only if is surjective.    Invertibility   is invertible if and only if is bijective.         This follows directly from (1) and (2) of .    The forward implication is (3) of . Thus we may suppose that is surjective. Then for each output , the pre-image is a non-empty subset of , and so the implies that the Cartesian product is a non-empty subset of . Choose an element , and note that for all , , so that ; that is, so that is a right inverse to . Hence is right-invertible.    This is (3) of .     "
},
{
  "id": "subsection-products-and-choice-9",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#subsection-products-and-choice-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cartesian powers "
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
  "id": "subsection-products-and-choice-11-1",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#subsection-products-and-choice-11-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "finitary operations finitary relations "
},
{
  "id": "subsection-finitary-operations-2-1",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#subsection-finitary-operations-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "finitary operation "
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
  "body": " Finitary operations  nullary operation  unary operation  binary operation   The following are examples of finitary operations:   Nullary operation  A -ary operation (or more simply, a nullary operation ) on a set is just a map from to . Such a map is uniquely determined by the image of the unique element . In this way, we may view the nullary operations on as synonymous with the elements of .    Unary operation  A -ary operation (or more simply, a unary operation ) on a set is just a map . One example of such a unary operation on the natural numbers is the successor function .    Binary operation  A -ary operation (or more simply, a binary operation ) on a set is a map . Two examples of such binary operations on the natural numbers are the addition and multiplication operations .  Binary operations are usually denoted with symbols such as , , , , and . For a given binary operation , we write for all elements .      "
},
{
  "id": "definition-commutativity-associativity",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#definition-commutativity-associativity",
  "type": "Definition",
  "number": "1.4.8",
  "title": "Commutativity; associativity.",
  "body": " Commutativity; associativity  commutativity  associativity   Let be a binary operation on a set .   Commutativity   is called commutative if for all elements .    Associativity   is called associative if for all elements .      "
},
{
  "id": "example-commutative-associative-binary-operations",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#example-commutative-associative-binary-operations",
  "type": "Example",
  "number": "1.4.9",
  "title": "Commutative\/associative binary operations.",
  "body": " Commutative\/associative binary operations   The following are examples of commutativity and associativity in binary operations:   Arithmetic of natural numbers  Addition and multiplication are commutative and associative binary operations on by (1), (2), (4), and (5) of .    Set operations  Intersection and union are commutative and associative binary operations on the power set of a set by (2) and (3) of .    Composition of maps  Composition is an associative but non-commutative binary operation on the set of maps from a set to itself by and .    Exponentiation of natural numbers  Let be the exponentiation function defined by the formula ; that is, is defined recursively by the formulae and . Then is a binary operation on , but is neither commutative nor associative.      "
},
{
  "id": "subsection-finitary-relations-2-1",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#subsection-finitary-relations-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "finitary relation "
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
  "body": " Finitary relations  unary relation  binary relation   The following are examples of finitary relations:   Unary relation  In light of that , a -ary relation (or more simply, a unary relation ) on a set is just a subset of .    Binary relation  A -ary relation (or more simply, a binary relation ) on a set is a subset . Two examples of such binary relations are the containment relation on the power set of a set and the standard ordering of the natural numbers .  Just as there is a special notation for binary operations, there is a special relation for binary relations as well. Specifically, for a given binary relation on a set , we write to mean that .      "
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
  "body": "equivalence relation equivalence classes quotient "
},
{
  "id": "definition-equivalence-relation",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#definition-equivalence-relation",
  "type": "Definition",
  "number": "1.4.14",
  "title": "Equivalence relation.",
  "body": " Equivalence relation  reflexivity  symmetry  transitivity  equivalence relation   Let be a binary relation on a set .   Reflexivity  The binary relation is called reflexive if for all elements .    Symmetry  The binary relation is called symmetric if for all elements , if , then .    Transitivity  The binary relation is called transitive if for all elements , if and , then .   A binary relation is called an equivalence relation if it is reflexive, symmetric, and transitive.   "
},
{
  "id": "lemma-pullbacks-of-equivalence-relations",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#lemma-pullbacks-of-equivalence-relations",
  "type": "Lemma",
  "number": "1.4.15",
  "title": "Pullbacks of equivalence relations.",
  "body": " Pullbacks of equivalence relations   Let be a map from a set to a set , and consider a binary relation on .   Reflexivity  If is reflexive, then its pullback along is reflexive.    Symmetry  If is symmetric, then its pullback along is symmetric.    Transitivity  If is transitive, then its pullback along is transitive.   In particular, if is an equivalence relation on , then its pullback along is an equivalence relation on .      Let , and note that by the reflexivity of , and so ; that is, is reflexive.    Let , and suppose that . Then , and so by the symmetry of . In particular, , and so is symmetric.    Let , and suppose that and . Then and , and so by the transitivity of . In particular, , and so is transitive.     "
},
{
  "id": "subsection-finitary-relations-11",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#subsection-finitary-relations-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equivalence classes "
},
{
  "id": "definition-equivalence-class",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#definition-equivalence-class",
  "type": "Definition",
  "number": "1.4.16",
  "title": "Equivalence class; quotient set.",
  "body": " Equivalence class; quotient set  equivalence class  quotient set       the equivalence class of under          the quotient of by      Let be an equivalence relation on a set .   Equivalence class  The equivalence class  of an element is the subset of defined by ; that is, is the set of elements which are equivalent to under the relation .    Quotient  The quotient  of by is the set of equivalence classes; that is, . The quotient map  is the map from to the quotient defined by the formula .  If the set is equipped with additional structure, then this structure might also descend to the quotient . In settings in which this is possible, we might distinguish between the quotient set  and more structured quotient objects.      "
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
  "id": "section-finitary-operations-and-relations-6-1",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#section-finitary-operations-and-relations-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ordering "
},
{
  "id": "exercise-indexed-cartesian-products",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#exercise-indexed-cartesian-products",
  "type": "Problem",
  "number": "1.4.4.1",
  "title": "Indexed Cartesian products.",
  "body": " Indexed Cartesian products   Let , , and , and consider the Cartesian product .     Write down the Cartesian product in roster notation.    We have .      For each index , let be the projection map onto the th factor. Compute , , and .    We have .    "
},
{
  "id": "exercise-exponentiation-of-natural-numbers",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#exercise-exponentiation-of-natural-numbers",
  "type": "Problem",
  "number": "1.4.4.2",
  "title": "Exponentiation of natural numbers.",
  "body": " Exponentiation of natural numbers   Let be the exponentiation operation defined by the formula ; that is, is defined recursively by the formulae and .     Compute and . Is exponentiation a commutative binary operation?     and . Since , exponentiation is non-commutative.      Compute and . Is exponentiation an associative binary operation?    We compute and . Since , exponentiation is non-associative.    "
},
{
  "id": "exercise-equivalence-classes-3",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#exercise-equivalence-classes-3",
  "type": "Problem",
  "number": "1.4.4.3",
  "title": "",
  "body": "  Consider the equivalence relation on defined by the condition that for all , if and only if the English words for and start with the same letter. Write down the equivalence classes in roster notation.    The equivalence classes are .     is the only element of beginning with Z, and so . is the only element of beginning with O, and so . , , and are the only elements of beginning with T, and so . and are the only elements of beginning with F, and so . and are the only elements of beginning with S, and so . is the only element of beginning with E, and so . Finally, is the only element of beginning with N, and so .   "
},
{
  "id": "exercise-equivalence-classes-4",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#exercise-equivalence-classes-4",
  "type": "Problem",
  "number": "1.4.4.4",
  "title": "",
  "body": "  Consider the equivalence relation on defined by the condition that for all , if and only if the English words for and end with the same letter. Write down all the equivalence classes in roster notation.    The equivalence classes are .     and are the only elements of ending with O, and so . , , , and are the only elements of ending with E, and so . is the only element of ending with R, and so . is the only element of ending with X, and so . and are the only elements of ending with N, and so . is the only element of ending with T, and so .   "
},
{
  "id": "problem-revisiting-commutativity-associativity-of-cartesian-products",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#problem-revisiting-commutativity-associativity-of-cartesian-products",
  "type": "Problem",
  "number": "1.4.5.1",
  "title": "Revisiting commutativity\/associativity of Cartesian products.",
  "body": " Revisiting commutativity\/associativity of Cartesian products   Recall from that there are sets and so that . Similarly, there are sets , , and so that .     Prove that there is a bijection between and .    Consider the maps and defined by the formulae and . We observe that and for all elements and , and so and ; that is, and are inverses, and therefore bijections by .      Prove that there is a bijection between and .    Consider the maps and defined by the formulae and . We observe that and for all elements , , and , and so and ; that is, and are inverses, and therefore bijections by .     While the sets and and the sets and are not equal, they may safely be identified via these bijections.   "
},
{
  "id": "problem-cross-products",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#problem-cross-products",
  "type": "Problem",
  "number": "1.4.5.2",
  "title": "Cross products.",
  "body": " Cross products   The cross product  is the binary operation on -dimensional real coordinate space defined by the formula For this problem, you may assume all standard properties of the arithmetic of real numbers, even though we will not formally define until .     Determine whether or not the cross product on is commutative. Justify your answer.    Consider the vectors , , and . We note that and . Since , the cross product is non-commutative.      Determine whether or not the cross product on is associative. Justify your answer.    Consider the vectors , , and . We note that , , and . Together with the computations above in (a), we see that , and so the cross product is non-associative.    "
},
{
  "id": "problem-generating-equivalence-relations",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#problem-generating-equivalence-relations",
  "type": "Problem",
  "number": "1.4.5.3",
  "title": "Generating equivalence relations.",
  "body": " Generating equivalence relations   Let be a set.     Prove that the intersection of any indexed family of equivalence relations on is an equivalence relation on .    Let . Since for each index , the equivalence relation is reflexive, we have . Thus , and so is reflexive.  Now let , and suppose that . Then for all indices , and so for all such indices by symmetry. Thus , and so is symmetric.  Finally, let , and suppose that . Then for all indices , and so for all such indices by transitivity. Thus , and so is transitive. Since is reflexive, symmetric, and transitive, it is an equivalence relation on .     refinement  generated equivalence relation   Prove that for any binary relation on , there is a unique equivalence relation on which satisfies the following conditions:    is a refinement of ; that is, .     is coarser than any equivalence relation which refines  ; that is, for any equivalence relation on so that .       Denote by the set of equivalence relations on which contain , and let . By (a) above, is an equivalence relation on . Since for all , (a) of implies that ; that is, satisfies condition (1). On the other hand, for all , and so satisfies condition (2).  Uniqueness of follows from the fact that ; specifically, if an equivalence satisfies condition (1), then and so . If also satisfies condition (2), then , and so .     The unique equivalence relation on constructed in (b) above is called the equivalence relation generated by .   "
},
{
  "id": "problem-universal-property-of-quotients",
  "level": "2",
  "url": "section-finitary-operations-and-relations.html#problem-universal-property-of-quotients",
  "type": "Problem",
  "number": "1.4.5.4",
  "title": "Universal property of quotients.",
  "body": " Universal property of quotients   Let be an equivalence relation on a set . A map from to a set is called - invariant if for all elements , if , then .  Prove that for every -invariant map , there is a map so that .    Let , and suppose that . Then , and so . We conclude that the map defined by the formula is well-defined. Moreover, we note that for all inputs , and so .   "
},
{
  "id": "section-introduction-to-order-theory",
  "level": "1",
  "url": "section-introduction-to-order-theory.html",
  "type": "Section",
  "number": "1.5",
  "title": "Introduction to Order Theory",
  "body": " Introduction to Order Theory   In this section, we will investigate another class of binary relations, which can be used to establish a notion of an ordering on a set. Touchstone examples will be the standard ordering of the natural numbers, which is a total order , and set containment , which generally is only a partial order .    Preorders and Partial Orders   We have seen that a finitary relation on a set can be viewed as elevating its elements as distinguished finite sequences in that set. Some binary relations on a set may be interpreted in this way as establishing an ordering , with the first entries of each distinguished ordered pair preceding the second entries in this ordering.  What are the salient properties of the standard ordering of the natural numbers? We will see that, in order to establish a similar notion of ordering on a set, a given binary operation should satisfy similar properties. However, even if a binary operation satisfies some, but not all, of the desired properties, we will see that we can still interpret it as a weaker type of ordering relation. However, all ordering relations should, at the very least, satisfy reflexivity and transitivity. Such a reflexive and transitive binary operation is called a preorder .    Preorder  preorder  reflexivity  transitivity  preordered set  proset  ground set   A binary relation on a set is called a preorder if it is reflexive and transitive; that is, is a preorder if it satisfies the following conditions:   Reflexivity   for all elements .    Transitivity  For all elements , if and , then .   If is a preorder on a set , then the ordered pair is called a preordered set (or a proset ). In this case, one may refer to as the ground set of the preordered set .     Preorders from pullbacks   The pullback of the standard ordering on the natural numbers along a function on a set is a preorder on .    First let , and note that by (1) of . In particular, , and so is reflexive.  Now let , and suppose that and . Then and , and so by (3) of . In particular, , and so is transitive. Since is both reflexive and transitive, it is a preorder on .    It turns out that, at least relative to the standard ordering of the natural numbers , the defining properties of a preorder are still too weak to be of much use in the general case. After all, an equivalence relation is just a symmetric preorder, and there is no way of meaningfully assigning a notion of an ordering based on an equivalence relation. This is because an equivalence relation is symmetric; in order to consider an ordering based on a binary operation, we would want to avoid any symmetry at all. Therefore, we must require that an ordering relation satisfy stronger assumptions.   Partial order  partial order   A binary relation on a set is called a partial order if it satisfies the following conditions:   Reflexivity   for all elements .    Anti-symmetry  For all elements , if and , then .    Transitivity  For all elements , if and , then .   If is a partial order on a set , then the ordered pair is called a partially ordered set (or a poset ). In this case, one may refer to as the ground set of the partially ordered set .     Partial orders   The following are examples of partial orders on sets:   Standard ordering on the natural numbers  The standard ordering on the natural numbers is a partial order on by (1), (2), and (3) of .    Set containment  Containment is a partial order on the power set of a set by and .        At the end of this section, we will explore a property of partial orders called totality which distinguishes between our touchstone examples of the standard ordering of natural numbers and the containment of sets.     Boundedness and Extrema   Partial orders satisfy many of the properties of the standard ordering of the natural numbers. We may use these properties for inspiration in generalizing the definitions of many of the usual notions associated with an ordering, such as upper and lower bounds and maximal and minimal elements, to preordered sets. However, we will see that anti-symmetry (and sometimes even stronger assumptions) is needed in order to recover many of these desired results.    Boundedness  upper bound  lower bound  boundedness   Let be a subset of a preordered ordered set .   Upper bound  An element is called an upper bound for if for all elements . If such an upper bound for exists, then is called bounded from above in . Otherwise, if no such upper bound for exists, then is called unbounded from above .    Lower bound  An element is called a lower bound for if for all elements . If such a lower bound for exists, then is called bounded from below in . Otherwise, if no such upper bound for exists, then is called unbounded from below .   A subset is called bounded in if it is both bounded from above in and bounded from below in , and is called unbounded in otherwise if it is either unbounded from above in or unbounded from below in .     Unique extrema   Let be a subset of a partially ordered set . At most one element of is an upper bound for in , and at most one element of is a lower bound for in .    Let , and suppose first that and are upper bounds for in , so that and for all elements . In particular, and , and so by anti-symmetry.  Similarly, now suppose that and are lower bounds for in , so that and for all elements . In particular, and , and so by anti-symmetry.    We observe that the above proof of is strongly dependent on the anti-symmetry of the partial order in question. Indeed, there is no analogous result for preordered sets.   Extrema  maximum  minimum  extremum       the maximum of          the minimum of      Let be a subset of a partially ordered set .   Maximum  If there is an element of which is an upper bound for in , then this unique element is called the maximum of and is denoted .    Minimum  If there is an element of which is a lower bound for in , then this unique element is called the minimum of and is denoted .   Together, maxima and minima are called extrema .    The uniqueness of extrema in partially ordered sets is one way in which partial orders resemble the standard ordering of the natural number system. However, unlike in the standard ordering of the natural number system, there is in general a distinction between extrema, which are defined above, and extremal elements , which are defined below.   Extremal element  maximal element  minimal element  extremal element   Let be a subset of a partially ordered set .   Maximal element  An element is called maximal in if for all elements , if , then .    Minimal element  An element is called minimal in if for all elements , if , then .   Together, maximal and minimal elements are called extremal elements .     Extrema and extremal elements   The following are examples of extrema and extremal elements:   Standard ordering on the natural numbers  The minimum of the natural numbers is , which is the unique minimal element. However, has no maximum or maximal element.    Set containment  Consider set containment on the power set of a set . has minimum and maximum and , which are also the unique minimal and maximal elements, respectively.    Now consider set containment on the set of proper non-empty subsets of the set ; that is, . Then has no maximum or minimum, but , , and are minimal elements, and , , and are maximal elements.        Extrema are extremal elements   Let be a subset of a partially ordered set . If has a maximum, then is the unique maximal element of . If has a minimum, then is the unique minimal element of .    First suppose that has a maximum. Let , and suppose that . Of course , and so anti-symmetry implies that ; that is, is maximal in .  On the other hand, now consider a maximal element . Since , the maximality of implies that .  Now suppose that has a minimum. Let , and suppose that . Of course , and so anti-symmetry implies that ; that is, is minimal in .  On the other hand, now consider a minimal element . Since , the minimality of implies that .     The distinction between extrema and extremal elements is one way in which more general partial orders differ from the standard ordering of the natural numbers. However, this subtlety does not arise in all partial orders. We will shortly explore a class of partial orders called total orders for which the aforementioned distinction between extrema and extremal elements does not exist.     Comparability and Total Orders   The fact that the converse of does not hold in general stems from the fact that in a partially ordered set, not all pairs of elements are comparable. That is, given two elements of a partially ordered set, it is not necessarily true that one will precede the other.    Comparability  comparability   Two elements in a partially ordered set are called comparable if either or , and incomparable otherwise.    Any two natural numbers are comparable in the standard ordering. However, this is not true for partially ordered sets in general. As an example, consider the subsets and of the natural numbers . One can check that and , so that and are incomparable in the power set of the natural numbers . So partially ordered sets may have elements which are incomparable. This is the reason why partial orders are called partial ; partial orders in which all elements are comparable are called total .   Total order  totality  total order  totally ordered set   A binary relation on a set is called a total order if it is anti-symmetric and transitive and each pair of elements is comparable; that is, is a total order if it satisfies the following conditions:   Antisymmetry  For all elements , if and , then .    Transitivity  For all elements , if and , then .    Totality  For all elements , either or .   If is a total order on a set , then the ordered pair is called a totally ordered set .     Total order   The standard ordering on the natural numbers is a total order by (2), (3), and (4) of .     Total orders are partial orders   Every total order on a set is a partial order on .    Let be a total order on a set . Since is antisymmetric and transitive, it remains to show that is reflexive. To that end, let , and note that totality implies that either or ; that is is reflexive (and hence a partial order on ).    The careful reader might object that the above definition of total orders neglected to require reflexivity. In fact, this property follows from the other properties of total orders.   Extremal elements are extrema in totally ordered sets   Let be a total order on a set .   If contains a maximal element , then .    If contains a minimal element , then .         Suppose that is a maximal element, and let . Totality implies that or . If , then maximality implies that , so that by reflexivity. Thus for all , and so .    Now suppose that is a minimal element, and let . Totality implies that or . If , then minimality implies that , so that by reflexivity. Thus for all , and so .      We end with an important property of the standard ordering on the natural numbers related to the axiom of induction.   Well-ordering principle   Every non-empty subset of the natural numbers has a minimum.    Let be a subset of the natural numbers , and suppose that does not have a minimum. We proceed by strong induction on to show that .   Base case  Suppose that , and suppose for a contradiction that . Since for all natural numbers by and (2) of , then . This contradiction implies that .    Inductive step  Suppose for the inductive hypothesis that there is some natural number so that for all natural numbers so that . Suppose for a contradiction that , and let . Totality implies that either or . The inductive hypothesis implies that , so that .  So for some natural number . If , then , and so . Thus for some natural number , and so . In summary, we have shown that for all , so that . This contradiction implies that .   We conclude that for all natural numbers , and so .     The is sometimes taken to be an axiom and sometimes derived from the axiom of induction as in the above proof. In fact, these results are logically equivalent, as one can derive the axiom of induction from the .     We will revisit ordering relations in , when we extend the standard ordering on the natural numbers to many of the extensions of the natural number system which we construct.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.    Identifying partial and total orders   Determine whether or not the given preorder is a partial order. If the preorder is a partial order, determine whether or not it is total.     Let be the preorder on the set defined by . Determine whether or not is a partial order on . If so, determine whether or not it is total.     is not a partial order.    We observe that , but . Thus is not anti-symmetric, and so is not a partial order.      Let be the preorder on the set of all people (living or dead) defined so that for all people , if and only if either is either or an ancestor of . Determine whether or not is a partial order on . If so, determine whether or not it is total.     is a partial order but not a total order.    Let be people, and suppose that and . If and are different people, then it is not possible for each to be the ancestor of the other (since ancestors are born strictly before their descendants). Thus and are the same person. We conclude that the preorder is anti-symmetric and therefore a partial order.  However, is not a total order, since for example my siblings and I are not comparable. For example, my sister is not my ancestor, and I am not my sister's ancestor.      Let be the preorder on the set of all circles in the Cartesian plane so that for all circles , if and only if the diameter of is at most the diameter of . Determine whether or not is a partial order on . If so, determine whether or not it is total.     is not a partial order.    Since there are distinct circles with the same diameter, is not anti-symmetric, and therefore is not a partial order.      Bounds   Determine whether or not the following subsets of the partially ordered set are bounds for the given element.     Which of the following are upper bounds for the set in the partially ordered set ?                                                  Which of the following are lower bounds for the set in the partially ordered set ?                                                  Boundedness   Determine the boundedness of the following subsets of the totally ordered set .     Which of the following subsets of the totally ordered set are bounded from below?                                           Which of the following subsets of the totally ordered set are bounded from above?                                           Which of the following subsets of the totally ordered set are bounded?                                           Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Problems   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .    Order by divisibility   Consider the binary relation on the natural numbers defined so that for all natural numbers , if and only if for some natural number ; that is, if and only if is a multiple of .     Prove that is a partial order on the set of natural numbers.    We must prove that the binary relation is reflexive, anti-symmetric, and transitive. To that end, first let be a natural number, and note that . Thus , and so the binary relation is reflexive.  Now let be natural numbers, and suppose that and . Then and for some natural numbers . If , then . On the other hand, if , then we observe that , and so implies that . Since are natural numbers, we must have , so that . In summary, we have shown that if and , then . Thus the binary relation is anti-symmetric  Finally, let be natural numbers, and suppose that and . Then and for some natural numbers , and so . Thus the binary relation is transitive.  Since the binary relation is reflexive, anti-symmetric, and transitive, it is a partial order on .      Is the binary relation a total order on ? Justify your answer.    No, the binary relation is not a total order on , since for example and .      What are the extrema of the partially ordered set ?    For all natural numbers , and , so that . Thus and are the minimum and maximum of the partially ordered set , respectively.      We will abuse notation and denote the restriction of to the set by as well. What are the extremal elements of the partially ordered set ? Are these extremal elements extrema?    Let , and note that but . Thus there are no maximal elements of the partially ordered set .  Conversely, let be a prime number. Since the only natural number divisors of are and , is a minimal element of the partially ordered set . On the other hand, any composite natural number has proper divisors, and so is not minimal.      Extremal subsets   Find the extremal elements of the partially ordered set .    Denote by the partially ordered set . For all natural numbers , the only subsets of the set are and itself. Thus is minimal in . On the other hand, any proper subset of which contains at least two natural numbers has a proper non-empty subset, and so is not minimal in .  For all natural numbers , the only subsets of which contain are and itself. Thus is maximal in . On the other hand, any non-empty subset of which misses at least two natural numbers is contained in a strictly larger proper subset, and so is not maximal in .     Opposite of an order  opposite   The opposite  of a binary relation on a set is the binary relation defined by .     Prove that the opposite of a preorder is a preorder.    Let be a preorder on a set , and denote by the opposite. We will show that the binary operation is reflexive and transitive. To that end, first let . The reflexivity of implies that , and so . Thus the binary relation is reflexive.  Now let , and suppose that and . Then and , and so the transitivity of implies that . Thus , and so the binary relation is transitive.  Since the binary relation is reflexive and transitive, it is a preorder on .      Prove that the opposite of a partial order is a partial order.    Let be a partial order on a set , and denote by the opposite. Since is a preorder, is a preorder on by (a) above. Thus is reflexive and transitive, and so it remains to show that is anti-symmetric.  To that end, let , and suppose that both and . Then and , and so the anti-symmetry of implies that . Thus is anti-symmetric.  Since the binary relation is reflexive, anti-symmetric, and transitive, it is a partial order on .      Prove that the opposite of a total order is a total order.    Let be a total order on a set , and denote by the opposite. Since is a partial order, is a partial order on by (b) above. Thus is reflexive, anti-symmetric, and transitive, and so it remains to show that is total. To that end, let . The totality of implies that either or . Thus and , and so the binary relation is total.  Since is anti-symmetric, transitive, and total, it is a total order on .      Orders from pullbacks    Prove that the pullback of a preorder is a preorder.    You may find it useful to review the proof of .    asdf      Prove that the pullback of a partial order on a set along a map is a partial order on if and only if is injective.    asdf      Is the pullback of a total order along an injective map necessarily a total order? If so, prove it. If not, provide a counterexample.    asdf      In-depth solutions to these problems are available. However, these are provided in order to check your work. If you are unable to solve the above problems, discuss your questions with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-introduction-to-order-theory-2-1",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#section-introduction-to-order-theory-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ordering total order partial order "
},
{
  "id": "subsection-preorders-and-partial-orders-2-1",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#subsection-preorders-and-partial-orders-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ordering "
},
{
  "id": "subsection-preorders-and-partial-orders-2-2",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#subsection-preorders-and-partial-orders-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "preorder "
},
{
  "id": "definition-preorder",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#definition-preorder",
  "type": "Definition",
  "number": "1.5.1",
  "title": "Preorder.",
  "body": " Preorder  preorder  reflexivity  transitivity  preordered set  proset  ground set   A binary relation on a set is called a preorder if it is reflexive and transitive; that is, is a preorder if it satisfies the following conditions:   Reflexivity   for all elements .    Transitivity  For all elements , if and , then .   If is a preorder on a set , then the ordered pair is called a preordered set (or a proset ). In this case, one may refer to as the ground set of the preordered set .   "
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
  "body": " Partial order  partial order   A binary relation on a set is called a partial order if it satisfies the following conditions:   Reflexivity   for all elements .    Anti-symmetry  For all elements , if and , then .    Transitivity  For all elements , if and , then .   If is a partial order on a set , then the ordered pair is called a partially ordered set (or a poset ). In this case, one may refer to as the ground set of the partially ordered set .   "
},
{
  "id": "example-partial-orders",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#example-partial-orders",
  "type": "Example",
  "number": "1.5.4",
  "title": "Partial orders.",
  "body": " Partial orders   The following are examples of partial orders on sets:   Standard ordering on the natural numbers  The standard ordering on the natural numbers is a partial order on by (1), (2), and (3) of .    Set containment  Containment is a partial order on the power set of a set by and .      "
},
{
  "id": "subsection-preorders-and-partial-orders-8-1",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#subsection-preorders-and-partial-orders-8-1",
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
  "body": " Boundedness  upper bound  lower bound  boundedness   Let be a subset of a preordered ordered set .   Upper bound  An element is called an upper bound for if for all elements . If such an upper bound for exists, then is called bounded from above in . Otherwise, if no such upper bound for exists, then is called unbounded from above .    Lower bound  An element is called a lower bound for if for all elements . If such a lower bound for exists, then is called bounded from below in . Otherwise, if no such upper bound for exists, then is called unbounded from below .   A subset is called bounded in if it is both bounded from above in and bounded from below in , and is called unbounded in otherwise if it is either unbounded from above in or unbounded from below in .   "
},
{
  "id": "lemma-unique-extrema",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#lemma-unique-extrema",
  "type": "Lemma",
  "number": "1.5.6",
  "title": "Unique extrema.",
  "body": " Unique extrema   Let be a subset of a partially ordered set . At most one element of is an upper bound for in , and at most one element of is a lower bound for in .    Let , and suppose first that and are upper bounds for in , so that and for all elements . In particular, and , and so by anti-symmetry.  Similarly, now suppose that and are lower bounds for in , so that and for all elements . In particular, and , and so by anti-symmetry.   "
},
{
  "id": "definition-extrema",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#definition-extrema",
  "type": "Definition",
  "number": "1.5.7",
  "title": "Extrema.",
  "body": " Extrema  maximum  minimum  extremum       the maximum of          the minimum of      Let be a subset of a partially ordered set .   Maximum  If there is an element of which is an upper bound for in , then this unique element is called the maximum of and is denoted .    Minimum  If there is an element of which is a lower bound for in , then this unique element is called the minimum of and is denoted .   Together, maxima and minima are called extrema .   "
},
{
  "id": "subsection-boundedness-and-extrema-7",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#subsection-boundedness-and-extrema-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "extremal elements "
},
{
  "id": "definition-extremal-element",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#definition-extremal-element",
  "type": "Definition",
  "number": "1.5.8",
  "title": "Extremal element.",
  "body": " Extremal element  maximal element  minimal element  extremal element   Let be a subset of a partially ordered set .   Maximal element  An element is called maximal in if for all elements , if , then .    Minimal element  An element is called minimal in if for all elements , if , then .   Together, maximal and minimal elements are called extremal elements .   "
},
{
  "id": "example-extrema-and-extremal-elements",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#example-extrema-and-extremal-elements",
  "type": "Example",
  "number": "1.5.9",
  "title": "Extrema and extremal elements.",
  "body": " Extrema and extremal elements   The following are examples of extrema and extremal elements:   Standard ordering on the natural numbers  The minimum of the natural numbers is , which is the unique minimal element. However, has no maximum or maximal element.    Set containment  Consider set containment on the power set of a set . has minimum and maximum and , which are also the unique minimal and maximal elements, respectively.    Now consider set containment on the set of proper non-empty subsets of the set ; that is, . Then has no maximum or minimum, but , , and are minimal elements, and , , and are maximal elements.      "
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
  "id": "subsection-boundedness-and-extrema-11-1",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#subsection-boundedness-and-extrema-11-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "total orders "
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
  "id": "exercise-identifying-partial-and-total-orders-3",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#exercise-identifying-partial-and-total-orders-3",
  "type": "Problem",
  "number": "1.5.4.1",
  "title": "",
  "body": "  Let be the preorder on the set defined by . Determine whether or not is a partial order on . If so, determine whether or not it is total.     is not a partial order.    We observe that , but . Thus is not anti-symmetric, and so is not a partial order.   "
},
{
  "id": "exercise-identifying-partial-and-total-orders-4",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#exercise-identifying-partial-and-total-orders-4",
  "type": "Problem",
  "number": "1.5.4.2",
  "title": "",
  "body": "  Let be the preorder on the set of all people (living or dead) defined so that for all people , if and only if either is either or an ancestor of . Determine whether or not is a partial order on . If so, determine whether or not it is total.     is a partial order but not a total order.    Let be people, and suppose that and . If and are different people, then it is not possible for each to be the ancestor of the other (since ancestors are born strictly before their descendants). Thus and are the same person. We conclude that the preorder is anti-symmetric and therefore a partial order.  However, is not a total order, since for example my siblings and I are not comparable. For example, my sister is not my ancestor, and I am not my sister's ancestor.   "
},
{
  "id": "exercise-identifying-partial-and-total-orders-5",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#exercise-identifying-partial-and-total-orders-5",
  "type": "Problem",
  "number": "1.5.4.3",
  "title": "",
  "body": "  Let be the preorder on the set of all circles in the Cartesian plane so that for all circles , if and only if the diameter of is at most the diameter of . Determine whether or not is a partial order on . If so, determine whether or not it is total.     is not a partial order.    Since there are distinct circles with the same diameter, is not anti-symmetric, and therefore is not a partial order.   "
},
{
  "id": "exercise-bounds-3",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#exercise-bounds-3",
  "type": "Problem",
  "number": "1.5.4.4",
  "title": "",
  "body": "  Which of the following are upper bounds for the set in the partially ordered set ?                                               "
},
{
  "id": "exercise-bounds-4",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#exercise-bounds-4",
  "type": "Problem",
  "number": "1.5.4.5",
  "title": "",
  "body": "  Which of the following are lower bounds for the set in the partially ordered set ?                                               "
},
{
  "id": "exercise-boundedness-3",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#exercise-boundedness-3",
  "type": "Problem",
  "number": "1.5.4.6",
  "title": "",
  "body": "  Which of the following subsets of the totally ordered set are bounded from below?                                        "
},
{
  "id": "exercise-boundedness-4",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#exercise-boundedness-4",
  "type": "Problem",
  "number": "1.5.4.7",
  "title": "",
  "body": "  Which of the following subsets of the totally ordered set are bounded from above?                                        "
},
{
  "id": "exercise-boundedness-5",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#exercise-boundedness-5",
  "type": "Problem",
  "number": "1.5.4.8",
  "title": "",
  "body": "  Which of the following subsets of the totally ordered set are bounded?                                        "
},
{
  "id": "problem-order-by-divisibility",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#problem-order-by-divisibility",
  "type": "Problem",
  "number": "1.5.5.1",
  "title": "Order by divisibility.",
  "body": " Order by divisibility   Consider the binary relation on the natural numbers defined so that for all natural numbers , if and only if for some natural number ; that is, if and only if is a multiple of .     Prove that is a partial order on the set of natural numbers.    We must prove that the binary relation is reflexive, anti-symmetric, and transitive. To that end, first let be a natural number, and note that . Thus , and so the binary relation is reflexive.  Now let be natural numbers, and suppose that and . Then and for some natural numbers . If , then . On the other hand, if , then we observe that , and so implies that . Since are natural numbers, we must have , so that . In summary, we have shown that if and , then . Thus the binary relation is anti-symmetric  Finally, let be natural numbers, and suppose that and . Then and for some natural numbers , and so . Thus the binary relation is transitive.  Since the binary relation is reflexive, anti-symmetric, and transitive, it is a partial order on .      Is the binary relation a total order on ? Justify your answer.    No, the binary relation is not a total order on , since for example and .      What are the extrema of the partially ordered set ?    For all natural numbers , and , so that . Thus and are the minimum and maximum of the partially ordered set , respectively.      We will abuse notation and denote the restriction of to the set by as well. What are the extremal elements of the partially ordered set ? Are these extremal elements extrema?    Let , and note that but . Thus there are no maximal elements of the partially ordered set .  Conversely, let be a prime number. Since the only natural number divisors of are and , is a minimal element of the partially ordered set . On the other hand, any composite natural number has proper divisors, and so is not minimal.    "
},
{
  "id": "problem-extremal-subsets",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#problem-extremal-subsets",
  "type": "Problem",
  "number": "1.5.5.2",
  "title": "Extremal subsets.",
  "body": " Extremal subsets   Find the extremal elements of the partially ordered set .    Denote by the partially ordered set . For all natural numbers , the only subsets of the set are and itself. Thus is minimal in . On the other hand, any proper subset of which contains at least two natural numbers has a proper non-empty subset, and so is not minimal in .  For all natural numbers , the only subsets of which contain are and itself. Thus is maximal in . On the other hand, any non-empty subset of which misses at least two natural numbers is contained in a strictly larger proper subset, and so is not maximal in .   "
},
{
  "id": "problem-opposite-of-an-order",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#problem-opposite-of-an-order",
  "type": "Problem",
  "number": "1.5.5.3",
  "title": "Opposite of an order.",
  "body": " Opposite of an order  opposite   The opposite  of a binary relation on a set is the binary relation defined by .     Prove that the opposite of a preorder is a preorder.    Let be a preorder on a set , and denote by the opposite. We will show that the binary operation is reflexive and transitive. To that end, first let . The reflexivity of implies that , and so . Thus the binary relation is reflexive.  Now let , and suppose that and . Then and , and so the transitivity of implies that . Thus , and so the binary relation is transitive.  Since the binary relation is reflexive and transitive, it is a preorder on .      Prove that the opposite of a partial order is a partial order.    Let be a partial order on a set , and denote by the opposite. Since is a preorder, is a preorder on by (a) above. Thus is reflexive and transitive, and so it remains to show that is anti-symmetric.  To that end, let , and suppose that both and . Then and , and so the anti-symmetry of implies that . Thus is anti-symmetric.  Since the binary relation is reflexive, anti-symmetric, and transitive, it is a partial order on .      Prove that the opposite of a total order is a total order.    Let be a total order on a set , and denote by the opposite. Since is a partial order, is a partial order on by (b) above. Thus is reflexive, anti-symmetric, and transitive, and so it remains to show that is total. To that end, let . The totality of implies that either or . Thus and , and so the binary relation is total.  Since is anti-symmetric, transitive, and total, it is a total order on .    "
},
{
  "id": "problem-orders-from-pullbacks",
  "level": "2",
  "url": "section-introduction-to-order-theory.html#problem-orders-from-pullbacks",
  "type": "Problem",
  "number": "1.5.5.4",
  "title": "Orders from pullbacks.",
  "body": " Orders from pullbacks    Prove that the pullback of a preorder is a preorder.    You may find it useful to review the proof of .    asdf      Prove that the pullback of a partial order on a set along a map is a partial order on if and only if is injective.    asdf      Is the pullback of a total order along an injective map necessarily a total order? If so, prove it. If not, provide a counterexample.    asdf    "
},
{
  "id": "section-cardinality-and-countability",
  "level": "1",
  "url": "section-cardinality-and-countability.html",
  "type": "Section",
  "number": "1.6",
  "title": "Cardinality and Countability [SKIP]",
  "body": " Cardinality and Countability [SKIP]   In this section, we define a notion of the size of a set called cardinality . The cardinality of a set is a generalization of the number of elements of a set which contains only finitely many elements based on the notion of bijections. First, we will develop these notions for finite sets and then extend them to infinite sets. At first glance, it may seem that there is essentially only one kind of infinite set. We will show that this is not the case; in fact, there are infinitely many sizes of infinite sets with respect to this notion of cardinality.    Finiteness   Before we brave the unintuitive mess which is the realm of infinite sets, we will rigorously develop a notion of size for sets which contain only finitely many elements. Like in the infinite case, these finite cardinalities will be based on bijections.    Injections of finite sets   For any natural numbers , there exists an injective map if and only if .    If , then , and so the inclusion map is an injective map from to . So it suffices to show the reverse implication.  To that end, consider the subset of the natural numbers . If suffices to show that . To that end, we first note that for all natural numbers , so that .  Now let be a natural number, and suppose that . Then there is a natural number so that and an injective function . We note that , since there are no functions from a non-empty set to the empty set . Thus for some natural number .  If , then , and so . It therefore suffices to construct an injective function . To that end, fix a bijection so that , and let be the function defined by the formula . Since and are injective, is injective by (a) of . We conclude that .  In summary, we have shown that and for all natural numbers , if , then . These conclusions are equivalent to and for all natural numbers , if , then . We conclude that by the axiom of induction, and so .     Finite cardinality is well-defined   For any set , if there are natural numbers and bijections and , then .    Under the given assumptions, and are injective functions by (a) of . now implies that and , and so by (2) of .     Finiteness; cardinality  finite  cardinality  infinite       the cardinality of      A set is called finite if there is a natural number and a bijection , in which case is uniquely defined by this property and is called the cardinality of and denoted . A set is called infinite if no such number and bijection exist.     Maps and cardinality   Let be a map from a set to a set .   If is injective and is finite, then is finite and .    If is surjective and is finite, then is finite and .    If is bijective and either or is finite, then both and are finite and .            Text after the last subdivision.     Cardinal Comparison   Text before the first subdivision.    Text after the last subdivision.     Countability   Text before the first subdivision.    Text after the last subdivision.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available in . However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Problems   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available in . However, these are provided in order to check your work. If you are unable to solve the above problems, discuss your questions with classmates and\/or instructor rather than spoiling the answers.    "
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
  "id": "section-the-integers-and-the-rational-numbers",
  "level": "1",
  "url": "section-the-integers-and-the-rational-numbers.html",
  "type": "Section",
  "number": "2.1",
  "title": "The Integers and the Rational Numbers [SKIP]",
  "body": " The Integers and the Rational Numbers [SKIP]   Text before the first subsection.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available in . However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Problems   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these problems are available in . However, these are provided in order to check your work. If you are unable to solve the above problems, discuss your questions with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-constructing-the-real-numbers",
  "level": "1",
  "url": "section-constructing-the-real-numbers.html",
  "type": "Section",
  "number": "2.2",
  "title": "Constructing the Real Numbers",
  "body": " Constructing the Real Numbers   In this section, we construct the real number system  by Dedekind cuts , and we explore the resultant properties of arithmetic and comparison. However, we will find the existence of such a formal construction and its properties more useful than the particular details of the construction itself, and we will shortly leave behind the perspective suggested by our construction.    Cutting the Rational Numbers   So far, our progression through the standard number systems has proceeded in order of containment. Every time we have expanded our perspective to consider larger number systems, it has resulted in only the acquisition of new desirable properties. This is an artefact of our focus on the analytical rather than say the number-theoretical; there are for example incredibly interesting properties of the natural numbers and the integers which are lost in the jump to the rational numbers .  However, we have yet to see any deficiencies with the rational number system which would motivate seeking an extension. These deficiencies exist, and we will see in and later in the benefits in working in the real numbers  . As a brief example, we note that can be written as a particular type of disjoint union , where . are defined by strict inequalities. This decomposition of is an example of a Dedekind cut , and we will see that such a decomposition of cannot exist.    Dedekind cut  dedekind cut       the set of real numbers     A proper, non-empty subset of the rational numbers is called a Dedekind cut if it satisfies the following conditions:   For all rational numbers , if and , then .     does not have a maximum; that is, for all elements , there is an element so that .   The set of Dedekind cuts is denoted .     Dedekind cuts  rational Dedekind cut       the rational Dedekind cut associated to      For each rational number , consider the subset of the rational numbers . We observe that is a proper and non-empty subset of , since it contains but not itself. Moreover, for all rational numbers , if and , then , and so . Finally, for all elements , we observe that , so that . In summary, we have shown that associated to each rational number is a Dedekind cut .    We will see that the above construction realizes the rational numbers as a subset of the set of Dedekind cuts. The Dedekind cuts which arise in this manner will be called rational . We will shortly see that not every Dedekind cut is rational.   Rational Dedekind cuts   A Dedekind cut is rational if and only if its complement has a minimum.    Let be a Dedekind cut, and suppose that for some rational number . Note that has complement . This set contains , since . Moreover, for all elements . Thus .  Conversely, now suppose that has a minimum element, say . Let , and suppose that . If , then that would imply that . This contradiction implies that . On the other hand, if , then , since . Thus is rational.     Irrational Dedekind cuts   Not all Dedekind cuts are rational.    Consider the subset of the rational numbers . We observe that is a non-empty and proper subset of , since it contains but not . Let be rational numbers, and suppose that and . If , then , and so . On the other hand, if , then either or , in which case . In either case, we conclude that .  Finally, let . If , then let , and note that and . On the other hand, suppose that and , and consider the rational number . Note that , and , so that ; that is, . We conclude that is a Dedekind cut, and so it suffices to show that is not rational.  To that end, we note that has complement . In fact, since for all rational numbers (this fact is proven in any introductory number theory course), . We will show that has no minimum element. Indeed, let , so that and . We again consider the rational number . We see that . Moreover, now that , we observe that and , so that . In particular, and . Thus has no minimum element, and so implies that is not rational.    Once we define the arithmetic of Dedekind cuts, we will see that the Dedekind cut from the above proof of represents the irrational real number . First, however, we observe that the rational numbers inject into .   Rational numbers as real numbers   The map defined by the formula is injective.    Let be rational numbers, and suppose that . As shown in the proof of , for all rational numbers . Therefore, . Thus is injective.     Going forward, we will often exploit the injection to pretend that by identifying a rational number with its associated rational Dedekind cut. We will now construct a total order on which extends the standard order on .     Comparison of Dedekind Cuts   Our two perspectives on the set (as equivalence classes of fractions and as rational Dedekind cuts) yield two natural orderings: the standard ordering and the partial order of set containment. In fact, these orderings agree.    Ordering Dedekind cuts by containment   The standard ordering on the rational numbers is the pullback of set containment on the set of Dedekind cuts.    Let be rational numbers. We note that . First suppose that . If , then and so ; that is, , so that .  Conversely, now suppose that . Then . If , then , and so . This would imply that , and so we must have .  In summary, we have shown that if and only if , and so and are the same binary relation on .     implies that comparing rational numbers is the same as comparing their associated rational Dedekind cuts by containment. This gives us the template for how to compare Dedekind cuts in general: we compare by set containment.   Comparison of Dedekind cuts   Set containment is a total order on the set of Dedekind cuts.    Since set containment is a partial order, it suffices to show only totality. To that end, let be Dedekind cuts, and suppose that . Then there is some rational number so that .  Let . If , then we would have , and so we must have . But this implies that , and so .  In summary, we have shown that for all Dedekind cuts , either or . Thus set containment is a total order on the set of Dedekind cuts.    Just as with the integers and rational numbers , we can use the standard ordering on to distinguish Dedekind cuts by their sign : either positive , negative , or zero .   Sign of a Dedekind cut   Recall that is the rational Dedekind cut associated to the rational number .   Positivity  A Dedekind cut is called positive if it strictly contains ; that is, is positive if .    Negativity  A Dedekind cut is called negative if it is strictly contained in ; that is, is negative if .    Non-negativity  A Dedekind cut is called non-negative if it contains ; that is, is non-negative if .    Non-positivity  A Dedekind cut is called non-positive if it is contained in ; that is, is positive if .   In particular, the sign of a Dedekind cut is either positive, negative, or zero.     This classification of Dedekind cuts by sign will be useful in formalizing the multiplication of Dedekind cuts. We now proceed in that direction, extending the usual operations of arithmetic on to binary operations on and determining their properties.     Addition of Dedekind Cuts   Finally, we begin to define arithmetic for Dedekind cuts. We emphasize that the utility of what follows is neither the details of the construction nor the methods of proof, but rather the very fact that the operations exist with the same properties we would expect. That is to say, we will eventually lose sight of the particularities of the construction of the real number system by Dedekind cuts and treat real numbers as objects which obey the rules of arithmetic.    Addition of Dedekind cuts   Given two Dedekind cuts , the set is a Dedekind cut.    Denote by the set . Since and are Dedekind cuts, they are non-empty subsets of , and so there are rational numbers and . Thus , and so is also non-empty.  On the other hand, and are proper subsets of , and so there are rational numbers and . We observe that that for all and for all . In particular, for all there are rational numbers and so that , and so In particular, , and so is also a proper subset of .  Now let be rational numbers, and suppose that and . We wish to show that . To that end, we see that for some rational numbers and . Since , , and so . This implies that .  It remains to show that does not have a maximum. To that end, let , so that for some rational numbers and . Since and are Dedekind cuts, they do not have maxima, and so and for some rational numbers and . We conclude that , and that . Thus does not have a maximum, and so is a Dedekind cut.     Addition of Dedekind cuts  addition   The sum  of two Dedekind cuts is the Dedekind cut defined by . This defines a binary operation on the set of Dedekind cuts.    We first observe that addition of rational Dedekind cuts mirrors the addition of the corresponding rational numbers.   Addition of rational Dedekind cuts    for all rational numbers .    Let be a rational number, and suppose first that . Then for some rational numbers and , so that and . We observe that , and so .  Conversely, now suppose that , so that . Consider the rational numbers . Since , and , and so and . We conclude that .  In summary, we have shown that if and only if , and so .     Addition of Dedekind cuts   Addition of Dedekind cuts has the following properties:   Commutativity   for all Dedekind cuts .    Associativity   for all Dedekind cuts .    Identity element  The rational Dedekind cut associated to is an additive identity element; that is, for all Dedekind cuts .    Inverses  For all Dedekind cuts , there is a Dedekind cut so that .    Compatibility with the standard order  For all Dedekind cuts , if and , then .         We note that for all Dedekind cuts , and so addition of Dedekind cuts is commutative.    We note that . for all Dedekind cuts , and so addition of Dedekind cuts is associative.    Let be a rational number, and suppose first that . Then for some rational numbers and . Since is the set of negative rational numbers, , and so .  Conversely, now suppose that . Since does not have a maximum, for some rational number . Let , and note that is the sum of a rational number and a rational number . We conclude that .  In summary, we have shown that if and only if , and so . That now follows from (1) above.    There are two cases: either is rational, or is irrational. If is rational, say for some rational number , then we may choose , since implies that .  So we may suppose that is irrational. Let . Since is a non-empty proper subset of , so too is its complement , which implies that is also non-empty and proper. We aim to show first that is a Dedekind cut.  To that end, let be rational numbers, and suppose that and . Then , and so for all rational numbers . We observe that for all rational numbers , and so ; that is, .  Now let , so that . Since is irrational, implies that does not have a minimum. Thus there is some rational number so that . We conclude that and , so that does not have a maximum.  We have shown that is a Dedekind cut, but it remains to show that . To that end, let be a rational number, and suppose first that . Then for some and . Since , we must have , so that ; that is, .  Conversely, now suppose that , so that . In particular, . If for all rational numbers , then is not bounded from above, which would imply that . Thus for some rational number . We conclude that is the sum of two rational numbers and .  In summary, we have shown that if and only if , and so .    We observe that if and , then .       All that remains is to define the multiplication of Dedekind cuts and derive relevant results about multiplication itself and its relation to addition and comparison.     Multiplication of Dedekind Cuts   Finally, we define multiplication for Dedekind cuts. We will see that this definition depends in a complicated way on the signs of the two factors. As a result of this case-by-case definition of multiplication, we offer the remaining results of this section without proof.    Multiplication of positive Dedekind cuts   Given two positive Dedekind cuts , the set is a Dedekind cut.      Multiplication of Dedekind cuts  multiplication   The product  of two Dedekind cuts is the Dedekind cut defined by the following formulae:   Zero  If either or , then .    Positive times positive  If both and are positive, then .    Positive times negative  If is positive and is negative, then .    Negative times positive  If is negative and is positive, then .    Negative times negative  If both and are negative, then .   This defines a binary operation on the set of Dedekind cuts.    We end with a compilation of all relevant results about the arithmetic of Dedekind cuts. While one can verify these results, we omit the proofs of those that involve multiplication in order to simplify the narrative of exposition. Indeed, these proofs rely on casework which, while not difficult, would require more time than we can dedicate to this topic.   Arithmetic of Dedekind cuts   The addition and multiplication of Dedekind cuts has the following properties:   Commutativity of addition   for all Dedekind cuts .    Associativity of addition   and for all Dedekind cuts .    Additive identity element  The rational Dedekind cut associated to is an additive identity element; that is, for all Dedekind cuts .    Additive inverses  For all Dedekind cuts , there is a Dedekind cut so that .    Commutativity of multiplication   for all Dedekind cuts .    Associativity of multiplication   for all Dedekind cuts .    Multiplicative identity element  The rational Dedekind cut associated to is a multiplicative identity element; that is, for all Dedekind cuts .    Multiplicative inverses  For all Dedekind cuts , if , then there is a Dedekind cut so that .    Distributivity of multiplication over addition  For all Dedekind cuts , both and .    Compatibility of addition and the standard order  For all Dedekind cuts , if and , then .    Compatibility of multiplication and the standard order  For all Dedekind cuts , if and are non-negative, then so too is their product .        All of the above properties of the arithmetic of Dedekind cuts not involving multiplication have already been proven. Again, we highlight that while proofs of the remaining parts are not too difficult to construct, they rely on significant casework involving signs; we unfortunately don't have time to study these proofs in detail.     In the next section, we will continue to explore the properties of the real number system. In particular, we will characterize as the unique Dedekind complete  ordered field .    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available in . However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Problems   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .    Cancellation of addition   Prove that for all Dedekind cuts , if , then .    If , then by .     In-depth solutions to these problems are available in . However, these are provided in order to check your work. If you are unable to solve the above problems, discuss your questions with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-constructing-the-real-numbers-2-1",
  "level": "2",
  "url": "section-constructing-the-real-numbers.html#section-constructing-the-real-numbers-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "real number system Dedekind cuts "
},
{
  "id": "subsection-cutting-the-rational-numbers-2-2",
  "level": "2",
  "url": "section-constructing-the-real-numbers.html#subsection-cutting-the-rational-numbers-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "real numbers Dedekind cut "
},
{
  "id": "definition-dedekind-cut",
  "level": "2",
  "url": "section-constructing-the-real-numbers.html#definition-dedekind-cut",
  "type": "Definition",
  "number": "2.2.1",
  "title": "Dedekind cut.",
  "body": " Dedekind cut  dedekind cut       the set of real numbers     A proper, non-empty subset of the rational numbers is called a Dedekind cut if it satisfies the following conditions:   For all rational numbers , if and , then .     does not have a maximum; that is, for all elements , there is an element so that .   The set of Dedekind cuts is denoted .   "
},
{
  "id": "example-dedekind-cuts",
  "level": "2",
  "url": "section-constructing-the-real-numbers.html#example-dedekind-cuts",
  "type": "Example",
  "number": "2.2.2",
  "title": "Dedekind cuts.",
  "body": " Dedekind cuts  rational Dedekind cut       the rational Dedekind cut associated to      For each rational number , consider the subset of the rational numbers . We observe that is a proper and non-empty subset of , since it contains but not itself. Moreover, for all rational numbers , if and , then , and so . Finally, for all elements , we observe that , so that . In summary, we have shown that associated to each rational number is a Dedekind cut .   "
},
{
  "id": "subsection-cutting-the-rational-numbers-5",
  "level": "2",
  "url": "section-constructing-the-real-numbers.html#subsection-cutting-the-rational-numbers-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rational "
},
{
  "id": "lemma-rational-dedekind-cuts",
  "level": "2",
  "url": "section-constructing-the-real-numbers.html#lemma-rational-dedekind-cuts",
  "type": "Lemma",
  "number": "2.2.3",
  "title": "Rational Dedekind cuts.",
  "body": " Rational Dedekind cuts   A Dedekind cut is rational if and only if its complement has a minimum.    Let be a Dedekind cut, and suppose that for some rational number . Note that has complement . This set contains , since . Moreover, for all elements . Thus .  Conversely, now suppose that has a minimum element, say . Let , and suppose that . If , then that would imply that . This contradiction implies that . On the other hand, if , then , since . Thus is rational.   "
},
{
  "id": "proposition-irrational-dedekind-cuts",
  "level": "2",
  "url": "section-constructing-the-real-numbers.html#proposition-irrational-dedekind-cuts",
  "type": "Proposition",
  "number": "2.2.4",
  "title": "Irrational Dedekind cuts.",
  "body": " Irrational Dedekind cuts   Not all Dedekind cuts are rational.    Consider the subset of the rational numbers . We observe that is a non-empty and proper subset of , since it contains but not . Let be rational numbers, and suppose that and . If , then , and so . On the other hand, if , then either or , in which case . In either case, we conclude that .  Finally, let . If , then let , and note that and . On the other hand, suppose that and , and consider the rational number . Note that , and , so that ; that is, . We conclude that is a Dedekind cut, and so it suffices to show that is not rational.  To that end, we note that has complement . In fact, since for all rational numbers (this fact is proven in any introductory number theory course), . We will show that has no minimum element. Indeed, let , so that and . We again consider the rational number . We see that . Moreover, now that , we observe that and , so that . In particular, and . Thus has no minimum element, and so implies that is not rational.   "
},
{
  "id": "subsection-cutting-the-rational-numbers-8",
  "level": "2",
  "url": "section-constructing-the-real-numbers.html#subsection-cutting-the-rational-numbers-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "irrational "
},
{
  "id": "proposition-rational-numbers-as-real-numbers",
  "level": "2",
  "url": "section-constructing-the-real-numbers.html#proposition-rational-numbers-as-real-numbers",
  "type": "Proposition",
  "number": "2.2.5",
  "title": "Rational numbers as real numbers.",
  "body": " Rational numbers as real numbers   The map defined by the formula is injective.    Let be rational numbers, and suppose that . As shown in the proof of , for all rational numbers . Therefore, . Thus is injective.   "
},
{
  "id": "corollary-ordering-dedekind-cuts-by-containment",
  "level": "2",
  "url": "section-constructing-the-real-numbers.html#corollary-ordering-dedekind-cuts-by-containment",
  "type": "Corollary",
  "number": "2.2.6",
  "title": "Ordering Dedekind cuts by containment.",
  "body": " Ordering Dedekind cuts by containment   The standard ordering on the rational numbers is the pullback of set containment on the set of Dedekind cuts.    Let be rational numbers. We note that . First suppose that . If , then and so ; that is, , so that .  Conversely, now suppose that . Then . If , then , and so . This would imply that , and so we must have .  In summary, we have shown that if and only if , and so and are the same binary relation on .   "
},
{
  "id": "theorem-comparison-of-dedekind-cuts",
  "level": "2",
  "url": "section-constructing-the-real-numbers.html#theorem-comparison-of-dedekind-cuts",
  "type": "Theorem",
  "number": "2.2.7",
  "title": "Comparison of Dedekind cuts.",
  "body": " Comparison of Dedekind cuts   Set containment is a total order on the set of Dedekind cuts.    Since set containment is a partial order, it suffices to show only totality. To that end, let be Dedekind cuts, and suppose that . Then there is some rational number so that .  Let . If , then we would have , and so we must have . But this implies that , and so .  In summary, we have shown that for all Dedekind cuts , either or . Thus set containment is a total order on the set of Dedekind cuts.   "
},
{
  "id": "subsection-comparison-of-dedekind-cuts-6",
  "level": "2",
  "url": "section-constructing-the-real-numbers.html#subsection-comparison-of-dedekind-cuts-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sign positive negative zero "
},
{
  "id": "definition-sign-of-a-dedekind-cut",
  "level": "2",
  "url": "section-constructing-the-real-numbers.html#definition-sign-of-a-dedekind-cut",
  "type": "Definition",
  "number": "2.2.8",
  "title": "Sign of a Dedekind cut.",
  "body": " Sign of a Dedekind cut   Recall that is the rational Dedekind cut associated to the rational number .   Positivity  A Dedekind cut is called positive if it strictly contains ; that is, is positive if .    Negativity  A Dedekind cut is called negative if it is strictly contained in ; that is, is negative if .    Non-negativity  A Dedekind cut is called non-negative if it contains ; that is, is non-negative if .    Non-positivity  A Dedekind cut is called non-positive if it is contained in ; that is, is positive if .   In particular, the sign of a Dedekind cut is either positive, negative, or zero.   "
},
{
  "id": "lemma-addition-of-dedekind-cuts",
  "level": "2",
  "url": "section-constructing-the-real-numbers.html#lemma-addition-of-dedekind-cuts",
  "type": "Lemma",
  "number": "2.2.9",
  "title": "Addition of Dedekind cuts.",
  "body": " Addition of Dedekind cuts   Given two Dedekind cuts , the set is a Dedekind cut.    Denote by the set . Since and are Dedekind cuts, they are non-empty subsets of , and so there are rational numbers and . Thus , and so is also non-empty.  On the other hand, and are proper subsets of , and so there are rational numbers and . We observe that that for all and for all . In particular, for all there are rational numbers and so that , and so In particular, , and so is also a proper subset of .  Now let be rational numbers, and suppose that and . We wish to show that . To that end, we see that for some rational numbers and . Since , , and so . This implies that .  It remains to show that does not have a maximum. To that end, let , so that for some rational numbers and . Since and are Dedekind cuts, they do not have maxima, and so and for some rational numbers and . We conclude that , and that . Thus does not have a maximum, and so is a Dedekind cut.   "
},
{
  "id": "definition-addition-of-dedekind-cuts",
  "level": "2",
  "url": "section-constructing-the-real-numbers.html#definition-addition-of-dedekind-cuts",
  "type": "Definition",
  "number": "2.2.10",
  "title": "Addition of Dedekind cuts.",
  "body": " Addition of Dedekind cuts  addition   The sum  of two Dedekind cuts is the Dedekind cut defined by . This defines a binary operation on the set of Dedekind cuts.   "
},
{
  "id": "lemma-addition-of-rational-dedekind-cuts",
  "level": "2",
  "url": "section-constructing-the-real-numbers.html#lemma-addition-of-rational-dedekind-cuts",
  "type": "Lemma",
  "number": "2.2.11",
  "title": "Addition of rational Dedekind cuts.",
  "body": " Addition of rational Dedekind cuts    for all rational numbers .    Let be a rational number, and suppose first that . Then for some rational numbers and , so that and . We observe that , and so .  Conversely, now suppose that , so that . Consider the rational numbers . Since , and , and so and . We conclude that .  In summary, we have shown that if and only if , and so .   "
},
{
  "id": "proposition-addition-of-dedekind-cuts",
  "level": "2",
  "url": "section-constructing-the-real-numbers.html#proposition-addition-of-dedekind-cuts",
  "type": "Proposition",
  "number": "2.2.12",
  "title": "Addition of Dedekind cuts.",
  "body": " Addition of Dedekind cuts   Addition of Dedekind cuts has the following properties:   Commutativity   for all Dedekind cuts .    Associativity   for all Dedekind cuts .    Identity element  The rational Dedekind cut associated to is an additive identity element; that is, for all Dedekind cuts .    Inverses  For all Dedekind cuts , there is a Dedekind cut so that .    Compatibility with the standard order  For all Dedekind cuts , if and , then .         We note that for all Dedekind cuts , and so addition of Dedekind cuts is commutative.    We note that . for all Dedekind cuts , and so addition of Dedekind cuts is associative.    Let be a rational number, and suppose first that . Then for some rational numbers and . Since is the set of negative rational numbers, , and so .  Conversely, now suppose that . Since does not have a maximum, for some rational number . Let , and note that is the sum of a rational number and a rational number . We conclude that .  In summary, we have shown that if and only if , and so . That now follows from (1) above.    There are two cases: either is rational, or is irrational. If is rational, say for some rational number , then we may choose , since implies that .  So we may suppose that is irrational. Let . Since is a non-empty proper subset of , so too is its complement , which implies that is also non-empty and proper. We aim to show first that is a Dedekind cut.  To that end, let be rational numbers, and suppose that and . Then , and so for all rational numbers . We observe that for all rational numbers , and so ; that is, .  Now let , so that . Since is irrational, implies that does not have a minimum. Thus there is some rational number so that . We conclude that and , so that does not have a maximum.  We have shown that is a Dedekind cut, but it remains to show that . To that end, let be a rational number, and suppose first that . Then for some and . Since , we must have , so that ; that is, .  Conversely, now suppose that , so that . In particular, . If for all rational numbers , then is not bounded from above, which would imply that . Thus for some rational number . We conclude that is the sum of two rational numbers and .  In summary, we have shown that if and only if , and so .    We observe that if and , then .     "
},
{
  "id": "lemma-multiplication-of-positive-Dedekind-cuts",
  "level": "2",
  "url": "section-constructing-the-real-numbers.html#lemma-multiplication-of-positive-Dedekind-cuts",
  "type": "Lemma",
  "number": "2.2.13",
  "title": "Multiplication of positive Dedekind cuts.",
  "body": " Multiplication of positive Dedekind cuts   Given two positive Dedekind cuts , the set is a Dedekind cut.    "
},
{
  "id": "definition-multiplication-of-dedekind-cuts",
  "level": "2",
  "url": "section-constructing-the-real-numbers.html#definition-multiplication-of-dedekind-cuts",
  "type": "Definition",
  "number": "2.2.14",
  "title": "Multiplication of Dedekind cuts.",
  "body": " Multiplication of Dedekind cuts  multiplication   The product  of two Dedekind cuts is the Dedekind cut defined by the following formulae:   Zero  If either or , then .    Positive times positive  If both and are positive, then .    Positive times negative  If is positive and is negative, then .    Negative times positive  If is negative and is positive, then .    Negative times negative  If both and are negative, then .   This defines a binary operation on the set of Dedekind cuts.   "
},
{
  "id": "theorem-arithmetic-of-dedekind-cuts",
  "level": "2",
  "url": "section-constructing-the-real-numbers.html#theorem-arithmetic-of-dedekind-cuts",
  "type": "Theorem",
  "number": "2.2.15",
  "title": "Arithmetic of Dedekind cuts.",
  "body": " Arithmetic of Dedekind cuts   The addition and multiplication of Dedekind cuts has the following properties:   Commutativity of addition   for all Dedekind cuts .    Associativity of addition   and for all Dedekind cuts .    Additive identity element  The rational Dedekind cut associated to is an additive identity element; that is, for all Dedekind cuts .    Additive inverses  For all Dedekind cuts , there is a Dedekind cut so that .    Commutativity of multiplication   for all Dedekind cuts .    Associativity of multiplication   for all Dedekind cuts .    Multiplicative identity element  The rational Dedekind cut associated to is a multiplicative identity element; that is, for all Dedekind cuts .    Multiplicative inverses  For all Dedekind cuts , if , then there is a Dedekind cut so that .    Distributivity of multiplication over addition  For all Dedekind cuts , both and .    Compatibility of addition and the standard order  For all Dedekind cuts , if and , then .    Compatibility of multiplication and the standard order  For all Dedekind cuts , if and are non-negative, then so too is their product .      "
},
{
  "id": "section-constructing-the-real-numbers-7-1",
  "level": "2",
  "url": "section-constructing-the-real-numbers.html#section-constructing-the-real-numbers-7-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Dedekind complete ordered field "
},
{
  "id": "problem-cancellation-of-addition",
  "level": "2",
  "url": "section-constructing-the-real-numbers.html#problem-cancellation-of-addition",
  "type": "Problem",
  "number": "2.2.6.1",
  "title": "Cancellation of addition.",
  "body": " Cancellation of addition   Prove that for all Dedekind cuts , if , then .    If , then by .   "
},
{
  "id": "section-the-complete-ordered-field",
  "level": "1",
  "url": "section-the-complete-ordered-field.html",
  "type": "Section",
  "number": "2.3",
  "title": "The Complete Ordered Field",
  "body": " The Complete Ordered Field   In the previous section, we gave an explicit and detailed construction of the real number system . In this section, we give an alternative and non-constructive characterization of as the unique Dedekind complete  ordered field . This will set the stage for abandoning the Dedekind cut perspective in favor of an abstract conception of the properties of the real number system.    The Ordered Field Axioms   We begin by revisiting the properties of the arithmetic of Dedekind cuts collected in . These properties define an algebraic object called a field .    Field  field   Let and be binary operations on a set , called addition and multiplication . The ordered triple is called a field if the binary operations satisfy the following conditions:   Commutativity of addition   for all elements .    Associativity of addition   for all elements .    Additive identity element  There is an element so that for all elements .    Additive inverses  For all elements , there is an element called the additive inverse of so that .    Commutativity of multiplication   for all elements .    Associativity of addition   for all elements .    Multiplicative identity element  There is an element so that for all elements .    Multiplicative inverses  For all elements , if then there is an element called the multiplicative inverse of so that .    Distributivity of multiplication over addition   and for all elements .   If is a field, then the set is called its ground set or underlying set . If the binary operations and are clear from context, then we will usually abuse notation and refer to a field by the ground set alone.     Fields   The following are examples of fields:   The field of rational numbers  Addition and multiplication of rational numbers satisfies the above field axioms, and so is a field.    The field of real numbers  Addition and multiplication of real numbers satisfies the above field axioms by , and so is a field.    The field of rational functions  rational function  removable discontinuity       the field of rational functions    Let be a natural number, and fix real numbers . A real-valued function is called a rational function if it has a formula of the form for some polynomials and . Such a rational function has a removable discontinuity at if both and have a root at , and the corresponding factor appears at least as many times in the factorization of as it does in the factorization of .  The set of rational functions without removable discontinuities is denoted . One can verify that the addition and multiplication of these rational functions satisfies the field axioms, and so is a field.       We have seen that the fields and of rational and real numbers are equipped with additional structure beyond that of arithmetic: we can compare rational numbers and real numbers by the standard orders on and , respectively. These are total orders, and we have seen they are compatible with arithmetic in key ways. Generalizing these relationships, we arrive at the notion of an ordered field .   Ordered field  ordered field   Let and be binary operations on a set , called addition and multiplication , and consider a binary relation on , called comparison . The ordered quadruple is called an ordered field if it satisfies the following conditions:   The ordered triple is a field.    The ordered pair is a totally ordered set.    Compatibility of addition and comparison  For all elements , if , then .    Compatibility of multiplication and comparison  For all elements , if and , then .   If is an ordered field, then the set is called its ground set or underlying set . If the binary operations and and the binary relation are clear from context, then we will usually refer to an ordered field by the ground set alone.     Ordered fields   The following are examples of ordered fields:   The ordered field of rational numbers  Addition , multiplication , and comparison of rational numbers satisfies the above ordered field axioms, and so is an ordered field.    The ordered field of real numbers  Addition , multiplication , and comparison of rational numbers satisfies the above ordered field axioms by , and so is an ordered field.        That the above list of examples includes both the rational numbers and the real numbers begs the question: Why bother with the real numbers , when the rational numbers are already an ordered field?     Dedekind completeness   So far, we have failed to meaningfully distinguish between the properties enjoyed by the rational number system and the real number system . We now address this issue via the notion of Dedekind completeness . Informally, Dedekind completeness is defined in terms of the set of upper bounds of a subset which is bounded from above (or dually the set of lower bounds of a subset which is bounded from below).    Supremum; infimum  supremum  least upper bound  infimum  greatest lower bound       the supremum of          the infimum of      Let be a subset of a partially ordered set .   Supremum  If the set of upper bounds for in has a minimum, then this minimum is called the supremum (or least upper bound ) of and is denoted ; that is, .    Infimum  If the set of lower bounds for in has a maximum, then this maximum is called the infimum (or greatest lower bound ) of and is denoted ; that is, .        Suprema and infima   Let be an indexed family of subsets of a set . These subsets are elements of the power set , which is partially ordered by set containment .  We may reinterpret (a) of as saying that the indexed intersection and the indexed union are the infimum and supremum of .     Suprema of Dedekind cuts   The complement of a Dedekind cut is exactly the set of upper bounds of in , and so implies that is rational if and only if it has a supremum in .  This is the deficiency of the rational numbers from the analytic perspective: posits the existence of subsets of which are bounded from above and yet do not have suprema . We will shortly see that this is not the case in the real number system .     Dedekind completeness  Dedekind completeness   An ordered field is called Dedekind complete if every non-empty subset of which is bounded from above has a supremum.     Dedekind completeness of the real numbers   The real number system is Dedekind complete.    Let be a non-empty subset of which is bounded from above, and consider the indexed union . Since is a non-empty collection of non-empty subsets of , is non-empty. Moreover, since is bounded from above, there is some Dedekind cut so that for all . In particular, if , then for all , and so .  Let be rational numbers, and suppose that and . Since , for some , and so .  Now let , so that for some . Since does not have a maximum, there is some rational number so that . We conclude that does not have a maximum, and so is a Dedekind cut.  We note that (a) of implies that for a Dedekind cut , if and only if for all ; that is, any upper bound for in contains , so that .    We will see that has far-reaching consequences for the discipline of real analysis, most notably in the existence of limits for certain objects constructed out of the real numbers . First, however, we present the following non-constructive characterization of as the unique Dedekind complete ordered field.   Uniqueness of the real numbers   If is a Dedekind complete ordered field, then there is a bijection so that for all real numbers , , , and if , then .     With , we are now ready to shake off the burden of viewing the real number system through the perspective of Dedekind cuts. All relevant properties of the analysis of real numbers can be derived abstractly from the axioms of a Dedekind complete ordered field, and as a consequence, we will see that we no longer need to rely on any specific formal model of .     In the next section, we will construct various extensions of the real number system . In particular, we will see the extended real numbers , the complex numbers , and the quaternions .    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.    Algebraic structures other than fields   Determine which of the ordered field axioms are satisfied by the given algebraic structure.     Which of the ordered field axioms are not satisfied by the set of integers?    The integers satisfy all the ordered field axioms except the existence of multiplicative inverses. In fact, only and have multiplicative inverses.      Which of the ordered field axioms are not satisfied by the set of natural numbers?    The natural numbers satisfy all the ordered field axioms except the existence of additive and multiplicative inverses. In fact, only has an additive inverse, and only has a multiplicative inverse.      Let be a set. Which of the ordered field axioms are not satisfied by the ordered quadruple ?    The ordered quadruple satisfies all the ordered field axioms except the existence additive inverses, the existence of multiplicative inverses, and totality.      Short answers and\/or in-depth solutions to these exercises are available in . However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Problems   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .    Uniqueness in a field   Let be a field     Show that the additive identity element is unique.    Let , and suppose that is an additive identity element; that is, suppose that for all . Then in particular, .      Show that the multiplicative identity element is unique.    Let , and suppose that is a multiplicative identity element; that is, suppose that for all . Then in particular, .      Show that additive inverses are unique; that is, given elements , show that if , then .    Suppose that for some elements , and note that .      Show that multiplicative inverses are unique; that is, given elements , show that if , then .    Suppose that for some elements , and note that .      Sign in an ordered field  sign  positive  negative   Let be an ordered field. As in the case of the rational numbers and the real numbers , we can define the sign of an element of by comparison with the additive identity element :   Positivity  A non-zero element is called positive if .    Negativity  A non-zero element is called negative if .    Zero  The additive identity element is not positive or negative.        Let . Show that if , then and its additive inverse have opposite sign.    Add to the inequality defining the sign of .    We first note that if , then . Thus if , then . If is positive, then , and so , and so is negative. On the other hand, if is negative, then , and so , and so is positive.      More generally, show that for all elements , if then .    We note that .      Show that for all elements .    We observe that , and so is an additive inverse for . Thus (c) in implies that .      Show that the product of two negative elements is positive.    Let be negative elements. Then and ; we first argue that . Indeed, if , then . This contradiction implies that . We now observe that (a) implies that and are positive. Moreover, (c) implies that is positive.      Infima and Dedekind completeness   Let be an ordered field, and consider the map defined by the formula ; that is, sends an input to its additive inverse .     Show that for a subset , is bounded from above if and only if is bounded from below, and is bounded from below if and only if is bounded from above.    If is bounded from above, then there is some element so that for all . We observe that (b) in implies that for all , and so is a lower bound for .  Similarly, if is bounded from below, then there is some element so that for all . We observe that (b) in implies that for all , and so is an upper bound for .  The reverse implications follow from the observation that is its own inverse and then applying the above arguments to : if is bounded from above (resp. below), then is bounded from below (resp. above).      Show that a subset has a supremum if and only if has an infimum, and in this case . Similarly, show that has an infimum if and only if has a supremum, and in this case     asdf      Show that the ordered field is Dedekind complete if and only if every non-empty subset of which is bounded from below has an infimum.    asdf      In-depth solutions to these problems are available in . However, these are provided in order to check your work. If you are unable to solve the above problems, discuss your questions with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-the-complete-ordered-field-2-1",
  "level": "2",
  "url": "section-the-complete-ordered-field.html#section-the-complete-ordered-field-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Dedekind complete ordered field "
},
{
  "id": "subsection-the-ordered-field-axioms-2-1",
  "level": "2",
  "url": "section-the-complete-ordered-field.html#subsection-the-ordered-field-axioms-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "field "
},
{
  "id": "definition-field",
  "level": "2",
  "url": "section-the-complete-ordered-field.html#definition-field",
  "type": "Definition",
  "number": "2.3.1",
  "title": "Field.",
  "body": " Field  field   Let and be binary operations on a set , called addition and multiplication . The ordered triple is called a field if the binary operations satisfy the following conditions:   Commutativity of addition   for all elements .    Associativity of addition   for all elements .    Additive identity element  There is an element so that for all elements .    Additive inverses  For all elements , there is an element called the additive inverse of so that .    Commutativity of multiplication   for all elements .    Associativity of addition   for all elements .    Multiplicative identity element  There is an element so that for all elements .    Multiplicative inverses  For all elements , if then there is an element called the multiplicative inverse of so that .    Distributivity of multiplication over addition   and for all elements .   If is a field, then the set is called its ground set or underlying set . If the binary operations and are clear from context, then we will usually abuse notation and refer to a field by the ground set alone.   "
},
{
  "id": "example-fields",
  "level": "2",
  "url": "section-the-complete-ordered-field.html#example-fields",
  "type": "Example",
  "number": "2.3.2",
  "title": "Fields.",
  "body": " Fields   The following are examples of fields:   The field of rational numbers  Addition and multiplication of rational numbers satisfies the above field axioms, and so is a field.    The field of real numbers  Addition and multiplication of real numbers satisfies the above field axioms by , and so is a field.    The field of rational functions  rational function  removable discontinuity       the field of rational functions    Let be a natural number, and fix real numbers . A real-valued function is called a rational function if it has a formula of the form for some polynomials and . Such a rational function has a removable discontinuity at if both and have a root at , and the corresponding factor appears at least as many times in the factorization of as it does in the factorization of .  The set of rational functions without removable discontinuities is denoted . One can verify that the addition and multiplication of these rational functions satisfies the field axioms, and so is a field.      "
},
{
  "id": "subsection-the-ordered-field-axioms-5",
  "level": "2",
  "url": "section-the-complete-ordered-field.html#subsection-the-ordered-field-axioms-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ordered field "
},
{
  "id": "definition-ordered-field",
  "level": "2",
  "url": "section-the-complete-ordered-field.html#definition-ordered-field",
  "type": "Definition",
  "number": "2.3.3",
  "title": "Ordered field.",
  "body": " Ordered field  ordered field   Let and be binary operations on a set , called addition and multiplication , and consider a binary relation on , called comparison . The ordered quadruple is called an ordered field if it satisfies the following conditions:   The ordered triple is a field.    The ordered pair is a totally ordered set.    Compatibility of addition and comparison  For all elements , if , then .    Compatibility of multiplication and comparison  For all elements , if and , then .   If is an ordered field, then the set is called its ground set or underlying set . If the binary operations and and the binary relation are clear from context, then we will usually refer to an ordered field by the ground set alone.   "
},
{
  "id": "example-ordered-fields",
  "level": "2",
  "url": "section-the-complete-ordered-field.html#example-ordered-fields",
  "type": "Example",
  "number": "2.3.4",
  "title": "Ordered fields.",
  "body": " Ordered fields   The following are examples of ordered fields:   The ordered field of rational numbers  Addition , multiplication , and comparison of rational numbers satisfies the above ordered field axioms, and so is an ordered field.    The ordered field of real numbers  Addition , multiplication , and comparison of rational numbers satisfies the above ordered field axioms by , and so is an ordered field.      "
},
{
  "id": "subsection-dedekind-completeness-2-1",
  "level": "2",
  "url": "section-the-complete-ordered-field.html#subsection-dedekind-completeness-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Dedekind completeness "
},
{
  "id": "definition-supremum-infimum",
  "level": "2",
  "url": "section-the-complete-ordered-field.html#definition-supremum-infimum",
  "type": "Definition",
  "number": "2.3.5",
  "title": "Supremum; infimum.",
  "body": " Supremum; infimum  supremum  least upper bound  infimum  greatest lower bound       the supremum of          the infimum of      Let be a subset of a partially ordered set .   Supremum  If the set of upper bounds for in has a minimum, then this minimum is called the supremum (or least upper bound ) of and is denoted ; that is, .    Infimum  If the set of lower bounds for in has a maximum, then this maximum is called the infimum (or greatest lower bound ) of and is denoted ; that is, .      "
},
{
  "id": "example-suprema-and-infima",
  "level": "2",
  "url": "section-the-complete-ordered-field.html#example-suprema-and-infima",
  "type": "Example",
  "number": "2.3.6",
  "title": "Suprema and infima.",
  "body": " Suprema and infima   Let be an indexed family of subsets of a set . These subsets are elements of the power set , which is partially ordered by set containment .  We may reinterpret (a) of as saying that the indexed intersection and the indexed union are the infimum and supremum of .   "
},
{
  "id": "remark-suprema-of-dedekind-cuts",
  "level": "2",
  "url": "section-the-complete-ordered-field.html#remark-suprema-of-dedekind-cuts",
  "type": "Remark",
  "number": "2.3.7",
  "title": "Suprema of Dedekind cuts.",
  "body": " Suprema of Dedekind cuts   The complement of a Dedekind cut is exactly the set of upper bounds of in , and so implies that is rational if and only if it has a supremum in .  This is the deficiency of the rational numbers from the analytic perspective: posits the existence of subsets of which are bounded from above and yet do not have suprema . We will shortly see that this is not the case in the real number system .   "
},
{
  "id": "definition-dedekind-completeness",
  "level": "2",
  "url": "section-the-complete-ordered-field.html#definition-dedekind-completeness",
  "type": "Definition",
  "number": "2.3.8",
  "title": "Dedekind completeness.",
  "body": " Dedekind completeness  Dedekind completeness   An ordered field is called Dedekind complete if every non-empty subset of which is bounded from above has a supremum.   "
},
{
  "id": "theorem-dedekind-completeness-of-the-real-numbers",
  "level": "2",
  "url": "section-the-complete-ordered-field.html#theorem-dedekind-completeness-of-the-real-numbers",
  "type": "Theorem",
  "number": "2.3.9",
  "title": "Dedekind completeness of the real numbers.",
  "body": " Dedekind completeness of the real numbers   The real number system is Dedekind complete.    Let be a non-empty subset of which is bounded from above, and consider the indexed union . Since is a non-empty collection of non-empty subsets of , is non-empty. Moreover, since is bounded from above, there is some Dedekind cut so that for all . In particular, if , then for all , and so .  Let be rational numbers, and suppose that and . Since , for some , and so .  Now let , so that for some . Since does not have a maximum, there is some rational number so that . We conclude that does not have a maximum, and so is a Dedekind cut.  We note that (a) of implies that for a Dedekind cut , if and only if for all ; that is, any upper bound for in contains , so that .   "
},
{
  "id": "theorem-uniqueness-of-the-real-numbers",
  "level": "2",
  "url": "section-the-complete-ordered-field.html#theorem-uniqueness-of-the-real-numbers",
  "type": "Theorem",
  "number": "2.3.10",
  "title": "Uniqueness of the real numbers.",
  "body": " Uniqueness of the real numbers   If is a Dedekind complete ordered field, then there is a bijection so that for all real numbers , , , and if , then .   "
},
{
  "id": "section-the-complete-ordered-field-5-1",
  "level": "2",
  "url": "section-the-complete-ordered-field.html#section-the-complete-ordered-field-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "extended real numbers complex numbers quaternions "
},
{
  "id": "exercise-algebraic-structures-other-than-fields-3",
  "level": "2",
  "url": "section-the-complete-ordered-field.html#exercise-algebraic-structures-other-than-fields-3",
  "type": "Problem",
  "number": "2.3.3.1",
  "title": "",
  "body": "  Which of the ordered field axioms are not satisfied by the set of integers?    The integers satisfy all the ordered field axioms except the existence of multiplicative inverses. In fact, only and have multiplicative inverses.   "
},
{
  "id": "exercise-algebraic-structures-other-than-fields-4",
  "level": "2",
  "url": "section-the-complete-ordered-field.html#exercise-algebraic-structures-other-than-fields-4",
  "type": "Problem",
  "number": "2.3.3.2",
  "title": "",
  "body": "  Which of the ordered field axioms are not satisfied by the set of natural numbers?    The natural numbers satisfy all the ordered field axioms except the existence of additive and multiplicative inverses. In fact, only has an additive inverse, and only has a multiplicative inverse.   "
},
{
  "id": "exercise-algebraic-structures-other-than-fields-5",
  "level": "2",
  "url": "section-the-complete-ordered-field.html#exercise-algebraic-structures-other-than-fields-5",
  "type": "Problem",
  "number": "2.3.3.3",
  "title": "",
  "body": "  Let be a set. Which of the ordered field axioms are not satisfied by the ordered quadruple ?    The ordered quadruple satisfies all the ordered field axioms except the existence additive inverses, the existence of multiplicative inverses, and totality.   "
},
{
  "id": "problem-uniqueness-in-a-field",
  "level": "2",
  "url": "section-the-complete-ordered-field.html#problem-uniqueness-in-a-field",
  "type": "Problem",
  "number": "2.3.4.1",
  "title": "Uniqueness in a field.",
  "body": " Uniqueness in a field   Let be a field     Show that the additive identity element is unique.    Let , and suppose that is an additive identity element; that is, suppose that for all . Then in particular, .      Show that the multiplicative identity element is unique.    Let , and suppose that is a multiplicative identity element; that is, suppose that for all . Then in particular, .      Show that additive inverses are unique; that is, given elements , show that if , then .    Suppose that for some elements , and note that .      Show that multiplicative inverses are unique; that is, given elements , show that if , then .    Suppose that for some elements , and note that .    "
},
{
  "id": "problem-sign-in-an-ordered-field",
  "level": "2",
  "url": "section-the-complete-ordered-field.html#problem-sign-in-an-ordered-field",
  "type": "Problem",
  "number": "2.3.4.2",
  "title": "Sign in an ordered field.",
  "body": " Sign in an ordered field  sign  positive  negative   Let be an ordered field. As in the case of the rational numbers and the real numbers , we can define the sign of an element of by comparison with the additive identity element :   Positivity  A non-zero element is called positive if .    Negativity  A non-zero element is called negative if .    Zero  The additive identity element is not positive or negative.        Let . Show that if , then and its additive inverse have opposite sign.    Add to the inequality defining the sign of .    We first note that if , then . Thus if , then . If is positive, then , and so , and so is negative. On the other hand, if is negative, then , and so , and so is positive.      More generally, show that for all elements , if then .    We note that .      Show that for all elements .    We observe that , and so is an additive inverse for . Thus (c) in implies that .      Show that the product of two negative elements is positive.    Let be negative elements. Then and ; we first argue that . Indeed, if , then . This contradiction implies that . We now observe that (a) implies that and are positive. Moreover, (c) implies that is positive.    "
},
{
  "id": "problem-infima-and-dedekind-completeness",
  "level": "2",
  "url": "section-the-complete-ordered-field.html#problem-infima-and-dedekind-completeness",
  "type": "Problem",
  "number": "2.3.4.3",
  "title": "Infima and Dedekind completeness.",
  "body": " Infima and Dedekind completeness   Let be an ordered field, and consider the map defined by the formula ; that is, sends an input to its additive inverse .     Show that for a subset , is bounded from above if and only if is bounded from below, and is bounded from below if and only if is bounded from above.    If is bounded from above, then there is some element so that for all . We observe that (b) in implies that for all , and so is a lower bound for .  Similarly, if is bounded from below, then there is some element so that for all . We observe that (b) in implies that for all , and so is an upper bound for .  The reverse implications follow from the observation that is its own inverse and then applying the above arguments to : if is bounded from above (resp. below), then is bounded from below (resp. above).      Show that a subset has a supremum if and only if has an infimum, and in this case . Similarly, show that has an infimum if and only if has a supremum, and in this case     asdf      Show that the ordered field is Dedekind complete if and only if every non-empty subset of which is bounded from below has an infimum.    asdf    "
},
{
  "id": "section-beyond-the-real-number-system",
  "level": "1",
  "url": "section-beyond-the-real-number-system.html",
  "type": "Section",
  "number": "2.4",
  "title": "Beyond the Real Number System",
  "body": " Beyond the Real Number System   In this section, we address several common extensions to the real number system . Some of these, like the complex numbers and the quaternions , see extensions to arithmetic (at the cost of some of the ordered field axioms). Others, like the extended real numbers , abandon arithmetic altogether in favor of certain order-theoretic properties.    The Complex Numbers   Despite not playing a large role in the field of real analysis, the complex number system is ubiquitous throughout mathematics and merits at least a brief mention. The extension of the real numbers to the complex numbers ameliorates an algebraic insufficiency of , namely that it does not contain the roots of all polynomials. For example, there is no real number so that .    Complex number  complex number            A complex number is an ordered pair of real numbers , the first of which is called the real part and is denoted and the second of which is called the imaginary part and is denoted . The set of all complex numbers is denoted .  The sum  and product  of two complex numbers are the complex numbers defined by the formulae . The imaginary unit  is the complex number , and we note that .     Real numbers as complex numbers   There is an injective map so that and for all real numbers .    Let be the function defined by the formula . Since projection onto the first factor is a left inverse to , is left-invertible and hence injective by (1) of . Moreover, , and for all real numbers .    As in previous extensions of the usual number systems, we will use the injective map defined in to view the real numbers as a subset of the complex numbers . As a first example of this, we will denote the complex number as going forward.   Complex conjugate  (complex) conjugate       the conjugate of      The conjugate  of a complex number is the complex number .     Complex conjugates   For all complex numbers , is a non-negative real number, and is positive if and only if is non-zero    Let be a complex number, and note that is a sum of squares of real numbers, and hence is non-negative. Moreover, is positive unless , in which case as well.     Magnitude of a complex number  magnitude       the magnitude of      The magnitude  of a complex number is the non-negative real number defined by .     The field of complex numbers    is a field.     While the complex numbers are a field, they are not an ordered field.   Orders on the complex numbers   There is no total order on the complex numbers so that is an ordered field.     So the addition of the non-real complex numbers to the real number system comes at the expense of some of the ordered field axioms. We will see that this is also true of further extensions; for example, multiplication of quaternions is not commutative.     Infinity        Extended real number  extended real number  infinity       the set of extended real numbers         positive infinity         negative infinity     An extended real number is either a real number or one of two infinite elements or . The set of extended real numbers is denoted .  The standard ordering on the real numbers is extended to a total order on by requiring for all real numbers .     Interval  interval            Let be extended real numbers so that .   Closed interval  The closed interval  from to is the subset of the extended real numbers defined by .    Open interval  The open interval  from to is the subset of the extended real numbers defined by .    Half-closed, half-open interval  The half-closed, half-open interval  from to is the subset of the extended real numbers defined by .    Closed interval  The half-open, half-closed interval  from to is the subset of the extended real numbers defined by .        Intervals   The following are examples of intervals:   (Extended) real numbers  The real numbers and the extended real numbers are open and closed intervals, respectively; concretely, and .    Dedekind cuts  Given a real number , the Dedekind cut corresponding to is .        Suprema and infima   Any subset of the extended real numbers has a supremum in .    Let be a subset of the extended real numbers . If , then . If and is not bounded from above, then . If and is bounded from above, then . Finally, if and , then .     indeterminate form  We note that the binary operations of addition and multiplication do not fully extend to the set of extended real numbers. Indeed, there are several indeterminate forms like and which cannot be consistently resolved.      Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available in . However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Problems   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these problems are available in . However, these are provided in order to check your work. If you are unable to solve the above problems, discuss your questions with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-beyond-the-real-number-system-2-1",
  "level": "2",
  "url": "section-beyond-the-real-number-system.html#section-beyond-the-real-number-system-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complex numbers quaternions extended real numbers "
},
{
  "id": "subsection-the-complex-numbers-2-1",
  "level": "2",
  "url": "section-beyond-the-real-number-system.html#subsection-the-complex-numbers-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complex number system "
},
{
  "id": "definition-complex-number",
  "level": "2",
  "url": "section-beyond-the-real-number-system.html#definition-complex-number",
  "type": "Definition",
  "number": "2.4.1",
  "title": "Complex number.",
  "body": " Complex number  complex number            A complex number is an ordered pair of real numbers , the first of which is called the real part and is denoted and the second of which is called the imaginary part and is denoted . The set of all complex numbers is denoted .  The sum  and product  of two complex numbers are the complex numbers defined by the formulae . The imaginary unit  is the complex number , and we note that .   "
},
{
  "id": "lemma-real-numbers-are-complex-numbers",
  "level": "2",
  "url": "section-beyond-the-real-number-system.html#lemma-real-numbers-are-complex-numbers",
  "type": "Lemma",
  "number": "2.4.2",
  "title": "Real numbers as complex numbers.",
  "body": " Real numbers as complex numbers   There is an injective map so that and for all real numbers .    Let be the function defined by the formula . Since projection onto the first factor is a left inverse to , is left-invertible and hence injective by (1) of . Moreover, , and for all real numbers .   "
},
{
  "id": "definition-complex-conjugate",
  "level": "2",
  "url": "section-beyond-the-real-number-system.html#definition-complex-conjugate",
  "type": "Definition",
  "number": "2.4.3",
  "title": "Complex conjugate.",
  "body": " Complex conjugate  (complex) conjugate       the conjugate of      The conjugate  of a complex number is the complex number .   "
},
{
  "id": "lemma-complex-conjugate",
  "level": "2",
  "url": "section-beyond-the-real-number-system.html#lemma-complex-conjugate",
  "type": "Lemma",
  "number": "2.4.4",
  "title": "Complex conjugates.",
  "body": " Complex conjugates   For all complex numbers , is a non-negative real number, and is positive if and only if is non-zero    Let be a complex number, and note that is a sum of squares of real numbers, and hence is non-negative. Moreover, is positive unless , in which case as well.   "
},
{
  "id": "definition-magnitude-of-a-complex-number",
  "level": "2",
  "url": "section-beyond-the-real-number-system.html#definition-magnitude-of-a-complex-number",
  "type": "Definition",
  "number": "2.4.5",
  "title": "Magnitude of a complex number.",
  "body": " Magnitude of a complex number  magnitude       the magnitude of      The magnitude  of a complex number is the non-negative real number defined by .   "
},
{
  "id": "proposition-the-field-of-complex-numbers",
  "level": "2",
  "url": "section-beyond-the-real-number-system.html#proposition-the-field-of-complex-numbers",
  "type": "Proposition",
  "number": "2.4.6",
  "title": "The field of complex numbers.",
  "body": " The field of complex numbers    is a field.    "
},
{
  "id": "proposition-orders-on-the-complex-numbers",
  "level": "2",
  "url": "section-beyond-the-real-number-system.html#proposition-orders-on-the-complex-numbers",
  "type": "Proposition",
  "number": "2.4.7",
  "title": "Orders on the complex numbers.",
  "body": " Orders on the complex numbers   There is no total order on the complex numbers so that is an ordered field.   "
},
{
  "id": "subsection-the-complex-numbers-12-1",
  "level": "2",
  "url": "section-beyond-the-real-number-system.html#subsection-the-complex-numbers-12-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quaternions "
},
{
  "id": "definition-extended-real-number",
  "level": "2",
  "url": "section-beyond-the-real-number-system.html#definition-extended-real-number",
  "type": "Definition",
  "number": "2.4.8",
  "title": "Extended real number.",
  "body": " Extended real number  extended real number  infinity       the set of extended real numbers         positive infinity         negative infinity     An extended real number is either a real number or one of two infinite elements or . The set of extended real numbers is denoted .  The standard ordering on the real numbers is extended to a total order on by requiring for all real numbers .   "
},
{
  "id": "definition-interval",
  "level": "2",
  "url": "section-beyond-the-real-number-system.html#definition-interval",
  "type": "Definition",
  "number": "2.4.9",
  "title": "Interval.",
  "body": " Interval  interval            Let be extended real numbers so that .   Closed interval  The closed interval  from to is the subset of the extended real numbers defined by .    Open interval  The open interval  from to is the subset of the extended real numbers defined by .    Half-closed, half-open interval  The half-closed, half-open interval  from to is the subset of the extended real numbers defined by .    Closed interval  The half-open, half-closed interval  from to is the subset of the extended real numbers defined by .      "
},
{
  "id": "example-intervals",
  "level": "2",
  "url": "section-beyond-the-real-number-system.html#example-intervals",
  "type": "Example",
  "number": "2.4.10",
  "title": "Intervals.",
  "body": " Intervals   The following are examples of intervals:   (Extended) real numbers  The real numbers and the extended real numbers are open and closed intervals, respectively; concretely, and .    Dedekind cuts  Given a real number , the Dedekind cut corresponding to is .      "
},
{
  "id": "theorem-suprema-and-infima",
  "level": "2",
  "url": "section-beyond-the-real-number-system.html#theorem-suprema-and-infima",
  "type": "Theorem",
  "number": "2.4.11",
  "title": "Suprema and infima.",
  "body": " Suprema and infima   Any subset of the extended real numbers has a supremum in .    Let be a subset of the extended real numbers . If , then . If and is not bounded from above, then . If and is bounded from above, then . Finally, if and , then .   "
},
{
  "id": "subsection-infinity-7-2",
  "level": "2",
  "url": "section-beyond-the-real-number-system.html#subsection-infinity-7-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "indeterminate forms "
},
{
  "id": "section-introduction-to-metric-geometry",
  "level": "1",
  "url": "section-introduction-to-metric-geometry.html",
  "type": "Section",
  "number": "3.1",
  "title": "Introduction to Metric Geometry",
  "body": " Introduction to Metric Geometry   To begin, we introduce a generalization of our usual notion of distance which is called a metric . The properties of physical distance make it an extremely useful tool for formalizing the analytical notions mentioned above.    Introduction to Metrics   Not all properties of physical distance are generic enough to generalize to other settings in which we might want to measure distance-like quantities. This question of which properties of a specific example (usually Euclidean space) are salient enough to merit requirement in a generalization is ubiquitous throughout mathematical exposition, and will recur frequently throughout this text.    Metric space  metric  ground set  point  non-degeneracy  symmetry  triangle inequality  metric space   A real-valued function on the Cartesian square of a set , which is called the ground set and whose elements are called points , is a metric on if it has the following properties:   Non-degeneracy  For any points , if and only if .    Symmetry   for any points .    Triangle inequality   for any points .   In this case, the ordered pair is called a metric space .     Implied metrics  We will see that, in general, there are many metrics on a given set, no one of which may truly be considered canonical. In fact, even though some distinct metrics give identical answers to point-set topological concerns such as convergence and continuity, in most cases even a choice one of these classes of metrics is arbitrary in some respects.  However, sometimes, if a metric on a set is clear from context, previously specified, or implicitly present, some mathematicians will refer to the metric space by only the underlying set . We will try to avoid such ambiguities, and we will attempt to always explicitly specify the metric with which we will be working.    Metric spaces   The following are examples of metrics and metric spaces:   Euclidean metric  Euclidean space  real line  Euclidean plane  complex plane  Let be a natural number. The Euclidean metric  on -dimensional real coordinate space is the function defined by the formula . Similarly, the Euclidean metric  on -dimensional real coordinate space is the function defined by the formula .  As defined above, the Euclidean metrics are metrics on and , respectively. The metric spaces and are called -dimensional real Euclidean space and -dimensional complex Euclidean space , respectively. - and -dimensional real Euclidean space and are called the real line and the Euclidean plane , respectively, and -dimensional complex Euclidean space is called the complex plane .    Consider the real-valued function defined by the formula As defined above, is a metric on the open interval , and so is a metric space.    discrete metric  discrete metric space       the discrete metric on     The discrete metric  on a set is the function defined by the formula . As defined above, the discrete metric is a metric on , and the metric space is called a discrete metric space .       The definition of a metric is pretty abstract, and it may be difficult to see how or why requiring only nondegeneracy, symmetry, and the triangle inequality would give a useful generalization of distance, especially given the strange and outlandish properties of the discrete metric described above, which we will explore later in this section. However, requiring the three above properties actually forces a metric to have many of the properties of our usual notion of distance, and so we can often use our knowledge of distance in the physical world to inform our intuition about metric spaces.  As an example, consider for a moment the notion of negative distance. In the real world, it makes no sense to consider negative distances between physical objects, and we would be equally confused by negative distances between points in a metric space. However, the defining axioms of a metric do not a priori explicitly forbid this nonsensical outcome from occurring. At first glance, it might seem like a metric might be allowed to take negative values, even though the three examples of a metric given above are certainly nonnegative. In fact, this is never the case.   Metrics are non-negative   A metric takes only non-negative values.    Let be a metric on a set , and note that for all points .    The above argument shows that, just as in the physical world, the distance between any two points in a metric space must be nonnegative. In fact, unlike many of the spaces which are studied by analysts (some of which we will encounter in the following chapters), metric spaces can be surprisingly accessible using only our intuitions about distance in the physical world. For example, the triangle inequality expresses that there are no shortcuts between two points in a metric space through a third point; in geometric terms, we require that no leg of a triangle may exceed in length the sum of the lengths of the other two legs. While the triangle inequality establishes an upper bound on the length of a leg of a triangle, the following property of a metric is called the reverse triangle inequality , and it establishes a lower bound on the length of a leg of a triangle.   Reverse triangle inequality   Let be a metric space. Then for all points .    If , then , and so . On the other hand, if , then , and so .     We have just seen that metric spaces often agree with our geometric intuitions about distance. However, we must be careful not to assume too much about the geometry of metric spaces in general; even though many of the usual properties of distance in the physical world are implied by the defining axioms of a metric space, there is still lots of room for geometric peculiarities. In particular, some of the metrics defined above disagree with our geometric intuitions in confusing ways. This is because they satisfy a stronger form of the triangle inequality than is true in the physical world. We will explore these ultrametrics in the reading questions for this section.     Constructing New Metrics   We will now see how to construct new metrics out of given metric spaces. Given a metric space, there is a natural metric on any subset of its ground set. This restriction of the metric structure to a subset is done in the obvious way; the distance between any points in the subset is just their distance when considered as points in the bigger space. In this way, a metric on a set is said to induce a metric on all of its subsets.    Induced metric  induced metric  metric subspace   Let be a subset of a metric space . The induced metric on is the restriction of to . The metric space is called a metric subspace of the metric space .  In practice, we often write that is a metric on , even if the domain of is strictly larger than . We will not distinguish between a metric and its restriction to a smaller space.     Discrete metric subspaces   Let be a subset of a set . The discrete metric on is induced on by the discrete metric on ; that is, . Thus the discrete metric space is a metric subspace of the discrete metric space .    Thus far, we have been very careful when working in a metric space to specify not only the ground set but also the metric. This is because we can in general find many metrics on a given underlying set. In fact, given one or more metrics on a set, there are several ways of constructing new metrics on that set. In particular, any finite positive pointwise linear combination of metrics is itself a metric.   Linear combinations of metrics   Any positive real linear combination of metrics is a metric.    Let be a set, and consider positive real numbers and metrics on . Denote by the linear combination defined by the formula . First let be points, and suppose that . Then . Since and for all indices , we conclude that for all indices . In particular, .  Conversely, now suppose that . Then . Thus is non-degenerate.  Note that for all points , and so is symmetric.  Finally, note that for all points , and so satisfies the triangle inequality. Since is non-degenerate, symmetric, and satisfies the triangle inequality, it is a metric on .     In particular, the sum of two metrics is a metric, and any positive real multiple of a metric is a metric.     Normed Vector Spaces   The ground sets of many of the metric spaces which we will investigate over the course of this chapter can also be considered as the ground sets of vector spaces. Moreover, in practically all of these cases, the linear-algebraic structure of the vector space is compatible with the analytical structure of the metric, in a way which we will make precise shortly. We now introduce a mathematical structure called a normed vector space , the study of which is called functional analysis and lies at the intersection of linear algebra and mathematical analysis. Aptly named, a normed vector space is a vector space equipped with the additional structure of a norm. Just as metrics generalize the notion of the distance between two points, norms on vector spaces generalize the related notion of the length of a vector.    Normed vector space  norm  non-degeneracy  absolute homogeneity  sub-additivity  normed vector space       The norm of a vector      A real-valued function on a real or complex vector space is a norm on if it has the following properties:   Non-degeneracy  For any vector , if and only if .    Absolute homogeneity   for any scalar and vector .    Sub-additivity   for all vectors .   In this case, the ordered pair is called a normed vector space .    Normed vector spaces are ubiquitous throughout mathematics. In fact, many of the vector spaces which you will have encountered in any course in linear algebra have canonical norms associated to them; lots of the vector spaces which are familiar to you have been normed vector spaces all along.   Normed vector spaces   The following are examples of normed vector spaces:    -norm       the -norm    Euclidean norm  Let be a natural number, and fix a positive real number . The  -norm  on -dimensional real coordinate space is the real-valued function defined by the formula . Similarly, the  -norm  on -dimensional complex coordinate space is the real-valued function defined by the formula . If , then the -norms are norms on and , and so and are normed vector spaces.  In particular, the -norms on and are called the Euclidean norms on and . Because the Euclidean norms are so ubiquitous, we will often drop the subscripts in our notation, so that .     -norm       the -norm    Let be a natural number. The families of -norms on -dimensional real and complex coordinate space and can be extended to the case . The  -norm  on is the real-valued function defined by the formula . Similarly, the  -norm  on is the real-valued function defined by the formula . The -norms are norms on and , and so and are normed vector spaces.    Euclidean inner product  Any Hermitian inner product on a real or complex vector space induces a norm on defined by the formula . In fact, for all natural numbers , the norms produced in this manner by the dot product on -dimensional real and complex coordinate space and are precisely the Euclidean norms. For this reason, the dot product is often called the Euclidean inner product on and .   The above examples show that many of our familiar vector spaces have canonical norms readily available.      -norms on -dimensional vector spaces  Note that for all real numbers , and similarly for all complex numbers ; that is, all of the norms (including the case ) on the real numbers and the complex numbers agree. Such statements do not hold in higher dimensions, although we will see that the -norms remain related for topological concerns.   Just as in the case of metrics, we would prefer to consider only non-negative vector lengths. It makes no sense to consider negative lengths of physical vectors, and it is just as difficult to make sense of negative values of a norm in a normed vector space. Thankfully, the defining axioms of a norm prevent this from occurring.   Norms are non-negative   A norm takes only non-negative values.    Let be a norm on a real or complex vector space , and note that for all vectors .     Normed vector spaces are metric spaces  induced metric   A norm on a real or complex vector space induces a metric defined by the formula .    First, let be vectors, and suppose that . Then , and so ; that is, . Conversely, if , then . Thus is non-degenerate.  Since for all vectors , is symmetric.  Finally, since for all vectors , satisfies the triangle inequality. Since is non-degenerate, symmetric, and satisfies the triangle inequality, it is a metric on .    So, given a normed vector space, we may easily convert it into a metric space by defining the distance between two vectors to be the norm of their difference. Many important metric spaces arise as a result of this construction.    -metrics   -metric       the -metric     Let be a natural number, and fix an extended real number . The metrics on -dimensional real and complex coordinate spaces and by the -norms are called  -metrics . These -metrics are defined by the formula . In particular, we note that the metrics induced by the Euclidean norms are the Euclidean metrics.     So any norm structure on a real or complex vector space can be reanalyzed as also providing a metric structure. However, a metric on a real or complex vector space need not be induced by a norm. Moreover, there exist metric spaces which cannot be constructed from a normed vector space. So, while normed vector spaces are very useful for defining specific metric spaces, they do not capture all of what can be said about metric spaces, and so will not merit any more special consideration just yet. With this illuminating example of normed vector spaces in mind, we now resume our study of metric spaces in their full generality.     In the next section, we introduce one of the most important ideas in the field of analysis: that of convergence to a limit.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.    Computing distances in metric spaces   Compute the distance between the given points in the indicated metric space.     Let be the Euclidean metric on the real coordinate plane .     Compute , where and .     .    We compute .      Compute , where and .     .    We compute .       Let be the -metric on the real coordinate plane .     Compute , where and .     .    We compute .       Let be the -metric on the real coordinate plane .     Compute , where and .     .    We compute .      Compute , where and .     .    We compute .       Let be the discrete metric on the real coordinate plane .     Compute , where and .     .    Since , .      Compute , where and .     .    Since , .       Short answers and\/or in-depth solutions to these exercises are available in . However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Problems   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .    From pseudometrics to metrics  pseudometric  pseudometric space   A real-valued function on the Cartesian square of a set , which is called the ground set and whose elements are called points , is a pseudometric on if it has the following properties:   Identity   for any point .    Symmetry   for any points .    Triangle inequality   for any points .   In this case, the ordered pair is called a pseudometric space .     Let be a pseudometric on a set , and consider the binary relation on defined so that if and only if . Prove that is an equivalence relation on .    asdf    asdf      Prove that a pseudometric descends to a well-defined metric on the quotient set defined by the formula .    asdf    asdf      Norm equivalence  norm equivalence   Two norms on a real or complex vector space are called equivalent if there are positive real numbers so that for all vectors .     Prove that norm equivalence is an equivalence relation on the set of norms on .    asdf      Prove that for a given natural number , any two -norms on -dimensional real coordinate space for are all equivalent.    asdf      Ultrametrics  ultrametric  ultrametric space   A real-valued function on the Cartesian square of a set is called an ultrametric on , which is called the ground set and whose elements are called points if it satisfies the following conditions:   Non-degeneracy  For any points , if and only if .    Symmetry   for any points .    Strong triangle inequality   for any points .   If a real-valued function is an ultrametric on , then the ordered pair is called an ultrametric space.     Prove that any ultrametric is a metric.    asdf      Fix a prime number . The  -adic valuation  is a rational-valued function defined by the formula , where is the unique integer so that for some integers which are not divisible by .  Prove that the -adic valuation induces an ultrametric defined by the formula . This ultrametric is called the  -adic metric on .    asdf      Prove that for all points in an ultrametric space , if , then .    asdf     The geometry of non-Archimedean metric spaces differs in several ways from our intuitions about Euclidean geometry informed by our experience of distance in the physical world. We will see several of these differences over the course of this chapter.     In-depth solutions to these problems are available in . However, these are provided in order to check your work. If you are unable to solve the above problems, discuss your questions with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-introduction-to-metric-geometry-2-1",
  "level": "2",
  "url": "section-introduction-to-metric-geometry.html#section-introduction-to-metric-geometry-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "metric "
},
{
  "id": "definition-metric-space",
  "level": "2",
  "url": "section-introduction-to-metric-geometry.html#definition-metric-space",
  "type": "Definition",
  "number": "3.1.1",
  "title": "Metric space.",
  "body": " Metric space  metric  ground set  point  non-degeneracy  symmetry  triangle inequality  metric space   A real-valued function on the Cartesian square of a set , which is called the ground set and whose elements are called points , is a metric on if it has the following properties:   Non-degeneracy  For any points , if and only if .    Symmetry   for any points .    Triangle inequality   for any points .   In this case, the ordered pair is called a metric space .   "
},
{
  "id": "remark-implied-metrics",
  "level": "2",
  "url": "section-introduction-to-metric-geometry.html#remark-implied-metrics",
  "type": "Remark",
  "number": "3.1.2",
  "title": "Implied metrics.",
  "body": " Implied metrics  We will see that, in general, there are many metrics on a given set, no one of which may truly be considered canonical. In fact, even though some distinct metrics give identical answers to point-set topological concerns such as convergence and continuity, in most cases even a choice one of these classes of metrics is arbitrary in some respects.  However, sometimes, if a metric on a set is clear from context, previously specified, or implicitly present, some mathematicians will refer to the metric space by only the underlying set . We will try to avoid such ambiguities, and we will attempt to always explicitly specify the metric with which we will be working.  "
},
{
  "id": "example-metric-spaces",
  "level": "2",
  "url": "section-introduction-to-metric-geometry.html#example-metric-spaces",
  "type": "Example",
  "number": "3.1.3",
  "title": "Metric spaces.",
  "body": " Metric spaces   The following are examples of metrics and metric spaces:   Euclidean metric  Euclidean space  real line  Euclidean plane  complex plane  Let be a natural number. The Euclidean metric  on -dimensional real coordinate space is the function defined by the formula . Similarly, the Euclidean metric  on -dimensional real coordinate space is the function defined by the formula .  As defined above, the Euclidean metrics are metrics on and , respectively. The metric spaces and are called -dimensional real Euclidean space and -dimensional complex Euclidean space , respectively. - and -dimensional real Euclidean space and are called the real line and the Euclidean plane , respectively, and -dimensional complex Euclidean space is called the complex plane .    Consider the real-valued function defined by the formula As defined above, is a metric on the open interval , and so is a metric space.    discrete metric  discrete metric space       the discrete metric on     The discrete metric  on a set is the function defined by the formula . As defined above, the discrete metric is a metric on , and the metric space is called a discrete metric space .      "
},
{
  "id": "lemma-metrics-are-non-negative",
  "level": "2",
  "url": "section-introduction-to-metric-geometry.html#lemma-metrics-are-non-negative",
  "type": "Lemma",
  "number": "3.1.4",
  "title": "Metrics are non-negative.",
  "body": " Metrics are non-negative   A metric takes only non-negative values.    Let be a metric on a set , and note that for all points .   "
},
{
  "id": "subsection-introduction-to-metrics-9",
  "level": "2",
  "url": "section-introduction-to-metric-geometry.html#subsection-introduction-to-metrics-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "reverse triangle inequality "
},
{
  "id": "proposition-reverse-triangle-inequality",
  "level": "2",
  "url": "section-introduction-to-metric-geometry.html#proposition-reverse-triangle-inequality",
  "type": "Proposition",
  "number": "3.1.5",
  "title": "Reverse triangle inequality.",
  "body": " Reverse triangle inequality   Let be a metric space. Then for all points .    If , then , and so . On the other hand, if , then , and so .   "
},
{
  "id": "subsection-introduction-to-metrics-11-1",
  "level": "2",
  "url": "section-introduction-to-metric-geometry.html#subsection-introduction-to-metrics-11-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ultrametrics "
},
{
  "id": "definition-induced-metric",
  "level": "2",
  "url": "section-introduction-to-metric-geometry.html#definition-induced-metric",
  "type": "Definition",
  "number": "3.1.6",
  "title": "Induced metric.",
  "body": " Induced metric  induced metric  metric subspace   Let be a subset of a metric space . The induced metric on is the restriction of to . The metric space is called a metric subspace of the metric space .  In practice, we often write that is a metric on , even if the domain of is strictly larger than . We will not distinguish between a metric and its restriction to a smaller space.   "
},
{
  "id": "example-discrete-metric-subspaces",
  "level": "2",
  "url": "section-introduction-to-metric-geometry.html#example-discrete-metric-subspaces",
  "type": "Example",
  "number": "3.1.7",
  "title": "Discrete metric subspaces.",
  "body": " Discrete metric subspaces   Let be a subset of a set . The discrete metric on is induced on by the discrete metric on ; that is, . Thus the discrete metric space is a metric subspace of the discrete metric space .   "
},
{
  "id": "proposition-linear-combinations-of-metrics",
  "level": "2",
  "url": "section-introduction-to-metric-geometry.html#proposition-linear-combinations-of-metrics",
  "type": "Proposition",
  "number": "3.1.8",
  "title": "Linear combinations of metrics.",
  "body": " Linear combinations of metrics   Any positive real linear combination of metrics is a metric.    Let be a set, and consider positive real numbers and metrics on . Denote by the linear combination defined by the formula . First let be points, and suppose that . Then . Since and for all indices , we conclude that for all indices . In particular, .  Conversely, now suppose that . Then . Thus is non-degenerate.  Note that for all points , and so is symmetric.  Finally, note that for all points , and so satisfies the triangle inequality. Since is non-degenerate, symmetric, and satisfies the triangle inequality, it is a metric on .   "
},
{
  "id": "subsection-normed-vector-spaces-2-1",
  "level": "2",
  "url": "section-introduction-to-metric-geometry.html#subsection-normed-vector-spaces-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "normed vector space functional analysis "
},
{
  "id": "definition-normed-vector-space",
  "level": "2",
  "url": "section-introduction-to-metric-geometry.html#definition-normed-vector-space",
  "type": "Definition",
  "number": "3.1.9",
  "title": "Normed vector space.",
  "body": " Normed vector space  norm  non-degeneracy  absolute homogeneity  sub-additivity  normed vector space       The norm of a vector      A real-valued function on a real or complex vector space is a norm on if it has the following properties:   Non-degeneracy  For any vector , if and only if .    Absolute homogeneity   for any scalar and vector .    Sub-additivity   for all vectors .   In this case, the ordered pair is called a normed vector space .   "
},
{
  "id": "example-normed-vector-spaces",
  "level": "2",
  "url": "section-introduction-to-metric-geometry.html#example-normed-vector-spaces",
  "type": "Example",
  "number": "3.1.10",
  "title": "Normed vector spaces.",
  "body": " Normed vector spaces   The following are examples of normed vector spaces:    -norm       the -norm    Euclidean norm  Let be a natural number, and fix a positive real number . The  -norm  on -dimensional real coordinate space is the real-valued function defined by the formula . Similarly, the  -norm  on -dimensional complex coordinate space is the real-valued function defined by the formula . If , then the -norms are norms on and , and so and are normed vector spaces.  In particular, the -norms on and are called the Euclidean norms on and . Because the Euclidean norms are so ubiquitous, we will often drop the subscripts in our notation, so that .     -norm       the -norm    Let be a natural number. The families of -norms on -dimensional real and complex coordinate space and can be extended to the case . The  -norm  on is the real-valued function defined by the formula . Similarly, the  -norm  on is the real-valued function defined by the formula . The -norms are norms on and , and so and are normed vector spaces.    Euclidean inner product  Any Hermitian inner product on a real or complex vector space induces a norm on defined by the formula . In fact, for all natural numbers , the norms produced in this manner by the dot product on -dimensional real and complex coordinate space and are precisely the Euclidean norms. For this reason, the dot product is often called the Euclidean inner product on and .   The above examples show that many of our familiar vector spaces have canonical norms readily available.   "
},
{
  "id": "remark-p-norms-on-one-dimensional-vector-spaces",
  "level": "2",
  "url": "section-introduction-to-metric-geometry.html#remark-p-norms-on-one-dimensional-vector-spaces",
  "type": "Remark",
  "number": "3.1.11",
  "title": "<span class=\"process-math\">\\(p \\)<\/span>-norms on <span class=\"process-math\">\\(1 \\)<\/span>-dimensional vector spaces.",
  "body": "  -norms on -dimensional vector spaces  Note that for all real numbers , and similarly for all complex numbers ; that is, all of the norms (including the case ) on the real numbers and the complex numbers agree. Such statements do not hold in higher dimensions, although we will see that the -norms remain related for topological concerns.  "
},
{
  "id": "lemma-norms-are-non-negative",
  "level": "2",
  "url": "section-introduction-to-metric-geometry.html#lemma-norms-are-non-negative",
  "type": "Lemma",
  "number": "3.1.12",
  "title": "Norms are non-negative.",
  "body": " Norms are non-negative   A norm takes only non-negative values.    Let be a norm on a real or complex vector space , and note that for all vectors .   "
},
{
  "id": "theorem-normed-vector-spaces-are-metric-spaces",
  "level": "2",
  "url": "section-introduction-to-metric-geometry.html#theorem-normed-vector-spaces-are-metric-spaces",
  "type": "Theorem",
  "number": "3.1.13",
  "title": "Normed vector spaces are metric spaces.",
  "body": " Normed vector spaces are metric spaces  induced metric   A norm on a real or complex vector space induces a metric defined by the formula .    First, let be vectors, and suppose that . Then , and so ; that is, . Conversely, if , then . Thus is non-degenerate.  Since for all vectors , is symmetric.  Finally, since for all vectors , satisfies the triangle inequality. Since is non-degenerate, symmetric, and satisfies the triangle inequality, it is a metric on .   "
},
{
  "id": "example-p-metrics",
  "level": "2",
  "url": "section-introduction-to-metric-geometry.html#example-p-metrics",
  "type": "Example",
  "number": "3.1.14",
  "title": "<span class=\"process-math\">\\(p \\)<\/span>-metrics.",
  "body": "  -metrics   -metric       the -metric     Let be a natural number, and fix an extended real number . The metrics on -dimensional real and complex coordinate spaces and by the -norms are called  -metrics . These -metrics are defined by the formula . In particular, we note that the metrics induced by the Euclidean norms are the Euclidean metrics.   "
},
{
  "id": "exercise-computing-distances-in-metric-spaces-3",
  "level": "2",
  "url": "section-introduction-to-metric-geometry.html#exercise-computing-distances-in-metric-spaces-3",
  "type": "Problem",
  "number": "3.1.4.1",
  "title": "",
  "body": "  Let be the Euclidean metric on the real coordinate plane .     Compute , where and .     .    We compute .      Compute , where and .     .    We compute .    "
},
{
  "id": "exercise-computing-distances-in-metric-spaces-4",
  "level": "2",
  "url": "section-introduction-to-metric-geometry.html#exercise-computing-distances-in-metric-spaces-4",
  "type": "Problem",
  "number": "3.1.4.2",
  "title": "",
  "body": "  Let be the -metric on the real coordinate plane .     Compute , where and .     .    We compute .    "
},
{
  "id": "exercise-computing-distances-in-metric-spaces-5",
  "level": "2",
  "url": "section-introduction-to-metric-geometry.html#exercise-computing-distances-in-metric-spaces-5",
  "type": "Problem",
  "number": "3.1.4.3",
  "title": "",
  "body": "  Let be the -metric on the real coordinate plane .     Compute , where and .     .    We compute .      Compute , where and .     .    We compute .    "
},
{
  "id": "exercise-computing-distances-in-metric-spaces-6",
  "level": "2",
  "url": "section-introduction-to-metric-geometry.html#exercise-computing-distances-in-metric-spaces-6",
  "type": "Problem",
  "number": "3.1.4.4",
  "title": "",
  "body": "  Let be the discrete metric on the real coordinate plane .     Compute , where and .     .    Since , .      Compute , where and .     .    Since , .    "
},
{
  "id": "exercise-from-pseudometrics-to-metrics",
  "level": "2",
  "url": "section-introduction-to-metric-geometry.html#exercise-from-pseudometrics-to-metrics",
  "type": "Problem",
  "number": "3.1.5.1",
  "title": "From pseudometrics to metrics.",
  "body": " From pseudometrics to metrics  pseudometric  pseudometric space   A real-valued function on the Cartesian square of a set , which is called the ground set and whose elements are called points , is a pseudometric on if it has the following properties:   Identity   for any point .    Symmetry   for any points .    Triangle inequality   for any points .   In this case, the ordered pair is called a pseudometric space .     Let be a pseudometric on a set , and consider the binary relation on defined so that if and only if . Prove that is an equivalence relation on .    asdf    asdf      Prove that a pseudometric descends to a well-defined metric on the quotient set defined by the formula .    asdf    asdf    "
},
{
  "id": "problem-norm-equivalence",
  "level": "2",
  "url": "section-introduction-to-metric-geometry.html#problem-norm-equivalence",
  "type": "Problem",
  "number": "3.1.5.2",
  "title": "Norm equivalence.",
  "body": " Norm equivalence  norm equivalence   Two norms on a real or complex vector space are called equivalent if there are positive real numbers so that for all vectors .     Prove that norm equivalence is an equivalence relation on the set of norms on .    asdf      Prove that for a given natural number , any two -norms on -dimensional real coordinate space for are all equivalent.    asdf    "
},
{
  "id": "problem-ultrametrics",
  "level": "2",
  "url": "section-introduction-to-metric-geometry.html#problem-ultrametrics",
  "type": "Problem",
  "number": "3.1.5.3",
  "title": "Ultrametrics.",
  "body": " Ultrametrics  ultrametric  ultrametric space   A real-valued function on the Cartesian square of a set is called an ultrametric on , which is called the ground set and whose elements are called points if it satisfies the following conditions:   Non-degeneracy  For any points , if and only if .    Symmetry   for any points .    Strong triangle inequality   for any points .   If a real-valued function is an ultrametric on , then the ordered pair is called an ultrametric space.     Prove that any ultrametric is a metric.    asdf      Fix a prime number . The  -adic valuation  is a rational-valued function defined by the formula , where is the unique integer so that for some integers which are not divisible by .  Prove that the -adic valuation induces an ultrametric defined by the formula . This ultrametric is called the  -adic metric on .    asdf      Prove that for all points in an ultrametric space , if , then .    asdf     The geometry of non-Archimedean metric spaces differs in several ways from our intuitions about Euclidean geometry informed by our experience of distance in the physical world. We will see several of these differences over the course of this chapter.   "
},
{
  "id": "section-convergence-and-limits",
  "level": "1",
  "url": "section-convergence-and-limits.html",
  "type": "Section",
  "number": "3.2",
  "title": "Convergence and Limits",
  "body": " Convergence and Limits   In this section, we introduce the most fundamental notion of all of mathematical analysis: that of convergence . Convergence is a formalization of limiting behavior and closeness in metric spaces and, as we will see in the next chapter, other related analytical settings. In this section we will be concerned with convergence in the setting of abstract metric spaces, which can be interpreted as a rigorous formalization of the informal phrase eventually close. In the following section, we will gain a more detailed understanding of limiting behavior in less general example of the Euclidean spaces. Note also that in this chapter, we will be concerned only with the convergence of sequences in metric spaces and maps between metric spaces, but in the next chapter, we will make generalizations which in some ways subsume the discussion in this section.    Sequential Convergence   First, we will investigate the limiting behavior of a sequence in a metric space. Informally, a sequence in a metric space converges to a point if the values of the sequence eventually grows arbitrarily close to that point; that is, a sequence converges to a point if the values of the sequence are close to that point for large indices. Such a sequence is called convergent , and the point to which it converges (which we will see to be uniquely determined by this property) is called its limit .    Sequential convergence\/divergence  converge  diverge  convergent  divergent   A sequence of points in a metric space  converges to a point if for all positive real numbers , there is a natural number so that for all indices .  A sequence of points in a metric space is called convergent if it converges to a point and divergent if it does not converge to any point.    So a sequence converges to a point in a metric space if the values of the sequence can be made arbitrarily close to that point solely by choosing large enough indices, and the sequence diverges if this cannot be done.   Sequential convergence\/divergence   Consider the sequence of real numbers defined by the formula . We will show that converges to in the Euclidean metric on .  Indeed, let be a positive real number. By the Archimedean principle, there is a natural number so that . For all indices , we observe that .  In summary, we have shown that for all positive real numbers , there is an index so that for all indices . Thus converges to .  Note that, in this example, the data of the sequence, the limiting value, the ground set, and the metric are necessary for convergence. By altering any one of these, we may invalidate the convergence we just proved. For example, if we consider as a sequence in the metric subspace of the real line consisting of only positive real numbers, then the sequence diverges, since it does not converge in the Euclidean metric to a positive real number.  Similarly, if we change the metric, then the sequence may not converge. We have just proven that this sequence is convergent in the Euclidean metric by finding a point to which it converges, but it is divergent in the discrete metric . All this is to say that all of the data of a sequence, a metric space, and a purported limiting value are all necessary for claims of convergence or divergence.    Ideally, we would like the limit  of a convergent sequence in a metric space, which is the point to which that sequence converges, to be unique with this property. That is, if a sequence in a metric space converges to a point, then we would like this point to be the only such point to which it converges, which a priori need not be the case. Thankfully, the limits of convergent sequences in metric spaces are indeed unique.   Uniqueness of sequential limits in a metric space   Convergent sequences of points in metric spaces converge to unique points.    Let be a sequence of points in a metric space , and suppose that converges to two points . We will show that .  To that end, let be a positive real number, and note that is a positive real number. There are thus natural numbers so that for all indices and for all indices .  Let , and note that and . We conclude that . In summary, we have shown that for all positive real numbers . Since by , we conclude that and hence .    So if a sequence in a metric space converges to a point, then that point is unique with this property, and is called the limit of the sequence. Many texts in analysis place limits of both sequences and maps (we will define this shortly) in the spotlight; limits are certainly the most important analytical concept introduced in this text. However, we have tried to emphasize the more abstract notion of convergence over that of a limit. We have just proven that the two notions are equivalent in a metric space, but in the next chapter we will explore an analytical setting in which convergent sequences need not converge to a unique limit.   Sequential limit  limit       the limit of      The unique point to which a convergent sequence of points in a metric space converges is called the limit of said sequence, and it is denoted .     Sequential limits   Let be a point in a metric space , and consider the constant sequence of points defined by the formula . For all positive real numbers and all indices , we observe that . Thus converges to ; that is, .    Note that the notation introduced in the above definition is somewhat ambiguous; nowhere does it specify with respect to which metric a sequence converges or in which ground set the values of the sequence are considered to lie. We will try to avoid these ambiguities, but (at least in this text) both the ground set and the metric should always be clear from context. If the expression to the right of the limit operator is a real or complex number, then it's a safe bet to assume that convergence is in the standard Euclidean metric on the real numbers or complex numbers , respectively. Similarly, if the expression to the right of the limit operator is a real or complex coordinate vector, then you should assume that we are working in real or complex coordinate space, respectively, taken with the Euclidean metric. We will properly investigate Euclidean convergence in the section to come.  We next establish a necessary and sufficient condition for sequence convergence in any metric space; that the distances between the points of the sequence and the limiting value converge to zero in the real line. The proof of the following proposition follows directly from the definitions of convergence and limit.   Sequential convergence   Let be a sequence of points in a metric space . Then for any point , if and only if .    We observe that for all indices . First suppose that , and let be a positive real number. Then there is a natural number so that for all indices . In particular, for all indices , and so .  Conversely, now suppose that , and let be a positive real number. Then there is a natural number so that for all indices . In particular, for all indices , and so .    The implications of the above result are that in order to understand sequential convergence and divergence in any metric space, it suffices to understand the convergence and divergence of sequences of real numbers in the Euclidean metric . In the next section, we will examine the properties of convergence and divergence in the Euclidean metric, and use the standard ordering on the real numbers to enrich our understanding of limiting behavior in the real numbers.  We have just seen that the question of convergence or divergence in an arbitrary metric space can be reduced to the question of convergence or divergence of a related sequence of real numbers in the Euclidean metric. We will begin our study of these Euclidean limits by generalizing to the metric induced on real coordinate space by an arbitrary -norm. In real coordinate space, sequential convergence in the Euclidean metric is equivalent to sequential convergence in any of the metrics induced on real coordinate space by a -norm. In fact, something much stronger and much more useful is true; we can reduce the question of convergence or divergence of any sequence of complex coordinate vectors in such a metric to the question of the convergence or divergence of the component sequences in the Euclidean metric on the real numbers.   Sequential convergence in the -metric   Let be a natural number, and consider a sequence of vectors .  For any vector and real number , the sequence converges to in the -metric on if and only if for all indices , the sequence converges to in the Euclidean metric on .    First suppose that converges to in the -metric on . Let , and consider a positive real number . Then there is a natural number so that for all indices . We observe that , so that for all indices . In particular, converges to in the Euclidean metric on .  Conversely, now suppose that for all indices , converges to in the Euclidean metric on . Let be a positive real number. Then is a positive real number, and so for each index there is a natural number so that for all indices . Let , and note that and therefore for all indices . We conclude that converges to in the -metric on .     implies that, in order to know everything about sequential convergence and divergence in the metric induced on real coordinate space by a -norm, it suffices to know about the convergence and divergence of sequences of real numbers in the Euclidean metric. Moreover, all of the -metrics induced on real coordinate space by the -norms are equivalent with respect to the question of sequential convergence and divergence; that is, the convergence of a sequence of real coordinate vectors converges in the metric induced on real coordinate space by a -norm does not depend on .   The reduction of problems of sequential convergence in a metric space to that of convergence of one or more sequences of real numbers in the Euclidean metric will be a common theme in this chapter. In some respect, this reduction is possible because   given a point, a metric necessarily associates the other points of a space with the positive real numbers ; and    convergence in the Euclidean metric can be defined solely in terms of the standard order on the real line .   In the following section, we will discuss sequential convergence and divergence in the Euclidean metric on the real numbers in greater detail.     Pointwise and Uniform Convergence   Later in this chapter, we will establish metrics on certain collections of maps with codomain a given metric space. However, without yet defining a metric on these sets, there are two related but distinct modes of convergence of a sequence of such maps. A sequence of maps to a metric space is said to converge pointwise to a limit map if the images of each input in the domain converge to their images under the limit map. Stronger than pointwise convergence is the notion of uniform convergence , which requires that the speed of pointwise convergence not depend on the given input.    Pointwise convergence\/divergence  pointwise convergence  pointwise divergence   Let be a sequence of maps from a set to a metric space .   Pointwise convergence  The sequence  converges pointwise to a map from to if for all inputs , the sequence of corresponding outputs converges to .  The sequence is called pointwise convergent if it converges pointwise to a map from to .    Pointwise divergence  The sequence is called pointwise divergent if it does not converge pointwise to any map from to .        Pointwise convergence   Consider the sequence of functions defined by the formulae . Since , the sequence converges pointwise to the function defined piecewise by the formula .    Because of the uniqueness of limits of sequences in metric spaces, if a sequence of maps to a metric space converges pointwise to a map, then this map is unique with this property. In this case, the map is called the pointwise limit of the sequence.   Pointwise limit  pointwise limit       pointwise limit of the sequence      For any pointwise convergent sequence of maps from a set to a metric space , the unique map from to to which converges pointwise is called the pointwise limit of , and is denoted .    While some properties of a pointwise convergent sequence of maps to a metric space are shared with its pointwise limit, pointwise convergence does not in general preserve all desirable properties of maps. In particular, implies that a pointwise limit of a sequence of continuous maps need not itself be continuous. We will explore continuity in metric spaces and its relationship with convergence later in this chapter. In order to preserve these properties, we will need a stronger notion of convergence. Informally, a sequence of maps to a metric space is said to converge uniformly it converges pointwise at roughly the same rate at each point in the domain.   Uniform convergence  uniform convergence  uniform divergence   Let be a sequence of maps from a set to a metric space .   Uniform convergence  The sequence  converges uniformly to a map from to if for all positive real numbers , there is a natural number so that for all inputs and indices .  The sequence is called uniformly convergent if it converges uniformly to a map from to .    Uniform divergence  The sequence is called uniformly divergent if it does not converge uniformly to any map from to .        Uniform convergence\/divergence   The following are examples of uniformly convergent and divergent sequences of maps:   Consider the sequence of functions defined by the formulae , and let be the function defined piecewise by the formula . We observe that for all positive integers and inputs . We conclude that does not converge uniformly to .    Consider the sequence of functions defined by the formulae , and let be the function defined by the formula . For all positive real numbers , the Archimedean principle implies that for some positive integer . We observe that for all indices and inputs . We conclude that converges uniformly to .       We remark that pointwise and uniform convergence are distinct concepts; that is, there are sequences of maps to a metric space which converge pointwise but not uniformly. However, the opposite relationship is not true: uniform convergence is a stronger condition on sequences of maps to a metric space than pointwise convergence; that is, a sequence of maps to a metric space converges uniformly only if it converges pointwise.   Pointwise and uniform convergence   If a sequence of maps from a set to a metric space converges uniformly, then it converges pointwise.    Suppose that a sequence of maps from a set to a metric space converges uniformly to a map from to . Then for all positive real numbers , there is a natural number so that for all indices and inputs . In particular, for each input , for all indices , and so the sequence converges to . We conclude that converges pointwise to .    Taken with the uniqueness of the pointwise limit of a sequence of maps to a metric space, immediately implies that if a sequence of maps to a metric space converges uniformly to a map, then this map is unique with this property. In this case, the map is called the uniform limit of the sequence.   Uniform limit  uniform limit       uniform limit of the sequence      For any uniformly convergent sequence of maps from a set to a metric space , the unique map from to to which converges uniformly is called the uniform limit of , and is denoted .     Uniform limit   Consider the sequence of functions defined by the formulae , and let be the function defined by the formula . Since converges uniformly to as shown in , is the uniform limit of ; that is, . We might also write that .     So a sequence of maps to a metric space converges uniformly only if it converges pointwise. The reverse implication, however, is not in general true. In the following sections, we will see that, unlike in the case of pointwise convergence, many of the desirable properties of maps between metric spaces are preserved under uniform convergence.     Map Convergence   Just as we can use a metric to define the convergence of a sequence of points or maps in a metric space, we can similarly consider the convergence of maps between metric spaces. In our definition of sequence convergence, we considered a sequence to converge to a limit if the points of the sequence could be made arbitrarily close to the limit point solely by choosing large enough indices. We will similarly consider a map between metric spaces to converge to a limit in the codomain at a point in the domain if we can make outputs close to the limit in the codomain solely by choosing inputs close to the point in the domain.  In the case of sequential convergence, we used the standard ordering on the natural numbers to induce a notion of limiting behavior by considering arbitrarily large indices. For map convergence , however, we use the metric in the domain to consider arbitrarily close points to the point in question.    Map convergence  map convergence   Let be a map from a metric space to a metric space .   Map convergence    converges at a point to a point if for all positive real numbers , there exists a positive real number so that for all inputs so that .  The map is called convergent at a point if it converges at to some point .    Map divergence  The map is called divergent at a point if it does not converge at to any point .        Map convergence   Consider the real-valued function defined piecewise by the formula . As the graph of suggests, converges to at in the Euclidean metric on .  Indeed, let be a positive real number, and let . Then for all inputs so that .    In analogy to the case of sequential convergence, in order to study map convergence between metric spaces, it suffices to study the convergence of real-valued functions on metric spaces.   Map convergence   Let be a map from a metric space to a metric space . For each point , let be the real-valued function on defined by the formula . Then converges to at if and only if converges to at .    We first observe that for all .  Suppose first that converges to at , and let be a positive real number. Then there is some positive real number so that for all inputs so that . We observe that for all inputs so that , and so converges to at .  Conversely, now suppose that converges to at , and let be a positive real number. Then there is some positive real number so that for all inputs so that . We observe that for all inputs so that , and so converges to at .    So we can reduce the question of convergence for maps between metric spaces to that of Euclidean convergence of real-valued functions on metric spaces. We will study the important topic of convergence of such real-valued functions under the Euclidean metric on the real numbers in detail in .  The following theorem establishes another necessary and sufficient condition for map convergence; a map between metric spaces converges if and only if all convergent sequences in the domain can be pushed through to convergent sequences in the codomain.   Sequential characterization of map convergence   Let be a map from a metric space to a metric space . For all points and , converges to at if and only if for all sequences of points , if , then .    First suppose that converges to at , and consider a sequence of points which converges to . We observe that for all indices .  Let be a positive real number. Then there is a positive real number so that for all points so that . Since , there is a natural number so that for all indices . In particular, this implies that for all indices . We conclude that converges to .  Conversely, now suppose that does not converge to at . Then there is a positive real number so that for all positive real numbers , there is a point so that but . In particular, let be a sequence of positive real numbers which converges in the Euclidean metric to . For each index , there is a point so that but . Since for all indices , implies that converges to but does not converge to .    The above result relates map convergence and sequential convergence. Note, however, that this theorem and the uniqueness of sequential limits in metric spaces do not necessarily imply the uniqueness of the limit of a convergent map between metric spaces. In fact, map limits need not be uniquely determined in some metric spaces .   Non-uniqueness of map limits   Consider the discrete metric on the set , and consider the function defined by the formula . Then converges to at , and converges to at .  Indeed, let , and consider . For all positive real numbers , let , and note that there are no points so that . Thus converges to at vacuously.    So the limit of a convergent map between metric spaces is not necessarily unique. However, this undesirable situation may be rectified by restricting our attention to certain points in the domain of such a map. Note that the uniqueness of the limit in failed because the point is far away from the rest of the set ; that is, there are no points close to but distinct from ; equivalently, any sequence in converging to must eventually take only as a value. Such points are called isolated points , and other points are called limit points .   Accumulation; isolation  accumulation  limit point  accumulation point  derived set  isolation  isolated point       the derived set of      Consider a subset of a metric space .   Limit point  We say that  accumulates at a point if for all positive real numbers , there is a point so that . In this case, is called a limit point (or accumulation point ) of in . The set of such limit points of is called the derived set of , and is denoted .    Isolated point  We say that a point is isolated from if is not a limit point of ; that is, is isolated from if there is a positive real number so that for all points so that . If is isolated from , then is called an isolated point of .        Limit points and isolated points   The following are examples of limit points and isolated points in metric spaces:   Euclidean space  Let be a positive integer, and consider a real number . If , then consider for each positive real number the vector . We observe that . In particular, , and so is a limit point of . Since was chosen arbitrarily, we conclude that every point of is a limit point.    Discrete space  Let be a discrete metric space, and consider a point . Since the values of are and , there is no point so that . Thus is an isolated point of . Since was chosen arbitrarily, we conclude that every point of is an isolated point.    The only limit point of the set in is .    The only limits point of the set in are and .       A point in a metric space is a limit point of a subset if and only if it is the limit of a sequence of points in that subset which are distinct from that point.   Sequential characterization of limit points   Let be a subset of a metric space . A point is a limit point of if and only if for some sequence of points .    First suppose that is a limit point of . Then for each positive integer , , and so there is a point so that . We claim that converges to . Indeed, for any positive real number , the Archimedean principle implies that there is a natural number . We observe that for all indices . We conclude that .  Conversely, now suppose that for some sequence of points . Let be a positive real number. Then there is a natural number so that for all indices . In particular, , since . We conclude that is a limit point of .    As we have seen, the limit of a convergent map between metric spaces at an isolated point of the domain need not be unique. However, the limit of such a map at a limit point of the domain is unique. This follows immediately from the above results.   Uniqueness of map limits   Let be a map from a metric space to a metric space . If converges at a limit point of , then it converges to a unique point .    Suppose that converges to two points at a limit point of . Since is a limit point of , for some sequence of points by . now implies that .    Analogously to the case of unique sequential limits, the above corollary leads naturally to the following definition, which is that of the unique limit of a map between metric spaces at a limit point.   Map limit  limit       the limit of a map at a limit point      Let be a map from a metric space to a metric space . If converges at a limit point of , the unique point to which converges at is called the limit of at , and is denoted .    Again, note the ambiguity of the above notation; it is entirely unclear with respect to which metrics this convergence is satisfied. Indeed, as in the case of sequential limits, maps between sets may converge in one pair of metrics and diverge in another, or may converge to different limits in different metrics. We will try to avoid this ambiguity if at all possible. Analogously to the case of sequential limits, if the map inside the limit operator is a map between real coordinate spaces, it will usually be safe to assume that convergence is with respect to the relevant Euclidean metrics.   Map limits   Consider the real-valued function defined by the formula . We claim that for all points .  Indeed, let be a positive real number, and consider the positive real number . We observe that for all points so that , and so converges to at . Since is a limit point of , we conclude that .      In this section, we have seen several ways in which the convergence of objects in an arbitrary metric space can be reduced to convergence of related objects in the real line taken with the Euclidean metric . In this way, the topic of convergence in the Euclidean metric on plays a central role in the point-set topology of metric spaces. In the next section, we will investigate the limiting behavior of sequences of real numbers and of real-valued functions on metric spaces in greater depth.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.    Sequential convergence   Determine whether the following sequences of real numbers converge or diverge in the Euclidean metric on the real numbers . If the given sequence converges, find the limit.     Consider the sequence of real numbers defined by the formula . Determine whether the sequence converges or diverges in the Euclidean metric on the real numbers . If it converges, find the limit.    asdf    asdf      Consider the sequence of real numbers defined by the formula . Determine whether the sequence converges or diverges in the Euclidean metric on the real numbers . If it converges, find the limit.    asdf    asdf      Consider the sequence of real numbers defined by the formula . Determine whether the sequence converges or diverges in the Euclidean metric on the real numbers . If it converges, find the limit.    asdf    asdf      Consider the sequence of real numbers defined by the formula . Determine whether the sequence converges or diverges in the Euclidean metric on the real numbers . If it converges, find the limit.    asdf    asdf      Consider the sequence of real numbers defined by the formula . Determine whether the sequence converges or diverges in the Euclidean metric on the real numbers . If it converges, find the limit.    asdf    asdf      Consider the sequence of real numbers defined by the formula . Determine whether the sequence converges or diverges in the Euclidean metric on the real numbers . If it converges, find the limit.    asdf    asdf      Consider the sequence of real numbers defined by the formula . Determine whether the sequence converges or diverges in the Euclidean metric on the real numbers . If it converges, find the limit.    asdf    asdf          Pointwise and uniform convergence   Determine whether the following sequences of real-valued functions converge or diverge both pointwise and uniformly in the Euclidean metric on the real numbers . If the given sequence converges pointwise, find the pointwise limit. If the given sequence converges uniformly, find the uniform limit.     Consider the sequence of real-valued functions defined by the formulae .     Determine whether the sequence converges or diverges pointwise in the Euclidean metric on the real numbers . If it converges pointwise, find the pointwise limit.    asdf    asdf      Determine whether the sequence converges or diverges uniformly in the Euclidean metric on the real numbers . If it converges uniformly, find the uniform limit.    asdf    asdf       Consider the sequence of real-valued functions defined by the formulae .     Determine whether the sequence converges or diverges pointwise in the Euclidean metric on the real numbers . If it converges pointwise, find the pointwise limit.    asdf    asdf      Determine whether the sequence converges or diverges uniformly in the Euclidean metric on the real numbers . If it converges uniformly, find the uniform limit.    asdf    asdf       Consider the sequence of real-valued functions defined by the formulae .     Determine whether the sequence converges or diverges pointwise in the Euclidean metric on the real numbers . If it converges pointwise, find the pointwise limit.    asdf    asdf      Determine whether the sequence converges or diverges uniformly in the Euclidean metric on the real numbers . If it converges uniformly, find the uniform limit.    asdf    asdf       Consider the sequence of real-valued functions defined by the formulae .     Determine whether the sequence converges or diverges pointwise in the Euclidean metric on the real numbers . If it converges pointwise, find the pointwise limit.    asdf    asdf      Determine whether the sequence converges or diverges uniformly in the Euclidean metric on the real numbers . If it converges uniformly, find the uniform limit.    asdf    asdf           Limit points and isolated points   Find all limit points and isolated points of the given subset of the Euclidean plane .     Let be the subset of the Euclidean plane defined by . Find all limit points and isolated points of in .    Every point so that is a limit point of in , and has no isolated points.      Let be the subset of the Euclidean plane defined by . Find all limit points and isolated points of in .    Every point so that is a positive integer is a limit point of in , and is the only isolated point of .      Let be the subset of the Euclidean plane defined by . Find all limit points and isolated points of in .     has no limit points in , and every point in is an isolated point.      Let be the subset of the Euclidean plane defined by . Find all limit points and isolated points of in .    Every point in is a limit point of in , and has no isolated points.      Let be the subset of the Euclidean plane defined by . Find all limit points and isolated points of in .    Every point in is a limit point of in , and has no isolated points.      Let be the subset of the Euclidean plane defined by . Find all limit points and isolated points of in .    The set of limit points of in is , and every point of is an isolated point.      Map convergence   Determine whether or not the given real-valued function converges at the given input. If the function converges, find the limit.     Consider the real-valued function defined piecewise by the formula . Determine whether or not converges at . If converges at , find the limit.     does not converge at .      Consider the real-valued function defined by the formula . Determine whether or not converges at . If converges at , find the limit.     .    Let be a positive real number, and let . We observe that for all so that , and so converges to at . Since is a limit point of , this limit is unique; that is, .      Consider the real-valued function defined by the formula . Determine whether or not converges at . If converges at , find the limit.    Use the fact that for all non-negative real numbers .     .    Let be a positive real number, and let . We observe that if , then , and so . We conclude that for all so that , and so converges to at . Since is a limit point of , this limit is unique; that is, .      Short answers and\/or in-depth solutions to these exercises are available in . However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Problems   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .    Convergence in your own words   Describe in your own words the given mode of convergence. Do not just copy the definition.     Describe in your own words what it means for a sequence of points in a metric space to converge to a limit .      Describe in your own words what it means for a sequence of maps from a set to a metric space to converge pointwise to a limit .      Describe in your own words what it means for a sequence of maps from a set to a metric space to converge uniformly to a limit .      Describe in your own words what it means for a map from a metric space to a metric space to converge at a point to a limit .      Eventually constant sequences   A sequence of elements of a set is called eventually constant if there is an element and a natural number so that for all indices .     Prove that any eventually constant sequence of points in a metric space is convergent.    asdf      Prove that any sequence of points in a discrete metric space is convergent if and only if it is eventually constant.    Let be a sequence of points in a discrete metric space . If is eventually constant, then it is convergent by (a) above. Thus we may suppose that converges to some point .  Let . Since is positive, there is a natural number so that for all indices . Since the values of are and , we conclude that and hence for all indices . Thus is eventually constant.      Give an example of a sequence of real numbers which converges in the Euclidean metric on but diverges in the discrete metric on .     converges to in the Euclidean metric, but this sequence is not eventually constant and so does not converge in the discrete metric.      Sequential convergence in the infinity metric   Let be a natural number, and consider a sequence of points . Prove that for any vector , the following are equivalent:   The sequence converges to in the -metric on .    For all indices , the sequence converges to in the Euclidean metric on .       You may want to revisit the proof of for inspiration.    First suppose that the sequence converges to in the -metric on . Fix an index , and let be a positive real number. Then there is a natural number so that for all indices . We observe that for all indices , and so converges to .  Conversely, now suppose that for all indices , the sequence converges to in the Euclidean metric on . Let be a positive real number. Then for each index , there is a natural number so that for all indices . Let , and note that for all indices , and so the sequence converges to in the -metric on .     In-depth solutions to these problems are available in . However, these are provided in order to check your work. If you are unable to solve the above problems, discuss your questions with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "section-convergence-and-limits-2-1",
  "level": "2",
  "url": "section-convergence-and-limits.html#section-convergence-and-limits-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "convergence "
},
{
  "id": "subsection-sequential-convergence-2-1",
  "level": "2",
  "url": "section-convergence-and-limits.html#subsection-sequential-convergence-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "converges convergent limit "
},
{
  "id": "definition-sequential-convergence-divergence",
  "level": "2",
  "url": "section-convergence-and-limits.html#definition-sequential-convergence-divergence",
  "type": "Definition",
  "number": "3.2.1",
  "title": "Sequential convergence\/divergence.",
  "body": " Sequential convergence\/divergence  converge  diverge  convergent  divergent   A sequence of points in a metric space  converges to a point if for all positive real numbers , there is a natural number so that for all indices .  A sequence of points in a metric space is called convergent if it converges to a point and divergent if it does not converge to any point.   "
},
{
  "id": "example-sequential-convergence-divergence",
  "level": "2",
  "url": "section-convergence-and-limits.html#example-sequential-convergence-divergence",
  "type": "Example",
  "number": "3.2.2",
  "title": "Sequential convergence\/divergence.",
  "body": " Sequential convergence\/divergence   Consider the sequence of real numbers defined by the formula . We will show that converges to in the Euclidean metric on .  Indeed, let be a positive real number. By the Archimedean principle, there is a natural number so that . For all indices , we observe that .  In summary, we have shown that for all positive real numbers , there is an index so that for all indices . Thus converges to .  Note that, in this example, the data of the sequence, the limiting value, the ground set, and the metric are necessary for convergence. By altering any one of these, we may invalidate the convergence we just proved. For example, if we consider as a sequence in the metric subspace of the real line consisting of only positive real numbers, then the sequence diverges, since it does not converge in the Euclidean metric to a positive real number.  Similarly, if we change the metric, then the sequence may not converge. We have just proven that this sequence is convergent in the Euclidean metric by finding a point to which it converges, but it is divergent in the discrete metric . All this is to say that all of the data of a sequence, a metric space, and a purported limiting value are all necessary for claims of convergence or divergence.   "
},
{
  "id": "subsection-sequential-convergence-6",
  "level": "2",
  "url": "section-convergence-and-limits.html#subsection-sequential-convergence-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "limit "
},
{
  "id": "proposition-uniqueness-of-sequential-limits-in-a-metric-space",
  "level": "2",
  "url": "section-convergence-and-limits.html#proposition-uniqueness-of-sequential-limits-in-a-metric-space",
  "type": "Proposition",
  "number": "3.2.3",
  "title": "Uniqueness of sequential limits in a metric space.",
  "body": " Uniqueness of sequential limits in a metric space   Convergent sequences of points in metric spaces converge to unique points.    Let be a sequence of points in a metric space , and suppose that converges to two points . We will show that .  To that end, let be a positive real number, and note that is a positive real number. There are thus natural numbers so that for all indices and for all indices .  Let , and note that and . We conclude that . In summary, we have shown that for all positive real numbers . Since by , we conclude that and hence .   "
},
{
  "id": "definition-sequential-limit",
  "level": "2",
  "url": "section-convergence-and-limits.html#definition-sequential-limit",
  "type": "Definition",
  "number": "3.2.4",
  "title": "Sequential limit.",
  "body": " Sequential limit  limit       the limit of      The unique point to which a convergent sequence of points in a metric space converges is called the limit of said sequence, and it is denoted .   "
},
{
  "id": "example-sequential-limits",
  "level": "2",
  "url": "section-convergence-and-limits.html#example-sequential-limits",
  "type": "Example",
  "number": "3.2.5",
  "title": "Sequential limits.",
  "body": " Sequential limits   Let be a point in a metric space , and consider the constant sequence of points defined by the formula . For all positive real numbers and all indices , we observe that . Thus converges to ; that is, .   "
},
{
  "id": "proposition-sequential-convergence",
  "level": "2",
  "url": "section-convergence-and-limits.html#proposition-sequential-convergence",
  "type": "Proposition",
  "number": "3.2.6",
  "title": "Sequential convergence.",
  "body": " Sequential convergence   Let be a sequence of points in a metric space . Then for any point , if and only if .    We observe that for all indices . First suppose that , and let be a positive real number. Then there is a natural number so that for all indices . In particular, for all indices , and so .  Conversely, now suppose that , and let be a positive real number. Then there is a natural number so that for all indices . In particular, for all indices , and so .   "
},
{
  "id": "theorem-sequential-convergence-in-the-p-metric",
  "level": "2",
  "url": "section-convergence-and-limits.html#theorem-sequential-convergence-in-the-p-metric",
  "type": "Theorem",
  "number": "3.2.7",
  "title": "Sequential convergence in the <span class=\"process-math\">\\(p \\)<\/span>-metric.",
  "body": " Sequential convergence in the -metric   Let be a natural number, and consider a sequence of vectors .  For any vector and real number , the sequence converges to in the -metric on if and only if for all indices , the sequence converges to in the Euclidean metric on .    First suppose that converges to in the -metric on . Let , and consider a positive real number . Then there is a natural number so that for all indices . We observe that , so that for all indices . In particular, converges to in the Euclidean metric on .  Conversely, now suppose that for all indices , converges to in the Euclidean metric on . Let be a positive real number. Then is a positive real number, and so for each index there is a natural number so that for all indices . Let , and note that and therefore for all indices . We conclude that converges to in the -metric on .   "
},
{
  "id": "subsection-pointwise-and-uniform-convergence-2-1",
  "level": "2",
  "url": "section-convergence-and-limits.html#subsection-pointwise-and-uniform-convergence-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "converge pointwise uniform convergence "
},
{
  "id": "definition-pointwise-convergence",
  "level": "2",
  "url": "section-convergence-and-limits.html#definition-pointwise-convergence",
  "type": "Definition",
  "number": "3.2.8",
  "title": "Pointwise convergence\/divergence.",
  "body": " Pointwise convergence\/divergence  pointwise convergence  pointwise divergence   Let be a sequence of maps from a set to a metric space .   Pointwise convergence  The sequence  converges pointwise to a map from to if for all inputs , the sequence of corresponding outputs converges to .  The sequence is called pointwise convergent if it converges pointwise to a map from to .    Pointwise divergence  The sequence is called pointwise divergent if it does not converge pointwise to any map from to .      "
},
{
  "id": "example-pointwise-convergence",
  "level": "2",
  "url": "section-convergence-and-limits.html#example-pointwise-convergence",
  "type": "Example",
  "number": "3.2.9",
  "title": "Pointwise convergence.",
  "body": " Pointwise convergence   Consider the sequence of functions defined by the formulae . Since , the sequence converges pointwise to the function defined piecewise by the formula .   "
},
{
  "id": "subsection-pointwise-and-uniform-convergence-5",
  "level": "2",
  "url": "section-convergence-and-limits.html#subsection-pointwise-and-uniform-convergence-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pointwise limit "
},
{
  "id": "definition-pointwise-limit",
  "level": "2",
  "url": "section-convergence-and-limits.html#definition-pointwise-limit",
  "type": "Definition",
  "number": "3.2.10",
  "title": "Pointwise limit.",
  "body": " Pointwise limit  pointwise limit       pointwise limit of the sequence      For any pointwise convergent sequence of maps from a set to a metric space , the unique map from to to which converges pointwise is called the pointwise limit of , and is denoted .   "
},
{
  "id": "subsection-pointwise-and-uniform-convergence-7",
  "level": "2",
  "url": "section-convergence-and-limits.html#subsection-pointwise-and-uniform-convergence-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "converge uniformly "
},
{
  "id": "definition-uniform-convergence",
  "level": "2",
  "url": "section-convergence-and-limits.html#definition-uniform-convergence",
  "type": "Definition",
  "number": "3.2.11",
  "title": "Uniform convergence.",
  "body": " Uniform convergence  uniform convergence  uniform divergence   Let be a sequence of maps from a set to a metric space .   Uniform convergence  The sequence  converges uniformly to a map from to if for all positive real numbers , there is a natural number so that for all inputs and indices .  The sequence is called uniformly convergent if it converges uniformly to a map from to .    Uniform divergence  The sequence is called uniformly divergent if it does not converge uniformly to any map from to .      "
},
{
  "id": "example-uniform-convergence-divergence",
  "level": "2",
  "url": "section-convergence-and-limits.html#example-uniform-convergence-divergence",
  "type": "Example",
  "number": "3.2.12",
  "title": "Uniform convergence\/divergence.",
  "body": " Uniform convergence\/divergence   The following are examples of uniformly convergent and divergent sequences of maps:   Consider the sequence of functions defined by the formulae , and let be the function defined piecewise by the formula . We observe that for all positive integers and inputs . We conclude that does not converge uniformly to .    Consider the sequence of functions defined by the formulae , and let be the function defined by the formula . For all positive real numbers , the Archimedean principle implies that for some positive integer . We observe that for all indices and inputs . We conclude that converges uniformly to .      "
},
{
  "id": "proposition-pointwise-and-uniform-convergence",
  "level": "2",
  "url": "section-convergence-and-limits.html#proposition-pointwise-and-uniform-convergence",
  "type": "Proposition",
  "number": "3.2.13",
  "title": "Pointwise and uniform convergence.",
  "body": " Pointwise and uniform convergence   If a sequence of maps from a set to a metric space converges uniformly, then it converges pointwise.    Suppose that a sequence of maps from a set to a metric space converges uniformly to a map from to . Then for all positive real numbers , there is a natural number so that for all indices and inputs . In particular, for each input , for all indices , and so the sequence converges to . We conclude that converges pointwise to .   "
},
{
  "id": "subsection-pointwise-and-uniform-convergence-12",
  "level": "2",
  "url": "section-convergence-and-limits.html#subsection-pointwise-and-uniform-convergence-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "uniform limit "
},
{
  "id": "definition-uniform-limit",
  "level": "2",
  "url": "section-convergence-and-limits.html#definition-uniform-limit",
  "type": "Definition",
  "number": "3.2.14",
  "title": "Uniform limit.",
  "body": " Uniform limit  uniform limit       uniform limit of the sequence      For any uniformly convergent sequence of maps from a set to a metric space , the unique map from to to which converges uniformly is called the uniform limit of , and is denoted .   "
},
{
  "id": "example-uniform-limit",
  "level": "2",
  "url": "section-convergence-and-limits.html#example-uniform-limit",
  "type": "Example",
  "number": "3.2.15",
  "title": "Uniform limit.",
  "body": " Uniform limit   Consider the sequence of functions defined by the formulae , and let be the function defined by the formula . Since converges uniformly to as shown in , is the uniform limit of ; that is, . We might also write that .   "
},
{
  "id": "subsection-map-convergence-2-1",
  "level": "2",
  "url": "section-convergence-and-limits.html#subsection-map-convergence-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "converge "
},
{
  "id": "subsection-map-convergence-2-2",
  "level": "2",
  "url": "section-convergence-and-limits.html#subsection-map-convergence-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "map convergence "
},
{
  "id": "definition-map-convergence",
  "level": "2",
  "url": "section-convergence-and-limits.html#definition-map-convergence",
  "type": "Definition",
  "number": "3.2.16",
  "title": "Map convergence.",
  "body": " Map convergence  map convergence   Let be a map from a metric space to a metric space .   Map convergence    converges at a point to a point if for all positive real numbers , there exists a positive real number so that for all inputs so that .  The map is called convergent at a point if it converges at to some point .    Map divergence  The map is called divergent at a point if it does not converge at to any point .      "
},
{
  "id": "example-map-convergence",
  "level": "2",
  "url": "section-convergence-and-limits.html#example-map-convergence",
  "type": "Example",
  "number": "3.2.17",
  "title": "Map convergence.",
  "body": " Map convergence   Consider the real-valued function defined piecewise by the formula . As the graph of suggests, converges to at in the Euclidean metric on .  Indeed, let be a positive real number, and let . Then for all inputs so that .   "
},
{
  "id": "proposition-map-convergence",
  "level": "2",
  "url": "section-convergence-and-limits.html#proposition-map-convergence",
  "type": "Proposition",
  "number": "3.2.18",
  "title": "Map convergence.",
  "body": " Map convergence   Let be a map from a metric space to a metric space . For each point , let be the real-valued function on defined by the formula . Then converges to at if and only if converges to at .    We first observe that for all .  Suppose first that converges to at , and let be a positive real number. Then there is some positive real number so that for all inputs so that . We observe that for all inputs so that , and so converges to at .  Conversely, now suppose that converges to at , and let be a positive real number. Then there is some positive real number so that for all inputs so that . We observe that for all inputs so that , and so converges to at .   "
},
{
  "id": "theorem-sequential-characterization-of-map-convergence",
  "level": "2",
  "url": "section-convergence-and-limits.html#theorem-sequential-characterization-of-map-convergence",
  "type": "Theorem",
  "number": "3.2.19",
  "title": "Sequential characterization of map convergence.",
  "body": " Sequential characterization of map convergence   Let be a map from a metric space to a metric space . For all points and , converges to at if and only if for all sequences of points , if , then .    First suppose that converges to at , and consider a sequence of points which converges to . We observe that for all indices .  Let be a positive real number. Then there is a positive real number so that for all points so that . Since , there is a natural number so that for all indices . In particular, this implies that for all indices . We conclude that converges to .  Conversely, now suppose that does not converge to at . Then there is a positive real number so that for all positive real numbers , there is a point so that but . In particular, let be a sequence of positive real numbers which converges in the Euclidean metric to . For each index , there is a point so that but . Since for all indices , implies that converges to but does not converge to .   "
},
{
  "id": "example-non-uniqueness-of-map-limits",
  "level": "2",
  "url": "section-convergence-and-limits.html#example-non-uniqueness-of-map-limits",
  "type": "Example",
  "number": "3.2.20",
  "title": "Non-uniqueness of map limits.",
  "body": " Non-uniqueness of map limits   Consider the discrete metric on the set , and consider the function defined by the formula . Then converges to at , and converges to at .  Indeed, let , and consider . For all positive real numbers , let , and note that there are no points so that . Thus converges to at vacuously.   "
},
{
  "id": "subsection-map-convergence-12",
  "level": "2",
  "url": "section-convergence-and-limits.html#subsection-map-convergence-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "isolated points limit points "
},
{
  "id": "definition-accumulation-isolation",
  "level": "2",
  "url": "section-convergence-and-limits.html#definition-accumulation-isolation",
  "type": "Definition",
  "number": "3.2.21",
  "title": "Accumulation; isolation.",
  "body": " Accumulation; isolation  accumulation  limit point  accumulation point  derived set  isolation  isolated point       the derived set of      Consider a subset of a metric space .   Limit point  We say that  accumulates at a point if for all positive real numbers , there is a point so that . In this case, is called a limit point (or accumulation point ) of in . The set of such limit points of is called the derived set of , and is denoted .    Isolated point  We say that a point is isolated from if is not a limit point of ; that is, is isolated from if there is a positive real number so that for all points so that . If is isolated from , then is called an isolated point of .      "
},
{
  "id": "example-limit-points-and-isolated-points",
  "level": "2",
  "url": "section-convergence-and-limits.html#example-limit-points-and-isolated-points",
  "type": "Example",
  "number": "3.2.22",
  "title": "Limit points and isolated points.",
  "body": " Limit points and isolated points   The following are examples of limit points and isolated points in metric spaces:   Euclidean space  Let be a positive integer, and consider a real number . If , then consider for each positive real number the vector . We observe that . In particular, , and so is a limit point of . Since was chosen arbitrarily, we conclude that every point of is a limit point.    Discrete space  Let be a discrete metric space, and consider a point . Since the values of are and , there is no point so that . Thus is an isolated point of . Since was chosen arbitrarily, we conclude that every point of is an isolated point.    The only limit point of the set in is .    The only limits point of the set in are and .      "
},
{
  "id": "proposition-sequential-characterization-of-limit-points",
  "level": "2",
  "url": "section-convergence-and-limits.html#proposition-sequential-characterization-of-limit-points",
  "type": "Proposition",
  "number": "3.2.23",
  "title": "Sequential characterization of limit points.",
  "body": " Sequential characterization of limit points   Let be a subset of a metric space . A point is a limit point of if and only if for some sequence of points .    First suppose that is a limit point of . Then for each positive integer , , and so there is a point so that . We claim that converges to . Indeed, for any positive real number , the Archimedean principle implies that there is a natural number . We observe that for all indices . We conclude that .  Conversely, now suppose that for some sequence of points . Let be a positive real number. Then there is a natural number so that for all indices . In particular, , since . We conclude that is a limit point of .   "
},
{
  "id": "corollary-uniqueness-of-map-limits",
  "level": "2",
  "url": "section-convergence-and-limits.html#corollary-uniqueness-of-map-limits",
  "type": "Corollary",
  "number": "3.2.24",
  "title": "Uniqueness of map limits.",
  "body": " Uniqueness of map limits   Let be a map from a metric space to a metric space . If converges at a limit point of , then it converges to a unique point .    Suppose that converges to two points at a limit point of . Since is a limit point of , for some sequence of points by . now implies that .   "
},
{
  "id": "subsection-map-convergence-19",
  "level": "2",
  "url": "section-convergence-and-limits.html#subsection-map-convergence-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "limit "
},
{
  "id": "definition-map-limit",
  "level": "2",
  "url": "section-convergence-and-limits.html#definition-map-limit",
  "type": "Definition",
  "number": "3.2.25",
  "title": "Map limit.",
  "body": " Map limit  limit       the limit of a map at a limit point      Let be a map from a metric space to a metric space . If converges at a limit point of , the unique point to which converges at is called the limit of at , and is denoted .   "
},
{
  "id": "example-map-limits",
  "level": "2",
  "url": "section-convergence-and-limits.html#example-map-limits",
  "type": "Example",
  "number": "3.2.26",
  "title": "Map limits.",
  "body": " Map limits   Consider the real-valued function defined by the formula . We claim that for all points .  Indeed, let be a positive real number, and consider the positive real number . We observe that for all points so that , and so converges to at . Since is a limit point of , we conclude that .   "
},
{
  "id": "exercise-sequential-convergence-3",
  "level": "2",
  "url": "section-convergence-and-limits.html#exercise-sequential-convergence-3",
  "type": "Problem",
  "number": "3.2.4.1",
  "title": "",
  "body": "  Consider the sequence of real numbers defined by the formula . Determine whether the sequence converges or diverges in the Euclidean metric on the real numbers . If it converges, find the limit.    asdf    asdf   "
},
{
  "id": "exercise-sequential-convergence-4",
  "level": "2",
  "url": "section-convergence-and-limits.html#exercise-sequential-convergence-4",
  "type": "Problem",
  "number": "3.2.4.2",
  "title": "",
  "body": "  Consider the sequence of real numbers defined by the formula . Determine whether the sequence converges or diverges in the Euclidean metric on the real numbers . If it converges, find the limit.    asdf    asdf   "
},
{
  "id": "exercise-sequential-convergence-5",
  "level": "2",
  "url": "section-convergence-and-limits.html#exercise-sequential-convergence-5",
  "type": "Problem",
  "number": "3.2.4.3",
  "title": "",
  "body": "  Consider the sequence of real numbers defined by the formula . Determine whether the sequence converges or diverges in the Euclidean metric on the real numbers . If it converges, find the limit.    asdf    asdf   "
},
{
  "id": "exercise-sequential-convergence-6",
  "level": "2",
  "url": "section-convergence-and-limits.html#exercise-sequential-convergence-6",
  "type": "Problem",
  "number": "3.2.4.4",
  "title": "",
  "body": "  Consider the sequence of real numbers defined by the formula . Determine whether the sequence converges or diverges in the Euclidean metric on the real numbers . If it converges, find the limit.    asdf    asdf   "
},
{
  "id": "exercise-sequential-convergence-7",
  "level": "2",
  "url": "section-convergence-and-limits.html#exercise-sequential-convergence-7",
  "type": "Problem",
  "number": "3.2.4.5",
  "title": "",
  "body": "  Consider the sequence of real numbers defined by the formula . Determine whether the sequence converges or diverges in the Euclidean metric on the real numbers . If it converges, find the limit.    asdf    asdf   "
},
{
  "id": "exercise-sequential-convergence-8",
  "level": "2",
  "url": "section-convergence-and-limits.html#exercise-sequential-convergence-8",
  "type": "Problem",
  "number": "3.2.4.6",
  "title": "",
  "body": "  Consider the sequence of real numbers defined by the formula . Determine whether the sequence converges or diverges in the Euclidean metric on the real numbers . If it converges, find the limit.    asdf    asdf   "
},
{
  "id": "exercise-sequential-convergence-9",
  "level": "2",
  "url": "section-convergence-and-limits.html#exercise-sequential-convergence-9",
  "type": "Problem",
  "number": "3.2.4.7",
  "title": "",
  "body": "  Consider the sequence of real numbers defined by the formula . Determine whether the sequence converges or diverges in the Euclidean metric on the real numbers . If it converges, find the limit.    asdf    asdf   "
},
{
  "id": "exercise-pointwise-and-uniform-convergence-3",
  "level": "2",
  "url": "section-convergence-and-limits.html#exercise-pointwise-and-uniform-convergence-3",
  "type": "Problem",
  "number": "3.2.4.8",
  "title": "",
  "body": "  Consider the sequence of real-valued functions defined by the formulae .     Determine whether the sequence converges or diverges pointwise in the Euclidean metric on the real numbers . If it converges pointwise, find the pointwise limit.    asdf    asdf      Determine whether the sequence converges or diverges uniformly in the Euclidean metric on the real numbers . If it converges uniformly, find the uniform limit.    asdf    asdf    "
},
{
  "id": "exercise-pointwise-and-uniform-convergence-4",
  "level": "2",
  "url": "section-convergence-and-limits.html#exercise-pointwise-and-uniform-convergence-4",
  "type": "Problem",
  "number": "3.2.4.9",
  "title": "",
  "body": "  Consider the sequence of real-valued functions defined by the formulae .     Determine whether the sequence converges or diverges pointwise in the Euclidean metric on the real numbers . If it converges pointwise, find the pointwise limit.    asdf    asdf      Determine whether the sequence converges or diverges uniformly in the Euclidean metric on the real numbers . If it converges uniformly, find the uniform limit.    asdf    asdf    "
},
{
  "id": "exercise-pointwise-and-uniform-convergence-5",
  "level": "2",
  "url": "section-convergence-and-limits.html#exercise-pointwise-and-uniform-convergence-5",
  "type": "Problem",
  "number": "3.2.4.10",
  "title": "",
  "body": "  Consider the sequence of real-valued functions defined by the formulae .     Determine whether the sequence converges or diverges pointwise in the Euclidean metric on the real numbers . If it converges pointwise, find the pointwise limit.    asdf    asdf      Determine whether the sequence converges or diverges uniformly in the Euclidean metric on the real numbers . If it converges uniformly, find the uniform limit.    asdf    asdf    "
},
{
  "id": "exercise-pointwise-and-uniform-convergence-6",
  "level": "2",
  "url": "section-convergence-and-limits.html#exercise-pointwise-and-uniform-convergence-6",
  "type": "Problem",
  "number": "3.2.4.11",
  "title": "",
  "body": "  Consider the sequence of real-valued functions defined by the formulae .     Determine whether the sequence converges or diverges pointwise in the Euclidean metric on the real numbers . If it converges pointwise, find the pointwise limit.    asdf    asdf      Determine whether the sequence converges or diverges uniformly in the Euclidean metric on the real numbers . If it converges uniformly, find the uniform limit.    asdf    asdf    "
},
{
  "id": "exercise-limit-points-and-isolated-points-3",
  "level": "2",
  "url": "section-convergence-and-limits.html#exercise-limit-points-and-isolated-points-3",
  "type": "Problem",
  "number": "3.2.4.12",
  "title": "",
  "body": "  Let be the subset of the Euclidean plane defined by . Find all limit points and isolated points of in .    Every point so that is a limit point of in , and has no isolated points.   "
},
{
  "id": "exercise-limit-points-and-isolated-points-4",
  "level": "2",
  "url": "section-convergence-and-limits.html#exercise-limit-points-and-isolated-points-4",
  "type": "Problem",
  "number": "3.2.4.13",
  "title": "",
  "body": "  Let be the subset of the Euclidean plane defined by . Find all limit points and isolated points of in .    Every point so that is a positive integer is a limit point of in , and is the only isolated point of .   "
},
{
  "id": "exercise-limit-points-and-isolated-points-5",
  "level": "2",
  "url": "section-convergence-and-limits.html#exercise-limit-points-and-isolated-points-5",
  "type": "Problem",
  "number": "3.2.4.14",
  "title": "",
  "body": "  Let be the subset of the Euclidean plane defined by . Find all limit points and isolated points of in .     has no limit points in , and every point in is an isolated point.   "
},
{
  "id": "exercise-limit-points-and-isolated-points-6",
  "level": "2",
  "url": "section-convergence-and-limits.html#exercise-limit-points-and-isolated-points-6",
  "type": "Problem",
  "number": "3.2.4.15",
  "title": "",
  "body": "  Let be the subset of the Euclidean plane defined by . Find all limit points and isolated points of in .    Every point in is a limit point of in , and has no isolated points.   "
},
{
  "id": "exercise-limit-points-and-isolated-points-7",
  "level": "2",
  "url": "section-convergence-and-limits.html#exercise-limit-points-and-isolated-points-7",
  "type": "Problem",
  "number": "3.2.4.16",
  "title": "",
  "body": "  Let be the subset of the Euclidean plane defined by . Find all limit points and isolated points of in .    Every point in is a limit point of in , and has no isolated points.   "
},
{
  "id": "exercise-limit-points-and-isolated-points-8",
  "level": "2",
  "url": "section-convergence-and-limits.html#exercise-limit-points-and-isolated-points-8",
  "type": "Problem",
  "number": "3.2.4.17",
  "title": "",
  "body": "  Let be the subset of the Euclidean plane defined by . Find all limit points and isolated points of in .    The set of limit points of in is , and every point of is an isolated point.   "
},
{
  "id": "exercise-map-convergence-3",
  "level": "2",
  "url": "section-convergence-and-limits.html#exercise-map-convergence-3",
  "type": "Problem",
  "number": "3.2.4.18",
  "title": "",
  "body": "  Consider the real-valued function defined piecewise by the formula . Determine whether or not converges at . If converges at , find the limit.     does not converge at .   "
},
{
  "id": "exercise-map-convergence-4",
  "level": "2",
  "url": "section-convergence-and-limits.html#exercise-map-convergence-4",
  "type": "Problem",
  "number": "3.2.4.19",
  "title": "",
  "body": "  Consider the real-valued function defined by the formula . Determine whether or not converges at . If converges at , find the limit.     .    Let be a positive real number, and let . We observe that for all so that , and so converges to at . Since is a limit point of , this limit is unique; that is, .   "
},
{
  "id": "exercise-map-convergence-5",
  "level": "2",
  "url": "section-convergence-and-limits.html#exercise-map-convergence-5",
  "type": "Problem",
  "number": "3.2.4.20",
  "title": "",
  "body": "  Consider the real-valued function defined by the formula . Determine whether or not converges at . If converges at , find the limit.    Use the fact that for all non-negative real numbers .     .    Let be a positive real number, and let . We observe that if , then , and so . We conclude that for all so that , and so converges to at . Since is a limit point of , this limit is unique; that is, .   "
},
{
  "id": "problem-convergence-in-your-own-words-3",
  "level": "2",
  "url": "section-convergence-and-limits.html#problem-convergence-in-your-own-words-3",
  "type": "Problem",
  "number": "3.2.5.1",
  "title": "",
  "body": "  Describe in your own words what it means for a sequence of points in a metric space to converge to a limit .   "
},
{
  "id": "problem-convergence-in-your-own-words-4",
  "level": "2",
  "url": "section-convergence-and-limits.html#problem-convergence-in-your-own-words-4",
  "type": "Problem",
  "number": "3.2.5.2",
  "title": "",
  "body": "  Describe in your own words what it means for a sequence of maps from a set to a metric space to converge pointwise to a limit .   "
},
{
  "id": "problem-convergence-in-your-own-words-5",
  "level": "2",
  "url": "section-convergence-and-limits.html#problem-convergence-in-your-own-words-5",
  "type": "Problem",
  "number": "3.2.5.3",
  "title": "",
  "body": "  Describe in your own words what it means for a sequence of maps from a set to a metric space to converge uniformly to a limit .   "
},
{
  "id": "problem-convergence-in-your-own-words-6",
  "level": "2",
  "url": "section-convergence-and-limits.html#problem-convergence-in-your-own-words-6",
  "type": "Problem",
  "number": "3.2.5.4",
  "title": "",
  "body": "  Describe in your own words what it means for a map from a metric space to a metric space to converge at a point to a limit .   "
},
{
  "id": "problem-eventually-constant-sequences",
  "level": "2",
  "url": "section-convergence-and-limits.html#problem-eventually-constant-sequences",
  "type": "Problem",
  "number": "3.2.5.5",
  "title": "Eventually constant sequences.",
  "body": " Eventually constant sequences   A sequence of elements of a set is called eventually constant if there is an element and a natural number so that for all indices .     Prove that any eventually constant sequence of points in a metric space is convergent.    asdf      Prove that any sequence of points in a discrete metric space is convergent if and only if it is eventually constant.    Let be a sequence of points in a discrete metric space . If is eventually constant, then it is convergent by (a) above. Thus we may suppose that converges to some point .  Let . Since is positive, there is a natural number so that for all indices . Since the values of are and , we conclude that and hence for all indices . Thus is eventually constant.      Give an example of a sequence of real numbers which converges in the Euclidean metric on but diverges in the discrete metric on .     converges to in the Euclidean metric, but this sequence is not eventually constant and so does not converge in the discrete metric.    "
},
{
  "id": "problem-sequential-convergence-in-the-infinity-metric",
  "level": "2",
  "url": "section-convergence-and-limits.html#problem-sequential-convergence-in-the-infinity-metric",
  "type": "Problem",
  "number": "3.2.5.6",
  "title": "Sequential convergence in the infinity metric.",
  "body": " Sequential convergence in the infinity metric   Let be a natural number, and consider a sequence of points . Prove that for any vector , the following are equivalent:   The sequence converges to in the -metric on .    For all indices , the sequence converges to in the Euclidean metric on .       You may want to revisit the proof of for inspiration.    First suppose that the sequence converges to in the -metric on . Fix an index , and let be a positive real number. Then there is a natural number so that for all indices . We observe that for all indices , and so converges to .  Conversely, now suppose that for all indices , the sequence converges to in the Euclidean metric on . Let be a positive real number. Then for each index , there is a natural number so that for all indices . Let , and note that for all indices , and so the sequence converges to in the -metric on .   "
},
{
  "id": "section-limits-in-the-euclidean-metric",
  "level": "1",
  "url": "section-limits-in-the-euclidean-metric.html",
  "type": "Section",
  "number": "3.3",
  "title": "Limits in the Euclidean Metric",
  "body": " Limits in the Euclidean Metric   In the previous section, we defined and explored the convergence and divergence of sequences and maps in the context of general metric spaces. In this section, however, we turn our attention to the limiting behavior in Euclidean spaces specifically. Euclidean spaces, being (at least in low dimensions) good models of the space in which we live, are the metric spaces in which our intuitions about distance are most accurate and useful.    Limits and Arithmetic   Much of our work in this text will rely on limits taken in Euclidean spaces, and the material introduced in this section is fundamental to the field of real analysis. Euclidean spaces are not just metric objects, however; as normed vector spaces, Euclidean spaces have a vector space structure as well as a norm and an inner product. We will see that Euclidean limits preserve this additional structure; for example, linear combinations of convergent sequences of real coordinate vectors converge in the Euclidean metric to the linear combination of the limits. In fact, this holds true in any normed vector space.    Limits and vector arithmetic   Let be a norm on a real or complex vector space , and consider the induced metric on .   Vector addition  For all convergent sequences and of vectors , .    Scalar multiplication  For all scalars and convergent sequences of vectors , .    Norm  For all convergent sequences of vectors , .    Inner product  If the norm is induced by an inner product on , then for all convergent sequences and of vectors , .         Let and . Let be a positive real number. Since is a positive real number, there are natural numbers so that for all indices and for all indices . Let , and note that for all indices . We conclude that .    Let . Let be a positive real number. Note that for all indices . If , then for all indices . We conclude that in this case, .  Now suppose that . Since is a positive real number, there is a natural number so that for all indices . In particular, . We conclude that in this case, .    Let . Let be a positive real number. Then there is a natural number so that for all indices . We observe that implies that for all indices , and so .    Let and . Let be a positive real number. We observe that for all indices by the Cauchy--Schwarz inequality. There are four cases, depending on whether or not and are zero or non-zero vectors. If , then .  If and , then there is a natural number so that for all indices . We observe that for all indices .  If and , then there is a natural number so that for all indices . We observe that for all indices .  Finally, if and , then there are natural numbers so that for all indices and for all indices . Let . We observe that for all indices .  In all cases, we conclude that .       details the ways in which the metric structure induced on a vector space by a norm or inner product interacts nicely with the additional structure of the vector space. In the real numbers , there are similar interactions between the metric structure and the standard ordering .   Comparison of limits   Let and be convergent sequences of real numbers . If for all indices , then .    By contraposition. Let and , and suppose that . Consider the positive real number . Then there are natural numbers so that for all indices and for all indices . Let . We observe that and , so that .  In summary, we have shown that if , then for some index . Taking the contrapositive, we arrive at the desired result.    This is as good a place as any to introduce another useful result concerning the relationship between sequential convergence in the real line and the standard ordering . Called the , this result can be used cleverly to avoid lengthy convergence arguments.   Squeeze theorem   Let , , and be sequences of real numbers . If for all indices and and converge to the same real number , then converges to .    Let be a positive real number. Then there are natural numbers so that for all indices and for all indices . Let , and note that and for all indices . In particular, we conclude that for all indices , and so converges to .     Squeeze theorem   Since for all positive integers and , we can conclude by the that without worrying about a lengthy convergence argument.      and further justify the choice to emphasize the limiting behavior of objects on the real line in the rest of this section; as we have already seen in , these results further emphasize that knowledge of such limiting behavior can be used to make conclusions about the limiting behavior of a wide variety of metric objects.     Divergence to Infinity   In some ways, the binary distinction between convergence and divergence may be viewed as more coarse than an analyst might like. On the real line , we can make more qualitative statements about the limiting behavior of certain divergent sequences and maps to alleviate this issue somewhat. We now consider the special case of divergence of a sequence or map to infinity. Some sequences increase or decrease without bound. Such sequences can be said to have infinite limits, even though they don't converge to any real number.    Sequential divergence to infinity   Let be a sequence of real numbers .   Divergence to   The sequence is said to diverge to  if for each real number , there is a natural number so that for all indices . In this case, we write .    Divergence to   The sequence is said to diverge to  if for each real number , there is a natural number so that for all indices . In this case, we write .        Sequential divergence to infinity   The following are examples and non-examples of sequences of real numbers which diverge to infinity.   The sequence diverges to ; that is, .    The sequence diverges, but it does not diverge to or .       There are also versions of divergence to infinity for real-valued functions on metric spaces.   Function divergence to infinity   Let be a real-valued function on a metric space .   Divergence to   The function is said to diverge to  at a point if for each real number , there is a positive real number so that for all points so that .  In this case, if is a limit point of , then we write .    Divergence to   The function is said to diverge to  at a point if for each real number , there is a positive real number so that for all points so that .  In this case, if is a limit point of , then we write .        Function divergence to infinity   The following are examples and non-examples of real-valued functions on metric spaces which diverge to infinity   Consider the real-valued function defined by the formula . Then diverges to at ; that is, .    Consider the real-valued function defined by the formula . Then diverges at , but it does not diverge to or at .       Divergence of a sequence of real numbers or a real-valued function to infinity is a strong statement about the limiting behavior of such a sequence or function. However, since there is no metric on the extended real number system which agrees with the Euclidean metric on the real numbers, we cannot view divergence to infinity as convergence in a metric space of which the real line is a metric subspace. We will see in a way in which the situation of divergence to infinity can be said to be a form of convergence to an extended real number, namely the infinite quantities and .  In many ways, the symbols and can be viewed as one-sided reciprocals of . While division by zero is left undefined for very important arithmetical reasons, it turns out that divergence of a sequence of nonzero real numbers to infinity implies the Euclidean convergence of the reciprocals to zero.   Reciprocals of infinite limits   Let be a sequence of positive real numbers . Then if and only if .    First suppose that diverges to , and let . Then is a real number, and so there is a natural number so that for all indices . In particular, for all indices , and so converges to .  Conversely, now suppose that converges to , and let be a real number. If is non-positive, then for all indices . On the other hand, if is positive, then is a positive real number, and so there is a natural number so that for all indices . In particular, for all indices , and so diverges to .    So, as far as limiting behavior of sequences of real numbers goes, the infinite quantities and behave like one-sided reciprocals of zero. It's incredibly important to avoid assuming anything stronger than what is explicitly stated in the proposition above. Specifically, the hypothesis that the sequence in question have positive real number values is crucial, and the statement is not necessarily true without this requirement.  A sequence of real numbers diverges to or if it increases or decreases, respectively, without bound. This notion of boundedness is directly related to the one introduced in for subsets of partially ordered sets. Informally, a map with codomain a partially ordered set is considered to be bounded if its image is bounded.   Map boundedness  boundedness            Let be a map from a set to a partially ordered set .   Upper bound  An output is an upper bound for the map if it is an upper bound for the image ; that is, is an upper bound for if for all inputs .  The map is called bounded from above if there is an upper bound for , and unbounded from above if there is no such upper bound.    Lower bound  An output is a lower bound for the map if it is a lower bound for the image ; that is, is a lower bound for if for all inputs .  The map is called bounded from below if there is a lower bound for , and unbounded from below if there is no such lower bound.    Boundedness  The map is called bounded if it is both bounded from above and bounded from below, and is called unbounded otherwise if it is either unbounded from above or unbounded from below (or both).        Sequential boundedness in the real line   A sequence of real numbers is bounded if and only if there are real numbers such that for all indices . For example, the sequence is bounded, because for all indices .    Clearly, any sequence of real numbers or any real-valued function which diverges to infinity cannot be bounded. However, the converse is not true; unbounded sequences need not diverge to infinity. We have already seen one such example of this in .  Considered as a real-valued function on the set of natural numbers, a sequence of real numbers is a map whose codomain is a totally ordered set. However, the domain of such a sequence is also totally ordered. Because the metric structure on the real line can be described in terms of the standard ordering , sequences which preserve these orders have special convergence properties. Such sequences are called monotone .   Monotonicity  non-decreasing  order-preserving  isotonicity  increasing  strictly order-preserving  strict isotonicity  non-increasing  order-reversing  antitonicity  decreasing  strictly order-reversing  strict antitonicity  monotonicity  strict monotonicity   Let be a map from a partially ordered set to a partially ordered set .   Isotonicity  The map is called non-decreasing , order-preserving , or isotone if for all inputs , if , then . The map is called increasing , strictly order-preserving , or strictly isotone if it is non-decreasing and injective.    Antitonicity  The map is called non-increasing , order-reversing , or antitone if for all inputs , if , then . The map is called decreasing , strictly order-reversing , or strictly antitone if it is non-increasing and injective.    Monotonicity  The map is called monotone if it is either non-decreasing or non-increasing, and is called strictly monotone if it is either increasing or decreasing.       It turns out that all monotone sequences of real numbers have limits, in the sense that a monotone sequence of real numbers either converges to a real number or diverges to infinity. In fact, something slightly stronger is true; the limit of a non-decreasing sequence exists and is its supremum, and the limit of a non-increasing sequence exists and is its infimum. This useful fact is a property of the extended real number system . Other totally ordered number subsystems, such as the rational numbers , do not enjoy this property, since suprema and infima of sets need not exist in these number systems, which are Dedekind incomplete in the sense introduced in .   Monotone convergence theorem   Let be a sequence of real numbers .   If is non-decreasing, then .    If is non-increasing, then .   In particular, if is bounded and monotone, then it is convergent.      We observe that is non-empty, and so . There are two cases; either or is a real number.  First suppose that , and let be a real number. Since , is not an upper bound for ; that is, for some natural number . We observe that since is non-decreasing, for all indices , and so .  On the other hand, now suppose that is a real number, and let be a positive real number. Since , is not an upper bound for ; that is, for some natural number . Since is non-decreasing, for all indices , and so for all indices . We conclude that .    We observe that is non-empty, and so . There are two cases; either or is a real number.  First suppose that , and let be a real number. Since , is not a lower bound for ; that is, for some natural number . We observe that since is non-increasing, for all indices , and so .  On the other hand, now suppose that is a real number, and let be a positive real number. Since , is not a lower bound for ; that is, for some natural number . Since is non-increasing, for all indices , and so for all indices . We conclude that .       What we have just shown will prove incredibly useful; in particular, we will use the fact that all bounded, monotone sequences of real numbers are convergent several times throughout this chapter. The converse is not true; while convergent sequences of real numbers are bounded, not all such sequences need be monotone.     Upper and Lower Limits   If a sequence of points in a metric space is convergent, then its image has exactly one limit point. More generally, studying the limit points of the image of a sequence of points is a fruitful exercise regardless of whether or not the series converges. We will see that the Dedekind completeness of the real numbers allows us to characterize these limit points via the upper and lower limits .    Monotonicity of suprema\/infima   Let be subsets of a partially ordered set , and suppose that .   If and have suprema, then .    If and have infima, then .         If , then every upper bound for is an upper bound for , and so .    If , then every lower bound for is a lower bound for , and so .       Upper\/lower limit  upper limit  limit supremum  lower limit  limit infimum       the upper limit of          the lower limit of      Let be a sequence of real numbers .   Upper limit  The sequence is non-increasing, and so by the has a well-defined limit in the extended real numbers . This limit is called the upper limit or limit supremum of the sequence , and is denoted .    Lower limit  The sequence is non-decreasing, and so by the has a well-defined limit in the extended real numbers . This limit is called the lower limit or limit infimum of the sequence , and is denoted .        Upper\/lower limits   Consider the sequence . Then , and .     Properties of upper limits   Upper limits of sequences of real numbers have the following properties:   A sequence of real numbers is bounded from above if and only if .    For any sequences and of real numbers , whenever the right-hand side of the above inequality is well-defined.    For any non-negative real number and sequence of real numbers , whenever the right-hand side of the above equality is well-defined.         Suppose that is bounded from above. Then there is a real number so that for all indices . In particular, for all natural numbers , for all indices , and so . implies that .  Conversely, now suppose that . For each natural number , let , and let . Since is a positive real number, there is a natural number so that for all indices . In particular, , and so . Let , and note that for all indices . Since such an upper bound exists, we conclude that is bounded from above.    For each natural number , let and . We observe that for all natural numbers and indices . Thus for all natural numbers , and so and (1) of together imply that .    If , then our hypotheses imply that is a real number, and so . Thus we may suppose that is positive. In this case, multiplication by is a strictly order-preserving bijection of , and so for all natural numbers . We conclude that .      One natural follow-up from is the question of negative scalings of sequences: If is a negative real number and is a sequence of real numbers , what is the upper limit ?   Upper and lower limits   Let be a sequence of real numbers. Then and . Here we define and .    We observe that for all natural numbers , and so . Applying this result to the sequence , we see that .    In addition to answering our question about the behavior of upper limits under scaling by negative real numbers, we can use to translate results about upper limits into results about lower limits. For example, each of the properties in has an analogue for lower limits.   Properties of lower limits   Lower limits of sequences of real numbers have the following properties:   A sequence of real numbers is bounded from below if and only if .    For any sequences and of real numbers , whenever the right-hand side of the above inequality is well-defined.    For any non-negative real number and sequence of real numbers , whenever the right-hand side of the above equality is well-defined.       Finally, we end with a characterization of convergence and divergence to infinity in terms of upper and lower limits.   Convergence and upper and lower limits   Let be a sequence of real numbers .   Convergence  For any real number , the sequence converges to if and only if .    Divergence to   The sequence diverges to if and only if .    Divergence to   The sequence diverges to if and only if .         For each natural number , let and . First suppose that converges to . Let be a positive real number. Then there is a natural number so that for all indices . In particular, for any natural number , and so by . Since this holds for all positive real numbers , .  Conversely, now suppose that . Let be a positive real number. Then there are natural numbers so that for all indices and for all indices . Let , and note that and for all indices . We conclude that for all indices , and so converges to .      You will be given the opportunity to prove (2) and (3) of in the problems for this section.   In , we will reexamine limits, convergence, and divergence to infinity in the extended real number system as an example of the more general context of topological spaces. For now, however, we will return to our study of the point-set topology of metric spaces.     In this section, we have seen that much of the metric structure of the real line can be phrased in terms of the standard ordering . In particular, we have seen that convergence in the Euclidean metric is deeply related to the properties of small intervals of real numbers. In the next section, we will examine the analogs of these intervals in general metric spaces.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.    Limits and arithmetic   Compute the limits of the given sequences of real numbers.     Compute .     .    We compute .      Compute .     .    We compute .      Limits and strict comparison   Give examples of convergent sequences and of real numbers so that for all indices but .    For each natural number , let and . Then for all indices , but .     Computing upper\/lower limits   Compute the upper and lower limits of the given sequences of real numbers.     Compute and .     .      Compute and .     .      Compute and .     and .      Compute and .     .      Short answers and\/or in-depth solutions to these exercises are available in . However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Problems   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .    Limits and scalar multiplication   Let be a norm on a real or complex vector space . Prove that for any convergent sequences and of scalars and vectors .    asdf     Limits and division   Prove that for every sequence of non-zero real numbers which converges to a non-zero real number limit .    asdf     Squeezing to infinity   Let and be sequences of real numbers .     Prove that if for all indices and diverges to , then diverges to .    asdf      Prove that if for all indices and diverges to , then diverges to .    asdf     We can interpret the above results as versions of the for divergence to infinity.     Reciprocals of infinite limits   Prove that a sequence of negative real numbers diverges to if and only if .    asdf     Divergence and upper\/lower limits   In this problem, you will complete the proof of . Let be a sequence of real numbers .     Prove that diverges to if and only if .    asdf      Prove that diverges to if and only if .    asdf      In-depth solutions to these problems are available in . However, these are provided in order to check your work. If you are unable to solve the above problems, discuss your questions with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "proposition-limits-and-vector-arithmetic",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#proposition-limits-and-vector-arithmetic",
  "type": "Proposition",
  "number": "3.3.1",
  "title": "Limits and vector arithmetic.",
  "body": " Limits and vector arithmetic   Let be a norm on a real or complex vector space , and consider the induced metric on .   Vector addition  For all convergent sequences and of vectors , .    Scalar multiplication  For all scalars and convergent sequences of vectors , .    Norm  For all convergent sequences of vectors , .    Inner product  If the norm is induced by an inner product on , then for all convergent sequences and of vectors , .         Let and . Let be a positive real number. Since is a positive real number, there are natural numbers so that for all indices and for all indices . Let , and note that for all indices . We conclude that .    Let . Let be a positive real number. Note that for all indices . If , then for all indices . We conclude that in this case, .  Now suppose that . Since is a positive real number, there is a natural number so that for all indices . In particular, . We conclude that in this case, .    Let . Let be a positive real number. Then there is a natural number so that for all indices . We observe that implies that for all indices , and so .    Let and . Let be a positive real number. We observe that for all indices by the Cauchy--Schwarz inequality. There are four cases, depending on whether or not and are zero or non-zero vectors. If , then .  If and , then there is a natural number so that for all indices . We observe that for all indices .  If and , then there is a natural number so that for all indices . We observe that for all indices .  Finally, if and , then there are natural numbers so that for all indices and for all indices . Let . We observe that for all indices .  In all cases, we conclude that .     "
},
{
  "id": "proposition-comparison-of-limits",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#proposition-comparison-of-limits",
  "type": "Proposition",
  "number": "3.3.2",
  "title": "Comparison of limits.",
  "body": " Comparison of limits   Let and be convergent sequences of real numbers . If for all indices , then .    By contraposition. Let and , and suppose that . Consider the positive real number . Then there are natural numbers so that for all indices and for all indices . Let . We observe that and , so that .  In summary, we have shown that if , then for some index . Taking the contrapositive, we arrive at the desired result.   "
},
{
  "id": "theorem-squeeze-theorem",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#theorem-squeeze-theorem",
  "type": "Theorem",
  "number": "3.3.3",
  "title": "Squeeze theorem.",
  "body": " Squeeze theorem   Let , , and be sequences of real numbers . If for all indices and and converge to the same real number , then converges to .    Let be a positive real number. Then there are natural numbers so that for all indices and for all indices . Let , and note that and for all indices . In particular, we conclude that for all indices , and so converges to .   "
},
{
  "id": "example-squeeze-theorem",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#example-squeeze-theorem",
  "type": "Example",
  "number": "3.3.4",
  "title": "Squeeze theorem.",
  "body": " Squeeze theorem   Since for all positive integers and , we can conclude by the that without worrying about a lengthy convergence argument.   "
},
{
  "id": "definition-sequential-divergence-to-infinity",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#definition-sequential-divergence-to-infinity",
  "type": "Definition",
  "number": "3.3.5",
  "title": "Sequential divergence to infinity.",
  "body": " Sequential divergence to infinity   Let be a sequence of real numbers .   Divergence to   The sequence is said to diverge to  if for each real number , there is a natural number so that for all indices . In this case, we write .    Divergence to   The sequence is said to diverge to  if for each real number , there is a natural number so that for all indices . In this case, we write .      "
},
{
  "id": "example-sequential-divergence-to-infinity",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#example-sequential-divergence-to-infinity",
  "type": "Example",
  "number": "3.3.6",
  "title": "Sequential divergence to infinity.",
  "body": " Sequential divergence to infinity   The following are examples and non-examples of sequences of real numbers which diverge to infinity.   The sequence diverges to ; that is, .    The sequence diverges, but it does not diverge to or .      "
},
{
  "id": "definition-function-divergence-to-infinity",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#definition-function-divergence-to-infinity",
  "type": "Definition",
  "number": "3.3.7",
  "title": "Function divergence to infinity.",
  "body": " Function divergence to infinity   Let be a real-valued function on a metric space .   Divergence to   The function is said to diverge to  at a point if for each real number , there is a positive real number so that for all points so that .  In this case, if is a limit point of , then we write .    Divergence to   The function is said to diverge to  at a point if for each real number , there is a positive real number so that for all points so that .  In this case, if is a limit point of , then we write .      "
},
{
  "id": "example-function-divergence-to-infinity",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#example-function-divergence-to-infinity",
  "type": "Example",
  "number": "3.3.8",
  "title": "Function divergence to infinity.",
  "body": " Function divergence to infinity   The following are examples and non-examples of real-valued functions on metric spaces which diverge to infinity   Consider the real-valued function defined by the formula . Then diverges to at ; that is, .    Consider the real-valued function defined by the formula . Then diverges at , but it does not diverge to or at .      "
},
{
  "id": "proposition-reciprocals-of-infinite-limits",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#proposition-reciprocals-of-infinite-limits",
  "type": "Proposition",
  "number": "3.3.9",
  "title": "Reciprocals of infinite limits.",
  "body": " Reciprocals of infinite limits   Let be a sequence of positive real numbers . Then if and only if .    First suppose that diverges to , and let . Then is a real number, and so there is a natural number so that for all indices . In particular, for all indices , and so converges to .  Conversely, now suppose that converges to , and let be a real number. If is non-positive, then for all indices . On the other hand, if is positive, then is a positive real number, and so there is a natural number so that for all indices . In particular, for all indices , and so diverges to .   "
},
{
  "id": "subsection-divergence-to-infinity-12",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#subsection-divergence-to-infinity-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "boundedness "
},
{
  "id": "definition-map-boundedness",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#definition-map-boundedness",
  "type": "Definition",
  "number": "3.3.10",
  "title": "Map boundedness.",
  "body": " Map boundedness  boundedness            Let be a map from a set to a partially ordered set .   Upper bound  An output is an upper bound for the map if it is an upper bound for the image ; that is, is an upper bound for if for all inputs .  The map is called bounded from above if there is an upper bound for , and unbounded from above if there is no such upper bound.    Lower bound  An output is a lower bound for the map if it is a lower bound for the image ; that is, is a lower bound for if for all inputs .  The map is called bounded from below if there is a lower bound for , and unbounded from below if there is no such lower bound.    Boundedness  The map is called bounded if it is both bounded from above and bounded from below, and is called unbounded otherwise if it is either unbounded from above or unbounded from below (or both).      "
},
{
  "id": "example-sequential-boundedness-in-the-real-line",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#example-sequential-boundedness-in-the-real-line",
  "type": "Example",
  "number": "3.3.11",
  "title": "Sequential boundedness in the real line.",
  "body": " Sequential boundedness in the real line   A sequence of real numbers is bounded if and only if there are real numbers such that for all indices . For example, the sequence is bounded, because for all indices .   "
},
{
  "id": "subsection-divergence-to-infinity-16",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#subsection-divergence-to-infinity-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "monotone "
},
{
  "id": "definition-monotonicity",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#definition-monotonicity",
  "type": "Definition",
  "number": "3.3.12",
  "title": "Monotonicity.",
  "body": " Monotonicity  non-decreasing  order-preserving  isotonicity  increasing  strictly order-preserving  strict isotonicity  non-increasing  order-reversing  antitonicity  decreasing  strictly order-reversing  strict antitonicity  monotonicity  strict monotonicity   Let be a map from a partially ordered set to a partially ordered set .   Isotonicity  The map is called non-decreasing , order-preserving , or isotone if for all inputs , if , then . The map is called increasing , strictly order-preserving , or strictly isotone if it is non-decreasing and injective.    Antitonicity  The map is called non-increasing , order-reversing , or antitone if for all inputs , if , then . The map is called decreasing , strictly order-reversing , or strictly antitone if it is non-increasing and injective.    Monotonicity  The map is called monotone if it is either non-decreasing or non-increasing, and is called strictly monotone if it is either increasing or decreasing.      "
},
{
  "id": "theorem-monotone-convergence-theorem",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#theorem-monotone-convergence-theorem",
  "type": "Theorem",
  "number": "3.3.13",
  "title": "Monotone convergence theorem.",
  "body": " Monotone convergence theorem   Let be a sequence of real numbers .   If is non-decreasing, then .    If is non-increasing, then .   In particular, if is bounded and monotone, then it is convergent.      We observe that is non-empty, and so . There are two cases; either or is a real number.  First suppose that , and let be a real number. Since , is not an upper bound for ; that is, for some natural number . We observe that since is non-decreasing, for all indices , and so .  On the other hand, now suppose that is a real number, and let be a positive real number. Since , is not an upper bound for ; that is, for some natural number . Since is non-decreasing, for all indices , and so for all indices . We conclude that .    We observe that is non-empty, and so . There are two cases; either or is a real number.  First suppose that , and let be a real number. Since , is not a lower bound for ; that is, for some natural number . We observe that since is non-increasing, for all indices , and so .  On the other hand, now suppose that is a real number, and let be a positive real number. Since , is not a lower bound for ; that is, for some natural number . Since is non-increasing, for all indices , and so for all indices . We conclude that .     "
},
{
  "id": "subsection-upper-and-lower-limits-2-1",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#subsection-upper-and-lower-limits-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "upper lower limits "
},
{
  "id": "lemma-monotonicity-of-suprema-infima",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#lemma-monotonicity-of-suprema-infima",
  "type": "Lemma",
  "number": "3.3.14",
  "title": "Monotonicity of suprema\/infima.",
  "body": " Monotonicity of suprema\/infima   Let be subsets of a partially ordered set , and suppose that .   If and have suprema, then .    If and have infima, then .         If , then every upper bound for is an upper bound for , and so .    If , then every lower bound for is a lower bound for , and so .     "
},
{
  "id": "definition-upper-lower-limit",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#definition-upper-lower-limit",
  "type": "Definition",
  "number": "3.3.15",
  "title": "Upper\/lower limit.",
  "body": " Upper\/lower limit  upper limit  limit supremum  lower limit  limit infimum       the upper limit of          the lower limit of      Let be a sequence of real numbers .   Upper limit  The sequence is non-increasing, and so by the has a well-defined limit in the extended real numbers . This limit is called the upper limit or limit supremum of the sequence , and is denoted .    Lower limit  The sequence is non-decreasing, and so by the has a well-defined limit in the extended real numbers . This limit is called the lower limit or limit infimum of the sequence , and is denoted .      "
},
{
  "id": "example-upper-lower-limits",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#example-upper-lower-limits",
  "type": "Example",
  "number": "3.3.16",
  "title": "Upper\/lower limits.",
  "body": " Upper\/lower limits   Consider the sequence . Then , and .   "
},
{
  "id": "proposition-properties-of-upper-limits",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#proposition-properties-of-upper-limits",
  "type": "Proposition",
  "number": "3.3.17",
  "title": "Properties of upper limits.",
  "body": " Properties of upper limits   Upper limits of sequences of real numbers have the following properties:   A sequence of real numbers is bounded from above if and only if .    For any sequences and of real numbers , whenever the right-hand side of the above inequality is well-defined.    For any non-negative real number and sequence of real numbers , whenever the right-hand side of the above equality is well-defined.         Suppose that is bounded from above. Then there is a real number so that for all indices . In particular, for all natural numbers , for all indices , and so . implies that .  Conversely, now suppose that . For each natural number , let , and let . Since is a positive real number, there is a natural number so that for all indices . In particular, , and so . Let , and note that for all indices . Since such an upper bound exists, we conclude that is bounded from above.    For each natural number , let and . We observe that for all natural numbers and indices . Thus for all natural numbers , and so and (1) of together imply that .    If , then our hypotheses imply that is a real number, and so . Thus we may suppose that is positive. In this case, multiplication by is a strictly order-preserving bijection of , and so for all natural numbers . We conclude that .     "
},
{
  "id": "lemma-upper-and-lower-limits",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#lemma-upper-and-lower-limits",
  "type": "Lemma",
  "number": "3.3.18",
  "title": "Upper and lower limits.",
  "body": " Upper and lower limits   Let be a sequence of real numbers. Then and . Here we define and .    We observe that for all natural numbers , and so . Applying this result to the sequence , we see that .   "
},
{
  "id": "corollary-properties-of-lower-limits",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#corollary-properties-of-lower-limits",
  "type": "Corollary",
  "number": "3.3.19",
  "title": "Properties of lower limits.",
  "body": " Properties of lower limits   Lower limits of sequences of real numbers have the following properties:   A sequence of real numbers is bounded from below if and only if .    For any sequences and of real numbers , whenever the right-hand side of the above inequality is well-defined.    For any non-negative real number and sequence of real numbers , whenever the right-hand side of the above equality is well-defined.      "
},
{
  "id": "theorem-convergence-and-upper-and-lower-limits",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#theorem-convergence-and-upper-and-lower-limits",
  "type": "Theorem",
  "number": "3.3.20",
  "title": "Convergence and upper and lower limits.",
  "body": " Convergence and upper and lower limits   Let be a sequence of real numbers .   Convergence  For any real number , the sequence converges to if and only if .    Divergence to   The sequence diverges to if and only if .    Divergence to   The sequence diverges to if and only if .         For each natural number , let and . First suppose that converges to . Let be a positive real number. Then there is a natural number so that for all indices . In particular, for any natural number , and so by . Since this holds for all positive real numbers , .  Conversely, now suppose that . Let be a positive real number. Then there are natural numbers so that for all indices and for all indices . Let , and note that and for all indices . We conclude that for all indices , and so converges to .     "
},
{
  "id": "exercise-limits-and-arithmetic-3",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#exercise-limits-and-arithmetic-3",
  "type": "Problem",
  "number": "3.3.4.1",
  "title": "",
  "body": "  Compute .     .    We compute .   "
},
{
  "id": "exercise-limits-and-arithmetic-4",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#exercise-limits-and-arithmetic-4",
  "type": "Problem",
  "number": "3.3.4.2",
  "title": "",
  "body": "  Compute .     .    We compute .   "
},
{
  "id": "exercise-limits-and-strict-comparison",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#exercise-limits-and-strict-comparison",
  "type": "Problem",
  "number": "3.3.4.3",
  "title": "Limits and strict comparison.",
  "body": " Limits and strict comparison   Give examples of convergent sequences and of real numbers so that for all indices but .    For each natural number , let and . Then for all indices , but .   "
},
{
  "id": "exercise-computing-upper-lower-limits-3",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#exercise-computing-upper-lower-limits-3",
  "type": "Problem",
  "number": "3.3.4.4",
  "title": "",
  "body": "  Compute and .     .   "
},
{
  "id": "exercise-computing-upper-lower-limits-4",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#exercise-computing-upper-lower-limits-4",
  "type": "Problem",
  "number": "3.3.4.5",
  "title": "",
  "body": "  Compute and .     .   "
},
{
  "id": "exercise-computing-upper-lower-limits-5",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#exercise-computing-upper-lower-limits-5",
  "type": "Problem",
  "number": "3.3.4.6",
  "title": "",
  "body": "  Compute and .     and .   "
},
{
  "id": "exercise-computing-upper-lower-limits-6",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#exercise-computing-upper-lower-limits-6",
  "type": "Problem",
  "number": "3.3.4.7",
  "title": "",
  "body": "  Compute and .     .   "
},
{
  "id": "problem-limits-and-scalar-multiplication",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#problem-limits-and-scalar-multiplication",
  "type": "Problem",
  "number": "3.3.5.1",
  "title": "Limits and scalar multiplication.",
  "body": " Limits and scalar multiplication   Let be a norm on a real or complex vector space . Prove that for any convergent sequences and of scalars and vectors .    asdf   "
},
{
  "id": "problem-limits-and-division",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#problem-limits-and-division",
  "type": "Problem",
  "number": "3.3.5.2",
  "title": "Limits and division.",
  "body": " Limits and division   Prove that for every sequence of non-zero real numbers which converges to a non-zero real number limit .    asdf   "
},
{
  "id": "problem-squeezing-to-infinity",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#problem-squeezing-to-infinity",
  "type": "Problem",
  "number": "3.3.5.3",
  "title": "Squeezing to infinity.",
  "body": " Squeezing to infinity   Let and be sequences of real numbers .     Prove that if for all indices and diverges to , then diverges to .    asdf      Prove that if for all indices and diverges to , then diverges to .    asdf     We can interpret the above results as versions of the for divergence to infinity.   "
},
{
  "id": "problem-reciprocals-of-infinite-limits",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#problem-reciprocals-of-infinite-limits",
  "type": "Problem",
  "number": "3.3.5.4",
  "title": "Reciprocals of infinite limits.",
  "body": " Reciprocals of infinite limits   Prove that a sequence of negative real numbers diverges to if and only if .    asdf   "
},
{
  "id": "problem-divergence-and-upper-lower-limits",
  "level": "2",
  "url": "section-limits-in-the-euclidean-metric.html#problem-divergence-and-upper-lower-limits",
  "type": "Problem",
  "number": "3.3.5.5",
  "title": "Divergence and upper\/lower limits.",
  "body": " Divergence and upper\/lower limits   In this problem, you will complete the proof of . Let be a sequence of real numbers .     Prove that diverges to if and only if .    asdf      Prove that diverges to if and only if .    asdf    "
},
{
  "id": "section-open-and-closed-sets",
  "level": "1",
  "url": "section-open-and-closed-sets.html",
  "type": "Section",
  "number": "3.4",
  "title": "Open and Closed Sets",
  "body": " Open and Closed Sets   In this section, we generalize the notion of open and closed intervals to subsets of arbitrary metric spaces. Recall that the open interval between two real numbers is the subset of the real numbers defined as follows. . Similarly, the closed interval between two real numbers is the subset of the real numbers defined as follows. . Soon, we will develop the more general notion of the open and closed subsets of a metric space, which will play a crucial role in the remainder of this text.    Neighborhoods in Metric Spaces   Informally, a subset of a metric space is open if it contains all points which are close to its elements and closed if it contains all of its limit points. These are one of many provably equivalent definitions of openness and closedness. In order to formalize this, we make the following preliminary definitions.    Open ball; closed disk; sphere  open ball  closed disk  sphere  radius  center  open metric ball  closed metric disk  metric sphere       the open metric ball of radius and center          the closed metric disk of radius and center          the metric sphere of radius and center      Fix a positive real number and a point in a metric space .   Open metric ball  The open (metric) ball  in of radius  and center  is the subset of defined by .    Closed metric disk  The closed (metric) disk  in of radius  and center  is the subset of defined by .    Open metric ball  The (metric) sphere  in of radius  and center  is the subset of defined by .       So an open ball contains precisely the points of distance strictly less than its radius from its center; a closed disk contains precisely the points of distance at most its radius from its center; and a sphere contains precisely the points of distance precisely its radius from its center. Just as the difference between an open and a closed interval is the question of the inclusion of its endpoints, the distinction between open balls and closed disks is that a closed disk contains all points of distance precisely its radius from its center, while an open ball does not.  We will see that in many ways, this section is an investigation of the properties of subsets of metric spaces which contain or are contained in certain open balls. The following definition, that of a neighborhood , will be a useful notion for both the rest of this chapter and the next chapter as well. Informally, a subset of a metric space is a neighborhood of a point if it contains all points which are very close to that point.   Neighborhood  neighborhood   A subset is a neighborhood of a point in a metric space if contains an open ball centered at ; that is, is a neighborhood of if for some positive real number .     Neighborhoods   Every open ball and closed disk in a metric space is a neighborhood of its center.     Locality  locality  The notion of a neighborhood is our latest exposure to the conceptual metaphor of locality . We conceive of metric spaces by spatial reasoning, saying for example that for points in a metric space , if is a small positive number, then and are close .  This idea is pervasive throughout point-set topology, and it implicitly informs much of the relevant terminology. Just as your neighborhood contains all of the people closest to where you live, a neighborhood in a metric space contains all nearby points.   We now have the terminology to make the crucial and titular definitions of this section; that of open and closed subsets of a metric space. A subset of a metric space is open if it is a neighborhood of all of its points, and is closed if its complement is open.   Open\/closed subset  open subset  closed subset   Let be a subset of a metric space .   Open subset   is open in if it is a neighborhood of each of its points; that is, is open if for each point , there is a positive real number so that .    Closed subset   is closed in if its complement is open in ; that is, is closed if each point has a neighborhood in which is disjoint from .        Openness and closedness   Open balls in metric spaces are open, and closed disks are closed.    Fix a positive real number and a point in a metric space . Let and be the open ball and closed disk of radius and center , respectively. We will show that and are open and closed in , respectively.  To that end, first let , so that . Let . We note that for a point , if , then , and so . Thus . Since contains an open ball centered at each of its points, it is a neighborhood of each of its points, and so is open in .  On the other hand, now suppose that , so that . Let . We note that for a point , if , then . We conclude that , and so . Since contains an open ball centered at each of its points, it is a neighborhood of each of its points, and so is open in ; that is, is closed in .     illustrates that the names open and closed for balls and disks are well-deserved; open balls and closed disks in a metric space are open and closed, respectively. This immediately implies that open intervals and closed intervals of real numbers (with finite endpoints) are open and closed, respectively, in the Euclidean metric, since any such interval is either a open ball or a closed disk (depending on whether or not it includes its endpoints) around its center, which is the arithmetic mean of its endpoints.  We next develop a series of point-set topological definitions based on the notion of neighborhoods which will play an important role in both this and the next chapter. Given a subset of a metric space, we may consider open or closed sets which approximate the set as well as possible from the inside or outside, respectively.   Interior; closure; boundary  interior point  interior  point of closure  closure  boundary point  boundary       the interior of          the closure of          the boundary of      Fix a subset of a metric space .   Interior  A point is an interior point of if is a neighborhood of . The set of interior points of is called the interior of and is denoted or .    Closure  A point is called a point of closure of in if for all neighborhoods of in . The set of points of closure of in is called the closure of in and is denoted or .    Boundary  A point is called a boundary point of in if and for all neighborhoods of in . The set of all boundary points of in is called the boundary of in and is denoted or .       The above definitions are equivalent if we quantify over open balls centered at the point in question rather than over neighborhoods of said point. However, the notion of neighborhood will extend into our discussion in , so we will continue in this spirit of generality, which we hope will ease our generalization of the above notions.   Interior, closure, and boundary   Consider the half-closed, half-open interval of real numbers between and . has interior , closure , and boundary in .    Clearly, a subset of a metric space is open if and only if it is its own interior. Perhaps less obvious, however, is the second half of the following result; a subset of a metric space is closed if and only if it is its own closure.   Interior\/closure   Let be a subset of a metric space .   Interior   is open in if and only if .    Closure   is closed in if and only if .         We first note that for any point , there is some neighborhood of so that . Since is a neighborhood of , it contains some open ball . We conclude that , and so . We conclude that . Therefore, it suffices to show that is open in if and only if .  To that end, we first suppose that is open, and let . Then is a neighborhood of in , and of course . Thus is an interior point of . We conclude that .  Conversely, now suppose that , and let . Then , and so for some neighborhood of in . Since is a neighborhood of , it contains some open ball . We conclude that , and so is a neighborhood of in . Since this holds for all , is open in .    Let be a neighborhood of a point in . Then contains some open ball , and so . In particular, , and so is non-empty. Thus is a point of closure of in . We conclude that . Therefore, it suffices to show that is closed in if and only if .  To that end, we first suppose that is closed, and let . If , then our hypothesis that is closed implies that has a neighborhood in so that . This implies that . In summary, we have shown that , and so .  Conversely, now suppose that , and let . Then is not a point of closure of in , and so for some neighborhood of in . This implies that , and so is a neighborhood of in . Since this holds for all points , we conclude that is open in ; that is, is closed in .      So a subset of a metric space is open if and only if it is its own interior, and it is closed if and only if it is its own closure. This is because the interior of a set is the largest open set which is contained in it, the closure of a subset is the smallest closed set in which it is contained.   Interior\/closure   Let be a subset of a metric space .   Interior  Let be the collection of open subsets of contained in . Then .    Closure  Let be the collection of closed subsets of which contain . Then .         Let be an interior point to in . Then for some positive real number . implies that is open and so . We conclude that .  Conversely, now suppose that . Then for some . Since is open in , it is a neighborhood of in , and so is an interior point to in .  In summary, we have shown that if and only if , and so .    Consider a closed set , and let . Since is closed in , is open in , and so is a neighborhood of each of its points. Moreover, since , , and so none of the points of are points of closure of in ; that is, . We conclude that . Since this holds for all , .  Conversely, now let . Then for some neighborhood of in . In particular, for some positive real number . Note that . However, , and so . We conclude that .        Metrics and Boundedness   Text before the first subdivision.    Text after the last subdivision.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
},
{
  "id": "subsection-neighborhoods-in-metric-spaces-2-1",
  "level": "2",
  "url": "section-open-and-closed-sets.html#subsection-neighborhoods-in-metric-spaces-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "open closed "
},
{
  "id": "definition-metric-open-ball-closed-disk-sphere",
  "level": "2",
  "url": "section-open-and-closed-sets.html#definition-metric-open-ball-closed-disk-sphere",
  "type": "Definition",
  "number": "3.4.1",
  "title": "Open ball; closed disk; sphere.",
  "body": " Open ball; closed disk; sphere  open ball  closed disk  sphere  radius  center  open metric ball  closed metric disk  metric sphere       the open metric ball of radius and center          the closed metric disk of radius and center          the metric sphere of radius and center      Fix a positive real number and a point in a metric space .   Open metric ball  The open (metric) ball  in of radius  and center  is the subset of defined by .    Closed metric disk  The closed (metric) disk  in of radius  and center  is the subset of defined by .    Open metric ball  The (metric) sphere  in of radius  and center  is the subset of defined by .      "
},
{
  "id": "subsection-neighborhoods-in-metric-spaces-5",
  "level": "2",
  "url": "section-open-and-closed-sets.html#subsection-neighborhoods-in-metric-spaces-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "neighborhood "
},
{
  "id": "definition-metric-neighborhood",
  "level": "2",
  "url": "section-open-and-closed-sets.html#definition-metric-neighborhood",
  "type": "Definition",
  "number": "3.4.2",
  "title": "Neighborhood.",
  "body": " Neighborhood  neighborhood   A subset is a neighborhood of a point in a metric space if contains an open ball centered at ; that is, is a neighborhood of if for some positive real number .   "
},
{
  "id": "example-metric-neighborhoods",
  "level": "2",
  "url": "section-open-and-closed-sets.html#example-metric-neighborhoods",
  "type": "Example",
  "number": "3.4.3",
  "title": "Neighborhoods.",
  "body": " Neighborhoods   Every open ball and closed disk in a metric space is a neighborhood of its center.   "
},
{
  "id": "remark-locality",
  "level": "2",
  "url": "section-open-and-closed-sets.html#remark-locality",
  "type": "Remark",
  "number": "3.4.4",
  "title": "Locality.",
  "body": " Locality  locality  The notion of a neighborhood is our latest exposure to the conceptual metaphor of locality . We conceive of metric spaces by spatial reasoning, saying for example that for points in a metric space , if is a small positive number, then and are close .  This idea is pervasive throughout point-set topology, and it implicitly informs much of the relevant terminology. Just as your neighborhood contains all of the people closest to where you live, a neighborhood in a metric space contains all nearby points.  "
},
{
  "id": "subsection-neighborhoods-in-metric-spaces-9",
  "level": "2",
  "url": "section-open-and-closed-sets.html#subsection-neighborhoods-in-metric-spaces-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "open closed subsets "
},
{
  "id": "definition-open-closed-subset",
  "level": "2",
  "url": "section-open-and-closed-sets.html#definition-open-closed-subset",
  "type": "Definition",
  "number": "3.4.5",
  "title": "Open\/closed subset.",
  "body": " Open\/closed subset  open subset  closed subset   Let be a subset of a metric space .   Open subset   is open in if it is a neighborhood of each of its points; that is, is open if for each point , there is a positive real number so that .    Closed subset   is closed in if its complement is open in ; that is, is closed if each point has a neighborhood in which is disjoint from .      "
},
{
  "id": "lemma-openness-and-closedness",
  "level": "2",
  "url": "section-open-and-closed-sets.html#lemma-openness-and-closedness",
  "type": "Lemma",
  "number": "3.4.6",
  "title": "Openness and closedness.",
  "body": " Openness and closedness   Open balls in metric spaces are open, and closed disks are closed.    Fix a positive real number and a point in a metric space . Let and be the open ball and closed disk of radius and center , respectively. We will show that and are open and closed in , respectively.  To that end, first let , so that . Let . We note that for a point , if , then , and so . Thus . Since contains an open ball centered at each of its points, it is a neighborhood of each of its points, and so is open in .  On the other hand, now suppose that , so that . Let . We note that for a point , if , then . We conclude that , and so . Since contains an open ball centered at each of its points, it is a neighborhood of each of its points, and so is open in ; that is, is closed in .   "
},
{
  "id": "definition-interior-closure-boundary",
  "level": "2",
  "url": "section-open-and-closed-sets.html#definition-interior-closure-boundary",
  "type": "Definition",
  "number": "3.4.7",
  "title": "Interior; closure; boundary.",
  "body": " Interior; closure; boundary  interior point  interior  point of closure  closure  boundary point  boundary       the interior of          the closure of          the boundary of      Fix a subset of a metric space .   Interior  A point is an interior point of if is a neighborhood of . The set of interior points of is called the interior of and is denoted or .    Closure  A point is called a point of closure of in if for all neighborhoods of in . The set of points of closure of in is called the closure of in and is denoted or .    Boundary  A point is called a boundary point of in if and for all neighborhoods of in . The set of all boundary points of in is called the boundary of in and is denoted or .      "
},
{
  "id": "example-interior-closure-and-boundary",
  "level": "2",
  "url": "section-open-and-closed-sets.html#example-interior-closure-and-boundary",
  "type": "Example",
  "number": "3.4.8",
  "title": "Interior, closure, and boundary.",
  "body": " Interior, closure, and boundary   Consider the half-closed, half-open interval of real numbers between and . has interior , closure , and boundary in .   "
},
{
  "id": "proposition-interior-closure",
  "level": "2",
  "url": "section-open-and-closed-sets.html#proposition-interior-closure",
  "type": "Proposition",
  "number": "3.4.9",
  "title": "Interior\/closure.",
  "body": " Interior\/closure   Let be a subset of a metric space .   Interior   is open in if and only if .    Closure   is closed in if and only if .         We first note that for any point , there is some neighborhood of so that . Since is a neighborhood of , it contains some open ball . We conclude that , and so . We conclude that . Therefore, it suffices to show that is open in if and only if .  To that end, we first suppose that is open, and let . Then is a neighborhood of in , and of course . Thus is an interior point of . We conclude that .  Conversely, now suppose that , and let . Then , and so for some neighborhood of in . Since is a neighborhood of , it contains some open ball . We conclude that , and so is a neighborhood of in . Since this holds for all , is open in .    Let be a neighborhood of a point in . Then contains some open ball , and so . In particular, , and so is non-empty. Thus is a point of closure of in . We conclude that . Therefore, it suffices to show that is closed in if and only if .  To that end, we first suppose that is closed, and let . If , then our hypothesis that is closed implies that has a neighborhood in so that . This implies that . In summary, we have shown that , and so .  Conversely, now suppose that , and let . Then is not a point of closure of in , and so for some neighborhood of in . This implies that , and so is a neighborhood of in . Since this holds for all points , we conclude that is open in ; that is, is closed in .     "
},
{
  "id": "theorem-interior-closure",
  "level": "2",
  "url": "section-open-and-closed-sets.html#theorem-interior-closure",
  "type": "Theorem",
  "number": "3.4.10",
  "title": "Interior\/closure.",
  "body": " Interior\/closure   Let be a subset of a metric space .   Interior  Let be the collection of open subsets of contained in . Then .    Closure  Let be the collection of closed subsets of which contain . Then .         Let be an interior point to in . Then for some positive real number . implies that is open and so . We conclude that .  Conversely, now suppose that . Then for some . Since is open in , it is a neighborhood of in , and so is an interior point to in .  In summary, we have shown that if and only if , and so .    Consider a closed set , and let . Since is closed in , is open in , and so is a neighborhood of each of its points. Moreover, since , , and so none of the points of are points of closure of in ; that is, . We conclude that . Since this holds for all , .  Conversely, now let . Then for some neighborhood of in . In particular, for some positive real number . Note that . However, , and so . We conclude that .     "
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
  "title": "Comparison of Topologies [SKIP]",
  "body": " Comparison of Topologies [SKIP]   Text before the first subsection.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
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
  "title": "Connectedness and Compactness [SKIP]",
  "body": " Connectedness and Compactness [SKIP]   Text before the first subsection.     Text after the last subsection.    Exercises   The following exercises are designed to help you practice basic techniques and verify\/solidify your retention of the core ideas presented in each section. Answering these questions will typically involve applying known ideas in familiar ways, recalling information presented in this section, and building fluency with the basic tools of the course. You should approach these exercises as opportunities to make sure you can recognize, recall, and use the fundamental concepts accurately and efficiently before you are asked to answer questions which require complex problem-solving strategies.     Short answers and\/or in-depth solutions to these exercises are available. However, these are provided in order to check your work. If you are unable to answer the above questions, revisit the content of this section rather than spoiling the answers.     Reading Questions   In contrast with the exercises, solving the following problems will require you to engage more deeply with the course material. These questions may require you to analyze a situation, connect multiple ideas, or develop a logical argument from first principles. Many problems will involve writing proofs, explaining your reasoning clearly, and justifying each step. You should expect these to be less routine and more exploratory: there may not be an obvious starting point, and persistence is part of the task .     In-depth solutions to these reading questions are available. However, these are provided in order to check your work. If you are unable to solve the above reading questions, discuss the problem with classmates and\/or instructor rather than spoiling the answers.    "
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
