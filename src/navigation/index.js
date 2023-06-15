import "./styles.css";

/* 
<li>
<a href="/optimization">optimization</a>
</li>
<li>
<a href="#">Web API</a>
</li>
<li>
<a href="#">react</a>
</li> */

const nav = `
    <header>
      <h1>
        <a href="/">Javascript</a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="/chart">chart</a>
          </li>
          <li>
            <a href="/drag">drag</a>
          </li>
          <li>
            <a href="/flappyMonster">flappyMonster</a>
          </li>
          <li>
            <a href="/myArray">myArray</a>
          </li>
          <li>
            <a href="/myString">myString</a>
          </li>
          <li>
            <a href="/myPromise">myPromise</a>
          </li>
          <li>
            <a href="/polygon">polygon</a>
          </li>
        </ul>
      </nav>
    </header>
`;

document.body.insertAdjacentHTML("afterbegin", nav);
