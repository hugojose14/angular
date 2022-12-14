
<!---
hugojose14/hugojose14 is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->

# Angular For Begginers Course

## 🛠 Skills do you need
Javascript, Typescript, HTML, CSS...

## How to learn angular in 2022

In this file you can learn angular for begginers, for example how do you use routes, environments, login,forms, services, routing, also how to create your first app. 

## What is angular?

Is a framework for create web applications SPA (single page application)

## Who is its creator ? 
- Google 

## What features do it have? 

- Separate frontend and backend of the application
- Simplify code
- It follows the pattern MVC
- Based in components
- Is open source

## What language do it use?
- Typescript

## Why do you use this framework?
- Developtment of apps is very fast (The navegation is same)
- Is modular (reuse)
- Easy maintenance
- Multi platform
- Biggest community
- Steady future 

## What software do you need? 

- Node.js (you can execute javascript of the side server or client)
- Npm (Node package manager)
- Angular CLI (Command Line Interface)
- Visual studio code

## Installation Angular

Install angular with npm
```bash
npm install -g @angular/cli
cd my-project
```

## Create your first project
Run the CLI command ng new and provide the name my-app, as shown here:
```bash
ng new my-app
cd my-project
```

## Run the application
Execute next commands (angular CLI includes a server)

```bash
cd my-project
ng serve --open
```

other alternative is 

```bash
cd my-project
npm start
```

##  Project structure 

![Alt text](https://i.ibb.co/2vtG5DD/Screenshot-2022-12-11-101240.png "Optional title")

## SPA (Single Page Application)

A single page that is loaded in the initial request and then on that page when the user is modifying things are appearing or disappearing

![Aquì va un texto](https://i.ibb.co/7CcNvbk/Screenshot-2022-12-11-111645.png "Probando el titulo")

**AJAX**: Stands for Asynchronous JavaScript And XML.

**JSON**: Javascript object anottation (file for change information between client and server).

## Flow diagram of angular

```mermaid
 graph LR
    id1["App Angular <br/> (main)"]
    id2["Mòdulo raìz <br/> (AppModule)"]
    id3["Componente principal <br/> (AppComponent)"]
    id4["Definiciòn del mòdulo <br/> principal a cargar"]
    id5["Definiciòn del componente <br/> principal a cargar"]
    id6["app.module.ts"]
    id7["Decorador"]
    id8["-Selector </br> -Plantilla (template) </br> -Estilo CSS (style)"]

    
    subgraph two [Flow Diagram Angular]
    direction LR
    id1 --> id2 --> id3
    end
    id4 <--> id1
    id2 <--> id6 
    id5 <--> id2
    id3 --> id7
    id7 --> id8
```
#### Example flow diagram

![Alt text](https://i.ibb.co/vQW3mmQ/Screenshot-2022-12-12-184643333.png "Optional title")

## How to create a component?


```mermaid
 graph TD
    id1["Create components"]
    id2["Handbook"]
    id3["Automatic (CLI)"]
    
    id1 --> id2
    id1 --> id3
    
```

#### Command for create a component 

Open your terminal and run next command
```bash
ng generate component name-component
#short form
ng g c name-component
#Command for create component inline (don't include html or css) 
ng g c name-component -s -t 
    
```

## Interpolation of string 

Interpolation refers to embedding expressions into marked up text. By default, interpolation uses the double curly braces {{ and }} as delimiters.

```html

currentCustomer = 'Maria';
<!--Use interpolation to display the value of this variable in the corresponding component template:-->
<h3>Current customer: {{ currentCustomer }}</h3>

<!--Angular replaces currentCustomer with the string value of the corresponding component property. In this case, the value is Maria.
-->

<p>{{title}}</p>
<div><img alt="item" src="{{itemImageUrl}}"></div>
```

## Property Binding

![Alt text](https://i.ibb.co/bW4RBCB/5555555555555.png)

#### Example: how to use binding? 

![Alt text](https://i.ibb.co/JktV92Y/Example-1.png)

![Alt text](https://i.ibb.co/sHdddr8/Example2.png)

## Event Binding



## Run application (First App)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Feedback

If you have any feedback, please reach out to us at hugo.jose.1@hotmail.com


## References
<a id="1">[1]</a> 
https://angular.io/guide/event-binding

<a id="2">[2]</a> 
https://www.youtube.com/watch?v=FPjFXQf1pqM&list=PLU8oAlHdN5BnNAe8zXnuBNzKID39DUwcO&index=10 (this is the best Angular course)
    

