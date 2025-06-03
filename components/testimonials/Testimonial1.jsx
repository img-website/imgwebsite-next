'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard } from 'swiper/modules'
import 'swiper/css'
import Svg from "@/components/svg"
import { useEffect } from 'react';

const Testimonial = () => {
  useEffect(() => {
    const videos = document.querySelectorAll('.review-video');
    const videoContainers = document.querySelectorAll('.videoContainer');
    const playButtons = document.querySelectorAll('.playBtn');
    const soundButtons = document.querySelectorAll('.soundBtn');

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    let lastPlayingVideo = null;
    let isSoundEnabled = false;
    const enableDesktopHover = () => {
      videoContainers.forEach((container, index) => {
        const video = videos[index];
        const playButton = playButtons[index];

        container.addEventListener('mouseenter', async () => {
          // Pause all other videos
          videos.forEach((v, i) => {
            if (v !== video) {
              v.pause();
              playButtons[i].style.display = 'block';
            }
          });

          try {
            // Ensure autoplay compliance
            video.muted = true;
            video.playsInline = true;

            await video.play();
            playButton.style.display = 'none';
            lastPlayingVideo = video;
          } catch (err) {
            console.warn('Video play failed:', err.message);
          }
        });

        container.addEventListener('mouseleave', () => {
          video.pause();
          playButton.style.display = 'block';
        });
      });
    };


    const handleDesktopSoundButton = () => {
      soundButtons.forEach((soundButton) => {
        soundButton.addEventListener('click', () => {
          isSoundEnabled = !isSoundEnabled;
          videos.forEach((video) => {
            video.muted = !isSoundEnabled;
          });

          soundButtons.forEach((btn) => {
            btn.classList.toggle('unmuted', isSoundEnabled);
            btn.classList.toggle('muted', !isSoundEnabled);
          });
        });
      });
    };

    const enableMobileClick = () => {
      playButtons.forEach((playButton, index) => {
        const video = videos[index];

        playButton.addEventListener('click', () => {
          videos.forEach((v, i) => {
            if (v !== video) {
              v.pause();
              playButtons[i].style.display = 'block';
            }
          });

          if (video.paused) {
            video.play();
            playButton.style.display = 'none';
            video.muted = false;
            lastPlayingVideo = video;
          }
        });

        video.addEventListener('click', () => {
          if (!video.paused) {
            video.pause();
            playButton.style.display = 'block';
            lastPlayingVideo = null;
          }
        });

        video.addEventListener('ended', () => {
          playButton.style.display = 'block';
          lastPlayingVideo = null;
        });
      });

      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          videos.forEach((video, index) => {
            if (!video.paused) {
              video.pause();
              playButtons[index].style.display = 'block';
              lastPlayingVideo = video;
            }
          });
        } else if (lastPlayingVideo) {
          lastPlayingVideo.play();
          const index = Array.from(videos).indexOf(lastPlayingVideo);
          if (index !== -1) {
            playButtons[index].style.display = 'none';
          }
        }
      });
    };

    if (isMobile) {
      enableMobileClick();
    } else {
      enableDesktopHover();
      handleDesktopSoundButton();
    }
  }, []);
    return (
      <section className="testimonialsSection w-full relative overflow-hidden bg-[#14152C]">
          <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
              <div className="flex flex-col w-full">
                  <h2 className="w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl md:font-bold font-semibold text-white text-balance relative z-10 text-center md:pb-4 pb-2">The Reviews are in</h2>
                  <div className="w-full xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs md:font-medium font-normal text-white text-balance relative z-10 text-center md:pb-12 pb-5">our patrons have some <span className="text-[#FF6B39]">pretty nice things</span> to say too!</div>
                  <div className="flex flex-wrap justify-center">
                      <Swiper className="xl:w-8/12 lg:w-10/12 flex flex-wrap gap-y-8 items-start -mx-4 swiper"
                        modules={[Keyboard]}
                        slidesPerView={1}
                        spaceBetween={4}
                        speed={1000}
                        loop={true}
                        keyboard={{ enabled: true }}
                        centeredSlides={true}
                        breakpoints={{
                          320: { slidesPerView: 2, spaceBetween: 4 },
                          480: { slidesPerView: 2, spaceBetween: 4 },
                          640: { slidesPerView: 2, spaceBetween: 4 },
                          1024: { slidesPerView: 3, spaceBetween: 16 },
                          1350: { slidesPerView: 3, spaceBetween: 16 },
                        }}
                          >
                            <SwiperSlide className="swiper-slide w-full relative p-4 group/testimonial group/video [&.swiper-slide-active]:md:!translate-y-10 [&.swiper-slide-active]:!-translate-y-10 !transition-all !duration-500">
                                <div className="videoContainer w-full block cursor-pointer aspect-[264/469.33] group-[.swiper-slide-active]/testimonial:aspect-[264/469.33] relative duration-300 md:rounded-[48px] rounded-3xl group-[.swiper-slide-prev]/testimonial:rounded-tl-none group-[.swiper-slide-prev]/testimonial:rounded-br-none group-[.swiper-slide-next]/testimonial:rounded-tr-none group-[.swiper-slide-next]/testimonial:rounded-bl-none before:absolute before:inset-0 group-[.swiper-slide-prev]/testimonial:before:-translate-x-4 group-[.swiper-slide-prev]/testimonial:before:translate-y-4 group-[.swiper-slide-next]/testimonial:before:translate-x-4 group-[.swiper-slide-next]/testimonial:before:translate-y-4 before:bg-[#1F2145] before:duration-300 before:md:rounded-[48px] before:rounded-3xl group-[.swiper-slide-prev]/testimonial:before:rounded-tl-none group-[.swiper-slide-prev]/testimonial:before:rounded-br-none group-[.swiper-slide-next]/testimonial:before:rounded-tr-none group-[.swiper-slide-next]/testimonial:before:rounded-bl-none before:z-0">
                                    <div className="playBtn absolute inset-0 md:size-16 size-14 rounded-full m-auto z-20 flex items-center justify-center group-hover/testimonial:lg:scale-125 duration-300">
                                        <Svg name="playCircle" className="size-full text-white" />
                                    </div>
                                    <div className="soundBtn group/sound size-8 absolute top-3 right-3 duration-300 delay-200 opacity-0 group-hover/video:md:opacity-100 *:size-full *:text-white rounded-full z-50 muted before:absolute before:inset-0 before:blur-lg before:rounded-full before:-z-10 before:bg-black cursor-pointer">
                                        <Svg name="muted" className="group-[.unmuted]/sound:hidden" />
                                        <Svg name="unmuted" className="group-[.muted]/sound:hidden" />
                                    </div>
                                    <video loop muted preload="none" poster="https://d1y41eupgbwbb2.cloudfront.net/images/video/review/ach-brl.webp" className="review-video size-full object-cover object-center relative z-10 duration-300 md:rounded-[48px] rounded-3xl group-[.swiper-slide-prev]/testimonial:rounded-tl-none group-[.swiper-slide-prev]/testimonial:rounded-br-none group-[.swiper-slide-next]/testimonial:rounded-tr-none group-[.swiper-slide-next]/testimonial:rounded-bl-none">
                                        <source src="https://d1y41eupgbwbb2.cloudfront.net/images/video/review/ach-brl.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <h3 className="w-full text-center md:text-base text-sm font-semibold text-white pt-7">Ach Brl (Saint Denis, Reunion)</h3>
                                <div className="w-full text-center text-xs font-normal text-white">CEO</div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide w-full relative p-4 group/testimonial group/video [&.swiper-slide-active]:md:!translate-y-10 [&.swiper-slide-active]:!-translate-y-10 !transition-all !duration-500">
                                <div className="videoContainer w-full block cursor-pointer aspect-[264/469.33] group-[.swiper-slide-active]/testimonial:aspect-[264/469.33] relative duration-300 md:rounded-[48px] rounded-3xl group-[.swiper-slide-prev]/testimonial:rounded-tl-none group-[.swiper-slide-prev]/testimonial:rounded-br-none group-[.swiper-slide-next]/testimonial:rounded-tr-none group-[.swiper-slide-next]/testimonial:rounded-bl-none before:absolute before:inset-0 group-[.swiper-slide-prev]/testimonial:before:-translate-x-4 group-[.swiper-slide-prev]/testimonial:before:translate-y-4 group-[.swiper-slide-next]/testimonial:before:translate-x-4 group-[.swiper-slide-next]/testimonial:before:translate-y-4 before:bg-[#1F2145] before:duration-300 before:md:rounded-[48px] before:rounded-3xl group-[.swiper-slide-prev]/testimonial:before:rounded-tl-none group-[.swiper-slide-prev]/testimonial:before:rounded-br-none group-[.swiper-slide-next]/testimonial:before:rounded-tr-none group-[.swiper-slide-next]/testimonial:before:rounded-bl-none before:z-0">
                                    <div className="playBtn absolute inset-0 md:size-16 size-14 rounded-full m-auto z-20 flex items-center justify-center group-hover/testimonial:lg:scale-125 duration-300">
                                        <Svg name="playCircle" className="size-full text-white" />
                                    </div>
                                    <div className="soundBtn group/sound size-8 absolute top-3 right-3 duration-300 delay-200 opacity-0 group-hover/video:md:opacity-100 *:size-full *:text-white rounded-full z-50 muted before:absolute before:inset-0 before:blur-lg before:rounded-full before:-z-10 before:bg-black cursor-pointer">
                                        <Svg name="muted" className="group-[.unmuted]/sound:hidden" />
                                        <Svg name="unmuted" className="group-[.muted]/sound:hidden" />
                                    </div>
                                    <video loop muted preload="none" poster="https://d1y41eupgbwbb2.cloudfront.net/images/video/review/dilip-kumar.webp" className="review-video size-full object-cover object-center relative z-10 duration-300 md:rounded-[48px] rounded-3xl group-[.swiper-slide-prev]/testimonial:rounded-tl-none group-[.swiper-slide-prev]/testimonial:rounded-br-none group-[.swiper-slide-next]/testimonial:rounded-tr-none group-[.swiper-slide-next]/testimonial:rounded-bl-none">
                                        <source src="https://d1y41eupgbwbb2.cloudfront.net/images/video/review/dilip-kumar.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <h3 className="w-full text-center md:text-base text-sm font-semibold text-white pt-7">Dilip Kumar</h3>
                                <div className="w-full text-center text-xs font-normal text-white">Founder</div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide w-full relative p-4 group/testimonial group/video [&.swiper-slide-active]:md:!translate-y-10 [&.swiper-slide-active]:!-translate-y-10 !transition-all !duration-500">
                                <div className="videoContainer w-full block cursor-pointer aspect-[264/469.33] group-[.swiper-slide-active]/testimonial:aspect-[264/469.33] relative duration-300 md:rounded-[48px] rounded-3xl group-[.swiper-slide-prev]/testimonial:rounded-tl-none group-[.swiper-slide-prev]/testimonial:rounded-br-none group-[.swiper-slide-next]/testimonial:rounded-tr-none group-[.swiper-slide-next]/testimonial:rounded-bl-none before:absolute before:inset-0 group-[.swiper-slide-prev]/testimonial:before:-translate-x-4 group-[.swiper-slide-prev]/testimonial:before:translate-y-4 group-[.swiper-slide-next]/testimonial:before:translate-x-4 group-[.swiper-slide-next]/testimonial:before:translate-y-4 before:bg-[#1F2145] before:duration-300 before:md:rounded-[48px] before:rounded-3xl group-[.swiper-slide-prev]/testimonial:before:rounded-tl-none group-[.swiper-slide-prev]/testimonial:before:rounded-br-none group-[.swiper-slide-next]/testimonial:before:rounded-tr-none group-[.swiper-slide-next]/testimonial:before:rounded-bl-none before:z-0">
                                    <div className="playBtn absolute inset-0 md:size-16 size-14 rounded-full m-auto z-20 flex items-center justify-center group-hover/testimonial:lg:scale-125 duration-300">
                                        <Svg name="playCircle" className="size-full text-white" />
                                    </div>
                                    <div className="soundBtn group/sound size-8 absolute top-3 right-3 duration-300 delay-200 opacity-0 group-hover/video:md:opacity-100 *:size-full *:text-white rounded-full z-50 muted before:absolute before:inset-0 before:blur-lg before:rounded-full before:-z-10 before:bg-black cursor-pointer">
                                        <Svg name="muted" className="group-[.unmuted]/sound:hidden" />
                                        <Svg name="unmuted" className="group-[.muted]/sound:hidden" />
                                    </div>
                                    <video loop muted preload="none" poster="https://d1y41eupgbwbb2.cloudfront.net/images/video/review/lachlan-james.webp" className="review-video size-full object-cover object-center relative z-10 duration-300 md:rounded-[48px] rounded-3xl group-[.swiper-slide-prev]/testimonial:rounded-tl-none group-[.swiper-slide-prev]/testimonial:rounded-br-none group-[.swiper-slide-next]/testimonial:rounded-tr-none group-[.swiper-slide-next]/testimonial:rounded-bl-none">
                                        <source src="https://d1y41eupgbwbb2.cloudfront.net/images/video/review/lachlan-james.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <h3 className="w-full text-center md:text-base text-sm font-semibold text-white pt-7">Lachlan James</h3>
                                <div className="w-full text-center text-xs font-normal text-white">Chief Operating Officer</div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide w-full relative p-4 group/testimonial group/video [&.swiper-slide-active]:md:!translate-y-10 [&.swiper-slide-active]:!-translate-y-10 !transition-all !duration-500">
                                <div className="videoContainer w-full block cursor-pointer aspect-[264/469.33] group-[.swiper-slide-active]/testimonial:aspect-[264/469.33] relative duration-300 md:rounded-[48px] rounded-3xl group-[.swiper-slide-prev]/testimonial:rounded-tl-none group-[.swiper-slide-prev]/testimonial:rounded-br-none group-[.swiper-slide-next]/testimonial:rounded-tr-none group-[.swiper-slide-next]/testimonial:rounded-bl-none before:absolute before:inset-0 group-[.swiper-slide-prev]/testimonial:before:-translate-x-4 group-[.swiper-slide-prev]/testimonial:before:translate-y-4 group-[.swiper-slide-next]/testimonial:before:translate-x-4 group-[.swiper-slide-next]/testimonial:before:translate-y-4 before:bg-[#1F2145] before:duration-300 before:md:rounded-[48px] before:rounded-3xl group-[.swiper-slide-prev]/testimonial:before:rounded-tl-none group-[.swiper-slide-prev]/testimonial:before:rounded-br-none group-[.swiper-slide-next]/testimonial:before:rounded-tr-none group-[.swiper-slide-next]/testimonial:before:rounded-bl-none before:z-0">
                                    <div className="playBtn absolute inset-0 md:size-16 size-14 rounded-full m-auto z-20 flex items-center justify-center group-hover/testimonial:lg:scale-125 duration-300">
                                        <Svg name="playCircle" className="size-full text-white" />
                                    </div>
                                    <div className="soundBtn group/sound size-8 absolute top-3 right-3 duration-300 delay-200 opacity-0 group-hover/video:md:opacity-100 *:size-full *:text-white rounded-full z-50 muted before:absolute before:inset-0 before:blur-lg before:rounded-full before:-z-10 before:bg-black cursor-pointer">
                                        <Svg name="muted" className="group-[.unmuted]/sound:hidden" />
                                        <Svg name="unmuted" className="group-[.muted]/sound:hidden" />
                                    </div>
                                    <video loop muted preload="none" poster="https://d1y41eupgbwbb2.cloudfront.net/images/video/review/ach-brl.webp" className="review-video size-full object-cover object-center relative z-10 duration-300 md:rounded-[48px] rounded-3xl group-[.swiper-slide-prev]/testimonial:rounded-tl-none group-[.swiper-slide-prev]/testimonial:rounded-br-none group-[.swiper-slide-next]/testimonial:rounded-tr-none group-[.swiper-slide-next]/testimonial:rounded-bl-none">
                                        <source src="https://d1y41eupgbwbb2.cloudfront.net/images/video/review/ach-brl.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <h3 className="w-full text-center md:text-base text-sm font-semibold text-white pt-7">Ach Brl (Saint Denis, Reunion)</h3>
                                <div className="w-full text-center text-xs font-normal text-white">CEO</div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide w-full relative p-4 group/testimonial group/video [&.swiper-slide-active]:md:!translate-y-10 [&.swiper-slide-active]:!-translate-y-10 !transition-all !duration-500">
                                <div className="videoContainer w-full block cursor-pointer aspect-[264/469.33] group-[.swiper-slide-active]/testimonial:aspect-[264/469.33] relative duration-300 md:rounded-[48px] rounded-3xl group-[.swiper-slide-prev]/testimonial:rounded-tl-none group-[.swiper-slide-prev]/testimonial:rounded-br-none group-[.swiper-slide-next]/testimonial:rounded-tr-none group-[.swiper-slide-next]/testimonial:rounded-bl-none before:absolute before:inset-0 group-[.swiper-slide-prev]/testimonial:before:-translate-x-4 group-[.swiper-slide-prev]/testimonial:before:translate-y-4 group-[.swiper-slide-next]/testimonial:before:translate-x-4 group-[.swiper-slide-next]/testimonial:before:translate-y-4 before:bg-[#1F2145] before:duration-300 before:md:rounded-[48px] before:rounded-3xl group-[.swiper-slide-prev]/testimonial:before:rounded-tl-none group-[.swiper-slide-prev]/testimonial:before:rounded-br-none group-[.swiper-slide-next]/testimonial:before:rounded-tr-none group-[.swiper-slide-next]/testimonial:before:rounded-bl-none before:z-0">
                                    <div className="playBtn absolute inset-0 md:size-16 size-14 rounded-full m-auto z-20 flex items-center justify-center group-hover/testimonial:lg:scale-125 duration-300">
                                        <Svg name="playCircle" className="size-full text-white" />
                                    </div>
                                    <div className="soundBtn group/sound size-8 absolute top-3 right-3 duration-300 delay-200 opacity-0 group-hover/video:md:opacity-100 *:size-full *:text-white rounded-full z-50 muted before:absolute before:inset-0 before:blur-lg before:rounded-full before:-z-10 before:bg-black cursor-pointer">
                                        <Svg name="muted" className="group-[.unmuted]/sound:hidden" />
                                        <Svg name="unmuted" className="group-[.muted]/sound:hidden" />
                                    </div>
                                    <video loop muted preload="none" poster="https://d1y41eupgbwbb2.cloudfront.net/images/video/review/dilip-kumar.webp" className="review-video size-full object-cover object-center relative z-10 duration-300 md:rounded-[48px] rounded-3xl group-[.swiper-slide-prev]/testimonial:rounded-tl-none group-[.swiper-slide-prev]/testimonial:rounded-br-none group-[.swiper-slide-next]/testimonial:rounded-tr-none group-[.swiper-slide-next]/testimonial:rounded-bl-none">
                                        <source src="https://d1y41eupgbwbb2.cloudfront.net/images/video/review/dilip-kumar.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <h3 className="w-full text-center md:text-base text-sm font-semibold text-white pt-7">Dilip Kumar</h3>
                                <div className="w-full text-center text-xs font-normal text-white">Founder</div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide w-full relative p-4 group/testimonial group/video [&.swiper-slide-active]:md:!translate-y-10 [&.swiper-slide-active]:!-translate-y-10 !transition-all !duration-500">
                                <div className="videoContainer w-full block cursor-pointer aspect-[264/469.33] group-[.swiper-slide-active]/testimonial:aspect-[264/469.33] relative duration-300 md:rounded-[48px] rounded-3xl group-[.swiper-slide-prev]/testimonial:rounded-tl-none group-[.swiper-slide-prev]/testimonial:rounded-br-none group-[.swiper-slide-next]/testimonial:rounded-tr-none group-[.swiper-slide-next]/testimonial:rounded-bl-none before:absolute before:inset-0 group-[.swiper-slide-prev]/testimonial:before:-translate-x-4 group-[.swiper-slide-prev]/testimonial:before:translate-y-4 group-[.swiper-slide-next]/testimonial:before:translate-x-4 group-[.swiper-slide-next]/testimonial:before:translate-y-4 before:bg-[#1F2145] before:duration-300 before:md:rounded-[48px] before:rounded-3xl group-[.swiper-slide-prev]/testimonial:before:rounded-tl-none group-[.swiper-slide-prev]/testimonial:before:rounded-br-none group-[.swiper-slide-next]/testimonial:before:rounded-tr-none group-[.swiper-slide-next]/testimonial:before:rounded-bl-none before:z-0">
                                    <div className="playBtn absolute inset-0 md:size-16 size-14 rounded-full m-auto z-20 flex items-center justify-center group-hover/testimonial:lg:scale-125 duration-300">
                                        <Svg name="playCircle" className="size-full text-white" />
                                    </div>
                                    <div className="soundBtn group/sound size-8 absolute top-3 right-3 duration-300 delay-200 opacity-0 group-hover/video:md:opacity-100 *:size-full *:text-white rounded-full z-50 muted before:absolute before:inset-0 before:blur-lg before:rounded-full before:-z-10 before:bg-black cursor-pointer">
                                        <Svg name="muted" className="group-[.unmuted]/sound:hidden" />
                                        <Svg name="unmuted" className="group-[.muted]/sound:hidden" />
                                    </div>
                                    <video loop muted preload="none" poster="https://d1y41eupgbwbb2.cloudfront.net/images/video/review/lachlan-james.webp" className="review-video size-full object-cover object-center relative z-10 duration-300 md:rounded-[48px] rounded-3xl group-[.swiper-slide-prev]/testimonial:rounded-tl-none group-[.swiper-slide-prev]/testimonial:rounded-br-none group-[.swiper-slide-next]/testimonial:rounded-tr-none group-[.swiper-slide-next]/testimonial:rounded-bl-none">
                                        <source src="https://d1y41eupgbwbb2.cloudfront.net/images/video/review/lachlan-james.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <h3 className="w-full text-center md:text-base text-sm font-semibold text-white pt-7">Lachlan James</h3>
                                <div className="w-full text-center text-xs font-normal text-white">Chief Operating Officer</div>
                            </SwiperSlide>
                      </Swiper>
                  </div>
              </div>
          </div>
      </section>
    )
}

export default Testimonial