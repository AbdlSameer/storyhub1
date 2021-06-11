import * as React from 'react';
import {Text, View , StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';

export default class WriteStoryWriteStoryScreen extends React.Component{

  constructor(props){
      super(props);
      this.state = {
           title: '',
           author: '',
           storyText: '',
      }
  }
  render(){
    return(
      <View style = {styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Story Hub</Text>
      </View>
    <View style = {{paddingTop:5}}>
     <TextInput
          style={styles.titleBox}
          placeholder="Write the title of the story here"
          value = {this.state.title}
          onChangeText = {text =>this.setState({title:text})}
        />
    </View>
    <View style = {{paddingTop:5}}>
      <TextInput
          style={styles.authorBox}
          placeholder = "Write the name of the author here"
          value = {this.state.author}
          onChangeText = {text =>this.setState({author:text})}
          />
    </View>
    <View style = {{paddingTop:5}}>
      <TextInput
          style={styles.storyBox}
          placeholder="Write your story here"
           value = {this.state.storyText}
           onChangeText = {text =>this.setState({storyText:text})}
      />
    </View>
    <View>
      <TouchableOpacity
        style={styles.submitButton}
         onPress={() => {
              Alert.alert(
                'Congratulation ',
                'Your Story Successfully Submitted',
                [
                 
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false }
              );
            }}>
          <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    backgroundColor: "pink",
    flex: 1,
    
  },
  header: {
    backgroundColor: '#FF86B2',
    borderRadius: 10,
    borderWidth: 1.5,
    height: 75,
    justifyContent: 'center'
  },
  headerText: {
    fontFamily: 'britannic',
    fontSize: 35,
    textAlign: 'center',
    
  },
  titleBox: {
    width: '90%',
    height: 40,
    backgroundColor: 'white',
    fontFamily: 'kristen itc',
    borderWidth: 1.5,
    borderRadius: 10,
    
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  authorBox: {
    width: '90%',
    height: 40,
    backgroundColor: 'white',
    fontFamily: 'kristen itc',
    borderWidth: 1.5,
    borderRadius: 10,
    
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  storyBox: {
    width: '90%',
    height: 250,
    borderRadius: 10,
    borderWidth: 1.5,
    backgroundColor: 'white',
    fontFamily: 'kristen itc',
    
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
   submitButton: {
    backgroundColor: '#FF86B2',
    width: '50%',
    height: 40,
    borderRadius: 10,
    borderWidth: 1.5,
    marginTop: 10,
    alignContent: 'center',
    marginLeft: 80,
  },
   buttonText: {
    fontFamily: 'britannic',
    textAlign: 'center',
    fontSize: 25,
  },
})