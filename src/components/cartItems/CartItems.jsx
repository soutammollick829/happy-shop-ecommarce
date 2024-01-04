import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";


const CartItems = ({item}) => {
    const {title, thumbnail, price} =item;

    const [, refetch] = useCart();

  //handel delete function here start...
  const handelDelete = (item) => {
    console.log(item)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
//handel delete function here close

    return (
        <>
        <div className="flex gap-5">
            <img className="w-14 lg:w-20 h-16 lg:h-20 mb-5 rounded-lg" src={thumbnail} alt="image" />
            <div className="space-y-2">
                <p>{title}</p>
                <p>$ {price}</p>
                <button onClick={()=> handelDelete(item)}><FaTrashAlt className="text-red-400"/></button>
            </div>
        </div>
        </>
    );
};

export default CartItems;