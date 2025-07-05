
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PenTool, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200">
            <Sparkles className="h-4 w-4 mr-2" />
            Powered by Advanced AI Technology
          </Badge>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
            Transform Handwriting into
            <br />
            Personalized Learning
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Revolutionize education with our AI-powered platform that recognizes handwriting, 
            analyzes learning patterns, and creates personalized educational experiences for every student.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3"
              onClick={() => navigate('/student')}
            >
              <PenTool className="mr-2 h-5 w-5" />
              Try Live Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-3 border-2 border-blue-200 hover:border-blue-300"
            >
              Watch Demo Video
            </Button>
          </div>

          {/* Demo Preview */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="ml-4 text-sm text-gray-600">AI HandWrite Learn Dashboard</span>
                </div>
              </div>
              <div className="p-8 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="font-semibold text-gray-800 mb-3">Handwriting Analysis</h3>
                    <div className="space-y-2">
                      <div className="bg-blue-50 p-3 rounded text-sm">
                        <span className="text-blue-700">✓ Writing Speed: 95% optimal</span>
                      </div>
                      <div className="bg-green-50 p-3 rounded text-sm">
                        <span className="text-green-700">✓ Letter Formation: Excellent</span>
                      </div>
                      <div className="bg-purple-50 p-3 rounded text-sm">
                        <span className="text-purple-700">✓ Consistency: Good</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="font-semibold text-gray-800 mb-3">Learning Progress</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Mathematics</span>
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full w-4/5"></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Language Arts</span>
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full w-3/5"></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Science</span>
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full w-4/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -top-4 -right-4 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
