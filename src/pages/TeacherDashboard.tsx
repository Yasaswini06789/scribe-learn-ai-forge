
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, BookOpen, BarChart3, User, Home, Plus, CheckCircle, Clock, AlertTriangle } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const TeacherDashboard = () => {
  const [students] = useState([
    { id: 1, name: "Alex Johnson", grade: "A", progress: 92, handwritingScore: "A+", assignments: 8 },
    { id: 2, name: "Sarah Chen", grade: "B+", progress: 88, handwritingScore: "A", assignments: 7 },
    { id: 3, name: "Michael Rodriguez", grade: "A-", progress: 85, handwritingScore: "B+", assignments: 6 },
    { id: 4, name: "Emma Thompson", grade: "B", progress: 78, handwritingScore: "B", assignments: 5 }
  ]);

  const [recentAssignments] = useState([
    { id: 1, title: "Math Practice - Fractions", submitted: 24, total: 30, avgScore: 85 },
    { id: 2, title: "Creative Writing Essay", submitted: 18, total: 30, avgScore: 78 },
    { id: 3, title: "Science Lab Report", submitted: 12, total: 30, avgScore: 92 }
  ]);

  const sidebarItems = [
    { icon: Home, label: "Dashboard", path: "/teacher" },
    { icon: Users, label: "Students", path: "/teacher/students" },
    { icon: BookOpen, label: "Assignments", path: "/teacher/assignments" },
    { icon: BarChart3, label: "Analytics", path: "/teacher/analytics" },
    { icon: User, label: "Profile", path: "/teacher/profile" }
  ];

  return (
    <DashboardLayout 
      title="Teacher Dashboard" 
      userRole="Teacher"
      sidebarItems={sidebarItems}
      userName="Dr. Sarah Wilson"
    >
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Welcome back, Dr. Wilson! 👩‍🏫</h2>
          <p className="text-purple-100">You have 30 students across 3 classes. 12 assignments need grading.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Students</p>
                  <p className="text-2xl font-bold">30</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Graded</p>
                  <p className="text-2xl font-bold">45</p>
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
                  <p className="text-2xl font-bold">12</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <BarChart3 className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Class Average</p>
                  <p className="text-2xl font-bold">86%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="students" className="space-y-4">
          <TabsList>
            <TabsTrigger value="students">Student Overview</TabsTrigger>
            <TabsTrigger value="assignments">Assignment Management</TabsTrigger>
            <TabsTrigger value="analytics">Class Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="students" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Student Progress Overview</CardTitle>
                <CardDescription>Monitor your students' learning progress and handwriting development</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {students.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h3 className="font-semibold">{student.name}</h3>
                          <p className="text-sm text-gray-600">
                            Progress: {student.progress}% • Assignments: {student.assignments}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Overall Grade</p>
                          <Badge variant="outline">{student.grade}</Badge>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Handwriting</p>
                          <Badge className="bg-green-100 text-green-700">{student.handwritingScore}</Badge>
                        </div>
                        <Button size="sm" variant="outline">View Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assignments" className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Assignment Management</h3>
                <p className="text-gray-600">Create, manage, and grade assignments</p>
              </div>
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500">
                <Plus className="mr-2 h-4 w-4" />
                Create Assignment
              </Button>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Assignments</CardTitle>
                <CardDescription>Track submission status and student performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAssignments.map((assignment) => (
                    <div key={assignment.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{assignment.title}</h3>
                        <p className="text-sm text-gray-600">
                          {assignment.submitted}/{assignment.total} submitted • Average: {assignment.avgScore}%
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {assignment.submitted < assignment.total && (
                          <Badge variant="outline" className="text-orange-600 border-orange-200">
                            <AlertTriangle className="mr-1 h-3 w-3" />
                            Pending
                          </Badge>
                        )}
                        <Button size="sm" variant="outline">Review</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Class Performance Trends</CardTitle>
                  <CardDescription>Track overall class progress over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Performance Chart Placeholder</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Handwriting Analysis Summary</CardTitle>
                  <CardDescription>AI-powered insights into student writing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Average Legibility Score</span>
                      <Badge className="bg-green-100 text-green-700">92%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Students Needing Support</span>
                      <Badge className="bg-orange-100 text-orange-700">3 students</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Improvement Rate</span>
                      <Badge className="bg-blue-100 text-blue-700">+15%</Badge>
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

export default TeacherDashboard;
