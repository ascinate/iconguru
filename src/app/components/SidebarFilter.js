
import { useState } from "react";
import Image from "next/image";


export default function SidebarFilter() {
    const [selectedOption, setSelectedOption] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedCate, setSelectedCate] = useState("");

    const [visibleItems, setVisibleItems] = useState(5);
    const loadMoreItems = () => {
      setVisibleItems(prev => prev + 5);
    };

    const Categories = [
      { id: 1, title: 'Social' , value: 'social', img: '/block-icons.svg'  },
      { id: 2, title: 'Arrow' , value: 'arrow', img: '/email.svg'   },
      { id: 3, title: 'Gallery', value: 'Names' , img: '/email.svg'},
      { id: 4, title: 'User' , value: 'Names', img: '/email.svg'  },
      { id: 5, title: 'Search' , value: 'Names', img: '/email.svg'  },
      { id: 6, title: 'Login' , value: 'Names', img: '/email.svg'  },
      { id: 7, title: 'Sign Up' , value: 'Names', img: '/email.svg'  },
      { id: 8, title: 'Home' , value: 'Names', img: '/email.svg'  },
      { id: 9, title: 'Business' , value: 'Names', img: '/email.svg'  },
      { id: 10, title: 'Email' , value: 'Names', img: '/email.svg'  },
      { id: 11, title: 'Interface' , value: 'Names', img: '/email.svg'  },
      { id: 12, title: 'Device' , value: 'Names', img: '/device.svg'  },
      { id: 13, title: 'Finance' , value: 'Names', img: '/finance.svg'  },
      { id: 14, title: 'Health & Medical' , value: 'Names', img: '/email.svg'  },
      { id: 15, title: 'Documents' , value: 'Names', img: '/documents.svg'  },
      { id: 16, title: 'Food' , value: 'Names', img: '/food.svg'  },
      { id: 17, title: 'Shopping' , value: 'Names', img: '/email.svg'  },
      { id: 18, title: 'Payment' , value: 'Names', img: '/email.svg'  },
      { id: 19, title: 'Daily Life' , value: 'Names', img: '/email.svg'  },
      { id: 20, title: 'Sports' , value: 'Names', img: '/email.svg'  },
      { id: 21, title: 'Real-estate' , value: 'Names', img: '/email.svg'  },
      { id: 22, title: 'Office' , value: 'Names', img: '/email.svg'  },
      { id: 23, title: 'Bar' , value: 'Names', img: '/email.svg'  },
      { id: 24, title: 'Furniture' , value: 'Names', img: '/email.svg'  },
      { id: 25, title: 'Smoking' , value: 'Names', img: '/email.svg'  },
    ];

    return (
      <>
        <aside className="sidebarsd_div d-inline-block w-100 ps-lg-0  pt-4">
            <div className="comon_heading01 d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M5 7C5 6.17157 5.67157 5.5 6.5 5.5C7.32843 5.5 8 6.17157 8 7C8 7.82843 7.32843 8.5 6.5 8.5C5.67157 8.5 5 7.82843 5 7ZM6.5 3.5C4.567 3.5 3 5.067 3 7C3 8.933 4.567 10.5 6.5 10.5C8.433 10.5 10 8.933 10 7C10 5.067 8.433 3.5 6.5 3.5ZM12 8H20V6H12V8ZM16 17C16 16.1716 16.6716 15.5 17.5 15.5C18.3284 15.5 19 16.1716 19 17C19 17.8284 18.3284 18.5 17.5 18.5C16.6716 18.5 16 17.8284 16 17ZM17.5 13.5C15.567 13.5 14 15.067 14 17C14 18.933 15.567 20.5 17.5 20.5C19.433 20.5 21 18.933 21 17C21 15.067 19.433 13.5 17.5 13.5ZM4 16V18H12V16H4Z"></path></svg>
              <h4 className="ms-2"> Filter </h4>  
            </div>
            <hr/>
            <div className="sub_headings01 d-inline-block w-100">
                <div className="d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(0,0,0,1)"><path d="M12 2C17.5222 2 22 5.97778 22 10.8889C22 13.9556 19.5111 16.4444 16.4444 16.4444H14.4778C13.5556 16.4444 12.8111 17.1889 12.8111 18.1111C12.8111 18.5333 12.9778 18.9222 13.2333 19.2111C13.5 19.5111 13.6667 19.9 13.6667 20.3333C13.6667 21.2556 12.9 22 12 22C6.47778 22 2 17.5222 2 12C2 6.47778 6.47778 2 12 2ZM10.8111 18.1111C10.8111 16.0843 12.451 14.4444 14.4778 14.4444H16.4444C18.4065 14.4444 20 12.851 20 10.8889C20 7.1392 16.4677 4 12 4C7.58235 4 4 7.58235 4 12C4 16.19 7.2226 19.6285 11.324 19.9718C10.9948 19.4168 10.8111 18.7761 10.8111 18.1111ZM7.5 12C6.67157 12 6 11.3284 6 10.5C6 9.67157 6.67157 9 7.5 9C8.32843 9 9 9.67157 9 10.5C9 11.3284 8.32843 12 7.5 12ZM16.5 12C15.6716 12 15 11.3284 15 10.5C15 9.67157 15.6716 9 16.5 9C17.3284 9 18 9.67157 18 10.5C18 11.3284 17.3284 12 16.5 12ZM12 9C11.1716 9 10.5 8.32843 10.5 7.5C10.5 6.67157 11.1716 6 12 6C12.8284 6 13.5 6.67157 13.5 7.5C13.5 8.32843 12.8284 9 12 9Z"></path></svg> 
                  <h5 className="ms-2"> Colors </h5>
                </div>

                <div className="options_names d-flex flex-wrap align-items-center mt-3">
                    <div className="cmout form-check position-relative">
                        <input
                            type="radio"
                            value="option1"
                            id="option1"
                            checked={selectedOption === "option1"}
                            onChange={(e) => setSelectedOption(e.target.value)}
                            className="form-check-input"
                            />
                        <label className="form-check-label" htmlFor="option1">
                         <span className="me-2"> <Image src="/block-icons.svg" loading="lazy" width={14} height={14}/> </span>  Black
                       </label>
                    </div>

                    <div className="cmout form-check position-relative">
                        <input
                            type="radio"
                            id="option2"
                            name="options"
                            value="option2"
                            checked={selectedOption === "option2"}
                            onChange={(e) => setSelectedOption(e.target.value)}
                            className="form-check-input"
                            />
                            
                        <label className="form-check-label" htmlFor="option2">
                          <span className="me-2"> <Image src="/gradients.svg" loading="lazy" width={16} height={16}/> </span>
                         Color
                       </label>
                    </div>
                    <div className="cmout form-check position-relative">
                        <input
                            type="radio"
                            id="option3"
                            name="options"
                            value="option3"
                            checked={selectedOption === "option3"}
                            onChange={(e) => setSelectedOption(e.target.value)}
                            className="form-check-input"
                            />
                        <label className="form-check-label" htmlFor="option2">
                        <span className="me-2"> <Image src="/gradients.svg" loading="lazy" width={16} height={16}/> </span>
                         Gradient
                       </label>
                    </div>
                   
                       
                </div>

                <div className="d-flex align-items-center mt-5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(0,0,0,1)"><path d="M12 2C17.5222 2 22 5.97778 22 10.8889C22 13.9556 19.5111 16.4444 16.4444 16.4444H14.4778C13.5556 16.4444 12.8111 17.1889 12.8111 18.1111C12.8111 18.5333 12.9778 18.9222 13.2333 19.2111C13.5 19.5111 13.6667 19.9 13.6667 20.3333C13.6667 21.2556 12.9 22 12 22C6.47778 22 2 17.5222 2 12C2 6.47778 6.47778 2 12 2ZM10.8111 18.1111C10.8111 16.0843 12.451 14.4444 14.4778 14.4444H16.4444C18.4065 14.4444 20 12.851 20 10.8889C20 7.1392 16.4677 4 12 4C7.58235 4 4 7.58235 4 12C4 16.19 7.2226 19.6285 11.324 19.9718C10.9948 19.4168 10.8111 18.7761 10.8111 18.1111ZM7.5 12C6.67157 12 6 11.3284 6 10.5C6 9.67157 6.67157 9 7.5 9C8.32843 9 9 9.67157 9 10.5C9 11.3284 8.32843 12 7.5 12ZM16.5 12C15.6716 12 15 11.3284 15 10.5C15 9.67157 15.6716 9 16.5 9C17.3284 9 18 9.67157 18 10.5C18 11.3284 17.3284 12 16.5 12ZM12 9C11.1716 9 10.5 8.32843 10.5 7.5C10.5 6.67157 11.1716 6 12 6C12.8284 6 13.5 6.67157 13.5 7.5C13.5 8.32843 12.8284 9 12 9Z"></path></svg> 
                  <h5 className="ms-2"> Style </h5>
                </div>

                <div className="options_names d-flex flex-wrap align-items-center mt-3">
                    <div className="cmout form-check position-relative">
                        <input
                            type="radio"
                            value="sizeoption1"
                            id="sizeoption1"
                            name="sizeoptions"
                            checked={selectedSize === "sizeoption1"}
                            onChange={(e) => setSelectedSize(e.target.value)}
                            className="form-check-input"
                            />
                        <label className="form-check-label" htmlFor="sizeoption1">
                         <span className="me-2"> <Image src="/block-icons.svg" loading="lazy" width={14} height={14}/> </span>  Solid
                       </label>
                    </div>

                    <div className="cmout form-check position-relative">
                        <input
                            type="radio"
                            id="sizeoption2"
                            name="sizeoptions"
                            value="sizeoption2"
                            checked={selectedSize === "sizeoption2"}
                            onChange={(e) => setSelectedSize(e.target.value)}
                            className="form-check-input"
                            />
                            
                        <label className="form-check-label" htmlFor="sizeoption2">
                          <span className="me-2"> <Image src="/ragulari.svg" loading="lazy" width={16} height={16}/> </span>
                          Regular
                       </label>
                    </div>
                    <div className="cmout form-check position-relative">
                        <input
                            type="radio"
                            id="sizeoption3"
                            name="sizeoptions"
                            value="sizeoption3"
                            checked={selectedSize === "sizeoption3"}
                            onChange={(e) => setSelectedSize(e.target.value)}
                            className="form-check-input"
                            />
                        <label className="form-check-label" htmlFor="sizeoption3">
                        <span className="me-2"> <Image src="/ragulari.svg" loading="lazy" width={16} height={16}/> </span>
                         Light
                       </label>
                    </div>
                    <div className="cmout form-check position-relative">
                        <input
                            type="radio"
                            id="sizeoption4"
                            name="sizeoptions"
                            value="sizeoption4"
                            checked={selectedSize === "sizeoption4"}
                            onChange={(e) => setSelectedSize(e.target.value)}
                            className="form-check-input"
                            />
                        <label className="form-check-label" htmlFor="sizeoption3">
                        <span className="me-2"> <Image src="/duotine.svg" loading="lazy" width={16} height={16}/> </span>
                           Duotine
                       </label>
                    </div>
                    
                   
                       
                </div>

                <div className="d-flex align-items-center mt-5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(0,0,0,1)"><path d="M12 2C17.5222 2 22 5.97778 22 10.8889C22 13.9556 19.5111 16.4444 16.4444 16.4444H14.4778C13.5556 16.4444 12.8111 17.1889 12.8111 18.1111C12.8111 18.5333 12.9778 18.9222 13.2333 19.2111C13.5 19.5111 13.6667 19.9 13.6667 20.3333C13.6667 21.2556 12.9 22 12 22C6.47778 22 2 17.5222 2 12C2 6.47778 6.47778 2 12 2ZM10.8111 18.1111C10.8111 16.0843 12.451 14.4444 14.4778 14.4444H16.4444C18.4065 14.4444 20 12.851 20 10.8889C20 7.1392 16.4677 4 12 4C7.58235 4 4 7.58235 4 12C4 16.19 7.2226 19.6285 11.324 19.9718C10.9948 19.4168 10.8111 18.7761 10.8111 18.1111ZM7.5 12C6.67157 12 6 11.3284 6 10.5C6 9.67157 6.67157 9 7.5 9C8.32843 9 9 9.67157 9 10.5C9 11.3284 8.32843 12 7.5 12ZM16.5 12C15.6716 12 15 11.3284 15 10.5C15 9.67157 15.6716 9 16.5 9C17.3284 9 18 9.67157 18 10.5C18 11.3284 17.3284 12 16.5 12ZM12 9C11.1716 9 10.5 8.32843 10.5 7.5C10.5 6.67157 11.1716 6 12 6C12.8284 6 13.5 6.67157 13.5 7.5C13.5 8.32843 12.8284 9 12 9Z"></path></svg> 
                  <h5 className="ms-2"> Categories </h5>
                </div>
                <div className="options_names  align-items-center mt-3">
             
                    {Categories.slice(0, visibleItems).map((post, index) => (
                          <div className="cmout form-check d-inline-block position-relative" key={index}>
                              <input
                                  type="radio"
                                  value={post.value}
                                  id={post.id}
                                  name="sizeoptions"
                                  checked={selectedCate === "sizeoption1"}
                                  onChange={(e) => setSelectedCate(e.target.value)}
                                  className="form-check-input"
                                  />
                              <label className="form-check-label" htmlFor="sizeoption1">
                              <span className="me-2"> <Image src={post.img} loading="lazy" width={14} height={14}/> </span>  {post.title}
                            </label>
                          </div>
                          
                    ))}
                    {visibleItems < Categories.length && (
                      <div className="d-block mt-0">
                        <button className="btn btn-load-more p-0" onClick={loadMoreItems}>Load More</button>
                      </div>
                    )}
                </div>

            </div>
        </aside>
      </>
    );
  }