import "./styles.css";

const nav = `
    <header>
      <h1>
        <a href="/">Javascript</a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="/myArray">myArray</a>
          </li>
          <li>
            <a href="/canvas">canvas</a>
          </li>
          <li>
            <a href="/optimization">optimization</a>
          </li>
          <li>
            <a href="#">Web API</a>
          </li>
          <li>
            <a href="#">react</a>
          </li>
        </ul>
      </nav>
    </header>
`;

document.body.insertAdjacentHTML("afterbegin", nav);
