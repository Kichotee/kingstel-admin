import AllTransactions from "./all-transactions";
import { CardBox } from "./card-box";

const CardDetails = () => {
    return ( <div className="">
        <div className="flex justify-center gap-7">
            <CardBox/>
        </div>

        <AllTransactions/>
    </div> );
}
 
export default CardDetails;