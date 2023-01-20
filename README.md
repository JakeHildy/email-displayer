# Email Displayer

email-displayer is a little server you can run that updates an index.html file on post.

Use this for easier email testing. Might need to use ngrok if you want to hit it from inside a docker container.

## One

`npm i`

## Two

`nodemon server.js`

## Three (if needing to hit within a docker container or remotely)

`ngrok http http://localhost:6666`

## Four

Install the liveserver vscode extension if you don't have it already

## Five

right click on index.html and select Open with Live server

## Six

Use in an application like this:
`axios.post('<ngrokurl> OR http://localhost:6666', {emailContent: email.content});`