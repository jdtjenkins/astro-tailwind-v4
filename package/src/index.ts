import tailwindcss from "@tailwindcss/vite";
import { defineIntegration } from "astro-integration-kit";
import { addVitePluginPlugin } from "astro-integration-kit/plugins";

export default defineIntegration({
	name: "astro-tailwind-v4",
	plugins: [addVitePluginPlugin],
	setup: () => {
		return {
			"astro:config:setup": ({ logger, addVitePlugin }) => {

				const plugins = tailwindcss()

				for (const plugin of plugins) {
					addVitePlugin(plugin);
				}

				logger.info("Loaded"); // Kept for debugging but really you should do an env that enables this when in development not production.
			},
		};
	},
});
