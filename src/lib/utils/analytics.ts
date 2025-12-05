// Analytics tracking utility
const API_URL = "https://hit.ghoroabd.com/hit.php";

// Session storage key for page load tracking
const PAGE_LOAD_KEY = 'tedx_page_load_tracked';

/**
 * Track page load event (only once per browser session)
 * Uses sessionStorage to prevent duplicate tracking across navigation
 */
export function trackPageLoad() {
	if (typeof window === 'undefined') return; // Prevent SSR issues
	
	// Check if already tracked in this session
	if (sessionStorage.getItem(PAGE_LOAD_KEY)) {
		return; // Already tracked, don't send again
	}
	
	// Mark as tracked for this session
	sessionStorage.setItem(PAGE_LOAD_KEY, 'true');

	// Send tracking request
	fetch(API_URL, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ type: "page_load" })
	}).catch(err => {
		// Silently fail to not disrupt user experience
		console.debug("Analytics tracking failed:", err);
	});
}

/**
 * Track registration button click
 * Returns a function to be used as event handler
 */
export function trackRegClick(e?: Event) {
	if (typeof window === 'undefined') return; // Prevent SSR issues

	// If called directly without event, just track
	fetch(API_URL, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ type: "reg_click" })
	})
		.then(res => res.json())
		.then(data => {
			console.log("Reg Clicks:", data.reg_hits);
		})
		.catch(err => {
			// Silently fail to not disrupt user experience
			console.debug("Analytics tracking failed:", err);
		});
}

/**
 * Create a click handler for registration buttons
 */
export function handleRegClick(e: Event) {
	trackRegClick(e);
}
