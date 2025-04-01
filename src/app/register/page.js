
"use client";
import { useState } from "react";
import NavicationHome from "../components/NavicationHome";
import Link from "next/link";
import Form from "next/form";
import Image from "next/image";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const [isVisible, setIsVisible] = useState(true);
  const [hiddend, setHiddend] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible); 
    setHiddend(!hiddend); 
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("Registering...");

    try {
      const response = await fetch("https://iconsguru.com/admin/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email,password  }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Registration successful!");
      } else {
        setMessage(data.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      setMessage("Something went wrong.");
    }
  };

  return (
    <>
    <NavicationHome/>
    <main className="float-start w-100 register-pages-crm">
        <div className="container">
            <h2 className="text-center"> Continue with Email </h2>
            <p className="text-center"> Already have an account? <Link href='/login'> <strong> Log in </strong> </Link> </p>
            
            <div className="col-lg-8 mx-auto">
                <button className="btn btn-comon-socail d-flex align-items-center justify-content-center"> 
                  <span> 
                    <Image loading="lazy" src="/logo_googleg_48dp.svg"
                                          alt="iconsguru"
                                          width={24}
                                          height={24} /> 
                  </span>  Continue with Google 
                </button>
            </div>
            <div className="comon-rgesigner-sections d-inline-block w-100"></div>

            <Form onSubmit={handleRegister}>
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Register</button>
            </Form>
            {message && <p>{message}</p>}

        </div>
    </main>
    <div className="container d-none">
      <h1>Register</h1>

      <button
        onClick={toggleVisibility} 
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        {isVisible ? 'Hide' : 'Show'} Div
      </button>


      {isVisible && (
        <div
          style={{
            marginTop: '20px',
            padding: '20px',
            backgroundColor: 'lightblue',
            borderRadius: '8px',
          }}
        >
          This is a toggled div!
        </div>
        )}


        {hiddend && (
        <div
          style={{
            marginTop: '20px',
            padding: '20px',
            backgroundColor: 'lightblue',
            borderRadius: '8px',
          }}
        >
          This is a toggled div show!
        </div>
        )}
      
    </div>
    </>

  );
}
