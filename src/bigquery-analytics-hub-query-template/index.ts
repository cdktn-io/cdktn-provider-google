/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_analytics_hub_query_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BigqueryAnalyticsHubQueryTemplateConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_analytics_hub_query_template#data_exchange_id BigqueryAnalyticsHubQueryTemplate#data_exchange_id}
  */
  readonly dataExchangeId: string;
  /**
  * This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/bigquery_analytics_hub_query_template.html.markdown for specifics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_analytics_hub_query_template#deletion_policy BigqueryAnalyticsHubQueryTemplate#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Short description of the QueryTemplate. The description must not contain
  * Unicode non-characters and C0 and C1 control codes except tabs,
  * new lines, carriage returns, and page breaks.
  * Default value is an empty string. Max length: 2000 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_analytics_hub_query_template#description BigqueryAnalyticsHubQueryTemplate#description}
  */
  readonly description?: string;
  /**
  * Human-readable display name of the QueryTemplate. The display name must
  * contain only Unicode letters, numbers (0-9), underscores (_), dashes (-),
  * spaces ( ), ampersands (&) and can't start or end with spaces. Default
  * value is an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_analytics_hub_query_template#display_name BigqueryAnalyticsHubQueryTemplate#display_name}
  */
  readonly displayName: string;
  /**
  * Documentation describing the QueryTemplate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_analytics_hub_query_template#documentation BigqueryAnalyticsHubQueryTemplate#documentation}
  */
  readonly documentation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_analytics_hub_query_template#id BigqueryAnalyticsHubQueryTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the location this data exchange query template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_analytics_hub_query_template#location BigqueryAnalyticsHubQueryTemplate#location}
  */
  readonly location: string;
  /**
  * Email or URL of the primary point of contact of the QueryTemplate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_analytics_hub_query_template#primary_contact BigqueryAnalyticsHubQueryTemplate#primary_contact}
  */
  readonly primaryContact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_analytics_hub_query_template#project BigqueryAnalyticsHubQueryTemplate#project}
  */
  readonly project?: string;
  /**
  * Unique QueryTemplate ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_analytics_hub_query_template#query_template_id BigqueryAnalyticsHubQueryTemplate#query_template_id}
  */
  readonly queryTemplateId: string;
  /**
  * If set to 'true', the QueryTemplate will be submitted for approval and cannot be updated afterwards. This is a one-time action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_analytics_hub_query_template#submit BigqueryAnalyticsHubQueryTemplate#submit}
  */
  readonly submit?: boolean | cdktn.IResolvable;
  /**
  * routine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_analytics_hub_query_template#routine BigqueryAnalyticsHubQueryTemplate#routine}
  */
  readonly routine?: BigqueryAnalyticsHubQueryTemplateRoutine;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_analytics_hub_query_template#timeouts BigqueryAnalyticsHubQueryTemplate#timeouts}
  */
  readonly timeouts?: BigqueryAnalyticsHubQueryTemplateTimeouts;
}
export interface BigqueryAnalyticsHubQueryTemplateRoutine {
  /**
  * SQL query logic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_analytics_hub_query_template#definition_body BigqueryAnalyticsHubQueryTemplate#definition_body}
  */
  readonly definitionBody?: string;
  /**
  * Type of routine (e.g., TABLE_VALUED_FUNCTION). Possible values: ["TABLE_VALUED_FUNCTION"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_analytics_hub_query_template#routine_type BigqueryAnalyticsHubQueryTemplate#routine_type}
  */
  readonly routineType?: string;
}

export function bigqueryAnalyticsHubQueryTemplateRoutineToTerraform(struct?: BigqueryAnalyticsHubQueryTemplateRoutineOutputReference | BigqueryAnalyticsHubQueryTemplateRoutine): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definition_body: cdktn.stringToTerraform(struct!.definitionBody),
    routine_type: cdktn.stringToTerraform(struct!.routineType),
  }
}


