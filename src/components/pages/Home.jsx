import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export const Home = () => {
  const [users, setUsers] = useState([]);

  const initialLoad = async () => {
    const result = await axios.get("http://localhost:3001/users");
    
    
    setUsers(result.data);
  };

  const deleteUser=async (id)=>{
  console.log(id);
  const removed = await axios.delete(`http://localhost:3001/users/${id}`);
  initialLoad();
  }

  useEffect(() => {
    initialLoad();
  }, []);
  return (
    <div>
      <table
        class="table table-striped"
        style={{ marginTop: "10vh" }}
      >
        <thead>
          <tr className="bg-dark text-white">
            <th scope="col">id</th>
            <th scope="col">Fullname</th>
            <th scope="col">email</th>
            <th scope="col">username</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          
          {users.map((user,index)=>(
                <tr>
                <th scope="row">{index+1}</th>
    
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>
                {/* <Link to="/edit/user" type="button" class="btn btn-primary m-2"><i class="fa-solid fa-eye"></i></Link > */}
                <Link to={"/edit/user/"+ user.id} type="button" class="btn btn-primary m-2"><i class="fa-regular fa-pen-to-square"></i></Link >
                <button type="button" class="btn btn-danger  m-2"><i class="fa-regular fa-trash-can" onClick={()=>deleteUser(user.id)}></i></button>
                </td>
              </tr>
          ))}
         
        </tbody>
      </table>
    </div>
  );
};
