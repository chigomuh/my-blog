import { contents } from "config/mainConfig";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import renderModel from "components/functions/renderModel";

const Nav = () => {
  const catCanvasRef = useRef<HTMLCanvasElement>(null);
  const [catDeg, setCatDeg] = useState(0.9);

  useEffect(() => {
    const catRef = catCanvasRef.current;
    if (catRef) {
      renderModel(catRef, catDeg);

      const handleAnimationiteration = () => {
        setCatDeg((prev) => (prev = -prev));
      };
      catRef.addEventListener("animationiteration", handleAnimationiteration);
      return () => {
        catRef.removeEventListener(
          "animationiteration",
          handleAnimationiteration
        );
      };
    }
  }, [catDeg]);

  return (
    <>
      <nav className="w-full h-24 flex items-center justify-center overflow-hidden relative">
        <canvas
          ref={catCanvasRef}
          className="absolute top-0 left-0 animate-walking z-50"
        ></canvas>
        <div className="flex items-center justify-center max-w-4xl space-x-10">
          {contents.map((content) => (
            <div key={content.title}>
              <Link href={content.path}>
                <a>{`<${content.title} />`}</a>
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Nav;
