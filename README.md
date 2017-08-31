# install nightwatch and dependencies (once)

```
npm install -g nightwatch
npm install
```

# set saucelabs credentials
```
export SAUCE_USERNAME="<your user name>"
export SAUCE_ACCESS_KEY="<your access key>"
```

# execute test on firefox

```
nightwatch --config nightwatch.js
```

# Execute test on chrome

```
nightwatch --config nightwatch.js --env chrome
```


# Execute test in parallel on ie11 and chrome

```
nightwatch --config nightwatch.js --env ie11,chrome
```

# Travis
Will also run on travis if you configure it for your github repo,
see `.travis.yml` file.