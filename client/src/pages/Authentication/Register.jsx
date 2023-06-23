
const Register = () => {
  return (
    <form className="w-full flex flex-col gap-3">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="First Name"
          className="flex-1 h-[2.3rem] rounded-sm px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-green"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="flex-1 h-[2.3rem] rounded-sm px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-green"
        />
      </div>
      <input
        type="email"
        placeholder="Email"
        className="w-full h-[2.3rem] rounded-sm px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-green"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full h-[2.3rem] rounded-sm px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-green"
      />
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="agree"
          className="rounded border-gray-300 focus:ring-primary-green"
        />
        <label htmlFor="agree" className="text-sm">
          Benefits include 15% off your first purchase
        </label>
      </div>
      <button className="w-full bg-primary-green text-white h-[2.3rem] rounded-sm hover:bg-primary-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-green" type="submit">
        Create an Account
      </button>
     
      
      <span className="text-primary-green cursor-pointer">Already have an account? Login</span>
    </form>
  );
};

export default Register;
