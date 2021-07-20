import React from "react";
import { Form,Button } from "react-bootstrap";


const handleSubmit = () => {

}

const TextInput = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Paste your text here:</Form.Label>
          <Form.Control as="textarea" rows={7} />
        </Form.Group>
        <Button type="submit" onClick={handleSubmit}>Submit</Button>
      </Form>
    </>
  );
};

export default TextInput;
