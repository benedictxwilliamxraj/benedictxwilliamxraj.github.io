import React from "react";

// Import stock images
import stock from "../img/LTIMindtree.jpg";
import stock1 from "../img/godigitaltc_logo.jpeg";
import stock2 from "../img/ctbk.png";
import stock3 from "../img/tifr.png";
import stock4 from "../img/kanalytics.jpeg";
import stock5 from "../img/image6.jpg"; // optional placeholder for projects

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: null // To toggle work experience descriptions
    };
  }

  handleToggle = (index) => {
    this.setState({ expanded: this.state.expanded === index ? null : index });
  };

  renderExperienceBox(image, title, category, description, index) {
    const isOpen = this.state.expanded === index;
    return (
      <div className="col-md-4 mb-4" key={index}>
        <div className="work-box">
          <div
            className="work-img"
            style={{ cursor: "pointer" }}
            onClick={() => this.handleToggle(index)}
          >
            <img src={image} alt={title} className="img-fluid" />
          </div>
          <div className="work-content">
            <h2 className="w-title">{title}</h2>
            <div className="w-more">
              <span className="w-ctegory">{category}</span>
            </div>
            {isOpen && (
              <div className="work-description mt-2">
                <p>{description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  renderProjectBox(image, title, category, galleryId = "gallery-mf") {
    return (
      <div className="col-md-4 mb-4" key={title}>
        <div className="work-box">
          <a href={image} data-lightbox={galleryId}>
            <div className="work-img">
              <img src={image} alt={title} className="img-fluid" />
            </div>
            <div className="work-content">
              <div className="row">
                <div className="col-sm-8">
                  <h2 className="w-title">{title}</h2>
                  <div className="w-more">
                    <span className="w-ctegory">{category}</span>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="w-like">
                    <span className="ion-ios-plus-outline"></span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }

  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Here’s a look at my work experience and selected projects.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>

          {/* Work Experience Section */}
          <h4 className="text-center mb-4">Work Experience</h4>
          <div className="row">
            {this.renderExperienceBox(
              stock,
              "Data Engineer - LTIMindtree",
              "ELT/ETL, Snowflake, ADF, Airflow, Qlik",
              "Built ELT pipelines on Snowflake, automated ingestion via Fivetran, orchestrated workflows using Airflow, and visualized KPIs on Qlik dashboards.",
              0
            )}
            {this.renderExperienceBox(
              stock1,
              "Engineer - Go Digital",
              "Oracle Fusion, Snowflake, Data Modeling",
              "Extracted HRMS/SCM data from Oracle Fusion, modeled star schemas, implemented merge logic, and designed RBAC-based Snowflake dashboards.",
              1
            )}
            {this.renderExperienceBox(
              stock2,
              "Project Intern - CTBK",
              "Python, Linear Programming",
              "Forecasted staffing and cost using Prophet + Linear Programming, visualized results with Streamlit, and automated scripts via scheduler.",
              2
            )}
            {this.renderExperienceBox(
              stock3,
              "Research Intern - TIFR",
              "Python, OpenCV, Threading",
              "Worked on multi-threaded image enhancement using OpenCV for microscopy data. Focused on spatial denoising algorithms.",
              3
            )}
            {this.renderExperienceBox(
              stock4,
              "Data Intern - Kanalytics",
              "Python, PHP, Data Collection",
              "Scraped data from web sources and social media using Python, and automated reports with PHP + CRON jobs.",
              4
            )}
          </div>

          {/* Projects Section */}
          <h4 className="text-center mt-5 mb-4">Projects</h4>
          <div className="row">
            {this.renderProjectBox(
              stock4,
              "Financial KPI Dashboard",
              "Power BI, Compustat, CRSP",
              "gallery-kpi"
            )}
            {this.renderProjectBox(
              stock5,
              "SEC Stock Analysis",
              "SEC API, yFinance, Oracle Cloud",
              "gallery-sec"
            )}
            {this.renderProjectBox(
              stock1,
              "Ping Pong Game",
              "Python, Pygame, Score Tracker",
              "gallery-game"
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;


// import React from "react";

// //import stock
// import stock from "../img/image1.jpg";
// import stock1 from "../img/image2.jpg";
// import stock2 from "../img/image3.jpg";
// import stock3 from "../img/image4.jpg";
// import stock4 from "../img/image5.jpg";
// import stock5 from "../img/image6.jpg";

// class Portfolio extends React.Component {
//   render() {
//     return (
//       <section id="work" className="portfolio-mf sect-pt4 route">
//         <div className="container">
//           <div className="row">
//             <div className="col-sm-12">
//               <div className="title-box text-center">
//                 <h3 className="title-a">Portfolio</h3>
//                 <p className="subtitle-a">
//                   Incididunt nostrud id aute culpa excepteur pariatur consequat
//                   elit culpa nulla enim anim incididunt.
//                 </p>
//                 <div className="line-mf"></div>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-4">
//               <div className="work-box">
//                 <a href={stock} data-lightbox="gallery-vmarine">
//                   <div className="work-img">
//                     <img src={stock} alt="" className="img-fluid" />
//                   </div>
//                   <div className="work-content">
//                     <div className="row">
//                       <div className="col-sm-8">
//                         <h2 className="w-title">Lorem Ipsum</h2>
//                         <div className="w-more">
//                           <span className="w-ctegory">
//                             HTML5 CSS3 Bootstrap ReactJS
//                           </span>
//                         </div>
//                       </div>
//                       <div className="col-sm-4">
//                         <div className="w-like">
//                           <span className="ion-ios-plus-outline"></span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//                 <a
//                   href={stock1}
//                   data-lightbox="gallery-vmarine"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock2}
//                   data-lightbox="gallery-vmarine"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock3}
//                   data-lightbox="gallery-vmarine"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock4}
//                   data-lightbox="gallery-vmarine"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock5}
//                   data-lightbox="gallery-vmarine"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="work-box">
//                 <a href={stock} data-lightbox="gallery-aguadeluz">
//                   <div className="work-img">
//                     <img src={stock} alt="" className="img-fluid" />
//                   </div>
//                   <div className="work-content">
//                     <div className="row">
//                       <div className="col-sm-8">
//                         <h2 className="w-title">Lorem Ipsum</h2>
//                         <div className="w-more">
//                           <span className="w-ctegory">
//                             HTML5 CSS3 Bootstrap Webpack SmoothScrolling
//                             VanillaJS
//                           </span>{" "}
//                         </div>
//                       </div>
//                       <div className="col-sm-4">
//                         <div className="w-like">
//                           <span className="ion-ios-plus-outline"></span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//                 <a
//                   href={stock1}
//                   data-lightbox="gallery-aguadeluz"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock2}
//                   data-lightbox="gallery-aguadeluz"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock3}
//                   data-lightbox="gallery-aguadeluz"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock4}
//                   data-lightbox="gallery-aguadeluz"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock5}
//                   data-lightbox="gallery-aguadeluz"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="work-box">
//                 <a href={stock} data-lightbox="gallery-todo">
//                   <div className="work-img">
//                     <img src={stock} alt="" className="img-fluid" />
//                   </div>
//                   <div className="work-content">
//                     <div className="row">
//                       <div className="col-sm-8">
//                         <h2 className="w-title">Lorem Ipsum</h2>
//                         <div className="w-more">
//                           <span className="w-ctegory">
//                             HTML5 CSS3 Bootstrap Webpack ReactJS
//                           </span>
//                           {/*} / <span className="w-date">18 Sep. 2018</span>*/}
//                         </div>
//                       </div>
//                       <div className="col-sm-4">
//                         <div className="w-like">
//                           <span className="ion-ios-plus-outline"></span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//                 <a
//                   href={stock1}
//                   data-lightbox="gallery-todo"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock2}
//                   data-lightbox="gallery-todo"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock3}
//                   data-lightbox="gallery-todo"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock4}
//                   data-lightbox="gallery-todo"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock5}
//                   data-lightbox="gallery-todo"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="work-box">
//                 <a href={stock} data-lightbox="gallery-medlingos">
//                   <div className="work-img">
//                     <img src={stock} alt="" className="img-fluid" />
//                   </div>
//                   <div className="work-content">
//                     <div className="row">
//                       <div className="col-sm-8">
//                         <h2 className="w-title">Lorem Ipsum</h2>
//                         <div className="w-more">
//                           <span className="w-ctegory">
//                             Bootstrap ReactJS GoogleAPI
//                           </span>
//                         </div>
//                       </div>
//                       <div className="col-sm-4">
//                         <div className="w-like">
//                           <span className="ion-ios-plus-outline"></span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//                 <a
//                   href={stock1}
//                   data-lightbox="gallery-medlingos"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock2}
//                   data-lightbox="gallery-medlingos"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock3}
//                   data-lightbox="gallery-medlingos"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock4}
//                   data-lightbox="gallery-medlingos"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock5}
//                   data-lightbox="gallery-medlingos"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="work-box">
//                 <a href={stock} data-lightbox="gallery-smth">
//                   <div className="work-img">
//                     <img src={stock} alt="" className="img-fluid" />
//                   </div>
//                   <div className="work-content">
//                     <div className="row">
//                       <div className="col-sm-8">
//                         <h2 className="w-title">Lorem Ipsum</h2>
//                         <div className="w-more">
//                           <span className="w-ctegory">MERN</span>
//                         </div>
//                       </div>
//                       <div className="col-sm-4">
//                         <div className="w-like">
//                           <span className="ion-ios-plus-outline"></span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//                 <a
//                   href={stock1}
//                   data-lightbox="gallery-smth"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock2}
//                   data-lightbox="gallery-smth"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock3}
//                   data-lightbox="gallery-smth"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock4}
//                   data-lightbox="gallery-smth"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock5}
//                   data-lightbox="gallery-smth"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="work-box">
//                 <a href={stock} data-lightbox="gallery-mf">
//                   <div className="work-img">
//                     <img src={stock} alt="" className="img-fluid" />
//                   </div>
//                   <div className="work-content">
//                     <div className="row">
//                       <div className="col-sm-8">
//                         <h2 className="w-title">Lorem Ipsum</h2>
//                         <div className="w-more">
//                           <span className="w-ctegory">
//                             HTML5 CSS3 Bootstrap MERN
//                           </span>
//                         </div>
//                       </div>
//                       <div className="col-sm-4">
//                         <div className="w-like">
//                           <span className="ion-ios-plus-outline"></span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//                 <a
//                   href={stock1}
//                   data-lightbox="gallery-mf"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock2}
//                   data-lightbox="gallery-mf"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock3}
//                   data-lightbox="gallery-mf"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock4}
//                   data-lightbox="gallery-mf"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock5}
//                   data-lightbox="gallery-mf"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default Portfolio;
