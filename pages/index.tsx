import type { NextPage } from "next";
import Seo from "components/layout/Seo";

const Home: NextPage = () => {
  return (
    <>
      <Seo title="Home" />
      <div className="w-full flex items-center justify-between relative">
        <div className="text-4xl w-1/3 flex flex-col">
          <span>안녕하세요,</span>
          <span> 얼렁뚱땅 만든 블로그입니다.</span>
        </div>
      </div>
    </>
  );
};

export default Home;
