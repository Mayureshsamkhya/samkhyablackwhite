import Link from "next/link"
import Image from "next/image"
import React from "react"

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center space-x-2">
      <Image
        src="/samkhyalogo.png"
        alt="logo"
        width={56}
        height={56}
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-14 lg:h-14 object-contain"
        priority
      />
      <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black">
        samkhya.ai
      </span>
    </Link>
  )
}
