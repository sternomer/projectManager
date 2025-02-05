# Project Manager

Project Manager is a web application for managing projects with document uploads, component tables, and more.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- You have installed Node.js and npm.
- You have installed MySQL and have it running on your local machine.

## Installation

To install and run the project, follow these steps:

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/sternomer/ProjectManager.git
    ```

2. Navigate to the project directory:
    ```bash
    cd ProjectManager/src
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the `config` directory with your database credentials:
    ```plaintext
    # config/.env
    DB_HOST=localhost
    DB_USER=your_db_username
    DB_PASSWORD=your_db_password
    DB_NAME=mydb
    DB_PORT=3306
    ```

## Running the Project

To run the project, use the following command:

```bash
npm run dev


The npm run dev command will also run the database initialization script before starting the development server.

Manual Configuration for Database in API
For the API routes, the database configuration is set manually. Ensure that the database configuration in src/pages/api/router.js matches your environment settings:

# const dbConfig = {
#   host: 'localhost',
#   user: 'root',
#   password: '123456',
#   database: 'mydb',
#   port: 3306
# };