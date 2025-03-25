// AddEditTrainer.js
import React, { useState, useEffect } from 'react';


const AddEditTrainer = ({ trainer, onSave, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        expertise: '',
        email: ''
    });

    useEffect(() => {
        if (trainer) {
            setFormData(trainer);
        }
    }, [trainer]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

   
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h3 className="text-xl font-bold mb-6 text-gray-800">
                    {trainer ? 'Edit Trainer' : 'Add Trainer'}
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <label className="flex flex-col text-gray-700 font-semibold">
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </label>
                    <label className="flex flex-col text-gray-700 font-semibold">
                        Expertise:
                        <input
                            type="text"
                            name="expertise"
                            value={formData.expertise}
                            onChange={handleChange}
                            required
                            className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </label>
                    <label className="flex flex-col text-gray-700 font-semibold">
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </label>
                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-300 text-black py-2 px-6 rounded-md hover:bg-gray-400 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEditTrainer;
