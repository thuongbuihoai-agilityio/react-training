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