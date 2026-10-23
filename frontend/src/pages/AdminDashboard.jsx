import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminDashboard() {
  const [data, setData] = useState([]);
  const api = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const loadData = async () => {
    try {
      const res = await axios.get(`${api}/api/appointments`);
      setData(res.data);
    } catch (err) {
      console.warn("Backend API not reachable");
    }
  };

  useEffect(() => { loadData(); }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="font-heading font-bold text-2xl mb-4">Clinic Staff Portal (Appointments)</h1>
      <div className="bg-white rounded-2xl border shadow-card overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-surface border-b p-3">
            <tr>
              <th className="p-3">Patient</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Service</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {data.length === 0 ? (
              <tr><td colSpan="5" className="p-6 text-center text-softgray">No records yet in MongoDB. Book an appointment to test!</td></tr>
            ) : (
              data.map((item) => (
                <tr key={item._id}>
                  <td className="p-3 font-semibold">{item.patientName}</td>
                  <td className="p-3">{item.phone}</td>
                  <td className="p-3">{item.service}</td>
                  <td className="p-3">{item.appointmentDate}</td>
                  <td className="p-3 font-bold text-tealPrimary">{item.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}