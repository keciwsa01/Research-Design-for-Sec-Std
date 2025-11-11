import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { MathEquation } from '@/components/MathEquation';
import { AlertCircle, TrendingUp, BarChart3, List } from 'lucide-react';

const Chapter1 = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Chapter Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4">Chapter 1</Badge>
          <h1 className="text-4xl font-bold mb-4">Introduction</h1>
          <p className="text-xl text-muted-foreground">
            Understanding the need for specialized regression models for categorical and limited outcomes
          </p>
        </div>

        {/* Main Problem Statement */}
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <AlertCircle className="h-6 w-6 text-primary" />
              The Core Problem
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg">
              The <strong>Linear Regression Model (LRM)</strong> is commonly used in social sciences, but it's often <strong>inappropriate</strong> because:
            </p>
            <div className="bg-destructive/5 p-4 rounded-lg border-l-4 border-destructive">
              <p className="font-medium mb-2">Outcomes of interest to social scientists are frequently:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span><strong>Not continuous:</strong> Many variables are categorical (e.g., yes/no, agree/disagree)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span><strong>Not normally distributed:</strong> Binary, ordinal, and count outcomes don't follow normal distributions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span><strong>Limited in range:</strong> Some outcomes are censored, truncated, or constrained</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* What are CLDVs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <List className="h-5 w-5 text-secondary" />
              What are Categorical and Limited Dependent Variables (CLDVs)?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Binary Variables */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge>Binary</Badge>
                <span className="font-semibold">Two Categories</span>
              </div>
              <p className="text-muted-foreground">
                Variables with exactly two possible outcomes, often coded as 0 or 1.
              </p>
              <div className="bg-primary/5 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">Examples:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Employed (yes) vs. Unemployed (no)</li>
                  <li>• Passed exam (1) vs. Failed exam (0)</li>
                  <li>• Voted (yes) vs. Did not vote (no)</li>
                </ul>
              </div>
            </div>

            {/* Ordinal Variables */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge className="bg-secondary">Ordinal</Badge>
                <span className="font-semibold">Ranked Categories</span>
              </div>
              <p className="text-muted-foreground">
                Categories with a natural ordering, but the distance between categories is not necessarily equal.
              </p>
              <div className="bg-secondary/5 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">Examples:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Likert scales: Strongly Disagree → Disagree → Neutral → Agree → Strongly Agree</li>
                  <li>• Education level: High School → Bachelor's → Master's → PhD</li>
                  <li>• Income brackets: Low → Middle → High</li>
                </ul>
              </div>
            </div>

            {/* Nominal Variables */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge className="bg-accent">Nominal</Badge>
                <span className="font-semibold">Unordered Categories</span>
              </div>
              <p className="text-muted-foreground">
                Categories with no inherent ordering or ranking.
              </p>
              <div className="bg-accent/5 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">Examples:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Occupation type: Teacher, Engineer, Doctor, Artist</li>
                  <li>• Transportation mode: Car, Bus, Bike, Walk</li>
                  <li>• Political party affiliation: Democrat, Republican, Independent</li>
                </ul>
              </div>
            </div>

            {/* Limited/Censored Variables */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="outline">Limited/Censored</Badge>
                <span className="font-semibold">Constrained Continuous Variables</span>
              </div>
              <p className="text-muted-foreground">
                Continuous variables that are limited, truncated, or censored at certain values.
              </p>
              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">Examples:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Hours worked (cannot be negative, has an upper limit)</li>
                  <li>• Income data with top-coding (values above threshold reported as threshold)</li>
                  <li>• Survey responses with floor/ceiling effects</li>
                </ul>
              </div>
            </div>

            {/* Count Variables */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="outline">Count</Badge>
                <span className="font-semibold">Non-negative Integer Outcomes</span>
              </div>
              <p className="text-muted-foreground">
                Variables representing counts of events or occurrences (0, 1, 2, 3, ...).
              </p>
              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">Examples:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Number of children in a household</li>
                  <li>• Number of doctor visits per year</li>
                  <li>• Number of publications by a researcher</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why LRM Fails */}
        <Card className="border-2 border-destructive/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-destructive" />
              Why Linear Regression Fails for CLDVs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              When you apply the Linear Regression Model to categorical or limited dependent variables, several problems arise:
            </p>
            
            <div className="space-y-4">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Problem 1: Impossible Predictions</strong>
                  <p className="mt-2 text-sm">
                    For binary outcomes (0 or 1), LRM can predict probabilities less than 0 or greater than 1, which is nonsensical.
                  </p>
                </AlertDescription>
              </Alert>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Problem 2: Constant Effects Assumption</strong>
                  <p className="mt-2 text-sm">
                    LRM assumes the effect of a predictor is the same regardless of starting values. In reality, going from "unlikely" to "somewhat likely" might require different changes than going from "likely" to "very likely."
                  </p>
                </AlertDescription>
              </Alert>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Problem 3: Heteroskedasticity</strong>
                  <p className="mt-2 text-sm">
                    The error variance is not constant across observations, violating a key OLS assumption.
                  </p>
                </AlertDescription>
              </Alert>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Problem 4: Non-normal Errors</strong>
                  <p className="mt-2 text-sm">
                    Residuals cannot be normally distributed when the outcome is categorical.
                  </p>
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>

        {/* Book Organization */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Organization of This Study Guide
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              This book introduces specialized regression models designed for categorical and limited dependent variables. These models address the problems of LRM while providing interpretable results.
            </p>
            
            <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
              <p className="font-medium mb-2">Key Topics Covered:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Chapter 2:</strong> Review of the Linear Regression Model (foundation)</li>
                <li><strong>Chapter 3:</strong> Binary Outcomes (Logit and Probit Models)</li>
                <li><strong>Chapter 5:</strong> Ordinal Outcomes (Ordered Logit/Probit)</li>
                <li><strong>Chapter 6:</strong> Nominal Outcomes (Multinomial Logit)</li>
                <li><strong>Chapter 7:</strong> Limited Outcomes (Tobit Models)</li>
                <li><strong>Chapter 8:</strong> Count Outcomes (Poisson and Negative Binomial)</li>
              </ul>
            </div>

            <Alert className="bg-secondary/5 border-secondary">
              <AlertDescription>
                <strong>Flexible Reading Path:</strong> You can read Chapter 8 (Count Outcomes) immediately after Chapter 2 if that's your focus. Chapter 3 (Binary Outcomes) provides the strongest mathematical foundation for understanding other chapters.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chapter1;
