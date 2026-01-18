import React, {useState, useEffect} from "react";
import { dbank_backend } from "../../declarations/dbank_backend";


export default function App() {

  const [balance, setBalance] = useState("");
  const [topUpAmount, setTopUpAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [loading, setLoading] = useState(false);


  async function refreshBalance() {
    const balance = await dbank_backend.checkBalance();
    setBalance((await balance).toFixed(2))
  }
  useEffect(() => {
    refreshBalance();
  }, []);


  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const top = parseFloat(topUpAmount);
      const wd = parseFloat(withdrawAmount);
      
      
      await dbank_backend.compound();

     
      if (!Number.isNaN(top) && top > 0) {
        await dbank_backend.topUP(top);
      }

      
      if (!Number.isNaN(wd) && wd > 0) {
        await dbank_backend.withDrawl(wd);
      }
      await refreshBalance();
      setTopUpAmount("");
      setWithdrawAmount("");

     
    } catch (err) {
      console.error(err);
      alert("Transaction failed. Check console.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <img src="/dbank_logo.png" alt="DBank logo" width="120" />
      <h1>Current Balance: ${balance}</h1>

      <div className="divider"></div>

      <form onSubmit={handleSubmit}>
        <h2>Amount to Top Up</h2>
        <input
          type="number"
          step="0.01"
          min="0"
          value={topUpAmount}
          onChange={(e) => setTopUpAmount(e.target.value)}
        />

        <h2>Amount to Withdraw</h2>
        <input
          type="number"
          step="0.01"
          min="0"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
        />

<button id="submit-btn" type="submit" disabled={loading}>
  {loading ? "Processing..." : "Finalise Transaction"}
</button>
      </form>
    </div>
  );
}
