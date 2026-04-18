import Filters from "../../components/catalog/Filters";
import CatalogList from "../../components/catalog/CatalogList";
import LoadMoreButton from "../../components/catalog/LoadMoreButton";

export default function CatalogPage() {
  return (
    <main style={{ padding: "40px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "250px 1fr",
          gap: "40px",
          alignItems: "start",
        }}
      >
        <Filters />

        <div>
          <CatalogList />

          <div style={{ marginTop: "24px" }}>
            <LoadMoreButton />
          </div>
        </div>
      </div>
    </main>
  );
}