# HüPC Homepage

## Update Content

The text content of this website is stored in markdown files, to make it easier for non-it-people to edit.
If you've never used Markdown before, [here is a cheat sheet](https://www.markdownguide.org/cheat-sheet/) with the most comman styling you might need.

To update the text of this website, you have to navigate into the *src/content* folder.
Here you will find two folders, 'pages' and 'shorts', as well as the file main-infos.md

```
/
├── public/
│   └── pictures
├── src/
│   ├── content/
│   │   └── pages
│   │   └── shorts
│   │   └── main-infos.md
```

* **main-infos.md** stores what will be rendered as date (Datum), place (Ort) and price (Preis) on the landing page of this project.
* **shorts** includes all short intro texts of the landing page
* **pages** includes the text of all web pages. Each page has it's own document.

To edit the text on the homepage, you have to edit the responding markdown file.

## Development 

tldr:
  * `yarn install`
  * `yarn dev`

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `yarn install`             | Installs dependencies                            |
| `yarn run dev`             | Starts local dev server at `localhost:3000`      |
| `yarn run build`           | Build your production site to `./dist/`          |
| `yarn run preview`         | Preview your build locally, before deploying     |
| `yarn run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `yarn run astro -- --help` | Get help using the Astro CLI                     |


### 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

### 👀 Want to learn more?

Feel free to check [the astro documentation](https://docs.astro.build) or jump into the astro [Discord server](https://astro.build/chat).
