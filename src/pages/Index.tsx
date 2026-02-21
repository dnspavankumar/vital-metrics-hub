import { useNavigate } from "react-router-dom";
import { Activity, ArrowRight, BarChart3, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Users,
    title: "Patient Management",
    description: "Comprehensive patient records with real-time tracking and search.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "AI-powered insights for resource planning and demand forecasting.",
  },
  {
    icon: Shield,
    title: "Infrastructure Planning",
    description: "Predict bed utilization, oxygen demand, and staffing requirements.",
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-landing relative overflow-hidden">
      {/* Floating lines background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-landing-accent/10 animate-float-line"
            style={{
              top: `${15 + i * 14}%`,
              animationDelay: `${i * 1.3}s`,
              animationDuration: `${7 + i * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-5 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <Activity className="h-6 w-6 text-landing-accent" />
          <span className="text-lg font-semibold text-landing-foreground">MedCore EHR</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {["Features", "About", "Contact"].map((item) => (
            <button
              key={item}
              className="text-sm text-landing-foreground/60 hover:text-landing-foreground transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
        <Button
          onClick={() => navigate("/dashboard")}
          className="bg-landing-accent text-landing-bg hover:bg-landing-accent/90 text-sm px-5"
        >
          Open Dashboard
        </Button>
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-landing-muted text-landing-accent text-xs font-medium mb-6">
          <Activity className="h-3 w-3" />
          Hospital Administration Platform
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-landing-foreground leading-tight mb-5">
          Intelligent Health Records
          <br />
          <span className="text-landing-accent">& Operational Analytics</span>
        </h1>
        <p className="text-landing-foreground/60 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Streamline hospital operations with AI-powered insights. Predict patient load, optimize resources, and make data-driven infrastructure decisions.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={() => navigate("/dashboard")}
            className="bg-landing-accent text-landing-bg hover:bg-landing-accent/90 gap-2"
          >
            Enter Dashboard
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-landing-muted text-landing-foreground hover:bg-landing-muted"
          >
            Learn More
          </Button>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="relative z-10 max-w-5xl mx-auto px-8 pb-24">
        <div className="grid md:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-landing-muted/50 border border-landing-muted rounded-lg p-6 hover:border-landing-accent/30 transition-colors cursor-pointer group"
            >
              <div className="p-2 rounded-md bg-landing-accent/10 text-landing-accent w-fit mb-4">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-landing-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-landing-foreground/50 leading-relaxed">{feature.description}</p>
              <ArrowRight className="h-4 w-4 text-landing-accent mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
