import tailwindcss from "@tailwindcss/vite";
import { createResolver, defineIntegration } from "astro-integration-kit";
import { addVitePluginPlugin } from "astro-integration-kit/plugins";

import { OptionsSchema } from "./schema";

export default defineIntegration({
	name: "astro-tailwind-v4",
	plugins: [addVitePluginPlugin],
	optionsSchema: OptionsSchema,
	setup: ({ name, options }) => {
		return {
			"astro:config:setup": ({ logger, addVitePlugin, injectScript, updateConfig }) => {
				const { resolve } = createResolver(import.meta.url);

				const plugins = tailwindcss();

				for (const plugin of plugins) {
					addVitePlugin(plugin);
				}

				updateConfig({
					vite: {
						css: {
							transformer: 'lightningcss'
						}
					}
				})

				if (options.applyBaseStyles) {
					injectScript("page-ssr", `import "${resolve("./base.css")}";`);
				}

				logger.info("Loaded");
			},
		};
	},
});
