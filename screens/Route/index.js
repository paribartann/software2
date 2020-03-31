import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LandingPage from '../LandingPage';
import MainPage from '../MainPage';
import OptionPage from '../OptionPage';
import AccessCameraPage from '../AccessCameraPage';
import OpenCameraPage from '../OpenCameraPage';
import DisplayPage from '../DisplayPage';


const AppStack = createStackNavigator(
  {
  Home : LandingPage,
  Main: MainPage,
  Option: OptionPage,
  Access: AccessCameraPage,
  Open: OpenCameraPage,
  Display: DisplayPage
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#434343',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      },
    }
  }

)

const Route = createAppContainer(AppStack);

export default Route;