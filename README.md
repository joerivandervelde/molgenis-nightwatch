# install nightwatch and dependencies (once)

npm install -g nightwatch
npm install

# execute test on firefox

nightwatch

# execute test on chrome

nightwatch --env chrome
