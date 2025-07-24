import React from "react";
import "./about.css";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          category: "Programming Languages",
          items: [
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" }
          ]
        },
        {
          category: "Databases / Cloud",
          items: [
            { icon: "https://images.seeklogo.com/logo-png/33/1/snowflake-logo-png_seeklogo-336501.png" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" }
          ]
        },
        {
          category: "ELT / ETL",
          items: [
            { icon: "https://images.seeklogo.com/logo-png/43/1/fivetran-logo-png_seeklogo-433335.png" },
            { icon: "https://upload.wikimedia.org/wikipedia/commons/7/75/Qlik_Logo.png" },
            { icon: "https://www.vectorlogo.zone/logos/getdbtio/getdbtio-icon.svg" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
            { icon: "https://cdn.worldvectorlogo.com/logos/databricks-icon.svg" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" }
          ]
        },
        {
          category: "Orchestration",
          items: [
            { icon: "https://airflow.apache.org/images/airflow-logo.png" }
          ]
        },
        {
          category: "Data Visualization",
          items: [
            { icon: "https://cdn.worldvectorlogo.com/logos/power-bi-1.svg" },
            { icon: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" },
            { icon: "https://streamlit.io/images/brand/streamlit-logo-primary-colormark-darktext.png" }
          ]
        },
        {
          category: "CI/CD & DevOps",
          items: [
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" }
          ]
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dui nec nisl posuere feugiat."
        },
        {
          id: "second-p-about",
          content:
            "Praesent semper elit at nisl sodales, in cursus neque tristique. Curabitur eu tellus id justo dapibus finibus."
        },
        {
          id: "third-p-about",
          content:
            "Sed at turpis a nulla facilisis ullamcorper. In quis justo vel elit pulvinar laoreet."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="skill-mf">
                      <p className="title-s">Tech Stack</p>
                      {this.state.skills.map((group, index) => (
                        <div className="stack-category" key={index}>
                          <h6>{group.category}</h6>
                          <div className="icon-row">
                            {group.items.map((item, idx) => (
                              <img
                                key={idx}
                                src={item.icon}
                                alt=""
                                className="tech-icon"
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => (
                        <p className="lead" key={content.id}>
                          {content.content}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
