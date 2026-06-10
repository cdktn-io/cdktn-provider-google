/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/logging_saved_query
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LoggingSavedQueryConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/logging_saved_query#deletion_policy LoggingSavedQuery#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * A description of the saved query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/logging_saved_query#description LoggingSavedQuery#description}
  */
  readonly description?: string;
  /**
  * The user-visible display name of the saved query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/logging_saved_query#display_name LoggingSavedQuery#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/logging_saved_query#id LoggingSavedQuery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the resource see
  * [supported regions](https://docs.cloud.google.com/logging/docs/region-support#bucket-regions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/logging_saved_query#location LoggingSavedQuery#location}
  */
  readonly location: string;
  /**
  * The name of the saved query. For example: 'my-saved-query'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/logging_saved_query#name LoggingSavedQuery#name}
  */
  readonly name: string;
  /**
  * The parent of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/logging_saved_query#parent LoggingSavedQuery#parent}
  */
  readonly parent: string;
  /**
  * The visibility of the saved query. Possible values: ["SHARED", "PRIVATE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/logging_saved_query#visibility LoggingSavedQuery#visibility}
  */
  readonly visibility: string;
  /**
  * logging_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/logging_saved_query#logging_query LoggingSavedQuery#logging_query}
  */
  readonly loggingQuery?: LoggingSavedQueryLoggingQuery;
  /**
  * ops_analytics_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/logging_saved_query#ops_analytics_query LoggingSavedQuery#ops_analytics_query}
  */
  readonly opsAnalyticsQuery?: LoggingSavedQueryOpsAnalyticsQuery;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/logging_saved_query#timeouts LoggingSavedQuery#timeouts}
  */
  readonly timeouts?: LoggingSavedQueryTimeouts;
}
export interface LoggingSavedQueryLoggingQuerySummaryFields {
  /**
  * The field from the LogEntry to include in the summary line.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/logging_saved_query#field LoggingSavedQuery#field}
  */
  readonly field?: string;
}

export function loggingSavedQueryLoggingQuerySummaryFieldsToTerraform(struct?: LoggingSavedQueryLoggingQuerySummaryFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
  }
}


export function loggingSavedQueryLoggingQuerySummaryFieldsToHclTerraform(struct?: LoggingSavedQueryLoggingQuerySummaryFields | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LoggingSavedQueryLoggingQuerySummaryFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingSavedQueryLoggingQuerySummaryFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
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
}

