/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AccessContextManagerAccessLevelsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#deletion_policy AccessContextManagerAccessLevels#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#id AccessContextManagerAccessLevels#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The AccessPolicy this AccessLevel lives in.
  * Format: accessPolicies/{policy_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#parent AccessContextManagerAccessLevels#parent}
  */
  readonly parent: string;
  /**
  * access_levels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#access_levels AccessContextManagerAccessLevels#access_levels}
  */
  readonly accessLevels?: AccessContextManagerAccessLevelsAccessLevels[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#timeouts AccessContextManagerAccessLevels#timeouts}
  */
  readonly timeouts?: AccessContextManagerAccessLevelsTimeouts;
}
export interface AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints {
  /**
  * The minimum allowed OS version. If not set, any version
  * of this OS satisfies the constraint.
  * Format: "major.minor.patch" such as "10.5.301", "9.2.1".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#minimum_version AccessContextManagerAccessLevels#minimum_version}
  */
  readonly minimumVersion?: string;
  /**
  * The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#os_type AccessContextManagerAccessLevels#os_type}
  */
  readonly osType: string;
}

export function accessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsToTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    minimum_version: cdktn.stringToTerraform(struct!.minimumVersion),
    os_type: cdktn.stringToTerraform(struct!.osType),
  }
}


export function accessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsToHclTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    minimum_version: {
      value: cdktn.stringToHclTerraform(struct!.minimumVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_type: {
      value: cdktn.stringToHclTerraform(struct!.osType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumVersion = this._minimumVersion;
    }
    if (this._osType !== undefined) {
      hasAnyValues = true;
      internalValueResult.osType = this._osType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumVersion = undefined;
      this._osType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumVersion = value.minimumVersion;
      this._osType = value.osType;
    }
  }

  // minimum_version - computed: false, optional: true, required: false
  private _minimumVersion?: string; 
  public get minimumVersion() {
    return this.getStringAttribute('minimum_version');
  }
  public set minimumVersion(value: string) {
    this._minimumVersion = value;
  }
  public resetMinimumVersion() {
    this._minimumVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumVersionInput() {
    return this._minimumVersion;
  }

  // os_type - computed: false, optional: false, required: true
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }
}

export class AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList extends cdktn.ComplexList {
  public internalValue? : AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints[] | cdktn.IResolvable

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
  public get(index: number): AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference {
    return new AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy {
  /**
  * A list of allowed device management levels.
  * An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#allowed_device_management_levels AccessContextManagerAccessLevels#allowed_device_management_levels}
  */
  readonly allowedDeviceManagementLevels?: string[];
  /**
  * A list of allowed encryptions statuses.
  * An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#allowed_encryption_statuses AccessContextManagerAccessLevels#allowed_encryption_statuses}
  */
  readonly allowedEncryptionStatuses?: string[];
  /**
  * Whether the device needs to be approved by the customer admin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#require_admin_approval AccessContextManagerAccessLevels#require_admin_approval}
  */
  readonly requireAdminApproval?: boolean | cdktn.IResolvable;
  /**
  * Whether the device needs to be corp owned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#require_corp_owned AccessContextManagerAccessLevels#require_corp_owned}
  */
  readonly requireCorpOwned?: boolean | cdktn.IResolvable;
  /**
  * Whether or not screenlock is required for the DevicePolicy
  * to be true. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#require_screen_lock AccessContextManagerAccessLevels#require_screen_lock}
  */
  readonly requireScreenLock?: boolean | cdktn.IResolvable;
  /**
  * os_constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#os_constraints AccessContextManagerAccessLevels#os_constraints}
  */
  readonly osConstraints?: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints[] | cdktn.IResolvable;
}

export function accessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyToTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference | AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_device_management_levels: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedDeviceManagementLevels),
    allowed_encryption_statuses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedEncryptionStatuses),
    require_admin_approval: cdktn.booleanToTerraform(struct!.requireAdminApproval),
    require_corp_owned: cdktn.booleanToTerraform(struct!.requireCorpOwned),
    require_screen_lock: cdktn.booleanToTerraform(struct!.requireScreenLock),
    os_constraints: cdktn.listMapper(accessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsToTerraform, true)(struct!.osConstraints),
  }
}


