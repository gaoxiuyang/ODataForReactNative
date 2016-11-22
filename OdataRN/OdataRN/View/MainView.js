'use strict';
import React,{Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Alert,
    Dimensions,
    AsyncStorage,
    Platform,
    NativeModules,
    ToastAndroid,
    TouchableOpacity
} from 'react-native';
import AsyncStorageUtil from '../Utils/AsyncStorageUtil';
import RequestManager from '../Utils/RequestApiUtils/RequestManager';
import HttpUtil from '../Utils/RequestApiUtils/HttpUtil';
import RequsetURL from '../Utils/RequestApiUtils/RequsetURL';
import ApiSevice from '../Utils/RequestApiUtils/ApiSevice';
import Result from './ResultView';
export default class page1 extends React.Component {
    constructor(props) {
        super(props);     
        this.state = {
          content:""    
        };
    }
    getByKey(){ 
        let thiz = this;
        RequestManager.getByKey().then(x => {
            if(x.ok){
                thiz.props.navigator.push({
                    component:Result
                }); 
            }else{
                ToastAndroid.show('请重试', ToastAndroid.SHORT); 
            }
        }); 
    }
    getAll(){
        let thiz = this; 
        RequestManager.getAll().then(x => {
            if(x.ok){
                thiz.props.navigator.push({
                    component:Result
                }); 
            }else{
                ToastAndroid.show('请重试', ToastAndroid.SHORT); 
            }
        });    
    }
    postCreat(){
        let thiz = this; 
        RequestManager.postCreat().then(x => {
            if(x.ok){
                thiz.props.navigator.push({
                    component:Result
                }); 
            }else{
                ToastAndroid.show('请重试', ToastAndroid.SHORT); 
            }
        });  
    }
    putUpdata(){
        let thiz = this; 
        RequestManager.putUpdata().then(x => {
            if(x.ok){
                thiz.props.navigator.push({
                    component:Result
                }); 
            }else{
                ToastAndroid.show('请重试', ToastAndroid.SHORT); 
            }
        }); 
    }
    delete(){
        let thiz = this; 
        RequestManager.delete().then(x => {
            if(x.ok){
                thiz.props.navigator.push({
                    component:Result
                }); 
            }else{
                ToastAndroid.show('请重试', ToastAndroid.SHORT); 
            }
        }); 
    }
    render() {
        return (
           <View style = {styles.containers}>
                <TouchableOpacity style={styles.btn} onPress={this.postCreat.bind(this)} >
                    <Text style={styles.btnText}>Post（增加）</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={this.getAll.bind(this)} >
                    <Text style={styles.btnText}>Get（查询全部）</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={this.getByKey.bind(this)} >
                    <Text style={styles.btnText}>Get（条件查询）</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={this.putUpdata.bind(this)} >
                    <Text style={styles.btnText}>Put（修改）</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={this.delete.bind(this)} >
                    <Text style={styles.btnText}>Delete（删除）</Text>
                </TouchableOpacity>
           </View>
        )
    }
}
let styles = StyleSheet.create({
   containers: {
       backgroundColor: '#f1f1f1',
       height: Dimensions.get('window').height
   },

   btn: {
        backgroundColor: "#0066cc",
        height: 40,
        borderRadius: 4,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,   
        justifyContent: 'center',
    },

    btnText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16
    }
})