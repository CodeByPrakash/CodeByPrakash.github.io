import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Computer Science</h4>
                <h5>CSE Fundamentals</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Began Computer Science journey — mastered programming fundamentals, data structures, C/C++, and core web development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Development</h4>
                <h5>PHP, MySQL & Systems</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Built first complete web platforms including Odisha Tourist Management System and Computer Lab Management System.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI / ML & React Stack</h4>
                <h5>MERN, Next.js & AI Systems</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Transitioned to React, Next.js, and Python ML. Developed MRS-AI, Movie Recommender, and GCEK Vendor platform.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BTech CSE & Freelance</h4>
                <h5>AI Systems & Computer Vision</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building AI-driven applications, AR hand-tracking canvas tools, computer vision gesture controllers, and open-source software.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
