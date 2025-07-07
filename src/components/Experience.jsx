import { motion } from "framer-motion";

const EXPERIENCES = [
	{
		year: "2022-PRESENT",
		role: "Web Developer",
		company: "Freelancer",
		description:
			"I develop web applications for clients and take part in hackathons, where I build complete, fullstack solutions. The technology stack depends on project requirements, but I most often work with JavaScript, TypeScript, Java, React, Next.js, and Redux. These experiences help me sharpen my skills and stay current with modern development practices.",
		technologies: [
			"JavaScript",
			"TypeScript",
			"Java",
			"React",
			"Next.js",
			"Redux",
		],
	},
	{
		year: "2025",
		role: "FullStack Developer",
		company: "GDSoft",
		description:
			"Developing a dedicated software solution for GDSoft's internal system, delivering a complete project using Java, JavaScript, React and PostgreSQL. The work included designing architecture, implementing core functionalities, and ensuring production-level code quality. The project was delivered fully independently, in line with business expectations and on schedule. I develop web applications following responsive web design (RWD) principles and ensuring WCAG accessibility compliance to deliver inclusive and user-friendly experiences.",
		technologies: ["Java", "JavaScript", "React", "PostgreSQL", "RWD", "WCAG"],
	},
	{
		year: "2022 - 2024",
		role: "Junior Network Engineer",
		company: "Nokia/Łączpol",
		description:
			"As part of the network operations team, I was responsible for configuring, maintaining, and monitoring network infrastructure to ensure high system stability and performance. This experience strengthened my understanding of system reliability, optimization, and user-facing performance — skills I now apply when developing responsive and efficient web applications. Close collaboration with technical teams helped me build a structured, detail-oriented approach to development, which I now bring into frontend work focused on scalability, speed, and usability.",
		technologies: [
			"Network Infrastructure",
			"System Monitoring",
			"Performance Optimization",
			"Team Collaboration",
		],
	},
];

const Experience = () => {
	return (
		<div className="border-b border-neutral-900 pb-4">
			<motion.h1
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5 }}
				className="my-20 text-center text-4xl"
			>
				Experience
			</motion.h1>
			<div>
				{EXPERIENCES.map((experience, index) => (
					<div
						key={index}
						className="mb-8 flex flex-wrap lg:justify-center"
					>
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -100 }}
							transition={{ duration: 1 }}
							className="w-full lg:w-1/4"
						>
							<p className="mb-2 text-sm text-neutral-400">
								{experience.year}
							</p>
						</motion.div>
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: 100 }}
							transition={{ duration: 1 }}
							className="w-full max-w-xl lg:w-3/4"
						>
							<h6 className="mb-2 font-semibold">
								{experience.role} - {""}
								<span className="text-sm text-sky-700">
									{experience.company}
								</span>
							</h6>
							<p className="mb-4 text-neutral-400">
								{experience.description}
							</p>
							<div className="flex flex-wrap gap-2">
								{experience.technologies.map((tech, index) => (
									<span
										key={index}
										className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-sky-700"
									>
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Experience;
