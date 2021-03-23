import { Actions } from "../actions";

const initialState = {
  items: null,
  itemCopy:null,
  total: 0
};
function dataUsers(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_LIST_USER_SUCCESS:
      const { items, total } = action.payload;
      return { ...state, items, total,itemCopy:items };
    // case Actions.FILTER_USER:
    //   const { key } = action.payload;
    //   const listData = [...state.itemCopy];
    //   console.log(listData);
    //   const listFilter = listData?.filter(item=>{
    //     let show = false;
    //     item.skills?.forEach(i=>{
    //       if(i.toString()===key) show=true;
    //     })
    //     if (show) return item;
    //     else return;
    //   })
    //   return {...state,items:listFilter} 
    // case Actions.FILTER_USER_USERNAME:
    //   const { name } = action.payload;
    //   const dataString = [...state.itemCopy];
    //   const dataFiltered = dataString.filter(item=>item.userName.includes(name))
    //   return {...state,items:dataFiltered}
    default:
      return { ...state };
  }
}
export default dataUsers;
