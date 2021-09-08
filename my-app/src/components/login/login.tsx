import React, { ChangeEvent, FormEvent, useState } from "react";
import { User } from "./user";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const Login = () => {
  const history = useHistory();

  const initialState = {
    username: "",
    password: "",
  };

  const [user, setUser] = useState<User>(initialState);

  const handleInputChange = (e: InputChange) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user.username === "admin@isucorp.ca" && user.password === "admin") {
      localStorage.setItem("token", "login successfully");
      toast.success("Usted se ha logueado");
      history.push("/filmes");
    } else if (user.username === "" || user.password === "") {
      toast.error("Las credenciales no pueden ser vacias");
      setUser(initialState);
    } else {
      toast.error("Credenciales incorrectas");
      setUser(initialState);
    }
  };

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3 className="mb-3">Login</h3>

            <form onSubmit={handleSubmit}>
              <label className="form-label">Username</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="username"
                  placeholder="Introdusca su username"
                  className="form-control"
                  onChange={handleInputChange}
                  value={user.username}
                />
              </div>

              <label className="form-label">Password</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="password"
                  placeholder="Introdusca su password"
                  className="form-control"
                  onChange={handleInputChange}
                  value={user.password}
                />
              </div>

              <button className="btn btn-info">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
