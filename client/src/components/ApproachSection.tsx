import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  MessageSquare, 
  Scale, 
  GraduationCap,
  CheckCircle,
  Heart
} from "lucide-react";

const ApproachSection = () => {
  const approachCards = [
    {
      icon: Brain,
      title: "Comprehensive Evaluation",
      description: "Thorough assessment of symptoms, history, and specific needs to create an individualized treatment plan."
    },
    {
      icon: MessageSquare,
      title: "Therapeutic Alliance",
      description: "Building a strong doctor-patient relationship based on trust, understanding, and collaboration."
    },
    {
      icon: Scale,
      title: "Balanced Treatment",
      description: "Integrating medication management with psychotherapy for optimal treatment outcomes."
    },
    {
      icon: GraduationCap,
      title: "Patient Education",
      description: "Empowering patients through knowledge and understanding of their condition and treatment options."
    }
  ];

  const principles = [
    "Scheduling is flexible",
    "Education is a priority", 
    "Nothing matters more than working together with patients for optimal results"
  ];

  return (
    <section id="approach" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20 mb-4">
            <Heart className="w-4 h-4 mr-1" />
            Our Approach
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-8">
            Our Unique Approach
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            Our approach to treatment is different from any other practice in the tri-state area. 
            Dr. Shapiro and his team use a unique three-part evaluation system to best treat patients.
          </p>
          
          {/* Quote */}
          <Card className="bg-gradient-to-br from-primary/5 to-healing/5 border-primary/20 mb-8 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <blockquote className="text-lg text-muted-foreground italic mb-4 leading-relaxed">
                "I believe in careful use of medication combined with psychotherapy. I am a strong believer in close work with the patient, keeping up with the newest information in the field, and finding a treatment regimen best suited for each individual patient."
              </blockquote>
              <div className="text-foreground font-semibold text-right">— Dr. Arnold Shapiro</div>
            </CardContent>
          </Card>

          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Unlike many psychiatrists that only prescribe medication, or programs that can only offer therapy, 
            our practice is based on the research-proven fact that patients who require mental health care often 
            respond best to a combination of therapy and medication. In our practice, we can provide both therapy 
            and medication management.
          </p>
        </div>

        {/* Approach Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {approachCards.map((card, index) => (
            <Card key={index} className="bg-card hover:shadow-medium transition-all duration-300 border-border text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-healing/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <card.icon className="w-8 h-8 text-healing" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">{card.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Principles */}
        <div className="text-center">
          <div className="space-y-4 max-w-2xl mx-auto">
            {principles.map((principle, index) => (
              <div key={index} className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-5 h-5 text-healing flex-shrink-0" />
                <span className="text-muted-foreground">{principle}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;