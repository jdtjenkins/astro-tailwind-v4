import tailwindcss from "@tailwindcss/vite";
import { defineIntegration } from "astro-integration-kit";

export default defineIntegration({
	name: "astro-tailwind-v4",
	setup: () => {
		return {
			"astro:config:setup": ({ logger, updateConfig }) => {
				
				updateConfig({
					vite: {
						plugins: tailwindcss(),
					}
				})
				logger.info("Loaded"); // Kept for debugging but really you should do an env that enables this when in development not production.
			},
		};
	},
});
