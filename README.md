# MEAN_todo_app
Note Saving app with CURD operations


## Create Database:

-First created database using the following commands

#### First open command prompt(cmd), write the following command and hit enter. This create a database named "todoList"  

```
use todoList
```

#### Now, wirte the following command to create collection 

```
db.createCollection("tasks")
```

## Installation:
  
- Follow the Setps:
  
#### Download both folders and run following command in each folder  

```
npm install
```

#### After that, run the following commad in "todoListCURD" folder

```
npm install @angular/http
```

## Run Application

- Follow the Setps:

#### First, Open command prompt(cmd), write the following cmd and hit enter and stay running in background 

```
mongod
```
  
#### Secondly, open another command prompt(cmd), goto "api" folder and run the following cmd and stay running in background

```
npm start
```

#### Third, open another command prompt(cmd), goto "todoListCURD" folder and run the following cmd and stay running in background

```
npm run start
```



