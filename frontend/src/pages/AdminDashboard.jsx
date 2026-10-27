import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RefreshCw, Trash2, CheckCircle2 } from 'lucide-react';

export default function AdminDashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const api = import.meta.env.VITE_API_URL || '';

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${api}/api/appointments`);
      setData(res.data);
    } catch (err) {
      console.warn("Backend API not reachable:", err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      await axios.patch(`${api}/api/appointments/${id}/status`, { status: newStatus });
      setData(prev => prev.map(item => item._id === id ? { ...item, status: newStatus } : item));
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  const deleteAppointment = async (id) => {
    try {
      await axios.delete(`${api}/api/appointments/${id}`);
      setData(prev => prev.filter(item => item._id !== id));
    } catch (err) {
      console.error("Failed to delete appointment:", err);
    }
  };

  useEffect(() => { loadData(); }, []);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-emerald-100 text-emerald-800';
      case 'Completed':
        return 'bg-blue-100 text-blue-800';
      case 'Cancelled':
        return 'bg-rose-100 text-rose-800';
      default:
        return 'bg-amber-100 text-amber-800';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="font-heading font-bold text-2xl text-charcoal">Clinic Staff Portal</h1>
          <p className="text-xs text-softgray mt-1">Manage patient appointment records and consultation requests</p>
        </div>
        <button
          onClick={loadData}
          disabled={loading}
          className="inline-flex items-center gap-2 bg-surface hover:bg-gray-100 border px-3.5 py-2 rounded-xl text-xs font-semibold text-charcoal transition-colors"
        >
          <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
          <span>Refresh</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl border shadow-card overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-surface border-b p-3">
            <tr>
              <th className="p-3">Patient</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Service</th>
              <th className="p-3">Date & Slot</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {data.length === 0 ? (
              <tr><td colSpan="6" className="p-8 text-center text-softgray">No appointments recorded yet.</td></tr>
            ) : (
              data.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50/50">
                  <td className="p-3">
                    <div className="font-semibold text-charcoal">{item.patientName}</div>
                    {item.notes && <div className="text-[11px] text-softgray italic mt-0.5">{item.notes}</div>}
                  </td>
                  <td className="p-3 text-softgray">
                    <a href={`tel:${item.phone}`} className="hover:text-tealPrimary">{item.phone}</a>
                  </td>
                  <td className="p-3 font-medium text-charcoal">{item.service}</td>
                  <td className="p-3 text-softgray">
                    <div>{item.appointmentDate}</div>
                    <div className="text-[10px] text-gray-400">{item.timeSlot}</div>
                  </td>
                  <td className="p-3">
                    <select
                      value={item.status || 'Pending'}
                      onChange={(e) => updateStatus(item._id, e.target.value)}
                      className={`text-[11px] font-semibold px-2 py-1 rounded-md border-0 cursor-pointer ${getStatusBadge(item.status)}`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => deleteAppointment(item._id)}
                      className="text-gray-400 hover:text-rose-600 p-1.5 rounded-lg transition-colors"
                      title="Delete appointment"
                    >
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}