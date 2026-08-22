import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    title: "ISRO Exoplanet ML",
    category: "AI/ML & Astrophysics",
    tools: "Python, ISRO PS-07, 1D-CNN, Astrophysics",
    description: "Exoplanet transit detection engine using 1D-CNN, Kepler photometry, and BLS for ISRO BAH 2026.",
    image: "/images/placeholder.webp",
    link: "https://github.com/CodeByPrakash/ISRO_PS07",
  },
  {
    title: "AttendTrue Analytics",
    category: "AI Analytics & SIH",
    tools: "AI Analytics, Computer Vision, Next.js, Team CodeNova",
    description: "AI-driven smart attendance tracking and behavioral analytics platform engineered for SIH 2025.",
    image: "/images/placeholder.webp",
    link: "https://github.com/CodeByPrakash/AttendTrue-Analytic",
  },
  {
    title: "MRS-AI Medicine",
    category: "AI Healthcare",
    tools: "Python, Flask, SVC, Machine Learning",
    description: "Award-winning symptom diagnosis and pharmaceutical regimen recommender, built with ML and Flask.",
    image: "/images/placeholder.webp",
    link: "https://github.com/CodeByPrakash/MRS-AI",
  },
  {
    title: "AR Hand Canvas",
    category: "Computer Vision & AR",
    tools: "JavaScript, MediaPipe, Canvas API, Vite",
    description: "Browser AR air-drawing canvas with MediaPipe 21-joint tracking, pinch drawing, and Bezier curves.",
    image: "/images/placeholder.webp",
    link: "https://arhandgesture.vercel.app/",
  },
  {
    title: "UnVoiced Sign AI",
    category: "Accessibility AI",
    tools: "Python, OpenCV, Accessibility, TTS",
    description: "Real-time Indian Sign Language gesture recognition and text-to-speech translator with OpenCV.",
    image: "/images/placeholder.webp",
    link: "https://github.com/CodeByPrakash/UnVoiced",
  },
  {
    title: "StadiumAI Vision",
    category: "Computer Vision Analytics",
    tools: "YOLOv8, OpenCV, PyTorch, Analytics",
    description: "Real-time pedestrian crowd density monitoring with homography bird's-eye mapping and surge tracking.",
    image: "/images/placeholder.webp",
    link: "https://github.com/CodeByPrakash/StadiumAI-C4",
  },
  {
    title: "Local LLM ChatUI",
    category: "AI Tooling",
    tools: "React, CUDA, Ollama, GGUF",
    description: "High-throughput local LLM execution interface with GGUF quantization and VRAM layer offloading.",
    image: "/images/placeholder.webp",
    link: "https://github.com/CodeByPrakash/Local-LLM-ChatUI",
  },
  {
    title: "Stock Predictor AI",
    category: "Deep Learning & Finance",
    tools: "PyTorch, LSTM, Time-Series, Finance",
    description: "Bidirectional LSTM neural network for forecasting stock trends with RSI, MACD, and NATR features.",
    image: "/images/placeholder.webp",
    link: "https://github.com/CodeByPrakash/stock_price_prediction_application",
  },
  {
    title: "SmartPlacement",
    category: "EdTech ML Analytics",
    tools: "TypeScript, React, ML, Analytics",
    description: "Campus recruitment readiness engine for placement probability prediction and student skill-gap roadmaps.",
    image: "/images/placeholder.webp",
    link: "https://github.com/CodeByPrakash/SmartPlacement",
  },
  {
    title: "Public DNS Switcher",
    category: "Security Utility",
    tools: "Python, Flask, Windows API, Security",
    description: "Windows network stack utility using netsh with live RTT latency benchmarking for fast DNS switching.",
    image: "/images/placeholder.webp",
    link: "https://github.com/CodeByPrakash/Public_DNS_Switcher",
  },
  {
    title: "Biometric Attendance",
    category: "Computer Vision Attendance",
    tools: "OpenCV, Python, SQLite, Biometrics",
    description: "Contactless face recognition attendance logger with Haar cascades, deep embeddings, and SQLite.",
    image: "/images/placeholder.webp",
    link: "https://github.com/CodeByPrakash/Simple_FaceRecoginition_Attendance_Sys",
  },
  {
    title: "Privacy Dashboard",
    category: "Web & Cyber Security",
    tools: "React.js, TypeScript, MySQL",
    description: "Privacy management system that tracks telemetry, web activity, and online surveillance risks.",
    image: "/images/placeholder.webp",
    link: "https://github.com/CodeByPrakash/privacy_dashboard",
  },
  {
    title: "Movie Recommender",
    category: "Recommendation Systems",
    tools: "Pandas, Scikit-learn, Python, TF-IDF",
    description: "Content-based and collaborative filtering recommender using TF-IDF vectorization and cosine similarity.",
    image: "/images/placeholder.webp",
    link: "https://github.com/CodeByPrakash/Movie-Recommender-System",
  },
  {
    title: "Open Ecommerce",
    category: "Full-Stack Web App",
    tools: "React, Framer Motion, CSS3, Cart Persistence",
    description: "High-performance ecommerce application with product interactions, cart persistence, and micro-animations.",
    image: "/images/placeholder.webp",
    link: "https://open-ecommerce.vercel.app",
  },
  {
    title: "GCEK VENDOR",
    category: "Campus Marketplace",
    tools: "Next.js, React, MongoDB, Real-Time Listings",
    description: "Campus peer-to-peer rental and exchange platform for college and hostel students.",
    image: "/images/placeholder.webp",
    link: "https://gcekvendor.vercel.app",
  },
  {
    title: "Resume Builder",
    category: "Productivity Tool",
    tools: "React.js, Tailwind CSS, MongoDB",
    description: "Modern ATS-friendly resume generator with live PDF compilation and modular design layouts.",
    image: "/images/placeholder.webp",
    link: "https://github.com/CodeByPrakash/ResumeBuilder-React",
  },
  {
    title: "Computer Lab LMS",
    category: "Management System",
    tools: "PHP, MySQL, Hardware Management",
    description: "Multi-lab device tracking, hardware fault ticketing, and inventory management with relational MySQL.",
    image: "/images/placeholder.webp",
    link: "https://github.com/CodeByPrakash/LMS",
  },
  {
    title: "Odisha Tourism OTM",
    category: "Tourism Platform",
    tools: "PHP, MySQL, Full Stack",
    description: "Comprehensive tourism portal for Odisha heritage, hotel reservations, package bookings, and reviews.",
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
