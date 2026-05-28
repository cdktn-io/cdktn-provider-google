/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/gkeonprem_bare_metal_node_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GkeonpremBareMetalNodePoolConfig extends cdktn.TerraformMetaArguments {
  /**
  * Annotations on the Bare Metal Node Pool.
  * This field has the same restrictions as Kubernetes annotations.
  * The total size of all keys and values combined is limited to 256k.
  * Key can have 2 segments: prefix (optional) and name (required),
  * separated by a slash (/).
  * Prefix must be a DNS subdomain.
  * Name must be 63 characters or less, begin and end with alphanumerics,
  * with dashes (-), underscores (_), dots (.), and alphanumerics between.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/gkeonprem_bare_metal_node_pool#annotations GkeonpremBareMetalNodePool#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The cluster this node pool belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/gkeonprem_bare_metal_node_pool#bare_metal_cluster GkeonpremBareMetalNodePool#bare_metal_cluster}
  */
  readonly bareMetalCluster: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/gkeonprem_bare_metal_node_pool#deletion_policy GkeonpremBareMetalNodePool#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The display name for the Bare Metal Node Pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/gkeonprem_bare_metal_node_pool#display_name GkeonpremBareMetalNodePool#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/gkeonprem_bare_metal_node_pool#id GkeonpremBareMetalNodePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/gkeonprem_bare_metal_node_pool#location GkeonpremBareMetalNodePool#location}
  */
  readonly location: string;
  /**
  * The bare metal node pool name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/gkeonprem_bare_metal_node_pool#name GkeonpremBareMetalNodePool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/gkeonprem_bare_metal_node_pool#project GkeonpremBareMetalNodePool#project}
  */
  readonly project?: string;
  /**
  * node_pool_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/gkeonprem_bare_metal_node_pool#node_pool_config GkeonpremBareMetalNodePool#node_pool_config}
  */
  readonly nodePoolConfig: GkeonpremBareMetalNodePoolNodePoolConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/gkeonprem_bare_metal_node_pool#timeouts GkeonpremBareMetalNodePool#timeouts}
  */
  readonly timeouts?: GkeonpremBareMetalNodePoolTimeouts;
}
export interface GkeonpremBareMetalNodePoolStatusConditions {
}

