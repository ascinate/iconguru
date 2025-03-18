"use client";
import { useEffect, useState } from "react";

export default function PlansPage() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function fetchPlans() {
      try {
        const response = await fetch("https://iconsguru.com/admin/api/subscriptions");
        if (!response.ok) {
          throw new Error("Failed to fetch plans");
        }
        const data = await response.json();
        console.log("API Response:", data);

        setPlans(Array.isArray(data.subscriptions) ? data.subscriptions : []);
      } catch (error) {
        console.error("Error fetching subscriptions:", error);
      }
    }

    fetchPlans();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Choose a Subscription Plan</h2>

      {plans.length === 0 ? (
        <p>No plans available.</p>
      ) : (
        <div className="row">
          {plans.map((plan) => (
            <div key={plan.subscription_id} className="col-md-4">
              <div className="card p-3">
                <h3>{plan.name}</h3>
                <p>Price: ${plan.price} / {plan.duration}</p>
                <p>Icon Limit: {plan.icon_limit ? plan.icon_limit : "Unlimited"}</p>
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