export function bigqueryAnalyticsHubQueryTemplateRoutineToHclTerraform(struct?: BigqueryAnalyticsHubQueryTemplateRoutineOutputReference | BigqueryAnalyticsHubQueryTemplateRoutine): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    definition_body: {
      value: cdktn.stringToHclTerraform(struct!.definitionBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routine_type: {
      value: cdktn.stringToHclTerraform(struct!.routineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryAnalyticsHubQueryTemplateRoutineOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryAnalyticsHubQueryTemplateRoutine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definitionBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.definitionBody = this._definitionBody;
    }
    if (this._routineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.routineType = this._routineType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubQueryTemplateRoutine | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._definitionBody = undefined;
      this._routineType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._definitionBody = value.definitionBody;
      this._routineType = value.routineType;
    }
  }

  // definition_body - computed: false, optional: true, required: false
  private _definitionBody?: string; 
  public get definitionBody() {
    return this.getStringAttribute('definition_body');
  }
  public set definitionBody(value: string) {
    this._definitionBody = value;
  }
  public resetDefinitionBody() {
    this._definitionBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionBodyInput() {
    return this._definitionBody;
  }

  // routine_type - computed: false, optional: true, required: false
  private _routineType?: string; 
  public get routineType() {
    return this.getStringAttribute('routine_type');
  }
  public set routineType(value: string) {
    this._routineType = value;
  }
  public resetRoutineType() {
    this._routineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routineTypeInput() {
    return this._routineType;
  }
}
export interface BigqueryAnalyticsHubQueryTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_analytics_hub_query_template#create BigqueryAnalyticsHubQueryTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_analytics_hub_query_template#delete BigqueryAnalyticsHubQueryTemplate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_analytics_hub_query_template#update BigqueryAnalyticsHubQueryTemplate#update}
  */
  readonly update?: string;
}

export function bigqueryAnalyticsHubQueryTemplateTimeoutsToTerraform(struct?: BigqueryAnalyticsHubQueryTemplateTimeouts | cdktn.IResolvable): any {
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


export function bigqueryAnalyticsHubQueryTemplateTimeoutsToHclTerraform(struct?: BigqueryAnalyticsHubQueryTemplateTimeouts | cdktn.IResolvable): any {
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

export class BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BigqueryAnalyticsHubQueryTemplateTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BigqueryAnalyticsHubQueryTemplateTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_analytics_hub_query_template google_bigquery_analytics_hub_query_template}
*/
export class BigqueryAnalyticsHubQueryTemplate extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigquery_analytics_hub_query_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BigqueryAnalyticsHubQueryTemplate resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BigqueryAnalyticsHubQueryTemplate to import
  * @param importFromId The id of the existing BigqueryAnalyticsHubQueryTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_analytics_hub_query_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BigqueryAnalyticsHubQueryTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_bigquery_analytics_hub_query_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_analytics_hub_query_template google_bigquery_analytics_hub_query_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigqueryAnalyticsHubQueryTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: BigqueryAnalyticsHubQueryTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_analytics_hub_query_template',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.46.0',
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
    this._dataExchangeId = config.dataExchangeId;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._displayName = config.displayName;
    this._documentation = config.documentation;
    this._id = config.id;
    this._location = config.location;
    this._primaryContact = config.primaryContact;
    this._project = config.project;
    this._queryTemplateId = config.queryTemplateId;
    this._submit = config.submit;
    this._routine.internalValue = config.routine;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_exchange_id - computed: false, optional: false, required: true
  private _dataExchangeId?: string; 
  public get dataExchangeId() {
    return this.getStringAttribute('data_exchange_id');
  }
  public set dataExchangeId(value: string) {
    this._dataExchangeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataExchangeIdInput() {
    return this._dataExchangeId;
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

  // documentation - computed: false, optional: true, required: false
  private _documentation?: string; 
  public get documentation() {
    return this.getStringAttribute('documentation');
  }
  public set documentation(value: string) {
    this._documentation = value;
  }
  public resetDocumentation() {
    this._documentation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentationInput() {
    return this._documentation;
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

  // primary_contact - computed: false, optional: true, required: false
  private _primaryContact?: string; 
  public get primaryContact() {
    return this.getStringAttribute('primary_contact');
  }
  public set primaryContact(value: string) {
    this._primaryContact = value;
  }
  public resetPrimaryContact() {
    this._primaryContact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryContactInput() {
    return this._primaryContact;
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

  // query_template_id - computed: false, optional: false, required: true
  private _queryTemplateId?: string; 
  public get queryTemplateId() {
    return this.getStringAttribute('query_template_id');
  }
  public set queryTemplateId(value: string) {
    this._queryTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTemplateIdInput() {
    return this._queryTemplateId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // submit - computed: false, optional: true, required: false
  private _submit?: boolean | cdktn.IResolvable; 
  public get submit() {
    return this.getBooleanAttribute('submit');
  }
  public set submit(value: boolean | cdktn.IResolvable) {
    this._submit = value;
  }
  public resetSubmit() {
    this._submit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get submitInput() {
    return this._submit;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // routine - computed: false, optional: true, required: false
  private _routine = new BigqueryAnalyticsHubQueryTemplateRoutineOutputReference(this, "routine");
  public get routine() {
    return this._routine;
  }
  public putRoutine(value: BigqueryAnalyticsHubQueryTemplateRoutine) {
    this._routine.internalValue = value;
  }
  public resetRoutine() {
    this._routine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routineInput() {
    return this._routine.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BigqueryAnalyticsHubQueryTemplateTimeouts) {
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
      data_exchange_id: cdktn.stringToTerraform(this._dataExchangeId),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      documentation: cdktn.stringToTerraform(this._documentation),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      primary_contact: cdktn.stringToTerraform(this._primaryContact),
      project: cdktn.stringToTerraform(this._project),
      query_template_id: cdktn.stringToTerraform(this._queryTemplateId),
      submit: cdktn.booleanToTerraform(this._submit),
      routine: bigqueryAnalyticsHubQueryTemplateRoutineToTerraform(this._routine.internalValue),
      timeouts: bigqueryAnalyticsHubQueryTemplateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_exchange_id: {
        value: cdktn.stringToHclTerraform(this._dataExchangeId),
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
      documentation: {
        value: cdktn.stringToHclTerraform(this._documentation),
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
      primary_contact: {
        value: cdktn.stringToHclTerraform(this._primaryContact),
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
      query_template_id: {
        value: cdktn.stringToHclTerraform(this._queryTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      submit: {
        value: cdktn.booleanToHclTerraform(this._submit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      routine: {
        value: bigqueryAnalyticsHubQueryTemplateRoutineToHclTerraform(this._routine.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryAnalyticsHubQueryTemplateRoutineList",
      },
      timeouts: {
        value: bigqueryAnalyticsHubQueryTemplateTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BigqueryAnalyticsHubQueryTemplateTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
