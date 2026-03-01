import { SparkleNavbar } from "@/components/lightswind/sparkle-navbar";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
];

const Navbar = () => {
    return <SparkleNavbar links={navLinks} />;
};

export default Navbar;
