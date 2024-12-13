import IconArrowRight from "../Components/IconRightArrow";
import pizzaImage from '../assets/images/pizza.png'

import About from "../Components/About";
import Layout from "../Layout/Layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import 
import Menu from "../Components/Menu";
import Service from "../Components/Service";
import { Link } from "react-router-dom";
// import { setServiceRef,setAboutRef,setMenuRef } from "../Redux/Slices/refSlice";


function Home(){
    // const menuRef = useRef(null);
    // const serviceRef = useRef(null);
    // const aboutRef = useRef(null);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(setMenuRef(menuRef));
    //     dispatch(setServiceRef(serviceRef));
    //     dispatch(setAboutRef(aboutRef));
    // }, []);
    const { productsData } = useSelector((state) => state.product);
    
    return (
        <Layout>
            {/* Hero Section */}
            <section className="flex flex-col-reverse items-center justify-center py-5 md:flex-row md:gap-7 bg-gradient-to-r from-amber-50 to-orange-300">
                <div className="w-4/6 nl-4 text-center md:w-2/6 md:text-left">
                    <div className="flex justify-center text-4xl md:justify-normal">
                        <h1 className="pb-5 font-bold text-transparent bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text">
                            Enjoy the Slice {' '}
                        </h1>
 
                        <h1>
                            😋
                        </h1>

                    </div>
                    <p className="pb-4 text-[#6b7428]">
                        The Pizza App let you order your favourite pizza from the comfort of your home, Enjoy the best pizza in town with just few clicks
                    </p>
                    <Link to={'/menu'}>
                        <button className="flex items-center px-4 py-2 text-white bg-orange-400 rounded-md hover:bg-orange-500 group">
                            Order Now
                            <span className="inline-block ml-3 transition-transform ease-in-out group-hover:translate-x-2">
                                <IconArrowRight />
                            </span>
                        </button>
                    </Link>
                </div>

                <div>
                    <img src={pizzaImage}
                    alt="Pizza"
                    width={550}
                    height={550}
                    />
                </div>
            </section>

            <Service homePage={true}/>

            <About homePage={true}/>

            <Menu flag={productsData == []} homePage = {true}/>
            

        </Layout>
    );
}

export default Home;