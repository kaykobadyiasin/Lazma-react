import { Link } from "react-router-dom";


const SingleCard = ({ feature }) => {
    return (
        <div>
            <div className="bg-white shadow-lg p-2 rounded-lg my-6">
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1600857062241-98e5dba7f214?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1998&q=80"
                        className="w-full hover:scale-110 transition-all duration-300"
                        alt=""
                    />
                </div>
                <div className="space-y-5 p-2 mt-2">
                    <h1 className="">{feature?.productName}</h1>
                    <p className="text-red font-semibold">৳ {feature?.price}</p>
                </div>
                <Link to='/'>
                    <button className="bg-primary text-white w-full py-2 uppercase mt-3 rounded-md">Order Now</button>
                </Link>
            </div>
        </div>
    );
};

export default SingleCard;