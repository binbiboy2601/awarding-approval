# Implementation Plan - Sourcing Approval Dashboard (SAP UI5)

## Goal
Implement a standalone, frontend-only SAP UI5 application that visualizes the "Sourcing Approval Dashboard" based on the approved design document. The app will use local JSON mock data and follow the MVC pattern.

## User Review Required
> [!IMPORTANT]
> **Clarification Implementation**:
> - **Navigation**: Implemented as a single scrollable page with an "Anchor Bar" (ObjectPageLayout logic) to ensure all sections remain visible.
> - **Popover**: Will use `sap.m.ResponsivePopover` or `sap.m.Popover` triggered by press/hover, set to stay open until dismissed.
> - **Read-Only**: All checkboxes and toggles will be set to `editable="false"` or `enabled="false"`.

## Proposed Changes

### Structure
The project will be a standard SAP UI5 folder structure manually created (or basic scaffold).
`webapp/` root.

### Files

#### [Core Configuration]
#### [NEW] [index.html](file:///d:/awarding-approval-2/webapp/index.html)
- Bootstraps SAP UI5 (CDN or local resources if available, but assuming CDN `https://sdk.openui5.org/`).
- Loads the Component.

#### [NEW] [manifest.json](file:///d:/awarding-approval-2/webapp/manifest.json)
- Configures routing (single route).
- Configures models (i18n, mock data).
- Defines the root view.

#### [NEW] [Component.js](file:///d:/awarding-approval-2/webapp/Component.js)
- Standard UIComponent extension.

### [Data Layer]
#### [NEW] [mockdata.json](file:///d:/awarding-approval-2/webapp/model/mockdata.json)
- Contains the RFQ header info, metrics, supplier list, quotations, and item-level awarding decisions.
- Structure:
    - `header`: { rfqId, project, status, ... }
    - `metrics`: { invited, responded, ... }
    - `competitiveness`: [ { supplierName, value, materialType ... } ]
    - `quotations`: [ { supplierId, name, value, bestPriceCount, fullQuoteCount, awardedCount, items: [...] } ]

### [View Layer]
#### [NEW] [App.view.xml](file:///d:/awarding-approval-2/webapp/view/App.view.xml)
- Root container (App control).

#### [NEW] [Dashboard.view.xml](file:///d:/awarding-approval-2/webapp/view/Dashboard.view.xml)
- **Control**: `sap.uxap.ObjectPageLayout` is the perfect fit for "Anchor-based scrolling" where all sections are visible.
- **Sections**:
    1.  **General Information**: `ObjectPageSection` > `ObjectPageSubSection` > `SimpleForm`.
    2.  **RFQ Overview**: `ObjectPageSection` > `ObjectPageSubSection`.
        - Metrics: `GenericTile` or `HBox` with `ObjectStatus`.
        - Financials: `ObjectStatus` layout.
        - Chart: MicroChart or simple HTML embedding (if VizFrame is too complex for basic setup, but VizFrame is preferred for "Enterprise"). Will use `sap.suite.ui.microchart` or standard `PlanningCalendar` metaphor if chart library is heavy, but standard `viz` is best.
    3.  **Awarding Decision**: `ObjectPageSection`.
        - Table (`sap.m.Table`).
        - Popover logic defined in fragment or dependent view.

### [Controller Layer]
#### [NEW] [Dashboard.controller.js](file:///d:/awarding-approval-2/webapp/controller/Dashboard.controller.js)
- Handles `onInit` to load JSON model.
- Handles `onPressAwardingItems` to open the Popover.
- No navigation logic needed for scrolling as `ObjectPageLayout` handles it.

## Verification Plan

### Automated Tests
- None (Prototype phase).

### Manual Verification
1.  **Run Locally**: Serve `webapp/index.html`.
2.  **Check Layout**: Confirm `ObjectPageLayout` allows scrolling and clicking tabs jumps to sections.
3.  **Check Data**: Verify mock data appears in Header, Overview, and Table.
4.  **Check Interaction**:
    - Click "Awarding Items" link/icon -> Popover opens.
    - Checkboxes are read-only.
    - Dismiss popover.
