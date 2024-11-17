# 🚀 🔐 Secret Messages 🔐

This project provides a simple Node.js application that allows users to encrypt and decrypt text messages using the Advanced Encryption Standard (AES) algorithm. It offers a straightforward interface for securing sensitive information.

---

## ✨ Features

- 🔒 **Text Encryption**: Encrypt plain text messages to secure sensitive information.
- 🔓 **Text Decryption**: Decrypt previously encrypted messages to retrieve the original text.

---

## 📂 Project Structure

```plaintext
secret_messages/
├── node_modules/
├── .env
├── .gitignore
├── README.md
├── app.js
├── package-lock.json
├── package.json
```

---

## 🛠️ Getting Started

Follow these steps to set up and run the project locally:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Mosope20/secret_messages.git
```

### 2️⃣ Navigate to the Project Directory

```bash
cd secret_messages
```

### 3️⃣ Install Dependencies

Make sure Node.js is installed on your system. Then, run:
```bash
npm install
```

### 4️⃣ Set Up Environment Variables

Create a .env file in the root directory to store sensitive information like JWT secret keys. For example:
```bash
SECRET_KEY=your_secret_key_here
```

### 5️⃣ Run the Application
start the server with:
```bash
npm start
```
### 🎉 The application should now be running, and you can use it to encrypt and decrypt messages.

---

## 📡 API Endpoints
- GET /encrypt: Input the plain text you wish to encrypt. The application will return the encrypted message.
- GET /decrypt: Input the encrypted message. The application will return the original plain text.

---

## 📦 Dependencies
- express: Web framework for Node.js.
- crypto: Node.js built-in module for cryptographic functions.
- dotenv: Loads environment variables from a .env file.

---

## 🌟 Contribution Guidelines
I ❤️ contributions! If you'd like to contribute:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Submit a pull request with a clear description of your changes.

---

## 📜 License
This project is licensed under the MIT License. Feel free to use it as you like!

---

## ✍️ Author
Mosope20
GitHub: [Mosope20](github.com/Mosope20/)




