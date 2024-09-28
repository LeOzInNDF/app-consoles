import { StatusBar } from 'expo-status-bar';
import { Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Playstation from './componentes/Playstation';
import Nintendo from './componentes/Nintendo';
import Xbox from './componentes/Xbox';

import PlayIcon from './assets/ps.png';
import ndIcon from './assets/nintendo.png';
import XboxIcon from './assets/xbox.png';

const  Abas  = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <StatusBar style="auto" />
      <Abas.Navigator>
        <Abas.Screen name='Playstation'
        component={ Playstation }
        options={{
          tabBarIcon: ({ color }) => (
          <Image source={PlayIcon} color={ color } size={ 20 }></Image>
          )
          
          }}
        ></Abas.Screen>


        <Abas.Screen name='Nintendo'
        component={ Nintendo }
          options={{
          tabBarIcon: ({ color }) => (
          <Image source={ndIcon} color={ color } size={ 20 } />
          )
          
          }}
        />


        <Abas.Screen name='Xbox'
        component={ Xbox }
          options={{
          tabBarIcon: ({ color }) => (
          <Image source={ XboxIcon } color={ color } size={ 20 } />
          )
          
          }}
        />

        
      </Abas.Navigator>
    </NavigationContainer>
    
     
  
  )
}


