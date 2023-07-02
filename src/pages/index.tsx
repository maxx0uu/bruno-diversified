import type { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import Head from "next/head";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices/";

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Index({ home, ctas }: HomeProps) {
	return (
		<main>
			<Head>
				<title>{home.data.title}</title>
			</Head>
			<SliceZone slices={home.data.slices} components={components} />
		</main>
	);
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
	const client = createClient({ previewData });

	const home = await client.getSingle("home");

	const ctas = await client.getAllByType("cta");

	return {
		props: {
			home,
			ctas,
		},
	};
}
