# Sourcing Approval Dashboard - Design Description (V2)

## 1. Executive Summary
This document outlines the design for the **Sourcing Approval Dashboard**, a read-only, single-page decision support tool.
*   **Core Objective**: Present a high-density, transparent view of a sourcing event decision to an approver.
*   **Key Distinction**: "Decision Understanding" over "Execution". The user consumes data to validate a proposed award, they do not construct the award here.

## 2. Global Structure & Navigation
*   **Page Layout**: A cohesive vertical scrolling page (using `ObjectPageLayout` metaphor).
*   **Anchor Navigation**: A sticky bar separates the Header from the Content. Clicking tabs (General, Overview, Awarding) smooth-scrolls to the section. All content is pre-loaded; no routing changes.
*   **Header Context**:
    *   **Breadcrumb**: `Apps > Approval Worklist`.
    *   **Title**: "Sourcing Approval Dashboard".
    *   **Subtitle**: RFQ Request Number / Project Name.
    *   **Status**: A prominent semantic badge (e.g., "Pending Approval" in Orange/Warning state).
    *   **Global Actions**: Search, Notifications, User Profile (represented by standard enterprise header icons).

## 3. Section 1: General Information
A concise metadata panel establishing the "Who, What, When".
*   **Layout**: Form-based grid.
*   **Data Points**:
    *   **Project Context**: Project ID, Project Name.
    *   **Request Details**: Role of Creator, Creation Date, Request Type (Badge).
    *   **Scope**: Total Items count, Currency.

## 4. Section 2: RFQ Overview (Decision Intelligence)
This section tells the "Story of Value". It must use strong visual hierarchy to separate Volume from Value.

### Subsection A: Key Metrics (Volume)
*   **Visual**: A horizontal set of KPI tiles or cards.
*   **Data**:
    *   *Market Interest*: Invited vs. Responded (e.g., "5 of 8").
    *   *Competition*: Selected Suppliers count.
    *   *Outcome*: Savings Amount (Headline figure).

### Subsection B: Financial Summary (Value)
*   **Visual**: A structured data block or form.
*   **Data**:
    *   Target Budget vs. Total Quotation Value.
    *   Total Awarded Value.
    *   Savings % and Absolute Amount.
    *   Awarded Line Items coverage.

### Subsection C: Supplier Competitiveness Analysis (Insight)
*   **Visual**: A **Bar Chart** (Horizontal) comparing total quotation values across suppliers.
    *   *X-Axis*: Value (Currency).
    *   *Y-Axis*: Supplier Name.
    *   *Color Coding*: Semantic colors to highlight the "Selected" supplier vs. others.
*   **Interaction**: Hovering over a bar reveals a tooltips with:
    *   Supplier Name.
    *   Breakdown of cost (Material Groups).
    *   Total Value.
*   **Narrative**:
    *   *Insight Text*: "Price spread is X%..."
    *   *Recommendation*: "Strategy: Award to...".

## 5. Section 3: Awarding Decision (The Details)
A granular view validating the specific line-item distribution.

### Supplier Quotations Table
*   **Visual**: A high-density grid table.
*   **Columns**:
    *   **Selection**: Visual checkbox (checked = proposed for award).
    *   **Identifier**: Quotation ID (Link style, non-navigable).
    *   **Supplier**: Name.
    *   **Financials**: Net Value.
    *   **Date**: Quote Date.
    *   **Coverage Ratios**:
        *   Fully Quoted (e.g., "45/45").
        *   Best Price (e.g., "38/45" - denoting how often they were the cheapest).
    *   **Decision Indicator**: "Awarding Items" (e.g., "45/45").

### The "Awarding Details" Popover
*   **Trigger**: Clicking the "Awarding Items" ratio (e.g., "45/45") or an adjacent info icon.
*   **Behavior**: Opens a Popover nearby (interaction remains on page).
*   **Content**:
    *   List of Material Items awarded to this supplier.
    *   Visual status (Icon/Text: "Awarded").
    *   Read-only toggle switch indicating "On".
*   **Footer**: "View-only: Proposed awarding decision".

## 6. Interaction & State Principles
*   **Read-Only**: All controls (checkboxes, toggles) appear in their final state but do not accept input.
*   **Feedback**: Hover states on table rows and chart bars to maintain "App-like" feel.
*   **Visual Polish**: Use semantic colors (Green for Good/Savings, Neutral for Information) to guide decision making.
