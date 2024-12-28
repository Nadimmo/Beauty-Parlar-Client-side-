import useAxiosPublic from '../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const SubmissionForm = () => {
    const axiosPublic = useAxiosPublic()



    const handlerSubmit = (e)=>{
      e.preventDefault()
      const from = e.target;
      const firstName = from.firstName.value;
      const lastName = from.lastName.value;
      const email = from.email.value;
      const phone = from.phone.value;
      const message = from.message.value;
      const userInfo = {
        name: firstName+ " "+ lastName,
        email,
        phone,
        message,
      }
      axiosPublic.post('/contact',userInfo)
      .then(res=>{
        if(res.data.insertedId){
          Swal.fire({
            title: 'Message sent successfully!',
            text: 'We will get back to you shortly.',
            icon:'success',
          })
          from.reset()
        }
      })
      .catch(err=>{
        Swal.fire({
          title: 'Failed to send message!',
          text: 'Please try again later.',
          icon:'error',
        })
      })
  
    }
  

    return (
        <div className="mt-28 p-10 bg-[#fff8f5] shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center text-[#F63E7B]">Submission Form</h2>
            <form onSubmit={handlerSubmit} className="space-y-4 lg:w-1/2 mx-auto">
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                required
                                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                required
                                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-52 py-2 px-4 bg-[#F63E7B] text-white font-semibold rounded-md hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SubmissionForm;
