import React, {Component} from 'react';
import {Text} from 'react-native';

class Judul extends Component{
	render(){
		return(
			<Text style={salon.judul}>{this.props.type}</Text>
		)
	}
}
const salon = {
	judul: {
		color: 'black',
		fontSize: 50,
		fontWeight: 'bold',
		marginBottom : 20,
		marginTop : 10,
		paddingLeft : 70,
		paddingRight : 70,
		backgroundColor: 'grey'
	}
}
export default Judul;