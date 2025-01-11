import Slider from "react-slick";
import banjir from "@/assets/banjir.jpg";
import gempa from "@/assets/gempa.jpeg";
import gunung from "@/assets/gunung-meletus.jpeg";
import tsunami from "@/assets/tsunami.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const img = [
    { id: 1, src: banjir, alt: "Banjir" },
    { id: 2, src: gempa, alt: "Gempa" },
    { id: 3, src: gunung, alt: "Gunung Meletus" },
    { id: 4, src: tsunami, alt: "Tsunami" },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        Prev
      </button>
    ),
    nextArrow: (
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        Next
      </button>
    ),
  };

  return (
    <div id="gallery" className="p-14 min-h-screen flex flex-col justify-center items-center gap-5">
      <div className="wrapper-text">
        <p className="capitalize font-semibold text-3xl text-center">Gallery</p>
        <p className="capitalize font-thin text-xl my-5">Kumpulan foto-foto kegiatan kami</p>
      </div>
      <div className="wrapper-image w-6/12 border shadow-lg h-[500px] relative">
        <Slider {...settings}>
          {img.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt={item.alt} className="w-full h-auto object-contain" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
