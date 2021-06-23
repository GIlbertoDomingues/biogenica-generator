'use strict';

export function event(action, category, label)
{
    gtag('event', action, {
        'event_category': category,
        'event_label': label
    });
}

export function pageview(path)
{
    gtag('config', 'UA-', {
        'page_path': path
    });
}