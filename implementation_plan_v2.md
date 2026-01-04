# Implementation Plan (V2) - Sourcing Approval Dashboard

## Goal
Implement the **revised** Sourcing Approval Dashboard using **SAP UI5**.
This implementation will replace the existing experimentation with a professional, enterprise-grade codebase.

## Design Changes (Critical)
1.  **Analytics**: Switch from `sap.suite.ui.microchart` (missing/failed) to **`sap.viz.ui5.controls.VizFrame`**. This is available in the standard `sap.viz` library and provides robust interactive charts.
2.  **Visuals**: Use `sap.m.Table` with specific `Column` types (Popin) and `ObjectIdentifier` for a cleaner look.
3.  **Correctness**: Ensure all header icons and interactions are exactly as specified (Icon vs Button).

## Proposed Changes

### 1. Configuration (`manifest.json`)
*   **Dependency**: Add `sap.viz` to `sap.ui5/dependencies/libs`.
*   **Model**: Enhance `mockdata.json` to support VizFrame format (flat structure preferred for `FlattenedDataset`).

### 2. View Layer (`Dashboard.view.xml`)
*   **Layout**: `sap.uxap.ObjectPageLayout` (Preserved as it works well).
*   **Header**:
    *   Use `OverflowToolbarButton` for Search, Notification, Profile.
*   **Section 2 (Analysis)**:
    *   **NEW**: Implement `sap.viz.ui5.controls.VizFrame`.
    *   **Type**: Bar Chart (`bar`).
    *   **Dataset**: `FlattenedDataset` mapping `Value` and `Supplier`.
    *   **Properties**: Hide legend if cluttered, enable tooltips (`Popover`).
*   **Section 3 (Table)**:
    *   Refine Columns. ensure "Awarding Items" has a distinct `Link` or `ObjectStatus` with active state.

### 3. Controller Layer (`Dashboard.controller.js`)
*   **VizFrame Init**: Configure properties (title, plotArea colors) in `onInit`.
*   **Popover**: Re-verify the `Fragment` loading logic (it was functional, will keep but style better).
*   **Formatter**: Add a formatter if needed for complex currency display.

### 4. Data (`mockdata.json`)
*   **No change needed** to structure, but will ensure values are robust enough for the chart to look good.

## Verification Plan
1.  **Chart Visibility**: Verify VizFrame loads and renders the Bar Chart (no 404s).
2.  **Tooltip**: Verify hovering the chart bars shows details.
3.  **Popover**: Verify clicking the Table link opens the Awarding Popover.
4.  **Responsiveness**: Check basic resizing behavior (VizFrame usually handles this well).
