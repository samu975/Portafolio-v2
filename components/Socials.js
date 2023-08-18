import Link from "next/link";
import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiInstagramLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg lg:text-xl">
      <Link
        href={"https://www.linkedin.com/in/samuel-rosero/"}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiLinkedinBoxFill />
      </Link>
      <Link
        href={"https://github.com/samu975"}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiGithubFill />
      </Link>
      <Link
        href={"https://www.instagram.com/samu975/"}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiInstagramLine />
      </Link>
    </div>
  );
};

export default Socials;
