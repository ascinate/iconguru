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
    { id: 4, title: 'Social' , counting: '2000', tag:"", img: '/social.svg', link: '/icons'  },
    { id: 5, title: 'Business' , counting: '1000', tag:"", img: '/business.svg', link: '/icons'  },
    { id: 6, title: 'Shopping' , counting: '1000', tag:"", img: '/shopping1.svg', link: '/icons'  },
  ];

  const categorytypes = [
    { id: 1, title: 'Solid' , counting: '200', tag:"", img: '/jb-white-1.svg', link: '/icons'  },
    { id: 2, title: 'Regular' , counting: '100', tag:"New", img: '/design-th1.svg', link: '/icons'  },
    { id: 3, title: 'Bold' , counting: '300', tag:"", img: '/food-th.svg', link: '/icons'  },
    { id: 4, title: 'Color' , counting: '2000', tag:"", img: '/color-new22.svg', link: '/icons'  },
    { id: 5, title: 'Color' , counting: '1000', tag:"", img: '/business.svg', link: '/icons'  },
    { id: 6, title: 'Animation' , counting: '1000', tag:"", img: '/shopping1.svg', link: '/icons'  },
  ];
  
  return (
    <>
   <NavicationHome/>
   <BannerHome/>

   <main className="float-start w-100 main-body">
         <section className="float-start about-sections comon-short-parts w-100">
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

         <section className="float-start about-sections comon-short-parts w-100">
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

         <section className="float-start w-100 comon-short-parts types-catg-sections">
             <div className="container">
                <h2 className="text-center comon-head"> Featured premium icon sets </h2>
                <p className="text-center"> Download the perfection and largest unique icons drawn by hand. </p>
                <div className="row row-cols-1 row-cols-lg-3 gy-4 g-lg-4 mt-5 categort-list01">

                      {categorytypes.map((type) => (
                              <div className="col" key={type.id}>
                                <article className="d-inline-block w-100 comon-types01 position-relative">
                                  <h5 className="mb-0 titels-ts"> 
                                        <Link href={type.link}> 
                                          {type.title}
                                        </Link>
                                  </h5>
                                  <figure className="text-center mx-auto d-block mb-1">
                                    <Link href={type.link}> <Image loading="lazy" src={type.img}
                                          alt="user"
                                          width={260}
                                          height={178} /> </Link>
                                  </figure>
                                  
                                </article>
                              </div>
                          ))}

                 </div>
             </div>
         </section>
          

         <section className="float-start about-sections comon-short-parts w-100">
             <aside className="container">
                 <div className="row row-cols-1 row-cols-lg-2 align-items-center">
                    <div className="col">
                       <div className="ab-left">
                          <h2 className="comon-head"> What’s New<span className="d-lg-block"> in Iconguru </span> </h2>
                          <p className="col-lg-9 mt-2"> Level up your designs with our premium icons! Whether you need sleek, modern, or creative icons, we’ve got you covered.  </p>
                          <h5 className="mt-4"> Available Formats </h5>
                          <ul className="p-0 d-flex align-items-center flex-wrap m-0 fe-list fe-list2 mt-4">
                            <li className="d-flex align-items-baseline">
                                <h5 className="m-0"> PNG 
                                </h5>
                            </li>
                            <li className="d-flex align-items-baseline">
                                <h5 className="m-0"> SVG
                                </h5>
                            </li>
                            <li className="d-flex align-items-baseline">
                                <h5 className="m-0"> JPJE
                                </h5>
                            </li>
                            <li className="d-flex align-items-baseline">
                                <h5 className="m-0"> WEBP
                                </h5>
                            </li>
                            
                            
                          </ul>
                          <Link href='/' className="btn btn-expolre mt-3"> Explore now </Link>
                          
                       </div>
                    </div>
                    <div className="col">
                       <figure className="m-0">
                           <Image loading="lazy" src="/download-svg.svg"
                                        alt="user"
                                        width={442}
                                        height={338} />
                       </figure>
                    </div>
                 </div>
             </aside>
          </section>
       

          
          <section className="float-start w-100 register-sections comon-short-parts position-relative">
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
