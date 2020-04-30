import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LandingPage from '../LandingPage';
import MainPage from '../MainPage';
import AboutPage from '../AboutPage';
import AccessPhotoPage from '../AccessPhotoPage';
import OpenCameraPage from '../OpenCameraPage';
import DisplayPage from '../DisplayPage';


const AppStack = createStackNavigator(
  {
  Home : LandingPage,
  About: AboutPage,
  Main: MainPage,
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