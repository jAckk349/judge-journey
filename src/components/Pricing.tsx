import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "100+ Basic Problems",
        "5 Programming Languages",
        "Basic Code Editor",
        "Community Support",
        "Progress Tracking"
      ],
      buttonText: "Get Started",
      popular: false,
      variant: "outline" as const
    },
    {
      name: "Pro",
      price: "$9",
      period: "month",
      description: "Best for serious learners",
      features: [
        "500+ Premium Problems",
        "15+ Programming Languages",
        "Advanced Code Editor",
        "Detailed Solutions",
        "Contest Participation",
        "Priority Support",
        "Interview Prep Kit"
      ],
      buttonText: "Start Pro Trial",
      popular: true,
      variant: "default" as const
    },
    {
      name: "Team",
      price: "$29",
      period: "month",
      description: "Ideal for companies & groups",
      features: [
        "Everything in Pro",
        "Team Management",
        "Custom Problem Sets",
        "Performance Analytics",
        "API Access",
        "Dedicated Support",
        "Custom Branding"
      ],
      buttonText: "Contact Sales",
      popular: false,
      variant: "outline" as const
    }
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free and upgrade when you're ready to unlock advanced features 
            and premium content.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative p-8 ${plan.popular ? 'border-primary shadow-xl shadow-primary/20' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                  <Crown className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25' : ''}`}
                variant={plan.variant}
              >
                {plan.buttonText}
                {plan.popular && <Zap className="ml-2 h-4 w-4" />}
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All plans include a 7-day free trial. No credit card required for Free plan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;