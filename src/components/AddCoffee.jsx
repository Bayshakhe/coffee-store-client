import Swal from 'sweetalert2'

const AddCoffee = () => {
  
    const handleAddCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name, chef, supplier, taste, category, details, photo};

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  form.reset();
            }
            console.log(data)
        })
        console.log(newCoffee)
    }
  return (
    <div className="p-5 md:px-32 md:py-16 bg-gray-200">
      <h2 className="text-4xl font-semibold mb-3">Add a Coffee</h2>

      <form onSubmit={handleAddCoffee}>
        {/* Coffee name and Chef name */}
        <div className="md:flex justify-between gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Coffee</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Enter Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Chef</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="chef"
                placeholder="Enter Coffe Chef"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* supplier and taste */}
        <div className="md:flex justify-between gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee Supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                placeholder="Enter Coffee taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* Category and Details*/}
        <div className="md:flex justify-between gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Enter Coffee Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="Enter Coffe Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* photo */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Photo</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="photo"
              placeholder="Enter Photo URL"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <button className="input input-bordered w-full mt-5 bg-gray-400 font-bold">
          Add Coffee
        </button>
      </form>
    </div>
  );
};

export default AddCoffee;
