import React, { useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Footer from "../Footer"
export default function PublicationsPage() {
  const { rows, loading } = useOutletContext();
  const [activeCategory, setActiveCategory] = useState("Journals");
  const [selectedYear, setSelectedYear] = useState("All");

  const years = useMemo(() => {
    const allYears = rows.flatMap(r => r.year ? [r.year] : []);
    return [...new Set(allYears)].sort((a, b) => b - a);
  }, [rows]);

  const categories = [
    "Books",
    "Journals",
    "Book Chapters",
    "Conferences & Workshops",
    "Technical Reports",
    "Ph.D. Dissertations",
    "M.S. Theses",
    "M.S. Project",
    "B.S. Honors Theses",
    "B.S. Project"
  ];

  const filtered = useMemo(() => {
    return rows.filter((r) => {
      const rowType = r.type?.trim();
      const rowYear = r.year;

      if (selectedYear !== "All" && String(rowYear) !== String(selectedYear)) {
        return false;
      }

      if (activeCategory === "Journals") return rowType === "Journal" || rowType === "Journals";
      if (activeCategory === "Books") return rowType === "Book" || rowType === "Books";
      if (activeCategory === "Conferences & Workshops") return rowType === "Conference" || rowType === "Conferences & Workshops";
      if (activeCategory === "Technical Reports") return rowType === "Technical Report" || rowType === "Technical Reports";

      return rowType === activeCategory;
    }).sort((a, b) => b.year - a.year);
  }, [rows, activeCategory, selectedYear]);

  if (loading) return <div style={{ padding: 20 }}>Loading...</div>;

  return (
    <>
      <style>{`
        .pub-container {
          display: flex;
          font-family: sans-serif;
          padding: 20px;
          gap: 40px;
          flex-direction: row;
        }

        .pub-sidebar {
          width: 220px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
        }

        .pub-sidebar-item {
          padding: 12px 15px;
          border: 1px solid #ddd;
          margin-bottom: -1px;
          cursor: pointer;
          font-size: 14px;
          color: #333;
          transition: all 0.2s;
        }

        /* Mobile View Styles */
        @media (max-width: 768px) {
          .pub-container {
            flex-direction: column;
            gap: 20px;
            padding: 10px;
          }

          .pub-sidebar {
            width: 100%;
            flex-direction: row;
            overflow-x: auto; /* Allows horizontal scrolling of menu on small screens */
            white-space: nowrap;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 5px;
          }

          .pub-sidebar-item {
            margin-bottom: 0;
            margin-right: -1px;
            flex: 0 0 auto;
            border-left: 1px solid #ddd !important; /* Override desktop highlight style */
            border-bottom: 3px solid transparent;
          }

          .active-mobile-tab {
            border-bottom: 3px solid #337ab7 !important;
            background-color: #f4f4f4;
            font-weight: bold;
          }
        }
      `}</style>

      <div className="pub-container">
        {/* Navigation Menu */}
        <div className="pub-sidebar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <div
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`pub-sidebar-item ${isActive ? "active-mobile-tab" : ""}`}
                style={{
                  backgroundColor: isActive ? "#f4f4f4" : "white",
                  fontWeight: isActive ? "bold" : "normal",
                  // Desktop-only left border highlight
                  borderLeft: isActive ? "4px solid #337ab7" : "1px solid #ddd",
                }}
              >
                {cat}
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div style={{ flexGrow: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid #337ab7", paddingBottom: "10px", marginBottom: "10px" }}>
            <h2 style={{ margin: 0, color: "#333" }}>
              {activeCategory} ({filtered.length})
            </h2>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              style={{
                padding: "5px 10px",
                fontSize: "14px",
                borderRadius: "4px",
                border: "1px solid #ddd",
                outline: "none",
                cursor: "pointer"
              }}
            >
              <option value="All">All Years</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
            <tbody>
              {filtered.map((pub, index) => (
                <tr key={pub.id} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "15px 10px", verticalAlign: "top", width: "30px", color: "#999", fontSize: "13px" }}>
                    {index + 1}
                  </td>
                  <td style={{ padding: "15px 10px", fontSize: "14px", lineHeight: "1.6" }}>
                    <div style={{ color: "#337ab7", marginBottom: "4px" }}>
                      {pub.authorsArr.map((auth, i) => (
                        <React.Fragment key={i}>
                          {auth.toLowerCase().includes("subramoni") ? <strong>{auth}</strong> : auth}
                          {i < pub.authorsArr.length - 1 ? ", " : ""}
                        </React.Fragment>
                      ))}
                    </div>
                    <strong>{pub.title}</strong>, {pub.venue}, {pub.year}.
                    {pub.link && (
                      <div style={{ marginTop: "8px" }}>
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: "#337ab7", textDecoration: "none", fontSize: "12px", fontWeight: "bold" }}
                        >
                          [Full Text]
                        </a>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <p style={{ color: "#999", marginTop: "20px", textAlign: "center" }}>
              No publications found in this category.
            </p>
          )}
        </div>

      </div>
      <Footer />
    </>
  );
}