/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ChronicleDashboardChartConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#deletion_policy ChronicleDashboardChart#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#id ChronicleDashboardChart#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the Chronicle instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#instance ChronicleDashboardChart#instance}
  */
  readonly instance: string;
  /**
  * The location of the Chronicle instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#location ChronicleDashboardChart#location}
  */
  readonly location: string;
  /**
  * The parent NativeDashboard resource name, formatted as projects/{project}/locations/{location}/instances/{instance}/nativeDashboards/{dashboard_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#native_dashboard ChronicleDashboardChart#native_dashboard}
  */
  readonly nativeDashboard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#project ChronicleDashboardChart#project}
  */
  readonly project?: string;
  /**
  * chart_layout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#chart_layout ChronicleDashboardChart#chart_layout}
  */
  readonly chartLayout?: ChronicleDashboardChartChartLayout;
  /**
  * dashboard_chart block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#dashboard_chart ChronicleDashboardChart#dashboard_chart}
  */
  readonly dashboardChart: ChronicleDashboardChartDashboardChart;
  /**
  * dashboard_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#dashboard_query ChronicleDashboardChart#dashboard_query}
  */
  readonly dashboardQuery?: ChronicleDashboardChartDashboardQuery;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#timeouts ChronicleDashboardChart#timeouts}
  */
  readonly timeouts?: ChronicleDashboardChartTimeouts;
}
export interface ChronicleDashboardChartChartLayout {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#span_x ChronicleDashboardChart#span_x}
  */
  readonly spanX: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#span_y ChronicleDashboardChart#span_y}
  */
  readonly spanY: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#start_x ChronicleDashboardChart#start_x}
  */
  readonly startX?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#start_y ChronicleDashboardChart#start_y}
  */
  readonly startY?: number;
}

export function chronicleDashboardChartChartLayoutToTerraform(struct?: ChronicleDashboardChartChartLayoutOutputReference | ChronicleDashboardChartChartLayout): any {
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


export function chronicleDashboardChartChartLayoutToHclTerraform(struct?: ChronicleDashboardChartChartLayoutOutputReference | ChronicleDashboardChartChartLayout): any {
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

export class ChronicleDashboardChartChartLayoutOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartChartLayout | undefined {
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

  public set internalValue(value: ChronicleDashboardChartChartLayout | undefined) {
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
export interface ChronicleDashboardChartDashboardChartChartDatasource {
  /**
  * Name(s) of the datasource used in the chart. Available values include:
  * 'UDM', 'ENTITY', 'INGESTION_METRICS', 'RULE_DETECTIONS', 'RULESETS',
  * 'GLOBAL', 'IOC_MATCHES', 'RULES', 'SOAR_CASES', 'SOAR_PLAYBOOKS',
  * 'SOAR_CASE_HISTORY', 'DATA_TABLE', 'INVESTIGATION', 'INVESTIGATION_FEEDBACK'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#data_sources ChronicleDashboardChart#data_sources}
  */
  readonly dataSources?: string[];
}

export function chronicleDashboardChartDashboardChartChartDatasourceToTerraform(struct?: ChronicleDashboardChartDashboardChartChartDatasourceOutputReference | ChronicleDashboardChartDashboardChartChartDatasource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_sources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dataSources),
  }
}


export function chronicleDashboardChartDashboardChartChartDatasourceToHclTerraform(struct?: ChronicleDashboardChartDashboardChartChartDatasourceOutputReference | ChronicleDashboardChartDashboardChartChartDatasource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_sources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dataSources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartChartDatasourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartChartDatasource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSources = this._dataSources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartChartDatasource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSources = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSources = value.dataSources;
    }
  }

  // dashboard_query - computed: true, optional: false, required: false
  public get dashboardQuery() {
    return this.getStringAttribute('dashboard_query');
  }

  // data_sources - computed: false, optional: true, required: false
  private _dataSources?: string[]; 
  public get dataSources() {
    return this.getListAttribute('data_sources');
  }
  public set dataSources(value: string[]) {
    this._dataSources = value;
  }
  public resetDataSources() {
    this._dataSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourcesInput() {
    return this._dataSources;
  }
}
export interface ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLink {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#description ChronicleDashboardChart#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#link ChronicleDashboardChart#link}
  */
  readonly link: string;
}

export function chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLinkToTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLinkOutputReference | ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLink): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    link: cdktn.stringToTerraform(struct!.link),
  }
}


export function chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLinkToHclTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLinkOutputReference | ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLink): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link: {
      value: cdktn.stringToHclTerraform(struct!.link),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLinkOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._link !== undefined) {
      hasAnyValues = true;
      internalValueResult.link = this._link;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._link = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._link = value.link;
    }
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

  // link - computed: false, optional: false, required: true
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
  }
}
export interface ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#field_values ChronicleDashboardChart#field_values}
  */
  readonly fieldValues?: string[];
  /**
  *  Possible values: ["EQUAL", "NOT_EQUAL", "IN", "GREATER_THAN", "GREATER_THAN_OR_EQUAL_TO", "LESS_THAN", "LESS_THAN_OR_EQUAL_TO", "BETWEEN", "PAST", "IS_NULL", "IS_NOT_NULL", "STARTS_WITH", "ENDS_WITH", "DOES_NOT_STARTS_WITH", "DOES_NOT_ENDS_WITH", "NOT_IN", "CONTAINS", "DOES_NOT_CONTAIN"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#filter_operator ChronicleDashboardChart#filter_operator}
  */
  readonly filterOperator?: string;
}

export function chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesToTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fieldValues),
    filter_operator: cdktn.stringToTerraform(struct!.filterOperator),
  }
}


export function chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesToHclTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues | cdktn.IResolvable): any {
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

export class ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues | cdktn.IResolvable | undefined) {
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

export class ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesList extends cdktn.ComplexList {
  public internalValue? : ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues[] | cdktn.IResolvable

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
  public get(index: number): ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesOutputReference {
    return new ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#dashboard_filter_id ChronicleDashboardChart#dashboard_filter_id}
  */
  readonly dashboardFilterId: string;
  /**
  * filter_operator_and_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#filter_operator_and_values ChronicleDashboardChart#filter_operator_and_values}
  */
  readonly filterOperatorAndValues: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues[] | cdktn.IResolvable;
}

export function chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersToTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dashboard_filter_id: cdktn.stringToTerraform(struct!.dashboardFilterId),
    filter_operator_and_values: cdktn.listMapper(chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesToTerraform, true)(struct!.filterOperatorAndValues),
  }
}


export function chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersToHclTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dashboard_filter_id: {
      value: cdktn.stringToHclTerraform(struct!.dashboardFilterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_operator_and_values: {
      value: cdktn.listMapperHcl(chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesToHclTerraform, true)(struct!.filterOperatorAndValues),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dashboardFilterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardFilterId = this._dashboardFilterId;
    }
    if (this._filterOperatorAndValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterOperatorAndValues = this._filterOperatorAndValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dashboardFilterId = undefined;
      this._filterOperatorAndValues.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dashboardFilterId = value.dashboardFilterId;
      this._filterOperatorAndValues.internalValue = value.filterOperatorAndValues;
    }
  }

  // dashboard_filter_id - computed: false, optional: false, required: true
  private _dashboardFilterId?: string; 
  public get dashboardFilterId() {
    return this.getStringAttribute('dashboard_filter_id');
  }
  public set dashboardFilterId(value: string) {
    this._dashboardFilterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardFilterIdInput() {
    return this._dashboardFilterId;
  }

  // filter_operator_and_values - computed: false, optional: false, required: true
  private _filterOperatorAndValues = new ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesList(this, "filter_operator_and_values", false);
  public get filterOperatorAndValues() {
    return this._filterOperatorAndValues;
  }
  public putFilterOperatorAndValues(value: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues[] | cdktn.IResolvable) {
    this._filterOperatorAndValues.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterOperatorAndValuesInput() {
    return this._filterOperatorAndValues.internalValue;
  }
}

export class ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersList extends cdktn.ComplexList {
  public internalValue? : ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFilters[] | cdktn.IResolvable

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
  public get(index: number): ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersOutputReference {
    return new ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilter {
  /**
  * dashboard_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#dashboard_filters ChronicleDashboardChart#dashboard_filters}
  */
  readonly dashboardFilters: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFilters[] | cdktn.IResolvable;
}

export function chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterToTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterOutputReference | ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dashboard_filters: cdktn.listMapper(chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersToTerraform, true)(struct!.dashboardFilters),
  }
}


export function chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterToHclTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterOutputReference | ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dashboard_filters: {
      value: cdktn.listMapperHcl(chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersToHclTerraform, true)(struct!.dashboardFilters),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dashboardFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardFilters = this._dashboardFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dashboardFilters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dashboardFilters.internalValue = value.dashboardFilters;
    }
  }

  // dashboard_filters - computed: false, optional: false, required: true
  private _dashboardFilters = new ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersList(this, "dashboard_filters", false);
  public get dashboardFilters() {
    return this._dashboardFilters;
  }
  public putDashboardFilters(value: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFilters[] | cdktn.IResolvable) {
    this._dashboardFilters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardFiltersInput() {
    return this._dashboardFilters.internalValue;
  }
}
export interface ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#query ChronicleDashboardChart#query}
  */
  readonly query: string;
}

export function chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQueryToTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQueryOutputReference | ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQueryToHclTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQueryOutputReference | ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#left_click_column ChronicleDashboardChart#left_click_column}
  */
  readonly leftClickColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#new_tab ChronicleDashboardChart#new_tab}
  */
  readonly newTab: boolean | cdktn.IResolvable;
  /**
  * external_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#external_link ChronicleDashboardChart#external_link}
  */
  readonly externalLink?: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLink;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#filter ChronicleDashboardChart#filter}
  */
  readonly filter?: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilter;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#query ChronicleDashboardChart#query}
  */
  readonly query?: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQuery;
}

export function chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsToTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsOutputReference | ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    left_click_column: cdktn.stringToTerraform(struct!.leftClickColumn),
    new_tab: cdktn.booleanToTerraform(struct!.newTab),
    external_link: chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLinkToTerraform(struct!.externalLink),
    filter: chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterToTerraform(struct!.filter),
    query: chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQueryToTerraform(struct!.query),
  }
}


export function chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsToHclTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsOutputReference | ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    left_click_column: {
      value: cdktn.stringToHclTerraform(struct!.leftClickColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_tab: {
      value: cdktn.booleanToHclTerraform(struct!.newTab),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external_link: {
      value: chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLinkToHclTerraform(struct!.externalLink),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLinkList",
    },
    filter: {
      value: chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterList",
    },
    query: {
      value: chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._leftClickColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.leftClickColumn = this._leftClickColumn;
    }
    if (this._newTab !== undefined) {
      hasAnyValues = true;
      internalValueResult.newTab = this._newTab;
    }
    if (this._externalLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalLink = this._externalLink?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._leftClickColumn = undefined;
      this._newTab = undefined;
      this._externalLink.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._query.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._leftClickColumn = value.leftClickColumn;
      this._newTab = value.newTab;
      this._externalLink.internalValue = value.externalLink;
      this._filter.internalValue = value.filter;
      this._query.internalValue = value.query;
    }
  }

  // left_click_column - computed: false, optional: true, required: false
  private _leftClickColumn?: string; 
  public get leftClickColumn() {
    return this.getStringAttribute('left_click_column');
  }
  public set leftClickColumn(value: string) {
    this._leftClickColumn = value;
  }
  public resetLeftClickColumn() {
    this._leftClickColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leftClickColumnInput() {
    return this._leftClickColumn;
  }

  // new_tab - computed: false, optional: false, required: true
  private _newTab?: boolean | cdktn.IResolvable; 
  public get newTab() {
    return this.getBooleanAttribute('new_tab');
  }
  public set newTab(value: boolean | cdktn.IResolvable) {
    this._newTab = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newTabInput() {
    return this._newTab;
  }

  // external_link - computed: false, optional: true, required: false
  private _externalLink = new ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLinkOutputReference(this, "external_link");
  public get externalLink() {
    return this._externalLink;
  }
  public putExternalLink(value: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLink) {
    this._externalLink.internalValue = value;
  }
  public resetExternalLink() {
    this._externalLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalLinkInput() {
    return this._externalLink.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQuery) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}
export interface ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#enabled ChronicleDashboardChart#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettingsToTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettingsOutputReference | ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettingsToHclTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettingsOutputReference | ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDowns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#display_name ChronicleDashboardChart#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#id ChronicleDashboardChart#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * custom_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#custom_settings ChronicleDashboardChart#custom_settings}
  */
  readonly customSettings?: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettings;
  /**
  * default_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#default_settings ChronicleDashboardChart#default_settings}
  */
  readonly defaultSettings?: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettings;
}

export function chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsToTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDowns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_name: cdktn.stringToTerraform(struct!.displayName),
    id: cdktn.stringToTerraform(struct!.id),
    custom_settings: chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsToTerraform(struct!.customSettings),
    default_settings: chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettingsToTerraform(struct!.defaultSettings),
  }
}


export function chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsToHclTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDowns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
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
    custom_settings: {
      value: chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsToHclTerraform(struct!.customSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsList",
    },
    default_settings: {
      value: chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettingsToHclTerraform(struct!.defaultSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDowns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._customSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSettings = this._customSettings?.internalValue;
    }
    if (this._defaultSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSettings = this._defaultSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDowns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._id = undefined;
      this._customSettings.internalValue = undefined;
      this._defaultSettings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._id = value.id;
      this._customSettings.internalValue = value.customSettings;
      this._defaultSettings.internalValue = value.defaultSettings;
    }
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // custom_settings - computed: false, optional: true, required: false
  private _customSettings = new ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsOutputReference(this, "custom_settings");
  public get customSettings() {
    return this._customSettings;
  }
  public putCustomSettings(value: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettings) {
    this._customSettings.internalValue = value;
  }
  public resetCustomSettings() {
    this._customSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSettingsInput() {
    return this._customSettings.internalValue;
  }

  // default_settings - computed: false, optional: true, required: false
  private _defaultSettings = new ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettingsOutputReference(this, "default_settings");
  public get defaultSettings() {
    return this._defaultSettings;
  }
  public putDefaultSettings(value: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettings) {
    this._defaultSettings.internalValue = value;
  }
  public resetDefaultSettings() {
    this._defaultSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSettingsInput() {
    return this._defaultSettings.internalValue;
  }
}

export class ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsList extends cdktn.ComplexList {
  public internalValue? : ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDowns[] | cdktn.IResolvable

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
  public get(index: number): ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsOutputReference {
    return new ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLink {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#description ChronicleDashboardChart#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#link ChronicleDashboardChart#link}
  */
  readonly link: string;
}

export function chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLinkToTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLinkOutputReference | ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLink): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    link: cdktn.stringToTerraform(struct!.link),
  }
}


export function chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLinkToHclTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLinkOutputReference | ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLink): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link: {
      value: cdktn.stringToHclTerraform(struct!.link),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLinkOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._link !== undefined) {
      hasAnyValues = true;
      internalValueResult.link = this._link;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._link = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._link = value.link;
    }
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

  // link - computed: false, optional: false, required: true
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
  }
}
export interface ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#field_values ChronicleDashboardChart#field_values}
  */
  readonly fieldValues?: string[];
  /**
  *  Possible values: ["EQUAL", "NOT_EQUAL", "IN", "GREATER_THAN", "GREATER_THAN_OR_EQUAL_TO", "LESS_THAN", "LESS_THAN_OR_EQUAL_TO", "BETWEEN", "PAST", "IS_NULL", "IS_NOT_NULL", "STARTS_WITH", "ENDS_WITH", "DOES_NOT_STARTS_WITH", "DOES_NOT_ENDS_WITH", "NOT_IN", "CONTAINS", "DOES_NOT_CONTAIN"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#filter_operator ChronicleDashboardChart#filter_operator}
  */
  readonly filterOperator?: string;
}

export function chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesToTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fieldValues),
    filter_operator: cdktn.stringToTerraform(struct!.filterOperator),
  }
}


export function chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesToHclTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues | cdktn.IResolvable): any {
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

export class ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues | cdktn.IResolvable | undefined) {
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

export class ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesList extends cdktn.ComplexList {
  public internalValue? : ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues[] | cdktn.IResolvable

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
  public get(index: number): ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesOutputReference {
    return new ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#dashboard_filter_id ChronicleDashboardChart#dashboard_filter_id}
  */
  readonly dashboardFilterId: string;
  /**
  * filter_operator_and_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#filter_operator_and_values ChronicleDashboardChart#filter_operator_and_values}
  */
  readonly filterOperatorAndValues: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues[] | cdktn.IResolvable;
}

export function chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersToTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dashboard_filter_id: cdktn.stringToTerraform(struct!.dashboardFilterId),
    filter_operator_and_values: cdktn.listMapper(chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesToTerraform, true)(struct!.filterOperatorAndValues),
  }
}


