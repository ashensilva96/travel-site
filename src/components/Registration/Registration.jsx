import React, { useState } from "react";
import "../../assets/Styles/Common.css";
import axios from "axios";

export default function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const changeFirstnameHandler = (event) => {
    setFirstName(event.target.value);
  };

  const changeLastnameHandler = (event) => {
    setLastName(event.target.value);
  };

  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const changeMobileHandler = (event) => {
    setMobile(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      mobile: mobile,
    };

    axios
      .post("http://localhost:8080/api/v1/user/saveUser", data)
      .then((response) => {
        console.log("Success", response.data);
        setFirstName("");
        setLastName("");
        setEmail("");
        setMobile("");
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-8">
            <div className="bg-x">
              <p>The world of</p>
              <span>
                <span className="ven-p">ADVENTURE!</span>
              </span>
              <p>Vacation | Beaches | Waterfalls </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="box-reg">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <h4>Welcome to VentureTours</h4>
                  <div>
                    <label>First Name</label>
                    <input
                      type="text"
                      name="first_name"
                      onChange={changeFirstnameHandler}
                    />
                  </div>
                  <div>
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="First Name"
                      onChange={changeLastnameHandler}
                    />
                  </div>
                  <div>
                    <label>Email</label>
                    <input
                      type="email"
                      name="Email"
                      onChange={changeEmailHandler}
                    />
                  </div>
                  <div>
                    <label>Mobile</label>
                    <input
                      type="text"
                      name="Mobile"
                      onChange={changeMobileHandler}
                    />
                  </div>
                  <div className="button-div">
                    <button type="submit">Register</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
