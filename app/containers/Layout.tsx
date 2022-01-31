import { Link } from "remix";
import Content from "./Content";
import Footer from "./Footer";
import Navbar from "./Navbar";

const LayoutWrapper = ({ children }: any) => {
  return (
    <div className="remix-app">
      <Navbar />
      <Content children={children} />
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
