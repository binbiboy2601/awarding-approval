# Walkthrough - Sourcing Approval Dashboard (V2)

## Overview
This is the **Revised (V2)** Sourcing Approval Dashboard. It features enterprise-grade charting using `sap.viz` and a refined high-density table layout.

## How to Run
Ensure your local server is running:
```bash
cd webapp
python -m http.server 8080
```
Open: [http://localhost:8080/index.html](http://localhost:8080/index.html)

## Features to Verify (V2)

### 1. Header & Context
- **Check**: Header now displays proper icons: **Search** (magnifying glass), **Notifications** (Bell with badge '3'), **User Profile** (Avatar).
- **Check**: Breadcrumbs `Apps > Approval Worklist`.

### 2. Analytics (VizFrame)
- **Action**: Scroll to "RFQ Overview" > "Supplier Competitiveness Analysis".
- **Result**: You should see a **Horizontal Bar Chart**.
- **Interaction**:
    - **Hover** over a bar (e.g., TechSource Solutions).
    - **Result**: A standard tooltip popover should appear showing "Supplier" and "Total Value".
    - **Note**: The chart enables easy visual comparison of the bid spread.

### 3. Financial Summary
- **Check**: The financial form properly displays "Target Budget" vs "Total Quotation" vs "Savings".

### 4. Awarding Decision Table
- **Layout**: The table uses `Popin` mode. If you resize the browser window to be smaller (Tablet/Phone size), columns like "Date", "Fully Quoted", "Best Price" should move inside the row area or disappear, keeping the table readable.
- **Action**: Click the link in the **"Awarding Items"** column (e.g., "45/45").
- **Result**: The **Awarding Details Popover** appears.
    - Check the footer: "View-only: Proposed awarding decision".
    - Check items: List of awarded materials (Green/Check).

### 5. Read-Only Enforcement
- **Action**: Verify checkboxes in the first column are disabled (grayed out).
