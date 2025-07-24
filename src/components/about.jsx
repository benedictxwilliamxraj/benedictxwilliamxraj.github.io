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
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
            { icon: "https://images.seeklogo.com/logo-png/50/1/sql-logo-png_seeklogo-505247.png" }
          ]
        },
        {
          category: "Databases / Cloud",
          items: [
            {
              icon: "https://c8.alamy.com/comp/2XX3N5M/microsoft-azure-logo-2XX3N5M.jpg",
              isSplit: true,
              splitIcons: [
                "https://www.zohowebstatic.com/sites/zweb/images/dataprep/comparison/azure-data-factory.png",
                "https://images.seeklogo.com/logo-png/48/1/azure-databricks-logo-png_seeklogo-488344.png",
                "https://1000logos.net/wp-content/uploads/2024/08/Azure-DevOps-Logo.png",
                "https://cdn.imgbin.com/23/23/9/imgbin-microsoft-sql-server-microsoft-azure-sql-database-microsoft-M1w5fcDCwzsX6i4yGUau0XeSv.jpg"
              ]
            },
            {
              icon: "https://images.seeklogo.com/logo-png/31/2/amazon-web-services-aws-logo-png_seeklogo-319188.png",
              isSplit: true,
              splitIcons: [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Amazon-S3-Logo.svg/1712px-Amazon-S3-Logo.svg.png",
                "https://miro.medium.com/v2/resize:fit:512/1*rOHiDUcmRXiAZZur7y0_UA.png",
                "https://banner2.cleanpng.com/20180704/hsu/aaxzd7fpd.webp",
                "https://d3g9o9u8re44ak.cloudfront.net/logo/40c0988b-b7ec-4c51-9732-5fd3c7d52928/96ad06d5-cf24-4ffe-94fb-5d3085d7d3eb.png"
              ]
            },
            { icon: "https://png.pngtree.com/png-clipart/20190903/original/pngtree-cartoon-snowflake-icon-download-png-image_4440099.jpg" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" }
            
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
                            {group.items.map((item, idx) =>
                              item.isAwsSplit ? (
                                <div className="aws-hover-wrapper" key={idx}>
                                  <img src={item.icon} alt="AWS" className="tech-icon aws-main" />
                                  <div className="aws-split-icons">
                                    {item.splitIcons.map((splitIcon, splitIdx) => (
                                      <img
                                        key={splitIdx}
                                        src={splitIcon}
                                        alt={`AWS Split ${splitIdx}`}
                                        className="tech-icon split"
                                      />
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <img key={idx} src={item.icon} alt="" className="tech-icon" />
                              )
                            )}
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
