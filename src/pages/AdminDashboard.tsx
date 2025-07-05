
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, BookOpen, BarChart3, User, Home, Settings, Shield, TrendingUp, School, UserCheck } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const AdminDashboard = () => {
  const [schoolStats] = useState({
    totalStudents: 1250,
    totalTeachers: 85,
    totalSchools: 12,
    activeUsers: 1180,
    systemUptime: 99.8
  });

  const [recentActivity] = useState([
    { id: 1, action: "New teacher registration", user: "John Smith", time: "2 hours ago", type: "user" },
    { id: 2, action: "System backup completed", user: "System", time: "6 hours ago", type: "system" },
    { id: 3, action: "Performance report generated", user: "Analytics Engine", time: "1 day ago", type: "report" },
    { id: 4, action: "Student data export", user: "Maria Garcia", time: "2 days ago", type: "data" }
  ]);

  const [topPerformingSchools] = useState([
    { name: "Lincoln Elementary", students: 150, avgScore: 94, growth: "+12%" },
    { name: "Washington Middle", students: 200, avgScore: 91, growth: "+8%" },
    { name: "Roosevelt High", students: 300, avgScore: 89, growth: "+15%" }
  ]);

  const sidebarItems = [
    { icon: Home, label: "Dashboard", path: "/admin" },
    { icon: Users, label: "User Management", path: "/admin/users" },
    { icon: School, label: "School Management", path: "/admin/schools" },
    { icon: BarChart3, label: "Analytics", path: "/admin/analytics" },
    { icon: Settings, label: "System Settings", path: "/admin/settings" },
    { icon: User, label: "Profile", path: "/admin/profile" }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'user': return UserCheck;
      case 'system': return Settings;
      case 'report': return BarChart3;
      case 'data': return Shield;
      default: return Settings;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'user': return 'bg-blue-100 text-blue-600';
      case 'system': return 'bg-green-100 text-green-600';
      case 'report': return 'bg-purple-100 text-purple-600';
      case 'data': return 'bg-orange-100 text-orange-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <DashboardLayout 
      title="Administrator Dashboard" 
      userRole="Administrator"
      sidebarItems={sidebarItems}
      userName="Jennifer Adams"
    >
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Welcome back, Jennifer! 👩‍💼</h2>
          <p className="text-green-100">System running smoothly with {schoolStats.activeUsers} active users across {schoolStats.totalSchools} schools.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Students</p>
                  <p className="text-2xl font-bold">{schoolStats.totalStudents.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <UserCheck className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Teachers</p>
                  <p className="text-2xl font-bold">{schoolStats.totalTeachers}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <School className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Schools</p>
                  <p className="text-2xl font-bold">{schoolStats.totalSchools}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Active Users</p>
                  <p className="text-2xl font-bold">{schoolStats.activeUsers.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <Shield className="h-4 w-4 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Uptime</p>
                  <p className="text-2xl font-bold">{schoolStats.systemUptime}%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">System Overview</TabsTrigger>
            <TabsTrigger value="schools">School Performance</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="analytics">Platform Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent System Activity</CardTitle>
                  <CardDescription>Latest administrative actions and system events</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => {
                      const IconComponent = getActivityIcon(activity.type);
                      return (
                        <div key={activity.id} className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getActivityColor(activity.type)}`}>
                            <IconComponent className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{activity.action}</p>
                            <p className="text-xs text-gray-600">{activity.user} • {activity.time}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>System Health</CardTitle>
                  <CardDescription>Real-time system performance metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Server Response Time</span>
                      <Badge className="bg-green-100 text-green-700">120ms</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Database Performance</span>
                      <Badge className="bg-green-100 text-green-700">Optimal</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">AI Processing Queue</span>
                      <Badge className="bg-blue-100 text-blue-700">5 pending</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Storage Usage</span>
                      <Badge className="bg-orange-100 text-orange-700">65%</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="schools" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Schools</CardTitle>
                <CardDescription>Schools with highest student engagement and performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPerformingSchools.map((school, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                          #{index + 1}
                        </div>
                        <div>
                          <h3 className="font-semibold">{school.name}</h3>
                          <p className="text-sm text-gray-600">{school.students} students</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Average Score</p>
                          <p className="text-lg font-semibold">{school.avgScore}%</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Growth</p>
                          <Badge className="bg-green-100 text-green-700">{school.growth}</Badge>
                        </div>
                        <Button size="sm" variant="outline">View Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">User Management</h3>
                <p className="text-gray-600">Manage students, teachers, and administrative accounts</p>
              </div>
              <Button className="bg-gradient-to-r from-green-500 to-blue-500">
                Add New User
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Student Accounts</CardTitle>
                  <CardDescription>Active student users</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">{schoolStats.totalStudents.toLocaleString()}</div>
                  <p className="text-sm text-gray-600 mt-1">+45 this month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Teacher Accounts</CardTitle>
                  <CardDescription>Registered educators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">{schoolStats.totalTeachers}</div>
                  <p className="text-sm text-gray-600 mt-1">+3 this month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Admin Accounts</CardTitle>
                  <CardDescription>System administrators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">12</div>
                  <p className="text-sm text-gray-600 mt-1">No changes</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Platform Usage Trends</CardTitle>
                  <CardDescription>User engagement over the past 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Usage Analytics Chart Placeholder</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>AI Processing Statistics</CardTitle>
                  <CardDescription>Handwriting analysis performance metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Daily Analyses</span>
                      <Badge className="bg-blue-100 text-blue-700">2,847</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Average Processing Time</span>
                      <Badge className="bg-green-100 text-green-700">1.2s</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Accuracy Rate</span>
                      <Badge className="bg-purple-100 text-purple-700">95.8%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Queue Size</span>
                      <Badge className="bg-orange-100 text-orange-700">5 pending</Badge>
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

export default AdminDashboard;
