
export class ConfigData {
    option_definitions: Array<ConfigOptionDefinition> = new Array<ConfigOptionDefinition>(); 
    option_map: { [path:string]: any } = {};
}

export class ConfigOptionDefinition {
    id: string = "";
    description?: string;
    path: string = "";
    data?: Array<any> = new Array<any>();
}