"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function IconDetailPage() {
  const params = useParams();
  const id = params?.id;
  const [icon, setIcon] = useState(null);
  const [color, setColor] = useState(null); // null to preserve original
  const [size, setSize] = useState(200);

  useEffect(() => {
    if (!id) return;

    const fetchIcon = async () => {
      try {
        const res = await fetch(`https://iconsguru.com/admin/api/icon/${id}`);
        const data = await res.json();
        setIcon(data.icons);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchIcon();
  }, [id]);

  const applyColorAndSize = (svgRaw) => {
    let svg = svgRaw;

    // Apply color if selected
    if (color) {
      if (svg.includes('fill="')) {
        svg = svg.replace(/fill=".*?"/g, `fill="${color}"`);
      } else {
        svg = svg.replace(
          /<(path|circle|rect|polygon|line|ellipse|polyline)/g,
          `<$1 fill="${color}"`
        );
      }
    }

    // Apply width and height
    svg = svg
      .replace(/width=".*?"/g, `width="${size}"`)
      .replace(/height=".*?"/g, `height="${size}"`);

    return svg;
  };

  const svgToCanvasDownload = (type = "png") => {
    const finalSvg = applyColorAndSize(icon.icon_svg);
    const blob = new Blob([finalSvg], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, size, size);
      ctx.drawImage(img, 0, 0, size, size);

      const link = document.createElement("a");
      link.download = `icon.${type}`;
      link.href = canvas.toDataURL(`image/${type}`);
      link.click();

      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  const handleDownloadSVG = () => {
    const svg = applyColorAndSize(icon.icon_svg);
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `icon-${size}px.svg`;
    link.click();
  };

  if (!icon) return <div className="text-center mt-10">Loading...</div>;

  const renderedSvg = applyColorAndSize(icon.icon_svg);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{icon.icon_name}</h1>

      <div className="flex flex-col md:flex-row items-start gap-10">
        <div>
          <div
            className="border p-2 rounded shadow inline-block"
            style={{ width: size, height: size }}
            dangerouslySetInnerHTML={{ __html: renderedSvg }}
          />
        </div>

        <div className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Choose Color:</label>
            <input
              type="color"
              value={color || "#000000"}
              onChange={(e) => setColor(e.target.value)}
              className="w-16 h-10 p-1 border rounded"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Size (px):</label>
            <input
              type="number"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              min={10}
              max={1024}
              className="w-24 p-2 border rounded"
            />
          </div>

          <div className="space-x-2 mt-4">
            <button
              onClick={() => svgToCanvasDownload("png")}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Download PNG
            </button>
            <button
              onClick={() => svgToCanvasDownload("webp")}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Download WebP
            </button>
            <button
              onClick={handleDownloadSVG}
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
            >
              Download SVG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
