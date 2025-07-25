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
            {this.renderExperienceBox(stock2, "Data Intern - CTBK", "Python, Linear Programming", "Optimized resource allocation using Python, linear programming, and scikit-learn, cutting staffing costs by 15%. Built interactive Streamlit dashboards that cut decision-making time by 30% with real-time staffing and resource insights.","Jul-2024","Dec-2024", 0)}
            {this.renderExperienceBox(stock1, "Data Engineer - Go Digital", "ETL, Snowflake, Data Modeling, Quality check", "I helped fix the chaos in HR data by building a clean Snowflake warehouse with dbt and GitHub Actions—turning reports that took days into hours. I sped up ETL pipelines by 40%, set up quality checks to catch bad data early, and automated manual workflows to save 70% of the team’s time. I worked with analysts and PMs to build Power BI dashboards that delivered insights 50% faster. I also wrote clear access rules to keep data safe and trimmed 20% off cloud costs by fine-tuning resources. Clean, reliable, and no firefighting—just answers when people need them.","Oct-2023","Jun-2024", 1)}
            {this.renderExperienceBox(stock, "Data Engineer - LTIMindtree", "ELT/ETL, Snowflake, ADF, Airflow, Qlik", " I worked on cloud projects for Citi and ExxonMobil—replacing slow, manual CSV loads with automated pipelines that sped up sensor data by 60%. I moved PySpark jobs from the data lake to Snowpark ML, which cut reporting costs by 90% and made forecasts run faster. I helped migrate legacy ETL to the cloud, trimming 35% off operational costs. Along the way, I mentored junior engineers on Git and team workflows, which made onboarding way easier. I also kept an eye on ingestion tools like Databricks, ADF, Fivetran, Airbyte, and Qlik to make sure data stayed clean and up-to-date.","Jun-2021","Oct-2023", 2)}
            {this.renderExperienceBox(stock3, "Research Intern - TIFR", "Python, OpenCV, Threading", "Built an AI‑powered surveillance system using PyQt5 for the user interface and OpenCV for video processing. It detects unusual behavior in real time using a CNN-based model (like YOLOv8) to spot anomalies. Once something odd is detected, the system triggers alerts (via SMS and email), logs the events for later review, and shows the alert directly in the app window. ","Apr-2020","Apr-2021", 3)}
            {this.renderExperienceBox(stock4, "Data Intern - Kanalytics", "Python, PHP, Data Collection", "Built a simple data pipeline to process face images and match them with known people. Used OpenCV for face detection and cosine similarity to compare features. When someone familiar shows up, the system tags them automatically—kind of like your own mini facial recognition tool.","Dec-2019","Jan-2020", 4)}
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
