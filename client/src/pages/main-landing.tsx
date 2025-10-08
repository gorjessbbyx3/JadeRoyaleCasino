import { Crown, Users, Shield, Clock, Star, Zap, TrendingUp, Trophy, Flame } from 'lucide-react';
import ParticlesBackground from '@/components/particles-background';
import CasinoChip from '@/components/casino-chip';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

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
                <h1 className="text-4xl sm:text-5xl font-black tracking-widest neon-text-rainbow animate-text-shimmer relative" 
                    style={{
                      fontFamily: 'Cinzel, serif', 
                      WebkitTextStroke: '1px rgba(0, 0, 0, 0.3)', 
                      textShadow: '0 0 20px rgba(255, 105, 180, 0.8), 0 0 40px rgba(255, 69, 0, 0.6), 0 0 60px rgba(138, 43, 226, 0.4)'
                    }}>
                  JADE ROYALE
                  {/* Text reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10 opacity-30 animate-pulse"></div>
                </h1>
                <div className="flex items-center gap-3 mt-1">
                  <div className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm rounded-full px-4 py-1 border border-primary/30">
                    <Crown className="w-4 h-4 text-primary animate-bounce-gentle" />
                    <span className="text-sm text-transparent morphing-gradient bg-clip-text font-black animate-holographic tracking-wide">PREMIUM CASINO</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Actions */}
            <div className="flex items-center gap-4 animate-slide-in-right">
              {/* Live indicator */}
              <div className="hidden md:flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-green-500/30">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                <span className="text-sm font-semibold text-green-400">2,847 ONLINE</span>
              </div>

              {/* Register button */}
              <Link href="/register">
                <Button
                  className="relative bg-gradient-to-r from-primary via-accent to-secondary hover:scale-110 transition-all duration-500 glow-button-mega shadow-2xl text-xl font-black px-10 py-4 rounded-full border-2 border-transparent overflow-hidden group"
                  data-testid="button-nav-register"
                >
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Button content */}
                  <div className="relative flex items-center gap-3">
                    <Zap className="w-6 h-6 animate-electric-pulse drop-shadow-lg" />
                    <span className="tracking-wide">JOIN ELITE</span>
                    <TrendingUp className="w-5 h-5 animate-pulse" />
                  </div>
                  
                  {/* Glowing border */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 -z-10"></div>
                </Button>
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
          backgroundImage: 'url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10"></div>
        <ParticlesBackground />

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/40 to-accent/30 rounded-full blur-2xl animate-float-slow animate-rainbow-glow"></div>
          <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-secondary/40 to-primary/30 rounded-full blur-3xl animate-float-delayed animate-rainbow-glow"></div>
          <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-br from-accent/50 to-secondary/40 rounded-full blur-xl animate-bounce-slow animate-rainbow-glow"></div>
          <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-primary/30 to-accent/40 rounded-full blur-2xl animate-float animate-rainbow-glow"></div>
          <div className="absolute bottom-1/3 right-10 w-20 h-20 bg-gradient-to-br from-secondary/40 to-primary/30 rounded-full blur-xl animate-bounce-gentle animate-rainbow-glow"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-30">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <h2 className="text-7xl sm:text-8xl lg:text-9xl font-black mb-6 leading-none" style={{ fontFamily: 'Playfair Display, Georgia, serif', WebkitTextStroke: '3px white', paintOrder: 'stroke fill', fontStyle: 'italic' }}>
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient-x bg-300% tracking-tight neon-text-enhanced text-shimmer animate-text-shimmer">
                    WIN BIG
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent opacity-50 blur-sm animate-gradient-x bg-300%">
                    WIN BIG
                  </div>
                </span>
              </h2>
            </div>

            <div className="animate-fade-in-up-delayed">
              <a href="http://cashout.realconnect.online" target="_blank" rel="noopener noreferrer">
                <Button
                  className="glow-button-insane text-black px-20 py-8 rounded-full text-3xl font-black shadow-2xl hover:scale-115 transition-all duration-500 relative overflow-hidden group border-4 border-transparent"
                  data-testid="button-play-now"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <Zap className="w-8 h-8 mr-4 animate-electric-pulse" />
                  PLAY NOW
                  <TrendingUp className="w-8 h-8 ml-4 animate-electric-pulse" />
                </Button>
              </a>

              <div className="mt-4 text-sm text-muted-foreground animate-pulse">
                <span className="inline-flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                  2,847 players online now
                </span>
              </div>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="glass-card-ultra p-8 rounded-2xl card-pass-effect-enhanced animate-slide-up group hover:scale-105 transition-all duration-500 animate-card-glow-intense" data-testid="stat-games">
                <div className="relative">
                  <div className="text-5xl font-black text-transparent morphing-gradient bg-clip-text mb-3 group-hover:scale-110 transition-transform animate-text-shimmer">500+</div>
                  <div className="text-base text-muted-foreground font-medium">Premium Games</div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 morphing-gradient rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity shadow-lg"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
                </div>
              </div>

              <div className="glass-card-ultra p-8 rounded-2xl card-pass-effect-enhanced animate-slide-up-delayed group hover:scale-105 transition-all duration-500 animate-card-glow-intense" data-testid="stat-support">
                <div className="relative">
                  <div className="text-5xl font-black text-transparent morphing-gradient bg-clip-text mb-3 group-hover:scale-110 transition-transform animate-text-shimmer">24/7</div>
                  <div className="text-base text-muted-foreground font-medium">VIP Support</div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 morphing-gradient rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity shadow-lg"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
                </div>
              </div>

              <div className="glass-card-ultra p-8 rounded-2xl card-pass-effect-enhanced animate-slide-up-delayed-more group hover:scale-105 transition-all duration-500 animate-card-glow-intense" data-testid="stat-payouts">
                <div className="relative">
                  <div className="text-5xl font-black text-transparent morphing-gradient bg-clip-text mb-3 group-hover:scale-110 transition-transform animate-text-shimmer">$5M+</div>
                  <div className="text-base text-muted-foreground font-medium">Daily Payouts</div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 morphing-gradient rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity shadow-lg"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
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
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-primary/30">
              <Crown className="w-5 h-5 text-primary animate-bounce-gentle" />
              <span className="text-sm font-semibold text-primary">Elite Features</span>
            </div>
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
            <div className="text-center group card-pass-effect-enhanced p-8 rounded-2xl glass-card-ultra hover:scale-105 transition-all duration-500 animate-fade-in-stagger-1 animate-card-glow-intense" data-testid="feature-payouts">
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl morphing-gradient flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl relative">
                <Clock className="w-12 h-12 text-background drop-shadow-lg" />
                <div className="absolute inset-0 morphing-gradient rounded-2xl opacity-20 blur-md animate-pulse"></div>
              </div>
              <h4 className="text-2xl font-black mb-4 text-transparent morphing-gradient bg-clip-text animate-text-shimmer">Instant Payouts</h4>
              <p className="text-muted-foreground leading-relaxed">Lightning-fast withdrawals processed in under 60 seconds</p>
            </div>

            <div className="text-center group card-pass-effect-enhanced p-8 rounded-2xl glass-card-ultra hover:scale-105 transition-all duration-500 animate-fade-in-stagger-2 animate-card-glow-intense" data-testid="feature-security">
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl morphing-gradient flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl relative">
                <Shield className="w-12 h-12 text-background drop-shadow-lg" />
                <div className="absolute inset-0 morphing-gradient rounded-2xl opacity-20 blur-md animate-pulse"></div>
              </div>
              <h4 className="text-2xl font-black mb-4 text-transparent morphing-gradient bg-clip-text animate-text-shimmer">Fort Knox Security</h4>
              <p className="text-muted-foreground leading-relaxed">Military-grade encryption with 256-bit SSL protection</p>
            </div>

            <div className="text-center group card-pass-effect-enhanced p-8 rounded-2xl glass-card-ultra hover:scale-105 transition-all duration-500 animate-fade-in-stagger-3 animate-card-glow-intense" data-testid="feature-rewards">
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl morphing-gradient flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl relative">
                <Crown className="w-12 h-12 text-background drop-shadow-lg" />
                <div className="absolute inset-0 morphing-gradient rounded-2xl opacity-20 blur-md animate-pulse"></div>
              </div>
              <h4 className="text-2xl font-black mb-4 text-transparent morphing-gradient bg-clip-text animate-text-shimmer">VIP Rewards</h4>
              <p className="text-muted-foreground leading-relaxed">Exclusive bonuses up to 500% and premium cashback</p>
            </div>

            <div className="text-center group card-pass-effect-enhanced p-8 rounded-2xl glass-card-ultra hover:scale-105 transition-all duration-500 animate-fade-in-stagger-4 animate-card-glow-intense" data-testid="feature-support">
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl morphing-gradient flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl relative">
                <Users className="w-12 h-12 text-background drop-shadow-lg" />
                <div className="absolute inset-0 morphing-gradient rounded-2xl opacity-20 blur-md animate-pulse"></div>
              </div>
              <h4 className="text-2xl font-black mb-4 text-transparent morphing-gradient bg-clip-text animate-text-shimmer">Elite Support</h4>
              <p className="text-muted-foreground leading-relaxed">Dedicated VIP managers and 24/7 priority assistance</p>
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