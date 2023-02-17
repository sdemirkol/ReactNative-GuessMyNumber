import { StyleSheet, View, Text, Pressable } from 'react-native';

function PrimaryButton({ children, onPress }) {

    // function pressHandler() {
    //     console.log('Pressed!')
    // }
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({pressed})=> 
                pressed
                ? [styles.buttonInnerContainer, styles.pressed]
                : styles.buttonInnerContainer
                }
                onPress={onPress}
                android_ripple={{ color: '#640233' }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#470124',
        paddingVertical: 8,
        paddingHozirzontal: 16,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',

    }
})