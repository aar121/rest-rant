const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>REST-Rant</h1>
        <div>
          <img src="/images/burger.jpg" alt="Burger"></img>
          <div>
            Photo by{" "}
            <a href="https://photo.thepicturepantry.com/-/galleries/photographer/alanna-taylor-tobin">
              Alanna Taylor-Tobin
            </a>{" "}
            on{" "}
            <a href="https://www.thepicturepantry.com/">The Picture Pantry</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
