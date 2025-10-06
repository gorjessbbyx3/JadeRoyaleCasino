import { Crown, Users, Shield, Clock } from 'lucide-react';
import ParticlesBackground from '@/components/particles-background';
import CasinoChip from '@/components/casino-chip';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function MainLanding() {
  return (
    <div className="min-h-screen gradient-bg" data-testid="main-landing">
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <CasinoChip />
              <h1 className="text-2xl sm:text-3xl font-serif font-bold neon-text">JADE ROYALE</h1>
            </div>
            <Link href="/register">
              <Button 
                className="bg-gradient-to-r from-primary to-accent text-background hover:scale-105 transition-transform"
                data-testid="button-nav-register"
              >
                Join Now
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <ParticlesBackground />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center animate-fade-in">
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-black mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                EXPERIENCE LUXURY
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              The ultimate online casino experience with premium games, instant withdrawals, and exclusive rewards
            </p>
            
            <a href="http://realconnect.online" target="_blank" rel="noopener noreferrer">
              <Button 
                className="glow-button bg-gradient-to-r from-primary to-accent text-background px-12 py-5 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition-transform"
                data-testid="button-play-now"
              >
                Play Now
              </Button>
            </a>
            
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="glass-card p-6 rounded-xl card-pass-effect" data-testid="stat-games">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Premium Games</div>
              </div>
              <div className="glass-card p-6 rounded-xl card-pass-effect" data-testid="stat-support">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Live Support</div>
              </div>
              <div className="glass-card p-6 rounded-xl card-pass-effect" data-testid="stat-payouts">
                <div className="text-3xl font-bold text-primary mb-2">$1M+</div>
                <div className="text-sm text-muted-foreground">Daily Payouts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-serif font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Why Choose Jade Royale</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group card-pass-effect p-6 rounded-xl" data-testid="feature-payouts">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <Clock className="w-10 h-10 text-background" />
              </div>
              <h4 className="text-xl font-bold mb-2">Instant Payouts</h4>
              <p className="text-muted-foreground">Withdraw your winnings in seconds</p>
            </div>

            <div className="text-center group card-pass-effect p-6 rounded-xl" data-testid="feature-security">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <Shield className="w-10 h-10 text-background" />
              </div>
              <h4 className="text-xl font-bold mb-2">Secure Gaming</h4>
              <p className="text-muted-foreground">Bank-grade encryption & security</p>
            </div>

            <div className="text-center group card-pass-effect p-6 rounded-xl" data-testid="feature-rewards">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <Crown className="w-10 h-10 text-background" />
              </div>
              <h4 className="text-xl font-bold mb-2">Exclusive Rewards</h4>
              <p className="text-muted-foreground">Amazing bonuses & cashback</p>
            </div>

            <div className="text-center group card-pass-effect p-6 rounded-xl" data-testid="feature-support">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10 text-background" />
              </div>
              <h4 className="text-xl font-bold mb-2">24/7 Support</h4>
              <p className="text-muted-foreground">Expert help anytime you need</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-muted-foreground text-sm">
            <p>&copy; 2024 Jade Royale. All rights reserved. | 18+ | Play Responsibly</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
