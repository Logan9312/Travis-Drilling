import Footer from "~/components/Footer";
import Navbar from "../components/Navbar";
import Layout from "~/components/Layout";

const Resources: React.FC = () => {
  return (
    <Layout transparent={false}>
      <Navbar />
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="mt-8 text-center">
          Page Under Construction. Business Resources will be added here.
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Resources;
