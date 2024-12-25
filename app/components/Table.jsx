import React from 'react'

function Table({data, deleteItem}) {
  return (
    <div className="overflow-x-auto max-h-96">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="border border-gray-300 dark:border-gray-600 p-2 dark:text-white">
                Name
              </th>
              <th className="border border-gray-300 dark:border-gray-600 p-2 dark:text-white">
                Type
              </th>
              <th className="border border-gray-300 dark:border-gray-600 p-2 dark:text-white">
                Status
              </th>
              <th className="border border-gray-300 dark:border-gray-600 p-2 dark:text-white">
                Rent
              </th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.length > 0 ? (
              data?.map((obj, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-300 dark:border-gray-600 p-2 dark:text-white">
                    {obj?.name}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 dark:text-white">
                    {obj?.type}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 dark:text-white">
                    {obj?.status}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 dark:text-white">
                    ${obj?.rent}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2">
                    <button
                      onClick={() => deleteItem(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="border border-gray-300 dark:border-gray-600 p-4 text-center"
                >
                  No properties to display.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
  )
}

export default Table