export const initialState = JSON.parse(localStorage.getItem("store")) || {
  son: 9,
  wishlist: [],
  cart: [],
  token: null,
};
export const reducer = (state, action) => {
  let memory = {};
  switch (action.type) {
    case "TOGGLE_WISHLIST":
      let index = state.wishlist.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) {
        memory = { ...state, wishlist: [...state.wishlist, action.payload] };
        saveStorege(memory);
        return memory;
      } else {
        memory = {
          ...state,
          wishlist: state.wishlist.filter(
            (item) => item.id !== action.payload.id
          ),
        };
        saveStorege(memory);
        return memory;
      }
    case "INC_CART":
      let cartIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (cartIndex < 0) {
        memory = {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
        saveStorege(memory);
        return memory;
      } else {
        memory = {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
        saveStorege(memory);
        return memory;
      }
    case "DEC_CART":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    case "REMOVE_CART":
      return state;
    case "RESET_CART":
      return { ...state, cart: [] };
    case "LOGIN":
      memory = { ...state, token: action.payload };
      saveStorege(memory);
      return memory;
    case "LOGOUT":
      memory = { ...state, token: null };
      saveStorege(memory);
      return memory;
    default:
      return state;
  }
};

function saveStorege(memory) {
  localStorage.setItem("store", JSON.stringify(memory));
}
