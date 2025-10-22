import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Heart, 
  Zap, 
  Shield, 
  AlertTriangle,
  Moon,
  Users,
  Sparkles,
  Target,
  Lightbulb,
  Activity,
  Smile
} from "lucide-react";
import BackButton from "@/components/BackButton";

const Disorders = () => {
  const disorders = [
    {
      icon: Brain,
      title: "Anxiety Disorders",
      description: "Generalized anxiety, panic disorder, social anxiety, and specific phobias.",
      symptoms: ["Excessive worry", "Panic attacks", "Avoidance behaviors", "Physical symptoms"],
      treatments: ["Cognitive Behavioral Therapy", "Exposure therapy", "Medication", "Relaxation techniques"],
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: Heart,
      title: "Depression",
      description: "Major depression, persistent depressive disorder, and seasonal affective disorder.",
      symptoms: ["Persistent sadness", "Loss of interest", "Fatigue", "Sleep disturbances"],
      treatments: ["Therapy", "Antidepressants", "Lifestyle changes", "Light therapy"],
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: Zap,
      title: "Bipolar Disorder",
      description: "Mood disorder characterized by episodes of mania and depression.",
      symptoms: ["Mood swings", "Manic episodes", "Depressive episodes", "Energy changes"],
      treatments: ["Mood stabilizers", "Therapy", "Lifestyle management", "Support groups"],
      color: "from-orange-500/20 to-orange-600/20"
    },
    {
      icon: Shield,
      title: "PTSD & Trauma",
      description: "Post-traumatic stress disorder and other trauma-related conditions.",
      symptoms: ["Flashbacks", "Nightmares", "Hypervigilance", "Emotional numbing"],
      treatments: ["EMDR", "Trauma-focused therapy", "Medication", "Group therapy"],
      color: "from-red-500/20 to-red-600/20"
    },
    {
      icon: Target,
      title: "ADHD",
      description: "Attention-deficit/hyperactivity disorder affecting focus and behavior.",
      symptoms: ["Inattention", "Hyperactivity", "Impulsivity", "Organization difficulties"],
      treatments: ["Stimulant medications", "Behavioral therapy", "Skills training", "Accommodations"],
      color: "from-green-500/20 to-green-600/20"
    },
    {
      icon: Users,
      title: "Autism Spectrum",
      description: "Developmental disorder affecting communication and social interaction.",
      symptoms: ["Social challenges", "Communication differences", "Repetitive behaviors", "Sensory sensitivities"],
      treatments: ["Behavioral interventions", "Social skills training", "Occupational therapy", "Family support"],
      color: "from-teal-500/20 to-teal-600/20"
    },
    {
      icon: AlertTriangle,
      title: "OCD",
      description: "Obsessive-compulsive disorder involving intrusive thoughts and compulsions.",
      symptoms: ["Obsessive thoughts", "Compulsive behaviors", "Anxiety", "Time-consuming rituals"],
      treatments: ["Exposure therapy", "CBT", "Medication", "Mindfulness techniques"],
      color: "from-indigo-500/20 to-indigo-600/20"
    },
    {
      icon: Moon,
      title: "Sleep Disorders",
      description: "Insomnia, sleep apnea, and other sleep-related conditions.",
      symptoms: ["Difficulty falling asleep", "Frequent awakening", "Daytime fatigue", "Sleep disruption"],
      treatments: ["Sleep hygiene", "CBT for insomnia", "Medication", "Sleep studies"],
      color: "from-slate-500/20 to-slate-600/20"
    },
    {
      icon: Activity,
      title: "Eating Disorders",
      description: "Anorexia, bulimia, binge eating disorder, and related conditions.",
      symptoms: ["Distorted body image", "Restrictive eating", "Binge episodes", "Weight preoccupation"],
      treatments: ["Nutritional counseling", "Family therapy", "CBT", "Medical monitoring"],
      color: "from-pink-500/20 to-pink-600/20"
    }
  ];

  const ageGroups = [
    {
      icon: Sparkles,
      title: "Children (6-12)",
      conditions: ["ADHD", "Autism", "Anxiety", "Behavioral disorders"],
      approach: "Play therapy, family involvement, school coordination"
    },
    {
      icon: Lightbulb,
      title: "Adolescents (13-17)",
      conditions: ["Depression", "Anxiety", "Eating disorders", "Identity issues"],
      approach: "Individual therapy, family therapy, peer support"
    },
    {
      icon: Smile,
      title: "Adults (18+)",
      conditions: ["Depression", "Anxiety", "Bipolar", "PTSD", "Substance use"],
      approach: "Individual therapy, medication management, couples therapy"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <BackButton />
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4">Conditions We Treat</Badge>
          <h1 className="text-4xl font-bold mb-6">Mental Health Disorders</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide specialized treatment for a wide range of mental health conditions 
            across all age groups with evidence-based approaches.
          </p>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-16">
        {/* Disorders Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Common Mental Health Conditions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {disorders.map((disorder, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className={`bg-gradient-to-r ${disorder.color} rounded-t-lg`}>
                  <disorder.icon className="h-10 w-10 mb-3 text-primary" />
                  <CardTitle className="text-xl">{disorder.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{disorder.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Common Symptoms:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {disorder.symptoms.map((symptom, idx) => (
                        <li key={idx}>• {symptom}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Treatment Options:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {disorder.treatments.map((treatment, idx) => (
                        <li key={idx}>• {treatment}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Age-Specific Treatment */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Treatment by Age Group</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {ageGroups.map((group, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <group.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold text-xl mb-3">{group.title}</h3>
                  <div className="mb-4">
                    <p className="font-semibold text-sm mb-2">Common Conditions:</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {group.conditions.map((condition, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {condition}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">Our Approach:</span> {group.approach}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Treatment Philosophy */}
        <Card className="mb-16">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Our Treatment Philosophy</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-4">Evidence-Based Care</h3>
                <p className="text-muted-foreground mb-4">
                  We use treatments that have been scientifically proven to be effective, 
                  including cognitive behavioral therapy, medication management, and other 
                  evidence-based interventions.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-4">Personalized Treatment</h3>
                <p className="text-muted-foreground mb-4">
                  Every person is unique, and so is their treatment plan. We work with you 
                  to develop an approach that fits your specific needs, goals, and circumstances.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-4">Holistic Approach</h3>
                <p className="text-muted-foreground mb-4">
                  We consider all aspects of your well-being - mental, physical, social, 
                  and spiritual - to provide comprehensive care that addresses the whole person.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-4">Cultural Sensitivity</h3>
                <p className="text-muted-foreground mb-4">
                  We respect and incorporate your cultural background, values, and beliefs 
                  into your treatment plan to ensure culturally responsive care.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Self-Assessment CTA */}
        <Card className="bg-primary/5 border-primary/20 mb-16">
          <CardContent className="p-8 text-center">
            <Brain className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-2xl font-bold mb-4">Not Sure Where to Start?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Take our confidential mental health screening to help identify areas where 
              you might benefit from professional support.
            </p>
            <Button size="lg" variant="outline">
              Take Free Assessment
            </Button>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Take the Next Step?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Don't let mental health challenges hold you back. Professional help is available, 
            and recovery is possible. Contact us today to schedule your evaluation.
          </p>
          <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get Help Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Disorders;