import React, { useState } from 'react';

const ComplaintBox: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hostel: '',
    department: '',
    description: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.hostel) newErrors.hostel = 'Hostel is required';
    if (!formData.department) newErrors.department = 'Department is required';
    if (!formData.description) newErrors.description = 'Problem description is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: '236f6d69-b5e2-4359-bb2a-3d7bc09c430e',
          ...formData
        })
      });

      const result = await response.json();
      if (result.success) {
        setSuccessMessage('Complaint submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          hostel: '',
          department: '',
          description: ''
        });
        setErrors({});
      } else {
        alert('Failed to submit complaint. Please try again later.');
      }
    } catch (error) {
      alert('Failed to submit complaint. Please try again later.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-[80%] mx-auto bg-gradient-to-r from-indigo-600 to-indigo-400">
      <h2 className="text-2xl text-center font-bold mb-4 text-white">Complaint Box</h2>
      {successMessage && <p className="text-green-600 text-[50px] font-extrabold text-center mb-4">{successMessage}</p>}
      <form onSubmit={handleSubmit} className="space-y-4 w-[50%] mx-auto text-[20px]">
        <div>
          <label className="block text-sm font-medium text-gray-100">Name</label>
          <input
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-green-500 focus:ring-green-500 ${errors.name ? 'border-red-600' : ''}`}
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-100">Email</label>
          <input
            type="email"
            placeholder="johndoe@gmail.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-green-500 focus:ring-green-500 ${errors.email ? 'border-red-600' : ''}`}
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-100">Phone</label>
          <input
            type="tel"
            placeholder="9134567890"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-green-500 focus:ring-green-500 ${errors.phone ? 'border-red-600' : ''}`}
          />
          {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-100">Hostel</label>
          <input
            type="text"
            placeholder="your hostel"
            value={formData.hostel}
            onChange={(e) => setFormData({ ...formData, hostel: e.target.value })}
            className={`mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-green-500 focus:ring-green-500 ${errors.hostel ? 'border-red-600' : ''}`}
          />
          {errors.hostel && <p className="text-red-600 text-sm mt-1">{errors.hostel}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-100">Department</label>
          <input
            type="text"
            placeholder="your department"
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            className={`mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-green-500 focus:ring-green-500 ${errors.department ? 'border-red-600' : ''}`}
          />
          {errors.department && <p className="text-red-600 text-sm mt-1">{errors.department}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-100">Problem Description</label>
          <textarea
            placeholder="Describe your problem"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className={`mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-green-500 focus:ring-green-500 ${errors.description ? 'border-red-600' : ''}`}
            rows={4}
          />
          {errors.description && <p className="text-red-600 text-sm mt-1">{errors.description}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Complaint'}
        </button>
      </form>
    </div>
  );
};

export default ComplaintBox;
