import PizzaLogo from '../assets/images/pizza1.png'
function Navbar(){
    return (
        <nav>
            <div className="flex items-center justify-around h-16 text-[#687280] font-mono border-none shadow-md">
                <div className="flex items-center justify-center">
                    <h3>Pizza App</h3>                        
                    <img src={PizzaLogo} alt="" />
                </div>
                <div>
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
                </div>
            </div>
        </nav>
    );
}

export default Navbar;