import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getSubdomain, isAgentSubdomain, isMasterSubdomain, isMainDomain } from "@/lib/subdomain";
import MainLanding from "@/pages/main-landing";
import AgentRegistration from "@/pages/agent-registration";
import MasterDashboard from "@/pages/master-dashboard";
import NotFound from "@/pages/not-found";

function Router() {
  const subdomain = getSubdomain();

  // Route based on subdomain
  if (isMasterSubdomain(subdomain)) {
    return <MasterDashboard />;
  }
  
  if (isAgentSubdomain(subdomain)) {
    return <AgentRegistration />;
  }
  
  if (isMainDomain(subdomain)) {
    return (
      <Switch>
        <Route path="/" component={MainLanding} />
        <Route path="/agent" component={AgentRegistration} />
        <Route path="/master" component={MasterDashboard} />
        <Route component={NotFound} />
      </Switch>
    );
  }

  return <NotFound />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
