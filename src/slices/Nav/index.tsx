// Content
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

// Components
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

// React tools
import { useEffect, useState } from "react";

// Various
import gsap from "gsap";

export type NavProps = SliceComponentProps<Content.NavSlice>;

const Nav = ({ slice }: NavProps): JSX.Element => {
  // Link animation on hover
  const hoverNavLinkIn = (key: number) => {
    gsap.to(`.nav-link-${key} a span`, { width: "100%" });
  };
  const hoverNavLinkOut = (key: number) => {
    gsap.to(`.nav-link-${key} a span`, { width: 0 });
  };

  // Get window width on each resize
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, [windowWidth]);

  // Manage responsive nav
  useEffect(() => {
    if (windowWidth < 768) {
      gsap.set(".nav-list", { x: 768 });
    } else {
      gsap.set(".nav-list", { x: 0 });
      burgerAnimation(false);
    }
  }, [windowWidth]);

  // State and animation of burger menu
  const [burgerOpen, setBurgerOpen] = useState(false);

  const burgerAnimation = (resize: boolean | null) => {
    setBurgerOpen(resize || !burgerOpen);
    if (resize != null) {
      gsap.to(".burger-topline", { x: 0, y: 0, rotate: 0 });
      gsap.to(".burger-botline", { x: 0, y: 0, rotate: 0 });
      // gsap.to(".nav-list", { x: 768, y: 0 });
    } else {
      if (burgerOpen) {
        gsap.to(".burger-topline", { x: 0, y: 0, rotate: 0 });
        gsap.to(".burger-botline", { x: 0, y: 0, rotate: 0 });
        gsap.to(".nav-list", { x: 768, y: 0 });
      } else {
        gsap.to(".burger-topline", { x: 0, y: 3.5, rotate: 45 });
        gsap.to(".burger-botline", { x: 0, y: -3.5, rotate: -45 });
        gsap.to(".nav-list", { x: 0, y: 0, duration: 0.5 });
      }
    }
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="section-nav"
    >
      <nav>
        <PrismicNextImage field={slice.primary.logo} />
        <div className="burger" onClick={() => burgerAnimation(null)}>
          <div className="burger-topline"></div>
          <div className="burger-botline"></div>
        </div>
        <ul className="nav-list">
          {slice.items.map((item, key) => (
            <li className={"nav-link-" + key}>
              <PrismicNextLink
                key={key}
                field={item.nav_url}
                onMouseEnter={() => hoverNavLinkIn(key)}
                onMouseLeave={() => hoverNavLinkOut(key)}
              >
                {item.nav_text}
                <span></span>
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Nav;
