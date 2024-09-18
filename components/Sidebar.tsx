"use client";
import Logo from "@/assets/logo.svg";
import NavLinks from "@/utils/links";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className='py-4 px-8 bg-slate-300 h-full'>
      <div className='flex flex-row items-center'>
        <Image src={Logo} alt='logo' className=' mr-4 w-20 h-20' />
        <h2 className='text-2xl'>Job-Tracker</h2>
      </div>
      <div className='flex flex-col mt-20 gap-y-4'>
        {NavLinks.map((link) => {
          return (
            <Button
              asChild
              key={link.href}
              variant={pathname == link.href ? "default" : "link"}
            >
              <Link href={link.href} className='flex items-center gap-x-2'>
                {link.icon}
                <span className='capitalize'>{link.label}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </aside>
  );
}
