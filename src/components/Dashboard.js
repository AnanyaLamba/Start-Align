const Dashboard = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold">Total Tasks</h3>
        <p className="text-2xl">10</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold">Completed Tasks</h3>
        <p className="text-2xl">3</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold">In Progress</h3>
        <p className="text-2xl">4</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold">To Do</h3>
        <p className="text-2xl">3</p>
      </div>
    </div>
  );
};

export default Dashboard;
