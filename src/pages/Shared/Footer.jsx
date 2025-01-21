import React from 'react';
import logo from '../../assets/l&f-small.png';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and About */}
                <div className="flex flex-col items-center md:items-start">
                    <img src={logo} alt="WhereIsIt Logo" className="w-16 h-16 mb-3" />
                    <h1 className="text-3xl font-bold text-[#C57478] mb-2">WhereIsIt</h1>
                    <p className="text-sm text-gray-400 text-center md:text-left">
                        A platform to connect people who have lost or found items. Let’s help each other and make the world a little better.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
                    <ul className="space-y-2">
                        <li><a className="text-gray-400 hover:text-white transition">Report Lost Item</a></li>
                        <li><a className="text-gray-400 hover:text-white transition">Report Found Item</a></li>
                        <li><a className="text-gray-400 hover:text-white transition">Browse Items</a></li>
                        <li><a className="text-gray-400 hover:text-white transition">FAQs</a></li>
                    </ul>
                </div>

                {/* Company Links */}
                <div>
                    <h6 className="text-lg font-semibold mb-4">Company</h6>
                    <ul className="space-y-2">
                        <li><a className="text-gray-400 hover:text-white transition">About Us</a></li>
                        <li><a className="text-gray-400 hover:text-white transition">Contact</a></li>
                        <li><a className="text-gray-400 hover:text-white transition">Careers</a></li>
                        <li><a className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div>
                    <h6 className="text-lg font-semibold mb-4">Connect with Us</h6>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="fill-current text-gray-400 hover:text-white transition">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                        <a href="https://x.com/?lang=en&mx=2" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="fill-current text-gray-400 hover:text-white transition">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="fill-current text-gray-400 hover:text-white transition">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-10 text-center border-t border-gray-700 pt-4 text-sm text-gray-400">
                &copy; {new Date().getFullYear()} WhereIsIt. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
