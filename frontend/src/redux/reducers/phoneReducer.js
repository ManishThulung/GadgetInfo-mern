import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL,
  FETCH_FAIL,
  FETCH_ALL_PHONES,
  FETCH_FAIL_PHONES,
  FETCH_PHONE,
  FETCH_PHONE_FAIL,
  CREATE_PHONE_REQUEST,
  CREATE_PHONE_SUCCESS,
  CREATE_PHONE_FAIL,
  CREATE_PHONE_RESET,
  DELETE_PHONE_REQUEST,
  DELETE_PHONE_SUCCESS,
  DELETE_PHONE_FAIL,
  DELETE_PHONE_RESET,
  UPDATE_PHONE_REQUEST,
  UPDATE_PHONE_SUCCESS,
  UPDATE_PHONE_FAIL,
  UPDATE_PHONE_RESET,
  ADMIN_PRODUCT_REQUEST,
  ADMIN_PRODUCT_SUCCESS,
  ADMIN_PRODUCT_FAIL,
  COMPARE_PHONE_REQUEST,
  COMPARE_PHONE_SUCCESS,
  COMPARE_PHONE_FAIL,
  CLEAR_ERRORS,
} from "../constants/constants";

export const phoneReducer = (
  state = { isLoading: true, phones: [] },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case ADMIN_PRODUCT_REQUEST:
      return {
        isLoading: true,
        phones: [],
      };
    case ADMIN_PRODUCT_SUCCESS:
      return {
        isLoading: false,
        phones: action.payload,
      };

    case FETCH_ALL:
    case FETCH_ALL_PHONES:
      return action.payload;

    case ADMIN_PRODUCT_FAIL:
    case FETCH_FAIL_PHONES:
    case FETCH_FAIL:
      return {
        isLoading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// create new phone
export const createPhoneReducer = (state = { phone: {} }, action) => {
  switch (action.type) {
    case CREATE_PHONE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_PHONE_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        phone: action.payload.phone,
      };
    case DELETE_PHONE_SUCCESS:
      return {
        loading: false,
        isDeleted: true,
        success: action.payload.success,
      };
    case CREATE_PHONE_FAIL:
    case DELETE_PHONE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_PHONE_RESET:
    case DELETE_PHONE_RESET:
      return {
        ...state,
        success: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

// single phone detail
export const phoneDetailReducer = (
  state = { isLoading: true, phone: {} },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };

    case FETCH_PHONE:
      return { phone: action.payload };

    case FETCH_PHONE_FAIL:
      return { ...state, error: action.payload };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

// export const phoneDetailReducer = (state = { phone: {} }, action) => {
//   switch (action.type) {
//     case PHONE_DETAILS_REQUEST:
//       return {
//         loading: true,
//         ...state,
//       };
//     case PHONE_DETAILS_SUCCESS:
//       return {
//         loading: false,
//         phone: action.payload,
//       };
//     case PHONE_DETAILS_FAIL:
//       return {
//         loading: false,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// delete and update phone
export const deleteUpdatePhoneReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PHONE_REQUEST:
    case UPDATE_PHONE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_PHONE_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case UPDATE_PHONE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_PHONE_FAIL:
    case UPDATE_PHONE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_PHONE_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_PHONE_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const comparePhoneReducer = (
  state = { loading: true, phones: {} },
  // state = { phoneOne: {}, phoneTwo: {} },
  action
) => {
  switch (action.type) {
    case COMPARE_PHONE_REQUEST:
      return {
        ...state,
        loading: true,
        // phoneOne: null,
        // phoneTwo: null,
      };
    case COMPARE_PHONE_SUCCESS:
      return {
        loading: false,
        phoneOne: action.payload.phoneOne,
        phoneTwo: action.payload.phoneTwo,
      };
    case COMPARE_PHONE_FAIL:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
