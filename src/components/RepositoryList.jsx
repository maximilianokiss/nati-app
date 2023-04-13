import React, { useEffect, useState } from "react";
import { FlatList, Text, View, } from "react-native";
import RepositoryItem from "./RepositoryItem";

const RepositoryList = () => {

    const [repositories, setRepositories] = useState(null)

    const fetchRepositories = async () => {
        const response = await globalThis.fetch('http://192.168.100.6:5000/api/repositories');
        const json = await response.json();
        setRepositories(json)
    }

    useEffect(() => {
        fetchRepositories()
    }, [])

    const repositoriesNodes = repositories ? repositories.edges.map(edge => edge.node) : []

    return (
        <FlatList data={repositoriesNodes}
            renderItem={({ item: repo }) => (
                <RepositoryItem {...repo} />
            )}
            ItemSeparatorComponent={() => <Text> </Text>}>

        </FlatList>
    )
}
export default RepositoryList;