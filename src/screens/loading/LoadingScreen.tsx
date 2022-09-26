import PokeballSpinner from "../../components/pokeball-spinner/PokeballSpinner";
import Layout from "../../layouts/Layout";

const LoadingScreen: React.FC = () => {
  return (
    <Layout>
      <PokeballSpinner className="h-52 w-52" />
    </Layout>
  );
};

export default LoadingScreen;
