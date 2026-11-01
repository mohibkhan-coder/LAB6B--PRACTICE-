# Next.js Rendering Methods Lab (SSR, CSR, SSG)

This project demonstrates and compares different rendering techniques in Next.js, including a dynamic Server-Side Rendered (SSR) page that fetches data based on URL parameters.

## Performance Differences & Use Cases

### 1. Server-Side Rendering (SSR)
* **Performance:** HTML is generated on the server for every single request. It has a slightly slower initial page load than SSG because the server has to fetch data and build the page before sending it to the browser.
* **Best Use Case:** Highly dynamic applications where data changes constantly and SEO is important (e.g., e-commerce product pages, news feeds, dynamic routing).

### 2. Client-Side Rendering (CSR)
* **Performance:** The browser downloads a minimal HTML file and uses JavaScript to fetch data and render the UI. The initial load can be slow, but subsequent interactions are very fast. SEO is generally poor.
* **Best Use Case:** Highly interactive user dashboards, private portals, or web apps behind a login screen where SEO does not matter (e.g., a user settings page).

### 3. Static Site Generation (SSG)
* **Performance:** HTML is generated once at build time. It is extremely fast because the server just sends a pre-built static file to the browser. 
* **Best Use Case:** Pages where data does not change often and maximum speed/SEO is required (e.g., portfolios, blogs, marketing websites).