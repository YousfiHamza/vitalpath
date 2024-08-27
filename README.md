# VitalPath • Streamlined Patient Management Platform

<p align="center">
  <img src="https://vitalpath.vercel.app/assets/icons/logo-icon.svg" height="135" width="135" alt="VitalPath Logo" />
</p>

## 🩺 Overview

**VitalPath** is a comprehensive healthcare platform designed to streamline patient management processes. It simplifies tasks ranging from patient registration and appointment scheduling to secure medical record handling, allowing healthcare providers to focus on delivering quality care. The platform is built with a user-friendly interface that ensures a smooth experience for both providers and patients, utilizing modern technologies for high performance and reliability.

![React](https://img.shields.io/badge/-React-black?style=for-the-badge&logoColor=white&logo=react&color=blue)
![Next](https://img.shields.io/badge/-NextJs-black?style=for-the-badge&logo=next.js&color=a0a0a0)
![Tailwind](https://img.shields.io/badge/-tailwind-black?style=for-the-badge&logo=tailwindcss&color=36d2fd)
![Appwrite](https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=red)
![Twilio](https://img.shields.io/badge/-Twilio-black?style=for-the-badge&logoColor=white&logo=twilio&color=ff0000)

🌐[Live Demo](https://vitalpath.yousfi.dev)

---

## 📜 Table of Contents

- [Features](#-features)
- [Technologies](#-technologies)
- [Installation](#-installation)
- [Contributing](#-contributing)
- [Contact](#-contact)

---

## ✨ Features

- **Patient Registration**: Simple and efficient patient onboarding process.
- **Appointment Scheduling**: Easy scheduling and management of appointments.
- **Medical Records Management**: Secure handling and storage of patient medical records.
- **User-Friendly Interface**: Smooth and intuitive UI built with Next.js, TypeScript, Tailwind CSS, and Shadcn components.
- **User Management**: Secure user and patient data management with Appwrite.
- **SMS Notifications**: Integration with Twilio to send appointment reminders and updates to patients.

---

## 🛠 Technologies

- **Frontend**:

  - **Next.js** with **TypeScript**
  - **Tailwind CSS** for styling
  - **Shadcn** for UI components

- **Backend**:

  - **Appwrite** for user, patient data, and appointment management
  - **Twilio** for SMS notifications

- **DevOps**:

  - **Vercel** for deployment
  - **GitHub** for version control

---

## 🚀 Installation

To run Pixeluxe locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YousfiHamza/vitalpath
   ```
2. **Navigate to the project directory**:
   ```bash
   cd vitalpath
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a `.env.local` file** and add your environment variables:
   ```plaintext
    APPWRITE_PROJECT_ID=
    APPWRITE_API_KEY=
    APPWRITE_DATABASE_ID=
    APPWRITE_PATIENT_COLLECTION_ID=
    APPWRITE_DOCTOR_COLLECTION_ID=
    APPWRITE_APPOINTMENT_COLLECTION_ID=
    NEXT_PUBLIC_APPWRITE_BUCKET_ID=
    NEXT_PUBLIC_APPWRITE_ENDPOINT=
    NEXT_PUBLIC_ADMIN_PASSKEY=
   ```
5. **Run the development server**:
   ```bash
   npm run dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 🤝 Contributing

We welcome contributions! To get started:

1. **Fork the repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature-branch
   ```
3. **Make your changes**.
4. **Submit a pull request**.

---

## 📧 Contact

For any questions, feel free to reach out:

- **LinkedIn**: [Hamza Yousfi](https://www.linkedin.com/in/yousfihamza)
- **Portfolio**: [hamza.yousfi.dev](https://hamza.yousfi.dev)
- **Email**: [hamza@yousfi.dev](mailto:hamza@yousfi.dev)
