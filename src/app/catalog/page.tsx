"use client";

import { useState } from "react";
import Filters from "../../components/catalog/Filters/Filters";
import CatalogList from "../../components/catalog/CatalogList/CatalogList";
import styles from "./catalog.module.css";

export default function CatalogPage() {
  const [locationInput, setLocationInput] = useState("");
  const [formInput, setFormInput] = useState("");
  const [engineInput, setEngineInput] = useState("");
  const [transmissionInput, setTransmissionInput] = useState("");

  const [appliedLocation, setAppliedLocation] = useState("");
  const [appliedForm, setAppliedForm] = useState("");
  const [appliedEngine, setAppliedEngine] = useState("");
  const [appliedTransmission, setAppliedTransmission] = useState("");

  function handleSearch() {
    setAppliedLocation(locationInput);
    setAppliedForm(formInput);
    setAppliedEngine(engineInput);
    setAppliedTransmission(transmissionInput);
  }

  function handleClear() {
    setLocationInput("");
    setFormInput("");
    setEngineInput("");
    setTransmissionInput("");

    setAppliedLocation("");
    setAppliedForm("");
    setAppliedEngine("");
    setAppliedTransmission("");
  }

  return (
    <main className={styles.catalogPage}>
      <div className={styles.catalogLayout}>
        <div className={styles.sidebar}>
          <Filters
            location={locationInput}
            form={formInput}
            engine={engineInput}
            transmission={transmissionInput}
            onLocationChange={setLocationInput}
            onFormChange={setFormInput}
            onEngineChange={setEngineInput}
            onTransmissionChange={setTransmissionInput}
            onSearch={handleSearch}
            onClear={handleClear}
          />
        </div>

        <div className={styles.content}>
          <CatalogList
            location={appliedLocation}
            form={appliedForm}
            engine={appliedEngine}
            transmission={appliedTransmission}
          />
        </div>
      </div>
    </main>
  );
}