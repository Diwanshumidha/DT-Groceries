const Product_Details_Description = ({Product}) => {
  return (
    <section className=" mt-24 border border-t-2 border-solid border-gray-200 py-6">
       <div className="container mx-auto flex flex-col  ">
            <div className=" mx-auto flex gap-4 ">
                <h6 className=" underline underline-offset-4 ">Description</h6>
                <h6>Reviews (10)</h6>

            </div>
            <p className=" mx-auto px-5  mt-5 lg:mt-8 max-w-[900px]">{Product.Details}</p>
       </div>   
    </section>
  )
}

export default Product_Details_Description