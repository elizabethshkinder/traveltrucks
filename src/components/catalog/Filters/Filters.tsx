"use client";

import styles from "./Filters.module.css";

interface FiltersProps {
  location: string;
  form: string;
  engine: string;
  transmission: string;
  onLocationChange: (value: string) => void;
  onFormChange: (value: string) => void;
  onEngineChange: (value: string) => void;
  onTransmissionChange: (value: string) => void;
  onSearch: () => void;
  onClear: () => void;
}

export default function Filters({
  location,
  form,
  engine,
  transmission,
  onLocationChange,
  onFormChange,
  onEngineChange,
  onTransmissionChange,
  onSearch,
  onClear,
}: FiltersProps) {
  return (
    <form 
      className={styles.filters}
      onSubmit={(e) => {
        e.preventDefault();
      onSearch();
      }}
    >
      <div className={styles.section}>
        <label className={styles.sectionLabel}>Location</label>

     <div className={styles.inputWrapper}>
          <svg
            className={styles.inputIcon}
            width="18"
            height="18"
            aria-hidden="true"
          >
            <use href="/sprite.svg#icon-map" />
          </svg>

          <input
            className={styles.input}
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(event) => onLocationChange(event.target.value)}
          />
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.title}>Filters</h3>

        <div className={styles.group}>
          <p className={styles.groupLabel}>Camper form</p>

          <div className={styles.options}>
            {[
              { label: "Alcove", value: "alcove" },
              { label: "Panel Van", value: "panel_van" },
              { label: "Integrated", value: "fully_integrated" },
              { label: "Semi Integrated", value: "semi_integrated" },
            ].map((item) => (
              <label key={item.value} className={styles.option}>
                <input
                  type="radio"
                  name="form"
                  checked={form === item.value}
                  onChange={() => onFormChange(item.value)}
                  className={styles.radio}
                />
                <span className={styles.optionText}>{item.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className={styles.group}>
          <p className={styles.groupLabel}>Engine</p>

          <div className={styles.options}>
            {[
              { label: "Diesel", value: "diesel" },
              { label: "Petrol", value: "petrol" },
              { label: "Hybrid", value: "hybrid" },
              { label: "Electric", value: "electric" },
            ].map((item) => (
              <label key={item.value} className={styles.option}>
                <input
                  type="radio"
                  name="engine"
                  checked={engine === item.value}
                  onChange={() => onEngineChange(item.value)}
                  className={styles.radio}
                />
                <span className={styles.optionText}>{item.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className={styles.group}>
          <p className={styles.groupLabel}>Transmission</p>

          <div className={styles.options}>
            {[
              { label: "Automatic", value: "automatic" },
              { label: "Manual", value: "manual" },
            ].map((item) => (
              <label key={item.value} className={styles.option}>
                <input
                  type="radio"
                  name="transmission"
                  checked={transmission === item.value}
                  onChange={() => onTransmissionChange(item.value)}
                  className={styles.radio}
                />
                <span className={styles.optionText}>{item.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <button type="submit" className={styles.searchButton}>
          Search
        </button>

        <button type="button" onClick={onClear} className={styles.clearButton}>
          <svg className={styles.clearIcon} width="12" height="12" aria-hidden="true">
            <use href="/sprite.svg#icon-close" />
          </svg>
          Clear filters
        </button>
      </div>
    </form>
  );
}