export interface GlossaryItem {
  term: string;
  abbreviation?: string;
  definition: string;
  latex?: string;
  example?: string;
}

export const abbreviations: GlossaryItem[] = [
  {
    term: "Categorical and Limited Dependent Variables",
    abbreviation: "CLDVs",
    definition: "Dependent variables that are categorical (binary, ordinal, or nominal) or limited in some way (truncated, censored)"
  },
  {
    term: "Linear Regression Model",
    abbreviation: "LRM",
    definition: "Standard regression model assuming continuous, normally distributed outcomes"
  },
  {
    term: "Ordinary Least Squares",
    abbreviation: "OLS",
    definition: "Method of estimating parameters in linear regression by minimizing sum of squared residuals"
  },
  {
    term: "Maximum Likelihood",
    abbreviation: "ML",
    definition: "Method of estimating parameters by finding values that maximize the likelihood of observing the data"
  },
  {
    term: "Cumulative Density Function",
    abbreviation: "cdf",
    definition: "Function that gives the probability that a random variable is less than or equal to a value"
  },
  {
    term: "Binary Response Model",
    abbreviation: "BRM",
    definition: "Regression model for binary (0/1) outcomes, including logit and probit models"
  }
];

export const notation: GlossaryItem[] = [
  {
    term: "Expected Value",
    latex: "E(y|x)",
    definition: "The expected (average) value of y, given x",
    example: "E(income|education) represents expected income given education level"
  },
  {
    term: "Likelihood Function",
    latex: "L(\\alpha, \\beta|X)",
    definition: "The likelihood of parameters α and β given observed data X",
    example: "Used in maximum likelihood estimation to find best parameter values"
  },
  {
    term: "Independent Variable",
    latex: "x_i",
    definition: "The i-th independent (predictor) variable in the model",
    example: "If x₁ is age and x₂ is income, x₁ represents age"
  },
  {
    term: "Probability",
    latex: "Pr(y=1|x)",
    definition: "The probability that outcome y equals 1, given x",
    example: "Pr(employed=1|education) is the probability of employment given education"
  },
  {
    term: "Partial Derivative",
    latex: "\\frac{\\partial E(y|x)}{\\partial x_i}",
    definition: "The marginal change in expected y for a small change in xᵢ, holding other variables constant",
    example: "Shows how much y changes when xᵢ increases by one unit"
  },
  {
    term: "Beta Coefficient",
    latex: "\\beta_i",
    definition: "The regression coefficient for variable xᵢ, representing its effect on y",
    example: "β₁ = 0.5 means a one-unit increase in x₁ increases y by 0.5"
  },
  {
    term: "Error Term",
    latex: "\\epsilon",
    definition: "The random error or residual in the model, capturing unexplained variation",
    example: "y = α + βx + ε, where ε represents random deviations"
  },
  {
    term: "Logit Function",
    latex: "\\text{logit}(p) = \\ln\\left(\\frac{p}{1-p}\\right)",
    definition: "The natural log of the odds ratio, transforming probability to log-odds scale",
    example: "Maps probability (0,1) to full real number line (-∞,∞)"
  }
];

export const conceptTerms: GlossaryItem[] = [
  {
    term: "Binary Variable",
    definition: "A variable with exactly two categories or outcomes",
    example: "Employed (yes/no), passed exam (true/false), gender (male/female)"
  },
  {
    term: "Ordinal Variable",
    definition: "A categorical variable where categories have a natural ordering",
    example: "Education level (high school < bachelor < master < PhD), satisfaction ratings (strongly disagree to strongly agree)"
  },
  {
    term: "Nominal Variable",
    definition: "A categorical variable where categories have no natural ordering",
    example: "Occupation (teacher, engineer, doctor), transportation mode (car, bus, bike)"
  },
  {
    term: "Truncated Variable",
    definition: "A variable where values below or above a threshold are completely unobserved",
    example: "Survey only including people earning above $20,000/year"
  },
  {
    term: "Censored Variable",
    definition: "A variable where we know values exist beyond a threshold but don't know the exact values",
    example: "Income capped at reporting maximum (we know it's ≥ cap, but not exact amount)"
  },
  {
    term: "Count Variable",
    definition: "A non-negative integer variable representing number of occurrences",
    example: "Number of children, arrests, publications, or doctor visits"
  }
];
