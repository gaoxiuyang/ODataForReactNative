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
    ScrollView,
    TouchableOpacity
} from 'react-native';
import AsyncStorageUtil from '../Utils/AsyncStorageUtil';
import RequestManager from '../Utils/RequestApiUtils/RequestManager';
export default class page1 extends React.Component {
    constructor(props) {
        super(props);
        AsyncStorage.getItem('Content', (err, result) => {
                   this.setState({content:result})
                        AsyncStorage.mergeItem('Content', result); 
                });
        this.state = {
          content:""
        };
    }
    onBack(){
        const { navigator } = this.props;
        if(navigator) {
            navigator.pop();
        }
    }
    render() {
        return (
           <View style = {styles.containers}>
                <View style = {styles.titleView}>
                    <TouchableOpacity onPress={this.onBack.bind(this)} >
                        <Text style={styles.loginBtn}>返回</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.scrollView}>
                    <Text style = {styles.textView}>
                        {this.state.content}
                    </Text>
                </ScrollView>
           </View>
        )
    }
}
let styles = StyleSheet.create({
    scrollView: {
        height: Dimensions.get('window').height-50,
    
    },
   containers: {
       backgroundColor: '#f1f1f1',
       height: Dimensions.get('window').height-25,
   },
   titleView: {
       backgroundColor: '#4799e5',
       height: 45,
       flexDirection: 'row', 
       alignItems: 'center'
    },
   textView:{
       margin: 20,
       color: '#666666',
       fontSize: 14
   },
   loginBtn: {
       fontSize: 16,
       marginLeft: 20,
       color: '#fff',
       alignSelf: 'flex-end'
   },
   
})