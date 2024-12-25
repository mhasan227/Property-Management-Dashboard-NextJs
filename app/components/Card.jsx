import React from 'react'

function Card({heading, description}) {
  return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {heading}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
              {description}
          </p>
      </div>
  )
}

export default Card