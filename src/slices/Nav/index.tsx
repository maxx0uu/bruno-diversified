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
  const [burgerOpen, setBurgerOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      gsap.set(".nav-list", { x: 768 });
    } else {
      gsap.set(".nav-list", { x: 0 });
    }
  }, []);

  const burgerAnimation = () => {
    setBurgerOpen(!burgerOpen);
    if (burgerOpen) {
      gsap.to(".burger-topline", { x: 0, y: 0, rotate: 0 });
      gsap.to(".burger-botline", { x: 0, y: 0, rotate: 0 });
      gsap.to(".nav-list", { x: 768, y: 0 });
    } else {
      gsap.to(".burger-topline", { x: 0, y: 3.5, rotate: 45 });
      gsap.to(".burger-botline", { x: 0, y: -3.5, rotate: -45 });
      gsap.to(".nav-list", { x: 0, y: 0, duration: 0.5 });
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
        <div className="burger" onClick={() => burgerAnimation()}>
          <div className="burger-topline"></div>
          <div className="burger-botline"></div>
        </div>
        <ul className="nav-list">
          {slice.items.map((item, key) => (
            <li>
              <PrismicNextLink key={key} field={item.nav_url}>
                {item.nav_text}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Nav;
