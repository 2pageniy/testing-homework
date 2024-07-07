export default {
    gridUrl: "http://localhost:4444/wd/hub",
    baseUrl: "http://localhost",
    pageLoadTimeout: 0,
    httpTimeout: 60000,
    testTimeout: 90000,
    resetCursor: false,
    devServer: {
        env: {BUG_ID: 10},
    },
    sets: {
        desktop: {
            files: [
                "test/testplane/**/*.testplane.(t|j)s"
            ],
            browsers: [
                "chrome"
            ]
        }
    },
    browsers: {
        chrome: {
            automationProtocol: "devtools",
            headless: false,
            desiredCapabilities: {
                browserName: "chrome"
            }
        }
    },
    plugins: {
        "html-reporter/testplane": {
            enabled: true,
        },
    }
};
