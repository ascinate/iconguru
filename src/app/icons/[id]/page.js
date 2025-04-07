"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";


export default function IconDetailPage() {
  const { id } = useParams();
  const [icon, setIcon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`https://iconsguru.com/admin/icons/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched icon data:", data); 
          setIcon(data?.icon);
        })
        .catch((err) => {
          console.error("API error:", err);
        })
        .finally(() => setLoading(false));
    }
  }, [id]);

  return (
    <>
   

      <main className="container my-5">
        {loading ? (
          <p>Loading...</p>
        ) : icon ? (
          <div className="row">
            <div className="col-md-6">
              <div
                className="icon-preview border p-4"
                dangerouslySetInnerHTML={{ __html: icon.icon_svg }}
              />
            </div>
            <div className="col-md-6">
              <h2>{icon.title || "Icon Title"}</h2>
              <p>Category: {icon.category_name}</p>
              <p>Tags: {icon.tags?.join(", ")}</p>
              <button className="btn btn-primary">Download SVG</button>
            </div>
          </div>
        ) : (
          <p>Icon not found.</p>
        )}
      </main>

    
    </>
  );
}
