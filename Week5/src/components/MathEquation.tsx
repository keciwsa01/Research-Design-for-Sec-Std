import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface MathEquationProps {
  latex: string;
  block?: boolean;
  className?: string;
}

export const MathEquation = ({ latex, block = false, className = '' }: MathEquationProps) => {
  if (block) {
    return (
      <div className={`math-block ${className}`}>
        <BlockMath math={latex} />
      </div>
    );
  }
  
  return (
    <span className={`math-inline ${className}`}>
      <InlineMath math={latex} />
    </span>
  );
};
