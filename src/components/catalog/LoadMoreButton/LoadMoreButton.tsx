import styles from "./LoadMoreButton.module.css";

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
    <button
      type="button"
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
    >
      {isLoading ? "Loading..." : "Load more"}
    </button>
  );
}