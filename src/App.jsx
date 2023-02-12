import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Testing Netlify Forms</h1>
        <form name="contact" netlify>
          <p>
            <label>Name: <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </header>
    </div>
  );
}

export default App;
