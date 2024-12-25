import useAxiosPublic from './../../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const AddService = () => {
  const axiosPublic = useAxiosPublic();
  const image_hosting_api = "https://api.imgbb.com/1/upload?expiration=600&key=4fc956d34ad8f4a1ce04e663e1606a83";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.name.value;
    const description = form.description.value;
    const price = form.price.value;
    const logoFile = form.image.files[0];

    if (!logoFile) {
      Swal.fire({
        title: 'Error!',
        text: 'Please upload an image.',
        icon: 'error',
      });
      return;
    }

    try {
      // Upload image to ImgBB
      const formData = new FormData();
      formData.append('image', logoFile);

      const imgResponse = await fetch(image_hosting_api, {
        method: 'POST',
        body: formData,
      });

      const imgData = await imgResponse.json();

      if (imgData.success) {
        const imageUrl = imgData.data.url;

        // Prepare service data
        const serviceInfo = {
          title,
          description,
          logo: imageUrl,
          price,
        };

        // Send service data to the database
        const res = await axiosPublic.post('/services', serviceInfo);

        if (res.data.insertedId) {
          Swal.fire({
            title: 'Service added successfully!',
            text: 'Your service has been submitted.',
            icon: 'success',
          });
          form.reset();
        }
      } else {
        throw new Error('Image upload failed. Please try again.');
      }
    } catch (err) {
      Swal.fire({
        title: 'Error!',
        text: err.message,
        icon: 'error',
      });
    }
  };

  return (
    <div className="min-h-screen rounded-2xl flex justify-start items-start py-10 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full">
        <h2 className="lg:text-2xl font-bold text-center text-gray-800 mb-6">
          Submit Your Service
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="lg:grid grid-cols-3 gap-4">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-600 mb-1"
              >
                Service Title
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your service title"
                className="w-full border border-gray-300 rounded-lg p-2 text-gray-800 focus:ring focus:ring-[#F63E7B] focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-sm font-semibold text-gray-600 mb-1"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                placeholder="Enter the service price"
                className="w-full border border-gray-300 rounded-lg p-2 text-gray-800 focus:ring focus:ring-[#F63E7B] focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-sm font-semibold text-gray-600 mb-1"
              >
                Upload Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                className="w-full border border-gray-300 rounded-lg p-2 text-gray-800 focus:ring focus:ring-[#F63E7B] focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-gray-600 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Write your description here..."
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-2 text-gray-800 focus:ring focus:ring-[#F63E7B] focus:outline-none"
              required
            ></textarea>
          </div>

          <div className='flex justify-end items-end'>
            <button
              type="submit"
              className="bg-[#F63E7B] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#e22d6c] transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
