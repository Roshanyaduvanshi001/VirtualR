import { testimonials } from "../constants"


const Testimonial =() => {
  return (
    <div className="mt-20 tracking-wide">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center
        my-10 lg:my-20">
            What people are saying
        </h2>
        <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                    <div className="bg-neutral rounded-md p-6 text-md border border-neutral-700
                    font-thin">
                        <p>{testimonial.text}</p>
                        <div className="flex mt-8 items-start" >
                            <img
                              className="h-12 w-12 rounded-full mr-4 border border-neutral-700"
                              src={testimonial.image} alt={testimonial.user}
                             />
                             <div>
                                <h5>{testimonial.user}</h5>
                                <p className="text-neutral-500 italic">{testimonial.company}</p>
                             </div>
                        </div>

                    </div>
                </div>
            ))}

        </div>
      
    </div>
  )
}

export default Testimonial
