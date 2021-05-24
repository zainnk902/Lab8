# Lab8_Starter
Zain Khan and Tejasvin Mukesh Lab 8
## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter) <br /> 
1

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user. <br /> 
No, end to end testing would be more useful here, sicne you are really testing multiple functionalities, since a message requires a user to write then send a message, and the other user must see this message. Unit testing is more useful for testing an isolated function.
3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters <br /> 
Yes. This is a simple test, that will only be testing the max message length functionallity of a program. This is easily isolated, and can be easily tested with usnit tests since there is an expected value for a max length, and we just need ot confirm that the actual length is the same, which is really easy with unit testing.
4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true? <br /> 
If headless is set to true, then it will run the tests we make without a browser UI, meaning it won't run the tests on the actual browser we have.
5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case? <br /> 

beforeAll(async () => {await page.goto('http://127.0.0.1:5500/#settings'); <br /> 
                       await page.waitForTimeout(1000); <br /> 
});<br /> 