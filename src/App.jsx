import './App.css';

import React from 'react'


//import { NetlifyForm, Honeypot } from 'react-netlify-forms'

function App() {
  return (
    <div>
      <form method="post">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>

  );
}

export default App;
