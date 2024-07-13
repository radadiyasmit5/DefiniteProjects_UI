import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeroSlider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const HeroSlider = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
      };
  const wordSets = [
    ['Awesome'],
    ['Beautiful'],
    ['Premium']
  ];
  const slides = [
    'https://demo2.wpopal.com/rebuilto/wp-content/uploads/2024/03/rev_home1_1.jpg',
    'https://demo2.wpopal.com/rebuilto/wp-content/uploads/2024/03/rev_home1_2.jpg',
    'https://demo2.wpopal.com/rebuilto/wp-content/uploads/2024/03/rev_home1_3.jpg',
  ];

  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSetIndex((currentSetIndex + 1) % wordSets.length);
    }, 2000); // Adjust delay between word changes (in milliseconds)

    return () => clearInterval(interval);
  }, [currentSetIndex, wordSets.length]);

  return (
    <div className="slider_container">
      <Slider {...settings}>
        {slides.map((image, index) => (
          <div key={index} className="slide test">
            <div className='image_bg' style={{ backgroundImage: `url(${image})` }}>
            </div>
          </div>
        ))}
      </Slider>
       <div className="overlay flex items-end">
            <div className="w-[100%] max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 mb-[75px]">
                <div className='pb-[50px]'>
                <h2 className=" uppercase leading-normal font-Unbounded-SemiBold text-white text-[72px] relative">
                build on <span className="text-[#FF792D]">{wordSets[currentSetIndex].join(', ')}</span> <br/>
                since 1993
                </h2>
            </div>
            <div className='flex justify-end border-t pt-[50px] border-[#888888]'>
            <div className="md:w-1/4 mb-8 md:mb-0 flex gap-3">
              <div className=''>
              <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 9.99999M20 12C20 16.4611 14.54 19.6937 12.6414 20.683C12.4361 20.79 12.3334 20.8435 12.191 20.8712C12.08 20.8928 11.92 20.8928 11.809 20.8712C11.6666 20.8435 11.5639 20.79 11.3586 20.683C9.45996 19.6937 4 16.4611 4 12V8.21759C4 7.41808 4 7.01833 4.13076 6.6747C4.24627 6.37113 4.43398 6.10027 4.67766 5.88552C4.9535 5.64243 5.3278 5.50207 6.0764 5.22134L11.4382 3.21067C11.6461 3.13271 11.75 3.09373 11.857 3.07827C11.9518 3.06457 12.0482 3.06457 12.143 3.07827C12.25 3.09373 12.3539 3.13271 12.5618 3.21067L17.9236 5.22134C18.6722 5.50207 19.0465 5.64243 19.3223 5.88552C19.566 6.10027 19.7537 6.37113 19.8692 6.6747C20 7.01833 20 7.41808 20 8.21759V12Z" stroke="#3af54d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </div>
              <div className=''>
                <div className='flex gap-1 mb-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#FF792D" width="15px" height="15px" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#FF792D" width="15px" height="15px" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#FF792D" width="15px" height="15px" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#FF792D" width="15px" height="15px" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#FF792D" width="15px" height="15px" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                </div>
                <h3 className=" text-[14px] font-Inter-Bold text-[#888888]">Trusted by 500+ companies</h3>
                </div>
            </div>
            <div>
                <button className="explore-button">Explore Our Projects</button>
            </div>
            </div>
            </div>
        </div>
    </div>
  );
};

export default HeroSlider;
