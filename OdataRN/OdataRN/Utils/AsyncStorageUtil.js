/**
 * 数据本地化操作方法的封装
 * @author gxy
 * @date 2016-10-19
 */
var AsyncStorageUtil = {};  
/** 
 * 存储数据到本地 
 * @param key 
 * @param value 
 */ 
import {
    AsyncStorage,
    ToastAndroid
} from 'react-native';
AsyncStorageUtil.set = function(key, value){
    AsyncStorage.setItem(key, value, () => {
        AsyncStorage.mergeItem(key, value, () => {
            AsyncStorage.getItem(key, (err, result) => {
                 if(result!==null){
                  return true;
                }else{
                   return false;
                }
            });
        });
    });
}

/** 
 * 从本地读取数据
 * @param key 
 */ 
AsyncStorageUtil.get = function(key){
     Result=''
     AsyncStorage.getItem(key, (err, result) => {
        return result
      });
}
export default AsyncStorageUtil;  
  