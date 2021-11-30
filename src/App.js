import { useState } from "react";
import "./styles.css";

export default function App() {
  let [display, setDisplay] = useState("");

  function displayHandler() {
    const cp = document.getElementById("cost-price");
    const count = document.getElementById("stocks-count");
    const sp = document.getElementById("sell-price");
    // const show = document.getElementById("display");
    // console.log(cp);
    var cost = cp.value;
    var sell = sp.value;
    var num = count.value;
    if (cost > sell) {
      var loss = cost - sell;
      var loss_percentage = (loss / cost) * 100;
      // console.log(loss * num, loss_percentage);
      // show.style.backgroundColor = "#f03a30";
      setDisplay(
        `Your loss is ${loss * num} and loss percentage is ${loss_percentage}%`
      );
    } else if (sell > cost) {
      var profit = sell - cost;
      var profit_percentage = (profit / cost) * 100;
      // console.log(profit * num, profit_percentage);
      // show.style.backgroundColor = "lightgreen";
      setDisplay(
        `Your profit is ${
          profit * num
        } and profit percentage is ${profit_percentage}%`
      );
    } else {
      // console.log("No profit, No loss");
      // show.style.backgroundColor = "Yellow";
      setDisplay(`No profit, No loss`);
    }
  }

  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
        crossorigin="anonymous"
      />
      <h2 className="heading" id="head">
        Profit and Loss Calculator
      </h2>
      <label className="labels" id="costing" htmlFor="cost-price">
        Enter Initial Value:
      </label>
      <input type="number" className="inputs" id="cost-price"></input>
      <br />
      <label className="labels" id="count" htmlFor="stocks-count">
        Enter number of stocks:
      </label>
      <input type="number" className="inputs" id="stocks-count"></input>
      <br />
      <label className="labels" id="selling" htmlFor="sell-price">
        Enter Current Price:
      </label>
      <input className="inputs" type="number" id="sell-price"></input>

      <br />

      <button type="submit" id="submit" onClick={displayHandler}>
        Submit
      </button>

      <p id="display">{display}</p>

      <footer class="footer">
        <ul>
          <li class="sm-icons">
            <a class="sm-links" href="https://github.com/sarthakdelori">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li class="sm-icons">
            <a class="sm-links" href="https://twitter.com/sarthakdelori14">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="sm-icons">
            <a
              class="sm-links"
              href="https://www.linkedin.com/in/sarthak-delori-626154184/"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
