const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

    testDir: './tests',

    timeout: 60000,

    use: {
        headless: false,
        screenshot: 'on',
        video: 'on',
        trace: 'on',
        baseURL: 'https://qaplayground.com'
    },

    reporter: [
        ['html', { open: 'never' }],
        ['list']
    ]
});