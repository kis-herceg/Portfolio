import React, { useState } from 'react';
import axios from 'axios';
import CostumeButton from './CostumeButton.tsx';

interface ContactPath {
  path: string;
}

const ContactForm: React.FC<ContactPath> = ({ path }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const ContactForm = {
    name: '',
    email: '',
    message: ''
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    try {
      const response = await axios.post(path, {
        name: formData.name,
        email: formData.email,
        message: formData.message
      });
      console.log('Üzenet elküldve:', response.data);
    } catch (error) {
      console.error('Hiba történt az üzenet küldése közben:', error);
    }

  };

  return (
    <form className='' onSubmit={handleSubmit}>
      <div className='mb-4'>
        <label className="block text-sm font-bold mb-2" htmlFor="name">
          Név
        </label>
        <input
          className="shadow appearance-none border text-black rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Név"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className='mb-4'>
        <label className="block text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border text-black rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className='mb-4'>
        <label className="block text-sm font-bold mb-2" htmlFor="message">
          Üzenet
        </label>
        <textarea
          rows={5}
          className="shadow appearance-none border text-black rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          placeholder="Üzenet"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <CostumeButton onClick={handleSubmit}>
        Küldés
      </CostumeButton>
    </form>
  );
};

export default ContactForm;
