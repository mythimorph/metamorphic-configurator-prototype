import { Utils } from './utils';


window.onload = () => {
    var customizer = new Customizer();

    customizer.AddData("assets/products/product.json");


    //document.addEventListener("keyup", handler.doWork);
};

class Customizer {
    AddData(jsonPath:string) {
        console.log(`loading: ${jsonPath}`);

        //Utils.LoadJSON()
        
    }
}