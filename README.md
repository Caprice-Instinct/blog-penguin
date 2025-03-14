# 🐧 BlogPenguin

BlogPenguin is a modern, user-friendly blog web application that allows users to sign up, log in, log out, and engage with blog content. Users can create their own blog posts, view posts from other users, and manage their personal articles on their dashboard.

## 🚀 Live Demo
Check out the live application here: [BlogPenguin](https://blog-penguin.vercel.app/)

## ✨ Features
- 📝 **User Authentication** - Sign up, log in, and log out seamlessly.
- 📖 **Browse Blog Articles** - Read blog posts from various users.
- ✍️ **Create & Manage Posts** - Users can write, edit, and delete their own blog articles.
- 📂 **Personalized Dashboard** - View and manage personal blog posts.
- 🌍 **Responsive Design** - Works on all devices, including mobile, tablet, and desktop.

## 🛠️ Technologies Used
- **Next.js 15** - Framework for building a fast and dynamic frontend.
- **React 19** - Component-based UI library.
- **Tailwind CSS** - Styling for a sleek and modern interface.
- **ShadCn** - For resuable UI Components.
- **Kinde Authentication** - Secure user authentication.
- **Vercel** - Deployment platform for hosting the application.

## 📌 Installation & Setup
To run BlogPenguin locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/blogpenguin.git
   cd blogpenguin

2. **Install dependencies:**
   ```sh
   npm install

   3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and configure it with the required API keys and credentials.

   ```plaintext
   NEXT_PUBLIC_KINDE_CLIENT_ID=your_kinde_client_id
   NEXT_PUBLIC_KINDE_ISSUER_URL=your_kinde_issuer_url
   NEXT_PUBLIC_KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
   SANITY_PROJECT_ID=your_sanity_project_id
   SANITY_DATASET=your_sanity_dataset
   SANITY_API_VERSION=2023-01-01

4. **Run the development server:**  
   Run the following command to start the development server:  

   ```sh
   npm run dev

5. **Open in your browser:**  
   Once the development server is running, open your browser and go to:  
   http://localhost:3000/

You should now see BlogPenguin running locally.

6. **Build the application (optional):**  
If you want to create an optimized production build, run:
    ```sh
    npm run build


7. **Run in production mode (optional):**  
   After building the application, you can start it in production mode with:  
   ```sh
   npm start

8. **Deploy (optional)🚀**
    To deploy the application to Vercel, use the following command:
    ```sh
   vercel



Enjoy blogging with 🐧 BlogPenguin! 🚀

## Lovely Coding!