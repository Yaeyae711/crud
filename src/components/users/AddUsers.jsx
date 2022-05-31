import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AddUsers = () => {
  const [state, setstate] = useState({
    name: "",
    email: "",
    username: "",
  });

  const handleChange = (event) => {
    setstate({ ...state, [event.target.name]: event.target.value });
  };

  const handledata = async (e) => {
    await axios.post("http://localhost:3001/users", state);

    setstate({
      name: "",
      email: "",
      username: "",
    });
  };

  return (
    <div>
      <div
        className="container"
        style={{ marginTop: "10vh", maxWidth: "500px" }}
      >
        <div class="input-group mb-3">
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="name"
            aria-label="name"
            aria-describedby="basic-addon2"
            onChange={handleChange}
          />
        </div>

        <div className="col-md-12">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            name="email"
            onChange={handleChange}
          />
        </div>

        <div class="input-group mb-3 mt-4">
          <input
            type="text"
            className="form-control"
            placeholder="username"
            aria-label="username"
            aria-describedby="basic-addon2"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <Link to="/">
            {" "}
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handledata}
            >
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddUsers;
