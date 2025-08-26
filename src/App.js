import "./styles.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/home";

export default function App() {
  const [searchData, setSearchData] = useState("");
  return (
    <div className="d-flex flex-column min-vh-100 bg-info-subtle">
      <Header setSearchData={setSearchData} />
      <main className="flex-grow-1">
        <HomePage searchData={searchData} />
      </main>
      <Footer />
    </div>
  );
}
