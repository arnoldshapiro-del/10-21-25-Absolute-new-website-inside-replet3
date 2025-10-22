import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Switch } from "wouter";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Disorders from "./pages/Disorders";
import Contact from "./pages/Contact";
import Forms from "./pages/Forms";
import Screening from "./pages/Screening";
import AdhdEducation from "./pages/AdhdEducation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/disorders" component={Disorders} />
        <Route path="/contact" component={Contact} />
        <Route path="/forms" component={Forms} />
        <Route path="/screening" component={Screening} />
        <Route path="/slideshows" component={AdhdEducation} />
        <Route component={NotFound} />
      </Switch>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
