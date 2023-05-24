import { Helmet } from "react-helmet";

interface IMetaPageOption {
  title: string;
  ogImg?: string;
}

const SEO = ({ title }: IMetaPageOption) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Helmet>
  );
};

export default SEO;
