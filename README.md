# Endless Pixels

[Explore Here](https://endless-pixels.vercel.app/)

Endless Pixels is an **infinite scroll photo gallery** that fetches beautiful, high-quality images from **Unsplash** and displays them dynamically as you scroll down the page. This app offers a smooth user experience with lazy loading and seamless scrolling.

---

## 🚀 Features

-   **Infinite Scroll**: Automatically loads more images as you scroll down.
-   **Dynamic Image Fetching**: Fetches random images from the Unsplash API.
-   **Beautiful UI**: Clean and modern interface displaying high-quality photos.

---

## 🛠️ Tech Stack

-   **Frontend**:

    -   HTML, CSS, JavaScript
    -   Fetch API for getting images
    -   Lazy loading for performance

-   **Backend**:

    -   Node.js + Express
    -   Unsplash API integration via a secure server endpoint

-   **Version Control**:
    -   Git & GitHub

---

## 🔒 Security

-   The Unsplash API key is handled securely via the **backend**.
-   All requests to the Unsplash API are routed through the backend to keep the API key private.

---

## 📂 Project Structure

```
Endless Pixels/
├── backend/
│   ├── server.js               # Express server to handle Unsplash API calls securely
│   ├── .env                    # Environment variables (e.g., UNSPLASH_API_KEY)
│   ├── package.json            # Node.js backend dependencies and scripts
│   └── package-lock.json       # Dependency lock file
│
├── frontend/
│   ├── index.html              # Main HTML file
│   ├── script.js               # Infinite scroll JavaScript logic
│   ├── style.css               # Styling for the app
│   └── assets/                 # Optional images or static assets
│
├── .gitignore                  # Ignores node_modules, .env, etc.
├── README.md                   # This file
```

---

## 🛠️ Installation and Setup

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Itsmesachin98/endless-pixels.git
    ```

2. **Install Backend Dependencies**:
   Go to the `backend` folder and install the dependencies:

    ```bash
    cd backend
    npm install
    ```

3. **Set Up the Environment**:
   Create a `.env` file in the `backend/` directory and add your Unsplash API key:

    ```env
    UNSPLASH_API_KEY=your-unsplash-api-key-here
    ```

4. **Run the Server**:
   Start the backend:

    ```bash
    node server.js
    ```

5. **Open the Frontend**:
   Open `frontend/index.html` in a browser to view the gallery.

---

## 👥 Contributing

Contributions are welcome! If you'd like to improve this project, feel free to fork the repository and create a pull request.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
