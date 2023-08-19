import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const pathName = router.pathname;
  const [hydrated, sethydrated] = useState(true);

  useEffect(() => {
    sethydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }
  return (
    <header
      className={`relative z-10 w-full flex items-center px-16 xl:px-0 xl:h-[90px] bg-gradient-to-r pb-10 xl:pt-24 xl:pb-0 ${
        pathName === "/"
          ? "bg-gradient-to-r from-primary/10 via-black/30 to-black/10"
          : "bg-site xl:mb-20 xl:pt-0"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center -mt-6 gap-y-0.5 md:-mt-0">
          {/* {"logo"} */}
          <Link href={"/"}>
            <Image
              src={"/samuel-logo.png"}
              width={180}
              height={38}
              alt="Logo Samuel rosero"
              priority={true}
            ></Image>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
