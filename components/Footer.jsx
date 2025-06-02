import AwardsRecognitions2 from "@/components/awardsRecognitions/awardsRecognitions2"
import Address from "@/components/Address"
import AllFooterMenu from "@/components/AllFooterMenu"
import Copyright from "@/components/Copyright"

const Footer = () => {
    return (
        <footer className="relative bg- bg-[#16161d] pt-8 sm:pt-16 select-nonee text-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 z-[1] relative">
                <AwardsRecognitions2 />
            </div>
            <div className="w-full bg-[#23232c] lg:mt-12 lg:mb-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 z-[1] relative">
                    <Address/>
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 z-[1] relative">
                <AllFooterMenu/>
            </div>
            <div className="w-full bg-[#23232c] pb-4 sm:pb-8">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 z-[1] relative">
                    <Copyright/>
                </div>
            </div>
        </footer>
    )
}

export default Footer