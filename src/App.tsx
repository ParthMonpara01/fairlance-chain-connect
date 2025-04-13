
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Profile from "./pages/Profile";
import ProjectDetails from "./pages/ProjectDetails";
import CreateProject from "./pages/CreateProject";
import Disputes from "./pages/Disputes";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import Auth from "./pages/Auth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="profile" element={<Profile />} />
            <Route path="projects/:id" element={<ProjectDetails />} />
            <Route path="create-project" element={<CreateProject />} />
            <Route path="disputes" element={<Disputes />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
