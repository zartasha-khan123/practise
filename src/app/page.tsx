 import Bottomdiv from "@/components/bottomdiv";
import Category from "@/components/category";
import FlashSale from "@/components/FlashSale";
import Hero from "@/components/hero";
import Month from "@/components/month";
import NewArrivals from "@/components/newarrivals";
import OurProducts from "@/components/OurProducts";

export default function Home() {
  return (
    <>
    <div className="px-[135px] overflow-hidden ">
      <Hero/>
      <FlashSale/>
      <Category/>
      <Month/>
      <OurProducts/>
      <NewArrivals/>
      <Bottomdiv/> 

    </div>
    </>
  );
}
