import { StyleSheet, Text, View } from 'react-native';

export default Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        fontFamily: 'nunito-bold'
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 18
    }
})