import React from 'react'

const HVAC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center px-4">
            <h2 className="text-2xl font-semibold text-gray-700">There are no local products yet.</h2>
            <p className="mt-2 text-gray-600">
                But don't worry! You can explore more on our
                <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    official website
                </a>.
            </p>
            <p className="mt-4 text-gray-700 max-w-lg">
                NexA is a company specializing in high-quality elevator solutions, ensuring safety, efficiency, and modern design.
                Our team is dedicated to innovation and customer satisfaction. Stay tuned—new products will be available soon!
            </p>
        </div>
    )
}

export default HVAC