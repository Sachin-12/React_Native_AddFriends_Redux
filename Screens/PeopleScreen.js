import React ,{ Component, Fragment, useEffect }from 'react';
import { StyleSheet, Text, View, Button, ListView,Image } from 'react-native';
import { connect } from "react-redux";
import { getPeopleData ,addFriend,getPeopleDataFromState} from '../Redux/Actions/action';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

class People extends Component{
    constructor(props){
        super(props);
    }

    UNSAFE_componentWillMount(){
        this.props.getPeopleData()
    }
    componentDidUpdate(){
        this.props.getPeopleDataFromState()
    }


    render(){
        // console.log("Inside people screen")
        // console.log(this.props)
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
                <Button onPress={()=>this.props.addFriend(person)} title="Add"></Button>
                </View>
                )
            }
            </ScrollView>
        )
    }  
}

function mapStateToProps(state) {
    // console.log("Inside mapStatetoProps")
    // console.log(state)
    return { data: state.people };
  };

const PeopleScreen = connect(mapStateToProps,{getPeopleDataFromState,getPeopleData,addFriend})(People)

export default PeopleScreen;

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