/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ChronicleBigQueryExportConfig extends cdktn.TerraformMetaArguments {
  /**
  * The BigQueryExportPackage entitled for the Chronicle instance. Possible values: ["BIG_QUERY_EXPORT_PACKAGE_BYOBQ", "BIG_QUERY_EXPORT_PACKAGE_ADVANCED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#big_query_export_package ChronicleBigQueryExport#big_query_export_package}
  */
  readonly bigQueryExportPackage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#id ChronicleBigQueryExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#instance ChronicleBigQueryExport#instance}
  */
  readonly instance: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#location ChronicleBigQueryExport#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#project ChronicleBigQueryExport#project}
  */
  readonly project?: string;
  /**
  * entity_graph_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#entity_graph_settings ChronicleBigQueryExport#entity_graph_settings}
  */
  readonly entityGraphSettings?: ChronicleBigQueryExportEntityGraphSettings;
  /**
  * ioc_matches_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#ioc_matches_settings ChronicleBigQueryExport#ioc_matches_settings}
  */
  readonly iocMatchesSettings?: ChronicleBigQueryExportIocMatchesSettings;
  /**
  * rule_detections_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#rule_detections_settings ChronicleBigQueryExport#rule_detections_settings}
  */
  readonly ruleDetectionsSettings?: ChronicleBigQueryExportRuleDetectionsSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#timeouts ChronicleBigQueryExport#timeouts}
  */
  readonly timeouts?: ChronicleBigQueryExportTimeouts;
  /**
  * udm_events_aggregates_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#udm_events_aggregates_settings ChronicleBigQueryExport#udm_events_aggregates_settings}
  */
  readonly udmEventsAggregatesSettings?: ChronicleBigQueryExportUdmEventsAggregatesSettings;
  /**
  * udm_events_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#udm_events_settings ChronicleBigQueryExport#udm_events_settings}
  */
  readonly udmEventsSettings?: ChronicleBigQueryExportUdmEventsSettings;
}
export interface ChronicleBigQueryExportEntityGraphSettings {
  /**
  * Whether the data source is enabled for export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#enabled ChronicleBigQueryExport#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * The retention period for the data source in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#retention_days ChronicleBigQueryExport#retention_days}
  */
  readonly retentionDays: number;
}

export function chronicleBigQueryExportEntityGraphSettingsToTerraform(struct?: ChronicleBigQueryExportEntityGraphSettingsOutputReference | ChronicleBigQueryExportEntityGraphSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    retention_days: cdktn.numberToTerraform(struct!.retentionDays),
  }
}


export function chronicleBigQueryExportEntityGraphSettingsToHclTerraform(struct?: ChronicleBigQueryExportEntityGraphSettingsOutputReference | ChronicleBigQueryExportEntityGraphSettings): any {
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
    retention_days: {
      value: cdktn.numberToHclTerraform(struct!.retentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleBigQueryExportEntityGraphSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleBigQueryExportEntityGraphSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._retentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays = this._retentionDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleBigQueryExportEntityGraphSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._retentionDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._retentionDays = value.retentionDays;
    }
  }

  // data_freshness_time - computed: true, optional: false, required: false
  public get dataFreshnessTime() {
    return this.getStringAttribute('data_freshness_time');
  }

  // data_volume - computed: true, optional: false, required: false
  public get dataVolume() {
    return this.getStringAttribute('data_volume');
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

  // latest_export_job_state - computed: true, optional: false, required: false
  public get latestExportJobState() {
    return this.getStringAttribute('latest_export_job_state');
  }

  // retention_days - computed: false, optional: false, required: true
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }
}
export interface ChronicleBigQueryExportIocMatchesSettings {
  /**
  * Whether the data source is enabled for export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#enabled ChronicleBigQueryExport#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * The retention period for the data source in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#retention_days ChronicleBigQueryExport#retention_days}
  */
  readonly retentionDays: number;
}

export function chronicleBigQueryExportIocMatchesSettingsToTerraform(struct?: ChronicleBigQueryExportIocMatchesSettingsOutputReference | ChronicleBigQueryExportIocMatchesSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    retention_days: cdktn.numberToTerraform(struct!.retentionDays),
  }
}


