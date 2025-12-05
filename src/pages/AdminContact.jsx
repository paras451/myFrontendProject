import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";
import api from "../axiosConfig";

function AdminContact() {
  const [data, setData] = useState([]);

  // Edit and Delete States and Handlers for Contact Table 1

  const [mains, setMains] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [editing, setEditing] = useState(null); // selected row

  const handleEdit = (main) => {
    setEditing(main); // modal me dikhega selected row
  };

  const updateData = () => {
    api
      .put(`/ContactT1/${editing.id}`, editing)
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
    api
      .delete(`/ContactT1/${id}`)
      .then(() => {
        setRefresh((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    api
      .get("/ContactT1")
      .then((res) => {
        console.log("MAINS API RESPONSE:", res.data);
        setMains(res.data);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  // Edit and Delete States and Handlers for Contact Table 2

  const [mainss, setMainss] = useState([]);
  const [refreshh, setRefreshh] = useState(false);
  const [editingg, setEditingg] = useState(null); // selected row

  const handleEdits = (mai) => {
    setEditingg(mai); // modal me dikhega selected row
  };

  const updatesData = () => {
    axios
      .put(`http://localhost:8082/ContactT2/${editingg.id}`, editingg)
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
      .delete(`http://localhost:8082/ContactT2/${id}`)
      .then(() => {
        setRefreshh((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8082/ContactT2")
      .then((res) => {
        console.log("MAINS API RESPONSE:", res.data);
        setMainss(res.data);
      })
      .catch((err) => console.log(err));
  }, [refreshh]);

  // Edit and Delete States and Handlers for Contact Table 3

  const [mainsss, setMainsss] = useState([]);
  const [refreshhh, setRefreshhh] = useState(false);
  const [editinggg, setEditinggg] = useState(null); // selected row

  const handlesEdits = (ma) => {
    setEditinggg(ma); // modal me dikhega selected row
  };

  const updatessData = () => {
    axios
      .put(`http://localhost:8082/ContactT3/${editinggg.id}`, editinggg)
      .then((res) => {
        setMainsss(
          mainsss.map((ma) => (ma.id === editinggg.id ? res.data : ma))
        );
        setEditinggg(null); // modal close
        setRefreshhh((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  const deletesItems = (id) => {
    axios
      .delete(`http://localhost:8082/ContactT3/${id}`)
      .then(() => {
        setRefreshhh((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8082/ContactT3")
      .then((res) => {
        console.log("MAINS API RESPONSE:", res.data);
        setMainsss(res.data);
      })
      .catch((err) => console.log(err));
  }, [refreshhh]);

  return (
    <div className="sm:p-0 md:p-0">
      {/* ======= CONTACT  TABLE 1 ======= */}
      <h2 className="text-2xl font-bold mb-4"> Contacts Info..</h2>
      <div className="overflow-auto shadow-lg rounded-lg">
        <table className="w-full border text-center bg-white">
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
      {/* for Contact Table 1 */}
      {editing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="bg-white p-4 rounded shadow-lg w-150  ">
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

      {/* ======= CONTACT  TABLE 2 ======= */}
      <h2 className="text-2xl font-bold mb-4 mt-8"> Contacts message Info..</h2>
      <div className="overflow-auto shadow-lg rounded-lg">
        <table className="w-full border text-center bg-white">
          <thead className="bg-gray-200">
            <tr>
              {/* <th className="border p-3">ID</th> */}
              <th className="border p-3">Title</th>
              <th className="border p-3"> Name</th>
              <th className="border p-3"> E-mail</th>
              <th className="border p-3"> Message</th>
              <th className="border p-3"> Button Text</th>
              <th className="border p-3"> Created Date</th>
              <th className="border p-3"> Actions</th>
            </tr>
          </thead>

          <tbody>
            {mainss.map((mai) => (
              <tr key={mai.id}>
                {/* <td className="border p-3">{mai.id}</td> */}
                <td className="border p-3">{mai.title}</td>
                <td className="border p-3">{mai.name}</td>
                <td className="border p-3">{mai.email}</td>
                <td className="border p-3">{mai.message}</td>
                <td className="border p-3">{mai.button_text}</td>
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
      {/* for Contact Table 2 */}
      {editingg && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="bg-white p-4 rounded shadow-lg w-200 h-[90vh] overflow-y-scroll  ">
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
            <h1 className="font-bold">Name</h1>
            <textarea
              value={editingg.name}
              onChange={(e) =>
                setEditingg({ ...editingg, name: e.target.value })
              }
              className="w-full border px-3 py-2 rounded mb-3"
            />
            <h1 className="font-bold">E-mail</h1>
            <textarea
              value={editingg.email}
              onChange={(e) =>
                setEditingg({ ...editingg, email: e.target.value })
              }
              className="w-full border px-3 py-2 rounded mb-3"
            />
            <h1 className="font-bold">Message</h1>
            <textarea
              value={editingg.message}
              onChange={(e) =>
                setEditingg({ ...editingg, message: e.target.value })
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

      {/* ======= CONTACT  TABLE 3 ======= */}
      <h2 className="text-2xl font-bold mb-4 mt-8"> Contacts Address Info..</h2>
      <div className="overflow-auto shadow-lg rounded-lg">
        <table className="w-full border text-center layout-fixed bg-white">
          <thead className="bg-gray-200">
            <tr>
              {/* <th className="border p-3">ID</th> */}
              <th className="border p-3">Title</th>
              <th className="border p-3"> Text 1</th>
              <th className="border p-3"> Text 2</th>
              <th className="border p-3"> Text 3</th>
              <th className="border p-3"> Text 4</th>
              <th className="border p-3"> Created Date</th>
              <th className="border p-3"> Actions</th>
            </tr>
          </thead>

          <tbody>
            {mainsss.map((ma) => (
              <tr key={ma.id}>
                {/* <td className="border p-3">{ma.id}</td> */}
                <td className="border p-3">{ma.title}</td>
                <td className="border p-3">{ma.text_1}</td>
                <td className="border p-3">{ma.text_2}</td>
                <td className="border p-3">{ma.text_3}</td>
                <td className="border p-3">{ma.text_4}</td>
                <td className="border p-3">{ma.createdAt}</td>
                <td className="p-2 border flex gap-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1"
                    onClick={() => handlesEdits(ma)}
                  >
                    Edit
                  </button>

                  <button
                    className="bg-red-500 text-white px-3 py-1"
                    onClick={() => deletesItems(ma.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* for Contact Table 3 */}
      {editinggg && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="bg-white p-4 rounded shadow-lg w-200 h-[90vh] overflow-y-scroll  ">
            <h2 className="text-xl font-semibold mb-4">Edit Record</h2>
            <h1 className="font-bold">Title</h1>
            <input
              type="text"
              value={editinggg.title}
              onChange={(e) =>
                setEditinggg({ ...editinggg, title: e.target.value })
              }
              className="w-full border px-3 py-2 rounded mb-3"
            />
            <h1 className="font-bold">Text 1</h1>
            <textarea
              value={editinggg.text_1}
              onChange={(e) =>
                setEditinggg({ ...editinggg, text_1: e.target.value })
              }
              className="w-full border px-3 py-2 rounded mb-3"
            />
            <h1 className="font-bold">Text 2</h1>
            <textarea
              value={editinggg.text_2}
              onChange={(e) =>
                setEditinggg({ ...editinggg, text_2: e.target.value })
              }
              className="w-full border px-3 py-2 rounded mb-3"
            />
            <h1 className="font-bold">Text 3</h1>
            <textarea
              value={editinggg.text_3}
              onChange={(e) =>
                setEditinggg({ ...editinggg, text_3: e.target.value })
              }
              className="w-full border px-3 py-2 rounded mb-3"
            />
            <h1 className="font-bold">Text 4</h1>
            <textarea
              value={editinggg.text_4}
              onChange={(e) =>
                setEditinggg({ ...editinggg, text_4: e.target.value })
              }
              className="w-full border px-3 py-2 rounded mb-3"
            />

            <div className="flex gap-3 mt-4">
              <button
                onClick={updatessData}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>

              <button
                onClick={() => setEditinggg(null)}
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

export default AdminContact;
