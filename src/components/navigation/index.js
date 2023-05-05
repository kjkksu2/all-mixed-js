import "./styles.css";

const nav = `
    <header>
      <h1>
        <a href="/">Javascript</a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="/custom">custom</a>
          </li>
          <li>
            <a href="/canvas">canvas</a>
          </li>
          <li>
            <a href="/optimization">optimization</a>
          </li>
        </ul>
      </nav>
    </header>
`;

document.body.insertAdjacentHTML("afterbegin", nav);
