
export function LoadFromJSON<Type> (url:string, target?:any) : Promise<Type> {
    
    return new Promise<Type>( 
        (
            resolve: (data:Type) => void, 
            reject:  (data:any)  => void
        ) => {
            var xobj = new XMLHttpRequest();
            xobj.overrideMimeType('application/json');
            xobj.open('GET', url, true);
            xobj.onreadystatechange = function() {
                if (xobj.readyState == 4) {
                    if (xobj.status == 200) {
                        try {
                            let data = JSON.parse(xobj.responseText);
                            if(typeof target !== 'undefined') {
                                data = Object.assign(target, data);
                            }
                            resolve(data as Type);
                        } catch(e) {
                            reject(e);
                            return;
                        }
                    } else {
                        reject(xobj.responseText)
                    }
                }
            };
            xobj.send(null);
        }
    );
}
