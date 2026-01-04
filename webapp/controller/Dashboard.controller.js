sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "sap/viz/ui5/format/ChartFormatter",
    "sap/viz/ui5/api/env/Format"
], function (Controller, JSONModel, Fragment, ChartFormatter, Format) {
    "use strict";

    return Controller.extend("sourcing.dashboard.controller.Dashboard", {
        onInit: function () {
            // Configure VizFrame if needed (optional since XML handles most)
            var oVizFrame = this.byId("idVizFrame");
            if (oVizFrame) {
                oVizFrame.setVizProperties({
                    title: {
                        visible: false
                    },
                    plotArea: {
                        dataLabel: {
                            visible: true
                        }
                    },
                    legend: {
                        visible: true
                    },
                    interaction: {
                        selectability: {
                            mode: "EXCLUSIVE"
                        }
                    }
                });

                // Format tooltip manually if needed, or let standard VizFrame handle it.
                var oPop = this.byId("idPopOver");
            }
        },

        onPressAwardingItems: function (oEvent) {
            var oButton = oEvent.getSource();
            var oView = this.getView();
            var oContext = oButton.getBindingContext("rfq");

            if (!this._pPopover) {
                this._pPopover = Fragment.load({
                    id: oView.getId(),
                    name: "sourcing.dashboard.view.AwardingPopover",
                    controller: this
                }).then(function (oPopover) {
                    oView.addDependent(oPopover);
                    return oPopover;
                });
            }

            this._pPopover.then(function (oPopover) {
                oPopover.bindElement({
                    path: oContext.getPath(),
                    model: "rfq"
                });
                oPopover.openBy(oButton);
            });
        },

        onClosePopover: function () {
            if (this._pPopover) {
                this._pPopover.then(function (oPopover) {
                    oPopover.close();
                });
            }
        },

        press: function (oEvent) {
            // Generic handler for tiles if needed
        }
    });
});
