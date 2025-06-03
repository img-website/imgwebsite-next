
const Faq = () => {
    return (
      <section className="faqSection w-full relative overflow-hidden md:bg-[#F2FBFF] bg-white">
          <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
              <div className="flex flex-col w-full">
                  <h2 className="w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl md:font-bold font-semibold text-[#454444] text-balance relative z-10 md:text-center">Frequently Asked Questions</h2>
                  <div className="flex flex-wrap md:pt-12 pt-4 md:-mx-4 -mx-2 md:gap-y-8 gap-y-4">
                      <div className="md:w-1/2 w-full flex flex-col md:px-4 px-2">
                          <ul className="w-full flex flex-col md:gap-8 gap-4">
                              <li className="md:p-8 py-6 px-4 flex flex-col gap-2 rounded-xl bg-white shadow-[0px_3.29px_11.77px_0px_#0000001F] group/faq">
                                  <input type="radio" name="faq" id="faq1" className="hidden"/>
                                  <label htmlFor="faq1" className="flex items-start cursor-pointer gap-2 before:absolute before:-inset-4 relative">
                                      <h3 className="grow lg:text-base text-sm font-semibold text-[#454444]">What mobile app development services does IMG Global Infotech offer?</h3>
                                      <div className="shrink-0 size-6 rounded-full relative bg-[#F2F2F2] group-hover/faq:lg:bg-[#4B92FF] group-has-[:checked]/faq:before:!bg-[#4B92FF] group-has-[:checked]/faq:!bg-[#4B92FF] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/faq:lg:before:scale-100 duration-300"></div>
                                  </label>
                                  <div className="text-xs font-normal text-[#454444] hidden group-has-[:checked]/faq:block">
                                      <div>As a trusted and experienced mobile app development company, we offer a wide range of AI-powered mobile app development services such as:</div>
                                      <ul className="list-disc list-inside text-xs font-normal text-[#454444] py-4">
                                          <li>Android app development </li>
                                          <li>iOS app development </li>
                                          <li>Cross-platform app development </li>
                                          <li>Flutter app development </li>
                                          <li>React Native app development and more.</li>
                                      </ul>
                                      <div>We prioritize client satisfaction and go the extra mile to offer our clients outstanding solutions in the form of a mobile app.</div>
                                  </div>
                              </li>
                              <li className="md:p-8 py-6 px-4 flex flex-col gap-2 rounded-xl bg-white shadow-[0px_3.29px_11.77px_0px_#0000001F] group/faq">
                                  <input type="radio" name="faq" id="faq2" className="hidden"/>
                                  <label htmlFor="faq2" className="flex items-start cursor-pointer gap-2 before:absolute before:-inset-4 relative">
                                      <h3 className="grow lg:text-base text-sm font-semibold text-[#454444]">How Do You Ensure the Security of My Data and That of My Users?</h3>
                                      <div className="shrink-0 size-6 rounded-full relative bg-[#F2F2F2] group-hover/faq:lg:bg-[#4B92FF] group-has-[:checked]/faq:before:!bg-[#4B92FF] group-has-[:checked]/faq:!bg-[#4B92FF] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/faq:lg:before:scale-100 duration-300"></div>
                                  </label>
                                  <div className="text-xs font-normal text-[#454444] hidden group-has-[:checked]/faq:block">We care about the safety of your data. We use multiple layers of security like encryption both at rest and in motion, safe coding, and regular security checks. In addition, we follow the GDPR and other relevant data security rules, which means that data is treated with the utmost privacy and safety.</div>
                              </li>
                              <li className="md:p-8 py-6 px-4 flex flex-col gap-2 rounded-xl bg-white shadow-[0px_3.29px_11.77px_0px_#0000001F] group/faq">
                                  <input type="radio" name="faq" id="faq3" className="hidden"/>
                                  <label htmlFor="faq3" className="flex items-start cursor-pointer gap-2 before:absolute before:-inset-4 relative">
                                      <h3 className="grow lg:text-base text-sm font-semibold text-[#454444]">Does IMG Global Infotech offer post-release support and maintenance services?</h3>
                                      <div className="shrink-0 size-6 rounded-full relative bg-[#F2F2F2] group-hover/faq:lg:bg-[#4B92FF] group-has-[:checked]/faq:before:!bg-[#4B92FF] group-has-[:checked]/faq:!bg-[#4B92FF] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/faq:lg:before:scale-100 duration-300"></div>
                                  </label>
                                  <div className="text-xs font-normal text-[#454444] hidden group-has-[:checked]/faq:block">As a leading AI-driven digital transformation company, we provide best-in-class post-release and maintenance services. Whether you are building your app from scratch or upgrading from a legacy version, we are ready to assist you at every step.</div>
                              </li>
                              <li className="md:p-8 py-6 px-4 flex flex-col gap-2 rounded-xl bg-white shadow-[0px_3.29px_11.77px_0px_#0000001F] group/faq">
                                  <input type="radio" name="faq" id="faq4" className="hidden"/>
                                  <label htmlFor="faq4" className="flex items-start cursor-pointer gap-2 before:absolute before:-inset-4 relative">
                                      <h3 className="grow lg:text-base text-sm font-semibold text-[#454444]">What about other services such as integration and migration?</h3>
                                      <div className="shrink-0 size-6 rounded-full relative bg-[#F2F2F2] group-hover/faq:lg:bg-[#4B92FF] group-has-[:checked]/faq:before:!bg-[#4B92FF] group-has-[:checked]/faq:!bg-[#4B92FF] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/faq:lg:before:scale-100 duration-300"></div>
                                  </label>
                                  <div className="text-xs font-normal text-[#454444] hidden group-has-[:checked]/faq:block">IMG Global Infotech, a custom digital transformation solutions provider, offers an array of services fulfilling the digitalization needs of diverse industries. Whether you need to integrate APIs, software, or legacy systems or want to migrate to the latest technologies such as AI, Blockchain, IoT, etc., we are ready to help.</div>
                              </li>
                          </ul>
                      </div>
                      <div className="md:w-1/2 w-full flex flex-col md:px-4 px-2">
                          <ul className="w-full flex flex-col md:gap-8 gap-4">
                              <li className="md:p-8 py-6 px-4 flex flex-col gap-2 rounded-xl bg-white shadow-[0px_3.29px_11.77px_0px_#0000001F] group/faq">
                                  <input type="radio" name="faq" id="faq5" className="hidden"/>
                                  <label htmlFor="faq5" className="flex items-start cursor-pointer gap-2 before:absolute before:-inset-4 relative">
                                      <h3 className="grow lg:text-base text-sm font-semibold text-[#454444]">What types of specialization can I expect from IMG Global Infotech?</h3>
                                      <div className="shrink-0 size-6 rounded-full relative bg-[#F2F2F2] group-hover/faq:lg:bg-[#4B92FF] group-has-[:checked]/faq:before:!bg-[#4B92FF] group-has-[:checked]/faq:!bg-[#4B92FF] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/faq:lg:before:scale-100 duration-300"></div>
                                  </label>
                                  <div className="text-xs font-normal text-[#454444] hidden group-has-[:checked]/faq:block">
                                      <div>Serving all industry domains, the specialization you can expect from us includes:</div>
                                      <ul className="list-disc list-inside text-xs font-normal text-[#454444] py-4">
                                          <li>AI-powered app and software solutions</li>
                                          <li>SaaS product development </li>
                                          <li>Agile software development </li>
                                          <li>Emerging technology integration</li>
                                          <li>UI/UX designing and development </li>
                                          <li>Futuristic AI-driven E-commerce </li>
                                          <li>Software product engineering and more.</li>
                                      </ul>
                                  </div>
                              </li>
                              <li className="md:p-8 py-6 px-4 flex flex-col gap-2 rounded-xl bg-white shadow-[0px_3.29px_11.77px_0px_#0000001F] group/faq">
                                  <input type="radio" name="faq" id="faq6" className="hidden"/>
                                  <label htmlFor="faq6" className="flex items-start cursor-pointer gap-2 before:absolute before:-inset-4 relative">
                                      <h3 className="grow lg:text-base text-sm font-semibold text-[#454444]">What are the benefits of AI-driven digital transformation?</h3>
                                      <div className="shrink-0 size-6 rounded-full relative bg-[#F2F2F2] group-hover/faq:lg:bg-[#4B92FF] group-has-[:checked]/faq:before:!bg-[#4B92FF] group-has-[:checked]/faq:!bg-[#4B92FF] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/faq:lg:before:scale-100 duration-300"></div>
                                  </label>
                                  <div className="text-xs font-normal text-[#454444] hidden group-has-[:checked]/faq:block">
                                      <div>The digital transformation is the new normal, but it has some challenges. We are ready to assist in removing all roadblocks to your digital journey. The benefits our solutions can provide you with:</div>
                                      <ul className="list-disc list-inside text-xs font-normal text-[#454444] py-4">
                                          <li>Improved ROI</li>
                                          <li>2X growth </li>
                                          <li>Enhanced efficiency </li>
                                          <li>Informed decision making </li>
                                          <li>High profitability</li>
                                      </ul>
                                  </div>
                              </li>
                              <li className="md:p-8 py-6 px-4 flex flex-col gap-2 rounded-xl bg-white shadow-[0px_3.29px_11.77px_0px_#0000001F] group/faq">
                                  <input type="radio" name="faq" id="faq7" className="hidden"/>
                                  <label htmlFor="faq7" className="flex items-start cursor-pointer gap-2 before:absolute before:-inset-4 relative">
                                      <h3 className="grow lg:text-base text-sm font-semibold text-[#454444]">What's required to start with IMG Global Infotech?</h3>
                                      <div className="shrink-0 size-6 rounded-full relative bg-[#F2F2F2] group-hover/faq:lg:bg-[#4B92FF] group-has-[:checked]/faq:before:!bg-[#4B92FF] group-has-[:checked]/faq:!bg-[#4B92FF] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/faq:lg:before:scale-100 duration-300"></div>
                                  </label>
                                  <div className="text-xs font-normal text-[#454444] hidden group-has-[:checked]/faq:block">The answer is only an idea with a vision, and we ensure that we provide you with a futuristic solution to make your business dreams come true. But first, we want to know about your goals, which you can make simple for us by scheduling a <label htmlFor="leadPopup" className="inline cursor-pointer text-[#4B92FF]">discovery call</label>.</div>
                              </li>
                              <li className="md:p-8 py-6 px-4 flex flex-col gap-2 rounded-xl bg-white shadow-[0px_3.29px_11.77px_0px_#0000001F] group/faq">
                                  <input type="radio" name="faq" id="faq8" className="hidden"/>
                                  <label htmlFor="faq8" className="flex items-start cursor-pointer gap-2 before:absolute before:-inset-4 relative">
                                      <h3 className="grow lg:text-base text-sm font-semibold text-[#454444]">What makes IMG Global Infotech different?</h3>
                                      <div className="shrink-0 size-6 rounded-full relative bg-[#F2F2F2] group-hover/faq:lg:bg-[#4B92FF] group-has-[:checked]/faq:before:!bg-[#4B92FF] group-has-[:checked]/faq:!bg-[#4B92FF] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/faq:lg:before:scale-100 duration-300"></div>
                                  </label>
                                  <div className="text-xs font-normal text-[#454444] hidden group-has-[:checked]/faq:block">
                                      <div>Our win-win factor is simplifying challenges with a solution-oriented mindset. What makes us different is:</div>
                                      <ul className="list-disc list-inside text-xs font-normal text-[#454444] py-4">
                                          <li><b>Future-ready solutions</b>- Our talented professionals focus on futuristic solutions, leveraging their knowledge and skills in utilizing emerging technologies.</li>
                                          <li><b>Proven Track Record</b>- Since our inception, we have established ourselves as a trusted AI-driven solutions provider, ensuring quality and on-time delivery.</li>
                                          <li><b>Tech+Human</b>- We utilize a perfect combination of technology and human resources to deliver outstanding solutions that exceed our clients' expectations.</li>
                                      </ul>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
}

export default Faq