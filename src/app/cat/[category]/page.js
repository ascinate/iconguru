'use client';

import { useParams } from 'next/navigation';

export default function CategorySearchPage() {
  const params = useParams();
  const category = params.category;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Icons for category: {category}</h1>
      {/* Add your icon list logic here */}
    </div>
  );
}