export class LoggingSavedQueryLoggingQuerySummaryFieldsList extends cdktn.ComplexList {
  public internalValue? : LoggingSavedQueryLoggingQuerySummaryFields[] | cdktn.IResolvable

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
  public get(index: number): LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference {
    return new LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingSavedQueryLoggingQuery {
  /**
  * An [advanced logs filter](https://cloud.google.com/logging/docs/view/advanced-filters) which
  * is used to match log entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/logging_saved_query#filter LoggingSavedQuery#filter}
  */
  readonly filter: string;
  /**
  * Characters will be counted from the end of the string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/logging_saved_query#summary_field_end LoggingSavedQuery#summary_field_end}
  */
  readonly summaryFieldEnd?: number;
  /**
  * Characters will be counted from the start of the string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/logging_saved_query#summary_field_start LoggingSavedQuery#summary_field_start}
  */
  readonly summaryFieldStart?: number;
  /**
  * summary_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/logging_saved_query#summary_fields LoggingSavedQuery#summary_fields}
  */
  readonly summaryFields?: LoggingSavedQueryLoggingQuerySummaryFields[] | cdktn.IResolvable;
}

export function loggingSavedQueryLoggingQueryToTerraform(struct?: LoggingSavedQueryLoggingQueryOutputReference | LoggingSavedQueryLoggingQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter: cdktn.stringToTerraform(struct!.filter),
    summary_field_end: cdktn.numberToTerraform(struct!.summaryFieldEnd),
    summary_field_start: cdktn.numberToTerraform(struct!.summaryFieldStart),
    summary_fields: cdktn.listMapper(loggingSavedQueryLoggingQuerySummaryFieldsToTerraform, true)(struct!.summaryFields),
  }
}


export function loggingSavedQueryLoggingQueryToHclTerraform(struct?: LoggingSavedQueryLoggingQueryOutputReference | LoggingSavedQueryLoggingQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter: {
      value: cdktn.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary_field_end: {
      value: cdktn.numberToHclTerraform(struct!.summaryFieldEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    summary_field_start: {
      value: cdktn.numberToHclTerraform(struct!.summaryFieldStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    summary_fields: {
      value: cdktn.listMapperHcl(loggingSavedQueryLoggingQuerySummaryFieldsToHclTerraform, true)(struct!.summaryFields),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingSavedQueryLoggingQuerySummaryFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingSavedQueryLoggingQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingSavedQueryLoggingQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._summaryFieldEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryFieldEnd = this._summaryFieldEnd;
    }
    if (this._summaryFieldStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryFieldStart = this._summaryFieldStart;
    }
    if (this._summaryFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryFields = this._summaryFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingSavedQueryLoggingQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter = undefined;
      this._summaryFieldEnd = undefined;
      this._summaryFieldStart = undefined;
      this._summaryFields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter = value.filter;
      this._summaryFieldEnd = value.summaryFieldEnd;
      this._summaryFieldStart = value.summaryFieldStart;
      this._summaryFields.internalValue = value.summaryFields;
    }
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // summary_field_end - computed: false, optional: true, required: false
  private _summaryFieldEnd?: number; 
  public get summaryFieldEnd() {
    return this.getNumberAttribute('summary_field_end');
  }
  public set summaryFieldEnd(value: number) {
    this._summaryFieldEnd = value;
  }
  public resetSummaryFieldEnd() {
    this._summaryFieldEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryFieldEndInput() {
    return this._summaryFieldEnd;
  }

  // summary_field_start - computed: false, optional: true, required: false
  private _summaryFieldStart?: number; 
  public get summaryFieldStart() {
    return this.getNumberAttribute('summary_field_start');
  }
  public set summaryFieldStart(value: number) {
    this._summaryFieldStart = value;
  }
  public resetSummaryFieldStart() {
    this._summaryFieldStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryFieldStartInput() {
    return this._summaryFieldStart;
  }

  // summary_fields - computed: false, optional: true, required: false
  private _summaryFields = new LoggingSavedQueryLoggingQuerySummaryFieldsList(this, "summary_fields", false);
  public get summaryFields() {
    return this._summaryFields;
  }
  public putSummaryFields(value: LoggingSavedQueryLoggingQuerySummaryFields[] | cdktn.IResolvable) {
    this._summaryFields.internalValue = value;
  }
  public resetSummaryFields() {
    this._summaryFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryFieldsInput() {
    return this._summaryFields.internalValue;
  }
}
export interface LoggingSavedQueryOpsAnalyticsQuery {
  /**
  * A logs analytics SQL query, which generally follows BigQuery format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/logging_saved_query#sql_query_text LoggingSavedQuery#sql_query_text}
  */
  readonly sqlQueryText: string;
}

export function loggingSavedQueryOpsAnalyticsQueryToTerraform(struct?: LoggingSavedQueryOpsAnalyticsQueryOutputReference | LoggingSavedQueryOpsAnalyticsQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sql_query_text: cdktn.stringToTerraform(struct!.sqlQueryText),
  }
}


export function loggingSavedQueryOpsAnalyticsQueryToHclTerraform(struct?: LoggingSavedQueryOpsAnalyticsQueryOutputReference | LoggingSavedQueryOpsAnalyticsQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sql_query_text: {
      value: cdktn.stringToHclTerraform(struct!.sqlQueryText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingSavedQueryOpsAnalyticsQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingSavedQueryOpsAnalyticsQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sqlQueryText !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlQueryText = this._sqlQueryText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingSavedQueryOpsAnalyticsQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sqlQueryText = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sqlQueryText = value.sqlQueryText;
    }
  }

  // sql_query_text - computed: false, optional: false, required: true
  private _sqlQueryText?: string; 
  public get sqlQueryText() {
    return this.getStringAttribute('sql_query_text');
  }
  public set sqlQueryText(value: string) {
    this._sqlQueryText = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlQueryTextInput() {
    return this._sqlQueryText;
  }
}
export interface LoggingSavedQueryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/logging_saved_query#create LoggingSavedQuery#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/logging_saved_query#delete LoggingSavedQuery#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/logging_saved_query#update LoggingSavedQuery#update}
  */
  readonly update?: string;
}

export function loggingSavedQueryTimeoutsToTerraform(struct?: LoggingSavedQueryTimeouts | cdktn.IResolvable): any {
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


export function loggingSavedQueryTimeoutsToHclTerraform(struct?: LoggingSavedQueryTimeouts | cdktn.IResolvable): any {
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

export class LoggingSavedQueryTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoggingSavedQueryTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LoggingSavedQueryTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/logging_saved_query google_logging_saved_query}
*/
export class LoggingSavedQuery extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_logging_saved_query";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LoggingSavedQuery resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoggingSavedQuery to import
  * @param importFromId The id of the existing LoggingSavedQuery that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/logging_saved_query#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoggingSavedQuery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_logging_saved_query", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/logging_saved_query google_logging_saved_query} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoggingSavedQueryConfig
  */
  public constructor(scope: Construct, id: string, config: LoggingSavedQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'google_logging_saved_query',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.36.0',
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._parent = config.parent;
    this._visibility = config.visibility;
    this._loggingQuery.internalValue = config.loggingQuery;
    this._opsAnalyticsQuery.internalValue = config.opsAnalyticsQuery;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // visibility - computed: false, optional: false, required: true
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // logging_query - computed: false, optional: true, required: false
  private _loggingQuery = new LoggingSavedQueryLoggingQueryOutputReference(this, "logging_query");
  public get loggingQuery() {
    return this._loggingQuery;
  }
  public putLoggingQuery(value: LoggingSavedQueryLoggingQuery) {
    this._loggingQuery.internalValue = value;
  }
  public resetLoggingQuery() {
    this._loggingQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingQueryInput() {
    return this._loggingQuery.internalValue;
  }

  // ops_analytics_query - computed: false, optional: true, required: false
  private _opsAnalyticsQuery = new LoggingSavedQueryOpsAnalyticsQueryOutputReference(this, "ops_analytics_query");
  public get opsAnalyticsQuery() {
    return this._opsAnalyticsQuery;
  }
  public putOpsAnalyticsQuery(value: LoggingSavedQueryOpsAnalyticsQuery) {
    this._opsAnalyticsQuery.internalValue = value;
  }
  public resetOpsAnalyticsQuery() {
    this._opsAnalyticsQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsAnalyticsQueryInput() {
    return this._opsAnalyticsQuery.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LoggingSavedQueryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LoggingSavedQueryTimeouts) {
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
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      parent: cdktn.stringToTerraform(this._parent),
      visibility: cdktn.stringToTerraform(this._visibility),
      logging_query: loggingSavedQueryLoggingQueryToTerraform(this._loggingQuery.internalValue),
      ops_analytics_query: loggingSavedQueryOpsAnalyticsQueryToTerraform(this._opsAnalyticsQuery.internalValue),
      timeouts: loggingSavedQueryTimeoutsToTerraform(this._timeouts.internalValue),
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
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktn.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visibility: {
        value: cdktn.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging_query: {
        value: loggingSavedQueryLoggingQueryToHclTerraform(this._loggingQuery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoggingSavedQueryLoggingQueryList",
      },
      ops_analytics_query: {
        value: loggingSavedQueryOpsAnalyticsQueryToHclTerraform(this._opsAnalyticsQuery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoggingSavedQueryOpsAnalyticsQueryList",
      },
      timeouts: {
        value: loggingSavedQueryTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LoggingSavedQueryTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
