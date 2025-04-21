import authReducer from '../store/authSlice';
import uiReducer from '../store/uiSlice';

describe('Redux State Management', () => {

  describe('Auth', () => {

    it('Should handle initial state', () => {
      const initialState = {
        token: null,
        userId: null,
        userName: null,
        isAuth: false,
        isLoading: true,
      };

      // authReducer(initialState, action)
      expect(authReducer(undefined, {})).toEqual(initialState);
    });

    it('Should login successfully', () => {
      const initialState = {
        token: null,
        userId: null,
        userName: null,
        isAuth: false,
        isLoading: true,
      };

      const user = { 
        token: 'testToken', 
        userId: 1, 
        userName: 'testUser' 
      };

      const action = {
        type: 'auth/login', // requires slice name prefix sliceName/reducerName
        payload: user
      };

      const expectedState = {
        token: user.token,
        userId: user.userId,
        userName: user.userName,
        isAuth: true,
        isLoading: false,
      };

      // authReducer(initialState, action)
      expect(authReducer(initialState, action)).toEqual(expectedState);
    });

    it('Should logout successfully', () => {
      const user = { 
        token: 'testToken', 
        userId: 1, 
        userName: 'testUser' 
      };

      const initialState = {
        token: user.token,
        userId: user.userId,
        userName: user.userName,
        isAuth: true,
        isLoading: false,
      };

      const action = {
        type: 'auth/logout', // requires slice name prefix sliceName/reducerName
      };

      const expectedState = {
        token: null,
        userId: null,
        userName: null,
        isAuth: false,
        isLoading: false,
      };

      // authReducer(initialState, action)
      expect(authReducer(initialState, action)).toEqual(expectedState);
    });

  });

  describe('UI', () => {

    it('Should load with the menu closed', () =>{
      const initialState = {
        authNav: {
          open: false,
        }
      }

      // uiReducer(initialState, action)
      expect(uiReducer(undefined, {})).toEqual(initialState);
    });

    it('Should open the menu', () =>{
      const initialState = {
        authNav: {
          open: false,
        }
      }

      const action = {
        type: 'ui/toggleAuthNav'
      }

      const expectedState = {
        authNav: {
          open: true,
        }
      }

      // uiReducer(initialState, action)
      expect(uiReducer(initialState, action)).toEqual(expectedState);
    });

    it('Should close the menu', () =>{
      const initialState = {
        authNav: {
          open: true,
        }
      }

      const action = {
        type: 'ui/toggleAuthNav'
      }

      const expectedState = {
        authNav: {
          open: false,
        }
      }

      // uiReducer(initialState, action)
      expect(uiReducer(initialState, action)).toEqual(expectedState);
    });

  });

});