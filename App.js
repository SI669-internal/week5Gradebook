import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

class Step1 extends React.Component {
  constructor() {
    super();

    this.state = {
      students: [
        { name: "John Doe", grade: 90, key: 'jd1' },
        { name: "Julie Dooly", grade: 91, key: 'jd2' },
        { name: "Jun Do", grade: 92, key: 'jd3' },
        { name: "Jan Dunn", grade: 93, key: 'jd4' },
        { name: "Juan Diaz", grade: 94, key: 'jd5'}
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <FlatList
            data={this.state.students}
            renderItem={({item}) => {
              return (
                <View>
                  <Text>{item.name}</Text>
                  <Text>{item.grade}</Text>
                </View>
              );
            }}
            />
        </View>
      </View>
    );
  }
}

class Step2 extends React.Component {
  constructor() {
    super();

    this.state = {
      students: [
        { name: "John Doe", grade: 90, key: 'jd1' },
        { name: "Julie Dooly", grade: 91, key: 'jd2' },
        { name: "Jun Do", grade: 92, key: 'jd3' },
        { name: "Jan Dunn", grade: 93, key: 'jd4' },
        { name: "Juan Diaz", grade: 94, key: 'jd5'}
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Totally Accurate Grades</Text>
        </View>
        <View style={styles.body}>
          <FlatList
            data={this.state.students}
            renderItem={({item}) =>  {
              return (
                <View style={styles.gbItem}>
                  <Text style={styles.gbItemText}>{item.name}</Text>
                  <Text style={styles.gbItemText}>{item.grade}</Text>
                </View>
              );
            }}
            />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity 
            style={styles.refresh}>
            <Text>
              Recalculate Grades
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class Step3 extends React.Component {

  constructor() {
    super();

    this.state = {
      students: [
        { name: "John Doe", grade: 90, key: 'jd1' },
        { name: "Julie Dooly", grade: 91, key: 'jd2' },
        { name: "Jun Do", grade: 92, key: 'jd3' },
        { name: "Jan Dunn", grade: 93, key: 'jd4' },
        { name: "Juan Diaz", grade: 94, key: 'jd5'}
      ]
    };
  }

  updateGradebook = () => {
    let updatedStudents = [];
    for (let s of this.state.students) {
      s.grade = Math.round(Math.random() * 100);
      updatedStudents.push(s);
    }
    this.setState({
      students: updatedStudents
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Totally Accurate Grades</Text>
        </View>
        <View style={styles.body}>
          <FlatList
            data={this.state.students}
            renderItem={({item}) => {
              return (
                <View style={styles.gbItem}>
                  <Text style={styles.gbItemText}>{item.name}</Text>
                  <Text style={styles.gbItemText}>{item.grade}</Text>
                </View>
              );
            }}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity 
            style={styles.refresh}
            onPress={this.updateGradebook}>
            <Text>
              Recalculate Grades
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


class GradebookEntry extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.gbItem}>
        <Text style={styles.gbItemText}>{this.props.name}</Text>
        <Text style={styles.gbItemText}>{this.props.grade}</Text>
    </View>
    );
  }
}

class Step4 extends React.Component {

  constructor() {
    super();

    this.state = {
      students: [
        { name: "John Doe", grade: 90, key: 'jd1' },
        { name: "Julie Dooly", grade: 91, key: 'jd2' },
        { name: "Jun Do", grade: 92, key: 'jd3' },
        { name: "Jan Dunn", grade: 93, key: 'jd4' },
        { name: "Juan Diaz", grade: 94, key: 'jd5'}
      ]
    };
  }

  updateGradebook = () => {
    let updatedStudents = [];
    for (let s of this.state.students) {
      s.grade = Math.round(Math.random() * 100);
      updatedStudents.push(s);
    }
    this.setState({
      students: updatedStudents
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Totally Accurate Grades</Text>
        </View>
        <View style={styles.body}>
          <FlatList
            data={this.state.students}
            renderItem={({item}) => {
              return (
                <GradebookEntry name={item.name} grade={item.grade}/>
              );
            }}
            />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity 
            style={styles.refresh}
            onPress={this.updateGradebook}>
            <Text>
              Recalculate Grades
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  header: {
    flex: 0.2,
    backgroundColor: 'goldenrod',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 32,
    alignSelf: 'center'
  },
  gbItem: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '80%',
    margin: 10,
    padding: 10,
  },
  gbItemText: {
    fontSize: 24,
  },
  footer: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40
  },
  refresh: {
    height: 70,
    width: 130,
    backgroundColor: '#aaf',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  }
});

//export default Step1;
//export default Step2;
//export default Step3;
export default Step4;
