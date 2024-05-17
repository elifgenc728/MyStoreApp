import { SafeAreaView, View, Image, Alert } from "react-native";
import React, { useEffect } from "react";
import styles from './LoginStyle';
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Formik } from 'formik';
import usePost from "../../hooks/usePost";
import Config from "react-native-config";
import * as Yup from 'yup';
import ErrorMessage from "../../components/Error/ErrorMessage";

const Login = ({navigation}) => {
    const { data, loading, error, post } = usePost();

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Lütfen kullanıcı adınızı giriniz.'),
        password: Yup.string().required('Lütfen şifrenizi giriniz.')
    });

    useEffect(() => {
        if (data && !error) {
            navigation.navigate('ProductsPage');
        } else if (error) {
            Alert.alert('MyStore', 'Bir hata oluştu: ' + error.message );
        }
    }, [data, error, navigation]);

    const handleLogin = (values) => {
        post(`${Config.API_AUTH_URL}/login`, values);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../assets/login_logo.png')} />
            </View>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={handleLogin}
                validationSchema={validationSchema}
            >
                {({ handleSubmit, handleChange, values, errors }) => (
                    <View style={styles.body_container}>
                        <Input
                            placeholder='Kullanıcı adını giriniz..'
                            iconName='account'
                            value={values.username}
                            onType={handleChange('username')}
                        />
                        <ErrorMessage errorValue={errors.username} />
                        <Input
                            placeholder='Şifrenizi giriniz..'
                            iconName='key'
                            value={values.password}
                            onType={handleChange('password')}
                            isSecure
                        />
                        <ErrorMessage errorValue={errors.password} />
                        <Button
                            text='Giriş Yap'
                            onPress={handleSubmit}
                            loading={loading}
                        />
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    );
};

export default Login;