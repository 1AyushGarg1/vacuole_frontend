import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Search, Heart, Filter, ShoppingBag, Star, Zap, Target, BookOpen, TrendingUp, Shield, Clock, Users, Database, Cpu, ChevronUp, Package, Store, Smartphone, Shirt, Headphones, Laptop } from 'lucide-react';
import {
  UserButton,
  useClerk,
  useUser
} from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCards, setFlippedCards] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { user } = useUser()
  const { openSignIn } = useClerk()
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    
    // Mouse tracking for parallax effect
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleCard = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Smart AI Search",
      shortDesc: "AI understands your needs across platforms",
      fullContent: {
        title: "Advanced AI Search Engine",
        description: "Our proprietary AI analyzes your search intent, understands context, and searches across 50+ e-commerce platforms simultaneously. It learns from your preferences and delivers increasingly accurate results.",
        benefits: ["Natural language processing", "Context-aware search", "Multi-platform integration", "Learning algorithm"]
      }
    },
    {
      icon: <Filter className="w-8 h-8" />,
      title: "Intelligent Filtering",
      shortDesc: "Advanced filtering by brand, price, specs",
      fullContent: {
        title: "Dynamic Product Filtering",
        description: "Filter products by any parameter imaginable - brand reputation, price ranges, technical specifications, user ratings, and even sustainability scores. Our AI suggests the most relevant filters.",
        benefits: ["Real-time price comparison", "Spec-based filtering", "Brand reliability scores", "Custom filter creation"]
      }
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Universal Favorites",
      shortDesc: "Track products across all platforms",
      fullContent: {
        title: "Cross-Platform Wishlist",
        description: "Save products from any e-commerce site into unified collections. Get price alerts, stock notifications, and discover similar products. Never lose track of items you love.",
        benefits: ["Price drop alerts", "Stock notifications", "Unified collections", "Smart recommendations"]
      }
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Trend Analysis",
      shortDesc: "Discover trending products in real-time",
      fullContent: {
        title: "Market Trend Intelligence",
        description: "Stay ahead with real-time trend analysis. Our AI identifies emerging products, seasonal patterns, and market shifts to help you discover the next big thing before it goes mainstream.",
        benefits: ["Real-time trend detection", "Seasonal predictions", "Emerging product alerts", "Market analysis"]
      }
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust Score",
      shortDesc: "Reliability ratings for products & sellers",
      fullContent: {
        title: "Product Reliability Engine",
        description: "Every product gets a comprehensive trust score based on seller reputation, review authenticity, return policies, and historical data. Make confident purchases with our reliability insights.",
        benefits: ["Seller verification", "Review authenticity check", "Return policy analysis", "Historical performance"]
      }
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Price History",
      shortDesc: "Track price changes over time",
      fullContent: {
        title: "Smart Price Tracking",
        description: "View detailed price history charts, get the best time to buy recommendations, and receive alerts when prices drop. Our AI predicts optimal purchase timing.",
        benefits: ["Historical price charts", "Best time to buy alerts", "Price prediction AI", "Deal notifications"]
      }
    }
  ];

  const ecommerceLogos = [
    { name: 'Amazon', icon: <Package className="w-6 h-6" /> },
    { name: 'Flipkart', icon: <Store className="w-6 h-6" /> },
    { name: 'Nike', icon: <Shirt className="w-6 h-6" /> },
    { name: 'Apple', icon: <Smartphone className="w-6 h-6" /> },
    { name: 'Samsung', icon: <Laptop className="w-6 h-6" /> },
    { name: 'Myntra', icon: <Shirt className="w-6 h-6" /> },
    { name: 'Nykaa', icon: <Star className="w-6 h-6" /> },
    { name: 'Ajio', icon: <ShoppingBag className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative">
      {/* Enhanced Animated background with parallax */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-green-400/10 to-emerald-400/5 rounded-full blur-3xl"
          style={{
            top: `${20 + mousePosition.y * 0.1}%`,
            left: `${10 + mousePosition.x * 0.1}%`,
            animation: 'float 6s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-emerald-400/15 to-green-500/8 rounded-full blur-2xl"
          style={{
            bottom: `${20 + mousePosition.y * 0.05}%`,
            right: `${15 + mousePosition.x * 0.08}%`,
            animation: 'float 8s ease-in-out infinite reverse'
          }}
        ></div>
        <div 
          className="absolute w-48 h-48 bg-gradient-to-r from-green-300/12 to-emerald-500/6 rounded-full blur-xl"
          style={{
            top: `${60 + mousePosition.y * 0.03}%`,
            right: `${30 + mousePosition.x * 0.06}%`,
            animation: 'float 10s ease-in-out infinite'
          }}
        ></div>
        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-green-400/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-emerald-400/8 rounded-full blur-3xl animate-bounce delay-1000"></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-30px) rotate(180deg) scale(1.1); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(34, 197, 94, 0.2); }
          50% { box-shadow: 0 0 30px rgba(34, 197, 94, 0.6), 0 0 60px rgba(34, 197, 94, 0.3); }
        }
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse-glow {
          0%, 100% { 
            transform: scale(1);
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
          }
          50% { 
            transform: scale(1.05);
            box-shadow: 0 0 40px rgba(34, 197, 94, 0.5);
          }
        }
        .flip-card {
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
        }
        .flip-card.flipped .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 1rem;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
        .scrolling-logos {
          animation: scroll 30s linear infinite;
        }
        .scrolling-logos:hover {
          animation-play-state: paused;
        }
        .floating-icon {
          animation: float 6s ease-in-out infinite;
        }
        .gradient-text {
          background: linear-gradient(135deg, #10b981, #34d399, #6ee7b7);
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .scroll-to-top {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 backdrop-blur-md bg-gray-900/90 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 via-emerald-400 to-green-500 rounded-xl flex items-center justify-center shadow-xl floating-icon">
                <Sparkles className="w-6 h-6 text-gray-900 " />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-500 rounded-xl blur opacity-50 -z-10"></div>
            </div>
            <span className="text-2xl font-bold gradient-text">Vacuole</span>
          </div>
          {
            (
              <button onClick={() => {
                  if (user) {
                    navigate("/home"); // user is signed in, go straight to /home
                  } else {
                    openSignIn(); // not signed in, open modal
                  }
              }} className="group relative bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-3 rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 flex items-center space-x-2 text-gray-900 font-bold overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <span className="relative z-10">Get Started</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            )
          }
          
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-6">
        <div className={`max-w-6xl mx-auto text-center relative z-10 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <span className="inline-flex items-center px-6 py-3 rounded-full text-sm bg-gray-800/60 border border-green-400/40 backdrop-blur-md text-green-400 shadow-lg">
              <Zap className="w-5 h-5 mr-2 animate-pulse" />
              AI-Powered Product Discovery Revolution
            </span>
          </div>

          <h1 className="text-6xl md:text-5xl font-bold mb-10 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
              Find the Perfect Product with
            </span>
            <br />
            <span className="gradient-text text-7xl md:text-9xl">
              Smart AI Search
            </span>
          </h1>

          <p className="text-2xl md:text-2xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed">
            Vacuole uses cutting-edge AI to understand your needs and filter through millions of products 
            across 50+ e-commerce platforms, delivering personalized recommendations with detailed specifications.
          </p>

          {/* Enhanced Animated CTA Button */}
          <div className="mb-20">
            { 
              (<button onClick={() => {
                if (user) {
                  navigate("/home"); // user is signed in, go straight to /home
                } else {
                  openSignIn(); // not signed in, open modal
                }
            }} className="group relative bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 px-10 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:via-emerald-600 hover:to-green-700 transition-all duration-700 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/40 flex items-center space-x-3 mx-auto text-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                <Search className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-500" />
                <span className="relative z-10">Try Now</span>
                <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
              </button>)
            }
          </div>


          {/* Enhanced E-commerce Platform Showcase with Scrolling Animation */}
          <div className="mb-20">
            <p className="text-gray-400 mb-10 text-xl">Works seamlessly with 50+ platforms</p>
            <div className="relative overflow-hidden bg-gray-800/20 rounded-2xl py-8 backdrop-blur-sm border border-gray-700/30">
              <div className="flex space-x-12 scrolling-logos">
                {[...ecommerceLogos, ...ecommerceLogos].map((platform, index) => (
                  <div 
                    key={`${platform.name}-${index}`}
                    className="flex-shrink-0 group flex items-center space-x-4 px-8 py-4 rounded-xl bg-gray-800/40 border border-gray-600/40 backdrop-blur-sm hover:border-green-400/60 hover:bg-gray-700/40 transition-all duration-500 hover:scale-110 cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center text-gray-900 group-hover:scale-110 transition-transform duration-300">
                      {platform.icon}
                    </div>
                    <span className="text-gray-300 font-semibold text-lg group-hover:text-green-400 transition-colors duration-300 whitespace-nowrap">
                      {platform.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Interactive Features Section */}
      <div className="py-40 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-bold mb-8 gradient-text">
              Powerful Features
            </h2>
            <p className="text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Click on any feature card to explore how our AI transforms your shopping experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`flip-card h-96 cursor-pointer group ${flippedCards[index] ? 'flipped' : ''}`}
                onClick={() => toggleCard(index)}
              >
                <div className="flip-card-inner">
                  {/* Enhanced Front of card */}
                  <div className="flip-card-front p-10 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-600/40 backdrop-blur-md hover:border-green-400/60 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-400/20 flex flex-col justify-center items-center text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-green-400 via-emerald-400 to-green-500 flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl relative z-10">
                      <div className="text-gray-900">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-6 text-green-400 group-hover:text-green-300 transition-colors duration-300 relative z-10">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-xl mb-6 relative z-10">
                      {feature.shortDesc}
                    </p>
                    <div className="mt-auto text-green-400 text-base font-semibold group-hover:text-green-300 transition-colors duration-300 relative z-10">
                      Click to explore →
                    </div>
                  </div>

                  {/* Enhanced Back of card */}
                  <div className="flip-card-back p-8 bg-gradient-to-br from-green-400/15 to-emerald-500/10 border border-green-400/40 backdrop-blur-md">
                    <div className="h-full flex flex-col">
                      <h3 className="text-2xl font-bold mb-6 text-green-400">
                        {feature.fullContent.title}
                      </h3>
                      <p className="text-gray-200 text-base mb-8 leading-relaxed flex-grow">
                        {feature.fullContent.description}
                      </p>
                      <div className="space-y-3">
                        {feature.fullContent.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center space-x-3 text-base">
                            <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full shadow-lg"></div>
                            <span className="text-gray-200 font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced How it Works Section */}
      <div className="py-40 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-24 gradient-text">
            Simple. Smart. Efficient.
          </h2>
          
          <div className="grid md:grid-cols-4 gap-16">
            {[
              { icon: <Target className="w-12 h-12" />, title: "Describe", desc: "Tell us what you're looking for in natural language" },
              { icon: <Cpu className="w-12 h-12" />, title: "AI Analysis", desc: "Our AI processes and understands your requirements instantly" },
              { icon: <Database className="w-12 h-12" />, title: "Smart Search", desc: "Search across 50+ platforms simultaneously with precision" },
              { icon: <Heart className="w-12 h-12" />, title: "Save & Track", desc: "Organize favorites and get real-time price alerts" }
            ].map((step, index) => (
              <div key={index} className="relative group">
                <div className="w-28 h-28 mx-auto mb-8 bg-gradient-to-br from-green-400 via-emerald-400 to-green-500 rounded-3xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-2xl text-gray-900 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-emerald-400 rounded-3xl blur opacity-50 -z-10 group-hover:opacity-75 transition-opacity duration-500"></div>
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6 text-green-400 group-hover:text-green-300 transition-colors duration-300">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed text-lg">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Final CTA Section */}
      <div className="py-20 px-4 ">
        <div className="max-w-6xl mx-auto text-center">
          <div className="p-20 rounded-3xl bg-gradient-to-br from-green-400/15 via-emerald-400/10 to-green-500/5 border border-green-400/30 backdrop-blur-md relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-transparent"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-400/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-10 gradient-text">
                Ready to Transform Your Shopping?
              </h2>
              <p className="text-2xl text-gray-200 mb-16 max-w-4xl mx-auto leading-relaxed">
                Join thousands of smart shoppers who use Vacuole to discover the best products with AI-powered precision.
              </p>
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-10">
              {/* Start Searching Button */}
              <button  onClick={() => {
                if (user) {
                  navigate("/home"); // user is signed in, go straight to /home
                } else {
                  openSignIn(); // not signed in, open modal
                }
            }} className="group bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:via-emerald-600 hover:to-green-700 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/40 flex items-center space-x-3 text-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                <Search className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-500" />
                <span className="relative z-10">Start Searching</span>
              </button>

              {/* Learn More Button */}
              <button className="border-2 border-gray-500 px-8 py-4 rounded-full text-lg font-semibold hover:border-green-400 hover:bg-green-400/15 hover:text-green-400 transition-all duration-500 flex items-center space-x-3 group hover:scale-105">
                <BookOpen className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span>Learn More</span>
              </button>
            </div>

            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer with Scroll to Top */}
      <footer className="py-16 px-6 border-t border-gray-800/60 bg-gray-900/80 backdrop-blur-md relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 via-emerald-400 to-green-500 rounded-xl flex items-center justify-center shadow-xl floating-icon">
                  <Sparkles className="w-7 h-7 text-gray-900" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-500 rounded-xl blur opacity-50 -z-10"></div>
              </div>
              <span className="text-3xl font-bold gradient-text">Vacuole</span>
            </div>
            <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
              Smart AI-powered product discovery across multiple e-commerce platforms
            </p>
    
          </div>
        </div>
      </footer>
    </div>
  );
}