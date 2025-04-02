"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "next/form";


export default function Searchall() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`search?search=${encodeURIComponent(query)}`);
  };

  return (
    <>
      <main className="col-7">
        <Form onSubmit={handleSearch} className="d-flex align-items-center w-100">
          <input
             name="query"
            type="text"
            className="form-control"
            placeholder="Search icons..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="btn btn-primary mt-2">Search</button>
        </Form>
      </main>
      
    </>
  );
}
