import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [fruits, setFruits] = useState([]);

  const token = localStorage.getItem("userToken")
  const navigate = useNavigate();
  useEffect(() => {
    fetch(import.meta.env.VITE_BACKENDURL + "/fruits",{
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setFruits(jsonRes));
  }, [token]);

  const handleDelete = async (e, id) => {
    e.preventDefault()
    console.log(localStorage.getItem("userToken"))
    fetch(process.env.BACKENDURL + `/fruits/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": token,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to delete fruit.");
        }
      })
      .then(() => {
        navigate("/");
      });
  };
  return (
    <div>
      <h1>Index Page</h1>

      <ul className="flex flex-col">
        {fruits &&
          fruits.map((item, index) => {
            return (
              <li className="flex">
                <Link className="mx-5" to={`/fruits/${item._id}`}>
                  {item.name}
                </Link>
                <form onSubmit={(e) => handleDelete(e, item._id)}>
                  <input type="submit" value="DELETE" />
                </form>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Home;
