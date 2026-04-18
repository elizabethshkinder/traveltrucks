interface LoadMoreButtonProps {
  onClick: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}

export default function LoadMoreButton({
  onClick,
  disabled = false,
  isLoading = false,
}: LoadMoreButtonProps) {
  return (
    <button type="button" onClick={onClick} disabled={disabled}>
      {isLoading ? "Loading..." : "Load More"}
    </button>
  );
}