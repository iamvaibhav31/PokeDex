import { DetailsPage } from "@/modules/pages";
import { getServerSidePropsFunction } from "@/modules/pages/DetailsPage";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { DetailsPageProps } from "@/modules/pages/DetailsPage";

const PokemonDetailsPage = ({
  attacks,
  details,
  error,
  loading,
}: DetailsPageProps) => {
  return (
    <DetailsPage
      details={details}
      attacks={attacks}
      error={error}
      loading={loading}
    />
  );
};

export default PokemonDetailsPage;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => getServerSidePropsFunction(context);
