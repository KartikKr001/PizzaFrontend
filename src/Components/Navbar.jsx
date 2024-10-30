import { Link } from 'react-router-dom';
import PizzaLogo from '../assets/images/pizza1.png'
import {useDispatch, useSelector}  from 'react-redux'
import { logout } from '../Redux/Slices/AuthSlice';

function Navbar(){

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    async function handleLogout(e){
        e.preventDefault();
        dispatch(logout());
    }


    return (
        <nav>
            <div className="flex items-center justify-around h-16 text-[#687280] font-mono border-none shadow-md">
                <div className="flex items-center justify-center">
                    <h3>Pizza App</h3>                        
                    <img src={PizzaLogo} alt="" />
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
                            ):
                            (<Link to='/auth/login'> Login </Link>)}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;