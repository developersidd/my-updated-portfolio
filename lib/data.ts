import { ProjectType } from "@/types";

export const projects: ProjectType[] = [
  {
    id: "1",
    title: "Luxury Auto Trader",
    category: "MERN",
    fullSizeImage: "https://i.ibb.co.com/JjW24p3c/full-luxury.png",
    image: "https://i.ibb.co.com/mCyGRtR4/luxury.png",
    gallery: [
      "https://i.ibb.co.com/XTT5N7N/luxury1.png",
      "https://i.ibb.co.com/XrcwmGHD/luxury2.png",
      "https://i.ibb.co.com/ksr4WSTj/luxury3.png",
    ],
    description:
      "Full-stack e-commerce solution with Redux state management, Stripe integration, and admin dashboard.",
    longDescription:
      "This comprehensive e-commerce platform was built to handle high-volume traffic and complex transactions. It features a robust backend built with Node.js and Express, connected to a MongoDB database. The frontend is a responsive React application utilizing Redux for state management. Key features include user authentication, product search and filtering, a shopping cart, secure checkout via Stripe, and a comprehensive admin dashboard for managing inventory and orders.",
    tech: ["React", "Node.js", "MongoDB", "Redux", "Stripe", "Express"],
    features: [
      "User authentication and authorization (Firebase)",
      "Dashboard for normal users & admin",
      "Shopping cart and secure checkout (Stripe)",
      "Admin dashboard for inventory management",
      "Order tracking and history",
    ],
    github: "https://github.com/developersidd/luxury_car",
    live: "https://luxury-car-ab.netlify.app/",
  },
  {
    id: "2",
    title: "Play video platform",
    category: "MERN",
    image: "https://i.ibb.co.com/8D7rjT1j/home.png",
    gallery: [
      "https://i.ibb.co.com/8D7rjT1j/home.png",
      "https://i.ibb.co.com/cW802S2/video-details.png",
      "https://i.ibb.co.com/ymyLYyxp/profile-info.png",
      "https://i.ibb.co.com/60TTnfhJ/upload-video-modal.png",
      "https://i.ibb.co.com/GQqnLg2y/watch-later.png",
      "https://i.ibb.co.com/9mpzYrMF/screencapture-play-platform-vercel-app-dashboard-2026-04-01-01-36-13.png",
      "https://i.ibb.co.com/HDS4sKZq/my-videos.png",
      "https://i.ibb.co.com/N2cBqb7Y/Profile.png",
      "https://i.ibb.co.com/d01wRL21/search-result.png",
      "https://i.ibb.co.com/jPTjC54t/history.png",
    ],
    description:
      "A full-stack video-sharing platform inspired by YouTube, built with Next.js and modern web technologies. It demonstrates real-world features like authentication, video management, analytics, and real-time notifications.",
    longDescription:
      "Developed a full-stack video-sharing platform replicating core YouTube functionalities such as video upload, playback, search, playlists, and subscriptions. Built with Next.js, Tailwind CSS, and Shadcn UI for a responsive frontend, and Express with MongoDB for backend services. Implemented real-time notifications using Socket.io and optimized data retrieval using aggregation pipelines. Integrated Cloudinary for scalable media storage and added PWA support for improved performance and accessibility.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "React Virtualized",
      "Shadcn UI",
      "Cloudinary (for image & video storage)",
      "PWA features (service workers, manifest.json)",
      "React Player",
      "Socket.io (for real-time notifications)",
      "MongoDB (with aggregation pipelines for optimized data retrieval)",
      "Express.js",
    ],
    features: [
      "Custom authentication with secure session handling",
      "Video upload & streaming with Cloudinary integration",
      "Search, infinite scrolling, and optimized data fetching",
      "Interactive features: likes, comments, playlists subscriptions",
      "User dashboard with analytics and growth tracking",
      "Real-time notifications using Socket.io",
      "Watch history & watch later functionality",
      "Fully responsive UI with dark mode",
      "PWA support for better performance and offline capability",
    ],
    github: "https://github.com/developersidd/play-platform-frontend",
    live: "https://play-platform.vercel.app/",
    // add challenges
    challenges: [
      {
        title: "Real-time Notifications",
        description:
          "Self-learned and implemented Socket.io for real-time features",
      },
      {
        title: "Cross-Domain Authentication",
        description:
          "Handled cross-domain authentication by designing API proxy routes in Next.js",
      },
      {
        title: "Optimizing Video Data Retrieval",
        description:
          "Improved database performance by optimizing MongoDB aggregation queries",
      },
    ],
  },
  {
    id: "3",
    title: "Ecommerce Django App",
    category: "Django",
    image: "https://i.ibb.co.com/Jj5jpnj2/image.png",
    fullSizeImage: "https://i.ibb.co.com/5xM6YXhG/siddik-commerce-django.png",
    gallery: [
      "https://i.ibb.co.com/5xM6YXhG/siddik-commerce-django.png",
      "https://i.ibb.co.com/dsnkGqhm/siddik-commerce-store.png",
      "https://i.ibb.co.com/9mGTC908/siddik-commerce-django-product-details.png",
      "https://i.ibb.co.com/PsQH3k5L/siddik-commerce-django-cart.png",
      "https://i.ibb.co.com/Sw0NFxrM/siddik-commerce-django-checkout.png",
      "https://i.ibb.co.com/r2KXKrw6/siddik-commerce-django-payment.png",
    ],
    description:
      "A full-featured e-commerce web application built with Django, featuring product management, cart, order processing, secure payments, and multi-language support. Designed following scalable architecture and real-world business logic.",
    longDescription:
      "Developed a full-stack e-commerce platform using Django, implementing core functionalities such as product listings, categories, shopping cart, order management, and user authentication. Integrated multiple discount systems including flash sales, campaign offers, and product-level discounts. Added SSLCommerz payment gateway (test mode) for secure transactions and implemented bilingual support (English & Bangla) using Django internationalization tools and model translation. The project follows Django best practices for scalability, maintainability, and clean architecture.",
    tech: [
      "Python",
      "Django",
      "PostgreSQL",
      "Payment Gateway (SSLCommerz)",
      "Internationalization (Django i18n, django-modeltranslation)",
    ],
    features: [
      "User authentication and account management",
      "Shopping cart and order management system",
      "Before-login cart and after-login cart merging",
      "Multiple discount systems (Flash Sale, Campaign, Product Sale)",
      "Coupon discount system with unique codes and usage limits",
      "SSLCommerz payment integration (test environment)",
      "Product catalog with categories and filtering",
      "Multi-language support (English & Bangla)",
      "Customized Admin panel for All CRUD operations",
      "Product review and rating system with purchase verification",
      "Responsive UI for cross-device usability",
      "Scalable backend using Django best practices",
    ],
    challenges: [
      {
        title: "Mastering Django ORM Relationships",
        description:
          "Gained deep understanding of Django ORM relationships (One-to-One, ForeignKey, Many-to-Many) and reverse querying",
      },
      {
        title: "Implementing Complex Discount Logic",
        description:
          "Designed and implemented multiple discount systems with overlapping rules and priorities.",
      },
      {
        title: "Handling Cart Merging Logic",
        description:
          "Implemented logic to merge pre-login cart items with post-login cart while handling duplicates and quantity updates.",
      },
      {
        title: "Integrating SSLCommerz Payment Gateway",
        description:
          "Handled payment processing and callbacks securely using SSLCommerz's test environment by researching documentation and real-world implementations",
      },
      {
        title: "Adding Multi-language Support",
        description:
          "Implemented bilingual support using Django's internationalization framework and model translation.",
      },
    ],
    github: "https://github.com/developersidd/siddik-commerce-django",
    live: "https://siddik-commerce-django.onrender.com/en/",
  },
  {
    id: "4",
    title: "Dua Ruqya – Islamic Duas & Azkar Platform (Internship Project)",
    category: "PERN",
    image: "https://i.ibb.co.com/QFHYTy9n/dua-ruqya-home.png",
    fullSizeImage: "https://i.ibb.co.com/fGSb4b9J/duaruqyah.png",
    gallery: [
      "https://i.ibb.co.com/QFHYTy9n/dua-ruqya-home.png",
      "https://i.ibb.co.com/bgLK9g8V/dua-ruqya-categoreies.png",
      "https://i.ibb.co.com/fGSb4b9J/duaruqyah.png",
    ],
    description:
      "A web-based Islamic platform for accessing daily duas and azkar, built with Next.js and PostgreSQL. Features categorized navigation, an intuitive dashboard layout, and a custom-built dua detail page for a smooth reading experience.",
    longDescription:
      "Developed a web-based platform for accessing Islamic duas and azkar, organized by categories such as daily activities and routines. Built with Next.js and TypeScript, the application features a structured dashboard layout with category navigation, dua listings, and user settings. Designed and implemented a custom dua detail page to enhance readability and user experience. Initially used SQLite, then migrated to PostgreSQL (Neon) for better scalability and production readiness by converting and importing database dumps.",
    tech: [
      "Next js",
      "Express",
      "PostgreSQL (Neon)",
      "TypeScript",
      "Tailwind CSS",
    ],
    features: [
      "Categorized duas and azkar for daily activities",
      "Intuitive dashboard layout with category navigation",
      "Custom dua detail page for enhanced readability",
      "Database migration from SQLite to PostgreSQL (Neon)",
    ],
    challenges: [
      {
        title: "Designing an Intuitive Dashboard Layout",
        description:
          "Created a user-friendly dashboard layout with clear category navigation and dua listings.",
      },
      {
        title: "Database Integration and Management",
        description:
          "Learned to set up an Express server and integrate it with both SQLite and PostgreSQL databases.",
      },
      {
        title: "Database Migration",
        description:
          "Migrated from SQLite to PostgreSQL (Neon) by converting the database dump and importing it into the new database.",
      },
    ],
    github: "https://github.com/developersidd/duaruqyah.com",
    live: "https://duaruqyah-com.vercel.app",
  },
  {
    id: "5",
    // It's a real life client
    title: "Alam – Tour Discovery & Booking Mobile App (Real Client Project)",
    category: "React Native",
    image: "https://i.ibb.co.com/4RSs1pnm/Alam-hd-home.jpg",
    gallery: [
      "https://i.ibb.co.com/4RSs1pnm/Alam-hd-home.jpg",
      "https://i.ibb.co.com/KxqGxbVd/Alam-bookings-notifications-settings.png",
      "https://i.ibb.co.com/BV7pFHyh/Alam-login-register.png",
    ],
    description:
      "A mobile tour booking app built with React Native, enabling users to discover, customize, and book tours with guides. Features include map-based travel visualization, multilingual support, and a seamless booking experience.",
    longDescription:
      "Developed a mobile tour booking application using React Native and TypeScript, allowing users to explore, customize, and book tours across Saudi Arabia and beyond. The app features tour discovery, guide selection, and a multi-step booking system with validation. Integrated map-based visualization to display travel routes and locations, enhancing user experience. Implemented multilingual support and responsive design to ensure accessibility across devices. Focused on building a scalable and user-friendly interface with efficient state and data management.",
    tech: [
      "React Native",
      "TypeScript",
      "React Navigation",
      "TanStack Query",
      "React Hook Form",
      "AsyncStorage",
      "react-native-size-matters",
      "i18n",
    ],
    features: [
      "Tour discovery with search, categories, and reviews",
      "Multi-step booking system with validation",
      "Tour guide selection for personalized experiences",
      "Customizable tours with cart-based booking flow",
      "User profiles with booking history tracking",
      "Multi-language support (i18n)",
      "Map integration with travel route visualization",
      "Real-time location details and place insights",
      "Responsive UI for multiple screen sizes",
      "Settings management (language, notifications, profile)",
    ],
    challenges: [
      {
        title:
          "Learned React Native from scratch while building a production-level mobile app",
        description:
          "Gained proficiency in React Native development by building a complex tour booking app with features like map integration and multi-step forms.",
      },
      {
        title: "Implementing Map-Based Travel Visualization",
        description:
          "Integrated Google Maps API to visualize travel routes and locations, enhancing the user experience.",
      },
      {
        title:
          "Achieved responsive design across devices using react-native-size-matters",
        description:
          "Ensured the app's UI adapts seamlessly to various screen sizes and resolutions by utilizing the react-native-size-matters library for responsive design.",
      },
    ],
    github: "",
    live: "https://example.com",
  },
];

export const categories = ["All", "MERN", "PERN", "React Native", "Django"];
