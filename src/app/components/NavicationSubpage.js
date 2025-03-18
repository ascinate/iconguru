import Link from "next/link";
import Image from "next/image";
import Form from 'next/form';


function NavicationSubpage(){

 return(
     <>
     <header className="sub_header float-start w-100">
       <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link className="navbar-brand" href='/'>
                   <Image loading="lazy" src="/icons_guru_logo.webp"
                        alt="iconsguru"
                        width={114}
                        height={18} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                </button>
                <div className="serach-div-home d-inlin-block ms-5">
                    <Form action="/search" className="row">
                        <div className="col-11">
                            <input name="query" className="form-control" placeholder="Bag" />
                        </div>
                         <button type="button" className="btn btn-search-sder col-1 ps-0">
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(0,0,0,1)"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
                         </button>        
                    </Form>
                    
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                           <a className="nav-link me-3" data-bs-toggle="modal" data-bs-target="#loginModal">Login</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link btn-signup01" data-bs-toggle="modal" data-bs-target="#registerModal">Sign Up</a>
                        </li>
                        
                    </ul>
                
                </div>
            </div>
        </nav>
    </header>
     </>
 )
};

export default NavicationSubpage;

