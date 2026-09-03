export type ProjectAvailability =
  | "FOR_SALE"
  | "PAY_AS_YOU_USE"
  | "DEMO"
  | "PRIVATE";

export interface Project {
  number: string;
  title: string;
  slug: string;
  category: string;
  description: string;

  availability: ProjectAvailability;

  liveUrl?: string;
  githubUrl?: string;
  demoUrl?: string;

  screenshots: string[];

  technologies: string[];

  problem: string;
  solution: string;

  features: string[];
  challenges: string[];
}

export const projects: Project[] = [
  {
    number: "01",
    title: "Soko Smart",
    slug: "soko-smart",
    category: "Marketplace Platform",

    description:
      "A digital marketplace connecting sellers and customers through product discovery, seller shops, orders, payments and payouts.",

    availability: "PAY_AS_YOU_USE",

    // Add these when the real URLs are available.
    liveUrl: "https://soko-smart-ebon.vercel.app/",
    // githubUrl: "https://...",
    // demoUrl: "https://...",

    screenshots: [],

    technologies: [
      "Next.js",
      "React",
      "PostgreSQL",
      "Supabase",
      "JWT",
      "Payment APIs",
    ],

    problem:
      "Small and independent sellers need a way to present their products digitally, reach customers, manage orders and participate in a structured marketplace without having to build their own complete e-commerce platform.",

    solution:
      "Soko Smart brings product discovery, seller shops, customer accounts, orders, payments and seller payouts into one marketplace experience.",

    features: [
      "Seller shops and product listings",
      "Product discovery and categories",
      "Customer and seller authentication",
      "Orders and order management",
      "Payment integration",
      "Seller payouts",
      "Seller verification",
      "Seller reviews and followers",
      "Location-aware marketplace features",
      "Email notifications",
    ],

    challenges: [
      "Designing a marketplace structure that supports both customers and sellers",
      "Connecting authentication, orders and payments into one flow",
      "Handling seller commissions and payouts",
      "Designing a database structure that can grow with the platform",
      "Keeping sensitive operations protected through authenticated APIs",
    ],
  },

  {
    number: "02",
    title: "Dukani Ledger",
    slug: "dukani-ledger",
    category: "Business Management System",

    description:
      "A business management system for handling products, inventory, sales, workers and profit tracking.",

    availability: "PAY_AS_YOU_USE",

    screenshots: [],

    technologies: [
      "Spring Boot",
      "PostgreSQL",
      "Java",
      "REST API",
      "JWT",
    ],

    problem:
      "Businesses need a reliable way to keep track of products, stock movement, sales and profitability without depending on disconnected manual records.",

    solution:
      "Dukani Ledger centralizes core business operations into a structured system where inventory, sales and financial information can be managed through one application.",

    features: [
      "Product management",
      "Inventory tracking",
      "Stock entries",
      "Sales management",
      "Worker management",
      "Profit tracking",
      "JWT authentication",
      "REST APIs",
    ],

    challenges: [
      "Designing relationships between products, stock and sales",
      "Tracking stock movement consistently",
      "Calculating product and business profitability",
      "Protecting business operations through authenticated APIs",
    ],
  },

  {
    number: "03",
    title: "Student Clearance",
    slug: "student-clearance",
    category: "Academic Management System",

    description:
      "A digital clearance management system designed to coordinate students, departments and institutional clearance processes.",

    availability: "FOR_SALE",

    screenshots: [],

    technologies: [
      "Spring Boot",
      "PostgreSQL",
      "React",
      "Next.js",
      "REST API",
    ],

    problem:
      "Student clearance processes can involve multiple departments and staff members, making manual coordination slow and difficult to track.",

    solution:
      "The system digitizes the clearance workflow and provides a structured platform for students, staff, departments and administrators.",

    features: [
      "Student management",
      "Staff management",
      "Department clearance",
      "Program and college management",
      "Administrative management",
      "Authentication",
      "REST APIs",
    ],

    challenges: [
      "Modeling relationships between students and institutional departments",
      "Designing a clearance workflow that multiple roles can use",
      "Protecting administrative operations",
      "Keeping the system flexible for different institutional structures",
    ],
  },
  {
  number: "04",
  title: "ServeFlow",
  slug: "serveflow",
  category: "Restaurant Management System",

  description:
    "A restaurant management platform designed to connect front-of-house operations, orders and kitchen workflows in one system.",

  availability: "DEMO",

  demoUrl: "https://restaurant-management-virid-one.vercel.app/",

  screenshots: [
    "/projects/serveflow/pic1.png",
    "/projects/serveflow/pic2.png",
    "/projects/serveflow/pic3.png",
    "/projects/serveflow/pic4.png",
    "/projects/serveflow/pic5.png",
    "/projects/serveflow/pic6.png",
    "/projects/serveflow/pic7.png",
    "/projects/serveflow/pic8.png",
    "/projects/serveflow/pic9.png",
    "/projects/serveflow/pic10.png",
    "/projects/serveflow/pic11.png",
    "/projects/serveflow/pic12.png",
    "/projects/serveflow/pic13.png",
    "/projects/serveflow/pic14.png",
    "/projects/serveflow/pic15.png",
    "/projects/serveflow/pic16.png",
    "/projects/serveflow/pic17.png",
    "/projects/serveflow/pic18.png",
    "/projects/serveflow/pic19.png",
    "/projects/serveflow/pic20.png",
  ],

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],

  problem:
    "Restaurant operations can become difficult to coordinate when orders, kitchen activity and service workflows are handled across disconnected processes.",

  solution:
    "ServeFlow brings restaurant operations into a unified digital workflow, allowing orders and kitchen activity to be managed through a connected interface.",

  features: [
    "Order management",
    "Kitchen workflow",
    "Order status tracking",
    "Restaurant dashboard",
    "Service management",
    "Responsive interface",
  ],

  challenges: [
    "Designing a workflow that works for both service and kitchen operations",
    "Keeping order status changes synchronized across the interface",
    "Creating an interface that remains easy to use during busy restaurant operations",
    "Designing the system so additional restaurant features can be added later",
  ],
},
];