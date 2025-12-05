# Dynamic Developer Portfolio

This project is a single-page, animated portfolio designed to fulfill a detailed cinematic brief. It showcases a developer's journey from planning to execution through a dynamic, scroll-driven animation.

## Core Technologies

- **HTML5**: For the basic structure of the page.
- **CSS3**: For all styling, layout (including the diagonal split-screen effect), and visual treatments like glows and textures.
- **JavaScript (ES6+)**: To orchestrate the animations.
- **GSAP (GreenSock Animation Platform)**: A professional-grade JavaScript animation library used to create the high-performance, complex, scroll-triggered timeline.
  - **ScrollTrigger**: A GSAP plugin to link the animation timeline to the user's scroll position.

## How It Works

1.  **`index.html`**: Sets up the DOM elements, including the two main sections (`planner-section` and `executor-section`), containers for project panels, data streams, and the final contact target. It also imports the GSAP library from a CDN.

2.  **`style.css`**: Defines the visual appearance. 
    - The core split-screen effect is achieved using `clip-path` on the two main sections.
    - `position: fixed` is used to keep the sections layered on top of each other while the animation runs.
    - A parent container (`#scroll-container`) with a very large height (`500vh`) is used to provide the scrollable area that drives the entire animation sequence via GSAP's ScrollTrigger.

3.  **`script.js`**: This is the heart of the portfolio.
    - It waits for the DOM to be loaded.
    - It dynamically creates the project panel elements.
    - It initializes a master GSAP timeline that is tied to the scrollbar.
    - As the user scrolls, the timeline progresses, animating various properties (`clip-path`, `opacity`, `transform`, etc.) of the HTML elements to create the seamless transition from the calm planner on the rooftop to the dynamic freefall through projects and technology stacks, finally ending on the contact call-to-action.

## How to Run

1.  Ensure all three files (`index.html`, `style.css`, `script.js`) are in the same directory.
2.  Open the `index.html` file in any modern web browser (like Chrome, Firefox, or Safari).
3.  No server is required as it's a pure front-end implementation with no external data fetching (beyond the CDN for GSAP).

## Customization

- **Text Content**: Open `index.html` and replace the placeholder text in the `.blueprint-block` and `.contact-info` divs with your own information.
- **Projects**: In `script.js`, modify the `projects` array to include your own project titles and links to their thumbnail images.
- **Tech Stack**: In `index.html`, change the text content of the `.tech-logo` divs inside the `.data-stream` containers to reflect your technology stack.
- **Images/Visuals**: Replace the background image URLs in `style.css` and the person mask URLs (`-webkit-mask-image`) to personalize the visuals. The current assets are placeholders.