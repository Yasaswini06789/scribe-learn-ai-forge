
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, Shield, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RoleCards = () => {
  const navigate = useNavigate();

  const roles = [
    {
      icon: BookOpen,
      title: "Students",
      description: "Interactive learning experience with AI-powered handwriting analysis and personalized feedback",
      features: ["Real-time handwriting analysis", "Personalized learning paths", "Progress tracking", "Interactive exercises"],
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      path: "/student"
    },
    {
      icon: Users,
      title: "Teachers", 
      description: "Comprehensive classroom management tools with detailed student analytics and curriculum integration",
      features: ["Student progress monitoring", "Assignment creation", "Class analytics", "Curriculum alignment"],
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      path: "/teacher"
    },
    {
      icon: Shield,
      title: "Administrators",
      description: "School-wide oversight with advanced reporting, user management, and system administration tools",
      features: ["School-wide analytics", "User management", "System configuration", "Performance reports"],
      color: "from-green-500 to-green-600", 
      bgColor: "from-green-50 to-green-100",
      path: "/admin"
    }
  ];

  return (
    <section id="roles" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Designed for Every Role in Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're a student, teacher, or administrator, our platform provides 
            tailored tools and insights to enhance your educational experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden hover:-translate-y-2">
              <div className={`h-2 bg-gradient-to-r ${role.color}`}></div>
              <CardHeader className={`bg-gradient-to-br ${role.bgColor} pb-6`}>
                <div className={`w-16 h-16 bg-gradient-to-r ${role.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <role.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">
                  {role.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {role.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 bg-white">
                <div className="space-y-3 mb-6">
                  {role.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${role.color}`}></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  className={`w-full bg-gradient-to-r ${role.color} hover:opacity-90 transition-all group-hover:shadow-lg`}
                  onClick={() => navigate(role.path)}
                >
                  Explore {role.title} Dashboard
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoleCards;
