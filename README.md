# springboot-ngrx-data

Spring Boot with NgRx Data in Angular 6
This project demonstrates the use of Spring Boot with Angular 6 and NgRx Data lib on top of NgRx.
Find the lib here : https://github.com/johnpapa/angular-ngrx-data

## Install

Clone this repository

```bash
git clone https://github.com/aboudard/springboot-ngrx-data
cd springboot-ngrx-data
```

The demo app is based on the Angular CLI. You may want to install the CLI globally if you have not already done so.

```bash
npm install -g @angular/cli
```

Install the npm packages

```bash
cd src/angular
npm install
```

## Runnning

Just run the build (in watch mode if you plan to work on sources)
```bash
ng build --dev --watch
```

Now run the Spring Boot server
```bash
mvn spring-boot:run
or
mvn spring-boot:start
```

Open your localhost http://localhost:8080

## Alternative with json-server
If you want to use the json server mock database just follow these instructions :
- Install json-server
```bash
npm install -g json-server
```

- Kill the Spring server we will use the Angular Cli
- Run the commands :
```bash
cd src/angular
npm run start
npm run dbmock
```

Open your localhost http://localhost:4200

- Be sure the root path is correct in the /store/app-store.module.ts file :
```javascript
// TODO : change this config when using json-server or Spring Boot Data
const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'api'
};
```

## Follow the original instructions about NgRx Data
Check [the original instructions](https://github.com/johnpapa/angular-ngrx-data/blob/master/README.md) about monitoring with Redux Devtools and other details
