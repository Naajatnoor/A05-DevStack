# devStack

**devStack** is a modern and user-friendly web application that helps developers explore different technologies and build their own personalized development stack.

Users can explore technologies from different categories such as Frontend, Backend, Database, Cloud, and Development Tools. Each technology provides useful information including its description, category, difficulty level, rating, badge, and icon.

Users can then select their preferred technologies and add them to their own stack. They can also remove individual technologies or clear the entire stack.

## Live Demo

🔗 **Live Website:** inquisitive-yeot-ada563.netlify.app
🔗 **Live Website:** https://devstack-sooty-gamma.vercel.app

## GitHub Repository

🔗 **GitHub:** https://github.com/Naajatnoor/A05-DevStack

---

## Features

### 1. Explore Technologies

Users can explore a collection of different development technologies.

Each technology card displays:

* Technology icon
* Technology name
* Description
* Category
* Difficulty level
* Rating
* Badge
* Add to Stack button

Technology information is loaded dynamically from a JSON file instead of being hardcoded into the components.

### 2. Build Your Own Stack

Users can select technologies and create their own development stack.

The selected technologies are displayed in the **Your Stack** section along with the total number of selected technologies.

A technology cannot be added more than once.


### 3. Manage Your Stack

Users can manage their selected technologies easily.

They can:

* Remove a single technology
* Remove all selected technologies
* See the total number of selected technologies
* Get notifications when technologies are added or all removed

### 4. Toast Notifications

The project uses **React Toastify** to provide interactive notifications.

Notifications are shown when:

* A technology is added
* A duplicate technology is attempted to be added
* A technology is removed
* All technologies are removed


### 6. Loading State

A loading state is displayed while the technology data is being fetched from the JSON file.

---

## Technologies Used

* **React** – Used to build the user interface and reusable components.
* **TypeScript** – Used for type safety and better code organization.
* **Tailwind CSS** – Used for styling and responsive layouts.
* **DaisyUI** – Used for UI components and styling.
* **React Toastify** – Used for toast notifications.
* **Vite** – Used as the development and build tool.
* **JSON** – Used to store and load technology information.

---

## React Concepts Used

This project was built using several important React concepts:

* Components
* Props
* State Management
* `useState`
* `use()` API
* Event Handling
* Conditional Rendering
* Array Methods
* JSON Data Handling
* TypeScript Interfaces
* Component Communication
* React Suspense

---

## Project Structure

```text
A05-DevStack/
│
├── public/
│   └── data.json
│
├── src/
│   ├── assets/
│   │   ├── logo-text.png
│   │   └── banner-stack.png
│   │
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Banner.tsx
│   │   ├── Footer.tsx
│   │   ├── Footer.css
│   │   ├── Technology/
│   │   │   ├── Technology.tsx
│   │   │   └── TechnologyCard.tsx
│   │   │
│   │   └── Stack.tsx
│   │
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── type.ts
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Deployment

The project is deployed using **Netlify** & **Vercel**

---

## Main Functionalities

### Add Technology

When a user clicks **Add to Stack**, the selected technology is added to the stack.

```text
Technology Card
      ↓
Add to Stack
      ↓
Technology added
      ↓
Your Stack updated
      ↓
Toast notification
```

### Prevent Duplicate Technology

Before adding a technology, the application checks whether it already exists in the stack.

```text
Already exists?
     ↓
   Yes → Do not add
     ↓
Toast notification
```

### Remove Technology

Users can remove a selected technology from their stack using the remove button.

### Remove All

The **Remove All** button clears all selected technologies from the stack.

---

## User Interface

The application contains the following main sections:

### Navbar

The navigation bar contains:

* Dev Stack logo
* Home
* Technologies
* Projects
* About
* Contact
* Sign In
* Sign Up

### Hero Section

The hero section introduces the Dev Stack application and provides buttons for exploring technologies.

### Technology Section

This section displays all available technologies in responsive cards.

### Your Stack

This section displays the technologies selected by the user.

### Footer

The footer contains:

* Dev Stack information
* Social links
* Product links
* Company links
* Legal links
* Copyright information

---

## React Questions & Answers

### 1. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component.

**State** is used to store and manage data inside a component that can change over time.

---

### 2. What is the useState hook?

`useState` is a React Hook used to create and manage state in a functional component.


---

### 3. What is the useEffect hook and when should you use it?

`useEffect` is a React Hook used to perform side effects in a component.

For example, it can be used for:

* Fetching data
* Calling APIs
* Updating the document title
* Setting timers
* Working with external systems

---

### 4. How do you conditionally render something in React?

Conditional rendering means displaying different UI depending on a condition.

For example:

If the stack is empty, the first message is displayed. Otherwise, the second message is displayed.

---

### 5. How do you share state between components in React?

State can be shared by keeping the state in the nearest common parent component and passing it to child components using props.

---

### 6. How is React Router used in a React project?

React Router is used to create navigation between different pages or routes in a React application

It allows users to move between pages without completely reloading the website.

---

### 7. What is the difference between controlled and uncontrolled components?
.
A **controlled component** is controlled by React state.

An **uncontrolled component** keeps its value inside the DOM and is usually accessed using a `ref`.

Controlled components are generally useful when we need to track and validate form data using React state.

---

## Project Purpose

The main purpose of this project is to practice modern React and TypeScript development by building a real-world interactive application.

Through this project, I practiced:

* Component-based development
* State management
* Props
* Event handling
* Conditional rendering
* Array methods
* JSON data fetching
* TypeScript
* Responsive design
* Toast notifications
* Git and GitHub
* Deployment

---

## Author

**Najat Prapti**

B.Sc. in Computer Science & Engineering
Leading University

---

## License

This project was created for educational and assignment purposes.
