import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { minute: 1, seconde: 30, title: "Travail", color: "black" }
        timer: 0;
    }

    start() {
        this.interval = setInterval( () => {
           this.setState({timer: this.state.seconde--});

            if (this.state.seconde <= 20 && this.state.minute === 0 ) {
                this.setState({color: "red"});
            } else {
                this.setState({color: "black"});
            }

           switch (this.state.title) {
               case "Travail":
                   this.setState({color: "black"});
                   if (this.state.seconde < 0) {
                       this.state.minute = this.state.minute -1;
                       this.setState({seconde: 59});
                       if (this.state.minute < 0) {
                           this.state.minute = 0;
                           this.state.seconde = 0;
                           this.setState({title: "Pause", minute: 0, seconde: 30});
                           return;
                       }
                   }
                   break;

               case "Pause":
                   this.setState({color: "black"});
                   if (this.state.seconde < 0) {
                       this.state.minute = this.state.minute -1;
                       this.setState({seconde: 59});
                       if (this.state.minute < 0) {
                           this.state.minute = 0;
                           this.state.seconde = 0;
                           this.setState({title: "Travail", minute: 1, seconde: 30});
                           return;
                       }
                   }
                   break;
           }
        }, 1000);
    }

    stop() {
        clearInterval(this.interval);
    }

    reset() {
        clearInterval(this.interval);
        this.setState({title: "Travail", minute: 0, seconde: 3});
    }

    render() {
        return (
            <View style={styles.container}>
                <div>
                    <Text style={styles.title}>Pomodoro</Text>
                </div>
                <div>
                    <Button onPress={()=>this.start()} title="Start" />
                    <Button onPress={()=>this.stop()} title="Stop" />
                    <Button onPress={()=>this.reset()} title="Reset" />
                </div>
                <div>
                    <Text style={{color: this.state.color}}>{this.state.title} - { this.state.minute } : { this.state.seconde }</Text>
                </div>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: "#28C0DA"
    }
});
