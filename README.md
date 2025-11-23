Modern Portfolio - Shathish Kumaran S

A high-performance, cinematic personal portfolio website built with React, Vite, Tailwind CSS, and GSAP. This portfolio features advanced animations, a sleek editorial design, and a fully functional contact system.

Features

Cinematic Animations: Advanced entrance and scroll animations using GSAP & ScrollTrigger.

Responsive Design: Fully optimized for Mobile, Tablet, and Desktop experiences.

Bento Grid Layout: Modern, modular grid layout for the "Extras" (Activities & Hobbies) section.

Horizontal Scroll: "Awwwards-style" horizontal scrolling for the Projects gallery on desktop.

Glassmorphism: Premium glass effects on cards, navigation, and modals.

Interactive Certifications: A clean list view with hover-reveal preview images.

Functional Contact Form: Integrated with EmailJS for real-time email delivery directly from the frontend.

Tech Stack

Frontend: React.js (Vite)

Styling: Tailwind CSS

Animations: GSAP (GreenSock Animation Platform)

Icons: Lucide React, React Icons

Email Service: EmailJS

Installation & Setup

Clone the repository

git clone [https://github.com/your-username/portfolio.git](https://github.com/your-username/portfolio.git)
cd portfolio

Install Dependencies

npm install

Install Required Packages
Ensure you have the specific animation and utility libraries installed:

npm install gsap lucide-react react-icons @emailjs/browser

Run the Development Server

npm run dev

EmailJS Configuration

To make the Contact Form work, you need to set up an account at EmailJS.

Create an account and set up a Service (e.g., Gmail).

Create an Email Template with fields for {{name}}, {{email}}, {{message}}, and {{time}}.

Go to src/components/Contact.jsx and update the handleSubmit function with your credentials:

await emailjs.send(
"YOUR_SERVICE_ID", // Replace with your Service ID
"YOUR_TEMPLATE_ID", // Replace with your Template ID
{ ... },
"YOUR_PUBLIC_KEY" // Replace with your Public Key
);

Project Structure

src/
├── assets/ # Place your images here (certificates, project shots, avatar)
├── components/ # React Components
│ ├── NavBar.jsx # Responsive Glass Navbar
│ ├── HeroSection.jsx # Parallax Hero with creative typography
│ ├── About.jsx # Sticky scroll layout for Intro & Education
│ ├── Skills.jsx # Accordion/Grid style skill display
│ ├── Projects.jsx # Horizontal scroll gallery
│ ├── Certifications.jsx # Editorial list with hover previews
│ ├── Extras.jsx # Bento grid for Hobbies/Activities
│ └── Contact.jsx # Dark footer with functional form
├── App.jsx # Main entry point assembly
└── main.jsx # DOM rendering

<p align="center">
Built with ❤️ by Shathish Kumaran S
</p>
