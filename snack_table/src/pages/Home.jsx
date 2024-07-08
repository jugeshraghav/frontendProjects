import { useState } from "react";
import { snacks } from "../constants/data";

export const Home = () => {
  const [allSnacks, setAllSnacks] = useState(snacks);
  const [searchText, setSearchText] = useState("");
  const filteredSnacks = allSnacks.filter((snack) => {
    return (
      searchText === "" ||
      snack.product_name.toLowerCase().includes(searchText.toLowerCase()) ||
      snack.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  });
  return (
    <>
      <div>
        {/* navbar */}
        <nav>
          <h1>Snack Table</h1>
        </nav>

        {/* search bar */}
        <div>
          <input
            type="text"
            placeholder="Enter name or ingredients"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>

        {/* display snacks */}
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Product Name</th>
              <th>Product Weight</th>
              <th>Price(INR)</th>
              <th>Calories</th>
              <th>Ingredients</th>
            </tr>
          </thead>
          <tbody>
            {filteredSnacks.length > 0 ? (
              filteredSnacks.map(
                ({
                  id,
                  product_name,
                  product_weight,
                  price,
                  calories,
                  ingredients,
                }) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{product_name}</td>
                    <td>{product_weight}</td>
                    <td>{price}</td>
                    <td>{calories}</td>
                    <td>{ingredients.join(", ")}</td>
                  </tr>
                )
              )
            ) : (
              <tr>
                <td>No Product Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
