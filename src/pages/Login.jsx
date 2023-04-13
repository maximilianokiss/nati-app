import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Formik, useField, validateYupSchema } from 'formik';
import StyledInputText from "../components/StyledTextInput";
import StyledText from "../components/StyledText";
import { loginValidationschema } from "../validationSchemas/login";

const initialValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontSize: 12,
        marginBottom: 20,
        marginTop: -5
    },
    form: {
        margin: 12
    }
})

const FormikInputValue = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name)
    return (
        <>
            <StyledInputText
                error={meta.error}
                placeholder="email"
                values={field.value}
                onChangeText={value => helpers.setValue(value)}
                {...props}
            />
            {meta.error && <StyledText style={styles.error} >{meta.error}</StyledText>}
        </>
    )
}


export default function LoginPage() {
    return (
        <Formik validationSchema={loginValidationschema} initialValues={initialValues} onSubmit={
            values => console.log(values)}>
            {({ handleChange, handleSubmit, values }) => {
                return (
                    <View style={styles.form}>
                        <FormikInputValue
                            placeholder="email"
                            name={"email"}
                        />
                        <FormikInputValue
                            placeholder="password"
                            name={'password'}
                            secureTextEntry
                        />
                        <Button title="Log In" />
                    </View>)
            }}
        </Formik>
    )
}