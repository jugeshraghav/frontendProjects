export const Filter = () => {
  return (
    <>
      <div>
        <div>
          <h1>Movies</h1>
          <button>Add Movie</button>
        </div>

        {/* Filters */}
        <div>
          {/* Genre */}
          <label>Genre : </label>
          <select></select>
          {/* Years  */}
          <label>Year : </label>
          <select></select>
          {/* Ratings */}
          <label>Rating : </label>
          <select></select>
          {/* Search */}
          <label>Search : </label>
          <input type="text"></input>
        </div>
      </div>
    </>
  );
};
