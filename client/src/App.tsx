import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import BookSession from "@/pages/book-session";
import BetaWaitlist from "@/pages/beta-waitlist";
import Request from "@/pages/request";
import NotFound from "@/pages/not-found";
import ParentingSkills from "@/pages/parenting-skills";
import PostpartumCare from "@/pages/postpartum-care";
import ReturnToWork from "@/pages/return-to-work";
import EducationAcademic from "@/pages/education-academic";
import SpecialComplexCare from "@/pages/special-complex-care";
import EmotionalWellbeing from "@/pages/emotional-wellbeing";
import Employer from "@/pages/employer";
import DemoRequest from "@/pages/demo-request";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsConditions from "@/pages/terms-conditions";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/book-session" component={BookSession} />
      <Route path="/beta-waitlist" component={BetaWaitlist} />
      <Route path="/request" component={Request} />
      <Route path="/parenting-skills" component={ParentingSkills} />
      <Route path="/postpartum-care" component={PostpartumCare} />
      <Route path="/return-to-work" component={ReturnToWork} />
      <Route path="/education-academic" component={EducationAcademic} />
      <Route path="/special-complex-care" component={SpecialComplexCare} />
      <Route path="/emotional-wellbeing" component={EmotionalWellbeing} />
      <Route path="/employer" component={Employer} />
      <Route path="/demo-request" component={DemoRequest} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-conditions" component={TermsConditions} />
      <Route component={NotFound} />
    </Switch>
  );
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
