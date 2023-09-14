import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
//   console.log(items);
  return items.map((item) => (
    <div
      key={item?.card?.info?.id}
      className="p-3 m-2 border-b-2 border-gray-300 flex justify-between"
    >
      <div className="w-9/12">
        <div>
          <span>{item?.card?.info?.name}</span>
          <span>
            {" "}
            - ₹
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </span>
        </div>
        <p className="text-xs text-gray-500 py-2">
          {item?.card?.info?.description}
        </p>
      </div>

      {item?.card?.info?.imageId ? (
        <div className="w-3/12 h-24">
          <div className="absolute bg-black text-white py-1 px-4 rounded-lg mt-16 ml-[3.5rem]">
            <button>Add +</button>
          </div>
          <img
            src={CDN_URL + item?.card?.info?.imageId}
            className="w-full h-full ml-4 rounded-md"
          />
        </div>
      ) : null}
    </div>
  ));
};

export default ItemList;
