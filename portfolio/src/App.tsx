import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./components/layout";
import { HomePage } from "./pages/home";
import { ProjectPage } from "./pages/project";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/project" element={<ProjectPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
