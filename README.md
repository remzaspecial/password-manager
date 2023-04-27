# Password Manager

This is a password management application created using Node.js, Express, and MongoDB.

## Installation

1. Clone the repository using the command:

   ```
   git clone https://github.com/remzaspecial/password-manager.git
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file and fill it with your environment variables:

   ```
   PORT=3000
   DB_CONNECTION_STRING=mongodb://user:password@localhost:27017/password-manager?authSource=admin
   JWT_SECRET=mysecret
   ```

4. Start the application:

   ```
   npm run build
   npm start
   ```

## Usage

After installation and starting the application, you can open it in your browser at `http://localhost:3000`.

You can create new accounts, add new passwords, and manage them.

## Technologies

* Node.js
* Express
* MongoDB

## Author

Rustam Ramazanov

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/remzaspecial/password-manager/blob/dev/LICENSE) file for details.
