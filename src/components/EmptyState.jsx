// Shared empty / no-results state (Issue 12).
//
// Use the defaults for filtered views that return nothing; pass `title` and
// `message` for sections that simply have no entries yet. The "Clear Filters"
// action renders only when `onClear` is provided.

export const NO_RESULTS_TITLE = "No results found";
export const NO_RESULTS_MESSAGE =
  "No items match your current filters. Try adjusting your search or clearing your filters.";

export default function EmptyState({
  title = NO_RESULTS_TITLE,
  message = NO_RESULTS_MESSAGE,
  onClear,
  clearLabel = "Clear Filters",
  headingLevel = 2,
  compact = false,
}) {
  const Heading = `h${headingLevel}`;

  return (
    <div
      className={`empty-state${compact ? " empty-state--compact" : ""}`}
      role="status"
    >
      {title && <Heading className="empty-state-title">{title}</Heading>}
      <p className="empty-state-message">{message}</p>
      {onClear && (
        <button type="button" className="empty-state-button" onClick={onClear}>
          {clearLabel}
        </button>
      )}
    </div>
  );
}
