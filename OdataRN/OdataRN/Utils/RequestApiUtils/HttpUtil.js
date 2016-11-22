/**
 * 网络访问方法的封装
 * @author gxy
 * @date 2016-10-18
 */
var HTTPUtil = {};  
import {
    ToastAndroid
} from 'react-native';
/** 
 * 基于 fetch 封装的 GET请求 
 * @param url 
 * @param params {} 
 * @param headers 
 * @returns {Promise} 
 */  
HTTPUtil.get = function(url) {   
    return new Promise(
        function (resolve, reject) {  
        fetch(url, {  
            method: 'GET',  
          }).then(
              (response) => {  
                  // ToastAndroid.show("=1!="+ response.status, ToastAndroid.SHORT); 
                  return response;   
          })
          .then((response) => {  
              resolve(response);  
          })  
          .catch((err)=> {  
            reject({status:-1});  
          })  
    })  
}  
/** 
 * 基于 fetch 封装的 POST请求  FormData 表单数据 
 * @param url 
 * @param formData   
 * @param headers 
 * @returns {Promise} 
 */  
HTTPUtil.post = function(url, formData) {  
    return new Promise(function (resolve, reject) {  
      fetch(url, {  
            method: 'POST',  
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData) 
          })  
          .then((response) => {  
                return response;    
          })  
          .then((response) => {  
              resolve(response);  
          })  
          .catch((err)=> {  
              reject({status:-1});  
          })  
    })  
}
/** 
 * 基于 fetch 封装的 POST请求 Json文件数据 
 * @param url 
 * @param data   
 * @param callback 
 * @returns {Promise} 
 */  
HTTPUtil.postJson = function(url, data) {
    var fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  fetch(url, fetchOptions)
    .then((response) =>{
          return response;   
      }).done();
  }

/** 
 * 基于 fetch 封装的上传请求  FormData 表单数据 
 * @param uri 文件本地路径 
 * @param key 服务器上存储文件的名称   
 * @param token token
 * @param url 上传地址
 * @param headers 请求头 （可以没有）
 */  
HTTPUtil.upload = function(uri,key,token,url,headers){
    let formData = new FormData()
    formData.append('file',{uri:uri,type:application/octet-stream,name:key});
    formData.append('key',key);
    formData.append('token',token);
    let options = {};
    options.url = url;
    options.headers = headers;
    options.method = 'post';
    options.body = formData;
    return fetch(conf.UP_HOST,options).then((response)=>{});
}   
/** 
 * 基于 fetch 封装的 PUT请求 Json文件数据 
 * @param url 
 * @param data   
 * @param callback 
 * @returns {Promise} 
 */  
HTTPUtil.putJson = function(url, data) {
    return new Promise(function (resolve, reject) {  
      fetch(url, {  
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }) .then((response) => { 

                return response;    
          })  
          .then((response) => {
              resolve(response);  
          })  
          .catch((err)=> {  
              reject({status:-1});  
          })  
    })
}








    
/** 
 * 基于 fetch 封装的 DELETE请求 
 * @param url 
 * @param params {} 
 * @returns {Promise} 
 */  
HTTPUtil.delete = function(url) {  
    return new Promise(function (resolve, reject) {  
      fetch(url, {  
            method: 'DELETE' 
          }).then((response) => {  
          ToastAndroid.show("=1!="+ response.status, ToastAndroid.SHORT);  
                  return response;   
          })  
          .then((response) => {  
              resolve(response);  
          })  
          .catch((err)=> {  
            reject({status:-1});  
          })  
    })  
}  
export default HTTPUtil;  