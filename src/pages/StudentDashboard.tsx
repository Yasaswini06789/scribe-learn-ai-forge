
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PenTool, BookOpen, BarChart3, User, Home, Upload, CheckCircle, Clock, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import HandwritingAnalyzer from "@/components/HandwritingAnalyzer";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [activeAssignments] = useState([
    { id: 1, title: "Math Practice - Fractions", subject: "Mathematics", dueDate: "2024-01-15", progress: 75 },
    { id: 2, title: "Creative Writing Essay", subject: "Language Arts", dueDate: "2024-01-18", progress: 45 },
    { id: 3, title: "Science Lab Report", subject: "Science", dueDate: "2024-01-20", progress: 30 }
  ]);

  const [recentScores] = useState([
    { subject: "Mathematics", score: 92, date: "2024-01-10" },
    { subject: "Language Arts", score: 88, date: "2024-01-09" },
    { subject: "Science", score: 95, date: "2024-01-08" }
  ]);

  const sidebarItems = [
    { icon: Home, label: "Dashboard", path: "/student" },
    { icon: PenTool, label: "Handwriting Analysis", path: "/student/handwriting" },
    { icon: BookOpen, label: "Assignments", path: "/student/assignments" },
    { icon: BarChart3, label: "Progress", path: "/student/progress" },
    { icon: User, label: "Profile", path: "/student/profile" }
  ];

  return (
    <DashboardLayout 
      title="Student Dashboard" 
      userRole="Student"
      sidebarItems={sidebarItems}
      userName="Alex Johnson"
    >
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Welcome back, Alex! 🎉</h2>
          <p className="text-blue-100">Ready to continue your learning journey? You have 3 assignments pending.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Completed</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <Clock className="h-4 w-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Pending</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Star className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Average Score</p>
                  <p className="text-2xl font-bold">92%</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <PenTool className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Writing Score</p>
                  <p className="text-2xl font-bold">A+</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="assignments" className="space-y-4">
          <TabsList>
            <TabsTrigger value="assignments">Active Assignments</TabsTrigger>
            <TabsTrigger value="handwriting">Handwriting Practice</TabsTrigger>
            <TabsTrigger value="progress">Learning Progress</TabsTrigger>
          </TabsList>

          <TabsContent value="assignments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Active Assignments</CardTitle>
                <CardDescription>Complete your assignments to improve your learning</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeAssignments.map((assignment) => (
                    <div key={assignment.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-1">
                        <h3 className="font-semibold">{assignment.title}</h3>
                        <p className="text-sm text-gray-600">{assignment.subject} • Due: {assignment.dueDate}</p>
                        <div className="mt-2">
                          <div className="flex items-center space-x-2">
                            <Progress value={assignment.progress} className="flex-1" />
                            <span className="text-sm text-gray-600">{assignment.progress}%</span>
                          </div>
                        </div>
                      </div>
                      <Button size="sm" className="ml-4">Continue</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="handwriting" className="space-y-4">
            <HandwritingAnalyzer />
          </TabsContent>

          <TabsContent value="progress" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Scores</CardTitle>
                  <CardDescription>Your latest assignment results</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentScores.map((score, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{score.subject}</p>
                          <p className="text-sm text-gray-600">{score.date}</p>
                        </div>
                        <Badge variant={score.score >= 90 ? "default" : "secondary"}>
                          {score.score}%
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Learning Streaks</CardTitle>
                  <CardDescription>Keep up the great work!</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2">7</div>
                      <p className="text-gray-600">Days in a row</p>
                    </div>
                    <div className="flex justify-center space-x-2">
                      {[...Array(7)].map((_, i) => (
                        <div key={i} className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
