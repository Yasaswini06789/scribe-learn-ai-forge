
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BarChart3, Users, Shield, Zap, BookOpen } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Recognition",
      description: "Advanced machine learning algorithms that understand and analyze handwriting with 95%+ accuracy across multiple languages and writing styles."
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Comprehensive dashboards providing instant insights into student progress, learning patterns, and areas needing attention."
    },
    {
      icon: BookOpen,
      title: "Personalized Learning",
      description: "Adaptive learning paths that adjust to each student's pace, strengths, and areas for improvement based on AI analysis."
    },
    {
      icon: Users,
      title: "Multi-Role Platform",
      description: "Tailored experiences for students, teachers, and administrators with role-specific tools and insights."
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description: "Real-time correction and guidance helping students improve their handwriting and comprehension immediately."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Enterprise-grade security ensuring student data privacy and compliance with educational data protection standards."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Powerful Features for Modern Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge AI technology with educational expertise 
            to deliver unprecedented learning experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gray-100 hover:border-blue-200 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-purple-200 transition-colors">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
