/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ComputePerInstanceConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#deletion_policy ComputePerInstanceConfig#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#id ComputePerInstanceConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The instance group manager this instance config is part of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#instance_group_manager ComputePerInstanceConfig#instance_group_manager}
  */
  readonly instanceGroupManager: string;
  /**
  * The minimal action to perform on the instance during an update.
  * Default is 'NONE'. Possible values are:
  * * REPLACE
  * * RESTART
  * * REFRESH
  * * NONE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#minimal_action ComputePerInstanceConfig#minimal_action}
  */
  readonly minimalAction?: string;
  /**
  * The most disruptive action to perform on the instance during an update.
  * Default is 'REPLACE'. Possible values are:
  * * REPLACE
  * * RESTART
  * * REFRESH
  * * NONE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#most_disruptive_allowed_action ComputePerInstanceConfig#most_disruptive_allowed_action}
  */
  readonly mostDisruptiveAllowedAction?: string;
  /**
  * The name for this per-instance config and its corresponding instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#name ComputePerInstanceConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#project ComputePerInstanceConfig#project}
  */
  readonly project?: string;
  /**
  * When true, deleting this config will immediately remove the underlying instance.
  * When false, deleting this config will use the behavior as determined by remove_instance_on_destroy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#remove_instance_on_destroy ComputePerInstanceConfig#remove_instance_on_destroy}
  */
  readonly removeInstanceOnDestroy?: boolean | cdktn.IResolvable;
  /**
  * When true, deleting this config will immediately remove any specified state from the underlying instance.
  * When false, deleting this config will *not* immediately remove any state from the underlying instance.
  * State will be removed on the next instance recreation or update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#remove_instance_state_on_destroy ComputePerInstanceConfig#remove_instance_state_on_destroy}
  */
  readonly removeInstanceStateOnDestroy?: boolean | cdktn.IResolvable;
  /**
  * Zone where the containing instance group manager is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#zone ComputePerInstanceConfig#zone}
  */
  readonly zone?: string;
  /**
  * preserved_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#preserved_state ComputePerInstanceConfig#preserved_state}
  */
  readonly preservedState?: ComputePerInstanceConfigPreservedState;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#timeouts ComputePerInstanceConfig#timeouts}
  */
  readonly timeouts?: ComputePerInstanceConfigTimeouts;
}
export interface ComputePerInstanceConfigPreservedStateDisk {
  /**
  * A value that prescribes what should happen to the stateful disk when the VM instance is deleted.
  * The available options are 'NEVER' and 'ON_PERMANENT_INSTANCE_DELETION'.
  * 'NEVER' - detach the disk when the VM is deleted, but do not delete the disk.
  * 'ON_PERMANENT_INSTANCE_DELETION' will delete the stateful disk when the VM is permanently
  * deleted from the instance group. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#delete_rule ComputePerInstanceConfig#delete_rule}
  */
  readonly deleteRule?: string;
  /**
  * A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#device_name ComputePerInstanceConfig#device_name}
  */
  readonly deviceName: string;
  /**
  * The mode of the disk. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#mode ComputePerInstanceConfig#mode}
  */
  readonly mode?: string;
  /**
  * The URI of an existing persistent disk to attach under the specified device-name in the format
  * 'projects/project-id/zones/zone/disks/disk-name'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#source ComputePerInstanceConfig#source}
  */
  readonly source: string;
}

