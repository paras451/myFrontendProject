import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple static auth (backend ke bina)
    if (username === "admin" && password === "12345") {
      localStorage.setItem("adminAuth", "true");
      navigate("/admindashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-lg w-80"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Admin Login</h2>
        {error && <p className="text-red-500">{error}</p>}

        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded mt-3 "
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mt-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 mt-4 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
