import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Code,
  Smartphone,
  Globe,
  Package,
  Workflow,
  Calculator,
  Settings,
  Cpu,
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-card via-card to-accent/20 border-t border-border overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-indigo-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-600/5 via-indigo-600/5 to-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-1">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative group">
                  <Cpu className="h-7 w-7 text-primary transition-transform group-hover:scale-110 group-hover:rotate-12" strokeWidth={2} />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 opacity-30 blur-lg group-hover:opacity-50 transition-opacity" />
                </div>
                <div className="flex flex-col items-center leading-tight">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    ModernStack
                  </h3>
                  <h4 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Developer
                  </h4>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Full-Stack Software Engineer creating innovative digital
                solutions that transform businesses and drive sustainable
                growth.
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <a
                href="https://github.com/BasharatJS?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/md-basharat-taquee-84a6a922b"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              </a>
              <a
                href="mailto:mdbasharattaquee@gmail.com"
                className="group p-3 rounded-xl bg-gradient-to-br from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-card-foreground relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </h4>
            <div className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Projects', href: '/projects' },
                { name: 'Services', href: '/services' },
                { name: 'Contact', href: '/contact' },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="group flex items-center text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-300"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-card-foreground relative">
              Services
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></div>
            </h4>
            <div className="space-y-3">
              {[
                { name: 'Landing Pages', icon: Globe },
                { name: 'Custom Web Development', icon: Code },
                { name: 'Mobile App Development', icon: Smartphone },
                { name: 'Inventory Management', icon: Package },
                { name: 'Workflow Automation', icon: Workflow },
                { name: 'Accounting & Financial System', icon: Calculator },
                { name: 'System Integration', icon: Settings },
              ].map((service, index) => (
                <a
                  key={index}
                  href="/services"
                  className="group flex items-center text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:bg-clip-text transition-all duration-300 cursor-pointer"
                >
                  <service.icon className="w-4 h-4 mr-3 text-purple-600 group-hover:scale-110 transition-transform" />
                  {service.name}
                </a>
              ))}
            </div>
          </div>

          {/* Get In Touch */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-card-foreground relative">
              Get In Touch
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full"></div>
            </h4>
            <div className="space-y-4">
              <div className="group flex items-center gap-4 p-3 rounded-lg bg-gradient-to-r from-transparent to-accent/30 hover:from-accent/20 hover:to-accent/50 transition-all duration-300">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  Pune, India
                </span>
              </div>

              <div className="group flex items-center gap-4 p-3 rounded-lg bg-gradient-to-r from-transparent to-accent/30 hover:from-accent/20 hover:to-accent/50 transition-all duration-300">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    mdbasharattaquee@gmail.com
                  </span>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    tutortaquee123@gmail.com
                  </span>
                </div>
              </div>

              <div className="group flex items-center gap-4 p-3 rounded-lg bg-gradient-to-r from-transparent to-accent/30 hover:from-accent/20 hover:to-accent/50 transition-all duration-300">
                <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    +91 9492976113
                  </span>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    +91 8178764456
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative mt-16 pt-8 border-t border-gradient-to-r from-transparent via-border to-transparent">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-muted-foreground">
                © {new Date().getFullYear()} CodeByBasharat.com. All rights
                reserved.
              </p>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>Built with</span>
                <span className="px-2 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded text-xs font-medium">
                  Next.js
                </span>
                <span>&</span>
                <span className="px-2 py-1 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded text-xs font-medium">
                  Tailwind CSS
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for freelance work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
