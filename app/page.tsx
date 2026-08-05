import Hero from "@/components/layout/Hero";
import Footer from "@/components/layout/Footer";

import Categories from "@/components/sections/Categories";
import PopularCalculators from "@/components/sections/PopularCalculators";
import WhyChooseUS from "@/components/sections/WhyChooseUS";
import Statistics from "@/components/sections/Statistics";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />

      <Categories />

      <PopularCalculators />

      <WhyChooseUS />

      <Statistics />

      <CTA />

      <Footer />
    </>
  );
}