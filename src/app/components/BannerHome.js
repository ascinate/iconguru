'use client';
import Link from "next/link";
import { AutoComplete } from 'primereact/autocomplete';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";



function BannerHome() {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);
  const [totalIcons, setTotalIcons] = useState(0);
  const router = useRouter();

  const search = async (event) => {
    const query = event.query;

    if (query.length > 1) {
      try {
        const res = await fetch(`https://iconsguru.com/admin/api/icons/search?query=${encodeURIComponent(query)}`);
        const data = await res.json();
        const names = data.data.map(icon => icon.icon_name);
        setItems(names);
      } catch (err) {
        console.error('Autocomplete fetch error:', err);
      }
    }
  };

  useEffect(() => {
    const fetchIconCount = async () => {
      try {
        const res = await fetch('https://iconsguru.com/admin/api/icons/total-count');
        const data = await res.json();
        setTotalIcons(data.total);
      } catch (err) {
        console.error("Count fetch error:", err);
      }
    };
  
    fetchIconCount();
  }, []);

  const handleSearchClick = () => {
    if (value.trim()) {
      router.push(`/search?search=${encodeURIComponent(value.trim())}`);
    }
  };

  return (
   

     <section className="float-start w-100 banner-parts01 d-grid align-content-center">
     <div className="container">
         <h5 className="text-center sub-headings"> {totalIcons.toLocaleString()} FREE ICONS </h5>
         <h2 className="text-center">We Deliver the World’s Best Icons</h2>
         <p className="text-center text-para1"> Download the perfection and largest unique icons drawn by hand. </p>
         <div className="search-sections-home col-lg-8 mx-auto d-flex justify-content-between align-items-center bg-white">
         <AutoComplete
        value={value}
        placeholder="Search icons..."
        suggestions={items}
        completeMethod={search}
        onChange={(e) => setValue(e.value)}
        className="form-control w-full"
        loading={false}
        />
         <button className="btn btn-search" onClick={handleSearchClick}>
            Search{" "}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)">
              <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
            </svg>
          </button>
         </div>
         
         <div className="favi-icons mt-4 col-lg-7 mx-auto d-flex align-items-center justify-content-center">
             <p className="m-0">Favorite Icons: </p>
             <ul className="d-flex align-items-center ms-3">
                {favicons.map((icon) => (
                     <li key={icon.id}>
                        <Link href={icon.link} className="fb-icon mx-2"> <span>{icon.code}</span> </Link>
                     </li>
                 ))}
                 <li>
                   
                 </li>
             </ul>
         </div>
     </div>
  </section>
  );
}

