import type { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import Head from "next/head";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices/";

import Image from "next/image";
import { useContext, useEffect, useState } from "react";

import gsap from "gsap";
import { Context, createContext } from "vm";
import { sliceZone } from "@prismicio/client/dist/helpers/isFilled";

// Sitemap datas
const sitemap = [
  {
    title: "Product",
    list: ["Market", "Pricing", "Get the app", "Refer & earn"],
  },
  {
    title: "About us",
    list: ["Manifest", "We're hiring!", "Legal hub"],
  },
  {
    title: "Academy",
    list: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
  },
  {
    title: "Help",
    list: ["FAQ", "Community", "contact@diversified.fi"],
  },
];

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Index({ home, ctas, carousel }: HomeProps) {
  // Get window width on each resize
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    window.addEventListener("load", () => setWindowWidth(window.innerWidth));
  }, [windowWidth]);

  // Store windowWidth in React context
  // const windowWidthContext: Context = createContext(windowWidth);

  // Manage responsive nav
  useEffect(() => {
    if (windowWidth < 768) {
      gsap.to(".sitemap-list", { height: 0 });
      gsap.to(".footer-tab-icon", { display: "flex" });
    } else {
      gsap.to(".sitemap-list", { height: "auto" });
      gsap.to(".footer-tab-icon", { display: "none" });
    }
  }, [windowWidth]);

  const [footerState, setFooterState] = useState([true, false, false, false]);

  const getFooterState = (key: number) => {
    const tempFooter = [false, false, false, false];
    tempFooter[key] = true;
    setFooterState(tempFooter);
  };
  useEffect(() => {
    footerState.map((category, key) => {
      if (category == true) {
        gsap.to(`.sitemap-list-${key}`, { height: "auto", paddingBottom: 24 });
        gsap.to(`.footer-tab-icon-${key}`, {
          rotate: -180,
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: "white",
        });
      } else {
        gsap.to(`.sitemap-list-${key}`, { height: 0, paddingBottom: 0 });
        gsap.to(`.footer-tab-icon-${key}`, {
          rotate: 0,
          borderWidth: 0,
        });
      }
    });
  }, [footerState]);

  return (
    <main>
      <Head>
        <title>{home.data.title}</title>
      </Head>
      <SliceZone
        slices={home.data.slices}
        components={components}
        context={{ carousel, ctas }}
      />
      <section id="section-footer">
        <div className="container-footer-top">
          <div className="footer-sitemap">
            {sitemap.map((item, key) => (
              <div
                key={key}
                className="footer-sitemap-item"
                onClick={() => getFooterState(key)}
              >
                <div className="sitemap-item-title">
                  <h6>{item.title}</h6>
                  <div className={`footer-tab-icon footer-tab-icon-${key}`}>
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.5 10.375C0.5 4.85167 4.97667 0.375 10.5 0.375C16.0233 0.375 20.5 4.85167 20.5 10.375C20.5 15.8983 16.0233 20.375 10.5 20.375C4.97667 20.375 0.5 15.8983 0.5 10.375Z"
                        fill="#101010"
                      />
                      <path
                        d="M10.5 14.8193L10.5 5.93045"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.8332 11.486L10.4998 14.8193L7.1665 11.486"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <ul className={`sitemap-list sitemap-list-${key}`}>
                  {item.list.map((listItem, key: number) => (
                    <li key={key}>{listItem}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer-newsletter">
            <h6>Sign up for email update</h6>
            <div className="container-input-mail">
              <input type="email" className="input-mail" />
              <button type="submit">Sign up</button>
            </div>
            <div className="container-cb">
              <input type="checkbox" name="cb-mail" />
              <label htmlFor="cb-mail">
                Diversified processes your personal data collected via this form
                for responding to your requests. More informations{" "}
                <a href="#">Privacy Policy.</a>
              </label>
            </div>
          </div>
        </div>
        <div className="container-footer-mid">
          <p>
            You invest in Diversified Securitization which will entrust the
            purchase and management of the assets to a company of the group.
            Diversified Securitization S.à r.l., a private limited liability
            company incorporated and existing under the laws of the Grand Duchy
            of Luxembourg, having its registered office at 20, rue de Hollerich
            L - 1740 Luxembourg, Grand Duchy of Luxembourg and registered with
            the Luxembourg Trade and Companies Register under number
            B274704*Past performance is no guarantee of future performance. Any
            investment carries the risk of total or partial capital loss.
            Diversified invites you to do your own research before investing.
          </p>
        </div>
        <div className="container-footer-bot">
          <div className="container-logo">
            <Image
              src={"/assets/Logo-diversified-black.svg"}
              alt=""
              width={200}
              height={38}
            />
            <p>©2023 Diversified. All rights Reserved.</p>
          </div>
          <div className="container-catchphrase">
            <p>
              Invest in ultra-rare and profitable assets like wine, whisky,
              watches, bags and art.
            </p>
          </div>
          <div className="container-socials">
            <p>Join us</p>
            <div className="container-socials-icons">
              <Image
                src={"/assets/Discord.svg"}
                alt=""
                width={14}
                height={14}
              />
              <Image
                src={"/assets/LinkedIn.svg"}
                alt=""
                width={14}
                height={14}
              />
              <Image
                src={"/assets/Facebook.svg"}
                alt=""
                width={14}
                height={14}
              />
              <Image
                src={"/assets/Twitter.svg"}
                alt=""
                width={14}
                height={14}
              />
              <Image
                src={"/assets/Instagram.svg"}
                alt=""
                width={14}
                height={14}
              />
              <Image
                src={"/assets/Youtube.svg"}
                alt=""
                width={14}
                height={14}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });

  const home = await client.getSingle("home");

  const ctas = await client.getAllByType("cta");
  const carousel = await client.getAllByType("gallery_carousel");

  return {
    props: {
      home,
      carousel,
      ctas,
    },
  };
}
