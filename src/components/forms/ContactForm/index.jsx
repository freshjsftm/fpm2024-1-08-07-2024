import { useReducer } from 'react';

const initialState = {
  email: '',
  phone: '',
  quetion: '',
};

const reducer = (state, action) => {
  const { name, value } = action;
  const newState = { ...state, [name]: value };
  return newState;
};

const ContactForm = () => {
  const [{ email, phone, quetion }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const handleInput = ({ target: { name, value } }) => {
    const action = { name, value };
    dispatch(action);
  };

  return (
    <div>
      <h3>contact form</h3>
      <form>
        <input
          type="text"
          name="email"
          placeholder="email"
          value={email}
          onChange={handleInput}
        />
        <input
          type="text"
          name="phone"
          placeholder="phone"
          value={phone}
          onChange={handleInput}
        />
        <input
          type="text"
          name="quetion"
          placeholder="quetion"
          value={quetion}
          onChange={handleInput}
        />
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default ContactForm;
