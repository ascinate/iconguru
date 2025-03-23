import Image from "next/image";
import styles from "./page.module.css";
import CategorySlider from "./components/CategorySlider";
import NavicationHome from "./components/NavicationHome";
import BannerHome from "./components/BannerHome";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  const icontypes = [
    { id: 1, title: 'Brands' , counting: '200', img: '/regular.webp', link: '/icons'  },
    { id: 2, title: 'Regular' , counting: '100', img: '/regular.webp', link: '/icons'  },
    { id: 3, title: 'Bold' , counting: '300', img: '/blog.png', link: '/icons'  },
    { id: 4, title: 'Thin' , counting: '2000', img: '/tine.png', link: '/icons'  },
  ];
  return (
    <>
   <NavicationHome/>
   <BannerHome/>

   <main className="float-start w-100 main-body">


          <section className="float-start incons-types-sections w-100">
             <aside className="container">
                <div className="row g-lg-0 justify-content-between w-100 align-items-center">
                    <div className="col-lg-9">
                        <h3 className="page-headings01"> The Most Wanted Free SVG User  Interface Icons </h3>
                    </div>
                    <div className="col-lg-3 d-grid justify-content-lg-end">
                      <Link className="btn btn-all-links p-0" href='/icons'> All Free SVG Icons 
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                          </svg>            
                      </Link>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-lg-4 gy-4 g-lg-4 mt-2">

                     {icontypes.map((type) => (
                            <div className="col" key={type.id}>
                              <article className="d-inline-block w-100 comon-types01">
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
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
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
                           <Link href='/' className="btn btn-explores p-0 ms-3"> Explore New <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
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
