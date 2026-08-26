/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_global_vm_extension_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ComputeGlobalVmExtensionPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_global_vm_extension_policy#deletion_policy ComputeGlobalVmExtensionPolicy#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_global_vm_extension_policy#description ComputeGlobalVmExtensionPolicy#description}
  */
  readonly description?: string;
  /**
  * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long and match the regular expression '^[a-z]([-a-z0-9]{0,61}[a-z0-9])?$' to comply with RFC1035.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_global_vm_extension_policy#name ComputeGlobalVmExtensionPolicy#name}
  */
  readonly name: string;
  /**
  * Used to resolve conflicts when multiple policies are active. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_global_vm_extension_policy#priority ComputeGlobalVmExtensionPolicy#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_global_vm_extension_policy#project ComputeGlobalVmExtensionPolicy#project}
  */
  readonly project?: string;
  /**
  * extension_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_global_vm_extension_policy#extension_policies ComputeGlobalVmExtensionPolicy#extension_policies}
  */
  readonly extensionPolicies: ComputeGlobalVmExtensionPolicyExtensionPolicies[] | cdktn.IResolvable;
  /**
  * instance_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_global_vm_extension_policy#instance_selectors ComputeGlobalVmExtensionPolicy#instance_selectors}
  */
  readonly instanceSelectors?: ComputeGlobalVmExtensionPolicyInstanceSelectors[] | cdktn.IResolvable;
  /**
  * rollout_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_global_vm_extension_policy#rollout_operation ComputeGlobalVmExtensionPolicy#rollout_operation}
  */
  readonly rolloutOperation: ComputeGlobalVmExtensionPolicyRolloutOperation;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_global_vm_extension_policy#timeouts ComputeGlobalVmExtensionPolicy#timeouts}
  */
  readonly timeouts?: ComputeGlobalVmExtensionPolicyTimeouts;
}
export interface ComputeGlobalVmExtensionPolicyExtensionPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_global_vm_extension_policy#extension_name ComputeGlobalVmExtensionPolicy#extension_name}
  */
  readonly extensionName: string;
  /**
  * The version pinning for the extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_global_vm_extension_policy#pinned_version ComputeGlobalVmExtensionPolicy#pinned_version}
  */
  readonly pinnedVersion?: string;
  /**
  * String configuration payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_global_vm_extension_policy#string_config ComputeGlobalVmExtensionPolicy#string_config}
  */
  readonly stringConfig?: string;
}

export function computeGlobalVmExtensionPolicyExtensionPoliciesToTerraform(struct?: ComputeGlobalVmExtensionPolicyExtensionPolicies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    extension_name: cdktn.stringToTerraform(struct!.extensionName),
    pinned_version: cdktn.stringToTerraform(struct!.pinnedVersion),
    string_config: cdktn.stringToTerraform(struct!.stringConfig),
  }
}


