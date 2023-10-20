import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
    console.log(`Subscribed with email: ${email}`);
  };

  return (
    <footer className=" py-10 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <h3 className="text-4xl font-semibold text-primary">Lazma</h3>
          <p className="text-gray-300 my-4">
            Elevate your style with our exquisite jewelry collections.
          </p>
          <div className="flex space-x-4 my-6">
            <a href="#" className="text-3xl">
              <Icon icon="akar-icons:instagram-fill" />
            </a>
            <a href="#" className="text-3xl">
              <Icon icon="akar-icons:facebook-fill" />
            </a>
            <a href="#" className="text-3xl">
              <Icon icon="akar-icons:twitter-fill" />
            </a>
            <a href="#" className="text-3xl">
              <Icon icon="akar-icons:youtube-fill" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">CONTACT</h2>
          <div className="flex items-center space-x-2 text-lg">
            <Icon icon="ic:baseline-phone" />
            <p className="text-gray-300">+8809613-100400</p>
          </div>
          <div className="flex items-center space-x-2 text-lg">
            <Icon icon="tabler:mail-filled" />
            <p className="text-gray-300">lazma.bangladesh@gmail.com</p>
          </div>
          <div className="flex space-x-2 text-lg mt-2">
            <Icon icon="mdi:location" className="text-2xl" />
            <p className="text-gray-300 text-justify">
              Address: House 89, Road Senpara Parbata, Mirpur-10, Dhaka - 1216
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center mt-10">
        <h2 className="text-2xl font-bold mb-4">SUBSCRIBE TO OUR NEWSLETTER</h2>
        <form
          className="flex items-center justify-center max-w-sm mx-auto"
          onSubmit={handleSubscribe}
        >
          <input
            type="email"
            className="bg-gray-200 rounded-l-lg py-2 px-4 w-2/3 border"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-primary rounded-r-lg text-white py-2 px-4" type="submit">
            Subscribe
          </button>
        </form>
      </div>

      <div className="bg-secondary-100 py-5">
        <div className="container mx-auto text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Lazma. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
