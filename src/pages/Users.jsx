import React, { useEffect, useState } from "react";
import axios from "axios";
import api from "../axiosConfig";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api
    .get("/contact")
      .then((res) => res.json())
      .then((data) => {
        console.log("Api Data:", data);
        setUsers(data);
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

  //for delete message
  // const [refreshh, setRefreshh] = useState(false);
  const [data, setData] = useState([]);

  const deletesItem = (id) => {
    api
      .delete(`/contact/${id}`)
      .then(() => {
        setUsers((prev) => prev.filter((user) => user.id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mt-20 mb-20  sm:p-0 md:p-0">
      <h2 className="text-2xl font-bold mb-6">Users Data</h2>

      {users.length === 0 ? (
        <p className="text-gray-500 text-lg">No Data Found!</p>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-xl border border-gray-200">
          <table className="w-full text-left border-collapse bg-white rounded-xl">
            <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
              <tr>
                <th className="py-3 px-4">ID</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Message</th>
                <th className="py-3 px-4">Created Date</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((u, i) => (
                <tr
                  key={u.id}
                  className={`border-t ${
                    i % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition`}
                >
                  <td className="py-3 px-4">{u.id}</td>
                  <td className="py-3 px-4">{u.name}</td>
                  <td className="py-3 px-4">{u.email}</td>
                  <td className="py-3 px-4">{u.message}</td>
                  <td className="py-3 px-4">{u.createdAt}</td>
                  <button
                    className="bg-red-500 text-white px-3 py-1 mt-2 rounded-lg hover:text-black"
                    onClick={() => deletesItem(u.id)}
                  >
                    Delete
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Users;
