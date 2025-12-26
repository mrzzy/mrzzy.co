# mrzzy.co

Personal portfolio website to showcase projects, resume and work experience.

## Features

- **Projects**: Present a curated portfolio with in-depth project descriptions.
- **Resume**: Access the resume online or download it as a PDF.
- **Hosting**: Deployed on Vercel under the Hobby plan.

## Usage

### Project

Adding a new Project writeup:

1. Create a MDX writeup in `src/app/[locale]/work/projects/en`.
   - **Metadata** Writeup metadata can be included in as YAML Frontmatter in the start of the writeup:
   ```yaml
   ---
   title: "Implementing B+Tree Database in C++"
   publishedAt: "2025-03-17"
   summary: "Exploring performance benefits of indexing by implementing a B+Tree database in C++"
   image: "/images/projects/btree_db/banner.png"
   images:
     - "/images/projects/btree_db/banner.png"
   team:
     - name: "Zhu Zhanyan"
       avatar: "/images/avatar.jpg"
   ---
   ```
2. Place image assets in `public/images`.
   - Reference paths relative `/public` as root in code.

## Resume

Typically, adjust `const about` in `src/app/resources/content.js` to alter resume.

> For me: Since this website deployment is linked the [resume repository](https://github.com/mrzzy/resume), alter the `src/content.json` file in that repository instead. An actions workflow would automatically be triggered to synchronise changes into this repository.

## Acknowledgements

Built with the [Magic Portfolio template](https://github.com/once-ui-system/magic-portfolio) from [Once UI](https://once-ui.com/) for Next.js.

## License

Distributed under the CC BY-NC 4.0 License.

- Commercial usage is not allowed.
- Attribution is required.

See `LICENSE.txt` for more information.
