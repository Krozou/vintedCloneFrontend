import { View, Text, Image, TouchableOpacity} from 'react-native';
import {Tabs, Redirect, Link} from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';




const TabIcon = ({ color, name }) => {
  return (
    <View>
      <Icon name={name} size={30} color={color} />
    </View>
  );
};


const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel:true,
          tabBarActiveTintColor: '#3AA6B9',
        }}
      >
        <Tabs.Screen
          name="home"
          options = {{
            title: "Accueil",
            headerShown: false,
            tabBarIcon: ({color, focused})=>(
              <TabIcon
                color={focused ? '#3AA6B9' : 'gray'}
                name="home" 
              />
            )
          }}
        />
        <Tabs.Screen
          name="search"
          options = {{
            title: "Rechercher",
            headerShown: false,
            tabBarIcon: ({color, focused})=>(
              <TabIcon
                color={focused ? '#3AA6B9' : 'gray'}
                name="search" 
              />
            )
          }}
        />
        <Tabs.Screen
          name="sell"
          options = {{
            title: "Vendre",
            headerShown: false,
            tabBarIcon: ({color, focused})=>(
              <TabIcon
                color={focused ? '#3AA6B9' : 'gray'}
                name="add-circle-outline" 
              />
            )
          }}
        />
        
        <Tabs.Screen
          name="profile"
          options = {{
            title: "Profil",
            headerShown: false,
            tabBarIcon: ({color, focused})=>(
              <TabIcon
                color={focused ? '#3AA6B9' : 'gray'}
                name="person-outline" 
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout