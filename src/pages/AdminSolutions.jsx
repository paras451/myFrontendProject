import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function AdminSolutions() {
  const [data, setData] = useState([]);

  // Edit and Delete States and Handlers for AboutUs Table 1

  const [mains, setMains] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [editing, setEditing] = useState(null); // selected row

  const handleEdit = (main) => {
    setEditing(main); // modal me dikhega selected row
  };

  const updateData = () => {
    axios
      .put(`http://localhost:8082/SolutionsTable1/${editing.id}`, editing)
      .then((res) => {
        setMains(
          mains.map((main) => (main.id === editing.id ? res.data : main))
        );
        setEditing(null); // modal close
        setRefresh((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  const deleteItem = (id) => {
    axios
      .delete(`http://localhost:8082/SolutionsTable1/${id}`)
      .then(() => {
        setRefresh((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8082/SolutionsTable1")
      .then((res) => {
        console.log("MAINS API RESPONSE:", res.data);
        setMains(res.data);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  // Edit and Delete States and Handlers for AboutUs Table 2

  const [mainss, setMainss] = useState([]);
  const [refreshh, setRefreshh] = useState(false);
  const [editingg, setEditingg] = useState(null); // selected row

  const handleEdits = (mai) => {
    setEditingg(mai); // modal me dikhega selected row
  };

  const updatesData = () => {
    axios
      .put(`http://localhost:8082/SolutionsTable2/${editingg.id}`, editingg)
      .then((res) => {
        setMainss(
          mainss.map((mai) => (mai.id === editingg.id ? res.data : mai))
        );
        setEditingg(null); // modal close
        setRefreshh((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  const deletesItem = (id) => {
    axios
      .delete(`http://localhost:8082/SolutionsTable2/${id}`)
      .then(() => {
        setRefreshh((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8082/SolutionsTable2")
      .then((res) => {
        console.log("MAINS API RESPONSE:", res.data);
        setMainss(res.data);
      })
      .catch((err) => console.log(err));
  }, [refreshh]);

  return (
    <div className="sm:p-0 md:p-0">
      {/* ======= SOLUTIONS TABLE 1 ======= */}
      <h2 className="text-2xl font-bold mb-4"> Solutions Info</h2>
      <div className="overflow-auto shadow-lg rounded-lg">
        <table className="w-full border text-left bg-white">
          <thead className="bg-gray-200">
            <tr>
              {/* <th className="border p-3">ID</th> */}
              <th className="border p-3">Title</th>
              <th className="border p-3"> Description</th>
              <th className="border p-3"> Created Date</th>
              <th className="border p-3"> Actions</th>
            </tr>
          </thead>

          <tbody>
            {mains.map((main) => (
              <tr key={main.id}>
                {/* <td className="border p-3">{main.id}</td> */}
                <td className="border p-3">{main.title}</td>
                <td className="border p-3">{main.description}</td>
                <td className="border p-3">{main.createdAt}</td>
                <td className="p-2 border flex gap-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1"
                    onClick={() => handleEdit(main)}
                  >
                    Edit
                  </button>

                  <button
                    className="bg-red-500 text-white px-3 py-1"
                    onClick={() => deleteItem(main.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* for Solutions Table 1 */}
      {editing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="bg-white p-4 rounded shadow-lg w-200   ">
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
            <h1 className="font-bold">Descriptions</h1>
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

      {/* ======= SOLUTIONS TABLE 2 ======= */}
      <h2 className="text-2xl font-bold mb-4 mt-8"> Solutions Divs Info</h2>
      <div className="overflow-auto shadow-lg rounded-lg ">
        <table className="w-full border text-left bg-white">
          <thead className="bg-gray-200">
            <tr>
              {/* <th className="border p-3">ID</th> */}
              <th className="border p-3">Title</th>
              <th className="border p-3"> Description</th>
              <th className="border p-3"> Icon</th>
              <th className="border p-3"> Created Date</th>
              <th className="border p-3"> Actions</th>
            </tr>
          </thead>

          <tbody>
            {mainss.map((mai) => (
              <tr key={mai.id}>
                {/* <td className="border p-3">{mai.id}</td> */}
                <td className="border p-3">{mai.title}</td>
                <td className="border p-3">{mai.description}</td>
                <td className="border p-3">{mai.icon}</td>
                <td className="border p-3">{mai.createdAt}</td>
                <td className="p-2 border flex gap-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1"
                    onClick={() => handleEdits(mai)}
                  >
                    Edit
                  </button>

                  <button
                    className="bg-red-500 text-white px-3 py-1"
                    onClick={() => deletesItem(mai.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* for Solutions Table 2 */}
      {editingg && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="bg-white p-4 rounded shadow-lg w-150   ">
            <h2 className="text-xl font-semibold mb-4">Edit Record</h2>
            <h1 className="font-bold">Title</h1>
            <input
              type="text"
              value={editingg.title}
              onChange={(e) =>
                setEditingg({ ...editingg, title: e.target.value })
              }
              className="w-full border px-3 py-2 rounded mb-3"
            />
            <h1 className="font-bold">Description</h1>
            <textarea
              value={editingg.description}
              onChange={(e) =>
                setEditingg({ ...editingg, description: e.target.value })
              }
              className="w-full border px-3 py-2 rounded mb-3"
            />

            <h1 className="font-bold">Icon</h1>
            <textarea
              value={editingg.icon}
              onChange={(e) =>
                setEditingg({ ...editingg, icon: e.target.value })
              }
              className="w-full border px-3 py-2 rounded mb-3"
            />

            <div className="flex gap-3 mt-4">
              <button
                onClick={updatesData}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>

              <button
                onClick={() => setEditingg(null)}
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
}

export default AdminSolutions;
