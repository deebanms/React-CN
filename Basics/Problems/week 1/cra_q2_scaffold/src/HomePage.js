// import the necessary components
import {Form} from "./Form.js"
export var name = "YourName";
export var email = "xyz@pqr.com";

export default function HomePage() {
  return (
    <div className="Homepage">
      <h1>HomePage</h1>
      <Form />
    </div>
  );
}
