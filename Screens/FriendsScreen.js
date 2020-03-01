import React ,{ Component, Fragment }from 'react';
import { StyleSheet, Text, View, Button,Image } from 'react-native';
import { getFriendsData,removeFriend } from '../Redux/Actions/action';
import { connect } from "react-redux";
import { FlatList, ScrollView } from 'react-native-gesture-handler';

class Friends extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.getFriendsData()
    }
    render(){
        return(
            <ScrollView style={styles.container}>
            {
                this.props.data.map((person,i)=>
                <View style={styles.profile} key={i}>
                <Image style={{width: 70, height: 70, borderRadius:50}} source={{uri:`${person.avatar}`}}/>
                    <View style={styles.profileInfo}>
                        <Text>{person.first_name} {person.last_name}</Text>
                        <Text>{person.email}</Text>
                    </View>
                <Button onPress={()=>this.props.removeFriend(person)} title="Remove"></Button>
                </View>
                )
            }
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    // console.log("Inside mapStatetoProps")
    // console.log(state.friends)
    return { data: state.friends };
  };

const FriendsScreen = connect(mapStateToProps,{getFriendsData,removeFriend})(Friends)

export default FriendsScreen;

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"column",
        paddingHorizontal:10,
        paddingTop:15
    },
    profile:{
        position:"relative",
        display:"flex",
        flexDirection:"row",
        backgroundColor:"skyblue",
        justifyContent:"space-between",
        borderBottomWidth:5,
        borderBottomColor:"white",
        alignItems:"center"
    },
    profileInfo:{
        display:"flex",
        flexDirection:"column",
        position:"absolute",
        left:100,
        fontSize:20
    }

})