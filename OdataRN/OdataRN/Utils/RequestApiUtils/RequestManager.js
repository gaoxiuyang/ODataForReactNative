/**
 * 请求API的封装
 * @author gxy
 * @date 2016-10-18
 */
let RequestManager = {};  
import {
    ToastAndroid,
    AsyncStorage
} from 'react-native';
import HttpUtil from './HttpUtil';
import RequsetURL from './RequsetURL';
import AsyncStorageUtil from '../AsyncStorageUtil';
import MainView from '../../View/MainView';
let json = {
    "UserName":"fang",
    "FirstName":"Lewis",
    "LastName":"Black",
    "Emails":[
        "lewisblack@example.com"
    ],
    "AddressInfo": [
    {
      "Address": "187 Suffolk Ln.",
      "City": {
        "Name": "Boise",
        "CountryRegion": "United States",
        "Region": "ID"
      }
    }
    ]
};

let jsonUpdata = {
            "FirstName": "Gao", 
            "LastName": "Xiuyang"
            }
RequestManager.state;
RequestManager.getAll = function() {     
    return  HttpUtil.get(RequsetURL.GetAllURL).then(RequestManager.handleResponse);
}  

RequestManager.getByKey = function() { 
    return  HttpUtil.get(RequsetURL.GetBuKey).then(RequestManager.handleResponse); 
};

RequestManager.postCreat = function() {  
    return HttpUtil.post(RequsetURL.PostCreat,json).then(RequestManager.handleResponse);
}

RequestManager.putUpdata = function() {  
    return HttpUtil.putJson(RequsetURL.PutUpdata,jsonUpdata).then(RequestManager.handleResponse);
}

RequestManager.delete = function() {  
    return HttpUtil.delete(RequsetURL.DeleteURL).then(RequestManager.handleResponse);
}

RequestManager.handleResponse= function(response) {
    console.log(response.url, response.statusText);
    if (response.ok) {
            //检查响应文
            if(response.status==204){
                AsyncStorageUtil.set('Content', "成功!!!!"); 
            }else{
                response.text().then(function(text){
                    AsyncStorageUtil.set('Content', text);   
                });  
            }
        return response; 
    }
    else {
        console.error('An error occurred', response);
    }
}
export default RequestManager;  