export function accessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyToHclTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference | AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_device_management_levels: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedDeviceManagementLevels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_encryption_statuses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedEncryptionStatuses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    require_admin_approval: {
      value: cdktn.booleanToHclTerraform(struct!.requireAdminApproval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_corp_owned: {
      value: cdktn.booleanToHclTerraform(struct!.requireCorpOwned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_screen_lock: {
      value: cdktn.booleanToHclTerraform(struct!.requireScreenLock),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    os_constraints: {
      value: cdktn.listMapperHcl(accessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsToHclTerraform, true)(struct!.osConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedDeviceManagementLevels !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedDeviceManagementLevels = this._allowedDeviceManagementLevels;
    }
    if (this._allowedEncryptionStatuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedEncryptionStatuses = this._allowedEncryptionStatuses;
    }
    if (this._requireAdminApproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireAdminApproval = this._requireAdminApproval;
    }
    if (this._requireCorpOwned !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireCorpOwned = this._requireCorpOwned;
    }
    if (this._requireScreenLock !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireScreenLock = this._requireScreenLock;
    }
    if (this._osConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osConstraints = this._osConstraints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedDeviceManagementLevels = undefined;
      this._allowedEncryptionStatuses = undefined;
      this._requireAdminApproval = undefined;
      this._requireCorpOwned = undefined;
      this._requireScreenLock = undefined;
      this._osConstraints.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedDeviceManagementLevels = value.allowedDeviceManagementLevels;
      this._allowedEncryptionStatuses = value.allowedEncryptionStatuses;
      this._requireAdminApproval = value.requireAdminApproval;
      this._requireCorpOwned = value.requireCorpOwned;
      this._requireScreenLock = value.requireScreenLock;
      this._osConstraints.internalValue = value.osConstraints;
    }
  }

  // allowed_device_management_levels - computed: false, optional: true, required: false
  private _allowedDeviceManagementLevels?: string[]; 
  public get allowedDeviceManagementLevels() {
    return this.getListAttribute('allowed_device_management_levels');
  }
  public set allowedDeviceManagementLevels(value: string[]) {
    this._allowedDeviceManagementLevels = value;
  }
  public resetAllowedDeviceManagementLevels() {
    this._allowedDeviceManagementLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDeviceManagementLevelsInput() {
    return this._allowedDeviceManagementLevels;
  }

  // allowed_encryption_statuses - computed: false, optional: true, required: false
  private _allowedEncryptionStatuses?: string[]; 
  public get allowedEncryptionStatuses() {
    return this.getListAttribute('allowed_encryption_statuses');
  }
  public set allowedEncryptionStatuses(value: string[]) {
    this._allowedEncryptionStatuses = value;
  }
  public resetAllowedEncryptionStatuses() {
    this._allowedEncryptionStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedEncryptionStatusesInput() {
    return this._allowedEncryptionStatuses;
  }

  // require_admin_approval - computed: false, optional: true, required: false
  private _requireAdminApproval?: boolean | cdktn.IResolvable; 
  public get requireAdminApproval() {
    return this.getBooleanAttribute('require_admin_approval');
  }
  public set requireAdminApproval(value: boolean | cdktn.IResolvable) {
    this._requireAdminApproval = value;
  }
  public resetRequireAdminApproval() {
    this._requireAdminApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAdminApprovalInput() {
    return this._requireAdminApproval;
  }

  // require_corp_owned - computed: false, optional: true, required: false
  private _requireCorpOwned?: boolean | cdktn.IResolvable; 
  public get requireCorpOwned() {
    return this.getBooleanAttribute('require_corp_owned');
  }
  public set requireCorpOwned(value: boolean | cdktn.IResolvable) {
    this._requireCorpOwned = value;
  }
  public resetRequireCorpOwned() {
    this._requireCorpOwned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireCorpOwnedInput() {
    return this._requireCorpOwned;
  }

  // require_screen_lock - computed: false, optional: true, required: false
  private _requireScreenLock?: boolean | cdktn.IResolvable; 
  public get requireScreenLock() {
    return this.getBooleanAttribute('require_screen_lock');
  }
  public set requireScreenLock(value: boolean | cdktn.IResolvable) {
    this._requireScreenLock = value;
  }
  public resetRequireScreenLock() {
    this._requireScreenLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireScreenLockInput() {
    return this._requireScreenLock;
  }

  // os_constraints - computed: false, optional: true, required: false
  private _osConstraints = new AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList(this, "os_constraints", false);
  public get osConstraints() {
    return this._osConstraints;
  }
  public putOsConstraints(value: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints[] | cdktn.IResolvable) {
    this._osConstraints.internalValue = value;
  }
  public resetOsConstraints() {
    this._osConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osConstraintsInput() {
    return this._osConstraints.internalValue;
  }
}
export interface AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork {
  /**
  * Required. Network name to be allowed by this Access Level. Networks of foreign organizations requires 'compute.network.get' permission to be granted to caller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#network AccessContextManagerAccessLevels#network}
  */
  readonly network: string;
  /**
  * CIDR block IP subnetwork specification. Must be IPv4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#vpc_ip_subnetworks AccessContextManagerAccessLevels#vpc_ip_subnetworks}
  */
  readonly vpcIpSubnetworks?: string[];
}

export function accessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkToTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference | AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network: cdktn.stringToTerraform(struct!.network),
    vpc_ip_subnetworks: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.vpcIpSubnetworks),
  }
}


export function accessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkToHclTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference | AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    network: {
      value: cdktn.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_ip_subnetworks: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.vpcIpSubnetworks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._vpcIpSubnetworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcIpSubnetworks = this._vpcIpSubnetworks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._network = undefined;
      this._vpcIpSubnetworks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._network = value.network;
      this._vpcIpSubnetworks = value.vpcIpSubnetworks;
    }
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // vpc_ip_subnetworks - computed: false, optional: true, required: false
  private _vpcIpSubnetworks?: string[]; 
  public get vpcIpSubnetworks() {
    return this.getListAttribute('vpc_ip_subnetworks');
  }
  public set vpcIpSubnetworks(value: string[]) {
    this._vpcIpSubnetworks = value;
  }
  public resetVpcIpSubnetworks() {
    this._vpcIpSubnetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIpSubnetworksInput() {
    return this._vpcIpSubnetworks;
  }
}
export interface AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources {
  /**
  * vpc_subnetwork block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#vpc_subnetwork AccessContextManagerAccessLevels#vpc_subnetwork}
  */
  readonly vpcSubnetwork?: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork;
}

export function accessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesToTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vpc_subnetwork: accessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkToTerraform(struct!.vpcSubnetwork),
  }
}


export function accessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesToHclTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    vpc_subnetwork: {
      value: accessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkToHclTerraform(struct!.vpcSubnetwork),
      isBlock: true,
      type: "list",
      storageClassType: "AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcSubnetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcSubnetwork = this._vpcSubnetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpcSubnetwork.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpcSubnetwork.internalValue = value.vpcSubnetwork;
    }
  }

  // vpc_subnetwork - computed: false, optional: true, required: false
  private _vpcSubnetwork = new AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference(this, "vpc_subnetwork");
  public get vpcSubnetwork() {
    return this._vpcSubnetwork;
  }
  public putVpcSubnetwork(value: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork) {
    this._vpcSubnetwork.internalValue = value;
  }
  public resetVpcSubnetwork() {
    this._vpcSubnetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSubnetworkInput() {
    return this._vpcSubnetwork.internalValue;
  }
}

export class AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList extends cdktn.ComplexList {
  public internalValue? : AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources[] | cdktn.IResolvable

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
  public get(index: number): AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference {
    return new AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerAccessLevelsAccessLevelsBasicConditions {
  /**
  * A list of CIDR block IP subnetwork specification. May be IPv4
  * or IPv6.
  * Note that for a CIDR IP address block, the specified IP address
  * portion must be properly truncated (i.e. all the host bits must
  * be zero) or the input is considered malformed. For example,
  * "192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly,
  * for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32"
  * is not. The originating IP of a request must be in one of the
  * listed subnets in order for this Condition to be true.
  * If empty, all IP addresses are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#ip_subnetworks AccessContextManagerAccessLevels#ip_subnetworks}
  */
  readonly ipSubnetworks?: string[];
  /**
  * An allowed list of members (users, service accounts).
  * Using groups is not supported yet.
  * 
  * The signed-in user originating the request must be a part of one
  * of the provided members. If not specified, a request may come
  * from any user (logged in/not logged in, not present in any
  * groups, etc.).
  * Formats: 'user:{emailid}', 'serviceAccount:{emailid}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#members AccessContextManagerAccessLevels#members}
  */
  readonly members?: string[];
  /**
  * Whether to negate the Condition. If true, the Condition becomes
  * a NAND over its non-empty fields, each field must be false for
  * the Condition overall to be satisfied. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#negate AccessContextManagerAccessLevels#negate}
  */
  readonly negate?: boolean | cdktn.IResolvable;
  /**
  * The request must originate from one of the provided
  * countries/regions.
  * Format: A valid ISO 3166-1 alpha-2 code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#regions AccessContextManagerAccessLevels#regions}
  */
  readonly regions?: string[];
  /**
  * A list of other access levels defined in the same Policy,
  * referenced by resource name. Referencing an AccessLevel which
  * does not exist is an error. All access levels listed must be
  * granted for the Condition to be true.
  * Format: accessPolicies/{policy_id}/accessLevels/{short_name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#required_access_levels AccessContextManagerAccessLevels#required_access_levels}
  */
  readonly requiredAccessLevels?: string[];
  /**
  * device_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#device_policy AccessContextManagerAccessLevels#device_policy}
  */
  readonly devicePolicy?: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy;
  /**
  * vpc_network_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#vpc_network_sources AccessContextManagerAccessLevels#vpc_network_sources}
  */
  readonly vpcNetworkSources?: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources[] | cdktn.IResolvable;
}

export function accessContextManagerAccessLevelsAccessLevelsBasicConditionsToTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsBasicConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ip_subnetworks: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipSubnetworks),
    members: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.members),
    negate: cdktn.booleanToTerraform(struct!.negate),
    regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regions),
    required_access_levels: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.requiredAccessLevels),
    device_policy: accessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyToTerraform(struct!.devicePolicy),
    vpc_network_sources: cdktn.listMapper(accessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesToTerraform, true)(struct!.vpcNetworkSources),
  }
}


