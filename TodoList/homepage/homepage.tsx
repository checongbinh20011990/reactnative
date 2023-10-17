/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component, ReactElement} from 'react';
import {Button, Image, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { style } from './style/style';
import { Item } from './components/TaskItem';

interface iProps{}

interface iState{
  titleItem:String
  listItem:String[]
}

class App extends Component<iProps,iState>{

  private content:String
  private arrayItem:String[]

  constructor(props:any){
    super(props)

    this.content = ""
    this.arrayItem = []

    this.state = {
      titleItem : "",
      listItem: []
    }
  }

  private _onPress = () =>{
    this.arrayItem.push(this.content)
    this.setState({
      listItem: this.arrayItem
    })
  }

  private _onTextChange = (text:String) => {
    this.content = text
    
  }

  private _onDelete = (index:number) => {
    this.arrayItem.splice(index,1)
    this.setState({
      listItem: this.arrayItem
    })
  }
  
  private _renderTaskItem = ():Array<ReactElement> =>{
    return this.state.listItem.map((item,index)=> <Item key={index} index={index} content={item} onDelete={this._onDelete}/>)
  } 

  render(){
    return <View style={style.container}>
            <Text style={style.title}>Today's Tasks</Text>
            <ScrollView style={style.mt_24}>
              {this._renderTaskItem()}
            </ScrollView>

            <View style={style.wrapper}>
              <TextInput
                style={[style.input, style.shadow]}
                placeholder='Write a task'
                onChangeText={this._onTextChange}
              />

              <TouchableOpacity
                style={[style.btn, style.shadow]}
                onPress={this._onPress}
              >
                <Image source={require('../images/plus/add.png')} />
              </TouchableOpacity>
            </View>
            
           </View>
  }

}

export default App;

