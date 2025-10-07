import { Crown, Users, Shield, Clock, Star, Zap, TrendingUp, Trophy, Flame } from 'lucide-react';
import ParticlesBackground from '@/components/particles-background';
import CasinoChip from '@/components/casino-chip';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function MainLanding() {
  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden" data-testid="main-landing">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card-premium border-b border-border backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 animate-slide-in-left">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center animate-rainbow-glow">
                  <Flame className="w-8 h-8 text-background animate-electric-pulse" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-accent to-primary rounded-full animate-rainbow-glow"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-secondary to-accent rounded-full animate-pulse"></div>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black tracking-wider neon-text-rainbow animate-electric-pulse" style={{fontFamily: 'Cinzel, serif'}}>JADE ROYALE</h1>
              <div className="hidden sm:flex items-center gap-2 ml-4">
                <Star className="w-5 h-5 text-primary animate-spin-slow" />
                <span className="text-sm text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text font-black">ELITE</span>
              </div>
            </div>
            <Link href="/register">
              <Button
                className="bg-gradient-to-r from-primary via-accent to-secondary hover:scale-110 transition-all duration-300 animate-slide-in-right glow-button-premium shadow-2xl text-lg font-black px-8 py-3"
                data-testid="button-nav-register"
              >
                <Zap className="w-5 h-5 mr-2 animate-pulse" />
                JOIN ELITE
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-screen bg-gradient-to-br from-background via-purple-900/30 to-background">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-80" 
          style={{
            backgroundImage: 'url(/casino-neon-bg.jpg)',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 z-10"></div>
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
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-primary/30">
                <Trophy className="w-5 h-5 text-primary animate-pulse" />
                <span className="text-sm font-semibold text-primary">Elite Casino Experience</span>
                <div className="w-2 h-2 bg-accent rounded-full animate-ping"></div>
              </div>

              <h2 className="text-6xl sm:text-8xl lg:text-9xl font-serif font-black mb-6 leading-none">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient-x bg-300% tracking-tight neon-text-enhanced">
                  EXPERIENCE
                </span>
                <br />
                <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent animate-gradient-x-reverse bg-300% tracking-tight neon-text-enhanced">
                  LUXURY
                </span>
              </h2>

              <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-delayed">
                The ultimate premium casino destination with cutting-edge games, lightning-fast payouts,
                and exclusive VIP rewards that redefine online gaming excellence
              </p>
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
              <div className="glass-card-premium p-8 rounded-2xl card-pass-effect-enhanced animate-slide-up group hover:scale-105 transition-all duration-500" data-testid="stat-games">
                <div className="relative">
                  <div className="text-4xl font-black text-primary mb-3 group-hover:scale-110 transition-transform">500+</div>
                  <div className="text-base text-muted-foreground font-medium">Premium Games</div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity"></div>
                </div>
              </div>

              <div className="glass-card-premium p-8 rounded-2xl card-pass-effect-enhanced animate-slide-up-delayed group hover:scale-105 transition-all duration-500" data-testid="stat-support">
                <div className="relative">
                  <div className="text-4xl font-black text-accent mb-3 group-hover:scale-110 transition-transform">24/7</div>
                  <div className="text-base text-muted-foreground font-medium">VIP Support</div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-accent to-primary rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity"></div>
                </div>
              </div>

              <div className="glass-card-premium p-8 rounded-2xl card-pass-effect-enhanced animate-slide-up-delayed-more group hover:scale-105 transition-all duration-500" data-testid="stat-payouts">
                <div className="relative">
                  <div className="text-4xl font-black text-primary mb-3 group-hover:scale-110 transition-transform">$5M+</div>
                  <div className="text-base text-muted-foreground font-medium">Daily Payouts</div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity"></div>
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
            <div className="text-center group card-pass-effect-enhanced p-8 rounded-2xl glass-card-premium hover:scale-105 transition-all duration-500 animate-fade-in-stagger-1" data-testid="feature-payouts">
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                <Clock className="w-12 h-12 text-background" />
              </div>
              <h4 className="text-2xl font-black mb-4 text-primary">Instant Payouts</h4>
              <p className="text-muted-foreground leading-relaxed">Lightning-fast withdrawals processed in under 60 seconds</p>
            </div>

            <div className="text-center group card-pass-effect-enhanced p-8 rounded-2xl glass-card-premium hover:scale-105 transition-all duration-500 animate-fade-in-stagger-2" data-testid="feature-security">
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                <Shield className="w-12 h-12 text-background" />
              </div>
              <h4 className="text-2xl font-black mb-4 text-accent">Fort Knox Security</h4>
              <p className="text-muted-foreground leading-relaxed">Military-grade encryption with 256-bit SSL protection</p>
            </div>

            <div className="text-center group card-pass-effect-enhanced p-8 rounded-2xl glass-card-premium hover:scale-105 transition-all duration-500 animate-fade-in-stagger-3" data-testid="feature-rewards">
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                <Crown className="w-12 h-12 text-background" />
              </div>
              <h4 className="text-2xl font-black mb-4 text-primary">VIP Rewards</h4>
              <p className="text-muted-foreground leading-relaxed">Exclusive bonuses up to 500% and premium cashback</p>
            </div>

            <div className="text-center group card-pass-effect-enhanced p-8 rounded-2xl glass-card-premium hover:scale-105 transition-all duration-500 animate-fade-in-stagger-4" data-testid="feature-support">
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                <Users className="w-12 h-12 text-background" />
              </div>
              <h4 className="text-2xl font-black mb-4 text-accent">Elite Support</h4>
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