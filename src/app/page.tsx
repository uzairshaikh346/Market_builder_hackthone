import Image from "next/image";
import Banner from "./components/Banner";
import EditorPick from "./components/EditorPickup";
import ProductSection from "./components/ProductSection";
import ProductShowcase from "./components/Card";
import FeaturedProduct from "./components/FeatureProduct";
import FeaturedPosts from "./components/FeaturePosts";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Banner/>
      <EditorPick/>
      <ProductSection/>
      <ProductShowcase/>
      <FeaturedProduct/>
      <FeaturedPosts/>
    </main>
  );
}
