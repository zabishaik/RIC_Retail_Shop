## Retail App
 
A modern e-commerce application built with React, Vite, and Material-UI, featuring product browsing, filtering, cart management, and theme customization.
 
## Features
 
- Product listing with pagination
- Search and category filtering
- Shopping cart with quantity management / Add Remove Items from Cart
- Dark/Light theme toggle
- Responsive design
 
## Approach
### Architecture
- Component-Based: Modular, reusable components for maintainability
- Separation of Concerns: Distinguished between pages (containers), components (presentational), and services (API calls)
- State Management: Redux for global cart state, React hooks for local UI state
- Responsive Design: Mobile-first approach using MUI Grid system
 
### User Experience
- Pagination to handle large product lists efficiently
- Real-time search and filtering without page reload
- Visual feedback with cart drawer that opens on product addition
- Theme persistence across navigation
 
## Design System
### Material-UI (MUI)
We use Material Design principles through Material-UI for:
- Consistency: Unified component styling across the app
- Accessibility: Built-in ARIA attributes and keyboard navigation
- Theming: Centralized theme configuration for light/dark modes
- Responsiveness: Built-in breakpoints for mobile, tablet, desktop
 
### Color Palette
- Light Mode: Clean white background (#f5f5f5) with dark text
- Dark Mode: Dark gray background (#2a2a2a) for comfortable viewing
- Accent: Primary brand colors from MUI theme
 
### Typography
- Headers: Material-UI variants (h6, h5, etc.)
- Body: Consistent font sizes for readability
- Labels: Clear labeling for search, category filters
 
## Component Structure
 
components/
    Header.jsx        - Top navigation with cart & theme toggle
    ProductCard.jsx   - Individual product card display
    SearchFilter.jsx  - Search and category filter box
    CartDrawer.jsx    - Side drawer for cart items
pages/
    ProductList.jsx   - Main product listing page
services/
│   api.js            - Axios API calls to fetch product deatils
store/
│   cartSlice.js      - Handing Redux cart state & actions
theme/
    theme.js          - Theme configuration Dark/Light
App.jsx               - Root component
 
 
## Decisions & Trade-offs
 
### 1. **Redux for Cart State**
- Decision: Used Redux Toolkit for global cart management
- Rationale: Cart data needs to be accessible across multiple components
- Trade-off: Added complexity vs simpler Context API, but Redux DevTools provide better debugging
 
### 2. **Local State for UI (Pagination, Search)**
- Decision: Used React hooks (useState) for pagination and filters
- Rationale: These are UI-specific states that don't need global access
- Trade-off: Simpler code without Redux overhead, but state is lost on page refresh
 
### 3. **Material-UI for Styling**
- Decision: Used MUI components and sx prop instead of CSS modules/Tailwind
- Rationale: Faster development, built-in accessibility, theme support
- Trade-off: Larger bundle size vs utility-first CSS frameworks
 
### 4. **Pagination Instead of Infinite Scroll**
- Decision: Implemented traditional pagination with page numbers
- Rationale: Better for SEO, user control, and smaller initial load
- Trade-off: Requires extra clicks vs. seamless infinite scroll UX
 
### 5. **Axios for API Calls**
- Decision: Used Axios with centralized API instance
- Rationale: Interceptors support, cleaner request/response handling
- Trade-off: Extra dependency vs. native fetch API
 
### 6. **Theme Toggle at App Level**
- Decision: Theme state managed in App.jsx, passed via useTheme hook
- Rationale: Theme affects entire app, centralized control
- Trade-off: Props drilling vs. easier debugging
 
## Getting Started
 
### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
 
### Installation
 
# Local DB Setup
Create db.json file in project.
 
run the below shell command
npx json-server --watch db.json --port 4000
 
then we can able to access data with localhost URL: GET http://localhost:4000/products
 
 
# Clone the repository
git clone https://github.com/YOUR_USERNAME/retail-app.git
 
# Navigate to project
cd retail-app
 
# Install dependencies
npm install
 
# Start development server
npm run dev
 
### Build for Production
 
npm run build
npm run preview
 
## Available Scripts
 
- npm run dev - Start development server
- npm run build - Build for production
- npm run preview - Preview production build
- npm run lint - Run ESLint
 
