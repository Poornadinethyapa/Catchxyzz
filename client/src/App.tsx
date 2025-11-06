import { Switch, Route } from "wouter";
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
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
