import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/scss/style.scss";

ReactDOM.render(
  basename={process.env.PUBLIC_URL}><App />,
  document.getElementById("root"),
  document.body.classList.add("loaded")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
