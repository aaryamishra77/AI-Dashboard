import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Mon', users: 100 },
  { name: 'Tue', users: 300 },
  { name: 'Wed', users: 200 },
  { name: 'Thu', users: 278 },
  { name: 'Fri', users: 189 },
  { name: 'Sat', users: 239 },
  { name: 'Sun', users: 349 },
];

function AnalyticsChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow w-full">
      <h2 className="text-lg font-semibold mb-4">User Traffic This Week</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="users" stroke="#4f46e5" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AnalyticsChart;
