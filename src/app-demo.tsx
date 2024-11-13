import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import React from "react";

function App() {
	return (
		<div className="mx-auto min-h-screen max-w-3xl">
			<header className="border-divider container mx-auto border-b sm:py-8">
				<nav className="flex items-center justify-between">
					<h1 className="font-heading text-2xl font-bold">Frontio Demo</h1>
					<div className="flex space-x-4">
						<a className="hover:text-gray-300" href="#/">
							Posts
						</a>
						<a className="hover:text-gray-300" href="#/">
							Tags
						</a>
						<a className="hover:text-gray-300" href="#/">
							About
						</a>
					</div>
				</nav>
			</header>

			<main className="container mx-auto pb-4">
				<section className="mb-8 pt-12">
					<h2 className="text-h1 font-heading mb-4 font-bold">Hello World!</h2>
					<p className="text-medium mb-4 mt-8">
						Frontio Demo is a minimal, responsive, accessible and SEO-friendly
						React blog theme. This theme follows best practices and provides
						accessibility out of the box. Light and dark mode are supported by
						default. Moreover, additional color schemes can also be configured.
					</p>
					<p className="mb-4">
						Read the blog posts or check{" "}
						<a
							className="inline-block underline decoration-dashed underline-offset-4"
							href="#/"
						>
							README
						</a>{" "}
						for more info.
					</p>
					<div className="mt-4 flex space-x-4">
						<span>Social Links:</span>
						<div className="flex space-x-3">
							<Github className="h-5 w-5" />
							<Facebook className="h-5 w-5" />
							<Instagram className="h-5 w-5" />
							<Linkedin className="h-5 w-5" />
						</div>
					</div>
					<div className="mt-4 flex space-x-4">
						<button className="bg-button-primary-default font-heading rounded-button text-button-primary-foreground hover:bg-button-primary-hover active:bg-button-primary-active px-6 py-3 font-medium">
							Get Started
						</button>
						<button className="rounded-button font-heading border-button-primary-default border-2 px-6 py-3">
							Register
						</button>
					</div>
				</section>

				<section className="border-divider mb-8 border-t pt-8">
					<h3 className="text-h3 font-heading mb-4 font-bold">Featured</h3>
					<div className="space-y-4">
						{[
							{
								date: "Jul 25, 2024 | 04:11 AM",
								description:
									"Comment function on a static blog hosted on GitHub Pages with Giscus.",
								title: "How to integrate Giscus comments into AstroPaper",
							},
							{
								date: "Updated: Jan 15, 2024 | 05:05 AM",
								description:
									"How you can make AstroPaper theme absolutely yours.",
								title: "How to configure AstroPaper theme",
							},
							{
								date: "Jan 4, 2024 | 01:38 AM",
								description:
									"AstroPaper v4: ensuring a smoother and more feature-rich blogging experience.",
								title: "AstroPaper 4.0",
							},
							{
								date: "Updated: Dec 21, 2023 | 01:12 AM",
								description:
									"Some rules & recommendations for creating or adding new posts using AstroPaper theme.",
								title: "Adding new posts in AstroPaper theme",
							},
						].map((post, index) => (
							<div key={index} className="pt-2">
								<a href="#/">
									<h4 className="font-heading text-h4 text-accent font-medium decoration-dashed underline-offset-4 hover:underline">
										{post.title}
									</h4>
								</a>
								<p className="text-foreground-muted text-small font-mono italic">
									{post.date}
								</p>
								<p>{post.description}</p>
							</div>
						))}
					</div>
				</section>

				<section className="border-divider mb-8 border-t pt-8">
					<h3 className="font-heading mb-4 text-2xl font-bold">Recent Posts</h3>
					<div className="space-y-4">
						{[
							{
								date: "Updated: Jan 8, 2024 | 10:59 AM",
								description:
									"How to use Git Hooks to set your Created and Modified Dates on AstroPaper",
								title: "How to use Git Hooks to set Created and Modified Dates",
							},
							{
								date: "Jan 8, 2024 | 10:16 AM",
								description: "How to add a new social icon to AstroPaper",
								title: "How to add a new Social Icon to AstroPaper",
							},
							{
								date: "Updated: Jan 4, 2024 | 01:09 AM",
								description:
									"Some of the well-crafted, predefined color schemes for AstroPaper blog theme.",
								title: "Predefined color schemes",
							},
							{
								date: "Updated: Jan 3, 2024 | 06:53 AM",
								description:
									"How you can add an 'Estimated Reading time' in your blog posts of AstroPaper.",
								title: "How to add an estimated reading time in AstroPaper",
							},
						].map((post, index) => (
							<div key={index} className="pt-2">
								<a href="#/">
									<h4 className="font-heading text-accent font-medium decoration-dashed underline-offset-4 hover:underline">
										{post.title}
									</h4>
								</a>
								<p className="text-foreground-muted text-small font-mono italic">
									{post.date}
								</p>
								<p>{post.description}</p>
							</div>
						))}
					</div>
					<div className="mt-8 flex items-center justify-center">
						<a className="text-accent mt-4 block hover:underline" href="#/">
							All Posts →
						</a>
					</div>
				</section>
			</main>

			<footer className="container mx-auto mb-8 mt-4 border-t border-gray-700 p-4">
				<div className="flex items-center justify-between">
					<p className="text-small text-foreground-muted">
						Copyright © 2024 | All rights reserved.
					</p>
					<div className="flex space-x-4">
						<Github className="h-5 w-5" />
						<Facebook className="h-5 w-5" />
						<Instagram className="h-5 w-5" />
						<Linkedin className="h-5 w-5" />
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
