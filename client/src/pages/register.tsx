import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { insertUserSchema, type InsertUser } from '@shared/schema';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { ArrowLeft, Flame } from 'lucide-react';
import { Link } from 'wouter';
import CasinoChip from '@/components/casino-chip';
import ParticlesBackground from '@/components/particles-background';

const extendedSchema = insertUserSchema.extend({
  confirmPassword: insertUserSchema.shape.password,
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type FormData = InsertUser & { confirmPassword: string };

export default function Register() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(extendedSchema),
    defaultValues: {
      username: '',
      email: '',
      fullName: '',
      phone: '',
      agent: '',
      password: '',
      confirmPassword: '',
    },
  });

  const createUserMutation = useMutation({
    mutationFn: async (data: InsertUser) => {
      return apiRequest('POST', '/api/register', data);
    },
    onSuccess: () => {
      toast({
        title: "Registration Successful",
        description: "Welcome to Jade Royale! Your account has been created.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Registration Failed",
        description: error.message || "Failed to create account. Please try again.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    const { confirmPassword, ...userData } = data;
    createUserMutation.mutate(userData);
  };

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden" data-testid="register-page">
      <ParticlesBackground />

      <div className="relative z-10 min-h-screen flex flex-col">
        <nav className="glass-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center gap-3">
                <Flame className="w-8 h-8 text-primary" />
                <h1 className="text-2xl sm:text-3xl font-serif font-bold neon-text">JADE ROYALE</h1>
              </div>
              <Link href="/">
                <Button variant="ghost" className="text-muted-foreground hover:text-primary" data-testid="link-back">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </Link>
            </div>
          </div>
        </nav>

        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-md">
            <div className="glass-card rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold mb-2">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Join Jade Royale
                  </span>
                </h2>
                <p className="text-muted-foreground">Create your account and start playing</p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Choose a username"
                            {...field}
                            data-testid="input-username"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your full name"
                            {...field}
                            data-testid="input-fullname"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            {...field}
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            {...field}
                            data-testid="input-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="agent"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Agent (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter agent name/ID"
                            {...field}
                            value={field.value || ''}
                            data-testid="input-agent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Create a password"
                            {...field}
                            data-testid="input-password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Confirm your password"
                            {...field}
                            data-testid="input-confirm-password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent text-background hover:scale-105 transition-transform"
                    disabled={isSubmitting}
                    data-testid="button-submit"
                  >
                    {isSubmitting ? "Creating Account..." : "Create Account"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}