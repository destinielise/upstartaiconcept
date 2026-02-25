# Shopify Polaris Design Guidelines

A reference for building consistent, accessible, and merchant-friendly UI using [Shopify Polaris](https://polaris.shopify.com/).

---

## Core Principles

- **Merchant first** — Every decision should reduce cognitive load and help merchants accomplish their goals faster.
- **Consistency over cleverness** — Prefer Polaris patterns over custom solutions, even when a custom approach feels more creative.
- **Accessibility by default** — Polaris components are WCAG 2.1 AA compliant. Don't override behaviors that support assistive technologies.
- **Progressive disclosure** — Show only what's needed. Use Polaris patterns like `Collapsible`, `Popover`, and `Modal` to reveal complexity progressively.

---

## Component Usage

### Always Prefer Polaris Components

Before building a custom component, check the [Polaris component library](https://polaris.shopify.com/components). If a Polaris component covers the use case — use it.

```tsx
// ✅ Do this
import { Button, TextField, Card } from "@shopify/polaris";

// ❌ Not this
const CustomButton = styled.button`...`;
```

### Layout & Structure

| Use case            | Polaris Component           |
| ------------------- | --------------------------- |
| Page wrapper        | `Page`                      |
| Content sections    | `Card`, `LegacyCard`        |
| Side-by-side layout | `InlineGrid`, `InlineStack` |
| Vertical stacking   | `BlockStack`                |
| Full-page layout    | `Layout`, `Layout.Section`  |

```tsx
<Page title="Orders">
  <Layout>
    <Layout.Section>
      <Card>
        <BlockStack gap="400">{/* content */}</BlockStack>
      </Card>
    </Layout.Section>
  </Layout>
</Page>
```

### Forms & Inputs

- Use `TextField` for text input — never raw `<input>` elements.
- Use `Select` for dropdowns, `Checkbox` and `RadioButton` for selection.
- Always provide `label` props — never rely on placeholder text as a label.
- Use `Form` and `FormLayout` to structure form fields consistently.

```tsx
<FormLayout>
  <TextField
    label="Customer name"
    value={name}
    onChange={handleChange}
    autoComplete="name"
  />
  <Select
    label="Status"
    options={statusOptions}
    value={selected}
    onChange={handleSelectChange}
  />
</FormLayout>
```

### Feedback & Status

| Scenario                 | Component                                     |
| ------------------------ | --------------------------------------------- |
| Success / error messages | `Banner`                                      |
| Inline field errors      | `TextField` `error` prop                      |
| Loading states           | `Spinner`, `SkeletonPage`, `SkeletonBodyText` |
| Empty states             | `EmptyState`                                  |
| Toast notifications      | `Toast` via `Frame`                           |

```tsx
// Inline loading
{isLoading ? <Spinner size="small" /> : <DataTable ... />}

// Empty state
<EmptyState
  heading="No orders yet"
  image={emptyStateImage}
  action={{ content: 'Create order', onAction: handleCreate }}
/>
```

### Navigation & Actions

- Use `Button` with appropriate `variant` — `primary`, `secondary`, `plain`, `destructive`.
- Use `ActionList` inside `Popover` for dropdown action menus.
- Use `TopBar` and `Navigation` for app-level chrome — never build custom nav from scratch.
- Destructive actions (delete, remove) must use `variant="primary" tone="critical"` and always confirm via `Modal`.

```tsx
<Button variant="primary" tone="critical" onClick={openModal}>
  Delete product
</Button>

<Modal
  open={modalOpen}
  onClose={closeModal}
  title="Delete product?"
  primaryAction={{ content: 'Delete', destructive: true, onAction: handleDelete }}
  secondaryActions={[{ content: 'Cancel', onAction: closeModal }]}
>
  <Modal.Section>
    <Text>This action cannot be undone.</Text>
  </Modal.Section>
</Modal>
```

---

## Styling

### Use Polaris Design Tokens — Not Custom CSS

Polaris exposes design tokens for color, spacing, typography, border, shadow, and motion. Always use tokens over hardcoded values.

```css
/* ✅ Do this */
.container {
  padding: var(--p-space-400);
  background: var(--p-color-bg-surface);
  border-radius: var(--p-border-radius-200);
  box-shadow: var(--p-shadow-card);
}

/* ❌ Not this */
.container {
  padding: 16px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
```

### Spacing Scale

Use `--p-space-{n}` tokens. Values follow a base-4 scale:

| Token            | Value |
| ---------------- | ----- |
| `--p-space-100`  | 4px   |
| `--p-space-200`  | 8px   |
| `--p-space-300`  | 12px  |
| `--p-space-400`  | 16px  |
| `--p-space-500`  | 20px  |
| `--p-space-600`  | 24px  |
| `--p-space-800`  | 32px  |
| `--p-space-1200` | 48px  |

### Color Tokens

Never use hex values directly. Map to semantic color tokens:

```css
/* Backgrounds */
--p-color-bg-surface         /* Card / modal backgrounds */
--p-color-bg-surface-secondary  /* Page background */
--p-color-bg-fill-brand      /* Primary brand fill */
--p-color-bg-fill-critical   /* Destructive / error fill */
--p-color-bg-fill-success    /* Success fill */

/* Text */
--p-color-text               /* Default body text */
--p-color-text-secondary     /* Subdued / helper text */
--p-color-text-brand         /* Interactive / link text */
--p-color-text-critical      /* Error text */

/* Borders */
--p-color-border             /* Default borders */
--p-color-border-brand       /* Focused / active borders */
```

### Typography

Use the `Text` component instead of raw HTML text elements. It maps to Polaris type tokens.

```tsx
// ✅ Do this
<Text variant="headingMd" as="h2">Order details</Text>
<Text variant="bodyMd" tone="subdued">Updated 3 hours ago</Text>

// ❌ Not this
<h2 style={{ fontSize: '16px', fontWeight: 600 }}>Order details</h2>
```

**Available variants:** `heading2xl`, `headingXl`, `headingLg`, `headingMd`, `headingSm`, `headingXs`, `bodyLg`, `bodyMd`, `bodySm`

### Motion & Animation

Use Polaris motion tokens for transitions — avoid custom `transition` values.

```css
transition: transform var(--p-motion-duration-150)
  var(--p-motion-ease);
```

---

## Do's and Don'ts

| ✅ Do                                          | ❌ Don't                                                |
| ---------------------------------------------- | ------------------------------------------------------- |
| Use `BlockStack` / `InlineStack` for spacing   | Add `margin` / `padding` to Polaris components directly |
| Use `gap` prop on stack components             | Use `margin-bottom` hacks between children              |
| Use `tone` prop on `Text` for color variations | Hardcode colors on text elements                        |
| Test with keyboard navigation                  | Assume mouse-only usage                                 |
| Use `Skeleton` components during loading       | Show blank white space while fetching                   |
| Follow Polaris content guidelines for copy     | Write button labels like "Click here"                   |

---

## Resources

- [Polaris Component Library](https://polaris.shopify.com/components)
- [Polaris Design Tokens](https://polaris.shopify.com/tokens)
- [Polaris Icons](https://polaris.shopify.com/icons)
- [Polaris Content Guidelines](https://polaris.shopify.com/content/product-content)
- [Polaris GitHub](https://github.com/Shopify/polaris)