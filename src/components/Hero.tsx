import Image from "next/image";
export default function Hero() {
  return (
    <div className="relative w-full">
      <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh]">
        <Image
          src={"/Pictures/Hero.png"}
          fill
          style={{ objectFit: 'cover' }}
          alt="Hero image"
          priority
        />
      </div>
      <div className="heroText bg-[#FFF3E3]">
        <h6 className="text-sm md:text-base">New Arrival</h6>
        <h3 className="text-xl md:text-3xl lg:text-4xl font-bold">
          Discover Our <br /> New Collection
        </h3>
        <p className="text-sm md:text-base mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button className="buyBtn mt-4">BUY NOW</button>
      </div>
    </div>
  );
}
