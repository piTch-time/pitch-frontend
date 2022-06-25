import { GlobalStyle } from "@sharedComponents/GlobalStyle";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "@pages/Home";
import { SamplePage } from "@pages/SamplePage";
import { CreateRoom } from "@pages/CreateRoom/CreateRoom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/samplepage" element={<SamplePage />} />
        <Route path="/room/create" element={<CreateRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
