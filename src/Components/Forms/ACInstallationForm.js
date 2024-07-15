import React, { useState } from 'react';

const ACInstallationForm = ({ onSubmit }) => {
  const [formdata, setFormdata] = useState({
    // Customer Information
    customerName: "",
    customerAddress: "",
    customerContactNumber: "",
    customerEmailAddress: "",

    // AC Unit Information
    acBrand: "",
    acModelNumber: "",
    acSerialNumber: "",
    acType: "",
    acCapacity: "",

    // Installation Details
    installationDate: "",
    installerName: "",
    installerContactInfo: "",

    // Service Information
    warrantyPeriod: "",
    firstServiceDueDate: "",
    nextServiceDate: "",
    serviceHistory: "",
    serviceNotes: "",

    // Additional Information
    purchaseDate: "",
    invoiceNumber: "",
  });

  const {
    // Customer Information
    customerName,
    customerAddress,
    customerContactNumber,
    customerEmailAddress,

    // AC Unit Information
    acBrand,
    acModelNumber,
    acSerialNumber,
    acType,
    acCapacity,

    // Installation Details
    installationDate,
    installerName,
    installerContactInfo,


    // Service Information
    warrantyPeriod,
    firstServiceDueDate,
    nextServiceDate,
    serviceHistory,
    serviceNotes,

    // Additional Information
    purchaseDate,
    invoiceNumber,
  } = formdata;

  const onChangeInput = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formdata);
    // Clear form after submission
    setFormdata({
      // Customer Information
      customerName: "",
      customerAddress: "",
      customerContactNumber: "",
      customerEmailAddress: "",

      // AC Unit Information
      acBrand: "",
      acModelNumber: "",
      acSerialNumber: "",
      acType: "",
      acCapacity: "",

      // Installation Details
      installationDate: "",
      installerName: "",
      installerContactInfo: "",

      // Service Information
      warrantyPeriod: "",
      firstServiceDueDate: "",
      nextServiceDate: "",
      serviceHistory: "",
      serviceNotes: "",

      // Additional Information
      purchaseDate: "",
      invoiceNumber: "",
      maintenanceContractDetails: "",
      remarks: "",
    });
  };

  return (
    <div className="min-h-screen  p-6">
      <h2 className="text-center text-4xl mb-4 font-bold text-navy">Registration Form</h2>
      <hr className="mb-5"/>
      <form className="bg-white rounded-lg p-8 max-w-7xl mx-auto  " onSubmit={handleSubmit}>
        {/* Customer Information */}
        <h2 className="text-2xl font-semibold mb-2 text-navy">Customer Information</h2>
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
            <label className="block text-navy text-sm font-bold mb-2" htmlFor="customerAddress">Customer Address</label>
            <input
              type="text"
              id="customerAddress"
              name="customerAddress"
              value={customerAddress}
              onChange={onChangeInput}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-navy text-sm font-bold mb-2" htmlFor="customerContactNumber">Contact Number</label>
            <input
              type="text"
              id="customerContactNumber"
              name="customerContactNumber"
              value={customerContactNumber}
              onChange={onChangeInput}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-navy text-sm font-bold mb-2" htmlFor="customerEmailAddress">Email Address</label>
            <input
              type="email"
              id="customerEmailAddress"
              name="customerEmailAddress"
              value={customerEmailAddress}
              onChange={onChangeInput}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>

        {/* AC Unit Information */}
        <h2 className="text-2xl font-semibold mb-4 text-navy">AC Unit Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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
            <label className="block text-navy text-sm font-bold mb-2" htmlFor="acModelNumber">Model Number</label>
            <input
              type="text"
              id="acModelNumber"
              name="acModelNumber"
              value={acModelNumber}
              onChange={onChangeInput}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-navy text-sm font-bold mb-2" htmlFor="acSerialNumber">Serial Number</label>
            <input
              type="text"
              id="acSerialNumber"
              name="acSerialNumber"
              value={acSerialNumber}
              onChange={onChangeInput}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-navy text-sm font-bold mb-2" htmlFor="acType">Type</label>
            <input
              type="text"
              id="acType"
              name="acType"
              value={acType}
              onChange={onChangeInput}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-navy text-sm font-bold mb-2" htmlFor="acCapacity">Capacity</label>
            <input
              type="text"
              id="acCapacity"
              name="acCapacity"
              value={acCapacity}
              onChange={onChangeInput}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>

        {/* Installation Details */}
        <h2 className="text-2xl font-semibold mb-4 text-navy">Installation Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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
            <label className="block text-navy text-sm font-bold mb-2" htmlFor="installerName">Installer Name</label>
            <input
              type="text"
              id="installerName"
              name="installerName"
              value={installerName}
              onChange={onChangeInput}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-navy text-sm font-bold mb-2" htmlFor="installerContactInfo">Installer Contact Information</label>
            <input
              type="text"
              id="installerContactInfo"
              name="installerContactInfo"
              value={installerContactInfo}
              onChange={onChangeInput}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>

        {/* Service Information */}
        <h2 className="text-2xl font-semibold mb-4 text-navy">Service Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="mb-4">
            <label className="block text-navy text-sm font-bold mb-2" htmlFor="warrantyPeriod">Warranty Period</label>
            <input
              type="text"
              id="warrantyPeriod"
              name="warrantyPeriod"
              value={warrantyPeriod}
              onChange={onChangeInput}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-navy text-sm font-bold mb-2" htmlFor="firstServiceDueDate">First Service Due Date</label>
            <input
              type="date"
              id="firstServiceDueDate"
              name="firstServiceDueDate"
              value={firstServiceDueDate}
              onChange={onChangeInput}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-navy text-sm font-bold mb-2" htmlFor="nextServiceDate">Next Service Date</label>
            <input
              type="date"
              id="nextServiceDate"
              name="nextServiceDate"
              value={nextServiceDate}
              onChange={onChangeInput}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

        </div>

        {/* Additional Information */}
        <h2 className="text-2xl font-semibold mb-4 text-navy">Additional Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="mb-4">
            <label className="block text-navy text-sm font-bold mb-2" htmlFor="purchaseDate">Purchase Date</label>
            <input
              type="date"
              id="purchaseDate"
              name="purchaseDate"
              value={purchaseDate}
              onChange={onChangeInput}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-navy text-sm font-bold mb-2" htmlFor="invoiceNumber">Invoice Number</label>
            <input
              type="text"
              id="invoiceNumber"
              name="invoiceNumber"
              value={invoiceNumber}
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
};

export default ACInstallationForm;
