/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ChronicleNativeDashboardConfig extends cdktn.TerraformMetaArguments {
  /**
  * The access level of the dashboard.
  * Possible values:
  * DASHBOARD_PRIVATE
  * DASHBOARD_PUBLIC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#access ChronicleNativeDashboard#access}
  */
  readonly access?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#deletion_policy ChronicleNativeDashboard#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * A description of the dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#description ChronicleNativeDashboard#description}
  */
  readonly description?: string;
  /**
  * The display name/title of the dashboard visible to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#display_name ChronicleNativeDashboard#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#id ChronicleNativeDashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the Chronicle instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#instance ChronicleNativeDashboard#instance}
  */
  readonly instance: string;
  /**
  * Whether the dashboard is pinned by the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#is_pinned ChronicleNativeDashboard#is_pinned}
  */
  readonly isPinned?: boolean | cdktn.IResolvable;
  /**
  * The location of the Chronicle instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#location ChronicleNativeDashboard#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#project ChronicleNativeDashboard#project}
  */
  readonly project?: string;
  /**
  * The type of dashboard.
  * Possible values:
  * CURATED, PRIVATE, PUBLIC, CUSTOM, MARKETPLACE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#type ChronicleNativeDashboard#type}
  */
  readonly type?: string;
  /**
  * charts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#charts ChronicleNativeDashboard#charts}
  */
  readonly charts?: ChronicleNativeDashboardCharts[] | cdktn.IResolvable;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#filters ChronicleNativeDashboard#filters}
  */
  readonly filters?: ChronicleNativeDashboardFilters[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#timeouts ChronicleNativeDashboard#timeouts}
  */
  readonly timeouts?: ChronicleNativeDashboardTimeouts;
}
export interface ChronicleNativeDashboardChartsChartLayout {
  /**
  * The number of columns the chart spans.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#span_x ChronicleNativeDashboard#span_x}
  */
  readonly spanX: number;
  /**
  * The number of rows the chart spans.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#span_y ChronicleNativeDashboard#span_y}
  */
  readonly spanY: number;
  /**
  * The starting X coordinate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#start_x ChronicleNativeDashboard#start_x}
  */
  readonly startX?: number;
  /**
  * The starting Y coordinate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#start_y ChronicleNativeDashboard#start_y}
  */
  readonly startY?: number;
}

export function chronicleNativeDashboardChartsChartLayoutToTerraform(struct?: ChronicleNativeDashboardChartsChartLayoutOutputReference | ChronicleNativeDashboardChartsChartLayout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    span_x: cdktn.numberToTerraform(struct!.spanX),
    span_y: cdktn.numberToTerraform(struct!.spanY),
    start_x: cdktn.numberToTerraform(struct!.startX),
    start_y: cdktn.numberToTerraform(struct!.startY),
  }
}


