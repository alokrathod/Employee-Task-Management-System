const employees = [
  {
    id: 1,
    name: "Alok Sharma",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Design Login Page",
        description: "Create responsive login form with validation.",
        date: "10-05-2025",
        category: "design",
        priority: "moderate",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix navbar bug",
        description: "Resolve alignment issue in the navbar.",
        date: "12-05-2025",
        category: "frontend",
        priority: "low",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Implement API",
        description: "Connect frontend with backend API.",
        date: "14-05-2025",
        category: "dev",
        priority: "high",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    name: "Riya Mehta",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 1,
      completed: 1,
      failed: 2
    },
    tasks: [
      {
        title: "Database Schema",
        description: "Design schema for task management system.",
        date: "09-05-2025",
        category: "backend",
        priority: "high",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Write Test Cases",
        description: "Add unit tests for login module.",
        date: "11-05-2025",
        category: "testing",
        priority: "moderate",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Code Review",
        description: "Review PRs assigned in the sprint.",
        date: "13-05-2025",
        category: "dev",
        priority: "moderate",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "UI Polish",
        description: "Refine dashboard UI for mobile view.",
        date: "15-05-2025",
        category: "design",
        priority: "low",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      }
    ],
  },
  {
    id: 3,
    name: "Sahil Khan",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Integrate Stripe",
        description: "Set up Stripe for payment processing.",
        date: "10-05-2025",
        category: "devops",
        priority: "high",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Create Docs",
        description: "Document all endpoints in Postman.",
        date: "11-05-2025",
        category: "documentation",
        priority: "low",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    name: "Neha Verma",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Security Audit",
        description: "Run audit for user access control.",
        date: "08-05-2025",
        category: "security",
        priority: "high",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Improve Loading",
        description: "Optimize lazy loading for dashboard.",
        date: "10-05-2025",
        category: "performance",
        priority: "moderate",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Style Components",
        description: "Use TailwindCSS for consistency.",
        date: "13-05-2025",
        category: "frontend",
        priority: "low",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      }
    ],
  },
  {
    id: 5,
    name: "Vikram Patel",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Build Landing Page",
        description: "Create marketing landing page.",
        date: "07-05-2025",
        category: "design",
        priority: "moderate",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Implement JWT",
        description: "Add JWT authentication.",
        date: "11-05-2025",
        category: "backend",
        priority: "high",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Error Logging",
        description: "Add error logs to services.",
        date: "13-05-2025",
        category: "devops",
        priority: "moderate",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Responsive Footer",
        description: "Fix footer layout on mobile.",
        date: "14-05-2025",
        category: "frontend",
        priority: "low",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "API Rate Limit",
        description: "Add rate limiter to APIs.",
        date: "15-05-2025",
        category: "backend",
        priority: "high",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      }
    ],
  }
];


const admin = [
  {
    id: 101,
    name: "Admin User",
    email: "admin@example.com",
    password: "123"
  }
];




export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin};
}