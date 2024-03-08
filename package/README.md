# astro-tailwind-v4

This is an [Astro integration](https://docs.astro.build/en/guides/integrations-guide/) that adds Tailwind v4 support to your Astro project.

## Usage

### Installation

Install the integration **automatically** using the Astro CLI:

```bash
pnpm astro add astro-tailwind-v4
```

```bash
npx astro add astro-tailwind-v4
```

```bash
yarn astro add astro-tailwind-v4
```

Or install it **manually**:

1. Install the required dependencies

```bash
pnpm add astro-tailwind-v4
```

```bash
npm install astro-tailwind-v4
```

```bash
yarn add astro-tailwind-v4
```

2. Add the integration to your astro config

```diff
+import AstroTailwindV4 from "astro-tailwind-v4";

export default defineConfig({
  integrations: [
+    AstroTailwindV4(),
  ],
});
```

### Configuration

#### applyBaseStyles

default: `true`

Disable if you don't want default Tailwind base styling

## Contributing

This package is structured as a monorepo:

- `playground` contains code for testing the package
- `package` contains the actual package

Install dependencies using pnpm: 

```bash
pnpm i --frozen-lockfile
```

Start the playground:

```bash
pnpm playground:dev
```

You can now edit files in `package`. Please note that making changes to those files may require restarting the playground dev server.

## Licensing

[MIT Licensed](https://github.com/jdtjenkins/astro-tailwind-v4/blob/main/LICENSE). Made with ❤️ by [jdtjenkins](https://github.com/jdtjenkins).

## Acknowledgements

Astro
Tailwind
