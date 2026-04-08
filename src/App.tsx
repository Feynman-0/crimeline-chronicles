import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Index from "./pages/Index";
import CrimelineHollywood from "./pages/CrimelineHollywood";
import AstrologyCharacters from "./pages/AstrologyCharacters";
import DashsEscape from "./pages/DashsEscape";
import BookIngredients from "./pages/BookIngredients";
import Tabloids from "./pages/Tabloids";
import FreeChapter from "./pages/FreeChapter";
import Press from "./pages/Press";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppRoutes = () => {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Index />} />
          <Route path="/crimeline-hollywood" element={<CrimelineHollywood />} />
          <Route path="/the-astrology-of-hollywood-crimeliness-central-characters" element={<AstrologyCharacters />} />
          <Route path="/dashs-escape-from-hollywood" element={<DashsEscape />} />
          <Route path="/book-ingredients" element={<BookIngredients />} />
          <Route path="/a-tale-told-by-the-tabloids" element={<Tabloids />} />
          <Route path="/free-chapter" element={<FreeChapter />} />
          <Route path="/press" element={<Press />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
