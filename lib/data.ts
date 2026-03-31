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
      "https://i.ibb.co.com/LD4fvvwD/dashboard-stats.png",
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
      "      Next.js",
      "Tailwind CSS",
      "React Virtualized",
      "Shadcn UI",
      "Cloudinary (for image & video storage)",
      "React Player",
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
          "Implementing real-time notifications for user interactions (likes, comments, subscriptions) was a significant challenge. I used Socket.io to establish a WebSocket connection between the client and server, allowing for instant updates without page refreshes. This required careful handling of connection states and ensuring that notifications were delivered reliably even under high load.",
        solution:
          "To ensure reliability, I implemented a retry mechanism on the client side to handle potential disconnections. Additionally, I optimized the server-side event handling to minimize latency and prevent bottlenecks during peak usage.",
      },
    ],
  },
  {
    id: "3",
    title: "AI Content Generator",
    category: "Django",
    image: "https://picsum.photos/seed/proj3/800/600",
    gallery: [
      "https://picsum.photos/seed/proj3_1/800/600",
      "https://picsum.photos/seed/proj3_2/800/600",
      "https://picsum.photos/seed/proj3_3/800/600",
    ],
    description:
      "SaaS platform leveraging Python and Django to generate marketing copy using LLMs.",
    longDescription:
      "This SaaS application utilizes advanced Large Language Models (LLMs) to automatically generate high-quality marketing copy, blog posts, and social media content. The backend is powered by Python and Django, providing a secure and scalable infrastructure. It integrates with OpenAI's API and uses Celery for asynchronous task processing to handle long-running generation requests without blocking the user interface.",
    tech: ["Python", "Django", "PostgreSQL", "Celery", "Redis", "OpenAI API"],
    features: [
      "Integration with advanced LLMs",
      "Asynchronous task processing (Celery)",
      "Subscription-based billing (Stripe)",
      "User workspace and document management",
      "Customizable content templates",
    ],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "4",
    title: "Social Media Dashboard",
    category: "MERN",
    image: "https://picsum.photos/seed/proj4/800/600",
    gallery: [
      "https://picsum.photos/seed/proj4_1/800/600",
      "https://picsum.photos/seed/proj4_2/800/600",
      "https://picsum.photos/seed/proj4_3/800/600",
    ],
    description:
      "Real-time analytics dashboard for social media accounts with beautiful data visualizations.",
    longDescription:
      "A centralized dashboard for monitoring and analyzing social media performance across multiple platforms. Built on the MERN stack, it uses Socket.io to push real-time updates to the client. The frontend features interactive charts and graphs built with D3.js and Recharts, providing users with actionable insights into their audience engagement, follower growth, and content performance.",
    tech: [
      "React",
      "Express",
      "MongoDB",
      "Socket.io",
      "Recharts",
      "Tailwind CSS",
    ],
    features: [
      "Real-time data updates via WebSockets",
      "Interactive data visualizations",
      "Multi-platform integration (Twitter, Facebook, Instagram)",
      "Customizable reporting dashboards",
      "Automated email reports",
    ],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "5",
    title: "Food Delivery App",
    category: "React Native",
    image: "https://picsum.photos/seed/proj5/800/600",
    gallery: [
      "https://picsum.photos/seed/proj5_1/800/600",
      "https://picsum.photos/seed/proj5_2/800/600",
      "https://picsum.photos/seed/proj5_3/800/600",
    ],
    description:
      "Mobile application for food ordering with live order tracking and payment processing.",
    longDescription:
      "A comprehensive food delivery solution comprising a customer app, a restaurant dashboard, and a delivery driver app. The customer app, built with React Native, offers a smooth browsing and ordering experience. It features real-time GPS tracking of deliveries, secure in-app payments, and a rating system. The backend is a microservices architecture built with Node.js and deployed on AWS.",
    tech: [
      "React Native",
      "Redux",
      "Node.js",
      "MongoDB",
      "Google Maps API",
      "Stripe",
    ],
    features: [
      "Real-time GPS order tracking",
      "Secure in-app payments",
      "Restaurant and driver rating system",
      "Push notifications for order updates",
      "Complex routing and dispatch logic",
    ],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "6",
    title: "Inventory Management",
    category: "Django",
    image: "https://picsum.photos/seed/proj6/800/600",
    gallery: [
      "https://picsum.photos/seed/proj6_1/800/600",
      "https://picsum.photos/seed/proj6_2/800/600",
      "https://picsum.photos/seed/proj6_3/800/600",
    ],
    description:
      "Enterprise inventory system with barcode scanning, reporting, and role-based access.",
    longDescription:
      "An enterprise-grade inventory management system designed to streamline warehouse operations. Built with Django and PostgreSQL, it provides a robust and reliable backend. The system supports barcode scanning for quick item lookup and updates, comprehensive reporting tools for analyzing stock levels and trends, and a granular role-based access control (RBAC) system to ensure data security.",
    tech: ["Django", "Python", "React", "PostgreSQL", "Docker", "AWS S3"],
    features: [
      "Barcode scanning integration",
      "Advanced reporting and analytics",
      "Granular role-based access control (RBAC)",
      "Automated low-stock alerts",
      "Multi-warehouse support",
    ],
    github: "https://github.com",
    live: "https://example.com",
  },
];

export const categories = ["All", "MERN", "React Native", "Django"];
