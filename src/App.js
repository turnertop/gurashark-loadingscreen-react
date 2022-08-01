import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import LoadingScreen from './assets/LoadingScreen.gif';

// Gurashark loading screen for you web-app/website
// Function UseState Demonstration

class LoadingScreen2 extends React.Component {
  render() {
  return (
    <html style= {{
    backgroundColor: "#C7DCF9",
    width: "100vw",
    minHeight: "100vh",
    height: "100%",
    margin: "0px",
    padding: "0px",
    }}>
    <body style={{
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "0px",
    padding: "0px",
    alignItems: "center",
    }}>
    <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    }}>
    <img src={LoadingScreen} alt="loading screen"
   style={{
     position: "fixed",
     top: "50%",
     left: "50%",
     transform: "translate(-50%, -50%)",
   }}
      />
    </div>
</body>
    </html>
  )

  }

}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])
  return (
    <>
    {loading === false ? (
    <div className="App" style={{
    }}>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
      ) : (
        <LoadingScreen2 />
      )}
    </>

  );
}

export default App;
