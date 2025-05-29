import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

const QuoteForm = () => {
    const [formData, setFormData] = useState({
        aircraftType: '',
        tailNumber: '',
        location: '',
        phoneNumber: '',
        services: [],
        preferredDate: '',
        notes: '',
        hoseAccess: false,
        email: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const servicesList = [
        'Exterior Detailing',
        'Interior Detailing',
        'Wax Protection',
        'Leather Treatment',
        'Carpet Cleaning',
        'Sanitization'
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox' && name === 'hoseAccess') {
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleCheckbox = (service) => {
        setFormData((prev) => {
            const newServices = prev.services.includes(service)
                ? prev.services.filter((s) => s !== service)
                : [...prev.services, service];
            return { ...prev, services: newServices };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formPayload = new FormData();
        for (const key in formData) {
            if (key === 'services') {
                formPayload.append(key, formData.services.join(', '));
            } else {
                formPayload.append(key, formData[key]);
            }
        }

        try {
            const response = await fetch('https://formspree.io/f/xblonndj', {
                method: 'POST',
                body: formPayload,
                headers: {
                    Accept: 'application/json'
                }
            });

            if (response.ok) {
                setSubmitted(true);
                setStatusMessage('Thanks for your submission!');
                setFormData({
                    aircraftType: '',
                    tailNumber: '',
                    location: '',
                    services: [],
                    preferredDate: '',
                    phoneNumber: '',
                    notes: '',
                    hoseAccess: false,
                    email: ''
                });
            } else {
                const data = await response.json();
                if (data.errors) {
                    setStatusMessage(
                        data.errors.map((err) => err.message).join(', ')
                    );
                } else {
                    setStatusMessage('Oops! There was a problem submitting your form.');
                }
            }
        } catch (error) {
            setStatusMessage('Oops! There was a problem submitting your form.');
        }
    };

    return (
        <section className="py-20 bg-gray-100">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Request a Free Quote</h2>
                    <p className="text-lg text-gray-600">
                        Let us know about your aircraft and what services you're interested in.
                    </p>
                </motion.div>

                {submitted ? (
                    <div className="text-center py-20">
                        <h2 className="text-3xl font-bold text-green-700 mb-4">Thank You!</h2>
                        <p className="text-lg text-gray-600">{statusMessage}</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-strong space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-1">Aircraft Type</label>
                                <input
                                    type="text"
                                    name="aircraftType"
                                    value={formData.aircraftType}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-1">Tail Number (N#)</label>
                                <input
                                    type="text"
                                    name="tailNumber"
                                    value={formData.tailNumber}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-1">Location (Airport/FBO)</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-1">Preferred Date/Time</label>
                                <input
                                    type="text"
                                    name="preferredDate"
                                    value={formData.preferredDate}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-1">Phone Number</label>
                                <input 
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Requested Services</label>
                            <div className="grid md:grid-cols-2 gap-4">
                                {servicesList.map((service) => (
                                    <label key={service} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            name={`service_${service.replace(/\s+/g, '_')}`}
                                            checked={formData.services.includes(service)}
                                            onChange={() => handleCheckbox(service)}
                                            className="mr-2"
                                        />
                                        {service}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Additional Notes</label>
                            <textarea
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                rows="4"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                placeholder="Any special requests or info you'd like to share"
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Is there hose access?</label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    name="hoseAccess"
                                    checked={formData.hoseAccess}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                <span>{formData.hoseAccess ? 'Yes' : 'No'}</span>
                            </label>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn-primary px-8 py-3 rounded-lg text-white text-lg shadow-md hover:shadow-lg"
                            >
                                Submit Quote Request
                            </button>
                        </div>
                        <p className="text-center text-red-500">{statusMessage}</p>
                    </form>
                )}
            </div>

            <div className="text-center mt-10">
                <a
                    href="/"
                    className="inline-block bg-gray-100 border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-200 transition"
                >
                    ⬅ Back to Home
                </a>
            </div>

        </section>
    
        

    );
};

export default QuoteForm;
