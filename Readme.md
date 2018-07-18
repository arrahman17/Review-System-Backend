The core idea of the project was to make an application which contains the review for the students who are new to university , and wanted to know about the review for any course , so it is the app which will take review from the student and will use it for the new students

We basically use the mean stack archieteture for this app like we use Mongodb as the db part , node js for the backend run time enviroment , express for pure backend thing and angular for the getting data from backend and put it on the front end and also we implement the bootstrap them for designing purpose



Flow of the project , application , how does it work

When user was on the courses page , user have to enter the name of the course and then fill up the review part of the course and click addcourse button , upon doing that the course will be added and then on the reviewcourse page all the courses which was entered in the db will show and going to the visualize page finally the graphs will be shown that show the digramaticall results of the review , which are more visible and helpful for the students to understand the actual reviews



How to run Server side module of our well known App "Review - System "
-then open cmd in project folder and type " Npm start"	+
-open another cmd in Client folder and write " ng serve"	+Make sure you have the mongo db install on your pc , if not then go to uni due moodle , we already put the installation guide of mongo check that file from start to end , it will help you in the installation of the mongodb
+
+After installation of the mongo db , open the command prompt and run as the administrator and type mongod , and then open the mongo.exe which is in the bin folder of the mongo db folder
+
+if you set the path of mongo db globally than you can run mongo from the direct command prompt , no need to route in the mongo db folder 
+
+once mongo db is open and set to run it will show in the command prompt that server is connected and ready to run
+
+Than as mention above open mongo , and for testing write any mongo db command let say show dbs , it will show all the database which are currently exist 
+
+than route to the project folder and open cmd and run npm start , it will start the node server and when it shows that that server is starting port : 3000 , it means all is ok and now your back end is running and triggered
+
+thats all for the back end part , 


for the front part you have to follow the same procedure as mention above , this time pls go to the client folder and the open cmd and first install npm install chart.js --save so you can able to see the charts part on the web page , upon doing that pls write ng serve and hit enter , it will compile every thing and once you see compiled successfully please go to the browser and type localhost 4200 and hit enter , now you finally able to see our application

while running front end pls do not close back end terminal which you run moments ago in the previous step and also dont close the mongo db window



Thats all how you can run our project
