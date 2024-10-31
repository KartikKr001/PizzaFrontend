import { Link, Navigate, useNavigate } from 'react-router-dom';
import PizzaLogo from '../assets/images/pizza1.png'
import {useDispatch, useSelector}  from 'react-redux'
import { logout } from '../Redux/Slices/AuthSlice';
import CartIcon from '../assets/images/cart.svg'
function Navbar(){

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cartsData } = useSelector(state => state.cart);

    async function handleLogout(e){
        e.preventDefault();
        dispatch(logout());
    }


    return (
        <nav>
            <div className="flex items-center justify-around h-16 text-[#687280] font-mono border-none shadow-md">
                    <div className="flex items-center justify-center" onClick={()=>navigate('/')}>
                        <h3>Pizza App</h3>                        
                        <img src={PizzaLogo} alt="" height={60} width={60}/>
                    </div>

                <div className='hidden md:block'>
                    <ul className='flex gap-4'>
                            <li className='hover:text-[#Ff9110]'>
                                {' '}
                                Menu {' '}
                            </li>
                            <li className='hover:text-[#Ff9110]'>
                                {' '}
                                Services {' '}
                            </li>
                            <li className='hover:text-[#Ff9110]'>
                                {' '}
                                About {' '}
                            </li>
                    </ul>
                </div>
                <div>
                    <ul className='flex gap-4'>
                        <li className='hover:text-[#FF9110]'>
                            {isLoggedIn ? (
                                <Link onClick={handleLogout}>Logout</Link>
                            ) : (
                                <Link to={'/auth/login'}>Login</Link>
                            )}
                        </li>

                        {isLoggedIn && (
                            <Link to={'/cart'}>
                                <li>
                                    <img src={CartIcon} className='w-8 h-8 inline' />
                                    {' '}
                                    {console.log("car: ",cartsData)}
                                    <p className='text-black inline'>{cartsData?.items?.length}</p>
                                </li>
                            </Link>
                            
                        )}
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;