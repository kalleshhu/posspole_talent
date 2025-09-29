'use client'; // <-- MUST be the first line to enable state and hooks

import React, { useState } from 'react';

// Define the RegistrationForm component.
// It is now a Client Component because of the directive above.
const RegistrationForm: React.FC = () => {
    // The build error pointed directly to the use of useState here:
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Registering user:', { name, email });
        // Add your form submission logic here (e.g., API call)
        setIsSubmitted(true);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-xl mt-10">
            <h2 className="text-2xl font-extrabold text-gray-800 mb-6">Talent Registration</h2>
            {isSubmitted ? (
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    <p className="font-semibold">Thank you!</p>
                    <p>Your registration has been submitted successfully.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="john.doe@example.com"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
                    >
                        Complete Registration
                    </button>
                </form>
            )}
        </div>
    );
};

export default RegistrationForm;
