/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ComputeRolloutPlanConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan#deletion_policy ComputeRolloutPlan#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan#description ComputeRolloutPlan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan#id ComputeRolloutPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location scope of the rollout plan. Possible values: ["LOCATION_SCOPE_UNSPECIFIED", "ZONAL", "REGIONAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan#location_scope ComputeRolloutPlan#location_scope}
  */
  readonly locationScope?: string;
  /**
  * Name of the resource. Provided by the client when the resource is created.
  * The name must be 1-63 characters long, and comply with RFC1035.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan#name ComputeRolloutPlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan#project ComputeRolloutPlan#project}
  */
  readonly project?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan#timeouts ComputeRolloutPlan#timeouts}
  */
  readonly timeouts?: ComputeRolloutPlanTimeouts;
  /**
  * waves block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan#waves ComputeRolloutPlan#waves}
  */
  readonly waves: ComputeRolloutPlanWaves[] | cdktn.IResolvable;
}
export interface ComputeRolloutPlanTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan#create ComputeRolloutPlan#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan#delete ComputeRolloutPlan#delete}
  */
  readonly delete?: string;
}

export function computeRolloutPlanTimeoutsToTerraform(struct?: ComputeRolloutPlanTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function computeRolloutPlanTimeoutsToHclTerraform(struct?: ComputeRolloutPlanTimeouts | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRolloutPlanTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeRolloutPlanTimeouts | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRolloutPlanTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}
export interface ComputeRolloutPlanWavesOrchestrationOptionsDelays {
  /**
  * Controls whether the delay should only be added between batches of projects corresponding to different locations, or also between batches of projects corresponding to the same location. Possible values: ["DELIMITER_UNSPECIFIED", "DELIMITER_LOCATION", "DELIMITER_BATCH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan#delimiter ComputeRolloutPlan#delimiter}
  */
  readonly delimiter?: string;
  /**
  * The duration of the delay, if any, to be added between batches of projects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan#duration ComputeRolloutPlan#duration}
  */
  readonly duration?: string;
  /**
  * Controls whether the specified duration is to be added at the end of each batch, or if the total processing time for each batch will be padded if needed to meet the specified duration. Possible values: ["TYPE_UNSPECIFIED", "TYPE_OFFSET", "TYPE_MINIMUM"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan#type ComputeRolloutPlan#type}
  */
  readonly type?: string;
}

export function computeRolloutPlanWavesOrchestrationOptionsDelaysToTerraform(struct?: ComputeRolloutPlanWavesOrchestrationOptionsDelays | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delimiter: cdktn.stringToTerraform(struct!.delimiter),
    duration: cdktn.stringToTerraform(struct!.duration),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function computeRolloutPlanWavesOrchestrationOptionsDelaysToHclTerraform(struct?: ComputeRolloutPlanWavesOrchestrationOptionsDelays | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delimiter: {
      value: cdktn.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: cdktn.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeRolloutPlanWavesOrchestrationOptionsDelays | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRolloutPlanWavesOrchestrationOptionsDelays | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delimiter = undefined;
      this._duration = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delimiter = value.delimiter;
      this._duration = value.duration;
      this._type = value.type;
    }
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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
}

export class ComputeRolloutPlanWavesOrchestrationOptionsDelaysList extends cdktn.ComplexList {
  public internalValue? : ComputeRolloutPlanWavesOrchestrationOptionsDelays[] | cdktn.IResolvable

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
  public get(index: number): ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference {
    return new ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRolloutPlanWavesOrchestrationOptions {
  /**
  * Maximum number of locations to be orchestrated in parallel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan#max_concurrent_locations ComputeRolloutPlan#max_concurrent_locations}
  */
  readonly maxConcurrentLocations?: number;
  /**
  * Maximum number of resources to be orchestrated per location in parallel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan#max_concurrent_resources_per_location ComputeRolloutPlan#max_concurrent_resources_per_location}
  */
  readonly maxConcurrentResourcesPerLocation?: number;
  /**
  * delays block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan#delays ComputeRolloutPlan#delays}
  */
  readonly delays?: ComputeRolloutPlanWavesOrchestrationOptionsDelays[] | cdktn.IResolvable;
}

export function computeRolloutPlanWavesOrchestrationOptionsToTerraform(struct?: ComputeRolloutPlanWavesOrchestrationOptionsOutputReference | ComputeRolloutPlanWavesOrchestrationOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_concurrent_locations: cdktn.numberToTerraform(struct!.maxConcurrentLocations),
    max_concurrent_resources_per_location: cdktn.numberToTerraform(struct!.maxConcurrentResourcesPerLocation),
    delays: cdktn.listMapper(computeRolloutPlanWavesOrchestrationOptionsDelaysToTerraform, true)(struct!.delays),
  }
}


export function computeRolloutPlanWavesOrchestrationOptionsToHclTerraform(struct?: ComputeRolloutPlanWavesOrchestrationOptionsOutputReference | ComputeRolloutPlanWavesOrchestrationOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_concurrent_locations: {
      value: cdktn.numberToHclTerraform(struct!.maxConcurrentLocations),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_concurrent_resources_per_location: {
      value: cdktn.numberToHclTerraform(struct!.maxConcurrentResourcesPerLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delays: {
      value: cdktn.listMapperHcl(computeRolloutPlanWavesOrchestrationOptionsDelaysToHclTerraform, true)(struct!.delays),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeRolloutPlanWavesOrchestrationOptionsDelaysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRolloutPlanWavesOrchestrationOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRolloutPlanWavesOrchestrationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentLocations = this._maxConcurrentLocations;
    }
    if (this._maxConcurrentResourcesPerLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentResourcesPerLocation = this._maxConcurrentResourcesPerLocation;
    }
    if (this._delays?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delays = this._delays?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRolloutPlanWavesOrchestrationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentLocations = undefined;
      this._maxConcurrentResourcesPerLocation = undefined;
      this._delays.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentLocations = value.maxConcurrentLocations;
      this._maxConcurrentResourcesPerLocation = value.maxConcurrentResourcesPerLocation;
      this._delays.internalValue = value.delays;
    }
  }

  // max_concurrent_locations - computed: false, optional: true, required: false
  private _maxConcurrentLocations?: number; 
  public get maxConcurrentLocations() {
    return this.getNumberAttribute('max_concurrent_locations');
  }
  public set maxConcurrentLocations(value: number) {
    this._maxConcurrentLocations = value;
  }
  public resetMaxConcurrentLocations() {
    this._maxConcurrentLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentLocationsInput() {
    return this._maxConcurrentLocations;
  }

  // max_concurrent_resources_per_location - computed: false, optional: true, required: false
  private _maxConcurrentResourcesPerLocation?: number; 
  public get maxConcurrentResourcesPerLocation() {
    return this.getNumberAttribute('max_concurrent_resources_per_location');
  }
  public set maxConcurrentResourcesPerLocation(value: number) {
    this._maxConcurrentResourcesPerLocation = value;
  }
  public resetMaxConcurrentResourcesPerLocation() {
    this._maxConcurrentResourcesPerLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentResourcesPerLocationInput() {
    return this._maxConcurrentResourcesPerLocation;
  }

  // delays - computed: false, optional: true, required: false
  private _delays = new ComputeRolloutPlanWavesOrchestrationOptionsDelaysList(this, "delays", false);
  public get delays() {
    return this._delays;
  }
  public putDelays(value: ComputeRolloutPlanWavesOrchestrationOptionsDelays[] | cdktn.IResolvable) {
    this._delays.internalValue = value;
  }
  public resetDelays() {
    this._delays.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delaysInput() {
    return this._delays.internalValue;
  }
}
export interface ComputeRolloutPlanWavesSelectorsLocationSelector {
  /**
  * Example: "us-central1-a"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan#included_locations ComputeRolloutPlan#included_locations}
  */
  readonly includedLocations?: string[];
}

export function computeRolloutPlanWavesSelectorsLocationSelectorToTerraform(struct?: ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference | ComputeRolloutPlanWavesSelectorsLocationSelector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    included_locations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedLocations),
  }
}


export function computeRolloutPlanWavesSelectorsLocationSelectorToHclTerraform(struct?: ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference | ComputeRolloutPlanWavesSelectorsLocationSelector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    included_locations: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedLocations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRolloutPlanWavesSelectorsLocationSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includedLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedLocations = this._includedLocations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRolloutPlanWavesSelectorsLocationSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includedLocations = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includedLocations = value.includedLocations;
    }
  }

  // included_locations - computed: false, optional: true, required: false
  private _includedLocations?: string[]; 
  public get includedLocations() {
    return this.getListAttribute('included_locations');
  }
  public set includedLocations(value: string[]) {
    this._includedLocations = value;
  }
  public resetIncludedLocations() {
    this._includedLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedLocationsInput() {
    return this._includedLocations;
  }
}
export interface ComputeRolloutPlanWavesSelectorsResourceHierarchySelector {
  /**
  * Format: "folders/{folder_id}"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan#included_folders ComputeRolloutPlan#included_folders}
  */
  readonly includedFolders?: string[];
  /**
  * Format: "organizations/{organization_id}"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan#included_organizations ComputeRolloutPlan#included_organizations}
  */
  readonly includedOrganizations?: string[];
  /**
  * Format: "projects/{project_id}"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan#included_projects ComputeRolloutPlan#included_projects}
  */
  readonly includedProjects?: string[];
}

export function computeRolloutPlanWavesSelectorsResourceHierarchySelectorToTerraform(struct?: ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference | ComputeRolloutPlanWavesSelectorsResourceHierarchySelector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    included_folders: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedFolders),
    included_organizations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedOrganizations),
    included_projects: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedProjects),
  }
}


export function computeRolloutPlanWavesSelectorsResourceHierarchySelectorToHclTerraform(struct?: ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference | ComputeRolloutPlanWavesSelectorsResourceHierarchySelector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    included_folders: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedFolders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_organizations: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedOrganizations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_projects: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedProjects),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRolloutPlanWavesSelectorsResourceHierarchySelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includedFolders !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedFolders = this._includedFolders;
    }
    if (this._includedOrganizations !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedOrganizations = this._includedOrganizations;
    }
    if (this._includedProjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedProjects = this._includedProjects;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRolloutPlanWavesSelectorsResourceHierarchySelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includedFolders = undefined;
      this._includedOrganizations = undefined;
      this._includedProjects = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includedFolders = value.includedFolders;
      this._includedOrganizations = value.includedOrganizations;
      this._includedProjects = value.includedProjects;
    }
  }

  // included_folders - computed: false, optional: true, required: false
  private _includedFolders?: string[]; 
  public get includedFolders() {
    return this.getListAttribute('included_folders');
  }
  public set includedFolders(value: string[]) {
    this._includedFolders = value;
  }
  public resetIncludedFolders() {
    this._includedFolders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedFoldersInput() {
    return this._includedFolders;
  }

  // included_organizations - computed: false, optional: true, required: false
  private _includedOrganizations?: string[]; 
  public get includedOrganizations() {
    return this.getListAttribute('included_organizations');
  }
  public set includedOrganizations(value: string[]) {
    this._includedOrganizations = value;
  }
  public resetIncludedOrganizations() {
    this._includedOrganizations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedOrganizationsInput() {
    return this._includedOrganizations;
  }

  // included_projects - computed: false, optional: true, required: false
  private _includedProjects?: string[]; 
  public get includedProjects() {
    return this.getListAttribute('included_projects');
  }
  public set includedProjects(value: string[]) {
    this._includedProjects = value;
  }
  public resetIncludedProjects() {
    this._includedProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedProjectsInput() {
    return this._includedProjects;
  }
}
export interface ComputeRolloutPlanWavesSelectors {
  /**
  * location_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan#location_selector ComputeRolloutPlan#location_selector}
  */
  readonly locationSelector?: ComputeRolloutPlanWavesSelectorsLocationSelector;
  /**
  * resource_hierarchy_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan#resource_hierarchy_selector ComputeRolloutPlan#resource_hierarchy_selector}
  */
  readonly resourceHierarchySelector?: ComputeRolloutPlanWavesSelectorsResourceHierarchySelector;
}

export function computeRolloutPlanWavesSelectorsToTerraform(struct?: ComputeRolloutPlanWavesSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    location_selector: computeRolloutPlanWavesSelectorsLocationSelectorToTerraform(struct!.locationSelector),
    resource_hierarchy_selector: computeRolloutPlanWavesSelectorsResourceHierarchySelectorToTerraform(struct!.resourceHierarchySelector),
  }
}


export function computeRolloutPlanWavesSelectorsToHclTerraform(struct?: ComputeRolloutPlanWavesSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    location_selector: {
      value: computeRolloutPlanWavesSelectorsLocationSelectorToHclTerraform(struct!.locationSelector),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeRolloutPlanWavesSelectorsLocationSelectorList",
    },
    resource_hierarchy_selector: {
      value: computeRolloutPlanWavesSelectorsResourceHierarchySelectorToHclTerraform(struct!.resourceHierarchySelector),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRolloutPlanWavesSelectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeRolloutPlanWavesSelectors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locationSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationSelector = this._locationSelector?.internalValue;
    }
    if (this._resourceHierarchySelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceHierarchySelector = this._resourceHierarchySelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRolloutPlanWavesSelectors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locationSelector.internalValue = undefined;
      this._resourceHierarchySelector.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locationSelector.internalValue = value.locationSelector;
      this._resourceHierarchySelector.internalValue = value.resourceHierarchySelector;
    }
  }

  // location_selector - computed: false, optional: true, required: false
  private _locationSelector = new ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference(this, "location_selector");
  public get locationSelector() {
    return this._locationSelector;
  }
  public putLocationSelector(value: ComputeRolloutPlanWavesSelectorsLocationSelector) {
    this._locationSelector.internalValue = value;
  }
  public resetLocationSelector() {
    this._locationSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationSelectorInput() {
    return this._locationSelector.internalValue;
  }

  // resource_hierarchy_selector - computed: false, optional: true, required: false
  private _resourceHierarchySelector = new ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference(this, "resource_hierarchy_selector");
  public get resourceHierarchySelector() {
    return this._resourceHierarchySelector;
  }
  public putResourceHierarchySelector(value: ComputeRolloutPlanWavesSelectorsResourceHierarchySelector) {
    this._resourceHierarchySelector.internalValue = value;
  }
  public resetResourceHierarchySelector() {
    this._resourceHierarchySelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceHierarchySelectorInput() {
    return this._resourceHierarchySelector.internalValue;
  }
}

export class ComputeRolloutPlanWavesSelectorsList extends cdktn.ComplexList {
  public internalValue? : ComputeRolloutPlanWavesSelectors[] | cdktn.IResolvable

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
  public get(index: number): ComputeRolloutPlanWavesSelectorsOutputReference {
    return new ComputeRolloutPlanWavesSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata {
  /**
  * The duration that the system waits in between waves. This wait starts
  * after all changes in the wave are rolled out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan#wait_duration ComputeRolloutPlan#wait_duration}
  */
  readonly waitDuration?: string;
}

export function computeRolloutPlanWavesValidationTimeBasedValidationMetadataToTerraform(struct?: ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference | ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    wait_duration: cdktn.stringToTerraform(struct!.waitDuration),
  }
}


export function computeRolloutPlanWavesValidationTimeBasedValidationMetadataToHclTerraform(struct?: ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference | ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    wait_duration: {
      value: cdktn.stringToHclTerraform(struct!.waitDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._waitDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitDuration = this._waitDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._waitDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._waitDuration = value.waitDuration;
    }
  }

  // wait_duration - computed: false, optional: true, required: false
  private _waitDuration?: string; 
  public get waitDuration() {
    return this.getStringAttribute('wait_duration');
  }
  public set waitDuration(value: string) {
    this._waitDuration = value;
  }
  public resetWaitDuration() {
    this._waitDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitDurationInput() {
    return this._waitDuration;
  }
}
export interface ComputeRolloutPlanWavesValidation {
  /**
  * The type of the validation. Possible values:
  * "manual": The system waits for an end-user approval API before progressing to the next wave.
  * "time": The system waits for a user specified duration before progressing to the next wave.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan#type ComputeRolloutPlan#type}
  */
  readonly type: string;
  /**
  * time_based_validation_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan#time_based_validation_metadata ComputeRolloutPlan#time_based_validation_metadata}
  */
  readonly timeBasedValidationMetadata?: ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata;
}

export function computeRolloutPlanWavesValidationToTerraform(struct?: ComputeRolloutPlanWavesValidationOutputReference | ComputeRolloutPlanWavesValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    time_based_validation_metadata: computeRolloutPlanWavesValidationTimeBasedValidationMetadataToTerraform(struct!.timeBasedValidationMetadata),
  }
}


export function computeRolloutPlanWavesValidationToHclTerraform(struct?: ComputeRolloutPlanWavesValidationOutputReference | ComputeRolloutPlanWavesValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_based_validation_metadata: {
      value: computeRolloutPlanWavesValidationTimeBasedValidationMetadataToHclTerraform(struct!.timeBasedValidationMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRolloutPlanWavesValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRolloutPlanWavesValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._timeBasedValidationMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeBasedValidationMetadata = this._timeBasedValidationMetadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRolloutPlanWavesValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._timeBasedValidationMetadata.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._timeBasedValidationMetadata.internalValue = value.timeBasedValidationMetadata;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // time_based_validation_metadata - computed: false, optional: true, required: false
  private _timeBasedValidationMetadata = new ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference(this, "time_based_validation_metadata");
  public get timeBasedValidationMetadata() {
    return this._timeBasedValidationMetadata;
  }
  public putTimeBasedValidationMetadata(value: ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata) {
    this._timeBasedValidationMetadata.internalValue = value;
  }
  public resetTimeBasedValidationMetadata() {
    this._timeBasedValidationMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeBasedValidationMetadataInput() {
    return this._timeBasedValidationMetadata.internalValue;
  }
}
export interface ComputeRolloutPlanWaves {
  /**
  * The display name of this wave of the rollout plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan#display_name ComputeRolloutPlan#display_name}
  */
  readonly displayName?: string;
  /**
  * orchestration_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan#orchestration_options ComputeRolloutPlan#orchestration_options}
  */
  readonly orchestrationOptions?: ComputeRolloutPlanWavesOrchestrationOptions;
  /**
  * selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan#selectors ComputeRolloutPlan#selectors}
  */
  readonly selectors: ComputeRolloutPlanWavesSelectors[] | cdktn.IResolvable;
  /**
  * validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan#validation ComputeRolloutPlan#validation}
  */
  readonly validation: ComputeRolloutPlanWavesValidation;
}

export function computeRolloutPlanWavesToTerraform(struct?: ComputeRolloutPlanWaves | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_name: cdktn.stringToTerraform(struct!.displayName),
    orchestration_options: computeRolloutPlanWavesOrchestrationOptionsToTerraform(struct!.orchestrationOptions),
    selectors: cdktn.listMapper(computeRolloutPlanWavesSelectorsToTerraform, true)(struct!.selectors),
    validation: computeRolloutPlanWavesValidationToTerraform(struct!.validation),
  }
}


export function computeRolloutPlanWavesToHclTerraform(struct?: ComputeRolloutPlanWaves | cdktn.IResolvable): any {
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
    orchestration_options: {
      value: computeRolloutPlanWavesOrchestrationOptionsToHclTerraform(struct!.orchestrationOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeRolloutPlanWavesOrchestrationOptionsList",
    },
    selectors: {
      value: cdktn.listMapperHcl(computeRolloutPlanWavesSelectorsToHclTerraform, true)(struct!.selectors),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeRolloutPlanWavesSelectorsList",
    },
    validation: {
      value: computeRolloutPlanWavesValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeRolloutPlanWavesValidationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRolloutPlanWavesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeRolloutPlanWaves | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._orchestrationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orchestrationOptions = this._orchestrationOptions?.internalValue;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRolloutPlanWaves | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._orchestrationOptions.internalValue = undefined;
      this._selectors.internalValue = undefined;
      this._validation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._orchestrationOptions.internalValue = value.orchestrationOptions;
      this._selectors.internalValue = value.selectors;
      this._validation.internalValue = value.validation;
    }
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

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // orchestration_options - computed: false, optional: true, required: false
  private _orchestrationOptions = new ComputeRolloutPlanWavesOrchestrationOptionsOutputReference(this, "orchestration_options");
  public get orchestrationOptions() {
    return this._orchestrationOptions;
  }
  public putOrchestrationOptions(value: ComputeRolloutPlanWavesOrchestrationOptions) {
    this._orchestrationOptions.internalValue = value;
  }
  public resetOrchestrationOptions() {
    this._orchestrationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orchestrationOptionsInput() {
    return this._orchestrationOptions.internalValue;
  }

  // selectors - computed: false, optional: false, required: true
  private _selectors = new ComputeRolloutPlanWavesSelectorsList(this, "selectors", false);
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: ComputeRolloutPlanWavesSelectors[] | cdktn.IResolvable) {
    this._selectors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }

  // validation - computed: false, optional: false, required: true
  private _validation = new ComputeRolloutPlanWavesValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: ComputeRolloutPlanWavesValidation) {
    this._validation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}

export class ComputeRolloutPlanWavesList extends cdktn.ComplexList {
  public internalValue? : ComputeRolloutPlanWaves[] | cdktn.IResolvable

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
  public get(index: number): ComputeRolloutPlanWavesOutputReference {
    return new ComputeRolloutPlanWavesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan google_compute_rollout_plan}
*/
export class ComputeRolloutPlan extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_rollout_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ComputeRolloutPlan resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeRolloutPlan to import
  * @param importFromId The id of the existing ComputeRolloutPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeRolloutPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_rollout_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_rollout_plan google_compute_rollout_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeRolloutPlanConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeRolloutPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_rollout_plan',
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
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._id = config.id;
    this._locationScope = config.locationScope;
    this._name = config.name;
    this._project = config.project;
    this._timeouts.internalValue = config.timeouts;
    this._waves.internalValue = config.waves;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // location_scope - computed: false, optional: true, required: false
  private _locationScope?: string; 
  public get locationScope() {
    return this.getStringAttribute('location_scope');
  }
  public set locationScope(value: string) {
    this._locationScope = value;
  }
  public resetLocationScope() {
    this._locationScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationScopeInput() {
    return this._locationScope;
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeRolloutPlanTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeRolloutPlanTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // waves - computed: false, optional: false, required: true
  private _waves = new ComputeRolloutPlanWavesList(this, "waves", false);
  public get waves() {
    return this._waves;
  }
  public putWaves(value: ComputeRolloutPlanWaves[] | cdktn.IResolvable) {
    this._waves.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wavesInput() {
    return this._waves.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      location_scope: cdktn.stringToTerraform(this._locationScope),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      timeouts: computeRolloutPlanTimeoutsToTerraform(this._timeouts.internalValue),
      waves: cdktn.listMapper(computeRolloutPlanWavesToTerraform, true)(this._waves.internalValue),
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
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_scope: {
        value: cdktn.stringToHclTerraform(this._locationScope),
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
      timeouts: {
        value: computeRolloutPlanTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeRolloutPlanTimeouts",
      },
      waves: {
        value: cdktn.listMapperHcl(computeRolloutPlanWavesToHclTerraform, true)(this._waves.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeRolloutPlanWavesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
