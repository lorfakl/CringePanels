import React from 'react';
import ImageComingSoon from './ImageComingSoon';

function PanelCard({ item }) {
    return (
        <div className="card bg-base-100 shadow-xl h-full flex flex-col">
            <div className="absolute top-4 right-4 badge badge-outline z-10">
                {item.convention}
            </div>

            <ImageComingSoon />

            <div className="card-body flex-grow overflow-y-auto">
                <h2 className="card-title text-xl lg:text-3xl leading-tight pr-20">
                    {item.title}
                </h2>

                <div className="divider my-2"></div>

                <div className="flex gap-2 mb-3">
                    <div className="badge badge-primary badge-lg">
                        {item.durationHours} hour{item.durationHours !== 1 ? 's' : ''}
                    </div>
                    <div className="badge badge-outline">
                        {item.conventionDate.toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                        })}
                    </div>
                </div>

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
