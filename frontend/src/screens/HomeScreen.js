import React from "react";
import "../styles/HomeScreen.css";

function HomeScreen() {
  return (
    <div classNameName="homeScreenMain">
      <section className="hero">
        <div className="hero-content">
          <h1>Driving business performance made easy</h1>
          <h3> we transform clients and empowers humans through technology!</h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "40px",
          }}
        >
          <a href="#second" className="homebtn cta">
            Find out more
          </a>
        </div>
      </section>

      <div id="second" className="Homesecond">
        <img
          src="https://interapt.com/wp-content/uploads/2019/05/logo-interapt@3x.png"
          alt=""
        />
        <h1>
          we put your company’s future front and center in our minds. We are
          dedicated to solving your challenges 
          and preparing your company for the future by delivering customized
          mobile and web applications and tailoring software
          training programs to your company’s needs.
        </h1>
      </div>

      <section className="product">
        <div className="product__item">
          <img
            src="https://cdn.pixabay.com/photo/2019/07/03/05/58/envelope-4313721__480.png"
            alt="Logistics icon"
            className="product__item__image"
          />
          <p className="product__item__text">SOFTWARE DEVELOPMENT</p>
          <p className="product__item__text2">
            Our team of professionals builds customized apps to solve your
            unique workflow and business challenges.
          </p>
        </div>

        <div className="product__item">
          <img
            src="https://cdn.pixabay.com/photo/2019/07/02/05/54/tool-4311573__480.png"
            alt="Logistics icon"
            className="product__item__image"
          />
          <p className="product__item__text">WORKFORCE DEVELOPMENT</p>
          <p className="product__item__text2">
            Our training programs and tailored curriculum will connect you with
            a diverse pool of talent to help your business succeed in the
            digital era
          </p>
        </div>

        <div className="product__item">
          <img
            src="https://cdn.pixabay.com/photo/2019/07/02/05/56/rocket-4311575__480.png"
            alt="Logistics icon"
            className="product__item__image"
          />
          <p className="product__item__text">BUSINESS PROCESS OUTSOURCING</p>
          <p className="product__item__text2">
            Our expert team manages the entire customer support life-cycle and
            other critical business operations so you can focus on growing your
            business
          </p>
        </div>
      </section>
  

      <section id="about" style={{display:"flex",alignItems: "center",justifyContent: "center"}}>
        <div className="container"  >
          <div className="row info">
            <div className="col-sm-8">
              <h2>About</h2>
              <p style={{width:"fitContent"}}>
                Based in Louisville, Kentucky, Interapt is a technology services
                firm that also has an office in Atlanta, Georgia. We are
                dedicated to using technology to create cutting-edge solutions
                and provide opportunities to overlooked individuals. &nbsp;  Learn how
                we can help you create an ethical, diverse and impactful
                workforce to fill your tech talent gap or build an app to solve
                your business need.
                Interapt is a world-class technology services company that attracts and develops the best talent while 
                providing an opportunity to those both with IT experience and those without doors are open for all.  
                We are building a thriving, inclusive technology ecosystem in middle-America that invests in people and communities. 
                {/* Our organizational commitment to social responsibility is not an afterthought, it is embedded in our services and everything we do. */}
              </p>
            </div>

            <div className="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                alt="Lewis Alberto Briffa"
                className="img-responsive img-circle"
                style={{width:"470px",paddingTop:"15px"}}
              />
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}

export default HomeScreen;
