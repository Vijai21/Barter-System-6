import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ToastAndroid} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'


export default class SettingScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            emailId: '',
            firstName: '',
            lastName: '',
            address: '',
            contact: '',
            docId: '',
        }
    }
    getData(){
        var email = firebase.auth().currentUser.email
        db.collection('users').where('email_id', '==', email).get()
        .then((snapshot)=>{
            snapshot.forEach((doc)=>{
                this.setState({
                    emailId: doc.data().email_id,
                    firstName: doc.data().first_name,
                    lastName: doc.data().last_name,
                    address: doc.data().address,
                    contact: doc.data().contact,
                    docId: doc.id
                })
            })
        })
    }
    
    updateData(){
        db.collection('users'). doc(this.state.docId).update({
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            address: this.state.address,
            contact: this.state.contact,
        })
    }

    componentDidMount(){
        this.getData();
    }

    render(){
        return(
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <MyHeader title = 'Settings' />
                <View style = {{flex: 1, alignItems: 'center', width: '100%'}}>
                    <TextInput
                    style={styles.formTextInput}
                    placeholder ={"First Name"}
                    maxLength ={8}
                    onChangeText={(text)=>{
                        this.setState({
                        firstName: text
                        })
                    }}
                    value= {this.state.firstName}
                    />
                    <TextInput
                    style={styles.formTextInput}
                    placeholder ={"Last Name"}
                    maxLength ={8}
                    onChangeText={(text)=>{
                        this.setState({
                        lastName: text
                        })
                    }}
                    value= {this.state.lastName}
                    />
                    <TextInput
                    style={styles.formTextInput}
                    placeholder ={"Contact"}
                    maxLength ={10}
                    keyboardType={'numeric'}
                    onChangeText={(text)=>{
                        this.setState({
                        contact: text
                        })
                    }}
                    value= {this.state.contact}
                    />
                    <TextInput
                    style={styles.formTextInput}
                    placeholder ={"Address"}
                    multiline = {true}
                    onChangeText={(text)=>{
                        this.setState({
                        address: text
                        })
                    }}
                    value= {this.state.address}
                    />
                    <TextInput
                    style={styles.formTextInput}
                    placeholder ={"Email"}
                    keyboardType ={'email-address'}
                    onChangeText={(text)=>{
                        this.setState({
                        emailId: text
                        })
                    }}
                    value= {this.state.emailId}
                    />

                    <TouchableOpacity onPress = {()=>{this.updateData()}} style = {styles.button}>
                        <Text> Save </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#ff9800",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
        padding: 10,
        marginTop: 30,
    },
    formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
    },
})