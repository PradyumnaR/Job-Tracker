import { UserButton } from "@clerk/nextjs";
import LinksDropdown from "./LinksDropdown";

export default function Navbar() {
  return (
    <nav className='py-4 sm:px-16 lg:px-24 px-4 flex items-center justify-between shadow-md'>
      <div>
        <LinksDropdown />
      </div>
      <div className='flex items-center gap-x-4'>
        <UserButton afterSwitchSessionUrl='/' />
      </div>
    </nav>
  );
}
