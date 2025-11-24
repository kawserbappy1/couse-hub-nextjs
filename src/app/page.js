import Banner from "@/components/Banner";
import ContactComponent from "@/components/ContactComponent";
import CourseCard from "@/components/CourseCard";
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
        <CourseCard></CourseCard>
      </main>
    </div>
  );
}
