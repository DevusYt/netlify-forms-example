import './App.css';

import React, { useState } from 'react'
import MyNav from './MyNav';
import Button from 'react-bootstrap/Button';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  function handleSubmit(e) {
    console.log(formData)

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", formData })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  }

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  return (
    <>
      <MyNav />

      <h1>Test</h1>

      <form onSubmit={(e) => handleSubmit(e)} class='d-flex flex-column justify-content-center align-items-center'>
        <p>
          <label>
            Your Name: <input type="text" name="name" value={formData.name} onChange={(e) => {
              setFormData(eVals => ({
                ...eVals, name: e.target.value
              }))
            }} />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" value={formData.email} onChange={(e) => {
              setFormData(eVals => ({
                ...eVals, email: e.target.value
              }))
            }} />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" value={formData.message} onChange={(e) => {
              setFormData(eVals => ({
                ...eVals, message: e.target.value
              }))
            }} />
          </label>
        </p>
        <p>
          <Button variant="outline-primary" type="submit">Submit</Button>{' '}
        </p>
      </form>
    </>
  )

  // return (
  //   <div>

  //     <MyNav />

  //     <form name="contact" netlify netlify-honeypot="bot-field" hidden>
  //       <input type="text" name="name" />
  //       <input type="email" name="email" />
  //       <textarea name="message"></textarea>
  //     </form>

  //     <form name="contact" method="post" class='d-flex flex-column justify-content-center align-items-center'>
  //       <input type="hidden" name="form-name" value="contact" />
  //       <p>
  //         <label>Your Name: <input type="text" name="name" /></label>
  //       </p>
  //       <p>
  //         <label>Your Email: <input type="email" name="email" /></label>
  //       </p>
  //       <p>
  //         <label>Message: <textarea name="message"></textarea></label>
  //       </p>
  //       <p>
  //         <Button variant="outline-primary" type="submit">Submit</Button>{' '}
  //       </p>
  //     </form>
  //   </div>

  // );
}

export default App;
