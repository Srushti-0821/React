import React, { useState, useEffect } from 'react';
// import ContactCard from './Component/ContactCard';
import ContactCard from './Component/Contactcard';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const defaultContacts = [
      { id: 1, name: "Ali", email: "ali@gmail.com", phone: "1234567890" },
      { id: 2, name: "Sara", email: "sara@gmail.com", phone: "9876543210" }
    ];
    setContacts(defaultContacts);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    const newContact = { ...formData, id: editId || Date.now() };
    setContacts(
      contacts.map(c => c.id === editId ? newContact : c)
    );
    if (!editId) setContacts(prev => [...prev, newContact]);

    setFormData({ name: '', email: '', phone: '' });
    setEditId(null);
  };

  const handleEdit = (contact) => {
    setFormData(contact);
    setEditId(contact.id);
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className="App">
      <h2>Contact Card</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <button type="submit">{editId ? 'Update' : 'Add'} Contact</button>
      </form>

      <hr />

      {contacts.map(contact => (
        <ContactCard
          key={contact.id}
          name={contact.name}
          email={contact.email}
          phone={contact.phone}
          onEdit={() => handleEdit(contact)}
          onDelete={() => handleDelete(contact.id)}
        />
      ))}
    </div>
  );
}

export default App;