export function chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersToHclTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dashboard_filter_id: {
      value: cdktn.stringToHclTerraform(struct!.dashboardFilterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_operator_and_values: {
      value: cdktn.listMapperHcl(chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesToHclTerraform, true)(struct!.filterOperatorAndValues),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dashboardFilterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardFilterId = this._dashboardFilterId;
    }
    if (this._filterOperatorAndValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterOperatorAndValues = this._filterOperatorAndValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dashboardFilterId = undefined;
      this._filterOperatorAndValues.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dashboardFilterId = value.dashboardFilterId;
      this._filterOperatorAndValues.internalValue = value.filterOperatorAndValues;
    }
  }

  // dashboard_filter_id - computed: false, optional: false, required: true
  private _dashboardFilterId?: string; 
  public get dashboardFilterId() {
    return this.getStringAttribute('dashboard_filter_id');
  }
  public set dashboardFilterId(value: string) {
    this._dashboardFilterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardFilterIdInput() {
    return this._dashboardFilterId;
  }

  // filter_operator_and_values - computed: false, optional: false, required: true
  private _filterOperatorAndValues = new ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesList(this, "filter_operator_and_values", false);
  public get filterOperatorAndValues() {
    return this._filterOperatorAndValues;
  }
  public putFilterOperatorAndValues(value: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues[] | cdktn.IResolvable) {
    this._filterOperatorAndValues.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterOperatorAndValuesInput() {
    return this._filterOperatorAndValues.internalValue;
  }
}

export class ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersList extends cdktn.ComplexList {
  public internalValue? : ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFilters[] | cdktn.IResolvable

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
  public get(index: number): ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersOutputReference {
    return new ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilter {
  /**
  * dashboard_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#dashboard_filters ChronicleDashboardChart#dashboard_filters}
  */
  readonly dashboardFilters: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFilters[] | cdktn.IResolvable;
}

export function chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterToTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterOutputReference | ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dashboard_filters: cdktn.listMapper(chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersToTerraform, true)(struct!.dashboardFilters),
  }
}


export function chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterToHclTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterOutputReference | ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dashboard_filters: {
      value: cdktn.listMapperHcl(chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersToHclTerraform, true)(struct!.dashboardFilters),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dashboardFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardFilters = this._dashboardFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dashboardFilters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dashboardFilters.internalValue = value.dashboardFilters;
    }
  }

  // dashboard_filters - computed: false, optional: false, required: true
  private _dashboardFilters = new ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersList(this, "dashboard_filters", false);
  public get dashboardFilters() {
    return this._dashboardFilters;
  }
  public putDashboardFilters(value: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFilters[] | cdktn.IResolvable) {
    this._dashboardFilters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardFiltersInput() {
    return this._dashboardFilters.internalValue;
  }
}
export interface ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#query ChronicleDashboardChart#query}
  */
  readonly query: string;
}

export function chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQueryToTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQueryOutputReference | ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQueryToHclTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQueryOutputReference | ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#new_tab ChronicleDashboardChart#new_tab}
  */
  readonly newTab: boolean | cdktn.IResolvable;
  /**
  * external_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#external_link ChronicleDashboardChart#external_link}
  */
  readonly externalLink?: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLink;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#filter ChronicleDashboardChart#filter}
  */
  readonly filter?: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilter;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#query ChronicleDashboardChart#query}
  */
  readonly query?: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQuery;
}

export function chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsToTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsOutputReference | ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    new_tab: cdktn.booleanToTerraform(struct!.newTab),
    external_link: chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLinkToTerraform(struct!.externalLink),
    filter: chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterToTerraform(struct!.filter),
    query: chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQueryToTerraform(struct!.query),
  }
}


export function chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsToHclTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsOutputReference | ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    new_tab: {
      value: cdktn.booleanToHclTerraform(struct!.newTab),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external_link: {
      value: chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLinkToHclTerraform(struct!.externalLink),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLinkList",
    },
    filter: {
      value: chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterList",
    },
    query: {
      value: chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newTab !== undefined) {
      hasAnyValues = true;
      internalValueResult.newTab = this._newTab;
    }
    if (this._externalLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalLink = this._externalLink?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._newTab = undefined;
      this._externalLink.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._query.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._newTab = value.newTab;
      this._externalLink.internalValue = value.externalLink;
      this._filter.internalValue = value.filter;
      this._query.internalValue = value.query;
    }
  }

  // new_tab - computed: false, optional: false, required: true
  private _newTab?: boolean | cdktn.IResolvable; 
  public get newTab() {
    return this.getBooleanAttribute('new_tab');
  }
  public set newTab(value: boolean | cdktn.IResolvable) {
    this._newTab = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newTabInput() {
    return this._newTab;
  }

  // external_link - computed: false, optional: true, required: false
  private _externalLink = new ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLinkOutputReference(this, "external_link");
  public get externalLink() {
    return this._externalLink;
  }
  public putExternalLink(value: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLink) {
    this._externalLink.internalValue = value;
  }
  public resetExternalLink() {
    this._externalLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalLinkInput() {
    return this._externalLink.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQuery) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}
export interface ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#enabled ChronicleDashboardChart#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettingsToTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettingsOutputReference | ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettingsToHclTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettingsOutputReference | ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDowns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#display_name ChronicleDashboardChart#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#id ChronicleDashboardChart#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * custom_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#custom_settings ChronicleDashboardChart#custom_settings}
  */
  readonly customSettings?: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettings;
  /**
  * default_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#default_settings ChronicleDashboardChart#default_settings}
  */
  readonly defaultSettings?: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettings;
}

export function chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsToTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDowns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_name: cdktn.stringToTerraform(struct!.displayName),
    id: cdktn.stringToTerraform(struct!.id),
    custom_settings: chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsToTerraform(struct!.customSettings),
    default_settings: chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettingsToTerraform(struct!.defaultSettings),
  }
}


