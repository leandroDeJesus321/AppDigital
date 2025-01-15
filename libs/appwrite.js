import { Client, Account, ID, Avatars, Databases } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.AppDigital',
    projectId: '67631ec300106dd7994a',
    databaseId: '6763221c0029e95a939f',
    userColletionId: '676322470033fd83ce11',
    videoColletionId: '676322ae002efb1435f1',
    storageId: '6763249600207f94f649'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Função para criar novos usuários e armazenar no banco de dados.
export const createUser = async (email,password,username) =>{
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username

        );
        if(!newAccount){
            throw Error;
        }

        const avatarUrl = avatars.getInitials();
        await logar(email, password);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userColletionId,
            ID.unique(),{
                accountId: newAccount.$id,
                email: email,
                username: username,
                avatar:avatarUrl,
            }


        );

        return newUser;

    } catch (error) {
        throw new Error(error);
    }
}


// Função para realizar o login do usuário
export const loginFuncao = async (email, password)=>{
    try {
        console.log("Chegar informações na função logar: ",email,"senha: ",password)
        const session = await account.createEmailPasswordSession(email, password);
        console.log("A sessão é:", session);
        return session;
    } catch (error) {
        throw new Error(error);
    }
}

// Pegar usuário atual
export const getCurrentUser = async () =>{
    try {

        const currentAccount = await account.get();
        if(!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userColletionId,
            [Query.equal('accountId', currentAccount.$id)]
        );

        if(!currentUser) throw Error;


        return currentUser.documents[0];
    } catch (error) {
        throw Error(error)
    }
}

// Pegar todos os vídeos online
export const recuperarTodosPosts = async () =>{
    try {
        const posts = await databases.listDocuments(
            config.databaseId,
            config.videoColletionId
        )

        return posts.documents;
    } catch (error) {
        throw Error(error)
    }
}



// Register User
// account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
// .then(function (response) {
//     console.log(response);
// }, function (error) {
//     console.log(error);
// });