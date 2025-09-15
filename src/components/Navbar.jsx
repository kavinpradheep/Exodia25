import React, { useRef, useEffect } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaHandshake,
  FaCalendarAlt,
  FaStream,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  const navItems = [
    { id: "landing", icon: <FaHome /> },
    { id: "about", icon: <FaInfoCircle /> },
    { id: "sponsors", icon: <FaHandshake /> },
    { id: "events", icon: <FaCalendarAlt /> },
    { id: "timeline", icon: <FaStream /> },
    { id: "contact", icon: <FaEnvelope /> },
  ];

  const containerRef = useRef(null);
  const iconRefs = useRef([]);
  const scales = useRef([]);

  useEffect(() => {
    const animate = () => {
      iconRefs.current.forEach((icon, i) => {
        if (!icon) return;
        let current = scales.current[i] || 1;
        let target = icon.dataset.target ? parseFloat(icon.dataset.target) : 1;
        // simple easing: current += (target - current) * 0.2
        let newScale = current + (target - current) * 0.2;
        scales.current[i] = newScale;
        icon.style.transform = `scale(${newScale})`;
      });
      requestAnimationFrame(animate);
    };
    animate();

    const handleMouseMove = (e) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;

      iconRefs.current.forEach((icon) => {
        if (!icon) return;
        const iconRect = icon.getBoundingClientRect();
        const iconCenter = iconRect.left + iconRect.width / 2 - rect.left;
        const distance = Math.abs(mouseX - iconCenter);

        let targetScale = 1;
        if (distance < 150) {
          targetScale = 1 + (150 - distance) / 150 * 0.8; // max scale 1.8
        }
        icon.dataset.target = targetScale;
      });
    };

    const handleMouseLeave = () => {
      iconRefs.current.forEach((icon) => {
        if (!icon) return;
        icon.dataset.target = 1;
      });
    };

    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <nav ref={containerRef} className="floating-nav">
        {navItems.map((item, i) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="nav-icon"
            ref={(el) => (iconRefs.current[i] = el)}
          >
            {item.icon}
          </a>
        ))}
      </nav>

      <style>
        {`
          .floating-nav {
            position: fixed;
            bottom: 24px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 15, 31, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            padding: 0.6rem 1.6rem;
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            border-radius: 9999px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
            z-index: 100;
            border: 1px solid rgba(255, 255, 255, 0.15);
            transition: all 0.3s ease;
          }

          .nav-icon {
            color: #00D4FF;
            font-size: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            border-radius: 50%;
            cursor: pointer;
            text-shadow: 0 0 6px #00D4FF;
            transition: color 0.3s, text-shadow 0.3s;
          }

          .nav-icon:hover {
            color: #fff;
            text-shadow: 0 0 12px #00D4FF, 0 0 25px #00D4FF;
          }

          @media (max-width: 768px) {
            .floating-nav {
              bottom: 12px;
              padding: 0.5rem 1rem;
              gap: 1rem;
            }
            .nav-icon {
              font-size: 1.3rem;
            }
          }

          @media (max-width: 480px) {
            .floating-nav {
              gap: 0.8rem;
              padding: 0.4rem 0.8rem;
            }
            .nav-icon {
              font-size: 1.2rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
