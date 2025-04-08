'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function SidebarFilter({ onFilterChange }) {
  const [filters, setFilters] = useState({
    categories: [],
    colors: [],
    types: [],
  })

  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    colors: [],
    types: [],
  })

  useEffect(() => {
    axios.get('https://iconsguru.com/admin/api/sidebar-filters')
      .then(res => {
        const data = res.data
        setFilters({
          categories: Array.isArray(data.categories) ? data.categories : [],
          colors: Array.isArray(data.colors) ? data.colors : [],
          types: Array.isArray(data.types) ? data.types : [],
        })
      })
      .catch(err => console.error('Sidebar filter fetch error:', err))
  }, [])

  useEffect(() => {
    if (onFilterChange) {
      onFilterChange(selectedFilters)
    }
  }, [selectedFilters]) // ✅ Only call when filters change

  const handleCheckboxChange = (filterType, value) => {
    setSelectedFilters(prev => {
      const isChecked = prev[filterType].includes(value)
      const updated = {
        ...prev,
        [filterType]: isChecked
          ? prev[filterType].filter(v => v !== value)
          : [...prev[filterType], value]
      }
      return updated
    })
  }

  return (
    <div className="w-full md:w-64 p-4 bg-white rounded-xl shadow-md">
      {/* Categories */}
      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-2">Category</h3>
        <ul>
          {filters.categories.map((cat, i) => (
            <li key={i}>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  onChange={() => handleCheckboxChange('categories', cat)}
                  checked={selectedFilters.categories.includes(cat)}
                />
                {cat.trim()}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Colors */}
      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-2">Color</h3>
        <ul className="flex flex-wrap gap-2">
          {filters.colors.map((color, i) => (
            <li key={i}>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  onChange={() => handleCheckboxChange('colors', color)}
                  checked={selectedFilters.colors.includes(color)}
                />
                {color.trim()}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Types */}
      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-2">Type</h3>
        <ul>
          {filters.types.map((type, i) => (
            <li key={i}>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  onChange={() => handleCheckboxChange('types', type)}
                  checked={selectedFilters.types.includes(type)}
                />
                {type.trim()}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
