---
title: Getting Started with Eleventy
description: Learn how to build your first static website with Eleventy
date: 2024-01-15
tags: ["eleventy", "static-sites", "tutorial"]
layout: base.njk
---

# Getting Started with Eleventy

Eleventy (11ty) is a simple static site generator that's perfect for developers who want to build fast, modern websites without the complexity of full-featured frameworks.

## What is Eleventy?

Eleventy is a JavaScript alternative to Jekyll, Hugo, and other static site generators. It's designed to be simple and flexible, allowing you to use your favorite templating languages like Nunjucks, Liquid, or Handlebars.

## Why Choose Eleventy?

- **Zero Client-Side JavaScript** - Perfect for performance
- **Multiple Template Languages** - Use what you know
- **Simple Configuration** - Minimal setup required
- **Fast Build Times** - Quick development cycles
- **Flexible Data** - Easy content management

## Getting Started

### 1. Install Eleventy

```bash
npm install @11ty/eleventy
```

### 2. Create Configuration

Create a `.eleventy.js` file in your project root:

```javascript
module.exports = (config) => {
  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
```

### 3. Create Your First Page

Create a `src/index.md` file:

```markdown
---
title: Hello World
---

# Hello, World!

Welcome to my Eleventy website!
```

### 4. Build and Serve

```bash
npx eleventy --serve
```

Visit `http://localhost:8080` to see your site!

## Project Structure

A typical Eleventy project looks like this:

```
my-eleventy-site/
├── .eleventy.js
├── package.json
├── src/
│   ├── _includes/
│   │   └── base.njk
│   ├── _data/
│   │   └── metadata.json
│   ├── index.md
│   └── styles.css
└── dist/ (generated)
```

## Templates and Layouts

Eleventy uses a powerful templating system. Here's a simple Nunjucks layout:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>{{ title }}</title>
</head>
<body>
    <main>
        {{ content | safe }}
    </main>
</body>
</html>
```

## Data and Collections

Eleventy makes it easy to work with data:

```javascript
// _data/metadata.json
{
  "siteName": "My Website",
  "author": "John Doe"
}

// Use in templates
<h1>{{ metadata.siteName }}</h1>
<p>By {{ metadata.author }}</p>
```

## Deployment

Eleventy sites are perfect for static hosting:

- **Netlify** - Drag and drop deployment
- **Vercel** - Git-based deployment
- **Cloudflare Pages** - Fast global CDN
- **GitHub Pages** - Free hosting for open source

## Next Steps

Now that you have the basics, explore:

- [Eleventy Documentation](https://www.11ty.dev/docs/)
- [Template Languages](https://www.11ty.dev/docs/languages/)
- [Data Cascade](https://www.11ty.dev/docs/data-cascade/)
- [Collections](https://www.11ty.dev/docs/collections/)

---

*Ready to build something amazing? Start with Eleventy today! 🚀*
