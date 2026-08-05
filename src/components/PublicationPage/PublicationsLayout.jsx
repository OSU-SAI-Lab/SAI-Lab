import Papa from "papaparse";
import { Outlet } from "react-router-dom";
import csvText from "../../assets/csv_data/publication.csv?raw";

const normalizeAuthors = (authors = "") =>
  authors
    .split(";")
    .map((a) => a.trim())
    .filter(Boolean);

const { data } = Papa.parse(csvText, {
  header: true,
  skipEmptyLines: true,
  transformHeader: (header) => header.replace(/^\uFEFF/, "").trim(),
  transform: (value) => (typeof value === "string" ? value.trim() : value),
});

const rows = data
  .filter((row) => row.id && row.title)
  .map((row) => {
    const id = Number(row.id);
    const year = Number(row.year);

    return {
      ...row,
      id: Number.isFinite(id) ? id : row.id,
      year: Number.isFinite(year) ? year : row.year,
      authorsArr: normalizeAuthors(row.authors),
      type: row.type || "Journals",
    };
  });

export default function PublicationsLayout() {
  return <Outlet context={{ rows, loading: false }} />;
}
