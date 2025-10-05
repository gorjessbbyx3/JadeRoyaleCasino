import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { insertPlayerRegistrationSchema, type InsertPlayerRegistration } from '@shared/schema';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { getSubdomain } from '@/lib/subdomain';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import CasinoChip from '@/components/casino-chip';

const extendedSchema = insertPlayerRegistrationSchema.extend({
  confirmPassword: insertPlayerRegistrationSchema.shape.password,
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type FormData = InsertPlayerRegistration & { confirmPassword: string };

export default function AgentRegistration() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const agentCode = getSubdomain();

  const form = useForm<FormData>({
    resolver: zodResolver(extendedSchema),
    defaultValues: {
      username: '',
      email: '',
      fullName: '',
      phone: '',
      password: '',
      confirmPassword: '',
      agentCode,
    },
  });

  const createRegistrationMutation = useMutation({
    mutationFn: async (data: InsertPlayerRegistration) => {
      return apiRequest('POST', '/api/registrations', data);
    },
    onSuccess: () => {
      toast({
        title: "Registration Successful",
        description: "Your registration has been submitted and is pending approval.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Registration Failed",
        description: error.message || "Failed to submit registration. Please try again.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    const { confirmPassword, ...registrationData } = data;
    createRegistrationMutation.mutate(registrationData);
  };

  return (
    <div className="min-h-screen gradient-bg py-20 px-4" data-testid="agent-registration">
      <div className="max-w-2xl mx-auto">
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CasinoChip />
              <h1 className="text-2xl font-serif font-bold neon-text">JADE ROYALE</h1>
            </div>
            <h2 className="text-4xl font-serif font-bold mb-4">Agent Registration</h2>
            <p className="text-muted-foreground">Create a new player account under your agent network</p>
            <div className="mt-4 inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-mono text-sm" data-testid="agent-subdomain">
              {agentCode}.jaderoyale.app
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="registration-form">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Choose a username"
                        className="bg-background border-border text-foreground focus:border-primary focus:ring-primary/20"
                        data-testid="input-username"
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
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="your@email.com"
                        className="bg-background border-border text-foreground focus:border-primary focus:ring-primary/20"
                        data-testid="input-email"
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
                        {...field}
                        placeholder="John Doe"
                        className="bg-background border-border text-foreground focus:border-primary focus:ring-primary/20"
                        data-testid="input-full-name"
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
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="bg-background border-border text-foreground focus:border-primary focus:ring-primary/20"
                        data-testid="input-phone"
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
                        {...field}
                        type="password"
                        placeholder="Create a secure password"
                        className="bg-background border-border text-foreground focus:border-primary focus:ring-primary/20"
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
                        {...field}
                        type="password"
                        placeholder="Confirm your password"
                        className="bg-background border-border text-foreground focus:border-primary focus:ring-primary/20"
                        data-testid="input-confirm-password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-accent text-background hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
                  data-testid="button-register-player"
                >
                  {isSubmitting ? 'Registering...' : 'Register Player'}
                </Button>
              </div>
            </form>
          </Form>

          <div className="mt-6 text-center">
            <Link href="/">
              <Button variant="ghost" className="text-muted-foreground hover:text-primary" data-testid="link-back-to-main">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Main Site
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
