import Head from "next/head";

interface Props {
  title: string;
}

const Seo = ({ title }: Props) => {
  const titleText = `${title} | Blog`;
  return (
    <Head>
      <title>{titleText}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};

export default Seo;
