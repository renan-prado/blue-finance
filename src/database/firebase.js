/* eslint-disable */
import firebase from 'firebase';
import FirebaseConfig from './firebaseConfig.json';

class Firebase {

    constructor(){

        if(!firebase.apps.length) firebase.initializeApp(FirebaseConfig)
    }

    // check if the user is logged in
    userLogged(callback){

        firebase
            .auth()
            .onAuthStateChanged(function(user) {
                if(callback){
                    if(user){ callback(user) }
                    else { callback(false) }
                }
            })
    }

    // get data with route
    get(route, callback ){

        const snapshotData = firebase
            .database()
            .ref(route);

        snapshotData
            .on('value', snapshot => callback(snapshot.val()) );
    }
    
    // get data with route and limit
    getLimit(route, limit = 10, callback ){

        const snapshotData = firebase
            .database()
            .ref(route)
            .limitToLast(limit);

        snapshotData
            .on('value', snapshot => callback(snapshot.val()) );
    }

    // create user
    createUser(email, password, callback){
       
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(function(error) {
                var { code, message } = error.code;
                if(callback){
                    if(code){ callback(code, message)}
                    else { callback(false) }
                }

            });
    }

    // login user
    login(email, password, callback){
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(function(error) {
                var { code, message } = error.code;
                if(callback){
                    if(code){ callback(code, message)}
                    else { callback(false) }
                }
            });
    }

    // logout user
    logout(){
        firebase
            .auth()
            .signOut()
            .then(function() {
                window.location.href = '/#/login';
            })
            .catch(function(error) {
                console.warn('Erro ao fazer logout');
            });
    }

    // verify duplicates
    verifyEmail(email, callback){
        firebase
            .auth()
            .fetchSignInMethodsForEmail(email)
            .then(function(EmailAuthProvider){
                callback(EmailAuthProvider.length > 0);
            });
    }

}

export default new Firebase()