export function getCampgrounds() {
    return fetch('/api/campgrounds', {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};


export function getCampgroundID(campID) {
    return fetch(`/api/campgrounds/${campID}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};