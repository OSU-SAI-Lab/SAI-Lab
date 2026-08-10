import React, { useMemo, useState, useEffect } from "react";
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

  // ── Structured data injection ─────────────────────────────────────────────
  // Generates a JSON-LD ScholarlyArticle list from all publications and injects
  // it into <head> so search engines can index the lab's research output.
  useEffect(() => {
    if (rows.length === 0) return;

    const typeMap = {
      Journal: "ScholarlyArticle",
      Journals: "ScholarlyArticle",
      Conference: "Article",
      "Conferences & Workshops": "Article",
      Book: "Book",
      Books: "Book",
      "Book Chapters": "Chapter",
      "Technical Reports": "TechArticle",
      "Ph.D. Dissertations": "Thesis",
      "M.S. Theses": "Thesis",
      "M.S. Project": "Thesis",
      "B.S. Honors Theses": "Thesis",
      "B.S. Project": "Thesis",
    };

    const items = rows.map((pub) => ({
      "@type": typeMap[pub.type?.trim()] || "ScholarlyArticle",
      "name": pub.title,
      "author": pub.authorsArr.map((name) => ({
        "@type": "Person",
        "name": name,
      })),
      "datePublished": pub.year ? String(pub.year) : undefined,
      "isPartOf": pub.venue || undefined,
      "url": pub.link || undefined,
    }));

    const schema = {
      "@context": "https://schema.org",
      "@graph": items,
    };

    const existing = document.getElementById("publications-structured-data");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = "publications-structured-data";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("publications-structured-data");
      if (el) el.remove();
    };
  }, [rows]);


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
            overflow-x: auto;
            white-space: nowrap;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 5px;
          }

          .pub-sidebar-item {
            margin-bottom: 0;
            margin-right: -1px;
            flex: 0 0 auto;
            border-left: 1px solid #ddd !important;
            border-bottom: 3px solid transparent;
          }

          .active-mobile-tab {
            border-bottom: 3px solid #337ab7 !important;
            background-color: #f4f4f4;
            font-weight: bold;
          }

          .pub-clear-button {
            padding: 8px 16px;
            background-color: #337ab7;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 13px;
            font-weight: bold;
            transition: background-color 0.2s ease;
          }

          .pub-clear-button:hover {
            background-color: #286090;
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
                          {auth.toLowerCase().includes("subramoni") || auth.toLowerCase().includes("potlapally") ? <strong>{auth}</strong> : auth}
                          {i < pub.authorsArr.length - 1 ? ", " : ""}
                        </React.Fragment>
                      ))}
                    </div>
                    <strong>{pub.title}</strong>, {pub.venue}, {pub.year}.
                    {(pub.link || pub.slides) && (
                      <div style={{ marginTop: "8px" }}>
                        {pub.link && (
                          <a
                            href={pub.link}
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: "#337ab7", textDecoration: "none", fontSize: "12px", fontWeight: "bold", marginRight: "12px" }}
                          >
                            [Full Text]
                          </a>
                        )}
                        {pub.slides && (
                          <a
                            href={pub.slides}
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: "#337ab7", textDecoration: "none", fontSize: "12px", fontWeight: "bold" }}
                          >
                            [Slides]
                          </a>
                        )}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "40px 20px" }}>
              <h3 style={{ fontSize: "18px", color: "#333", marginBottom: "8px" }}>
                No publications found
              </h3>
              <p style={{ margin: "0 0 16px 0", fontSize: "14px", color: "#777" }}>
                {selectedYear !== "All"
                  ? `No ${activeCategory} publications found for ${selectedYear}.`
                  : `No publications available under ${activeCategory}.`}
              </p>
              {selectedYear !== "All" && (
                <button
                  className="pub-clear-button"
                  onClick={() => setSelectedYear("All")}
                >
                  Show All Years
                </button>
              )}
            </div>
          )}

        </div>

      </div>
      <Footer />
    </>
  );
}