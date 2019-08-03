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
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN InterestsActionsGenerated.js PLEASE EDIT ../InterestsActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import InterestsApi from "../../../api/InterestsApi";

let actionsFunction = {

  //CRUD METHODS

  // Create interests
  createInterests: function(interests) {
    return function(dispatch) {
      return InterestsApi
        .createInterests(interests)
        .then(interests => {
          dispatch(actionsFunction.createInterestsSuccess(interests));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createInterestsSuccess: function(interests) {
    return { type: types.CREATE_INTERESTS_SUCCESS, payload: interests };
  },


  // Delete interests
  deleteInterests: function(id) {
    return function(dispatch) {
      return InterestsApi
        .deleteInterests(id)
        .then(interests => {
          dispatch(actionsFunction.deleteInterestsSuccess(interests));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteInterestsSuccess: function(interests) {
    return { type: types.DELETE_INTERESTS_SUCCESS, payload: interests };
  },


  // Get interests
  loadInterests: function(id) {
    return function(dispatch) {
      return InterestsApi
        .getOneInterests(id)
        .then(interests => {
          dispatch(actionsFunction.loadInterestsSuccess(interests));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadInterestsSuccess: function(interests) {
    return { type: types.GET_INTERESTS_SUCCESS, payload: interests };
  },

  // Load  list
  loadInterestsList: function() {
    return function(dispatch) {
      return InterestsApi
        .getInterestsList()
        .then(list => {
          dispatch(actionsFunction.loadInterestsListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadInterestsListSuccess: function(list) {
    return { type: types.LIST_INTERESTS_SUCCESS, payload: list };
  },

	
  // Save interests
  saveInterests: function(interests) {
    return function(dispatch) {
      return InterestsApi
        .saveInterests(interests)
        .then(interests => {
          dispatch(actionsFunction.saveInterestsSuccess(interests));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveInterestsSuccess: function(interests) {
    return { type: types.UPDATE_INTERESTS_SUCCESS, payload: interests };
  },


};

export default actionsFunction;
