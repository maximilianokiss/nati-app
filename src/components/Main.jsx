import React from 'react'
import { Text, View } from 'react-native'
import RepositoryList from './RepositoryList'
import Constants from 'expo-constants'
import AppBar from './AppBar'
import { Route, Routes } from "react-router-native";
import LoginPage from '../pages/Login'

const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar />
            <Routes>
                <Route exact path="/" element={<RepositoryList />} />
                <Route path="/signin" element={<LoginPage />} />
            </Routes>
            {/* <Switch>
                <Route path='/' exact>
                    <RepositoryList />
                </Route>
                <Route path='/signin' exact>
                    <Text>Working on it</Text>
                </Route>
                <Redirect to='/' />
            </Switch> */}
        </View>
    )
}

export default Main