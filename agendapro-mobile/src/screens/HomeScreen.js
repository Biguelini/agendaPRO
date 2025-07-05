import React, { Component } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { withTheme } from '../hoc/withTheme'; // Crie essa pasta e arquivo para o HOC

class HomeScreen extends Component {
  render() {
    const { themeContext } = this.props;
    const { theme, isDark, toggleTheme } = themeContext;

    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={{ color: theme.text, fontSize: 24, marginBottom: 20 }}>
          Home Screen
        </Text>

        <View style={styles.switchRow}>
          <Text style={{ color: theme.text, marginRight: 10 }}>
            {isDark ? 'Dark Mode' : 'Light Mode'}
          </Text>
          <Switch
            value={isDark}
            onValueChange={toggleTheme}
            trackColor={{ false: '#767577', true: theme.primary }}
            thumbColor={isDark ? theme.primary : '#f4f3f4'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  switchRow: { flexDirection: 'row', alignItems: 'center' },
});

export default withTheme(HomeScreen);