export function computeGlobalVmExtensionPolicyExtensionPoliciesToHclTerraform(struct?: ComputeGlobalVmExtensionPolicyExtensionPolicies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    extension_name: {
      value: cdktn.stringToHclTerraform(struct!.extensionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pinned_version: {
      value: cdktn.stringToHclTerraform(struct!.pinnedVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_config: {
      value: cdktn.stringToHclTerraform(struct!.stringConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeGlobalVmExtensionPolicyExtensionPolicies | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extensionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionName = this._extensionName;
    }
    if (this._pinnedVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.pinnedVersion = this._pinnedVersion;
    }
    if (this._stringConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringConfig = this._stringConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeGlobalVmExtensionPolicyExtensionPolicies | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extensionName = undefined;
      this._pinnedVersion = undefined;
      this._stringConfig = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extensionName = value.extensionName;
      this._pinnedVersion = value.pinnedVersion;
      this._stringConfig = value.stringConfig;
    }
  }

  // extension_name - computed: false, optional: false, required: true
  private _extensionName?: string; 
  public get extensionName() {
    return this.getStringAttribute('extension_name');
  }
  public set extensionName(value: string) {
    this._extensionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionNameInput() {
    return this._extensionName;
  }

  // pinned_version - computed: false, optional: true, required: false
  private _pinnedVersion?: string; 
  public get pinnedVersion() {
    return this.getStringAttribute('pinned_version');
  }
  public set pinnedVersion(value: string) {
    this._pinnedVersion = value;
  }
  public resetPinnedVersion() {
    this._pinnedVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinnedVersionInput() {
    return this._pinnedVersion;
  }

  // string_config - computed: false, optional: true, required: false
  private _stringConfig?: string; 
  public get stringConfig() {
    return this.getStringAttribute('string_config');
  }
  public set stringConfig(value: string) {
    this._stringConfig = value;
  }
  public resetStringConfig() {
    this._stringConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringConfigInput() {
    return this._stringConfig;
  }
}

export class ComputeGlobalVmExtensionPolicyExtensionPoliciesList extends cdktn.ComplexList {
  public internalValue? : ComputeGlobalVmExtensionPolicyExtensionPolicies[] | cdktn.IResolvable

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
  public get(index: number): ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference {
    return new ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector {
  /**
  * Labels as key value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_global_vm_extension_policy#inclusion_labels ComputeGlobalVmExtensionPolicy#inclusion_labels}
  */
  readonly inclusionLabels?: { [key: string]: string };
}

export function computeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorToTerraform(struct?: ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference | ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    inclusion_labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.inclusionLabels),
  }
}


export function computeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorToHclTerraform(struct?: ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference | ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    inclusion_labels: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.inclusionLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inclusionLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionLabels = this._inclusionLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inclusionLabels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inclusionLabels = value.inclusionLabels;
    }
  }

  // inclusion_labels - computed: false, optional: true, required: false
  private _inclusionLabels?: { [key: string]: string }; 
  public get inclusionLabels() {
    return this.getStringMapAttribute('inclusion_labels');
  }
  public set inclusionLabels(value: { [key: string]: string }) {
    this._inclusionLabels = value;
  }
  public resetInclusionLabels() {
    this._inclusionLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionLabelsInput() {
    return this._inclusionLabels;
  }
}
export interface ComputeGlobalVmExtensionPolicyInstanceSelectors {
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_global_vm_extension_policy#label_selector ComputeGlobalVmExtensionPolicy#label_selector}
  */
  readonly labelSelector?: ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector;
}

export function computeGlobalVmExtensionPolicyInstanceSelectorsToTerraform(struct?: ComputeGlobalVmExtensionPolicyInstanceSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    label_selector: computeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorToTerraform(struct!.labelSelector),
  }
}


export function computeGlobalVmExtensionPolicyInstanceSelectorsToHclTerraform(struct?: ComputeGlobalVmExtensionPolicyInstanceSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    label_selector: {
      value: computeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeGlobalVmExtensionPolicyInstanceSelectors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeGlobalVmExtensionPolicyInstanceSelectors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }
}

export class ComputeGlobalVmExtensionPolicyInstanceSelectorsList extends cdktn.ComplexList {
  public internalValue? : ComputeGlobalVmExtensionPolicyInstanceSelectors[] | cdktn.IResolvable

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
  public get(index: number): ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference {
    return new ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus {
}

export function computeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusToTerraform(struct?: ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function computeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusToHclTerraform(struct?: ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // location_name - computed: true, optional: false, required: false
  public get locationName() {
    return this.getStringAttribute('location_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList extends cdktn.ComplexList {

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
  public get(index: number): ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference {
    return new ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts {
}

export function computeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsToTerraform(struct?: ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function computeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsToHclTerraform(struct?: ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // location_rollout_status - computed: true, optional: false, required: false
  private _locationRolloutStatus = new ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList(this, "location_rollout_status", true);
  public get locationRolloutStatus() {
    return this._locationRolloutStatus;
  }

  // rollout - computed: true, optional: false, required: false
  public get rollout() {
    return this.getStringAttribute('rollout');
  }

  // rollout_plan - computed: true, optional: false, required: false
  public get rolloutPlan() {
    return this.getStringAttribute('rollout_plan');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList extends cdktn.ComplexList {

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
  public get(index: number): ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference {
    return new ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus {
}

export function computeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusToTerraform(struct?: ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function computeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusToHclTerraform(struct?: ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // location_name - computed: true, optional: false, required: false
  public get locationName() {
    return this.getStringAttribute('location_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList extends cdktn.ComplexList {

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
  public get(index: number): ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference {
    return new ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout {
}

export function computeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutToTerraform(struct?: ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function computeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutToHclTerraform(struct?: ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // location_rollout_status - computed: true, optional: false, required: false
  private _locationRolloutStatus = new ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList(this, "location_rollout_status", true);
  public get locationRolloutStatus() {
    return this._locationRolloutStatus;
  }

  // rollout - computed: true, optional: false, required: false
  public get rollout() {
    return this.getStringAttribute('rollout');
  }

  // rollout_plan - computed: true, optional: false, required: false
  public get rolloutPlan() {
    return this.getStringAttribute('rollout_plan');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList extends cdktn.ComplexList {

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
  public get(index: number): ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference {
    return new ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus {
}

export function computeGlobalVmExtensionPolicyRolloutOperationRolloutStatusToTerraform(struct?: ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function computeGlobalVmExtensionPolicyRolloutOperationRolloutStatusToHclTerraform(struct?: ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_rollouts - computed: true, optional: false, required: false
  private _currentRollouts = new ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList(this, "current_rollouts", false);
  public get currentRollouts() {
    return this._currentRollouts;
  }

  // previous_rollout - computed: true, optional: false, required: false
  private _previousRollout = new ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList(this, "previous_rollout", false);
  public get previousRollout() {
    return this._previousRollout;
  }
}

export class ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList extends cdktn.ComplexList {

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
  public get(index: number): ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference {
    return new ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput {
  /**
  * Specifies the behavior of the rollout if a conflict is detected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_global_vm_extension_policy#conflict_behavior ComputeGlobalVmExtensionPolicy#conflict_behavior}
  */
  readonly conflictBehavior?: string;
  /**
  * The name of the rollout plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_global_vm_extension_policy#name ComputeGlobalVmExtensionPolicy#name}
  */
  readonly name?: string;
  /**
  * Specifies the predefined rollout plan for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_global_vm_extension_policy#predefined_rollout_plan ComputeGlobalVmExtensionPolicy#predefined_rollout_plan}
  */
  readonly predefinedRolloutPlan?: string;
  /**
  * The UUID that identifies a policy rollout retry attempt. It should only be set when retrying an existing rollout. Updating this field along with other policy fields (description, extension_policies, instance_selectors, priority) in the same plan will return an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_global_vm_extension_policy#retry_uuid ComputeGlobalVmExtensionPolicy#retry_uuid}
  */
  readonly retryUuid?: string;
}

export function computeGlobalVmExtensionPolicyRolloutOperationRolloutInputToTerraform(struct?: ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference | ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    conflict_behavior: cdktn.stringToTerraform(struct!.conflictBehavior),
    name: cdktn.stringToTerraform(struct!.name),
    predefined_rollout_plan: cdktn.stringToTerraform(struct!.predefinedRolloutPlan),
    retry_uuid: cdktn.stringToTerraform(struct!.retryUuid),
  }
}


export function computeGlobalVmExtensionPolicyRolloutOperationRolloutInputToHclTerraform(struct?: ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference | ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    conflict_behavior: {
      value: cdktn.stringToHclTerraform(struct!.conflictBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    predefined_rollout_plan: {
      value: cdktn.stringToHclTerraform(struct!.predefinedRolloutPlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_uuid: {
      value: cdktn.stringToHclTerraform(struct!.retryUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conflictBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.conflictBehavior = this._conflictBehavior;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._predefinedRolloutPlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedRolloutPlan = this._predefinedRolloutPlan;
    }
    if (this._retryUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryUuid = this._retryUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conflictBehavior = undefined;
      this._name = undefined;
      this._predefinedRolloutPlan = undefined;
      this._retryUuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conflictBehavior = value.conflictBehavior;
      this._name = value.name;
      this._predefinedRolloutPlan = value.predefinedRolloutPlan;
      this._retryUuid = value.retryUuid;
    }
  }

  // conflict_behavior - computed: false, optional: true, required: false
  private _conflictBehavior?: string; 
  public get conflictBehavior() {
    return this.getStringAttribute('conflict_behavior');
  }
  public set conflictBehavior(value: string) {
    this._conflictBehavior = value;
  }
  public resetConflictBehavior() {
    this._conflictBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictBehaviorInput() {
    return this._conflictBehavior;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // predefined_rollout_plan - computed: false, optional: true, required: false
  private _predefinedRolloutPlan?: string; 
  public get predefinedRolloutPlan() {
    return this.getStringAttribute('predefined_rollout_plan');
  }
  public set predefinedRolloutPlan(value: string) {
    this._predefinedRolloutPlan = value;
  }
  public resetPredefinedRolloutPlan() {
    this._predefinedRolloutPlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedRolloutPlanInput() {
    return this._predefinedRolloutPlan;
  }

  // retry_uuid - computed: false, optional: true, required: false
  private _retryUuid?: string; 
  public get retryUuid() {
    return this.getStringAttribute('retry_uuid');
  }
  public set retryUuid(value: string) {
    this._retryUuid = value;
  }
  public resetRetryUuid() {
    this._retryUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryUuidInput() {
    return this._retryUuid;
  }
}
export interface ComputeGlobalVmExtensionPolicyRolloutOperation {
  /**
  * rollout_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_global_vm_extension_policy#rollout_input ComputeGlobalVmExtensionPolicy#rollout_input}
  */
  readonly rolloutInput: ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput;
}

export function computeGlobalVmExtensionPolicyRolloutOperationToTerraform(struct?: ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference | ComputeGlobalVmExtensionPolicyRolloutOperation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rollout_input: computeGlobalVmExtensionPolicyRolloutOperationRolloutInputToTerraform(struct!.rolloutInput),
  }
}


export function computeGlobalVmExtensionPolicyRolloutOperationToHclTerraform(struct?: ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference | ComputeGlobalVmExtensionPolicyRolloutOperation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rollout_input: {
      value: computeGlobalVmExtensionPolicyRolloutOperationRolloutInputToHclTerraform(struct!.rolloutInput),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeGlobalVmExtensionPolicyRolloutOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rolloutInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolloutInput = this._rolloutInput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeGlobalVmExtensionPolicyRolloutOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rolloutInput.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rolloutInput.internalValue = value.rolloutInput;
    }
  }

  // rollout_status - computed: true, optional: false, required: false
  private _rolloutStatus = new ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList(this, "rollout_status", false);
  public get rolloutStatus() {
    return this._rolloutStatus;
  }

  // rollout_input - computed: false, optional: false, required: true
  private _rolloutInput = new ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference(this, "rollout_input");
  public get rolloutInput() {
    return this._rolloutInput;
  }
  public putRolloutInput(value: ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput) {
    this._rolloutInput.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutInputInput() {
    return this._rolloutInput.internalValue;
  }
}
export interface ComputeGlobalVmExtensionPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_global_vm_extension_policy#create ComputeGlobalVmExtensionPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_global_vm_extension_policy#delete ComputeGlobalVmExtensionPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_global_vm_extension_policy#update ComputeGlobalVmExtensionPolicy#update}
  */
  readonly update?: string;
}

export function computeGlobalVmExtensionPolicyTimeoutsToTerraform(struct?: ComputeGlobalVmExtensionPolicyTimeouts | cdktn.IResolvable): any {
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


export function computeGlobalVmExtensionPolicyTimeoutsToHclTerraform(struct?: ComputeGlobalVmExtensionPolicyTimeouts | cdktn.IResolvable): any {
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

export class ComputeGlobalVmExtensionPolicyTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeGlobalVmExtensionPolicyTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ComputeGlobalVmExtensionPolicyTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_global_vm_extension_policy google_compute_global_vm_extension_policy}
*/
export class ComputeGlobalVmExtensionPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_global_vm_extension_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ComputeGlobalVmExtensionPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeGlobalVmExtensionPolicy to import
  * @param importFromId The id of the existing ComputeGlobalVmExtensionPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_global_vm_extension_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeGlobalVmExtensionPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_global_vm_extension_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_global_vm_extension_policy google_compute_global_vm_extension_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeGlobalVmExtensionPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeGlobalVmExtensionPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_global_vm_extension_policy',
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
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._name = config.name;
    this._priority = config.priority;
    this._project = config.project;
    this._extensionPolicies.internalValue = config.extensionPolicies;
    this._instanceSelectors.internalValue = config.instanceSelectors;
    this._rolloutOperation.internalValue = config.rolloutOperation;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // scoped_resource_status - computed: true, optional: false, required: false
  public get scopedResourceStatus() {
    return this.getStringAttribute('scoped_resource_status');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // update_timestamp - computed: true, optional: false, required: false
  public get updateTimestamp() {
    return this.getStringAttribute('update_timestamp');
  }

  // extension_policies - computed: false, optional: false, required: true
  private _extensionPolicies = new ComputeGlobalVmExtensionPolicyExtensionPoliciesList(this, "extension_policies", true);
  public get extensionPolicies() {
    return this._extensionPolicies;
  }
  public putExtensionPolicies(value: ComputeGlobalVmExtensionPolicyExtensionPolicies[] | cdktn.IResolvable) {
    this._extensionPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionPoliciesInput() {
    return this._extensionPolicies.internalValue;
  }

  // instance_selectors - computed: false, optional: true, required: false
  private _instanceSelectors = new ComputeGlobalVmExtensionPolicyInstanceSelectorsList(this, "instance_selectors", false);
  public get instanceSelectors() {
    return this._instanceSelectors;
  }
  public putInstanceSelectors(value: ComputeGlobalVmExtensionPolicyInstanceSelectors[] | cdktn.IResolvable) {
    this._instanceSelectors.internalValue = value;
  }
  public resetInstanceSelectors() {
    this._instanceSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSelectorsInput() {
    return this._instanceSelectors.internalValue;
  }

  // rollout_operation - computed: false, optional: false, required: true
  private _rolloutOperation = new ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference(this, "rollout_operation");
  public get rolloutOperation() {
    return this._rolloutOperation;
  }
  public putRolloutOperation(value: ComputeGlobalVmExtensionPolicyRolloutOperation) {
    this._rolloutOperation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutOperationInput() {
    return this._rolloutOperation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeGlobalVmExtensionPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeGlobalVmExtensionPolicyTimeouts) {
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
      name: cdktn.stringToTerraform(this._name),
      priority: cdktn.numberToTerraform(this._priority),
      project: cdktn.stringToTerraform(this._project),
      extension_policies: cdktn.listMapper(computeGlobalVmExtensionPolicyExtensionPoliciesToTerraform, true)(this._extensionPolicies.internalValue),
      instance_selectors: cdktn.listMapper(computeGlobalVmExtensionPolicyInstanceSelectorsToTerraform, true)(this._instanceSelectors.internalValue),
      rollout_operation: computeGlobalVmExtensionPolicyRolloutOperationToTerraform(this._rolloutOperation.internalValue),
      timeouts: computeGlobalVmExtensionPolicyTimeoutsToTerraform(this._timeouts.internalValue),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktn.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extension_policies: {
        value: cdktn.listMapperHcl(computeGlobalVmExtensionPolicyExtensionPoliciesToHclTerraform, true)(this._extensionPolicies.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ComputeGlobalVmExtensionPolicyExtensionPoliciesList",
      },
      instance_selectors: {
        value: cdktn.listMapperHcl(computeGlobalVmExtensionPolicyInstanceSelectorsToHclTerraform, true)(this._instanceSelectors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeGlobalVmExtensionPolicyInstanceSelectorsList",
      },
      rollout_operation: {
        value: computeGlobalVmExtensionPolicyRolloutOperationToHclTerraform(this._rolloutOperation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeGlobalVmExtensionPolicyRolloutOperationList",
      },
      timeouts: {
        value: computeGlobalVmExtensionPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeGlobalVmExtensionPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
