import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  AlertCircle,
  CheckCircle,
  Star,
  Quote
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: "(859) 341-7453",
      description: "Same-day response to calls and questions",
      action: "tel:859-341-7453"
    },
    {
      icon: Mail,
      title: "Email",
      info: "arnold.shapiro@gmail.com",
      description: "Secure, confidential communication",
      action: "mailto:arnold.shapiro@gmail.com"
    },
    {
      icon: MapPin,
      title: "Locations",
      info: "Cincinnati, OH & Fort Wright, KY",
      description: "Two convenient locations to serve you",
      action: "#"
    },
    {
      icon: Star,
      title: "Psychology Today",
      info: "View Professional Profile",
      description: "Read reviews and learn more about our practice",
      action: "https://www.psychologytoday.com/us/psychiatrists/arnold-g-shapiro-cincinnati-oh/1201880"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "By Appointment" },
    { day: "Sunday", hours: "Emergency Only" }
  ];

  const testimonials = [
    {
      text: "Dr. Shapiro is the most compassionate doctor I've ever met. He listens and involves me in every decision. The best experience I've ever had.",
      author: "Long-time Patient"
    },
    {
      text: "The family-like environment and same-day response to questions made all the difference in my treatment journey.",
      author: "Grateful Patient"
    },
    {
      text: "Finally found a psychiatrist who treats me as an equal and explains everything clearly. Highly recommend!",
      author: "Current Patient"
    },
    {
      text: "I have been seeing Dr Shapiro for years and he has helped me MUCH more than previous psychiatrists could.",
      author: "Long-term Patient"
    },
    {
      text: "Knows more about medicine than any other doctor I have ever met",
      author: "Impressed Patient"
    },
    {
      text: "He helped my daughter when everyone else had given up. We will be forever grateful",
      author: "Grateful Parent"
    },
    {
      text: "Dr.Shapiro found a very quick solution to my depression. His expertise and experience was very evident in my diagnosis and prognosis of my condition. Highly recommended.",
      author: "Recovered Patient"
    },
    {
      text: "I started talking my son to Dr. Shapiro when he was about 10, multiple schools, single mom, felt like a failure, horrible guilt for keeping him apparently I was the worst mother in the world, my son is now 35 no issues w drugs/alcohol, truancy, no unexpected or had to be 'taken care of' babies he just purchased his 1st home completely on his own would not even tell grand parents until after closing and keys were in hand",
      author: "Proud Mother"
    },
    {
      text: "Dr. Shapiro is PRIVATE and he is ABSOLUTELY POSITIVELY THE BEST TO HAVE ON YOUR SIDE AND HAVE YOUR BACK, you pay for what you get, my son's life was not worth short cutting and being cheap, Dr. Shapiro has the right to pick and chose who he deals with everyone out there has the right to decide where they want to go, but every penny I spent I would have gladly paid twice as much insurance or not this is our doctor for life, I'll eat peanut and crackers before I switch doctors. But I was a young girl getting bullied by a system had no support raising a son on her own. Dr Shapiro changed our world and 30 yrs later still has our back. Options and choices",
      author: "Devoted Patient"
    },
    {
      text: "Excellent. Would recommend him to anyone.",
      author: "Satisfied Patient"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-calm">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-warm-accent/10 text-warm-accent border-warm-accent/20 mb-4">
            <Phone className="w-4 h-4 mr-1" />
            Contact Us
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Start Your 
            <span className="text-primary"> Healing Journey?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact us today to schedule your comprehensive evaluation. We're here to help you 
            every step of the way with compassionate, professional care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact us</h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="bg-card border-border hover:shadow-medium transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <contact.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-1">{contact.title}</h4>
                          <a 
                            href={contact.action}
                            className="text-primary font-medium hover:text-primary/80 transition-colors"
                            target={contact.action.startsWith('http') ? '_blank' : undefined}
                            rel={contact.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {contact.info}
                          </a>
                          <p className="text-muted-foreground text-sm mt-1">{contact.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Clock className="w-5 h-5 text-healing" />
                  <h4 className="text-lg font-semibold text-foreground">Office Hours</h4>
                </div>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className="text-foreground font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Emergency Information */}
            <div className="p-6 text-base text-muted-foreground">
              <p>
                For non-emergency concerns, call our office at (859) 341-7453. If you're experiencing a psychiatric emergency, call 911 or go to your nearest emergency room.
              </p>
            </div>
          </div>

          {/* Right Column - Image and Testimonials */}
          <div className="space-y-8">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-large">
                <img 
                  src="/assets/patient-success.jpg" 
                  alt="Happy patients showing successful treatment outcomes" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">What Our Patients Say</h3>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <Quote className="w-5 h-5 text-healing flex-shrink-0 mt-1" />
                        <div>
                          <blockquote className="text-muted-foreground italic mb-3">
                            "{testimonial.text}"
                          </blockquote>
                          <div className="flex items-center space-x-1">
                            <div className="flex space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-warm-accent fill-current" />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground ml-2">- {testimonial.author}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <Card className="bg-gradient-to-br from-warm-accent/5 to-primary/5 border-warm-accent/20">
              <CardContent className="p-8 text-center">
                <CheckCircle className="w-12 h-12 text-healing mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Ready to Begin?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Schedule your comprehensive evaluation today and take the first step 
                  toward better mental health.
                </p>
                <Button 
                  size="lg" 
                  className="bg-warm-accent hover:bg-warm-accent/90 text-warm-accent-foreground shadow-medium w-full"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Your Evaluation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;