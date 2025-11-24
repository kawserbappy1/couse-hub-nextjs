import Banner from "@/components/Banner";
import ContactComponent from "@/components/ContactComponent";
import FeatureComponent from "@/components/FeatureComponent";
import TestimonialSlider from "@/components/TestimonialSlider";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" container mx-auto">
      <main>
        <Banner></Banner>
        <FeatureComponent></FeatureComponent>
        <TestimonialSlider></TestimonialSlider>
        <ContactComponent></ContactComponent>
      </main>
    </div>
  );
}
