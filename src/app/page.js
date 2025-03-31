import Image from "next/image";
import styles from "./page.module.css";
import CategorySlider from "./components/CategorySlider";
import NavicationHome from "./components/NavicationHome";
import BannerHome from "./components/BannerHome";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  const icontypes = [
    { id: 1, title: 'Interface Essential' , counting: '200', tag:"", img: '/interface.svg', link: '/icons'  },
    { id: 2, title: 'Design' , counting: '100', tag:"New", img: '/design-th1.svg', link: '/icons'  },
    { id: 3, title: 'Food' , counting: '300', tag:"", img: '/food-th.svg', link: '/icons'  },
    { id: 4, title: 'Social' , counting: '2000', tag:"", img: '/tine.png', link: '/icons'  },
  ];
  return (
    <>
   <NavicationHome/>
   <BannerHome/>

   <main className="float-start w-100 main-body">
         <section className="float-start about-sections w-100">
             <aside className="container">
                 <div className="row row-cols-1 row-cols-lg-2 align-items-center">
                    <div className="col">
                       <div className="ab-left">
                          <h2 className="comon-head"> Your workflow <span className="d-lg-block"> been never so fast </span> </h2>
                          <p className="col-lg-8 mt-2"> We’ve developed from scratch our tools to browse, customize and quickly use our assets. Drop our icons and. </p>
                          <Link href='/' className="btn btn-expolre mt-3"> Explore now </Link>
                       </div>
                    </div>
                    <div className="col">
                       <figure className="m-0">
                           <Image loading="lazy" src="/musics.svg"
                                        alt="user"
                                        width={500}
                                        height={383} />
                       </figure>
                    </div>
                 </div>
             </aside>
         </section>

         <section className="float-start fetures-acountins-sections w-100">
            <div className="container">
                <h2 className="text-center comon-head"> Featured premium icon sets </h2>
                <p className="text-center"> Download the perfection and largest unique icons drawn by hand. </p>

                  <div className="row row-cols-1 row-cols-lg-3 gy-4 g-lg-4 mt-5">

                      {icontypes.map((type) => (
                              <div className="col" key={type.id}>
                                <article className="d-inline-block w-100 comon-types01 position-relative">
                                <span className="tagsd">{type.tag}</span>
                                  <figure className="text-center mx-auto d-block mb-1">
                                    <Link href={type.link}> <Image loading="lazy" src={type.img}
                                          alt="user"
                                          width={260}
                                          height={178} /> </Link>
                                  </figure>
                                  <span className="d-flex icon-list-name col-lg-10 mx-auto align-items-center justify-content-between">
                                      <h5 className="mb-0"> 
                                        <Link href={type.link}> 
                                          {type.title}
                                        </Link>
                                      </h5>
                                      <Link className="coun-text" href={type.link}> 
                                          
                                       <strong> {type.counting}</strong> icons
                                      </Link>
                                      
                                  </span>
                                </article>
                              </div>
                          ))}
                      
                  </div>

            </div>
         </section>

         <section className="float-start about-sections w-100">
             <aside className="container">
                 <div className="row row-cols-1 row-cols-lg-2 align-items-center">
                    <div className="col">
                       <div className="ab-left">
                          <h2 className="comon-head"> All the style that <span className="d-lg-block"> you need! </span> </h2>
                          <p className="col-lg-8 mt-2"> We’ve developed from scratch our tools to browse, customize and quickly us.  </p>
                          <ul className="p-0 m-0 fe-list mt-4">
                            <li className="d-flex align-items-baseline">
                                <span className="icoh">
                                  <Image loading="lazy" src="/flag.svg"
                                        alt="user"
                                        width={32}
                                        height={32} />
                                
                                </span>
                                <h5 className="ms-3"> Line black 
                                  <small className="d-block"> We offer 3 style of line icons  </small> 
                                </h5>
                            </li>
                            <li className="d-flex align-items-baseline">
                                <span className="icoh">
                                  <Image loading="lazy" src="/fill-b.svg"
                                        alt="user"
                                        width={32}
                                        height={32} />
                                
                                </span>
                                <h5 className="ms-3"> Fill black 
                                  <small className="d-block"> This style is great for you project  </small> 
                                </h5>
                            </li>
                            <li className="d-flex align-items-baseline">
                                <span className="icoh">
                                  <Image loading="lazy" src="/color.svg"
                                        alt="user"
                                        width={32}
                                        height={32} />
                                
                                </span>
                                <h5 className="ms-3"> Colors 
                                  <small className="d-block"> We offer 5 style of line icons   </small> 
                                </h5>
                            </li>
                          </ul>
                       </div>
                    </div>
                    <div className="col">
                       <figure className="m-0">
                           <Image loading="lazy" src="/style-icon.svg"
                                        alt="user"
                                        width={500}
                                        height={383} />
                       </figure>
                    </div>
                 </div>
             </aside>
         </section>

          <section className="float-start incons-types-sections w-100">
             <aside className="container">
                <div className="row g-lg-0 justify-content-between w-100 align-items-center">
                    <div className="col-lg-9">
                        <h3 className="page-headings01"> The Most Wanted Free SVG User  Interface Icons </h3>
                    </div>
                    <div className="col-lg-3 d-grid justify-content-lg-end">
                      <Link className="btn btn-all-links p-0" href='/icons'> All Free SVG Icons 
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                          </svg>            
                      </Link>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-lg-4 gy-4 g-lg-4 mt-2">

                     {icontypes.map((type) => (
                            <div className="col" key={type.id}>
                              <article className="d-inline-block w-100 comon-types01 position-relative">
                                
                                <figure className="text-center mx-auto d-block">
                                  <Link href={type.link}> <Image loading="lazy" src={type.img}
                                        alt="user"
                                        width={205}
                                        height={202} /> </Link>
                                </figure>
                                <span className="d-flex align-items-center w-100 justify-content-between">
                                    <h5> 
                                      <Link href={type.link}> 
                                        {type.title} <small className="d-block">
                                       {type.counting}+ icons
                                      </small> 
                                      </Link>
                                    </h5>
                                    <Link href={type.link} className="btn btn-arows">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(255,255,255,1)"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                                    </Link>
                                </span>
                              </article>
                            </div>
                        ))}
                    
                </div>
             </aside>
          </section>

          <section className="float-start tops-icons-sections w-100">
             <aside className="container">
                <div className="row g-lg-0 justify-content-between w-100 align-items-center">
                    <div className="col-lg-9">
                        <h3 className="page-headings01"> Top Icons </h3>
                    </div>
                    <div className="col-lg-3 d-grid justify-content-lg-end">
                      <Link className="btn btn-all-links p-0" href='/icons'> All Category 
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                          </svg>            
                      </Link>
                    </div>
                </div>
                <CategorySlider/>
             </aside>
          </section>

          <section className="float-start w-100 whats-news">
              <div className="container">
                  <div className="row row-cols-1 row-cols-lg-2 align-items-center">
                     <div className="col">
                        <h2> What’s New In Ascinate </h2>
                        <p> Level up your designs with our premium icons! 
Whether you need sleek, modern, or creative icons,
we’ve got you covered.   </p>
                        <h5 className="mt-4"> Available Formats</h5>
                        <ul className="d-flex align-items-center flex-wrap mt-3">
                          <li>
                            PNG
                          </li>
                          <li>
                            SVG
                          </li>
                          <li>
                            GIF
                          </li>
                          <li>
                            WEBP
                          </li>
                        </ul>
                        <div className="d-flex align-items-center mt-4">
                           <Link href='/' className="btn btn-downalod"> Download </Link>
                           <Link href='/' className="btn btn-explores p-0 ms-3"> Explore New <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg> </Link>
                        </div>
                     </div>
                     <div className="col">
                        <figure>
                           <Image loading="lazy" src="/right-img.png"
                                  alt="iconsguru"
                                  width={504}
                                  height={324} />
                        </figure>
                     </div>
                  </div>
              </div>
          </section>
          <section className="float-start w-100 register-sections position-relative">
              <div className="container">
                
                <Image loading="lazy" className="rockty" src="/rocket-1.png"
                alt="iconsguru"
                width={115}
                height={115} />

                  <h2 className="text-white text-center col-lg-7 mx-auto"> What Will You Build With The Best 
                  Animated Icons In The World </h2>
                  <button type="button" className="btn btn-signuop-01 mt-3" data-bs-toggle="modal" data-bs-target="#registerModal">Register</button>
              </div>
          </section>
   </main>
   <Footer/>
    </>
  );
}
