import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts } from "../Redux/Slices/ProductSlice";
import { useNavigate } from "react-router-dom";
// import { setMenuRef } from "../Redux/Slices/refSlice"
// import { useRef } from "react";

function Menu({homePage}){
    const dispatch = useDispatch();
    // const menuRef = useRef(null);
    const navigate = useNavigate();  //hook to go back to previous page
    const { productsData } = useSelector((state) => state.product);
    useEffect(() => {
        // This will be called when the component mounts
        dispatch(getAllProducts());
        // dispatch(setMenuRef(menuRef)); // Set the ref in Redux when the component mounts
    }, []);
   
    return(
        <div className="mx-auto">
                <div className="flex flex-wrap justify-center">
                    {productsData.map((item) => {
                        return (
                            item.inStock && (
                                <div className="p-4 md:w-1/3" key={item._id}>
                                    <Link to={`/product/${item._id}`}>
                                        <div className="overflow-hidden border rounded-lg border-opacity-60">
                                            <img 
                                                src={item.productImage}
                                                alt="Pizza Image"
                                                className="object-cover object-center w-full lg:h-48 md:h-36"
                                            />
                                            <div className="p-6 border">
                                                <h2 className="text-xs font-medium tracking-widest text-gray-400 title-font">
                                                    {item.category}
                                                </h2>
                                                <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                                                    {item.productName}
                                                </h1>
                                                <p className="mb-4 text-base leading-relaxed">
                                                    {item.description}
                                                </p>
                                                <p className="text-lg font-medium text-gray-900 title-font">
                                                    Rs {item.price}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        )
                    })}
                </div>
                {!homePage ? (
                    <div className="flex justify-center mt-4 mb-4">
                        <button className="mt-5" onClick={() => navigate(-1)}>
                            <a className="relative inline-block text-sm font-medium text-[#fff] group active:text-yellow-500 focus:outline-none focus:ring">
                            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#EAB308] group-hover:translate-y-0 group-hover:translate-x-0"></span>
                            <span className="relative block px-8 py-3 bg-[#EAB308] border border-current">
                                Go Back
                            </span>
                            </a>
                        </button>
                    </div>
                    ) : null
                }
            </div>
    )
}

export default Menu;