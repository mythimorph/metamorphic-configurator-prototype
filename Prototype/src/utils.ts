namespace Utils
{
    type JSONLoadCallback = (result:string) => void;

    export function LoadJSON(url:string, callback:JSONLoadCallback) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType('application/json');
        xobj.open('GET', url, true);
        xobj.onreadystatechange = function() {
            if (xobj.readyState == 4 && xobj.status == 200) {
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    };
}