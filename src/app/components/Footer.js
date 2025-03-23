import Link from "next/link";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Image from "next/image";

function Footer(){
    const mianmenu = [
        { id: 1, title: 'Home' , link: '/'  },
        { id: 2, title: 'About Us' , link: '/'  },
        { id: 3, title: 'Blog' , link: '/'  },
    ];
    const categorymenu = [
        { id: 1, title: 'Bold' , link: '/'  },
        { id: 2, title: 'Solid' , link: '/'  },
        { id: 3, title: 'Regular' , link: '/'  },
        { id: 4, title: 'Thin' , link: '/'  },
    ];
    const topicons = [
        { id: 1, title: 'Sports' , link: '/'  },
        { id: 2, title: 'Family Icons' , link: '/'  },
        { id: 3, title: 'Wired Family' , link: '/'  },
        { id: 4, title: 'Doodle Family' , link: '/'  },
    ];
    const supports = [
        { id: 1, title: 'FAQ' , link: '/'  },
        { id: 2, title: 'Contact' , link: '/'  },
        { id: 3, title: 'Pricing' , link: '/'  },
    ];
    return(
        <>
        <footer className="float-start w-100">
            <div className="container">
                <div className="row row-cols-1 row-cols-lg-4">
                    <div className="col">
                        <div className="comon-footers-div01">
                            <Link href='/'>
                                <Image loading="lazy" src="/footer-logo.svg"
                                        alt="iconsguru"
                                        width={114}
                                        height={18} />
                            </Link>

                            <ul className="comon-links mt-4 ms-0 p-0">
                                {mianmenu.map((page) => (
                                    <li key={page.id}>
                                      <Link href={page.link}> {page.title} </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="comon-footers-div01">
                           <h5 className="text-white"> Catagory </h5>
                            <ul className="comon-links mt-4 ms-0 p-0">
                                {categorymenu.map((page) => (
                                    <li key={page.id}>
                                      <Link href={page.link}> {page.title} </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="comon-footers-div01">
                           <h5 className="text-white"> Top Icons </h5>
                            <ul className="comon-links mt-4 ms-0 p-0">
                                {topicons.map((page) => (
                                    <li key={page.id}>
                                      <Link href={page.link}> {page.title} </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="comon-footers-div01">
                           <h5 className="text-white"> Support </h5>
                            <ul className="comon-links mt-4 ms-0 p-0">
                                {supports.map((page) => (
                                    <li key={page.id}>
                                      <Link href={page.link}> {page.title} </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row row-cols-1 row-cols-lg-2 g-lg-0">
                   <div className="col">
                      <ul className="d-flex align-items-center copy-text p-0 m-0">
                        <li>
                            <Link href='/'>Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href='/'>Terms of Service</Link>
                        </li>
                        <li>
                            <Link href='/'>Cookie Policy</Link>
                        </li>
                      </ul>
                   </div>
                   <div className="col d-grid justify-content-lg-end"> <p className="text-white"> &copy; 2025 icons,inc. All Rights Reserved </p> </div>
                </div>
            </div>
        </footer>
          <div className="modal fade login-div-modal" id="loginModal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        
                    </div>
                <div className="modal-body">

                    
                        <div id="login-td-div" className="com-div-md">
                        
                        <h5 className="text-center mb-3"> Login </h5>
                            <button type="button" className="close" data-bs-dismiss="modal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </button>
                        <div className="login-modal-pn">
                        
                        <div className="cm-select-login mt-3">
                             <LoginForm/>
                            
                        
                        </div>
                        
                        </div>

                        <p className="text-center  mt-3">  
                        <a data-bs-toggle="modal" className="regster-bn" data-bs-target="#lostpsModal" data-bs-dismiss="modal"> Lost Password ? </a>  </p>
                        
                        
                        <p className="text-center  mt-3"> Do not have an account? 
                            <a className="regster-bn" data-bs-toggle="modal" data-bs-target="#registerModal" data-bs-dismiss="modal"> Register </a>  </p>
                        </div>
                   
                
                </div>
                
                </div>
            </div>
          </div>


          <div className="modal fade login-div-modal" id="registerModal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        
                    </div>
                <div className="modal-body">

                    
                        <div id="login-td-div" className="com-div-md">
                        
                        <h5 className="text-center mb-3"> Signup </h5>
                            <button type="button" className="close" data-bs-dismiss="modal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </button>
                        <div className="login-modal-pn">
                        
                        <div className="cm-select-login mt-3">
                             <SignupForm/>
                            
                        
                        </div>
                        
                         
                        </div>

                        <p className="text-center  mt-3">  
                        <a data-bs-toggle="modal" className="regster-bn" data-bs-target="#lostpsModal" data-bs-dismiss="modal"> Lost Password ? </a>  </p>
                        
                        
                        <p className="text-center  mt-3"> Do have an account? 
                            <a className="regster-bn" data-bs-toggle="modal" data-bs-target="#loginModal" data-bs-dismiss="modal"> Login </a>  </p>
                        </div>
                   
                
                </div>
                
                </div>
            </div>
          </div>

        </>
    )
   };
   
   export default Footer;