import React,{useState} from "react";
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { icons, images } from "../constants";

/* Setting up constant for width to take device's dimensions */
const { width: WIDTH } = Dimensions.get('window');

const Login = (props) => {
    /* Managing state for component */
    const [showPassword,setPasswordMode] = useState(false)
    const [phone,setPhoneField] = useState('')
    const [password,setPasswordField] = useState('')
    const [errorText,setErrorText] = useState('')

    /* Method defination for handle login , take email and password as input and call api */
    _handleLogin = () => {
        if(phone != '' && password != ''){
            setErrorText('') 
            props.navigation.navigate('Home')
        }else{
            setErrorText('Please provide valid information')
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
                        secureTextEntry={!showPassword}
                        placeholderTextColor={'#5e5a5a'}
                        underLineColorAndroid='transparent'
                        style={styles.input}
                        value={password}
                        onChangeText={(text) => setPasswordField(text)}
                    />
                    {showPassword && <TouchableOpacity onPress={()=>setPasswordMode(false)}>
                        <Image 
                            source={icons.SHOWPASSWORD}
                            style={styles.showPasswordBtn}
                        />
                    </TouchableOpacity>}
                    {!showPassword && <TouchableOpacity onPress={()=>setPasswordMode(true)}>
                        <Image 
                            source={icons.HIDEPASSWORD}
                            style={styles.showPasswordBtn}
                        />
                    </TouchableOpacity>}
                    <Image
                        source={icons.KEY}
                        style={styles.inputIcon}
                    />
                    
                </View>
                <Text style={{ color: '#fc033d', textAlign: 'center', marginBottom: 10 }}>{errorText}</Text>
                <TouchableOpacity style={styles.loginBtn} onPress={_handleLogin}>
                    <Text style={styles.loginBtnText}>Login</Text>
                </TouchableOpacity>
                <Text style={{color:'#302d2d',textAlign:'center'}}>New Member ? Register Now</Text>
                <TouchableOpacity style={styles.registerBtn} onPress={() => props.navigation.navigate('Register')}  >
                    <Text style={styles.registerBtnText}>Register</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default Login;

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
        marginTop:10
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
        alignItems:'center'
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
    inputContainer : {
        marginTop : 10,
        marginBottom : 10
    },
    showPasswordBtn : {
        width : 20,
        height : 20,
        position : 'absolute',
        top : 50,
        left:50,

    },
    loginBtn : {
        width: WIDTH - 75,
        height: 45,
        fontSize: 15,
        borderRadius:5,
        backgroundColor : '#0aa86c',
        justifyContent:'center',
        marginTop : 20,
        marginBottom : 20
    },
    loginBtnText : {
        color : '#fff',
        textAlign : 'center',
        fontSize:20
    },
    registerBtn : {
        width: WIDTH - 75,
        height: 45,
        fontSize: 15,
        borderRadius:5,
        backgroundColor : '#d9437a',
        justifyContent:'center',
        marginTop : 20,
        marginBottom : 20
    },
    registerBtnText : {
        color : '#fff',
        textAlign : 'center',
        fontSize:20
    }
});