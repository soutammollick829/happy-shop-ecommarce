import { FaTrashAlt } from "react-icons/fa";

const CheckOut = ({item}) => {
    const {title, thumbnail, price, description
    } = item;

  return (
      <>
        <div className="bg-base-100 w-[640px] mt-10">
          <div className="flex items-center gap-10">
            <img
              src={thumbnail}
              className="w-32 h-32"
            />
            <div>
              <span className="flex justify-between text-lg"><h1 className="font-bold">{title}</h1>$ {price} <FaTrashAlt className="text-red-400"/></span>
              <p className="py-2 font-medium">{description}</p>
            </div>
          </div>
        </div>
        <hr className="w-[640px]"/>
      </>
  );
};

export default CheckOut;
