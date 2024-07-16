import React, { useContext, useEffect } from "react";
import { RemindContext } from "../../RemindContext/RemindContext";
import { formatDate } from "../../Utils/ShowNotification";
import { useParams } from "react-router-dom";

const ReminderDetails = () => {
  const {remindId} = useParams();
  const {getSingleRemind, getRemind, reminder, reminders} = useContext(RemindContext)

  useEffect(() => {
    getSingleRemind(remindId);
    getRemind()
  }, [remindId]);


  return (
    <div className="min-h-screen bg-lightgray p-6">
      <div className="max-w-full mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-navy text-center">
          AC Installation Details
        </h2>

        <div className="flex flex-wrap justify-center">
          {reminders.map((reminder) => (
            <div key={reminder._id}>
            <div className="bg-white shadow-lg rounded-lg p-6 m-4">
              <h2 className="text-xl font-semibold mb-2">
                {reminder.customerName}
              </h2>
              <p className="text-gray-700">
                <strong>AC Brand:</strong> {reminder.acBrand}
              </p>
              <p className="text-gray-700">
                <strong>Installation Date:</strong>{" "}
                {formatDate(reminder.installationDate)}
              </p>
              <p className="text-gray-700">
                <strong>Next Service Date:</strong>{" "}
                {formatDate(reminder.nextServiceDate)}
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  // onClick={() => onEdit(installation.id)}
                  className="bg-navy text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-navy-dark"
                >
                  Edit
                </button>
                <button
                  // onClick={() => onDelete(installation.id)}
                  className="bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
            </div>
           ))} 
        </div>
      </div>
    </div>
  );
};

export default ReminderDetails;
