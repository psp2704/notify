import React, { useContext, useEffect } from 'react';
import { RemindContext } from '../../RemindContext/RemindContext';

const ACInstallationDetails = ({  }) => {

    // const installation = {
    //             id: 1,
    //             customerName: "John Doe",
    //             customerAddress: "123 Main St",
    //             customerContactNumber: "123-456-7890",
    //             customerEmailAddress: "john@example.com",
    //             acBrand: "CoolBrand",
    //             acModelNumber: "CB1234",
    //             acSerialNumber: "SN5678",
    //             acType: "Split",
    //             acCapacity: "2 Tons",
    //             installationDate: "2024-06-15",
    //             installationLocation: "Living Room",
    //             installerName: "Jane Smith",
    //             installerContactInfo: "987-654-3210",
    //             dealerName: "AC Dealers Inc.",
    //             dealerContactInfo: "456-789-1234",
    //             warrantyPeriod: "2 Years",
    //             firstServiceDueDate: "2024-12-15",
    //             nextServiceDate: "2025-06-15",
    //             serviceHistory: "No past services",
    //             serviceNotes: "Check for noise",
    //             purchaseDate: "2024-06-01",
    //             invoiceNumber: "INV123456",
    //             maintenanceContractDetails: "Yearly service contract",
    //             remarks: "None",
    //           };


  return (
    <div className="min-h-screen bg-lightgray p-6">
      <div className="max-w-full mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-navy text-center">AC Installation Details</h2>
        
        
        {/* Customer Information */}
        <div className="mb-8 bg-blue-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-orange">Customer Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p><strong>Name:</strong> {installation.customerName}</p>
              <p><strong>Address:</strong> {installation.customerAddress}</p>
              <p><strong>Contact Number:</strong> {installation.customerContactNumber}</p>
              <p><strong>Email:</strong> {installation.customerEmailAddress}</p>
            </div>
          </div>
        </div>
        
        {/* AC Unit Information */}
        <div className="mb-8 bg-green-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-orange">AC Unit Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p><strong>Brand:</strong> {installation.acBrand}</p>
              <p><strong>Model Number:</strong> {installation.acModelNumber}</p>
              <p><strong>Serial Number:</strong> {installation.acSerialNumber}</p>
              <p><strong>Type:</strong> {installation.acType}</p>
              <p><strong>Capacity:</strong> {installation.acCapacity}</p>
            </div>
          </div>
        </div>
        
        {/* Installation Details */}
        <div className="mb-8 bg-yellow-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-orange">Installation Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p><strong>Date:</strong> {installation.installationDate}</p>
              <p><strong>Location:</strong> {installation.installationLocation}</p>
              <p><strong>Installer Name:</strong> {installation.installerName}</p>
              <p><strong>Installer Contact Info:</strong> {installation.installerContactInfo}</p>
              <p><strong>Dealer Name:</strong> {installation.dealerName}</p>
              <p><strong>Dealer Contact Info:</strong> {installation.dealerContactInfo}</p>
            </div>
          </div>
        </div>
        
        {/* Service Information */}
        <div className="mb-8 bg-red-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-orange">Service Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p><strong>Warranty Period:</strong> {installation.warrantyPeriod}</p>
              <p><strong>First Service Due Date:</strong> {installation.firstServiceDueDate}</p>
              <p><strong>Next Service Date:</strong> {installation.nextServiceDate}</p>
              <p><strong>Service History:</strong> {installation.serviceHistory}</p>
              <p><strong>Service Notes:</strong> {installation.serviceNotes}</p>
            </div>
          </div>
        </div>
        
        {/* Additional Information */}
        <div className="mb-8 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-orange">Additional Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p><strong>Purchase Date:</strong> {installation.purchaseDate}</p>
              <p><strong>Invoice Number:</strong> {installation.invoiceNumber}</p>
              <p><strong>Maintenance Contract Details:</strong> {installation.maintenanceContractDetails}</p>
              <p><strong>Remarks:</strong> {installation.remarks}</p>
            </div>
          </div>
        </div>
        
        {/* Buttons */}
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
  );
};

export default ACInstallationDetails;

