import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Modal = ({ show, onClose, onSubmit, initialData }) => {
    const [formData, setFormData] = useState({ name: '', last_name: '', age: '', gender: '' });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    if (!show) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    return (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="bg-white rounded-lg p-6 w-96 shadow-lg relative"
                initial={{ y: '-100vh' }}
                animate={{ y: 0 }}
                exit={{ y: '-100vh' }}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-xl"
                >
                    ❌
                </button>
                <h2 className="text-2xl text-blue-600 mb-4">{initialData ? 'Edit Task' : 'Add Task'}</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-left mb-1 text-gray-700">First Name:</label>
                        <input
                            type="text"
                            name="last_name"  
                            value={formData.last_name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-left mb-1 text-gray-700">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-left mb-1 text-gray-700">Age:</label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-left mb-1 text-gray-700">Gender:</label>
                        <input
                            type="text"
                            name="gender" 
                            value={formData.gender}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-md"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        {initialData ? 'Update' : 'Submit'}
                    </button>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default Modal;
