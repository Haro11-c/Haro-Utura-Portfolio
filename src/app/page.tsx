'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Theme handling
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-2xl font-bold gradient-text tracking-tight"
              >
                Haro-Dev
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary-500 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary-500 transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-primary-500 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-primary-500 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary-500 transition-colors">Contact</button>

              <button
                onClick={toggleTheme}
                className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {darkMode ? (
                  <i className="fas fa-sun text-xl"></i>
                ) : (
                  <i className="fas fa-moon text-xl"></i>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {darkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
            <div className="px-6 py-8 flex flex-col space-y-6 text-lg">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left py-2 hover:text-primary-500 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm <span className="gradient-text">Haro Utura</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-lg">
              Full Stack Developer crafting beautiful, responsive, and high-performance web applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl font-medium transition-all active:scale-95"
              >
                Get In Touch
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-2xl font-medium transition-all"
              >
                View My Work
              </button>
            </div>

            <div className="flex gap-8 text-sm pt-6">
              <div className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-primary-500"></i>
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-600 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white dark:border-gray-900 shadow-2xl float-animation">
                <Image
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2"
                  alt="Haro Utura"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold">Who I Am</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a passionate full-stack developer based in Addis Ababa with over 5 years of experience building modern web applications.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I love turning ideas into reality using clean code, modern frameworks, and thoughtful design.
              </p>

              <div className="pt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary-100 dark:bg-gray-800 flex items-center justify-center">
                    <i className="fas fa-envelope text-2xl text-primary-600"></i>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600 dark:text-gray-400">haroutura4@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary-100 dark:bg-gray-800 flex items-center justify-center">
                    <i className="fas fa-phone text-2xl text-primary-600"></i>
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600 dark:text-gray-400">+251 912 485 544</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-8">Experience</h3>
              <div className="space-y-10">
                <div className="border-l-4 border-primary-500 pl-6">
                  <h4 className="font-semibold text-xl">Senior Frontend Developer</h4>
                  <p className="text-primary-600 dark:text-primary-400">TechCorp • 2020 - Present</p>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Leading frontend architecture with React, Next.js, and TypeScript.
                  </p>
                </div>

                <div className="border-l-4 border-primary-500 pl-6">
                  <h4 className="font-semibold text-xl">Full Stack Developer</h4>
                  <p className="text-primary-600 dark:text-primary-400">WebSolutions • 2018 - 2020</p>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Built scalable full-stack applications using MERN stack.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Skills & Technologies</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {[
              { name: "JavaScript", icon: "fab fa-js", color: "text-yellow-400", level: 90 },
              { name: "React / Next.js", icon: "fab fa-react", color: "text-blue-500", level: 88 },
              { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500", level: 82 },
              { name: "TypeScript", icon: "fas fa-code", color: "text-blue-600", level: 85 },
              { name: "Tailwind CSS", icon: "fab fa-css3-alt", color: "text-cyan-500", level: 95 },
              { name: "MongoDB", icon: "fas fa-database", color: "text-green-600", level: 78 },
              { name: "MySQL", icon: "fas fa-database", color: "text-blue-400", level: 75 },
              { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500", level: 95 },
              { name: "CSS3", icon: "fab fa-css3-alt", color: "text-blue-500", level: 92 },
              { name: "PHP", icon: "fab fa-php", color: "text-purple-500", level: 85 },
              { name: "Laravel", icon: "fab fa-laravel", color: "text-red-500", level: 80 },
              { name: "Java", icon: "fab fa-java", color: "text-red-600", level: 75 },
            ].map((skill, i) => (
              <div key={i} className="skill-card bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 text-center hover:border-primary-500 group">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                  <i className={`${skill.icon} ${skill.color}`}></i>
                </div>
                <h3 className="font-semibold text-xl mb-4">{skill.name}</h3>
                <div className="h-2.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards */}
            {[
              {
                title: "E-commerce Platform",
                desc: "Full-featured online store with cart, payments, and admin panel.",
                tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              },
              {
                title: "TaskFlow - Productivity App",
                desc: "Collaborative task management with real-time updates and drag & drop.",
                tags: ["React", "Firebase", "Tailwind", "Framer Motion"],
                image: "https://images.unsplash.com/photo-1555421689-3f034debb7a6"
              },
              {
                title: "Analytics Dashboard",
                desc: "Real-time social media analytics with beautiful data visualizations.",
                tags: ["Next.js", "TypeScript", "Recharts", "Supabase"],
                image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d"
              }
            ].map((project, i) => (
              <div key={i} className="project-card bg-white dark:bg-gray-950 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 group">
                <div className="h-64 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-4 py-1 text-xs font-medium bg-primary-100 dark:bg-gray-800 text-primary-700 dark:text-primary-300 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6 text-sm">
                    <a href="#" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="https://github.com/Haro11-c" className="flex items-center gap-2 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                      <i className="fab fa-github"></i> Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Let's Work Together</h2>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <div className="space-y-10">
                {[
                  { icon: "fas fa-envelope", title: "Email", value: "haroutura4@gmail.com" },
                  { icon: "fas fa-phone-alt", title: "Phone", value: "+251 912 485 544" },
                  { icon: "fas fa-map-marker-alt", title: "Location", value: "Addis Ababa, Ethiopia" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary-100 dark:bg-gray-900 flex items-center justify-center flex-shrink-0">
                      <i className={`${item.icon} text-2xl text-primary-600`}></i>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{item.title}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-lg">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16">
                <h4 className="text-xl font-semibold mb-6">Connect With Me</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/Haro11-c" target="_blank" className="h-14 w-14 rounded-2xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all text-2xl">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/haro-utura-kerro-560667239" target="_blank" className="h-14 w-14 rounded-2xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-2xl">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://www.instagram.com/haroutura" target="_blank" className="h-14 w-14 rounded-2xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all text-2xl">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://twitter.com/haroutura" target="_blank" className="h-14 w-14 rounded-2xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all text-2xl">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.facebook.com/haro.utura" target="_blank" className="h-14 w-14 rounded-2xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all text-2xl">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 focus:outline-none focus:border-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input type="email" className="w-full px-6 py-4 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 focus:outline-none focus:border-primary-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input type="text" className="w-full px-6 py-4 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 focus:outline-none focus:border-primary-500" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea rows={6} className="w-full px-6 py-4 rounded-3xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 focus:outline-none focus:border-primary-500 resize-y"></textarea>
              </div>

              <button
                type="button"
                onClick={() => alert("Thank you! I'll get back to you soon.")}
                className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-2xl transition-all active:scale-[0.985]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-950 py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex gap-6">
              <a href="https://github.com/Haro11-c" target="_blank" className="text-2xl text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/haro-utura-kerro-560667239" target="_blank" className="text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/haroutura" target="_blank" className="text-2xl text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com/haroutura" target="_blank" className="text-2xl text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.facebook.com/haro.utura" target="_blank" className="text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-center">
              © 2026 Haro Utura. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}