# HüPC Homepage

## Update Content
Here is a guide on how to update the content of the website.
Before you start, please ensure you have completed the initial setup steps.

### Requirements
There are some steps you need to take before you can begin edited.
These steps has to be done only once in the beginning.

1. **GitHub Account:** [Sign up for a github account](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F%3Cuser-name%3E%2F%3Crepo-name%3E&source=header-repo&source_repo=layoutleguane%2Fhuepc)
2. **Permission:** Tell the project administrators your GitHub username to grant you update permissions.

### Finding the File to Edit

Above this readme, you'll find various files and folders that compose the website. Clicking on a folder opens it, and clicking on a file opens it in the web-view. The text content is stored in Markdown files, and if you're new to Markdown, refer to the [cheat sheet](https://www.markdownguide.org/cheat-sheet/) for styling options.
The files you are looking for have the ending ".md", for markdown.

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


### Find the FAQ texts

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

## Update the Text
Now that you have found the markdown file, you can open and edit it.

1. Open the desired Markdown file by clicking on it.
1. Edit the file by clicking the pen icon in the top right corner.

![screenshot: highlighting the eddit button](assets/images/readme/markdown-edit.png)

Now you can edit the text you want to edit, simular to any other document.

Preview your changes by clicking the preview button. The styling will be differen on the website itself, but this way, you can check if your makrdown syntax work.

![screenshot: highlighting the preview button](assets/images/readme/markdown-edit-doc.png)

## Save Your Changes

1. Save changes by clicking "Commit Changes" in the top right.

![screenshot: highlighting the save button](assets/images/readme/markdown-save-button.png)

2. In the popup, ensure everything is prefilled, add a description if needed (B), and select "Commit directly to the main branch."

3. Hit the button "Commit Changes" (A)

![screenshot: highlighting the commit changes button](assets/images/readme/commit-message.png)

If you make a mistake, your changes aren't saved until you press "Commit Changes."

## Check Your Yhanges on the Website
After committing changes, the website rebuilds automatically.
This will take some time. On the site you can read this text, you can see a little dot or arrow on the top, Indicating the current state of the build process. You might have to reload this site to see the changes.

    Golden Circle: Changes detected, site rebuilding.
    Blue Arrow: Site up and running, changes implemented.
    Red Circle: Last change caused an error; check the document or contact administrators.
    

![screenshot: highlighting the build status](assets/images/readme/status.png)

Within 1-3 minutes, your changes should be visible. Reload or clear your browser cache if needed.

Great job! You've successfully updated the HüPC Homepage.


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
