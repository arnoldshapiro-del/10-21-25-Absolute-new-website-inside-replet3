import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Award, Heart, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-calm overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-trust/10 text-trust border-trust/20">
                <Award className="w-4 h-4 mr-1" />
                35+ Years Experience
              </Badge>
              <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20">
                <Users className="w-4 h-4 mr-1" />
                8000 + Patients Helped
              </Badge>
            </div>

            {/* Main headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Expert Psychiatry Care 
                <span className="text-primary"> With Compassion</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Over 35 years of successful, caring treatment in Cincinnati and Fort Wright. 
                Every patient is treated with equal respect, warmth, and understanding. 
                We collaborate—exploring all options and deciding together on the best treatment plan.
              </p>
            </div>

            {/* Key differentiators */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-healing rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-healing-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Collaborative Treatment Approach</h3>
                  <p className="text-muted-foreground">We discuss pros and cons of all treatment options and decide together</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-healing rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-healing-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Family-Like Environment</h3>
                  <p className="text-muted-foreground">Treated exactly as I would treat my own family members</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-healing rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-healing-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Same-Day Response</h3>
                  <p className="text-muted-foreground">Extremely accessible - we get back to you almost always the same day</p>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-warm-accent hover:bg-warm-accent/90 text-warm-accent-foreground shadow-medium text-lg px-8 py-6"
              >
                Schedule Your Evaluation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary/5 text-lg px-8 py-6"
              >
                Learn About Our Approach
              </Button>
            </div>
          </div>

          {/* Right column - Family Image */}
          <div className="relative flex items-center justify-center">
            <div className="rounded-2xl overflow-hidden shadow-large">
              <img 
                src="/assets/family-photo.png" 
                alt="Happy family - Caring for Cincinnati Families Since 1989" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;