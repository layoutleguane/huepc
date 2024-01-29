# HüPC Homepage

## Update Content

The content is conveniently stored in Markdown files, ensuring simplicity in the editing process. If you are new to Markdown, you can refer to this [cheat sheet](https://www.markdownguide.org/cheat-sheet/) for common styling options.

### File Structure Overview

To begin updating the text content, navigate to the src/content folder. Here, you'll encounter two essential subfolders and a file:

```
/
├── public/
│   └── pictures
├── src/
│   ├── content/
│   │   ├── pages
│   │   │     └── faq-questions
│   │   ├── shorts
│   │   └── main-infos.md
```

* **main-infos.md:** Contains information rendered as date (Datum), place (Ort), and price (Preis) on the project's landing page.
* **shorts:** Includes short intro texts displayed on the landing page.
* **pages:** Stores text for all web pages, each with its dedicated document.

### Updating Homepage Content
To edit the text on the homepage, locate and modify the corresponding Markdown file within the pages and shorts folders.

### Update FAQs

For changes to the FAQ section, follow these steps:

1. To edit the paragraph, modify the content of *content/pages/faq.md*.
2. For individual questions and answers, navigate to *content/pages/faq-questions*. Each question has its Markdown file.
3. If you wish to remove a question, delete the corresponding Markdown file.

To edit the text on the homepage, you have to edit the responding markdown file.

#### Ordering FAQs

Questions are displayed alphabetically on the website. To ensure a logical order, consider numbering your questions.

#### Adding a New Question

To add a question, create a new Markdown file similar to existing ones. Your file should include:

```example.md
---
title: Your Title-Question goes here
id: onewordid
---
Here comes your Text.
```

* **title:** Represents the question title displayed on the website.
* **id:** Should be a single word, unique to each question. This helps the computer open the correct element when clicked.


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
