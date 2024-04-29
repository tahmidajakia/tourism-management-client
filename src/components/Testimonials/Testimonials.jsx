import img1 from '../../assets/test1.jpg'

const Testimonials = () => {
    return (
        <div>
            <h1 className='text-center text-4xl font-semibold mt-12 mb-10'>What People say about us</h1>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center ">
                <div className="bg-green-50 p-10 mx-auto space-y-5">
                   <div className='flex justify-center'>
                   <img className='w-1/5 rounded-full' src={img1} alt="" />
                   </div>
                    <h2>Kam Sing L</h2>
                    <div className="rating rating-md ">
                     <input type="radio" name="rating-8" className="mask mask-star-2  bg-orange-400" />
                     <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                     <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                     <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                     <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p>We Stayed 18 days in Bangladesjh and choose Travelo for the first half of our trip to tour this beautifiul country . We are a family of 4 and I must say that everybody was delighted weith the trip and the service of our guide Mr. Rakib . My best vacation ever. Thanks again so much.I will definitely visit Bangladesh again and procure their services again.</p>

                </div>
                <div className="bg-green-50 p-10 space-y-5">
                <div className='flex justify-center'>
                   <img className='w-1/5 rounded-full' src={img1} alt="" />
                   </div>
                    <h2>Maggie E</h2>
                    <div className="rating rating-md ">
                     <input type="radio" name="rating-8" className="mask mask-star-2  bg-orange-400" />
                     <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                     <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                     <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                     <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p>I cannot praise Travelo enough for their professionality, responsive communication, general friendliness and selfless personalized support.We toured around the bangladesh, its a photograph trip, we did able to went everywhere we need to, with the limitation of the capabilities. We have fallen in love with Bangladesh.
</p>

                </div>
                <div className="bg-green-50 p-10 space-y-5">
                <div className='flex justify-center'>
                   <img className='w-1/5 rounded-full' src={img1} alt="" />
                   </div>
                    <h2>Sabbyismail</h2>
                    <div className="rating rating-md ">
                     <input type="radio" name="rating-8" className="mask mask-star-2  bg-orange-400" />
                     <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                     <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                     <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                     <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p>We are extremely satisfied with the service provided by Travelo. We felt very safe throughout the journey in Bangladesh.They always checked on us and ensure that we are feeling comfortable.I would definitely recommend Travelo to whoever is interested in visiting Bangladesh as you will be contented with the service and the company of Travelo.I would totally give PathFriend 5 star.</p>

                </div>
            </div>
        </div>
    );
};

export default Testimonials;