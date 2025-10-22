import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Heart, 
  Users, 
  MessageSquare, 
  Pill, 
  Clock,
  Shield,
  Sparkles,
  Stethoscope,
  BookOpen,
  Phone,
  Video
} from "lucide-react";
import BackButton from "@/components/BackButton";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Individual Therapy",
      description: "One-on-one sessions tailored to your specific needs and goals.",
      duration: "50 minutes",
      features: ["Cognitive Behavioral Therapy", "Psychodynamic Therapy", "Solution-Focused Therapy"]
    },
    {
      icon: Users,
      title: "Group Therapy",
      description: "Connect with others facing similar challenges in a supportive environment.",
      duration: "90 minutes",
      features: ["Anxiety Support Groups", "Depression Support", "Trauma Recovery Groups"]
    },
    {
      icon: Heart,
      title: "Couples Therapy",
      description: "Strengthen your relationship with evidence-based interventions.",
      duration: "75 minutes",
      features: ["Communication Skills", "Conflict Resolution", "Intimacy Building"]
    },
    {
      icon: MessageSquare,
      title: "Family Therapy",
      description: "Address family dynamics and improve communication patterns.",
      duration: "75 minutes",
      features: ["Family Systems Therapy", "Parent-Child Therapy", "Blended Family Support"]
    },
    {
      icon: Pill,
      title: "Medication Management",
      description: "Expert psychiatric medication evaluation and ongoing monitoring.",
      duration: "30-45 minutes",
      features: ["Initial Assessment", "Medication Optimization", "Side Effect Management"]
    },
    {
      icon: Stethoscope,
      title: "Psychiatric Evaluation",
      description: "Comprehensive assessment to determine the best treatment approach.",
      duration: "90 minutes",
      features: ["Diagnostic Assessment", "Treatment Planning", "Risk Assessment"]
    }
  ];

  const specialtyServices = [
    {
      icon: Shield,
      title: "Crisis Intervention",
      description: "Immediate support during mental health emergencies.",
      availability: "24/7 Crisis Line"
    },
    {
      icon: Video,
      title: "Teletherapy",
      description: "Secure online therapy sessions from the comfort of your home.",
      availability: "Flexible Scheduling"
    },
    {
      icon: BookOpen,
      title: "Psychological Testing",
      description: "Comprehensive assessments for ADHD, autism, and other conditions.",
      availability: "By Appointment"
    },
    {
      icon: Sparkles,
      title: "Wellness Programs",
      description: "Holistic approaches including mindfulness and stress management.",
      availability: "Group & Individual"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <BackButton />
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4">Our Services</Badge>
          <h1 className="text-4xl font-bold mb-6">Comprehensive Mental Health Care</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer a full range of psychiatric and psychological services to meet 
            your unique mental health needs.
          </p>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-16">
        {/* Main Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Core Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-10 w-10 mb-3 text-primary" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    <Clock className="h-3 w-3 mr-1" />
                    {service.duration}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">What's Included:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Specialty Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Specialty Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialtyServices.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <service.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {service.availability}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Insurance & Payment */}
        <Card className="mb-16">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Insurance & Payment</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-4">Accepted Insurance Plans</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Blue Cross Blue Shield</li>
                  <li>• Aetna</li>
                  <li>• Cigna</li>
                  <li>• UnitedHealthcare</li>
                  <li>• Medicare</li>
                  <li>• Medicaid</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Payment Options</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Insurance co-pays and deductibles</li>
                  <li>• Self-pay rates available</li>
                  <li>• Sliding scale fees for qualifying patients</li>
                  <li>• HSA/FSA accepted</li>
                  <li>• Payment plans available</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Services */}
        <div className="text-center mb-16 p-6 bg-card rounded-lg">
          <p className="text-muted-foreground">
            For non-emergency concerns, call our office at (859) 341-7453. If you're experiencing a psychiatric emergency, call 911 or go to your nearest emergency room.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us today to schedule your initial consultation and take the first 
            step toward better mental health.
          </p>
          <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Schedule Appointment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;