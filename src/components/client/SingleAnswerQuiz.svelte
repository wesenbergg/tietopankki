<script>
  let mock = [
    {
      question: "What type of framework is Next.js?",
      answerOptions: [
        { answer: "Frontend" },
        { answer: "Backend" },
        { answer: "FullStack", isCorrect: true },
        { answer: "None of the above" },
      ],
    },
    {
      question: "When was Next.js released?",
      answerOptions: [
        { answer: "20 September 2019" },
        { answer: "14 January 2017" },
        { answer: "25 October 2016", isCorrect: true },
        { answer: "28 March 2018" },
      ],
    },
    {
      question: "Which CSS Framework are we using?",
      answerOptions: [
        { answer: "Bootstrap" },
        { answer: "TailwindCSS", isCorrect: true },
        { answer: "Chakra UI" },
        { answer: "Bulma CSS" },
      ],
    },
    {
      question:
        "Which class in Tailwind is used to set flex direction of column?",
      answerOptions: [
        { answer: "col" },
        { answer: "col-flex" },
        { answer: "flex-col", isCorrect: true },
        { answer: "None of the above" },
      ],
    },
  ];
  let currentIndex = 0;
  let answer;

  const nextQuestion = (reverse = false) => {
    if (reverse && currentIndex > 0) {
      currentIndex--;
    } else if (!reverse && currentIndex < mock.length - 1) {
      currentIndex++;
    }
  };
</script>

<fieldset
  class="flex flex-col items-start w-full border shadow rounded-lg px-8 py-4"
>
  <legend class="text-xl">Question {currentIndex + 1} of {mock.length}</legend>
  <h3 class="text-2xl">{mock[currentIndex].question}</h3>
  <div class="w-full my-4 space-y-2">
    {#each mock[currentIndex].answerOptions as option}
      <div class="flex w-full border rounded-xl shadow-sm">
        <input
          type="radio"
          bind:group={answer}
          value={option.answer}
          id={`radio-${option.answer}`}
          class="ml-8"
        />
        <label for={`radio-${option.answer}`} class="w-full p-4"
          >{option.answer}</label
        >
      </div>
    {/each}
  </div>
  <div class="flex flex-row-reverse justify-between w-full">
    <button
      on:click={() => nextQuestion()}
      class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-xl shadow-md"
      >Next</button
    >
    <button
      on:click={() => nextQuestion(true)}
      class="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded-xl"
      >Previous</button
    >
  </div>
</fieldset>
