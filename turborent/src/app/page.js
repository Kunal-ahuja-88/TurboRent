import Image from "next/image";
import Carousels from "@/components/Carousel";
import Explore from "@/components/Explore";
export default function Home() {
  return (
    <div className="relative">
    <Carousels/>
    <Explore/>
    </div>
  );
}
