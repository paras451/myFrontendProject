import { useState } from "react";
import axios from "axios";
import api from "../axiosConfig";

function AddUser() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    avatar: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/adduser", form);
      alert("User created successfully!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 space-y-4 max-w-md mx-auto mt-30 mb-40 border"
    >
      <input
        name="name"
        placeholder="Name"
        className="border p-2 w-full"
        onChange={handleChange}
        required
      />

      <input
        name="email"
        placeholder="Email"
        className="border p-2 w-full"
        onChange={handleChange}
        required
      />

      <input
        name="avatar"
        placeholder="Avatar URL"
        className="border p-2 w-full"
        onChange={handleChange}
        required
      />

      <input
        name="password"
        placeholder="Password"
        type="password"
        className="border p-2 w-full"
        onChange={handleChange}
        required
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-900">
        Add User
      </button>
    </form>
  );
}

export default AddUser;
