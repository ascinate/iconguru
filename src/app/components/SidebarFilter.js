import { useEffect, useState } from 'react'
import axios from 'axios'

export default function SidebarFilter() {
  const [filters, setFilters] = useState({
    categories: [],
    colors: [],
    types: [],
  });

  useEffect(() => {
    axios.get('https://iconsguru.com/admin/api/sidebar-filters')
      .then(res => {
        // Check and extract data correctly
        const data = res.data;
        console.log('geting:',data);
        // Ensure each filter is an array or default to an empty array
        setFilters({
          categories: Array.isArray(data.categories) ? data.categories : [],
          colors: Array.isArray(data.colors) ? data.colors : [],
          types: Array.isArray(data.types) ? data.types : [],
        });
      })
      .catch(err => {
        console.error('Axios sidebar filter error:', err);
      });
  }, []);

  return (
    <div className="w-full md:w-64 p-4 bg-white rounded-xl shadow-md">
      {/* Categories */}
      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-2">Category</h3>
        <ul>
        {filters.categories.map((cat, i) => (
          <li key={i}><input type="checkbox" className="form-checkbox" />{cat.trim()}</li>
        ))}
        </ul>
      </div>

      {/* Colors */}
      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-2">Color</h3>
        <ul className="flex flex-wrap gap-2">
        {filters.colors.map((color, i) => (
          <li key={i}><input type="checkbox" className="form-checkbox" />{color.trim()}</li>
        ))}
        </ul>
      </div>

      {/* Types */}
      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-2">Type</h3>
        <ul>
        {filters.types.map((type, i) => (
          <li key={i}><input type="checkbox" className="form-checkbox" />{type.trim()}</li>
        ))}
        </ul>
      </div>
    </div>
  );
}
