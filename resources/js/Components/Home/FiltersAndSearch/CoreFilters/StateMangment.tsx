import CheckComponentSlice from "./CheckComponentSlice";
import {check, unCheck,reset,checkSingle} from "./CheckComponentSlice";
import { useSelector, useDispatch } from 'react-redux'
import { RootState  } from '@/store'

interface StateMangment{
    state:any
}
class StateMangment implements StateMangment{
    state;
    constructor(id:string){
        this.state = useSelector((state:RootState) => state.check)
    }
}
// const state = useSelector((state:RootState) => state.check)
class StateGetterAll extends StateMangment{
    constructor(){
        super(id.toString());
    }

}
