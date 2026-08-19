/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ClouddeployDeliveryPipelineConfig extends cdktn.TerraformMetaArguments {
  /**
  * User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field `effective_annotations` for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#annotations ClouddeployDeliveryPipeline#annotations}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#deletion_policy ClouddeployDeliveryPipeline#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Description of the `DeliveryPipeline`. Max length is 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#description ClouddeployDeliveryPipeline#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#id ClouddeployDeliveryPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field `effective_labels` for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#labels ClouddeployDeliveryPipeline#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#location ClouddeployDeliveryPipeline#location}
  */
  readonly location: string;
  /**
  * Name of the `DeliveryPipeline`. Format is `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#name ClouddeployDeliveryPipeline#name}
  */
  readonly name: string;
  /**
  * The project for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#project ClouddeployDeliveryPipeline#project}
  */
  readonly project?: string;
  /**
  * When suspended, no new releases or rollouts can be created, but in-progress ones will complete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#suspended ClouddeployDeliveryPipeline#suspended}
  */
  readonly suspended?: boolean | cdktn.IResolvable;
  /**
  * serial_pipeline block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#serial_pipeline ClouddeployDeliveryPipeline#serial_pipeline}
  */
  readonly serialPipeline?: ClouddeployDeliveryPipelineSerialPipeline;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#timeouts ClouddeployDeliveryPipeline#timeouts}
  */
  readonly timeouts?: ClouddeployDeliveryPipelineTimeouts;
}
export interface ClouddeployDeliveryPipelineConditionPipelineReadyCondition {
}

