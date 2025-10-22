import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Download, 
  Upload, 
  Clock, 
  Shield,
  CheckCircle,
  AlertCircle,
  Printer,
  Mail,
  User,
  Heart,
  CreditCard,
  FileCheck
} from "lucide-react";
import BackButton from "@/components/BackButton";

const Forms = () => {
  const patientForms = [
    {
      title: "New Patient Intake Form",
      description: "Complete medical and psychiatric history, current symptoms, and treatment goals.",
      duration: "15-20 minutes",
      required: true,
      icon: User,
      downloadLink: "#"
    },
    {
      title: "Insurance Information Form",
      description: "Insurance details, billing information, and authorization forms.",
      duration: "5-10 minutes",
      required: true,
      icon: CreditCard,
      downloadLink: "#"
    },
    {
      title: "Medical History Questionnaire",
      description: "Detailed medical history, current medications, and allergies.",
      duration: "10-15 minutes",
      required: true,
      icon: Heart,
      downloadLink: "#"
    },
    {
      title: "Consent for Treatment",
      description: "Treatment consent, privacy notice, and patient rights information.",
      duration: "5 minutes",
      required: true,
      icon: FileCheck,
      downloadLink: "#"
    }
  ];

  const assessmentForms = [
    {
      title: "Depression Screening (PHQ-9)",
      description: "Nine-question assessment to screen for depression symptoms.",
      duration: "3-5 minutes",
      required: false,
      category: "Depression",
      downloadLink: "#"
    },
    {
      title: "Anxiety Screening (GAD-7)",
      description: "Seven-question assessment for generalized anxiety disorder.",
      duration: "3-5 minutes",
      required: false,
      category: "Anxiety",
      downloadLink: "#"
    },
    {
      title: "ADHD Self-Report Scale",
      description: "Comprehensive assessment for adult ADHD symptoms.",
      duration: "10-15 minutes",
      required: false,
      category: "ADHD",
      downloadLink: "#"
    },
    {
      title: "Mood Disorder Questionnaire",
      description: "Screening tool for bipolar disorder and mood episodes.",
      duration: "5-10 minutes",
      required: false,
      category: "Mood",
      downloadLink: "#"
    },
    {
      title: "PTSD Checklist (PCL-5)",
      description: "Assessment for post-traumatic stress disorder symptoms.",
      duration: "5-10 minutes",
      required: false,
      category: "Trauma",
      downloadLink: "#"
    }
  ];

  const specialtyForms = [
    {
      title: "Child/Adolescent Intake",
      description: "Specialized intake form for patients under 18 years old.",
      notes: "Parent/guardian signature required",
      downloadLink: "#"
    },
    {
      title: "Couples Therapy Assessment",
      description: "Relationship history and goals for couples counseling.",
      notes: "Both partners must complete",
      downloadLink: "#"
    },
    {
      title: "Medication Management Form",
      description: "Current medications, side effects, and treatment response.",
      notes: "Bring current medication bottles",
      downloadLink: "#"
    },
    {
      title: "Crisis Safety Plan",
      description: "Personalized plan for managing mental health crises.",
      notes: "Completed during appointment",
      downloadLink: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <BackButton />
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4">Patient Forms</Badge>
          <h1 className="text-4xl font-bold mb-6">Forms & Documents</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download and complete the necessary forms before your appointment to 
            streamline your visit and ensure we can provide the best care possible.
          </p>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-16">
        {/* Instructions */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" />
              Before Your First Appointment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-3">What to Do:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Complete all required forms before your appointment
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Bring completed forms
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Arrive 15 minutes early for your first visit
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Bring a valid ID and insurance card
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3">Submission Options:</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <Printer className="h-4 w-4 text-blue-500" />
                    Bring completed paper forms
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-blue-500" />
                    Complete forms during your visit (arrive early)
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Required Forms */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Required Forms for New Patients</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {patientForms.map((form, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <form.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <CardTitle className="text-lg">{form.title}</CardTitle>
                        <Badge variant="destructive" className="mt-1">Required</Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {form.duration}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{form.description}</p>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1" asChild>
                      <a href={form.downloadLink} download={`${form.title.replace(/\s+/g, '_')}.pdf`}>
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={form.downloadLink} target="_blank" rel="noopener noreferrer">
                        <FileText className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Assessment Forms */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Mental Health Assessments</h2>
          <p className="text-muted-foreground mb-6">
            These screening tools help us better understand your symptoms and provide more targeted care. 
            Complete only the assessments that apply to your concerns.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {assessmentForms.map((form, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary">{form.category}</Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {form.duration}
                    </div>
                  </div>
                  <h3 className="font-bold mb-2">{form.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{form.description}</p>
                  <Button size="sm" variant="outline" className="w-full" asChild>
                    <a href={form.downloadLink} download={`${form.title.replace(/\s+/g, '_')}.pdf`}>
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Specialty Forms */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Specialty Forms</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {specialtyForms.map((form, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">{form.title}</h3>
                  <p className="text-muted-foreground mb-3">{form.description}</p>
                  <p className="text-sm text-amber-600 bg-amber-50 p-2 rounded mb-4">
                    <strong>Note:</strong> {form.notes}
                  </p>
                  <Button size="sm" variant="outline" asChild>
                    <a href={form.downloadLink} download={`${form.title.replace(/\s+/g, '_')}.pdf`}>
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact for Help */}
        <Card>
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Need Help with Forms?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you have questions about completing any forms or need assistance, 
              our staff is here to help. Don't let paperwork prevent you from getting care.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-warm-accent hover:bg-warm-accent/90 text-warm-accent-foreground shadow-medium">
                Call (513) 794-8777 or (859) 341-7453
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Forms;