import conventionData from '../data/conventionHistory.json';

// Convert date strings to Date objects
const processedData = {};
for (const [year, events] of Object.entries(conventionData)) {
    processedData[year] = events.map(event => ({
        ...event,
        startDate: new Date(event.startDate),
        panels: (event.panels || []).map(panel => ({
            scheduleDescription: '',
            ...panel
        }))
    }));
}

function normalizePanelTitle(title) {
    return (title || '').trim().toLowerCase();
}

function getPanelOccurrence(convention) {
    return {
        conventionName: convention.name,
        websiteUrl: convention.websiteUrl,
        conventionDate: convention.startDate,
        conventionYear: convention.startDate.getFullYear()
    };
}

/**
 * Get total hours presented, optionally filtered by year or convention name
 * @param {string|number} year - Optional year to filter by
 * @param {string} convention - Optional convention name to filter by
 * @returns {number} Total hours
 */
export function getTotalHours(year, convention) {
    let total = 0;
    
    for (const [dataYear, events] of Object.entries(processedData)) {
        if (year && dataYear !== String(year)) continue;
        
        for (const event of events) {
            if (convention && event.name !== convention) continue;
            
            for (const panel of event.panels) {
                total += panel.durationHours || 0;
            }
        }
    }
    
    return total;
}

/**
 * Get all conventions and their panels for a specific year
 * @param {string|number} year - The year to get data for
 * @returns {Array} Array of convention objects with their panels
 */
export function getConventionsByYear(year) {
    const yearStr = String(year);
    return processedData[yearStr] || [];
}

/**
 * Get all panels for a specific convention
 * @param {string} conventionName - The name of the convention
 * @returns {Array} Array of panel objects
 */
export function getPanelsByConvention(conventionName) {
    for (const events of Object.values(processedData)) {
        for (const event of events) {
            if (event.name === conventionName) {
                return event.panels;
            }
        }
    }
    return [];
}

/**
 * Get all conventions across all years
 * @returns {Array} Flattened array of all convention objects
 */
export function getAllConventions() {
    const all = [];
    for (const events of Object.values(processedData)) {
        all.push(...events);
    }
    return all;
}

/**
 * Get convention by name with full details
 * @param {string} conventionName - The name of the convention
 * @returns {Object} Convention object with panels
 */
export function getConventionByName(conventionName) {
    for (const events of Object.values(processedData)) {
        for (const event of events) {
            if (event.name === conventionName) {
                return event;
            }
        }
    }
    return null;
}

/**
 * Get all years available in the data
 * @returns {Array} Array of years as strings, sorted ascending
 */
export function getAvailableYears() {
    return Object.keys(processedData).sort();
}

/**
 * Get total hours for a specific year
 * @param {string|number} year - The year to calculate total for
 * @returns {number} Total hours for that year
 */
export function getTotalHoursByYear(year) {
    return getTotalHours(year);
}

/**
 * Get all panels for a specific year, flattened across all conventions
 * Returns panels with convention context included
 * @param {string|number} year - The year to get panels for
 * @returns {Array} Array of panel objects with convention context
 */
export function getAllPanelsForYear(year) {
    const yearStr = String(year);
    const conventions = processedData[yearStr] || [];
    const panels = [];
    
    for (const convention of conventions) {
        for (const panel of convention.panels) {
            panels.push({
                ...panel,
                convention: convention.name,
                conventionDate: convention.startDate
            });
        }
    }
    
    return panels;
}

/**
 * Get unique panels for a specific year, grouped by panel title.
 * Each panel includes all convention occurrences for that year.
 * @param {string|number} year - The year to get panels for
 * @returns {Array} Array of unique panel objects with occurrence badges
 */
export function getUniquePanelsByYear(year) {
    const yearStr = String(year);
    const conventions = processedData[yearStr] || [];
    const panelMap = new Map();

    for (const convention of conventions) {
        for (const panel of convention.panels) {
            const panelKey = normalizePanelTitle(panel.title);
            const occurrence = getPanelOccurrence(convention);

            if (!panelMap.has(panelKey)) {
                panelMap.set(panelKey, {
                    id: panelKey,
                    title: panel.title,
                    image: panel.image,
                    durationHours: panel.durationHours,
                    description: panel.description,
                    scheduleDescription: panel.scheduleDescription,
                    occurrences: [occurrence],
                    firstOccurrenceDate: convention.startDate
                });
                continue;
            }

            const existingPanel = panelMap.get(panelKey);

            if (!existingPanel.image && panel.image) {
                existingPanel.image = panel.image;
            }

            if (!existingPanel.durationHours && panel.durationHours) {
                existingPanel.durationHours = panel.durationHours;
            }

            if (!existingPanel.description && panel.description) {
                existingPanel.description = panel.description;
            }

            if (!existingPanel.scheduleDescription && panel.scheduleDescription) {
                existingPanel.scheduleDescription = panel.scheduleDescription;
            }

            existingPanel.occurrences.push(occurrence);

            if (convention.startDate < existingPanel.firstOccurrenceDate) {
                existingPanel.firstOccurrenceDate = convention.startDate;
                existingPanel.title = panel.title;
            }
        }
    }

    return Array.from(panelMap.values())
        .map((panel) => ({
            ...panel,
            occurrences: panel.occurrences.sort((a, b) => a.conventionDate - b.conventionDate)
        }))
        .sort((a, b) => {
            const dateDiff = a.firstOccurrenceDate - b.firstOccurrenceDate;

            if (dateDiff !== 0) {
                return dateDiff;
            }

            return a.title.localeCompare(b.title);
        });
}

/**
 * Get total number of panels presented
 * @returns {number} Total panel count
 */
export function getTotalPanels() {
    let total = 0;

    for (const events of Object.values(processedData)) {
        for (const event of events) {
            total += event.panels.length;
        }
    }

    return total;
}
