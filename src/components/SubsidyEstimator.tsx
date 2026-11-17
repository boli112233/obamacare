import { useState, useMemo } from 'react';
import { Calculator, TrendingDown, DollarSign, Info } from 'lucide-react';

type HouseholdSize = 1 | 2 | 3 | 4 | 5 | 6;

const fplLookup: Record<number, number> = {
  1: 15060,
  2: 20380,
  3: 25700,
  4: 31020,
  5: 36340,
  6: 41660,
};

function formatCurrency(n: number): string {
  return n.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });
}

export function SubsidyEstimator() {
  const [income, setIncome] = useState<number>(40000);
  const [household, setHousehold] = useState<HouseholdSize>(2);

  const result = useMemo(() => {
    const fpl = fplLookup[household] ?? fplLookup[6];
    const fplRatio = income / fpl;
    const eligible = fplRatio >= 1.0 && fplRatio <= 4.0;

    // Simplified ACA premium cap model: sliding cap from ~2% to ~8.5% of income
    let capRate = 0;
    if (fplRatio <= 1.5) capRate = 0.0;
    else if (fplRatio <= 2.0) capRate = 0.02;
    else if (fplRatio <= 2.5) capRate = 0.04;
    else if (fplRatio <= 3.0) capRate = 0.06;
    else if (fplRatio <= 4.0) capRate = 0.085;
    else capRate = 0.085;

    const benchmarkPremium = Math.round(fpl * 0.095); // ~9.5% of FPL as benchmark
    const maxPremium = Math.round(income * capRate);
    const subsidy = Math.max(0, benchmarkPremium - maxPremium);

    return {
      fpl,
      fplRatio,
      eligible,
      capRate: capRate * 100,
      maxPremium,
      subsidy,
      benchmarkPremium,
    };
  }, [income, household]);

  return (
    <section id="subsidy" className="py-24 bg-ink-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold tracking-wide mb-5">
            SUBSIDY ESTIMATOR
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-900 leading-tight tracking-tight">
            Estimate your financial help
          </h2>
          <p className="mt-5 text-lg text-ink-600 leading-relaxed">
            Get a rough idea of how much you could save on monthly premiums with
            premium tax credits. This is an estimate—actual savings depend on
            your final application.
          </p>
        </div>

        <div className="mt-14 max-w-4xl mx-auto reveal">
          <div className="bg-white rounded-2xl shadow-sm border border-ink-200/70 overflow-hidden">
            {/* Input panel */}
            <div className="p-7 sm:p-9 border-b border-ink-100">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-11 h-11 rounded-xl bg-primary-600 flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-semibold text-xl text-ink-900">
                  Your information
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-7">
                {/* Income */}
                <div>
                  <label className="block text-sm font-semibold text-ink-700 mb-2">
                    Annual household income
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-400" />
                    <input
                      type="number"
                      min={0}
                      step={1000}
                      value={income}
                      onChange={(e) =>
                        setIncome(Math.max(0, Number(e.target.value) || 0))
                      }
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-ink-200 bg-ink-50 focus:bg-white focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all font-medium text-ink-900"
                    />
                  </div>
                  <input
                    type="range"
                    min={10000}
                    max={150000}
                    step={1000}
                    value={income}
                    onChange={(e) => setIncome(Number(e.target.value))}
                    className="w-full mt-3 accent-primary-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-ink-400 mt-1">
                    <span>$10k</span>
                    <span>$150k</span>
                  </div>
                </div>

                {/* Household */}
                <div>
                  <label className="block text-sm font-semibold text-ink-700 mb-2">
                    Household size
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {([1, 2, 3, 4, 5, 6] as HouseholdSize[]).map((size) => (
                      <button
                        key={size}
                        onClick={() => setHousehold(size)}
                        className={`py-2.5 rounded-lg font-semibold text-sm transition-all ${
                          household === size
                            ? 'bg-primary-600 text-white shadow-sm'
                            : 'bg-ink-50 text-ink-600 hover:bg-ink-100 border border-ink-200'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-ink-400 mt-2.5">
                    Includes you, your spouse, and any dependents on your taxes.
                  </p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="p-7 sm:p-9 bg-gradient-to-br from-primary-50/60 to-accent-50/40">
              {result.eligible ? (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <TrendingDown className="w-6 h-6 text-accent-600" />
                    <h3 className="font-display font-semibold text-xl text-ink-900">
                      Your estimated savings
                    </h3>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-5">
                    <div className="rounded-xl bg-white p-5 border border-ink-200/60">
                      <div className="text-xs font-semibold text-ink-400 uppercase tracking-wide">
                        Est. Annual Subsidy
                      </div>
                      <div className="font-display font-extrabold text-2xl text-accent-600 mt-1">
                        {formatCurrency(result.subsidy)}
                      </div>
                      <div className="text-xs text-ink-400 mt-1">
                        ≈ {formatCurrency(Math.round(result.subsidy / 12))}/mo
                      </div>
                    </div>

                    <div className="rounded-xl bg-white p-5 border border-ink-200/60">
                      <div className="text-xs font-semibold text-ink-400 uppercase tracking-wide">
                        Max Premium You Pay
                      </div>
                      <div className="font-display font-extrabold text-2xl text-primary-700 mt-1">
                        {formatCurrency(result.maxPremium)}
                      </div>
                      <div className="text-xs text-ink-400 mt-1">
                        ≈ {formatCurrency(Math.round(result.maxPremium / 12))}/mo
                      </div>
                    </div>

                    <div className="rounded-xl bg-white p-5 border border-ink-200/60">
                      <div className="text-xs font-semibold text-ink-400 uppercase tracking-wide">
                        Income as % of FPL
                      </div>
                      <div className="font-display font-extrabold text-2xl text-ink-900 mt-1">
                        {Math.round(result.fplRatio * 100)}%
                      </div>
                      <div className="text-xs text-ink-400 mt-1">
                        FPL for {household}: {formatCurrency(result.fpl)}
                      </div>
                    </div>
                  </div>

                  <p className="mt-6 text-sm text-ink-500 leading-relaxed flex items-start gap-2">
                    <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-ink-400" />
                    Premium cap set at approximately {result.capRate.toFixed(1)}%
                    of income for a benchmark Silver plan. Your actual subsidy
                    may differ based on age, location, and the specific plan you
                    choose. Apply at HealthCare.gov for an exact calculation.
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-ink-100 flex items-center justify-center mx-auto mb-4">
                    <Info className="w-7 h-7 text-ink-400" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-ink-800">
                    {result.fplRatio < 1
                      ? 'You may qualify for Medicaid'
                      : 'You may not qualify for subsidies'}
                  </h3>
                  <p className="mt-2 text-ink-500 text-sm max-w-md mx-auto">
                    {result.fplRatio < 1
                      ? 'Your income is below 100% of the Federal Poverty Level. You may be eligible for Medicaid or CHIP instead of Marketplace subsidies. Check your state\u2019s program.'
                      : 'Your income is above 400% of FPL. Subsidies phase out at higher income levels, but you can still buy a Marketplace plan at full price.'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
