import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, GraduationCap, LineChart, ArrowRight, Brain, Calculator, BarChart3 } from 'lucide-react';
import { tableOfContents } from '@/data/tableOfContents';

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Interactive Learning",
      description: "Navigate through chapters with clear explanations and examples"
    },
    {
      icon: Calculator,
      title: "Math Rendering",
      description: "Beautiful LaTeX equations rendered for easy understanding"
    },
    {
      icon: Brain,
      title: "Comprehensive Glossary",
      description: "Quick reference for all terms, abbreviations, and notation"
    },
    {
      icon: BarChart3,
      title: "Visual Examples",
      description: "Graphs and visualizations to illustrate key concepts"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
              Advanced Quantitative Techniques Series
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Regression Models for Categorical and Limited Dependent Variables
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              An interactive study guide designed to maximize understanding of CLDV models. Based on J. Scott Long's comprehensive textbook.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link to="/chapter/introduction">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/glossary">
                  View Glossary
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Makes This Study Guide Special</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Designed to simplify complex statistical concepts with interactive elements and clear explanations
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <feature.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Book Context */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">About This Content</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground">
                This study guide is based on <span className="font-semibold">"Regression Models for Categorical and Limited Dependent Variables"</span> by J. Scott Long, Volume 7 of the Advanced Quantitative Techniques in the Social Sciences Series.
              </p>
              <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <LineChart className="h-5 w-5" />
                  Target Audience
                </h3>
                <p className="text-sm text-muted-foreground">
                  Written for social scientists and researchers working with categorical and limited dependent variables. Mathematical concepts are built progressively - you can start with Chapter 8 (Count Outcomes) immediately after Chapter 2 (LRM), or begin with Chapter 3 (Binary Outcomes) for a strong foundation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Chapter Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Chapter Overview</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Navigate through the core topics of categorical and limited dependent variable models
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {tableOfContents.map((chapter) => (
            <Card key={chapter.number} className="hover:shadow-lg transition-all hover:border-primary/50 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-2">Chapter {chapter.number}</Badge>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {chapter.title}
                    </CardTitle>
                    <CardDescription className="mt-2">{chapter.description}</CardDescription>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link to={`/chapter/${chapter.slug}`}>
                    Explore Chapter
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
