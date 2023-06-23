const Adress = () => {
  return (
    <div className=" w-full flex gap-7 md:gap-12 flex-col md:flex-row lg:flex-col p-4">
      <div className=" ml-4 flex flex-col gap-2 flex-shrink-0 flex-grow basis-0">
        <h5 className=" text-primary-green font-medium">Address</h5>
        <p>8425 Melrose Ave, Los Angeles, CA 90069</p>
      </div>
      <div className=" ml-4 flex flex-col gap-2 flex-shrink-0 flex-grow basis-0">
        <h5 className="text-primary-green font-medium">Contact</h5>
        <p>Phone.  +1 970 429 4170</p>
        <p>Email.  hello@uxper.co</p>

      </div>
      <div className=" ml-4 flex flex-col gap-2 flex-shrink-0 flex-grow basis-0">
        <h5 className="text-primary-green font-medium">Hour of Operation</h5>
        <p>Mon - Fri: 08:30 - 20:00</p>
        <p>Sat & Sun: 09:30 - 21:30</p>

      </div>
      <div></div>
    </div>
  );
};

export default Adress;
