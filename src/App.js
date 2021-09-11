import { useState, useReducer } from 'react';
import './App.css';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 2000);
  };

  return (
    <div className="App">
      <h1>todo's</h1>
      {submitting && (
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}>{value.toString()}</li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>todo</p>
            <input
              name="name"
              onChange={(e) => {
                setFormData(e);
                console.log(formData);
              }}
            />
          </label>
        </fieldset>
        <button disabled={submitting} type="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default App;
