import Link from "next/link"

const Copyright = () => {
    return (
      <div className="w-full flex flex-wrap items-center gap-x-10 gap-y-5 justify-center pt-4 lg:pt-8 lg:mt-8 border-t border-white/20 text-xs lg:text-sm">
          <div className="w-auto opacity-80">©2014 - 2025 IMG Global Infotech. All rights Reserved</div>
          <div className="w-auto inline-flex flex-wrap gap-2 items-center">
              <Link href="privacy-policy.php" className="w-auto opacity-80 hover:text-amber-400 duration-200 hoverLink flex items-center gap-2">Privacy Policy</Link>
              <div className="border-l border-white/20 h-4 w-[1px]"></div>
              <Link href="terms-and-conditions.php" className="w-auto opacity-80 hover:text-amber-400 duration-200 hoverLink flex items-center gap-2">Terms & Conditions</Link>
              <div className="border-l border-white/20 h-4 w-[1px]"></div>
              <Link href="disclaimer.php" className="w-auto opacity-80 hover:text-amber-400 duration-200 hoverLink flex items-center gap-2">Disclaimer</Link>
              <div className="border-l border-white/20 h-4 w-[1px]"></div>
              <Link href="sitemap.html" className="w-auto opacity-80 hover:text-amber-400 duration-200 hoverLink flex items-center gap-2">Sitemap</Link>
          </div>
      </div>
    )
}

export default Copyright