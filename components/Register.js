/*
import React from 'react';
import { StyleSheet, Button, View, Text, SafeAreaView} from 'react-native';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import CustomInput from './CustomInput';

styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    padding: 10,
    elevation: 10,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  inputText: {
    padding: 7,
  },
});

const registerValidationSchema = yup.object().shape({
  email: yup
  .string()
  .email("Enter invalid email")
  .required("Email is required"),

  password: yup
  .string()
  .min(8, ({min}) => `Password must be at least ${min} characters`)
  .required("Password is required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
})

const Register = () => {
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Registeration Form </Text>
      <Formik
        validationSchema={registerValidationSchema}
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={values => console.log("Comfirmed Password")}
      >
        {({ handleSubmit, isValid }) => (
        <>
          <Field
            compnent={CustomInput}
            name="email"
            placeholder="Email Address"
            keyboardType="email-address" />

          <Field
            component={CustomInput}
            name="password"
            placeholder="Password"
            secureTextEntry />

          <Field
            component={CustomInput}
            name="confirmPassword"
            placeholder="Confirm Password"
            secureTextEntry />#3e6b44
    </SafeAreaView>
  )
}

export default Register;
*/

import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Alert } from "react-native";

const registerValidationSchema = Yup.object().shape({
  email: Yup
    .string()
    .email("Invalid Email")
    .required("Email is required"),

  password: Yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),

  confirmPassword: Yup
    .string()
    .oneOf([Yup.ref('password')], 'Password does not match')
    .required('Confirm password is required'),
})


const Register = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={registerValidationSchema}
      onSubmit = { () => Alert.alert("Finally, your password is comfrimed, IDIOT!")}
    >

      {({
        values, errors, touched, handleChange, setFieldTouched,
        isValid, handleSubmit }) => (


        <View style={styles.container}>
          <View style={styles.formContainer}>

            <Text style={styles.title}>Register Here</Text>

            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
              />
              {errors.email && touched.email && (
                <Text style={styles.errorTxt}>{errors.email}</Text>
              )}
            </View>

            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Password"
                secureTextEntry={true}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
              />
              {errors.password && touched.password && (
                <Text style={styles.errorTxt}>{errors.password}</Text>
              )}
            </View>

            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Confrim Password"
                secureTextEntry={true}
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={() => setFieldTouched('confirmPassword')}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <Text style={styles.errorTxt}>{errors.confirmPassword}</Text>
              )}
            </View>

            <TouchableOpacity
              onPress={handleSubmit}
              disabled={!isValid}
              style={[
                styles.submitBtn,
                { backgroundColor: isValid ? '#3e6b44' : '#A5C9CA' },
              ]}
            >
              <Text style={styles.submitBtnTxt}>Register</Text>
            </TouchableOpacity>

          </View>
        </View>
      )}
    </Formik>
  )
}
export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#555e82',
    paddingHorizontal: 15,
  },

  formContainer: {
    backgroundColor: '#ebed9f',
    padding: 20,
    borderRadius: 20,
    width: '100%',
  },

  title: {
    color: '#3e6b44',
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 15,
  },

  inputWrapper: {
    marginBottom: 15,
  },

  inputStyle: {
    borderColor: '#70121f',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },

  errorTxt: {
    fontSize: 12,
    color: 'red',
  },

  submitBtn: {
    //backgroundColor: '#3e6b44',
    padding: 10,
    borderRadius: 15,
    justifyContent: 'center',
  },

  submitBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },

});