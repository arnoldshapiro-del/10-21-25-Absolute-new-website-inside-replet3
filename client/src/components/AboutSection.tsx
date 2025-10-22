import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Heart, Users, BookOpen, Clock } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Image and credentials */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="relative rounded-2xl overflow-hidden shadow-large">
                  <img 
                    src="/assets/dr-shapiro.png" 
                    alt="Dr. Arnold G. Shapiro - Experienced Psychiatrist" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
                </div>
              </div>
              
              {/* Credentials badge */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <Card className="bg-card shadow-medium border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-trust/10 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-trust" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Board Certified</div>
                        <div className="text-sm text-muted-foreground">Psychiatrist</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">35+</div>
                  <div className="text-sm text-foreground">Years of Experience</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-healing/5 to-healing/10 border-healing/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-healing mb-2">8000+</div>
                  <div className="text-sm text-foreground">Patients and Families Helped</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20">
                <Heart className="w-4 h-4 mr-1" />
                Meet Dr. Shapiro
              </Badge>
              <h2 className="text-4xl font-bold text-foreground">
                <span className="text-primary">35+ Years of Compassionate Care</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Dr. Arnold Shapiro has dedicated over 35 years to helping thousands of patients 
                overcome life's biggest challenges. His philosophy: treat every patient like family, 
                listen deeply, collaborate every step, and empower you with choices.
              </p>
            </div>

            {/* Treatment philosophy */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">My Treatment Philosophy</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-healing/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-healing" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Equal Partnership</h4>
                    <p className="text-muted-foreground">
                      We're equals working together toward your wellness.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-healing/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-4 h-4 text-healing" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Patient Education</h4>
                    <p className="text-muted-foreground">
                      I teach you about your condition, all possible treatments, and we explore pros and cons together.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-healing/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-healing" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Exceptional Accessibility</h4>
                    <p className="text-muted-foreground">
                      Same-day response to questions and concerns. We're here when you need us.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal approach */}
            <Card className="bg-gradient-to-br from-card to-accent/5 border-accent/20">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">What Makes Us Different</h3>
                  </div>
                  <blockquote className="text-muted-foreground italic">
                    "There's no 'one-size-fits-all' approach. Together, we'll map out the treatment plan 
                    that fits your unique situation and life. If something isn't working, we adjust. 
                    If you need backup plans, we create them. You're never alone in this journey."
                  </blockquote>
                  <div className="text-sm text-foreground font-medium">— Dr. Arnold G. Shapiro</div>
                </div>
              </CardContent>
            </Card>

            {/* Call to action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-warm-accent hover:bg-warm-accent/90 text-warm-accent-foreground shadow-medium"
              >
                Schedule Your Evaluation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary/5"
              >
                Learn About Our Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;