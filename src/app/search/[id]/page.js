"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import NavicationHome from "@/app/components/NavicationHome";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export default function IconDetailPage() {
  const params = useParams();
  const id = params?.id;
  const [icon, setIcon] = useState(null);
  const [color, setColor] = useState(null); // null to preserve original
  const [size, setSize] = useState(200);
  const [relatedIcons, setRelatedIcons] = useState([]);



  const tags = [
    { id: 1, title: 'Shopping Bag' , link: '/'  },
    { id: 2, title: 'Shopping' , link: '/'  },
    { id: 3, title: 'Online Bag', link: '/',},
    { id: 4, title: 'Shopper' , link: '/' },
    { id: 5, title: 'Activity' , link: '/' },
    { id: 6, title: 'Commerce' , link: '/' },
  ];

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

  useEffect(() => {
    const fetchRelatedIcons = async () => {
      try {
        const res = await fetch(`https://iconsguru.com/admin/api/related-icons/${id}`);
        const data = await res.json();
        console.log("Related fetch icon:", data)
        setRelatedIcons(data.icons || []);
      } catch (err) {
        console.error("Related fetch error:", err);
      }
    };
  
    if (id) {
      fetchRelatedIcons();
    }
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

  if (!icon) return null;

  const renderedSvg = applyColorAndSize(icon.icon_svg);

  return (
    <>
       <NavicationHome/>
        <main className="details-body-parts float-start w-100">
            <div className="container">
              <aside className="bercrums">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                        <li className="breadcrumb-item"> <Link href="/"> Interface Essential </Link> </li>
                        <li className="breadcrumb-item active" aria-current="page">{icon.icon_name}</li>
                      </ol>
                    </nav>
                    <h2 className="icon-headings">{icon.icon_name}</h2>
               </aside>
               <div className="top-sections01 mt-4  details-coderyt">
                   <div className="row">
                       <div className="col-lg-6 position-relative p-0">
                            <div className="blox-icons-div01">
                                  <div
                                    className="d-table mx-auto"
                                    style={{ width: size, height: size }}
                                    dangerouslySetInnerHTML={{ __html: renderedSvg }}
                                  />

                                  <div className="icn-list05">
                                          <input
                                            type="color"
                                            value={color || "#000000"}
                                            onChange={(e) => setColor(e.target.value)}
                                            className="form-control form-control-color"
                                          />
                                 </div>

                            </div>
                       </div>
                       <div className="col-lg-6 d-grid justify-content-end">
                              <div className="right-details-lis01">
                                  <div className="groups-list-btn">
                                      <div className="comon-groups-div01 d-flex align-items-center justify-content-between">
                                           <h5 className="m-0"> Size : </h5>
                                           <div className="input-divs d-flex align-items-center">
                                              <select id="size" className="form-select" value={size} onChange={(e) => setSize(Number(e.target.value))}>
                                                  <option value="">-- Select a Size --</option>
                                                  <option value="12">12px</option>
                                                  <option value="16">16px</option>
                                                  <option value="18">18px</option>
                                                  <option value="24">24px</option>
                                                  <option value="32">32px</option>
                                                  <option value="36">36px</option>
                                                  <option value="48">48px</option>
                                                  <option value="64">64px</option>
                                                  <option value="72">72px</option>
                                                  <option value="96">96px</option>
                                                  <option value="120">120px</option>
                                                  <option value="240">240px</option>
                                              </select>
                                           </div>
                                      </div>
                                      <div className="comon-groups-div01 d-flex align-items-center justify-content-between">
                                           <h5 className="m-0"> Download : </h5>
                                           <div className="input-divs d-flex justify-content-between align-items-center">
                                               <button type="button" onClick={() => svgToCanvasDownload("png")} className="btn btn-comons01 crm-btn01"> SVG </button>
                                               <button type="button" onClick={() => svgToCanvasDownload("webp")} className="btn btn-comons01 crm-btn01"> PNG </button>
                                               <button type="button"  onClick={handleDownloadSVG} className="btn btn-comons01 crm-btn01"> WEBP </button>
                                           </div>
                                      </div>

                                      <h5 className="list-texr style-list mt-5"> <strong> Style : </strong> Phoenix Group Basic Outline <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(0,0,0,1)"><path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path></svg> </h5>

                                  </div>
                              </div>
                       </div>
                   </div>

                   <div className="styles-icons-div comon-rows d-block w-100">
                      <h4 className="sub-titels-h1">Related Icons with the same style</h4>
                      <div className="row">
                        {relatedIcons.map((icon) => (
                          <div key={icon.Id} className="col-3 mb-3">
                            <Link href={`/search/${icon.Id}`}>
                              <div
                                className="border p-2 rounded"
                                dangerouslySetInnerHTML={{ __html: icon.icon_svg }}
                              />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>


                      <div className="styles-icons-div comon-rows d-block w-100 mb-5 pb-5">
                          <h4 className="sub-titels-h1"> Related Tags </h4>
                          <ul className="crm-tagsd d-flex align-items-center flex-wrap m-0 p-0">
                            {tags.map((page) => (
                                <li key={page.id}>
                                  <Link className="btn" href={page.link}> {page.title} </Link>
                                </li>
                             ))}
                          </ul>
                      </div>

               </div>
              
            </div>
              
        </main>
       <Footer/>
       
    </>
   
  );
}
