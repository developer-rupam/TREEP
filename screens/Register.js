import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { icons, images } from "../constants";

/* Setting up constant for width to take device's dimensions */
const { width: WIDTH } = Dimensions.get('window');

const Register = (props) => {
    /* Managing state for component */
    const [name, setNameField] = useState('')
    const [phone, setPhoneField] = useState('')
    const [password, setPasswordField] = useState('')
    const [confirmPassword, setConfirmPasswordField] = useState('')
    const [errorText,setErrorText] = useState('')
    /* Method defination for handle login , take email and password as input and call api */
    _handleRegister = () => {
        setErrorText('') 
        if (phone != '' && password != '' && name != '') {
            if(password === confirmPassword){
                setErrorText('') 
                props.navigation.navigate('Login')
            }else{
                setErrorText('Password not matched');
            }
        } else {
            setErrorText('Please provide valid information');
        }
    }

    

    return (
        <ImageBackground
            source={images.BASICBACKGROUND}
            style={styles.baseBackground}
        >
            <View style={styles.floatingContainer}>
                <View style={styles.logoContainer}>
                    <Image source={icons.MOTORBIKETRIP} style={styles.logo} />
                </View>
                <View style={styles.inputContainer}>

                    <TextInput
                        placeholder={'Name'}
                        placeholderTextColor={'#5e5a5a'}
                        underLineColorAndroid='transparent'
                        style={styles.input}
                        value={name}
                        onChangeText={(text) => setNameField(text)}
                    />
                    <Image
                        source={icons.TRAVELLER}
                        style={styles.inputIcon}
                    />
                </View>
                <View style={styles.inputContainer}>

                    <TextInput
                        placeholder={'Phone'}
                        keyboardType='numeric'
                        placeholderTextColor={'#5e5a5a'}
                        underLineColorAndroid='transparent'
                        style={styles.input}
                        value={phone}
                        onChangeText={(text) => {
                            let num = text.replace(".", '');
                              if(isNaN(num)){
                                setErrorText('Please provide valid phone no')
                              }else{
                                setPhoneField(num)
                                setErrorText('')  
                              }
                            }
                        }
                    />
                    <Image
                        source={icons.PHONE}
                        style={styles.inputIcon}
                    />
                </View>
                <View style={styles.inputContainer}>

                    <TextInput
                        placeholder={'Password'}
                        secureTextEntry={true}
                        placeholderTextColor={'#5e5a5a'}
                        underLineColorAndroid='transparent'
                        style={styles.input}
                        value={password}
                        onChangeText={(text) => setPasswordField(text)}
                    />
                    {/* {!showPassword && <TouchableOpacity onPress={()=>setPasswordMode(true)}>
                        <Image 
                            source={icons.SHOWPASSWORD}
                            style={styles.showPasswordBtn}
                        />
                    </TouchableOpacity>}
                    {showPassword && <TouchableOpacity onPress={()=>setPasswordMode(false)}>
                        <Image 
                            source={icons.HIDEPASSWORD}
                            style={styles.showPasswordBtn}
                        />
                    </TouchableOpacity>} */}
                    <Image
                        source={icons.KEY}
                        style={styles.inputIcon}
                    />

                </View>
                <View style={styles.inputContainer}>

                    <TextInput
                        placeholder={'Confirm Password'}
                        secureTextEntry={false}
                        placeholderTextColor={'#5e5a5a'}
                        underLineColorAndroid='transparent'
                        style={styles.input}
                        value={confirmPassword}
                        onChangeText={(text) => setConfirmPasswordField(text)}
                    />
                    {/* {!showPassword && <TouchableOpacity onPress={()=>setPasswordMode(true)}>
                        <Image 
                            source={icons.SHOWPASSWORD}
                            style={styles.showPasswordBtn}
                        />
                    </TouchableOpacity>}
                    {showPassword && <TouchableOpacity onPress={()=>setPasswordMode(false)}>
                        <Image 
                            source={icons.HIDEPASSWORD}
                            style={styles.showPasswordBtn}
                        />
                    </TouchableOpacity>} */}
                    <Image
                        source={icons.KEY}
                        style={styles.inputIcon}
                    />

                </View>
                <Text style={{ color: '#fc033d', textAlign: 'center', marginBottom: 10 }}>{errorText}</Text>
                <TouchableOpacity style={styles.loginBtn} onPress={_handleRegister}>
                    <Text style={styles.loginBtnText}>Register</Text>
                </TouchableOpacity>
                <Text style={{ color: '#302d2d', textAlign: 'center', marginBottom: 10 }} onPress={() => props.navigation.navigate('Login')}>Already a Member ? Login Now</Text>
            </View>
        </ImageBackground>
    )
}

export default Register;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    baseBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 10
    },
    logo: {
        width: 80,
        height: 80,
    },
    floatingContainer: {
        backgroundColor: '#fff',
        borderRadius: 0,
        marginTop: 20,
        marginBottom: 50,
        alignItems: 'center'
    },
    input: {
        width: WIDTH - 75,
        height: 45,
        fontSize: 15,
        paddingLeft: 45,
        backgroundColor: '#fff',
        color: '#302d2d',
        marginHorizontal: 25,
        alignItems: 'center',
        borderBottomColor: '#5e5a5a',
        borderBottomWidth: 1
    },
    inputIcon: {
        width: 20,
        height: 20,
        position: 'absolute',
        top: 15,
        left: 37
    },
    inputContainer: {
        marginTop: 10,
        marginBottom: 10
    },
    showPasswordBtn: {
        width: 20,
        height: 20,
        position : 'absolute',
        top: 0,
        left: 137,
    },
    loginBtn: {
        width: WIDTH - 75,
        height: 45,
        fontSize: 15,
        borderRadius: 5,
        backgroundColor: '#0aa86c',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    loginBtnText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20
    }
});