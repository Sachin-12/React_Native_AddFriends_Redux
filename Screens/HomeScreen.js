import React ,{ Component, Fragment }from 'react';
import { Dimensions, StyleSheet, Text, View, Button } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class HomeScreen extends Component{
    
    render(){
        return(
            <View style={styles.container}>
                <Button title="People" onPress={() => this.props.navigation.navigate('People')}> </Button>
                <Text>{"\n"}</Text>
                <Button title="Friends" onPress={() => this.props.navigation.navigate('Friends')}></Button>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop: hp('33%'),
        paddingHorizontal:50

    }
})