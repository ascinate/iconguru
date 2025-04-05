"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function IconDetailsPage() {
  const searchParams = useSearchParams();
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    // Extract the full pathname from the URL
    const pathname = window.location.pathname; // e.g., '/details/icon-name-123'
    const slugAndId = pathname.split("/").pop(); // 'icon-name-123'

    // Extract the ID from the slug
    const id = slugAndId.split("-").pop(); // '123'

    const fetchIcon = async () => {
      try {
        const response = await fetch(`https://iconsguru.com/admin/icon/${id}`);
        const data = await response.json();
        console.log("Fetched icon data:", data);
        setIcon(data.icon);
      } catch (error) {
        console.error("Error fetching icon:", error);
      }
    };

    if (id) {
      fetchIcon();
    }
  }, []);

  if (!icon) return <p>Loading...</p>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <Link href="/" className="text-blue-500 underline">← Back to listing</Link>
      <h1 className="text-2xl font-bold mt-4 mb-2">{icon.icon_name}</h1>
      <div
        className="w-40 h-40"
        dangerouslySetInnerHTML={{ __html: icon.icon_svg }}
      />
      <p className="mt-4 text-gray-600">Icon ID: {icon.id}</p>
    </div>
  );
}
