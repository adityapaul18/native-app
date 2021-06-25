import { StatusBar } from 'expo-status-bar'
import React , { useEffect, useState } from 'react'
import {StyleSheet, Text, View } from 'react-native'
import { Button, Input , Image }  from 'react-native-elements'
import { KeyboardAvoidingView } from "react-native";
import { auth } from '../Firebase';

const Loginscreen = ({navigation}) => {
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    
    useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				navigation.replace("Home");
			}
		});
		return unsubscribe;
	}, []);

    const signIn = () => {
		auth
			.signInWithEmailAndPassword(email, password)
			.catch((error) => alert(error));
	};

    const RegisterNavigation = () => {
		navigation.navigate("Register");
	};

    return (
        <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
            <StatusBar style='light'/>
            <Image
				source={{
					uri:
						"https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
				}}
				style={{ width: 200, height: 200 }}
			/>
            <View style={styles.inputContainer}>
            <Input
					placeholder="Email"
					autoFocus
					type="Email"
					value={email}
					onChangeText={(text) => setEmail(text)}
				/>
				<Input
					placeholder="Password"
					secureTextEntry
					type="password"
					value={password}
					onChangeText={(text) => setPassword(text)}
					onSubmitEditing={signIn}
				/>
            </View>
            <Button containerStyle={styles.button} title="Login" 
            onPress={signIn}
             />
			<Button
                onPress={() => navigation.navigate("Register")}
				containerStyle={styles.button}
				title="Register"
				type="outline"
				onPress={RegisterNavigation}
			/>
            <View style={{height:100}} />
        </KeyboardAvoidingView>
    )
}

export default Loginscreen

const styles = StyleSheet.create({
    container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		backgroundColor: "white",
	},
	inputContainer: {
		width: 300,
	},
	button: {
		width: 200,
		marginTop: 10,
	},
})
