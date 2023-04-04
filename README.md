# Mercado-Libre-Automation-Test
Cypress automation test

### Introduction
- Install Node JS. It can be downloaded from your browser.

- Install Cypress. You could use Visual Studio Code and type in terminal:

`$ npm init`

then:

`$ npm install cypress --save -dev`

- Download the repository and open the folder with Visual Studio Code.

- Inside the folder type:

`$ npx cypress open`

- Click on E2E Testing and then Start E2E Testing in Chrome or any other browser.

- Click on spec.cy.js

![imagen](https://user-images.githubusercontent.com/102199242/229812535-b38873b3-68f1-4bcb-b224-a0ac68c0c985.png)

- The test should start.

=================================================================

**Test steps:**

    - Enter the website  
    - Select México as a country  
    - Search for the term “playstation 4”  
    - Filter by condition “Nuevo”  
    - Filter by location “Distrito Federal”  
    - Order by “mayor a “menor precio”  
    - Obtain the name and the price of the first 5 products   
    - Print these products in the console  
