import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AlquileresScreen from '../screens/AlquileresScreen';
import FormularioProducto from '../screens/FormularioProducto';
import GraficoVentas from '../screens/GraficoVentasRepo';
import ListaProductos from '../screens/ListaProductos';
import LoginScreen from '../screens/LoginScreen';
import MainMenuScreen from '../screens/MainMenuScreen';
import Manualidades from '../screens/Manualidades';
import Misas from '../screens/Misas';
import MonasterioScreen from '../screens/MonasterioScreen';
import MuseoScreen from '../screens/MuseoScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ReposteriaScreen from '../screens/ReposteriaScreen';
import UsuariosScreen from '../screens/UsuariosScreen';
import VentasScreen from '../screens/VentasScreen';
import ListaManualidades from '../screens/ListaManualidades';
import FormularioManualidades from '../screens/FormularioManualidades';
import FormularioMisas from '../screens/FormularioMisas';
import ListaMisas from '../screens/ListaMisas';
import Sucursal3 from '../screens/Sucursal3';
import SUCURSAL_2 from '../screens/SUCURSAL_2';
import Sucursal_1 from '../screens/Sucursal_1';


const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="MainMenu" component={MainMenuScreen} />
        <Stack.Screen name="Ventas" component={VentasScreen} />
        <Stack.Screen name="Reposteria" component={ReposteriaScreen} />
        <Stack.Screen name="FormularioProducto" component={FormularioProducto} />
        <Stack.Screen name="FormularioManualidades" component={FormularioManualidades} />
        <Stack.Screen name="FormularioMisas" component={FormularioMisas} />
        <Stack.Screen name="ListaProductos" component={ListaProductos} />
        <Stack.Screen name="ListaManualidades" component={ListaManualidades} />
        <Stack.Screen name="ListaMisas" component={ListaMisas} />
        <Stack.Screen name="GraficoVentas" component={GraficoVentas} />
        <Stack.Screen name="Misas" component={Misas} />
        <Stack.Screen name="Manualidades" component={Manualidades} />
        <Stack.Screen name="Alquileres" component={AlquileresScreen} />
        <Stack.Screen name="Museo" component={MuseoScreen} />
        <Stack.Screen name="Monasterio" component={MonasterioScreen} />
        <Stack.Screen name="Usuarios" component={UsuariosScreen} />
        <Stack.Screen name='Sucursal3' component={Sucursal3}/>
        <Stack.Screen name="Sucursal_1" component={Sucursal_1} />
        <Stack.Screen name="SUCURSAL_2" component={SUCURSAL_2} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
