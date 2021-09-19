import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitting(true);

    const input = event.target[0];
    const data = [...formData, input.value];
    setFormData(data);

    setTimeout(() => {
      setSubmitting(false);
    }, 2000);

    input.value = '';
  };

  return (
    <div className="App">
      <h1>todo's</h1>
      {!!formData.length && (
        <div>
          <ul>
            {formData.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" />
        </label>
        <br />
        <button disabled={submitting}>submit</button>
      </form>
    </div>
  );
}

export default App;
