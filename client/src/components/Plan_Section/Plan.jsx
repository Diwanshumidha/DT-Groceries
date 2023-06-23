

const Plan = () => {
  return (
    <section className="p-4 lg:p-8 bg-primary-green dark:text-gray-100">
    <div className="container mx-auto space-y-12 ">
    <div className="flex flex-col overflow-hidden  shadow-sm md:flex-row">
			<img src="https://source.unsplash.com/featured/300x201" alt="" className="h-80 rounded-lg  dark:bg-gray-500 w-full sm:aspect-video md:w-[370px]  " />
			<div className="flex flex-col justify-center flex-1 p-6 lg:pl-16  ">
				<h3 className="text-3xl font-bold">7am to 7pm. We got you.</h3>
				<p className="my-6 dark:text-gray-100">Start your day with a dose of delicious goodness — nutrient-packed options built on organic fruits + veggies.</p>
				<button type="button" className="self-start border px-3 py-3">Choose Your Plan</button>
			</div>
		</div>
    </div>
    </section>
  )
}

export default Plan