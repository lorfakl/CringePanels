import React, { useMemo, useState } from 'react';
import { getAvailableYears, getConventionsByYear, getUniquePanelsByYear } from '../services/panelDataService';
import PanelCard from './panelHistory/PanelCard';

function PanelHistory() {
    const years = getAvailableYears();
    const [selectedYear, setSelectedYear] = useState(() => years[years.length - 1] || '');

    const yearConventions = getConventionsByYear(selectedYear);
    const yearPanels = useMemo(() => getUniquePanelsByYear(selectedYear), [selectedYear]);
    const totalAppearances = yearPanels.reduce((sum, panel) => sum + panel.occurrences.length, 0);
    const totalHours = yearPanels.reduce(
        (sum, panel) => sum + (panel.durationHours || 0) * panel.occurrences.length,
        0
    );

    const handlePrevYear = () => {
        if (!years.length) {
            return;
        }

        const currentIdx = years.indexOf(selectedYear);
        if (currentIdx > 0) {
            setSelectedYear(years[currentIdx - 1]);
        }
    };

    const handleNextYear = () => {
        if (!years.length) {
            return;
        }

        const currentIdx = years.indexOf(selectedYear);
        if (currentIdx < years.length - 1) {
            setSelectedYear(years[currentIdx + 1]);
        }
    };

    return (
        <div className="bg-neutral min-h-screen p-4 lg:p-8">
            <h1 className="text-center font-bold underline text-3xl lg:text-7xl mb-8">
                Panel History
            </h1>

            <div className="flex justify-center mb-8">
                <div className="relative w-full max-w-5xl px-12 lg:px-16">
                    <button
                        onClick={handlePrevYear}
                        className="btn btn-sm lg:btn-md btn-secondary absolute left-0 top-1/2 -translate-y-1/2"
                        disabled={!years.length || years.indexOf(selectedYear) === 0}
                    >
                        ←
                    </button>

                    <div className="overflow-x-auto">
                        <div className="flex justify-center gap-3 pb-2">
                            {years.map((year) => (
                                <button
                                    key={year}
                                    onClick={() => setSelectedYear(year)}
                                    className={`btn btn-sm lg:btn-md whitespace-nowrap ${
                                        selectedYear === year
                                            ? 'btn-primary'
                                            : 'btn-neutral'
                                    }`}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={handleNextYear}
                        className="btn btn-sm lg:btn-md btn-secondary absolute right-0 top-1/2 -translate-y-1/2"
                        disabled={!years.length || years.indexOf(selectedYear) === years.length - 1}
                    >
                        →
                    </button>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="w-full max-w-7xl">
                    <div className="rounded-box bg-base-200 shadow-lg p-4 lg:p-6">
                        {yearPanels.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
                                {yearPanels.map((item) => (
                                    <PanelCard key={item.id} item={item} />
                                ))}
                            </div>
                        ) : (
                            <div className="py-16 text-center opacity-70">
                                No panels found for {selectedYear}.
                            </div>
                        )}
                    </div>

                    <div className="text-center text-sm opacity-75 mt-4 space-y-1">
                        <p>
                            {yearPanels.length} unique panel{yearPanels.length !== 1 ? 's' : ''} in {selectedYear}
                        </p>
                        <p>
                            {totalAppearances} appearance{totalAppearances !== 1 ? 's' : ''} across {yearConventions.length} convention{yearConventions.length !== 1 ? 's' : ''}
                        </p>
                        <p className="font-semibold text-base">
                            {totalHours} hours total
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PanelHistory