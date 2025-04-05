'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function IconDetailsPage() {
  const { id } = useParams(); // Access the dynamic 'id' from the URL
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchIcon = async () => {
        try {
          const response = await fetch(`https://iconsguru.com/admin/icon/${id}`);
          const data = await response.json();
          setIcon(data.icon); // Adjust according to your API's response structure
        } catch (error) {
          console.error('Error fetching icon:', error);
        }
      };

      fetchIcon();
    }
  }, [id]);

  if (!icon) {
    return <p className="text-center mt-10">Loading...</p>;
  }

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
