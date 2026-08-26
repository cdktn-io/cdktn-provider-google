/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_datapolicy_data_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BigqueryDatapolicyDataPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * User-assigned (human readable) ID of the data policy that needs to be unique within a project. Used as {dataPolicyId} in part of the resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_datapolicy_data_policy#data_policy_id BigqueryDatapolicyDataPolicy#data_policy_id}
  */
  readonly dataPolicyId: string;
  /**
  * The enrollment level of the service. Possible values: ["COLUMN_LEVEL_SECURITY_POLICY", "DATA_MASKING_POLICY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_datapolicy_data_policy#data_policy_type BigqueryDatapolicyDataPolicy#data_policy_type}
  */
  readonly dataPolicyType: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_datapolicy_data_policy#deletion_policy BigqueryDatapolicyDataPolicy#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_datapolicy_data_policy#id BigqueryDatapolicyDataPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the location of the data policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_datapolicy_data_policy#location BigqueryDatapolicyDataPolicy#location}
  */
  readonly location: string;
  /**
  * Policy tag resource name, in the format of projects/{project_number}/locations/{locationId}/taxonomies/{taxonomyId}/policyTags/{policyTag_id}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_datapolicy_data_policy#policy_tag BigqueryDatapolicyDataPolicy#policy_tag}
  */
  readonly policyTag: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_datapolicy_data_policy#project BigqueryDatapolicyDataPolicy#project}
  */
  readonly project?: string;
  /**
  * data_masking_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_datapolicy_data_policy#data_masking_policy BigqueryDatapolicyDataPolicy#data_masking_policy}
  */
  readonly dataMaskingPolicy?: BigqueryDatapolicyDataPolicyDataMaskingPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_datapolicy_data_policy#timeouts BigqueryDatapolicyDataPolicy#timeouts}
  */
  readonly timeouts?: BigqueryDatapolicyDataPolicyTimeouts;
}
export interface BigqueryDatapolicyDataPolicyDataMaskingPolicy {
  /**
  * The available masking rules. Learn more here: https://cloud.google.com/bigquery/docs/column-data-masking-intro#masking_options. Possible values: ["SHA256", "ALWAYS_NULL", "DEFAULT_MASKING_VALUE", "LAST_FOUR_CHARACTERS", "FIRST_FOUR_CHARACTERS", "EMAIL_MASK", "DATE_YEAR_MASK"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_datapolicy_data_policy#predefined_expression BigqueryDatapolicyDataPolicy#predefined_expression}
  */
  readonly predefinedExpression?: string;
  /**
  * The name of the BigQuery routine that contains the custom masking routine, in the format of projects/{projectNumber}/datasets/{dataset_id}/routines/{routine_id}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_datapolicy_data_policy#routine BigqueryDatapolicyDataPolicy#routine}
  */
  readonly routine?: string;
}

export function bigqueryDatapolicyDataPolicyDataMaskingPolicyToTerraform(struct?: BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference | BigqueryDatapolicyDataPolicyDataMaskingPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    predefined_expression: cdktn.stringToTerraform(struct!.predefinedExpression),
    routine: cdktn.stringToTerraform(struct!.routine),
  }
}


