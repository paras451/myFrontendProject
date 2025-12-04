import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminHome = () => {
  const [data, setData] = useState([]);

  const [refresh, setRefresh] = useState(false);

  const [editing, setEditing] = useState(null); // selected row

  const handleEdit = (item) => {
    setEditing(item); // modal me dikhega selected row
  };

  const updateData = () => {
    axios
      .put(`http://localhost:8082/home/${editing.id}`, editing)
      .then((res) => {
        setData(data.map((item) => (item.id === editing.id ? res.data : item)));
        setEditing(null); // modal close
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8082/home")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteItem = (id) => {
    axios
      .delete(`http://localhost:8082/home/${id}`)
      .then(() => {
        setRefresh((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Home Page Data</h2>

      <div className="overflow-auto shadow-lg rounded-lg">
        <table className="w-full bg-white">
          <thead className="bg-gray-200">
            <tr>
              {/* <th className="p-3 text-left">ID</th> */}
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-left">Created Date</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {
              /* {data.length === 0 ? (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">
                  No data found
                </td>
              </tr>
            ) : ( */
              data.map((item) => (
                <tr key={item.id} className="border-t">
                  {/* <td className="p-3">{item.id}</td> */}
                  <td className="p-3">{item.title}</td>
                  <td className="p-3">{item.description}</td>
                  <td className="p-3">{item.createdAt}</td>
                  <td className="p-2 border flex gap-2">
                    <button
                      className="bg-blue-500 text-white px-3 py-1"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button>

                    <button
                      className="bg-red-500 text-white px-3 py-1"
                      onClick={() => deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      {editing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Edit Record</h2>
            <h1 className="font-bold">Title</h1>
            <input
              type="text"
              value={editing.title}
              onChange={(e) =>
                setEditing({ ...editing, title: e.target.value })
              }
              className="w-full border px-3 py-2 rounded mb-3"
            />
            <h1 className="font-bold">Description</h1>
            <textarea
              value={editing.description}
              onChange={(e) =>
                setEditing({ ...editing, description: e.target.value })
              }
              className="w-full border px-3 py-2 rounded mb-3"
            />

            <div className="flex gap-3 mt-4">
              <button
                onClick={updateData}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>

              <button
                onClick={() => setEditing(null)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHome;
