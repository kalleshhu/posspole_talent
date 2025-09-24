"use client";

import { useState } from "react";

const RegistrationForm = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formData = new FormData(e.target);
            const response = await fetch("https://formsubmit.co/ajax/letmein@posspole.com", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setSuccess(true);
                e.target.reset(); // clear form
            } else {
                alert("❌ Something went wrong. Try again.");
            }
        } catch (error) {
            alert("⚠️ Error submitting form.");
        }

        setLoading(false);
    };

    return (
        <div
            id="registration-section"
            className="bg-gray-100 py-16 px-4 -mt-40"
            style={{ marginBottom: "20%" }}
        >
            <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
                Join Our Talent Network
            </h2>

            <form
                onSubmit={handleSubmit}
                className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl p-10 space-y-8"
            >
                <h3 className="text-4xl font-bold text-indigo-600 text-center">
                    Register
                </h3>
                <p className="text-center text-gray-600 text-lg mb-3">
                    Fill in your details below and showcase your skills. We'll get in touch if there’s a fit!
                </p>

                {/* NAME */}
                <div>
                    <label className="block text-m font-medium text-gray-700 mb-2">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="w-full p-4 rounded-xl shadow-md bg-[#f4f3f3] focus:bg-white focus:ring-2 focus:ring-indigo-500 transition"
                        placeholder="Enter your full name..."
                    />
                </div>

                {/* EMAIL */}
                <div>
                    <label className="block text-m font-medium text-gray-700 mb-2">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full p-4 rounded-xl shadow-md bg-[#f4f3f3] focus:bg-white focus:ring-2 focus:ring-indigo-500 transition"
                        placeholder="eg: abcd@example.com"
                    />
                </div>

                {/* PHONE */}
                <div>
                    <label className="block text-m font-medium text-gray-700 mb-2">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full p-4 rounded-xl shadow-md bg-[#f4f3f3] focus:bg-white focus:ring-2 focus:ring-indigo-500 transition"
                        placeholder="your phone number..."
                    />
                </div>

                {/* AREA OF WORK */}
                <div>
                    <label className="block text-m font-medium text-gray-700 mb-2">
                        Area of Work
                    </label>
                    <select
                        name="areaOfWork"
                        required
                        className="w-full p-4 rounded-xl shadow-md bg-[#f4f3f3] focus:bg-white cursor-pointer focus:ring-2 focus:ring-indigo-500 transition"
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

                {/* EXPERIENCE */}
                <div>
                    <label className="block text-m font-medium text-gray-700 mb-2">
                        Experience
                    </label>
                    <select
                        name="experience"
                        required
                        className="w-full p-4 rounded-xl shadow-md bg-[#f4f3f3] focus:bg-white cursor-pointer focus:ring-2 focus:ring-indigo-500 transition"
                    >
                        <option value="">Select experience</option>
                        <option>Fresher</option>
                        <option>0-2 years</option>
                        <option>3-5 years</option>
                        <option>6-10 years</option>
                        <option>10+ years</option>
                    </select>
                </div>

                {/* DESCRIPTION */}
                <div>
                    <label className="block text-m font-medium text-gray-700 mb-2">
                        Brief Description
                    </label>
                    <textarea
                        name="description"
                        rows={4}
                        required
                        className="w-full p-4 rounded-xl shadow-md bg-[#f4f3f3] focus:bg-white focus:ring-2 focus:ring-indigo-500 transition"
                        placeholder="Tell us a bit about yourself"
                    />
                </div>

               {/* RESUME LINK */}
<div>
    <label className="block text-m font-medium text-gray-700 mb-2">
        Profile Link (Google Drive, OneDrive, etc.)
    </label>
    <input
        type="url"
        name="resumeLink"
        required
        placeholder="Paste your resume link here..."
        className="w-full p-4 rounded-xl shadow-md bg-[#f4f3f3] focus:bg-white focus:ring-2 focus:ring-indigo-500 transition"
    />
</div>

                {/* Hidden fields */}
                <input type="hidden" name="_captcha" value="false" />

                {/* SUBMIT */}
                <div className="text-center">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full text-white p-3 rounded-lg transition"
                        style={{
                            backgroundColor: loading ? "gray" : "blueviolet",
                            cursor: loading ? "not-allowed" : "pointer",
                        }}
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </form>

            {/* SUCCESS MODAL */}
            {success && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-sm">
                        <h2 className="text-2xl font-bold text-green-600 mb-4">
                            🎉 Registered Successfully!
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Thank you for joining our network. We’ll get in touch soon!
                        </p>
                        <button
                            onClick={() => setSuccess(false)}
                            className="bg-indigo-600 text-black px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
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
