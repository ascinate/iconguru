import Link from "next/link";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Footer(){

    return(
        <>
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