export default BannerHome;
const favicons = [
    { id: 1, title: 'Icons' , link: '/icons', code:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M16.5 0H7.5C5.51088 0 3.60322 0.790176 2.1967 2.1967C0.790176 3.60322 0 5.51088 0 7.5L0 16.5C0 18.4891 0.790176 20.3968 2.1967 21.8033C3.60322 23.2098 5.51088 24 7.5 24H16.5C18.4891 24 20.3968 23.2098 21.8033 21.8033C23.2098 20.3968 24 18.4891 24 16.5V7.5C24 5.51088 23.2098 3.60322 21.8033 2.1967C20.3968 0.790176 18.4891 0 16.5 0V0ZM21.75 16.5C21.75 17.8924 21.1969 19.2277 20.2123 20.2123C19.2277 21.1969 17.8924 21.75 16.5 21.75H7.5C6.10761 21.75 4.77226 21.1969 3.78769 20.2123C2.80312 19.2277 2.25 17.8924 2.25 16.5V7.5C2.25 6.10761 2.80312 4.77226 3.78769 3.78769C4.77226 2.80312 6.10761 2.25 7.5 2.25H16.5C17.8924 2.25 19.2277 2.80312 20.2123 3.78769C21.1969 4.77226 21.75 6.10761 21.75 7.5V16.5Z" fill="black"/>
        <path d="M12 6C10.8133 6 9.65328 6.35189 8.66658 7.01118C7.67989 7.67047 6.91085 8.60754 6.45673 9.7039C6.0026 10.8003 5.88378 12.0067 6.11529 13.1705C6.3468 14.3344 6.91825 15.4035 7.75736 16.2426C8.59648 17.0818 9.66557 17.6532 10.8295 17.8847C11.9933 18.1162 13.1997 17.9974 14.2961 17.5433C15.3925 17.0892 16.3295 16.3201 16.9888 15.3334C17.6481 14.3467 18 13.1867 18 12C18 10.4087 17.3679 8.88258 16.2426 7.75736C15.1174 6.63214 13.5913 6 12 6ZM12 15.75C11.2583 15.75 10.5333 15.5301 9.91661 15.118C9.29993 14.706 8.81928 14.1203 8.53545 13.4351C8.25163 12.7498 8.17736 11.9958 8.32206 11.2684C8.46675 10.541 8.82391 9.8728 9.34835 9.34835C9.8728 8.8239 10.541 8.46675 11.2684 8.32205C11.9958 8.17736 12.7498 8.25162 13.4351 8.53545C14.1203 8.81928 14.706 9.29993 15.118 9.91661C15.5301 10.5333 15.75 11.2583 15.75 12C15.75 12.9946 15.3549 13.9484 14.6517 14.6517C13.9484 15.3549 12.9946 15.75 12 15.75Z" fill="black"/>
        <path d="M18.4499 6.34949C18.8914 6.34949 19.2494 5.99154 19.2494 5.54999C19.2494 5.10844 18.8914 4.75049 18.4499 4.75049C18.0083 4.75049 17.6504 5.10844 17.6504 5.54999C17.6504 5.99154 18.0083 6.34949 18.4499 6.34949Z" fill="black"/>
        </svg>,  },
    { id: 2, title: 'Interface Icons' , link: '/icons', code:<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.8 9.11488C19.3023 7.91655 19.5608 6.63019 19.5604 5.33088C19.5659 1.96075 17.8609 0 14.7355 0C11.5235 0 9.64805 2.49012 9.64805 5.775C9.57357 7.2436 9.90658 8.7042 10.6103 9.99537C11.314 11.2865 12.361 12.358 13.6355 13.0914C12.6703 15.0653 11.4003 16.875 9.87217 18.4539C7.35867 15.3849 5.08305 11.2915 4.14805 3.3H0.435547C2.15017 16.6073 7.2638 20.8423 8.61542 21.6563C8.92529 21.8727 9.29236 21.9924 9.67025 22.0002C10.0481 22.008 10.4199 21.9037 10.7384 21.7003C13.3843 19.5982 15.5125 16.9168 16.9589 13.8628C17.8358 13.8568 18.7094 13.7558 19.5645 13.5616V10.9491C19.0417 11.072 18.5066 11.1352 17.9695 11.1375C15.2195 11.1375 13.0965 9.19875 13.0965 5.82725C13.0965 4.17725 13.7304 3.3165 14.6255 3.3165C15.478 3.3165 16.0459 4.08788 16.0459 5.654C16.02 6.48251 15.8812 7.30362 15.6334 8.09463C15.9867 8.57631 16.483 8.93423 17.0516 9.11742C17.6201 9.30061 18.232 9.29972 18.8 9.11488Z" fill="black"/>
</svg>,  },
    { id: 3, title: 'Animated Icons' , link: '/icons', code:<svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
        <path d="M1.5 0L0 4.5V21H6V24H9L12 21H16.5L22.5 14.61V0H1.5ZM21 13.5L16.8 18H11.481L8.25 20.3505V18H3V1.5H21V13.5Z" fill="black"/>
        <path d="M12 6H10.5V12H12V6Z" fill="black"/>
        <path d="M16.5 6H15V12H16.5V6Z" fill="black"/>
        </svg>,  },
    { id: 4, title: 'Animated Icons' , link: '/icons', code:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
        <path d="M11.0082 1.57616C11.4703 2.22731 11.7087 3.01082 11.6875 3.809C11.7263 4.58641 11.483 5.35167 11.0022 5.96386C10.6845 6.31373 10.3001 6.59667 9.87157 6.79611C10.5699 7.0252 11.1726 7.47923 11.5856 8.08723C11.9841 8.72876 12.1844 9.47368 12.1614 10.2286C12.1735 11.0538 11.9436 11.8645 11.5001 12.5604C11.2276 13.0078 10.8711 13.3984 10.4504 13.7106C9.95431 14.0781 9.38181 14.3293 8.77539 14.4453C8.08403 14.5816 7.38065 14.6474 6.67602 14.6418H0V0.0166285H7.16487C7.88308 -0.0447912 8.60563 0.0644727 9.27357 0.335504C9.9415 0.606535 10.5359 1.03165 11.0082 1.57616ZM2.95562 2.55687V5.78391H6.55455C7.10318 5.80644 7.64756 5.6789 8.12908 5.41502C8.33591 5.27542 8.50095 5.08227 8.60659 4.8562C8.71223 4.63013 8.75451 4.37962 8.72891 4.13141C8.75902 3.85072 8.69781 3.56782 8.55436 3.32469C8.41092 3.08156 8.19289 2.89118 7.93264 2.78181C7.36376 2.61496 6.7723 2.53805 6.17966 2.55387L2.95562 2.55687ZM2.95562 8.2042V12.103H6.55455C7.06717 12.1264 7.57876 12.0384 8.05411 11.8451C8.38121 11.6738 8.64914 11.4079 8.82299 11.0821C8.99684 10.7564 9.06857 10.3858 9.02882 10.0187C9.05589 9.69113 8.97941 9.36338 8.81017 9.08167C8.64093 8.79996 8.38748 8.57852 8.0856 8.44862C7.6127 8.26803 7.10845 8.18391 6.60254 8.2012H2.95562V8.2042ZM21.1242 4.04743C21.8955 4.38884 22.5527 4.94409 23.0182 5.64745C23.4796 6.31468 23.7794 7.08016 23.8939 7.88329C23.9829 8.5954 24.016 9.31338 23.9929 10.0307H16.0017C15.9794 10.4777 16.0734 10.923 16.2748 11.3228C16.4761 11.7226 16.7779 12.0633 17.1504 12.3115C17.6286 12.5943 18.1771 12.7357 18.7324 12.7194C19.3038 12.7447 19.866 12.5697 20.322 12.2245C20.568 12.0175 20.7691 11.7624 20.9128 11.4747H23.8429C23.7071 12.2215 23.3349 12.9049 22.7812 13.4241C22.2452 13.967 21.5996 14.3894 20.8875 14.6633C20.1754 14.9371 19.4131 15.056 18.6515 15.0122C17.2486 15.0327 15.8827 14.5622 14.7901 13.6821C14.1946 13.1393 13.7333 12.4656 13.4429 11.714C13.1525 10.9624 13.0408 10.1535 13.1166 9.35135C13.0643 8.5678 13.1711 7.78177 13.4307 7.04059C13.6902 6.29942 14.097 5.61843 14.6267 5.03864C15.1447 4.53668 15.7592 4.145 16.4329 3.88725C17.1067 3.62951 17.8257 3.51107 18.5465 3.53908C19.4319 3.52574 20.3102 3.69895 21.1242 4.04743ZM16.8355 6.4917C16.4072 6.95277 16.139 7.53964 16.0707 8.16521H21.0193C21.0139 7.84215 20.9424 7.52362 20.809 7.22932C20.6757 6.93502 20.4834 6.67121 20.244 6.45422C19.7662 6.05992 19.1612 5.85309 18.542 5.87239C18.2307 5.85411 17.919 5.89947 17.6259 6.00569C17.3327 6.11191 17.0643 6.27677 16.837 6.4902L16.8355 6.4917ZM15.3359 2.51938H21.6896V0.698926H15.3314L15.3359 2.51938Z" fill="black"/>
        </svg>,  },
    { id: 5, title: 'Animated Icons' , link: '/icons', code:<svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 8.25H7.5V5.25C7.5 4.85218 7.65804 4.47064 7.93934 4.18934C8.22064 3.90804 8.60218 3.75 9 3.75H10.5V0H7.5C6.30653 0 5.16193 0.474106 4.31802 1.31802C3.47411 2.16193 3 3.30653 3 4.5V8.25H0V12H3V24H7.5V12H10.5L12 8.25Z" fill="black"/>
        </svg>,  },
    { id: 6, title: 'Animated Icons' , link: '/icons', code:<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.884766 20.5511L18.6674 0.448975H21.0012L3.21856 20.5511H0.884766Z" fill="black"/>
        <path d="M7.49647 2.19696H2.68945L14.4885 19.677H19.2955L7.49647 2.19696Z" fill="white" stroke="black" strokeWidth="1.74801"/>
        </svg>,  },
    { id: 7, title: 'Animated Icons' , link: '/icons', code:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M22.9814 1.5901C22.3304 0.432027 21.6313 0.219014 20.1853 0.138009C18.7392 0.0570036 15.1344 0 12.0007 0C8.86705 0 5.25033 0.0405026 3.81324 0.136509C2.37615 0.232515 1.6696 0.436527 1.01406 1.5886C0.358522 2.74067 0 4.7388 0 8.25051V8.26402C0 11.7562 0.345022 13.7634 1.01556 14.9079C1.68611 16.0525 2.37915 16.276 3.81474 16.3735C5.25033 16.471 8.86705 16.501 12.0007 16.501C15.1344 16.501 18.7512 16.4515 20.1838 16.369C21.6163 16.2865 22.3289 16.0615 22.9799 14.9034C23.6595 13.7589 24 11.7532 24 8.25951V8.25051C24.0015 4.7388 23.6595 2.74667 22.9814 1.5901ZM9.00056 12.7508V3.75023L16.501 8.25051L9.00056 12.7508Z" fill="black"/>
        </svg> ,  },
    
  ];
