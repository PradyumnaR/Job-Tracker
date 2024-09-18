"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import { Button } from "./ui/button";
import { AlignLeft } from "lucide-react";
import NavLinks from "@/utils/links";
import { usePathname } from "next/navigation";

export default function LinksDropdown() {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='lg:hidden'>
        <Button variant='outline' size='icon'>
          <AlignLeft />
          <span className='sr-only'>Toggle links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='w-52 lg:hidden'
        align='start'
        sideOffset={25}
      >
        {NavLinks.map((link) => {
          return (
            <DropdownMenuItem key={link.href}>
              <Button
                asChild
                className='w-full flex'
                variant={pathname == link.href ? "default" : "link"}
              >
                <Link href={link.href} className='gap-x-3'>
                  {link.icon}
                  <span className='capitalize'>{link.label}</span>
                </Link>
              </Button>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
