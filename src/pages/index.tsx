import type { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import Head from "next/head";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices/";

import Image from "next/image";
import { useEffect, useState } from "react";

import gsap from "gsap";
import { Footer } from "@/Components/Footer";

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
      <Footer />
    </main>
  );
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });

  // Import page
  const home = await client.getSingle("home");

  // import nested custom types
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
