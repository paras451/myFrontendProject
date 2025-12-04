import { useEffect, useState } from "react";
import axios from "axios";

function AdminService() {
  const [data, setData] = useState([]);
  const [mains, setMains] = useState([]);
  const [items, setItems] = useState([]);

  // Edit and Delete States and Handlers for MAIN SERVICE

  const [refresh, setRefresh] = useState(false);
  const [editing, setEditing] = useState(null); // selected row

  const handleEdit = (main) => {
    setEditing(main); // modal me dikhega selected row
  };

  const updateData = () => {
    axios
      .put(`http://localhost:8082/service/${editing.id}`, editing)
      .then((res) => {
        setData(data.map((main) => (main.id === editing.id ? res.data : main)));
        setEditing(null); // modal close
        setRefresh((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  const deleteItem = (id) => {
    axios
      .delete(`http://localhost:8082/service/${id}`)
      .then(() => {
        setRefresh((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  // Edit and Delete States and Handlers for SERVICE ITEMS
  const [refreshh, setRefreshh] = useState(false);
  const [editingg, setEditingg] = useState(null); // selected row

  const handleEdits = (item) => {
    setEditingg(item); // modal me dikhega selected row
  };

  const updatesData = () => {
    axios
      .put(`http://localhost:8082/services/${editingg.id}`, editingg)
      .then((res) => {
        setItems(
          data.map((item) => (item.id === editingg.id ? res.data : item))
        );
        setEditingg(null); // modal close
        setRefreshh((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  const deletesItem = (id) => {
    axios
      .delete(`http://localhost:8082/services/${id}`)
      .then(() => {
        setRefreshh((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8082/services")
      .then((res) => {
        console.log("ITEMS API RESPONSE:", res.data);
        const sorted = res.data.sort((a, b) => a.position - b.position);
        setItems(sorted);
      })
      .catch((err) => console.log(err));
  }, [refreshh]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/service")
      .then((res) => {
        console.log("MAINS API RESPONSE:", res.data);
        setMains(res.data);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  return (
    <div className=" sm:p-0 md:p-0 ">
      {/* ======= MAIN SERVICE TABLE ======= */}
      <h2 className="text-2xl font-bold mb-4"> Service Info</h2>
      <div className="rounded-lg shadow-lg overflow-auto">
        <table className="w-full border text-center bg-white ">
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
                <td className="border p-3">{main.mainTitle}</td>
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
                  {/* <td className="border p-3">{item.id}</td> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* ======= SERVICE ITEMS TABLE ======= */}
      <h2 className="text-2xl font-bold mt-10 mb-4">Service Items </h2>
      <div className="rounded-lg shadow-lg overflow-auto">
        <table className="w-full border text-center bg-white">
          <thead className="bg-gray-200">
            <tr>
              {/* <th className="border p-3">ID</th> */}
              <th className="border p-3">Position</th>
              <th className="border p-3">Title</th>
              <th className="border p-3">Description</th>
              <th className="border p-3">Created Date</th>
              <th className="border p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {items?.map((item) => (
              <tr key={item.id}>
                <td className="border p-3">{item.position}</td>
                <td className="border p-3">{item.mainTitle}</td>
                <td className="border p-3">{item.description}</td>
                <td className="border p-3">{item.createdAt}</td>
                <td className="p-2 border flex gap-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1"
                    onClick={() => handleEdits(item)}
                  >
                    Edit
                  </button>

                  <button
                    className="bg-red-500 text-white px-3 py-1"
                    onClick={() => deletesItem(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
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
              value={editing.mainTitle}
              onChange={(e) =>
                setEditing({ ...editing, mainTitle: e.target.value })
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
      {/* //for service items */}
      {editingg && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Edit Record</h2>
            <h1 className="font-bold">Title</h1>
            <input
              type="text"
              value={editingg.mainTitle}
              onChange={(e) =>
                setEditingg({ ...editingg, mainTitle: e.target.value })
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

export default AdminService;
