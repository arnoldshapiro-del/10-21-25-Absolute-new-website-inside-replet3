import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  BookOpen, 
  GraduationCap, 
  Clock,
  FileText,
  PillIcon,
  UserCheck
} from "lucide-react";

const ServicesSection = () => {
  const treatmentApproach = [
    {
      icon: FileText,
      title: "Comprehensive Evaluation",
      description: "Our three-part evaluation system ensures we understand each patient's unique needs, history, and circumstances before developing a treatment plan."
    },
    {
      icon: PillIcon,
      title: "Medication & Therapy",
      description: "Unlike many psychiatrists that only prescribe medication, or programs that can only offer therapy, our practice provides both therapy and medication management."
    },
    {
      icon: UserCheck,
      title: "Patient Education",
      description: "We put a heavy emphasis on patient education to empower our patients with knowledge about their conditions and treatment options."
    }
  ];

  const childServices = [
    "ADHD",
    "Anxiety disorders", 
    "Autism spectrum disorder",
    "Behavior & discipline concerns",
    "Bipolar disorder",
    "Depression",
    "OCD",
    "Oppositional Defiant Disorder",
    "Tourette's syndrome"
  ];

  const adultServices = [
    "Anxiety disorders",
    "ADHD",
    "Bipolar disorder",
    "Depression",
    "Obsessive-Compulsive Disorder",
    "Mood disorders",
    "Panic disorder",
    "Relationship difficulties",
    "Work-related stress"
  ];

  const additionalServices = [
    "Genetic Testing with GeneSight",
    "Family Therapy",
    "Play Therapy for young children",
    "Medication Management",
    "Treatment Planning",
    "Psychological Education",
    "Crisis Intervention"
  ];

  return (
    <section id="services" className="py-20 bg-gradient-calm">
      <div className="container mx-auto px-4">
        {/* Treatment Approach */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Our Unique Approach
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12">
            Our approach to treatment is different from any other practice in the tri-state area. Dr. Shapiro and his 
            team use a unique three-part evaluation system to best treat patients. Scheduling is flexible, education 
            is a priority, and nothing matters more than working together with patients for optimal results.
          </p>
        </div>

        {/* Treatment Approach Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {treatmentApproach.map((approach, index) => (
            <Card key={index} className="bg-card hover:shadow-medium transition-all duration-300 border-border text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-warm-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <approach.icon className="w-8 h-8 text-warm-accent" />
                </div>
                <CardTitle className="text-xl text-foreground">{approach.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{approach.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-trust/10 text-trust border-trust/20 mb-4">
            <Stethoscope className="w-4 h-4 mr-1" />
            Our Services
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in outpatient treatment of many psychiatric disorders in children, families, and adults. Our 
            diverse clinical staff is trained in a variety of treatment modalities and are ready to help.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Child & Adolescent Services */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-warm-accent text-center">
                Child & Adolescent Services
              </CardTitle>
              <p className="text-muted-foreground text-center">
                Effective treatment for childhood disorders & concerns
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {childServices.map((service, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-warm-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button variant="link" className="text-warm-accent p-0 h-auto">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Adult Services */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-primary text-center">
                Adult Services
              </CardTitle>
              <p className="text-muted-foreground text-center">
                Comprehensive psychiatric care for adults
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {adultServices.map((service, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button variant="link" className="text-primary p-0 h-auto">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Additional Services */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-healing text-center">
                Additional Services
              </CardTitle>
              <p className="text-muted-foreground text-center">
                Specialized services to complement your care
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {additionalServices.map((service, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-healing rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button variant="link" className="text-healing p-0 h-auto">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Start Your Journey to Better Mental Health?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your comprehensive evaluation and begin your personalized treatment plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-warm-accent hover:bg-warm-accent/90 text-warm-accent-foreground shadow-medium"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Schedule Your Evaluation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary/5"
            >
              Learn About Our Process
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;