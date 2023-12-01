export default async function sitemap() {
	const baseUrl = "https://christmas.dzaj.de";

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
		},
	];
}
