/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_assessment_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ContactCenterInsightsAssessmentRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * If true, apply this rule to conversations. Otherwise, this rule is
  * inactive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_assessment_rule#active ContactCenterInsightsAssessmentRule#active}
  */
  readonly active?: boolean | cdktn.IResolvable;
  /**
  * A unique ID for the new AssessmentRule. This ID will become the final
  * component of the AssessmentRule's resource name. If no ID is specified,
  * a server-generated ID will be used.
  * 
  * This value should be 4-64 characters and must match the regular
  * expression '^[A-Za-z0-9]{4,64}$'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_assessment_rule#assessment_rule_id ContactCenterInsightsAssessmentRule#assessment_rule_id}
  */
  readonly assessmentRuleId?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_assessment_rule#deletion_policy ContactCenterInsightsAssessmentRule#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Display Name of the assessment rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_assessment_rule#display_name ContactCenterInsightsAssessmentRule#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_assessment_rule#id ContactCenterInsightsAssessmentRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Location of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_assessment_rule#location ContactCenterInsightsAssessmentRule#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_assessment_rule#project ContactCenterInsightsAssessmentRule#project}
  */
  readonly project?: string;
  /**
  * sample_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_assessment_rule#sample_rule ContactCenterInsightsAssessmentRule#sample_rule}
  */
  readonly sampleRule?: ContactCenterInsightsAssessmentRuleSampleRule;
  /**
  * schedule_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_assessment_rule#schedule_info ContactCenterInsightsAssessmentRule#schedule_info}
  */
  readonly scheduleInfo?: ContactCenterInsightsAssessmentRuleScheduleInfo;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_assessment_rule#timeouts ContactCenterInsightsAssessmentRule#timeouts}
  */
  readonly timeouts?: ContactCenterInsightsAssessmentRuleTimeouts;
}
export interface ContactCenterInsightsAssessmentRuleSampleRule {
  /**
  * To specify the filter for the conversions that should apply this sample
  * rule. An empty filter means this sample rule applies to all conversations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_assessment_rule#conversation_filter ContactCenterInsightsAssessmentRule#conversation_filter}
  */
  readonly conversationFilter?: string;
  /**
  * Group by dimension to sample the conversation. If no dimension is
  * provided, the sampling will be applied to the project level.
  * Current supported dimensions is 'quality_metadata.agent_info.agent_id'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_assessment_rule#dimension ContactCenterInsightsAssessmentRule#dimension}
  */
  readonly dimension?: string;
  /**
  * Percentage of conversations that we should sample  based on the dimension
  * between [0, 100].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_assessment_rule#sample_percentage ContactCenterInsightsAssessmentRule#sample_percentage}
  */
  readonly samplePercentage?: number;
  /**
  * Number of the conversations that we should sample based on the dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_assessment_rule#sample_row ContactCenterInsightsAssessmentRule#sample_row}
  */
  readonly sampleRow?: number;
}

export function contactCenterInsightsAssessmentRuleSampleRuleToTerraform(struct?: ContactCenterInsightsAssessmentRuleSampleRuleOutputReference | ContactCenterInsightsAssessmentRuleSampleRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conversation_filter: cdktn.stringToTerraform(struct!.conversationFilter),
    dimension: cdktn.stringToTerraform(struct!.dimension),
    sample_percentage: cdktn.numberToTerraform(struct!.samplePercentage),
    sample_row: cdktn.numberToTerraform(struct!.sampleRow),
  }
}


