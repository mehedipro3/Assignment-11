// components/BannerSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function BannerSlider() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl"
      >
        {/* /<div className=></div> */}
        {/* Slide 1 */}
        <SwiperSlide className="bg-cover bg-center bg-[url('https://cdn.prod.website-files.com/604a97c70aee09eed25ce991/61897a35583a9b51db018d3e_MartinPublicSeating-97560-Importance-School-Library-blogbanner1.jpg')]">
          <div className=" h-full flex items-center justify-center text-white text-center p-8 ">
            <div>
              <h2 className=" text-4xl md:text-5xl font-bold mb-4">Welcome to Our Digital Library</h2>
              <p className="text-2xl md:text-xl">Discover, Borrow, and Manage Books with Ease.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="bg-cover bg-center" style={{ backgroundImage: "url('https://hls.harvard.edu/wp-content/uploads/2022/08/09_20_13_Campus_Shots_BKraft095-1500x1000.jpg')" }}>
          <div className=" bg-opacity-50 h-full flex items-center justify-center text-white text-center p-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Smart Book Tracking System</h2>
              <p className="text-2xl md:text-xl">Keep track of borrowed and returned books easily.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="bg-cover bg-center" style={ { backgroundImage: "url('https://iowaleague.org/wp-content/uploads/bigstock-Book-In-Library-With-Old-Open-404613197.jpg')" }}>
          <div className="h-full flex items-center justify-center text-white text-center p-8 ">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">User-Friendly Interface</h2>
              <p className="text-2xl md:text-xl">Designed for students, teachers, and admins alike.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
