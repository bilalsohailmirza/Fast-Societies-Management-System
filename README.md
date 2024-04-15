<a name="readme-top"></a>

<!-- PROJECT LOGO -->
# Fast Student Societies Managment System

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#introduction">Introduction</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation and usage">Installation</a></li>
      </ul>
    </li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This repository is a small prototype of Student Societies Managment System for FAST-NUCES Karachi Campus. It aims to provide events and data managment related to student societies in FAST-NUCES Karachi campus university, and to centralize the process of registering in events and competitions for all student societies. 
The project includes features like browsing events and competitions for users and registering to them. Users can browse the events by browsing into societies, then their respective events and further each competition related to the corresponding event. Every society, event and competition has its own landing page where users can register themselves as well. The code sample also includes the features of creating and deleting societies, events, and participants related data for the Admin. The Admin can create new societies, events, and competitions. All the data is stored in the database and displayed on the Frontend via the REST Api created with Node and Express.

### Built With
<!-- <br> -->

* PostgreSQL v16.2
* Node.js v18.17.0
* Express v4.18.2
* React.js


<!-- GETTING STARTED -->
## Getting Started
To get a local copy up and running follow these simple example steps.

### Prerequisites

* PostgreSQL installed along with pgAdmin
* Node.js installed (preferrabley v16.x and above)

  

### Installation and Usage

**1. Clone the repository to your local machine.**
   ```sh
   git clone https://github.com/bilalsohailmirza/Fast-Societies-Management-System.git
   ```
**2. Set up the database first as it is necessary for the server to run properly. Head over to the **db** folder to access all the database related files.**
    * use the **FSMS.sql** file in the **db** folder to create the database and all the relations.
    * populate the tables in pgAdmin with random data by importing the corresponding csv files from the **CSVs** folder.
    * you can use the **FSMS.pgerd** file to visualize the database schema in pgAdmin's ERD tool and understand how the tables are related.

**3. For Setting up server:**

  ```sh
  cd server
  ```
  ```sh
  npm install
  ```
  * Setup the environment variables in a .env file
    1. PORT (port for the server to run)
    2. PGUSER (your database user)
    3. PGHOST (your databse host)
    4. PGPASSWORD (paswword for the host)
    5. PGDATABASE (name of the database)
    6. PGPORT (port for the database to run)
  
  ```sh
  npm start
  ```

**4. For setting up client, open up new terminal.**
   ```sh
   cd client
   ```
   ```
   npm install
   ```
   ```
   npm run dev
   ```

## Acknowledgments
[Sanjeev Thiyagarajan's PERN Stack tutorial](https://www.youtube.com/watch?v=7qAXvOFhlDc&pp=ygUmcGVybiBzdGFjayB0dXRvcmlhbCBzYW5qZWV2IHRoaXlhZ2FyYW4%3D)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Twitter - [@bilalsohail44](https://twitter.com/bilalsohail44)

Linkedin - [Profile](https://www.linkedin.com/in/bilalsohailmirza)

Project Link: [Fast Societies Mangement System](https://github.com/bilalsohailmirza/Fast-Societies-Management-System)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
