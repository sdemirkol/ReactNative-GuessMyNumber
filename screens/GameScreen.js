import { View, Text, StyleSheet } from 'react-native';

function GameScreen(){
    return (
        <View>
            <Text>Opponent's Guess</Text>
            {/* GUESS */}
            <View>
                <Text>Higher or lower</Text>
                {/* + - */}
            </View>
            {/* <View>LOG ROUNDS</View> */}

        </View>
    )
    
}

export default GameScreen;

const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding: 24
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        color:'#ddb52f'
    }
})