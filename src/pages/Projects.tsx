import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/lightswind/card";
import { projects } from "@/lib/data";
import { Button } from "@/components/lightswind/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-4">My Projects</h1>
            <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12">
                Here are some of the projects I'm proud to have worked on.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <Card key={project.title} className="flex flex-col">
                        <CardHeader>
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map(t => (
                                    <span key={t} className="text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-end space-x-2">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="icon">
                                    <Github className="h-4 w-4" />
                                </Button>
                            </a>
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <Button size="icon">
                                    <ExternalLink className="h-4 w-4" />
                                </Button>
                            </a>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Projects;
