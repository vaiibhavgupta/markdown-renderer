import { useState } from "react";

import "./App.css";
import LineBreak from "./components/lineBreak";
import InputField from "./components/inputField";
import SubmitButton from "./components/submitButton";
import ReactMarkdownPlus from "./components/reactMarkDownPlus";

export default function App() {
  const [contentMDX, setContentMDX] = useState("");
  const [displayMDX, setDisplayMDX] = useState("");

  function captureMDXContent(e) {
    setContentMDX(e.target.value);
  }

  function displayMDXContent({}) {
    setDisplayMDX(contentMDX);
  }

  return (
    <div className="mx-auto text-center">
      <LineBreak count="2" />
      <p className="text-5xl">JSX + GitHub Markdown Renderer</p>
      <LineBreak count="2" />
      <InputField onChange={captureMDXContent} />
      <LineBreak count="2" />
      <SubmitButton onClick={displayMDXContent} />
      <LineBreak count="4" />
      <ReactMarkdownPlus children={displayMDX} />
    </div>
  );
}
