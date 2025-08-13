# Eleventy Template Website

A modern, fast website template built with [Eleventy](https://www.11ty.dev/) and ready for deployment with InstaWeb.

## 🚀 Features

- **Static Site Generation** - Built with Eleventy for optimal performance
- **Modern Design** - Clean, responsive design with CSS Grid and Flexbox
- **SEO Optimized** - Meta tags, Open Graph, and Twitter Cards
- **Interactive Elements** - Smooth animations and modern JavaScript
- **Blog Ready** - Includes blog structure and sample posts
- **Deployment Ready** - Configured for Cloudflare Pages deployment

## 📁 Project Structure

```
template_site/
├── .eleventy.js              # Eleventy configuration
├── package.json              # Dependencies and scripts
├── .nvmrc                   # Node.js version specification
├── _headers                 # Cloudflare Pages security headers
├── _redirects               # Cloudflare Pages redirect rules
├── src/                     # Source files
│   ├── _includes/           # Layout templates
│   │   └── base.njk        # Base HTML template
│   ├── _data/              # Site-wide data
│   │   └── metadata.json   # Site configuration
│   ├── blog/               # Blog posts
│   │   ├── index.md        # Blog listing page
│   │   └── getting-started-eleventy.md
│   ├── index.md            # Home page
│   ├── about.md            # About page
│   ├── styles.css          # Main stylesheet
│   └── script.js           # Main JavaScript file
└── README.md               # This file
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Installation

1. **Copy the template** to your project directory
2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit `http://localhost:8080`

## 📝 Available Scripts

- `npm start` - Start development server
- `npm run dev` - Start development server with watch mode
- `npm run build` - Build for production

## 🎨 Customization

### Content

- Edit markdown files in the `src/` directory
- Modify `src/_data/metadata.json` for site-wide settings
- Update the base template in `src/_includes/base.njk`

### Styling

- Customize CSS variables in `src/styles.css`
- Modify the color scheme and typography
- Add new components and layouts

### JavaScript

- Enhance interactivity in `src/script.js`
- Add new features and animations
- Integrate with external APIs

## 🌐 Deployment

This template is configured for deployment to Cloudflare Pages with the following settings:

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Root Directory**: `/`
- **Production Branch**: `main`

### Deployment Steps

1. **Push to GitHub** - Commit and push your changes
2. **Connect to Cloudflare Pages** - Link your GitHub repository
3. **Configure Build Settings** - Use the settings above
4. **Deploy** - Cloudflare Pages will automatically build and deploy

## 📚 Eleventy Features Used

- **Markdown Processing** - Write content in Markdown
- **Nunjucks Templates** - Powerful templating language
- **Data Cascade** - Site-wide and page-specific data
- **Collections** - Organize content by type
- **Passthrough Copy** - Include static assets

## 🔧 Configuration

### Eleventy Config (`.eleventy.js`)

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

### Site Metadata (`src/_data/metadata.json`)

```json
{
  "siteName": "My Eleventy Website",
  "description": "A modern, fast website built with Eleventy",
  "author": "InstaWeb"
}
```

## 🎯 Performance Features

- **Static Generation** - No server-side rendering delays
- **Optimized CSS** - Modern CSS with minimal overhead
- **Efficient JavaScript** - Vanilla JS with no framework bloat
- **CDN Ready** - Perfect for global content delivery
- **Security Headers** - Built-in protection against common attacks

## 🚀 Advanced Features

- **Theme Toggle** - Light/dark mode switching
- **Search Functionality** - Built-in search in header
- **Smooth Animations** - Intersection Observer animations
- **Responsive Design** - Mobile-first approach
- **Accessibility** - Semantic HTML and ARIA support

## 📖 Documentation

- [Eleventy Documentation](https://www.11ty.dev/docs/)
- [Nunjucks Templating](https://mozilla.github.io/nunjucks/)
- [Cloudflare Pages](https://developers.cloudflare.com/pages/)
- [InstaWeb Documentation](https://instaweb.dev/docs/)

## 🤝 Contributing

This template is designed to be easily customizable. Feel free to:

- Modify the design and layout
- Add new features and functionality
- Improve performance and accessibility
- Share your improvements with the community

## 📄 License

This template is licensed under the MIT License. See the LICENSE file for details.

---

**Built with ❤️ using [Eleventy](https://www.11ty.dev/) and deployed with [InstaWeb](https://instaweb.dev)**
