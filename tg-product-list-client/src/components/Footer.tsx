import facebook from "/facebook.svg"
import linkedin from "/linkedin.svg"
import instagram from "/instagram.svg"

const Footer = () => {
    return (
        <>
            <footer className="bg-[#e06a93] py-7 px-8 font-sans tracking-wide mt-auto">
                <div className="flex max-lg:flex-col items-center justify-between gap-6">
                    <ul className="flex flex-wrap justify-center gap-x-6 gap-4">
                        <li>
                            <a
                                href="#"
                                className="text-xl hover:text-gray-400"
                            >
                                <img src={facebook} className="w-8 h-8" alt="Facebook" width={'20px'} height={'20px'} />
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="text-xl hover:text-gray-400"
                            >
                                <img src={linkedin} className="w-8 h-8" alt="Linkedin" width={'20px'} height={'20px'} />
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="text-xl hover:text-gray-400"
                            >
                                <img src={instagram} className="w-8 h-8" alt="Instagram" width={'20px'} height={'20px'} />
                            </a>
                        </li>
                    </ul>

                    <p className="text-base text-gray-300  max-lg:order-1">
                        © TGShop. All rights reserved.
                    </p>
                    <ul className="flex gap-x-6 gap-y-2 flex-wrap">
                        <li>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white text-base"
                            >
                                Terms of Service
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white text-base"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white text-base"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
};

export default Footer;
