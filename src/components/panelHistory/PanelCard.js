import React from 'react';
import PanelImage from './PanelImage';
import ConventionBadge from './ConventionBadge';

function PanelCard({ item }) {
    const durationLabel = `${item.durationHours} hour${item.durationHours !== 1 ? 's' : ''}`;

    return (
        <div className="card bg-base-100 shadow-xl h-full flex flex-col overflow-hidden">
            <PanelImage image={item.image} />

            <div className="card-body flex-grow overflow-y-auto gap-4">
                <h2 className="card-title text-xl lg:text-2xl leading-tight">
                    {item.title}
                </h2>

                <div className="divider my-2"></div>

                <div className="flex flex-wrap items-center gap-2">
                    <div className="badge badge-primary badge-lg">
                        {durationLabel}
                    </div>
                    <div className="badge badge-secondary badge-lg">
                        {item.occurrences.length} appearance{item.occurrences.length !== 1 ? 's' : ''}
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {item.occurrences.map((occurrence) => (
                        <ConventionBadge
                            key={`${occurrence.conventionName}-${occurrence.conventionDate.getTime()}`}
                            occurrence={occurrence}
                        />
                    ))}
                </div>

                {item.scheduleDescription && (
                    <div className="text-sm leading-snug break-words">
                        {item.scheduleDescription}
                    </div>
                )}

                {item.description && (
                    <div className="text-sm">
                        <span dangerouslySetInnerHTML={{ __html: item.description }} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default PanelCard;
