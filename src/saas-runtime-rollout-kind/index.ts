/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SaasRuntimeRolloutKindConfig extends cdktn.TerraformMetaArguments {
  /**
  * Annotations is an unstructured key-value map stored with a resource that
  * may be set by external tools to store and retrieve arbitrary metadata.
  * They are not queryable and should be preserved when modifying objects.
  * 
  * More info: https://kubernetes.io/docs/user-guide/annotations
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#annotations SaasRuntimeRolloutKind#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#deletion_policy SaasRuntimeRolloutKind#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#id SaasRuntimeRolloutKind#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels on the resource, which can be used for categorization.
  * similar to Kubernetes resource labels.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#labels SaasRuntimeRolloutKind#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#location SaasRuntimeRolloutKind#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#project SaasRuntimeRolloutKind#project}
  */
  readonly project?: string;
  /**
  * The ID value for the new rollout kind.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#rollout_kind_id SaasRuntimeRolloutKind#rollout_kind_id}
  */
  readonly rolloutKindId: string;
  /**
  * The strategy used for executing a Rollout. This is a required field.
  * 
  * There are two supported values strategies which are used to control a rollout.
  * - "Google.Cloud.Simple.AllAtOnce"
  * - "Google.Cloud.Simple.OneLocationAtATime"
  * 
  * A rollout with one of these simple strategies will rollout across
  * all locations defined in the associated UnitKind's Saas Locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#rollout_orchestration_strategy SaasRuntimeRolloutKind#rollout_orchestration_strategy}
  */
  readonly rolloutOrchestrationStrategy?: string;
  /**
  * CEL(https://github.com/google/cel-spec) formatted filter string against
  * Unit. The filter will be applied to determine the eligible unit population.
  * This filter can only reduce, but not expand the scope of the rollout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#unit_filter SaasRuntimeRolloutKind#unit_filter}
  */
  readonly unitFilter?: string;
  /**
  * UnitKind that this rollout kind corresponds to. Rollouts stemming from this
  * rollout kind will target the units of this unit kind. In other words, this
  * defines the population of target units to be upgraded by rollouts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#unit_kind SaasRuntimeRolloutKind#unit_kind}
  */
  readonly unitKind: string;
  /**
  * The config for updating the unit kind. By default, the unit kind will be
  * updated on the rollout start.
  * Possible values:
  * UPDATE_UNIT_KIND_STRATEGY_ON_START
  * UPDATE_UNIT_KIND_STRATEGY_NEVER Possible values: ["UPDATE_UNIT_KIND_STRATEGY_ON_START", "UPDATE_UNIT_KIND_STRATEGY_NEVER"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#update_unit_kind_strategy SaasRuntimeRolloutKind#update_unit_kind_strategy}
  */
  readonly updateUnitKindStrategy?: string;
  /**
  * error_budget block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#error_budget SaasRuntimeRolloutKind#error_budget}
  */
  readonly errorBudget?: SaasRuntimeRolloutKindErrorBudget;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#timeouts SaasRuntimeRolloutKind#timeouts}
  */
  readonly timeouts?: SaasRuntimeRolloutKindTimeouts;
}
export interface SaasRuntimeRolloutKindErrorBudget {
  /**
  * The maximum number of failed units allowed in a location without pausing
  * the rollout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#allowed_count SaasRuntimeRolloutKind#allowed_count}
  */
  readonly allowedCount?: number;
  /**
  * The maximum percentage of units allowed to fail (0, 100] within a location
  * without pausing the rollout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#allowed_percentage SaasRuntimeRolloutKind#allowed_percentage}
  */
  readonly allowedPercentage?: number;
}

export function saasRuntimeRolloutKindErrorBudgetToTerraform(struct?: SaasRuntimeRolloutKindErrorBudgetOutputReference | SaasRuntimeRolloutKindErrorBudget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_count: cdktn.numberToTerraform(struct!.allowedCount),
    allowed_percentage: cdktn.numberToTerraform(struct!.allowedPercentage),
  }
}


