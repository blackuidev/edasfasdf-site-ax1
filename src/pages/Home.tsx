import { AuroraBackground } from "@/components/lightswind/aurora-background";
import { TypingText } from "@/components/lightswind/typing-text";
import { Marquee } from "@/components/lightswind/3d-marquee";
import { GlowingCards, GlowingCardsItem, GlowingCardsRoot } from "@/components/lightswind/glowing-cards";
import { skills, projects } from "@/lib/data";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Home = () => {
    const featuredProjects = projects.slice(0, 3);

    return (
        <div className="w-full">
            <AuroraBackground>
                <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4 text-center">
                    <TypingText
                        text="Freelance Front-End Developer"
                        className="text-lg md:text-xl text-neutral-300 mb-2"
                    />
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 mb-6">
                        John Doe
                    </h1>
                    <p className="max-w-2xl text-neutral-300 md:text-lg">
                        I craft beautiful, responsive, and high-performance web applications.
                        Let's build something amazing together.
                    </p>
                </div>
            </AuroraBackground>

            <section className="py-20">
                <h2 className="text-4xl font-bold text-center mb-12">My Tech Stack</h2>
                <div className="relative">
                    <Marquee pauseOnHover>
                        {skills.map((skill) => (
                            <div key={skill.name} className="flex items-center gap-4 px-6 py-3 bg-neutral-900/80 border border-neutral-800 rounded-lg shadow-lg mx-4">
                                <skill.icon className="w-8 h-8 text-cyan-400" />
                                <span className="text-lg font-semibold">{skill.name}</span>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </section>

            <section className="py-20 px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
                <GlowingCardsRoot>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {featuredProjects.map((project) => (
                            <GlowingCardsItem key={project.id}>
                                <div className="p-6 bg-neutral-950/80 rounded-xl h-full flex flex-col">
                                    <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-neutral-400 flex-grow">{project.description}</p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.tags.map(tag => <span key={tag} className="px-2 py-1 text-xs bg-cyan-900/50 text-cyan-300 rounded">{tag}</span>)}
                                    </div>
                                </div>
                            </GlowingCardsItem>
                        ))}
                    </div>
                </GlowingCardsRoot>
                 <div className="text-center mt-12">
                    <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors">
                        View All Projects <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
