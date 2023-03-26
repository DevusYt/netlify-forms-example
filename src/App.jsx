import './App.css';

import React from 'react'
import MyNav from './MyNav';
import Button from 'react-bootstrap/Button';


//import { NetlifyForm, Honeypot } from 'react-netlify-forms'

function App() {
  return (


    <div>
      <form name="Netlify Example Forms" netlify>
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
          <Button variant="outline-primary" type="submit">Primary</Button>{' '}
        </p>
      </form>
    </div>

  );
}

export default App;
