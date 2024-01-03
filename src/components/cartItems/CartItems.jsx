import { FaTrashAlt } from "react-icons/fa";


const CartItems = ({item}) => {
    const {title, thumbnail, price} =item;
    return (
        <>
        <div className="flex gap-5">
            <img className="w-14 lg:w-20 h-16 lg:h-20 mb-5 rounded-lg" src={thumbnail} alt="image" />
            <div className="space-y-2">
                <p>{title}</p>
                <p>$ {price}</p>
                <FaTrashAlt className="text-red-400"/>
            </div>
        </div>
        </>
    );
};

export default CartItems;