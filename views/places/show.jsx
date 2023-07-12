const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <div className="place-1">
          <h1>{data.place.name}</h1>
          <h2>Rating</h2>
          <p>Not Rated</p>
          <p className="text-center">{data.place.cuisines}</p>
          <img src={data.place.pic} alt={data.place.name} />
          <p className="text-center">
            Located in {data.place.city}, {data.place.state}
          </p>
          <h2>Comments</h2>
          <p>No comments yet</p>
          <a href={`/places/${data.id}/edit`} className="btn btn-warning">
            Edit
          </a>
          <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
