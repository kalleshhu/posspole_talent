"use client";

import { useState } from "react";

const RegistrationForm = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://getform.io/f/anlnkjna", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                alert("✅ Registered Successfully!");
                form.reset();
            } else {
                alert("❌ Failed to Register, Please try again");
            }
        } catch (err) {
            alert("❌ Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
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
                encType="multipart/form-data"
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
                        className="w-full p-4 rounded-xl shadow-md bg-[#f4f3f3] focus:bg-white focus:ring-2 focus:ring-indigo-500 transition"
                        required
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
                        className="w-full p-4 rounded-xl shadow-md  bg-[#f4f3f3] focus:bg-white focus:ring-2 focus:ring-indigo-500 transition"
                        required
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
                        className="w-full p-4 rounded-xl shadow-md  bg-[#f4f3f3] focus:bg-white focus:ring-2 focus:ring-indigo-500 transition"
                        required
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
                        className="w-full p-4 rounded-xl shadow-md  bg-[#f4f3f3] focus:bg-white cursor-pointer focus:ring-2 focus:ring-indigo-500 transition"
                        required
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
                        className="w-full p-4 rounded-xl shadow-md  bg-[#f4f3f3] focus:bg-white cursor-pointer focus:ring-2 focus:ring-indigo-500 transition"
                        required
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
                        className="w-full p-4 rounded-xl shadow-md  bg-[#f4f3f3] focus:bg-white focus:ring-2 focus:ring-indigo-500 transition"
                        placeholder="Tell us a bit about yourself"
                        required
                    />
                </div>

                {/* PROFILE UPLOAD */}
                <div>
                    <label className="block text-m font-medium text-gray-700 mb-2">
                        Upload Profile (PDF, DOC) <span className="text-sm text-grey ml-5">(Max 5MB)</span>
                    </label>
                    <input
                        type="file"
                        name="file"
                        accept=".pdf,.doc,.docx"
                        className="w-full p-4 rounded-xl shadow-md  bg-[#f4f3f3] hover:bg-gray-100 cursor-pointer focus:bg-white transition"
                        required
                    />
                </div>

                {/* SUBMIT BUTTON */}
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
        </div>
    );
};

export default RegistrationForm;
