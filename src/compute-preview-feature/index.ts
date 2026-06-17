/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_preview_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ComputePreviewFeatureConfig extends cdktn.TerraformMetaArguments {
  /**
  * The activation status of the preview feature. Possible values: ["ENABLED", "ACTIVATION_STATE_UNSPECIFIED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_preview_feature#activation_status ComputePreviewFeature#activation_status}
  */
  readonly activationStatus: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_preview_feature#id ComputePreviewFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the preview feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_preview_feature#name ComputePreviewFeature#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_preview_feature#project ComputePreviewFeature#project}
  */
  readonly project?: string;
  /**
  * rollout_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_preview_feature#rollout_operation ComputePreviewFeature#rollout_operation}
  */
  readonly rolloutOperation?: ComputePreviewFeatureRolloutOperation;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_preview_feature#timeouts ComputePreviewFeature#timeouts}
  */
  readonly timeouts?: ComputePreviewFeatureTimeouts;
}
export interface ComputePreviewFeatureRolloutOperationRolloutInput {
  /**
  * Predefined rollout plans. Possible values: ["ROLLOUT_PLAN_FAST_ROLLOUT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_preview_feature#predefined_rollout_plan ComputePreviewFeature#predefined_rollout_plan}
  */
  readonly predefinedRolloutPlan: string;
}

export function computePreviewFeatureRolloutOperationRolloutInputToTerraform(struct?: ComputePreviewFeatureRolloutOperationRolloutInputOutputReference | ComputePreviewFeatureRolloutOperationRolloutInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    predefined_rollout_plan: cdktn.stringToTerraform(struct!.predefinedRolloutPlan),
  }
}


export function computePreviewFeatureRolloutOperationRolloutInputToHclTerraform(struct?: ComputePreviewFeatureRolloutOperationRolloutInputOutputReference | ComputePreviewFeatureRolloutOperationRolloutInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    predefined_rollout_plan: {
      value: cdktn.stringToHclTerraform(struct!.predefinedRolloutPlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputePreviewFeatureRolloutOperationRolloutInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputePreviewFeatureRolloutOperationRolloutInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._predefinedRolloutPlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedRolloutPlan = this._predefinedRolloutPlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputePreviewFeatureRolloutOperationRolloutInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._predefinedRolloutPlan = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._predefinedRolloutPlan = value.predefinedRolloutPlan;
    }
  }

  // predefined_rollout_plan - computed: false, optional: false, required: true
  private _predefinedRolloutPlan?: string; 
  public get predefinedRolloutPlan() {
    return this.getStringAttribute('predefined_rollout_plan');
  }
  public set predefinedRolloutPlan(value: string) {
    this._predefinedRolloutPlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedRolloutPlanInput() {
    return this._predefinedRolloutPlan;
  }
}
export interface ComputePreviewFeatureRolloutOperation {
  /**
  * rollout_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_preview_feature#rollout_input ComputePreviewFeature#rollout_input}
  */
  readonly rolloutInput?: ComputePreviewFeatureRolloutOperationRolloutInput;
}

export function computePreviewFeatureRolloutOperationToTerraform(struct?: ComputePreviewFeatureRolloutOperationOutputReference | ComputePreviewFeatureRolloutOperation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rollout_input: computePreviewFeatureRolloutOperationRolloutInputToTerraform(struct!.rolloutInput),
  }
}


export function computePreviewFeatureRolloutOperationToHclTerraform(struct?: ComputePreviewFeatureRolloutOperationOutputReference | ComputePreviewFeatureRolloutOperation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rollout_input: {
      value: computePreviewFeatureRolloutOperationRolloutInputToHclTerraform(struct!.rolloutInput),
      isBlock: true,
      type: "list",
      storageClassType: "ComputePreviewFeatureRolloutOperationRolloutInputList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputePreviewFeatureRolloutOperationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputePreviewFeatureRolloutOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rolloutInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolloutInput = this._rolloutInput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputePreviewFeatureRolloutOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rolloutInput.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rolloutInput.internalValue = value.rolloutInput;
    }
  }

  // rollout_input - computed: false, optional: true, required: false
  private _rolloutInput = new ComputePreviewFeatureRolloutOperationRolloutInputOutputReference(this, "rollout_input");
  public get rolloutInput() {
    return this._rolloutInput;
  }
  public putRolloutInput(value: ComputePreviewFeatureRolloutOperationRolloutInput) {
    this._rolloutInput.internalValue = value;
  }
  public resetRolloutInput() {
    this._rolloutInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutInputInput() {
    return this._rolloutInput.internalValue;
  }
}
export interface ComputePreviewFeatureTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_preview_feature#create ComputePreviewFeature#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_preview_feature#delete ComputePreviewFeature#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_preview_feature#update ComputePreviewFeature#update}
  */
  readonly update?: string;
}

export function computePreviewFeatureTimeoutsToTerraform(struct?: ComputePreviewFeatureTimeouts | cdktn.IResolvable): any {
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


export function computePreviewFeatureTimeoutsToHclTerraform(struct?: ComputePreviewFeatureTimeouts | cdktn.IResolvable): any {
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

export class ComputePreviewFeatureTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputePreviewFeatureTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ComputePreviewFeatureTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_preview_feature google_compute_preview_feature}
*/
export class ComputePreviewFeature extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_preview_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ComputePreviewFeature resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputePreviewFeature to import
  * @param importFromId The id of the existing ComputePreviewFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_preview_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputePreviewFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_preview_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_preview_feature google_compute_preview_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputePreviewFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: ComputePreviewFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_preview_feature',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.37.0',
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
    this._activationStatus = config.activationStatus;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._rolloutOperation.internalValue = config.rolloutOperation;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_status - computed: false, optional: false, required: true
  private _activationStatus?: string; 
  public get activationStatus() {
    return this.getStringAttribute('activation_status');
  }
  public set activationStatus(value: string) {
    this._activationStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activationStatusInput() {
    return this._activationStatus;
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

  // rollout_operation - computed: false, optional: true, required: false
  private _rolloutOperation = new ComputePreviewFeatureRolloutOperationOutputReference(this, "rollout_operation");
  public get rolloutOperation() {
    return this._rolloutOperation;
  }
  public putRolloutOperation(value: ComputePreviewFeatureRolloutOperation) {
    this._rolloutOperation.internalValue = value;
  }
  public resetRolloutOperation() {
    this._rolloutOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutOperationInput() {
    return this._rolloutOperation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputePreviewFeatureTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputePreviewFeatureTimeouts) {
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
      activation_status: cdktn.stringToTerraform(this._activationStatus),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      rollout_operation: computePreviewFeatureRolloutOperationToTerraform(this._rolloutOperation.internalValue),
      timeouts: computePreviewFeatureTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activation_status: {
        value: cdktn.stringToHclTerraform(this._activationStatus),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
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
      rollout_operation: {
        value: computePreviewFeatureRolloutOperationToHclTerraform(this._rolloutOperation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputePreviewFeatureRolloutOperationList",
      },
      timeouts: {
        value: computePreviewFeatureTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputePreviewFeatureTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
