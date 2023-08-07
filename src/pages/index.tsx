// Next
import type { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import Head from "next/head";

// Prismic
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";

// React tools
import { createContext, useEffect, useState } from "react";

// Components
import { components } from "@/slices/";
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
  const WindowWidthContext = createContext(0);

  return (
    <WindowWidthContext.Provider value={windowWidth}>
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
    </WindowWidthContext.Provider>
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
