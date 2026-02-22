import HeroSlider from "../Components/slider";
import FeaturesBar from "../Components/featuresBar";
import CategoriesSection from "../Components/categoriesSection";
import DealsSection from "../Components/dealsSection";
import PromoBanners from "../Components/promoBanners";
import PopularProducts from "../Components/popularProducts";
import NewsletterSection from "../Components/newsletterSection";

export default function HomeScreen() {
  return (
    <main className="pb-12">
      <HeroSlider />
      <div className="container mt-12 space-y-12">
        <CategoriesSection />
        <PromoBanners />
        <PopularProducts />
      </div>
      <div className="mt-16">
        <DealsSection />
      </div>
      <div className="mt-16">
        <FeaturesBar />
      </div>
      <div className="mt-16">
        <NewsletterSection />
      </div>
    </main>
  );
}