export function gkeonpremBareMetalNodePoolStatusConditionsToTerraform(struct?: GkeonpremBareMetalNodePoolStatusConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gkeonpremBareMetalNodePoolStatusConditionsToHclTerraform(struct?: GkeonpremBareMetalNodePoolStatusConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GkeonpremBareMetalNodePoolStatusConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalNodePoolStatusConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalNodePoolStatusConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_transition_time - computed: true, optional: false, required: false
  public get lastTransitionTime() {
    return this.getStringAttribute('last_transition_time');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class GkeonpremBareMetalNodePoolStatusConditionsList extends cdktn.ComplexList {

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
  public get(index: number): GkeonpremBareMetalNodePoolStatusConditionsOutputReference {
    return new GkeonpremBareMetalNodePoolStatusConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalNodePoolStatus {
}

export function gkeonpremBareMetalNodePoolStatusToTerraform(struct?: GkeonpremBareMetalNodePoolStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gkeonpremBareMetalNodePoolStatusToHclTerraform(struct?: GkeonpremBareMetalNodePoolStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GkeonpremBareMetalNodePoolStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalNodePoolStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalNodePoolStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new GkeonpremBareMetalNodePoolStatusConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }
}

export class GkeonpremBareMetalNodePoolStatusList extends cdktn.ComplexList {

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
  public get(index: number): GkeonpremBareMetalNodePoolStatusOutputReference {
    return new GkeonpremBareMetalNodePoolStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs {
  /**
  * The map of Kubernetes labels (key/value pairs) to be applied to
  * each node. These will added in addition to any default label(s)
  * that Kubernetes may apply to the node. In case of conflict in
  * label keys, the applied set may differ depending on the Kubernetes
  * version -- it's best to assume the behavior is undefined and
  * conflicts should be avoided. For more information, including usage
  * and the valid values, see:
  *   - http://kubernetes.io/v1.1/docs/user-guide/labels.html
  * An object containing a list of "key": value pairs.
  * For example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/gkeonprem_bare_metal_node_pool#labels GkeonpremBareMetalNodePool#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The default IPv4 address for SSH access and Kubernetes node.
  * Example: 192.168.0.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/gkeonprem_bare_metal_node_pool#node_ip GkeonpremBareMetalNodePool#node_ip}
  */
  readonly nodeIp?: string;
}

export function gkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsToTerraform(struct?: GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.labels),
    node_ip: cdktn.stringToTerraform(struct!.nodeIp),
  }
}


export function gkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsToHclTerraform(struct?: GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_ip: {
      value: cdktn.stringToHclTerraform(struct!.nodeIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._nodeIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeIp = this._nodeIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._nodeIp = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._nodeIp = value.nodeIp;
    }
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

  // node_ip - computed: false, optional: true, required: false
  private _nodeIp?: string; 
  public get nodeIp() {
    return this.getStringAttribute('node_ip');
  }
  public set nodeIp(value: string) {
    this._nodeIp = value;
  }
  public resetNodeIp() {
    this._nodeIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIpInput() {
    return this._nodeIp;
  }
}

export class GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList extends cdktn.ComplexList {
  public internalValue? : GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs[] | cdktn.IResolvable

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
  public get(index: number): GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference {
    return new GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalNodePoolNodePoolConfigTaints {
  /**
  * Specifies the nodes operating system (default: LINUX). Possible values: ["EFFECT_UNSPECIFIED", "PREFER_NO_SCHEDULE", "NO_EXECUTE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/gkeonprem_bare_metal_node_pool#effect GkeonpremBareMetalNodePool#effect}
  */
  readonly effect?: string;
  /**
  * Key associated with the effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/gkeonprem_bare_metal_node_pool#key GkeonpremBareMetalNodePool#key}
  */
  readonly key?: string;
  /**
  * Value associated with the effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/gkeonprem_bare_metal_node_pool#value GkeonpremBareMetalNodePool#value}
  */
  readonly value?: string;
}

export function gkeonpremBareMetalNodePoolNodePoolConfigTaintsToTerraform(struct?: GkeonpremBareMetalNodePoolNodePoolConfigTaints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktn.stringToTerraform(struct!.effect),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function gkeonpremBareMetalNodePoolNodePoolConfigTaintsToHclTerraform(struct?: GkeonpremBareMetalNodePoolNodePoolConfigTaints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktn.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalNodePoolNodePoolConfigTaints | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalNodePoolNodePoolConfigTaints | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GkeonpremBareMetalNodePoolNodePoolConfigTaintsList extends cdktn.ComplexList {
  public internalValue? : GkeonpremBareMetalNodePoolNodePoolConfigTaints[] | cdktn.IResolvable

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
  public get(index: number): GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference {
    return new GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalNodePoolNodePoolConfig {
  /**
  * The map of Kubernetes labels (key/value pairs) to be applied to
  * each node. These will added in addition to any default label(s)
  * that Kubernetes may apply to the node. In case of conflict in
  * label keys, the applied set may differ depending on the Kubernetes
  * version -- it's best to assume the behavior is undefined and
  * conflicts should be avoided. For more information, including usage
  * and the valid values, see:
  *   - http://kubernetes.io/v1.1/docs/user-guide/labels.html
  * An object containing a list of "key": value pairs.
  * For example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/gkeonprem_bare_metal_node_pool#labels GkeonpremBareMetalNodePool#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Specifies the nodes operating system (default: LINUX).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/gkeonprem_bare_metal_node_pool#operating_system GkeonpremBareMetalNodePool#operating_system}
  */
  readonly operatingSystem?: string;
  /**
  * node_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/gkeonprem_bare_metal_node_pool#node_configs GkeonpremBareMetalNodePool#node_configs}
  */
  readonly nodeConfigs: GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs[] | cdktn.IResolvable;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/gkeonprem_bare_metal_node_pool#taints GkeonpremBareMetalNodePool#taints}
  */
  readonly taints?: GkeonpremBareMetalNodePoolNodePoolConfigTaints[] | cdktn.IResolvable;
}

export function gkeonpremBareMetalNodePoolNodePoolConfigToTerraform(struct?: GkeonpremBareMetalNodePoolNodePoolConfigOutputReference | GkeonpremBareMetalNodePoolNodePoolConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.labels),
    operating_system: cdktn.stringToTerraform(struct!.operatingSystem),
    node_configs: cdktn.listMapper(gkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsToTerraform, true)(struct!.nodeConfigs),
    taints: cdktn.listMapper(gkeonpremBareMetalNodePoolNodePoolConfigTaintsToTerraform, true)(struct!.taints),
  }
}


export function gkeonpremBareMetalNodePoolNodePoolConfigToHclTerraform(struct?: GkeonpremBareMetalNodePoolNodePoolConfigOutputReference | GkeonpremBareMetalNodePoolNodePoolConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    operating_system: {
      value: cdktn.stringToHclTerraform(struct!.operatingSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_configs: {
      value: cdktn.listMapperHcl(gkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsToHclTerraform, true)(struct!.nodeConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList",
    },
    taints: {
      value: cdktn.listMapperHcl(gkeonpremBareMetalNodePoolNodePoolConfigTaintsToHclTerraform, true)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalNodePoolNodePoolConfigTaintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalNodePoolNodePoolConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalNodePoolNodePoolConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._operatingSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystem = this._operatingSystem;
    }
    if (this._nodeConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeConfigs = this._nodeConfigs?.internalValue;
    }
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalNodePoolNodePoolConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._operatingSystem = undefined;
      this._nodeConfigs.internalValue = undefined;
      this._taints.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._operatingSystem = value.operatingSystem;
      this._nodeConfigs.internalValue = value.nodeConfigs;
      this._taints.internalValue = value.taints;
    }
  }

  // labels - computed: true, optional: true, required: false
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

  // operating_system - computed: true, optional: true, required: false
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  public resetOperatingSystem() {
    this._operatingSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }

  // node_configs - computed: false, optional: false, required: true
  private _nodeConfigs = new GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList(this, "node_configs", false);
  public get nodeConfigs() {
    return this._nodeConfigs;
  }
  public putNodeConfigs(value: GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs[] | cdktn.IResolvable) {
    this._nodeConfigs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigsInput() {
    return this._nodeConfigs.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new GkeonpremBareMetalNodePoolNodePoolConfigTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: GkeonpremBareMetalNodePoolNodePoolConfigTaints[] | cdktn.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }
}
export interface GkeonpremBareMetalNodePoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/gkeonprem_bare_metal_node_pool#create GkeonpremBareMetalNodePool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/gkeonprem_bare_metal_node_pool#delete GkeonpremBareMetalNodePool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/gkeonprem_bare_metal_node_pool#update GkeonpremBareMetalNodePool#update}
  */
  readonly update?: string;
}

export function gkeonpremBareMetalNodePoolTimeoutsToTerraform(struct?: GkeonpremBareMetalNodePoolTimeouts | cdktn.IResolvable): any {
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


export function gkeonpremBareMetalNodePoolTimeoutsToHclTerraform(struct?: GkeonpremBareMetalNodePoolTimeouts | cdktn.IResolvable): any {
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

export class GkeonpremBareMetalNodePoolTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GkeonpremBareMetalNodePoolTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GkeonpremBareMetalNodePoolTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/gkeonprem_bare_metal_node_pool google_gkeonprem_bare_metal_node_pool}
*/
export class GkeonpremBareMetalNodePool extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_gkeonprem_bare_metal_node_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GkeonpremBareMetalNodePool resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GkeonpremBareMetalNodePool to import
  * @param importFromId The id of the existing GkeonpremBareMetalNodePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/gkeonprem_bare_metal_node_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GkeonpremBareMetalNodePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_gkeonprem_bare_metal_node_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/gkeonprem_bare_metal_node_pool google_gkeonprem_bare_metal_node_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GkeonpremBareMetalNodePoolConfig
  */
  public constructor(scope: Construct, id: string, config: GkeonpremBareMetalNodePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'google_gkeonprem_bare_metal_node_pool',
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
    this._annotations = config.annotations;
    this._bareMetalCluster = config.bareMetalCluster;
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._nodePoolConfig.internalValue = config.nodePoolConfig;
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

  // bare_metal_cluster - computed: false, optional: false, required: true
  private _bareMetalCluster?: string; 
  public get bareMetalCluster() {
    return this.getStringAttribute('bare_metal_cluster');
  }
  public set bareMetalCluster(value: string) {
    this._bareMetalCluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bareMetalClusterInput() {
    return this._bareMetalCluster;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // delete_time - computed: true, optional: false, required: false
  public get deleteTime() {
    return this.getStringAttribute('delete_time');
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

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktn.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
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

  // reconciling - computed: true, optional: false, required: false
  public get reconciling() {
    return this.getBooleanAttribute('reconciling');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  private _status = new GkeonpremBareMetalNodePoolStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // node_pool_config - computed: false, optional: false, required: true
  private _nodePoolConfig = new GkeonpremBareMetalNodePoolNodePoolConfigOutputReference(this, "node_pool_config");
  public get nodePoolConfig() {
    return this._nodePoolConfig;
  }
  public putNodePoolConfig(value: GkeonpremBareMetalNodePoolNodePoolConfig) {
    this._nodePoolConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolConfigInput() {
    return this._nodePoolConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GkeonpremBareMetalNodePoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GkeonpremBareMetalNodePoolTimeouts) {
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
      bare_metal_cluster: cdktn.stringToTerraform(this._bareMetalCluster),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      node_pool_config: gkeonpremBareMetalNodePoolNodePoolConfigToTerraform(this._nodePoolConfig.internalValue),
      timeouts: gkeonpremBareMetalNodePoolTimeoutsToTerraform(this._timeouts.internalValue),
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
      bare_metal_cluster: {
        value: cdktn.stringToHclTerraform(this._bareMetalCluster),
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
      node_pool_config: {
        value: gkeonpremBareMetalNodePoolNodePoolConfigToHclTerraform(this._nodePoolConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremBareMetalNodePoolNodePoolConfigList",
      },
      timeouts: {
        value: gkeonpremBareMetalNodePoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GkeonpremBareMetalNodePoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
