// Import components
import Image from "next/image";

// React tools
import { useEffect, useState } from "react";

// External resources
import gsap from "gsap";

// Import styles
import styles from "./styles.module.scss";

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

export const Footer = () => {
  const maxLength = 4;
  const getFooterState = (key: number) => {
    //const tempFooter = [false, false, false, false];
    //tempFooter[key] = true;
    setFooterState(Array.from({ length: maxLength }, (_, i) => key === i));
  };
  const [footerState, setFooterState] = useState([true, false, false, false]);

  useEffect(() => {
    footerState.map((category, key) => {
      if (category == true) {
        gsap.to(`.sitemap_list-${key}`, { height: "auto", paddingBottom: 24 });
        gsap.to(`.footer_tab_icon_${key}`, {
          rotate: -180,
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: "white",
        });
      } else {
        gsap.to(`.sitemap_list-${key}`, { height: 0, paddingBottom: 0 });
        gsap.to(`.footer_tab_icon_${key}`, {
          rotate: 0,
          borderWidth: 0,
        });
      }
    });
  }, [footerState]);

  return (
    <section className={styles.section_wrapper}>
      <div className={styles.container_footer_top}>
        <div className={styles.footer_sitemap}>
          {sitemap.map((item, key) => (
            <div
              key={key}
              className={styles.footer_sitemap_item}
              onClick={() => getFooterState(key)}
            >
              <div className={styles.sitemap_item_title}>
                <h6>{item.title}</h6>
                <div
                  className={`${styles.footer_tab_icon} footer_tab_icon_${key}`}
                >
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

              <ul className={`${styles.sitemap_list} sitemap_list-${key}`}>
                {item.list.map((listItem, key: number) => (
                  <li key={key}>{listItem}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.footer_newsletter}>
          <h6>Sign up for email update</h6>
          <div className={styles.container_input_mail}>
            <input type="email" className={styles.input_mail} />
            <button type="submit">Sign up</button>
          </div>
          <div className={styles.container_cb}>
            <input type="checkbox" name="cb-mail" />
            <label htmlFor="cb-mail">
              Diversified processes your personal data collected via this form
              for responding to your requests. More informations{" "}
              <a href="#">Privacy Policy.</a>
            </label>
          </div>
        </div>
      </div>
      <div className={styles.container_footer_mid}>
        <p>
          You invest in Diversified Securitization which will entrust the
          purchase and management of the assets to a company of the group.
          Diversified Securitization S.à r.l., a private limited liability
          company incorporated and existing under the laws of the Grand Duchy of
          Luxembourg, having its registered office at 20, rue de Hollerich L -
          1740 Luxembourg, Grand Duchy of Luxembourg and registered with the
          Luxembourg Trade and Companies Register under number B274704*Past
          performance is no guarantee of future performance. Any investment
          carries the risk of total or partial capital loss. Diversified invites
          you to do your own research before investing.
        </p>
      </div>
      <div className={styles.container_footer_bot}>
        <div className={styles.container_logo}>
          <Image
            src={"/assets/Logo-diversified-black.svg"}
            alt=""
            width={200}
            height={38}
          />
          <p>©2023 Diversified. All rights Reserved.</p>
        </div>
        <div className={styles.container_catchphrase}>
          <p>
            Invest in ultra-rare and profitable assets like wine, whisky,
            watches, bags and art.
          </p>
        </div>
        <div className={styles.container_socials}>
          <p>Join us</p>
          <div className={styles.container_socials_icons}>
            <Image src={"/assets/Discord.svg"} alt="" width={14} height={14} />
            <Image src={"/assets/LinkedIn.svg"} alt="" width={14} height={14} />
            <Image src={"/assets/Facebook.svg"} alt="" width={14} height={14} />
            <Image src={"/assets/Twitter.svg"} alt="" width={14} height={14} />
            <Image
              src={"/assets/Instagram.svg"}
              alt=""
              width={14}
              height={14}
            />
            <Image src={"/assets/Youtube.svg"} alt="" width={14} height={14} />
          </div>
        </div>
      </div>
    </section>
  );
};
