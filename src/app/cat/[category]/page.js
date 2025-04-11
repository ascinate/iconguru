'use client';
import Head from "next/head";
import NavicationHome from "../components/NavicationHome";
import { useEffect, useState } from "react";
import SidebarFilter from "../components/SidebarFilter";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from 'react';
import { useSearchParams } from "next/navigation";
import CategoryListing from "../components/CategoryListing";



export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CategoryListing />
    </Suspense>
  );
}
