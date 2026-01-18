import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";


persistent actor dbank{
  stable var currentValue: Float = 300.0;

  stable var startTime = Time.now();
  Debug.print(debug_show(startTime));

  public func topUP(amount: Float): async() {
    currentValue += amount;
    Debug.print(debug_show (currentValue));
    
    };

    public func withDrawl(amount: Float): async (){
      let tempValue: Float = currentValue - amount;
      if (tempValue >= 0) {
        currentValue -= amount;
        Debug.print(debug_show (currentValue));
      } else 
      Debug.print("Amount is too large current value is less tahn 0");

    };


  public query func checkBalance() : async Float {
  currentValue;
};
  
  public func compound(): async (){
  let currentTime : Int = Time.now();
  let elapsedNs : Int = currentTime - startTime;

  // convert ns to seconds
  let elapsedS : Int = elapsedNs / 1_000_000_000;

  if (elapsedS > 0) {
    let ratePerSecond : Float = 0.000001; 
    let factor : Float = Float.pow(1.0 + ratePerSecond, Float.fromInt(elapsedS));
    currentValue := currentValue * factor;
    startTime := currentTime;
  };
  };


}