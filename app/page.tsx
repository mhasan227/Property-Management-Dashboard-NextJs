'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { getGreeting } from './utils/misc';
import AddPropertyModal from "./components/AddPropertyModal";
import Card from "./components/Card";
import Table from "./components/Table";

interface Property {
  name: string;
  type: string;
  status: string;
  rent: number;
}
function Page() {
  const [greeting, setGreeting] = useState("");
  const [properties, setProperties] = useState<Property[]>([]);
  const [showModal, setShowModal] = useState(false);

  // Load properties from localStorage on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedProperties = JSON.parse(localStorage.getItem("properties") || "[]");
      setProperties(storedProperties);
    }
  }, []);

  const addProperty = (property: Property) => {
    const updatedProperties = [...properties, property];
    setProperties(updatedProperties);
    if (typeof window !== "undefined") {
      localStorage.setItem("properties", JSON.stringify(updatedProperties));
    }
  };

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  const deleteProperty = (index: number) => {
    const updatedProperties = properties.filter((_, i) => i !== index);
    setProperties(updatedProperties);
    if (typeof window !== "undefined") {
      localStorage.setItem("properties", JSON.stringify(updatedProperties));
    }
  };

  const getTotalRent = () => {
    return properties
      .reduce(
        (total, property) => total + (typeof property.rent === "number" ? property.rent : parseFloat(property.rent || "0")),
        0
      )
      .toFixed(2);
  };
  
  const getHighestRentPropertyName = () => {
    if (properties.length === 0) return null;
  
    let highestRentPropertyName = properties[0]?.name || "N/A";
    let highestRent =
      typeof properties[0]?.rent === "number" ? properties[0]?.rent : parseFloat(`${properties[0]?.rent || 0}`);
  
    for (let i = 1; i < properties.length; i++) {
      const currentRent =
        typeof properties[i]?.rent === "number" ? properties[i]?.rent : parseFloat(`${properties[i]?.rent || 0}`);
  
      if (currentRent > highestRent) {
        highestRent = currentRent;
        highestRentPropertyName = properties[i]?.name || "N/A";
      }
    }
  
    return highestRentPropertyName;
  };
  
  

  const highestRentPropertyName = getHighestRentPropertyName();

  return (
    <div className="p-6 m-10 lg:mx-28">
      {/* Top Half full Width Card */}
      <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center mb-6">
        {/* Avatar */}
        <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-full flex-shrink-0 overflow-hidden">
          <Image
            src='/profile.png'
            alt="Avatar"
            className="w-full h-full object-cover"
            width={100}
            height={100}
          />
        </div>

        <div className="ml-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            {greeting} John!
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Heres whats happening today.
          </p>
        </div>
      </div>

      {/* Bottom Half of main section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card heading="Total Amount" description={`৳  ${getTotalRent()}`} />
        <Card heading="Property Data" description={properties?.length || 0} />
        <Card heading="Highest Property Name" description={highestRentPropertyName || "N/A"} />
      </div>

      {/* Property Management Section */}
      <div className="flex justify-between items-center mt-8 mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Property Data
        </h1>
        <div className="flex items-center space-x-4">
          <select
            className="border rounded-md px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            onChange={(e) => {
              const filter = e.target.value;
              if (filter === "All") {
                setProperties(JSON.parse(localStorage.getItem("properties") || "[]"));
              } else {
                const filtered = JSON.parse(localStorage.getItem("properties") || "[]")
                  .filter((property: Property) => property.type === filter);
                setProperties(filtered);
              }
            }}
          >
            <option value="All">All Properties</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Commercial">Commercial</option>
          </select>
          <button
            className="bg-gray-950 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600"
            onClick={() => setShowModal(true)}
          >
            Add Property
          </button>
        </div>
      </div>

      {/* Property Table */}
      <Table data={properties} deleteItem={deleteProperty} />

      {/* Add Property Modal */}
      {showModal && <AddPropertyModal onClose={() => setShowModal(false)} onAddProperty={addProperty} />}
    </div>
  );
}

export default Page;