export function saasRuntimeRolloutKindErrorBudgetToHclTerraform(struct?: SaasRuntimeRolloutKindErrorBudgetOutputReference | SaasRuntimeRolloutKindErrorBudget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_count: {
      value: cdktn.numberToHclTerraform(struct!.allowedCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allowed_percentage: {
      value: cdktn.numberToHclTerraform(struct!.allowedPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaasRuntimeRolloutKindErrorBudgetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaasRuntimeRolloutKindErrorBudget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedCount = this._allowedCount;
    }
    if (this._allowedPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedPercentage = this._allowedPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaasRuntimeRolloutKindErrorBudget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedCount = undefined;
      this._allowedPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedCount = value.allowedCount;
      this._allowedPercentage = value.allowedPercentage;
    }
  }

  // allowed_count - computed: false, optional: true, required: false
  private _allowedCount?: number; 
  public get allowedCount() {
    return this.getNumberAttribute('allowed_count');
  }
  public set allowedCount(value: number) {
    this._allowedCount = value;
  }
  public resetAllowedCount() {
    this._allowedCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCountInput() {
    return this._allowedCount;
  }

  // allowed_percentage - computed: false, optional: true, required: false
  private _allowedPercentage?: number; 
  public get allowedPercentage() {
    return this.getNumberAttribute('allowed_percentage');
  }
  public set allowedPercentage(value: number) {
    this._allowedPercentage = value;
  }
  public resetAllowedPercentage() {
    this._allowedPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPercentageInput() {
    return this._allowedPercentage;
  }
}
export interface SaasRuntimeRolloutKindTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#create SaasRuntimeRolloutKind#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#delete SaasRuntimeRolloutKind#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#update SaasRuntimeRolloutKind#update}
  */
  readonly update?: string;
}

export function saasRuntimeRolloutKindTimeoutsToTerraform(struct?: SaasRuntimeRolloutKindTimeouts | cdktn.IResolvable): any {
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


export function saasRuntimeRolloutKindTimeoutsToHclTerraform(struct?: SaasRuntimeRolloutKindTimeouts | cdktn.IResolvable): any {
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

export class SaasRuntimeRolloutKindTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SaasRuntimeRolloutKindTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SaasRuntimeRolloutKindTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind google_saas_runtime_rollout_kind}
*/
export class SaasRuntimeRolloutKind extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_saas_runtime_rollout_kind";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SaasRuntimeRolloutKind resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SaasRuntimeRolloutKind to import
  * @param importFromId The id of the existing SaasRuntimeRolloutKind that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SaasRuntimeRolloutKind to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_saas_runtime_rollout_kind", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind google_saas_runtime_rollout_kind} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SaasRuntimeRolloutKindConfig
  */
  public constructor(scope: Construct, id: string, config: SaasRuntimeRolloutKindConfig) {
    super(scope, id, {
      terraformResourceType: 'google_saas_runtime_rollout_kind',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '8.12.0',
        providerVersionConstraint: '~> 8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._rolloutKindId = config.rolloutKindId;
    this._rolloutOrchestrationStrategy = config.rolloutOrchestrationStrategy;
    this._unitFilter = config.unitFilter;
    this._unitKind = config.unitKind;
    this._updateUnitKindStrategy = config.updateUnitKindStrategy;
    this._errorBudget.internalValue = config.errorBudget;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktn.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // rollout_kind_id - computed: false, optional: false, required: true
  private _rolloutKindId?: string; 
  public get rolloutKindId() {
    return this.getStringAttribute('rollout_kind_id');
  }
  public set rolloutKindId(value: string) {
    this._rolloutKindId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutKindIdInput() {
    return this._rolloutKindId;
  }

  // rollout_orchestration_strategy - computed: false, optional: true, required: false
  private _rolloutOrchestrationStrategy?: string; 
  public get rolloutOrchestrationStrategy() {
    return this.getStringAttribute('rollout_orchestration_strategy');
  }
  public set rolloutOrchestrationStrategy(value: string) {
    this._rolloutOrchestrationStrategy = value;
  }
  public resetRolloutOrchestrationStrategy() {
    this._rolloutOrchestrationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutOrchestrationStrategyInput() {
    return this._rolloutOrchestrationStrategy;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // unit_filter - computed: false, optional: true, required: false
  private _unitFilter?: string; 
  public get unitFilter() {
    return this.getStringAttribute('unit_filter');
  }
  public set unitFilter(value: string) {
    this._unitFilter = value;
  }
  public resetUnitFilter() {
    this._unitFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitFilterInput() {
    return this._unitFilter;
  }

  // unit_kind - computed: false, optional: false, required: true
  private _unitKind?: string; 
  public get unitKind() {
    return this.getStringAttribute('unit_kind');
  }
  public set unitKind(value: string) {
    this._unitKind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitKindInput() {
    return this._unitKind;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // update_unit_kind_strategy - computed: false, optional: true, required: false
  private _updateUnitKindStrategy?: string; 
  public get updateUnitKindStrategy() {
    return this.getStringAttribute('update_unit_kind_strategy');
  }
  public set updateUnitKindStrategy(value: string) {
    this._updateUnitKindStrategy = value;
  }
  public resetUpdateUnitKindStrategy() {
    this._updateUnitKindStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateUnitKindStrategyInput() {
    return this._updateUnitKindStrategy;
  }

  // error_budget - computed: false, optional: true, required: false
  private _errorBudget = new SaasRuntimeRolloutKindErrorBudgetOutputReference(this, "error_budget");
  public get errorBudget() {
    return this._errorBudget;
  }
  public putErrorBudget(value: SaasRuntimeRolloutKindErrorBudget) {
    this._errorBudget.internalValue = value;
  }
  public resetErrorBudget() {
    this._errorBudget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorBudgetInput() {
    return this._errorBudget.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SaasRuntimeRolloutKindTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SaasRuntimeRolloutKindTimeouts) {
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
      annotations: cdktn.hashMapper(cdktn.stringToTerraform)(this._annotations),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      rollout_kind_id: cdktn.stringToTerraform(this._rolloutKindId),
      rollout_orchestration_strategy: cdktn.stringToTerraform(this._rolloutOrchestrationStrategy),
      unit_filter: cdktn.stringToTerraform(this._unitFilter),
      unit_kind: cdktn.stringToTerraform(this._unitKind),
      update_unit_kind_strategy: cdktn.stringToTerraform(this._updateUnitKindStrategy),
      error_budget: saasRuntimeRolloutKindErrorBudgetToTerraform(this._errorBudget.internalValue),
      timeouts: saasRuntimeRolloutKindTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      rollout_kind_id: {
        value: cdktn.stringToHclTerraform(this._rolloutKindId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rollout_orchestration_strategy: {
        value: cdktn.stringToHclTerraform(this._rolloutOrchestrationStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit_filter: {
        value: cdktn.stringToHclTerraform(this._unitFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit_kind: {
        value: cdktn.stringToHclTerraform(this._unitKind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_unit_kind_strategy: {
        value: cdktn.stringToHclTerraform(this._updateUnitKindStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_budget: {
        value: saasRuntimeRolloutKindErrorBudgetToHclTerraform(this._errorBudget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SaasRuntimeRolloutKindErrorBudgetList",
      },
      timeouts: {
        value: saasRuntimeRolloutKindTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SaasRuntimeRolloutKindTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
