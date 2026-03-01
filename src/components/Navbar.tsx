import { SparkleNavbar } from "@/components/lightswind/sparkle-navbar";
import { navLinks } from "@/lib/data";
import { ToggleTheme } from "./lightswind/toggle-theme";

const Navbar = () => {
  return (
    <SparkleNavbar
      navLinks={navLinks}
      brandName="Jane Doe"
      className="bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
        <ToggleTheme />
    </SparkleNavbar>
  );
};

export default Navbar;
