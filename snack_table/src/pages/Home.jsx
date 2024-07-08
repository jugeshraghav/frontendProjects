import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useState } from "react";
import { snacks } from "../constants/data";

const tableHeaderDetails = [
  {
    columnName: "id",
    coulumnDisplayName: "ID",
    sortable: true,
  },
  {
    columnName: "product_name",
    coulumnDisplayName: "PRODUCT NAME",
    sortable: true,
  },
  {
    columnName: "product_weight",
    coulumnDisplayName: "PRODUCT WEIGHT",
    sortable: true,
  },
  {
    columnName: "price",
    coulumnDisplayName: "PRICE(INR)",
    sortable: true,
  },
  {
    columnName: "calories",
    coulumnDisplayName: "CALORIES",
    sortable: true,
  },
  {
    columnName: "ingredients",
    coulumnDisplayName: "INGREDIENTS",
    sortable: false,
  },
];

export const Home = () => {
  const [allSnacks, setAllSnacks] = useState(snacks);
  const [searchText, setSearchText] = useState("");
  const [columnSorted, setColumnSorted] = useState("");
  const [sortingOrder, setSortingOrder] = useState("");

  //handlers
  const handleSort = (columnName) => {
    if (columnSorted === columnName) {
      setSortingOrder(sortingOrder === "asc" ? "desc" : "asc");
    } else {
      setColumnSorted(columnName);
      setSortingOrder("asc");
    }
  };

  //
  const filteredSnacks = allSnacks.filter((snack) => {
    return (
      snack.product_name.toLowerCase().includes(searchText.toLowerCase()) ||
      snack.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  });

  const sortedSnacks = [...filteredSnacks].sort((a, b) => {
    const columnA = a[columnSorted];
    const columnB = b[columnSorted];

    if (columnA === columnB) return 0;

    if (sortingOrder === "asc") {
      if (typeof columnA === "string") {
        return columnA.localeCompare(columnB);
      } else {
        return columnA - columnB;
      }
    } else {
      if (typeof columnB === "string") {
        return columnB.localeCompare(columnA);
      } else {
        return columnB - columnA;
      }
    }
  });

  const sortOrderIcon =
    sortingOrder === "asc" ? (
      <AiOutlineArrowUp />
    ) : sortingOrder === "desc" ? (
      <AiOutlineArrowDown />
    ) : (
      ""
    );
  console.log(sortOrderIcon);
  console.log(sortingOrder);
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
              {tableHeaderDetails.map(
                ({ columnName, coulumnDisplayName, sortable }) => (
                  <th key={columnName} onClick={() => handleSort(columnName)}>
                    {coulumnDisplayName}
                    <span>
                      {columnSorted === columnName && sortable && sortOrderIcon}
                    </span>
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {sortedSnacks.length > 0 ? (
              sortedSnacks.map(
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
