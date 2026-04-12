import React, { useEffect, useMemo, useRef, useState } from 'react';
import { getAvailableYears, getConventionsByYear } from '../services/panelDataService';
import ConventionBreakCard from './panelHistory/ConventionBreakCard';
import PanelCard from './panelHistory/PanelCard';

function PanelHistory() {
    const years = getAvailableYears();
    const [selectedYear, setSelectedYear] = useState(years[years.length - 1]); // Start with most recent year
    const verticalCarouselRef = useRef(null);

    const yearConventions = getConventionsByYear(selectedYear);
    const yearItems = useMemo(() => {
        return yearConventions.flatMap((convention) => {
            const conventionItem = {
                type: 'convention',
                id: `convention-${convention.name}-${convention.startDate.getTime()}`,
                name: convention.name,
                startDate: convention.startDate,
                panelCount: convention.panels.length,
                totalHours: convention.panels.reduce((sum, panel) => sum + (panel.durationHours || 0), 0),
                previewImage: convention.previewImage,
                websiteUrl: convention.websiteUrl
            };

            const panelItems = convention.panels.map((panel, index) => ({
                ...panel,
                type: 'panel',
                id: `panel-${convention.name}-${index}`,
                convention: convention.name,
                conventionDate: convention.startDate
            }));

            return [conventionItem, ...panelItems];
        });
    }, [yearConventions]);

    const handlePrevYear = () => {
        const currentIdx = years.indexOf(selectedYear);
        if (currentIdx > 0) {
            setSelectedYear(years[currentIdx - 1]);
        }
    };

    const handleNextYear = () => {
        const currentIdx = years.indexOf(selectedYear);
        if (currentIdx < years.length - 1) {
            setSelectedYear(years[currentIdx + 1]);
        }
    };

    useEffect(() => {
        if (verticalCarouselRef.current) {
            verticalCarouselRef.current.scrollTo({
                top: 0,
                behavior: 'auto'
            });
        }
    }, [selectedYear]);

    return (
        <div className="bg-neutral min-h-screen p-4 lg:p-8">
            <h1 className="text-center font-bold underline text-3xl lg:text-7xl mb-8">
                Panel History
            </h1>

            <div className="flex justify-center mb-8">
                <div className="flex items-center gap-4 ">
                    <button
                        onClick={handlePrevYear}
                        className="btn btn-sm lg:btn-md btn-secondary"
                        disabled={years.indexOf(selectedYear) === 0}
                    >
                        ←
                    </button>

                    <div className="flex-1 overflow-x-auto">
                        <div className="flex gap-3 pb-2">
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
                        className="btn btn-sm lg:btn-md btn-secondary"
                        disabled={years.indexOf(selectedYear) === years.length - 1}
                    >
                        →
                    </button>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="w-full max-w-2xl">
                    <div ref={verticalCarouselRef} className="carousel carousel-vertical w-full h-96 lg:h-[600px] rounded-box bg-base-200 shadow-lg">
                        {yearItems.map((item, idx) => (
                            <div
                                key={item.id}
                                id={`panel-${idx}`}
                                className="carousel-item w-full h-full snap-center scroll-smooth"
                            >
                                <div className="flex flex-col w-full h-full p-4 lg:p-8">
                                    {item.type === 'convention' ? (
                                        <ConventionBreakCard item={item} />
                                    ) : (
                                        <PanelCard item={item} />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center text-sm opacity-75 mt-4">
                        <p>
                            {yearConventions.reduce((sum, convention) => sum + convention.panels.length, 0)} panel
                            {yearConventions.reduce((sum, convention) => sum + convention.panels.length, 0) !== 1 ? 's' : ''} in {selectedYear}
                        </p>
                        <p>{yearConventions.length} convention{yearConventions.length !== 1 ? 's' : ''}</p>
                        <p className="font-semibold text-base">
                            {yearItems.reduce((sum, item) => sum + (item.durationHours || 0), 0)} hours total
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PanelHistory