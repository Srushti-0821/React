import React from 'react';

function ContactCard({ name, email, phone, onDelete, onEdit }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '8px', margin: '8px' }}>
      <h4>Name: {name}</h4>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <button onClick={onEdit}> Edit</button>
      <button onClick={onDelete}> Delete</button>
    </div>
  );
}

export default ContactCard;