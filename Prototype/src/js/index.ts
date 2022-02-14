import { ConfiguratorApp } from './app/App';

window.onload = () => {
    console.log("Hello world 123");

    var app:ConfiguratorApp = new ConfiguratorApp();

    app.LoadConfig("data/config_test.json")
        .then(data => {
            console.log(data);
        })
};
