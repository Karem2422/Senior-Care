# Senior Care

Senior Care is a modern, responsive web application designed for a pharmaceutical company specializing in senior care medications and medical supplies in Yemen. The website features an interactive product catalog, company information, team profiles, and corporate social responsibility initiatives.

## Features

### Product Catalog (`products.html`)

- **Interactive Search**: Real-time search by product name, manufacturer, or NDC.
- **Dynamic Filtering**: Filter products by Category (Cardiology, Diabetes Care, Antibiotics, etc.) and Availability (In Stock, Low Stock).
- **Sorting**: Sort products by Relevance, Name (A-Z), or Price.
- **Pagination**: Client-side pagination for browsing large numbered lists of products.
- **Product Details**: Click the arrow button on any product card to view a detailed popup modal with product information.

### Our Team (`our_team.html`)

- **Team Profiles**: Professional profiles of the company's leadership and key staff.
- **Interactive Modals**: "View Profile" buttons open detailed modals with biographies.
- **Localized Content**: Team members feature culturally appropriate names for the region.

### Company Pages

- **About Us (`index.html`)**: Overview of the company's mission, vision, and values.
- **Social Responsibility (`social_responsibility.html`)**: Information about the company's CSR initiatives and community impact.

## Project Structure

```text
Senior Care/
├── index.html              # Main landing/about page
├── products.html              # Interactive product catalog
├── our_team.html              # Team members page
├── social_responsibility.html # CSR page
├── assets/
│   ├── css/
│   │   ├── alexandria.css     # Typography styles
│   │   └── material-symbols.css # Icon styles
│   ├── js/
│   │   ├── main.js            # Common functionality
│   │   └── tailwindcss.js     # Tailwind CSS script
│   └── images/                # Project images
└── README.md                  # Project documentation
```

## Technologies Used

- **HTML5**: Semantic structure.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development (loaded via script).
- **JavaScript (ES6+)**: Handles all interactivity including filtering, sorting, modals, and pagination.
- **Google Fonts**: Uses the "Alexandria" font family.
- **Material Symbols**: Google's icon library for consistent UI icons.

## How to Run

Since this is a static website, no backend server or installation is required.

1. **Download** or clone the repository.
2. Navigate to the project folder.
3. **Double-click** `index.html` or `products.html` to open the website in your web browser.

## Customization

- **Colors**: The project uses a custom Tailwind configuration with a primary blue theme (`#0ea5e9`). You can modify this in the `<script>` tag inside the HTML `head`.
- **Data**: Product data is stored in `data-*` attributes within the HTML of `products.html`. You can add new products by copying an existing product card and updating these attributes.

---

© 2026 Senior Care. All Rights Reserved.
