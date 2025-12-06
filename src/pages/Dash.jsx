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

import api from "../axiosConfig"; // Assuming this is correct

import { ResponsiveContainer } from "recharts";

import { Link } from "react-router-dom";

export default function Dash() {
  const [users, setUsers] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [loopedMessages, setLoopedMessages] = useState([]);

  // 🛑 Original CustomTooltip is incompatible with chartData (counts)
  // Let's keep it unused for now, or use it for a more detailed view if needed.

  // ✅ New Tooltip for Bar and Line Charts (shows date and count)
  const ChartTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const displayDate = label || payload[0].name; // जो भी उपलब्ध हो, उसका उपयोग करें
    const displayValue = payload[0].value;
    
    // अगर PieChart में nameKey सेट है, तो name में date आएगा 
    const isPieChart = !label && payload[0].name;
      return (
        <div
          style={{
            background: "#333",
            color: "#fff",
            padding: "8px",
            borderRadius: "4px",
            boxShadow: "0 0 5px rgba(0,0,0,0.5)",
          }}
        >
          <p className="text-sm">
            <strong>Date:</strong> {displayDate}
          </p>
          <p className="text-lg font-bold">
            {`Messages: ${displayValue}`}
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
      .then((res) => {
        console.log("messages", res.data);
        setUsers(res.data);
        // Live effect ke liye data ko loop kiya gaya hai
        setLoopedMessages([...res.data, ...res.data]); 
        const data = res.data;
        
        // 🔥 Convert messages -> count per date
        const grouped = {};

        data.forEach((item) => {
          // Direct split se DATE 100% accurate
          const date = item.createdAt.split(" ")[0];

          if (!grouped[date]) grouped[date] = 0;
          grouped[date]++;
        });

        // Chart ke liye required format: [{ date: "YYYY-MM-DD", count: 5 }]
        const formatted = Object.keys(grouped).map((date) => ({
          date,
          count: grouped[date],
        }));

        console.log("FINAL CHART DATA:", formatted);
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
  
  //for messages show in loops (Auto-scroll effect)
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
      
      {/* 1. Pie Chart: Messages Analytics */}
      <div className="bg-white p-6 rounded-xl shadow mt-10">
        <h2 className="text-lg font-semibold mb-4">Messages Analytics (Per Day)</h2>
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
              <Tooltip content={<ChartTooltip />} /> 
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
      
      {/* 2. All Messages (Live Scroll) */}
      <div>
        <h2 className="text-lg font-semibold mb-4">All Messages (Live Feed)</h2>
        <div
          id="scrollBox"
          className="bg-white p-6 rounded-xl shadow max-h-96 overflow-y-auto" // Increased max-h for better view
        >
          <div className="space-y-4">
            {/* 🛑 FIX: JSX must be returned using ( ) or explicit return {} */}
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
                  {/* Using createdAt as per API response */}
                  {new Date(msg.createdAt).toLocaleString()} 
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Bar Chart: Per Day Messages */}
      <div className="bg-white p-6 rounded-xl shadow mt-10">
        <h2 className="text-lg font-semibold mb-4">Messages Bar Chart (Per Day)</h2>
        {chartData.length === 0 ? (
          <p>Loading message chart...</p>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip content={<ChartTooltip />} /> {/* ⬅️ Updated Tooltip */}
              <Legend />
              <Bar dataKey="count" fill="#6366F1" name="Per Day Messages" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* 4. Line Chart: Messages Overview (Per Day Trend) */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Messages Overview (Daily Trend)</h2>
        {chartData.length === 0 ? (
          <p>Loading message chart...</p>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              {/* 🛑 FIX: Tooltip should use ChartTooltip, not CustomTooltip */}
              <Tooltip content={<ChartTooltip />} /> 
              <Line
                type="monotone"
                dataKey="count" // ⬅️ FIX: "message" से "count" में बदला गया
                stroke="#6366F1"
                strokeWidth={3}
                name="Daily Messages"
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* 5. Quick Actions */}
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