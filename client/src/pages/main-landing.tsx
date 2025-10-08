import { Crown, Users, Shield, Clock, Star, Zap, TrendingUp, Trophy, Flame, UserPlus, Play } from 'lucide-react';
import ParticlesBackground from '@/components/particles-background';
import CasinoChip from '@/components/casino-chip';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import video1 from '@assets/4F0CE286-FD88-4504-8901-0F196458AD49_1759892799065.mp4';
import video2 from '@assets/843bf821-5b19-4227-9fdc-68ad9952f48d-video_1759892799066.mp4';
import video3 from '@assets/B6F8F7EB-FD75-4827-BCA9-2F03E9A6BAE6_1759892799066.mp4';
import video4 from '@assets/308140cc-7cec-48af-a6e4-5f46dba4e018-video_1759892799066.mp4';
import backgroundImage from '@assets/IMG_4980_1759896782981.jpeg';

export default function MainLanding() {
  return (
    <div className="min-h-screen relative overflow-hidden" data-testid="main-landing">
      {/* Redesigned Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card-ultra border-b-2 border-primary/30 backdrop-blur-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-primary/5 to-black/40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-24">
            {/* Logo Section */}
            <div className="flex items-center gap-4 animate-slide-in-left">
              <div className="relative group">
                {/* Main logo circle */}
                <div className="w-20 h-20 rounded-full morphing-gradient flex items-center justify-center animate-card-glow-intense shadow-2xl relative overflow-hidden">
                  <Flame className="w-10 h-10 text-background animate-electric-pulse drop-shadow-lg relative z-10" />
                  {/* Inner glow effect */}
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-50"></div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-3 -right-3 w-8 h-8 morphing-gradient rounded-full animate-rainbow-glow shadow-lg opacity-80">
                  <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/30 to-transparent"></div>
                </div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-secondary to-accent rounded-full animate-pulse shadow-md">
                  <Star className="w-3 h-3 text-background absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>

                {/* Orbiting ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin-slow"></div>
                <div className="absolute inset-2 rounded-full border border-accent/40 animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
              </div>

              {/* Brand text */}
              <div className="flex flex-col">
                {/* The following div has been optimized for mobile by adjusting font sizes and margins */}
                <div className="animate-slide-in-left-delayed">
                  <h1 className="text-2xl sm:text-4xl font-serif font-black text-white mb-1 sm:mb-2 tracking-tight">
                    Jade Royale
                  </h1>
                  <p className="text-primary/90 text-sm sm:text-lg font-medium tracking-wide">
                    Premium Gaming Experience
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Actions */}
            {/* The following div has been optimized for mobile by adjusting gap, padding, text sizes, and icon sizes. */}
            <div className="flex items-center gap-3 sm:gap-6 animate-slide-in-right">
              {/* Live indicator */}
              <div className="hidden md:flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-green-500/30">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                <span className="text-sm font-semibold text-green-400">2,847 ONLINE</span>
              </div>

              {/* Register button */}
              <Link
                href="/register"
                className="relative inline-flex items-center justify-center px-4 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-bold text-black bg-gradient-to-r from-primary to-accent rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-primary/50 group overflow-hidden"
                data-testid="button-nav-register"
              >
                <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                  <UserPlus className="w-4 h-4 sm:w-6 sm:h-6" />
                  <span className="hidden xs:inline sm:inline">Join Now</span>
                  <span className="xs:hidden sm:hidden">Join</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"></div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 px-4 overflow-hidden min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <ParticlesBackground />

        <div className="max-w-7xl mx-auto relative z-30">
          <div className="text-center">
            <div className="animate-fade-in-up">
              {/* Enhanced subtitle with layered effects */}
              <div className="relative mb-10 pt-20">
                <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white/95 tracking-wide relative" 
                   style={{ 
                     textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9), 0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 69, 0, 0.2)',
                     fontFamily: 'Inter, sans-serif'
                   }}>
                  <span className="relative">
                    Experience the Ultimate Casino Adventure
                    {/* Subtle glow behind subtitle */}
                    <div className="absolute inset-0 bg-white/5 blur-lg -z-10 scale-110"></div>
                  </span>
                </div>

                {/* Accent line under subtitle */}
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4 animate-pulse"></div>
              </div>
            </div>

            <div className="animate-fade-in-up-delayed">
              <div className="relative mb-8">
                <a href="http://cashout.realconnect.online" target="_blank" rel="noopener noreferrer">
                  <Button
                    className="relative text-black px-24 py-10 rounded-full text-4xl font-black shadow-2xl hover:scale-110 transition-all duration-700 overflow-hidden group border-4 border-transparent"
                    data-testid="button-play-now"
                    style={{ 
                      background: 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--secondary)), hsl(var(--primary)))',
                      backgroundSize: '300% 300%',
                      animation: 'gradient-x 3s ease infinite',
                      boxShadow: `
                        0 0 40px rgba(255, 69, 0, 0.8),
                        0 0 80px rgba(255, 105, 180, 0.6),
                        0 0 120px rgba(138, 43, 226, 0.4),
                        0 15px 40px rgba(0, 0, 0, 0.6),
                        inset 0 2px 0 rgba(255, 255, 255, 0.3),
                        inset 0 -2px 0 rgba(0, 0, 0, 0.3)
                      `,
                      textShadow: '3px 3px 6px rgba(0, 0, 0, 0.7)',
                      borderImage: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent) 1'
                    }}
                  >
                    {/* Multiple shine effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1400 delay-100"></div>

                    {/* Button content */}
                    <div className="relative flex items-center gap-6 z-20">
                      <div className="relative">
                        <Zap className="w-10 h-10 animate-electric-pulse drop-shadow-lg" />
                        <div className="absolute inset-0 blur-md bg-white/20 rounded-full animate-pulse"></div>
                      </div>
                      <span className="tracking-wider font-black relative">
                        PLAY NOW
                        <div className="absolute inset-0 blur-sm bg-black/10 -z-10"></div>
                      </span>
                      <div className="relative">
                        <TrendingUp className="w-10 h-10 animate-electric-pulse drop-shadow-lg" />
                        <div className="absolute inset-0 blur-md bg-white/20 rounded-full animate-pulse delay-75"></div>
                      </div>
                    </div>

                    {/* Enhanced glow backgrounds */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-700 -z-10 scale-150"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-accent opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700 -z-20 scale-200"></div>

                    {/* Pulsing border effect */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/20 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
                  </Button>
                </a>
              </div>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="glass-card-ultra p-10 rounded-2xl card-pass-effect-enhanced animate-slide-up group hover:scale-105 transition-all duration-500 animate-card-glow-intense backdrop-blur-md border border-white/20" 
                   data-testid="stat-games"
                   style={{ boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 69, 0, 0.2)' }}>
                <div className="relative text-center">
                  <div className="text-6xl font-black bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform animate-text-shimmer drop-shadow-lg">12,000+</div>
                  <div className="text-lg text-white font-semibold tracking-wide" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}>Different Games</div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 morphing-gradient rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity shadow-lg"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
                </div>
              </div>

              <div className="glass-card-ultra p-10 rounded-2xl card-pass-effect-enhanced animate-slide-up-delayed group hover:scale-105 transition-all duration-500 animate-card-glow-intense backdrop-blur-md border border-white/20" 
                   data-testid="stat-support"
                   style={{ boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 105, 180, 0.2)' }}>
                <div className="relative text-center">
                  <div className="text-6xl font-black bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform animate-text-shimmer drop-shadow-lg">24/7</div>
                  <div className="text-lg text-white font-semibold tracking-wide" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}>VIP Support</div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 morphing-gradient rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity shadow-lg"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
                </div>
              </div>

              <div className="glass-card-ultra p-10 rounded-2xl card-pass-effect-enhanced animate-slide-up-delayed-more group hover:scale-105 transition-all duration-500 animate-card-glow-intense backdrop-blur-md border border-white/20" 
                   data-testid="stat-payouts"
                   style={{ boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 191, 255, 0.2)' }}>
                <div className="relative text-center">
                  <div className="text-6xl font-black bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform animate-text-shimmer drop-shadow-lg">$5M+</div>
                  <div className="text-lg text-white font-semibold tracking-wide" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}>Daily Payouts</div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 morphing-gradient rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity shadow-lg"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h3 className="text-5xl sm:text-6xl font-serif font-black mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Why Choose Jade Royale
              </span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience gaming excellence with our premium features designed for the ultimate casino experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group card-pass-effect-enhanced rounded-2xl glass-card-ultra hover:scale-105 transition-all duration-500 animate-fade-in-stagger-1 animate-card-glow-intense overflow-hidden h-64" data-testid="feature-payouts">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover rounded-2xl"
              >
                <source src={video1} type="video/mp4" />
              </video>
            </div>

            <div className="group card-pass-effect-enhanced rounded-2xl glass-card-ultra hover:scale-105 transition-all duration-500 animate-fade-in-stagger-2 animate-card-glow-intense overflow-hidden h-64" data-testid="feature-security">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover rounded-2xl"
              >
                <source src={video2} type="video/mp4" />
              </video>
            </div>

            <div className="group card-pass-effect-enhanced rounded-2xl glass-card-ultra hover:scale-105 transition-all duration-500 animate-fade-in-stagger-3 animate-card-glow-intense overflow-hidden h-64" data-testid="feature-rewards">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover rounded-2xl"
              >
                <source src={video3} type="video/mp4" />
              </video>
            </div>

            <div className="group card-pass-effect-enhanced rounded-2xl glass-card-ultra hover:scale-105 transition-all duration-500 animate-fade-in-stagger-4 animate-card-glow-intense overflow-hidden h-64" data-testid="feature-support">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover rounded-2xl"
              >
                <source src={video4} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-20 px-4 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Flame className="w-6 h-6 text-background" />
              </div>
              <h2 className="text-3xl font-black tracking-wider neon-text-enhanced" style={{fontFamily: 'Cinzel, serif'}}>JADE ROYALE</h2>
            </div>
            <div className="mb-6">
              <p className="text-lg font-semibold text-primary tracking-wider">
                Powered by GorJess&Co
              </p>
            </div>
            <p className="text-muted-foreground text-lg mb-6">
              &copy; 2024 Jade Royale. All rights reserved. | 18+ | Play Responsibly
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-primary">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Licensed & Regulated</span>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>Secure Gaming</span>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>Fair Play Certified</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}