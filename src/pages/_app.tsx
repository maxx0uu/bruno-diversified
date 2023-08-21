// Next
import type { AppProps } from "next/app";

// Prismic
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

// Import styles
import "@/styles/reset.css";
import "@/styles/globals.css";
import { WindowWidthProvider } from "../../context/WindowWidthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <WindowWidthProvider>
        <Component {...pageProps} />
        <PrismicPreview repositoryName={repositoryName} />
      </WindowWidthProvider>
    </>
  );
}
