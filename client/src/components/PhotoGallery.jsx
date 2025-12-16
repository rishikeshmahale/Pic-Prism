import ImageCard from "./ImageCard";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

const PhotoGallery = () => {
  return (
    <div className="my-20 bg-white flex flex-col justify-center items-center">
      <h3 className="text-3xl font-semibold my-14">Photos</h3>

      {/* All my photos will be listed inside this div */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-20">
        {/* Image Card */}
        <ImageCard
          title={"The Mountains"}
          author={"Rishikesh"}
          img={
            "https://images.pexels.com/photos/7691312/pexels-photo-7691312.jpeg?_gl=1*192e6ir*_ga*MTExMjczNDMyNS4xNzU5MjIzNjY2*_ga_8JE65Q40S6*czE3NTkyMjM2NjYkbzEkZzEkdDE3NTkyMjQ4NjMkajU4JGwwJGgw"
          }
          price={20}
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300 " />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300 " />
          }
        />
        <ImageCard
          title={"The Beach"}
          author={"Brown"}
          img={
            "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?_gl=1*10xt9kg*_ga*MTExMjczNDMyNS4xNzU5MjIzNjY2*_ga_8JE65Q40S6*czE3NTkzMDE1MjkkbzIkZzEkdDE3NTkzMDE2NDckajU1JGwwJGgw"
          }
          price={25}
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300 " />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300 " />
          }
        />
        <ImageCard
          title={"The Forest"}
          author={"Nejc Košir"}
          img={
            "https://images.pexels.com/photos/338936/pexels-photo-338936.jpeg?_gl=1*15979he*_ga*MTExMjczNDMyNS4xNzU5MjIzNjY2*_ga_8JE65Q40S6*czE3NTkzMDE1MjkkbzIkZzEkdDE3NTkzMDE3MjckajQyJGwwJGgw"
          }
          price={23}
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300 " />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300 " />
          }
        />

         <ImageCard
          title={"The Forest"}
          author={"Markus Spiske"}
          img={
            
            "https://images.pexels.com/photos/113338/pexels-photo-113338.jpeg?_gl=1*zsete5*_ga*MTExMjczNDMyNS4xNzU5MjIzNjY2*_ga_8JE65Q40S6*czE3NTkzMDE1MjkkbzIkZzEkdDE3NTkzMDIwODckajUzJGwwJGgw"
          }
          price={22}
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300 " />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300 " />
          }
        />
        <ImageCard
          title={"The Mountain"}
          author={"Creative Vix"}
          img={
            "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?_gl=1*1xepfak*_ga*MTExMjczNDMyNS4xNzU5MjIzNjY2*_ga_8JE65Q40S6*czE3NTkzMDE1MjkkbzIkZzEkdDE3NTkzMDIwMDQkajU5JGwwJGgw"
          }
          price={25}
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300 " />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300 " />
          }
        />
        <ImageCard
          title={"The Beach"}
          author={"Nathan Cowley"}
          img={
            "https://images.pexels.com/photos/1192671/pexels-photo-1192671.jpeg?_gl=1*1a39pdi*_ga*MTExMjczNDMyNS4xNzU5MjIzNjY2*_ga_8JE65Q40S6*czE3NTkzMDE1MjkkbzIkZzEkdDE3NTkzMDIyMTIkajMyJGwwJGgw"
          }
          price={23}
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300 " />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300 " />
          }
        />

         <ImageCard
          title={"The Mountains"}
          author={"Archie Binamira"}
          img={
            "https://images.pexels.com/photos/913215/pexels-photo-913215.jpeg?_gl=1*wytzgc*_ga*MTExMjczNDMyNS4xNzU5MjIzNjY2*_ga_8JE65Q40S6*czE3NTkzMDE1MjkkbzIkZzEkdDE3NTkzMDI0NjMkajM3JGwwJGgw"
          }
          price={20}
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300 " />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300 " />
          }
        />
        <ImageCard
          title={"The Beach"}
          author={"Green"}
          img={
            "https://images.pexels.com/photos/88212/pexels-photo-88212.jpeg?_gl=1*jfmdu2*_ga*MTExMjczNDMyNS4xNzU5MjIzNjY2*_ga_8JE65Q40S6*czE3NTkzMDE1MjkkbzIkZzEkdDE3NTkzMDIzNzMkajYwJGwwJGgw"
          }
          price={25}
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300 " />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300 " />
          }
        />
        <ImageCard
          title={"The Forest"}
          author={"Nejc Košir"}
          img={
            "https://images.pexels.com/photos/338936/pexels-photo-338936.jpeg?_gl=1*15979he*_ga*MTExMjczNDMyNS4xNzU5MjIzNjY2*_ga_8JE65Q40S6*czE3NTkzMDE1MjkkbzIkZzEkdDE3NTkzMDE3MjckajQyJGwwJGgw"
          }
          price={23}
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300 " />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300 " />
          }
        />
      </div>
    </div>
  );
};

export default PhotoGallery;
