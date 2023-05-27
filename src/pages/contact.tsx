import { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin: 10px;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

const TextArea = styled.textarea`
  margin: 10px;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #0077ff;
  color: white;
  cursor: pointer;
`;

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div>
      <img src="/logo.png" alt="Company Logo" style={{ width: '100px', marginRight: '20px' }} />
      <h1>Contact Us</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <TextArea
          placeholder="Message"
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
        <Button type="submit">Send</Button>
      </Form>
    </div>
  );
}