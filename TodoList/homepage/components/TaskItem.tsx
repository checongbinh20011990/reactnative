import {Text, TouchableOpacity, View} from 'react-native';
import { style } from '../style/style';
import { ReactElement, memo } from 'react';

interface ItemProps{
    content:String,
    onDelete:Function,
    index:number
}


export const Item = memo(({content,onDelete, index}:ItemProps) => {
    console.log("kiemtra ", index, content)
    return <TouchableOpacity onPress={()=> onDelete(index)}>
                    <View style={[style.item, style.mt_16]}>
                        <View style={style.subItem}>
                        <View style={[style.square, style.mr_16]}></View>
                        <Text>{content}</Text>
                        </View>

                        <View style={style.cirle}></View>

                    </View> 
            </TouchableOpacity>
})