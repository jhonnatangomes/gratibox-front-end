# Gratibox

Welcome to gratibox, a delivery application that aims to deliver healthy products to its customer. Customer can choose which types of products he/she would like to receive and every week or month a new package with random products will be delivered.

<p align="center">
<img src="./src/assets/print.png"/>
</p>

## How to run

First, clone git repository into your computer:

    git clone https://github.com/jhonnatangomes/gratibox-front-end

Then, enter the project directory and install dependencies with npm:

    cd gratibox-front-end
    npm i

Now, to start project do:

    npm start

You can also visit the deployed version for this project [here].

#### Note:

This project depends on a back-end to function properly. In order to download and run its back-end, head over to https://github.com/jhonnatangomes/gratibox-back-end and follow the instructions there.

#### About delivery reviews:

In order to test this feature, you should populate the database by inserting values in the deliveries table. Just insert a valid user id and a date and you will see delivery data in front-end. You can do so in database by doing like in the example below:

    INSERT INTO deliveries (user_id, date) VALUES (1, '2021-11-20'), (1, '2021-11-10'), (1, '2021-11-01');

If you wanna test without inserting anything in database, user "jhonn@teste.com" with password "123" already has two available deliveries for you to review.

[here]: https://gratibox-front-end.vercel.app
