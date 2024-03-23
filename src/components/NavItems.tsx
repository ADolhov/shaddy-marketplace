"use client"

import { PRODUCT_CATEGORIES } from "@/config"
import { useRef, useState } from "react"
import NavItem from "./NavItem"
import { useOnClickOutside } from "@/hooks/use-on-click-outside"

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null)
  const isAnyOpen = activeIndex !== null

  const navRef = useRef<HTMLDivElement | null>(null)

  useOnClickOutside(navRef, () => {
    setActiveIndex(null)
  })
  
  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null)
          } else {
            setActiveIndex(i)
          }
        }

        const isOpen = activeIndex === i

        return (
          <NavItem
            category={category}
            isOpen={isOpen}
            handleOpen={handleOpen}
            key={category.value}
            isAnyOpen={isAnyOpen}
          ></NavItem>
        )
      })}
    </div>
  )
}

export default NavItems
