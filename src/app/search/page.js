"use client";
import Head from "next/head";
import { useState } from "react";
import NavicationSubpage from "../components/NavicationSubpage";
import Footer from "../components/Footer";

export default function SearchIcons() {
  const [query, setQuery] = useState("");
  const [icons, setIcons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
  
    setLoading(true);
    setIcons([]);
    setError("");
  
    try {
      const response = await fetch(`/api/icons/search?search=${query}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("API Response:", data);
  
      if (data && Array.isArray(data.icons)) {
        setIcons(data.icons);
      } else {
        setIcons([]);
        setError("Invalid response format from API.");
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      setIcons([]);
      setError("Error fetching data. Check API or network.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <>
      <Head>
        <title>Search Icons</title>
        <meta name="description" content="Search for icons by category, name, or tags." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavicationSubpage />
      <main className="container mt-4">
        <h2>Search Icons</h2>
        <form onSubmit={handleSearch} className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name, category, or tags..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="btn btn-primary mt-2">Search</button>
        </form>
        {error && <p className="text-danger">{error}</p>}
        <div className="row row-cols-1 row-cols-lg-6 gy-4 g-lg-4">
          {loading ? (
            <p>Loading...</p>
          ) : icons.length > 0 ? (
            icons.map((icon) => (
              <div key={icon.Id} className="svg-item col">
                <span dangerouslySetInnerHTML={{ __html: icon.icon_svg }}></span>
                <p>{icon.icon_name}</p>
              </div>
            ))
          ) : (
            <p>No icons found.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
