// Form integration utilities for the Lumin8 Contact page.

// REVIEW: confirm the real Tally form ID before launch (currently a placeholder).
export const TALLY_FORMS = {
  CONTACT: "REPLACE_WITH_REAL_FORM_ID",
} as const;

export interface ContactFormFields {
  name: string;
  company: string;
  email: string;
  phone?: string;
  need: string;
  budget: string;
  message: string;
}

/**
 * Opens the Tally contact form as a popup, passing the fields collected in
 * our own on-page form as Tally hidden fields so submissions land fully
 * populated. Requires the Tally form to define matching hidden field keys —
 * REVIEW once the real form is configured.
 */
export function openContactForm(fields: ContactFormFields): void {
  if (window.Tally) {
    window.Tally.openPopup(TALLY_FORMS.CONTACT, {
      layout: "modal",
      hiddenFields: fields,
    });
    return;
  }
  // Graceful fallback if the Tally widget script hasn't loaded.
  const body = encodeURIComponent(
    `Name: ${fields.name}\nCompany: ${fields.company}\nPhone: ${fields.phone ?? ""}\nWhat they need: ${fields.need}\nBudget: ${fields.budget}\n\n${fields.message}`,
  );
  window.location.href = `mailto:hello@lumin8.agency?subject=${encodeURIComponent(
    `New inquiry from ${fields.name}`,
  )}&body=${body}`;
}

declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string, options?: Record<string, unknown>) => void;
      loadEmbeds: () => void;
    };
  }
}
