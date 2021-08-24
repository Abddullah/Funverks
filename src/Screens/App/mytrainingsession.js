import React, { Component } from 'react'
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Tabs, Tab, TabHeading } from 'native-base';
//Redux/Actions functions import
import { myTraining, registerTraining } from "../../store/Action/action";
import { connect } from 'react-redux';
//componets
import Cards from '../../Components/cards'
//icons import
import Entypo from 'react-native-vector-icons/Entypo';

class MyTrainingSession extends Component {
    constructor() {
        super()
        this.state = {
            activeColor: "Pending",
        }
    }

    UNSAFE_componentWillMount() {
        this.props.myTraining(this.props.userToken)
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        let myTrainings = nextProps.mytrainings
        if (myTrainings && myTrainings.length) {
            const pending = myTrainings.filter(myTrainings => myTrainings.status === "pending");
            const approved = myTrainings.filter(myTrainings => myTrainings.status === "approved");
            // console.log(pending, approved, "mytrainings")
            this.setState({
                pending,
                approved,
            })
        }
    }

    registeNow(key, index) {
        this.setState({ loaderIndex: index })
        this.props.registerTraining(key.id, this.props.userToken)
    }

    activeColor(key) {
        if (key.ref.key == ".0") {
            this.setState({
                activeColor: "Pending"
            })
        }
        if (key.ref.key == ".1") {
            this.setState({
                activeColor: "Approval"
            })
        }
    }

    render() {
        let { activeColor, pending, approved, loaderIndex } = this.state
        const { mytrainings, isError, isLoader } = this.props


        return (
            <ImageBackground source={require('../../Assets/background.png')} style={styles.backgroundImg}>

                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => { this.props.navigation.openDrawer() }} style={styles.header1stChild}>
                        <Entypo name="menu" style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 40 }} />
                    </TouchableOpacity>
                    <View style={styles.header2ndChild}>
                        <Text style={{ color: "white", fontWeight: "bold" }}>My Training Session</Text>
                    </View>
                    <View style={styles.header1stChild}>
                    </View>
                </View>

                {/* Body */}
                <View style={{ flex: 8, width: "100%", justifyContent: "center", alignItems: "center" }}>
                    <Tabs
                        tabContainerStyle={{ height: 50 }}
                        onChangeTab={(key) => this.activeColor(key)}
                        locked={true}
                        tabBarUnderlineStyle={{ backgroundColor: '#093C57' }}
                    >
                        {/* //Pending// */}
                        <Tab
                            heading={
                                <TabHeading
                                    style={{ flexDirection: "column", backgroundColor: "white" }}
                                >
                                    <Text style={{ color: activeColor === "Pending" ? "#093C57" : "black" }}>Pending</Text>
                                </TabHeading>}
                        >
                            <ScrollView contentContainerStyle={styles.contentContainer} style={{ width: "100%", }}>
                                {
                                    (pending && pending.length) ?
                                        pending.map((key, index) => {
                                            return (
                                                <Cards buttonHide={true} key={index} index={index} loaderIndex={loaderIndex} topMargin={20} func={() => { this.registeNow(key.training_name, index) }} trainings={key.training_name} isLoader={isLoader} />
                                            )
                                        })
                                        : null
                                }
                            </ScrollView>
                        </Tab>

                        {/* //Approval// */}
                        <Tab
                            heading={
                                <TabHeading
                                    style={{ flexDirection: "column", backgroundColor: "white" }}
                                >
                                    <Text style={{ color: activeColor === "Approval" ? "#093C57" : "black" }}>Approved</Text>
                                </TabHeading>
                            }
                        >
                            <ScrollView contentContainerStyle={styles.contentContainer} style={{ width: "100%", }}>
                                {
                                    (approved && approved.length) ?
                                        approved.map((key, index) => {
                                            return (
                                                <Cards buttonHide={true} key={index} index={index} loaderIndex={loaderIndex} topMargin={20} func={() => { this.registeNow(key.training_name, index) }} trainings={key.training_name} isLoader={isLoader} />
                                            )
                                        })
                                        : null
                                }
                            </ScrollView>
                        </Tab>
                    </Tabs>
                </View>
            </ImageBackground >
        )
    }
}

let mapStateToProps = state => {
    return {
        userToken: state.root.userToken,
        isLoader: state.root.isLoader,
        isError: state.root.isError,
        mytrainings: state.root.mytrainings,
    };
};
function mapDispatchToProps(dispatch) {
    return ({
        myTraining: (token) => {
            dispatch(myTraining(token));
        },
        registerTraining: (id, token) => {
            dispatch(registerTraining(id, token));
        },
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(MyTrainingSession);


const styles = StyleSheet.create({
    backgroundImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%"
    },
    contentContainer: {
        paddingBottom: 70,
    },
    header: {
        flex: 0.8,
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#093C57"
    },
    header1stChild: {
        flex: 2.5,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "yellow"
    },
    header2ndChild: {
        flex: 8,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "grey"
    },
})
