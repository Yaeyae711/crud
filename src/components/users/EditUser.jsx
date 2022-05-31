
import { useParams } from 'react-router-dom'
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EditUser = () => {
 const {id}= useParams();
 const [user, setUser] = useState({
  name: "",
  email:"",
  username:""
 });

 const userLoad = async () => {
  const result = await axios.get(`http://localhost:3001/users/${id}`);
 setUser(result.data);
  
};
useEffect(() => {
  userLoad();
}, []);

const handleChange = (event) => {
  setUser({ ...user, [event.target.name]: event.target.value });
};

const handleData= async()=>{
  const modify = await axios.put(`http://localhost:3001/users/${id}`,user);
}



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
            value={user.name}
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
            value={user.email}
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
            value={user.username}
          />
        </div>
        <div className="col-12">
          <Link to="/">
            {" "}
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleData}
            >
              Update User
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EditUser