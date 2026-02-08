export default defineEventHandler(async () => {
	await new Promise(resolve => setTimeout(resolve, 2000));

	return [{
		id: 1,
		title: "learn nuxt",
		done: false,
	}, {
		id: 2,
		title: "Learn vue",
		done: false,
	}];
});
