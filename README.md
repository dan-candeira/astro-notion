# Astro Starter Notion API

```
npm create astro@latest -- --template basics
```

## Setup notion API integration

Comming soon...

## Notion database structure

<img src="https://stackblitz-user-content.s3.us-west-2.amazonaws.com/jcxu14pzoqrtaaugcpx94apb4ybb?response-content-disposition=inline%3B%20filename%3D%22Screenshot%202023-03-04%20212930.png%22%3B%20filename%2A%3DUTF-8%27%27Screenshot%25202023-03-04%2520212930.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIATEWXQORMAUQZF35Q%2F20230305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230305T003054Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIG19rKM%2FBgyrCibOYZOQ8GixAnxpVacDUDOeW65Ufv5LAiEAykN7ueQOdzOpyhminHuV6lXR1%2Bvcd6DuZ%2FYEth60ds4qvAUI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwyMTYyNzQwNzI2NjQiDADIU2lRNv%2BFPI2ZNCqQBQsOt1c5CU4oRO3YUHxd28wx1TY2Crudz%2BJh2mQl8bX9KIkK3pnRigufy%2B3BPAypZID597ZuHhK65mexcSL5PkIAVUE%2B6K7wXDtuRJ0O7Dde23i74r4YcD5ygZyiZVgdDAz81y8CC4By2XUwfAyH%2FYolNtaNZ2UvJOIskwqcm%2FfNJKxuEqeMcAXuZTz87Jv2CMLcPv%2BcoLk%2Bj8gZ2ncIBDN60UwFlnukRiMcu7eWucJFp3qs0LetapIap5c%2FF6AciUy9%2FCTzZhLemg1BU52Tv6tEUdc9edzZdkGHUwoEaCFQUfmtURBAZ5bVoUD1zAof4%2FIE9ac9%2FM4hnPBlpzS1I4Ow1Jet0IafBW2IHMJ4A6d6%2FVKKKtdTCymZRJRIKg1rCojNmVkPmyQUcCy5xdJ6EBIACN%2F0EY4EDl2pgdL8J7oN7n2PGHqjb%2FjfzR4ARZwhZlCfhXOuZGC9T4u83COxc6JYtDQKyY6gxmh4EB%2BdsTqM5Smn1YHM7Hd7KEFRoI%2BJRzAJRvvVgJskVcU%2FSLSupWzTLkr8Y%2F5KsBgzgxRw6MKdQAwgg6qUGL5w6yyRD7z2Dvq3DcQfhdqqif%2F5tQBtDMjSXSkFw6ip1iL2pwmolhKbn19UNhOJV1ui4jRzgQWykzrxtdhTcfTAfE8pVo9y9OGuYdhIJFYUXI41dnVN53yqztbaNm%2FaMZ8vxzaWoxA%2FY4byqG6%2BNlzK3PDjZ6hkzgsCkcAt0NPBMStgzcaSFN089jEglbAgk1P9Dy53EtUI4z%2FJVy2PZL0vRRQViqYMVx%2BHn7xQzH3Z2Ujtmi0Gh70JzCw4sJ7oIdjJHAeMWdJ6%2FoE%2FlLW136%2BwGgAw9h0f3fZF%2FoDIje6xKrR4raXF1aMVMNeVj6AGOrEBwm6pmOxruJhM5Dg80GtGsbASMRFii7LfkrKX64s8pe5pXaBuWz2TBp0PRGClwW2sANZO%2BMrqSNKgzB3K%2FhjNF12WuDm%2FXVXvelKZPAMXo1ybTUmQ%2BMg7HTlkNZaApPmfT%2Bg9rOFme5IvCHhlAgHFG9LosHBlCbYPYRbJeXEM4bPGdqnQnPIigOoIk6TdGTziOh8JFPqkrC3yyhrsMCfJBSOGiTT05NRzq0cNErDp9Pmy&X-Amz-SignedHeaders=host&X-Amz-Signature=d0546ce8276316d2135e379d4ee99b70e195623ec167a28d5670b244b505db48" alt="Notion database with the columns Title, Draft, Date, Cover Alt, Summary, Social Image and Tags" style="width:100%;"/>

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
