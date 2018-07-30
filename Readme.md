Project Review System

Description

Its basically a web-based system. The core idea of the project was to make an application which contains the review for the students who are new to university , and wanted to know about the review for any course , so it is the app which will take review from the student and will use it for the new students

Features of the project

Student can give Review on a specific course who is considerd senior for that course

Student can check the review of the seniors student who is considerd junior for this course

The reviwed course should be shown to the students with help of visualization in diagram about the course difficulty rate, course material, professor friendliness, course content and so on 

The project contain the home page and info page also

The course name should be given in string and the remaining fields should be in number from 1-5

Architecture

we used three tier architecture , which is called client server system
in client side student give and check the review of the course 
in server used we database and controller part

Technology we have used in our project

We basically use the mean stack archieteture for this app like we use Mongodb as the db part , node js for the backend run time enviroment , express for pure backend thing and angular for the getting data from backend and put it on the front end and also we implement the bootstrap them for designing purpose


Group Lorem 

Abdul-Rahman khan

Bilawal Wajid Ali

ABM Rucknuzzaman 

Mahmood aali

Muhammad Zeeshan 

Ghulam Dawood Nasimi


How to Run the Project.

How to run Server side module of our well known App "Review - System "

then open cmd in project folder and type " Npm start"	

pen another cmd in Client folder and write " ng serve"	Make sure you have the mongo db install on your pc , if not then go to uni due moodle , we already put the installation guide of mongo check that file from start to end , it will help you in the installation of the mongodb

After installation of the mongo db , open the command prompt and run as the administrator and type mongod , and then open the mongo.exe which is in the bin folder of the mongo db folder

if you set the path of mongo db globally than you can run mongo from the direct command prompt , no need to route in the mongo db folder 

once mongo db is open and set to run it will show in the command prompt that server is connected and ready to run

Than as mention above open mongo , and for testing write any mongo db command let say show dbs , it will show all the database which are currently exist 

than route to the project folder and open cmd and run npm start , it will start the node server and when it shows that that server is starting port : 3000 , it means all is ok and now your back end is running and triggered

thats all for the back end part , 


for the front part you have to follow the same procedure as mention above , this time plus go to the client folder and the open cmd and first install npm install chart.js --save so you can able to see the charts part on the web page , upon doing that pls write ng serve and hit enter , it will compile every thing and once you see compiled successfully please go to the browser and type localhost 4200 and hit enter , now you finally able to see our application

while running front end pls do not close back end terminal which you run moments ago in the previous step and also dont close the mongo db window



Thats all how you can run our project
