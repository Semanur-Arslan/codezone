import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Promotion() {
  return (
    <section className="relative w-full md:h-[500px] h:-[700px] overflow-hidden ">
      <div className="absolute inset-0 z-3">
        <Image
          src="/sectionOneBg.png"
          alt="Arka Plan"
          fill
          className="object-cover object-end"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-90 md:h-30 overflow-hidden pointer-events-none z-4">
        <Image
          src="/slider/slider_bottom.png"
          alt="Slider Bottom"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative h-full w-full container mx-auto mt-24 md:mt-0 text-white z-10">
        <div className="md:h-full h-1/2 text-center md:text-left p-6 relative z-10">
          <div className="transform -rotate-3 justify-center items-center flex flex-col h-full ">
            <div className="flex items-center justify-center  gap-4 mb-4">
              <Image
                src="/twitch.svg"
                alt="Twitch"
                width={200}
                height={200}
                className="shrink-0"
              />
              <div className="w-px h-20 bg-gray-400"></div>
              <div>
                <h2 className="text-4xl font-bold">
                  HER HAFTA <span className="text-secondary block">CANLIDAYIZ!</span>
                </h2>
                <p className="mt-2 text-lg">Bizi Takip Edin!</p>
              </div>
            </div>
            <div className="mt-6 flex gap-4 justify-center border border-white/20 p-4 rounded-xl w-fit">
              <a
                href="#"
                className="flex items-center px-4 py-2 bg-purple hover:bg-purple-700 rounded-md shadow-lg transition gap-2"
              >
                <FontAwesomeIcon icon={faHeart} />
                <span className="text-nowrap">Takip Et</span>
              </a>
              <a
                href="#"
                className="px-4 py-2 bg-black-900 hover:bg-black-950 rounded-md shadow-lg transition flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faStar} />
                <span className="text-nowrap">Abone Ol</span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center gap-4 mt-6 md:mt-0  md:px-1 md:block">
          <Image
            src="/sectionOne1.png"
            alt="Sol"
            width={350}
            height={500}
            className="object-contain w-1/2 md:w-1/4 md:absolute md:left-0 md:bottom-0"
          />
          <Image
            src="/sectionOne2.png"
            alt="Sağ"
            width={250}
            height={400}
            className="object-contain w-1/2 md:w-1/6 md:absolute md:right-0 md:bottom-0"
          />
        </div>
      </div>
    </section>
  );
}
