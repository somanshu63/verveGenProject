import { useState } from "react";
import userIcon from "../images/userIcon.png";

function Dashboard(props) {
  const [addUser, setAddUser] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");
  const [error, setError] = useState("");
  const formData = new FormData();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "") {
      setPassword("12345");
    }

    formData.append("file", file);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", image);

    addUserData();

    setEmail("");
    setFile("");
    setImage("");
    setName("");
    setPassword("");
  };
  function addUserData() {
    fetch(`https://vervegenproject.onrender.com/users/`, {
      method: "POST",
      headers: {
        "content-Type": "multipart/form-data",
      },
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then(({ errors }) => {
            return Promise.reject(errors);
          });
        }
        return res.json();
      })
      .then((user) => {
        alert("added user succesfully");
      })
      .catch((errors) => {
        setError(errors);
      });
  }
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
          <div className="w-3/5">
            <address className="text-lg mb-1 tracking-widest">
              {props?.user?.user?.name || "user"}
              {props?.user?.user?.isAdmin ? "(admin)" : ""}
            </address>
            <address className="text-sm tracking-widest">
              {" "}
              {props?.user?.user?.email || "xyz@gmail.com"}{" "}
            </address>
          </div>
        </div>
        <hr></hr>
        {props?.user?.user?.isAdmin ? (
          <button
            onClick={() => {
              setAddUser(!addUser);
            }}
            className="mt-4 p-4 tracking-widest"
          >
            Add User{" "}
          </button>
        ) : (
          ""
        )}
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
              {error ? (
                <p className="text-base tracking-widest text-red-500 pt-4">
                  {error}
                </p>
              ) : (
                ""
              )}
              <div className="flex items-end justify-between">
                <div className="w13">
                  <label className="tracking-widest">Add File</label>
                  <input
                    className="input "
                    onChange={(e) => {
                      setFile(e.target.files[0]);
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
            <tbody>
              {props?.user?.excelData?.Sheet1?.map((data, i) => {
                return i === 1 ? (
                  <tr>
                    <th>{data?.A}</th>
                    <th>{data?.B}</th>
                    <th>{data?.C}</th>
                    <th>{data?.D}</th>
                  </tr>
                ) : (
                  <tr>
                    <td>{data?.A}</td>
                    <td>{data?.B}</td>
                    <td>{data?.C}</td>
                    <td>{data?.D}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
export default Dashboard;
