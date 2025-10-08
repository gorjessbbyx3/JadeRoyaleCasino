import { Crown, Users, Shield, Clock, Star, Zap, TrendingUp, Trophy, Flame } from 'lucide-react';
import ParticlesBackground from '@/components/particles-background';
import CasinoChip from '@/components/casino-chip';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import video1 from '@assets/4F0CE286-FD88-4504-8901-0F196458AD49_1759892799065.mp4';
import video2 from '@assets/843bf821-5b19-4227-9fdc-68ad9952f48d-video_1759892799066.mp4';
import video3 from '@assets/B6F8F7EB-FD75-4827-BCA9-2F03E9A6BAE6_1759892799066.mp4';
import video4 from '@assets/308140cc-7cec-48af-a6e4-5f46dba4e018-video_1759892799066.mp4';

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
                    <span className="tracking-wide">New User Registration</span>
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
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(255, 69, 0, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(138, 43, 226, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 80%, rgba(0, 191, 255, 0.2) 0%, transparent 50%),
            linear-gradient(135deg, #000000 0%, #0a0a0a 25%, #1a0a1a 50%, #0a1a1a 75%, #000000 100%),
            url(/hero-bg.jpg)
          `,
          backgroundSize: 'cover, cover, cover, cover, cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Enhanced layered background overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,69,0,0.1)_0%,transparent_70%)] z-10"></div>
        
        <ParticlesBackground />

        {/* Enhanced Floating Elements with improved positioning and effects */}
        <div className="absolute inset-0 pointer-events-none z-20">
          {/* Large ambient orbs */}
          <div className="absolute top-16 left-8 w-48 h-48 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl animate-float-slow animate-rainbow-glow opacity-60"></div>
          <div className="absolute top-32 right-16 w-56 h-56 bg-gradient-to-br from-secondary/25 to-primary/20 rounded-full blur-4xl animate-float-delayed animate-rainbow-glow opacity-50"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-accent/35 to-secondary/25 rounded-full blur-2xl animate-bounce-slow animate-rainbow-glow opacity-70"></div>
          
          {/* Medium floating elements */}
          <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-br from-primary/40 to-accent/30 rounded-full blur-xl animate-float animate-rainbow-glow opacity-60"></div>
          <div className="absolute bottom-1/4 right-12 w-28 h-28 bg-gradient-to-br from-secondary/30 to-primary/25 rounded-full blur-lg animate-bounce-gentle animate-rainbow-glow opacity-50"></div>
          
          {/* Small accent orbs */}
          <div className="absolute top-1/4 left-1/3 w-20 h-20 bg-gradient-to-br from-accent/50 to-primary/30 rounded-full blur-md animate-pulse-slow animate-rainbow-glow opacity-40"></div>
          <div className="absolute bottom-1/2 left-16 w-24 h-24 bg-gradient-to-br from-primary/45 to-secondary/35 rounded-full blur-lg animate-float-slow animate-rainbow-glow opacity-55"></div>
          <div className="absolute top-2/3 right-1/4 w-16 h-16 bg-gradient-to-br from-secondary/60 to-accent/40 rounded-full blur-sm animate-bounce-gentle animate-rainbow-glow opacity-45"></div>
          
          {/* Tiny sparkle effects */}
          <div className="absolute top-1/5 left-2/3 w-12 h-12 bg-gradient-to-br from-accent/70 to-primary/50 rounded-full blur-sm animate-pulse animate-rainbow-glow opacity-60"></div>
          <div className="absolute bottom-1/5 right-2/3 w-10 h-10 bg-gradient-to-br from-primary/80 to-secondary/60 rounded-full blur-xs animate-bounce-slow animate-rainbow-glow opacity-50"></div>
          
          {/* Geometric accent shapes */}
          <div className="absolute top-1/6 right-1/6 w-6 h-32 bg-gradient-to-b from-primary/30 to-transparent rotate-45 blur-sm animate-pulse-slow opacity-30"></div>
          <div className="absolute bottom-1/6 left-1/6 w-32 h-6 bg-gradient-to-r from-accent/30 to-transparent rotate-12 blur-sm animate-float opacity-25"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-30">
          <div className="text-center">
            <div className="animate-fade-in-up">
              {/* Enhanced title with multiple text effects */}
              <div className="relative mb-12">
                <h2 className="text-7xl sm:text-8xl lg:text-10xl font-black leading-none relative" 
                    style={{ 
                      fontFamily: 'Playfair Display, Georgia, serif', 
                      fontStyle: 'italic',
                      textShadow: '6px 6px 12px rgba(0, 0, 0, 0.9), 0 0 30px rgba(255, 105, 180, 0.8), 0 0 60px rgba(255, 69, 0, 0.6), 0 0 90px rgba(138, 43, 226, 0.4)'
                    }}>
                  <span className="relative inline-block">
                    {/* Main text with enhanced gradient */}
                    <span className="bg-gradient-to-r from-primary via-accent via-secondary via-primary to-accent bg-clip-text text-transparent animate-gradient-x bg-400% tracking-tighter drop-shadow-2xl">
                      WIN BIG
                    </span>
                    
                    {/* Multiple layered glow effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary blur-lg opacity-40 animate-gradient-x bg-400% -z-10 scale-125"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-accent blur-xl opacity-20 animate-gradient-x-reverse bg-400% -z-20 scale-150"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-primary blur-2xl opacity-10 animate-gradient-x bg-400% -z-30 scale-200"></div>
                    
                    {/* Holographic reflection effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-20 animate-pulse -z-5 skew-x-12"></div>
                  </span>
                </h2>
                
                {/* Decorative elements around title */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse opacity-60 blur-sm"></div>
                <div className="absolute -top-2 -right-6 w-6 h-6 bg-gradient-to-br from-secondary to-primary rounded-full animate-bounce opacity-50 blur-xs"></div>
                <div className="absolute -bottom-4 left-1/4 w-4 h-4 bg-gradient-to-br from-accent to-secondary rounded-full animate-float opacity-70"></div>
                <div className="absolute -bottom-2 right-1/3 w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse-slow opacity-60 blur-xs"></div>
              </div>
              
              {/* Enhanced subtitle with layered effects */}
              <div className="relative mb-10">
                <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white/95 tracking-wide relative" 
                   style={{ 
                     textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9), 0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 69, 0, 0.2)',
                     fontFamily: 'Inter, sans-serif'
                   }}>
                  <span className="relative">
                    Experience the Ultimate Casino Adventure
                    {/* Subtle glow behind subtitle */}
                    <div className="absolute inset-0 bg-white/5 blur-lg -z-10 scale-110"></div>
                  </span>
                </p>
                
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
                
                {/* Floating accent elements around button */}
                <div className="absolute -top-6 -left-6 w-4 h-4 bg-gradient-to-br from-primary to-accent rounded-full animate-bounce opacity-60 blur-xs"></div>
                <div className="absolute -top-4 -right-8 w-3 h-3 bg-gradient-to-br from-secondary to-primary rounded-full animate-pulse opacity-70"></div>
                <div className="absolute -bottom-6 -left-4 w-5 h-5 bg-gradient-to-br from-accent to-secondary rounded-full animate-float opacity-50 blur-xs"></div>
                <div className="absolute -bottom-4 -right-6 w-4 h-4 bg-gradient-to-br from-primary to-secondary rounded-full animate-bounce-gentle opacity-60"></div>
              </div>

              <div className="mt-6 px-6 py-3 bg-black/40 backdrop-blur-sm rounded-full border border-green-500/30">
                <span className="inline-flex items-center gap-3 text-lg font-semibold text-white drop-shadow-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                  <span style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}>
                    2,847 players online now
                  </span>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                </span>
              </div>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="glass-card-ultra p-10 rounded-2xl card-pass-effect-enhanced animate-slide-up group hover:scale-105 transition-all duration-500 animate-card-glow-intense backdrop-blur-md border border-white/20" 
                   data-testid="stat-games"
                   style={{ boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 69, 0, 0.2)' }}>
                <div className="relative text-center">
                  <div className="text-6xl font-black bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform animate-text-shimmer drop-shadow-lg">500+</div>
                  <div className="text-lg text-white font-semibold tracking-wide" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}>Premium Games</div>
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
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-primary/30">
              <Crown className="w-5 h-5 text-white animate-bounce-gentle" />
              <span className="text-sm font-semibold text-white">Elite Features</span>
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
            <Link href="/admin">
              <Button 
                variant="outline" 
                className="mb-6 border-primary/30 hover:bg-primary/10 transition-all duration-300"
                data-testid="link-admin"
              >
                Admin Backend - View Registrations
              </Button>
            </Link>
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