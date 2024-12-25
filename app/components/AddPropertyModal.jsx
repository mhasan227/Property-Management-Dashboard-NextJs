import React, { useState } from "react";

function AddPropertyModal({ onClose, onAddProperty }) {
  const [property, setProperty] = useState({
    name: "",
    type: "Apartment",
    status: "Available",
    rent: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!property.name || !property.rent) {
      alert("Please fill out all required fields!");
      return;
    }
    onAddProperty(property);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">
          Add New Property
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Property Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              value={property.name}
              onChange={(e) =>
                setProperty({ ...property, name: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Property Type
            </label>
            <select
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              value={property.type}
              onChange={(e) =>
                setProperty({ ...property, type: e.target.value })
              }
            >
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Commercial">Commercial</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Rental Status
            </label>
            <select
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              value={property.status}
              onChange={(e) =>
                setProperty({ ...property, status: e.target.value })
              }
            >
              <option value="Available">Available</option>
              <option value="Rented">Rented</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Monthly Rent ($)
            </label>
            <input
              type="number"
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              value={property.rent}
              onChange={(e) =>
                setProperty({ ...property, rent: e.target.value })
              }
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Add Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPropertyModal;