export function accessContextManagerAccessLevelsAccessLevelsBasicConditionsToHclTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsBasicConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ip_subnetworks: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.ipSubnetworks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    members: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.members),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    negate: {
      value: cdktn.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    regions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    required_access_levels: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.requiredAccessLevels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    device_policy: {
      value: accessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyToHclTerraform(struct!.devicePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyList",
    },
    vpc_network_sources: {
      value: cdktn.listMapperHcl(accessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesToHclTerraform, true)(struct!.vpcNetworkSources),
      isBlock: true,
      type: "list",
      storageClassType: "AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccessContextManagerAccessLevelsAccessLevelsBasicConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipSubnetworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSubnetworks = this._ipSubnetworks;
    }
    if (this._members !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._requiredAccessLevels !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredAccessLevels = this._requiredAccessLevels;
    }
    if (this._devicePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devicePolicy = this._devicePolicy?.internalValue;
    }
    if (this._vpcNetworkSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcNetworkSources = this._vpcNetworkSources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerAccessLevelsAccessLevelsBasicConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipSubnetworks = undefined;
      this._members = undefined;
      this._negate = undefined;
      this._regions = undefined;
      this._requiredAccessLevels = undefined;
      this._devicePolicy.internalValue = undefined;
      this._vpcNetworkSources.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipSubnetworks = value.ipSubnetworks;
      this._members = value.members;
      this._negate = value.negate;
      this._regions = value.regions;
      this._requiredAccessLevels = value.requiredAccessLevels;
      this._devicePolicy.internalValue = value.devicePolicy;
      this._vpcNetworkSources.internalValue = value.vpcNetworkSources;
    }
  }

  // ip_subnetworks - computed: false, optional: true, required: false
  private _ipSubnetworks?: string[]; 
  public get ipSubnetworks() {
    return this.getListAttribute('ip_subnetworks');
  }
  public set ipSubnetworks(value: string[]) {
    this._ipSubnetworks = value;
  }
  public resetIpSubnetworks() {
    this._ipSubnetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSubnetworksInput() {
    return this._ipSubnetworks;
  }

  // members - computed: false, optional: true, required: false
  private _members?: string[]; 
  public get members() {
    return this.getListAttribute('members');
  }
  public set members(value: string[]) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktn.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktn.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // required_access_levels - computed: false, optional: true, required: false
  private _requiredAccessLevels?: string[]; 
  public get requiredAccessLevels() {
    return this.getListAttribute('required_access_levels');
  }
  public set requiredAccessLevels(value: string[]) {
    this._requiredAccessLevels = value;
  }
  public resetRequiredAccessLevels() {
    this._requiredAccessLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredAccessLevelsInput() {
    return this._requiredAccessLevels;
  }

  // device_policy - computed: false, optional: true, required: false
  private _devicePolicy = new AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference(this, "device_policy");
  public get devicePolicy() {
    return this._devicePolicy;
  }
  public putDevicePolicy(value: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy) {
    this._devicePolicy.internalValue = value;
  }
  public resetDevicePolicy() {
    this._devicePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePolicyInput() {
    return this._devicePolicy.internalValue;
  }

  // vpc_network_sources - computed: false, optional: true, required: false
  private _vpcNetworkSources = new AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList(this, "vpc_network_sources", false);
  public get vpcNetworkSources() {
    return this._vpcNetworkSources;
  }
  public putVpcNetworkSources(value: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources[] | cdktn.IResolvable) {
    this._vpcNetworkSources.internalValue = value;
  }
  public resetVpcNetworkSources() {
    this._vpcNetworkSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNetworkSourcesInput() {
    return this._vpcNetworkSources.internalValue;
  }
}

export class AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList extends cdktn.ComplexList {
  public internalValue? : AccessContextManagerAccessLevelsAccessLevelsBasicConditions[] | cdktn.IResolvable

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
  public get(index: number): AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference {
    return new AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerAccessLevelsAccessLevelsBasic {
  /**
  * How the conditions list should be combined to determine if a request
  * is granted this AccessLevel. If AND is used, each Condition in
  * conditions must be satisfied for the AccessLevel to be applied. If
  * OR is used, at least one Condition in conditions must be satisfied
  * for the AccessLevel to be applied. Default value: "AND" Possible values: ["AND", "OR"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#combining_function AccessContextManagerAccessLevels#combining_function}
  */
  readonly combiningFunction?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#conditions AccessContextManagerAccessLevels#conditions}
  */
  readonly conditions: AccessContextManagerAccessLevelsAccessLevelsBasicConditions[] | cdktn.IResolvable;
}

export function accessContextManagerAccessLevelsAccessLevelsBasicToTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference | AccessContextManagerAccessLevelsAccessLevelsBasic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    combining_function: cdktn.stringToTerraform(struct!.combiningFunction),
    conditions: cdktn.listMapper(accessContextManagerAccessLevelsAccessLevelsBasicConditionsToTerraform, true)(struct!.conditions),
  }
}


export function accessContextManagerAccessLevelsAccessLevelsBasicToHclTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference | AccessContextManagerAccessLevelsAccessLevelsBasic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    combining_function: {
      value: cdktn.stringToHclTerraform(struct!.combiningFunction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: cdktn.listMapperHcl(accessContextManagerAccessLevelsAccessLevelsBasicConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerAccessLevelsAccessLevelsBasic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._combiningFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.combiningFunction = this._combiningFunction;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerAccessLevelsAccessLevelsBasic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._combiningFunction = undefined;
      this._conditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._combiningFunction = value.combiningFunction;
      this._conditions.internalValue = value.conditions;
    }
  }

  // combining_function - computed: false, optional: true, required: false
  private _combiningFunction?: string; 
  public get combiningFunction() {
    return this.getStringAttribute('combining_function');
  }
  public set combiningFunction(value: string) {
    this._combiningFunction = value;
  }
  public resetCombiningFunction() {
    this._combiningFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get combiningFunctionInput() {
    return this._combiningFunction;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: AccessContextManagerAccessLevelsAccessLevelsBasicConditions[] | cdktn.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}
export interface AccessContextManagerAccessLevelsAccessLevelsCustomExpr {
  /**
  * Description of the expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#description AccessContextManagerAccessLevels#description}
  */
  readonly description?: string;
  /**
  * Textual representation of an expression in Common Expression Language syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#expression AccessContextManagerAccessLevels#expression}
  */
  readonly expression: string;
  /**
  * String indicating the location of the expression for error reporting, e.g. a file name and a position in the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#location AccessContextManagerAccessLevels#location}
  */
  readonly location?: string;
  /**
  * Title for the expression, i.e. a short string describing its purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#title AccessContextManagerAccessLevels#title}
  */
  readonly title?: string;
}

export function accessContextManagerAccessLevelsAccessLevelsCustomExprToTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference | AccessContextManagerAccessLevelsAccessLevelsCustomExpr): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    expression: cdktn.stringToTerraform(struct!.expression),
    location: cdktn.stringToTerraform(struct!.location),
    title: cdktn.stringToTerraform(struct!.title),
  }
}


export function accessContextManagerAccessLevelsAccessLevelsCustomExprToHclTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference | AccessContextManagerAccessLevelsAccessLevelsCustomExpr): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerAccessLevelsAccessLevelsCustomExpr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerAccessLevelsAccessLevelsCustomExpr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._expression = undefined;
      this._location = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._expression = value.expression;
      this._location = value.location;
      this._title = value.title;
    }
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

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
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

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface AccessContextManagerAccessLevelsAccessLevelsCustom {
  /**
  * expr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#expr AccessContextManagerAccessLevels#expr}
  */
  readonly expr: AccessContextManagerAccessLevelsAccessLevelsCustomExpr;
}

export function accessContextManagerAccessLevelsAccessLevelsCustomToTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference | AccessContextManagerAccessLevelsAccessLevelsCustom): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expr: accessContextManagerAccessLevelsAccessLevelsCustomExprToTerraform(struct!.expr),
  }
}


