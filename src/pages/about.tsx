import Layout from "../components/Layout";

const About: React.FC = () => {
  return (
    <Layout title="Travis Drilling" transparent={false}>
      <div className="flex min-h-screen flex-col bg-white">
        <div className="flex flex-1 flex-col items-center justify-center">
          <h3 className="mb-2 text-center text-3xl font-semibold leading-normal">
            About Travis Drilling
          </h3>
          <p className="mb-4 mt-4 text-center text-lg font-light text-gray-700">
            Travis Drilling is a locally owned business operating out of Onoway,
            Alberta.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
