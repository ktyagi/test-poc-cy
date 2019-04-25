# test-poc-cy

Download nodejs and install it 

Clone this repository 

Run command "npm install" to install dependencies 

Navigate to file (\testing-poc\cypress.json) and update facebook username and password  

Navigate to file (\testing-poc\cypress\integration\login.feature ) either update data for below lines in each scenarios or comment :

Given User "Tyagi Kumar Kuldeep" is logged in successfully     
Then User sees "tyagitester" in the url



run command "npm run cy:open" (To run test in GUI mode),
wait for GUI runner to come up,
click on login.feature file to run test scenarios.

To run test in headless mode, run command "npm run cy:run"
