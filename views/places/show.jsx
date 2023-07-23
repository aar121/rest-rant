const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = <h3 className="inactive">No comments yet!</h3>;
  if (data.place.comments.length) {
    comments = data.place.comments.map((c) => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? "Rant! ðŸ˜¡" : "Rave! ðŸ˜»"}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      );
    });
  }
  return (
    <Def>
      <main>
        <div className="place-1">
          <h1>{data.place.name}</h1>
          <h2>Rating</h2>
          <p>Not Rated</p>
          <p className="text-center">{data.place.cuisines}</p>
          <img src={data.place.pic} alt={data.place.name} />
          <h3 className="text-center">
            Located in {data.place.city}, {data.place.state}
          </h3>
          <div className="col-sm-6">
            <h2>Description</h2>
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines}</h4>
          </div>
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
        <form method="POST" action={`/places/${data.place.id}/comment`}>
    <div>
      <label htmlFor="author">Author</label>
      <input
        className="form"
        id="author"
        name="author"
        placeholder="your name"
      ></input>
    </div>
    <div>
      <label htmlFor="content">Content</label>
      <input
        className="form"
        id="content"
        name="content"
        placeholder="your message"
      ></input>
    </div>
    <div>
      <label htmlFor="star rating">Star Rating</label>
      <input
        className="form"
        id="rating"
        name="rating"
        type="range"
        min="0"
        max="5"
        step="0.5"
      ></input>
    </div>
    <div>
      <label htmlFor="checkbox">Rant</label>
      <input
        className="checkbox"
        type="checkbox"
        value="rant"
        id="rant"
        name="rant"
      ></input>
    </div>
    <div>
      <button className="button" type="submit"></button>
      Add Your Comment
    </div>
  </form>;
      </main>
    </Def>
  );
}

module.exports = show;
