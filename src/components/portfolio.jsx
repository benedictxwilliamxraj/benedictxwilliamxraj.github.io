import React from "react";

// Import stock images
import stock from "../img/LTIMindtree.jpg";
import stock1 from "../img/godigitaltc_logo.jpeg";
import stock2 from "../img/ctbk.png";
import stock3 from "../img/tifr.png";
import stock4 from "../img/kanalytics.jpeg";

class Portfolio extends React.Component {
  renderExperienceBox(image, title, category, description) {
    return (
      <div className="col-md-4 mb-4">
        <div className="work-box">
          <div className="work-img">
            <img src={image} alt={title} className="img-fluid" />
          </div>
          <div className="work-content">
            <h2 className="w-title">{title}</h2>
            <div className="w-more">
              <span className="w-ctegory">{category}</span>
            </div>
            <div className="work-description mt-2">
              <p>{description}</p>
            </div>
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
              "Built ELT pipelines on Snowflake, automated ingestion via Fivetran, orchestrated workflows using Airflow, and visualized KPIs on Qlik dashboards."
            )}
            {this.renderExperienceBox(
              stock1,
              "Engineer - Go Digital",
              "Oracle Fusion, Snowflake, Data Modeling",
              "Extracted HRMS/SCM data from Oracle Fusion, modeled star schemas, implemented merge logic, and designed RBAC-based Snowflake dashboards."
            )}
            {this.renderExperienceBox(
              stock2,
              "Project Intern - CTBK",
              "Python, Linear Programming",
              "Forecasted staffing and cost using Prophet + Linear Programming, visualized results with Streamlit, and automated scripts via scheduler."
            )}
            {this.renderExperienceBox(
              stock3,
              "Research Intern - TIFR",
              "Python, OpenCV, Threading",
              "Worked on multi-threaded image enhancement using OpenCV for microscopy data. Focused on spatial denoising algorithms."
            )}
            {this.renderExperienceBox(
              stock4,
              "Data Intern - Kanalytics",
              "Python, PHP, Data Collection",
              "Scraped data from web sources and social media using Python, and automated reports with PHP + CRON jobs."
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
              stock4,
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