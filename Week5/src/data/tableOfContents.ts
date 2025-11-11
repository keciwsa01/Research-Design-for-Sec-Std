export interface ChapterSection {
  title: string;
  page?: number;
  subsections?: ChapterSection[];
}

export interface Chapter {
  number: number;
  title: string;
  description: string;
  sections: ChapterSection[];
  slug: string;
}

export const tableOfContents: Chapter[] = [
  {
    number: 1,
    title: "Introduction",
    description: "Overview of regression models and the limitations of linear models for categorical outcomes",
    slug: "introduction",
    sections: [
      { title: "The Problem with Linear Models", page: 6 },
      { title: "What are CLDVs?", page: 7 },
      { title: "Organization of the Book", page: 8 }
    ]
  },
  {
    number: 2,
    title: "The Linear Regression Model",
    description: "Foundation concepts including constant vs. variable marginal effects",
    slug: "linear-regression",
    sections: [
      { title: "The Basic Linear Model", page: 25 },
      { title: "Marginal Effects in Linear Models", page: 28 },
      { title: "Nonlinear Models Preview", page: 34 },
      { title: "Linear vs Nonlinear Comparison", page: 40 }
    ]
  },
  {
    number: 3,
    title: "Binary Outcomes: Logit and Probit Models",
    description: "Models for binary (0/1) dependent variables",
    slug: "binary-outcomes",
    sections: [
      { title: "The Linear Probability Model", page: 34 },
      { title: "The Latent Variable Model", page: 40 },
      { title: "Identification", page: 47 },
      { title: "Probability Model", page: 50 },
      { title: "ML Estimation", page: 52 },
      { title: "Numerical Methods for ML Estimation", page: 54 }
    ]
  },
  {
    number: 5,
    title: "Ordinal Outcomes",
    description: "Regression models for ordered categorical outcomes",
    slug: "ordinal-outcomes",
    sections: [
      { title: "Ordered Logit and Ordered Probit Analysis", page: 114 },
      { title: "A Latent Variable Model for Ordinal Variables", page: 122 },
      { title: "Identification", page: 123 },
      { title: "Estimation", page: 127 }
    ]
  },
  {
    number: 6,
    title: "Nominal Outcomes",
    description: "Models for unordered categorical outcomes",
    slug: "nominal-outcomes",
    sections: [
      { title: "Multinomial Logit and Related Models", page: 148 },
      { title: "Introduction to the Multinomial Logit Model", page: 148 },
      { title: "The Multinomial Logit Model", page: 150 },
      { title: "ML Estimation", page: 151 }
    ]
  },
  {
    number: 7,
    title: "Limited Outcomes",
    description: "Models for truncated and censored dependent variables",
    slug: "limited-outcomes",
    sections: [
      { title: "The Tobit Model", page: 7 },
      { title: "The Problem of Censoring", page: 71 },
      { title: "Truncated and Censored Distributions", page: 72 },
      { title: "The Tobit Model for Censored Outcomes", page: 73 }
    ]
  },
  {
    number: 8,
    title: "Count Outcomes",
    description: "Poisson and negative binomial regression models for count data",
    slug: "count-outcomes",
    sections: [
      { title: "Poisson Regression Model", page: 8 },
      { title: "The Poisson Distribution", page: 81 },
      { title: "The Negative Binomial Regression Model", page: 82 },
      { title: "Models for Truncated Counts", page: 83 }
    ]
  }
];
