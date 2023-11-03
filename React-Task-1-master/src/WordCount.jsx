import React, { useState } from "react";

const WordCount = () => {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // Calculate the word count
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div>
      <h1>Responsive Word Count</h1>
      <textarea
        placeholder="Type or paste your text here..."
        value={text}
        onChange={handleTextChange}
        rows={5}
      />
      <p>
        Word Count: <strong>{wordCount}</strong>
      </p>
    </div>
  );
};

export default WordCount;
