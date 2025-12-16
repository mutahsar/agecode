import { NextRequest, NextResponse } from 'next/server';
import { computationEngine } from '@/lib/engines/computationEngine';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formula, context } = body;

    if (!formula) {
      return NextResponse.json({ error: 'Formula is required' }, { status: 400 });
    }

    // Update context if provided
    if (context) {
      computationEngine.updateContext(context);
    }

    // Evaluate the formula
    const result = computationEngine.evaluate(formula);

    return NextResponse.json({ 
      success: true, 
      result,
      formula 
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ 
      error: 'Computation failed', 
      message 
    }, { status: 500 });
  }
}

// Get available computation functions
export async function GET() {
  const functions = computationEngine.getAvailableFunctions();
  return NextResponse.json({ functions });
}
