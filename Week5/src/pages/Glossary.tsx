import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, BookMarked, Sigma, Lightbulb } from 'lucide-react';
import { abbreviations, notation, conceptTerms } from '@/data/glossary';
import { MathEquation } from '@/components/MathEquation';

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filterItems = (items: typeof abbreviations) => {
    if (!searchTerm) return items;
    return items.filter(item =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.abbreviation?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Comprehensive Glossary
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Essential terminology, abbreviations, and mathematical notation used throughout the study of categorical and limited dependent variables
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search terms, abbreviations, or notation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Glossary Tabs */}
        <Tabs defaultValue="abbreviations" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="abbreviations" className="flex items-center gap-2">
              <BookMarked className="h-4 w-4" />
              Abbreviations
            </TabsTrigger>
            <TabsTrigger value="notation" className="flex items-center gap-2">
              <Sigma className="h-4 w-4" />
              Mathematical Notation
            </TabsTrigger>
            <TabsTrigger value="concepts" className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              Key Concepts
            </TabsTrigger>
          </TabsList>

          {/* Abbreviations */}
          <TabsContent value="abbreviations">
            <div className="grid md:grid-cols-2 gap-4">
              {filterItems(abbreviations).map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{item.term}</CardTitle>
                        {item.abbreviation && (
                          <Badge variant="secondary" className="mt-2">{item.abbreviation}</Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.definition}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Mathematical Notation */}
          <TabsContent value="notation">
            <div className="space-y-4">
              {filterItems(notation).map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-3">
                      <span>{item.term}</span>
                      {item.latex && (
                        <Badge variant="outline" className="font-mono text-base">
                          <MathEquation latex={item.latex} />
                        </Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-foreground">{item.definition}</p>
                    {item.example && (
                      <div className="bg-muted/50 p-3 rounded-lg border-l-4 border-primary">
                        <p className="text-sm font-medium text-primary mb-1">Example:</p>
                        <p className="text-sm text-muted-foreground">{item.example}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Key Concepts */}
          <TabsContent value="concepts">
            <div className="space-y-4">
              {filterItems(conceptTerms).map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.term}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <CardDescription className="text-foreground text-base">
                      {item.definition}
                    </CardDescription>
                    {item.example && (
                      <div className="bg-secondary/10 p-3 rounded-lg border-l-4 border-secondary">
                        <p className="text-sm font-medium text-secondary-foreground mb-1">Examples:</p>
                        <p className="text-sm text-muted-foreground">{item.example}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Glossary;
