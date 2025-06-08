import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../App.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        () => {
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="py-20 max-w-6xl mx-auto px-4 bg-gray-800">
      <h2 className="text-4xl font-bold global-title-color text-center mb-8">Contact Me</h2>
      <form onSubmit={handleSubmit} className="py-10 max-w-md mx-auto space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
          rows="5"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded font-semibold hover:bg-blue-500 transition"
        >
          Send Message
        </button>
      </form>
      {status && <p className="text-center mt-4 global-title-color">{status}</p>}
    </section>
  );
}

export default Contact;