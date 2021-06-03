# lux-real-estate
A full stack real estate app

OVERVIEW

This application lets users first sign up and log in to use the site. The site requires users to be authenticated before creating a property listing or browsing
more than the main page. There are two prominent models featured in Lux Real Estate - "Users" and "Properties". "Properties" offers full CRUD functionality as 
well as some basic RESTful routing. The "Users" model is simply to showcase some authentication, and users must be dropped directly from the database, as there
is no admin feature at this time. A few precautions have been taken to encrypt and hash passwords as well. This is purely done as a best practice, and will be
used as a building point for future feature updates or as a reference for other projects that require secure passwords.

# Frontend Technologies
The frontend utilizes bootstrap for the main page carousel and other prominent buttons throughtout Lux Real Estate. I then added my own styling to the bootstrap
components and "tweaked" as needed. I recognized that while convenient, alot of sites and web applications that use bootstrap tend to look similar. I wanted
Lux Real Estate to have it's own "vibe" and look to it. 

In addition to Bootstrap, Font-Awesome was used for the social media icons in the footer section as well as the review stars. The rest of the frontend is
comprised of good ol' HTML, CSS and JavaScript. 

The landing page is more of a static billboard with navigation to dynamic pages. I chose this approach to try and "sell" Lux Real Estate's services and market the
application to a wide audience. Then wrap the experience in a relaxing, modern design. (I like the look of rounded cornerns, specifically 15 - 25px of border radius.)

I mention marketing so now, of course, i should also mention this site is not monitized in any fashion. This is purely a learning exercise and portfolio showpiece.

# Backend Technologies

Node.js is of course a necessary requirement for any server side communications. I decided to look at older projects and learning materials that incorporated Node.js.
I opted for this approach in favor of learning PHP or another server-side language as I am heavily invested in JavaScipt at this time. I also used Mongoose, Express,
and MoongDB Atlas for the supportive libraries and database. More dependency details can be viewed in the package.json file.

# Additional Details

I opted for a full-stack approach as I wanted to familiarize myself with building simple UI components around the data being passed to me from the backend.
Focusing on a more object-oriented approach could have been another great option, but didn't cover the wide knowledge base I wanted to practice.
I really wanted to see what considerations needed to be made on the behalf of the backend developer in order to get data to and from destination points 
within the application, and allow myself to be interested in full-stack development.

# Credits

The backend of Lux Real Estate is made predominantly through older in-class projects and materials made available to me while attending General Assembly's
Software Engineering immersive. This was necessary to setup a functional backend to serve my assets from my database. I have changed the model's schema,
the overall application theme in relation to the backend data, data end-points, and functionality of the site.

The frontend just kind of fell together as I started to throw the UI together. I took inspiration from looking at sites like zillow.com and some of my older projects.
The overall look and design was built by me, save for the testimonials section. The Testimonials tutorial was provided courtesy of 
DarkCode on Youtube. https://www.youtube.com/watch?v=zkyIVFoLxgY. 

I wrote everything out line by line to understand more of how the tutorial was positioning the UI elements in relation to one another. This was not necessarily a copy
paste job, as it required adjustment and my own css to be used.

 




