# Sourcing Approval Dashboard - Design Description

## 1. Purpose and Scope
The **Sourcing Approval Dashboard** is a decision-support tool designed for approvers to review the context, supplier competitiveness, and awarding comparisons for a single Request for Quotation (RFQ).
*   **Goal**: To provide a transparent, comprehensive view of the sourcing event to facilitate informed decisions.
*   **Nature**: Read-only, informational interface. No execution or modification of data occurs within this view.

## 2. Page Structure and Navigation
*   **Layout**: A single, vertical scrolling page containing all relevant details for one specific RFQ.
*   **Navigation Sidebar/Anchor Bar**: A sticky navigation mechanism (e.g., anchor tabs) allowing users to jump directly to specific sections:
    *   General Information
    *   RFQ Overview
    *   Awarding Decision
*   **Behavior**:
    *   Clicking a tab scrolls the page to the corresponding section.
    *   **Anchor-based**: All sections remain visible on the page at all times (single long page).
    *   No URL change or page reload.

## 3. Header and Global Context
### Global Header
*   **Back Navigation**: Returns the user to the previous screen (e.g., Approval Worklist).
*   **Breadcrumb Trace**: Explicit path: `Apps > Approval Worklist`.
*   **Global Indicators**:
    *   Search availability.
    *   Notifications status.
    *   User Profile identification.

### Page Title Area
*   **Main Title**: "Sourcing Approval Dashboard".
*   **Contextual Data**:
    *   RFQ Request Number (Unique identifier).
    *   Project Name.
    *   **Status Badge**: Visual indicator of the overall RFQ status (e.g., "Pending Approval").

## 4. Section: General Information
A summary panel displaying high-level metadata about the sourcing project to establish context.
*   **Content**:
    *   **Project ID & Name**: Clear identification of the sourcing project.
    *   **Request Type**: visual badge indicating the category of request.
    *   **Creator Info**: Name and Role of the user who created the RFQ.
    *   **Timeline**: Creation date.
    *   **Scope**: Total number of items included in the RFQ.
    *   **Currency**: Base currency used for the project.
*   **Interactivity**: None (Static display).

## 5. Section: RFQ Overview
This section focuses on metrics and financial analysis to judge the effectiveness of the sourcing event.

### Key Metrics Panel
A high-level set of counters:
*   **Invited**: Number of suppliers invited.
*   **Responded**: Number of suppliers who submitted quotes.
*   **Selected**: Number of suppliers proposed for the award.
*   **Savings**: Aggregate cost savings achieved.

### Financial Summary
A breakdown of the financial impact:
*   **Budget vs. Actuals**:
    *   Target Budget.
    *   Total Quotation Value (Sum of all quotes or awarded value context).
    *   Total Awarded Value.
*   **Savings Analysis**:
    *   Savings Amount (Absolute value).
    *   Savings Percentage (Relative performance).
*   **Scope Coverage**:
    *   Count of awarded items.

### Supplier Competitiveness Analysis
A visual representation comparing supplier pricing.
*   **Visualization**: A comparative chart or graph plotting supplier bids.
*   **Segmentation**: Data points broken down by material types or categories.
*   **Interactions**:
    *   **Hover**: Revealing detailed tooltips with:
        *   Supplier Name.
        *   Itemized Material Costs.
        *   Total Quotation Value.
*   **Analysis Text**: A dynamic text block summarizing pricing insights (e.g., spread between highest and lowest bids).
*   **Recommendation**: A text block suggesting the optimal sourcing strategy based on the data.

## 6. Section: Awarding Decision
The core detailed view permitting line-item scrutiny of the proposed decision.

### Supplier Quotations Table
A comprehensive grid listing all participating suppliers.
*   **Columns**:
    *   **Select**: Non-functional checkbox (visual cue for selection state).
    *   **Quotation ID**: specific ID for the bid (non-functional link).
    *   **Supplier**: Name of the vendor.
    *   **Value**: Total Net Value of the quotation.
    *   **Date**: Submission date.
    *   **Coverage**:
        *   *Fully Quoted*: Ratio (X/Y) indicating how many items the supplier skipped vs. quoted.
    *   **Competitiveness**:
        *   *Best Price*: Ratio (X/Y) showing on how many items this supplier offered the lowest price.
    *   **Outcome**:
        *   *Awarding Items*: Ratio (X/Y) showing how many items are awarded to this supplier.

### Item-Level Awarding Interaction
*   **Indicator**: The "Awarding Items" column features an interactive element (e.g., link or badge).
*   **Popover Interaction**:
    *   Opens on **hover or click**.
    *   **Persistence**: Remains visible until explicitly dismissed (e.g., clicking outside or clicking a close button).
    *   **Content**:
        *   List of specific items awarded to this supplier.
        *   Status per item (Awarded / Not Awarded).
        *   Visual toggles (read-only) representing the decision state.
    *   **Footer**: Explicit note stating "View-only: Proposed awarding decision" to reinforce the approval context.

## 7. Data States and Logic
*   **Supplier Scenarios**:
    *   Suppliers may have partial quotes (not all items priced).
    *   Suppliers may have zero awarded items but are still listed for comparison.
    *   Rejected suppliers or those with high bids remain visible for transparency.
*   **Read-Only Enforcement**:
    *   All inputs (checkboxes, toggles) are visually present but disabled or strictly informational.
    *   No "Save", "Edit", or "Submit" actions are available within the dashboard sections.

## 8. Interaction Rules
*   **Strictly Informational**: All interactive-looking elements (checkboxes, links, toggles) are non-functional. They provide visual cues only; no approval or execution actions exist.
*   **Navigation**:
    *   Primary entry is from the Approval Worklist.
    *   Exit via the "Back" button or Breadcrumb links.
    *   Internal navigation is handled via the scrolling Tab bar.
*   **Feedback**:
    *   Hover effects on charts and table rows to guide the eye.
    *   Popovers for detailed drill-downs without losing context of the main page.
