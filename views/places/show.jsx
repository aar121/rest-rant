const React = require("react");
const Def = require("../default");

function show(data) {
  let stars = "";
  let comments = <h3 className="inactive">No comments yet!</h3>;
  console.log(data.place.comments);
  //if (data.place.comments.length) {
  //data.place.comments.map((c) => {
  //return (
  //<div className="border">
  //<h2 className="rant">{c.rant ? "Rant! ðŸ˜¡" : "Rave! ðŸ˜»"}</h2>
  //<h4>{c.content}</h4>
  //         <h3>
  //           <stong>- {c.author}</stong>
  //         </h3>
  //         <h4>Rating: {c.stars}</h4>
  //       </div>
  //     );
  //   });
  // }
  if (data.place.comments.length) {
    let averageRating = Math.round(data.place.rating);
    for (let i = 0; i < averageRating; i++) {
      stars += "⭐";
    }
  }
  return (
    <Def>
      <main>
        <div className="place-1">
          <h1>{data.place.name}</h1>
          <p>
            <h4>Rating</h4>
            {stars} / 5
          </p>
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
          <div>
            {" "}
            <h2>Comments</h2>
            {data.place.comments.length &&
              data.place.comments.map((c, index) => {
                return (
                  <div className="border">
                    <h2 className="rant">
                      {c.rant ? "Rant! ðŸ˜¡" : "Rave! ðŸ˜»"}
                    </h2>
                    <h4>{c.content}</h4>
                    <h3>
                      <stong>- {c.author}</stong>
                    </h3>
                    <h4> Rating: {c.stars}</h4>
                  </div>
                );
              })}
          </div>
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
            <label htmlFor="textbox">Rant</label>
            <input
              className="checkbox"
              type="textbox"
              value="rant"
              id="rant"
              name="rant"
            ></input>
          </div>
          <div>
            <button className="button" type="submit"></button>
            Add Your Comment
          </div>
        </form>
        ;
      </main>
    </Def>
  );
}

module.exports = show;
