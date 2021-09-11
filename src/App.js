import { useState } from 'react';
import './App.css';

function App() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      alert('form submitted');
      setSubmitting(false);
    }, 2000);
  };

  return (
    <div className="App">
      <h1>Simple form</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" />
          </label>
        </fieldset>
        <button disabled={submitting} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
