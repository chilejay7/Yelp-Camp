export async function getCampgrounds () {
    return fetch('/api/campgrounds', {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};