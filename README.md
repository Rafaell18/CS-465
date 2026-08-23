**CS 465 Full Stack Development Portfolio
Travlr Getaways**

Travlr Getaways is a full-stack web application built using the MEAN stack: MongoDB, Express, Angular, and Node.js. The web application contains a customer site for looking at all the available trips and an admin site on a single page to manage the trips. In the last phase of the development process, JWT was used for the administrator's authentication.

**Architecture**

In the course of developing this app, I employed Express HTML, JavaScript, and Angular SPA as a solution for the frontend development. Customer-facing side has an implementation with Express, Handlebars templates, HTML, CSS, and JavaScript. In this case, Express creates pages on the server, after that, it sends the ready HTML pages to the browser, which is very effective when we need to show trips information to our customers.

Administrative side has a solution with Angular SPA. In contrast to full reload of a page every time the user does some actions, Angular refreshes only necessary elements on the page. Also, Angular application is modularly designed, and divided into components, services, models, and routes. It makes administrative part much more interactive. JavaScript and TypeScript languages provide the logic of actions in the frontend solutions.

The backend has chosen MongoDB due to its flexibility and ability to be used as NoSQL, where data is stored in a document form akin to JSON. The fields within the trip record include the trip code, name, resort, duration, price, picture, and description. This is a good fit for MongoDB, which will make it easier to store and fetch trip data without having to use a rigid relational table design.

**Functionality**

Despite some similarities between JSON and JavaScript, there are significant differences between the two technologies. In particular, JavaScript is a programming language that allows for coding app behavior and logic while JSON is a text data format that helps organize and transfer data. JSON stores data without any logic or functions that are typical of programming languages.

The frontend and backend of the Travlr Getaways web application are connected via JSON. The Angular frontend makes HTTP requests to the Express API and receives trip data in JSON format from the API. The Angular frontend turns the JSON data into objects and renders it using components. Trip data is submitted to the Express API from the frontend in JSON format by administrators when creating/editing trips.

In order to increase the efficiency of my project I performed several refactorings in it. One of them included putting the trip data into MongoDB from a local JSON file, as it would help me manage my data through the API. Another refactoring consisted in splitting API routes, controllers and database models into separate files rather than putting all the application logic in one file. Finally, in the Angular app I decided to create a trip-card component to reuse it for every trip instead of copying the same HTML. Also, I decided to create a trip-data service in order to separate API request logic from my components.

The use of reusable UI components provides consistency because every trip has the same look and functionality. Also, it saves me some effort on writing duplicated code. If I want to change the design of a trip card, I need to do it only once.

**Testing**

The full-stack application used HTTP methods and API endpoints to communicate between the front end, back end, and database. These methods include GET for fetching data, POST for posting new data, and PUT for editing data. In this case, the endpoints such as /api/trips and /api/trips/:tripCode made it possible to fetch, post, and edit the data regarding trips. :tripCode refers to the unique trip whose data is requested.

In testing the endpoints of the API, I used Postman and the angular administrative app. In Postman, I would choose the right HTTP method, enter the endpoint URL, send the request data where applicable, and then analyze the status and JSON body of the response. I tested fetching all trips, fetching one trip, posting one trip, and putting/editing one trip. I also tested the front end app to check whether data fetched from the API is well-displayed and the changes stored in MongoDB.

Security brought yet another aspect to testing. In the case of registration and login endpoints, the authentication of user data is done, and successful login provides a JSON Web Token (JWT). For all secured POST and PUT requests, the token is required in the header in Bearer mode. I conducted tests on secured requests with and without a token present. If no token was present, an unauthorized response was obtained, whereas if a correct token was present, the request was allowed. This proved that users can see information about trips, whereas changes can be made only by authenticated administrators.

**Reflection**

This course provided me with insight into how various pieces of a full stack application fit together. Prior to this project, I had limited experience in connecting frontend interfaces with APIs and databases. Now I have more knowledge about server-side routing, frontend components that can be reused, RESTful APIs, database models, authentication, and testing.

I gained hands-on experience working with MongoDB, Express, Angular, Node.js, TypeScript, JavaScript, JSON, Mongoose, Postman, Git, and GitHub. I also learned how to troubleshoot various problems including wrong routes, missing images, mistakes in database models, authentication errors, and problems with the interaction between the frontend and the backend.

These are skills which I will use to achieve my career ambition of becoming a data analyst, but at the same time enhance my capabilities in software development. Knowledge about databases, API’s, data structures, testing and application design will allow me to work with data driven systems and cooperate with software development teams. Doing a project of a full stack application will be a demonstration of my expertise, problem solving skills and project implementation from scratch.