export function chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsToHclTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDowns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
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
    custom_settings: {
      value: chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsToHclTerraform(struct!.customSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsList",
    },
    default_settings: {
      value: chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettingsToHclTerraform(struct!.defaultSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDowns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._customSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSettings = this._customSettings?.internalValue;
    }
    if (this._defaultSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSettings = this._defaultSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDowns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._id = undefined;
      this._customSettings.internalValue = undefined;
      this._defaultSettings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._id = value.id;
      this._customSettings.internalValue = value.customSettings;
      this._defaultSettings.internalValue = value.defaultSettings;
    }
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // custom_settings - computed: false, optional: true, required: false
  private _customSettings = new ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsOutputReference(this, "custom_settings");
  public get customSettings() {
    return this._customSettings;
  }
  public putCustomSettings(value: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettings) {
    this._customSettings.internalValue = value;
  }
  public resetCustomSettings() {
    this._customSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSettingsInput() {
    return this._customSettings.internalValue;
  }

  // default_settings - computed: false, optional: true, required: false
  private _defaultSettings = new ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettingsOutputReference(this, "default_settings");
  public get defaultSettings() {
    return this._defaultSettings;
  }
  public putDefaultSettings(value: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettings) {
    this._defaultSettings.internalValue = value;
  }
  public resetDefaultSettings() {
    this._defaultSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSettingsInput() {
    return this._defaultSettings.internalValue;
  }
}

export class ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsList extends cdktn.ComplexList {
  public internalValue? : ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDowns[] | cdktn.IResolvable

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
  public get(index: number): ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsOutputReference {
    return new ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleDashboardChartDashboardChartDrillDownConfig {
  /**
  * left_drill_downs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#left_drill_downs ChronicleDashboardChart#left_drill_downs}
  */
  readonly leftDrillDowns?: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDowns[] | cdktn.IResolvable;
  /**
  * right_drill_downs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#right_drill_downs ChronicleDashboardChart#right_drill_downs}
  */
  readonly rightDrillDowns?: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDowns[] | cdktn.IResolvable;
}

export function chronicleDashboardChartDashboardChartDrillDownConfigToTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigOutputReference | ChronicleDashboardChartDashboardChartDrillDownConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    left_drill_downs: cdktn.listMapper(chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsToTerraform, true)(struct!.leftDrillDowns),
    right_drill_downs: cdktn.listMapper(chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsToTerraform, true)(struct!.rightDrillDowns),
  }
}


export function chronicleDashboardChartDashboardChartDrillDownConfigToHclTerraform(struct?: ChronicleDashboardChartDashboardChartDrillDownConfigOutputReference | ChronicleDashboardChartDashboardChartDrillDownConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    left_drill_downs: {
      value: cdktn.listMapperHcl(chronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsToHclTerraform, true)(struct!.leftDrillDowns),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsList",
    },
    right_drill_downs: {
      value: cdktn.listMapperHcl(chronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsToHclTerraform, true)(struct!.rightDrillDowns),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartDrillDownConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartDrillDownConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._leftDrillDowns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.leftDrillDowns = this._leftDrillDowns?.internalValue;
    }
    if (this._rightDrillDowns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rightDrillDowns = this._rightDrillDowns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartDrillDownConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._leftDrillDowns.internalValue = undefined;
      this._rightDrillDowns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._leftDrillDowns.internalValue = value.leftDrillDowns;
      this._rightDrillDowns.internalValue = value.rightDrillDowns;
    }
  }

  // left_drill_downs - computed: false, optional: true, required: false
  private _leftDrillDowns = new ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsList(this, "left_drill_downs", false);
  public get leftDrillDowns() {
    return this._leftDrillDowns;
  }
  public putLeftDrillDowns(value: ChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDowns[] | cdktn.IResolvable) {
    this._leftDrillDowns.internalValue = value;
  }
  public resetLeftDrillDowns() {
    this._leftDrillDowns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leftDrillDownsInput() {
    return this._leftDrillDowns.internalValue;
  }

  // right_drill_downs - computed: false, optional: true, required: false
  private _rightDrillDowns = new ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsList(this, "right_drill_downs", false);
  public get rightDrillDowns() {
    return this._rightDrillDowns;
  }
  public putRightDrillDowns(value: ChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDowns[] | cdktn.IResolvable) {
    this._rightDrillDowns.internalValue = value;
  }
  public resetRightDrillDowns() {
    this._rightDrillDowns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rightDrillDownsInput() {
    return this._rightDrillDowns.internalValue;
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationButtonProperties {
  /**
  *  Possible values: ["BUTTON_STYLE_UNSPECIFIED", "BUTTON_STYLE_FILLED", "BUTTON_STYLE_OUTLINED", "BUTTON_STYLE_TRANSPARENT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#button_style ChronicleDashboardChart#button_style}
  */
  readonly buttonStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#color ChronicleDashboardChart#color}
  */
  readonly color?: string;
}

export function chronicleDashboardChartDashboardChartVisualizationButtonPropertiesToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationButtonPropertiesOutputReference | ChronicleDashboardChartDashboardChartVisualizationButtonProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    button_style: cdktn.stringToTerraform(struct!.buttonStyle),
    color: cdktn.stringToTerraform(struct!.color),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationButtonPropertiesToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationButtonPropertiesOutputReference | ChronicleDashboardChartDashboardChartVisualizationButtonProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    button_style: {
      value: cdktn.stringToHclTerraform(struct!.buttonStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationButtonPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationButtonProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buttonStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonStyle = this._buttonStyle;
    }
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationButtonProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._buttonStyle = undefined;
      this._color = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._buttonStyle = value.buttonStyle;
      this._color = value.color;
    }
  }

  // button_style - computed: false, optional: true, required: false
  private _buttonStyle?: string; 
  public get buttonStyle() {
    return this.getStringAttribute('button_style');
  }
  public set buttonStyle(value: string) {
    this._buttonStyle = value;
  }
  public resetButtonStyle() {
    this._buttonStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonStyleInput() {
    return this._buttonStyle;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#description ChronicleDashboardChart#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#hyperlink ChronicleDashboardChart#hyperlink}
  */
  readonly hyperlink: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#label ChronicleDashboardChart#label}
  */
  readonly label: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#new_tab ChronicleDashboardChart#new_tab}
  */
  readonly newTab?: boolean | cdktn.IResolvable;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#properties ChronicleDashboardChart#properties}
  */
  readonly properties?: ChronicleDashboardChartDashboardChartVisualizationButtonProperties;
}

export function chronicleDashboardChartDashboardChartVisualizationButtonToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationButtonOutputReference | ChronicleDashboardChartDashboardChartVisualizationButton): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    hyperlink: cdktn.stringToTerraform(struct!.hyperlink),
    label: cdktn.stringToTerraform(struct!.label),
    new_tab: cdktn.booleanToTerraform(struct!.newTab),
    properties: chronicleDashboardChartDashboardChartVisualizationButtonPropertiesToTerraform(struct!.properties),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationButtonToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationButtonOutputReference | ChronicleDashboardChartDashboardChartVisualizationButton): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hyperlink: {
      value: cdktn.stringToHclTerraform(struct!.hyperlink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_tab: {
      value: cdktn.booleanToHclTerraform(struct!.newTab),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    properties: {
      value: chronicleDashboardChartDashboardChartVisualizationButtonPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationButtonPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationButtonOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationButton | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._hyperlink !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperlink = this._hyperlink;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._newTab !== undefined) {
      hasAnyValues = true;
      internalValueResult.newTab = this._newTab;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationButton | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._hyperlink = undefined;
      this._label = undefined;
      this._newTab = undefined;
      this._properties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._hyperlink = value.hyperlink;
      this._label = value.label;
      this._newTab = value.newTab;
      this._properties.internalValue = value.properties;
    }
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

  // hyperlink - computed: false, optional: false, required: true
  private _hyperlink?: string; 
  public get hyperlink() {
    return this.getStringAttribute('hyperlink');
  }
  public set hyperlink(value: string) {
    this._hyperlink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperlinkInput() {
    return this._hyperlink;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // new_tab - computed: false, optional: true, required: false
  private _newTab?: boolean | cdktn.IResolvable; 
  public get newTab() {
    return this.getBooleanAttribute('new_tab');
  }
  public set newTab(value: boolean | cdktn.IResolvable) {
    this._newTab = value;
  }
  public resetNewTab() {
    this._newTab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newTabInput() {
    return this._newTab;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new ChronicleDashboardChartDashboardChartVisualizationButtonPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: ChronicleDashboardChartDashboardChartVisualizationButtonProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationColumnDefs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#field ChronicleDashboardChart#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#header ChronicleDashboardChart#header}
  */
  readonly header?: string;
}

export function chronicleDashboardChartDashboardChartVisualizationColumnDefsToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationColumnDefs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    header: cdktn.stringToTerraform(struct!.header),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationColumnDefsToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationColumnDefs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktn.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationColumnDefsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationColumnDefs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationColumnDefs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._header = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._header = value.header;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }
}

export class ChronicleDashboardChartDashboardChartVisualizationColumnDefsList extends cdktn.ComplexList {
  public internalValue? : ChronicleDashboardChartDashboardChartVisualizationColumnDefs[] | cdktn.IResolvable

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
  public get(index: number): ChronicleDashboardChartDashboardChartVisualizationColumnDefsOutputReference {
    return new ChronicleDashboardChartDashboardChartVisualizationColumnDefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#count_column ChronicleDashboardChart#count_column}
  */
  readonly countColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#latitude_column ChronicleDashboardChart#latitude_column}
  */
  readonly latitudeColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#longitude_column ChronicleDashboardChart#longitude_column}
  */
  readonly longitudeColumn?: string;
}

export function chronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettingsToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettingsOutputReference | ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count_column: cdktn.stringToTerraform(struct!.countColumn),
    latitude_column: cdktn.stringToTerraform(struct!.latitudeColumn),
    longitude_column: cdktn.stringToTerraform(struct!.longitudeColumn),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettingsToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettingsOutputReference | ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    count_column: {
      value: cdktn.stringToHclTerraform(struct!.countColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latitude_column: {
      value: cdktn.stringToHclTerraform(struct!.latitudeColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    longitude_column: {
      value: cdktn.stringToHclTerraform(struct!.longitudeColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.countColumn = this._countColumn;
    }
    if (this._latitudeColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitudeColumn = this._latitudeColumn;
    }
    if (this._longitudeColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitudeColumn = this._longitudeColumn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._countColumn = undefined;
      this._latitudeColumn = undefined;
      this._longitudeColumn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._countColumn = value.countColumn;
      this._latitudeColumn = value.latitudeColumn;
      this._longitudeColumn = value.longitudeColumn;
    }
  }

  // count_column - computed: false, optional: true, required: false
  private _countColumn?: string; 
  public get countColumn() {
    return this.getStringAttribute('count_column');
  }
  public set countColumn(value: string) {
    this._countColumn = value;
  }
  public resetCountColumn() {
    this._countColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countColumnInput() {
    return this._countColumn;
  }

  // latitude_column - computed: false, optional: true, required: false
  private _latitudeColumn?: string; 
  public get latitudeColumn() {
    return this.getStringAttribute('latitude_column');
  }
  public set latitudeColumn(value: string) {
    this._latitudeColumn = value;
  }
  public resetLatitudeColumn() {
    this._latitudeColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeColumnInput() {
    return this._latitudeColumn;
  }

  // longitude_column - computed: false, optional: true, required: false
  private _longitudeColumn?: string; 
  public get longitudeColumn() {
    return this.getStringAttribute('longitude_column');
  }
  public set longitudeColumn(value: string) {
    this._longitudeColumn = value;
  }
  public resetLongitudeColumn() {
    this._longitudeColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeColumnInput() {
    return this._longitudeColumn;
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPosition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#fit_data ChronicleDashboardChart#fit_data}
  */
  readonly fitData?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#latitude_value ChronicleDashboardChart#latitude_value}
  */
  readonly latitudeValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#longitude_value ChronicleDashboardChart#longitude_value}
  */
  readonly longitudeValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#zoom_scale_value ChronicleDashboardChart#zoom_scale_value}
  */
  readonly zoomScaleValue?: number;
}

export function chronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPositionToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPositionOutputReference | ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPosition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fit_data: cdktn.booleanToTerraform(struct!.fitData),
    latitude_value: cdktn.numberToTerraform(struct!.latitudeValue),
    longitude_value: cdktn.numberToTerraform(struct!.longitudeValue),
    zoom_scale_value: cdktn.numberToTerraform(struct!.zoomScaleValue),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPositionToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPositionOutputReference | ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPosition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fit_data: {
      value: cdktn.booleanToHclTerraform(struct!.fitData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    latitude_value: {
      value: cdktn.numberToHclTerraform(struct!.latitudeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    longitude_value: {
      value: cdktn.numberToHclTerraform(struct!.longitudeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zoom_scale_value: {
      value: cdktn.numberToHclTerraform(struct!.zoomScaleValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPositionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPosition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fitData !== undefined) {
      hasAnyValues = true;
      internalValueResult.fitData = this._fitData;
    }
    if (this._latitudeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitudeValue = this._latitudeValue;
    }
    if (this._longitudeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitudeValue = this._longitudeValue;
    }
    if (this._zoomScaleValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoomScaleValue = this._zoomScaleValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPosition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fitData = undefined;
      this._latitudeValue = undefined;
      this._longitudeValue = undefined;
      this._zoomScaleValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fitData = value.fitData;
      this._latitudeValue = value.latitudeValue;
      this._longitudeValue = value.longitudeValue;
      this._zoomScaleValue = value.zoomScaleValue;
    }
  }

  // fit_data - computed: false, optional: true, required: false
  private _fitData?: boolean | cdktn.IResolvable; 
  public get fitData() {
    return this.getBooleanAttribute('fit_data');
  }
  public set fitData(value: boolean | cdktn.IResolvable) {
    this._fitData = value;
  }
  public resetFitData() {
    this._fitData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fitDataInput() {
    return this._fitData;
  }

  // latitude_value - computed: false, optional: true, required: false
  private _latitudeValue?: number; 
  public get latitudeValue() {
    return this.getNumberAttribute('latitude_value');
  }
  public set latitudeValue(value: number) {
    this._latitudeValue = value;
  }
  public resetLatitudeValue() {
    this._latitudeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeValueInput() {
    return this._latitudeValue;
  }

  // longitude_value - computed: false, optional: true, required: false
  private _longitudeValue?: number; 
  public get longitudeValue() {
    return this.getNumberAttribute('longitude_value');
  }
  public set longitudeValue(value: number) {
    this._longitudeValue = value;
  }
  public resetLongitudeValue() {
    this._longitudeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeValueInput() {
    return this._longitudeValue;
  }

  // zoom_scale_value - computed: false, optional: true, required: false
  private _zoomScaleValue?: number; 
  public get zoomScaleValue() {
    return this.getNumberAttribute('zoom_scale_value');
  }
  public set zoomScaleValue(value: number) {
    this._zoomScaleValue = value;
  }
  public resetZoomScaleValue() {
    this._zoomScaleValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoomScaleValueInput() {
    return this._zoomScaleValue;
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#color ChronicleDashboardChart#color}
  */
  readonly color?: string;
  /**
  *  Possible values: ["POINT_SIZE_TYPE_UNSPECIFIED", "POINT_SIZE_TYPE_FIXED", "POINT_SIZE_TYPE_PROPORTIONAL_TO_SIZE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#point_size_type ChronicleDashboardChart#point_size_type}
  */
  readonly pointSizeType?: string;
}

export function chronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettingsToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettingsOutputReference | ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    point_size_type: cdktn.stringToTerraform(struct!.pointSizeType),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettingsToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettingsOutputReference | ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    point_size_type: {
      value: cdktn.stringToHclTerraform(struct!.pointSizeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._pointSizeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointSizeType = this._pointSizeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._pointSizeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._pointSizeType = value.pointSizeType;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // point_size_type - computed: false, optional: true, required: false
  private _pointSizeType?: string; 
  public get pointSizeType() {
    return this.getStringAttribute('point_size_type');
  }
  public set pointSizeType(value: string) {
    this._pointSizeType = value;
  }
  public resetPointSizeType() {
    this._pointSizeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointSizeTypeInput() {
    return this._pointSizeType;
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfig {
  /**
  *  Possible values: ["PLOT_MODE_UNSPECIFIED", "PLOT_MODE_POINTS", "PLOT_MODE_HEATMAP", "PLOT_MODE_BOTH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#plot_mode ChronicleDashboardChart#plot_mode}
  */
  readonly plotMode?: string;
  /**
  * data_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#data_settings ChronicleDashboardChart#data_settings}
  */
  readonly dataSettings?: ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettings;
  /**
  * map_position block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#map_position ChronicleDashboardChart#map_position}
  */
  readonly mapPosition?: ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPosition;
  /**
  * point_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#point_settings ChronicleDashboardChart#point_settings}
  */
  readonly pointSettings?: ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettings;
}

export function chronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigOutputReference | ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plot_mode: cdktn.stringToTerraform(struct!.plotMode),
    data_settings: chronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettingsToTerraform(struct!.dataSettings),
    map_position: chronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPositionToTerraform(struct!.mapPosition),
    point_settings: chronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettingsToTerraform(struct!.pointSettings),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigOutputReference | ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    plot_mode: {
      value: cdktn.stringToHclTerraform(struct!.plotMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_settings: {
      value: chronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettingsToHclTerraform(struct!.dataSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettingsList",
    },
    map_position: {
      value: chronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPositionToHclTerraform(struct!.mapPosition),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPositionList",
    },
    point_settings: {
      value: chronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettingsToHclTerraform(struct!.pointSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plotMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.plotMode = this._plotMode;
    }
    if (this._dataSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSettings = this._dataSettings?.internalValue;
    }
    if (this._mapPosition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapPosition = this._mapPosition?.internalValue;
    }
    if (this._pointSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointSettings = this._pointSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plotMode = undefined;
      this._dataSettings.internalValue = undefined;
      this._mapPosition.internalValue = undefined;
      this._pointSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plotMode = value.plotMode;
      this._dataSettings.internalValue = value.dataSettings;
      this._mapPosition.internalValue = value.mapPosition;
      this._pointSettings.internalValue = value.pointSettings;
    }
  }

  // plot_mode - computed: false, optional: true, required: false
  private _plotMode?: string; 
  public get plotMode() {
    return this.getStringAttribute('plot_mode');
  }
  public set plotMode(value: string) {
    this._plotMode = value;
  }
  public resetPlotMode() {
    this._plotMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plotModeInput() {
    return this._plotMode;
  }

  // data_settings - computed: false, optional: true, required: false
  private _dataSettings = new ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettingsOutputReference(this, "data_settings");
  public get dataSettings() {
    return this._dataSettings;
  }
  public putDataSettings(value: ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettings) {
    this._dataSettings.internalValue = value;
  }
  public resetDataSettings() {
    this._dataSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSettingsInput() {
    return this._dataSettings.internalValue;
  }

  // map_position - computed: false, optional: true, required: false
  private _mapPosition = new ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPositionOutputReference(this, "map_position");
  public get mapPosition() {
    return this._mapPosition;
  }
  public putMapPosition(value: ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPosition) {
    this._mapPosition.internalValue = value;
  }
  public resetMapPosition() {
    this._mapPosition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapPositionInput() {
    return this._mapPosition.internalValue;
  }

  // point_settings - computed: false, optional: true, required: false
  private _pointSettings = new ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettingsOutputReference(this, "point_settings");
  public get pointSettings() {
    return this._pointSettings;
  }
  public putPointSettings(value: ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettings) {
    this._pointSettings.internalValue = value;
  }
  public resetPointSettings() {
    this._pointSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointSettingsInput() {
    return this._pointSettings.internalValue;
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationLegends {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#bottom ChronicleDashboardChart#bottom}
  */
  readonly bottom?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#id ChronicleDashboardChart#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#left ChronicleDashboardChart#left}
  */
  readonly left?: number;
  /**
  *  Possible values: ["AUTO", "LEFT", "RIGHT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#legend_align ChronicleDashboardChart#legend_align}
  */
  readonly legendAlign?: string;
  /**
  *  Possible values: ["VERTICAL", "HORIZONTAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#legend_orient ChronicleDashboardChart#legend_orient}
  */
  readonly legendOrient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#padding ChronicleDashboardChart#padding}
  */
  readonly padding?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#right ChronicleDashboardChart#right}
  */
  readonly right?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#show ChronicleDashboardChart#show}
  */
  readonly show?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#top ChronicleDashboardChart#top}
  */
  readonly top?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#z ChronicleDashboardChart#z}
  */
  readonly z?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#z_level ChronicleDashboardChart#z_level}
  */
  readonly zLevel?: number;
}

export function chronicleDashboardChartDashboardChartVisualizationLegendsToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationLegends | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bottom: cdktn.numberToTerraform(struct!.bottom),
    id: cdktn.stringToTerraform(struct!.id),
    left: cdktn.numberToTerraform(struct!.left),
    legend_align: cdktn.stringToTerraform(struct!.legendAlign),
    legend_orient: cdktn.stringToTerraform(struct!.legendOrient),
    padding: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.padding),
    right: cdktn.numberToTerraform(struct!.right),
    show: cdktn.booleanToTerraform(struct!.show),
    top: cdktn.numberToTerraform(struct!.top),
    z: cdktn.numberToTerraform(struct!.z),
    z_level: cdktn.numberToTerraform(struct!.zLevel),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationLegendsToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationLegends | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bottom: {
      value: cdktn.numberToHclTerraform(struct!.bottom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    left: {
      value: cdktn.numberToHclTerraform(struct!.left),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    legend_align: {
      value: cdktn.stringToHclTerraform(struct!.legendAlign),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    legend_orient: {
      value: cdktn.stringToHclTerraform(struct!.legendOrient),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    padding: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.padding),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    right: {
      value: cdktn.numberToHclTerraform(struct!.right),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    show: {
      value: cdktn.booleanToHclTerraform(struct!.show),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    top: {
      value: cdktn.numberToHclTerraform(struct!.top),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    z: {
      value: cdktn.numberToHclTerraform(struct!.z),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    z_level: {
      value: cdktn.numberToHclTerraform(struct!.zLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationLegendsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationLegends | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bottom !== undefined) {
      hasAnyValues = true;
      internalValueResult.bottom = this._bottom;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._left !== undefined) {
      hasAnyValues = true;
      internalValueResult.left = this._left;
    }
    if (this._legendAlign !== undefined) {
      hasAnyValues = true;
      internalValueResult.legendAlign = this._legendAlign;
    }
    if (this._legendOrient !== undefined) {
      hasAnyValues = true;
      internalValueResult.legendOrient = this._legendOrient;
    }
    if (this._padding !== undefined) {
      hasAnyValues = true;
      internalValueResult.padding = this._padding;
    }
    if (this._right !== undefined) {
      hasAnyValues = true;
      internalValueResult.right = this._right;
    }
    if (this._show !== undefined) {
      hasAnyValues = true;
      internalValueResult.show = this._show;
    }
    if (this._top !== undefined) {
      hasAnyValues = true;
      internalValueResult.top = this._top;
    }
    if (this._z !== undefined) {
      hasAnyValues = true;
      internalValueResult.z = this._z;
    }
    if (this._zLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.zLevel = this._zLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationLegends | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bottom = undefined;
      this._id = undefined;
      this._left = undefined;
      this._legendAlign = undefined;
      this._legendOrient = undefined;
      this._padding = undefined;
      this._right = undefined;
      this._show = undefined;
      this._top = undefined;
      this._z = undefined;
      this._zLevel = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bottom = value.bottom;
      this._id = value.id;
      this._left = value.left;
      this._legendAlign = value.legendAlign;
      this._legendOrient = value.legendOrient;
      this._padding = value.padding;
      this._right = value.right;
      this._show = value.show;
      this._top = value.top;
      this._z = value.z;
      this._zLevel = value.zLevel;
    }
  }

  // bottom - computed: true, optional: true, required: false
  private _bottom?: number; 
  public get bottom() {
    return this.getNumberAttribute('bottom');
  }
  public set bottom(value: number) {
    this._bottom = value;
  }
  public resetBottom() {
    this._bottom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomInput() {
    return this._bottom;
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

  // left - computed: true, optional: true, required: false
  private _left?: number; 
  public get left() {
    return this.getNumberAttribute('left');
  }
  public set left(value: number) {
    this._left = value;
  }
  public resetLeft() {
    this._left = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left;
  }

  // legend_align - computed: false, optional: true, required: false
  private _legendAlign?: string; 
  public get legendAlign() {
    return this.getStringAttribute('legend_align');
  }
  public set legendAlign(value: string) {
    this._legendAlign = value;
  }
  public resetLegendAlign() {
    this._legendAlign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendAlignInput() {
    return this._legendAlign;
  }

  // legend_orient - computed: false, optional: true, required: false
  private _legendOrient?: string; 
  public get legendOrient() {
    return this.getStringAttribute('legend_orient');
  }
  public set legendOrient(value: string) {
    this._legendOrient = value;
  }
  public resetLegendOrient() {
    this._legendOrient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendOrientInput() {
    return this._legendOrient;
  }

  // padding - computed: true, optional: true, required: false
  private _padding?: number[]; 
  public get padding() {
    return this.getNumberListAttribute('padding');
  }
  public set padding(value: number[]) {
    this._padding = value;
  }
  public resetPadding() {
    this._padding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingInput() {
    return this._padding;
  }

  // right - computed: true, optional: true, required: false
  private _right?: number; 
  public get right() {
    return this.getNumberAttribute('right');
  }
  public set right(value: number) {
    this._right = value;
  }
  public resetRight() {
    this._right = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right;
  }

  // show - computed: true, optional: true, required: false
  private _show?: boolean | cdktn.IResolvable; 
  public get show() {
    return this.getBooleanAttribute('show');
  }
  public set show(value: boolean | cdktn.IResolvable) {
    this._show = value;
  }
  public resetShow() {
    this._show = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInput() {
    return this._show;
  }

  // top - computed: true, optional: true, required: false
  private _top?: number; 
  public get top() {
    return this.getNumberAttribute('top');
  }
  public set top(value: number) {
    this._top = value;
  }
  public resetTop() {
    this._top = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top;
  }

  // z - computed: true, optional: true, required: false
  private _z?: number; 
  public get z() {
    return this.getNumberAttribute('z');
  }
  public set z(value: number) {
    this._z = value;
  }
  public resetZ() {
    this._z = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zInput() {
    return this._z;
  }

  // z_level - computed: true, optional: true, required: false
  private _zLevel?: number; 
  public get zLevel() {
    return this.getNumberAttribute('z_level');
  }
  public set zLevel(value: number) {
    this._zLevel = value;
  }
  public resetZLevel() {
    this._zLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zLevelInput() {
    return this._zLevel;
  }
}

export class ChronicleDashboardChartDashboardChartVisualizationLegendsList extends cdktn.ComplexList {
  public internalValue? : ChronicleDashboardChartDashboardChartVisualizationLegends[] | cdktn.IResolvable

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
  public get(index: number): ChronicleDashboardChartDashboardChartVisualizationLegendsOutputReference {
    return new ChronicleDashboardChartDashboardChartVisualizationLegendsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationMarkdownProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#background_color ChronicleDashboardChart#background_color}
  */
  readonly backgroundColor?: string;
}

export function chronicleDashboardChartDashboardChartVisualizationMarkdownPropertiesToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationMarkdownPropertiesOutputReference | ChronicleDashboardChartDashboardChartVisualizationMarkdownProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    background_color: cdktn.stringToTerraform(struct!.backgroundColor),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationMarkdownPropertiesToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationMarkdownPropertiesOutputReference | ChronicleDashboardChartDashboardChartVisualizationMarkdownProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    background_color: {
      value: cdktn.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationMarkdownPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationMarkdownProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationMarkdownProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backgroundColor = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backgroundColor = value.backgroundColor;
    }
  }

  // background_color - computed: false, optional: true, required: false
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  public resetBackgroundColor() {
    this._backgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationMarkdown {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#content ChronicleDashboardChart#content}
  */
  readonly content: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#properties ChronicleDashboardChart#properties}
  */
  readonly properties?: ChronicleDashboardChartDashboardChartVisualizationMarkdownProperties;
}

export function chronicleDashboardChartDashboardChartVisualizationMarkdownToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationMarkdownOutputReference | ChronicleDashboardChartDashboardChartVisualizationMarkdown): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    properties: chronicleDashboardChartDashboardChartVisualizationMarkdownPropertiesToTerraform(struct!.properties),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationMarkdownToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationMarkdownOutputReference | ChronicleDashboardChartDashboardChartVisualizationMarkdown): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: chronicleDashboardChartDashboardChartVisualizationMarkdownPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationMarkdownPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationMarkdownOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationMarkdown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationMarkdown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._properties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._properties.internalValue = value.properties;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new ChronicleDashboardChartDashboardChartVisualizationMarkdownPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: ChronicleDashboardChartDashboardChartVisualizationMarkdownProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationSeriesAreaStyle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#color ChronicleDashboardChart#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#opacity ChronicleDashboardChart#opacity}
  */
  readonly opacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#origin ChronicleDashboardChart#origin}
  */
  readonly origin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#shadow_blur ChronicleDashboardChart#shadow_blur}
  */
  readonly shadowBlur?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#shadow_color ChronicleDashboardChart#shadow_color}
  */
  readonly shadowColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#shadow_offset_x ChronicleDashboardChart#shadow_offset_x}
  */
  readonly shadowOffsetX?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#shadow_offset_y ChronicleDashboardChart#shadow_offset_y}
  */
  readonly shadowOffsetY?: number;
}

export function chronicleDashboardChartDashboardChartVisualizationSeriesAreaStyleToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationSeriesAreaStyleOutputReference | ChronicleDashboardChartDashboardChartVisualizationSeriesAreaStyle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    opacity: cdktn.numberToTerraform(struct!.opacity),
    origin: cdktn.stringToTerraform(struct!.origin),
    shadow_blur: cdktn.numberToTerraform(struct!.shadowBlur),
    shadow_color: cdktn.stringToTerraform(struct!.shadowColor),
    shadow_offset_x: cdktn.numberToTerraform(struct!.shadowOffsetX),
    shadow_offset_y: cdktn.numberToTerraform(struct!.shadowOffsetY),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationSeriesAreaStyleToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationSeriesAreaStyleOutputReference | ChronicleDashboardChartDashboardChartVisualizationSeriesAreaStyle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opacity: {
      value: cdktn.numberToHclTerraform(struct!.opacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin: {
      value: cdktn.stringToHclTerraform(struct!.origin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shadow_blur: {
      value: cdktn.numberToHclTerraform(struct!.shadowBlur),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shadow_color: {
      value: cdktn.stringToHclTerraform(struct!.shadowColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shadow_offset_x: {
      value: cdktn.numberToHclTerraform(struct!.shadowOffsetX),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shadow_offset_y: {
      value: cdktn.numberToHclTerraform(struct!.shadowOffsetY),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationSeriesAreaStyleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationSeriesAreaStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._opacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.opacity = this._opacity;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._shadowBlur !== undefined) {
      hasAnyValues = true;
      internalValueResult.shadowBlur = this._shadowBlur;
    }
    if (this._shadowColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.shadowColor = this._shadowColor;
    }
    if (this._shadowOffsetX !== undefined) {
      hasAnyValues = true;
      internalValueResult.shadowOffsetX = this._shadowOffsetX;
    }
    if (this._shadowOffsetY !== undefined) {
      hasAnyValues = true;
      internalValueResult.shadowOffsetY = this._shadowOffsetY;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationSeriesAreaStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._opacity = undefined;
      this._origin = undefined;
      this._shadowBlur = undefined;
      this._shadowColor = undefined;
      this._shadowOffsetX = undefined;
      this._shadowOffsetY = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._opacity = value.opacity;
      this._origin = value.origin;
      this._shadowBlur = value.shadowBlur;
      this._shadowColor = value.shadowColor;
      this._shadowOffsetX = value.shadowOffsetX;
      this._shadowOffsetY = value.shadowOffsetY;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // opacity - computed: false, optional: true, required: false
  private _opacity?: number; 
  public get opacity() {
    return this.getNumberAttribute('opacity');
  }
  public set opacity(value: number) {
    this._opacity = value;
  }
  public resetOpacity() {
    this._opacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opacityInput() {
    return this._opacity;
  }

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // shadow_blur - computed: false, optional: true, required: false
  private _shadowBlur?: number; 
  public get shadowBlur() {
    return this.getNumberAttribute('shadow_blur');
  }
  public set shadowBlur(value: number) {
    this._shadowBlur = value;
  }
  public resetShadowBlur() {
    this._shadowBlur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shadowBlurInput() {
    return this._shadowBlur;
  }

  // shadow_color - computed: false, optional: true, required: false
  private _shadowColor?: string; 
  public get shadowColor() {
    return this.getStringAttribute('shadow_color');
  }
  public set shadowColor(value: string) {
    this._shadowColor = value;
  }
  public resetShadowColor() {
    this._shadowColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shadowColorInput() {
    return this._shadowColor;
  }

  // shadow_offset_x - computed: false, optional: true, required: false
  private _shadowOffsetX?: number; 
  public get shadowOffsetX() {
    return this.getNumberAttribute('shadow_offset_x');
  }
  public set shadowOffsetX(value: number) {
    this._shadowOffsetX = value;
  }
  public resetShadowOffsetX() {
    this._shadowOffsetX = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shadowOffsetXInput() {
    return this._shadowOffsetX;
  }

  // shadow_offset_y - computed: false, optional: true, required: false
  private _shadowOffsetY?: number; 
  public get shadowOffsetY() {
    return this.getNumberAttribute('shadow_offset_y');
  }
  public set shadowOffsetY(value: number) {
    this._shadowOffsetY = value;
  }
  public resetShadowOffsetY() {
    this._shadowOffsetY = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shadowOffsetYInput() {
    return this._shadowOffsetY;
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationSeriesDataLabel {
  /**
  * Whether to show data label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#show ChronicleDashboardChart#show}
  */
  readonly show?: boolean | cdktn.IResolvable;
}

export function chronicleDashboardChartDashboardChartVisualizationSeriesDataLabelToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationSeriesDataLabelOutputReference | ChronicleDashboardChartDashboardChartVisualizationSeriesDataLabel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    show: cdktn.booleanToTerraform(struct!.show),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationSeriesDataLabelToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationSeriesDataLabelOutputReference | ChronicleDashboardChartDashboardChartVisualizationSeriesDataLabel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    show: {
      value: cdktn.booleanToHclTerraform(struct!.show),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationSeriesDataLabelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationSeriesDataLabel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._show !== undefined) {
      hasAnyValues = true;
      internalValueResult.show = this._show;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationSeriesDataLabel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._show = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._show = value.show;
    }
  }

  // show - computed: false, optional: true, required: false
  private _show?: boolean | cdktn.IResolvable; 
  public get show() {
    return this.getBooleanAttribute('show');
  }
  public set show(value: boolean | cdktn.IResolvable) {
    this._show = value;
  }
  public resetShow() {
    this._show = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInput() {
    return this._show;
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationSeriesEncode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#item_name ChronicleDashboardChart#item_name}
  */
  readonly itemName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#value ChronicleDashboardChart#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#x ChronicleDashboardChart#x}
  */
  readonly x?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#y ChronicleDashboardChart#y}
  */
  readonly y?: string;
}

export function chronicleDashboardChartDashboardChartVisualizationSeriesEncodeToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationSeriesEncodeOutputReference | ChronicleDashboardChartDashboardChartVisualizationSeriesEncode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    item_name: cdktn.stringToTerraform(struct!.itemName),
    value: cdktn.stringToTerraform(struct!.value),
    x: cdktn.stringToTerraform(struct!.x),
    y: cdktn.stringToTerraform(struct!.y),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationSeriesEncodeToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationSeriesEncodeOutputReference | ChronicleDashboardChartDashboardChartVisualizationSeriesEncode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    item_name: {
      value: cdktn.stringToHclTerraform(struct!.itemName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x: {
      value: cdktn.stringToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y: {
      value: cdktn.stringToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationSeriesEncodeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationSeriesEncode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._itemName !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemName = this._itemName;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationSeriesEncode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._itemName = undefined;
      this._value = undefined;
      this._x = undefined;
      this._y = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._itemName = value.itemName;
      this._value = value.value;
      this._x = value.x;
      this._y = value.y;
    }
  }

  // item_name - computed: false, optional: true, required: false
  private _itemName?: string; 
  public get itemName() {
    return this.getStringAttribute('item_name');
  }
  public set itemName(value: string) {
    this._itemName = value;
  }
  public resetItemName() {
    this._itemName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemNameInput() {
    return this._itemName;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // x - computed: false, optional: true, required: false
  private _x?: string; 
  public get x() {
    return this.getStringAttribute('x');
  }
  public set x(value: string) {
    this._x = value;
  }
  public resetX() {
    this._x = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // y - computed: false, optional: true, required: false
  private _y?: string; 
  public get y() {
    return this.getStringAttribute('y');
  }
  public set y(value: string) {
    this._y = value;
  }
  public resetY() {
    this._y = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#color ChronicleDashboardChart#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#value ChronicleDashboardChart#value}
  */
  readonly value?: number;
}

export function chronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValueToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValueOutputReference | ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValueToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValueOutputReference | ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._value = value.value;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#color ChronicleDashboardChart#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#value ChronicleDashboardChart#value}
  */
  readonly value?: number;
}

export function chronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValueToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValueOutputReference | ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValueToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValueOutputReference | ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._value = value.value;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#color ChronicleDashboardChart#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#value ChronicleDashboardChart#value}
  */
  readonly value?: number;
}

export function chronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValuesToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValuesToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._value = value.value;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValuesList extends cdktn.ComplexList {
  public internalValue? : ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValues[] | cdktn.IResolvable

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
  public get(index: number): ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValuesOutputReference {
    return new ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfig {
  /**
  * base_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#base_value ChronicleDashboardChart#base_value}
  */
  readonly baseValue?: ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValue;
  /**
  * limit_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#limit_value ChronicleDashboardChart#limit_value}
  */
  readonly limitValue?: ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValue;
  /**
  * threshold_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#threshold_values ChronicleDashboardChart#threshold_values}
  */
  readonly thresholdValues?: ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValues[] | cdktn.IResolvable;
}

export function chronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigOutputReference | ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base_value: chronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValueToTerraform(struct!.baseValue),
    limit_value: chronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValueToTerraform(struct!.limitValue),
    threshold_values: cdktn.listMapper(chronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValuesToTerraform, true)(struct!.thresholdValues),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigOutputReference | ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base_value: {
      value: chronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValueToHclTerraform(struct!.baseValue),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValueList",
    },
    limit_value: {
      value: chronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValueToHclTerraform(struct!.limitValue),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValueList",
    },
    threshold_values: {
      value: cdktn.listMapperHcl(chronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValuesToHclTerraform, true)(struct!.thresholdValues),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseValue = this._baseValue?.internalValue;
    }
    if (this._limitValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitValue = this._limitValue?.internalValue;
    }
    if (this._thresholdValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdValues = this._thresholdValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseValue.internalValue = undefined;
      this._limitValue.internalValue = undefined;
      this._thresholdValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseValue.internalValue = value.baseValue;
      this._limitValue.internalValue = value.limitValue;
      this._thresholdValues.internalValue = value.thresholdValues;
    }
  }

  // base_value - computed: false, optional: true, required: false
  private _baseValue = new ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValueOutputReference(this, "base_value");
  public get baseValue() {
    return this._baseValue;
  }
  public putBaseValue(value: ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValue) {
    this._baseValue.internalValue = value;
  }
  public resetBaseValue() {
    this._baseValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseValueInput() {
    return this._baseValue.internalValue;
  }

  // limit_value - computed: false, optional: true, required: false
  private _limitValue = new ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValueOutputReference(this, "limit_value");
  public get limitValue() {
    return this._limitValue;
  }
  public putLimitValue(value: ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValue) {
    this._limitValue.internalValue = value;
  }
  public resetLimitValue() {
    this._limitValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitValueInput() {
    return this._limitValue.internalValue;
  }

  // threshold_values - computed: false, optional: true, required: false
  private _thresholdValues = new ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValuesList(this, "threshold_values", false);
  public get thresholdValues() {
    return this._thresholdValues;
  }
  public putThresholdValues(value: ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValues[] | cdktn.IResolvable) {
    this._thresholdValues.internalValue = value;
  }
  public resetThresholdValues() {
    this._thresholdValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdValuesInput() {
    return this._thresholdValues.internalValue;
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#color ChronicleDashboardChart#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#label ChronicleDashboardChart#label}
  */
  readonly label?: string;
}

export function chronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValueToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValueOutputReference | ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    label: cdktn.stringToTerraform(struct!.label),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValueToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValueOutputReference | ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._label = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._label = value.label;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#key ChronicleDashboardChart#key}
  */
  readonly key?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#value ChronicleDashboardChart#value}
  */
  readonly value?: ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValue;
}

export function chronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: chronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValueToTerraform(struct!.value),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: chronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value.internalValue = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value = new ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsList extends cdktn.ComplexList {
  public internalValue? : ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColors[] | cdktn.IResolvable

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
  public get(index: number): ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsOutputReference {
    return new ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationSeriesItemColors {
  /**
  * colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#colors ChronicleDashboardChart#colors}
  */
  readonly colors?: ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColors[] | cdktn.IResolvable;
}

export function chronicleDashboardChartDashboardChartVisualizationSeriesItemColorsToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsOutputReference | ChronicleDashboardChartDashboardChartVisualizationSeriesItemColors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    colors: cdktn.listMapper(chronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsToTerraform, true)(struct!.colors),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationSeriesItemColorsToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsOutputReference | ChronicleDashboardChartDashboardChartVisualizationSeriesItemColors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    colors: {
      value: cdktn.listMapperHcl(chronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsToHclTerraform, true)(struct!.colors),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationSeriesItemColors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._colors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colors = this._colors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationSeriesItemColors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._colors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._colors.internalValue = value.colors;
    }
  }

  // colors - computed: false, optional: true, required: false
  private _colors = new ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }
  public putColors(value: ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColors[] | cdktn.IResolvable) {
    this._colors.internalValue = value;
  }
  public resetColors() {
    this._colors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors.internalValue;
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationSeriesItemStyle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#border_color ChronicleDashboardChart#border_color}
  */
  readonly borderColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#border_width ChronicleDashboardChart#border_width}
  */
  readonly borderWidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#color ChronicleDashboardChart#color}
  */
  readonly color?: string;
}

export function chronicleDashboardChartDashboardChartVisualizationSeriesItemStyleToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationSeriesItemStyleOutputReference | ChronicleDashboardChartDashboardChartVisualizationSeriesItemStyle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    border_color: cdktn.stringToTerraform(struct!.borderColor),
    border_width: cdktn.numberToTerraform(struct!.borderWidth),
    color: cdktn.stringToTerraform(struct!.color),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationSeriesItemStyleToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationSeriesItemStyleOutputReference | ChronicleDashboardChartDashboardChartVisualizationSeriesItemStyle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    border_color: {
      value: cdktn.stringToHclTerraform(struct!.borderColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    border_width: {
      value: cdktn.numberToHclTerraform(struct!.borderWidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationSeriesItemStyleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationSeriesItemStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._borderColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.borderColor = this._borderColor;
    }
    if (this._borderWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.borderWidth = this._borderWidth;
    }
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationSeriesItemStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._borderColor = undefined;
      this._borderWidth = undefined;
      this._color = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._borderColor = value.borderColor;
      this._borderWidth = value.borderWidth;
      this._color = value.color;
    }
  }

  // border_color - computed: false, optional: true, required: false
  private _borderColor?: string; 
  public get borderColor() {
    return this.getStringAttribute('border_color');
  }
  public set borderColor(value: string) {
    this._borderColor = value;
  }
  public resetBorderColor() {
    this._borderColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderColorInput() {
    return this._borderColor;
  }

  // border_width - computed: false, optional: true, required: false
  private _borderWidth?: number; 
  public get borderWidth() {
    return this.getNumberAttribute('border_width');
  }
  public set borderWidth(value: number) {
    this._borderWidth = value;
  }
  public resetBorderWidth() {
    this._borderWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderWidthInput() {
    return this._borderWidth;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfig {
  /**
  *  Possible values: ["METRIC_DISPLAY_TREND_UNSPECIFIED", "METRIC_DISPLAY_TREND_ABSOLUTE_VALUE", "METRIC_DISPLAY_TREND_PERCENTAGE", "METRIC_DISPLAY_TREND_ABSOLUTE_VALUE_AND_PERCENTAGE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#metric_display_trend ChronicleDashboardChart#metric_display_trend}
  */
  readonly metricDisplayTrend?: string;
  /**
  *  Possible values: ["METRIC_FORMAT_UNSPECIFIED", "METRIC_FORMAT_NUMBER", "METRIC_FORMAT_PLAIN_TEXT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#metric_format ChronicleDashboardChart#metric_format}
  */
  readonly metricFormat?: string;
  /**
  *  Possible values: ["METRIC_TREND_TYPE_UNSPECIFIED", "METRIC_TREND_TYPE_REGULAR", "METRIC_TREND_TYPE_INVERSE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#metric_trend_type ChronicleDashboardChart#metric_trend_type}
  */
  readonly metricTrendType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#show_metric_trend ChronicleDashboardChart#show_metric_trend}
  */
  readonly showMetricTrend?: boolean | cdktn.IResolvable;
}

export function chronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfigToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfigOutputReference | ChronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_display_trend: cdktn.stringToTerraform(struct!.metricDisplayTrend),
    metric_format: cdktn.stringToTerraform(struct!.metricFormat),
    metric_trend_type: cdktn.stringToTerraform(struct!.metricTrendType),
    show_metric_trend: cdktn.booleanToTerraform(struct!.showMetricTrend),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfigToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfigOutputReference | ChronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_display_trend: {
      value: cdktn.stringToHclTerraform(struct!.metricDisplayTrend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_format: {
      value: cdktn.stringToHclTerraform(struct!.metricFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_trend_type: {
      value: cdktn.stringToHclTerraform(struct!.metricTrendType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_metric_trend: {
      value: cdktn.booleanToHclTerraform(struct!.showMetricTrend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricDisplayTrend !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDisplayTrend = this._metricDisplayTrend;
    }
    if (this._metricFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricFormat = this._metricFormat;
    }
    if (this._metricTrendType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTrendType = this._metricTrendType;
    }
    if (this._showMetricTrend !== undefined) {
      hasAnyValues = true;
      internalValueResult.showMetricTrend = this._showMetricTrend;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricDisplayTrend = undefined;
      this._metricFormat = undefined;
      this._metricTrendType = undefined;
      this._showMetricTrend = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricDisplayTrend = value.metricDisplayTrend;
      this._metricFormat = value.metricFormat;
      this._metricTrendType = value.metricTrendType;
      this._showMetricTrend = value.showMetricTrend;
    }
  }

  // metric_display_trend - computed: false, optional: true, required: false
  private _metricDisplayTrend?: string; 
  public get metricDisplayTrend() {
    return this.getStringAttribute('metric_display_trend');
  }
  public set metricDisplayTrend(value: string) {
    this._metricDisplayTrend = value;
  }
  public resetMetricDisplayTrend() {
    this._metricDisplayTrend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDisplayTrendInput() {
    return this._metricDisplayTrend;
  }

  // metric_format - computed: false, optional: true, required: false
  private _metricFormat?: string; 
  public get metricFormat() {
    return this.getStringAttribute('metric_format');
  }
  public set metricFormat(value: string) {
    this._metricFormat = value;
  }
  public resetMetricFormat() {
    this._metricFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricFormatInput() {
    return this._metricFormat;
  }

  // metric_trend_type - computed: false, optional: true, required: false
  private _metricTrendType?: string; 
  public get metricTrendType() {
    return this.getStringAttribute('metric_trend_type');
  }
  public set metricTrendType(value: string) {
    this._metricTrendType = value;
  }
  public resetMetricTrendType() {
    this._metricTrendType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTrendTypeInput() {
    return this._metricTrendType;
  }

  // show_metric_trend - computed: false, optional: true, required: false
  private _showMetricTrend?: boolean | cdktn.IResolvable; 
  public get showMetricTrend() {
    return this.getBooleanAttribute('show_metric_trend');
  }
  public set showMetricTrend(value: boolean | cdktn.IResolvable) {
    this._showMetricTrend = value;
  }
  public resetShowMetricTrend() {
    this._showMetricTrend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showMetricTrendInput() {
    return this._showMetricTrend;
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationSeries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#field ChronicleDashboardChart#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#label ChronicleDashboardChart#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#radius ChronicleDashboardChart#radius}
  */
  readonly radius?: string[];
  /**
  * User specified series label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#series_name ChronicleDashboardChart#series_name}
  */
  readonly seriesName?: string;
  /**
  *  Possible values: ["SAMESIGN", "ALL", "POSITIVE", "NEGATIVE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#series_stack_strategy ChronicleDashboardChart#series_stack_strategy}
  */
  readonly seriesStackStrategy?: string;
  /**
  *  Possible values: ["LINE", "BAR", "PIE", "TEXT", "MAP", "GAUGE", "SCATTERPLOT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#series_type ChronicleDashboardChart#series_type}
  */
  readonly seriesType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#series_unique_value ChronicleDashboardChart#series_unique_value}
  */
  readonly seriesUniqueValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#show_background ChronicleDashboardChart#show_background}
  */
  readonly showBackground?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#show_symbol ChronicleDashboardChart#show_symbol}
  */
  readonly showSymbol?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#stack ChronicleDashboardChart#stack}
  */
  readonly stack?: string;
  /**
  * area_style block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#area_style ChronicleDashboardChart#area_style}
  */
  readonly areaStyle?: ChronicleDashboardChartDashboardChartVisualizationSeriesAreaStyle;
  /**
  * data_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#data_label ChronicleDashboardChart#data_label}
  */
  readonly dataLabel?: ChronicleDashboardChartDashboardChartVisualizationSeriesDataLabel;
  /**
  * encode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#encode ChronicleDashboardChart#encode}
  */
  readonly encode?: ChronicleDashboardChartDashboardChartVisualizationSeriesEncode;
  /**
  * gauge_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#gauge_config ChronicleDashboardChart#gauge_config}
  */
  readonly gaugeConfig?: ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfig;
  /**
  * item_colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#item_colors ChronicleDashboardChart#item_colors}
  */
  readonly itemColors?: ChronicleDashboardChartDashboardChartVisualizationSeriesItemColors;
  /**
  * item_style block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#item_style ChronicleDashboardChart#item_style}
  */
  readonly itemStyle?: ChronicleDashboardChartDashboardChartVisualizationSeriesItemStyle;
  /**
  * metric_trend_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#metric_trend_config ChronicleDashboardChart#metric_trend_config}
  */
  readonly metricTrendConfig?: ChronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfig;
}

export function chronicleDashboardChartDashboardChartVisualizationSeriesToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationSeries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    label: cdktn.stringToTerraform(struct!.label),
    radius: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.radius),
    series_name: cdktn.stringToTerraform(struct!.seriesName),
    series_stack_strategy: cdktn.stringToTerraform(struct!.seriesStackStrategy),
    series_type: cdktn.stringToTerraform(struct!.seriesType),
    series_unique_value: cdktn.stringToTerraform(struct!.seriesUniqueValue),
    show_background: cdktn.booleanToTerraform(struct!.showBackground),
    show_symbol: cdktn.booleanToTerraform(struct!.showSymbol),
    stack: cdktn.stringToTerraform(struct!.stack),
    area_style: chronicleDashboardChartDashboardChartVisualizationSeriesAreaStyleToTerraform(struct!.areaStyle),
    data_label: chronicleDashboardChartDashboardChartVisualizationSeriesDataLabelToTerraform(struct!.dataLabel),
    encode: chronicleDashboardChartDashboardChartVisualizationSeriesEncodeToTerraform(struct!.encode),
    gauge_config: chronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigToTerraform(struct!.gaugeConfig),
    item_colors: chronicleDashboardChartDashboardChartVisualizationSeriesItemColorsToTerraform(struct!.itemColors),
    item_style: chronicleDashboardChartDashboardChartVisualizationSeriesItemStyleToTerraform(struct!.itemStyle),
    metric_trend_config: chronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfigToTerraform(struct!.metricTrendConfig),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationSeriesToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationSeries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radius: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.radius),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    series_name: {
      value: cdktn.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_stack_strategy: {
      value: cdktn.stringToHclTerraform(struct!.seriesStackStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_type: {
      value: cdktn.stringToHclTerraform(struct!.seriesType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_unique_value: {
      value: cdktn.stringToHclTerraform(struct!.seriesUniqueValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_background: {
      value: cdktn.booleanToHclTerraform(struct!.showBackground),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_symbol: {
      value: cdktn.booleanToHclTerraform(struct!.showSymbol),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stack: {
      value: cdktn.stringToHclTerraform(struct!.stack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    area_style: {
      value: chronicleDashboardChartDashboardChartVisualizationSeriesAreaStyleToHclTerraform(struct!.areaStyle),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationSeriesAreaStyleList",
    },
    data_label: {
      value: chronicleDashboardChartDashboardChartVisualizationSeriesDataLabelToHclTerraform(struct!.dataLabel),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationSeriesDataLabelList",
    },
    encode: {
      value: chronicleDashboardChartDashboardChartVisualizationSeriesEncodeToHclTerraform(struct!.encode),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationSeriesEncodeList",
    },
    gauge_config: {
      value: chronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigToHclTerraform(struct!.gaugeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigList",
    },
    item_colors: {
      value: chronicleDashboardChartDashboardChartVisualizationSeriesItemColorsToHclTerraform(struct!.itemColors),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsList",
    },
    item_style: {
      value: chronicleDashboardChartDashboardChartVisualizationSeriesItemStyleToHclTerraform(struct!.itemStyle),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationSeriesItemStyleList",
    },
    metric_trend_config: {
      value: chronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfigToHclTerraform(struct!.metricTrendConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationSeriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationSeries | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._radius !== undefined) {
      hasAnyValues = true;
      internalValueResult.radius = this._radius;
    }
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    if (this._seriesStackStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesStackStrategy = this._seriesStackStrategy;
    }
    if (this._seriesType !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesType = this._seriesType;
    }
    if (this._seriesUniqueValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesUniqueValue = this._seriesUniqueValue;
    }
    if (this._showBackground !== undefined) {
      hasAnyValues = true;
      internalValueResult.showBackground = this._showBackground;
    }
    if (this._showSymbol !== undefined) {
      hasAnyValues = true;
      internalValueResult.showSymbol = this._showSymbol;
    }
    if (this._stack !== undefined) {
      hasAnyValues = true;
      internalValueResult.stack = this._stack;
    }
    if (this._areaStyle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaStyle = this._areaStyle?.internalValue;
    }
    if (this._dataLabel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLabel = this._dataLabel?.internalValue;
    }
    if (this._encode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encode = this._encode?.internalValue;
    }
    if (this._gaugeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gaugeConfig = this._gaugeConfig?.internalValue;
    }
    if (this._itemColors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemColors = this._itemColors?.internalValue;
    }
    if (this._itemStyle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemStyle = this._itemStyle?.internalValue;
    }
    if (this._metricTrendConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTrendConfig = this._metricTrendConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationSeries | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._label = undefined;
      this._radius = undefined;
      this._seriesName = undefined;
      this._seriesStackStrategy = undefined;
      this._seriesType = undefined;
      this._seriesUniqueValue = undefined;
      this._showBackground = undefined;
      this._showSymbol = undefined;
      this._stack = undefined;
      this._areaStyle.internalValue = undefined;
      this._dataLabel.internalValue = undefined;
      this._encode.internalValue = undefined;
      this._gaugeConfig.internalValue = undefined;
      this._itemColors.internalValue = undefined;
      this._itemStyle.internalValue = undefined;
      this._metricTrendConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._label = value.label;
      this._radius = value.radius;
      this._seriesName = value.seriesName;
      this._seriesStackStrategy = value.seriesStackStrategy;
      this._seriesType = value.seriesType;
      this._seriesUniqueValue = value.seriesUniqueValue;
      this._showBackground = value.showBackground;
      this._showSymbol = value.showSymbol;
      this._stack = value.stack;
      this._areaStyle.internalValue = value.areaStyle;
      this._dataLabel.internalValue = value.dataLabel;
      this._encode.internalValue = value.encode;
      this._gaugeConfig.internalValue = value.gaugeConfig;
      this._itemColors.internalValue = value.itemColors;
      this._itemStyle.internalValue = value.itemStyle;
      this._metricTrendConfig.internalValue = value.metricTrendConfig;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // radius - computed: false, optional: true, required: false
  private _radius?: string[]; 
  public get radius() {
    return this.getListAttribute('radius');
  }
  public set radius(value: string[]) {
    this._radius = value;
  }
  public resetRadius() {
    this._radius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusInput() {
    return this._radius;
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }

  // series_stack_strategy - computed: false, optional: true, required: false
  private _seriesStackStrategy?: string; 
  public get seriesStackStrategy() {
    return this.getStringAttribute('series_stack_strategy');
  }
  public set seriesStackStrategy(value: string) {
    this._seriesStackStrategy = value;
  }
  public resetSeriesStackStrategy() {
    this._seriesStackStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesStackStrategyInput() {
    return this._seriesStackStrategy;
  }

  // series_type - computed: false, optional: true, required: false
  private _seriesType?: string; 
  public get seriesType() {
    return this.getStringAttribute('series_type');
  }
  public set seriesType(value: string) {
    this._seriesType = value;
  }
  public resetSeriesType() {
    this._seriesType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesTypeInput() {
    return this._seriesType;
  }

  // series_unique_value - computed: false, optional: true, required: false
  private _seriesUniqueValue?: string; 
  public get seriesUniqueValue() {
    return this.getStringAttribute('series_unique_value');
  }
  public set seriesUniqueValue(value: string) {
    this._seriesUniqueValue = value;
  }
  public resetSeriesUniqueValue() {
    this._seriesUniqueValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesUniqueValueInput() {
    return this._seriesUniqueValue;
  }

  // show_background - computed: true, optional: true, required: false
  private _showBackground?: boolean | cdktn.IResolvable; 
  public get showBackground() {
    return this.getBooleanAttribute('show_background');
  }
  public set showBackground(value: boolean | cdktn.IResolvable) {
    this._showBackground = value;
  }
  public resetShowBackground() {
    this._showBackground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showBackgroundInput() {
    return this._showBackground;
  }

  // show_symbol - computed: false, optional: true, required: false
  private _showSymbol?: boolean | cdktn.IResolvable; 
  public get showSymbol() {
    return this.getBooleanAttribute('show_symbol');
  }
  public set showSymbol(value: boolean | cdktn.IResolvable) {
    this._showSymbol = value;
  }
  public resetShowSymbol() {
    this._showSymbol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSymbolInput() {
    return this._showSymbol;
  }

  // stack - computed: false, optional: true, required: false
  private _stack?: string; 
  public get stack() {
    return this.getStringAttribute('stack');
  }
  public set stack(value: string) {
    this._stack = value;
  }
  public resetStack() {
    this._stack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackInput() {
    return this._stack;
  }

  // area_style - computed: false, optional: true, required: false
  private _areaStyle = new ChronicleDashboardChartDashboardChartVisualizationSeriesAreaStyleOutputReference(this, "area_style");
  public get areaStyle() {
    return this._areaStyle;
  }
  public putAreaStyle(value: ChronicleDashboardChartDashboardChartVisualizationSeriesAreaStyle) {
    this._areaStyle.internalValue = value;
  }
  public resetAreaStyle() {
    this._areaStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaStyleInput() {
    return this._areaStyle.internalValue;
  }

  // data_label - computed: false, optional: true, required: false
  private _dataLabel = new ChronicleDashboardChartDashboardChartVisualizationSeriesDataLabelOutputReference(this, "data_label");
  public get dataLabel() {
    return this._dataLabel;
  }
  public putDataLabel(value: ChronicleDashboardChartDashboardChartVisualizationSeriesDataLabel) {
    this._dataLabel.internalValue = value;
  }
  public resetDataLabel() {
    this._dataLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLabelInput() {
    return this._dataLabel.internalValue;
  }

  // encode - computed: false, optional: true, required: false
  private _encode = new ChronicleDashboardChartDashboardChartVisualizationSeriesEncodeOutputReference(this, "encode");
  public get encode() {
    return this._encode;
  }
  public putEncode(value: ChronicleDashboardChartDashboardChartVisualizationSeriesEncode) {
    this._encode.internalValue = value;
  }
  public resetEncode() {
    this._encode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodeInput() {
    return this._encode.internalValue;
  }

  // gauge_config - computed: false, optional: true, required: false
  private _gaugeConfig = new ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigOutputReference(this, "gauge_config");
  public get gaugeConfig() {
    return this._gaugeConfig;
  }
  public putGaugeConfig(value: ChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfig) {
    this._gaugeConfig.internalValue = value;
  }
  public resetGaugeConfig() {
    this._gaugeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gaugeConfigInput() {
    return this._gaugeConfig.internalValue;
  }

  // item_colors - computed: false, optional: true, required: false
  private _itemColors = new ChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsOutputReference(this, "item_colors");
  public get itemColors() {
    return this._itemColors;
  }
  public putItemColors(value: ChronicleDashboardChartDashboardChartVisualizationSeriesItemColors) {
    this._itemColors.internalValue = value;
  }
  public resetItemColors() {
    this._itemColors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemColorsInput() {
    return this._itemColors.internalValue;
  }

  // item_style - computed: false, optional: true, required: false
  private _itemStyle = new ChronicleDashboardChartDashboardChartVisualizationSeriesItemStyleOutputReference(this, "item_style");
  public get itemStyle() {
    return this._itemStyle;
  }
  public putItemStyle(value: ChronicleDashboardChartDashboardChartVisualizationSeriesItemStyle) {
    this._itemStyle.internalValue = value;
  }
  public resetItemStyle() {
    this._itemStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemStyleInput() {
    return this._itemStyle.internalValue;
  }

  // metric_trend_config - computed: false, optional: true, required: false
  private _metricTrendConfig = new ChronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfigOutputReference(this, "metric_trend_config");
  public get metricTrendConfig() {
    return this._metricTrendConfig;
  }
  public putMetricTrendConfig(value: ChronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfig) {
    this._metricTrendConfig.internalValue = value;
  }
  public resetMetricTrendConfig() {
    this._metricTrendConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTrendConfigInput() {
    return this._metricTrendConfig.internalValue;
  }
}

export class ChronicleDashboardChartDashboardChartVisualizationSeriesList extends cdktn.ComplexList {
  public internalValue? : ChronicleDashboardChartDashboardChartVisualizationSeries[] | cdktn.IResolvable

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
  public get(index: number): ChronicleDashboardChartDashboardChartVisualizationSeriesOutputReference {
    return new ChronicleDashboardChartDashboardChartVisualizationSeriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettings {
  /**
  *  Possible values: ["RENDER_TYPE_UNSPECIFIED", "RENDER_TYPE_TEXT", "RENDER_TYPE_ICON", "RENDER_TYPE_ICON_AND_TEXT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#column_render_type ChronicleDashboardChart#column_render_type}
  */
  readonly columnRenderType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#field ChronicleDashboardChart#field}
  */
  readonly field?: string;
}

export function chronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettingsToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_render_type: cdktn.stringToTerraform(struct!.columnRenderType),
    field: cdktn.stringToTerraform(struct!.field),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettingsToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_render_type: {
      value: cdktn.stringToHclTerraform(struct!.columnRenderType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnRenderType !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnRenderType = this._columnRenderType;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnRenderType = undefined;
      this._field = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnRenderType = value.columnRenderType;
      this._field = value.field;
    }
  }

  // column_render_type - computed: false, optional: true, required: false
  private _columnRenderType?: string; 
  public get columnRenderType() {
    return this.getStringAttribute('column_render_type');
  }
  public set columnRenderType(value: string) {
    this._columnRenderType = value;
  }
  public resetColumnRenderType() {
    this._columnRenderType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnRenderTypeInput() {
    return this._columnRenderType;
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }
}

export class ChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettingsList extends cdktn.ComplexList {
  public internalValue? : ChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettings[] | cdktn.IResolvable

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
  public get(index: number): ChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettingsOutputReference {
    return new ChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#cell_tooltip_text ChronicleDashboardChart#cell_tooltip_text}
  */
  readonly cellTooltipText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#field ChronicleDashboardChart#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#header_tooltip_text ChronicleDashboardChart#header_tooltip_text}
  */
  readonly headerTooltipText?: string;
}

export function chronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettingsToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cell_tooltip_text: cdktn.stringToTerraform(struct!.cellTooltipText),
    field: cdktn.stringToTerraform(struct!.field),
    header_tooltip_text: cdktn.stringToTerraform(struct!.headerTooltipText),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettingsToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cell_tooltip_text: {
      value: cdktn.stringToHclTerraform(struct!.cellTooltipText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_tooltip_text: {
      value: cdktn.stringToHclTerraform(struct!.headerTooltipText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cellTooltipText !== undefined) {
      hasAnyValues = true;
      internalValueResult.cellTooltipText = this._cellTooltipText;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._headerTooltipText !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerTooltipText = this._headerTooltipText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cellTooltipText = undefined;
      this._field = undefined;
      this._headerTooltipText = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cellTooltipText = value.cellTooltipText;
      this._field = value.field;
      this._headerTooltipText = value.headerTooltipText;
    }
  }

  // cell_tooltip_text - computed: false, optional: true, required: false
  private _cellTooltipText?: string; 
  public get cellTooltipText() {
    return this.getStringAttribute('cell_tooltip_text');
  }
  public set cellTooltipText(value: string) {
    this._cellTooltipText = value;
  }
  public resetCellTooltipText() {
    this._cellTooltipText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellTooltipTextInput() {
    return this._cellTooltipText;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // header_tooltip_text - computed: false, optional: true, required: false
  private _headerTooltipText?: string; 
  public get headerTooltipText() {
    return this.getStringAttribute('header_tooltip_text');
  }
  public set headerTooltipText(value: string) {
    this._headerTooltipText = value;
  }
  public resetHeaderTooltipText() {
    this._headerTooltipText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerTooltipTextInput() {
    return this._headerTooltipText;
  }
}

export class ChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettingsList extends cdktn.ComplexList {
  public internalValue? : ChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettings[] | cdktn.IResolvable

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
  public get(index: number): ChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettingsOutputReference {
    return new ChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationTableConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#enable_text_wrap ChronicleDashboardChart#enable_text_wrap}
  */
  readonly enableTextWrap?: boolean | cdktn.IResolvable;
  /**
  * column_render_type_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#column_render_type_settings ChronicleDashboardChart#column_render_type_settings}
  */
  readonly columnRenderTypeSettings?: ChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettings[] | cdktn.IResolvable;
  /**
  * column_tooltip_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#column_tooltip_settings ChronicleDashboardChart#column_tooltip_settings}
  */
  readonly columnTooltipSettings?: ChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettings[] | cdktn.IResolvable;
}

export function chronicleDashboardChartDashboardChartVisualizationTableConfigToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationTableConfigOutputReference | ChronicleDashboardChartDashboardChartVisualizationTableConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_text_wrap: cdktn.booleanToTerraform(struct!.enableTextWrap),
    column_render_type_settings: cdktn.listMapper(chronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettingsToTerraform, true)(struct!.columnRenderTypeSettings),
    column_tooltip_settings: cdktn.listMapper(chronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettingsToTerraform, true)(struct!.columnTooltipSettings),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationTableConfigToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationTableConfigOutputReference | ChronicleDashboardChartDashboardChartVisualizationTableConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_text_wrap: {
      value: cdktn.booleanToHclTerraform(struct!.enableTextWrap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    column_render_type_settings: {
      value: cdktn.listMapperHcl(chronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettingsToHclTerraform, true)(struct!.columnRenderTypeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettingsList",
    },
    column_tooltip_settings: {
      value: cdktn.listMapperHcl(chronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettingsToHclTerraform, true)(struct!.columnTooltipSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationTableConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationTableConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableTextWrap !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTextWrap = this._enableTextWrap;
    }
    if (this._columnRenderTypeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnRenderTypeSettings = this._columnRenderTypeSettings?.internalValue;
    }
    if (this._columnTooltipSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnTooltipSettings = this._columnTooltipSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationTableConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableTextWrap = undefined;
      this._columnRenderTypeSettings.internalValue = undefined;
      this._columnTooltipSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableTextWrap = value.enableTextWrap;
      this._columnRenderTypeSettings.internalValue = value.columnRenderTypeSettings;
      this._columnTooltipSettings.internalValue = value.columnTooltipSettings;
    }
  }

  // enable_text_wrap - computed: false, optional: true, required: false
  private _enableTextWrap?: boolean | cdktn.IResolvable; 
  public get enableTextWrap() {
    return this.getBooleanAttribute('enable_text_wrap');
  }
  public set enableTextWrap(value: boolean | cdktn.IResolvable) {
    this._enableTextWrap = value;
  }
  public resetEnableTextWrap() {
    this._enableTextWrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTextWrapInput() {
    return this._enableTextWrap;
  }

  // column_render_type_settings - computed: false, optional: true, required: false
  private _columnRenderTypeSettings = new ChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettingsList(this, "column_render_type_settings", false);
  public get columnRenderTypeSettings() {
    return this._columnRenderTypeSettings;
  }
  public putColumnRenderTypeSettings(value: ChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettings[] | cdktn.IResolvable) {
    this._columnRenderTypeSettings.internalValue = value;
  }
  public resetColumnRenderTypeSettings() {
    this._columnRenderTypeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnRenderTypeSettingsInput() {
    return this._columnRenderTypeSettings.internalValue;
  }

  // column_tooltip_settings - computed: false, optional: true, required: false
  private _columnTooltipSettings = new ChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettingsList(this, "column_tooltip_settings", false);
  public get columnTooltipSettings() {
    return this._columnTooltipSettings;
  }
  public putColumnTooltipSettings(value: ChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettings[] | cdktn.IResolvable) {
    this._columnTooltipSettings.internalValue = value;
  }
  public resetColumnTooltipSettings() {
    this._columnTooltipSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnTooltipSettingsInput() {
    return this._columnTooltipSettings.internalValue;
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationTooltip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#show ChronicleDashboardChart#show}
  */
  readonly show?: boolean | cdktn.IResolvable;
  /**
  *  Possible values: ["TOOLTIP_TRIGGER_UNSPECIFIED", "TOOLTIP_TRIGGER_NONE", "TOOLTIP_TRIGGER_ITEM", "TOOLTIP_TRIGGER_AXIS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#tooltip_trigger ChronicleDashboardChart#tooltip_trigger}
  */
  readonly tooltipTrigger?: string;
}

export function chronicleDashboardChartDashboardChartVisualizationTooltipToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationTooltipOutputReference | ChronicleDashboardChartDashboardChartVisualizationTooltip): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    show: cdktn.booleanToTerraform(struct!.show),
    tooltip_trigger: cdktn.stringToTerraform(struct!.tooltipTrigger),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationTooltipToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationTooltipOutputReference | ChronicleDashboardChartDashboardChartVisualizationTooltip): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    show: {
      value: cdktn.booleanToHclTerraform(struct!.show),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tooltip_trigger: {
      value: cdktn.stringToHclTerraform(struct!.tooltipTrigger),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationTooltipOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationTooltip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._show !== undefined) {
      hasAnyValues = true;
      internalValueResult.show = this._show;
    }
    if (this._tooltipTrigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooltipTrigger = this._tooltipTrigger;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationTooltip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._show = undefined;
      this._tooltipTrigger = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._show = value.show;
      this._tooltipTrigger = value.tooltipTrigger;
    }
  }

  // show - computed: false, optional: true, required: false
  private _show?: boolean | cdktn.IResolvable; 
  public get show() {
    return this.getBooleanAttribute('show');
  }
  public set show(value: boolean | cdktn.IResolvable) {
    this._show = value;
  }
  public resetShow() {
    this._show = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInput() {
    return this._show;
  }

  // tooltip_trigger - computed: false, optional: true, required: false
  private _tooltipTrigger?: string; 
  public get tooltipTrigger() {
    return this.getStringAttribute('tooltip_trigger');
  }
  public set tooltipTrigger(value: string) {
    this._tooltipTrigger = value;
  }
  public resetTooltipTrigger() {
    this._tooltipTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooltipTriggerInput() {
    return this._tooltipTrigger;
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationVisualMapsPieces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#color ChronicleDashboardChart#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#label ChronicleDashboardChart#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#max ChronicleDashboardChart#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#min ChronicleDashboardChart#min}
  */
  readonly min?: number;
}

export function chronicleDashboardChartDashboardChartVisualizationVisualMapsPiecesToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationVisualMapsPieces | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    label: cdktn.stringToTerraform(struct!.label),
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationVisualMapsPiecesToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationVisualMapsPieces | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max: {
      value: cdktn.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktn.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationVisualMapsPiecesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationVisualMapsPieces | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationVisualMapsPieces | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._label = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._label = value.label;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}

export class ChronicleDashboardChartDashboardChartVisualizationVisualMapsPiecesList extends cdktn.ComplexList {
  public internalValue? : ChronicleDashboardChartDashboardChartVisualizationVisualMapsPieces[] | cdktn.IResolvable

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
  public get(index: number): ChronicleDashboardChartDashboardChartVisualizationVisualMapsPiecesOutputReference {
    return new ChronicleDashboardChartDashboardChartVisualizationVisualMapsPiecesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationVisualMaps {
  /**
  *  Possible values: ["VISUAL_MAP_TYPE_UNSPECIFIED", "CONTINUOUS", "PIECEWISE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#visual_map_type ChronicleDashboardChart#visual_map_type}
  */
  readonly visualMapType?: string;
  /**
  * pieces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#pieces ChronicleDashboardChart#pieces}
  */
  readonly pieces?: ChronicleDashboardChartDashboardChartVisualizationVisualMapsPieces[] | cdktn.IResolvable;
}

export function chronicleDashboardChartDashboardChartVisualizationVisualMapsToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationVisualMaps | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    visual_map_type: cdktn.stringToTerraform(struct!.visualMapType),
    pieces: cdktn.listMapper(chronicleDashboardChartDashboardChartVisualizationVisualMapsPiecesToTerraform, true)(struct!.pieces),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationVisualMapsToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationVisualMaps | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    visual_map_type: {
      value: cdktn.stringToHclTerraform(struct!.visualMapType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pieces: {
      value: cdktn.listMapperHcl(chronicleDashboardChartDashboardChartVisualizationVisualMapsPiecesToHclTerraform, true)(struct!.pieces),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationVisualMapsPiecesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationVisualMapsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationVisualMaps | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visualMapType !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualMapType = this._visualMapType;
    }
    if (this._pieces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pieces = this._pieces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationVisualMaps | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._visualMapType = undefined;
      this._pieces.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._visualMapType = value.visualMapType;
      this._pieces.internalValue = value.pieces;
    }
  }

  // visual_map_type - computed: false, optional: true, required: false
  private _visualMapType?: string; 
  public get visualMapType() {
    return this.getStringAttribute('visual_map_type');
  }
  public set visualMapType(value: string) {
    this._visualMapType = value;
  }
  public resetVisualMapType() {
    this._visualMapType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualMapTypeInput() {
    return this._visualMapType;
  }

  // pieces - computed: false, optional: true, required: false
  private _pieces = new ChronicleDashboardChartDashboardChartVisualizationVisualMapsPiecesList(this, "pieces", false);
  public get pieces() {
    return this._pieces;
  }
  public putPieces(value: ChronicleDashboardChartDashboardChartVisualizationVisualMapsPieces[] | cdktn.IResolvable) {
    this._pieces.internalValue = value;
  }
  public resetPieces() {
    this._pieces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piecesInput() {
    return this._pieces.internalValue;
  }
}

export class ChronicleDashboardChartDashboardChartVisualizationVisualMapsList extends cdktn.ComplexList {
  public internalValue? : ChronicleDashboardChartDashboardChartVisualizationVisualMaps[] | cdktn.IResolvable

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
  public get(index: number): ChronicleDashboardChartDashboardChartVisualizationVisualMapsOutputReference {
    return new ChronicleDashboardChartDashboardChartVisualizationVisualMapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationXAxes {
  /**
  *  Possible values: ["VALUE", "CATEGORY", "TIME", "LOG"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#axis_type ChronicleDashboardChart#axis_type}
  */
  readonly axisType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#display_name ChronicleDashboardChart#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#max ChronicleDashboardChart#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#min ChronicleDashboardChart#min}
  */
  readonly min?: number;
}

export function chronicleDashboardChartDashboardChartVisualizationXAxesToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationXAxes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    axis_type: cdktn.stringToTerraform(struct!.axisType),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationXAxesToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationXAxes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    axis_type: {
      value: cdktn.stringToHclTerraform(struct!.axisType),
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
    max: {
      value: cdktn.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktn.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationXAxesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationXAxes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._axisType !== undefined) {
      hasAnyValues = true;
      internalValueResult.axisType = this._axisType;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationXAxes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._axisType = undefined;
      this._displayName = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._axisType = value.axisType;
      this._displayName = value.displayName;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // axis_type - computed: false, optional: true, required: false
  private _axisType?: string; 
  public get axisType() {
    return this.getStringAttribute('axis_type');
  }
  public set axisType(value: string) {
    this._axisType = value;
  }
  public resetAxisType() {
    this._axisType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axisTypeInput() {
    return this._axisType;
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

  // max - computed: true, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: true, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}

export class ChronicleDashboardChartDashboardChartVisualizationXAxesList extends cdktn.ComplexList {
  public internalValue? : ChronicleDashboardChartDashboardChartVisualizationXAxes[] | cdktn.IResolvable

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
  public get(index: number): ChronicleDashboardChartDashboardChartVisualizationXAxesOutputReference {
    return new ChronicleDashboardChartDashboardChartVisualizationXAxesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleDashboardChartDashboardChartVisualizationYAxes {
  /**
  *  Possible values: ["VALUE", "CATEGORY", "TIME", "LOG"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#axis_type ChronicleDashboardChart#axis_type}
  */
  readonly axisType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#display_name ChronicleDashboardChart#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#max ChronicleDashboardChart#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#min ChronicleDashboardChart#min}
  */
  readonly min?: number;
}

export function chronicleDashboardChartDashboardChartVisualizationYAxesToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationYAxes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    axis_type: cdktn.stringToTerraform(struct!.axisType),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationYAxesToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationYAxes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    axis_type: {
      value: cdktn.stringToHclTerraform(struct!.axisType),
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
    max: {
      value: cdktn.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktn.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationYAxesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualizationYAxes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._axisType !== undefined) {
      hasAnyValues = true;
      internalValueResult.axisType = this._axisType;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualizationYAxes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._axisType = undefined;
      this._displayName = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._axisType = value.axisType;
      this._displayName = value.displayName;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // axis_type - computed: false, optional: true, required: false
  private _axisType?: string; 
  public get axisType() {
    return this.getStringAttribute('axis_type');
  }
  public set axisType(value: string) {
    this._axisType = value;
  }
  public resetAxisType() {
    this._axisType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axisTypeInput() {
    return this._axisType;
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

  // max - computed: true, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: true, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}

export class ChronicleDashboardChartDashboardChartVisualizationYAxesList extends cdktn.ComplexList {
  public internalValue? : ChronicleDashboardChartDashboardChartVisualizationYAxes[] | cdktn.IResolvable

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
  public get(index: number): ChronicleDashboardChartDashboardChartVisualizationYAxesOutputReference {
    return new ChronicleDashboardChartDashboardChartVisualizationYAxesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleDashboardChartDashboardChartVisualization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#grouping_type ChronicleDashboardChart#grouping_type}
  */
  readonly groupingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#series_column ChronicleDashboardChart#series_column}
  */
  readonly seriesColumn?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#threshold_coloring_enabled ChronicleDashboardChart#threshold_coloring_enabled}
  */
  readonly thresholdColoringEnabled?: boolean | cdktn.IResolvable;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#button ChronicleDashboardChart#button}
  */
  readonly button?: ChronicleDashboardChartDashboardChartVisualizationButton;
  /**
  * column_defs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#column_defs ChronicleDashboardChart#column_defs}
  */
  readonly columnDefs?: ChronicleDashboardChartDashboardChartVisualizationColumnDefs[] | cdktn.IResolvable;
  /**
  * google_maps_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#google_maps_config ChronicleDashboardChart#google_maps_config}
  */
  readonly googleMapsConfig?: ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfig;
  /**
  * legends block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#legends ChronicleDashboardChart#legends}
  */
  readonly legends?: ChronicleDashboardChartDashboardChartVisualizationLegends[] | cdktn.IResolvable;
  /**
  * markdown block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#markdown ChronicleDashboardChart#markdown}
  */
  readonly markdown?: ChronicleDashboardChartDashboardChartVisualizationMarkdown;
  /**
  * series block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#series ChronicleDashboardChart#series}
  */
  readonly series?: ChronicleDashboardChartDashboardChartVisualizationSeries[] | cdktn.IResolvable;
  /**
  * table_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#table_config ChronicleDashboardChart#table_config}
  */
  readonly tableConfig?: ChronicleDashboardChartDashboardChartVisualizationTableConfig;
  /**
  * tooltip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#tooltip ChronicleDashboardChart#tooltip}
  */
  readonly tooltip?: ChronicleDashboardChartDashboardChartVisualizationTooltip;
  /**
  * visual_maps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#visual_maps ChronicleDashboardChart#visual_maps}
  */
  readonly visualMaps?: ChronicleDashboardChartDashboardChartVisualizationVisualMaps[] | cdktn.IResolvable;
  /**
  * x_axes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#x_axes ChronicleDashboardChart#x_axes}
  */
  readonly xAxes?: ChronicleDashboardChartDashboardChartVisualizationXAxes[] | cdktn.IResolvable;
  /**
  * y_axes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#y_axes ChronicleDashboardChart#y_axes}
  */
  readonly yAxes?: ChronicleDashboardChartDashboardChartVisualizationYAxes[] | cdktn.IResolvable;
}

export function chronicleDashboardChartDashboardChartVisualizationToTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationOutputReference | ChronicleDashboardChartDashboardChartVisualization): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    grouping_type: cdktn.stringToTerraform(struct!.groupingType),
    series_column: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.seriesColumn),
    threshold_coloring_enabled: cdktn.booleanToTerraform(struct!.thresholdColoringEnabled),
    button: chronicleDashboardChartDashboardChartVisualizationButtonToTerraform(struct!.button),
    column_defs: cdktn.listMapper(chronicleDashboardChartDashboardChartVisualizationColumnDefsToTerraform, true)(struct!.columnDefs),
    google_maps_config: chronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigToTerraform(struct!.googleMapsConfig),
    legends: cdktn.listMapper(chronicleDashboardChartDashboardChartVisualizationLegendsToTerraform, true)(struct!.legends),
    markdown: chronicleDashboardChartDashboardChartVisualizationMarkdownToTerraform(struct!.markdown),
    series: cdktn.listMapper(chronicleDashboardChartDashboardChartVisualizationSeriesToTerraform, true)(struct!.series),
    table_config: chronicleDashboardChartDashboardChartVisualizationTableConfigToTerraform(struct!.tableConfig),
    tooltip: chronicleDashboardChartDashboardChartVisualizationTooltipToTerraform(struct!.tooltip),
    visual_maps: cdktn.listMapper(chronicleDashboardChartDashboardChartVisualizationVisualMapsToTerraform, true)(struct!.visualMaps),
    x_axes: cdktn.listMapper(chronicleDashboardChartDashboardChartVisualizationXAxesToTerraform, true)(struct!.xAxes),
    y_axes: cdktn.listMapper(chronicleDashboardChartDashboardChartVisualizationYAxesToTerraform, true)(struct!.yAxes),
  }
}


export function chronicleDashboardChartDashboardChartVisualizationToHclTerraform(struct?: ChronicleDashboardChartDashboardChartVisualizationOutputReference | ChronicleDashboardChartDashboardChartVisualization): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    grouping_type: {
      value: cdktn.stringToHclTerraform(struct!.groupingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_column: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.seriesColumn),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    threshold_coloring_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.thresholdColoringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    button: {
      value: chronicleDashboardChartDashboardChartVisualizationButtonToHclTerraform(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationButtonList",
    },
    column_defs: {
      value: cdktn.listMapperHcl(chronicleDashboardChartDashboardChartVisualizationColumnDefsToHclTerraform, true)(struct!.columnDefs),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationColumnDefsList",
    },
    google_maps_config: {
      value: chronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigToHclTerraform(struct!.googleMapsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigList",
    },
    legends: {
      value: cdktn.listMapperHcl(chronicleDashboardChartDashboardChartVisualizationLegendsToHclTerraform, true)(struct!.legends),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationLegendsList",
    },
    markdown: {
      value: chronicleDashboardChartDashboardChartVisualizationMarkdownToHclTerraform(struct!.markdown),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationMarkdownList",
    },
    series: {
      value: cdktn.listMapperHcl(chronicleDashboardChartDashboardChartVisualizationSeriesToHclTerraform, true)(struct!.series),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationSeriesList",
    },
    table_config: {
      value: chronicleDashboardChartDashboardChartVisualizationTableConfigToHclTerraform(struct!.tableConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationTableConfigList",
    },
    tooltip: {
      value: chronicleDashboardChartDashboardChartVisualizationTooltipToHclTerraform(struct!.tooltip),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationTooltipList",
    },
    visual_maps: {
      value: cdktn.listMapperHcl(chronicleDashboardChartDashboardChartVisualizationVisualMapsToHclTerraform, true)(struct!.visualMaps),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationVisualMapsList",
    },
    x_axes: {
      value: cdktn.listMapperHcl(chronicleDashboardChartDashboardChartVisualizationXAxesToHclTerraform, true)(struct!.xAxes),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationXAxesList",
    },
    y_axes: {
      value: cdktn.listMapperHcl(chronicleDashboardChartDashboardChartVisualizationYAxesToHclTerraform, true)(struct!.yAxes),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationYAxesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartVisualizationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChartVisualization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupingType = this._groupingType;
    }
    if (this._seriesColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesColumn = this._seriesColumn;
    }
    if (this._thresholdColoringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdColoringEnabled = this._thresholdColoringEnabled;
    }
    if (this._button?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.button = this._button?.internalValue;
    }
    if (this._columnDefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnDefs = this._columnDefs?.internalValue;
    }
    if (this._googleMapsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleMapsConfig = this._googleMapsConfig?.internalValue;
    }
    if (this._legends?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.legends = this._legends?.internalValue;
    }
    if (this._markdown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.markdown = this._markdown?.internalValue;
    }
    if (this._series?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.series = this._series?.internalValue;
    }
    if (this._tableConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableConfig = this._tableConfig?.internalValue;
    }
    if (this._tooltip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooltip = this._tooltip?.internalValue;
    }
    if (this._visualMaps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualMaps = this._visualMaps?.internalValue;
    }
    if (this._xAxes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xAxes = this._xAxes?.internalValue;
    }
    if (this._yAxes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxes = this._yAxes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChartVisualization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupingType = undefined;
      this._seriesColumn = undefined;
      this._thresholdColoringEnabled = undefined;
      this._button.internalValue = undefined;
      this._columnDefs.internalValue = undefined;
      this._googleMapsConfig.internalValue = undefined;
      this._legends.internalValue = undefined;
      this._markdown.internalValue = undefined;
      this._series.internalValue = undefined;
      this._tableConfig.internalValue = undefined;
      this._tooltip.internalValue = undefined;
      this._visualMaps.internalValue = undefined;
      this._xAxes.internalValue = undefined;
      this._yAxes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupingType = value.groupingType;
      this._seriesColumn = value.seriesColumn;
      this._thresholdColoringEnabled = value.thresholdColoringEnabled;
      this._button.internalValue = value.button;
      this._columnDefs.internalValue = value.columnDefs;
      this._googleMapsConfig.internalValue = value.googleMapsConfig;
      this._legends.internalValue = value.legends;
      this._markdown.internalValue = value.markdown;
      this._series.internalValue = value.series;
      this._tableConfig.internalValue = value.tableConfig;
      this._tooltip.internalValue = value.tooltip;
      this._visualMaps.internalValue = value.visualMaps;
      this._xAxes.internalValue = value.xAxes;
      this._yAxes.internalValue = value.yAxes;
    }
  }

  // grouping_type - computed: false, optional: true, required: false
  private _groupingType?: string; 
  public get groupingType() {
    return this.getStringAttribute('grouping_type');
  }
  public set groupingType(value: string) {
    this._groupingType = value;
  }
  public resetGroupingType() {
    this._groupingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupingTypeInput() {
    return this._groupingType;
  }

  // series_column - computed: false, optional: true, required: false
  private _seriesColumn?: string[]; 
  public get seriesColumn() {
    return this.getListAttribute('series_column');
  }
  public set seriesColumn(value: string[]) {
    this._seriesColumn = value;
  }
  public resetSeriesColumn() {
    this._seriesColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesColumnInput() {
    return this._seriesColumn;
  }

  // threshold_coloring_enabled - computed: false, optional: true, required: false
  private _thresholdColoringEnabled?: boolean | cdktn.IResolvable; 
  public get thresholdColoringEnabled() {
    return this.getBooleanAttribute('threshold_coloring_enabled');
  }
  public set thresholdColoringEnabled(value: boolean | cdktn.IResolvable) {
    this._thresholdColoringEnabled = value;
  }
  public resetThresholdColoringEnabled() {
    this._thresholdColoringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdColoringEnabledInput() {
    return this._thresholdColoringEnabled;
  }

  // button - computed: false, optional: true, required: false
  private _button = new ChronicleDashboardChartDashboardChartVisualizationButtonOutputReference(this, "button");
  public get button() {
    return this._button;
  }
  public putButton(value: ChronicleDashboardChartDashboardChartVisualizationButton) {
    this._button.internalValue = value;
  }
  public resetButton() {
    this._button.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonInput() {
    return this._button.internalValue;
  }

  // column_defs - computed: false, optional: true, required: false
  private _columnDefs = new ChronicleDashboardChartDashboardChartVisualizationColumnDefsList(this, "column_defs", false);
  public get columnDefs() {
    return this._columnDefs;
  }
  public putColumnDefs(value: ChronicleDashboardChartDashboardChartVisualizationColumnDefs[] | cdktn.IResolvable) {
    this._columnDefs.internalValue = value;
  }
  public resetColumnDefs() {
    this._columnDefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnDefsInput() {
    return this._columnDefs.internalValue;
  }

  // google_maps_config - computed: false, optional: true, required: false
  private _googleMapsConfig = new ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigOutputReference(this, "google_maps_config");
  public get googleMapsConfig() {
    return this._googleMapsConfig;
  }
  public putGoogleMapsConfig(value: ChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfig) {
    this._googleMapsConfig.internalValue = value;
  }
  public resetGoogleMapsConfig() {
    this._googleMapsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleMapsConfigInput() {
    return this._googleMapsConfig.internalValue;
  }

  // legends - computed: false, optional: true, required: false
  private _legends = new ChronicleDashboardChartDashboardChartVisualizationLegendsList(this, "legends", false);
  public get legends() {
    return this._legends;
  }
  public putLegends(value: ChronicleDashboardChartDashboardChartVisualizationLegends[] | cdktn.IResolvable) {
    this._legends.internalValue = value;
  }
  public resetLegends() {
    this._legends.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendsInput() {
    return this._legends.internalValue;
  }

  // markdown - computed: false, optional: true, required: false
  private _markdown = new ChronicleDashboardChartDashboardChartVisualizationMarkdownOutputReference(this, "markdown");
  public get markdown() {
    return this._markdown;
  }
  public putMarkdown(value: ChronicleDashboardChartDashboardChartVisualizationMarkdown) {
    this._markdown.internalValue = value;
  }
  public resetMarkdown() {
    this._markdown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markdownInput() {
    return this._markdown.internalValue;
  }

  // series - computed: false, optional: true, required: false
  private _series = new ChronicleDashboardChartDashboardChartVisualizationSeriesList(this, "series", false);
  public get series() {
    return this._series;
  }
  public putSeries(value: ChronicleDashboardChartDashboardChartVisualizationSeries[] | cdktn.IResolvable) {
    this._series.internalValue = value;
  }
  public resetSeries() {
    this._series.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesInput() {
    return this._series.internalValue;
  }

  // table_config - computed: false, optional: true, required: false
  private _tableConfig = new ChronicleDashboardChartDashboardChartVisualizationTableConfigOutputReference(this, "table_config");
  public get tableConfig() {
    return this._tableConfig;
  }
  public putTableConfig(value: ChronicleDashboardChartDashboardChartVisualizationTableConfig) {
    this._tableConfig.internalValue = value;
  }
  public resetTableConfig() {
    this._tableConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableConfigInput() {
    return this._tableConfig.internalValue;
  }

  // tooltip - computed: false, optional: true, required: false
  private _tooltip = new ChronicleDashboardChartDashboardChartVisualizationTooltipOutputReference(this, "tooltip");
  public get tooltip() {
    return this._tooltip;
  }
  public putTooltip(value: ChronicleDashboardChartDashboardChartVisualizationTooltip) {
    this._tooltip.internalValue = value;
  }
  public resetTooltip() {
    this._tooltip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooltipInput() {
    return this._tooltip.internalValue;
  }

  // visual_maps - computed: false, optional: true, required: false
  private _visualMaps = new ChronicleDashboardChartDashboardChartVisualizationVisualMapsList(this, "visual_maps", false);
  public get visualMaps() {
    return this._visualMaps;
  }
  public putVisualMaps(value: ChronicleDashboardChartDashboardChartVisualizationVisualMaps[] | cdktn.IResolvable) {
    this._visualMaps.internalValue = value;
  }
  public resetVisualMaps() {
    this._visualMaps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualMapsInput() {
    return this._visualMaps.internalValue;
  }

  // x_axes - computed: false, optional: true, required: false
  private _xAxes = new ChronicleDashboardChartDashboardChartVisualizationXAxesList(this, "x_axes", false);
  public get xAxes() {
    return this._xAxes;
  }
  public putXAxes(value: ChronicleDashboardChartDashboardChartVisualizationXAxes[] | cdktn.IResolvable) {
    this._xAxes.internalValue = value;
  }
  public resetXAxes() {
    this._xAxes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xAxesInput() {
    return this._xAxes.internalValue;
  }

  // y_axes - computed: false, optional: true, required: false
  private _yAxes = new ChronicleDashboardChartDashboardChartVisualizationYAxesList(this, "y_axes", false);
  public get yAxes() {
    return this._yAxes;
  }
  public putYAxes(value: ChronicleDashboardChartDashboardChartVisualizationYAxes[] | cdktn.IResolvable) {
    this._yAxes.internalValue = value;
  }
  public resetYAxes() {
    this._yAxes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxesInput() {
    return this._yAxes.internalValue;
  }
}
export interface ChronicleDashboardChartDashboardChart {
  /**
  * Description of the dashboardChart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#description ChronicleDashboardChart#description}
  */
  readonly description?: string;
  /**
  * Display name/Title of the dashboardChart visible to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#display_name ChronicleDashboardChart#display_name}
  */
  readonly displayName: string;
  /**
  * Type of tile (e.g., visualization, button, markdown). Possible values: ["TILE_TYPE_UNSPECIFIED", "TILE_TYPE_VISUALIZATION", "TILE_TYPE_BUTTON", "TILE_TYPE_MARKDOWN"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#tile_type ChronicleDashboardChart#tile_type}
  */
  readonly tileType?: string;
  /**
  * chart_datasource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#chart_datasource ChronicleDashboardChart#chart_datasource}
  */
  readonly chartDatasource?: ChronicleDashboardChartDashboardChartChartDatasource;
  /**
  * drill_down_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#drill_down_config ChronicleDashboardChart#drill_down_config}
  */
  readonly drillDownConfig?: ChronicleDashboardChartDashboardChartDrillDownConfig;
  /**
  * visualization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#visualization ChronicleDashboardChart#visualization}
  */
  readonly visualization: ChronicleDashboardChartDashboardChartVisualization;
}

export function chronicleDashboardChartDashboardChartToTerraform(struct?: ChronicleDashboardChartDashboardChartOutputReference | ChronicleDashboardChartDashboardChart): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    tile_type: cdktn.stringToTerraform(struct!.tileType),
    chart_datasource: chronicleDashboardChartDashboardChartChartDatasourceToTerraform(struct!.chartDatasource),
    drill_down_config: chronicleDashboardChartDashboardChartDrillDownConfigToTerraform(struct!.drillDownConfig),
    visualization: chronicleDashboardChartDashboardChartVisualizationToTerraform(struct!.visualization),
  }
}


export function chronicleDashboardChartDashboardChartToHclTerraform(struct?: ChronicleDashboardChartDashboardChartOutputReference | ChronicleDashboardChartDashboardChart): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
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
    tile_type: {
      value: cdktn.stringToHclTerraform(struct!.tileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chart_datasource: {
      value: chronicleDashboardChartDashboardChartChartDatasourceToHclTerraform(struct!.chartDatasource),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartChartDatasourceList",
    },
    drill_down_config: {
      value: chronicleDashboardChartDashboardChartDrillDownConfigToHclTerraform(struct!.drillDownConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartDrillDownConfigList",
    },
    visualization: {
      value: chronicleDashboardChartDashboardChartVisualizationToHclTerraform(struct!.visualization),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardChartVisualizationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardChartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardChart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._tileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tileType = this._tileType;
    }
    if (this._chartDatasource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartDatasource = this._chartDatasource?.internalValue;
    }
    if (this._drillDownConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drillDownConfig = this._drillDownConfig?.internalValue;
    }
    if (this._visualization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualization = this._visualization?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardChart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayName = undefined;
      this._tileType = undefined;
      this._chartDatasource.internalValue = undefined;
      this._drillDownConfig.internalValue = undefined;
      this._visualization.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayName = value.displayName;
      this._tileType = value.tileType;
      this._chartDatasource.internalValue = value.chartDatasource;
      this._drillDownConfig.internalValue = value.drillDownConfig;
      this._visualization.internalValue = value.visualization;
    }
  }

  // description - computed: true, optional: true, required: false
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tile_type - computed: false, optional: true, required: false
  private _tileType?: string; 
  public get tileType() {
    return this.getStringAttribute('tile_type');
  }
  public set tileType(value: string) {
    this._tileType = value;
  }
  public resetTileType() {
    this._tileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tileTypeInput() {
    return this._tileType;
  }

  // chart_datasource - computed: false, optional: true, required: false
  private _chartDatasource = new ChronicleDashboardChartDashboardChartChartDatasourceOutputReference(this, "chart_datasource");
  public get chartDatasource() {
    return this._chartDatasource;
  }
  public putChartDatasource(value: ChronicleDashboardChartDashboardChartChartDatasource) {
    this._chartDatasource.internalValue = value;
  }
  public resetChartDatasource() {
    this._chartDatasource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartDatasourceInput() {
    return this._chartDatasource.internalValue;
  }

  // drill_down_config - computed: false, optional: true, required: false
  private _drillDownConfig = new ChronicleDashboardChartDashboardChartDrillDownConfigOutputReference(this, "drill_down_config");
  public get drillDownConfig() {
    return this._drillDownConfig;
  }
  public putDrillDownConfig(value: ChronicleDashboardChartDashboardChartDrillDownConfig) {
    this._drillDownConfig.internalValue = value;
  }
  public resetDrillDownConfig() {
    this._drillDownConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drillDownConfigInput() {
    return this._drillDownConfig.internalValue;
  }

  // visualization - computed: false, optional: false, required: true
  private _visualization = new ChronicleDashboardChartDashboardChartVisualizationOutputReference(this, "visualization");
  public get visualization() {
    return this._visualization;
  }
  public putVisualization(value: ChronicleDashboardChartDashboardChartVisualization) {
    this._visualization.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationInput() {
    return this._visualization.internalValue;
  }
}
export interface ChronicleDashboardChartDashboardQueryInputRelativeTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#start_time_val ChronicleDashboardChart#start_time_val}
  */
  readonly startTimeVal: string;
  /**
  * The time unit for the relative range. Possible values: ["SECOND", "MINUTE", "HOUR", "DAY", "WEEK", "MONTH", "YEAR"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#time_unit ChronicleDashboardChart#time_unit}
  */
  readonly timeUnit: string;
}

export function chronicleDashboardChartDashboardQueryInputRelativeTimeToTerraform(struct?: ChronicleDashboardChartDashboardQueryInputRelativeTimeOutputReference | ChronicleDashboardChartDashboardQueryInputRelativeTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    start_time_val: cdktn.stringToTerraform(struct!.startTimeVal),
    time_unit: cdktn.stringToTerraform(struct!.timeUnit),
  }
}


export function chronicleDashboardChartDashboardQueryInputRelativeTimeToHclTerraform(struct?: ChronicleDashboardChartDashboardQueryInputRelativeTimeOutputReference | ChronicleDashboardChartDashboardQueryInputRelativeTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    start_time_val: {
      value: cdktn.stringToHclTerraform(struct!.startTimeVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_unit: {
      value: cdktn.stringToHclTerraform(struct!.timeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardQueryInputRelativeTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardQueryInputRelativeTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startTimeVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimeVal = this._startTimeVal;
    }
    if (this._timeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnit = this._timeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardQueryInputRelativeTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._startTimeVal = undefined;
      this._timeUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._startTimeVal = value.startTimeVal;
      this._timeUnit = value.timeUnit;
    }
  }

  // start_time_val - computed: false, optional: false, required: true
  private _startTimeVal?: string; 
  public get startTimeVal() {
    return this.getStringAttribute('start_time_val');
  }
  public set startTimeVal(value: string) {
    this._startTimeVal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeValInput() {
    return this._startTimeVal;
  }

  // time_unit - computed: false, optional: false, required: true
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }
}
export interface ChronicleDashboardChartDashboardQueryInputTimeWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#end_time ChronicleDashboardChart#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#start_time ChronicleDashboardChart#start_time}
  */
  readonly startTime?: string;
}

export function chronicleDashboardChartDashboardQueryInputTimeWindowToTerraform(struct?: ChronicleDashboardChartDashboardQueryInputTimeWindowOutputReference | ChronicleDashboardChartDashboardQueryInputTimeWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_time: cdktn.stringToTerraform(struct!.endTime),
    start_time: cdktn.stringToTerraform(struct!.startTime),
  }
}


export function chronicleDashboardChartDashboardQueryInputTimeWindowToHclTerraform(struct?: ChronicleDashboardChartDashboardQueryInputTimeWindowOutputReference | ChronicleDashboardChartDashboardQueryInputTimeWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_time: {
      value: cdktn.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktn.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardQueryInputTimeWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardQueryInputTimeWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardQueryInputTimeWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface ChronicleDashboardChartDashboardQueryInput {
  /**
  * relative_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#relative_time ChronicleDashboardChart#relative_time}
  */
  readonly relativeTime?: ChronicleDashboardChartDashboardQueryInputRelativeTime;
  /**
  * time_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#time_window ChronicleDashboardChart#time_window}
  */
  readonly timeWindow?: ChronicleDashboardChartDashboardQueryInputTimeWindow;
}

export function chronicleDashboardChartDashboardQueryInputToTerraform(struct?: ChronicleDashboardChartDashboardQueryInputOutputReference | ChronicleDashboardChartDashboardQueryInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    relative_time: chronicleDashboardChartDashboardQueryInputRelativeTimeToTerraform(struct!.relativeTime),
    time_window: chronicleDashboardChartDashboardQueryInputTimeWindowToTerraform(struct!.timeWindow),
  }
}


export function chronicleDashboardChartDashboardQueryInputToHclTerraform(struct?: ChronicleDashboardChartDashboardQueryInputOutputReference | ChronicleDashboardChartDashboardQueryInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    relative_time: {
      value: chronicleDashboardChartDashboardQueryInputRelativeTimeToHclTerraform(struct!.relativeTime),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardQueryInputRelativeTimeList",
    },
    time_window: {
      value: chronicleDashboardChartDashboardQueryInputTimeWindowToHclTerraform(struct!.timeWindow),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardQueryInputTimeWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardQueryInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardQueryInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relativeTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeTime = this._relativeTime?.internalValue;
    }
    if (this._timeWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardQueryInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relativeTime.internalValue = undefined;
      this._timeWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relativeTime.internalValue = value.relativeTime;
      this._timeWindow.internalValue = value.timeWindow;
    }
  }

  // relative_time - computed: false, optional: true, required: false
  private _relativeTime = new ChronicleDashboardChartDashboardQueryInputRelativeTimeOutputReference(this, "relative_time");
  public get relativeTime() {
    return this._relativeTime;
  }
  public putRelativeTime(value: ChronicleDashboardChartDashboardQueryInputRelativeTime) {
    this._relativeTime.internalValue = value;
  }
  public resetRelativeTime() {
    this._relativeTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeTimeInput() {
    return this._relativeTime.internalValue;
  }

  // time_window - computed: false, optional: true, required: false
  private _timeWindow = new ChronicleDashboardChartDashboardQueryInputTimeWindowOutputReference(this, "time_window");
  public get timeWindow() {
    return this._timeWindow;
  }
  public putTimeWindow(value: ChronicleDashboardChartDashboardQueryInputTimeWindow) {
    this._timeWindow.internalValue = value;
  }
  public resetTimeWindow() {
    this._timeWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow.internalValue;
  }
}
export interface ChronicleDashboardChartDashboardQuery {
  /**
  * The raw query string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#query ChronicleDashboardChart#query}
  */
  readonly query: string;
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#input ChronicleDashboardChart#input}
  */
  readonly input?: ChronicleDashboardChartDashboardQueryInput;
}

export function chronicleDashboardChartDashboardQueryToTerraform(struct?: ChronicleDashboardChartDashboardQueryOutputReference | ChronicleDashboardChartDashboardQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
    input: chronicleDashboardChartDashboardQueryInputToTerraform(struct!.input),
  }
}


export function chronicleDashboardChartDashboardQueryToHclTerraform(struct?: ChronicleDashboardChartDashboardQueryOutputReference | ChronicleDashboardChartDashboardQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input: {
      value: chronicleDashboardChartDashboardQueryInputToHclTerraform(struct!.input),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleDashboardChartDashboardQueryInputList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDashboardChartDashboardQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDashboardChartDashboardQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._input?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDashboardChartDashboardQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._query = undefined;
      this._input.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._query = value.query;
      this._input.internalValue = value.input;
    }
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // input - computed: false, optional: true, required: false
  private _input = new ChronicleDashboardChartDashboardQueryInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }
  public putInput(value: ChronicleDashboardChartDashboardQueryInput) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }
}
export interface ChronicleDashboardChartTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#create ChronicleDashboardChart#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#delete ChronicleDashboardChart#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#update ChronicleDashboardChart#update}
  */
  readonly update?: string;
}

export function chronicleDashboardChartTimeoutsToTerraform(struct?: ChronicleDashboardChartTimeouts | cdktn.IResolvable): any {
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


export function chronicleDashboardChartTimeoutsToHclTerraform(struct?: ChronicleDashboardChartTimeouts | cdktn.IResolvable): any {
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

export class ChronicleDashboardChartTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ChronicleDashboardChartTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ChronicleDashboardChartTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart google_chronicle_dashboard_chart}
*/
export class ChronicleDashboardChart extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_chronicle_dashboard_chart";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ChronicleDashboardChart resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChronicleDashboardChart to import
  * @param importFromId The id of the existing ChronicleDashboardChart that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChronicleDashboardChart to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_chronicle_dashboard_chart", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_dashboard_chart google_chronicle_dashboard_chart} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChronicleDashboardChartConfig
  */
  public constructor(scope: Construct, id: string, config: ChronicleDashboardChartConfig) {
    super(scope, id, {
      terraformResourceType: 'google_chronicle_dashboard_chart',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.45.0',
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
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._instance = config.instance;
    this._location = config.location;
    this._nativeDashboard = config.nativeDashboard;
    this._project = config.project;
    this._chartLayout.internalValue = config.chartLayout;
    this._dashboardChart.internalValue = config.dashboardChart;
    this._dashboardQuery.internalValue = config.dashboardQuery;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // chart_id - computed: true, optional: false, required: false
  public get chartId() {
    return this.getStringAttribute('chart_id');
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

  // native_dashboard - computed: false, optional: true, required: false
  private _nativeDashboard?: string; 
  public get nativeDashboard() {
    return this.getStringAttribute('native_dashboard');
  }
  public set nativeDashboard(value: string) {
    this._nativeDashboard = value;
  }
  public resetNativeDashboard() {
    this._nativeDashboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeDashboardInput() {
    return this._nativeDashboard;
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

  // chart_layout - computed: false, optional: true, required: false
  private _chartLayout = new ChronicleDashboardChartChartLayoutOutputReference(this, "chart_layout");
  public get chartLayout() {
    return this._chartLayout;
  }
  public putChartLayout(value: ChronicleDashboardChartChartLayout) {
    this._chartLayout.internalValue = value;
  }
  public resetChartLayout() {
    this._chartLayout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartLayoutInput() {
    return this._chartLayout.internalValue;
  }

  // dashboard_chart - computed: false, optional: false, required: true
  private _dashboardChart = new ChronicleDashboardChartDashboardChartOutputReference(this, "dashboard_chart");
  public get dashboardChart() {
    return this._dashboardChart;
  }
  public putDashboardChart(value: ChronicleDashboardChartDashboardChart) {
    this._dashboardChart.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardChartInput() {
    return this._dashboardChart.internalValue;
  }

  // dashboard_query - computed: false, optional: true, required: false
  private _dashboardQuery = new ChronicleDashboardChartDashboardQueryOutputReference(this, "dashboard_query");
  public get dashboardQuery() {
    return this._dashboardQuery;
  }
  public putDashboardQuery(value: ChronicleDashboardChartDashboardQuery) {
    this._dashboardQuery.internalValue = value;
  }
  public resetDashboardQuery() {
    this._dashboardQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardQueryInput() {
    return this._dashboardQuery.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ChronicleDashboardChartTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ChronicleDashboardChartTimeouts) {
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
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      id: cdktn.stringToTerraform(this._id),
      instance: cdktn.stringToTerraform(this._instance),
      location: cdktn.stringToTerraform(this._location),
      native_dashboard: cdktn.stringToTerraform(this._nativeDashboard),
      project: cdktn.stringToTerraform(this._project),
      chart_layout: chronicleDashboardChartChartLayoutToTerraform(this._chartLayout.internalValue),
      dashboard_chart: chronicleDashboardChartDashboardChartToTerraform(this._dashboardChart.internalValue),
      dashboard_query: chronicleDashboardChartDashboardQueryToTerraform(this._dashboardQuery.internalValue),
      timeouts: chronicleDashboardChartTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
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
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      native_dashboard: {
        value: cdktn.stringToHclTerraform(this._nativeDashboard),
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
      chart_layout: {
        value: chronicleDashboardChartChartLayoutToHclTerraform(this._chartLayout.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChronicleDashboardChartChartLayoutList",
      },
      dashboard_chart: {
        value: chronicleDashboardChartDashboardChartToHclTerraform(this._dashboardChart.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChronicleDashboardChartDashboardChartList",
      },
      dashboard_query: {
        value: chronicleDashboardChartDashboardQueryToHclTerraform(this._dashboardQuery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChronicleDashboardChartDashboardQueryList",
      },
      timeouts: {
        value: chronicleDashboardChartTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ChronicleDashboardChartTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
