import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { MathEquation } from '@/components/MathEquation';
import { Info, TrendingUp, ArrowRight, Activity } from 'lucide-react';

const Chapter2 = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Chapter Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4">Chapter 2</Badge>
          <h1 className="text-4xl font-bold mb-4">The Linear Regression Model</h1>
          <p className="text-xl text-muted-foreground">
            Foundation concepts for understanding categorical and limited dependent variable models
          </p>
        </div>

        {/* Introduction */}
        <Card>
          <CardHeader>
            <CardTitle>Why Review the Linear Model?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Before diving into specialized models for categorical data, it's essential to understand the <strong>Linear Regression Model (LRM)</strong>. This chapter reviews:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 mt-1 text-primary" />
                <span>The structure and assumptions of linear regression</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 mt-1 text-primary" />
                <span>How marginal effects work in linear models</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 mt-1 text-primary" />
                <span>The difference between linear and nonlinear models</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 mt-1 text-primary" />
                <span>Why these differences matter for categorical outcomes</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* The Basic Linear Model */}
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              The Linear Regression Model
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="mb-4">The standard linear regression model with one predictor variable is:</p>
              <MathEquation 
                latex="y = \alpha + \beta x + \varepsilon"
                block
              />
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <p>Where:</p>
                <ul className="space-y-1 ml-4">
                  <li><MathEquation latex="y" /> = the dependent (outcome) variable</li>
                  <li><MathEquation latex="x" /> = the independent (predictor) variable</li>
                  <li><MathEquation latex="\alpha" /> = the intercept (value of y when x = 0)</li>
                  <li><MathEquation latex="\beta" /> = the slope (change in y for one-unit increase in x)</li>
                  <li><MathEquation latex="\varepsilon" /> = the error term (random deviation)</li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="font-medium mb-2">With Multiple Predictors:</p>
              <MathEquation 
                latex="y = \alpha + \beta_1 x_1 + \beta_2 x_2 + \cdots + \beta_k x_k + \varepsilon"
                block
              />
              <p className="text-sm text-muted-foreground mt-3">
                Each <MathEquation latex="\beta_i" /> represents the effect of <MathEquation latex="x_i" /> on <MathEquation latex="y" />, holding all other variables constant.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Marginal Effects in Linear Models */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-secondary" />
              Understanding Marginal Effects in Linear Models
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Continuous Variables</h3>
              <p className="mb-3">
                In a linear model, the effect of <MathEquation latex="x" /> on <MathEquation latex="y" /> is computed using the <strong>partial derivative</strong>:
              </p>
              <MathEquation 
                latex="\frac{\partial y}{\partial x} = \beta"
                block
              />
              <div className="bg-secondary/5 p-4 rounded-lg mt-4">
                <p className="text-sm font-medium mb-2">Key Property: Constant Marginal Effect</p>
                <p className="text-sm text-muted-foreground">
                  In linear models, <MathEquation latex="\beta" /> is <strong>constant</strong>. This means:
                </p>
                <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                  <li>• A one-unit increase in <MathEquation latex="x" /> always increases <MathEquation latex="y" /> by <MathEquation latex="\beta" /> units</li>
                  <li>• The effect is the same whether <MathEquation latex="x" /> goes from 1→2 or 100→101</li>
                  <li>• The effect is the same regardless of values of other variables</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Dummy (Binary) Variables</h3>
              <p className="mb-3">
                For a binary variable <MathEquation latex="d" /> (coded as 0 or 1), the effect is measured as a <strong>discrete change</strong>:
              </p>
              <MathEquation 
                latex="\Delta y = (\alpha + \beta x + \delta \cdot 1) - (\alpha + \beta x + \delta \cdot 0) = \delta"
                block
              />
              <p className="text-sm text-muted-foreground mt-3">
                When <MathEquation latex="d" /> changes from 0 to 1, <MathEquation latex="y" /> changes by <MathEquation latex="\delta" /> units, holding other variables constant.
              </p>
            </div>

            <Alert className="bg-primary/5 border-primary">
              <Info className="h-4 w-4" />
              <AlertDescription>
                <strong>Visual Understanding:</strong> In a linear model, the relationship between x and y is always a straight line. The slope β never changes, no matter where you are on the line.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Nonlinear Models Preview */}
        <Card className="border-2 border-accent/20">
          <CardHeader>
            <CardTitle>Nonlinear Models: A Key Difference</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="mb-4">
                In contrast to linear models, <strong>nonlinear models</strong> (like those for CLDVs) have effects that <strong>vary</strong>:
              </p>
              <MathEquation 
                latex="y = g(\alpha^* + \beta^* x + \delta^* d)"
                block
              />
              <p className="text-sm text-muted-foreground mt-3">
                Where <MathEquation latex="g" /> is a nonlinear function (e.g., the logistic function for logit models).
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-accent/5 p-4 rounded-lg border-l-4 border-accent">
                <p className="font-medium mb-2">Key Differences in Nonlinear Models:</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">1.</span>
                    <span><strong>Variable marginal effects:</strong> The effect of x on y depends on the current value of x and other variables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">2.</span>
                    <span><strong>Non-parallel curves:</strong> Different values of a dummy variable create non-parallel response curves</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">3.</span>
                    <span><strong>Complex interpretation:</strong> You can't simply read off effects from coefficients; marginal effects must be calculated</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted/30 p-4 rounded-lg">
                <p className="text-sm font-medium mb-2">Example: Logit Model</p>
                <MathEquation 
                  latex="P(y=1|x) = \frac{\exp(\alpha^* + \beta^* x)}{1 + \exp(\alpha^* + \beta^* x)}"
                  block
                />
                <p className="text-sm text-muted-foreground mt-3">
                  The effect of <MathEquation latex="x" /> on the probability depends on the current probability level. The same change in <MathEquation latex="x" /> has different effects when probability is near 0.5 versus near 0 or 1.
                </p>
              </div>
            </div>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                <strong>Why This Matters:</strong> For categorical outcomes, we need these nonlinear models to ensure predicted probabilities stay between 0 and 1, and to accurately reflect how effects change across the probability range.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Linear vs Nonlinear Comparison */}
        <Card>
          <CardHeader>
            <CardTitle>Visual Comparison: Linear vs. Nonlinear Models</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Linear Model */}
              <div className="space-y-3">
                <h3 className="font-semibold text-primary">Linear Model</h3>
                <div className="bg-primary/5 p-4 rounded-lg space-y-2 text-sm">
                  <p><strong>Constant slope (β)</strong></p>
                  <p>• Effect is same everywhere</p>
                  <p>• Parallel lines for different groups</p>
                  <p>• Can predict impossible values (&lt;0 or &gt;1 for probabilities)</p>
                </div>
              </div>

              {/* Nonlinear Model */}
              <div className="space-y-3">
                <h3 className="font-semibold text-secondary">Nonlinear Model</h3>
                <div className="bg-secondary/5 p-4 rounded-lg space-y-2 text-sm">
                  <p><strong>Variable slopes</strong></p>
                  <p>• Effect changes across x values</p>
                  <p>• Non-parallel curves for different groups</p>
                  <p>• Predictions bounded in valid range</p>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-4 rounded-lg">
              <p className="text-sm font-medium mb-2">Interpretation Challenge:</p>
              <p className="text-sm text-muted-foreground">
                Because nonlinear models have variable effects, we cannot simply look at <MathEquation latex="\beta^*" /> coefficients to understand the magnitude of effects. Instead, we must calculate <strong>marginal effects</strong> or <strong>discrete changes</strong> at specific values of the predictors.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-2 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle>Key Takeaways</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-0.5">1</Badge>
                <span>Linear models assume <strong>constant marginal effects</strong> - the impact of a variable is the same everywhere</span>
              </li>
              <li className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-0.5">2</Badge>
                <span>Nonlinear models allow <strong>variable marginal effects</strong> - the impact depends on current values of variables</span>
              </li>
              <li className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-0.5">3</Badge>
                <span>For categorical outcomes, nonlinear models prevent impossible predictions and provide more realistic interpretations</span>
              </li>
              <li className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-0.5">4</Badge>
                <span>Understanding linear regression provides the foundation for understanding the more complex CLDV models in later chapters</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chapter2;
