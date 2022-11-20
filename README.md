# Work-Day-Scheduler
DESCRIPTION:
A simple calendar application that allows users to schedule and save events for every hour of the current day. This app runs in the browser and features dynamically updated HTML and CSS with the power of jQuery.
Check out the deployed website here: https://jelysecalkum.github.io/Work-Day-Scheduler/
Or take a look at the project files in my GitHub repository here: https://github.com/JelyseCalkum/Work-Day-Scheduler


PROJECT SUMMARY:
The site is built using Bootstrap as a CSS framework. The use of Bootstrap minimizes the need for media queries.
Google Fonts allows the usage of custom fonts that do not have to be installed on the user's machine.
Font Awesome allows for the usage of custom icons.
jQuery powers the dynamic rendering of the html content based on user input.
Day.js is used to manipulate date values for historic data extraction from APIs.

USAGE:

USER STORY
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

ACCEPTANCE CRITERIA
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar:
![main page](https://user-images.githubusercontent.com/115381607/202925415-371eca7d-2c45-497c-b0ca-9cc6dc9e5c59.png)

WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future:
![Screenshot 2](https://user-images.githubusercontent.com/115381607/202925461-2e7a459e-512a-4b92-8a0d-20bd8f2eec14.png)

WHEN I click into a time block
THEN I can enter an event:
![Screenshot 3](https://user-images.githubusercontent.com/115381607/202925563-de378656-6152-4da6-96e7-78f94dc0a9ac.png)


WHEN I click the save button for that time block
THEN the text for that event is saved in local storage:
![Screenshot 4](https://user-images.githubusercontent.com/115381607/202925630-385ca0ae-0a52-4597-9baa-303b12c31725.png)

WHEN I refresh the page
THEN the saved events persist

CREDITS:
Thank you to UofO's bootcamp for providing the starter code for this project and providing me with the knowledge needed to successfullly complete it.

LICENSE:
MIT License


