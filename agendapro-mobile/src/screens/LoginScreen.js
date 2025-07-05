import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

export default function LoginScreen({ navigation }) {
	const { theme } = useTheme();

	return (
		<View style={[styles.container, { backgroundColor: theme.background }]}>
			<Text style={{ color: theme.text, fontSize: 24 }}>Login</Text>
			<TextInput placeholder="Email" style={[styles.input, { color: theme.text, borderColor: theme.primary }]} />
			<TextInput placeholder="Senha" secureTextEntry style={[styles.input, { color: theme.text, borderColor: theme.primary }]} />
			<Button title="Entrar" onPress={() => navigation.navigate('Home')} color={theme.primary} />
			<Button title="Cadastrar" onPress={() => navigation.navigate('Register')} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: 'center', padding: 20 },
	input: { borderBottomWidth: 1, marginBottom: 20 },
});
