import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import Logo from "../assets/logo.svg";
import LandingImg from "../assets/main.svg";

export default function Home() {
  return (
    <main>
      <header className='max-w-6xl mx-auto px-4 sm:px-8 py-6'>
        <div className='flex flex-row items-center'>
          <Image src={Logo} alt='logo' className=' mr-4 w-20 h-20' />
          <h2 className='text-2xl'>Job-Tracker</h2>
        </div>
      </header>
      <section className='max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center'>
        <div className=''>
          <p className='leading-loose max-w-md mt-4'>
            Job tracker keeps track of the applied jobs.
          </p>
          <Button asChild className='mt-4'>
            <Link href='/add-job'>Get Started</Link>
          </Button>
        </div>
        <Image
          src={LandingImg}
          alt='landing'
          className='w-96 h-96 hidden lg:block pb-10'
        />
      </section>
    </main>
  );
}
