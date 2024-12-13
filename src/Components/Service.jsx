import cook from '../assets/images/a cook making pizza.png'
import Check  from '../Components/Check'
import enjoy from  '../assets/images/enjoy.png'
import pickup from '../assets/images/pickup.png'
import order from '../assets/images/orderFood.png'

function Service(){
    return (
        <section className="py-4 mt-6 bg-gradient-to-r from-amber-50 to-orange-300">
                <div className="container flex flex-col md:flex-row">
                    <div className="flex flex-col items-center justify-center rounded-lg lg:w-1/2">
                        <img src={cook} alt="cooking image" width={500} className="rounded-lg"/>
                    </div>


                    <div className="flex flex-col flex-wrap text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left">
                        <div className="flex flex-col items-center lg:items-start">
                            <div>
                                <h2 className="mb-2 text-5xl font-extrabold text-transparent title-font bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text">Cooked by the best <br /> Chefs in the world</h2>
                                <p className="text-base leading-relaxed text-[#6b7280]">There are many benefits regarding to that but the main one's are :</p>
                            </div>
                        </div>

                        <div className="w-full p-1">
                            <div className="flex items-center h-full p-2 text-2xl rounded">
                                <Check className="text-[#F38339] w-10 h-10 mr-4"/> 
                                <span className="text-[#000] font-bold title-font">Perfect Taste</span>
                            </div>

                        </div>

                        <div className="w-full p-1">
                            <div className="flex items-center h-full p-2 text-2xl rounded">
                                <Check className="text-[#F38339] w-10 h-10 mr-4"/> 
                                <span className="text-[#000] font-bold title-font">Prepared Quickly</span>
                            </div>
                        </div>

                        <div className="w-full p-1">
                            <div className="flex items-center h-full p-2 text-2xl rounded">
                                <Check className="text-[#F38339] w-10 h-10 mr-4"/> 
                                <span className="text-[#000] font-bold title-font">Food Hygine Guaranteed</span>
                            </div>
                        </div>

                        <div className="px-5 py-4 mx-auto">
                            <div className="flex justify-center py-4">
                                <div className="inline-flex w-16 h-1 bg-yellow-500 rounded-full"></div>
                            </div>

                            <div className="flex flex-wrap space-y-6 md:space-y-0">
                                <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                                        <img src={order} alt="" />
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="mb3 tex-lg font-medium text-gray-900 title-font">Order Food</h2>
                                        <p className="text-base leading-relaxed">As easy as 1, 2, 3. Just select your favourite pizza and place your order</p>
                                    </div>
                                </div>          
                                <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                                        <img src={pickup} alt="" />
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="mb3 tex-lg font-bold text-gray-900 title-font">Pickup Food</h2>
                                        <p className="text-base leading-relaxed">Pickup your food the nearest store or get it delivered to your doorstep</p>
                                    </div>
                                </div>          
                                <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                                        <img src={enjoy} alt="" />
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="mb3 tex-lg font-bold text-gray-900 title-font">Enjoy Food</h2>
                                        <p className="text-base leading-relaxed">As soon as you get the delicious pizza enjoy it with your loved ones</p>
                                    </div>
                                </div>          
                            </div>    
                    
                        </div>

                    </div>
                </div>
            </section>
    )
}
export default Service;