import React from "react";
import "../styles/AboutScreen.css";

function AboutScreen() {
  return (
    <div className="AboutScreen">
    <div className="about_us">
  
      <div style={{marginBottom:"50px"}} className="mission">
        <span>Our Vision</span>
        <p>
        We will be a part of thriving, inclusive technology ecosystems that invest in people and communities across America.{" "}
        </p>
      </div>

      <span style= {{fontSize:"25px"}}>Our Story</span>
      <p>
      Founder & CEO Ankur Gopal founded Interapt in his apartment with a vision to create a world class IT company that transforms clients 

      and empowers humans through technology. In Interapt’s early stages of growth, the company struggled to find local tech talent to the point 

      that it was turning away work. To solve this challenge, Interapt turned to a unique solution — creating our own talent.<br/> <br/>
      With a dedication to corporate social responsibility, Gopal saw an opportunity to uplift citizens in his home state of Kentucky by
        
      providing tuition-free software development training. Our first programs, hosted in rural Kentucky, graduated 35 individuals and provided

       them a new and in-demand skillset. Many of these individuals had been living paycheck to paycheck, but they now had the economic freedom and stability

        to support their families.<br/> <br/>
      
Since that time, we have also hosted programs in Glasgow (KY), Louisville and most recently in Atlanta. Our programs are making a lasting impact 

for businesses and communities as we continue to introduce individuals, enterprises and cities to the economy of the future.<br/> <br/>
To date, we have changed 86 lives — and counting. 
      </p>

      <span style= {{fontSize:"25px"}} >What we do ?</span>
      <p>
      We believe technology empowers your business to improve performance and drive results. With a professional team of
       development and design experts, we excel at delivering end-to-end solutions with a human-centric focus. Our process,
       detailed below, ensures we provide your company a solution with a measurable ROI and business impact.
      </p>

      <span style= {{fontSize:"25px"}} >Commitment</span>
      <p>
      Our organizational commitment to social responsibility is not an afterthought, it is embedded in our services and everything we do.
      </p>
    </div>
  </div>
  );
}

export default AboutScreen;
