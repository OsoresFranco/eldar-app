# Task Management Application

This is a straightforward task management application built with Angular, incorporating NgPrime for UI components, ngx-translate for internationalization, ngx-cookies for cookie management, and Material UI for additional styling options.

## Live Preview
https://66fab7d23273cd1f6ba2ffac--shiny-sundae-31e67b.netlify.app

## Features

* **User Roles:** 
    * **Admin:**
        * Create and manage tasks
        * Create and manage users (both admin and user roles)
        * Access to a dedicated dashboard section
    * **User:**
        * View assigned tasks
        * Update task statuses

* **Dynamic Sections:** 
    * Task deletion functionality (visible only to authorized users)
    * Admin dashboard section (accessible only to admins)

* **Technology Stack:** 
    * **Frontend:** Angular
    * **UI Components:** NgPrime, Material UI
    * **Internationalization:** ngx-translate
    * **Cookie Management:** ngx-cookies
    * **Backend Communication:** Custom services interacting with a Xano API

* **Styling:** 
    * Predominantly custom CSS for colors, layout, and overall visual design

* **Architecture:** 
    * Modular structure for better organization and maintainability

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/OsoresFranco/eldar-app.git
   
2. **Install dependencies:**

   ```bash
   npm install
3. **Run the application:**

   ```bash
   ng serve
   

## Project Structure

-   **`src/app`:** Contains the main application modules and components.
-   **`src/assets`:** Stores static assets like images, fonts, etc.
- 
## Key Modules

-   **`core`:** Core functionalities and services (e.g., `TaskService`, `AuthService`).
-   **`shared`:** Reusable components and pipes.
-   **`modules`:** Feature modules for different sections of the application (e.g., `dashboard`, `tasks`).
   
## Additional Notes

-   **Authentication:** The application uses `ngx-cookies` to manage authentication tokens. You might need to implement a login/registration flow to obtain and store the token.
-   **Internationalization:** The `ngx-translate` library is used for internationalization. Translation files should be placed in the `src/assets/i18n` folder.
