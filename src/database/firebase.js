/* eslint-disable */
import firebase from 'firebase';
import Axios from 'axios';
import FirebaseConfig from './firebaseConfig.json';

class Firebase {

    constructor(){

        if(!firebase.apps.length) firebase.initializeApp(FirebaseConfig)
    }

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

    save(route, data, callback){
        this.userLogged(user => {

            if(user){
                firebase
                    .database()
                    .ref( (route ? '/users/' : '/') + user.uid +  route)
                    .set(data, callback)
            }
    
            else {    
                callback(false);
            }
            
        })
    }

    saveFinance(route, data, callback){
        this.userLogged(user => {

            if(user){
                firebase
                    .database()
                    .ref( '/finance/' + route)
                    .set(data, callback)
            }
    
            else {    
                callback(false);
            }
            
        })
    }

    get(route, callback ){

        const snapshotData = firebase
            .database()
            .ref(route);

        snapshotData
            .on('value', snapshot => callback(snapshot.val()) );
    }

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

}

export default new Firebase()