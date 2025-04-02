"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Head from "next/head";
import NavicationSubpage from "../components/NavicationSubpage";
import Footer from "../components/Footer";
import Searchall from "../components/Searchall";

export default function NewSearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("search") || "";

  const [icons, setIcons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query.trim()) return;

    setLoading(true);
    setIcons([]);
    setError("");

    fetch(`/api/icons/search?search=${encodeURIComponent(query)}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data && Array.isArray(data.icons)) {
          setIcons(data.icons);
        } else {
          setIcons([]);
          setError("No icons found.");
        }
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
        setError("Error fetching data. Check API or network.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  return (
    <>
      <Head>
        <title>Search Results</title>
      </Head>
      <NavicationSubpage />
      <main className="container mt-5">
     
        <h2>Results for "{query}"</h2>
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
