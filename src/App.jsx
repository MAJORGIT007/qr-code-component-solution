import "./App.css";
import qrcode from "../public/image-qr-code.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img className="qrcode" src={qrcode} alt="qr code" />
        <div className="text-component">
          <h1 className="title">
            Improve your front-end skills by building projects
          </h1>
          <p className="description">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
