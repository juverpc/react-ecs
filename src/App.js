import { useState } from "react";
import "./App.css";

export default function App() {
  const [files, setFiles] = useState("");
  const [fileName, setFileName] = useState("");

  const callLambda = (e) => {
    console.log(files);
  };
  const handleChange = (e) => {
    const fileReader = new FileReader();
    setFileName(e.target.files[0].name);
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      setFiles(e.target.result);
    };
  };
  return (
    <div className="App">
      <h1 className="App-header">Upload Json file</h1>
      <div className="App-container">
        <label htmlFor="file-upload" className="button custom-upload">
          Upload JSON
        </label>
        <input id="file-upload" type="file" onChange={handleChange} />
        <button type="button" className="button send" onClick={callLambda}>
          Send
        </button>
      </div>
      <span className="message">
        {fileName ? fileName : "File not selected"}
      </span>
    </div>
  );
}