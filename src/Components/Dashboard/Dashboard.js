import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { RemindContext } from "../../RemindContext/RemindContext";
import { formatDate } from "../../Utils/ShowNotification";

const Dashboard = () => {
  // Sample data for demonstration

  const navigate = useNavigate();
  const {remindId} = useParams();

  const { getRemind, deleteRemind, reminders, upComingReminders } =
    useContext(RemindContext);

  useEffect(() => {
    getRemind();
  }, []);

  const handleEdit = (id) => {
    alert(`Edit item with id: ${id}`);
    navigate(`/update-reminder/${id}`)
  };

  const handleDelete = (id) => {
    alert(`Delete item with id: ${id}`);
    deleteRemind(id);
  };

  return (
    <div className="min-h-screen bg-lightgray p-6 flex flex-col">
      <h1 className="text-3xl font-semibold mb-6 text-navy">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
        <div className="bg-white shadow-md border-l-8 border-navy p-6  ">
          <h2 className="text-xl font-semibold mb-4 text-navy">
            Total Installations
          </h2>
          <p className="text-2xl text-black">{reminders?.length}</p>
        </div>

        <div className="bg-white shadow-md border-l-8 border-navy p-6">
          <h2 className="text-xl font-semibold mb-4 text-navy">
            Upcoming Services
          </h2>
          <p className="text-2xl text-black">{upComingReminders?.length}</p>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex justify-between">
          <span className="text-2xl font-semibold mb-4 text-navy">
            Installations
          </span>
          <Link to="/register-installation">
            <button
              type="button"
              className="text-white bg-navy hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2 me-2 mb-2 mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Add
            </button>
          </Link>
        </div>

        <div className="overflow-x-auto">
          {reminders.length === 0 ? (
            <p className="py-4 px-4 border bg-white text-black text-center rounded-lg">
              {" "}
              No Upcoming Service{" "}
            </p>
          ) : (
            <table className="min-w-full bg-white shadow-lg rounded-lg">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="py-2 px-4 border rounded-ss-lg min-w-180">
                    Customer Name
                  </th>
                  <th className="py-2 px-4 border min-w-180">AC Brand</th>
                  <th className="py-2 px-4 border min-w-180">
                    Installation Date
                  </th>
                  <th className="py-2 px-4 border min-w-180">
                    Next Service Date
                  </th>
                  <th className="py-2 px-4 border rounded-se-lg min-w-260">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {reminders.map((installation) => (
                  <tr
                    key={installation._id}
                    className="border-b odd:bg-white  even:bg-gray-100 "
                  >
                    <td className="py-2 px-4 border text-gray-600 text-center">
                      {installation.customerName}
                    </td>
                    <td className="py-2 px-4 border text-gray-600 text-center">
                      {installation.acBrand}
                    </td>
                    <td className="py-2 px-4 border text-gray-600 text-center">
                      {formatDate(installation.installationDate)}
                    </td>
                    <td className="py-2 px-4 border text-gray-600 text-center">
                      {formatDate(installation.nextServiceDate)}
                    </td>
                    <td className="py-2 px-4 border text-gray-600 text-center min-w-260">
                      <Link to="/installation-details">
                        <button className="bg-green-500 text-white py-1 px-4 rounded mr-2">
                          View
                        </button>
                      </Link>
                      <button
                        onClick={() => handleEdit(installation._id)}
                        className="bg-orange text-white py-1 px-4 rounded hover:shadow-md hover:shadow-cyan-500/50 mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(installation._id)}
                        className="bg-red-500 text-white py-1 px-4 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-navy">
          Upcoming Services
        </h2>
        <div className="overflow-x-auto">
          {upComingReminders?.length < 1 ? (
            <p className="py-4 px-4 border bg-white text-black text-center rounded-lg">
              No Upcoming Service
            </p>
          ) : (
            <table className="min-w-full bg-white shadow-md rounded-lg">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="py-2 px-4 border min-w-180 rounded-ss-lg">
                    Customer Name
                  </th>
                  <th className="py-2 px-4 border min-w-180">AC Brand</th>
                  <th className="py-2 px-4 border min-w-180">
                    Installation Date
                  </th>
                  <th className="py-2 px-4 border min-w-180">
                    Next Service Date
                  </th>
                  <th className="py-2 px-4 border rounded-se-lg min-w-260">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {upComingReminders.map((service, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4 border text-gray-600 text-center ">
                      {service.customerName}
                    </td>
                    <td className="py-2 px-4 border text-gray-600 text-center ">
                      {service.acBrand}
                    </td>
                    <td className="py-2 px-4 border text-gray-600 text-center ">
                      {formatDate(service.installationDate)}
                    </td>
                    <td className="py-2 px-4 border text-gray-600 text-center ">
                      {formatDate(service.nextServiceDate)}
                    </td>
                    <td className="py-2 px-4 border text-gray-600 text-center min-w-260">
                      <Link to="/installation-details">
                        <button className="bg-green-500 text-white py-1 px-4 rounded mr-2">
                          View
                        </button>
                      </Link>
                      <button
                        onClick={() => handleEdit(service._id)}
                        className="bg-orange text-white py-1 px-4 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(service._id)}
                        className="bg-red-500 text-white py-1 px-4 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
