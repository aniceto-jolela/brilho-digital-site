import Layout from "@components/base-layout";
import { urls } from "src/urls";
import { useRouter } from "next/router";

const RoutasAuto = () => {
  const { query } = useRouter();
  const { id }: any = query;

  function Layouts() {
    return id == urls[id]?.type.name ? urls[id] : urls.Pages404;
  }

  return (
    <Layout>
      <Layouts />
    </Layout>
  );
};

export default RoutasAuto;
