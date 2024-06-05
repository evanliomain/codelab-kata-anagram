import { anagram } from "./lib/anagram";
import { WORDS_EN } from "./lib/words";
import "./style/base.scss";
import "./style/style.scss";

const result = document.getElementById("result");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
document.getElementById("input")?.addEventListener("input", (event: any) => {
  const value = event?.target?.value ?? "";
  if (result) {
    result.innerText = anagram(value, WORDS_EN).join("\n");
  }
});
