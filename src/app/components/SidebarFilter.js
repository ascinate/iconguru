'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function SidebarFilter({ onFilterChange }) {
  const [filters, setFilters] = useState({
    icon_category: [],
    color: [],
    type: [],
  })

  const [selectedFilters, setSelectedFilters] = useState({
    icon_category: [],
    color: [],
    type: [],
  })

  useEffect(() => {
    axios.get('https://iconsguru.com/admin/api/sidebar-filters')
      .then(res => {
        const data = res.data
        setFilters({
          icon_category: Array.isArray(data.icon_category) ? data.icon_category : [],
          color: Array.isArray(data.color) ? data.color : [],
          type: Array.isArray(data.type) ? data.type: [],
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
          {filters.icon_category.map((cat, i) => (
            <li key={i}>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  onChange={() => handleCheckboxChange('icon_category', cat)}
                  checked={selectedFilters.icon_category.includes(cat)}
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
          {filters.color.map((color, i) => (
            <li key={i}>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  onChange={() => handleCheckboxChange('color', color)}
                  checked={selectedFilters.color.includes(color)}
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
          {filters.type.map((type, i) => (
            <li key={i}>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  onChange={() => handleCheckboxChange('type', type)}
                  checked={selectedFilters.type.includes(type)}
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
