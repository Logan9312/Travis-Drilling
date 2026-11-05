// Single source for contact details and site navigation. Navbar, Footer,
// pages, and the 404 page all read from here so they cannot drift apart.

export const phone = {
	display: '(780) 974-3184',
	href: 'tel:780-974-3184'
};

export const email = 'travisdrillingltd@gmail.com';

export const location = 'Onoway, Alberta';

// Ordered by what visitors come for: what we do, where we work, who we are,
// how to reach us. Home owns the first three as sections; Contact is a page.
export const navItems = [
	{ href: '/#services', label: 'Services' },
	{ href: '/#area', label: 'Service area' },
	{ href: '/#about', label: 'About' },
	{ href: '/Contact', label: 'Contact' }
];

// Canonical page paths. Requests for any other casing (e.g. /contact) are
// redirected here in hooks.server.ts. Retired pages map to their new owner.
export const canonicalPaths: Record<string, string> = {
	'/contact': '/Contact',
	'/about': '/#about'
};
