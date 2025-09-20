import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter basename="/Portofolio">
        <Routes>
          <Route index element={<Home className="overflow-auto scrollbar-hide" />} />
          <Route path="*" element={<NotFound className="overflow-auto scrollbar-hide" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
