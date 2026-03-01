import { AuroraBackground } from "@/components/lightswind/aurora-background";
import { TypingText } from "@/components/lightswind/typing-text";
import { Button } from "@/components/lightswind/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects, skills } from "@/lib/data";
import { GlowingCards } from "@/components/lightswind/glowing-cards";
import { Marquee } from "@/components/lightswind/3d-marquee";

const Home = () => {
    return (
        <div>
            <AuroraBackground>
                <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4">
                    <TypingText
                        text="Hi, I'm Jane Doe. A Freelance Frontend Developer."
                        className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
                    />
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                        I craft beautiful, responsive, and performant web experiences with a passion for modern technologies and user-centric design.
                    </p>
                    <Link to="/projects">
                        <Button size="lg" className="group">
                            View My Work <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </AuroraBackground>

            <section id="skills" className="py-20 bg-gray-50 dark:bg-black/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">My Tech Stack</h2>
                    <div className="relative">
                        <Marquee className="[--duration:30s]">
                            {skills.map((skill) => (
                                <div key={skill} className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm text-lg font-medium">
                                    {skill}
                                </div>
                            ))}
                        </Marquee>
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-50 dark:from-black/50 to-transparent"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-50 dark:from-black/50 to-transparent"></div>
                    </div>
                </div>
            </section>

            <section id="featured-projects" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
                    <GlowingCards>
                        {projects.slice(0, 3).map((project, index) => (
                            <div key={index} className="glowing-card">
                                <div className="glowing-card-content">
                                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-gray-400 mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map(t => <span key={t} className="text-xs font-semibold bg-gray-700 text-gray-200 px-2 py-1 rounded-full">{t}</span>)}
                                        </div>
                                        <Link to="/projects">
                                            <Button variant="outline" className="w-full">
                                                Learn More
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </GlowingCards>
                </div>
            </section>
        </div>
    );
};

export default Home;
