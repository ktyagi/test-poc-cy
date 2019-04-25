# test-poc-cy

Download nodejs and install it 

Clone this repository 

Run command "npm install" to install dependencies 

Navigate to file (\testing-poc\cypress\integration\common\beforeEach.js) and give facebook username and credential in login method 

Navigate to file (\testing-poc\cypress\integration\login.feature ) either comment this line (Given User "Tyagi Kumar Kuldeep" is logged in successfully)
in all scenarios or change the text to whatever is displayed on top right corner after user logged in and click on home page in FB

run command "npm run cy:open" (To run test in GUI mode),
wait for GUI runner to come up,
click on login.feature file to run test scenarios.

To run test in headless mode, run command "npm run cy:run"
