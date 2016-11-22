/**
 * 定义RequsetURL
 * @author gxy
 * @date 2016-10-18
 */
var RequsetURL = {};  
 RequsetURL.GetAllURL = 'http://services.odata.org/TripPinRESTierService/(S(ttgxui24dxjyngne0nkqgyqi))/People';
 RequsetURL.GetBuKey = "http://services.odata.org/TripPinRESTierService/(S(ttgxui24dxjyngne0nkqgyqi))/People?$filter=FirstName eq 'Lewis'";
 RequsetURL.PostCreat = 'http://services.odata.org/TripPinRESTierService/(S(ttgxui24dxjyngne0nkqgyqi))/People';
 RequsetURL.PutUpdata = "http://services.odata.org/TripPinRESTierService/(S(ttgxui24dxjyngne0nkqgyqi))/People('fang')"
 RequsetURL.DeleteURL = "http://services.odata.org/TripPinRESTierService/(S(ttgxui24dxjyngne0nkqgyqi))/People('fang')"

export default RequsetURL;  