export function chronicleBigQueryExportIocMatchesSettingsToHclTerraform(struct?: ChronicleBigQueryExportIocMatchesSettingsOutputReference | ChronicleBigQueryExportIocMatchesSettings): any {
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
    retention_days: {
      value: cdktn.numberToHclTerraform(struct!.retentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleBigQueryExportIocMatchesSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleBigQueryExportIocMatchesSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._retentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays = this._retentionDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleBigQueryExportIocMatchesSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._retentionDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._retentionDays = value.retentionDays;
    }
  }

  // data_freshness_time - computed: true, optional: false, required: false
  public get dataFreshnessTime() {
    return this.getStringAttribute('data_freshness_time');
  }

  // data_volume - computed: true, optional: false, required: false
  public get dataVolume() {
    return this.getStringAttribute('data_volume');
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

  // latest_export_job_state - computed: true, optional: false, required: false
  public get latestExportJobState() {
    return this.getStringAttribute('latest_export_job_state');
  }

  // retention_days - computed: false, optional: false, required: true
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }
}
export interface ChronicleBigQueryExportRuleDetectionsSettings {
  /**
  * Whether the data source is enabled for export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#enabled ChronicleBigQueryExport#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * The retention period for the data source in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#retention_days ChronicleBigQueryExport#retention_days}
  */
  readonly retentionDays: number;
}

export function chronicleBigQueryExportRuleDetectionsSettingsToTerraform(struct?: ChronicleBigQueryExportRuleDetectionsSettingsOutputReference | ChronicleBigQueryExportRuleDetectionsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    retention_days: cdktn.numberToTerraform(struct!.retentionDays),
  }
}


export function chronicleBigQueryExportRuleDetectionsSettingsToHclTerraform(struct?: ChronicleBigQueryExportRuleDetectionsSettingsOutputReference | ChronicleBigQueryExportRuleDetectionsSettings): any {
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
    retention_days: {
      value: cdktn.numberToHclTerraform(struct!.retentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleBigQueryExportRuleDetectionsSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleBigQueryExportRuleDetectionsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._retentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays = this._retentionDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleBigQueryExportRuleDetectionsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._retentionDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._retentionDays = value.retentionDays;
    }
  }

  // data_freshness_time - computed: true, optional: false, required: false
  public get dataFreshnessTime() {
    return this.getStringAttribute('data_freshness_time');
  }

  // data_volume - computed: true, optional: false, required: false
  public get dataVolume() {
    return this.getStringAttribute('data_volume');
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

  // latest_export_job_state - computed: true, optional: false, required: false
  public get latestExportJobState() {
    return this.getStringAttribute('latest_export_job_state');
  }

  // retention_days - computed: false, optional: false, required: true
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }
}
export interface ChronicleBigQueryExportTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#create ChronicleBigQueryExport#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#delete ChronicleBigQueryExport#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#update ChronicleBigQueryExport#update}
  */
  readonly update?: string;
}

export function chronicleBigQueryExportTimeoutsToTerraform(struct?: ChronicleBigQueryExportTimeouts | cdktn.IResolvable): any {
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


export function chronicleBigQueryExportTimeoutsToHclTerraform(struct?: ChronicleBigQueryExportTimeouts | cdktn.IResolvable): any {
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

export class ChronicleBigQueryExportTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ChronicleBigQueryExportTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ChronicleBigQueryExportTimeouts | cdktn.IResolvable | undefined) {
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
export interface ChronicleBigQueryExportUdmEventsAggregatesSettings {
  /**
  * Whether the data source is enabled for export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#enabled ChronicleBigQueryExport#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * The retention period for the data source in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#retention_days ChronicleBigQueryExport#retention_days}
  */
  readonly retentionDays: number;
}

export function chronicleBigQueryExportUdmEventsAggregatesSettingsToTerraform(struct?: ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference | ChronicleBigQueryExportUdmEventsAggregatesSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    retention_days: cdktn.numberToTerraform(struct!.retentionDays),
  }
}


export function chronicleBigQueryExportUdmEventsAggregatesSettingsToHclTerraform(struct?: ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference | ChronicleBigQueryExportUdmEventsAggregatesSettings): any {
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
    retention_days: {
      value: cdktn.numberToHclTerraform(struct!.retentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleBigQueryExportUdmEventsAggregatesSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._retentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays = this._retentionDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleBigQueryExportUdmEventsAggregatesSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._retentionDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._retentionDays = value.retentionDays;
    }
  }

  // data_freshness_time - computed: true, optional: false, required: false
  public get dataFreshnessTime() {
    return this.getStringAttribute('data_freshness_time');
  }

  // data_volume - computed: true, optional: false, required: false
  public get dataVolume() {
    return this.getStringAttribute('data_volume');
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

  // latest_export_job_state - computed: true, optional: false, required: false
  public get latestExportJobState() {
    return this.getStringAttribute('latest_export_job_state');
  }

  // retention_days - computed: false, optional: false, required: true
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }
}
export interface ChronicleBigQueryExportUdmEventsSettings {
  /**
  * Whether the data source is enabled for export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#enabled ChronicleBigQueryExport#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * The retention period for the data source in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#retention_days ChronicleBigQueryExport#retention_days}
  */
  readonly retentionDays: number;
}

export function chronicleBigQueryExportUdmEventsSettingsToTerraform(struct?: ChronicleBigQueryExportUdmEventsSettingsOutputReference | ChronicleBigQueryExportUdmEventsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    retention_days: cdktn.numberToTerraform(struct!.retentionDays),
  }
}


