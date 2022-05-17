### Uncontrolled Components
- In most cases, we recommend using controlled components to implement forms
- To write an uncontrolled component, instead of writing an event handler for every state update, you can `use a ref` to get form values from the DOM
```
  import { createRef } from "react";

  const NameForm: React.FC = () => {

    const input = createRef();

    const handleSubmit: any = (event: any) => {
      alert('A name was submitted: ' + input.current.value);
      event.preventDefault();
    }
    return (
      <>
        <h1>This is incontrolled components</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" ref={input} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }

  export default NameForm;
```
### Default value
- To handle this case, you can specify a `defaultValue` attribute instead of `value`.
- Changing the value of defaultValue attribute after a component has mounted will not cause any update of the value in the DOM.
```
render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input
          defaultValue="Bob"
          type="text"
          ref={this.input} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
```
- Likewise, <input type="checkbox"> and <input type="radio"> support defaultChecked, and <select> and <textarea> supports defaultValue.
#### The file input Tag
- In React, an <input type="file" /> is always an uncontrolled component because its value can only be set by a user, and not programmatically.
```
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
```