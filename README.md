# install nightwatch and dependencies (once)

npm install -g nightwatch
npm install

# execute test on firefox

nightwatch

# execute test on chrome

nightwatch --env chrome

# execute in parallel on firefox and chrome

nightwatch --env chrome,default

# headless

xvfb-run -a nightwatch

# compability

Is known to fail on centos6.9 with firefox 52.3esr

Is known to succeed on mac10.12.15 and firefox55.0.2 and chrome59.0.3071.115 
