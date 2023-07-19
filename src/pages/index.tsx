import type { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import Head from "next/head";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices/";

import Image from "next/image";

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Index({ home, ctas, carousel }: HomeProps) {
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
      <section className="section-footer">
        <div className="container-footer-top">
          <div className="footer-top-item">
            <h6>Product</h6>
            <ul className="footer-list">
              <li>Market</li>
              <li>Pricing</li>
              <li>Get the app</li>
              <li>Refer & Earn</li>
            </ul>
          </div>
          <div className="footer-top-item">
            <h6>About us</h6>
            <ul className="footer-list">
              <li>Manifest</li>
              <li>We're hiring</li>
              <li>Legal hub</li>
            </ul>
          </div>
          <div className="footer-top-item">
            <h6>Academy</h6>
            <ul className="footer-list">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
          <div className="footer-top-item">
            <h6>Help</h6>
            <ul className="footer-list">
              <li>FAQ</li>
              <li>Community</li>
              <li>contact@diversifed.fi</li>
            </ul>
          </div>
          <div className="footer-top-item-last">
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
