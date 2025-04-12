
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Check, Briefcase, Star, ArrowRight, ChevronRight, Lock, TrendingUp } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <Lock className="h-6 w-6 text-fairlance-primary" />,
      title: "Smart Contract Escrow",
      description: "Funds are held securely in escrow and automatically released when work is completed and verified.",
    },
    {
      icon: <Star className="h-6 w-6 text-fairlance-primary" />,
      title: "Blockchain Reputation",
      description: "Immutable reputation system based on verified completion of projects and client reviews.",
    },
    {
      icon: <Shield className="h-6 w-6 text-fairlance-primary" />,
      title: "Decentralized Dispute Resolution",
      description: "Fair and transparent dispute resolution through community-based arbitration.",
    },
  ];

  const testimonials = [
    {
      quote: "FairLance has completely changed how I find work. The blockchain verification gives my clients confidence in my skills.",
      author: "Alex Chen",
      title: "Frontend Developer",
      rating: 5,
    },
    {
      quote: "The escrow system gives me peace of mind that I'll get paid for my work. No more chasing clients for payments!",
      author: "Sarah Johnson",
      title: "UI/UX Designer",
      rating: 5,
    },
    {
      quote: "As a client, I love how I can see a freelancer's verified work history on the blockchain. No more fake portfolios!",
      author: "Michael Rodriguez",
      title: "Project Manager",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-gradient-to-r from-fairlance-primary to-fairlance-secondary rounded-md flex items-center justify-center">
                <span className="text-white font-bold">F</span>
              </div>
              <span className="ml-2 text-xl font-bold">FairLance</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-fairlance-primary">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-fairlance-primary">How It Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-fairlance-primary">Testimonials</a>
            </nav>
            
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline">Log In</Button>
              <Button className="bg-fairlance-primary hover:bg-fairlance-primary/90">Sign Up</Button>
            </div>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-fairlance-primary">Features</a>
              <a href="#how-it-works" className="block px-3 py-2 text-gray-600 hover:text-fairlance-primary">How It Works</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-600 hover:text-fairlance-primary">Testimonials</a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-5 space-x-3">
                <Button variant="outline" className="w-full">Log In</Button>
                <Button className="w-full bg-fairlance-primary hover:bg-fairlance-primary/90">Sign Up</Button>
              </div>
            </div>
          </div>
        )}
      </header>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32 bg-gradient-to-br from-fairlance-light via-white to-fairlance-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">The Blockchain-Powered</span>
                <span className="block text-fairlance-primary">Freelance Platform</span>
              </h1>
              <p className="mt-6 text-base text-gray-500 sm:text-lg md:text-xl">
                FairLance connects freelancers and clients with smart contracts, ensuring transparent, fair, and secure relationships in the digital age.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <Link to="/dashboard">
                    <Button size="lg" className="w-full md:w-auto bg-fairlance-primary hover:bg-fairlance-primary/90">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="w-full md:w-auto">
                    Learn More
                  </Button>
                </div>
                <p className="mt-4 text-sm text-gray-500 flex items-center justify-center lg:justify-start">
                  <Lock className="mr-1 h-4 w-4" />
                  Secured by blockchain technology
                </p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-6">
              <div className="relative lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div className="relative h-64 w-full rounded-2xl shadow-xl overflow-hidden sm:h-72 md:h-96 lg:w-full lg:h-full bg-white p-2">
                  <img
                    className="h-full w-full object-cover rounded-xl"
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="Remote worker using laptop"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl flex items-end p-6">
                    <div className="flex items-center space-x-2">
                      <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                        <TrendingUp className="h-5 w-5 text-fairlance-primary" />
                      </div>
                      <div className="text-white">
                        <div className="text-sm font-medium">Blockchain verified</div>
                        <div className="text-xs">1,238 completed projects</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="bg-fairlance-light rounded-2xl p-6">
              <div className="text-3xl md:text-4xl font-bold text-fairlance-primary">$4.2M+</div>
              <div className="text-sm md:text-base text-gray-600 mt-2">Securely paid through smart contracts</div>
            </div>
            <div className="bg-fairlance-light rounded-2xl p-6">
              <div className="text-3xl md:text-4xl font-bold text-fairlance-primary">15,000+</div>
              <div className="text-sm md:text-base text-gray-600 mt-2">Verified freelancers worldwide</div>
            </div>
            <div className="bg-fairlance-light rounded-2xl p-6">
              <div className="text-3xl md:text-4xl font-bold text-fairlance-primary">8,500+</div>
              <div className="text-sm md:text-base text-gray-600 mt-2">Completed projects on blockchain</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-fairlance-primary font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Blockchain-Powered Freelancing
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Experience the future of freelancing with these innovative features
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="h-12 w-12 rounded-md bg-fairlance-accent flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="mt-5 text-lg font-medium text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-fairlance-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-fairlance-primary font-semibold tracking-wide uppercase">How It Works</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Simple, Transparent, Secure
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our blockchain technology ensures fairness at every step
            </p>
          </div>

          <div className="mt-16">
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-around">
                <span className="h-10 w-10 flex items-center justify-center bg-fairlance-primary rounded-full text-white font-medium">1</span>
                <span className="h-10 w-10 flex items-center justify-center bg-fairlance-primary rounded-full text-white font-medium">2</span>
                <span className="h-10 w-10 flex items-center justify-center bg-fairlance-primary rounded-full text-white font-medium">3</span>
                <span className="h-10 w-10 flex items-center justify-center bg-fairlance-primary rounded-full text-white font-medium">4</span>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-4">
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900">Create Your Profile</h3>
                <p className="mt-2 text-base text-gray-500">Sign up, connect your wallet, and showcase your skills with blockchain verification.</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900">Find or Post Projects</h3>
                <p className="mt-2 text-base text-gray-500">Browse available jobs or create a project with clear milestones and deliverables.</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900">Secure Smart Contracts</h3>
                <p className="mt-2 text-base text-gray-500">Funds are held in escrow and automatically released upon completion verification.</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900">Build Your Reputation</h3>
                <p className="mt-2 text-base text-gray-500">Each completed project adds to your immutable blockchain reputation score.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-fairlance-primary font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What Our Users Say
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow border border-gray-100">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-4 text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-fairlance-accent flex items-center justify-center text-fairlance-primary font-bold">
                      {testimonial.author.charAt(0)}
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-fairlance-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to transform your freelancing experience?
            </h2>
            <p className="mt-4 text-lg leading-6 text-fairlance-accent">
              Join thousands of freelancers and clients already benefiting from blockchain technology.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <Link to="/dashboard">
                  <Button size="lg" className="bg-white text-fairlance-primary hover:bg-gray-50">
                    Get Started
                    <ChevronRight className="ml-2 -mr-1 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="ml-3 inline-flex">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-fairlance-primary/90">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <div className="h-8 w-8 bg-gradient-to-r from-fairlance-primary to-fairlance-secondary rounded-md flex items-center justify-center">
                  <span className="text-white font-bold">F</span>
                </div>
                <span className="ml-2 text-xl font-bold">FairLance</span>
              </div>
              <p className="mt-4 text-sm text-gray-400">
                Transforming freelancing with blockchain technology, ensuring transparency, security, and fairness.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Platform</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Find Work</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Find Talent</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Smart Contracts</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">API</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} FairLance. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Discord</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.608 1.2495-1.8447-.2762-3.6677-.2762-5.4878 0-.1634-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0786-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
