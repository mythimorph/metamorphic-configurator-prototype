import * as Utils from '../utils';
import { ConfigData, ConfigOptionDefinition } from './Config';


export class ConfiguratorApp {

    public element: HTMLElement;

    public configPath: string = "";
    public config: ConfigData;


    public constructor(element:HTMLElement) {
        this.element = element;

        this.config = new ConfigData();
    }

    public Render() : void {

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
                                optionDefLoads.push(Utils.LoadFromJSON<Array<any>>(optionDef.path));
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
};