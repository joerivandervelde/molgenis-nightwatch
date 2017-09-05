module.exports = {

    'Get MVID-Central Homepage': function (client) {
        client
            .url('http://www.mvid-central.org/')
            .assert.title('MVID')
            .end();
    },
    'Check Dataexplorer table data': function (client) {
        client
            .url('http://www.mvid-central.org/plugin/dataexplorer')
            .assert.title('Data explorer plugin')
            .waitForElementVisible('#dataset-select-container', 1000)
            .waitForElementVisible('#data-table', 5000)
            .assert.containsText('table#data-table > tbody > tr:first-child > td:first-child', 'S285C1')
            .end();
    }
};
