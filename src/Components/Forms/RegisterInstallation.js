import React, { useContext, useState } from "react";
import { RemindContext } from "../../RemindContext/RemindContext";
import { useNavigate } from "react-router-dom";


function RegisterInstallation() {

    const {setRemind} = useContext(RemindContext); 
    const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    // Customer Information
    customerName: "",
    acBrand: "",
    installationDate: "",
    nextServiceDate: "",
  });

  const {
    // Customer Information
    customerName,
    acBrand,
    installationDate,
    nextServiceDate,
  } = formdata;

  const onChangeInput = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRemind(formdata, navigate)
    // Clear form after submission
    setFormdata({
      // Customer Information
      customerName: "",
      acBrand: "",
      installationDate: "",
      nextServiceDate: "",
    });
  };

  return (
    <div className="min-h-screen  p-6">
      <h2 className="text-center text-4xl mb-4 font-bold text-navy">Registration Form</h2>
      <hr className="mb-5"/>
      <form className="bg-white rounded-lg p-8 max-w-7xl mx-auto  " onSubmit={handleSubmit}>
        {/* Customer Information */}
        {/* <h2 className="text-2xl font-semibold mb-2 text-navy">Customer Information</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="mb-4">
            <label className="block text-navy text-sm font-bold mb-2" htmlFor="customerName">Customer Name</label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={customerName}
              onChange={onChangeInput}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-navy text-sm font-bold mb-2" htmlFor="acBrand">Brand</label>
            <input
              type="text"
              id="acBrand"
              name="acBrand"
              value={acBrand}
              onChange={onChangeInput}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-navy text-sm font-bold mb-2" htmlFor="installationDate">Installation Date</label>
            <input
              type="date"
              id="installationDate"
              name="installationDate"
              value={installationDate}
              onChange={onChangeInput}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-navy text-sm font-bold mb-2" htmlFor="nextServiceDate">Next Service Date</label>
            <input
              type="datetime-local"
              id="nextServiceDate"
              name="nextServiceDate"
              value={nextServiceDate}
              onChange={onChangeInput}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

        </div>
                {/* Submit Button */}
                <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterInstallation;