export function accessContextManagerAccessLevelsAccessLevelsCustomToHclTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference | AccessContextManagerAccessLevelsAccessLevelsCustom): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expr: {
      value: accessContextManagerAccessLevelsAccessLevelsCustomExprToHclTerraform(struct!.expr),
      isBlock: true,
      type: "list",
      storageClassType: "AccessContextManagerAccessLevelsAccessLevelsCustomExprList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerAccessLevelsAccessLevelsCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expr = this._expr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerAccessLevelsAccessLevelsCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expr.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expr.internalValue = value.expr;
    }
  }

  // expr - computed: false, optional: false, required: true
  private _expr = new AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference(this, "expr");
  public get expr() {
    return this._expr;
  }
  public putExpr(value: AccessContextManagerAccessLevelsAccessLevelsCustomExpr) {
    this._expr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exprInput() {
    return this._expr.internalValue;
  }
}
export interface AccessContextManagerAccessLevelsAccessLevels {
  /**
  * Description of the AccessLevel and its use. Does not affect behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#description AccessContextManagerAccessLevels#description}
  */
  readonly description?: string;
  /**
  * Resource name for the Access Level. The short_name component must begin
  * with a letter and only include alphanumeric and '_'.
  * Format: accessPolicies/{policy_id}/accessLevels/{short_name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#name AccessContextManagerAccessLevels#name}
  */
  readonly name: string;
  /**
  * Human readable title. Must be unique within the Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#title AccessContextManagerAccessLevels#title}
  */
  readonly title: string;
  /**
  * basic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#basic AccessContextManagerAccessLevels#basic}
  */
  readonly basic?: AccessContextManagerAccessLevelsAccessLevelsBasic;
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#custom AccessContextManagerAccessLevels#custom}
  */
  readonly custom?: AccessContextManagerAccessLevelsAccessLevelsCustom;
}

