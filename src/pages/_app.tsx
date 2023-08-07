// Next
import type { AppProps } from "next/app";

// Prismic
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

// Import styles
import "@/styles/reset.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <PrismicPreview repositoryName={repositoryName} />
    </>
  );
}
