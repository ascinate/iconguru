import Link from "next/link";
import Image from "next/image";
import Form from 'next/form';


function NavicationHome(){
    const mianmenu = [
        { id: 1, title: 'Icons' , link: '/icons'  },
        { id: 2, title: 'Interface Icons' , link: '/icons'  },
        { id: 3, title: 'Animated Icons' , link: '/icons'  },
      ];
 return(
     <>
     <header className="sub_header home-menus float-start w-100">
       <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link className="navbar-brand" href='/'>
                   <Image loading="lazy" src="/icons_guru_logo.webp"
                        alt="iconsguru"
                        width={114}
                        height={18} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        {mianmenu.map((page) => (
                            <li className="nav-item" key={page.id}>
                               <Link href={page.link} className="nav-link"> {page.title} </Link>
                            </li>
                        ))}
                    </ul>
                
                </div>
                <div className="right-menus-div01 ms-auto d-flex align-items-center">
                    <button type="button" className="btn me-3" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
                    <button type="button" className="btn btn-signup01" data-bs-toggle="modal" data-bs-target="#registerModal">Sign Up</button>
                </div>
            </div>
        </nav>
    </header>
     </>
 )
};

export default NavicationHome;