export function accessContextManagerAccessLevelsAccessLevelsToTerraform(struct?: AccessContextManagerAccessLevelsAccessLevels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    title: cdktn.stringToTerraform(struct!.title),
    basic: accessContextManagerAccessLevelsAccessLevelsBasicToTerraform(struct!.basic),
    custom: accessContextManagerAccessLevelsAccessLevelsCustomToTerraform(struct!.custom),
  }
}


export function accessContextManagerAccessLevelsAccessLevelsToHclTerraform(struct?: AccessContextManagerAccessLevelsAccessLevels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
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
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic: {
      value: accessContextManagerAccessLevelsAccessLevelsBasicToHclTerraform(struct!.basic),
      isBlock: true,
      type: "list",
      storageClassType: "AccessContextManagerAccessLevelsAccessLevelsBasicList",
    },
    custom: {
      value: accessContextManagerAccessLevelsAccessLevelsCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "list",
      storageClassType: "AccessContextManagerAccessLevelsAccessLevelsCustomList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerAccessLevelsAccessLevelsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccessContextManagerAccessLevelsAccessLevels | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._basic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basic = this._basic?.internalValue;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerAccessLevelsAccessLevels | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._title = undefined;
      this._basic.internalValue = undefined;
      this._custom.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._title = value.title;
      this._basic.internalValue = value.basic;
      this._custom.internalValue = value.custom;
    }
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

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // basic - computed: false, optional: true, required: false
  private _basic = new AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference(this, "basic");
  public get basic() {
    return this._basic;
  }
  public putBasic(value: AccessContextManagerAccessLevelsAccessLevelsBasic) {
    this._basic.internalValue = value;
  }
  public resetBasic() {
    this._basic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicInput() {
    return this._basic.internalValue;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: AccessContextManagerAccessLevelsAccessLevelsCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }
}

export class AccessContextManagerAccessLevelsAccessLevelsList extends cdktn.ComplexList {
  public internalValue? : AccessContextManagerAccessLevelsAccessLevels[] | cdktn.IResolvable

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
  public get(index: number): AccessContextManagerAccessLevelsAccessLevelsOutputReference {
    return new AccessContextManagerAccessLevelsAccessLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerAccessLevelsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#create AccessContextManagerAccessLevels#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#delete AccessContextManagerAccessLevels#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#update AccessContextManagerAccessLevels#update}
  */
  readonly update?: string;
}

export function accessContextManagerAccessLevelsTimeoutsToTerraform(struct?: AccessContextManagerAccessLevelsTimeouts | cdktn.IResolvable): any {
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


export function accessContextManagerAccessLevelsTimeoutsToHclTerraform(struct?: AccessContextManagerAccessLevelsTimeouts | cdktn.IResolvable): any {
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

export class AccessContextManagerAccessLevelsTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccessContextManagerAccessLevelsTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccessContextManagerAccessLevelsTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels google_access_context_manager_access_levels}
*/
export class AccessContextManagerAccessLevels extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_access_context_manager_access_levels";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AccessContextManagerAccessLevels resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessContextManagerAccessLevels to import
  * @param importFromId The id of the existing AccessContextManagerAccessLevels that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessContextManagerAccessLevels to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_access_context_manager_access_levels", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/access_context_manager_access_levels google_access_context_manager_access_levels} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessContextManagerAccessLevelsConfig
  */
  public constructor(scope: Construct, id: string, config: AccessContextManagerAccessLevelsConfig) {
    super(scope, id, {
      terraformResourceType: 'google_access_context_manager_access_levels',
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
    this._parent = config.parent;
    this._accessLevels.internalValue = config.accessLevels;
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

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // access_levels - computed: false, optional: true, required: false
  private _accessLevels = new AccessContextManagerAccessLevelsAccessLevelsList(this, "access_levels", true);
  public get accessLevels() {
    return this._accessLevels;
  }
  public putAccessLevels(value: AccessContextManagerAccessLevelsAccessLevels[] | cdktn.IResolvable) {
    this._accessLevels.internalValue = value;
  }
  public resetAccessLevels() {
    this._accessLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelsInput() {
    return this._accessLevels.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AccessContextManagerAccessLevelsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AccessContextManagerAccessLevelsTimeouts) {
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
      parent: cdktn.stringToTerraform(this._parent),
      access_levels: cdktn.listMapper(accessContextManagerAccessLevelsAccessLevelsToTerraform, true)(this._accessLevels.internalValue),
      timeouts: accessContextManagerAccessLevelsTimeoutsToTerraform(this._timeouts.internalValue),
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
      parent: {
        value: cdktn.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_levels: {
        value: cdktn.listMapperHcl(accessContextManagerAccessLevelsAccessLevelsToHclTerraform, true)(this._accessLevels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AccessContextManagerAccessLevelsAccessLevelsList",
      },
      timeouts: {
        value: accessContextManagerAccessLevelsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccessContextManagerAccessLevelsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
