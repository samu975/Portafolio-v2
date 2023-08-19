// fonts settings
import { Sora } from "@next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weights: ["100", "200,", "300", "400", "500", "600", "700", "800", "900"],
});

//components
import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImage from "../components/TopLeftImg";

const Layout = ({ children }) => {
  return (
    <div
      className={`bg-site text-white bg-cover bg-no-repeat ${sora.variable}`}
      style={{ minHeight: "100vh" }}
    >
      <Nav />
      <Header />
      {children}
      <TopLeftImage />
    </div>
  );
};

export default Layout;
