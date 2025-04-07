"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function IconDetailPage() {
  const params = useParams();
  const id = params?.id;
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchIcon = async () => {
      try {
        const res = await fetch(`https://iconsguru.com/admin/icons/${id}`);
        const data = await res.json();
        console.log("Fetched icon data:", data);
        setIcon(data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchIcon();
  }, [id]);

  if (!icon) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <div dangerouslySetInnerHTML={{ __html: icon.icon_svg }} />
    </div>
  );
}
