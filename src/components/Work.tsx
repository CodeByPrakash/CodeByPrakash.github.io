import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    title: "AR Hand Canvas",
    category: "Computer Vision & AR",
    tools: "JavaScript, Vite, MediaPipe",
    description: "Real-time AR hand-tracking canvas for gesture-based drawing with MediaPipe.",
    image: "/images/placeholder.webp",
    link: "https://arhandgesture.vercel.app/",
  },
  {
    title: "Movie Recommender",
    category: "Machine Learning & AI",
    tools: "Python, Pandas, ML, Flask",
    description: "ML-based movie recommendation system using plot, genre, cast, and user reviews.",
    image: "/images/placeholder.webp",
    link: "https://github.com/CodeByPrakash/Movie-Recommender-System",
  },
  {
    title: "Medicine Recommender",
    category: "AI Healthcare",
    tools: "Python, Flask, ML, Scikit-learn",
    description: "AI model recommending medicines based on symptoms with diets & precautions.",
    image: "/images/placeholder.webp",
    link: "https://github.com/CodeByPrakash/MRS-AI",
  },
  {
    title: "Privacy Dashboard",
    category: "Web & Cyber Security",
    tools: "React.js, TypeScript, MySQL",
    description: "System tracking user data, web activity, and protecting from online threats.",
    image: "/images/placeholder.webp",
    link: "https://github.com/CodeByPrakash/privacy_dashboard",
  },
  {
    title: "Open E-Commerce",
    category: "Full-Stack Web App",
    tools: "React, Framer Motion, CSS",
    description: "Modern e-commerce platform with interactive product customizer & smooth UI.",
    image: "/images/placeholder.webp",
    link: "https://open-ecommerce.vercel.app",
  },
  {
    title: "GCEK VENDOR",
    category: "Community Platform",
    tools: "Next.js, React, MongoDB, Firebase",
    description: "Community rental platform for college and hostel items with real-time tracking.",
    image: "/images/placeholder.webp",
    link: "https://gcekvendor.vercel.app",
  },
  {
    title: "Resume Builder",
    category: "Full-Stack Web App",
    tools: "React.js, Tailwind CSS, MongoDB",
    description: "Platform for beginners to create professional resumes with stylish templates.",
    image: "/images/placeholder.webp",
    link: "https://github.com/CodeByPrakash/ResumeBuilder-React",
  },
  {
    title: "Attend True Analytics",
    category: "Management & Analytics",
    tools: "React, Next.js, Tailwind, Node.js",
    description: "Attendance tracking and student records system with advanced authentication.",
    image: "/images/placeholder.webp",
    link: "https://github.com/CodeByPrakash/AttendTrue-Analytic",
  },
  {
    title: "Hand Gesture Controller",
    category: "AI & Computer Vision",
    tools: "Python, OpenCV, TensorFlow",
    description: "Real-time hand gesture controller system using computer vision.",
    image: "/images/placeholder.webp",
    link: "https://github.com/CodeByPrakash/Hand_Gesture_Controller",
  },
  {
    title: "Public DNS Switcher",
    category: "System Utility",
    tools: "Python, Flask, Windows API",
    description: "Flask web app to quickly switch system DNS to Google, Cloudflare, Quad9, etc.",
    image: "/images/placeholder.webp",
    link: "https://github.com/CodeByPrakash/Public_DNS_Switcher",
  },
  {
    title: "Computer Lab Manager",
    category: "Management System",
    tools: "PHP, MySQL, HTML, CSS",
    description: "Powerful CLMS for managing multiple computer labs, stocks, and issues.",
    image: "/images/placeholder.webp",
    link: "https://github.com/CodeByPrakash/Computer_LMS_LocalHost",
  },
  {
    title: "Odisha Tourist System",
    category: "Web Platform",
    tools: "PHP, MySQL, HTML, CSS",
    description: "Web-based system for managing tourist information, bookings, and user reviews.",
    image: "/images/placeholder.webp",
    link: "https://github.com/CodeByPrakash/OTM",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box || box.length === 0) return;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{index < 9 ? `0${index + 1}` : index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <p style={{ marginTop: "8px", fontSize: "13px", color: "#888" }}>
                  {project.description}
                </p>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
