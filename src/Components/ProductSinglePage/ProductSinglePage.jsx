import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductSinglePage = () => {
    const { _id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('/public/featureProducts.json')
            .then((res) => res.json())
            .then((data) => setProduct(data?.find((produc) => produc?._id == _id)))
            .catch((error) => {
                console.error("Error fetching product:", error);
            });
    }, [_id]);

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            {product ? (
                <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
                    <div className="flex gap-5">
                        <div className="w-1/2">
                            <img
                                src={product?.image}
                                className="w-full rounded-lg image-magnify" // Add the "image-magnify" class
                                alt={product?.productName}
                            />
                        </div>
                        <div className="w-1/2 space-y-5">
                            <h2 className="text-3xl font-semibold">{product?.productName}</h2>
                            <h4 className="text-green-600 text-2xl font-bold">৳ {product?.price}</h4>
                            <p className="text-gray-600 mt-2">Product Description: {product?.description}</p>
                            <div className="flex items-center mt-4">
                                <p className="text-gray-700 mr-2">Quantity: 0</p>
                                <button className="bg-primary text-white px-4 py-2 rounded-lg">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center mt-20">
                    <Icon icon="eos-icons:loading" className="text-5xl" />
                </div>
            )}
        </div>
    );
};

export default ProductSinglePage;
