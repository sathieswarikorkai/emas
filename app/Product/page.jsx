import ProductInfo from "@/components/Products/ProductInfo";
import ProductGallery from "@/components/Products/ProductGallery";
import Ingredients from "@/components/Products/Ingredients";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Page = () => {
  return (

    <>

    <Navbar />
    <div className="product-container">
      <div className="product-gallery">
        <ProductGallery />
      </div>

      <div className="product-info">
        <ProductInfo />
      </div>

      <div className="product-ingredients">
        <Ingredients />
      </div>
    </div>


    <Footer />

    </>
  );
};

export default Page;