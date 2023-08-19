import Image from "next/image";

const Circles = () => {
  return (
    <div className="xl:w-[300px] absolute right-0 bottom-0 mix-blend-color-dodge animate-pulse duration-75 z-10 overflow-hidden">
      <Image
        src={"/circles.png"}
        width={260}
        height={200}
        className="w-full h-full"
        alt="circles image background"
      />
    </div>
  );
};

export default Circles;
