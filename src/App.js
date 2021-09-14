import { useState, useReducer } from 'react';
import './App.css';

const formReducer = (state, event) => {
  return [...state, event.target['todoList'].value];
};

function App() {
  const [formData, setFormData] = useReducer(formReducer, []);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData(event);
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 2000);
  };

  return (
    <div className="App">
      <h1>todo's</h1>
      {formData && (
        <ul>
          {formData.map((element, index) => (
            <li key={index}>{element.toString()}</li>
          ))}
        </ul>
      )}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>todo</p>
            <input name="todoList" />
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
