import './App.css';

import React from 'react'
import MyNav from './MyNav';
import Button from 'react-bootstrap/Button';


//import { NetlifyForm, Honeypot } from 'react-netlify-forms'

function App() {
  return (
    <div>
      <MyNav />

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
          <Button variant="outline-primary" type="submit">Primary</Button>{' '}
        </p>
      </form>
    </div>

  );
}

export default App;
