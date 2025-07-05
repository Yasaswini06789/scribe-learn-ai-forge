
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Upload, PenTool, CheckCircle, AlertCircle, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const HandwritingAnalyzer = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [analysisResults, setAnalysisResults] = useState({
    overallScore: 0,
    legibility: 0,
    spacing: 0,
    consistency: 0,
    speed: 0
  });
  const { toast } = useToast();

  const handleFileUpload = async () => {
    setIsAnalyzing(true);
    setAnalysisComplete(false);
    
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Generate realistic analysis results
    const results = {
      overallScore: Math.floor(Math.random() * 20) + 80, // 80-100
      legibility: Math.floor(Math.random() * 15) + 85,   // 85-100
      spacing: Math.floor(Math.random() * 25) + 75,      // 75-100
      consistency: Math.floor(Math.random() * 30) + 70,  // 70-100
      speed: Math.floor(Math.random() * 20) + 80         // 80-100
    };
    
    setAnalysisResults(results);
    setIsAnalyzing(false);
    setAnalysisComplete(true);
    
    toast({
      title: "Analysis Complete!",
      description: "Your handwriting has been analyzed successfully.",
    });
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 80) return "text-blue-600";
    if (score >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBadge = (score: number) => {
    if (score >= 90) return "Excellent";
    if (score >= 80) return "Good";
    if (score >= 70) return "Fair";
    return "Needs Improvement";
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <PenTool className="h-5 w-5" />
            <span>Handwriting Analysis</span>
          </CardTitle>
          <CardDescription>
            Upload a sample of your handwriting to get instant AI-powered feedback and improvement suggestions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!isAnalyzing && !analysisComplete && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="h-12 w-12 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Upload Your Handwriting Sample</h3>
              <p className="text-gray-600 mb-6">Take a photo or scan your handwritten text for analysis</p>
              <Button onClick={handleFileUpload} className="bg-gradient-to-r from-blue-500 to-purple-500">
                <Upload className="mr-2 h-4 w-4" />
                Upload Sample
              </Button>
            </div>
          )}

          {isAnalyzing && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <PenTool className="h-12 w-12 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Analyzing Your Handwriting...</h3>
              <p className="text-gray-600 mb-6">Our AI is examining your writing style, legibility, and consistency</p>
              <Progress value={66} className="w-64 mx-auto" />
            </div>
          )}

          {analysisComplete && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-12 w-12 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Analysis Complete!</h3>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-2xl font-bold">Overall Score:</span>
                  <span className={`text-2xl font-bold ${getScoreColor(analysisResults.overallScore)}`}>
                    {analysisResults.overallScore}%
                  </span>
                  <Badge className={getScoreColor(analysisResults.overallScore)}>
                    {getScoreBadge(analysisResults.overallScore)}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Detailed Metrics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Legibility</span>
                          <span className={`text-sm font-semibold ${getScoreColor(analysisResults.legibility)}`}>
                            {analysisResults.legibility}%
                          </span>
                        </div>
                        <Progress value={analysisResults.legibility} />
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Letter Spacing</span>
                          <span className={`text-sm font-semibold ${getScoreColor(analysisResults.spacing)}`}>
                            {analysisResults.spacing}%
                          </span>
                        </div>
                        <Progress value={analysisResults.spacing} />
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Consistency</span>
                          <span className={`text-sm font-semibold ${getScoreColor(analysisResults.consistency)}`}>
                            {analysisResults.consistency}%
                          </span>
                        </div>
                        <Progress value={analysisResults.consistency} />
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Writing Speed</span>
                          <span className={`text-sm font-semibold ${getScoreColor(analysisResults.speed)}`}>
                            {analysisResults.speed}%
                          </span>
                        </div>
                        <Progress value={analysisResults.speed} />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4" />
                      <span>Improvement Suggestions</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <AlertCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Letter Formation</p>
                          <p className="text-xs text-gray-600">Focus on consistent letter shapes, especially 'a' and 'g'</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <AlertCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Word Spacing</p>
                          <p className="text-xs text-gray-600">Try to maintain consistent spaces between words</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Line Alignment</p>
                          <p className="text-xs text-gray-600">Excellent baseline consistency!</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-center space-x-4">
                <Button 
                  variant="outline"
                  onClick={() => {
                    setAnalysisComplete(false);
                    setAnalysisResults({
                      overallScore: 0,
                      legibility: 0,
                      spacing: 0,
                      consistency: 0,
                      speed: 0
                    });
                  }}
                >
                  Analyze Another Sample
                </Button>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500">
                  Start Practice Session
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default HandwritingAnalyzer;
