import React from "react";
import "./portfolio.css";

import stock from "../img/LTIMindtree.jpg";
import stock1 from "../img/godigitaltc_logo.jpeg";
import stock2 from "../img/ctbk.png";
import stock3 from "../img/tifr.png";
import stock4 from "../img/kanalytics.jpeg";
import aiss from "../img/aiss.jpeg";
import emp_demand from "../img/hr.png";
import localrag from "../img/localrag.jpg";
import sec_analysis from "../img/stock.jpeg";
import facesimi from "../img/facesimi.jpeg";


class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      modalData: {}
    };
  }

  openModal = (title, category, description, startDate, endDate ) => {
    this.setState({
      showModal: true,
      modalData: { title, category, description, startDate, endDate }
    });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  renderExperienceBox(image, title, category, description,startDate, endDate, index) {
    return (
      <div className="col-md-4 mb-4" key={index}>
        <div className="work-box" onClick={() => this.openModal(title, category, description, startDate, endDate)} style={{ cursor: "pointer" }}>
          <div className="work-img">
            <img src={image} alt={title} className="img-fluid" />
          </div>
          <div className="work-content text-center">
            <h2 className="w-title">{title}</h2>
            <div className="w-more">
              <span className="w-ctegory">{category}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderProjectBox(image, title, category, githubLink) {
    return (
      <div className="col-md-4 mb-4" key={title}>
        <div className="work-box">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <div className="work-img">
              <img src={image} alt={title} className="img-fluid" />
            </div>
            <div className="work-content text-center">
              <h2 className="w-title">{title}</h2>
              <div className="w-more">
                <span className="w-ctegory">{category}</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }

  renderModal() {
    const { showModal, modalData } = this.state;
    if (!showModal) return null;

    return (
      <div className="modal-overlay" onClick={this.closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h4>{modalData.title}</h4>
          <p><strong>Duration:</strong> {modalData.startDate} – {modalData.endDate}</p>
          <p><strong>Stack:</strong> {modalData.category}</p>
          <p>{modalData.description}</p>
          <button className="btn btn-secondary mt-3" onClick={this.closeModal}>
            Close
          </button>
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
                <p className="subtitle-a">Here’s a look at my work experience and selected projects.</p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <h4 className="text-center mb-4">Work Experience</h4>
          <div className="row">
            {this.renderExperienceBox(stock2, "Data Intern - CTBK", "Python, Linear Programming", "Forecasted staffing and cost using Prophet + Linear Programming, visualized results with Streamlit, and automated scripts via scheduler.","Jul-2024","Dec-2024", 0)}
            {this.renderExperienceBox(stock1, "Data Engineer - Go Digital", "Oracle Fusion, Snowflake, Data Modeling", "Extracted HRMS/SCM data from Oracle Fusion, modeled star schemas, implemented merge logic, and designed RBAC-based Snowflake dashboards.","Oct-2023","Jun-2024", 1)}
            {this.renderExperienceBox(stock, "Data Engineer - LTIMindtree", "ELT/ETL, Snowflake, ADF, Airflow, Qlik", "Built ELT pipelines on Snowflake, automated ingestion via Fivetran, orchestrated workflows using Airflow, and visualized KPIs on Qlik dashboards.","Jun-2021","Oct-2023", 2)}
            {this.renderExperienceBox(stock3, "Research Intern - TIFR", "Python, OpenCV, Threading", "Worked on multi-threaded image enhancement using OpenCV for microscopy data. Focused on spatial denoising algorithms.","Apr-2020","Apr-2021", 3)}
            {this.renderExperienceBox(stock4, "Data Intern - Kanalytics", "Python, PHP, Data Collection", "Scraped data from web sources and social media using Python, and automated reports with PHP + CRON jobs.","Dec-2019","Jan-2020", 4)}
          </div>

          {/* Projects */}
          <h4 className="text-center mt-5 mb-4">Projects</h4>
          <div className="row">
            {this.renderProjectBox(sec_analysis, "SEC Stock Analysis", "Power BI, Oracle, Data Modeling, ETL/ELT, Docker", "https://github.com/benedictxwilliamxraj/ETE_Fin_Sector_Company_LevelAnalysis")}
            {this.renderProjectBox(emp_demand, "Employee Demand Planning", "Python, Streamlit, sklearn", "https://github.com/benedictxwilliamxraj/StaffForecasting")}
            {this.renderProjectBox(localrag, "Local RAG", "Python, LLM's, Vector Database", "https://github.com/benedictxwilliamxraj/Local-RAG")}
            {this.renderProjectBox(aiss, "AI Surveliance System", "Python, OpenCV, NodeJS", "https://github.com/benedictxwilliamxraj/Survelliance_Pyqt5")}
            {this.renderProjectBox(facesimi, "Face Similarity Search", "Python, OpenCV, PHP", "https://github.com/benedictxwilliamxraj/Face_recognition")}
          </div>
        </div>

        {this.renderModal()}
      </section>
    );
  }
}

export default Portfolio;
