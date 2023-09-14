import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //   console.log(data);

  return (
    <div>
      {/* Header */}
      <div className="w-[45rem] bg-gray-100 p-4 my-4 shadow-md">
        <div
          className="flex justify-between cursor-pointer"
          onClick={(e) => {
            setShowIndex();
          }}
        >
          <span className="text-lg font-semibold">
            {data?.title} ({data?.itemCards?.length})
          </span>
          {
            showItems ? <span className="text-xl">⬆️</span> : <span className="text-xl">⬇️</span>
          }
        </div>

        {showItems && <ItemList items={data?.itemCards} />}
      </div>

      {/* Body */}
    </div>
  );
};

export default RestaurantCategory;
