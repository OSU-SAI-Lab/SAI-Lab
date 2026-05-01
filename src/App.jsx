import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage/HomePage";
import ResearchPage from "./components/ResearchPage/ResearchPage";
import ProjectDetail from "./components/ResearchPage/ProjectDetail";
import PublicationsLayout from "./components/PublicationPage/PublicationsLayout";
import PublicationsPage from "./components/PublicationPage/PublicationPage";
import People from "./components/PeoplesPage/PeoplesPage";
import WorkingWithUs from "./components/WorkingWithUs/workingwithus";
import EventsTab from "./components/EventsTab/EventsTab";
import ArticlePage from "./components/LatestNews/Articlepage";
import NewsPage from "./components/NewsAndUpdates/Newspage";


import "./App.css";

function App() {
  const location = useLocation();
  const isHomePage =
    location.pathname === "/" || location.pathname === "/SAI-Lab/";

  return (
    <>
      <NavBar />
      <div className={isHomePage ? "" : "page-content"}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/research" element={<ResearchPage />} />
          <Route path="/research/:slug" element={<ProjectDetail />} />

          <Route path="/people" element={<People />} />
          
          <Route path="/publications" element={<PublicationsLayout />}>
            <Route index element={<PublicationsPage />} />
          </Route>

          <Route path="/news-and-updates" element={<NewsPage />}/>


          <Route path="/workingwithus" element={<WorkingWithUs />} />

          {/* Article detail — linked from Latest News section on homepage */}
          <Route path="/news/:id" element={<ArticlePage />} />

          <Route path="/events" element={<EventsTab />} />
        </Routes>
      </div>
    </>
  );
}

export default App;