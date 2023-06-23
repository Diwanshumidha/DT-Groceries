import CustomizedAccordions from "./Accordian";

const Details = [
  [
    {
      summary: "Shipping destinations",
      details:
        "For now we ship to the following countries: Austria, Belgium, Czech Republic, Lithuania, Luxembourg, Latvia, Slovakia, Hungary, Bulgaria, Romania, Slovenia, Finland, Denmark, Estonia, Netherlands, Germany, France, Great Britain, Croatia, Ireland, Sweden, Italy, Greece, Spain, Portugal and Poland.",
    },
    {
      summary: "Shipping times",
      details:
        "For now we ship to the following countries: Austria, Belgium, Czech Republic, Lithuania, Luxembourg, Latvia, Slovakia, Hungary, Bulgaria, Romania, Slovenia, Finland, Denmark, Estonia, Netherlands, Germany, France, Great Britain, Croatia, Ireland, Sweden, Italy, Greece, Spain, Portugal and Poland.",
    },
    {
      summary: "Tracking your parcel",
      details:
        "For now we ship to the following countries: Austria, Belgium, Czech Republic, Lithuania, Luxembourg, Latvia, Slovakia, Hungary, Bulgaria, Romania, Slovenia, Finland, Denmark, Estonia, Netherlands, Germany, France, Great Britain, Croatia, Ireland, Sweden, Italy, Greece, Spain, Portugal and Poland.",
    },
  ],
  [
    {
      summary: "Shipping destinations",
      details:
        "For now we ship to the following countries: Austria, Belgium, Czech Republic, Lithuania, Luxembourg, Latvia, Slovakia, Hungary, Bulgaria, Romania, Slovenia, Finland, Denmark, Estonia, Netherlands, Germany, France, Great Britain, Croatia, Ireland, Sweden, Italy, Greece, Spain, Portugal and Poland.",
    },
    {
      summary: "Shipping times",
      details:
        "For now we ship to the following countries: Austria, Belgium, Czech Republic, Lithuania, Luxembourg, Latvia, Slovakia, Hungary, Bulgaria, Romania, Slovenia, Finland, Denmark, Estonia, Netherlands, Germany, France, Great Britain, Croatia, Ireland, Sweden, Italy, Greece, Spain, Portugal and Poland.",
    },
  ],
  [
    {
      summary: "Shipping destinations",
      details:
        "For now we ship to the following countries: Austria, Belgium, Czech Republic, Lithuania, Luxembourg, Latvia, Slovakia, Hungary, Bulgaria, Romania, Slovenia, Finland, Denmark, Estonia, Netherlands, Germany, France, Great Britain, Croatia, Ireland, Sweden, Italy, Greece, Spain, Portugal and Poland.",
    },
    {
      summary: "Shipping times",
      details:
        "For now we ship to the following countries: Austria, Belgium, Czech Republic, Lithuania, Luxembourg, Latvia, Slovakia, Hungary, Bulgaria, Romania, Slovenia, Finland, Denmark, Estonia, Netherlands, Germany, France, Great Britain, Croatia, Ireland, Sweden, Italy, Greece, Spain, Portugal and Poland.",
    },
  ],
];

const Delivery_information = () => {
  return (
    <section className=" pt-9">
      <div className="container mx-auto max-w-[700px]">
        <h4 className=" text-primary-green mb-5 text-center sm:text-left px-4">Delivery Information</h4>
        <CustomizedAccordions array={Details[0]} />
        <h5 className=" my-5 font-medium pl-2 text-center sm:text-left px-4">Returns and Refunds</h5>
        <CustomizedAccordions array={Details[1]}/>
        <h5 className=" my-5 font-medium pl-2 text-center sm:text-left px-4">How to choose an urn</h5>
        <CustomizedAccordions array={Details[2]}/>


      </div>
    </section>
  );
};

export default Delivery_information;
