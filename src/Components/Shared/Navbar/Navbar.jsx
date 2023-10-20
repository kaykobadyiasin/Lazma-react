import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavLists from "../../NavLists/NavLists";

const Navbar = () => {
    const [navList, setNavList] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);

    // Sample search suggestions (you can fetch real data from an API)
    const searchSuggestions = [
        "Jewelry",
        "Watches",
        "Accessories",
        "Necklaces",
        "Rings",
    ];

    const handleNavList = () => {
        setNavList(!navList);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // Implement your search logic here
        console.log("Searching for:", searchQuery);
        setShowSuggestions(false);
    };

    const handleSearchInputChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query) {
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchQuery(suggestion);
        setShowSuggestions(false);
    };

    return (
        <div>
            <div className="container mx-auto my-5">
                <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center w-full mt-4 lg:mt-0">
                    <div className="flex lg:flex-row md:flex-row flex-col items-center space-y-6 md:space-y-0 space-x-6">
                        {/* Logo */}
                        <Link to="/">
                            <h3 className="text-4xl font-semibold text-primary">Lazma</h3>
                        </Link>
                        {/* Search Bar */}
                        <form
                            className="relative lg:w-96 md:w-full w-full mx-auto"
                            onSubmit={handleSearch}
                        >
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    className="bg-gray-200 border-2 border-transparent text-gray-900 text-sm rounded-lg pl-4 pr-8 py-2.5 focus:ring-2 focus:ring-primary focus:border-transparent block w-full dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:border-2 dark:border-transparent dark:focus:ring-blue-500"
                                    placeholder="Search for products..."
                                    required
                                    value={searchQuery}
                                    onChange={handleSearchInputChange}
                                />
                                <button
                                    type="submit"
                                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                                >
                                    <Icon icon="mdi:arrow-right" className="w-5 h-5 text-primary" />
                                </button>
                            </div>
                            {showSuggestions && (
                                <ul className="absolute z-40 left-0 right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
                                    {searchSuggestions.map((suggestion, index) => (
                                        <li
                                            key={index}
                                            className="p-2 cursor-pointer hover:bg-lightGray"
                                            onClick={() => handleSuggestionClick(suggestion)}
                                        >
                                            {suggestion}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </form>
                    </div>
                    <div className="flex items-center space-x-4 lg:mt-0 mt-5 order-last">
                        {/* User Login Icon */}
                        <Link
                            to="/login"
                            className="hover:text-primary-100 transition-all duration-200"
                        >
                            <Icon icon="mdi:account" className="text-3xl" />
                        </Link>
                        {/* Cart Icon */}
                        <Link
                            to="/cart"
                            className="hover:text-primary-100 transition-all duration-200"
                        >
                            <Icon icon="mdi:cart" className="text-3xl" />
                        </Link>
                        {/* Toggle Icon */}
                        <Icon
                            onClick={handleNavList}
                            icon="ph:list-bold"
                            className="text-3xl lg:hidden cursor-pointer hover:text-primary-100 transition-all duration-200"
                        />
                    </div>
                </div>
            </div>

            <div className={`lg:hidden ${navList ? "block" : "hidden"}`}>
                <NavLists />
            </div>
        </div>
    );
};

export default Navbar;
