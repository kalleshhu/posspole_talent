"use client";

import { useState } from "react";

// This component provides a form for users to register for a talent network,
// using formsubmit.co for backend submission and custom modals for feedback.
const RegistrationForm = () => {
    // State to manage the loading status during form submission
    const [loading, setLoading] = useState(false);
    // State to manage the visibility of the success modal
    const [success, setSuccess] = useState(false);
    // State to manage and display error messages (null if no error)
    const [error, setError] = useState(null); 

    /**
     * Handles the form submission asynchronously.
     * Prevents default form action, sets loading state, sends data to formsubmit.co,
     * and displays a success or error modal based on the response.
     */
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null); // Clear previous errors

        try {
            const formData = new FormData(e.target);
            // The API endpoint for form submission (using formsubmit.co AJAX endpoint)
            const response = await fetch("https://formsubmit.co/ajax/letmein@posspole.com", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setSuccess(true);
                e.target.reset(); // Clear form on successful submission
            } else {
                // Handle non-200 responses without using alert()
                setError("❌ Something went wrong. The server returned an error.");
            }
        } catch (submitError) {
            // Handle network errors without using alert()
            console.error("Submission Error:", submitError);
            setError("⚠️ Network Error. Check your connection and try again.");
        }

        setLoading(false);
    };

    /**
     * Closes the currently displayed success or error modal.
     */
    const closeModal = () => {
        setSuccess(false);
        setError(null);
    };

    return (
        <div
            id="registration-section"
            // Layout adjusted with -mt-40 (typical Tailwind hero offset) and responsive padding
            className="bg-gray-100 py-16 px-4 md:px-8 -mt-40"
            style={{ marginBottom: "20%" }}
        >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-12">
                Join Our Talent Network
            </h2>

            <form
                onSubmit={handleSubmit}
                className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl p-6 sm:p-10 space-y-6 sm:space-y-8"
            >
                <h3 className="text-3xl sm:text-4xl font-bold text-indigo-600 text-center">
                    Register
                </h3>
                <p className="text-center text-gray-600 text-base sm:text-lg mb-3">
                    {/* JSX escaping for apostrophes */}
                    Fill in your details below and showcase your skills. We&apos;ll get in touch if there&apos;s a fit!
                </p>

                {/* NAME FIELD */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        className="w-full p-4 rounded-xl shadow-md bg-[#f4f3f3] focus:bg-white focus:ring-2 focus:ring-indigo-500 transition border border-transparent focus:border-indigo-500"
                        placeholder="Enter your full name..."
                    />
                </div>

                {/* EMAIL FIELD */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        className="w-full p-4 rounded-xl shadow-md bg-[#f4f3f3] focus:bg-white focus:ring-2 focus:ring-indigo-500 transition border border-transparent focus:border-indigo-500"
                        placeholder="eg: abcd@example.com"
                    />
                </div>

                {/* PHONE FIELD */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        name="phone"
                        required
                        className="w-full p-4 rounded-xl shadow-md bg-[#f4f3f3] focus:bg-white focus:ring-2 focus:ring-indigo-500 transition border border-transparent focus:border-indigo-500"
                        placeholder="your phone number..."
                    />
                </div>

                {/* AREA OF WORK DROPDOWN */}
                <div>
                    <label htmlFor="areaOfWork" className="block text-sm font-medium text-gray-700 mb-2">
                        Area of Work
                    </label>
                    <select
                        id="areaOfWork"
                        name="areaOfWork"
                        required
                        className="w-full p-4 rounded-xl shadow-md bg-[#f4f3f3] focus:bg-white cursor-pointer focus:ring-2 focus:ring-indigo-500 transition border border-transparent focus:border-indigo-500"
                    >
                        <option value="">Select an option</option>
                        <option>Web Development (Frontend, Backend, Full-stack)</option>
                        <option>Mobile App Development (iOS, Android)</option>
                        <option>Desktop Application Development</option>
                        <option>Cloud Services (AWS, Azure, GCP)</option>
                        <option>Data Science and Analytics</option>
                        <option>AI/Machine Learning</option>
                        <option>Cybersecurity</option>
                        <option>Networking</option>
                        <option>IT Infrastructure Management</option>
                        <option>Testing and Quality Assurance (QA)</option>
                        <option>DevOps and CI/CD</option>
                        <option>Project Management</option>
                    </select>
                </div>

                {/* EXPERIENCE DROPDOWN */}
                <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                        Experience
                    </label>
                    <select
                        id="experience"
                        name="experience"
                        required
                        className="w-full p-4 rounded-xl shadow-md bg-[#f4f3f3] focus:bg-white cursor-pointer focus:ring-2 focus:ring-indigo-500 transition border border-transparent focus:border-indigo-500"
                    >
                        <option value="">Select experience</option>
                        <option>Fresher</option>
                        <option>0-2 years</option>
                        <option>3-5 years</option>
                        <option>6-10 years</option>
                        <option>10+ years</option>
                    </select>
                </div>

                {/* DESCRIPTION TEXTAREA */}
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                        Brief Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        rows={4}
                        required
                        className="w-full p-4 rounded-xl shadow-md bg-[#f4f3f3] focus:bg-white focus:ring-2 focus:ring-indigo-500 transition border border-transparent focus:border-indigo-500"
                        placeholder="Tell us a bit about yourself and your career goals."
                    />
                </div>

                {/* RESUME LINK FIELD */}
                <div>
                    <label htmlFor="resumeLink" className="block text-sm font-medium text-gray-700 mb-2">
                        Profile Link (Google Drive, OneDrive, Portfolio, etc.)
                    </label>
                    <input
                        id="resumeLink"
                        type="url"
                        name="resumeLink"
                        required
                        placeholder="Paste your resume link here..."
                        className="w-full p-4 rounded-xl shadow-md bg-[#f4f3f3] focus:bg-white focus:ring-2 focus:ring-indigo-500 transition border border-transparent focus:border-indigo-500"
                    />
                </div>

                {/* Hidden field to disable formsubmit.co captcha */}
                <input type="hidden" name="_captcha" value="false" />

                {/* SUBMIT BUTTON */}
                <div className="text-center">
                    <button
                        type="submit"
                        disabled={loading}
                        className="text-white p-3 rounded-xl shadow-lg transition duration-200 transform hover:scale-[1.02] active:scale-[0.98] w-full sm:w-60 mt-4 sm:mt-10"
                        style={{
                            // Custom style to apply a gradient effect or fallback color
                            background: loading ? "gray" : "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)", // Indigo to Violet gradient
                            cursor: loading ? "not-allowed" : "pointer",
                        }}
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </form>

            {/* --- CUSTOM ERROR MODAL --- */}
            {error && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 transition-opacity duration-300" 
                    onClick={closeModal} // Close on backdrop click
                >
                    <div 
                        className="bg-white rounded-3xl shadow-2xl p-8 text-center max-w-xs sm:max-w-sm w-full transform transition-transform duration-300 scale-100"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                    >
                        <h2 className="text-2xl font-extrabold text-red-600 mb-4">
                            🚫 Submission Failed
                        </h2>
                        <p className="text-gray-700 mb-6">
                            {error}
                        </p>
                        <button
                            onClick={closeModal}
                            className="bg-red-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-red-700 transition duration-150 transform hover:shadow-xl w-full"
                        >
                            Dismiss
                        </button>
                    </div>
                </div>
            )}

            {/* --- CUSTOM SUCCESS MODAL --- */}
            {success && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 transition-opacity duration-300" 
                    onClick={closeModal} // Close on backdrop click
                >
                    <div 
                        className="bg-white rounded-3xl shadow-2xl p-8 text-center max-w-xs sm:max-w-sm w-full transform transition-transform duration-300 scale-100"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                    >
                        <h2 className="text-2xl font-extrabold text-green-600 mb-4">
                            🎉 Registered Successfully!
                        </h2>
                        <p className="text-gray-700 mb-6">
                            {/* JSX escaping for apostrophes */}
                            Thank you for joining our network. We&apos;ll get in touch soon!
                        </p>
                        <button
                            onClick={closeModal}
                            className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-indigo-700 transition duration-150 transform hover:shadow-xl w-full"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RegistrationForm;
