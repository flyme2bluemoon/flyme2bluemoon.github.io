export const sendToGoogleAnalytics = ({name, delta, id}: any) => {
  // @ts-ignore
  typeof window.gtag !== "undefined" && window.gtag('event', name, {
    event_category: 'Web Vitals',
    event_label: id,
    value: delta,
    non_interaction: true,
  });
}