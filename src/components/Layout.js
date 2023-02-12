import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className=" overflow-hidden bg-skin-bg px-4 md:px-20 lg:px-32">
      <Navbar />
      <main className="mt-6 md:mt-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
