import Image from "next/image";


function BannerHome() {
    return(
        <>
         <section className="float-start w-100 banner-parts01 d-grid align-content-center">
            <div className="container">
                <div className="col-lg-5 p-2 justify-content-between user-haedinhg bg-white mx-auto d-flex align-items-center">
                   <span className="trusted px-3 py-2">Trusted</span>
                   <p className="m-0 mx-3"> By 350k+ Design & Professionals </p>
                   <Image loading="lazy" src="/user01.webp"
                                           alt="user"
                                           width={38}
                                           height={13} />
                </div>
                <h2 className="text-center my-5">Inspiring Icons, Effortless Downloads</h2>
                <div className="search-sections-home col-lg-7 mx-auto d-flex justify-content-between align-items-center bg-white p-2">
                    <input type="search" className="form-control" placeholder="Search icons..."/>
                    <button className="btn btn-search"> Search <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg> </button>
                </div>
            </div>
         </section>
        </>
    );
}
export default BannerHome;