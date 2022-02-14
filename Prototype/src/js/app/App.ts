import * as Utils from '../utils';
import { ConfigData, ConfigOptionDefinition } from './Config';


export class ConfiguratorApp {
    public configPath: string = "";
    public config: ConfigData = new ConfigData();

    public constructor() {

    }

    private LoadOptionDefinition(definition:ConfigOptionDefinition) : Promise<Array<any>> {
        return Utils.LoadFromJSON<Array<any>>(definition.path);
    }

    public LoadConfig(configPath: string) : Promise<ConfigData> {
        const app = this;

        return new Promise(
            (
                resolve: (retVal: ConfigData) => void,
                reject: (retErr: any) => void
            ) => {
                Utils.LoadFromJSON<ConfigData>(configPath, new ConfigData())
                    .then( (config: ConfigData) => {
                        app.configPath = configPath;
                        app.config = config;
                        
                        let optionDefLoads: Array<Promise<any>> = [];

                        app.config.option_definitions.forEach( 
                            (optionDef:ConfigOptionDefinition) => {
                                console.log(`- loading: ${optionDef.path}`);
                                optionDefLoads.push(this.LoadOptionDefinition(optionDef));
                            }
                        );

                        Promise.all(optionDefLoads)
                            .then(
                                (loadedOptions: Array<any>[]) => {
                                    for (let i = 0; i < loadedOptions.length; ++i) {
                                        let data:Array<any> = loadedOptions[i];
                                        let def:ConfigOptionDefinition = this.config.option_definitions[i];

                                        this.config.option_map[def.path] = data;
                                        def.data = data;
                                    }
                                    resolve(app.config);
                                }
                            )
                            .catch(reject);

                    })
                    .catch( (err: any) => {
                        reject(err);
                    });
            }
        );
    }

/*
    public LoadItems(path:string) : Promise<any> {
        const app = this;
        return new Promise(
            (
                resolve: (retVal:any) => void,
                reject: (retErr:any) => void
            ) => {
                if(app.items.has(path)){
                    reject(`test ${path} is already loaded or loading`);
                    return;
                }
                app.items.set(path, {});

                Utils.LoadFromJSON(path)
                    .then((value: any) => {
                        app.items.set(path, value);
                        resolve(value);
                        return;
                    })
                    .catch((err:any) => {
                        reject(err);
                        return;
                    });
            }
        )
    }
*/

};