import React from 'react';
import {
    StackNavigator
} from 'react-navigation'

import HomePage from './HomePage'
import Detail from './Detail'

export const HomeStack = StackNavigator ({
        Screen_Home: {
            screen: HomePage,
           
            navigationOptions : {
                headerVisible: false
            }
            
        },
        Screen_Detail:{
            screen: Detail,
            navigationOptions: {
                title: 'Chi tiết'
             }
        }
    },
    {
        headerMode:'none',
        navigationOptions :{
            header:{
                headerVisible: false
            }
        }
        
    }
)
