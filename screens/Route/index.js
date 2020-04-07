import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LandingPage from '../LandingPage';
import MainPage from '../MainPage';
import OptionPage from '../OptionPage';
import AccessPhotoPage from '../AccessPhotoPage';
import OpenCameraPage from '../OpenCameraPage';
import DisplayPage from '../DisplayPage';


const AppStack = createStackNavigator(
  {
  Home : LandingPage,
  Main: MainPage,
  Option: OptionPage,
  Open: OpenCameraPage,
  Access: AccessPhotoPage,
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