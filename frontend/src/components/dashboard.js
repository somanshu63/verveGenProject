import { useState } from "react";
import userIcon from "../images/userIcon.png";

function Dashboard() {
  const [addUser, setAddUser] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "") {
      setPassword(12345);
    }
    setEmail("");
    setFile("");
    setImage("");
    setName("");
    setPassword("");
  };

  return (
    <div className="flex items-start justify-between">
      <div></div>
      <div className="sidebar w-1/5 fixed top-15 p-8 left-0 bottom-0 bg-blue-950">
        <div className=" mb-4 flex items-center justify-between">
          <div className="w-1/3">
            <img
              className="dashboardImage w-full"
              src={userIcon}
              alt="user icon"
            ></img>
          </div>
          <div className="w-1/2">
            <address className="text-lg mb-1">User</address>
            <address className="text-sm "> +9185629XXXXX </address>
          </div>
        </div>
        <hr></hr>
        <button
          onClick={() => {
            setAddUser(!addUser);
          }}
          className="mt-4 p-4 "
        >
          Add User{" "}
        </button>
      </div>
      <div className="p-24 w-4/5">
        {addUser ? (
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex items-start justify-between">
                <div className="w13">
                  <label className="tracking-widest">Add Image:</label>
                  <input
                    value={image}
                    className="input "
                    onChange={(e) => {
                      setImage(e.target.value);
                    }}
                    type="file"
                  ></input>
                </div>
                <div className="w13">
                  <label className="tracking-widest">Name:</label>

                  <input
                    value={name}
                    className="input "
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder="Enter Name"
                    type="text"
                  ></input>
                </div>
              </div>
              <div className="flex my-8 items-start justify-between">
                <div className="w13">
                  <label className="tracking-widest">Email:</label>
                  <input
                    value={email}
                    className="input "
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Enter Email"
                    type="email"
                  ></input>
                </div>
                <div className="w13">
                  <label className="tracking-widest">Password:</label>
                  <input
                    value={password}
                    className="input "
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="Enter Password"
                    type="password"
                  ></input>
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div className="w13">
                  <label className="tracking-widest">Add File</label>
                  <input
                    value={file}
                    className="input "
                    onChange={(e) => {
                      setFile(e.target.value);
                    }}
                    type="file"
                  ></input>
                </div>
                <button className="loginButton w13" type="submit">
                  Add User
                </button>
              </div>
            </form>
          </div>
        ) : (
          <table>
            <tr>
              <th>Sr. No.</th>
              <th className="tableName">Name</th>
              <th className="tableName">Contact No.</th>
              <th>Data</th>
            </tr>
            <tr>
              <td>1</td>
              <td>somasnhu</td>
              <td>7017792467</td>
              <td></td>
            </tr>
            <tr>
              <td>1</td>
              <td>somasnhu</td>
              <td>7017792467</td>
              <td></td>
            </tr>
            <tr>
              <td>1</td>
              <td>somasnhu</td>
              <td>7017792467</td>
              <td></td>
            </tr>
            <tr>
              <td>1</td>
              <td>somasnhu</td>
              <td>7017792467</td>
              <td></td>
            </tr>
          </table>
        )}
      </div>
    </div>
  );
}
export default Dashboard;
