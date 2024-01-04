import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const CheckOut = ({ item }) => {
  const {_id, title, thumbnail, price, description } = item;
  const [, refetch] = useCart();

  //handel delete function here start...
  const handelDelete = (item) => {
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
      <div className="bg-base-100 w-[640px] mt-10">
        <div className="flex items-center gap-10">
          <img src={thumbnail} className="w-32 h-32" />
          <div>
            <span className="flex justify-between text-lg">
              <h1 className="font-bold">{title}</h1>$ {price}
              <button onClick={() => handelDelete(item)}>
                <FaTrashAlt className="text-red-400" />
              </button>
            </span>
            <p className="py-2 font-medium">{description}</p>
          </div>
        </div>
      </div>
      <hr className="w-[640px]" />
    </>
  );
};

export default CheckOut;
