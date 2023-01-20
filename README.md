# Email Displayer

email-displayer is a little server you can run that updates an index.html file on post.

Use this for easier email testing. Might need to use ngrok if you want to hit it from inside a docker container.

## 1

`npm i`

## 2

`nodemon server.js`

## 3 (if needing to hit within a docker container or remotely)

`ngrok http http://localhost:6666`

## 4

Install the liveserver vscode extension if you don't have it already

## 5

right click on index.html and select Open with Live server

## 6

Use in an application like this:
`axios.post('<ngrokurl> OR http://localhost:6666', {emailContent: email.content});`
