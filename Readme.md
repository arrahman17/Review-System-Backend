# Course Review System

### Description

Its basically a web-based system. The core idea of the project was to make an application which contains the review for the students who are new to university , and wanted to know about the review for any course , so it is the app which will take review from the student and will use it for the new students

### Features of the project

Student can give Review on a specific course who is considerd senior for that course

Student can check the review of the seniors student who is considerd junior for this course

The reviwed course should be shown to the students with help of visualization in diagram about the course difficulty rate, course material, professor friendliness, course content and so on 

The project contain the home page and info page also

The course name should be given in string and the remaining fields should be in number from 1-5

### Architecture

we used three tier architecture , which is called client server system
in client side student give and check the review of the course 
in server used we database and controller part


### Technology we have used in our project

We basically use the mean stack archieteture for this app like we use Mongodb as the db part , node js for the backend run time enviroment , express for pure backend thing and angular for the getting data from backend and put it on the front end and also we implement the bootstrap them for designing purpose

### Screenshots
- Homepage of the Project
![github-small](https://user-images.githubusercontent.com/41241181/70668016-b06cef00-1c72-11ea-830a-4bd1df23e8cc.png)

- Add Course to the database
![github-small](https://user-images.githubusercontent.com/41241181/70668097-e1e5ba80-1c72-11ea-9eca-db609d8a0e5d.png)

-Overview of the added courses
![github-small](https://user-images.githubusercontent.com/41241181/70668134-fde95c00-1c72-11ea-84dc-a4b4f8840c2e.png)

### Group: Lorem 

* Abdul-Rahman khan

* Bilawal Wajid 

* A.B.M. Rocknuzzaman

* Aalli Mahmood

* Koussay Mizouri

* Muhammad Zeeshan 

* Ghulam Dawood Nasimi


### How to Run the Project.

* How to run Server side module of our well known App "Review - System "

* Open cmd in project folder and type " Npm start"	

* Open another cmd in Client folder and write " ng serve"	Make sure you have the mongo db install on your pc , if not then go to uni due moodle , we already put the installation guide of mongo check that file from start to end , it will help you in the installation of the mongodb

* After installation of the mongo db , open the command prompt and run as the administrator and type mongod , and then open the mongo.exe which is in the bin folder of the mongo db folder

* If you set the path of mongo db globally than you can run mongo from the direct command prompt , no need to route in the mongo db folder 

* Once mongo db is open and set to run it will show in the command prompt that server is connected and ready to run

* Than as mention above open mongo , and for testing write any mongo db command let say show dbs , it will show all the database which are currently exist 

* Than route to the project folder and open cmd and run npm start , it will start the node server and when it shows that that server is starting port : 3000 , it means all is ok and now your back end is running and triggered

* Thats all for the back end part , 


* For the front part you have to follow the same procedure as mention above , this time plus go to the client folder and the open cmd and first install npm install chart.js --save so you can able to see the charts part on the web page , upon doing that pls write ng serve and hit enter , it will compile every thing and once you see compiled successfully please go to the browser and type localhost 4200 and hit enter , now you finally able to see our application

* While running front end pls do not close back end terminal which you run moments ago in the previous step and also dont close the mongo db window


* Thats all how you can run our project

