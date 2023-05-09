import { FaRegEye, FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, details, category, photo, supplier, taste } = coffee;

  const handleDelete = (id) => {
    console.log(id);
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
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            const remaining = coffees.filter(cof => cof._id !== _id)
            setCoffees(remaining)
          });
      }
    });
  };

  return (
    <div className="card w-full shadow-xl">
      <div className="flex justify-between gap-4 p-5 bg-base-100 ">
        <div className="flex gap-4 bg-base-100 ">
          <img
            className="w-52"
            // src={photo}
            src="https://cdn.phuket.net/bucket/directory/size/600/400/2022/07/Crypto-Coff.jpg"
            alt="Coffee"
          ></img>
          <div>
            <h2 className="card-title">{name}</h2>
            <p>{chef}</p>
            <p>{category}</p>
            <p>{taste}</p>
          </div>
        </div>
        <div className="btn-group gap-2 btn-group-vertical text-black">
          <button className="btn border-0 bg-yellow-400 ">
            <FaRegEye></FaRegEye>
          </button>
          <Link to={`/updatecoffee/${_id}`}>
            <button className="btn border-0 bg-black-200">
              <FaPen></FaPen>
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn border-0 bg-red-500"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
