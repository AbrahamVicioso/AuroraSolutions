"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  // Apply 20% discount for yearly billing
  const yearlyDiscount = 0.8

  const plans = [
    {
      name: "Free",
      price: 0,
      actions: 300,
      bots: 5,
      dataCheck: "5 min",
      teamMembers: 1,
      features: ["Single Action Bots"],
      buttonText: "Try for Free",
      highlighted: false,
    },
    {
      name: "Personal",
      price: 9.99,
      actions: 600,
      bots: 10,
      dataCheck: "5 min",
      teamMembers: 1,
      features: ["Multi Action Bots", "1 Premium App"],
      buttonText: "Try Personal",
      highlighted: false,
    },
    {
      name: "Professional",
      price: 19,
      actions: 2000,
      bots: 20,
      dataCheck: "5 min",
      teamMembers: 1,
      features: ["Multi Action Bots", "Premium Apps"],
      buttonText: "Try Professional",
      highlighted: false,
    },
    {
      name: "Startup",
      price: 39,
      actions: 10000,
      bots: 50,
      dataCheck: "2 min",
      teamMembers: 1,
      features: ["Multi Action Bots", "Premium Apps", "Auto Retry"],
      buttonText: "Try Startup",
      highlighted: false,
    },
    {
      name: "Growth",
      price: 79,
      actions: 30000,
      bots: 100,
      dataCheck: "2 min",
      teamMembers: 3,
      features: ["Multi Action Bots", "Premium Apps", "Auto Retry", "Excess Actions", "Shared Folders"],
      buttonText: "Try Growth",
      highlighted: true,
    },
    {
      name: "Business",
      price: 159,
      actions: 100000,
      bots: 200,
      dataCheck: "1 min",
      teamMembers: 5,
      features: [
        "Multi Action Bots",
        "Premium Apps",
        "Auto Retry",
        "Excess Actions",
        "Data Controls",
        "Shared Folders",
      ],
      buttonText: "Try Business",
      highlighted: false,
    },
  ]

  // Format numbers with commas
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Billing toggle */}
        <div className="flex justify-center items-center mb-10 space-x-4">
          <span
            className={cn(
              "text-lg font-medium cursor-pointer",
              billingCycle === "monthly" ? "text-gray-900" : "text-gray-500",
            )}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </span>

          <button
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200"
            onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
          >
            <span
              className={cn(
                "inline-block h-4 w-4 transform rounded-full bg-white transition",
                billingCycle === "yearly" ? "translate-x-6" : "translate-x-1",
              )}
            />
          </button>

          <div className="flex items-center">
            <span
              className={cn(
                "text-lg font-medium cursor-pointer",
                billingCycle === "yearly" ? "text-gray-900" : "text-gray-500",
              )}
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly
            </span>
            {billingCycle === "yearly" && (
              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-400 text-gray-900">
                20% OFF
              </span>
            )}
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {plans.map((plan) => {
            const price =
              billingCycle === "yearly"
                ? (plan.price * yearlyDiscount).toFixed(plan.price === Math.floor(plan.price) ? 0 : 2)
                : plan.price.toFixed(plan.price === Math.floor(plan.price) ? 0 : 2)

            return (
              <div
                key={plan.name}
                className={cn(
                  "bg-white rounded-lg overflow-hidden border border-gray-200",
                  plan.highlighted ? "bg-red-500 text-white" : "",
                )}
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="text-center mb-6">
                    <h3 className={cn("text-lg font-medium", plan.highlighted ? "text-white" : "text-gray-900")}>
                      {plan.name}
                    </h3>
                    <div className="mt-4 flex items-baseline justify-center">
                      <span
                        className={cn("text-3xl font-extrabold", plan.highlighted ? "text-white" : "text-gray-900")}
                      >
                        ${price}
                      </span>
                      <span className={cn("ml-1 text-sm", plan.highlighted ? "text-blue-100" : "text-gray-500")}>
                        /mo
                      </span>
                    </div>
                  </div>

                  <button
                    className={cn(
                      "mt-2 mb-6 w-full py-2 px-4 border rounded-md text-sm font-medium",
                      plan.highlighted
                        ? "border-white text-red-500 bg-white hover:bg-blue-50"
                        : "border-red-500 text-red-500 hover:bg-blue-50",
                    )}
                  >
                    {plan.buttonText}
                  </button>

                  <div className="space-y-3 flex-grow">
                    <div className="flex justify-between">
                      <span className={cn(plan.highlighted ? "text-blue-100" : "text-gray-500")}>Actions</span>
                      <span className={cn("font-medium", plan.highlighted ? "text-white" : "text-gray-900")}>
                        {formatNumber(plan.actions)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className={cn(plan.highlighted ? "text-blue-100" : "text-gray-500")}>Bots</span>
                      <span className={cn("font-medium", plan.highlighted ? "text-white" : "text-gray-900")}>
                        {plan.bots}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className={cn(plan.highlighted ? "text-blue-100" : "text-gray-500")}>Data Check</span>
                      <span className={cn("font-medium", plan.highlighted ? "text-white" : "text-gray-900")}>
                        {plan.dataCheck}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className={cn(plan.highlighted ? "text-blue-100" : "text-gray-500")}>Team Members</span>
                      <span className={cn("font-medium", plan.highlighted ? "text-white" : "text-gray-900")}>
                        {plan.teamMembers}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <Check
                          className={cn(
                            "h-4 w-4 mr-2 flex-shrink-0",
                            plan.highlighted ? "text-white" : "text-red-500",
                          )}
                        />
                        <span className={cn("text-sm", plan.highlighted ? "text-white" : "text-gray-700")}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

