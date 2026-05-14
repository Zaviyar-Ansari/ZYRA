/*
 * Copyright (c) - All Rights Reserved.
 *
 * See the LICENSE file for more information.
 */
import Hero from "../components/layout/Hero";
import GenderProductSection from "../components/products/GenderProductSection";
import NewArrivals from "../components/products/NewArrivals";
import ProdcutDetails from "../components/products/ProductsDetails";
import ProductGrid from "../components/products/ProductGrid";
import FeaturedCollection from "../components/products/FeaturedCollection";
import FeaturesSection from "../components/products/FeaturesSection";
const placeholderProducts = [
  {
    id: 1,
    name: "Casual Shirt",
    price: 19.99,
    image: [{ url: "https://picsum.photos/500/500?random=3" }],
  },
  {
    id: 2,
    name: "Denim Jeans",
    price: 39.99,
    image: [{ url: "https://picsum.photos/500/500?random=4" }],
  },
  {
    id: 3,
    name: "Denim Jeans",
    price: 39.99,
    image: [{ url: "https://picsum.photos/500/500?random=5" }],
  },
  {
    id: 4,
    name: "Denim Jeans",
    price: 39.99,
    image: [{ url: "https://picsum.photos/500/500?random=6" }],
  },
  {
    id: 5,
    name: "Casual Shirt",
    price: 19.99,
    image: [{ url: "https://picsum.photos/500/500?random=7" }],
  },
  {
    id: 6,
    name: "Denim Jeans",
    price: 39.99,
    image: [{ url: "https://picsum.photos/500/500?random=8" }],
  },
  {
    id: 7,
    name: "Denim Jeans",
    price: 39.99,
    image: [{ url: "https://picsum.photos/500/500?random=9" }],
  },
  {
    id: 8,
    name: "Denim Jeans",
    price: 39.99,
    image: [{ url: "https://picsum.photos/500/500?random=10" }],
  },
];

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <GenderProductSection></GenderProductSection>
      <NewArrivals></NewArrivals>
      {/* best sellers */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProdcutDetails></ProdcutDetails>

      <div className="continer mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>
        <ProductGrid products={placeholderProducts}></ProductGrid>
      </div>
      <FeaturedCollection></FeaturedCollection>
      <FeaturesSection></FeaturesSection>
    </div>
  );
};

export default Home;
