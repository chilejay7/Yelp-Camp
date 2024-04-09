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

export function createCampground(newCamp) {
    return fetch(`/api/campgrounds`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCamp),
    });
};

export function updateCampground(updatedCamp) {
    return fetch(`/api/campgrounds`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedCamp),
    });
};

export function googleMapSearch () {
    return fetch('http://localhost:7075')
};