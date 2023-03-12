import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import {Formik} from 'formik';

export default function Pantalla1() {
  return (
    <SafeAreaView style={{backgroundColor:"white"}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 60,
        }}>
        <Text>Logo</Text>
        <Text
          style={{
            fontSize: 45,
            color: '#FB7328',
            fontWeight: 'bold',
          }}>
          Login
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 40,
        }}>
        <Text
          style={{
            fontSize: 28,
            color: '#FB7328',
            fontWeight: 'bold',
          }}>
          Welcome{' '}
          <Text style={{color: '#757575', fontSize: 28, fontWeight: 'bold'}}>
            back
          </Text>
        </Text>
        <View
          style={{
            borderWidth: 2,
            borderColor: '#FB7328',
            width: '44%',
            marginTop: 20,
          }}></View>
        <View style={{marginTop: 40, display: 'flex', flexDirection: 'column'}}>
          <TextInput
            placeholder="User Name"
            style={{
              borderColor: '#C4C3C3',
              borderWidth: 1,
              borderRadius: 8,
              padding: 10,
              fontSize: 15,
              fontWeight: 'bold',
              marginBottom: 14,
            }}
          />

          <TextInput
            placeholder="Password"
            style={{
              borderColor: '#C4C3C3',
              borderWidth: 1,
              borderRadius: 8,
              padding: 10,
              fontSize: 15,
              fontWeight: 'bold',
            }}
          />
        </View>
        <View
          style={{
            marginTop: 14,
            display: 'flex',
            flexDirection: 'row-reverse',
          }}>
          <Text style={{fontSize: 15, color: '#707070'}}>Forget Password</Text>
        </View>
        <View style={{paddingTop: 24}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FB7328',
              padding: 12,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingTop: 14,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 15, color: '#707070'}}>
            Don't Have an account?{' '}
            <Text style={{color: '#FB7328', fontSize: 15}}>Sign up</Text>
          </Text>
        </View>
        <View
          style={{
            paddingTop: 14,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#707070', fontSize: 15, fontWeight: 'bold'}}>
            Or
          </Text>
        </View>
        <View
          style={{paddingTop: 14, display: 'flex', flexDirection: 'column'}}>
          <View
            style={{
              borderColor: '#C4C3C3',
              borderWidth: 1,
              flexDirection: 'row',
              borderRadius: 8,
            }}>
            <View style={{width: '26%', alignItems: 'flex-end', padding: 10}}>
              <Text>icono</Text>
            </View>
            <View style={{marginLeft: 20, padding: 10}}>
              <Text
                style={{fontSize: 15, fontWeight: 'bold', color: '#707070'}}>
                Login with Google
              </Text>
            </View>
          </View>
          <View style={{paddingTop: 15}}>
            <View
              style={{
                borderColor: '#C4C3C3',
                borderWidth: 1,
                flexDirection: 'row',
                borderRadius: 8,
              }}>
              <View style={{width: '26%', alignItems: 'flex-end', padding: 10}}>
              <Text>icono</Text>
              </View>
              <View style={{marginLeft: 20, padding: 10}}>
                <Text
                  style={{fontSize: 15, fontWeight: 'bold', color: '#707070'}}>
                  Login with Facebook
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
