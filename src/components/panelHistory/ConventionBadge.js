import React from 'react';

function ConventionBadge({ occurrence }) {
    const label = `${occurrence.conventionName}`;

    const badgeClasses = 'badge badge-outline badge-lg whitespace-nowrap';

    const handleClick = () => {
        if (!occurrence.websiteUrl) {
            return;
        }

        window.open(occurrence.websiteUrl, '_blank', 'noreferrer');
    };

    return (
        <div className="badge badge-lg">
            <button
            type="button"
            onClick={handleClick}
            className={badgeClasses}
            disabled={!occurrence.websiteUrl}
            aria-label={occurrence.websiteUrl ? `Visit ${occurrence.conventionName} website for ${occurrence.conventionYear}` : `${occurrence.conventionName} ${occurrence.conventionYear}`}
            >
            {label}
        </button>
        </div>
        
    );
}

export default ConventionBadge;