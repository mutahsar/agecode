import { evaluate, parse } from 'mathjs';

export interface ComputationContext {
  [key: string]: any;
}

export class ComputationEngine {
  private context: ComputationContext;

  constructor(initialContext: ComputationContext = {}) {
    this.context = initialContext;
  }

  /**
   * Update the computation context with new variables
   */
  updateContext(updates: ComputationContext): void {
    this.context = { ...this.context, ...updates };
  }

  /**
   * Evaluate a mathematical formula
   */
  evaluate(formula: string): any {
    try {
      return evaluate(formula, this.context);
    } catch (error) {
      console.error('Computation error:', error);
      throw new Error(`Failed to evaluate formula: ${formula}`);
    }
  }

  /**
   * Calculate VAT (Value Added Tax)
   */
  calculateVAT(amount: number, vatRate: number = 0.15): number {
    return amount * vatRate;
  }

  /**
   * Calculate total with VAT included
   */
  calculateTotalWithVAT(amount: number, vatRate: number = 0.15): number {
    return amount + this.calculateVAT(amount, vatRate);
  }

  /**
   * Calculate discount amount
   */
  calculateDiscount(amount: number, discountPercent: number): number {
    return amount * (discountPercent / 100);
  }

  /**
   * Calculate total after discount
   */
  calculateTotalAfterDiscount(amount: number, discountPercent: number): number {
    return amount - this.calculateDiscount(amount, discountPercent);
  }

  /**
   * Calculate percentage
   */
  calculatePercentage(value: number, total: number): number {
    if (total === 0) return 0;
    return (value / total) * 100;
  }

  /**
   * Sum an array of numbers
   */
  sum(values: number[]): number {
    return values.reduce((acc, val) => acc + val, 0);
  }

  /**
   * Calculate average
   */
  average(values: number[]): number {
    if (values.length === 0) return 0;
    return this.sum(values) / values.length;
  }

  /**
   * Find minimum value
   */
  min(values: number[]): number {
    return Math.min(...values);
  }

  /**
   * Find maximum value
   */
  max(values: number[]): number {
    return Math.max(...values);
  }

  /**
   * Count items
   */
  count(items: any[]): number {
    return items.length;
  }

  /**
   * Execute conditional logic
   */
  conditional(condition: boolean, trueValue: any, falseValue: any): any {
    return condition ? trueValue : falseValue;
  }

  /**
   * Round number to specified decimal places
   */
  round(value: number, decimals: number = 2): number {
    return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
  }

  /**
   * Calculate compound interest
   */
  compoundInterest(principal: number, rate: number, time: number, frequency: number = 1): number {
    return principal * Math.pow(1 + rate / frequency, frequency * time);
  }

  /**
   * Calculate simple interest
   */
  simpleInterest(principal: number, rate: number, time: number): number {
    return principal * rate * time;
  }

  /**
   * Parse and validate formula
   */
  parseFormula(formula: string): boolean {
    try {
      parse(formula);
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Get available functions
   */
  getAvailableFunctions(): string[] {
    return [
      'calculateVAT',
      'calculateTotalWithVAT',
      'calculateDiscount',
      'calculateTotalAfterDiscount',
      'calculatePercentage',
      'sum',
      'average',
      'min',
      'max',
      'count',
      'conditional',
      'round',
      'compoundInterest',
      'simpleInterest',
    ];
  }
}

// Export singleton instance
export const computationEngine = new ComputationEngine();
