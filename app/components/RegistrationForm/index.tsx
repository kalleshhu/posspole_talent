import React, { useState } from 'react';

// Assuming you have a basic layout component or styles applied
// Ensure you have necessary imports for any icons or other components used

const RegistrationForm = () => {
    const [status, setStatus] = useState({ message: '', error: false, success: false });
    const [isLoading, setIsLoading] = useState(false);

    /**
     * Handles the form submission and sends data using the FormSubmit AJAX endpoint.
     * @param e The form submission event, explicitly typed as React.FormEvent<HTMLFormElement>.
     */
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus({ message: '', error: false, success: false });
        setIsLoading(true);

        try {
            // FIX: e.target is now correctly typed as HTMLFormElement
            const formData = new FormData(e.target);

            // The API endpoint for form submission (using formsubmit.co AJAX endpoint)
            const response = await fetch("https://formsubmit.co/ajax/letmein@posspole.com", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setStatus({ message: 'Registration successful! We will be in touch soon.', error: false, success: true });
                (e.target as HTMLFormElement).reset(); // Cast to HTMLFormElement to access reset()
            } else {
                setStatus({ message: data.message || 'Submission failed. Please try again.', error: true, success: false });
            }

        } catch (error) {
            console.error('Form submission error:', error);
            setStatus({ message: 'An unexpected error occurred. Check your network.', error: true, success: false });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-8 max-w-lg mx-auto bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">Register Now</h2>
            
            {/* Status Message Display */}
            {status.message && (
                <div 
                    className={`p-3 mb-4 rounded-lg text-sm font-medium ${
                        status.error 
                            ? 'bg-red-100 text-red-700' 
                            : 'bg-green-100 text-green-700'
                    }`}
                    role="alert"
                >
                    {status.message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="Name" 
                        required 
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="Email" 
                        required 
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message (Optional)</label>
                    <textarea 
                        id="message" 
                        name="Message" 
                        rows={3}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    ></textarea>
                </div>
                
                {/* Honeypot field for spam prevention using formsubmit.co feature */}
                <input type="text" name="_honey" style={{ display: 'none' }} aria-hidden="true" />
                
                <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                    {isLoading ? 'Processing...' : 'Submit Registration'}
                </button>
            </form>
        </div>
    );
};

export default RegistrationForm;
