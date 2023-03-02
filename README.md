# Astro Starter Notion API

```
npm create astro@latest -- --template basics
```

## Setup notion API integration

Comming soon...

## Notion database structure

<img src="https://stackblitz-user-content.s3.us-west-2.amazonaws.com/xy7jwngy8ty6qotpicu5z6izsm89?response-content-disposition=inline%3B%20filename%3D%22Screenshot%202023-03-02%20160017.png%22%3B%20filename%2A%3DUTF-8%27%27Screenshot%25202023-03-02%2520160017.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIATEWXQORMNVWHGRKN%2F20230302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230302T191028Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQD2SPB6PK%2FYymOMNjy%2BajpctKRob1SrZ6JnPDWQU36nNQIgNDpQ6fCt57TiGEFQgnEtwFk2OWejTcTUQJ8IIMX%2FffgqugUIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwyMTYyNzQwNzI2NjQiDBnveqrP4bYRnWmWniqOBc9LvBy9z1cpCB3L80YokljkJyZHI6wQPC6qP%2FXx%2B2N2i9YO%2F6t6izssUIN1BAJ5MV%2F7ccBJdS7KT%2BeVBers3aWMXYCxO7DTV2GOMF%2FJTssrwJUSyBaigw2y5%2BCKQ9Ocprv5LyYGIv4V3RleK1fuhNjPY0HtDD0j1hG45v%2BC0znN8OivF2YcbWe4BRj4FTO%2F8jrSV2x1WVfnkJpxIdatfGB7BPhXY2puGHQ9OmaDWS1LMnzwYMpefVoyKeKR%2BN6BpX8lKozHorxeMlsXC%2FvRtyGtbR8fAqVd32FB9Z79swZEQD54yaZsLYGSQP%2BZUiuO7DQf8%2FopmBGq%2FUZ7Hyl9DYIc4zsXTOTEnB8IiUnn9zyxGDZ6Npr7i42DlHL7RSK3cuvg2FXgOUjhIYqI9BiCkK6AkPU9x9K3qFRaNPjXEZ6JiFF056WarTY%2FiveadVtGOvi6eZd4S7hYQ%2FCBA2Dcg6TMm3QlqYi6%2BOtBVlmwxqPh%2FZlghrTo2pxU734xh0CoTeh5A4wROj%2B7icPkBI5noT0IY5dCENDLEZp1jUGtrchcVpKvRuwqnhrRPDekJQbfT%2B1nLNil2Fs6D5q7RmLM85%2FcChBrAiQ87iBI8FRXCeRO5k6hZ3G9i2RwiUIddcaxNtZmEKyzmfxT0FvZJVb6KSKJUh3GaqguZmGXQDxxHnVaVROmPN3Fph7OujjchtBES3sPqPlBrU27eLO67MiTcGUsCZeUbf34i1vfyuqCWToVtzkj%2FkNZfKv0hmNccp5TVwdLbB41rCUBSbBttEJZizplaWpXoRMm3%2BOEfFfOjenosbrhPmfZZztMkGJ18KCrd09zMVpSCmKHlpizfvM5P9kPHYjUrg0N5cuXnd8n7DD82YOgBjqxAZMLauforXNGfM6phQQx24AuzUQcO7kEDrEkgBnbd9DKjiF9VQ6DktPdNYYizT1qbcp22MyLaZa%2FqeixuYub7%2FznUcOkuBNwH%2FpXa7qHi%2BkKPvOR7dMpS0Bb9BPwr%2FmXkcKjzUbJMQfSf33RaXdPi1b%2BkpIEpot7%2FxfkSjXkRfssQoUkZHIEeueyMGYx1gGp7gHuT9AGjjvn0i71EGfGdVq1w%2Bm1%2Fegrv3WRL6qH4R6vkw%3D%3D&X-Amz-SignedHeaders=host&X-Amz-Signature=97e6e7bf84bcfdd52e3cb90d0ba88a91cfa758261c21ce62b72fd574da460fc0" alt="Notion database with the columns Title, Draft, Date, Cover Alt and Summary" style="width:100%;"/>

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
── public/
│   └── favicon.svg
├── src/
│   ├──data
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

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