export function bigqueryDatapolicyDataPolicyDataMaskingPolicyToHclTerraform(struct?: BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference | BigqueryDatapolicyDataPolicyDataMaskingPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    predefined_expression: {
      value: cdktn.stringToHclTerraform(struct!.predefinedExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routine: {
      value: cdktn.stringToHclTerraform(struct!.routine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryDatapolicyDataPolicyDataMaskingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._predefinedExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedExpression = this._predefinedExpression;
    }
    if (this._routine !== undefined) {
      hasAnyValues = true;
      internalValueResult.routine = this._routine;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryDatapolicyDataPolicyDataMaskingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._predefinedExpression = undefined;
      this._routine = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._predefinedExpression = value.predefinedExpression;
      this._routine = value.routine;
    }
  }

  // predefined_expression - computed: false, optional: true, required: false
  private _predefinedExpression?: string; 
  public get predefinedExpression() {
    return this.getStringAttribute('predefined_expression');
  }
  public set predefinedExpression(value: string) {
    this._predefinedExpression = value;
  }
  public resetPredefinedExpression() {
    this._predefinedExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedExpressionInput() {
    return this._predefinedExpression;
  }

  // routine - computed: false, optional: true, required: false
  private _routine?: string; 
  public get routine() {
    return this.getStringAttribute('routine');
  }
  public set routine(value: string) {
    this._routine = value;
  }
  public resetRoutine() {
    this._routine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routineInput() {
    return this._routine;
  }
}
export interface BigqueryDatapolicyDataPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_datapolicy_data_policy#create BigqueryDatapolicyDataPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_datapolicy_data_policy#delete BigqueryDatapolicyDataPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_datapolicy_data_policy#update BigqueryDatapolicyDataPolicy#update}
  */
  readonly update?: string;
}

export function bigqueryDatapolicyDataPolicyTimeoutsToTerraform(struct?: BigqueryDatapolicyDataPolicyTimeouts | cdktn.IResolvable): any {
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


export function bigqueryDatapolicyDataPolicyTimeoutsToHclTerraform(struct?: BigqueryDatapolicyDataPolicyTimeouts | cdktn.IResolvable): any {
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

export class BigqueryDatapolicyDataPolicyTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BigqueryDatapolicyDataPolicyTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BigqueryDatapolicyDataPolicyTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_datapolicy_data_policy google_bigquery_datapolicy_data_policy}
*/
export class BigqueryDatapolicyDataPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigquery_datapolicy_data_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BigqueryDatapolicyDataPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BigqueryDatapolicyDataPolicy to import
  * @param importFromId The id of the existing BigqueryDatapolicyDataPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_datapolicy_data_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BigqueryDatapolicyDataPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_bigquery_datapolicy_data_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigquery_datapolicy_data_policy google_bigquery_datapolicy_data_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigqueryDatapolicyDataPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: BigqueryDatapolicyDataPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_datapolicy_data_policy',
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
    this._dataPolicyId = config.dataPolicyId;
    this._dataPolicyType = config.dataPolicyType;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._location = config.location;
    this._policyTag = config.policyTag;
    this._project = config.project;
    this._dataMaskingPolicy.internalValue = config.dataMaskingPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_policy_id - computed: false, optional: false, required: true
  private _dataPolicyId?: string; 
  public get dataPolicyId() {
    return this.getStringAttribute('data_policy_id');
  }
  public set dataPolicyId(value: string) {
    this._dataPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPolicyIdInput() {
    return this._dataPolicyId;
  }

  // data_policy_type - computed: false, optional: false, required: true
  private _dataPolicyType?: string; 
  public get dataPolicyType() {
    return this.getStringAttribute('data_policy_type');
  }
  public set dataPolicyType(value: string) {
    this._dataPolicyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPolicyTypeInput() {
    return this._dataPolicyType;
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

  // policy_tag - computed: false, optional: false, required: true
  private _policyTag?: string; 
  public get policyTag() {
    return this.getStringAttribute('policy_tag');
  }
  public set policyTag(value: string) {
    this._policyTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTagInput() {
    return this._policyTag;
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

  // data_masking_policy - computed: false, optional: true, required: false
  private _dataMaskingPolicy = new BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference(this, "data_masking_policy");
  public get dataMaskingPolicy() {
    return this._dataMaskingPolicy;
  }
  public putDataMaskingPolicy(value: BigqueryDatapolicyDataPolicyDataMaskingPolicy) {
    this._dataMaskingPolicy.internalValue = value;
  }
  public resetDataMaskingPolicy() {
    this._dataMaskingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataMaskingPolicyInput() {
    return this._dataMaskingPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BigqueryDatapolicyDataPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BigqueryDatapolicyDataPolicyTimeouts) {
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
      data_policy_id: cdktn.stringToTerraform(this._dataPolicyId),
      data_policy_type: cdktn.stringToTerraform(this._dataPolicyType),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      policy_tag: cdktn.stringToTerraform(this._policyTag),
      project: cdktn.stringToTerraform(this._project),
      data_masking_policy: bigqueryDatapolicyDataPolicyDataMaskingPolicyToTerraform(this._dataMaskingPolicy.internalValue),
      timeouts: bigqueryDatapolicyDataPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_policy_id: {
        value: cdktn.stringToHclTerraform(this._dataPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_policy_type: {
        value: cdktn.stringToHclTerraform(this._dataPolicyType),
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
      policy_tag: {
        value: cdktn.stringToHclTerraform(this._policyTag),
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
      data_masking_policy: {
        value: bigqueryDatapolicyDataPolicyDataMaskingPolicyToHclTerraform(this._dataMaskingPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryDatapolicyDataPolicyDataMaskingPolicyList",
      },
      timeouts: {
        value: bigqueryDatapolicyDataPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BigqueryDatapolicyDataPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
