

import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
const App = () => {
  //let propsData = "Test"
  const [propsData, updateProps] = useState("Test")
  const [age, updateage] = useState(12)

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Hello Props</Text>
      <PropsComponent name={propsData} />

      <Text style={{ fontSize: 30 }}>Update Props</Text>

      <Text style={{ fontSize: 30 }}>Hello Props</Text>
      <Button title='Update propes' onPress={()=>updateProps("Props updated")}/>
      <PropsComponent name={propsData} age={age} />

    </View>
  );
};

//this is component with props (data sharing from one component to another component)
const PropsComponent = (data) => {
  return (
    <View style={{ backgroundColor: 'yellow' }}>
      <Text style={{ fontSize: 30 }}>{data.name}</Text>
      <Text style={{ fontSize: 30 }}>{data.age}</Text>
    </View>
  );
}


export default App;
