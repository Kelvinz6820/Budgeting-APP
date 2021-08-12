import UpdateTransaction from "../Components/UpdateTransaction";
import { useParams } from "react-router-dom";
function New(...props) {
    console.log(props)
    let { index } = useParams();
    return (
        <div className="Update">
            <h2 className="update-title">Update Transaction</h2>
            <UpdateTransaction index={index} updateTransaction={props[0].updateTransaction} />
        </div>
  );
}

export default New;