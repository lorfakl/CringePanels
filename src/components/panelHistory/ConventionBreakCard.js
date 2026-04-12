import React from 'react';

function ConventionBreakCard({ item }) {
    const Wrapper = item.websiteUrl ? 'a' : 'div';
    const wrapperProps = item.websiteUrl
        ? {
            href: item.websiteUrl,
            target: '_blank',
            rel: 'noreferrer'
        }
        : {};

    return (
        <Wrapper {...wrapperProps} className="card bg-primary text-primary-content shadow-xl h-full justify-center overflow-hidden relative isolate">
            <img
                src={item.previewImage || '/images/myicon.png'}
                alt={`${item.name} preview`}
                className="absolute inset-0 w-full h-full object-cover scale-105 blur-xl"
                onError={(e) => {
                    e.target.src = '/images/myicon.png';
                }}
            />
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="card-body items-center text-center relative z-10 text-base-content">
                <div className="badge badge-lg mb-3 ">Convention:</div>
                <h2 className="text-3xl lg:text-5xl font-black tracking-tight px-4 py-2 rounded-xl bg-base-100/85 backdrop-blur-sm">{item.name}</h2>
                
                <div className="flex gap-3 flex-wrap justify-center mt-4">
                    <div className="badge badge-lg bg-base-100/90 text-base-content border-base-300 backdrop-blur-sm">
                        {item.panelCount} panel{item.panelCount !== 1 ? 's' : ''}
                    </div>
                    <div className="badge badge-lg bg-base-100/90 text-base-content border-base-300 backdrop-blur-sm">
                        {item.totalHours} hour{item.totalHours !== 1 ? 's' : ''}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default ConventionBreakCard;
