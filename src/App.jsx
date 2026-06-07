import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import FAQ from "./pages/FAQ";
import AskQuery from "./pages/AskQuery";
import Chat from "./pages/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/ask" element={<AskQuery />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;