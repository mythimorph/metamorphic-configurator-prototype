
import * as Utils from "./utils"

window.onload = () => {
    console.log("Hello world 123");
    
    Utils.LoadJSON("data/data.json", response => {
        console.log(response);
    });
}
