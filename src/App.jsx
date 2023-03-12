import './App.css';

import React from 'react'


//import { NetlifyForm, Honeypot } from 'react-netlify-forms'

function App() {
  return (
    <div>
      <form name="Netlify Example Forms" netlify>
        <p>
          <label>Test 1
            <input type="text" name='name' autocomplete="off" />
          </label>
        </p>
        <p>
          <label>Test 2
            <input type="text" name='email' autocomplete="off" />
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
