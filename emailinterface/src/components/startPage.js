import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "./useForm";

const StartPage = (props) => {
  const [values, handleChange] = useForm({
    email: "max_mustermann@example.com",
    name: "max_mustermann",
  });

  const updateProp = () => {
    let email = values.email;
    let name = values.name;

    props.updatedData(email, name);
  };

  return (
    <div className="StartPage">
      <h1>Startpage</h1>
      <p>Welcome to our study: You will have to do this and that</p>
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        style={{ width: 300 }}
      ></input>
      <input name="name" value={values.name} onChange={handleChange}></input>
      <Link to="/EmailClient">
        <button onClick={updateProp}>Start Userstudy</button>
      </Link>
    </div>
  );
};

export default StartPage;
