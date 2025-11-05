import { Switch, Route } from "wouter";
import { useEffect } from "react";
import { sdk } from "@farcaster/miniapp-sdk";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import CatchingGame from "@/pages/game";

function Router() {
  return (
    <Switch>
      <Route path="/" component={CatchingGame} />
      <Route component={CatchingGame} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Notify Farcaster clients the mini app is ready to render
    sdk.actions.ready().catch(() => {
      // Ignore errors if not running inside a Farcaster client
    });
  }, []);

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
