import { useState, useEffect } from 'react';
import '../styles/Contact.css';
import { validateEmail } from '../utils/helpers.js';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  useEffect(() => {
    let errorsCopy = { name: '', email: '', message: '' };

    if (name.trim() === '') {
      errorsCopy.name = 'Required';
    }

    if (email.trim() === '' || !validateEmail(email)) {
      errorsCopy.email = 'Email is invalid';
    }

    if (message.trim() === '') {
      errorsCopy.message = 'Required';
    }

    setErrors(errorsCopy);
  }, [name, email, message]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (Object.values(errors).every((error) => error === '')) {
      // Form submission logic here
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="container text-center">
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        {errors.name && <div className="error-text">{errors.name}</div>}
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        {errors.email && <div className="error-text">{errors.email}</div>}
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          placeholder="Message"
        ></textarea>
        {errors.message && <div className="error-text">{errors.message}</div>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;