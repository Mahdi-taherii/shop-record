import { Link } from "react-router-dom";
const BrandLogoGroup = ({ src }) => {
  return (
    <div className="w-11/12 mx-auto  py-5  mb-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-10 justify-items-center ">
      {src.map((item) => {
        return (
          <Link
            to="/shop"
            key={item}
            className="flex justify-center items-center border-2 border-zinc-300 bg-zinc-100 shadow-xl w-32 h-44 cursor-pointer hover:scale-105 hover:shadow-2xl duration-300"
          >
            <img className="w-24" src={item} alt="company logo" />
          </Link>
        );
      })}
    </div>
  );
};
export default BrandLogoGroup;
