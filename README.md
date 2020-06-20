#Evaluate a News Site utilizing a Natural Language Processor API

This project brought multiple lessons together, calling upon existing learnings
including: HTML, CSS, JavaScript, and WebAPIs and newly learned Webpack skills.

## To run program

* Clone the repo to your computer
* ```bash cd {cloned directory}``` into the cloned directory
* Run ```bash npm install``` on your terminal
* Utilize the scripts to build and start the program
  *  ```bash npm run build-prod```
  *  ```bash npm run start```
* Then open the server on [localhost:8080](https://localhost:8080)

## What does it do?

Enter a valid URL into the data field and the Aylien API will respond with the
sentiment of the article.  It will inform if it is a positive or negative article,
and in some cases will determine the subject matter (within specific domains).
The response will also indicate the level of confidence for subjectivity and
polarity.  The response will appear below the form and in the terminal.
