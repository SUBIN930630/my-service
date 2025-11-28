(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/admin/components/KPICard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KPICard",
    ()=>KPICard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Trend = ({ value, change, target, isPercentage = false, isNegativeGood = false })=>{
    const isPositive = typeof change === 'number' && change >= 0;
    const trendColor = isNegativeGood ? isPositive ? 'text-red-500' : 'text-green-600' : isPositive ? 'text-green-600' : 'text-red-500';
    const trendIcon = isPositive ? '↑' : '↓';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-right",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-3xl font-bold text-blue-600 mb-2",
                children: [
                    value,
                    isPercentage ? '%' : ''
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/components/KPICard.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            change !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `text-sm font-semibold ${trendColor} mb-1`,
                children: [
                    trendIcon,
                    " ",
                    Math.abs(change),
                    isPercentage ? '%' : ''
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/components/KPICard.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            target !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-gray-600",
                children: [
                    "목표: ",
                    target,
                    isPercentage ? '%' : ''
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/components/KPICard.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/components/KPICard.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Trend;
const KPICard = ({ icon, title, value, subtitle, change, target, secondaryInfo, isPercentage = false, isNegativeGood = false, status = 'normal' })=>{
    let bgColor = 'bg-white';
    if (status === 'success') bgColor = 'bg-green-50';
    else if (status === 'warning') bgColor = 'bg-yellow-50';
    else if (status === 'danger') bgColor = 'bg-red-50';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${bgColor} rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-3xl mb-2",
                            children: icon
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/KPICard.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-semibold text-gray-700",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/KPICard.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/components/KPICard.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/admin/components/KPICard.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Trend, {
                value: value,
                change: change,
                target: target,
                isPercentage: isPercentage,
                isNegativeGood: isNegativeGood
            }, void 0, false, {
                fileName: "[project]/app/admin/components/KPICard.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-gray-600 mt-3",
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/app/admin/components/KPICard.tsx",
                lineNumber: 91,
                columnNumber: 20
            }, ("TURBOPACK compile-time value", void 0)),
            secondaryInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-gray-700 font-medium mt-2",
                children: secondaryInfo
            }, void 0, false, {
                fileName: "[project]/app/admin/components/KPICard.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/components/KPICard.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = KPICard;
var _c, _c1;
__turbopack_context__.k.register(_c, "Trend");
__turbopack_context__.k.register(_c1, "KPICard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/admin/components/LineChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApplicationTrendChart",
    ()=>ApplicationTrendChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
;
;
const ApplicationTrendChart = ({ data, title = '일일 신청/승인 트렌드' })=>{
    const CustomTooltip = ({ active, payload })=>{
        if (active && payload && payload.length) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-3 border border-gray-300 rounded shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold text-gray-700",
                        children: payload[0].payload.date
                    }, void 0, false, {
                        fileName: "[project]/app/admin/components/LineChart.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-blue-600",
                        children: [
                            "신청: ",
                            payload[0].payload.applications,
                            "건"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/components/LineChart.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-green-600",
                        children: [
                            "승인: ",
                            payload[0].payload.approvals,
                            "건"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/components/LineChart.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/components/LineChart.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        return null;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg border border-gray-200 p-6 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold text-gray-900 mb-4",
                children: title
            }, void 0, false, {
                fileName: "[project]/app/admin/components/LineChart.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: 300,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                    data: data,
                    margin: {
                        top: 5,
                        right: 30,
                        left: 0,
                        bottom: 5
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                            strokeDasharray: "3 3",
                            stroke: "#E5E7EB"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/LineChart.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                            dataKey: "date",
                            stroke: "#6B7280"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/LineChart.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                            stroke: "#6B7280"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/LineChart.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {}, void 0, false, {
                                fileName: "[project]/app/admin/components/LineChart.tsx",
                                lineNumber: 47,
                                columnNumber: 29
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/LineChart.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                            wrapperStyle: {
                                paddingTop: '20px'
                            },
                            iconType: "line",
                            formatter: (value)=>{
                                if (value === 'applications') return '신청';
                                if (value === 'approvals') return '승인';
                                return value;
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/LineChart.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                            type: "monotone",
                            dataKey: "applications",
                            stroke: "#3B82F6",
                            strokeWidth: 2,
                            dot: {
                                fill: '#3B82F6',
                                r: 4
                            },
                            activeDot: {
                                r: 6
                            },
                            name: "신청"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/LineChart.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                            type: "monotone",
                            dataKey: "approvals",
                            stroke: "#10B981",
                            strokeWidth: 2,
                            dot: {
                                fill: '#10B981',
                                r: 4
                            },
                            activeDot: {
                                r: 6
                            },
                            name: "승인"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/LineChart.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/components/LineChart.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/admin/components/LineChart.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/components/LineChart.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ApplicationTrendChart;
var _c;
__turbopack_context__.k.register(_c, "ApplicationTrendChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/admin/components/BarChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MonthlyRevenueChart",
    ()=>MonthlyRevenueChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/ReferenceLine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
;
;
const MonthlyRevenueChart = ({ data, target, title = '월별 매출 추이' })=>{
    const CustomTooltip = ({ active, payload })=>{
        if (active && payload && payload.length) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-3 border border-gray-300 rounded shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold text-gray-700",
                        children: payload[0].payload.month
                    }, void 0, false, {
                        fileName: "[project]/app/admin/components/BarChart.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-blue-600",
                        children: [
                            "매출: ",
                            payload[0].payload.revenue.toLocaleString(),
                            "만원"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/components/BarChart.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/components/BarChart.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        return null;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg border border-gray-200 p-6 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold text-gray-900 mb-4",
                children: title
            }, void 0, false, {
                fileName: "[project]/app/admin/components/BarChart.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: 300,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                    data: data,
                    margin: {
                        top: 20,
                        right: 30,
                        left: 0,
                        bottom: 5
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                            strokeDasharray: "3 3",
                            stroke: "#E5E7EB"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/BarChart.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                            dataKey: "month",
                            stroke: "#6B7280"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/BarChart.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                            stroke: "#6B7280"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/BarChart.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {}, void 0, false, {
                                fileName: "[project]/app/admin/components/BarChart.tsx",
                                lineNumber: 48,
                                columnNumber: 29
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/BarChart.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                            wrapperStyle: {
                                paddingTop: '20px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/BarChart.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceLine"], {
                            y: target,
                            stroke: "#EF4444",
                            strokeDasharray: "5 5",
                            label: {
                                value: `목표: ${target.toLocaleString()}만원`,
                                position: 'top',
                                fill: '#EF4444',
                                fontSize: 12
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/BarChart.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                            dataKey: "revenue",
                            name: "매출",
                            radius: [
                                8,
                                8,
                                0,
                                0
                            ],
                            children: data.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                    fill: entry.revenue >= target ? '#3B82F6' : '#93C5FD'
                                }, `cell-${index}`, false, {
                                    fileName: "[project]/app/admin/components/BarChart.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/BarChart.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/components/BarChart.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/admin/components/BarChart.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/components/BarChart.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = MonthlyRevenueChart;
var _c;
__turbopack_context__.k.register(_c, "MonthlyRevenueChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/admin/components/BarChart2.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CACChart",
    ()=>CACChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/ReferenceLine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
;
;
const CACChart = ({ data, average, title = '채널별 고객 획득 비용 (CAC)' })=>{
    const CustomTooltip = ({ active, payload })=>{
        if (active && payload && payload.length) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-3 border border-gray-300 rounded shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold text-gray-700",
                        children: payload[0].payload.channel
                    }, void 0, false, {
                        fileName: "[project]/app/admin/components/BarChart2.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-blue-600",
                        children: [
                            "비용: ",
                            payload[0].payload.cost.toLocaleString(),
                            "원"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/components/BarChart2.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/components/BarChart2.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        return null;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg border border-gray-200 p-6 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold text-gray-900 mb-4",
                children: title
            }, void 0, false, {
                fileName: "[project]/app/admin/components/BarChart2.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: 300,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                    data: data,
                    margin: {
                        top: 20,
                        right: 30,
                        left: 0,
                        bottom: 5
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                            strokeDasharray: "3 3",
                            stroke: "#E5E7EB"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/BarChart2.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                            dataKey: "channel",
                            stroke: "#6B7280"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/BarChart2.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                            stroke: "#6B7280"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/BarChart2.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {}, void 0, false, {
                                fileName: "[project]/app/admin/components/BarChart2.tsx",
                                lineNumber: 47,
                                columnNumber: 29
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/BarChart2.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                            wrapperStyle: {
                                paddingTop: '20px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/BarChart2.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceLine"], {
                            y: average,
                            stroke: "#6B7280",
                            strokeDasharray: "5 5",
                            label: {
                                value: `평균: ${average.toLocaleString()}원`,
                                position: 'top',
                                fill: '#6B7280',
                                fontSize: 12
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/BarChart2.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                            dataKey: "cost",
                            name: "CAC",
                            fill: "#3B82F6",
                            radius: [
                                8,
                                8,
                                0,
                                0
                            ],
                            label: {
                                position: 'top',
                                fill: '#374151',
                                fontSize: 12
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/BarChart2.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/components/BarChart2.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/admin/components/BarChart2.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/components/BarChart2.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CACChart;
var _c;
__turbopack_context__.k.register(_c, "CACChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/admin/data/mockData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Mock 데이터
__turbopack_context__.s([
    "AVERAGE_CAC",
    ()=>AVERAGE_CAC,
    "REVENUE_TARGET",
    ()=>REVENUE_TARGET,
    "cacData",
    ()=>cacData,
    "formatCurrency",
    ()=>formatCurrency,
    "formatNumber",
    ()=>formatNumber,
    "formatPercent",
    ()=>formatPercent,
    "kpiData",
    ()=>kpiData,
    "monthlyRevenueData",
    ()=>monthlyRevenueData,
    "trendChartData",
    ()=>trendChartData
]);
const kpiData = {
    // 1행: 핵심 비즈니스 지표
    dau: {
        today: 1245,
        change: 12,
        weekAvg: 1089,
        icon: '👥'
    },
    aiConversion: {
        today: 34,
        target: 40,
        weekAvg: 31,
        icon: '🎯'
    },
    dailyApplications: {
        today: 156,
        change: 8,
        monthly: 4567,
        icon: '📝'
    },
    nps: {
        current: 52,
        target: 60,
        change: 5,
        icon: '⭐'
    },
    // 2행: 재정 지표
    dailyFeeRevenue: {
        today: 12450000,
        monthly: 374560000,
        ytd: 4125670000,
        icon: '💰'
    },
    loanApprovalRate: {
        today: 76,
        weekAvg: 74,
        monthlyAvg: 72,
        icon: '✅'
    },
    avgLoanAmount: {
        today: 95000000,
        weekAvg: 92000000,
        change: 3000000,
        icon: '💵'
    },
    // 3행: 사용자 경험 지표
    aiConsultationTime: {
        average: '8분 23초',
        target: '15분 이상',
        change: '+1분 12초',
        icon: '⏱️'
    },
    bounceRate: {
        total: 20,
        initial: 25,
        loading: 8,
        icon: '📊'
    },
    delinquencyRate: {
        overdue30: 2.1,
        overdue60: 0.8,
        target: 1.5,
        icon: '⚠️'
    }
};
const trendChartData = [
    {
        date: '11/20',
        applications: 145,
        approvals: 110
    },
    {
        date: '11/21',
        applications: 152,
        approvals: 118
    },
    {
        date: '11/22',
        applications: 148,
        approvals: 115
    },
    {
        date: '11/23',
        applications: 165,
        approvals: 128
    },
    {
        date: '11/24',
        applications: 158,
        approvals: 122
    },
    {
        date: '11/25',
        applications: 170,
        approvals: 135
    },
    {
        date: '11/26',
        applications: 162,
        approvals: 126
    },
    {
        date: '11/27',
        applications: 156,
        approvals: 120
    }
];
const monthlyRevenueData = [
    {
        month: '1월',
        revenue: 38500
    },
    {
        month: '2월',
        revenue: 42300
    },
    {
        month: '3월',
        revenue: 45600
    },
    {
        month: '4월',
        revenue: 41200
    },
    {
        month: '5월',
        revenue: 48900
    },
    {
        month: '6월',
        revenue: 52100
    },
    {
        month: '7월',
        revenue: 49800
    },
    {
        month: '8월',
        revenue: 51600
    },
    {
        month: '9월',
        revenue: 47300
    },
    {
        month: '10월',
        revenue: 53200
    },
    {
        month: '11월',
        revenue: 37456
    } // 현재 달
];
const REVENUE_TARGET = 50000; // 목표: 50,000만원
const cacData = [
    {
        channel: '광고',
        cost: 20000
    },
    {
        channel: '추천',
        cost: 5000
    },
    {
        channel: '검색',
        cost: 12000
    }
];
const AVERAGE_CAC = 15000; // 평균: 15,000원
const formatNumber = (num)=>{
    return num.toLocaleString('ko-KR');
};
const formatCurrency = (num)=>{
    if (num >= 10000000) {
        return `${(num / 10000000).toFixed(1)}만원`;
    }
    return formatNumber(num) + '원';
};
const formatPercent = (num)=>{
    return `${num}%`;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/admin/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$components$2f$KPICard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/components/KPICard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$components$2f$LineChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/components/LineChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$components$2f$BarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/components/BarChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$components$2f$BarChart2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/components/BarChart2.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/data/mockData.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function AdminDashboard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-gray-900 mb-2",
                        children: "대시보드"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: new Date().toLocaleDateString('ko-KR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            weekday: 'long'
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold text-gray-900 mb-4",
                        children: "핵심 비즈니스 지표"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$components$2f$KPICard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KPICard"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].dau.icon,
                                title: "일일 활성 사용자 (DAU)",
                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].dau.today),
                                change: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].dau.change,
                                isPercentage: true,
                                secondaryInfo: `주간 평균: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].dau.weekAvg)}명`
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$components$2f$KPICard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KPICard"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].aiConversion.icon,
                                title: "AI 상담 전환율",
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].aiConversion.today,
                                target: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].aiConversion.target,
                                isPercentage: true,
                                secondaryInfo: `주간 평균: ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].aiConversion.weekAvg}%`,
                                status: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].aiConversion.today >= __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].aiConversion.target ? 'success' : 'warning'
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$components$2f$KPICard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KPICard"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].dailyApplications.icon,
                                title: "일일 신청 건수",
                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].dailyApplications.today),
                                change: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].dailyApplications.change,
                                isPercentage: true,
                                secondaryInfo: `월간: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].dailyApplications.monthly)}건`
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$components$2f$KPICard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KPICard"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].nps.icon,
                                title: "고객 만족도 (NPS)",
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].nps.current,
                                target: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].nps.target,
                                change: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].nps.change,
                                secondaryInfo: `목표: ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].nps.target}점`,
                                status: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].nps.current >= __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].nps.target ? 'success' : 'warning'
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold text-gray-900 mb-4",
                        children: "재정 지표"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$components$2f$KPICard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KPICard"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].dailyFeeRevenue.icon,
                                title: "일일 수수료 매출",
                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].dailyFeeRevenue.today),
                                secondaryInfo: `월간: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].dailyFeeRevenue.monthly)}`
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$components$2f$KPICard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KPICard"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].loanApprovalRate.icon,
                                title: "대출 승인율",
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].loanApprovalRate.today,
                                isPercentage: true,
                                secondaryInfo: `주간: ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].loanApprovalRate.weekAvg}% | 월간: ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].loanApprovalRate.monthlyAvg}%`,
                                status: "success"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$components$2f$KPICard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KPICard"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].avgLoanAmount.icon,
                                title: "평균 대출액",
                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].avgLoanAmount.today),
                                change: Math.round(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].avgLoanAmount.change / __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].avgLoanAmount.today * 100),
                                isPercentage: true,
                                secondaryInfo: `주간 평균: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].avgLoanAmount.weekAvg)}`
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold text-gray-900 mb-4",
                        children: "사용자 경험 지표"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$components$2f$KPICard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KPICard"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].aiConsultationTime.icon,
                                title: "AI 상담 평균 시간",
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].aiConsultationTime.average,
                                secondaryInfo: `목표: ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].aiConsultationTime.target}`
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$components$2f$KPICard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KPICard"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].bounceRate.icon,
                                title: "페이지 이탈률",
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].bounceRate.total,
                                isPercentage: true,
                                isNegativeGood: true,
                                secondaryInfo: `초기: ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].bounceRate.initial}% | 로딩: ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].bounceRate.loading}%`,
                                status: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].bounceRate.total <= 20 ? 'success' : 'warning'
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$components$2f$KPICard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KPICard"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].delinquencyRate.icon,
                                title: "연체율",
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].delinquencyRate.overdue30,
                                isPercentage: true,
                                isNegativeGood: true,
                                secondaryInfo: `60일 이상: ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].delinquencyRate.overdue60}%`,
                                status: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].delinquencyRate.overdue30 <= __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].delinquencyRate.target ? 'success' : 'danger'
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold text-gray-900",
                        children: "차트 분석"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$components$2f$LineChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApplicationTrendChart"], {
                                data: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trendChartData"]
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$components$2f$BarChart2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CACChart"], {
                                data: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cacData"],
                                average: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AVERAGE_CAC"]
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$components$2f$BarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MonthlyRevenueChart"], {
                        data: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["monthlyRevenueData"],
                        target: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REVENUE_TARGET"]
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg p-4 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 mb-2",
                                children: "최종 업데이트"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg font-semibold text-gray-900",
                                children: new Date().toLocaleTimeString('ko-KR')
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg p-4 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 mb-2",
                                children: "월간 수익"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg font-semibold text-blue-600",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].dailyFeeRevenue.monthly)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg p-4 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 mb-2",
                                children: "활성 고객"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg font-semibold text-green-600",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kpiData"].dau.today),
                                    "명"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/page.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = AdminDashboard;
var _c;
__turbopack_context__.k.register(_c, "AdminDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_admin_470b4aad._.js.map