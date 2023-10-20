import Banner from "../../../../Components/Banner/Banner";
import NavLists from "../../../../Components/NavLists/NavLists";
import TopCategories from "../TopCategories/TopCategories";
import BestSelling from "./BestSelling/BestSelling";
import FeatureProduct from "./FeatureProduct/FeatureProduct";
import Health from "./Health/Health";
import Kitchen from "./Kitchen/Kitchen";
import NewProducts from "./NewProducts/NewProducts";

const Home = () => {
    return (
        <div className="bg-bgPrimary py-5">
            <div className="container mx-auto min-h-screen">
                <div className="flex items-stretch">
                    <div className="lg:w-full lg:block md:hidden hidden flex-grow">
                        <NavLists />
                    </div>
                    <div className="lg:w-10/12 w-full">
                        <Banner />
                    </div>
                </div>
                <div className="my-5">
                    <TopCategories />
                </div>
                <div className="my-5 flex lg:flex-row flex-col gap-5 ">
                    <div className="lg:w-6/12"><FeatureProduct /></div>
                    <div className="lg:w-6/12"><NewProducts /></div>
                </div>
                <div className="py-5">
                    <img src="https://apii.lazma.com/public/settings/BWuYRJJa5W28nM4KO2i.jpg" className="w-full" alt="" />
                </div>
                <div className="my-5">
                    <Kitchen />
                </div>
                <div className="my-5">
                    <Health />
                </div>

                <div className="flex gap-5 py-5">
                    <div className="w-full"><img src="https://apii.lazma.com/public/settings/_9h9xOBSDFDWHr6wtka.jpg" className="w-full" alt="" /></div>
                    <div className="w-full"><img src="https://apii.lazma.com/public/settings/kEY0YzkdJsbQwPqfkMx.jpg" className="w-full" alt="" /></div>
                </div>

                <div className="my-5">
                    <BestSelling />
                </div>
            </div>
        </div>
    );
};

export default Home;
