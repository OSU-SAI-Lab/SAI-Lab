import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage/HomePage";
import ResearchPage from "./components/ResearchPage/ResearchPage";
import ProjectDetail from "./components/ResearchPage/ProjectDetail";
import PublicationsLayout from "./components/PublicationPage/PublicationsLayout";
import PublicationsPage from "./components/PublicationPage/PublicationPage";
import People from "./components/PeoplesPage/PeoplesPage";
import WorkingWithUs from "./components/WorkingWithUs/workingwithus";  


import "./App.css";
import OSUEventPage from "./components/EventsTab/EventsTab";
import EventsTab from "./components/EventsTab/EventsTab";

function App() {
  const location = useLocation();
  const isHomePage =
    location.pathname === "/" || location.pathname === "/Lab-Website/";

  return (
    <>
      <NavBar />
      <div className={isHomePage ? "" : "page-content"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/research/:slug" element={<ProjectDetail />} />

          <Route path="/people" element={<People />} />

          {/* Publications with subpages */}
          <Route path="/publications" element={<PublicationsLayout />}>
            <Route index element={<PublicationsPage />} />
          </Route>
          
          <Route path="/workingwithus" element={<WorkingWithUs />} />

          <Route path="/events" element={<EventsTab />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
