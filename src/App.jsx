import './App.css';

import React from 'react'
import MyNav from './MyNav';
import Button from 'react-bootstrap/Button';

function App() {

	return (
		<div>

			<MyNav />

			<form name="contact" netlify netlify-honeypot="bot-field" hidden>
				<input type="text" name="name" />
				<input type="email" name="email" />
				<textarea name="message"></textarea>
			</form>

			<form name="contact" method="post" class='d-flex flex-column justify-content-center align-items-center'>
				<input type="hidden" name="form-name" value="contact" />
				<p>
					<label>Your Name: <input type="text" name="name" /></label>
				</p>
				<p>
					<label>Your Email: <input type="email" name="email" /></label>
				</p>
				<p>
					<label>Message: <textarea name="message"></textarea></label>
				</p>
				<p>
					<Button variant="outline-primary" type="submit">Submit</Button>{' '}
				</p>
			</form>
		</div>

	);
}

export default App;
