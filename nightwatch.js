module.exports = {
    "src_folders": ["./tests"],
    "output_folder": "./results",
    "live_output": true,

    "selenium": {
        "start_process": true,
        "server_path": "./node_modules/selenium-server/lib/runner/selenium-server-standalone-3.4.0.jar",
        "log_path": "./results",
        "host": "127.0.0.1",
        "port": 4444,
        "cli_args": {
            "webdriver.gecko.driver": "./node_modules/.bin/geckodriver",
            "webdriver.chrome.driver": "./node_modules/.bin/chromedriver",
            "webdriver.safari.driver": "./node_modules/.bin/safaridriver"
        }
    },

    "test_settings": {
        "default": {
            "launch_url": "http://ondemand.saucelabs.com:80",
            "selenium_port": 80,
            "selenium_host": "ondemand.saucelabs.com",
            "silent": true,
            "username": process.env.SAUCE_USERNAME,
            "access_key": process.env.SAUCE_ACCESS_KEY,
            "screenshots": {
                enabled: false,
                path: ""
            },
            "globals": {
                waitForConditionTimeout: 10000
            }
        },
        "local": {
            "selenium_host": "127.0.0.1",
            "selenium_port": 4444,
            "silent": true,
            "disable_colors": false,
            "screenshots": {
                "enabled": true,
                "path": "./results/screenshots",
                "on_failure": true,
                "on_error": true
            },
            "desiredCapabilities": {
                "browserName": "firefox",
                "javascriptEnabled": true,
                "acceptSslCerts": true
            }
        },
        "chrome": {
            "desiredCapabilities": {
                "browserName": "chrome",
                "javascriptEnabled": true,
                "acceptSslCerts": true,
                platform: "OS X 10.11",
                version: "47"
            }
        },
        "safari": {
            "desiredCapabilities": {
                "browserName": "safari",
                "javascriptEnabled": true,
                "acceptSslCerts": true
            }
        },
        "ie11": {
            "desiredCapabilities": {
                "browserName": "internet explorer",
                "platform": "Windows 10",
                "version": "11.0"
            }
        }
    }
}