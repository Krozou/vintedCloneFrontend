import { Client, ID } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.krozone.vintedClone',
    projectID: "66951130002be8c294b8",
    databaseID: "669512f20022a5fb83a1",
    usersCollectionID: "669513620004a1925304",
    articlesCollectionID: "669513de0039602abffea",
    storageID: "669519700006a18bb0ca"
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectID) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;

const account = new Account(client);

const createUser = (user)=>{
    // Register User
    account.create(ID.unique(), email, password, 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
}
