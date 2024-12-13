function App() {
  return (
    <div>
      <h1>Simple, traffic-based pricing</h1>
      <p>Sign-up for our 30-day trial. No credit card required.</p>

      <div>
        <h3>100k Pageviews</h3>
        <div className="slidebar"></div>
        <div>
          <span>16.00</span>
          <span>/month</span>
        </div>

        <div>
          <p>Monthly Billing</p>
          <input type="checkbox" />
          <div>
            <p>Yearly Billing </p>
            <span>-25%</span>
          </div>
        </div>

        <div className="customHr"></div>
        <div>
          <img src="" alt="" />
          <p>Unlimited wabsites </p>
        </div>
        <div>
          <img src="" alt="" />
          <p>100% data ownership</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Email reports</p>
        </div>

        <button>Start my trial</button>
      </div>
    </div>
  );
}

export default App;
