import React from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../core";
import "bootstrap/dist/css/bootstrap.min.css";

export const LoginPage: React.FC = () => {
  const history = useHistory();
  const { setUserInfo } = React.useContext(AuthContext);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Just a mock / dummy password check
    if (username === "admin@isucorp.ca" && password === "admin") {
      setUserInfo(username); // That's the important part
      history.push("/list");
    } else {
      alert("User / password not valid, psst... admin@isucorp.ca / admin");
    }
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card">
            <div className="card-header">
              <h3 className="mb-3">Login</h3>
            </div>
            <div className="card-body">
              <div className="log-form">
                <form onSubmit={handleNavigation}>
                  <label className="form-label">usrname</label>
                  <div className="form-group mb-3">
                    <input
                      placeholder="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      autoFocus
                    />
                  </div>
                  <label className="form-label">password</label>
                  <div className="form-group mb-3">
                    <input
                      placeholder="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn btn-info">
                    Login
                  </button>
                </form>
              </div>
            </div>
            <div className="card-footer">
              <h4 className="mb-3">user: admin@isucorp.ca</h4>
              <h4 className="mb-3">pass: admin</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
