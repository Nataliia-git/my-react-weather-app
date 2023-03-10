import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="Male" />
        <footer>
          This project was coded by Nataliia Zazerina πΊπ¦ and is{" "}
          <a
            href="https://github.com/Nataliia-git/my-react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
