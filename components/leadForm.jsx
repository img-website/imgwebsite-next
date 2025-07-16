import Svg from "@/components/svg"

const LeadForm = () => {
    return (
        <form className="group/lead relative flex flex-col rounded md:mx-0 sm:rounded-2xl leadForm has-[button:disabled]:pointer-events-none overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar]:bg-black/5 [&::-webkit-scrollbar-thumb]:bg-black/10 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar]:rounded-full md:pe-2 pe-1">
            <div className="grid grid-cols-2 gap-2">
                <div className="relative md:mb-4 mb-2">
                    <input type="text" id="name" className="block rounded-[15px] border border-[#B2C1F9] pr-2.5 ps-10 pb-2.5 pt-5 w-full text-sm appearance-none text-black focus:border-gray-500 focus:outline-none focus:ring-0 peer [&:user-invalid]:border-red-500" />
                    <label htmlFor="name" className="absolute text-sm text-gray-400 duration-300 pointer-events-none transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-placeholder-shown:start-10 peer-focus:start-2.5">Full Name <span className="text-red-500 font-bold">*</span></label>
                    <span className="absolute start-3 top-[1.45rem] text-gray-400 peer-placeholder-shown:top-[1.15rem] peer-focus:top-[1.45rem] duration-300 *:w-4 *:h-4">
                        <Svg name="user" />
                    </span>
                </div>
                <div className="relative md:mb-4 mb-2">
                    <input type="email" id="emailID" className="block rounded-[15px] border border-[#B2C1F9] pr-2.5 ps-10 pb-2.5 pt-5 w-full text-sm appearance-none text-black focus:border-gray-500 focus:outline-none focus:ring-0 peer [&:user-invalid]:border-red-500"/>
                    <label htmlFor="emailID" className="absolute text-sm text-gray-400 duration-300 pointer-events-none transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-placeholder-shown:start-10 peer-focus:start-2.5">Email ID <span className="text-red-500 font-bold">*</span></label>
                    <span className="absolute start-3 top-[1.45rem] text-gray-400 peer-placeholder-shown:top-[1.15rem] peer-focus:top-[1.45rem] duration-300 *:w-4 *:h-4">
                        <Svg name="email" />
                    </span>
                </div>
            </div>
            <div className="relative mb-4 [&_.iti--allow-dropdown]:after:content-['Please_enter_a_valid_phone_number.'] [&_.iti--allow-dropdown]:after:text-red-500 [&_.iti--allow-dropdown]:after:text-sm [&_.iti--allow-dropdown]:after:origin-left [&_.iti--allow-dropdown]:after:scale-0 [&_.iti--allow-dropdown]:after:h-0 [&_.iti--allow-dropdown]:after:overflow-hidden [&_.iti--allow-dropdown]:after:block [&_.iti--allow-dropdown]:after:duration-0 [&_.iti--allow-dropdown]:after:absolute [&_.iti--allow-dropdown]:after:bottom [&_.iti--allow-dropdown::after]:has-[input:user-invalid:focus]:h-5 [&_.iti--allow-dropdown::after]:has-[input:user-invalid:focus]:scale-100 has-[input:user-invalid:focus]:!mb-9 [&_.mobileNoErrorFooter]:has-[input:user-invalid]:!h-0 [&_.mobileNoErrorFooter]:has-[input:user-invalid]:!scale-0 [&_.iti\_\_selected-dial-code]:-mt-[1px] group-has-[.error:not(:empty)]/lead:has-[.phone-input:focus]:mb-9">
                <input type="tel" id="phone" className="block phone-input rounded-[15px] border border-[#B2C1F9] pr-2.5 ps-10 pb-2.5 pt-5 w-full text-sm appearance-none text-black focus:border-gray-500 focus:outline-none focus:ring-0 peer group-has-[.error:not(:empty)]/lead:border-red-500 [&:user-invalid]:border-red-500" />
                <label htmlFor="phone" className="absolute text-sm text-gray-400 duration-300 pointer-events-none transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-placeholder-shown:start-10 peer-focus:start-2.5">Mobile Number <span className="text-red-500 font-bold">*</span></label>
                <span className="absolute start-3 bottom-3 invisible text-gray-400 peer-placeholder-shown:bottom-4 peer-focus:bottom-3 duration-300 *:w-4 *:h-4">
                    <Svg name="email" />
                </span>
            </div>                   
            
            <div className="grid gap-3">
                <div className="relative md:mb-4 mb-2">
                    <select id="type" className="block rounded-[15px] border border-[#B2C1F9] pr-2.5 ps-10 pb-2.5 pt-5 w-full text-sm appearance-none text-black focus:border-gray-500 focus:outline-none focus:ring-0 peer [&:user-invalid]:border-red-500">
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Fantasy Cricket App Development">Fantasy Cricket App Development</option>
                        <option value="Fantasy Sports App Development">Fantasy Sports App Development</option>
                        <option value="Fantasy Football App Development">Fantasy Football App Development</option>
                        <option value="E-commerce Development">E-commerce Development</option>
                        <option value="MLM Software Development">MLM Software Development</option>
                        <option value="Website Design">Website Design</option>
                        <option value="Web Portal Development">Web Portal Development</option>
                        <option value="Custom ERP Development">Custom ERP Development</option>
                        <option value="Hire Dedicated Developer">Hire Dedicated Developer</option>
                        <option value="SEO/Social Media Marketing">SEO/Social Media Marketing</option>
                        <option value="Casino Game App Development">Casino Game App Development</option>
                        <option value="Fantasy Kabaddi App Development">Fantasy Kabaddi App Development</option>
                        <option value="Fantasy Stock Market App Development">Fantasy Stock Market App Development</option>
                        <option value="Fantasy Stock Market App Development">Sports Betting App Development</option>
                        <option value="Launch Your Online Ecommerce Store">Launch Your Online Ecommerce Store</option>
                        <option value="Other Services">Other Services</option>
                    </select>
                    <label htmlFor="type" className="absolute text-sm text-gray-400 duration-300 pointer-events-none transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-placeholder-shown:start-10 peer-focus:start-2.5">Looking For <span className="text-red-500 font-bold">*</span></label>
                    <span className="absolute start-3 top-[1.45rem] text-gray-400 peer-placeholder-shown:top-[1.15rem] peer-focus:top-[1.45rem] duration-300 *:w-4 *:h-4">
                        <Svg name="dropdown" />
                    </span>
                </div>
                
            </div>
            <div className="relative md:mb-4 mb-2">
                <textarea id="Requierment" className=" block rounded-[15px] border border-[#B2C1F9] pr-2.5 ps-10 pb-2.5 pt-5 w-full text-sm appearance-none text-black focus:border-gray-500 focus:outline-none focus:ring-0 peer [&:user-invalid]:border-red-500"></textarea>
                <label htmlFor="Requierment" className="absolute text-sm text-gray-400 duration-300 pointer-events-none transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-placeholder-shown:start-10 peer-focus:start-2.5">Write a Message <span className="text-red-500 font-bold">*</span></label>
                <span className="absolute start-3 top-[1.45rem] text-gray-400 peer-placeholder-shown:top-[1.15rem] peer-focus:top-[1.45rem] duration-300 *:w-4 *:h-4">
                    <Svg name="writeMessage" />
                </span>
            </div>
            <button type="submit" className="inline-flex justify-center rounded-[15px] lg:mtauto text-sm font-semibold py-4 px-3 bg-slate-900 text-white [&:not(:disabled)]:hover:md:scale-90 duration-200 w-full group/submit">
                <span className="group-[:disabled]/submit:hidden md:hidden">Let's Connect</span>
                <span className="group-[:disabled]/submit:hidden max-md:hidden">Schedule Free Consultation</span>
                <span className="group-[:disabled]/submit:flex items-center hidden">
                    <Svg name="loader" className="inline w-4 h-4 me-3 text-white animate-spin" />
                    Loading...
                </span>
            </button>
        </form>
    )
}

export default LeadForm