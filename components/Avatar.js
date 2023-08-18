import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none z-40">
      <Image
        src={"/avatar-ia-bg.png"}
        width={737}
        height={678}
        alt="Imagen de avatar personalizado"
        className="translate-z-0 w-full h-full  "
      />
    </div>
  );
};

export default Avatar;
