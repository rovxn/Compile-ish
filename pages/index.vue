<template>
  <div
    class="bg-bg-hero h-screen max-h-screen w-screen max-w-screen flex justify-center items-center"
  >
    <div class="h-[90%] w-[90%] flex flex-col gap-2">
      <div class="flex flex-col gap-2 h-[75%]">
        <div class="flex items-center justify-between frank text-5xl">
          <div
            class="bg-neutral-800 frank text-2xl text-white px-2 pr-48 rounded-lg py-2 w-fit h-fit"
          >
            Code Segment
          </div>
          <h1>COMPILE-ISH</h1>
        </div>
        <div
          class="relative flex h-full overflow-hidden border border-gray-600 rounded-lg"
        >
          <!-- Line numbers container -->
          <div
            id="lineNumbers"
            class="text-right pr-3 text-gray-500 bg-neutral-800 border-r border-gray-600 w-10 pt-3 overflow-hidden"
            v-html="lineNumbers"
          ></div>

          <!-- Textarea for code input -->
          <textarea
            id="codeInput"
            placeholder="Write your code here..."
            class="w-full h-full jet text-base text-white/75 p-3 bg-neutral-900 caret-white resize-none focus:outline-none"
            v-model="code"
            @input="updateLineNumbers"
            @scroll="syncScroll"
            spellcheck="false"
          ></textarea>
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <div
          class="bg-neutral-800 frank text-2xl text-white px-2 pr-48 rounded-lg py-2 w-fit h-fit"
        >
          Output Window
        </div>
        <div
          class="relative flex overflow-hidden h-48 border border-gray-600 rounded-lg"
        >
          <div
            id="output"
            class="w-full h-full text-base text-xl text-white p-3 bg-neutral-900 caret-white resize-none focus:outline-none"
          >
            {{ output }}
          </div>
        </div>
        <button
          id="compileButton"
          @click="mockCompile"
          class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all mt-4"
        >
          Compile
        </button>
      </div>
    </div>
    <audio ref="mockAudio" src="https://www.soundjay.com/human/laughter-1.mp3" preload="auto"></audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: "",
      lineNumbers: "1",
      output: "Nokki Erunno, Ippo Kittum!!",
      mockingMessages: [
        "Did you really think that would work?",
        "Nice try, but no.",
        "I've seen better code from a potato.",
        "That’s... creative, I guess.",
        "Just kidding, it won’t work anyway.",
        "If this was a real compiler, it would cry.",
        "10/10 for effort, 0/10 for results.",
        "Bold of you to assume this would work!",
        "Error: Infinite sarcasm detected in line 42.",
        "Warning: Spaghetti code spilled everywhere. Cleanup required.",
        "SyntaxError: Unexpected ‘Just Kidding’ at compile time.",
        "Fatal Error: Compiler has trust issues. Try again…maybe?",
        "Exception: Missing semicolon caused the compiler to question life.",
        "Oops! Compiler ran out of coffee, can’t think straight.",
        "Compilation failed: Code quality insufficient for cosmic standards.",
        "Error 404: Coding skills not found.",
        "Alert: Code is too cool for this compiler. Try something more basic.",
        "Warning: Your code’s IQ exceeds compiler’s maximum capacity.",
        "RuntimeError: Compiler realized it’s not getting paid for this.",
        "Compilation failed: Unexpected cosmic interference detected.",
        "Error: Missing motivation in line 1. Compiler suggests a coffee break.",
        "Oops: Compiler experienced an existential crisis. Restart needed.",
        "Alert: Code detected that shouldn’t exist in this dimension.",
        "Error: Compiler lost hope. Try some inspirational quotes first.",
        "Warning: Coding skills overloaded the compiler’s circuits.",
        "Syntax Error: Compiler refuses to deal with such messy code.",
        "UnexpectedError: Compiler is laughing too hard to continue.",
        "Oops! Compiler encountered undefined programmer sanity.",
        "Warning: Too much genius in one line. Compiler intimidated.",
        "Error: Compiler found unexpected chill vibes. It’s taking a break.",
        "Compilation failed: Compiler is disappointed with your life choices.",
      ],
    };
  },
  methods: {
    updateLineNumbers() {
      const lineCount = this.code.split("\n").length;
      this.lineNumbers = Array.from(
        { length: lineCount },
        (_, i) => i + 1
      ).join("<br>");
    },
    syncScroll(event) {
      const lineNumbers = this.$refs.lineNumbers;
      lineNumbers.scrollTop = event.target.scrollTop;
    },
    getRandomMessage() {
      const randomIndex = Math.floor(
        Math.random() * this.mockingMessages.length
      );
      return this.mockingMessages[randomIndex];
    },
    mockCompile() {
      if (this.code.trim() === "") {
        this.output = "Error: No code to compile. Try harder!";
        return;
      }

      this.output = "Compiling...";

      setTimeout(() => {
        this.output = this.getRandomMessage();
        this.$refs.mockAudio.play();
      }, 1500);
    },
  },
  mounted() {
    this.updateLineNumbers();
  },
};
</script>
