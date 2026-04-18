"use client";

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
    <aside>
      <h2>Filters</h2>

      <div>
        <p>Location</p>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(event) => onLocationChange(event.target.value)}
        />
      </div>

      <div>
        <p>Body type</p>
        <select value={form} onChange={(event) => onFormChange(event.target.value)}>
            <option value="">Choose body type</option>
            <option value="alcove">Alcove</option>
            <option value="panel_van">Panel van</option>
            <option value="fully_integrated">Fully integrated</option>
            <option value="semi_integrated">Semi integrated</option>
        </select>
      </div>

      <div>
        <p>Engine type</p>
        <select value={engine} onChange={(event) => onEngineChange(event.target.value)}>
          <option value="">Choose engine type</option>
          <option value="diesel">Diesel</option>
          <option value="petrol">Petrol</option>
          <option value="hybrid">Hybrid</option>
          <option value="electric">Electric</option>
        </select>
      </div>

      <div>
        <p>Transmission</p>
        <select
          value={transmission}
          onChange={(event) => onTransmissionChange(event.target.value)}
        >
          <option value="">Choose transmission</option>
          <option value="automatic">Automatic</option>
          <option value="manual">Manual</option>
        </select>
      </div>

      <div style={{ marginTop: "20px", display: "flex", gap: "12px" }}>
        <button type="button" onClick={onSearch}>
          Search
        </button>

        <button type="button" onClick={onClear}>
          Clear
        </button>
      </div>
    </aside>
  );
}