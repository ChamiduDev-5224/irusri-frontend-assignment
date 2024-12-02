import React from "react";

export const Footer: React.FC = () => {
  return (
    <div>
      {/* Footer Content */}
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="text-2xl font-bold">ECOM.CO</h3>
            <p className="text-gray-600 mt-2">
              We have clothes that suit your style and which you are proud to
              wear. From women to men
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-500">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-500">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 ">
            <h4 className="text-lg font-bold mb-4">COMPANY</h4>
            <ul className="text-gray-600 space-y-2">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Works</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h4 className="text-lg font-bold mb-4">HELP</h4>
            <ul className="text-gray-600 space-y-2">
              <li>
                <a href="#">Customer Support</a>
              </li>
              <li>
                <a href="#">Delivery Details</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h4 className="text-lg font-bold mb-4">FAQ</h4>
            <ul className="text-gray-600 space-y-2">
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Manage Deliveries</a>
              </li>
              <li>
                <a href="#">Orders</a>
              </li>
              <li>
                <a href="#">Payments</a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h4 className="text-lg font-bold mb-4">RESOURCES</h4>
            <ul className="text-gray-600 space-y-2">
              <li>
                <a href="#">Free eBooks</a>
              </li>
              <li>
                <a href="#">Development Tutorial</a>
              </li>
              <li>
                <a href="#">How-to Blog</a>
              </li>
              <li>
                <a href="#">YouTube Playlist</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t pt-6 flxc md:flxr justify-between items-center text-gray-500 text-sm">
          <p>ECOM.CO © 2024, All Rights Reserved Developed By Chamidu Purage</p>
          <div className="flex">
            <img
              src="/icons/cards/visa.svg"
              className="w-24 md:w-60 lg:w-80"
              alt="Visa"
              width={80}
              height={80}
            />
            <img
              src="/icons/cards/master.svg"
              className="w-24 md:w-60 lg:w-80"
              alt="MasterCard"
              width={80}
              height={80}
            />
            <img
              src="/icons/cards/paypal.svg"
              className="w-24 md:w-60 lg:w-80"
              alt="PayPal"
              width={80}
              height={80}
            />
            <img
              src="/icons/cards/apple.svg"
              className="w-24 md:w-60 lg:w-80"
              alt="Apple Pay"
              width={80}
              height={80}
            />
            <img
              src="/icons/cards/google.svg"
              className="w-24 md:w-60 lg:w-80"
              alt="Google Pay"
              width={80}
              height={80}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