export function clouddeployDeliveryPipelineConditionPipelineReadyConditionToTerraform(struct?: ClouddeployDeliveryPipelineConditionPipelineReadyCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function clouddeployDeliveryPipelineConditionPipelineReadyConditionToHclTerraform(struct?: ClouddeployDeliveryPipelineConditionPipelineReadyCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ClouddeployDeliveryPipelineConditionPipelineReadyCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineConditionPipelineReadyCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getBooleanAttribute('status');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class ClouddeployDeliveryPipelineConditionPipelineReadyConditionList extends cdktn.ComplexList {

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
  public get(index: number): ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference {
    return new ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployDeliveryPipelineConditionTargetsPresentCondition {
}

export function clouddeployDeliveryPipelineConditionTargetsPresentConditionToTerraform(struct?: ClouddeployDeliveryPipelineConditionTargetsPresentCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function clouddeployDeliveryPipelineConditionTargetsPresentConditionToHclTerraform(struct?: ClouddeployDeliveryPipelineConditionTargetsPresentCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ClouddeployDeliveryPipelineConditionTargetsPresentCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineConditionTargetsPresentCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // missing_targets - computed: true, optional: false, required: false
  public get missingTargets() {
    return this.getListAttribute('missing_targets');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getBooleanAttribute('status');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class ClouddeployDeliveryPipelineConditionTargetsPresentConditionList extends cdktn.ComplexList {

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
  public get(index: number): ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference {
    return new ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployDeliveryPipelineConditionTargetsTypeCondition {
}

export function clouddeployDeliveryPipelineConditionTargetsTypeConditionToTerraform(struct?: ClouddeployDeliveryPipelineConditionTargetsTypeCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function clouddeployDeliveryPipelineConditionTargetsTypeConditionToHclTerraform(struct?: ClouddeployDeliveryPipelineConditionTargetsTypeCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ClouddeployDeliveryPipelineConditionTargetsTypeCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineConditionTargetsTypeCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_details - computed: true, optional: false, required: false
  public get errorDetails() {
    return this.getStringAttribute('error_details');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getBooleanAttribute('status');
  }
}

export class ClouddeployDeliveryPipelineConditionTargetsTypeConditionList extends cdktn.ComplexList {

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
  public get(index: number): ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference {
    return new ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployDeliveryPipelineCondition {
}

export function clouddeployDeliveryPipelineConditionToTerraform(struct?: ClouddeployDeliveryPipelineCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function clouddeployDeliveryPipelineConditionToHclTerraform(struct?: ClouddeployDeliveryPipelineCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ClouddeployDeliveryPipelineConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ClouddeployDeliveryPipelineCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pipeline_ready_condition - computed: true, optional: false, required: false
  private _pipelineReadyCondition = new ClouddeployDeliveryPipelineConditionPipelineReadyConditionList(this, "pipeline_ready_condition", false);
  public get pipelineReadyCondition() {
    return this._pipelineReadyCondition;
  }

  // targets_present_condition - computed: true, optional: false, required: false
  private _targetsPresentCondition = new ClouddeployDeliveryPipelineConditionTargetsPresentConditionList(this, "targets_present_condition", false);
  public get targetsPresentCondition() {
    return this._targetsPresentCondition;
  }

  // targets_type_condition - computed: true, optional: false, required: false
  private _targetsTypeCondition = new ClouddeployDeliveryPipelineConditionTargetsTypeConditionList(this, "targets_type_condition", false);
  public get targetsTypeCondition() {
    return this._targetsTypeCondition;
  }
}

export class ClouddeployDeliveryPipelineConditionList extends cdktn.ComplexList {

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
  public get(index: number): ClouddeployDeliveryPipelineConditionOutputReference {
    return new ClouddeployDeliveryPipelineConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters {
  /**
  * Optional. Deploy parameters are applied to targets with match labels. If unspecified, deploy parameters are applied to all targets (including child targets of a multi-target).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#match_target_labels ClouddeployDeliveryPipeline#match_target_labels}
  */
  readonly matchTargetLabels?: { [key: string]: string };
  /**
  * Required. Values are deploy parameters in key-value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#values ClouddeployDeliveryPipeline#values}
  */
  readonly values: { [key: string]: string };
}

export function clouddeployDeliveryPipelineSerialPipelineStagesDeployParametersToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    match_target_labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.matchTargetLabels),
    values: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.values),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesDeployParametersToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    match_target_labels: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.matchTargetLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    values: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.values),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchTargetLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchTargetLabels = this._matchTargetLabels;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchTargetLabels = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchTargetLabels = value.matchTargetLabels;
      this._values = value.values;
    }
  }

  // match_target_labels - computed: false, optional: true, required: false
  private _matchTargetLabels?: { [key: string]: string }; 
  public get matchTargetLabels() {
    return this.getStringMapAttribute('match_target_labels');
  }
  public set matchTargetLabels(value: { [key: string]: string }) {
    this._matchTargetLabels = value;
  }
  public resetMatchTargetLabels() {
    this._matchTargetLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTargetLabelsInput() {
    return this._matchTargetLabels;
  }

  // values - computed: false, optional: false, required: true
  private _values?: { [key: string]: string }; 
  public get values() {
    return this.getStringMapAttribute('values');
  }
  public set values(value: { [key: string]: string }) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList extends cdktn.ComplexList {
  public internalValue? : ClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters[] | cdktn.IResolvable

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
  public get(index: number): ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference {
    return new ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainer {
  /**
  * Optional. Args is the container arguments to use. This overrides the default arguments defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#args ClouddeployDeliveryPipeline#args}
  */
  readonly args?: string[];
  /**
  * Optional. Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#command ClouddeployDeliveryPipeline#command}
  */
  readonly command?: string[];
  /**
  * Optional. Environment variables that are set in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#env ClouddeployDeliveryPipeline#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Required. Image is the container image to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#image ClouddeployDeliveryPipeline#image}
  */
  readonly image: string;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainerToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainerOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    args: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.args),
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    env: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.env),
    image: cdktn.stringToTerraform(struct!.image),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainerToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainerOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    args: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._command = undefined;
      this._env = undefined;
      this._image = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._command = value.command;
      this._env = value.env;
      this._image = value.image;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTask {
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#container ClouddeployDeliveryPipeline#container}
  */
  readonly container?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainer;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainerToTerraform(struct!.container),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._container.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._container.internalValue = value.container;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecks {
  /**
  * Optional. Frequency of the custom check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#frequency ClouddeployDeliveryPipeline#frequency}
  */
  readonly frequency?: string;
  /**
  * Required. Unique identifier for the custom check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#id ClouddeployDeliveryPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#task ClouddeployDeliveryPipeline#task}
  */
  readonly task?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTask;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    frequency: cdktn.stringToTerraform(struct!.frequency),
    id: cdktn.stringToTerraform(struct!.id),
    task: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskToTerraform(struct!.task),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    frequency: {
      value: cdktn.stringToHclTerraform(struct!.frequency),
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
    task: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskToHclTerraform(struct!.task),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._task?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.task = this._task?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._frequency = undefined;
      this._id = undefined;
      this._task.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._frequency = value.frequency;
      this._id = value.id;
      this._task.internalValue = value.task;
    }
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
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

  // task - computed: false, optional: true, required: false
  private _task = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskOutputReference(this, "task");
  public get task() {
    return this._task;
  }
  public putTask(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTask) {
    this._task.internalValue = value;
  }
  public resetTask() {
    this._task.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInput() {
    return this._task.internalValue;
  }
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksList extends cdktn.ComplexList {
  public internalValue? : ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecks[] | cdktn.IResolvable

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
  public get(index: number): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksOutputReference {
    return new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecks {
  /**
  * Required. The list of alert policy names to check. Format: `projects/{project}/alertPolicies/{alert_policy}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#alert_policies ClouddeployDeliveryPipeline#alert_policies}
  */
  readonly alertPolicies: string[];
  /**
  * Required. Unique identifier for the alert policy check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#id ClouddeployDeliveryPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Optional. Labels to filter the alert policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#labels ClouddeployDeliveryPipeline#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecksToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alert_policies: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.alertPolicies),
    id: cdktn.stringToTerraform(struct!.id),
    labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.labels),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecksToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alert_policies: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.alertPolicies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertPolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertPolicies = this._alertPolicies;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertPolicies = undefined;
      this._id = undefined;
      this._labels = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertPolicies = value.alertPolicies;
      this._id = value.id;
      this._labels = value.labels;
    }
  }

  // alert_policies - computed: false, optional: false, required: true
  private _alertPolicies?: string[]; 
  public get alertPolicies() {
    return this.getListAttribute('alert_policies');
  }
  public set alertPolicies(value: string[]) {
    this._alertPolicies = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertPoliciesInput() {
    return this._alertPolicies;
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
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecksList extends cdktn.ComplexList {
  public internalValue? : ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecks[] | cdktn.IResolvable

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
  public get(index: number): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecksOutputReference {
    return new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloud {
  /**
  * alert_policy_checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#alert_policy_checks ClouddeployDeliveryPipeline#alert_policy_checks}
  */
  readonly alertPolicyChecks?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecks[] | cdktn.IResolvable;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloud): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alert_policy_checks: cdktn.listMapper(clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecksToTerraform, true)(struct!.alertPolicyChecks),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloud): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alert_policy_checks: {
      value: cdktn.listMapperHcl(clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecksToHclTerraform, true)(struct!.alertPolicyChecks),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloud | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertPolicyChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertPolicyChecks = this._alertPolicyChecks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloud | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertPolicyChecks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertPolicyChecks.internalValue = value.alertPolicyChecks;
    }
  }

  // alert_policy_checks - computed: false, optional: true, required: false
  private _alertPolicyChecks = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecksList(this, "alert_policy_checks", false);
  public get alertPolicyChecks() {
    return this._alertPolicyChecks;
  }
  public putAlertPolicyChecks(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecks[] | cdktn.IResolvable) {
    this._alertPolicyChecks.internalValue = value;
  }
  public resetAlertPolicyChecks() {
    this._alertPolicyChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertPolicyChecksInput() {
    return this._alertPolicyChecks.internalValue;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysis {
  /**
  * Required. Duration of the analysis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#duration ClouddeployDeliveryPipeline#duration}
  */
  readonly duration: string;
  /**
  * custom_checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#custom_checks ClouddeployDeliveryPipeline#custom_checks}
  */
  readonly customChecks?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecks[] | cdktn.IResolvable;
  /**
  * google_cloud block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#google_cloud ClouddeployDeliveryPipeline#google_cloud}
  */
  readonly googleCloud?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloud;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration: cdktn.stringToTerraform(struct!.duration),
    custom_checks: cdktn.listMapper(clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksToTerraform, true)(struct!.customChecks),
    google_cloud: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudToTerraform(struct!.googleCloud),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration: {
      value: cdktn.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_checks: {
      value: cdktn.listMapperHcl(clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksToHclTerraform, true)(struct!.customChecks),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksList",
    },
    google_cloud: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudToHclTerraform(struct!.googleCloud),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._customChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customChecks = this._customChecks?.internalValue;
    }
    if (this._googleCloud?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloud = this._googleCloud?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._customChecks.internalValue = undefined;
      this._googleCloud.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._customChecks.internalValue = value.customChecks;
      this._googleCloud.internalValue = value.googleCloud;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // custom_checks - computed: false, optional: true, required: false
  private _customChecks = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksList(this, "custom_checks", false);
  public get customChecks() {
    return this._customChecks;
  }
  public putCustomChecks(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecks[] | cdktn.IResolvable) {
    this._customChecks.internalValue = value;
  }
  public resetCustomChecks() {
    this._customChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customChecksInput() {
    return this._customChecks.internalValue;
  }

  // google_cloud - computed: false, optional: true, required: false
  private _googleCloud = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudOutputReference(this, "google_cloud");
  public get googleCloud() {
    return this._googleCloud;
  }
  public putGoogleCloud(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloud) {
    this._googleCloud.internalValue = value;
  }
  public resetGoogleCloud() {
    this._googleCloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudInput() {
    return this._googleCloud.internalValue;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy {
  /**
  * Optional. A sequence of skaffold custom actions to invoke during execution of the postdeploy job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#actions ClouddeployDeliveryPipeline#actions}
  */
  readonly actions?: string[];
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actions = value.actions;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy {
  /**
  * Optional. A sequence of skaffold custom actions to invoke during execution of the predeploy job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#actions ClouddeployDeliveryPipeline#actions}
  */
  readonly actions?: string[];
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actions = value.actions;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainer {
  /**
  * Optional. Args is the container arguments to use. This overrides the default arguments defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#args ClouddeployDeliveryPipeline#args}
  */
  readonly args?: string[];
  /**
  * Optional. Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#command ClouddeployDeliveryPipeline#command}
  */
  readonly command?: string[];
  /**
  * Optional. Environment variables that are set in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#env ClouddeployDeliveryPipeline#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Required. Image is the container image to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#image ClouddeployDeliveryPipeline#image}
  */
  readonly image: string;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainerToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainerOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    args: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.args),
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    env: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.env),
    image: cdktn.stringToTerraform(struct!.image),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainerToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainerOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    args: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._command = undefined;
      this._env = undefined;
      this._image = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._command = value.command;
      this._env = value.env;
      this._image = value.image;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasks {
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#container ClouddeployDeliveryPipeline#container}
  */
  readonly container?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainer;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainerToTerraform(struct!.container),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container.internalValue = value.container;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksList extends cdktn.ComplexList {
  public internalValue? : ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasks[] | cdktn.IResolvable

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
  public get(index: number): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksOutputReference {
    return new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfig {
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#tasks ClouddeployDeliveryPipeline#tasks}
  */
  readonly tasks?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasks[] | cdktn.IResolvable;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tasks: cdktn.listMapper(clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksToTerraform, true)(struct!.tasks),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tasks: {
      value: cdktn.listMapperHcl(clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksToHclTerraform, true)(struct!.tasks),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tasks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasks = this._tasks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tasks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tasks.internalValue = value.tasks;
    }
  }

  // tasks - computed: false, optional: true, required: false
  private _tasks = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasks[] | cdktn.IResolvable) {
    this._tasks.internalValue = value;
  }
  public resetTasks() {
    this._tasks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks.internalValue;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment {
  /**
  * Required. The percentage based deployments that will occur as a part of a `Rollout`. List is expected in ascending order and each integer n is 0 <= n < 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#percentages ClouddeployDeliveryPipeline#percentages}
  */
  readonly percentages: number[];
  /**
  * Whether to run verify tests after each percentage deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#verify ClouddeployDeliveryPipeline#verify}
  */
  readonly verify?: boolean | cdktn.IResolvable;
  /**
  * analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#analysis ClouddeployDeliveryPipeline#analysis}
  */
  readonly analysis?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysis;
  /**
  * postdeploy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#postdeploy ClouddeployDeliveryPipeline#postdeploy}
  */
  readonly postdeploy?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy;
  /**
  * predeploy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#predeploy ClouddeployDeliveryPipeline#predeploy}
  */
  readonly predeploy?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy;
  /**
  * verify_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#verify_config ClouddeployDeliveryPipeline#verify_config}
  */
  readonly verifyConfig?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfig;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    percentages: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.percentages),
    verify: cdktn.booleanToTerraform(struct!.verify),
    analysis: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisToTerraform(struct!.analysis),
    postdeploy: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployToTerraform(struct!.postdeploy),
    predeploy: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployToTerraform(struct!.predeploy),
    verify_config: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigToTerraform(struct!.verifyConfig),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    percentages: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.percentages),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    verify: {
      value: cdktn.booleanToHclTerraform(struct!.verify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    analysis: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisToHclTerraform(struct!.analysis),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisList",
    },
    postdeploy: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployToHclTerraform(struct!.postdeploy),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployList",
    },
    predeploy: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployToHclTerraform(struct!.predeploy),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployList",
    },
    verify_config: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigToHclTerraform(struct!.verifyConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentages !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentages = this._percentages;
    }
    if (this._verify !== undefined) {
      hasAnyValues = true;
      internalValueResult.verify = this._verify;
    }
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    if (this._postdeploy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postdeploy = this._postdeploy?.internalValue;
    }
    if (this._predeploy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predeploy = this._predeploy?.internalValue;
    }
    if (this._verifyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyConfig = this._verifyConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._percentages = undefined;
      this._verify = undefined;
      this._analysis.internalValue = undefined;
      this._postdeploy.internalValue = undefined;
      this._predeploy.internalValue = undefined;
      this._verifyConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._percentages = value.percentages;
      this._verify = value.verify;
      this._analysis.internalValue = value.analysis;
      this._postdeploy.internalValue = value.postdeploy;
      this._predeploy.internalValue = value.predeploy;
      this._verifyConfig.internalValue = value.verifyConfig;
    }
  }

  // percentages - computed: false, optional: false, required: true
  private _percentages?: number[]; 
  public get percentages() {
    return this.getNumberListAttribute('percentages');
  }
  public set percentages(value: number[]) {
    this._percentages = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentagesInput() {
    return this._percentages;
  }

  // verify - computed: false, optional: true, required: false
  private _verify?: boolean | cdktn.IResolvable; 
  public get verify() {
    return this.getBooleanAttribute('verify');
  }
  public set verify(value: boolean | cdktn.IResolvable) {
    this._verify = value;
  }
  public resetVerify() {
    this._verify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify;
  }

  // analysis - computed: false, optional: true, required: false
  private _analysis = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisOutputReference(this, "analysis");
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysis) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }

  // postdeploy - computed: false, optional: true, required: false
  private _postdeploy = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference(this, "postdeploy");
  public get postdeploy() {
    return this._postdeploy;
  }
  public putPostdeploy(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy) {
    this._postdeploy.internalValue = value;
  }
  public resetPostdeploy() {
    this._postdeploy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postdeployInput() {
    return this._postdeploy.internalValue;
  }

  // predeploy - computed: false, optional: true, required: false
  private _predeploy = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference(this, "predeploy");
  public get predeploy() {
    return this._predeploy;
  }
  public putPredeploy(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy) {
    this._predeploy.internalValue = value;
  }
  public resetPredeploy() {
    this._predeploy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predeployInput() {
    return this._predeploy.internalValue;
  }

  // verify_config - computed: false, optional: true, required: false
  private _verifyConfig = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigOutputReference(this, "verify_config");
  public get verifyConfig() {
    return this._verifyConfig;
  }
  public putVerifyConfig(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfig) {
    this._verifyConfig.internalValue = value;
  }
  public resetVerifyConfig() {
    this._verifyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyConfigInput() {
    return this._verifyConfig.internalValue;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainer {
  /**
  * Optional. Args is the container arguments to use. This overrides the default arguments defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#args ClouddeployDeliveryPipeline#args}
  */
  readonly args?: string[];
  /**
  * Optional. Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#command ClouddeployDeliveryPipeline#command}
  */
  readonly command?: string[];
  /**
  * Optional. Environment variables that are set in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#env ClouddeployDeliveryPipeline#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Required. Image is the container image to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#image ClouddeployDeliveryPipeline#image}
  */
  readonly image: string;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainerToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainerOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    args: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.args),
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    env: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.env),
    image: cdktn.stringToTerraform(struct!.image),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainerToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainerOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    args: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._command = undefined;
      this._env = undefined;
      this._image = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._command = value.command;
      this._env = value.env;
      this._image = value.image;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTask {
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#container ClouddeployDeliveryPipeline#container}
  */
  readonly container?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainer;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainerToTerraform(struct!.container),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._container.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._container.internalValue = value.container;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecks {
  /**
  * Optional. Frequency of the custom check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#frequency ClouddeployDeliveryPipeline#frequency}
  */
  readonly frequency?: string;
  /**
  * Required. Unique identifier for the custom check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#id ClouddeployDeliveryPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#task ClouddeployDeliveryPipeline#task}
  */
  readonly task?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTask;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    frequency: cdktn.stringToTerraform(struct!.frequency),
    id: cdktn.stringToTerraform(struct!.id),
    task: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskToTerraform(struct!.task),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    frequency: {
      value: cdktn.stringToHclTerraform(struct!.frequency),
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
    task: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskToHclTerraform(struct!.task),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._task?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.task = this._task?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._frequency = undefined;
      this._id = undefined;
      this._task.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._frequency = value.frequency;
      this._id = value.id;
      this._task.internalValue = value.task;
    }
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
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

  // task - computed: false, optional: true, required: false
  private _task = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskOutputReference(this, "task");
  public get task() {
    return this._task;
  }
  public putTask(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTask) {
    this._task.internalValue = value;
  }
  public resetTask() {
    this._task.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInput() {
    return this._task.internalValue;
  }
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksList extends cdktn.ComplexList {
  public internalValue? : ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecks[] | cdktn.IResolvable

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
  public get(index: number): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksOutputReference {
    return new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecks {
  /**
  * Required. The list of alert policy names to check. Format: `projects/{project}/alertPolicies/{alert_policy}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#alert_policies ClouddeployDeliveryPipeline#alert_policies}
  */
  readonly alertPolicies: string[];
  /**
  * Required. Unique identifier for the alert policy check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#id ClouddeployDeliveryPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Optional. Labels to filter the alert policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#labels ClouddeployDeliveryPipeline#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecksToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alert_policies: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.alertPolicies),
    id: cdktn.stringToTerraform(struct!.id),
    labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.labels),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecksToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alert_policies: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.alertPolicies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertPolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertPolicies = this._alertPolicies;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertPolicies = undefined;
      this._id = undefined;
      this._labels = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertPolicies = value.alertPolicies;
      this._id = value.id;
      this._labels = value.labels;
    }
  }

  // alert_policies - computed: false, optional: false, required: true
  private _alertPolicies?: string[]; 
  public get alertPolicies() {
    return this.getListAttribute('alert_policies');
  }
  public set alertPolicies(value: string[]) {
    this._alertPolicies = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertPoliciesInput() {
    return this._alertPolicies;
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
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecksList extends cdktn.ComplexList {
  public internalValue? : ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecks[] | cdktn.IResolvable

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
  public get(index: number): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecksOutputReference {
    return new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloud {
  /**
  * alert_policy_checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#alert_policy_checks ClouddeployDeliveryPipeline#alert_policy_checks}
  */
  readonly alertPolicyChecks?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecks[] | cdktn.IResolvable;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloud): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alert_policy_checks: cdktn.listMapper(clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecksToTerraform, true)(struct!.alertPolicyChecks),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloud): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alert_policy_checks: {
      value: cdktn.listMapperHcl(clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecksToHclTerraform, true)(struct!.alertPolicyChecks),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloud | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertPolicyChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertPolicyChecks = this._alertPolicyChecks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloud | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertPolicyChecks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertPolicyChecks.internalValue = value.alertPolicyChecks;
    }
  }

  // alert_policy_checks - computed: false, optional: true, required: false
  private _alertPolicyChecks = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecksList(this, "alert_policy_checks", false);
  public get alertPolicyChecks() {
    return this._alertPolicyChecks;
  }
  public putAlertPolicyChecks(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecks[] | cdktn.IResolvable) {
    this._alertPolicyChecks.internalValue = value;
  }
  public resetAlertPolicyChecks() {
    this._alertPolicyChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertPolicyChecksInput() {
    return this._alertPolicyChecks.internalValue;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysis {
  /**
  * Required. Duration of the analysis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#duration ClouddeployDeliveryPipeline#duration}
  */
  readonly duration: string;
  /**
  * custom_checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#custom_checks ClouddeployDeliveryPipeline#custom_checks}
  */
  readonly customChecks?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecks[] | cdktn.IResolvable;
  /**
  * google_cloud block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#google_cloud ClouddeployDeliveryPipeline#google_cloud}
  */
  readonly googleCloud?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloud;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration: cdktn.stringToTerraform(struct!.duration),
    custom_checks: cdktn.listMapper(clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksToTerraform, true)(struct!.customChecks),
    google_cloud: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudToTerraform(struct!.googleCloud),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration: {
      value: cdktn.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_checks: {
      value: cdktn.listMapperHcl(clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksToHclTerraform, true)(struct!.customChecks),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksList",
    },
    google_cloud: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudToHclTerraform(struct!.googleCloud),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._customChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customChecks = this._customChecks?.internalValue;
    }
    if (this._googleCloud?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloud = this._googleCloud?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._customChecks.internalValue = undefined;
      this._googleCloud.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._customChecks.internalValue = value.customChecks;
      this._googleCloud.internalValue = value.googleCloud;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // custom_checks - computed: false, optional: true, required: false
  private _customChecks = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksList(this, "custom_checks", false);
  public get customChecks() {
    return this._customChecks;
  }
  public putCustomChecks(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecks[] | cdktn.IResolvable) {
    this._customChecks.internalValue = value;
  }
  public resetCustomChecks() {
    this._customChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customChecksInput() {
    return this._customChecks.internalValue;
  }

  // google_cloud - computed: false, optional: true, required: false
  private _googleCloud = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudOutputReference(this, "google_cloud");
  public get googleCloud() {
    return this._googleCloud;
  }
  public putGoogleCloud(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloud) {
    this._googleCloud.internalValue = value;
  }
  public resetGoogleCloud() {
    this._googleCloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudInput() {
    return this._googleCloud.internalValue;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy {
  /**
  * Optional. A sequence of skaffold custom actions to invoke during execution of the postdeploy job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#actions ClouddeployDeliveryPipeline#actions}
  */
  readonly actions?: string[];
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actions = value.actions;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy {
  /**
  * Optional. A sequence of skaffold custom actions to invoke during execution of the predeploy job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#actions ClouddeployDeliveryPipeline#actions}
  */
  readonly actions?: string[];
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actions = value.actions;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainer {
  /**
  * Optional. Args is the container arguments to use. This overrides the default arguments defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#args ClouddeployDeliveryPipeline#args}
  */
  readonly args?: string[];
  /**
  * Optional. Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#command ClouddeployDeliveryPipeline#command}
  */
  readonly command?: string[];
  /**
  * Optional. Environment variables that are set in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#env ClouddeployDeliveryPipeline#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Required. Image is the container image to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#image ClouddeployDeliveryPipeline#image}
  */
  readonly image: string;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainerToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainerOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    args: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.args),
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    env: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.env),
    image: cdktn.stringToTerraform(struct!.image),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainerToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainerOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    args: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._command = undefined;
      this._env = undefined;
      this._image = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._command = value.command;
      this._env = value.env;
      this._image = value.image;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasks {
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#container ClouddeployDeliveryPipeline#container}
  */
  readonly container?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainer;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainerToTerraform(struct!.container),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container.internalValue = value.container;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksList extends cdktn.ComplexList {
  public internalValue? : ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasks[] | cdktn.IResolvable

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
  public get(index: number): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksOutputReference {
    return new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfig {
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#tasks ClouddeployDeliveryPipeline#tasks}
  */
  readonly tasks?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasks[] | cdktn.IResolvable;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tasks: cdktn.listMapper(clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksToTerraform, true)(struct!.tasks),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tasks: {
      value: cdktn.listMapperHcl(clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksToHclTerraform, true)(struct!.tasks),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tasks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasks = this._tasks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tasks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tasks.internalValue = value.tasks;
    }
  }

  // tasks - computed: false, optional: true, required: false
  private _tasks = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasks[] | cdktn.IResolvable) {
    this._tasks.internalValue = value;
  }
  public resetTasks() {
    this._tasks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks.internalValue;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs {
  /**
  * Required. Percentage deployment for the phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#percentage ClouddeployDeliveryPipeline#percentage}
  */
  readonly percentage: number;
  /**
  * Required. The ID to assign to the `Rollout` phase. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#phase_id ClouddeployDeliveryPipeline#phase_id}
  */
  readonly phaseId: string;
  /**
  * Skaffold profiles to use when rendering the manifest for this phase. These are in addition to the profiles list specified in the `DeliveryPipeline` stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#profiles ClouddeployDeliveryPipeline#profiles}
  */
  readonly profiles?: string[];
  /**
  * Whether to run verify tests after the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#verify ClouddeployDeliveryPipeline#verify}
  */
  readonly verify?: boolean | cdktn.IResolvable;
  /**
  * analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#analysis ClouddeployDeliveryPipeline#analysis}
  */
  readonly analysis?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysis;
  /**
  * postdeploy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#postdeploy ClouddeployDeliveryPipeline#postdeploy}
  */
  readonly postdeploy?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy;
  /**
  * predeploy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#predeploy ClouddeployDeliveryPipeline#predeploy}
  */
  readonly predeploy?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy;
  /**
  * verify_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#verify_config ClouddeployDeliveryPipeline#verify_config}
  */
  readonly verifyConfig?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfig;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    percentage: cdktn.numberToTerraform(struct!.percentage),
    phase_id: cdktn.stringToTerraform(struct!.phaseId),
    profiles: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.profiles),
    verify: cdktn.booleanToTerraform(struct!.verify),
    analysis: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisToTerraform(struct!.analysis),
    postdeploy: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployToTerraform(struct!.postdeploy),
    predeploy: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployToTerraform(struct!.predeploy),
    verify_config: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigToTerraform(struct!.verifyConfig),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    percentage: {
      value: cdktn.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    phase_id: {
      value: cdktn.stringToHclTerraform(struct!.phaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profiles: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.profiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    verify: {
      value: cdktn.booleanToHclTerraform(struct!.verify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    analysis: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisToHclTerraform(struct!.analysis),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisList",
    },
    postdeploy: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployToHclTerraform(struct!.postdeploy),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployList",
    },
    predeploy: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployToHclTerraform(struct!.predeploy),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployList",
    },
    verify_config: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigToHclTerraform(struct!.verifyConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    if (this._phaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.phaseId = this._phaseId;
    }
    if (this._profiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.profiles = this._profiles;
    }
    if (this._verify !== undefined) {
      hasAnyValues = true;
      internalValueResult.verify = this._verify;
    }
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    if (this._postdeploy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postdeploy = this._postdeploy?.internalValue;
    }
    if (this._predeploy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predeploy = this._predeploy?.internalValue;
    }
    if (this._verifyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyConfig = this._verifyConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._percentage = undefined;
      this._phaseId = undefined;
      this._profiles = undefined;
      this._verify = undefined;
      this._analysis.internalValue = undefined;
      this._postdeploy.internalValue = undefined;
      this._predeploy.internalValue = undefined;
      this._verifyConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._percentage = value.percentage;
      this._phaseId = value.phaseId;
      this._profiles = value.profiles;
      this._verify = value.verify;
      this._analysis.internalValue = value.analysis;
      this._postdeploy.internalValue = value.postdeploy;
      this._predeploy.internalValue = value.predeploy;
      this._verifyConfig.internalValue = value.verifyConfig;
    }
  }

  // percentage - computed: false, optional: false, required: true
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }

  // phase_id - computed: false, optional: false, required: true
  private _phaseId?: string; 
  public get phaseId() {
    return this.getStringAttribute('phase_id');
  }
  public set phaseId(value: string) {
    this._phaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseIdInput() {
    return this._phaseId;
  }

  // profiles - computed: false, optional: true, required: false
  private _profiles?: string[]; 
  public get profiles() {
    return this.getListAttribute('profiles');
  }
  public set profiles(value: string[]) {
    this._profiles = value;
  }
  public resetProfiles() {
    this._profiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilesInput() {
    return this._profiles;
  }

  // verify - computed: false, optional: true, required: false
  private _verify?: boolean | cdktn.IResolvable; 
  public get verify() {
    return this.getBooleanAttribute('verify');
  }
  public set verify(value: boolean | cdktn.IResolvable) {
    this._verify = value;
  }
  public resetVerify() {
    this._verify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify;
  }

  // analysis - computed: false, optional: true, required: false
  private _analysis = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisOutputReference(this, "analysis");
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysis) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }

  // postdeploy - computed: false, optional: true, required: false
  private _postdeploy = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference(this, "postdeploy");
  public get postdeploy() {
    return this._postdeploy;
  }
  public putPostdeploy(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy) {
    this._postdeploy.internalValue = value;
  }
  public resetPostdeploy() {
    this._postdeploy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postdeployInput() {
    return this._postdeploy.internalValue;
  }

  // predeploy - computed: false, optional: true, required: false
  private _predeploy = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference(this, "predeploy");
  public get predeploy() {
    return this._predeploy;
  }
  public putPredeploy(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy) {
    this._predeploy.internalValue = value;
  }
  public resetPredeploy() {
    this._predeploy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predeployInput() {
    return this._predeploy.internalValue;
  }

  // verify_config - computed: false, optional: true, required: false
  private _verifyConfig = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigOutputReference(this, "verify_config");
  public get verifyConfig() {
    return this._verifyConfig;
  }
  public putVerifyConfig(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfig) {
    this._verifyConfig.internalValue = value;
  }
  public resetVerifyConfig() {
    this._verifyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyConfigInput() {
    return this._verifyConfig.internalValue;
  }
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList extends cdktn.ComplexList {
  public internalValue? : ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs[] | cdktn.IResolvable

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
  public get(index: number): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference {
    return new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment {
  /**
  * phase_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#phase_configs ClouddeployDeliveryPipeline#phase_configs}
  */
  readonly phaseConfigs: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs[] | cdktn.IResolvable;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    phase_configs: cdktn.listMapper(clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsToTerraform, true)(struct!.phaseConfigs),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    phase_configs: {
      value: cdktn.listMapperHcl(clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsToHclTerraform, true)(struct!.phaseConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._phaseConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.phaseConfigs = this._phaseConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._phaseConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._phaseConfigs.internalValue = value.phaseConfigs;
    }
  }

  // phase_configs - computed: false, optional: false, required: true
  private _phaseConfigs = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList(this, "phase_configs", false);
  public get phaseConfigs() {
    return this._phaseConfigs;
  }
  public putPhaseConfigs(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs[] | cdktn.IResolvable) {
    this._phaseConfigs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseConfigsInput() {
    return this._phaseConfigs.internalValue;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun {
  /**
  * Whether Cloud Deploy should update the traffic stanza in a Cloud Run Service on the user's behalf to facilitate traffic splitting. This is required to be true for CanaryDeployments, but optional for CustomCanaryDeployments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#automatic_traffic_control ClouddeployDeliveryPipeline#automatic_traffic_control}
  */
  readonly automaticTrafficControl?: boolean | cdktn.IResolvable;
  /**
  * Optional. A list of tags that are added to the canary revision while the canary phase is in progress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#canary_revision_tags ClouddeployDeliveryPipeline#canary_revision_tags}
  */
  readonly canaryRevisionTags?: string[];
  /**
  * Optional. A list of tags that are added to the prior revision while the canary phase is in progress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#prior_revision_tags ClouddeployDeliveryPipeline#prior_revision_tags}
  */
  readonly priorRevisionTags?: string[];
  /**
  * Optional. A list of tags that are added to the final stable revision when the stable phase is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#stable_revision_tags ClouddeployDeliveryPipeline#stable_revision_tags}
  */
  readonly stableRevisionTags?: string[];
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    automatic_traffic_control: cdktn.booleanToTerraform(struct!.automaticTrafficControl),
    canary_revision_tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.canaryRevisionTags),
    prior_revision_tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.priorRevisionTags),
    stable_revision_tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stableRevisionTags),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    automatic_traffic_control: {
      value: cdktn.booleanToHclTerraform(struct!.automaticTrafficControl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    canary_revision_tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.canaryRevisionTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prior_revision_tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.priorRevisionTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    stable_revision_tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stableRevisionTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticTrafficControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticTrafficControl = this._automaticTrafficControl;
    }
    if (this._canaryRevisionTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.canaryRevisionTags = this._canaryRevisionTags;
    }
    if (this._priorRevisionTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorRevisionTags = this._priorRevisionTags;
    }
    if (this._stableRevisionTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.stableRevisionTags = this._stableRevisionTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticTrafficControl = undefined;
      this._canaryRevisionTags = undefined;
      this._priorRevisionTags = undefined;
      this._stableRevisionTags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticTrafficControl = value.automaticTrafficControl;
      this._canaryRevisionTags = value.canaryRevisionTags;
      this._priorRevisionTags = value.priorRevisionTags;
      this._stableRevisionTags = value.stableRevisionTags;
    }
  }

  // automatic_traffic_control - computed: false, optional: true, required: false
  private _automaticTrafficControl?: boolean | cdktn.IResolvable; 
  public get automaticTrafficControl() {
    return this.getBooleanAttribute('automatic_traffic_control');
  }
  public set automaticTrafficControl(value: boolean | cdktn.IResolvable) {
    this._automaticTrafficControl = value;
  }
  public resetAutomaticTrafficControl() {
    this._automaticTrafficControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticTrafficControlInput() {
    return this._automaticTrafficControl;
  }

  // canary_revision_tags - computed: false, optional: true, required: false
  private _canaryRevisionTags?: string[]; 
  public get canaryRevisionTags() {
    return this.getListAttribute('canary_revision_tags');
  }
  public set canaryRevisionTags(value: string[]) {
    this._canaryRevisionTags = value;
  }
  public resetCanaryRevisionTags() {
    this._canaryRevisionTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryRevisionTagsInput() {
    return this._canaryRevisionTags;
  }

  // prior_revision_tags - computed: false, optional: true, required: false
  private _priorRevisionTags?: string[]; 
  public get priorRevisionTags() {
    return this.getListAttribute('prior_revision_tags');
  }
  public set priorRevisionTags(value: string[]) {
    this._priorRevisionTags = value;
  }
  public resetPriorRevisionTags() {
    this._priorRevisionTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorRevisionTagsInput() {
    return this._priorRevisionTags;
  }

  // stable_revision_tags - computed: false, optional: true, required: false
  private _stableRevisionTags?: string[]; 
  public get stableRevisionTags() {
    return this.getListAttribute('stable_revision_tags');
  }
  public set stableRevisionTags(value: string[]) {
    this._stableRevisionTags = value;
  }
  public resetStableRevisionTags() {
    this._stableRevisionTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stableRevisionTagsInput() {
    return this._stableRevisionTags;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations {
  /**
  * Required. The clusters where the Gateway API HTTPRoute resource will be deployed to. Valid entries include the associated entities IDs configured in the Target resource and "@self" to include the Target cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#destination_ids ClouddeployDeliveryPipeline#destination_ids}
  */
  readonly destinationIds: string[];
  /**
  * Optional. Whether to propagate the Kubernetes Service to the route destination clusters. The Service will always be deployed to the Target cluster even if the HTTPRoute is not. This option may be used to facilitiate successful DNS lookup in the route destination clusters. Can only be set to true if destinations are specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#propagate_service ClouddeployDeliveryPipeline#propagate_service}
  */
  readonly propagateService?: boolean | cdktn.IResolvable;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationIds),
    propagate_service: cdktn.booleanToTerraform(struct!.propagateService),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    propagate_service: {
      value: cdktn.booleanToHclTerraform(struct!.propagateService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIds = this._destinationIds;
    }
    if (this._propagateService !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagateService = this._propagateService;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationIds = undefined;
      this._propagateService = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationIds = value.destinationIds;
      this._propagateService = value.propagateService;
    }
  }

  // destination_ids - computed: false, optional: false, required: true
  private _destinationIds?: string[]; 
  public get destinationIds() {
    return this.getListAttribute('destination_ids');
  }
  public set destinationIds(value: string[]) {
    this._destinationIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIdsInput() {
    return this._destinationIds;
  }

  // propagate_service - computed: false, optional: true, required: false
  private _propagateService?: boolean | cdktn.IResolvable; 
  public get propagateService() {
    return this.getBooleanAttribute('propagate_service');
  }
  public set propagateService(value: boolean | cdktn.IResolvable) {
    this._propagateService = value;
  }
  public resetPropagateService() {
    this._propagateService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateServiceInput() {
    return this._propagateService;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh {
  /**
  * Required. Name of the Kubernetes Deployment whose traffic is managed by the specified HTTPRoute and Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#deployment ClouddeployDeliveryPipeline#deployment}
  */
  readonly deployment: string;
  /**
  * Required. Name of the Gateway API HTTPRoute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#http_route ClouddeployDeliveryPipeline#http_route}
  */
  readonly httpRoute: string;
  /**
  * Optional. The label to use when selecting Pods for the Deployment and Service resources. This label must already be present in both resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#pod_selector_label ClouddeployDeliveryPipeline#pod_selector_label}
  */
  readonly podSelectorLabel?: string;
  /**
  * Optional. The time to wait for route updates to propagate. The maximum configurable time is 3 hours, in seconds format. If unspecified, there is no wait time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#route_update_wait_time ClouddeployDeliveryPipeline#route_update_wait_time}
  */
  readonly routeUpdateWaitTime?: string;
  /**
  * Required. Name of the Kubernetes Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#service ClouddeployDeliveryPipeline#service}
  */
  readonly service: string;
  /**
  * Optional. The amount of time to migrate traffic back from the canary Service to the original Service during the stable phase deployment. If specified, must be between 15s and 3600s. If unspecified, there is no cutback time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#stable_cutback_duration ClouddeployDeliveryPipeline#stable_cutback_duration}
  */
  readonly stableCutbackDuration?: string;
  /**
  * route_destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#route_destinations ClouddeployDeliveryPipeline#route_destinations}
  */
  readonly routeDestinations?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    deployment: cdktn.stringToTerraform(struct!.deployment),
    http_route: cdktn.stringToTerraform(struct!.httpRoute),
    pod_selector_label: cdktn.stringToTerraform(struct!.podSelectorLabel),
    route_update_wait_time: cdktn.stringToTerraform(struct!.routeUpdateWaitTime),
    service: cdktn.stringToTerraform(struct!.service),
    stable_cutback_duration: cdktn.stringToTerraform(struct!.stableCutbackDuration),
    route_destinations: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsToTerraform(struct!.routeDestinations),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    deployment: {
      value: cdktn.stringToHclTerraform(struct!.deployment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_route: {
      value: cdktn.stringToHclTerraform(struct!.httpRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_selector_label: {
      value: cdktn.stringToHclTerraform(struct!.podSelectorLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_update_wait_time: {
      value: cdktn.stringToHclTerraform(struct!.routeUpdateWaitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktn.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stable_cutback_duration: {
      value: cdktn.stringToHclTerraform(struct!.stableCutbackDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_destinations: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsToHclTerraform(struct!.routeDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deployment !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployment = this._deployment;
    }
    if (this._httpRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRoute = this._httpRoute;
    }
    if (this._podSelectorLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelectorLabel = this._podSelectorLabel;
    }
    if (this._routeUpdateWaitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeUpdateWaitTime = this._routeUpdateWaitTime;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._stableCutbackDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.stableCutbackDuration = this._stableCutbackDuration;
    }
    if (this._routeDestinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeDestinations = this._routeDestinations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deployment = undefined;
      this._httpRoute = undefined;
      this._podSelectorLabel = undefined;
      this._routeUpdateWaitTime = undefined;
      this._service = undefined;
      this._stableCutbackDuration = undefined;
      this._routeDestinations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deployment = value.deployment;
      this._httpRoute = value.httpRoute;
      this._podSelectorLabel = value.podSelectorLabel;
      this._routeUpdateWaitTime = value.routeUpdateWaitTime;
      this._service = value.service;
      this._stableCutbackDuration = value.stableCutbackDuration;
      this._routeDestinations.internalValue = value.routeDestinations;
    }
  }

  // deployment - computed: false, optional: false, required: true
  private _deployment?: string; 
  public get deployment() {
    return this.getStringAttribute('deployment');
  }
  public set deployment(value: string) {
    this._deployment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment;
  }

  // http_route - computed: false, optional: false, required: true
  private _httpRoute?: string; 
  public get httpRoute() {
    return this.getStringAttribute('http_route');
  }
  public set httpRoute(value: string) {
    this._httpRoute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRouteInput() {
    return this._httpRoute;
  }

  // pod_selector_label - computed: false, optional: true, required: false
  private _podSelectorLabel?: string; 
  public get podSelectorLabel() {
    return this.getStringAttribute('pod_selector_label');
  }
  public set podSelectorLabel(value: string) {
    this._podSelectorLabel = value;
  }
  public resetPodSelectorLabel() {
    this._podSelectorLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorLabelInput() {
    return this._podSelectorLabel;
  }

  // route_update_wait_time - computed: false, optional: true, required: false
  private _routeUpdateWaitTime?: string; 
  public get routeUpdateWaitTime() {
    return this.getStringAttribute('route_update_wait_time');
  }
  public set routeUpdateWaitTime(value: string) {
    this._routeUpdateWaitTime = value;
  }
  public resetRouteUpdateWaitTime() {
    this._routeUpdateWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeUpdateWaitTimeInput() {
    return this._routeUpdateWaitTime;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // stable_cutback_duration - computed: false, optional: true, required: false
  private _stableCutbackDuration?: string; 
  public get stableCutbackDuration() {
    return this.getStringAttribute('stable_cutback_duration');
  }
  public set stableCutbackDuration(value: string) {
    this._stableCutbackDuration = value;
  }
  public resetStableCutbackDuration() {
    this._stableCutbackDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stableCutbackDurationInput() {
    return this._stableCutbackDuration;
  }

  // route_destinations - computed: false, optional: true, required: false
  private _routeDestinations = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference(this, "route_destinations");
  public get routeDestinations() {
    return this._routeDestinations;
  }
  public putRouteDestinations(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations) {
    this._routeDestinations.internalValue = value;
  }
  public resetRouteDestinations() {
    this._routeDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeDestinationsInput() {
    return this._routeDestinations.internalValue;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking {
  /**
  * Required. Name of the Kubernetes Deployment whose traffic is managed by the specified Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#deployment ClouddeployDeliveryPipeline#deployment}
  */
  readonly deployment: string;
  /**
  * Optional. Whether to disable Pod overprovisioning. If Pod overprovisioning is disabled then Cloud Deploy will limit the number of total Pods used for the deployment strategy to the number of Pods the Deployment has on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#disable_pod_overprovisioning ClouddeployDeliveryPipeline#disable_pod_overprovisioning}
  */
  readonly disablePodOverprovisioning?: boolean | cdktn.IResolvable;
  /**
  * Optional. The label to use when selecting Pods for the Deployment resource. This label must already be present in the Deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#pod_selector_label ClouddeployDeliveryPipeline#pod_selector_label}
  */
  readonly podSelectorLabel?: string;
  /**
  * Required. Name of the Kubernetes Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#service ClouddeployDeliveryPipeline#service}
  */
  readonly service: string;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    deployment: cdktn.stringToTerraform(struct!.deployment),
    disable_pod_overprovisioning: cdktn.booleanToTerraform(struct!.disablePodOverprovisioning),
    pod_selector_label: cdktn.stringToTerraform(struct!.podSelectorLabel),
    service: cdktn.stringToTerraform(struct!.service),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    deployment: {
      value: cdktn.stringToHclTerraform(struct!.deployment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_pod_overprovisioning: {
      value: cdktn.booleanToHclTerraform(struct!.disablePodOverprovisioning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod_selector_label: {
      value: cdktn.stringToHclTerraform(struct!.podSelectorLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktn.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deployment !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployment = this._deployment;
    }
    if (this._disablePodOverprovisioning !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePodOverprovisioning = this._disablePodOverprovisioning;
    }
    if (this._podSelectorLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelectorLabel = this._podSelectorLabel;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deployment = undefined;
      this._disablePodOverprovisioning = undefined;
      this._podSelectorLabel = undefined;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deployment = value.deployment;
      this._disablePodOverprovisioning = value.disablePodOverprovisioning;
      this._podSelectorLabel = value.podSelectorLabel;
      this._service = value.service;
    }
  }

  // deployment - computed: false, optional: false, required: true
  private _deployment?: string; 
  public get deployment() {
    return this.getStringAttribute('deployment');
  }
  public set deployment(value: string) {
    this._deployment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment;
  }

  // disable_pod_overprovisioning - computed: false, optional: true, required: false
  private _disablePodOverprovisioning?: boolean | cdktn.IResolvable; 
  public get disablePodOverprovisioning() {
    return this.getBooleanAttribute('disable_pod_overprovisioning');
  }
  public set disablePodOverprovisioning(value: boolean | cdktn.IResolvable) {
    this._disablePodOverprovisioning = value;
  }
  public resetDisablePodOverprovisioning() {
    this._disablePodOverprovisioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePodOverprovisioningInput() {
    return this._disablePodOverprovisioning;
  }

  // pod_selector_label - computed: false, optional: true, required: false
  private _podSelectorLabel?: string; 
  public get podSelectorLabel() {
    return this.getStringAttribute('pod_selector_label');
  }
  public set podSelectorLabel(value: string) {
    this._podSelectorLabel = value;
  }
  public resetPodSelectorLabel() {
    this._podSelectorLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorLabelInput() {
    return this._podSelectorLabel;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes {
  /**
  * gateway_service_mesh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#gateway_service_mesh ClouddeployDeliveryPipeline#gateway_service_mesh}
  */
  readonly gatewayServiceMesh?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh;
  /**
  * service_networking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#service_networking ClouddeployDeliveryPipeline#service_networking}
  */
  readonly serviceNetworking?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gateway_service_mesh: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshToTerraform(struct!.gatewayServiceMesh),
    service_networking: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingToTerraform(struct!.serviceNetworking),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    gateway_service_mesh: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshToHclTerraform(struct!.gatewayServiceMesh),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshList",
    },
    service_networking: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingToHclTerraform(struct!.serviceNetworking),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gatewayServiceMesh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayServiceMesh = this._gatewayServiceMesh?.internalValue;
    }
    if (this._serviceNetworking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNetworking = this._serviceNetworking?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gatewayServiceMesh.internalValue = undefined;
      this._serviceNetworking.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gatewayServiceMesh.internalValue = value.gatewayServiceMesh;
      this._serviceNetworking.internalValue = value.serviceNetworking;
    }
  }

  // gateway_service_mesh - computed: false, optional: true, required: false
  private _gatewayServiceMesh = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference(this, "gateway_service_mesh");
  public get gatewayServiceMesh() {
    return this._gatewayServiceMesh;
  }
  public putGatewayServiceMesh(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh) {
    this._gatewayServiceMesh.internalValue = value;
  }
  public resetGatewayServiceMesh() {
    this._gatewayServiceMesh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayServiceMeshInput() {
    return this._gatewayServiceMesh.internalValue;
  }

  // service_networking - computed: false, optional: true, required: false
  private _serviceNetworking = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference(this, "service_networking");
  public get serviceNetworking() {
    return this._serviceNetworking;
  }
  public putServiceNetworking(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking) {
    this._serviceNetworking.internalValue = value;
  }
  public resetServiceNetworking() {
    this._serviceNetworking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNetworkingInput() {
    return this._serviceNetworking.internalValue;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig {
  /**
  * cloud_run block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#cloud_run ClouddeployDeliveryPipeline#cloud_run}
  */
  readonly cloudRun?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun;
  /**
  * kubernetes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#kubernetes ClouddeployDeliveryPipeline#kubernetes}
  */
  readonly kubernetes?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloud_run: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunToTerraform(struct!.cloudRun),
    kubernetes: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesToTerraform(struct!.kubernetes),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloud_run: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunToHclTerraform(struct!.cloudRun),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunList",
    },
    kubernetes: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesToHclTerraform(struct!.kubernetes),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudRun?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudRun = this._cloudRun?.internalValue;
    }
    if (this._kubernetes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetes = this._kubernetes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudRun.internalValue = undefined;
      this._kubernetes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudRun.internalValue = value.cloudRun;
      this._kubernetes.internalValue = value.kubernetes;
    }
  }

  // cloud_run - computed: false, optional: true, required: false
  private _cloudRun = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference(this, "cloud_run");
  public get cloudRun() {
    return this._cloudRun;
  }
  public putCloudRun(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun) {
    this._cloudRun.internalValue = value;
  }
  public resetCloudRun() {
    this._cloudRun.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRunInput() {
    return this._cloudRun.internalValue;
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference(this, "kubernetes");
  public get kubernetes() {
    return this._kubernetes;
  }
  public putKubernetes(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes) {
    this._kubernetes.internalValue = value;
  }
  public resetKubernetes() {
    this._kubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes.internalValue;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary {
  /**
  * canary_deployment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#canary_deployment ClouddeployDeliveryPipeline#canary_deployment}
  */
  readonly canaryDeployment?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment;
  /**
  * custom_canary_deployment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#custom_canary_deployment ClouddeployDeliveryPipeline#custom_canary_deployment}
  */
  readonly customCanaryDeployment?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment;
  /**
  * runtime_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#runtime_config ClouddeployDeliveryPipeline#runtime_config}
  */
  readonly runtimeConfig?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    canary_deployment: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentToTerraform(struct!.canaryDeployment),
    custom_canary_deployment: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentToTerraform(struct!.customCanaryDeployment),
    runtime_config: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigToTerraform(struct!.runtimeConfig),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    canary_deployment: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentToHclTerraform(struct!.canaryDeployment),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentList",
    },
    custom_canary_deployment: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentToHclTerraform(struct!.customCanaryDeployment),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentList",
    },
    runtime_config: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigToHclTerraform(struct!.runtimeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canaryDeployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canaryDeployment = this._canaryDeployment?.internalValue;
    }
    if (this._customCanaryDeployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCanaryDeployment = this._customCanaryDeployment?.internalValue;
    }
    if (this._runtimeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeConfig = this._runtimeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._canaryDeployment.internalValue = undefined;
      this._customCanaryDeployment.internalValue = undefined;
      this._runtimeConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._canaryDeployment.internalValue = value.canaryDeployment;
      this._customCanaryDeployment.internalValue = value.customCanaryDeployment;
      this._runtimeConfig.internalValue = value.runtimeConfig;
    }
  }

  // canary_deployment - computed: false, optional: true, required: false
  private _canaryDeployment = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference(this, "canary_deployment");
  public get canaryDeployment() {
    return this._canaryDeployment;
  }
  public putCanaryDeployment(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment) {
    this._canaryDeployment.internalValue = value;
  }
  public resetCanaryDeployment() {
    this._canaryDeployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryDeploymentInput() {
    return this._canaryDeployment.internalValue;
  }

  // custom_canary_deployment - computed: false, optional: true, required: false
  private _customCanaryDeployment = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference(this, "custom_canary_deployment");
  public get customCanaryDeployment() {
    return this._customCanaryDeployment;
  }
  public putCustomCanaryDeployment(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment) {
    this._customCanaryDeployment.internalValue = value;
  }
  public resetCustomCanaryDeployment() {
    this._customCanaryDeployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCanaryDeploymentInput() {
    return this._customCanaryDeployment.internalValue;
  }

  // runtime_config - computed: false, optional: true, required: false
  private _runtimeConfig = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference(this, "runtime_config");
  public get runtimeConfig() {
    return this._runtimeConfig;
  }
  public putRuntimeConfig(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig) {
    this._runtimeConfig.internalValue = value;
  }
  public resetRuntimeConfig() {
    this._runtimeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeConfigInput() {
    return this._runtimeConfig.internalValue;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainer {
  /**
  * Optional. Args is the container arguments to use. This overrides the default arguments defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#args ClouddeployDeliveryPipeline#args}
  */
  readonly args?: string[];
  /**
  * Optional. Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#command ClouddeployDeliveryPipeline#command}
  */
  readonly command?: string[];
  /**
  * Optional. Environment variables that are set in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#env ClouddeployDeliveryPipeline#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Required. Image is the container image to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#image ClouddeployDeliveryPipeline#image}
  */
  readonly image: string;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainerToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainerOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    args: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.args),
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    env: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.env),
    image: cdktn.stringToTerraform(struct!.image),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainerToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainerOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    args: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._command = undefined;
      this._env = undefined;
      this._image = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._command = value.command;
      this._env = value.env;
      this._image = value.image;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTask {
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#container ClouddeployDeliveryPipeline#container}
  */
  readonly container?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainer;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container: clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainerToTerraform(struct!.container),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._container.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._container.internalValue = value.container;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecks {
  /**
  * Optional. Frequency of the custom check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#frequency ClouddeployDeliveryPipeline#frequency}
  */
  readonly frequency?: string;
  /**
  * Required. Unique identifier for the custom check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#id ClouddeployDeliveryPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#task ClouddeployDeliveryPipeline#task}
  */
  readonly task?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTask;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    frequency: cdktn.stringToTerraform(struct!.frequency),
    id: cdktn.stringToTerraform(struct!.id),
    task: clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskToTerraform(struct!.task),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    frequency: {
      value: cdktn.stringToHclTerraform(struct!.frequency),
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
    task: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskToHclTerraform(struct!.task),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._task?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.task = this._task?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._frequency = undefined;
      this._id = undefined;
      this._task.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._frequency = value.frequency;
      this._id = value.id;
      this._task.internalValue = value.task;
    }
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
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

  // task - computed: false, optional: true, required: false
  private _task = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskOutputReference(this, "task");
  public get task() {
    return this._task;
  }
  public putTask(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTask) {
    this._task.internalValue = value;
  }
  public resetTask() {
    this._task.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInput() {
    return this._task.internalValue;
  }
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksList extends cdktn.ComplexList {
  public internalValue? : ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecks[] | cdktn.IResolvable

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
  public get(index: number): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksOutputReference {
    return new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecks {
  /**
  * Required. The list of alert policy names to check. Format: `projects/{project}/alertPolicies/{alert_policy}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#alert_policies ClouddeployDeliveryPipeline#alert_policies}
  */
  readonly alertPolicies: string[];
  /**
  * Required. Unique identifier for the alert policy check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#id ClouddeployDeliveryPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Optional. Labels to filter the alert policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#labels ClouddeployDeliveryPipeline#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecksToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alert_policies: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.alertPolicies),
    id: cdktn.stringToTerraform(struct!.id),
    labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.labels),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecksToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alert_policies: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.alertPolicies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertPolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertPolicies = this._alertPolicies;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertPolicies = undefined;
      this._id = undefined;
      this._labels = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertPolicies = value.alertPolicies;
      this._id = value.id;
      this._labels = value.labels;
    }
  }

  // alert_policies - computed: false, optional: false, required: true
  private _alertPolicies?: string[]; 
  public get alertPolicies() {
    return this.getListAttribute('alert_policies');
  }
  public set alertPolicies(value: string[]) {
    this._alertPolicies = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertPoliciesInput() {
    return this._alertPolicies;
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
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecksList extends cdktn.ComplexList {
  public internalValue? : ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecks[] | cdktn.IResolvable

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
  public get(index: number): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecksOutputReference {
    return new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloud {
  /**
  * alert_policy_checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#alert_policy_checks ClouddeployDeliveryPipeline#alert_policy_checks}
  */
  readonly alertPolicyChecks?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecks[] | cdktn.IResolvable;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloud): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alert_policy_checks: cdktn.listMapper(clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecksToTerraform, true)(struct!.alertPolicyChecks),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloud): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alert_policy_checks: {
      value: cdktn.listMapperHcl(clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecksToHclTerraform, true)(struct!.alertPolicyChecks),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloud | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertPolicyChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertPolicyChecks = this._alertPolicyChecks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloud | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertPolicyChecks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertPolicyChecks.internalValue = value.alertPolicyChecks;
    }
  }

  // alert_policy_checks - computed: false, optional: true, required: false
  private _alertPolicyChecks = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecksList(this, "alert_policy_checks", false);
  public get alertPolicyChecks() {
    return this._alertPolicyChecks;
  }
  public putAlertPolicyChecks(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecks[] | cdktn.IResolvable) {
    this._alertPolicyChecks.internalValue = value;
  }
  public resetAlertPolicyChecks() {
    this._alertPolicyChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertPolicyChecksInput() {
    return this._alertPolicyChecks.internalValue;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysis {
  /**
  * Required. Duration of the analysis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#duration ClouddeployDeliveryPipeline#duration}
  */
  readonly duration: string;
  /**
  * custom_checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#custom_checks ClouddeployDeliveryPipeline#custom_checks}
  */
  readonly customChecks?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecks[] | cdktn.IResolvable;
  /**
  * google_cloud block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#google_cloud ClouddeployDeliveryPipeline#google_cloud}
  */
  readonly googleCloud?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloud;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration: cdktn.stringToTerraform(struct!.duration),
    custom_checks: cdktn.listMapper(clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksToTerraform, true)(struct!.customChecks),
    google_cloud: clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudToTerraform(struct!.googleCloud),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration: {
      value: cdktn.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_checks: {
      value: cdktn.listMapperHcl(clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksToHclTerraform, true)(struct!.customChecks),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksList",
    },
    google_cloud: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudToHclTerraform(struct!.googleCloud),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._customChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customChecks = this._customChecks?.internalValue;
    }
    if (this._googleCloud?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloud = this._googleCloud?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._customChecks.internalValue = undefined;
      this._googleCloud.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._customChecks.internalValue = value.customChecks;
      this._googleCloud.internalValue = value.googleCloud;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // custom_checks - computed: false, optional: true, required: false
  private _customChecks = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksList(this, "custom_checks", false);
  public get customChecks() {
    return this._customChecks;
  }
  public putCustomChecks(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecks[] | cdktn.IResolvable) {
    this._customChecks.internalValue = value;
  }
  public resetCustomChecks() {
    this._customChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customChecksInput() {
    return this._customChecks.internalValue;
  }

  // google_cloud - computed: false, optional: true, required: false
  private _googleCloud = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudOutputReference(this, "google_cloud");
  public get googleCloud() {
    return this._googleCloud;
  }
  public putGoogleCloud(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloud) {
    this._googleCloud.internalValue = value;
  }
  public resetGoogleCloud() {
    this._googleCloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudInput() {
    return this._googleCloud.internalValue;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainer {
  /**
  * Optional. Args is the container arguments to use. This overrides the default arguments defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#args ClouddeployDeliveryPipeline#args}
  */
  readonly args?: string[];
  /**
  * Optional. Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#command ClouddeployDeliveryPipeline#command}
  */
  readonly command?: string[];
  /**
  * Optional. Environment variables that are set in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#env ClouddeployDeliveryPipeline#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Required. Image is the container image to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#image ClouddeployDeliveryPipeline#image}
  */
  readonly image: string;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainerToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainerOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    args: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.args),
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    env: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.env),
    image: cdktn.stringToTerraform(struct!.image),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainerToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainerOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    args: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._command = undefined;
      this._env = undefined;
      this._image = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._command = value.command;
      this._env = value.env;
      this._image = value.image;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasks {
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#container ClouddeployDeliveryPipeline#container}
  */
  readonly container?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainer;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container: clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainerToTerraform(struct!.container),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container.internalValue = value.container;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksList extends cdktn.ComplexList {
  public internalValue? : ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasks[] | cdktn.IResolvable

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
  public get(index: number): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksOutputReference {
    return new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy {
  /**
  * Optional. A sequence of skaffold custom actions to invoke during execution of the postdeploy job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#actions ClouddeployDeliveryPipeline#actions}
  */
  readonly actions?: string[];
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#tasks ClouddeployDeliveryPipeline#tasks}
  */
  readonly tasks?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasks[] | cdktn.IResolvable;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
    tasks: cdktn.listMapper(clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksToTerraform, true)(struct!.tasks),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tasks: {
      value: cdktn.listMapperHcl(clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksToHclTerraform, true)(struct!.tasks),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._tasks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasks = this._tasks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actions = undefined;
      this._tasks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actions = value.actions;
      this._tasks.internalValue = value.tasks;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // tasks - computed: false, optional: true, required: false
  private _tasks = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasks[] | cdktn.IResolvable) {
    this._tasks.internalValue = value;
  }
  public resetTasks() {
    this._tasks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks.internalValue;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainer {
  /**
  * Optional. Args is the container arguments to use. This overrides the default arguments defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#args ClouddeployDeliveryPipeline#args}
  */
  readonly args?: string[];
  /**
  * Optional. Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#command ClouddeployDeliveryPipeline#command}
  */
  readonly command?: string[];
  /**
  * Optional. Environment variables that are set in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#env ClouddeployDeliveryPipeline#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Required. Image is the container image to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#image ClouddeployDeliveryPipeline#image}
  */
  readonly image: string;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainerToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainerOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    args: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.args),
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    env: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.env),
    image: cdktn.stringToTerraform(struct!.image),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainerToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainerOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    args: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._command = undefined;
      this._env = undefined;
      this._image = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._command = value.command;
      this._env = value.env;
      this._image = value.image;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasks {
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#container ClouddeployDeliveryPipeline#container}
  */
  readonly container?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainer;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container: clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainerToTerraform(struct!.container),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container.internalValue = value.container;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksList extends cdktn.ComplexList {
  public internalValue? : ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasks[] | cdktn.IResolvable

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
  public get(index: number): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksOutputReference {
    return new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy {
  /**
  * Optional. A sequence of skaffold custom actions to invoke during execution of the predeploy job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#actions ClouddeployDeliveryPipeline#actions}
  */
  readonly actions?: string[];
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#tasks ClouddeployDeliveryPipeline#tasks}
  */
  readonly tasks?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasks[] | cdktn.IResolvable;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
    tasks: cdktn.listMapper(clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksToTerraform, true)(struct!.tasks),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tasks: {
      value: cdktn.listMapperHcl(clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksToHclTerraform, true)(struct!.tasks),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._tasks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasks = this._tasks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actions = undefined;
      this._tasks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actions = value.actions;
      this._tasks.internalValue = value.tasks;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // tasks - computed: false, optional: true, required: false
  private _tasks = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasks[] | cdktn.IResolvable) {
    this._tasks.internalValue = value;
  }
  public resetTasks() {
    this._tasks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks.internalValue;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainer {
  /**
  * Optional. Args is the container arguments to use. This overrides the default arguments defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#args ClouddeployDeliveryPipeline#args}
  */
  readonly args?: string[];
  /**
  * Optional. Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#command ClouddeployDeliveryPipeline#command}
  */
  readonly command?: string[];
  /**
  * Optional. Environment variables that are set in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#env ClouddeployDeliveryPipeline#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Required. Image is the container image to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#image ClouddeployDeliveryPipeline#image}
  */
  readonly image: string;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainerToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainerOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    args: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.args),
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    env: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.env),
    image: cdktn.stringToTerraform(struct!.image),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainerToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainerOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    args: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._command = undefined;
      this._env = undefined;
      this._image = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._command = value.command;
      this._env = value.env;
      this._image = value.image;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasks {
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#container ClouddeployDeliveryPipeline#container}
  */
  readonly container?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainer;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container: clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainerToTerraform(struct!.container),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container.internalValue = value.container;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksList extends cdktn.ComplexList {
  public internalValue? : ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasks[] | cdktn.IResolvable

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
  public get(index: number): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksOutputReference {
    return new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfig {
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#tasks ClouddeployDeliveryPipeline#tasks}
  */
  readonly tasks?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasks[] | cdktn.IResolvable;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tasks: cdktn.listMapper(clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksToTerraform, true)(struct!.tasks),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tasks: {
      value: cdktn.listMapperHcl(clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksToHclTerraform, true)(struct!.tasks),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tasks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasks = this._tasks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tasks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tasks.internalValue = value.tasks;
    }
  }

  // tasks - computed: false, optional: true, required: false
  private _tasks = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasks[] | cdktn.IResolvable) {
    this._tasks.internalValue = value;
  }
  public resetTasks() {
    this._tasks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks.internalValue;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard {
  /**
  * Whether to verify a deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#verify ClouddeployDeliveryPipeline#verify}
  */
  readonly verify?: boolean | cdktn.IResolvable;
  /**
  * analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#analysis ClouddeployDeliveryPipeline#analysis}
  */
  readonly analysis?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysis;
  /**
  * postdeploy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#postdeploy ClouddeployDeliveryPipeline#postdeploy}
  */
  readonly postdeploy?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy;
  /**
  * predeploy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#predeploy ClouddeployDeliveryPipeline#predeploy}
  */
  readonly predeploy?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy;
  /**
  * verify_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#verify_config ClouddeployDeliveryPipeline#verify_config}
  */
  readonly verifyConfig?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfig;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    verify: cdktn.booleanToTerraform(struct!.verify),
    analysis: clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisToTerraform(struct!.analysis),
    postdeploy: clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployToTerraform(struct!.postdeploy),
    predeploy: clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployToTerraform(struct!.predeploy),
    verify_config: clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigToTerraform(struct!.verifyConfig),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    verify: {
      value: cdktn.booleanToHclTerraform(struct!.verify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    analysis: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisToHclTerraform(struct!.analysis),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisList",
    },
    postdeploy: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployToHclTerraform(struct!.postdeploy),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployList",
    },
    predeploy: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployToHclTerraform(struct!.predeploy),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployList",
    },
    verify_config: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigToHclTerraform(struct!.verifyConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._verify !== undefined) {
      hasAnyValues = true;
      internalValueResult.verify = this._verify;
    }
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    if (this._postdeploy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postdeploy = this._postdeploy?.internalValue;
    }
    if (this._predeploy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predeploy = this._predeploy?.internalValue;
    }
    if (this._verifyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyConfig = this._verifyConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._verify = undefined;
      this._analysis.internalValue = undefined;
      this._postdeploy.internalValue = undefined;
      this._predeploy.internalValue = undefined;
      this._verifyConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._verify = value.verify;
      this._analysis.internalValue = value.analysis;
      this._postdeploy.internalValue = value.postdeploy;
      this._predeploy.internalValue = value.predeploy;
      this._verifyConfig.internalValue = value.verifyConfig;
    }
  }

  // verify - computed: false, optional: true, required: false
  private _verify?: boolean | cdktn.IResolvable; 
  public get verify() {
    return this.getBooleanAttribute('verify');
  }
  public set verify(value: boolean | cdktn.IResolvable) {
    this._verify = value;
  }
  public resetVerify() {
    this._verify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify;
  }

  // analysis - computed: false, optional: true, required: false
  private _analysis = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisOutputReference(this, "analysis");
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysis) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }

  // postdeploy - computed: false, optional: true, required: false
  private _postdeploy = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference(this, "postdeploy");
  public get postdeploy() {
    return this._postdeploy;
  }
  public putPostdeploy(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy) {
    this._postdeploy.internalValue = value;
  }
  public resetPostdeploy() {
    this._postdeploy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postdeployInput() {
    return this._postdeploy.internalValue;
  }

  // predeploy - computed: false, optional: true, required: false
  private _predeploy = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference(this, "predeploy");
  public get predeploy() {
    return this._predeploy;
  }
  public putPredeploy(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy) {
    this._predeploy.internalValue = value;
  }
  public resetPredeploy() {
    this._predeploy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predeployInput() {
    return this._predeploy.internalValue;
  }

  // verify_config - computed: false, optional: true, required: false
  private _verifyConfig = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigOutputReference(this, "verify_config");
  public get verifyConfig() {
    return this._verifyConfig;
  }
  public putVerifyConfig(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfig) {
    this._verifyConfig.internalValue = value;
  }
  public resetVerifyConfig() {
    this._verifyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyConfigInput() {
    return this._verifyConfig.internalValue;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategy {
  /**
  * canary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#canary ClouddeployDeliveryPipeline#canary}
  */
  readonly canary?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary;
  /**
  * standard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#standard ClouddeployDeliveryPipeline#standard}
  */
  readonly standard?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    canary: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryToTerraform(struct!.canary),
    standard: clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardToTerraform(struct!.standard),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    canary: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryToHclTerraform(struct!.canary),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryList",
    },
    standard: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardToHclTerraform(struct!.standard),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canary = this._canary?.internalValue;
    }
    if (this._standard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standard = this._standard?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._canary.internalValue = undefined;
      this._standard.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._canary.internalValue = value.canary;
      this._standard.internalValue = value.standard;
    }
  }

  // canary - computed: false, optional: true, required: false
  private _canary = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference(this, "canary");
  public get canary() {
    return this._canary;
  }
  public putCanary(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary) {
    this._canary.internalValue = value;
  }
  public resetCanary() {
    this._canary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryInput() {
    return this._canary.internalValue;
  }

  // standard - computed: false, optional: true, required: false
  private _standard = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference(this, "standard");
  public get standard() {
    return this._standard;
  }
  public putStandard(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard) {
    this._standard.internalValue = value;
  }
  public resetStandard() {
    this._standard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardInput() {
    return this._standard.internalValue;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStages {
  /**
  * Skaffold profiles to use when rendering the manifest for this stage's `Target`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#profiles ClouddeployDeliveryPipeline#profiles}
  */
  readonly profiles?: string[];
  /**
  * The target_id to which this stage points. This field refers exclusively to the last segment of a target name. For example, this field would just be `my-target` (rather than `projects/project/locations/location/targets/my-target`). The location of the `Target` is inferred to be the same as the location of the `DeliveryPipeline` that contains this `Stage`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#target_id ClouddeployDeliveryPipeline#target_id}
  */
  readonly targetId?: string;
  /**
  * deploy_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#deploy_parameters ClouddeployDeliveryPipeline#deploy_parameters}
  */
  readonly deployParameters?: ClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters[] | cdktn.IResolvable;
  /**
  * strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#strategy ClouddeployDeliveryPipeline#strategy}
  */
  readonly strategy?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategy;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStages | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    profiles: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.profiles),
    target_id: cdktn.stringToTerraform(struct!.targetId),
    deploy_parameters: cdktn.listMapper(clouddeployDeliveryPipelineSerialPipelineStagesDeployParametersToTerraform, true)(struct!.deployParameters),
    strategy: clouddeployDeliveryPipelineSerialPipelineStagesStrategyToTerraform(struct!.strategy),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineStagesToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStages | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    profiles: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.profiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_id: {
      value: cdktn.stringToHclTerraform(struct!.targetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deploy_parameters: {
      value: cdktn.listMapperHcl(clouddeployDeliveryPipelineSerialPipelineStagesDeployParametersToHclTerraform, true)(struct!.deployParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList",
    },
    strategy: {
      value: clouddeployDeliveryPipelineSerialPipelineStagesStrategyToHclTerraform(struct!.strategy),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesStrategyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStages | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.profiles = this._profiles;
    }
    if (this._targetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetId = this._targetId;
    }
    if (this._deployParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployParameters = this._deployParameters?.internalValue;
    }
    if (this._strategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStages | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profiles = undefined;
      this._targetId = undefined;
      this._deployParameters.internalValue = undefined;
      this._strategy.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profiles = value.profiles;
      this._targetId = value.targetId;
      this._deployParameters.internalValue = value.deployParameters;
      this._strategy.internalValue = value.strategy;
    }
  }

  // profiles - computed: false, optional: true, required: false
  private _profiles?: string[]; 
  public get profiles() {
    return this.getListAttribute('profiles');
  }
  public set profiles(value: string[]) {
    this._profiles = value;
  }
  public resetProfiles() {
    this._profiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilesInput() {
    return this._profiles;
  }

  // target_id - computed: false, optional: true, required: false
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  public resetTargetId() {
    this._targetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // deploy_parameters - computed: false, optional: true, required: false
  private _deployParameters = new ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList(this, "deploy_parameters", false);
  public get deployParameters() {
    return this._deployParameters;
  }
  public putDeployParameters(value: ClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters[] | cdktn.IResolvable) {
    this._deployParameters.internalValue = value;
  }
  public resetDeployParameters() {
    this._deployParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployParametersInput() {
    return this._deployParameters.internalValue;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategy) {
    this._strategy.internalValue = value;
  }
  public resetStrategy() {
    this._strategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
  }
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesList extends cdktn.ComplexList {
  public internalValue? : ClouddeployDeliveryPipelineSerialPipelineStages[] | cdktn.IResolvable

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
  public get(index: number): ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference {
    return new ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployDeliveryPipelineSerialPipeline {
  /**
  * stages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#stages ClouddeployDeliveryPipeline#stages}
  */
  readonly stages?: ClouddeployDeliveryPipelineSerialPipelineStages[] | cdktn.IResolvable;
}

export function clouddeployDeliveryPipelineSerialPipelineToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineOutputReference | ClouddeployDeliveryPipelineSerialPipeline): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    stages: cdktn.listMapper(clouddeployDeliveryPipelineSerialPipelineStagesToTerraform, true)(struct!.stages),
  }
}


export function clouddeployDeliveryPipelineSerialPipelineToHclTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineOutputReference | ClouddeployDeliveryPipelineSerialPipeline): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    stages: {
      value: cdktn.listMapperHcl(clouddeployDeliveryPipelineSerialPipelineStagesToHclTerraform, true)(struct!.stages),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployDeliveryPipelineSerialPipelineStagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployDeliveryPipelineSerialPipelineOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipeline | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stages = this._stages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipeline | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stages.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stages.internalValue = value.stages;
    }
  }

  // stages - computed: false, optional: true, required: false
  private _stages = new ClouddeployDeliveryPipelineSerialPipelineStagesList(this, "stages", false);
  public get stages() {
    return this._stages;
  }
  public putStages(value: ClouddeployDeliveryPipelineSerialPipelineStages[] | cdktn.IResolvable) {
    this._stages.internalValue = value;
  }
  public resetStages() {
    this._stages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagesInput() {
    return this._stages.internalValue;
  }
}
export interface ClouddeployDeliveryPipelineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#create ClouddeployDeliveryPipeline#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#delete ClouddeployDeliveryPipeline#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#update ClouddeployDeliveryPipeline#update}
  */
  readonly update?: string;
}

export function clouddeployDeliveryPipelineTimeoutsToTerraform(struct?: ClouddeployDeliveryPipelineTimeouts | cdktn.IResolvable): any {
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


export function clouddeployDeliveryPipelineTimeoutsToHclTerraform(struct?: ClouddeployDeliveryPipelineTimeouts | cdktn.IResolvable): any {
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

export class ClouddeployDeliveryPipelineTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClouddeployDeliveryPipelineTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ClouddeployDeliveryPipelineTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline google_clouddeploy_delivery_pipeline}
*/
export class ClouddeployDeliveryPipeline extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_clouddeploy_delivery_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ClouddeployDeliveryPipeline resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClouddeployDeliveryPipeline to import
  * @param importFromId The id of the existing ClouddeployDeliveryPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClouddeployDeliveryPipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_clouddeploy_delivery_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/clouddeploy_delivery_pipeline google_clouddeploy_delivery_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClouddeployDeliveryPipelineConfig
  */
  public constructor(scope: Construct, id: string, config: ClouddeployDeliveryPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'google_clouddeploy_delivery_pipeline',
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
    this._annotations = config.annotations;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._suspended = config.suspended;
    this._serialPipeline.internalValue = config.serialPipeline;
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

  // condition - computed: true, optional: false, required: false
  private _condition = new ClouddeployDeliveryPipelineConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // suspended - computed: false, optional: true, required: false
  private _suspended?: boolean | cdktn.IResolvable; 
  public get suspended() {
    return this.getBooleanAttribute('suspended');
  }
  public set suspended(value: boolean | cdktn.IResolvable) {
    this._suspended = value;
  }
  public resetSuspended() {
    this._suspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendedInput() {
    return this._suspended;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // serial_pipeline - computed: false, optional: true, required: false
  private _serialPipeline = new ClouddeployDeliveryPipelineSerialPipelineOutputReference(this, "serial_pipeline");
  public get serialPipeline() {
    return this._serialPipeline;
  }
  public putSerialPipeline(value: ClouddeployDeliveryPipelineSerialPipeline) {
    this._serialPipeline.internalValue = value;
  }
  public resetSerialPipeline() {
    this._serialPipeline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialPipelineInput() {
    return this._serialPipeline.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClouddeployDeliveryPipelineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClouddeployDeliveryPipelineTimeouts) {
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
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      suspended: cdktn.booleanToTerraform(this._suspended),
      serial_pipeline: clouddeployDeliveryPipelineSerialPipelineToTerraform(this._serialPipeline.internalValue),
      timeouts: clouddeployDeliveryPipelineTimeoutsToTerraform(this._timeouts.internalValue),
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
      suspended: {
        value: cdktn.booleanToHclTerraform(this._suspended),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      serial_pipeline: {
        value: clouddeployDeliveryPipelineSerialPipelineToHclTerraform(this._serialPipeline.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClouddeployDeliveryPipelineSerialPipelineList",
      },
      timeouts: {
        value: clouddeployDeliveryPipelineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClouddeployDeliveryPipelineTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