export function contactCenterInsightsAssessmentRuleSampleRuleToHclTerraform(struct?: ContactCenterInsightsAssessmentRuleSampleRuleOutputReference | ContactCenterInsightsAssessmentRuleSampleRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conversation_filter: {
      value: cdktn.stringToHclTerraform(struct!.conversationFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimension: {
      value: cdktn.stringToHclTerraform(struct!.dimension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_percentage: {
      value: cdktn.numberToHclTerraform(struct!.samplePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sample_row: {
      value: cdktn.numberToHclTerraform(struct!.sampleRow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactCenterInsightsAssessmentRuleSampleRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContactCenterInsightsAssessmentRuleSampleRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conversationFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationFilter = this._conversationFilter;
    }
    if (this._dimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension;
    }
    if (this._samplePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplePercentage = this._samplePercentage;
    }
    if (this._sampleRow !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRow = this._sampleRow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactCenterInsightsAssessmentRuleSampleRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conversationFilter = undefined;
      this._dimension = undefined;
      this._samplePercentage = undefined;
      this._sampleRow = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conversationFilter = value.conversationFilter;
      this._dimension = value.dimension;
      this._samplePercentage = value.samplePercentage;
      this._sampleRow = value.sampleRow;
    }
  }

  // conversation_filter - computed: false, optional: true, required: false
  private _conversationFilter?: string; 
  public get conversationFilter() {
    return this.getStringAttribute('conversation_filter');
  }
  public set conversationFilter(value: string) {
    this._conversationFilter = value;
  }
  public resetConversationFilter() {
    this._conversationFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationFilterInput() {
    return this._conversationFilter;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension?: string; 
  public get dimension() {
    return this.getStringAttribute('dimension');
  }
  public set dimension(value: string) {
    this._dimension = value;
  }
  public resetDimension() {
    this._dimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension;
  }

  // sample_percentage - computed: false, optional: true, required: false
  private _samplePercentage?: number; 
  public get samplePercentage() {
    return this.getNumberAttribute('sample_percentage');
  }
  public set samplePercentage(value: number) {
    this._samplePercentage = value;
  }
  public resetSamplePercentage() {
    this._samplePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplePercentageInput() {
    return this._samplePercentage;
  }

  // sample_row - computed: false, optional: true, required: false
  private _sampleRow?: number; 
  public get sampleRow() {
    return this.getNumberAttribute('sample_row');
  }
  public set sampleRow(value: number) {
    this._sampleRow = value;
  }
  public resetSampleRow() {
    this._sampleRow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRowInput() {
    return this._sampleRow;
  }
}
export interface ContactCenterInsightsAssessmentRuleScheduleInfo {
  /**
  * End time of the schedule. If not specified, will keep scheduling new
  * pipelines for execution until the schedule is no longer active or deleted.
  * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
  * up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_assessment_rule#end_time ContactCenterInsightsAssessmentRule#end_time}
  */
  readonly endTime?: string;
  /**
  * The groc expression.
  * Format: 'every number [synchronized]'
  * Cron syntax is not supported.
  * Time units can be: minutes, hours
  * Synchronized is optional and indicates that the schedule should be
  * synchronized to the start of the interval: every 5 minutes synchronized
  * means 00:00, 00:05 ...
  * Otherwise the start time is random within the interval.
  * Example: 'every 5 minutes'
  * could be  00:02, 00:07, 00:12, ...
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_assessment_rule#schedule ContactCenterInsightsAssessmentRule#schedule}
  */
  readonly schedule?: string;
  /**
  * Start time of the schedule. If not specified, will start as soon as the
  * schedule is created.
  * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
  * up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_assessment_rule#start_time ContactCenterInsightsAssessmentRule#start_time}
  */
  readonly startTime?: string;
  /**
  * The timezone to use for the groc expression.
  * If not specified, defaults to UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_assessment_rule#time_zone ContactCenterInsightsAssessmentRule#time_zone}
  */
  readonly timeZone?: string;
}

export function contactCenterInsightsAssessmentRuleScheduleInfoToTerraform(struct?: ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference | ContactCenterInsightsAssessmentRuleScheduleInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktn.stringToTerraform(struct!.endTime),
    schedule: cdktn.stringToTerraform(struct!.schedule),
    start_time: cdktn.stringToTerraform(struct!.startTime),
    time_zone: cdktn.stringToTerraform(struct!.timeZone),
  }
}


export function contactCenterInsightsAssessmentRuleScheduleInfoToHclTerraform(struct?: ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference | ContactCenterInsightsAssessmentRuleScheduleInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktn.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: cdktn.stringToHclTerraform(struct!.schedule),
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
    time_zone: {
      value: cdktn.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContactCenterInsightsAssessmentRuleScheduleInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactCenterInsightsAssessmentRuleScheduleInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._schedule = undefined;
      this._startTime = undefined;
      this._timeZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._schedule = value.schedule;
      this._startTime = value.startTime;
      this._timeZone = value.timeZone;
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

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
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

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface ContactCenterInsightsAssessmentRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_assessment_rule#create ContactCenterInsightsAssessmentRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_assessment_rule#delete ContactCenterInsightsAssessmentRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_assessment_rule#update ContactCenterInsightsAssessmentRule#update}
  */
  readonly update?: string;
}

export function contactCenterInsightsAssessmentRuleTimeoutsToTerraform(struct?: ContactCenterInsightsAssessmentRuleTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function contactCenterInsightsAssessmentRuleTimeoutsToHclTerraform(struct?: ContactCenterInsightsAssessmentRuleTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ContactCenterInsightsAssessmentRuleTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ContactCenterInsightsAssessmentRuleTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ContactCenterInsightsAssessmentRuleTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_assessment_rule google_contact_center_insights_assessment_rule}
*/
export class ContactCenterInsightsAssessmentRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_contact_center_insights_assessment_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ContactCenterInsightsAssessmentRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContactCenterInsightsAssessmentRule to import
  * @param importFromId The id of the existing ContactCenterInsightsAssessmentRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_assessment_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContactCenterInsightsAssessmentRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_contact_center_insights_assessment_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_assessment_rule google_contact_center_insights_assessment_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContactCenterInsightsAssessmentRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ContactCenterInsightsAssessmentRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_contact_center_insights_assessment_rule',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.34.0',
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
    this._active = config.active;
    this._assessmentRuleId = config.assessmentRuleId;
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._sampleRule.internalValue = config.sampleRule;
    this._scheduleInfo.internalValue = config.scheduleInfo;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktn.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktn.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // assessment_rule_id - computed: false, optional: true, required: false
  private _assessmentRuleId?: string; 
  public get assessmentRuleId() {
    return this.getStringAttribute('assessment_rule_id');
  }
  public set assessmentRuleId(value: string) {
    this._assessmentRuleId = value;
  }
  public resetAssessmentRuleId() {
    this._assessmentRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assessmentRuleIdInput() {
    return this._assessmentRuleId;
  }

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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // sample_rule - computed: false, optional: true, required: false
  private _sampleRule = new ContactCenterInsightsAssessmentRuleSampleRuleOutputReference(this, "sample_rule");
  public get sampleRule() {
    return this._sampleRule;
  }
  public putSampleRule(value: ContactCenterInsightsAssessmentRuleSampleRule) {
    this._sampleRule.internalValue = value;
  }
  public resetSampleRule() {
    this._sampleRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRuleInput() {
    return this._sampleRule.internalValue;
  }

  // schedule_info - computed: false, optional: true, required: false
  private _scheduleInfo = new ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference(this, "schedule_info");
  public get scheduleInfo() {
    return this._scheduleInfo;
  }
  public putScheduleInfo(value: ContactCenterInsightsAssessmentRuleScheduleInfo) {
    this._scheduleInfo.internalValue = value;
  }
  public resetScheduleInfo() {
    this._scheduleInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInfoInput() {
    return this._scheduleInfo.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContactCenterInsightsAssessmentRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContactCenterInsightsAssessmentRuleTimeouts) {
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
      active: cdktn.booleanToTerraform(this._active),
      assessment_rule_id: cdktn.stringToTerraform(this._assessmentRuleId),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      sample_rule: contactCenterInsightsAssessmentRuleSampleRuleToTerraform(this._sampleRule.internalValue),
      schedule_info: contactCenterInsightsAssessmentRuleScheduleInfoToTerraform(this._scheduleInfo.internalValue),
      timeouts: contactCenterInsightsAssessmentRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktn.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      assessment_rule_id: {
        value: cdktn.stringToHclTerraform(this._assessmentRuleId),
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
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sample_rule: {
        value: contactCenterInsightsAssessmentRuleSampleRuleToHclTerraform(this._sampleRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContactCenterInsightsAssessmentRuleSampleRuleList",
      },
      schedule_info: {
        value: contactCenterInsightsAssessmentRuleScheduleInfoToHclTerraform(this._scheduleInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContactCenterInsightsAssessmentRuleScheduleInfoList",
      },
      timeouts: {
        value: contactCenterInsightsAssessmentRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ContactCenterInsightsAssessmentRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
