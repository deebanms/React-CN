import { Component } from "react";

class Person extends Component {
  // Define appropriate lifecycle method to show alert here
  constructor(props) {
    super();
  }
  componentWillUnmount() {
    // Show alert with the person's email before the component is unmounted
    alert(`Person with email ${this.props.person.email} has been removed.`);
  }

  render() {
    const { img, email, id } = this.props.person;
    const { removePerson } = this.props;
    return (
      <div className="person">
        <b onClick={() => removePerson(id)}>X</b>
        <img alt={email} src={img} />
        <p>{email}</p>
      </div>
    );
  }
}

export default Person;