export function chronicleBigQueryExportUdmEventsSettingsToHclTerraform(struct?: ChronicleBigQueryExportUdmEventsSettingsOutputReference | ChronicleBigQueryExportUdmEventsSettings): any {
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
    retention_days: {
      value: cdktn.numberToHclTerraform(struct!.retentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleBigQueryExportUdmEventsSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleBigQueryExportUdmEventsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._retentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays = this._retentionDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleBigQueryExportUdmEventsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._retentionDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._retentionDays = value.retentionDays;
    }
  }

  // data_freshness_time - computed: true, optional: false, required: false
  public get dataFreshnessTime() {
    return this.getStringAttribute('data_freshness_time');
  }

  // data_volume - computed: true, optional: false, required: false
  public get dataVolume() {
    return this.getStringAttribute('data_volume');
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

  // latest_export_job_state - computed: true, optional: false, required: false
  public get latestExportJobState() {
    return this.getStringAttribute('latest_export_job_state');
  }

  // retention_days - computed: false, optional: false, required: true
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export google_chronicle_big_query_export}
*/
export class ChronicleBigQueryExport extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_chronicle_big_query_export";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ChronicleBigQueryExport resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChronicleBigQueryExport to import
  * @param importFromId The id of the existing ChronicleBigQueryExport that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChronicleBigQueryExport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_chronicle_big_query_export", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export google_chronicle_big_query_export} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChronicleBigQueryExportConfig
  */
  public constructor(scope: Construct, id: string, config: ChronicleBigQueryExportConfig) {
    super(scope, id, {
      terraformResourceType: 'google_chronicle_big_query_export',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.43.0',
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
    this._bigQueryExportPackage = config.bigQueryExportPackage;
    this._id = config.id;
    this._instance = config.instance;
    this._location = config.location;
    this._project = config.project;
    this._entityGraphSettings.internalValue = config.entityGraphSettings;
    this._iocMatchesSettings.internalValue = config.iocMatchesSettings;
    this._ruleDetectionsSettings.internalValue = config.ruleDetectionsSettings;
    this._timeouts.internalValue = config.timeouts;
    this._udmEventsAggregatesSettings.internalValue = config.udmEventsAggregatesSettings;
    this._udmEventsSettings.internalValue = config.udmEventsSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // big_query_export_package - computed: true, optional: true, required: false
  private _bigQueryExportPackage?: string; 
  public get bigQueryExportPackage() {
    return this.getStringAttribute('big_query_export_package');
  }
  public set bigQueryExportPackage(value: string) {
    this._bigQueryExportPackage = value;
  }
  public resetBigQueryExportPackage() {
    this._bigQueryExportPackage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigQueryExportPackageInput() {
    return this._bigQueryExportPackage;
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

  // provisioned - computed: true, optional: false, required: false
  public get provisioned() {
    return this.getBooleanAttribute('provisioned');
  }

  // entity_graph_settings - computed: false, optional: true, required: false
  private _entityGraphSettings = new ChronicleBigQueryExportEntityGraphSettingsOutputReference(this, "entity_graph_settings");
  public get entityGraphSettings() {
    return this._entityGraphSettings;
  }
  public putEntityGraphSettings(value: ChronicleBigQueryExportEntityGraphSettings) {
    this._entityGraphSettings.internalValue = value;
  }
  public resetEntityGraphSettings() {
    this._entityGraphSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityGraphSettingsInput() {
    return this._entityGraphSettings.internalValue;
  }

  // ioc_matches_settings - computed: false, optional: true, required: false
  private _iocMatchesSettings = new ChronicleBigQueryExportIocMatchesSettingsOutputReference(this, "ioc_matches_settings");
  public get iocMatchesSettings() {
    return this._iocMatchesSettings;
  }
  public putIocMatchesSettings(value: ChronicleBigQueryExportIocMatchesSettings) {
    this._iocMatchesSettings.internalValue = value;
  }
  public resetIocMatchesSettings() {
    this._iocMatchesSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iocMatchesSettingsInput() {
    return this._iocMatchesSettings.internalValue;
  }

  // rule_detections_settings - computed: false, optional: true, required: false
  private _ruleDetectionsSettings = new ChronicleBigQueryExportRuleDetectionsSettingsOutputReference(this, "rule_detections_settings");
  public get ruleDetectionsSettings() {
    return this._ruleDetectionsSettings;
  }
  public putRuleDetectionsSettings(value: ChronicleBigQueryExportRuleDetectionsSettings) {
    this._ruleDetectionsSettings.internalValue = value;
  }
  public resetRuleDetectionsSettings() {
    this._ruleDetectionsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleDetectionsSettingsInput() {
    return this._ruleDetectionsSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ChronicleBigQueryExportTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ChronicleBigQueryExportTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // udm_events_aggregates_settings - computed: false, optional: true, required: false
  private _udmEventsAggregatesSettings = new ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference(this, "udm_events_aggregates_settings");
  public get udmEventsAggregatesSettings() {
    return this._udmEventsAggregatesSettings;
  }
  public putUdmEventsAggregatesSettings(value: ChronicleBigQueryExportUdmEventsAggregatesSettings) {
    this._udmEventsAggregatesSettings.internalValue = value;
  }
  public resetUdmEventsAggregatesSettings() {
    this._udmEventsAggregatesSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udmEventsAggregatesSettingsInput() {
    return this._udmEventsAggregatesSettings.internalValue;
  }

  // udm_events_settings - computed: false, optional: true, required: false
  private _udmEventsSettings = new ChronicleBigQueryExportUdmEventsSettingsOutputReference(this, "udm_events_settings");
  public get udmEventsSettings() {
    return this._udmEventsSettings;
  }
  public putUdmEventsSettings(value: ChronicleBigQueryExportUdmEventsSettings) {
    this._udmEventsSettings.internalValue = value;
  }
  public resetUdmEventsSettings() {
    this._udmEventsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udmEventsSettingsInput() {
    return this._udmEventsSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      big_query_export_package: cdktn.stringToTerraform(this._bigQueryExportPackage),
      id: cdktn.stringToTerraform(this._id),
      instance: cdktn.stringToTerraform(this._instance),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      entity_graph_settings: chronicleBigQueryExportEntityGraphSettingsToTerraform(this._entityGraphSettings.internalValue),
      ioc_matches_settings: chronicleBigQueryExportIocMatchesSettingsToTerraform(this._iocMatchesSettings.internalValue),
      rule_detections_settings: chronicleBigQueryExportRuleDetectionsSettingsToTerraform(this._ruleDetectionsSettings.internalValue),
      timeouts: chronicleBigQueryExportTimeoutsToTerraform(this._timeouts.internalValue),
      udm_events_aggregates_settings: chronicleBigQueryExportUdmEventsAggregatesSettingsToTerraform(this._udmEventsAggregatesSettings.internalValue),
      udm_events_settings: chronicleBigQueryExportUdmEventsSettingsToTerraform(this._udmEventsSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      big_query_export_package: {
        value: cdktn.stringToHclTerraform(this._bigQueryExportPackage),
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
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_graph_settings: {
        value: chronicleBigQueryExportEntityGraphSettingsToHclTerraform(this._entityGraphSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChronicleBigQueryExportEntityGraphSettingsList",
      },
      ioc_matches_settings: {
        value: chronicleBigQueryExportIocMatchesSettingsToHclTerraform(this._iocMatchesSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChronicleBigQueryExportIocMatchesSettingsList",
      },
      rule_detections_settings: {
        value: chronicleBigQueryExportRuleDetectionsSettingsToHclTerraform(this._ruleDetectionsSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChronicleBigQueryExportRuleDetectionsSettingsList",
      },
      timeouts: {
        value: chronicleBigQueryExportTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ChronicleBigQueryExportTimeouts",
      },
      udm_events_aggregates_settings: {
        value: chronicleBigQueryExportUdmEventsAggregatesSettingsToHclTerraform(this._udmEventsAggregatesSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChronicleBigQueryExportUdmEventsAggregatesSettingsList",
      },
      udm_events_settings: {
        value: chronicleBigQueryExportUdmEventsSettingsToHclTerraform(this._udmEventsSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChronicleBigQueryExportUdmEventsSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
