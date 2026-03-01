import { socialLinks } from "@/lib/data";

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        &copy; {new Date().getFullYear()} Jane Doe. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                                aria-label={link.name}
                            >
                                <link.icon className="h-6 w-6" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
