import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitting(true);

    const entry = event.target[0].value;
    const data = [...formData, entry];
    setFormData(data);

    setTimeout(() => {
      setSubmitting(false);
    }, 2000);

    event.target[0].value = '';
  };

  return (
    <div className="App">
      <h1>todo's</h1>
      {!!formData.length && (
        <div>
          <p>list</p>
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
