import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    time: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    if (!form.message.trim()) newErrors.message = 'This field is required';
    if (!form.time.trim()) newErrors.time = 'Please specify a preferred time';
    if (!form.agree) newErrors.agree = 'You must agree to be contacted';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert('Form submitted (mock)');
      setForm({
        name: '',
        phone: '',
        email: '',
        message: '',
        time: '',
        agree: false,
      });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <section className="bg-[#fff] px-6 pt-40 pb-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10 text-[#4a4a3f]">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[#4a4a3f] mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-[#4a4a3f] mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-[#4a4a3f] mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-[#4a4a3f] mb-1">What brings you here?</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded h-32"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <div>
            <label className="block text-[#4a4a3f] mb-1">Preferred time to reach you</label>
            <input
              type="text"
              name="time"
              value={form.time}
              onChange={handleChange}
              placeholder="e.g. Weekday mornings, afternoons, etc."
              className="w-full border border-gray-300 p-3 rounded"
            />
            {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mr-2 mt-1"
            />
            <label className="text-[#4a4a3f]">
              I agree to be contacted
            </label>
          </div>
          {errors.agree && <p className="text-red-500 text-sm mt-1">{errors.agree}</p>}

          <button
            type="submit"
            className="bg-[#5f7b71] text-white px-6 py-3 rounded hover:bg-[#6b8b81] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
