# Contributing to Hope UI

Thank you for showing interest in contributing to Hope UI. All of your contributions are extremely valuable to the success of this project!

## Ways to contribute

- **Improve documentation** - fix incomplete or missing docs, bad wording, examples, or explanations.
- **Give feedback** - we are constantly working to make Hope UI a better experience, so please feel free to share what you like, dislike, or any improvements you'd like to see via [GitHub Discussions](https://github.com/fabien-ml/hope-ui/discussions).
- **Share Hope UI** - help us spread the word by sharing [Hope UI](https://hope-ui.com/), or even [Tweet about Hope UI directly](https://twitter.com/intent/tweet?text=Hope%20UI%20%E2%80%93%20a%20new%20SolidJS%20component%20library%20with%20over%2040%20components,%20style%20props%20API,%20native%20dark%20theme%20support%20and%20focuses%20on%20accessibility.%0A%0A%23https://hope-ui.com%0A%0A%23solidjs).
- **GitHub Issues** - work on an [outstanding issue](https://github.com/fabien-ml/hope-ui/labels/help%20wanted) to help us keep Hope UI a reliable UI solution.
- **Suggest New Features** - please feel free to dicuss any new features you'd like to see by creating a [GitHub issue](https://github.com/fabien-ml/hope-ui/labels/help%20wanted).

## Contributing workflow

- After deciding which [GitHub issue](https://github.com/fabien-ml/hope-ui/labels/help%20wanted) or feature you'd like to work on, create a local branch to track your changes
- If applicable, add unit tests while implementing your code
- Ensure that all commits follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- It is highly recommended that you run the `pnpm test` command to ensure new contributions integrate with the old codebase before initiating a merge request
- Create a merge request and keep up-to-date with any feedback you receive from a maintainer

## Git branches

- **main**: the active development branch of this fork — open PRs here.

## Get started with Hope UI locally

- Fork the [PianoRhythm/hope-ui repository](https://github.com/PianoRhythm/hope-ui)
- Install the [editorconfig](https://editorconfig.org/) extension for your editor
- Install dependencies with pnpm – `pnpm install`
- Take an initial peek at the components by running `pnpm --filter @hope-ui/solid storybook`

### Project Structure

Hope UI is a pnpm + Turborepo monorepo:

```
apps/
  docs/            - Hope UI documentation website (Vite)
packages/
  solid/           - @hope-ui/solid — the published component library
```

## Scripts

Run from the repo root (Turbo orchestrates per-package scripts):

### Development

- `pnpm --filter @hope-ui/docs dev` – starts the docs development server
- `pnpm --filter @hope-ui/solid dev` – starts the in-package playground (`packages/solid/dev/`)
- `pnpm --filter @hope-ui/solid storybook` – starts Storybook

### Quality

- `pnpm typecheck` – `tsc --noEmit` across packages
- `pnpm lint` – ESLint on `.ts`/`.tsx`
- `pnpm test` – Jest across packages. Run a single test with `pnpm --filter @hope-ui/solid test -- -t "<name>"`
