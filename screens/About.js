import { StyleSheet, Text, View } from 'react-native';

export default About = () => {
    return (
        <View style={styles.container}>
            <Text>About Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    }
})