import faq from '../../assets/faqq.png'

const FrequentlyAsked = () => {
    return (
        <div className='bg-green-100 mb-12 mt-16'>
            <div className='text-center p-6'>
            <h1 className='text-4xl font-semibold mt-3 mb-3 '>Frequently Asked Question</h1>
            <p>Read the answers to some of the most popular questions.</p>
            </div>
            <div className='grid md:grid-cols-2'>
                <div>
                <div className="mb-10 mt-10 space-y-4 ml-10">
            <div className="collapse collapse-arrow bg-green-200">
              <input type="radio" name="my-accordion-2" defaultChecked /> 
              <div className="collapse-title text-xl font-medium">
                I am traveling for the first time ,what should I know?
             </div>
              <div className="collapse-content"> 
                <p>Don’t forget your passport at home. Haha! Seriously. Get a checklist of the documents you need and go through them before your trip. Arrive at the airport 3 hours prior to departure. You cannot carry liquids more than 100ml in your carry on.</p>
                     </div>
              </div>
             <div className="collapse collapse-arrow bg-green-200">
              <input type="radio" name="my-accordion-2" /> 
                 <div className="collapse-title text-xl font-medium">
                 Where do I stay when I travel?
                      </div>
                    <div className="collapse-content"> 
                     <p>There are several options; Hotel, Hostel, AirBnB, Couchsurfing. It depends on you, your preference, and your budget. Couchsurfing is basically crashing on the bed of a local for free. You will have to use your good judgement for this. AirBnB is like renting a house or apartment for a couple of days. You can use my code to get $45 off your first booking.</p>
                 </div>
                  </div>
                 <div className="collapse collapse-arrow bg-green-200">
                   <input type="radio" name="my-accordion-2" /> 
                  <div className="collapse-title text-xl font-medium">
                  Is traveling dangerous and how do I know if the country I want to visit is safe?
                   </div>
                  <div className="collapse-content"> 
                  <p>Travel isn’t necessarily dangerous as long as you find a way to stay safe. Incidents can happen anywhere, including your home country. If you are planning to visit a country, you can check here to see if there is a security warning in the area before you head there. Stay safe, people!</p>
                  </div>
            </div>
            <div className="collapse collapse-arrow bg-green-200">
              <input type="radio" name="my-accordion-2" defaultChecked /> 
              <div className="collapse-title text-xl font-medium">
              I want to travel solo. Any tips?
             </div>
              <div className="collapse-content"> 
                <p>Know that you can do it. Do your research about the country you are visiting. Update a loved one about your whereabout. Never admit to anyone you are traveling solo (for safety reasons) Take a selfie-stick or tripod for bomb photos. Here’s a great guide to traveling solo.</p>
                     </div>
              </div>
             <div className="collapse collapse-arrow bg-green-200">
              <input type="radio" name="my-accordion-2" /> 
                 <div className="collapse-title text-xl font-medium">
                 Where should I go on vacation with my significant other?
                      </div>
                    <div className="collapse-content"> 
                     <p>To me, there is no right or wrong answer to this question. It all depends on the type of couple you and your significant other are! If your idea of an ideal vacation is pink sand and clear water, an island like Aruba or the Bahamas may be best. If you and your bae are more into hiking and the outdoors, places like Oregon, Utah, and Colorado may be best! The best way to figure out a vacation with your significant other is to sit down with them and make a list of what your ideal vacation would be. What would you do on the day-to-day, and what would you see? What is your budget, and what do you want the weather to be like? Once you have these questions answered, I guarentee you will be much closer to picking a perfect spot than you were before. </p>
                 </div>
                  </div>
                 <div className="collapse collapse-arrow bg-green-200">
                   <input type="radio" name="my-accordion-2" /> 
                  <div className="collapse-title text-xl font-medium">
                  Where is the cheapest international place I can travel with a big group of friends?
                   </div>
                  <div className="collapse-content"> 
                  <p>Whenever I get this question I immediately think of Southeast Asia. I am talking Indonesia, Thailand, Vietnam, etc. While these countries may carry a heftier flight price, they are cheap once you arrive.That is why why it is best to spend a week or more in these countries and then go home! One of the cheapest places I have ever been to was Bali. While that flight was around $850, I spent less than $500 when it came to accomodations, food, and excursions! </p>
                  </div>
            </div>
        </div>

                </div>
                <div>
                    <img className='pt-20 pb-10' src={faq} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FrequentlyAsked;