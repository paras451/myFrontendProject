import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

import api from "../axiosConfig";

import { ResponsiveContainer } from "recharts";

import { Link } from "react-router-dom";

export default function Dash() {
  const [data, setData] = useState([]);
  // const [sales, setSales] = useState([]);
  const [users, setUsers] = useState([]);
  // const [orders, setOrders] = useState([]);
  const [chartData, setChartData] = useState([]);

  const [pieData, setPieData] = useState([]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload; // full row from API

      return (
        <div
          style={{
            background: "#fff",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          }}
        >
          <p>
            <strong>Date:</strong> {data.createdAt}
          </p>
          <p>
            <strong>Message:</strong> {data.message}
          </p>
          <p>
            <strong>Name:</strong> {data.name}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
        </div>
      );
    }
    return null;
  };

  // ---- Backend se data ----
  useEffect(() => {
    api
    .get("/contact")
      .then((res) => res.json())
      .then((data) => {
        console.log("Messages API:", data);
        setUsers(data);
        // 🔥 Convert messages -> count per date
        const grouped = {};

        data.forEach((item) => {
          const dateObj = new Date(item.createdAt);
          const date = dateObj.toISOString().split("T")[0]; // ALWAYS yyyy-mm-dd

          if (!grouped[date]) grouped[date] = 0;
          grouped[date]++;
        });

        const formatted = Object.keys(grouped).map((date) => ({
          date,
          count: grouped[date],
        }));

        setChartData(formatted);
      })
      .catch((err) => console.log(err));
  }, []);

  const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#8B5CF6"];

  const actions = [
    { name: "🏠Home Page", path: "/admindashboard/home" },
    { name: "🛠️Services", path: "/admindashboard/services" },
    { name: "👥About Us", path: "/admindashboard/about-us" },
    { name: "🏭Industries", path: "/admindashboard/industries" },
    { name: "🧩Solutions", path: "/admindashboard/solutions" },
    { name: "✉️Contact", path: "/admindashboard/contact" },
    {
      name: "🛒Advance E-commerce",
      path: "/admindashboard/advanced-ecommerce",
    },
  ];
  //for messages show in loops
  const loopedMessages = [...users, ...users];

  useEffect(() => {
    const box = document.getElementById("scrollBox");
    if (!box) return;

    let scrollSpeed = 1; // jitna chaho speed badha lo
    let interval = setInterval(() => {
      box.scrollTop += scrollSpeed;

      // Jab bottom aa jaye → start over
      if (box.scrollTop >= box.scrollHeight - box.clientHeight) {
        box.scrollTop = 0;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow lg:grid lg:grid-cols-2 lg:gap-2 md:grid md:grid-cols-1 md:gap-2 ">
      <div className="bg-white p-6 rounded-xl shadow mt-10">
        <h2 className="text-lg font-semibold mb-4">Messages Analytics</h2>

        {chartData.length === 0 ? (
          <p>Loading pie chart...</p>
        ) : (
          <ResponsiveContainer width="100%" height={340}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="count"
                nameKey="date"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label
              >
                {chartData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-4">All Messages</h2>
        <div
          id="scrollBox"
          className="bg-white p-6 rounded-xl shadow max-h-100 overflow-y-auto "
        >
          {/* <h2 className="text-lg font-semibold mb-4">All Messages</h2> */}

          <div className="space-y-4">
            {loopedMessages.map((msg, i) => (
              <div
                key={i}
                className="border p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
              >
                <p>
                  <strong>Name:</strong> {msg.name}
                </p>
                <p>
                  <strong>Email:</strong> {msg.email}
                </p>
                <p>
                  <strong>Message:</strong> {msg.message}
                </p>
                <p className="text-xs text-gray-500">
                  {new Date(msg.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow mt-10">
        <h2 className="text-lg font-semibold mb-4">Messages Bar Chart</h2>

        {chartData.length === 0 ? (
          <p>Loading message chart...</p>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#6366F1" name="Per Day Messages" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Messages Overview</h2>
        {users.length === 0 ? (
          <p>Loading message chart...</p>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={users}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="createdAt" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="message"
                stroke="#6366F1"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md ">
        <h2 className="text-xl font-semibold mb-4">Quick Actions ⚡</h2>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {actions.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition shadow-sm text-center font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
