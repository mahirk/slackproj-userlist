Slack Project: Channel list

A simple app using node to display the channels the user is part of.

## Methods to make it resilient:

1. Store the data from the Slack API on a database, allows easier sorting and displaying of data
2. Support API errors for data (401-499 response errors)
3. Allow user to login on app to generate API Token
