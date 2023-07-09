const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <div>
          <img src="/images/skeletonscratchhead.jpg" alt="Skeleton"></img>
          <div>
            Photo by <a href="https://www.masterfile.com/">Masterfile</a> on
            <a href="https://www.masterfile.com/image/en/640-01360160">
              Masterfile
            </a>
          </div>
        </div>
        <p>Oops, sorry, we can't find this page!</p>
      </main>
    </Def>
  );
}

module.exports = error404;
