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
                "https://w7.pngwing.com/pngs/488/24/png-transparent-aws-lambda-hd-logo.png",
                "https://miro.medium.com/v2/resize:fit:512/1*rOHiDUcmRXiAZZur7y0_UA.png",
                "https://banner2.cleanpng.com/20180704/hsu/aaxzd7fpd.webp",
                "https://images.icon-icons.com/2699/PNG/512/amazon_kinesis_logo_icon_169609.png",
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
            { icon: "https://www.svgrepo.com/show/354242/qlik.svg" },
            { icon: "https://images.seeklogo.com/logo-png/43/1/dbt-logo-png_seeklogo-431111.png" },
            { icon: "https://mma.prnewswire.com/media/1972315/Ascend_io_Logo.jpg" },
            { icon: "https://ih1.redbubble.net/image.794212411.9451/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" },
            { icon: "https://www.svgrepo.com/show/353950/kafka.svg" },
          ]
        },
        {
          category: "Orchestration",
          items: [
            { icon: "https://miro.medium.com/v2/resize:fit:900/1*BsArmSynxzIKGYZ5h0hoKA.png" },
            { icon: "https://image.pngaaa.com/421/6030421-middle.png" }
          ]
        },
        {
          category: "Data Visualization",
          items: [
            { icon: "https://logos-world.net/wp-content/uploads/2022/02/Power-BI-Logo.png" },
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
            "I work with data.But more than that I make data actually useful"
        },
        {
          id: "second-p-about",
          content:
            "A few years back, I was just another engineer at a desk. Writing ETL pipelines. Debugging broken joins. Fixing the same “missing null handling” bug for the tenth time."
        },
        {
          id: "third-p-about",
          content:
            "It wasn’t glamorous. But it taught me a lot."
        },
        {
          id: "fourth-p-about",
          content:
            "I completed Business Analytics at the UB to get an idea of business data. I’ve got 3+ years of experience as a Data Engineer. And I’ve built stuff that runs in the cloud, crunches millions of rows, and <em>helps real people make better decisions</em>"
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
                            item.isSplit ? (
                              <div className="split-hover-wrapper" key={idx}>
                                <img src={item.icon} alt="" className="tech-icon split-main" />
                                <div className="split-icons-row">
                                  {item.splitIcons.map((splitIcon, splitIdx) => (
                                    <img
                                      key={splitIdx}
                                      src={splitIcon}
                                      alt=""
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
