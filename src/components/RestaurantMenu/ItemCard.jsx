import { IMG_URL } from "../../util/constant";

const ItemCard = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 border-b-1 border-gray-300 flex mb-2 items-center"
        >
          <div className="w-9/12 py-2">
            <span className="font-bold text-md">{item?.card?.info?.name}</span>
            <span className="text-slate-700">
              ₹-
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </span>
            <p>{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-2">
            <img
              src={IMG_URL + item?.card?.info?.imageId}
              className="w-40 rounded-lg shadow-lg"
            />
            <button className="p-2 bg-white text-green-600 font-bold rounded-lg border-grey-100 cursor-pointer hover:bg-slate-200 relative -top-5 -right-10">
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
