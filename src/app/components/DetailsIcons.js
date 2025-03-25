import Link from "next/link";
import FilterIcons from "./FilterIcons";
import { useEffect,useState, useRef } from "react";
import html2canvas from 'html2canvas';



function DetailsIcons() {
      const [icons, setIcons] = useState([]);
      const [selectedOption, setSelectedOption] = useState('');
      const [color, setColor] = useState("#000000");
      const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
      };

      const svgRef = useRef(null);

      // Convert canvas to PNG
      const handleDownload = () => {
        if (svgRef.current) {
          html2canvas(svgRef.current, {
            backgroundColor: null,
          }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
    
            const link = document.createElement('a');
            link.href = imgData;
            link.download = 'image.png'; 
            link.click();
          });
        }
      };

      // Convert canvas to Webp

      const handleDownloadWeb = () => {
        if (svgRef.current) {
          html2canvas(svgRef.current, {
            backgroundColor: null,
          }).then((canvas) => {
            const imgData = canvas.toDataURL('image/webp', 0.8);
    
            const link = document.createElement('a');
            link.href = imgData;
            link.download = 'image.webp';
            link.click();
          });
        }
      };

      // Convert canvas to Svg

      const handleDownloadSvg = () => {
        // Define your SVG code as a string (this can be customized)
        const svgCode = `
          <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer transition-all duration-300" viewBox="0 0 24 24" fill={color}><path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path></svg>
        `;
    
        const blob = new Blob([svgCode], { type: 'image/svg+xml' });
 
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'image.svg';
        link.click(); 
      };

      useEffect(() => {
        const fetchIcons = async () => {
          try {
            const response = await fetch('https://iconsguru.com/admin/api/icons');
            const data = await response.json();
            setIcons(data.icons); 
          } catch (error) {
            console.error('Error fetching icons:', error);
          }
        };
    
        fetchIcons();
      }, []);

      const tags = [
        { id: 1, title: 'Shopping Bag' , link: '/'  },
        { id: 2, title: 'Shopping' , link: '/'  },
        { id: 3, title: 'Online Bag', link: '/',},
        { id: 4, title: 'Shopper' , link: '/' },
        { id: 5, title: 'Activity' , link: '/' },
        { id: 6, title: 'Commerce' , link: '/' },
      ];
     return(
        <>
         <div className="top-sections01">
             <div className="row">
                 <div className="col-lg-7">
                    <div className="blox-icons-div01">
                        <div ref={svgRef}>
                           <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer transition-all duration-300" viewBox="0 0 24 24" fill={color}><path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path></svg>
                        </div>
                    
                        <input
                            type="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            className="form-control form-control-color "
                        />
                    </div>
                 </div>
                 <div className="col-lg-5">
                    <div className="right-details-lis01">
                        <h4> Online Bag Icon 2</h4>
                        <div className="groups-list-btn">
                            <div className="btn btn-seize">
                                <span className="size01">SIZE</span>
                            </div>
                            <div type="button" className="btn w-100 btn-comons01"> SIZE 
                                <select value={selectedOption} onChange={handleSelectChange}>
                                    <option value="">-- Select a fruit --</option>
                                    <option value="apple">Apple</option>
                                    <option value="banana">Banana</option>
                                    <option value="cherry">Cherry</option>
                                    <option value="date">Date</option>
                                    <option value="elderberry">Elderberry</option>
                                </select>
                            </div>
                            <button type="button" onClick={handleDownloadSvg} className="btn btn-comons01"> SVG </button>
                            <button type="button" onClick={handleDownload} className="btn btn-comons01"> PNG </button>
                            <button type="button" onClick={handleDownloadWeb} className="btn btn-comons01"> WEBP </button>
                        </div>
                        <button type="button" className="btn btn mt-4"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M13.5759 17.2714L8.46576 14.484C7.83312 15.112 6.96187 15.5 6 15.5C4.067 15.5 2.5 13.933 2.5 12C2.5 10.067 4.067 8.5 6 8.5C6.96181 8.5 7.83301 8.88796 8.46564 9.51593L13.5759 6.72855C13.5262 6.49354 13.5 6.24983 13.5 6C13.5 4.067 15.067 2.5 17 2.5C18.933 2.5 20.5 4.067 20.5 6C20.5 7.933 18.933 9.5 17 9.5C16.0381 9.5 15.1669 9.11201 14.5343 8.48399L9.42404 11.2713C9.47382 11.5064 9.5 11.7501 9.5 12C9.5 12.2498 9.47383 12.4935 9.42408 12.7285L14.5343 15.516C15.167 14.888 16.0382 14.5 17 14.5C18.933 14.5 20.5 16.067 20.5 18C20.5 19.933 18.933 21.5 17 21.5C15.067 21.5 13.5 19.933 13.5 18C13.5 17.7502 13.5262 17.5064 13.5759 17.2714Z"></path></svg> Share </button>

                        <h5 className="list-texr mt-4"> <strong> Style : </strong> Phoenix Group Basic Outline <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(0,0,0,1)"><path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path></svg> </h5>
                    </div>
                 </div>

             </div>

            <div className="tags-list">
                <ul>
                {tags.map((post) => (
                    <li key={post.id}>
                        <Link href={post.link}>{post.title}</Link>
                    </li>
                ))}
                </ul>
            </div>
             <div className="styles-icons-div">
                 <h4> Icons With The Same Style And Concept </h4>
                 <div className="row row-cols-1 row-cols-lg-9">
                    {icons.length === 0 ? (
                        <p>Icons Coming.</p>
                        ) : (
                        icons.map((icon) => (
                            <div key={icon.id} className="svg-item col">
                            <button
                                className="btn p-0"
                                data-bs-toggle="modal"
                                data-bs-target="#modaldetails"
                                onClick={() => openModal(icon)}
                            >
                                <span dangerouslySetInnerHTML={{ __html: icon.icon_svg }}></span>
                            </button>
                            </div>
                        ))
                        )}
                 </div>
             </div>
         </div>
        </>
     );
}
export default DetailsIcons;