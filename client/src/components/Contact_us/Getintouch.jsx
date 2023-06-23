const Getintouch = () => {
    return (
      <div className="w-full flex flex-col p-4">
        <h4 className="text-primary-green font-medium my-2">Get in Touch</h4>
        <p>Your email address will not be published. Required fields are marked *</p>
        <form action="post" className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6 sm:max-w-[600px] lg:max-w-[640px]">
          <div className="flex gap-5 flex-col">
            <input
              type="text"
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-primary-green"
              placeholder="Name"
            />
            <input
              type="text"
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-primary-green"
              placeholder="Email"
            />
          </div>
          <div className="flex gap-5 flex-col">
            <input
              type="text"
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-primary-green"
              placeholder="Phone"
            />
            <input
              type="text"
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-primary-green"
              placeholder="Subject"
            />
          </div>
          <textarea
            cols={10}
            rows={7}
            className="lg:col-span-2 border-gray-500 px-4 py-2 border focus:outline-none focus:border-primary-green"
            placeholder="Message"
          />
        </form>
      </div>
    );
  };
  
  export default Getintouch;
  