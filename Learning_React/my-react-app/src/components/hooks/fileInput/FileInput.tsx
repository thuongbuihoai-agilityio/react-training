import { createRef } from "react";

const FileInput: React.FC = () => {
  const fileInput = createRef();
  
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    // highlight-range{3}
    event.preventDefault();
    alert(
      `Selected file - ${fileInput.current.files[0].name}`
    );
  }
  return (
    <>
      <h1>File input in react</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={fileInput} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FileInput;