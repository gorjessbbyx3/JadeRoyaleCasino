import { Crown, Users, Shield, Clock, Star } from 'lucide-react';
import ParticlesBackground from '@/components/particles-background';
import CasinoChip from '@/components/casino-chip';
import { Button } from '@/components/ui/button';

export default function MainLanding() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen gradient-bg" data-testid="main-landing">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <CasinoChip />
              <h1 className="text-2xl sm:text-3xl font-serif font-bold neon-text">JADE ROYALE</h1>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('games')}
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-games"
              >
                Games
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-features"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('vip')}
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-vip"
              >
                VIP Club
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
              The ultimate online casino experience with premium games, instant withdrawals, and VIP rewards
            </p>
            
            {/* Play Now Button */}
            <a 
              href="http://cashout.realconnect.online" 
              className="inline-block glow-button bg-gradient-to-r from-primary to-accent text-background px-12 py-5 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition-transform relative z-10"
              data-testid="button-play-now"
            >
              <span className="relative z-10">PLAY NOW</span>
            </a>
            
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="glass-card p-6 rounded-xl" data-testid="stat-games">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Premium Games</div>
              </div>
              <div className="glass-card p-6 rounded-xl" data-testid="stat-support">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Live Support</div>
              </div>
              <div className="glass-card p-6 rounded-xl" data-testid="stat-payouts">
                <div className="text-3xl font-bold text-primary mb-2">$1M+</div>
                <div className="text-sm text-muted-foreground">Daily Payouts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section id="games" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-serif font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Featured Games</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Game Card 1 */}
            <div className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-transform cursor-pointer" data-testid="game-card-poker">
              <img 
                src="https://images.unsplash.com/photo-1511193311914-0346f16efe90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
                alt="Poker game" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">Royal Poker</h4>
                <p className="text-muted-foreground mb-4">Texas Hold'em with progressive jackpots</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-primary">Live Now</span>
                  <span className="text-sm text-accent font-mono">$250K Pot</span>
                </div>
              </div>
            </div>

            {/* Game Card 2 */}
            <div className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-transform cursor-pointer" data-testid="game-card-roulette">
              <img 
                src="https://images.unsplash.com/photo-1596838132731-3301c3fd4317?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
                alt="Roulette wheel" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">Emerald Roulette</h4>
                <p className="text-muted-foreground mb-4">Classic European roulette action</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-primary">Hot Table</span>
                  <span className="text-sm text-accent font-mono">$50K Max</span>
                </div>
              </div>
            </div>

            {/* Game Card 3 */}
            <div className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-transform cursor-pointer" data-testid="game-card-slots">
              <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-6xl">🎰</div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">Jade Jackpot Slots</h4>
                <p className="text-muted-foreground mb-4">Mega progressive slot machines</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-primary">New</span>
                  <span className="text-sm text-accent font-mono">$1M+ Pool</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-serif font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Why Choose Jade Royale</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group" data-testid="feature-payouts">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <Clock className="w-10 h-10 text-background" />
              </div>
              <h4 className="text-xl font-bold mb-2">Instant Payouts</h4>
              <p className="text-muted-foreground">Withdraw your winnings in seconds</p>
            </div>

            <div className="text-center group" data-testid="feature-security">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <Shield className="w-10 h-10 text-background" />
              </div>
              <h4 className="text-xl font-bold mb-2">Secure Gaming</h4>
              <p className="text-muted-foreground">Bank-grade encryption & security</p>
            </div>

            <div className="text-center group" data-testid="feature-rewards">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <Crown className="w-10 h-10 text-background" />
              </div>
              <h4 className="text-xl font-bold mb-2">VIP Rewards</h4>
              <p className="text-muted-foreground">Exclusive bonuses & cashback</p>
            </div>

            <div className="text-center group" data-testid="feature-support">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10 text-background" />
              </div>
              <h4 className="text-xl font-bold mb-2">24/7 Support</h4>
              <p className="text-muted-foreground">Expert help anytime you need</p>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Section */}
      <section id="vip" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/20 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-serif font-bold mb-4">Join the VIP Club</h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Unlock exclusive benefits, higher limits, and personalized service with our premium VIP program
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-primary" />
                  <span>Priority withdrawals & higher limits</span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-primary" />
                  <span>Dedicated VIP account manager</span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-primary" />
                  <span>Exclusive tournaments & events</span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-primary" />
                  <span>Up to 25% weekly cashback</span>
                </li>
              </ul>
              <Button 
                className="bg-gradient-to-r from-accent to-primary text-background hover:scale-105 transition-transform"
                data-testid="button-vip-learn-more"
              >
                Learn More About VIP
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
