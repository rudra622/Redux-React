import {INC,DSC} from "../Constant/actionType";
const initialvalue = 0;
const IncDsc =(state = initialvalue,action) =>{
    
    switch(action.type){
        case INC :{
            return state + 1;
            break;
        }
        case DSC :{
            return state + 1;
            break;
        }
        default :{
            return state;
        }
    }
}

export default IncDsc;