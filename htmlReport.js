var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'bootstrap',
        jsonFile: 'reports/report.json',
        output: 'reports/report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        name:"Automatización Falabella"
    };

    reporter.generate(options);