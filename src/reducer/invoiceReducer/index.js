const initialState = {
  invoiceList: [],
  invoiceItem: {},
};

function invoiceReducer(state, action) {
  switch (action.type) {
    case 'SET_INVOICE_LIST':
      return {...state, invoiceList: action.payload};
    case 'SET_IVOICE_ITEM':
      return {...state, invoiceItem: action.payload};
    case 'UPDATE_INVOICE_LIST':
      return {
        ...state,
        invoiceList: action.payload,
      };
    default:
      throw new Error();
  }
}

export default invoiceReducer;
