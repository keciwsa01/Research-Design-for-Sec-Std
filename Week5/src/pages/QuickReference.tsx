import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MathEquation } from '@/components/MathEquation';
import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react';

const QuickReference = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Quick Reference Guide</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Essential formulas, comparisons, and decision trees for CLDV models
          </p>
        </div>

        {/* When to Use Which Model */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" />
              Model Selection Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <Badge className="mb-2">Binary Outcome</Badge>
                  <h3 className="font-semibold mb-2">Logit or Probit</h3>
                  <p className="text-sm text-muted-foreground">
                    When your dependent variable has exactly 2 categories (yes/no, success/failure)
                  </p>
                  <div className="mt-3 text-xs">
                    <div className="flex items-center gap-1 mb-1">
                      <CheckCircle2 className="h-3 w-3 text-secondary" />
                      <span>Employed vs. Unemployed</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-secondary" />
                      <span>Passed vs. Failed</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                  <Badge className="mb-2 bg-secondary">Ordinal Outcome</Badge>
                  <h3 className="font-semibold mb-2">Ordered Logit/Probit</h3>
                  <p className="text-sm text-muted-foreground">
                    When categories have natural ordering but distances between them are unclear
                  </p>
                  <div className="mt-3 text-xs">
                    <div className="flex items-center gap-1 mb-1">
                      <CheckCircle2 className="h-3 w-3 text-secondary" />
                      <span>Likert scales (strongly agree → disagree)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-secondary" />
                      <span>Education levels (HS → PhD)</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <Badge className="mb-2 bg-accent">Nominal Outcome</Badge>
                  <h3 className="font-semibold mb-2">Multinomial Logit</h3>
                  <p className="text-sm text-muted-foreground">
                    When categories have no natural ordering (unordered choices)
                  </p>
                  <div className="mt-3 text-xs">
                    <div className="flex items-center gap-1 mb-1">
                      <CheckCircle2 className="h-3 w-3 text-secondary" />
                      <span>Occupation type</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-secondary" />
                      <span>Transportation mode choice</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-muted/30 rounded-lg border">
                  <Badge variant="outline" className="mb-2">Count Outcome</Badge>
                  <h3 className="font-semibold mb-2">Poisson or Negative Binomial</h3>
                  <p className="text-sm text-muted-foreground">
                    For non-negative integer outcomes (number of events)
                  </p>
                  <div className="mt-3 text-xs">
                    <div className="flex items-center gap-1 mb-1">
                      <CheckCircle2 className="h-3 w-3 text-secondary" />
                      <span>Number of doctor visits</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-secondary" />
                      <span>Number of publications</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg border">
                  <Badge variant="outline" className="mb-2">Limited/Censored</Badge>
                  <h3 className="font-semibold mb-2">Tobit Model</h3>
                  <p className="text-sm text-muted-foreground">
                    When outcomes are censored or truncated at certain values
                  </p>
                  <div className="mt-3 text-xs">
                    <div className="flex items-center gap-1 mb-1">
                      <CheckCircle2 className="h-3 w-3 text-secondary" />
                      <span>Income capped at survey max</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-secondary" />
                      <span>Hours worked (minimum = 0)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Formulas */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Essential Formulas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Binary Models */}
            <div>
              <h3 className="font-semibold mb-3 text-primary">Binary Response Models</h3>
              <div className="space-y-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="text-sm font-medium mb-2">Logit Model (Logistic Regression)</p>
                  <MathEquation 
                    latex="P(y=1|x) = \frac{e^{\beta_0 + \beta_1 x_1 + ... + \beta_k x_k}}{1 + e^{\beta_0 + \beta_1 x_1 + ... + \beta_k x_k}}"
                    block
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    The probability follows a logistic S-curve. Coefficients β represent log-odds ratios.
                  </p>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="text-sm font-medium mb-2">Odds Ratio</p>
                  <MathEquation 
                    latex="\text{Odds Ratio} = e^{\beta_i}"
                    block
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    Exponentiating coefficients gives odds ratios. OR &gt; 1 means increased odds, OR &lt; 1 means decreased odds.
                  </p>
                </div>
              </div>
            </div>

            {/* Count Models */}
            <div>
              <h3 className="font-semibold mb-3 text-secondary">Count Models</h3>
              <div className="space-y-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="text-sm font-medium mb-2">Poisson Regression</p>
                  <MathEquation 
                    latex="P(y=k|x) = \frac{e^{-\lambda}\lambda^k}{k!} \quad \text{where} \quad \lambda = e^{\beta_0 + \beta_1 x_1 + ... + \beta_k x_k}"
                    block
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    Assumes mean equals variance. Use when events are rare and independent.
                  </p>
                </div>
              </div>
            </div>

            {/* Interpretation */}
            <div>
              <h3 className="font-semibold mb-3 text-accent">Marginal Effects</h3>
              <div className="bg-muted/30 p-4 rounded-lg">
                <p className="text-sm font-medium mb-2">Average Marginal Effect</p>
                <MathEquation 
                  latex="\text{AME} = \frac{1}{n}\sum_{i=1}^{n} \frac{\partial P(y_i=1|x_i)}{\partial x_k}"
                  block
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Shows the average change in probability for a one-unit increase in predictor x, more interpretable than raw coefficients.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* LRM vs CLDV Models */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Why Not Just Use Linear Regression?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-destructive" />
                  Problems with LRM for CLDVs
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5">•</span>
                    <span>Predicted probabilities can be &lt; 0 or &gt; 1</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5">•</span>
                    <span>Assumes constant marginal effects (unrealistic)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5">•</span>
                    <span>Residuals are heteroskedastic by construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5">•</span>
                    <span>Violates normality assumption</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  Benefits of CLDV Models
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-0.5">•</span>
                    <span>Predictions always within valid range (0-1 for probabilities)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-0.5">•</span>
                    <span>Marginal effects vary realistically across x values</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-0.5">•</span>
                    <span>Proper likelihood-based inference</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-0.5">•</span>
                    <span>Respects the nature of categorical data</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuickReference;
