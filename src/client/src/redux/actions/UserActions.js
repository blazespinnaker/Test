/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5d44e33ca046842f16aa4050
*
* You will get 10% discount for each one of your friends
* 
*/
import actionsFunction from "./generated/UserActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import UserApi from "../../api/UserApi";
 
 actionsFunction.loadUserList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return UserApi
     .getUserList()
     .then(list => {
       dispatch(actionsFunction.loadUserSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/
import UserApi from "../../api/UserApi";
import * as types from "../actionTypes";

// Login
actionsFunction.login = function(username, password) {
  return function(dispatch) {
    return UserApi.login(username, password)
      .then(user => {
        dispatch(actionsFunction.loginSuccess(user));
      })
      .catch(error => {
        throw error;
      });
  };
};

actionsFunction.loginSuccess = function(user) {
  return { type: types.LOGIN_SUCCESS, payload: user };
};

// Logut
actionsFunction.logout = function(username, password) {
  return function(dispatch) {
    return dispatch(actionsFunction.logoutSuccess());
  };
};

actionsFunction.logoutSuccess = function(user) {
  return { type: types.LOGOUT_SUCCESS };
};

// Change password
actionsFunction.changePassword = function(passwordNew, passwordOld) {
  return function(dispatch) {
    return UserApi.changePassword(passwordNew, passwordOld)
      .then(user => {
        dispatch(actionsFunction.changePasswordSuccess(user));
      })
      .catch(error => {
        throw error;
      });
  };
};

actionsFunction.changePasswordSuccess = function(user) {
  return { type: types.CHANGE_PASSWORD_SUCCESS, payload: user };
};

// Change password admin
actionsFunction.changePasswordAdmin = function(id, passwordAdmin, passwordNew) {
  return function(dispatch) {
    return UserApi.changePasswordAdmin(id, passwordAdmin, passwordNew)
      .then(user => {
        dispatch(actionsFunction.changePasswordAdminSuccess(user));
      })
      .catch(error => {
        throw error;
      });
  };
};

actionsFunction.changePasswordAdminSuccess = function(user) {
  return { type: types.CHANGE_PASSWORD_ADMIN_SUCCESS, payload: user };
};

export default actionsFunction;
