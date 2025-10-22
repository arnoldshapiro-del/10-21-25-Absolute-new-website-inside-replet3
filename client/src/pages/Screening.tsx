import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, ArrowRight, Phone, Mail, Calendar, AlertTriangle, Shield, CheckCircle } from "lucide-react";

interface Question {
  id: string;
  text: string;
  options: Array<{
    value: number;
    text: string;
    crisis?: boolean;
  }>;
}

interface Assessment {
  id: string;
  title: string;
  description: string;
  icon: string;
  questions: Question[];
  stats: {
    questions: number;
    minutes: string;
    rating: string;
  };
}

const Screening = () => {
  const [currentAssessment, setCurrentAssessment] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [showCrisis, setShowCrisis] = useState(false);
  const [privacyPreference, setPrivacyPreference] = useState('anonymous');

  const assessments: Record<string, Assessment> = {
    adhd: {
      id: 'adhd',
      title: 'ADHD Assessment (ASRS-18)',
      description: 'Comprehensive screening for Attention-Deficit/Hyperactivity Disorder in adults and teens',
      icon: '🧠',
      stats: { questions: 18, minutes: '5-7', rating: 'Most Popular' },
      questions: [
        {
          id: 'adhd_1',
          text: 'How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?',
          options: [
            { value: 0, text: 'Never' },
            { value: 1, text: 'Rarely' },
            { value: 2, text: 'Sometimes' },
            { value: 3, text: 'Often' },
            { value: 4, text: 'Very Often' }
          ]
        },
        {
          id: 'adhd_2',
          text: 'How often do you have difficulty getting things in order when you have to do a task that requires organization?',
          options: [
            { value: 0, text: 'Never' },
            { value: 1, text: 'Rarely' },
            { value: 2, text: 'Sometimes' },
            { value: 3, text: 'Often' },
            { value: 4, text: 'Very Often' }
          ]
        },
        {
          id: 'adhd_3',
          text: 'How often do you have problems remembering appointments or obligations?',
          options: [
            { value: 0, text: 'Never' },
            { value: 1, text: 'Rarely' },
            { value: 2, text: 'Sometimes' },
            { value: 3, text: 'Often' },
            { value: 4, text: 'Very Often' }
          ]
        }
      ]
    },
    depression: {
      id: 'depression',
      title: 'Depression Screening (PHQ-9)',
      description: 'Patient Health Questionnaire-9 for depression symptoms over the last 2 weeks',
      icon: '🌧️',
      stats: { questions: 9, minutes: '3-4', rating: 'Clinical Standard' },
      questions: [
        {
          id: 'dep_1',
          text: 'Little interest or pleasure in doing things',
          options: [
            { value: 0, text: 'Not at all' },
            { value: 1, text: 'Several days' },
            { value: 2, text: 'More than half the days' },
            { value: 3, text: 'Nearly every day' }
          ]
        },
        {
          id: 'dep_9',
          text: 'Thoughts that you would be better off dead, or thoughts of hurting yourself in some way',
          options: [
            { value: 0, text: 'Not at all', crisis: false },
            { value: 1, text: 'Several days', crisis: true },
            { value: 2, text: 'More than half the days', crisis: true },
            { value: 3, text: 'Nearly every day', crisis: true }
          ]
        }
      ]
    },
    anxiety: {
      id: 'anxiety',
      title: 'Anxiety Assessment (GAD-7)',
      description: 'Generalized Anxiety Disorder assessment for anxiety symptoms over the last 2 weeks',
      icon: '😰',
      stats: { questions: 7, minutes: '3-4', rating: 'Comprehensive' },
      questions: [
        {
          id: 'anx_1',
          text: 'Feeling nervous, anxious, or on edge',
          options: [
            { value: 0, text: 'Not at all' },
            { value: 1, text: 'Several days' },
            { value: 2, text: 'More than half the days' },
            { value: 3, text: 'Nearly every day' }
          ]
        }
      ]
    },
    bipolar: {
      id: 'bipolar',
      title: 'Bipolar Disorder Screening (MDQ)',
      description: 'Mood Disorder Questionnaire for bipolar symptoms',
      icon: '🎭',
      stats: { questions: 13, minutes: '5-7', rating: 'Mood Focus' },
      questions: [
        {
          id: 'bipolar_1',
          text: 'You felt so good or so hyper that other people thought you were not your normal self?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        }
      ]
    },
    ptsd: {
      id: 'ptsd',
      title: 'PTSD Screening (PCL-5)',
      description: 'Post-Traumatic Stress Disorder assessment',
      icon: '🛡️',
      stats: { questions: 20, minutes: '8-10', rating: 'Trauma Focus' },
      questions: [
        {
          id: 'ptsd_1',
          text: 'Repeated, disturbing, and unwanted memories of the stressful experience',
          options: [
            { value: 0, text: 'Not at all' },
            { value: 1, text: 'A little bit' },
            { value: 2, text: 'Moderately' },
            { value: 3, text: 'Quite a bit' },
            { value: 4, text: 'Extremely' }
          ]
        }
      ]
    },
    ocd: {
      id: 'ocd',
      title: 'OCD Screening (Y-BOCS)',
      description: 'Yale-Brown Obsessive Compulsive Scale screening',
      icon: '🔄',
      stats: { questions: 10, minutes: '5-7', rating: 'Detailed' },
      questions: [
        {
          id: 'ocd_1',
          text: 'Time occupied by obsessive thoughts: How much of your time is occupied by obsessive thoughts?',
          options: [
            { value: 0, text: 'None' },
            { value: 1, text: 'Less than 1 hour per day' },
            { value: 2, text: '1 to 3 hours per day' },
            { value: 3, text: '3 to 8 hours per day' },
            { value: 4, text: 'More than 8 hours per day' }
          ]
        }
      ]
    },
    autism: {
      id: 'autism',
      title: 'Autism Spectrum Assessment (AQ-10)',
      description: 'Screening for autism spectrum traits in adults and adolescents',
      icon: '🧩',
      stats: { questions: 10, minutes: '4-5', rating: 'Comprehensive' },
      questions: [
        {
          id: 'autism_1',
          text: 'I often notice small sounds when others do not',
          options: [
            { value: 0, text: 'Definitely disagree' },
            { value: 0, text: 'Slightly disagree' },
            { value: 1, text: 'Slightly agree' },
            { value: 1, text: 'Definitely agree' }
          ]
        }
      ]
    },
    eating: {
      id: 'eating',
      title: 'Eating Disorder Screening (SCOFF)',
      description: 'Quick screening for eating disorder symptoms',
      icon: '🍽️',
      stats: { questions: 5, minutes: '2-3', rating: 'Quick Screen' },
      questions: [
        {
          id: 'eat_1',
          text: 'Do you make yourself Sick because you feel uncomfortably full?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        }
      ]
    },
    substance: {
      id: 'substance',
      title: 'Substance Use Screening (CAGE-AID)',
      description: 'Assessment for alcohol and drug use concerns',
      icon: '🚫',
      stats: { questions: 4, minutes: '2-3', rating: 'Quick Screen' },
      questions: [
        {
          id: 'sub_1',
          text: 'Have you ever felt you ought to Cut down on your drinking or drug use?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        }
      ]
    },
    sleep: {
      id: 'sleep',
      title: 'Sleep Disorder Screening (ISI)',
      description: 'Insomnia Severity Index for sleep problems assessment',
      icon: '😴',
      stats: { questions: 7, minutes: '3-4', rating: 'Sleep Focus' },
      questions: [
        {
          id: 'sleep_1',
          text: 'Difficulty falling asleep',
          options: [
            { value: 0, text: 'None' },
            { value: 1, text: 'Mild' },
            { value: 2, text: 'Moderate' },
            { value: 3, text: 'Severe' },
            { value: 4, text: 'Very Severe' }
          ]
        }
      ]
    },
    panic: {
      id: 'panic',
      title: 'Panic Disorder Screening (PDSS)',
      description: 'Panic Disorder Severity Scale assessment',
      icon: '💨',
      stats: { questions: 7, minutes: '4-5', rating: 'Panic Focus' },
      questions: [
        {
          id: 'panic_1',
          text: 'How many panic attacks did you have during the past week?',
          options: [
            { value: 0, text: '0' },
            { value: 1, text: '1' },
            { value: 2, text: '2' },
            { value: 3, text: '3' },
            { value: 4, text: '4 or more' }
          ]
        }
      ]
    },
    social_anxiety: {
      id: 'social_anxiety',
      title: 'Social Anxiety Screening (SPIN)',
      description: 'Social Phobia Inventory for social anxiety symptoms',
      icon: '👥',
      stats: { questions: 17, minutes: '6-8', rating: 'Social Focus' },
      questions: [
        {
          id: 'social_1',
          text: 'I am afraid of people in authority',
          options: [
            { value: 0, text: 'Not at all' },
            { value: 1, text: 'A little bit' },
            { value: 2, text: 'Moderately' },
            { value: 3, text: 'Quite a bit' },
            { value: 4, text: 'Extremely' }
          ]
        }
      ]
    },
    stress: {
      id: 'stress',
      title: 'Stress Assessment (PSS-10)',
      description: 'Perceived Stress Scale for stress level evaluation',
      icon: '⚡',
      stats: { questions: 10, minutes: '4-5', rating: 'Stress Focus' },
      questions: [
        {
          id: 'stress_1',
          text: 'In the last month, how often have you been upset because of something that happened unexpectedly?',
          options: [
            { value: 0, text: 'Never' },
            { value: 1, text: 'Almost Never' },
            { value: 2, text: 'Sometimes' },
            { value: 3, text: 'Fairly Often' },
            { value: 4, text: 'Very Often' }
          ]
        }
      ]
    },
    anger: {
      id: 'anger',
      title: 'Anger Assessment (STAXI-2)',
      description: 'State-Trait Anger Expression Inventory for anger management',
      icon: '😡',
      stats: { questions: 10, minutes: '4-5', rating: 'Anger Focus' },
      questions: [
        {
          id: 'anger_1',
          text: 'I am quick tempered',
          options: [
            { value: 0, text: 'Almost Never' },
            { value: 1, text: 'Sometimes' },
            { value: 2, text: 'Often' },
            { value: 3, text: 'Almost Always' }
          ]
        }
      ]
    },
    postpartum: {
      id: 'postpartum',
      title: 'Postpartum Depression (EPDS)',
      description: 'Edinburgh Postnatal Depression Scale for new mothers',
      icon: '👶',
      stats: { questions: 10, minutes: '4-6', rating: 'Maternal Health' },
      questions: [
        {
          id: 'post_1',
          text: 'I have been able to laugh and see the funny side of things',
          options: [
            { value: 0, text: 'As much as I always could' },
            { value: 1, text: 'Not quite so much now' },
            { value: 2, text: 'Definitely not so much now' },
            { value: 3, text: 'Not at all' }
          ]
        },
        {
          id: 'post_10',
          text: 'The thought of harming myself has occurred to me',
          options: [
            { value: 0, text: 'Never', crisis: false },
            { value: 1, text: 'Hardly ever', crisis: true },
            { value: 2, text: 'Sometimes', crisis: true },
            { value: 3, text: 'Yes, quite often', crisis: true }
          ]
        }
      ]
    },
    personality: {
      id: 'personality',
      title: 'Personality Disorder Screening (PDQ-4)',
      description: 'Screening for personality disorder traits',
      icon: '🎭',
      stats: { questions: 15, minutes: '6-8', rating: 'Personality Focus' },
      questions: [
        {
          id: 'pers_1',
          text: 'I have always been a loner',
          options: [
            { value: 0, text: 'False' },
            { value: 1, text: 'True' }
          ]
        }
      ]
    },
    borderline: {
      id: 'borderline',
      title: 'Borderline Personality (MSI-BPD)',
      description: 'McLean Screening Instrument for Borderline Personality Disorder',
      icon: '💔',
      stats: { questions: 10, minutes: '5-6', rating: 'BPD Focus' },
      questions: [
        {
          id: 'bpd_1',
          text: 'Have you been extremely moody?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'bpd_7',
          text: 'Have you tried to hurt or kill yourself or threatened to do so?',
          options: [
            { value: 0, text: 'No', crisis: false },
            { value: 1, text: 'Yes', crisis: true }
          ]
        }
      ]
    },
    psychosis: {
      id: 'psychosis',
      title: 'Psychosis Risk Screening (PRIME)',
      description: 'PRIME Screen for early psychosis risk assessment',
      icon: '🌀',
      stats: { questions: 12, minutes: '5-7', rating: 'Psychosis Focus' },
      questions: [
        {
          id: 'psych_1',
          text: 'I think that I have felt that there are odd or unusual things going on that I can\'t explain',
          options: [
            { value: 0, text: 'Definitely disagree' },
            { value: 1, text: 'Somewhat disagree' },
            { value: 2, text: 'Somewhat agree' },
            { value: 3, text: 'Definitely agree' }
          ]
        }
      ]
    }
  };

  // External screening tools that link to static HTML pages
  const externalScreenings = [
    {
      title: 'Complete ADHD Assessment',
      description: 'Full 18-question ASRS screening',
      icon: '🧠',
      url: '/screening/adhd.html',
      stats: { questions: 18, minutes: '6-8', rating: 'Complete' }
    },
    {
      title: 'Complete Depression Screening',
      description: 'Full PHQ-9 with crisis detection',
      icon: '🌧️',
      url: '/screening/phq9.html',
      stats: { questions: 9, minutes: '4-5', rating: 'Clinical' }
    },
    {
      title: 'Complete Anxiety Assessment',
      description: 'Full GAD-7 anxiety screening',
      icon: '😰',
      url: '/screening/gad7.html',
      stats: { questions: 7, minutes: '3-4', rating: 'Standard' }
    },
    {
      title: 'Bipolar Disorder Assessment',
      description: 'Mood Disorder Questionnaire',
      icon: '🎭',
      url: '/screening/bipolar.html',
      stats: { questions: 13, minutes: '5-7', rating: 'Mood' }
    },
    {
      title: 'PTSD Screening',
      description: 'PCL-5 trauma assessment',
      icon: '🛡️',
      url: '/screening/ptsd.html',
      stats: { questions: 20, minutes: '8-10', rating: 'Trauma' }
    },
    {
      title: 'OCD Assessment',
      description: 'Y-BOCS obsessive-compulsive screening',
      icon: '🔄',
      url: '/screening/ocd.html',
      stats: { questions: 10, minutes: '5-7', rating: 'OCD Focus' }
    },
    {
      title: 'Autism Spectrum Assessment',
      description: 'AQ-10 autism traits screening',
      icon: '🧩',
      url: '/screening/autism.html',
      stats: { questions: 10, minutes: '4-5', rating: 'Autism' }
    },
    {
      title: 'Eating Disorder Screening',
      description: 'SCOFF eating disorder assessment',
      icon: '🍽️',
      url: '/screening/eating-disorder.html',
      stats: { questions: 5, minutes: '2-3', rating: 'Quick' }
    },
    {
      title: 'Substance Use Screening',
      description: 'CAGE-AID substance abuse assessment',
      icon: '🚫',
      url: '/screening/substance-abuse.html',
      stats: { questions: 4, minutes: '2-3', rating: 'Substance' }
    },
    {
      title: 'Sleep Disorder Assessment',
      description: 'Insomnia Severity Index',
      icon: '😴',
      url: '/screening/sleep-disorder.html',
      stats: { questions: 7, minutes: '3-4', rating: 'Sleep' }
    },
    {
      title: 'Panic Disorder Screening',
      description: 'PDSS panic disorder assessment',
      icon: '💨',
      url: '/screening/panic-disorder.html',
      stats: { questions: 7, minutes: '4-5', rating: 'Panic' }
    },
    {
      title: 'Social Anxiety Assessment',
      description: 'SPIN social phobia screening',
      icon: '👥',
      url: '/screening/social-anxiety.html',
      stats: { questions: 17, minutes: '6-8', rating: 'Social' }
    },
    {
      title: 'Stress Level Assessment',
      description: 'PSS-10 perceived stress scale',
      icon: '⚡',
      url: '/screening/stress.html',
      stats: { questions: 10, minutes: '4-5', rating: 'Stress' }
    },
    {
      title: 'Anger Management Assessment',
      description: 'STAXI-2 anger expression screening',
      icon: '😡',
      url: '/screening/anger.html',
      stats: { questions: 10, minutes: '4-5', rating: 'Anger' }
    },
    {
      title: 'Postpartum Depression',
      description: 'EPDS for new mothers',
      icon: '👶',
      url: '/screening/postpartum-depression.html',
      stats: { questions: 10, minutes: '4-6', rating: 'Maternal' }
    },
    {
      title: 'Personality Disorder Screening',
      description: 'PDQ-4 personality traits assessment',
      icon: '🎭',
      url: '/screening/personality-disorder.html',
      stats: { questions: 15, minutes: '6-8', rating: 'Personality' }
    },
    {
      title: 'Borderline Personality',
      description: 'MSI-BPD borderline traits screening',
      icon: '💔',
      url: '/screening/borderline-personality.html',
      stats: { questions: 10, minutes: '5-6', rating: 'BPD' }
    },
    {
      title: 'Psychosis Risk Assessment',
      description: 'PRIME early psychosis screening',
      icon: '🌀',
      url: '/screening/schizophrenia.html',
      stats: { questions: 12, minutes: '5-7', rating: 'Psychosis' }
    }
  ];

  const startAssessment = (assessmentId: string) => {
    setCurrentAssessment(assessmentId);
    setCurrentQuestionIndex(0);
    setResponses({});
    setShowResults(false);
    setShowCrisis(false);
  };

  const handleAnswer = (questionId: string, value: number, hasCrisis?: boolean) => {
    setResponses(prev => ({ ...prev, [questionId]: value }));
    
    if (hasCrisis) {
      setShowCrisis(true);
    }
  };

  const nextQuestion = () => {
    if (!currentAssessment) return;
    
    const assessment = assessments[currentAssessment];
    const currentQuestion = assessment.questions[currentQuestionIndex];
    
    if (!(currentQuestion.id in responses)) {
      alert('Please select an answer before proceeding.');
      return;
    }
    
    if (currentQuestionIndex < assessment.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      completeAssessment();
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const completeAssessment = () => {
    setShowResults(true);
  };

  const calculateResults = () => {
    if (!currentAssessment) return { score: 0, level: 'Unknown', recommendations: [] };
    
    const totalScore = Object.values(responses).reduce((sum, value) => sum + value, 0);
    
    let level: string;
    let levelClass: string;
    let recommendations: string[];
    
    // Basic scoring logic for demo purposes
    const maxScore = assessments[currentAssessment].questions.length * 3;
    const percentage = (totalScore / maxScore) * 100;
    
    if (percentage <= 30) {
      level = 'Low concern level';
      levelClass = 'bg-green-100 text-green-800 border-green-300';
      recommendations = [
        'Your responses suggest minimal symptoms',
        'Continue practicing self-care',
        'Monitor symptoms over time',
        'Contact Dr. Shapiro if symptoms worsen'
      ];
    } else if (percentage <= 60) {
      level = 'Moderate concern level';
      levelClass = 'bg-yellow-100 text-yellow-800 border-yellow-300';
      recommendations = [
        'Your responses suggest moderate symptoms',
        'Consider discussing with Dr. Shapiro',
        'Monitor symptoms closely',
        'Practice healthy coping strategies'
      ];
    } else {
      level = 'High concern level';
      levelClass = 'bg-red-100 text-red-800 border-red-300';
      recommendations = [
        'Your responses suggest significant symptoms',
        'Strongly recommend evaluation with Dr. Shapiro',
        'Consider immediate professional support',
        'Treatment options may be beneficial'
      ];
    }
    
    return { score: totalScore, level, levelClass, recommendations };
  };

  const returnToGrid = () => {
    setCurrentAssessment(null);
    setCurrentQuestionIndex(0);
    setResponses({});
    setShowResults(false);
    setShowCrisis(false);
  };

  if (showCrisis) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-4xl mx-auto">
          <Alert className="bg-red-50 border-red-200 mb-8">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            <div className="ml-3">
              <h3 className="text-2xl font-bold text-red-800 mb-4">Immediate Help Available</h3>
              <p className="text-red-700 mb-6">
                If you are having thoughts of suicide or self-harm, please reach out for immediate help. You are not alone.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Card className="bg-white">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-red-600 mb-2">Crisis Lifeline</h4>
                    <a href="tel:988" className="text-red-600 font-bold text-lg hover:underline">
                      📞 Call or Text 988
                    </a>
                    <p className="text-sm text-gray-600 mt-1">24/7 free and confidential support</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-red-600 mb-2">Emergency Services</h4>
                    <a href="tel:911" className="text-red-600 font-bold text-lg hover:underline">
                      📞 Call 911
                    </a>
                    <p className="text-sm text-gray-600 mt-1">For immediate emergency response</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-red-600 mb-2">Crisis Text Line</h4>
                    <a href="sms:741741?body=HOME" className="text-red-600 font-bold text-lg hover:underline">
                      📱 Text HOME to 741741
                    </a>
                    <p className="text-sm text-gray-600 mt-1">24/7 crisis support via text</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-red-600 mb-2">Dr. Shapiro's Office</h4>
                    <a href="tel:859-341-7453" className="text-red-600 font-bold text-lg hover:underline">
                      📞 (859) 341-7453
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Same-day response for urgent concerns</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex gap-4 justify-center">
                <Button onClick={() => setShowCrisis(false)} variant="outline">
                  Continue with Assessment
                </Button>
                <Button onClick={returnToGrid} className="bg-blue-600 hover:bg-blue-700">
                  Return to Screening Tools
                </Button>
              </div>
            </div>
          </Alert>
        </div>
      </div>
    );
  }

  if (showResults && currentAssessment) {
    const results = calculateResults();
    const assessment = assessments[currentAssessment];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-blue-800 mb-4">Your Assessment Results</CardTitle>
              <div className="text-6xl mb-4">{assessment.icon}</div>
              <h2 className="text-2xl font-semibold mb-2">{assessment.title}</h2>
              <div className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-block text-xl font-bold">
                Score: {results.score}
              </div>
              <div className={`mt-4 px-6 py-3 rounded-lg font-semibold text-lg border-2 ${results.levelClass}`}>
                {results.level}
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Personalized Recommendations</h3>
                <ul className="space-y-3">
                  {results.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-orange-500 border-2 border-orange-300 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Discuss Your Results with Dr. Shapiro</h3>
                <p className="mb-4 text-orange-100">Get professional interpretation of your screening results and personalized treatment recommendations.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button className="bg-white text-orange-600 hover:bg-orange-50" asChild>
                    <a href="tel:859-341-7453" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Call (859) 341-7453
                    </a>
                  </Button>
                  <Button className="bg-blue-600 text-white hover:bg-blue-700" asChild>
                    <a href="mailto:ashapiro@zoomtown.com?subject=Screening Results Discussion" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Dr. Shapiro
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <Button onClick={returnToGrid} variant="outline" size="lg">
                  Take Another Assessment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (currentAssessment) {
    const assessment = assessments[currentAssessment];
    const currentQuestion = assessment.questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / assessment.questions.length) * 100;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-6">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">{assessment.icon}</div>
              <CardTitle className="text-3xl text-blue-800 mb-2">{assessment.title}</CardTitle>
              <p className="text-gray-600 mb-4">{assessment.description}</p>
              <Progress value={progress} className="w-full mb-2" />
              <p className="text-sm text-gray-600">Question {currentQuestionIndex + 1} of {assessment.questions.length}</p>
            </CardHeader>
            
            <CardContent>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-6">{currentQuestion.text}</h3>
                <RadioGroup
                  value={responses[currentQuestion.id]?.toString() || ''}
                  onValueChange={(value) => {
                    const numValue = parseInt(value);
                    const option = currentQuestion.options.find(opt => opt.value === numValue);
                    handleAnswer(currentQuestion.id, numValue, option?.crisis);
                  }}
                >
                  {currentQuestion.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 border border-gray-200">
                      <RadioGroupItem value={option.value.toString()} id={`${currentQuestion.id}_${index}`} />
                      <Label
                        htmlFor={`${currentQuestion.id}_${index}`} 
                        className="flex-1 cursor-pointer text-left"
                      >
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              
              <div className="flex justify-between items-center">
                <Button
                  onClick={previousQuestion}
                  variant="outline"
                  disabled={currentQuestionIndex === 0}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </Button>
                
                <Button
                  onClick={() => setShowCrisis(true)}
                  variant="destructive"
                  className="flex items-center gap-2"
                >
                  <AlertTriangle className="h-4 w-4" />
                  Crisis Resources
                </Button>
                
                <Button
                  onClick={nextQuestion}
                  className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2"
                >
                  {currentQuestionIndex === assessment.questions.length - 1 ? 'Complete Assessment' : 'Next'}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <Card className="mb-8 border-2 border-blue-200">
          <CardHeader className="text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
            <div className="flex justify-center mb-4">
              <Button 
                variant="outline" 
                className="bg-white text-blue-700 hover:bg-blue-50 border-2 border-white"
                onClick={() => window.location.href = '/'}
              >
                🏠 Back to Main Site
              </Button>
            </div>
            <CardTitle className="text-4xl font-bold mb-4">
              Professional Mental Health Screening Tools
            </CardTitle>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Take the first step toward better mental health with our comprehensive, HIPAA-compliant screening assessments. 
              Developed by Dr. Arnold G. Shapiro, board-certified psychiatrist with 35+ years of experience serving Cincinnati and Fort Wright.
            </p>
            
            <div className="flex justify-center gap-4 mt-6 flex-wrap">
              <Badge className="bg-orange-500 text-white px-4 py-2 hover:bg-orange-600">
                🏥 HIPAA Compliant
              </Badge>
              <Badge className="bg-white text-blue-700 px-4 py-2">
                🔒 Completely Confidential
              </Badge>
              <Badge className="bg-blue-500 text-white px-4 py-2">
                ⚕️ Clinically Validated
              </Badge>
              <Badge className="bg-orange-400 text-white px-4 py-2">
                📱 Mobile Optimized
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="bg-white">
            {/* HIPAA Notice */}
            <Alert className="bg-blue-50 border-blue-300 mb-6">
              <Shield className="h-5 w-5 text-blue-600" />
              <AlertDescription>
                <h3 className="font-semibold text-blue-700 mb-3">Your Privacy is Protected</h3>
                <p className="mb-4 text-gray-700">
                  <strong>HIPAA Compliance:</strong> All screening tools are completely confidential and comply with HIPAA privacy regulations. 
                  No personal health information is stored without your explicit consent.
                </p>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Complete Screening Tools Grid - Now 18 tools! */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">Complete Professional Assessments</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {externalScreenings.map((screening, index) => (
              <Card 
                key={index} 
                className="cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-blue-200 hover:border-orange-400 bg-white"
                onClick={() => window.open(screening.url, '_blank')}
              >
                <CardHeader className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-t-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl bg-blue-600 text-white p-3 rounded-lg">{screening.icon}</div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2 text-blue-700">{screening.title}</CardTitle>
                      <p className="text-gray-600 text-sm">{screening.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-center pt-4 border-t border-blue-200">
                    <div>
                      <div className="font-bold text-blue-600">{screening.stats.questions}</div>
                      <div className="text-xs text-gray-500">Questions</div>
                    </div>
                    <div>
                      <div className="font-bold text-blue-600">{screening.stats.minutes}</div>
                      <div className="text-xs text-gray-500">Minutes</div>
                    </div>
                    <div>
                      <div className="font-bold text-orange-500">⭐⭐⭐⭐⭐</div>
                      <div className="text-xs text-gray-500">{screening.stats.rating}</div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Footer Disclaimer */}
        <Card className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white border-2 border-blue-300">
          <CardContent className="text-center py-6">
            <p className="text-sm text-blue-100 mb-2">
              <strong className="text-white">Medical Disclaimer:</strong> These screening tools are for informational purposes only and do not constitute medical advice or diagnosis.
            </p>
            <p className="text-sm text-blue-100">
              Please consult with Dr. Arnold G. Shapiro or another qualified healthcare provider for proper evaluation and treatment.
            </p>
            <div className="mt-4 text-xs text-blue-200">
              © 2024 Dr. Arnold G. Shapiro MD - Mental Health Screening Center. All rights reserved. | 
              🔒 HIPAA Compliant | 🏥 Board-Certified Psychiatrist | 📍 Cincinnati, OH & Fort Wright, KY
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Screening;