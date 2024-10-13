import logo from "/TGProfileLogo.svg";
import likes from "/likes.svg";
import cart from "/cart.svg";
import bell from "/bell.svg";
import toggle from "/toggle.svg";
import menu_toggle from "/menu_toggle.svg"

const Header = () => {
    return (
        <>
            <header className="border-b bg-white font-sans min-h-[60px] px-6 lg:px-60 py-3 tracking-wide relative z-50">
                <div className="flex flex-wrap items-center max-lg:gap-y-6 max-sm:gap-x-4">
                    <div className="text-center font-semibold text-[#e06a93]">
                        <a href="#">
                            <img src={logo} width={'50px'} height={'35px'} alt="Travel Gay Shop" />
                            <span className="text-sm">SHOP</span>
                        </a>
                    </div>

                    <div
                        id="collapseMenu"
                        className="max-lg:hidden lg:!flex lg:items-center max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50"
                    >
                        <button
                            id="toggleClose"
                            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
                        >
                            <img src={menu_toggle} width={'32px'} height={'32px'} alt="toggle" />
                        </button>

                        <ul className="lg:flex lg:gap-x-10 lg:absolute lg:left-1/2 lg:-translate-x-1/2 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                            <li className="mb-6 hidden max-lg:block">
                                <a href="#">
                                    <img src="#" width={'32'} height={'32'} alt="TG Shop logo" />
                                </a>
                            </li>
                            <li className="max-lg:border-b max-lg:py-3">
                                <a
                                    href="#"
                                    className="hover:text-[rgb(198,86,125)] text-[15px] text-[rgb(187,69,111)] block font-bold"
                                >
                                    Products
                                </a>
                            </li>

                            <li className="max-lg:border-b max-lg:py-3">
                                <a
                                    href="#"
                                    className="hover:text-[#e06a93] text-gray-400 font-bold text-[15px] block"
                                >
                                    Team
                                </a>
                            </li>
                            <li className="max-lg:border-b max-lg:py-3">
                                <a
                                    href="#"
                                    className="hover:text-[#e06a93] text-gray-400 font-bold text-[15px] block"
                                >
                                    About
                                </a>
                            </li>
                            <li className="max-lg:border-b max-lg:py-3">
                                <a
                                    href="#"
                                    className="hover:text-[#e06a93] text-gray-400 font-bold text-[15px] block"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center ml-auto space-x-8">
                        <span className="relative">
                            <img src={likes} width={'18px'} height={'18px'} alt="likes" />
                            <span className="absolute left-auto -ml-1 -top-1 rounded-full bg-[#e06a93] px-1 py-0 text-xs text-white">
                                0
                            </span>
                        </span>
                        <span className="relative">
                            <img src={cart} width={'18px'} height={'18px'} alt="cart" />
                            <span className="absolute left-auto -ml-1 -top-1 rounded-full bg-[#e06a93] px-1 py-0 text-xs text-white">
                                4
                            </span>
                        </span>
                        <img src={bell} width={'18px'} height={'18px'} alt="notification"/>

                        <button id="toggleOpen" className="lg:hidden">
                            <img src={toggle} alt="toggle" width={'18px'} height={'18px'} />
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