export function computePerInstanceConfigPreservedStateDiskToTerraform(struct?: ComputePerInstanceConfigPreservedStateDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delete_rule: cdktn.stringToTerraform(struct!.deleteRule),
    device_name: cdktn.stringToTerraform(struct!.deviceName),
    mode: cdktn.stringToTerraform(struct!.mode),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function computePerInstanceConfigPreservedStateDiskToHclTerraform(struct?: ComputePerInstanceConfigPreservedStateDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delete_rule: {
      value: cdktn.stringToHclTerraform(struct!.deleteRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_name: {
      value: cdktn.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputePerInstanceConfigPreservedStateDiskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputePerInstanceConfigPreservedStateDisk | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteRule = this._deleteRule;
    }
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputePerInstanceConfigPreservedStateDisk | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteRule = undefined;
      this._deviceName = undefined;
      this._mode = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteRule = value.deleteRule;
      this._deviceName = value.deviceName;
      this._mode = value.mode;
      this._source = value.source;
    }
  }

  // delete_rule - computed: false, optional: true, required: false
  private _deleteRule?: string; 
  public get deleteRule() {
    return this.getStringAttribute('delete_rule');
  }
  public set deleteRule(value: string) {
    this._deleteRule = value;
  }
  public resetDeleteRule() {
    this._deleteRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRuleInput() {
    return this._deleteRule;
  }

  // device_name - computed: false, optional: false, required: true
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class ComputePerInstanceConfigPreservedStateDiskList extends cdktn.ComplexList {
  public internalValue? : ComputePerInstanceConfigPreservedStateDisk[] | cdktn.IResolvable

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
  public get(index: number): ComputePerInstanceConfigPreservedStateDiskOutputReference {
    return new ComputePerInstanceConfigPreservedStateDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputePerInstanceConfigPreservedStateExternalIpIpAddress {
  /**
  * The URL of the reservation for this IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#address ComputePerInstanceConfig#address}
  */
  readonly address?: string;
}

export function computePerInstanceConfigPreservedStateExternalIpIpAddressToTerraform(struct?: ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference | ComputePerInstanceConfigPreservedStateExternalIpIpAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address: cdktn.stringToTerraform(struct!.address),
  }
}


export function computePerInstanceConfigPreservedStateExternalIpIpAddressToHclTerraform(struct?: ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference | ComputePerInstanceConfigPreservedStateExternalIpIpAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address: {
      value: cdktn.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputePerInstanceConfigPreservedStateExternalIpIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputePerInstanceConfigPreservedStateExternalIpIpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }
}
export interface ComputePerInstanceConfigPreservedStateExternalIp {
  /**
  * These stateful IPs will never be released during autohealing, update or VM instance recreate operations. This flag is used to configure if the IP reservation should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#auto_delete ComputePerInstanceConfig#auto_delete}
  */
  readonly autoDelete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#interface_name ComputePerInstanceConfig#interface_name}
  */
  readonly interfaceName: string;
  /**
  * ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#ip_address ComputePerInstanceConfig#ip_address}
  */
  readonly ipAddress?: ComputePerInstanceConfigPreservedStateExternalIpIpAddress;
}

export function computePerInstanceConfigPreservedStateExternalIpToTerraform(struct?: ComputePerInstanceConfigPreservedStateExternalIp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_delete: cdktn.stringToTerraform(struct!.autoDelete),
    interface_name: cdktn.stringToTerraform(struct!.interfaceName),
    ip_address: computePerInstanceConfigPreservedStateExternalIpIpAddressToTerraform(struct!.ipAddress),
  }
}


export function computePerInstanceConfigPreservedStateExternalIpToHclTerraform(struct?: ComputePerInstanceConfigPreservedStateExternalIp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_delete: {
      value: cdktn.stringToHclTerraform(struct!.autoDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_name: {
      value: cdktn.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: computePerInstanceConfigPreservedStateExternalIpIpAddressToHclTerraform(struct!.ipAddress),
      isBlock: true,
      type: "list",
      storageClassType: "ComputePerInstanceConfigPreservedStateExternalIpIpAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputePerInstanceConfigPreservedStateExternalIpOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputePerInstanceConfigPreservedStateExternalIp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDelete = this._autoDelete;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._ipAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputePerInstanceConfigPreservedStateExternalIp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoDelete = undefined;
      this._interfaceName = undefined;
      this._ipAddress.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoDelete = value.autoDelete;
      this._interfaceName = value.interfaceName;
      this._ipAddress.internalValue = value.ipAddress;
    }
  }

  // auto_delete - computed: false, optional: true, required: false
  private _autoDelete?: string; 
  public get autoDelete() {
    return this.getStringAttribute('auto_delete');
  }
  public set autoDelete(value: string) {
    this._autoDelete = value;
  }
  public resetAutoDelete() {
    this._autoDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteInput() {
    return this._autoDelete;
  }

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress = new ComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference(this, "ip_address");
  public get ipAddress() {
    return this._ipAddress;
  }
  public putIpAddress(value: ComputePerInstanceConfigPreservedStateExternalIpIpAddress) {
    this._ipAddress.internalValue = value;
  }
  public resetIpAddress() {
    this._ipAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress.internalValue;
  }
}

export class ComputePerInstanceConfigPreservedStateExternalIpList extends cdktn.ComplexList {
  public internalValue? : ComputePerInstanceConfigPreservedStateExternalIp[] | cdktn.IResolvable

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
  public get(index: number): ComputePerInstanceConfigPreservedStateExternalIpOutputReference {
    return new ComputePerInstanceConfigPreservedStateExternalIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputePerInstanceConfigPreservedStateInternalIpIpAddress {
  /**
  * The URL of the reservation for this IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#address ComputePerInstanceConfig#address}
  */
  readonly address?: string;
}

export function computePerInstanceConfigPreservedStateInternalIpIpAddressToTerraform(struct?: ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference | ComputePerInstanceConfigPreservedStateInternalIpIpAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address: cdktn.stringToTerraform(struct!.address),
  }
}


export function computePerInstanceConfigPreservedStateInternalIpIpAddressToHclTerraform(struct?: ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference | ComputePerInstanceConfigPreservedStateInternalIpIpAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address: {
      value: cdktn.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputePerInstanceConfigPreservedStateInternalIpIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputePerInstanceConfigPreservedStateInternalIpIpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }
}
export interface ComputePerInstanceConfigPreservedStateInternalIp {
  /**
  * These stateful IPs will never be released during autohealing, update or VM instance recreate operations. This flag is used to configure if the IP reservation should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#auto_delete ComputePerInstanceConfig#auto_delete}
  */
  readonly autoDelete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#interface_name ComputePerInstanceConfig#interface_name}
  */
  readonly interfaceName: string;
  /**
  * ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#ip_address ComputePerInstanceConfig#ip_address}
  */
  readonly ipAddress?: ComputePerInstanceConfigPreservedStateInternalIpIpAddress;
}

export function computePerInstanceConfigPreservedStateInternalIpToTerraform(struct?: ComputePerInstanceConfigPreservedStateInternalIp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_delete: cdktn.stringToTerraform(struct!.autoDelete),
    interface_name: cdktn.stringToTerraform(struct!.interfaceName),
    ip_address: computePerInstanceConfigPreservedStateInternalIpIpAddressToTerraform(struct!.ipAddress),
  }
}


export function computePerInstanceConfigPreservedStateInternalIpToHclTerraform(struct?: ComputePerInstanceConfigPreservedStateInternalIp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_delete: {
      value: cdktn.stringToHclTerraform(struct!.autoDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_name: {
      value: cdktn.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: computePerInstanceConfigPreservedStateInternalIpIpAddressToHclTerraform(struct!.ipAddress),
      isBlock: true,
      type: "list",
      storageClassType: "ComputePerInstanceConfigPreservedStateInternalIpIpAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputePerInstanceConfigPreservedStateInternalIpOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputePerInstanceConfigPreservedStateInternalIp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDelete = this._autoDelete;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._ipAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputePerInstanceConfigPreservedStateInternalIp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoDelete = undefined;
      this._interfaceName = undefined;
      this._ipAddress.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoDelete = value.autoDelete;
      this._interfaceName = value.interfaceName;
      this._ipAddress.internalValue = value.ipAddress;
    }
  }

  // auto_delete - computed: false, optional: true, required: false
  private _autoDelete?: string; 
  public get autoDelete() {
    return this.getStringAttribute('auto_delete');
  }
  public set autoDelete(value: string) {
    this._autoDelete = value;
  }
  public resetAutoDelete() {
    this._autoDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteInput() {
    return this._autoDelete;
  }

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress = new ComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference(this, "ip_address");
  public get ipAddress() {
    return this._ipAddress;
  }
  public putIpAddress(value: ComputePerInstanceConfigPreservedStateInternalIpIpAddress) {
    this._ipAddress.internalValue = value;
  }
  public resetIpAddress() {
    this._ipAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress.internalValue;
  }
}

export class ComputePerInstanceConfigPreservedStateInternalIpList extends cdktn.ComplexList {
  public internalValue? : ComputePerInstanceConfigPreservedStateInternalIp[] | cdktn.IResolvable

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
  public get(index: number): ComputePerInstanceConfigPreservedStateInternalIpOutputReference {
    return new ComputePerInstanceConfigPreservedStateInternalIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputePerInstanceConfigPreservedState {
  /**
  * Preserved metadata defined for this instance. This is a list of key->value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#metadata ComputePerInstanceConfig#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#disk ComputePerInstanceConfig#disk}
  */
  readonly disk?: ComputePerInstanceConfigPreservedStateDisk[] | cdktn.IResolvable;
  /**
  * external_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#external_ip ComputePerInstanceConfig#external_ip}
  */
  readonly externalIp?: ComputePerInstanceConfigPreservedStateExternalIp[] | cdktn.IResolvable;
  /**
  * internal_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#internal_ip ComputePerInstanceConfig#internal_ip}
  */
  readonly internalIp?: ComputePerInstanceConfigPreservedStateInternalIp[] | cdktn.IResolvable;
}

export function computePerInstanceConfigPreservedStateToTerraform(struct?: ComputePerInstanceConfigPreservedStateOutputReference | ComputePerInstanceConfigPreservedState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metadata: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.metadata),
    disk: cdktn.listMapper(computePerInstanceConfigPreservedStateDiskToTerraform, true)(struct!.disk),
    external_ip: cdktn.listMapper(computePerInstanceConfigPreservedStateExternalIpToTerraform, true)(struct!.externalIp),
    internal_ip: cdktn.listMapper(computePerInstanceConfigPreservedStateInternalIpToTerraform, true)(struct!.internalIp),
  }
}


export function computePerInstanceConfigPreservedStateToHclTerraform(struct?: ComputePerInstanceConfigPreservedStateOutputReference | ComputePerInstanceConfigPreservedState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metadata: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    disk: {
      value: cdktn.listMapperHcl(computePerInstanceConfigPreservedStateDiskToHclTerraform, true)(struct!.disk),
      isBlock: true,
      type: "set",
      storageClassType: "ComputePerInstanceConfigPreservedStateDiskList",
    },
    external_ip: {
      value: cdktn.listMapperHcl(computePerInstanceConfigPreservedStateExternalIpToHclTerraform, true)(struct!.externalIp),
      isBlock: true,
      type: "set",
      storageClassType: "ComputePerInstanceConfigPreservedStateExternalIpList",
    },
    internal_ip: {
      value: cdktn.listMapperHcl(computePerInstanceConfigPreservedStateInternalIpToHclTerraform, true)(struct!.internalIp),
      isBlock: true,
      type: "set",
      storageClassType: "ComputePerInstanceConfigPreservedStateInternalIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputePerInstanceConfigPreservedStateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputePerInstanceConfigPreservedState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._disk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk?.internalValue;
    }
    if (this._externalIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIp = this._externalIp?.internalValue;
    }
    if (this._internalIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalIp = this._internalIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputePerInstanceConfigPreservedState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadata = undefined;
      this._disk.internalValue = undefined;
      this._externalIp.internalValue = undefined;
      this._internalIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadata = value.metadata;
      this._disk.internalValue = value.disk;
      this._externalIp.internalValue = value.externalIp;
      this._internalIp.internalValue = value.internalIp;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new ComputePerInstanceConfigPreservedStateDiskList(this, "disk", true);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ComputePerInstanceConfigPreservedStateDisk[] | cdktn.IResolvable) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // external_ip - computed: false, optional: true, required: false
  private _externalIp = new ComputePerInstanceConfigPreservedStateExternalIpList(this, "external_ip", true);
  public get externalIp() {
    return this._externalIp;
  }
  public putExternalIp(value: ComputePerInstanceConfigPreservedStateExternalIp[] | cdktn.IResolvable) {
    this._externalIp.internalValue = value;
  }
  public resetExternalIp() {
    this._externalIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpInput() {
    return this._externalIp.internalValue;
  }

  // internal_ip - computed: false, optional: true, required: false
  private _internalIp = new ComputePerInstanceConfigPreservedStateInternalIpList(this, "internal_ip", true);
  public get internalIp() {
    return this._internalIp;
  }
  public putInternalIp(value: ComputePerInstanceConfigPreservedStateInternalIp[] | cdktn.IResolvable) {
    this._internalIp.internalValue = value;
  }
  public resetInternalIp() {
    this._internalIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpInput() {
    return this._internalIp.internalValue;
  }
}
export interface ComputePerInstanceConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#create ComputePerInstanceConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#delete ComputePerInstanceConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#update ComputePerInstanceConfig#update}
  */
  readonly update?: string;
}

export function computePerInstanceConfigTimeoutsToTerraform(struct?: ComputePerInstanceConfigTimeouts | cdktn.IResolvable): any {
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


export function computePerInstanceConfigTimeoutsToHclTerraform(struct?: ComputePerInstanceConfigTimeouts | cdktn.IResolvable): any {
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

export class ComputePerInstanceConfigTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputePerInstanceConfigTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ComputePerInstanceConfigTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config google_compute_per_instance_config}
*/
export class ComputePerInstanceConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_per_instance_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ComputePerInstanceConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputePerInstanceConfig to import
  * @param importFromId The id of the existing ComputePerInstanceConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputePerInstanceConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_per_instance_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_per_instance_config google_compute_per_instance_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputePerInstanceConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ComputePerInstanceConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_per_instance_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.41.0',
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
    this._id = config.id;
    this._instanceGroupManager = config.instanceGroupManager;
    this._minimalAction = config.minimalAction;
    this._mostDisruptiveAllowedAction = config.mostDisruptiveAllowedAction;
    this._name = config.name;
    this._project = config.project;
    this._removeInstanceOnDestroy = config.removeInstanceOnDestroy;
    this._removeInstanceStateOnDestroy = config.removeInstanceStateOnDestroy;
    this._zone = config.zone;
    this._preservedState.internalValue = config.preservedState;
    this._timeouts.internalValue = config.timeouts;
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

  // instance_group_manager - computed: false, optional: false, required: true
  private _instanceGroupManager?: string; 
  public get instanceGroupManager() {
    return this.getStringAttribute('instance_group_manager');
  }
  public set instanceGroupManager(value: string) {
    this._instanceGroupManager = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupManagerInput() {
    return this._instanceGroupManager;
  }

  // minimal_action - computed: false, optional: true, required: false
  private _minimalAction?: string; 
  public get minimalAction() {
    return this.getStringAttribute('minimal_action');
  }
  public set minimalAction(value: string) {
    this._minimalAction = value;
  }
  public resetMinimalAction() {
    this._minimalAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalActionInput() {
    return this._minimalAction;
  }

  // most_disruptive_allowed_action - computed: false, optional: true, required: false
  private _mostDisruptiveAllowedAction?: string; 
  public get mostDisruptiveAllowedAction() {
    return this.getStringAttribute('most_disruptive_allowed_action');
  }
  public set mostDisruptiveAllowedAction(value: string) {
    this._mostDisruptiveAllowedAction = value;
  }
  public resetMostDisruptiveAllowedAction() {
    this._mostDisruptiveAllowedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostDisruptiveAllowedActionInput() {
    return this._mostDisruptiveAllowedAction;
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

  // remove_instance_on_destroy - computed: false, optional: true, required: false
  private _removeInstanceOnDestroy?: boolean | cdktn.IResolvable; 
  public get removeInstanceOnDestroy() {
    return this.getBooleanAttribute('remove_instance_on_destroy');
  }
  public set removeInstanceOnDestroy(value: boolean | cdktn.IResolvable) {
    this._removeInstanceOnDestroy = value;
  }
  public resetRemoveInstanceOnDestroy() {
    this._removeInstanceOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInstanceOnDestroyInput() {
    return this._removeInstanceOnDestroy;
  }

  // remove_instance_state_on_destroy - computed: false, optional: true, required: false
  private _removeInstanceStateOnDestroy?: boolean | cdktn.IResolvable; 
  public get removeInstanceStateOnDestroy() {
    return this.getBooleanAttribute('remove_instance_state_on_destroy');
  }
  public set removeInstanceStateOnDestroy(value: boolean | cdktn.IResolvable) {
    this._removeInstanceStateOnDestroy = value;
  }
  public resetRemoveInstanceStateOnDestroy() {
    this._removeInstanceStateOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInstanceStateOnDestroyInput() {
    return this._removeInstanceStateOnDestroy;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // preserved_state - computed: false, optional: true, required: false
  private _preservedState = new ComputePerInstanceConfigPreservedStateOutputReference(this, "preserved_state");
  public get preservedState() {
    return this._preservedState;
  }
  public putPreservedState(value: ComputePerInstanceConfigPreservedState) {
    this._preservedState.internalValue = value;
  }
  public resetPreservedState() {
    this._preservedState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preservedStateInput() {
    return this._preservedState.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputePerInstanceConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputePerInstanceConfigTimeouts) {
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
      id: cdktn.stringToTerraform(this._id),
      instance_group_manager: cdktn.stringToTerraform(this._instanceGroupManager),
      minimal_action: cdktn.stringToTerraform(this._minimalAction),
      most_disruptive_allowed_action: cdktn.stringToTerraform(this._mostDisruptiveAllowedAction),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      remove_instance_on_destroy: cdktn.booleanToTerraform(this._removeInstanceOnDestroy),
      remove_instance_state_on_destroy: cdktn.booleanToTerraform(this._removeInstanceStateOnDestroy),
      zone: cdktn.stringToTerraform(this._zone),
      preserved_state: computePerInstanceConfigPreservedStateToTerraform(this._preservedState.internalValue),
      timeouts: computePerInstanceConfigTimeoutsToTerraform(this._timeouts.internalValue),
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
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_group_manager: {
        value: cdktn.stringToHclTerraform(this._instanceGroupManager),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimal_action: {
        value: cdktn.stringToHclTerraform(this._minimalAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      most_disruptive_allowed_action: {
        value: cdktn.stringToHclTerraform(this._mostDisruptiveAllowedAction),
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
      remove_instance_on_destroy: {
        value: cdktn.booleanToHclTerraform(this._removeInstanceOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remove_instance_state_on_destroy: {
        value: cdktn.booleanToHclTerraform(this._removeInstanceStateOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zone: {
        value: cdktn.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preserved_state: {
        value: computePerInstanceConfigPreservedStateToHclTerraform(this._preservedState.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputePerInstanceConfigPreservedStateList",
      },
      timeouts: {
        value: computePerInstanceConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputePerInstanceConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
