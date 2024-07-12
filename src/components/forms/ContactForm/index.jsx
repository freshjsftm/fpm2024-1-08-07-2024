import { useState } from 'react';

const ContactForm = () => {
  const [state, setState] = useState({
    email: '',
    phone: '',
    quetion: '',
  });
  const handleInput = ({ target: { name, value } }) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  return (
    <div>
      <h3>contact form</h3>
      <form>
        <input
          type="text"
          name="email"
          placeholder="email"
          value={state.email}
          onChange={handleInput}
        />
        <input
          type="text"
          name="phone"
          placeholder="phone"
          value={state.phone}
          onChange={handleInput}
        />
        <input
          type="text"
          name="quetion"
          placeholder="quetion"
          value={state.quetion}
          onChange={handleInput}
        />
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default ContactForm;
