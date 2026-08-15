/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_capacity_commitment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BigqueryCapacityCommitmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * The optional capacity commitment ID. Capacity commitment name will be generated automatically if this field is
  * empty. This field must only contain lower case alphanumeric characters or dashes. The first and last character
  * cannot be a dash. Max length is 64 characters. NOTE: this ID won't be kept if the capacity commitment is split
  * or merged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_capacity_commitment#capacity_commitment_id BigqueryCapacityCommitment#capacity_commitment_id}
  */
  readonly capacityCommitmentId?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_capacity_commitment#deletion_policy BigqueryCapacityCommitment#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_capacity_commitment#edition BigqueryCapacityCommitment#edition}
  */
  readonly edition?: string;
  /**
  * If true, fail the request if another project in the organization has a capacity commitment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_capacity_commitment#enforce_single_admin_project_per_org BigqueryCapacityCommitment#enforce_single_admin_project_per_org}
  */
  readonly enforceSingleAdminProjectPerOrg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_capacity_commitment#id BigqueryCapacityCommitment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The geographic location where the transfer config should reside.
  * Examples: US, EU, asia-northeast1. The default value is US.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_capacity_commitment#location BigqueryCapacityCommitment#location}
  */
  readonly location?: string;
  /**
  * Capacity commitment plan. Valid values are at https://cloud.google.com/bigquery/docs/reference/reservations/rpc/google.cloud.bigquery.reservation.v1#commitmentplan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_capacity_commitment#plan BigqueryCapacityCommitment#plan}
  */
  readonly plan: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_capacity_commitment#project BigqueryCapacityCommitment#project}
  */
  readonly project?: string;
  /**
  * The plan this capacity commitment is converted to after commitmentEndTime passes. Once the plan is changed, committed period is extended according to commitment plan. Only applicable for some commitment plans.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_capacity_commitment#renewal_plan BigqueryCapacityCommitment#renewal_plan}
  */
  readonly renewalPlan?: string;
  /**
  * Number of slots in this commitment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_capacity_commitment#slot_count BigqueryCapacityCommitment#slot_count}
  */
  readonly slotCount: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_capacity_commitment#timeouts BigqueryCapacityCommitment#timeouts}
  */
  readonly timeouts?: BigqueryCapacityCommitmentTimeouts;
}
export interface BigqueryCapacityCommitmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_capacity_commitment#create BigqueryCapacityCommitment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_capacity_commitment#delete BigqueryCapacityCommitment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_capacity_commitment#update BigqueryCapacityCommitment#update}
  */
  readonly update?: string;
}

export function bigqueryCapacityCommitmentTimeoutsToTerraform(struct?: BigqueryCapacityCommitmentTimeouts | cdktn.IResolvable): any {
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


export function bigqueryCapacityCommitmentTimeoutsToHclTerraform(struct?: BigqueryCapacityCommitmentTimeouts | cdktn.IResolvable): any {
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

export class BigqueryCapacityCommitmentTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BigqueryCapacityCommitmentTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BigqueryCapacityCommitmentTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_capacity_commitment google_bigquery_capacity_commitment}
*/
export class BigqueryCapacityCommitment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigquery_capacity_commitment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BigqueryCapacityCommitment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BigqueryCapacityCommitment to import
  * @param importFromId The id of the existing BigqueryCapacityCommitment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_capacity_commitment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BigqueryCapacityCommitment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_bigquery_capacity_commitment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_capacity_commitment google_bigquery_capacity_commitment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigqueryCapacityCommitmentConfig
  */
  public constructor(scope: Construct, id: string, config: BigqueryCapacityCommitmentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_capacity_commitment',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.44.0',
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
    this._capacityCommitmentId = config.capacityCommitmentId;
    this._deletionPolicy = config.deletionPolicy;
    this._edition = config.edition;
    this._enforceSingleAdminProjectPerOrg = config.enforceSingleAdminProjectPerOrg;
    this._id = config.id;
    this._location = config.location;
    this._plan = config.plan;
    this._project = config.project;
    this._renewalPlan = config.renewalPlan;
    this._slotCount = config.slotCount;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity_commitment_id - computed: false, optional: true, required: false
  private _capacityCommitmentId?: string; 
  public get capacityCommitmentId() {
    return this.getStringAttribute('capacity_commitment_id');
  }
  public set capacityCommitmentId(value: string) {
    this._capacityCommitmentId = value;
  }
  public resetCapacityCommitmentId() {
    this._capacityCommitmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityCommitmentIdInput() {
    return this._capacityCommitmentId;
  }

  // commitment_end_time - computed: true, optional: false, required: false
  public get commitmentEndTime() {
    return this.getStringAttribute('commitment_end_time');
  }

  // commitment_start_time - computed: true, optional: false, required: false
  public get commitmentStartTime() {
    return this.getStringAttribute('commitment_start_time');
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

  // edition - computed: false, optional: true, required: false
  private _edition?: string; 
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string) {
    this._edition = value;
  }
  public resetEdition() {
    this._edition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition;
  }

  // enforce_single_admin_project_per_org - computed: false, optional: true, required: false
  private _enforceSingleAdminProjectPerOrg?: string; 
  public get enforceSingleAdminProjectPerOrg() {
    return this.getStringAttribute('enforce_single_admin_project_per_org');
  }
  public set enforceSingleAdminProjectPerOrg(value: string) {
    this._enforceSingleAdminProjectPerOrg = value;
  }
  public resetEnforceSingleAdminProjectPerOrg() {
    this._enforceSingleAdminProjectPerOrg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceSingleAdminProjectPerOrgInput() {
    return this._enforceSingleAdminProjectPerOrg;
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // plan - computed: false, optional: false, required: true
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
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

  // renewal_plan - computed: false, optional: true, required: false
  private _renewalPlan?: string; 
  public get renewalPlan() {
    return this.getStringAttribute('renewal_plan');
  }
  public set renewalPlan(value: string) {
    this._renewalPlan = value;
  }
  public resetRenewalPlan() {
    this._renewalPlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewalPlanInput() {
    return this._renewalPlan;
  }

  // slot_count - computed: false, optional: false, required: true
  private _slotCount?: number; 
  public get slotCount() {
    return this.getNumberAttribute('slot_count');
  }
  public set slotCount(value: number) {
    this._slotCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slotCountInput() {
    return this._slotCount;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BigqueryCapacityCommitmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BigqueryCapacityCommitmentTimeouts) {
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
      capacity_commitment_id: cdktn.stringToTerraform(this._capacityCommitmentId),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      edition: cdktn.stringToTerraform(this._edition),
      enforce_single_admin_project_per_org: cdktn.stringToTerraform(this._enforceSingleAdminProjectPerOrg),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      plan: cdktn.stringToTerraform(this._plan),
      project: cdktn.stringToTerraform(this._project),
      renewal_plan: cdktn.stringToTerraform(this._renewalPlan),
      slot_count: cdktn.numberToTerraform(this._slotCount),
      timeouts: bigqueryCapacityCommitmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity_commitment_id: {
        value: cdktn.stringToHclTerraform(this._capacityCommitmentId),
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
      edition: {
        value: cdktn.stringToHclTerraform(this._edition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforce_single_admin_project_per_org: {
        value: cdktn.stringToHclTerraform(this._enforceSingleAdminProjectPerOrg),
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
      plan: {
        value: cdktn.stringToHclTerraform(this._plan),
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
      renewal_plan: {
        value: cdktn.stringToHclTerraform(this._renewalPlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_count: {
        value: cdktn.numberToHclTerraform(this._slotCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: bigqueryCapacityCommitmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BigqueryCapacityCommitmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
