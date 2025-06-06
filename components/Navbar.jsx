'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Svg from '@/components/svg';
const Navbar = () => {
  const headerRef = useRef(null);

  const handleHeaderClick = (event) => {
    if (event.target.closest('a')) {
      const toggle = document.getElementById('sideToggle');
      if (toggle) toggle.checked = false;

      const el = headerRef.current;
      if (el) {
        el.style.pointerEvents = 'none';
        setTimeout(() => {
          if (el) {
            el.style.pointerEvents = 'auto';
          }
        }, 1000);
      }
    }
  };
  useEffect(() => {
    // Remove "group" class just once on mount
    if (document.body?.classList?.contains('group')) {
      document.body.classList.remove('group');
    }

    const handleScroll = () => {
      const scroll = window.scrollY || document.documentElement.scrollTop;
      if (scroll <= 80) {
        document.body.classList.remove('group/ns');
      } else {
        document.body.classList.add('group/ns');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Only set up scroll — don't run it initially
    // because original code does not trigger on load
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
      <>
        <header
          ref={headerRef}
          onClickCapture={handleHeaderClick}
          className="absolute top-0 left-0 right-0 z-[1010] bg-white select-none group-[body]/ns:fixed group-[body]/ns:animate-fixed-nav shadow-[0px_4px_4px_0px_#0000001F]"
        >
          <nav className="!container flex items-center justify-between xl:py-4 lg:py-3 py-4" aria-label="Global">
            <div className="flex lg:hidden mr-2">
              <label htmlFor="sideToggle" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5">
                <span className="sr-only">Open menu</span>
                <Svg name="widgets" className="size-6" />
              </label>
            </div>
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">IMG</span>
                <Image className="xl:h-14 lg:h-10 h-8 w-auto aspect-[202/56]" src="https://d1y41eupgbwbb2.cloudfront.net/images/xl-logo.webp" width="202" height="56" alt="IMG Global Infotech Logo" title="IMG Global Infotech Logo" />
              </Link>
            </div>
            <div className="flex lg:flex-col lg:gap-x-8 xl:gap-y-7 gap-y-4 ml-auto mr-0 items-end">
              <div className="hidden lg:flex gap-5 group-[body]/ns:-mb-9 group-[body]/ns:-z-10 group-[body]/ns:opacity-0 relative duration-300">
                  <Link href="mailto:info@imgglobalinfotech.com" target="_blank" className="flex items-center font-semibold xl:text-sm lg:text-xs text-sm xl:gap-2 lg:gap-1 gap-2 text-[#454444]">
                      <span>
                          <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/mail.webp" alt="Mail" title="Mail" className="xl:size-5 lg:size-4 size-5" width="20" height="20" />
                      </span>
                      <span>info@imgglobalinfotech.com</span>
                  </Link>
                  <Link href="skype:kunwar.neeraj.rajput" className="flex items-center font-semibold xl:text-sm lg:text-xs text-sm xl:gap-2 lg:gap-1 gap-2 text-[#454444]">
                      <span>
                          <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/teams.webp" alt="Teams" title="Teams" className="xl:size-5 lg:size-4 size-5" width="20" height="20" />
                      </span>
                      <span>live:kunwar.neeraj.rajput</span>
                  </Link>
              </div>
              <div className="flex gap-5 items-center">
                  <div className="hidden lg:flex lg:gap-x-6 ml-auto mr-0">
                    <div className="relative group/dd">
                      <button type="button" className="flex items-center gap-x-0.5 xl:text-sm lg:text-xs text-sm font-medium leading-6 text-[#454444] duration-200 capitalize hover:lg:text-black group-hover/dd:before:absolute group-hover/dd:before:-bottom-[34px] group-hover/dd:before:left-0 group-hover/dd:before:h-10 group-hover/dd:before:w-full group-hover/dd:before:z-[1]" aria-expanded="false">
                        Company
                        <Svg name="arrowDown" className="xl:size-5 lg:size-4 size-5 flex-none transition-transform duration-500 group-hover/dd:[transform:rotateX(180deg)]" />
                      </button>
                      <div className="absolute left-1/2 right-0 max-w-md w-screen xl:top-[47px] group-hover/ns:xl:top-[49px] lg:top-[40px] group-hover/ns:lg:top-[45px] z-10 overflow-hidden bg-white/40 rounded-3xl backdrop-blur-lg transition ease-out duration-200 opacity-0 group-hover/dd:opacity-100 origin-top [transform:rotateX(90deg)_translateX(-50%)] group-hover/dd:[transform:rotateX(0deg)_translateX(-50%)]">
                        <div className="grid grid-cols-1 flex-wrap w-full gap-4 p-2 xl:p-4 items-stretch">
                          <div className="w-full flex flex-col p-2 xl:p-4 overflow-hidden xl:rounded-3xl lg:rounded-2xl rounded-3xl text-xs xl:text-sm leading-6 bg-white/70 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5">
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-11 lg:size-9 size-10 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover/db:lg:bg-white">
                                <Svg name="about" className="xl:size-5 lg:size-4 size-5 opacity-90 group-hover/db:opacity-80 shrink-0" />
                              </div>
                              <div className="flex-auto">
                                <Link href="about-us.php" className="block xl:text-sm lg:text-xs text-sm font-medium duration-200 capitalize hoverLink">
                                  About Us
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                                <p className="xl:text-xs lg:text-[10px] text-xs xl:mt-1 relative z-0">Your IT Partner for Tomorrow's Solutions</p>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-11 lg:size-9 size-10 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover/db:lg:bg-white">
                                <Svg name="review" className="xl:size-5 lg:size-4 size-5 opacity-90 group-hover/db:opacity-80 shrink-0" />
                              </div>
                              <div className="flex-auto">
                                <Link href="testimonials.php" className="block xl:text-sm lg:text-xs text-sm font-medium duration-200 capitalize hoverLink">
                                  Testimonials
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                                <p className="xl:text-xs lg:text-[10px] text-xs xl:mt-1 relative z-0">Hear What Our Clients Have to Say</p>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-11 lg:size-9 size-10 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover/db:lg:bg-white">
                                <Svg name="life" className="xl:size-5 lg:size-4 size-5 opacity-90 group-hover/db:opacity-80 shrink-0" />
                              </div>
                              <div className="flex-auto">
                                <Link href="https://www.flickr.com/photos/imgglobalinfotech" target="_blank" className="block xl:text-sm lg:text-xs text-sm font-medium duration-200 capitalize hoverLink">
                                  LIFE@IMG
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                                <p className="xl:text-xs lg:text-[10px] text-xs xl:mt-1 relative z-0">Memories Made Beyond the Workplace</p>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-11 lg:size-9 size-10 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover/db:lg:bg-white">
                                <Svg name="career" className="xl:size-5 lg:size-4 size-5 group-hover/db:opacity-80" />
                              </div>
                              <div className="flex-auto">
                                <Link href="career.php" className="block xl:text-sm lg:text-xs text-sm font-medium duration-200 capitalize hoverLink">
                                  Career
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                                <p className="xl:text-xs lg:text-[10px] text-xs xl:mt-1 relative z-0">Build Your Future with Us</p>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-11 lg:size-9 size-10 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover/db:lg:bg-white">
                                <Svg name="work" className="xl:size-5 lg:size-4 size-5 opacity-90 group-hover/db:opacity-80 shrink-0" />
                              </div>
                              <div className="flex-auto">
                                <Link href="casestudy.php" className="block xl:text-sm lg:text-xs text-sm font-medium duration-200 capitalize hoverLink">
                                  Case Study
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                                <p className="xl:text-xs lg:text-[10px] text-xs xl:mt-1 relative z-0">Success Stories that Speak Volumes</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 mt-2 rounded-b-xl bg-gray-100">
                              <Link href="disclaimer.php" className="flex w-full bg-white rounded-lg items-center justify-center gap-x-2.5 p-3 xl:text-sm lg:text-xs text-sm font-medium leading-6 duration-200 capitalize hover:lg:bg-gray-200 text-[#454444]">
                                <Svg name="about2" className="xl:size-5 lg:size-4 size-5 opacity-90 group-hover/db:opacity-80 shrink-0" />
                                Disclaimer
                              </Link>
                              <Link href="sitemap.html" className="flex w-full bg-white rounded-lg items-center justify-center gap-x-2.5 p-3 xl:text-sm lg:text-xs text-sm font-medium leading-6 duration-200 capitalize hover:lg:bg-gray-200 text-[#454444]">
                                <Svg name="sitemap" className="xl:size-5 lg:size-4 size-5 opacity-90 group-hover/db:opacity-80 shrink-0" />
                                Sitemap
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="group/dd">
                      <button type="button" className="flex items-center gap-x-0.5 xl:text-sm lg:text-xs text-sm font-medium leading-6 text-[#454444] duration-200 capitalize hover:lg:text-black group-hover/dd:before:absolute group-hover/dd:before:-bottom-4 group-hover/dd:before:left-0 group-hover/dd:before:h-10 group-hover/dd:before:w-full group-hover/dd:before:z-[1]" aria-expanded="false">
                        Services
                        <Svg name="arrowDown" className="xl:size-5 lg:size-4 size-5 flex-none transition-transform duration-500 group-hover/dd:[transform:rotateX(180deg)]" />
                      </button>
                      <div className="absolute left-0 right-0 w-full xl:top-[120px] lg:top-[100px] top-[120px] group-hover/ns:xl:top-[5.5rem] group-hover/ns:lg:top-[4rem] z-10 overflow-hidden bg-white/40 rounded-3xl group-hover/ns:rounded-t-none  backdrop-blur-lg transition ease-out duration-200 opacity-0 group-hover/dd:opacity-100 origin-top [transform:rotateX(90deg)] group-hover/dd:[transform:rotateX(0deg)]">
                        <div className="grid grid-cols-5 flex-wrap w-full gap-4 p-2 xl:p-4 items-stretch text-xs xl:text-sm xl:leading-6">
                          <div className="w-full flex flex-col p-2 xl:p-4 overflow-hidden xl:rounded-3xl lg:rounded-2xl rounded-3xl bg-white/70 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5">
                            <div className="xl:text-base text-sm font-semibold px-2 xl:px-4 py-1 xl:py-2">Mobile App</div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="mobile-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Mobile App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="android-application-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Android App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="ios-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  iOS App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="cross-platform-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Cross-Platform App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="flutter-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Flutter App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="react-native-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  React Native App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex flex-col p-2 xl:p-4 overflow-hidden xl:rounded-3xl lg:rounded-2xl rounded-3xl bg-white/70 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5">
                            <div className="xl:text-base text-sm font-semibold px-2 xl:px-4 py-1 xl:py-2">Web</div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="web-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Web Development
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="website-design.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Website Design
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="website-redesigning.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Website Redesign
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="responsive-web-designing.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Responsive Design
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex flex-col p-2 xl:p-4 overflow-hidden xl:rounded-3xl lg:rounded-2xl rounded-3xl bg-white/70 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5">
                            <div className="xl:text-base text-sm font-semibold px-2 xl:px-4 py-1 xl:py-2">Software</div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="bespoke-software-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Bespoke Software
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="saas-software-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  SaaS Software
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="inventory-management-software.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Inventory Management
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="gym-management-software.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  GYM Software
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="customer-relationship-management-software.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  CRM Software
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex flex-col p-2 xl:p-4 overflow-hidden xl:rounded-3xl lg:rounded-2xl rounded-3xl bg-white/70 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5">
                            <div className="xl:text-base text-sm font-semibold px-2 xl:px-4 py-1 xl:py-2">Sports</div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="fantasy-sports-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Fantasy Sports App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="fantasy-cricket-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Fantasy Cricket App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="fantasy-football-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Fantasy Football App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="fantasy-kabaddi-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Fantasy Kabaddi App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="probo-clone-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Probo Clone App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="casino-game-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Casino App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="sports-betting-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Sports Betting App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex flex-col gap-4">
                            <div className="w-full flex flex-col p-2 xl:p-4 overflow-hidden xl:rounded-3xl lg:rounded-2xl rounded-3xl bg-white/70 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5">
                              <div className="xl:text-base text-sm font-semibold px-2 xl:px-4 py-1 xl:py-2">eCommerce</div>
                              <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                                <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                  <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="ecommerce-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                    eCommerce Development
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                                <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                  <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="woocommerce-website-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                    WooCommerce Development
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                                <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                  <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="shopify-ecommerce-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                    Shopify Development
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                                <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                  <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="/" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                    Magento Development
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="w-full flex flex-col p-2 xl:p-4 overflow-hidden xl:rounded-3xl lg:rounded-2xl rounded-3xl bg-white/70 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5">
                              <div className="xl:text-base text-sm font-semibold px-2 xl:px-4 py-1 xl:py-2">Blockchain</div>
                              <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                                <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                  <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                    Blockchain
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="group/dd">
                      <button type="button" className="flex items-center gap-x-0.5 xl:text-sm lg:text-xs text-sm font-medium leading-6 text-[#454444] duration-200 capitalize hover:lg:text-black group-hover/dd:before:absolute group-hover/dd:before:-bottom-4 group-hover/dd:before:left-0 group-hover/dd:before:h-10 group-hover/dd:before:w-full group-hover/dd:before:z-[1]" aria-expanded="false">
                        Solutions
                        <Svg name="arrowDown" className="xl:size-5 lg:size-4 size-5 flex-none transition-transform duration-500 group-hover/dd:[transform:rotateX(180deg)]" />
                      </button>
                      <div className="absolute left-0 right-0 w-full xl:top-[120px] lg:top-[100px] top-[120px] group-hover/ns:xl:top-[5.5rem] group-hover/ns:lg:top-[4rem] z-10 overflow-hidden bg-white/40 rounded-3xl group-hover/ns:rounded-t-none  backdrop-blur-lg transition ease-out duration-200 opacity-0 group-hover/dd:opacity-100 origin-top [transform:rotateX(90deg)] group-hover/dd:[transform:rotateX(0deg)]">
                        <div className="grid grid-cols-4 flex-wrap w-full gap-4 p-2 xl:p-4 items-stretch text-xs xl:text-sm xl:leading-6">
                          <div className="w-full flex flex-col p-2 xl:p-4 overflow-hidden xl:rounded-3xl lg:rounded-2xl rounded-3xl bg-white/70 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5">
                            <div className="xl:text-base text-sm font-semibold px-2 xl:px-4 py-1 xl:py-2">On Demand Apps</div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="food-delivery-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Food Delivery App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="grocery-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Grocery Delivery App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="instant-delivery-app-development-company.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Instant Delivery App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="taxi-app-development-company.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Taxi Booking App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="home-service-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Home Services App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="laundry-services-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Laundry App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="medicine-delivery-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Medicine Delivery App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="doctor-on-demand-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Doctor On-Demand App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="alcohol-delivery-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Alcohol Delivery App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="car-wash-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Car Wash App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex flex-col p-2 xl:p-4 overflow-hidden xl:rounded-3xl lg:rounded-2xl rounded-3xl bg-white/70 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5">
                            <div className="xl:text-base text-sm font-semibold px-2 xl:px-4 py-1 xl:py-2">Ready to Use Solutions</div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="school-management-software-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  School Management System
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="college-management-software-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  College Management System
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="university-management-software-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  University Management System
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="institute-management-software-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Institute Management System
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="online-exam-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Online Exam App 
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="astrology-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Astrology App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="mlm-software-development-company.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  MLM Software 
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="hospital-management-software.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Hospital Management System 
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="inventory-management-software.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Inventory Management Softwrae
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="nidhi-company-software.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Nidhi Software
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex flex-col p-2 xl:p-4 overflow-hidden xl:rounded-3xl lg:rounded-2xl rounded-3xl bg-white/70 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5">
                            <div className="xl:text-base text-sm font-semibold px-2 xl:px-4 py-1 xl:py-2">Trending Apps</div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="healthcare-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Healthcare App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="diet-and-nutrition-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Diet and Nutrition App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="fitness-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Fitness App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="elearning-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Elearning App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="ott-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  OTT Platform App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="ar-vr-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  AR/VR App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="dating-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Dating App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="event-tickets-booking-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Event & Ticket Booking App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="pet-care-app-development-company.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Pet Care App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex flex-col p-2 xl:p-4 overflow-hidden xl:rounded-3xl lg:rounded-2xl rounded-3xl bg-white/70 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5">
                            <div className="xl:text-base text-sm font-semibold px-2 xl:px-4 py-1 xl:py-2">Ecommerce Solutions</div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="fashion-ecommerce-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Fashion Ecommerce App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="jewellery-ecommerce-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Jewellery Ecommerce App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="beauty-cosmetic-store-app-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Beauty & Cosmetic Ecommerce App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="gift-ecommerce-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Gift Ecommerce App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="furniture-ecommerce-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Furniture Ecommerce App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="b2b-ecommerce-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  B2B Ecommerce App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="b2c-ecommerce-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  B2C Ecommerce App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="d2c-ecommerce-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  D2C Ecommerce App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="market-place-ecommerce-development.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Marketplace Ecommerce App
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group/dd">
                      <button type="button" className="flex items-center gap-x-0.5 xl:text-sm lg:text-xs text-sm font-medium leading-6 text-[#454444] duration-200 capitalize hover:lg:text-black group-hover/dd:before:absolute group-hover/dd:before:-bottom-4 group-hover/dd:before:left-0 group-hover/dd:before:h-10 group-hover/dd:before:w-full group-hover/dd:before:z-[1]" aria-expanded="false">
                        Hire <span className="max-xl:hidden">&nbsp;Developers</span>
                        <Svg name="arrowDown" className="xl:size-5 lg:size-4 size-5 flex-none transition-transform duration-500 group-hover/dd:[transform:rotateX(180deg)]" />
                      </button>
                      <div className="absolute left-0 right-0 w-full xl:top-[120px] lg:top-[100px] top-[120px] group-hover/ns:xl:top-[5.5rem] group-hover/ns:lg:top-[4rem] z-10 overflow-hidden bg-white/40 rounded-3xl group-hover/ns:rounded-t-none  backdrop-blur-lg transition ease-out duration-200 opacity-0 group-hover/dd:opacity-100 origin-top [transform:rotateX(90deg)] group-hover/dd:[transform:rotateX(0deg)]">
                        <div className="grid grid-cols-5 flex-wrap w-full gap-4 p-2 xl:p-4 items-stretch text-xs xl:text-sm xl:leading-6">
                          <div className="w-full flex flex-col p-2 xl:p-4 overflow-hidden xl:rounded-3xl lg:rounded-2xl rounded-3xl bg-white/70 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5">
                            <div className="xl:text-base text-sm font-semibold px-2 xl:px-4 py-1 xl:py-2">Trending</div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="it-staff-augmentation.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  IT Staff Augmentation
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="hire-ui-ux-developers.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  UI/UX Designers
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="hire-software-qa-testers.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  QA Engineers
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="hire-mern-stack-developers.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  MERN Stack Developers
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="hire-mean-stack-developers.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  MEAN Stack Developers
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="hire-dedicated-developers.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Dedicated Developers Team
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex flex-col p-2 xl:p-4 overflow-hidden xl:rounded-3xl lg:rounded-2xl rounded-3xl bg-white/70 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5">
                            <div className="xl:text-base text-sm font-semibold px-2 xl:px-4 py-1 xl:py-2">Mobile</div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="hire-mobile-app-developers.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Hire Mobile App Developers
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="hire-android-app-developers.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Hire Android App Developers
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="hire-ios-app-developers.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Hire iOS App Developers
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="hire-flutter-app-developers.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Hire Flutter App Developers
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="hire-react-native-app-developers.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Hire React Native App Developers
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex flex-col p-2 xl:p-4 overflow-hidden xl:rounded-3xl lg:rounded-2xl rounded-3xl bg-white/70 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5">
                            <div className="xl:text-base text-sm font-semibold px-2 xl:px-4 py-1 xl:py-2">Frontend</div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="hire-reactjs-developers.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Hire React Js Developers
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="hire-angular-developers.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Hire Angular Developers
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="hire-full-stack-developers.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Hire Full Stack Developers
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex flex-col p-2 xl:p-4 overflow-hidden xl:rounded-3xl lg:rounded-2xl rounded-3xl bg-white/70 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5">
                            <div className="xl:text-base text-sm font-semibold px-2 xl:px-4 py-1 xl:py-2">Backend</div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="hire-python-developers.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Hire Python Developers
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="hire-php-developers.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Hire PHP Developers
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="hire-java-developers.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Hire JAVA Developers
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                              <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                              </div>
                              <div className="flex-auto">
                                <Link href="hire-nodejs-developers.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                  Hire NodeJs Developers
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex flex-col gap-4">
                            <div className="w-full flex flex-col p-2 xl:p-4 overflow-hidden xl:rounded-3xl lg:rounded-2xl rounded-3xl bg-white/70 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5">
                              <div className="xl:text-base text-sm font-semibold px-2 xl:px-4 py-1 xl:py-2">Web</div>
                              <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                                <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                  <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="hire-web-designers.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                    Hire Website Designers
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div className="group/db hover:md:bg-gray-100 text-[#454444] xl:gap-x-6 lg:gap-x-4 gap-x-5 relative flex items-center rounded-lg p-2 xl:p-2 lg:p-1.5">
                                <div className="flex xl:size-5 lg:size-4 size-5 flex-none items-center justify-center rounded-lg bg-gray-100">
                                  <Svg name="squire" className="xl:size-2 size-1.5 opacity-90 group-hover/db:opacity-80 group-hover/db:animate-spin" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="hire-web-developers.php" className="block font-medium opacity-80 hover:opacity-90 duration-200 hoverLink">
                                    Hire Website Developers
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
              
                    <Link href="portfolio.php" className="xl:text-sm lg:text-xs text-sm font-medium leading-6 text-[#454444] duration-200 capitalize hover:lg:text-black">Work</Link>
                    <Link href="blog" className="xl:text-sm lg:text-xs text-sm font-medium leading-6 text-[#454444] duration-200 capitalize hover:lg:text-black">Blogs</Link>
                    <Link href="contact-us.php" className="xl:text-sm lg:text-xs text-sm font-medium leading-6 text-[#454444] duration-200 capitalize hover:lg:text-black">Contact Us</Link>
                  </div>
                  <div className="flex lg:flex-1 lg:justify-end">
                    <Link href="request-a-quote.php" className="inline-flex rounded-full xl:text-sm lg:text-xs text-sm font-medium text-[#454444] hover:lg:text-black py-2 lg:px-4 px-3 ring-1 hover:lg:ring-2 ring-inset ring-[#454444] hover:lg:ring-black duration-300 xl:w-[156.55px] xl:h-[37px] lg:w-[139.82px] lg:h-[34px] w-[148.55px] h-[37px]">Request a Quote</Link>
                  </div>
              </div>
            </div>
          </nav>
        </header>

        <input type="checkbox" className="peer/sideToggle hidden" name="sideToggle" id="sideToggle" />
        <label htmlFor="sideToggle" className="fixed inset-0 -z-[1011] backdrop-blur-xl bg-sky-950/70 peer-checked/sideToggle:z-[1010] peer-checked/sideToggle:opacity-100 opacity-0 duration-100"></label>

        <div className="fixed flex flex-col h-screen inset-y-0 right-0 z-[1011] w-full overflow-y-auto bg-white select-none px-6 py-6 sm:max-w-sm peer-checked/sideToggle:translate-x-0 peer-checked/sideToggle:opacity-100 translate-x-full opacity-0 duration-300">
          <div className="flex items-center justify-between">
            <Link href="" className="-ml-1.5">
              <span className="sr-only">IMG</span>
              <Image className="h-8 w-auto aspect-[174/48]"  width="174" height="48" loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/xl-logo.webp" alt="IMG Global Infotech Logo" title="IMG Global Infotech Logo" />
            </Link>
            <label htmlFor="sideToggle" className="-m-2.5 rounded-md p-2.5 text-gray-200">
              <span className="sr-only">Close menu</span>
              <Svg name="close" className="xl:size-5 lg:size-4 size-5 text-black" />
            </label>
          </div>
          <div className="mt-6 flow-root flex-fill overflow-auto -mr-4 pr-4">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <div className="flex flex-col gap-5 items-center">
                    <div className="flex flex-col w-full gap-y-5">
                      <div className="relative flex flex-col gap-y-3">
                        <input className="peer/mm hidden" type="checkbox" name="mmMenu" id="mmCompany" />
                        <label htmlFor="mmCompany" className="flex items-center gap-x-0.5 lg:text-sm md:text-xs text-sm font-semibold text-[#454444]">
                          Company
                          <Svg name="arrowDown" className="xl:size-5 lg:size-4 size-5 flex-none ml-auto transition-transform duration-500 group-hover/dd:[transform:rotateX(180deg)]" />
                        </label>
                        <div className="w-full peer-checked/mm:block hidden">
                          <div className="grid grid-cols-1 flex-wrap w-full gap-4">
                            <div className="w-full text-sm md:text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1.5 *:relative">
                              <div>
                                <Svg name="about" className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0" />
                                <div className="flex-auto">
                                  <Link href="about-us.php" className="block font-semibold opacity-80">
                                    About Us
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <Svg name="review" className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0" />
                                <div className="flex-auto">
                                  <Link href="testimonials.php" className="block font-semibold opacity-80">
                                    Testimonials
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <Svg name="life" className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0" />
                                <div className="flex-auto">
                                  <Link href="https://www.flickr.com/photos/imgglobalinfotech" target="_blank" className="block font-semibold opacity-80">
                                    Life @IMG
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <Svg name="career" className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0" />
                                <div className="flex-auto">
                                  <Link href="career.php" className="block font-semibold opacity-80">
                                    Career
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <Svg name="work" className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0" />
                                <div className="flex-auto">
                                  <Link href="casestudy.php" className="block font-semibold opacity-80">
                                    Case Study
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <Svg name="about2" className="xl:size-5 lg:size-4 size-5 opacity-90 group-hover/db:opacity-80 shrink-0" />
                                <div className="flex-auto">
                                  <Link href="disclaimer.php" className="block font-semibold opacity-80">
                                    Disclaimer
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <Svg name="sitemap" className="xl:size-5 lg:size-4 size-5 opacity-90 group-hover/db:opacity-80 shrink-0" />
                                <div className="flex-auto">
                                  <Link href="sitemap.html" className="block font-semibold opacity-80">
                                    Sitemap
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative flex flex-col gap-y-3">
                        <input className="peer/mm hidden" type="checkbox" name="mmMenu" id="mmServices" />
                        <label htmlFor="mmServices" className="flex items-center gap-x-0.5 lg:text-sm md:text-xs text-sm font-semibold text-[#454444]">
                          Services
                          <Svg name="arrowDown" className="xl:size-5 lg:size-4 size-5 flex-none ml-auto transition-transform duration-500 group-hover/dd:[transform:rotateX(180deg)]" />
                        </label>
                        <div className="w-full peer-checked/mm:block hidden">
                          <div className="grid grid-cols-1 flex-wrap w-full gap-4">
                            <div className="w-full text-sm md:text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1.5 *:relative">
                              <div className="text-sm font-bold py-1 block">Mobile App</div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="mobile-app-development.php" className="block font-semibold opacity-80">
                                    Mobile App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="android-application-development.php" className="block font-semibold opacity-80">
                                    Android App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="ios-app-development.php" className="block font-semibold opacity-80">
                                    iOS App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="cross-platform-app-development.php" className="block font-semibold opacity-80">
                                    Cross-Platform App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="flutter-app-development.php" className="block font-semibold opacity-80">
                                    Flutter App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="react-native-app-development.php" className="block font-semibold opacity-80">
                                    React Native App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="w-full text-sm md:text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1.5 *:relative">
                              <div className="text-sm font-bold py-1 block">Web</div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="web-development.php" className="block font-semibold opacity-80">
                                    Web Development
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="website-design.php" className="block font-semibold opacity-80">
                                    Website Design
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="website-redesigning.php" className="block font-semibold opacity-80">
                                    Website Redesign
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="responsive-web-designing.php" className="block font-semibold opacity-80">
                                    Responsive Design
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="w-full text-sm md:text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1.5 *:relative">
                              <div className="text-sm font-bold py-1 block">Software</div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="bespoke-software-development.php" className="block font-semibold opacity-80">
                                    Bespoke Software
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="saas-software-development.php" className="block font-semibold opacity-80">
                                    SaaS Software
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="inventory-management-software.php" className="block font-semibold opacity-80">
                                    Inventory Management
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="gym-management-software.php" className="block font-semibold opacity-80">
                                    GYM Software
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="customer-relationship-management-software.php" className="block font-semibold opacity-80">
                                    CRM Software
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="w-full text-sm md:text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1.5 *:relative">
                              <div className="text-sm font-bold py-1 block">Sports</div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="fantasy-sports-app-development.php" className="block font-semibold opacity-80">
                                    Fantasy Sports App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="fantasy-cricket-app-development.php" className="block font-semibold opacity-80">
                                    Fantasy Cricket App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="fantasy-football-app-development.php" className="block font-semibold opacity-80">
                                    Fantasy Football App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="fantasy-kabaddi-app-development.php" className="block font-semibold opacity-80">
                                    Fantasy Kabaddi App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="probo-clone-app-development.php" className="block font-semibold opacity-80">
                                    Probo Clone App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="casino-game-app-development.php" className="block font-semibold opacity-80">
                                    Casino App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="sports-betting-app-development.php" className="block font-semibold opacity-80">
                                    Sports Betting App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="w-full text-sm md:text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1.5 *:relative">
                              <div className="text-sm font-bold py-1 block">eCommerce</div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="ecommerce-development.php" className="block font-semibold opacity-80">
                                    eCommerce Development
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="woocommerce-website-development.php" className="block font-semibold opacity-80">
                                    WooCommerce Development
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="shopify-ecommerce-development.php" className="block font-semibold opacity-80">
                                    Shopify Development
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="/" className="block font-semibold opacity-80">
                                    Magento Development
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="w-full text-sm md:text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1.5 *:relative">
                              <div className="text-sm font-bold py-1 block">Blockchain</div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="" className="block font-semibold opacity-80">
                                    Blockchain
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative flex flex-col gap-y-3">
                        <input className="peer/mm hidden" type="checkbox" name="mmMenu" id="mmTrending" />
                        <label htmlFor="mmTrending" className="flex items-center gap-x-0.5 lg:text-sm md:text-xs text-sm font-semibold text-[#454444]">
                          Trending Solutions
                          <Svg name="arrowDown" className="xl:size-5 lg:size-4 size-5 flex-none ml-auto transition-transform duration-500 group-hover/dd:[transform:rotateX(180deg)]" />
                        </label>
                        <div className="w-full peer-checked/mm:block hidden">
                          <div className="grid grid-cols-1 flex-wrap w-full gap-4">
                            <div className="w-full text-sm md:text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1.5 *:relative">
                              <div className="text-sm font-bold py-1 block">On Demand Apps</div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="food-delivery-app-development.php" className="block font-semibold opacity-80">
                                    Food Delivery App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="grocery-app-development.php" className="block font-semibold opacity-80">
                                    Grocery Delivery App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="instant-delivery-app-development-company.php" className="block font-semibold opacity-80">
                                    Instant Delivery App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="taxi-app-development-company.php" className="block font-semibold opacity-80">
                                    Taxi Booking App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="home-service-app-development.php" className="block font-semibold opacity-80">
                                    Home Services App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="laundry-services-app-development.php" className="block font-semibold opacity-80">
                                    Laundry App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="medicine-delivery-app-development.php" className="block font-semibold opacity-80">
                                    Medicine Delivery App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="doctor-on-demand-app-development.php" className="block font-semibold opacity-80">
                                    Doctor On-Demand App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="alcohol-delivery-app-development.php" className="block font-semibold opacity-80">
                                    Alcohol Delivery App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="car-wash-app-development.php" className="block font-semibold opacity-80">
                                    Car Wash App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="w-full text-sm md:text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1.5 *:relative">
                              <div className="text-sm font-bold py-1 block">Ready to Use Solutions</div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="school-management-software-development.php" className="block font-semibold opacity-80">
                                    School Management System
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="college-management-software-development.php" className="block font-semibold opacity-80">
                                    College Management System
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="university-management-software-development.php" className="block font-semibold opacity-80">
                                    University Management System
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="institute-management-software-development.php" className="block font-semibold opacity-80">
                                    Institute Management System
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="online-exam-app-development.php" className="block font-semibold opacity-80">
                                    Online Exam App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="astrology-app-development.php" className="block font-semibold opacity-80">
                                    Astrology App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="mlm-software-development-company.php" className="block font-semibold opacity-80">
                                    MLM Software
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="hospital-management-software.php" className="block font-semibold opacity-80">
                                    Hospital Management System
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="inventory-management-software.php" className="block font-semibold opacity-80">
                                    Inventory Management Softwrae
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="nidhi-company-software.php" className="block font-semibold opacity-80">
                                    Nidhi Software
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="w-full text-sm md:text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1.5 *:relative">
                              <div className="text-sm font-bold py-1 block">Trending Apps</div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="healthcare-app-development.php" className="block font-semibold opacity-80">
                                    Healthcare App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="diet-and-nutrition-app-development.php" className="block font-semibold opacity-80">
                                    Diet and Nutrition App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="fitness-app-development.php" className="block font-semibold opacity-80">
                                    Fitness App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="elearning-app-development.php" className="block font-semibold opacity-80">
                                    Elearning App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="ott-app-development.php" className="block font-semibold opacity-80">
                                    OTT Platform App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="ar-vr-app-development.php" className="block font-semibold opacity-80">
                                    AR/VR App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="dating-app-development.php" className="block font-semibold opacity-80">
                                    Dating App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="event-tickets-booking-app-development.php" className="block font-semibold opacity-80">
                                    Event & Ticket Booking App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="pet-care-app-development-company.php" className="block font-semibold opacity-80">
                                    Pet Care App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="w-full text-sm md:text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1.5 *:relative">
                              <div className="text-sm font-bold py-1 block">Ecommerce Solutions</div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="fashion-ecommerce-development.php" className="block font-semibold opacity-80">
                                    Fashion Ecommerce App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="jewellery-ecommerce-development.php" className="block font-semibold opacity-80">
                                    Jewellery Ecommerce App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="beauty-cosmetic-store-app-development.php" className="block font-semibold opacity-80">
                                    Beauty & Cosmetic Ecommerce App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="gift-ecommerce-development.php" className="block font-semibold opacity-80">
                                    Gift Ecommerce App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="furniture-ecommerce-development.php" className="block font-semibold opacity-80">
                                    Furniture Ecommerce App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="b2b-ecommerce-development.php" className="block font-semibold opacity-80">
                                    B2B Ecommerce App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="b2c-ecommerce-development.php" className="block font-semibold opacity-80">
                                    B2C Ecommerce App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="d2c-ecommerce-development.php" className="block font-semibold opacity-80">
                                    D2C Ecommerce App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="market-place-ecommerce-development.php" className="block font-semibold opacity-80">
                                    Marketplace Ecommerce App
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative flex flex-col gap-y-3">
                        <input className="peer/mm hidden" type="checkbox" name="mmMenu" id="mmHire" />
                        <label htmlFor="mmHire" className="flex items-center gap-x-0.5 lg:text-sm md:text-xs text-sm font-semibold text-[#454444]">
                          Hire Developers
                          <Svg name="arrowDown" className="xl:size-5 lg:size-4 size-5 flex-none ml-auto transition-transform duration-500 group-hover/dd:[transform:rotateX(180deg)]" />
                        </label>
                        <div className="w-full peer-checked/mm:block hidden">
                          <div className="grid grid-cols-1 flex-wrap w-full gap-4">
                            <div className="w-full text-sm md:text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1.5 *:relative">
                              <div className="text-sm font-bold py-1 block">Trending</div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="" className="block font-semibold opacity-80">
                                    IT Staff Augmentation
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="hire-ui-ux-developers.php" className="block font-semibold opacity-80">
                                    UI/UX Designers
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="hire-software-qa-testers.php" className="block font-semibold opacity-80">
                                    QA Engineers
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="hire-mern-stack-developers.php" className="block font-semibold opacity-80">
                                    MERN Stack Developers
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="hire-mean-stack-developers.php" className="block font-semibold opacity-80">
                                    MEAN Stack Developers
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="hire-dedicated-developers.php" className="block font-semibold opacity-80">
                                    Dedicated Developers Team
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="w-full text-sm md:text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1.5 *:relative">
                              <div className="text-sm font-bold py-1 block">Mobile</div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="hire-mobile-app-developers.php" className="block font-semibold opacity-80">
                                    Hire Mobile App Developers
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="hire-android-app-developers.php" className="block font-semibold opacity-80">
                                    Hire Android App Developers
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="hire-ios-app-developers.php" className="block font-semibold opacity-80">
                                    Hire iOS App Developers
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="hire-flutter-app-developers.php" className="block font-semibold opacity-80">
                                    Hire Flutter App Developers
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="w-full text-sm md:text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1.5 *:relative">
                              <div className="text-sm font-bold py-1 block">Software</div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="hire-react-native-app-developers.php" className="block font-semibold opacity-80">
                                    Hire React Native App Developers
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="hire-reactjs-developers.php" className="block font-semibold opacity-80">
                                    Hire React Js Developers
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="hire-angular-developers.php" className="block font-semibold opacity-80">
                                    Hire Angular Developers
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="hire-full-stack-developers.php" className="block font-semibold opacity-80">
                                    Hire Full Stack Developers
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="w-full text-sm md:text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1.5 *:relative">
                              <div className="text-sm font-bold py-1 block">Backend</div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="hire-python-developers.php" className="block font-semibold opacity-80">
                                    Hire Python Developers
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="hire-php-developers.php" className="block font-semibold opacity-80">
                                    Hire PHP Developers
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="hire-java-developers.php" className="block font-semibold opacity-80">
                                    Hire JAVA Developers
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="hire-nodejs-developers.php" className="block font-semibold opacity-80">
                                    Hire NodeJs Developers
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="w-full text-sm md:text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1.5 *:relative">
                              <div className="text-sm font-bold py-1 block">Web</div>
                              <div>
                                <div className="flex h-1.5 w-1.5 flex-none">
                                  <Svg name="squire" className="h-1.5 w-1.5 opacity-90" />
                                </div>
                                <div className="flex-auto">
                                  <Link href="hire-web-designers.php" className="block font-semibold opacity-80">
                                    Hire Website Designers
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                                <div className="flex-auto">
                                  <Link href="hire-web-developers.php" className="block font-semibold opacity-80">
                                    Hire Website Developers
                                    <span className="absolute inset-0 z-[1]"></span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                
                      <Link href="portfolio.php" className="text-sm font-semibold text-[#454444]">Work</Link>
                      <Link href="blog" className="text-sm font-semibold text-[#454444]">Blogs</Link>
                      <Link href="contact-us.php" className="text-sm font-semibold text-[#454444]">Contact Us</Link>
                      <Link href="request-a-quote.php" className="text-sm font-semibold text-[#454444]">Request a Quote</Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default Navbar
