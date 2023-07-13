const React = require("react");
const Def = require("../default.jsx");

function edit_form(data) {
  return (
    <Def>
      <main>
        <h1>Edit Place</h1>
        <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
          <div className="form-group">
            <label htmlFor="name">Place Name</label>
            <input
              key="uniqueId1"
              className="form-control"
              id="name"
              name="name"
              defaultValue={data.place.name}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="pic">Place Picture</label>
            <input
              key="uniqueId2"
              className="form-wtfcontrol"
              id="pic"
              name="pic"
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              key="uniqueId3"
              className="form-control"
              id="city"
              name="city"
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              key="uniqueId4"
              className="form-control"
              id="state"
              name="state"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cuisines">Cuisines</label>
            <input
              key="uniqueId5"
              className="form-control"
              id="cuisines"
              name="cuisines"
              required
            />
          </div>
          <input
            key="uniqueId6"
            className="btn btn-primary"
            type="submit"
            value="Add Place"
          />
        </form>
      </main>
    </Def>
  );
}

module.exports = edit_form;
