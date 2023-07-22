import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TransactionTable from "../../Components/TransactionTable";
import { getTransactions } from "../../app/actions/transaction.actions";

function Home() {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transaction.transactions);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (!localStorage.getItem('x-auth-token')) {
      window.location.href = "login";
    }
    if(user){
      dispatch(getTransactions(user._id));
    }
  }, [user]);

  return (
    <div className="container mt-5 mb-5">
      {user && (
        <>
          {" "}
          <h1 style={{color: "#5A189A"}}>USER PROFILE</h1>
          <hr />
          <h5>Name : {user.userName} </h5>
          <h5>Email : {user.email} </h5>
          <h5>Address : {user.address} </h5>
          <hr />
          <h1  style={{color: "#5A189A"}}>YOUR PREVIOUS TRANSACTIONS</h1>
          <TransactionTable dataArray={transactions} role={"USER"} />
        </>
      )}
    </div>
  );
}

export default Home;