export function chronicleNativeDashboardChartsChartLayoutToHclTerraform(struct?: ChronicleNativeDashboardChartsChartLayoutOutputReference | ChronicleNativeDashboardChartsChartLayout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    span_x: {
      value: cdktn.numberToHclTerraform(struct!.spanX),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    span_y: {
      value: cdktn.numberToHclTerraform(struct!.spanY),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_x: {
      value: cdktn.numberToHclTerraform(struct!.startX),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_y: {
      value: cdktn.numberToHclTerraform(struct!.startY),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleNativeDashboardChartsChartLayoutOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleNativeDashboardChartsChartLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spanX !== undefined) {
      hasAnyValues = true;
      internalValueResult.spanX = this._spanX;
    }
    if (this._spanY !== undefined) {
      hasAnyValues = true;
      internalValueResult.spanY = this._spanY;
    }
    if (this._startX !== undefined) {
      hasAnyValues = true;
      internalValueResult.startX = this._startX;
    }
    if (this._startY !== undefined) {
      hasAnyValues = true;
      internalValueResult.startY = this._startY;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleNativeDashboardChartsChartLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._spanX = undefined;
      this._spanY = undefined;
      this._startX = undefined;
      this._startY = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._spanX = value.spanX;
      this._spanY = value.spanY;
      this._startX = value.startX;
      this._startY = value.startY;
    }
  }

  // span_x - computed: false, optional: false, required: true
  private _spanX?: number; 
  public get spanX() {
    return this.getNumberAttribute('span_x');
  }
  public set spanX(value: number) {
    this._spanX = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spanXInput() {
    return this._spanX;
  }

  // span_y - computed: false, optional: false, required: true
  private _spanY?: number; 
  public get spanY() {
    return this.getNumberAttribute('span_y');
  }
  public set spanY(value: number) {
    this._spanY = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spanYInput() {
    return this._spanY;
  }

  // start_x - computed: false, optional: true, required: false
  private _startX?: number; 
  public get startX() {
    return this.getNumberAttribute('start_x');
  }
  public set startX(value: number) {
    this._startX = value;
  }
  public resetStartX() {
    this._startX = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startXInput() {
    return this._startX;
  }

  // start_y - computed: false, optional: true, required: false
  private _startY?: number; 
  public get startY() {
    return this.getNumberAttribute('start_y');
  }
  public set startY(value: number) {
    this._startY = value;
  }
  public resetStartY() {
    this._startY = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startYInput() {
    return this._startY;
  }
}
export interface ChronicleNativeDashboardCharts {
  /**
  * The resource name of the associated DashboardChart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#dashboard_chart ChronicleNativeDashboard#dashboard_chart}
  */
  readonly dashboardChart?: string;
  /**
  * List of dashboard filter IDs applied to this chart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#filters_ids ChronicleNativeDashboard#filters_ids}
  */
  readonly filtersIds?: string[];
  /**
  * chart_layout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#chart_layout ChronicleNativeDashboard#chart_layout}
  */
  readonly chartLayout?: ChronicleNativeDashboardChartsChartLayout;
}

export function chronicleNativeDashboardChartsToTerraform(struct?: ChronicleNativeDashboardCharts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dashboard_chart: cdktn.stringToTerraform(struct!.dashboardChart),
    filters_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.filtersIds),
    chart_layout: chronicleNativeDashboardChartsChartLayoutToTerraform(struct!.chartLayout),
  }
}


export function chronicleNativeDashboardChartsToHclTerraform(struct?: ChronicleNativeDashboardCharts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dashboard_chart: {
      value: cdktn.stringToHclTerraform(struct!.dashboardChart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filters_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.filtersIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    chart_layout: {
      value: chronicleNativeDashboardChartsChartLayoutToHclTerraform(struct!.chartLayout),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleNativeDashboardChartsChartLayoutList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleNativeDashboardChartsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ChronicleNativeDashboardCharts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dashboardChart !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardChart = this._dashboardChart;
    }
    if (this._filtersIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersIds = this._filtersIds;
    }
    if (this._chartLayout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartLayout = this._chartLayout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleNativeDashboardCharts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dashboardChart = undefined;
      this._filtersIds = undefined;
      this._chartLayout.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dashboardChart = value.dashboardChart;
      this._filtersIds = value.filtersIds;
      this._chartLayout.internalValue = value.chartLayout;
    }
  }

  // dashboard_chart - computed: false, optional: true, required: false
  private _dashboardChart?: string; 
  public get dashboardChart() {
    return this.getStringAttribute('dashboard_chart');
  }
  public set dashboardChart(value: string) {
    this._dashboardChart = value;
  }
  public resetDashboardChart() {
    this._dashboardChart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardChartInput() {
    return this._dashboardChart;
  }

  // filters_ids - computed: false, optional: true, required: false
  private _filtersIds?: string[]; 
  public get filtersIds() {
    return this.getListAttribute('filters_ids');
  }
  public set filtersIds(value: string[]) {
    this._filtersIds = value;
  }
  public resetFiltersIds() {
    this._filtersIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersIdsInput() {
    return this._filtersIds;
  }

  // chart_layout - computed: false, optional: true, required: false
  private _chartLayout = new ChronicleNativeDashboardChartsChartLayoutOutputReference(this, "chart_layout");
  public get chartLayout() {
    return this._chartLayout;
  }
  public putChartLayout(value: ChronicleNativeDashboardChartsChartLayout) {
    this._chartLayout.internalValue = value;
  }
  public resetChartLayout() {
    this._chartLayout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartLayoutInput() {
    return this._chartLayout.internalValue;
  }
}

export class ChronicleNativeDashboardChartsList extends cdktn.ComplexList {
  public internalValue? : ChronicleNativeDashboardCharts[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ChronicleNativeDashboardChartsOutputReference {
    return new ChronicleNativeDashboardChartsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues {
  /**
  * The values for the modifier. All operators should have a single
  * value other than 'IN' and 'BETWEEN'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#field_values ChronicleNativeDashboard#field_values}
  */
  readonly fieldValues?: string[];
  /**
  * The operator to apply to the field. Possible values: ["EQUAL", "NOT_EQUAL", "IN", "GREATER_THAN", "GREATER_THAN_OR_EQUAL_TO", "LESS_THAN", "LESS_THAN_OR_EQUAL_TO", "BETWEEN", "PAST", "IS_NULL", "IS_NOT_NULL", "STARTS_WITH", "ENDS_WITH", "DOES_NOT_STARTS_WITH", "DOES_NOT_ENDS_WITH", "NOT_IN", "CONTAINS", "DOES_NOT_CONTAIN"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#filter_operator ChronicleNativeDashboard#filter_operator}
  */
  readonly filterOperator?: string;
}

export function chronicleNativeDashboardFiltersFilterOperatorAndFieldValuesToTerraform(struct?: ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fieldValues),
    filter_operator: cdktn.stringToTerraform(struct!.filterOperator),
  }
}


export function chronicleNativeDashboardFiltersFilterOperatorAndFieldValuesToHclTerraform(struct?: ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fieldValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter_operator: {
      value: cdktn.stringToHclTerraform(struct!.filterOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldValues = this._fieldValues;
    }
    if (this._filterOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterOperator = this._filterOperator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldValues = undefined;
      this._filterOperator = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldValues = value.fieldValues;
      this._filterOperator = value.filterOperator;
    }
  }

  // field_values - computed: false, optional: true, required: false
  private _fieldValues?: string[]; 
  public get fieldValues() {
    return this.getListAttribute('field_values');
  }
  public set fieldValues(value: string[]) {
    this._fieldValues = value;
  }
  public resetFieldValues() {
    this._fieldValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldValuesInput() {
    return this._fieldValues;
  }

  // filter_operator - computed: false, optional: true, required: false
  private _filterOperator?: string; 
  public get filterOperator() {
    return this.getStringAttribute('filter_operator');
  }
  public set filterOperator(value: string) {
    this._filterOperator = value;
  }
  public resetFilterOperator() {
    this._filterOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterOperatorInput() {
    return this._filterOperator;
  }
}

export class ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList extends cdktn.ComplexList {
  public internalValue? : ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference {
    return new ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleNativeDashboardFilters {
  /**
  * The IDs of charts that this filter applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#chart_ids ChronicleNativeDashboard#chart_ids}
  */
  readonly chartIds?: string[];
  /**
  * The data source for the filter.
  * Possible values:
  * UDM, ENTITY, INGESTION_METRICS, RULE_DETECTIONS, RULESETS, GLOBAL,
  * IOC_MATCHES, RULES, SOAR_CASES, SOAR_PLAYBOOKS, SOAR_CASE_HISTORY,
  * DATA_TABLE, INVESTIGATION, INVESTIGATION_FEEDBACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#data_source ChronicleNativeDashboard#data_source}
  */
  readonly dataSource?: string;
  /**
  * The display name of the filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#display_name ChronicleNativeDashboard#display_name}
  */
  readonly displayName?: string;
  /**
  * The UDM field path being filtered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#field_path ChronicleNativeDashboard#field_path}
  */
  readonly fieldPath?: string;
  /**
  * The unique ID of the filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#id ChronicleNativeDashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether the filter is mandatory for the dashboard consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#is_mandatory ChronicleNativeDashboard#is_mandatory}
  */
  readonly isMandatory?: boolean | cdktn.IResolvable;
  /**
  * Whether the filter is a standard time range filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#is_standard_time_range_filter ChronicleNativeDashboard#is_standard_time_range_filter}
  */
  readonly isStandardTimeRangeFilter?: boolean | cdktn.IResolvable;
  /**
  * Whether the standard time range filter is currently enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#is_standard_time_range_filter_enabled ChronicleNativeDashboard#is_standard_time_range_filter_enabled}
  */
  readonly isStandardTimeRangeFilterEnabled?: boolean | cdktn.IResolvable;
  /**
  * filter_operator_and_field_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#filter_operator_and_field_values ChronicleNativeDashboard#filter_operator_and_field_values}
  */
  readonly filterOperatorAndFieldValues?: ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues[] | cdktn.IResolvable;
}

export function chronicleNativeDashboardFiltersToTerraform(struct?: ChronicleNativeDashboardFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    chart_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.chartIds),
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    field_path: cdktn.stringToTerraform(struct!.fieldPath),
    id: cdktn.stringToTerraform(struct!.id),
    is_mandatory: cdktn.booleanToTerraform(struct!.isMandatory),
    is_standard_time_range_filter: cdktn.booleanToTerraform(struct!.isStandardTimeRangeFilter),
    is_standard_time_range_filter_enabled: cdktn.booleanToTerraform(struct!.isStandardTimeRangeFilterEnabled),
    filter_operator_and_field_values: cdktn.listMapper(chronicleNativeDashboardFiltersFilterOperatorAndFieldValuesToTerraform, true)(struct!.filterOperatorAndFieldValues),
  }
}


export function chronicleNativeDashboardFiltersToHclTerraform(struct?: ChronicleNativeDashboardFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    chart_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.chartIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_source: {
      value: cdktn.stringToHclTerraform(struct!.dataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktn.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_mandatory: {
      value: cdktn.booleanToHclTerraform(struct!.isMandatory),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_standard_time_range_filter: {
      value: cdktn.booleanToHclTerraform(struct!.isStandardTimeRangeFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_standard_time_range_filter_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.isStandardTimeRangeFilterEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter_operator_and_field_values: {
      value: cdktn.listMapperHcl(chronicleNativeDashboardFiltersFilterOperatorAndFieldValuesToHclTerraform, true)(struct!.filterOperatorAndFieldValues),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleNativeDashboardFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ChronicleNativeDashboardFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chartIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartIds = this._chartIds;
    }
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isMandatory !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMandatory = this._isMandatory;
    }
    if (this._isStandardTimeRangeFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.isStandardTimeRangeFilter = this._isStandardTimeRangeFilter;
    }
    if (this._isStandardTimeRangeFilterEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isStandardTimeRangeFilterEnabled = this._isStandardTimeRangeFilterEnabled;
    }
    if (this._filterOperatorAndFieldValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterOperatorAndFieldValues = this._filterOperatorAndFieldValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleNativeDashboardFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chartIds = undefined;
      this._dataSource = undefined;
      this._displayName = undefined;
      this._fieldPath = undefined;
      this._id = undefined;
      this._isMandatory = undefined;
      this._isStandardTimeRangeFilter = undefined;
      this._isStandardTimeRangeFilterEnabled = undefined;
      this._filterOperatorAndFieldValues.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chartIds = value.chartIds;
      this._dataSource = value.dataSource;
      this._displayName = value.displayName;
      this._fieldPath = value.fieldPath;
      this._id = value.id;
      this._isMandatory = value.isMandatory;
      this._isStandardTimeRangeFilter = value.isStandardTimeRangeFilter;
      this._isStandardTimeRangeFilterEnabled = value.isStandardTimeRangeFilterEnabled;
      this._filterOperatorAndFieldValues.internalValue = value.filterOperatorAndFieldValues;
    }
  }

  // chart_ids - computed: false, optional: true, required: false
  private _chartIds?: string[]; 
  public get chartIds() {
    return this.getListAttribute('chart_ids');
  }
  public set chartIds(value: string[]) {
    this._chartIds = value;
  }
  public resetChartIds() {
    this._chartIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartIdsInput() {
    return this._chartIds;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  public resetDataSource() {
    this._dataSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_mandatory - computed: false, optional: true, required: false
  private _isMandatory?: boolean | cdktn.IResolvable; 
  public get isMandatory() {
    return this.getBooleanAttribute('is_mandatory');
  }
  public set isMandatory(value: boolean | cdktn.IResolvable) {
    this._isMandatory = value;
  }
  public resetIsMandatory() {
    this._isMandatory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMandatoryInput() {
    return this._isMandatory;
  }

  // is_standard_time_range_filter - computed: false, optional: true, required: false
  private _isStandardTimeRangeFilter?: boolean | cdktn.IResolvable; 
  public get isStandardTimeRangeFilter() {
    return this.getBooleanAttribute('is_standard_time_range_filter');
  }
  public set isStandardTimeRangeFilter(value: boolean | cdktn.IResolvable) {
    this._isStandardTimeRangeFilter = value;
  }
  public resetIsStandardTimeRangeFilter() {
    this._isStandardTimeRangeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isStandardTimeRangeFilterInput() {
    return this._isStandardTimeRangeFilter;
  }

  // is_standard_time_range_filter_enabled - computed: false, optional: true, required: false
  private _isStandardTimeRangeFilterEnabled?: boolean | cdktn.IResolvable; 
  public get isStandardTimeRangeFilterEnabled() {
    return this.getBooleanAttribute('is_standard_time_range_filter_enabled');
  }
  public set isStandardTimeRangeFilterEnabled(value: boolean | cdktn.IResolvable) {
    this._isStandardTimeRangeFilterEnabled = value;
  }
  public resetIsStandardTimeRangeFilterEnabled() {
    this._isStandardTimeRangeFilterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isStandardTimeRangeFilterEnabledInput() {
    return this._isStandardTimeRangeFilterEnabled;
  }

  // filter_operator_and_field_values - computed: false, optional: true, required: false
  private _filterOperatorAndFieldValues = new ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList(this, "filter_operator_and_field_values", false);
  public get filterOperatorAndFieldValues() {
    return this._filterOperatorAndFieldValues;
  }
  public putFilterOperatorAndFieldValues(value: ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues[] | cdktn.IResolvable) {
    this._filterOperatorAndFieldValues.internalValue = value;
  }
  public resetFilterOperatorAndFieldValues() {
    this._filterOperatorAndFieldValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterOperatorAndFieldValuesInput() {
    return this._filterOperatorAndFieldValues.internalValue;
  }
}

export class ChronicleNativeDashboardFiltersList extends cdktn.ComplexList {
  public internalValue? : ChronicleNativeDashboardFilters[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ChronicleNativeDashboardFiltersOutputReference {
    return new ChronicleNativeDashboardFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleNativeDashboardTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#create ChronicleNativeDashboard#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#delete ChronicleNativeDashboard#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#update ChronicleNativeDashboard#update}
  */
  readonly update?: string;
}

export function chronicleNativeDashboardTimeoutsToTerraform(struct?: ChronicleNativeDashboardTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function chronicleNativeDashboardTimeoutsToHclTerraform(struct?: ChronicleNativeDashboardTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleNativeDashboardTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ChronicleNativeDashboardTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleNativeDashboardTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard google_chronicle_native_dashboard}
*/
export class ChronicleNativeDashboard extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_chronicle_native_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ChronicleNativeDashboard resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChronicleNativeDashboard to import
  * @param importFromId The id of the existing ChronicleNativeDashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChronicleNativeDashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_chronicle_native_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard google_chronicle_native_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChronicleNativeDashboardConfig
  */
  public constructor(scope: Construct, id: string, config: ChronicleNativeDashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'google_chronicle_native_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.40.0',
        providerVersionConstraint: '~> 7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._access = config.access;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._instance = config.instance;
    this._isPinned = config.isPinned;
    this._location = config.location;
    this._project = config.project;
    this._type = config.type;
    this._charts.internalValue = config.charts;
    this._filters.internalValue = config.filters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: false, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // create_user_id - computed: true, optional: false, required: false
  public get createUserId() {
    return this.getStringAttribute('create_user_id');
  }

  // dashboard_id - computed: true, optional: false, required: false
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }

  // deletion_policy - computed: true, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // is_pinned - computed: false, optional: true, required: false
  private _isPinned?: boolean | cdktn.IResolvable; 
  public get isPinned() {
    return this.getBooleanAttribute('is_pinned');
  }
  public set isPinned(value: boolean | cdktn.IResolvable) {
    this._isPinned = value;
  }
  public resetIsPinned() {
    this._isPinned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPinnedInput() {
    return this._isPinned;
  }

  // last_viewed_time - computed: true, optional: false, required: false
  public get lastViewedTime() {
    return this.getStringAttribute('last_viewed_time');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // update_user_id - computed: true, optional: false, required: false
  public get updateUserId() {
    return this.getStringAttribute('update_user_id');
  }

  // charts - computed: false, optional: true, required: false
  private _charts = new ChronicleNativeDashboardChartsList(this, "charts", false);
  public get charts() {
    return this._charts;
  }
  public putCharts(value: ChronicleNativeDashboardCharts[] | cdktn.IResolvable) {
    this._charts.internalValue = value;
  }
  public resetCharts() {
    this._charts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartsInput() {
    return this._charts.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new ChronicleNativeDashboardFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: ChronicleNativeDashboardFilters[] | cdktn.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ChronicleNativeDashboardTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ChronicleNativeDashboardTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access: cdktn.stringToTerraform(this._access),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      instance: cdktn.stringToTerraform(this._instance),
      is_pinned: cdktn.booleanToTerraform(this._isPinned),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      type: cdktn.stringToTerraform(this._type),
      charts: cdktn.listMapper(chronicleNativeDashboardChartsToTerraform, true)(this._charts.internalValue),
      filters: cdktn.listMapper(chronicleNativeDashboardFiltersToTerraform, true)(this._filters.internalValue),
      timeouts: chronicleNativeDashboardTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access: {
        value: cdktn.stringToHclTerraform(this._access),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance: {
        value: cdktn.stringToHclTerraform(this._instance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_pinned: {
        value: cdktn.booleanToHclTerraform(this._isPinned),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      charts: {
        value: cdktn.listMapperHcl(chronicleNativeDashboardChartsToHclTerraform, true)(this._charts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChronicleNativeDashboardChartsList",
      },
      filters: {
        value: cdktn.listMapperHcl(chronicleNativeDashboardFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChronicleNativeDashboardFiltersList",
      },
      timeouts: {
        value: chronicleNativeDashboardTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ChronicleNativeDashboardTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
