/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LustreInstanceConfig extends cdktn.TerraformMetaArguments {
  /**
  * The storage capacity of the instance in gibibytes (GiB). Allowed values
  * are from '9000' to '7632000', depending on the 'perUnitStorageThroughput'.
  * See [Performance tiers and maximum storage
  * capacities](https://cloud.google.com/managed-lustre/docs/create-instance#performance-tiers)
  * for specific minimums, maximums, and step sizes for each performance tier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#capacity_gib LustreInstance#capacity_gib}
  */
  readonly capacityGib: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#deletion_policy LustreInstance#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * A user-readable description of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#description LustreInstance#description}
  */
  readonly description?: string;
  /**
  * The filesystem name for this instance. This name is used by client-side
  * tools, including when mounting the instance. Must be eight characters or
  * less and can only contain letters and numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#filesystem LustreInstance#filesystem}
  */
  readonly filesystem: string;
  /**
  * Indicates whether you want to enable support for GKE clients. By default,
  * GKE clients are not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#gke_support_enabled LustreInstance#gke_support_enabled}
  */
  readonly gkeSupportEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#id LustreInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Managed Lustre instance.
  * 
  * * Must contain only lowercase letters, numbers, and hyphens.
  * * Must start with a letter.
  * * Must be between 1-63 characters.
  * * Must end with a number or a letter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#instance_id LustreInstance#instance_id}
  */
  readonly instanceId: string;
  /**
  * The Cloud KMS key name to use for data encryption.
  * If not set, the instance will use Google-managed encryption keys.
  * If set, the instance will use customer-managed encryption keys.
  * The key must be in the same region as the instance.
  * The key format is:
  * projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{key}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#kms_key LustreInstance#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Labels as key value pairs.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#labels LustreInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#location LustreInstance#location}
  */
  readonly location: string;
  /**
  * The full name of the VPC network to which the instance is connected.
  * Must be in the format
  * 'projects/{project_id}/global/networks/{network_name}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#network LustreInstance#network}
  */
  readonly network: string;
  /**
  * The throughput of the instance in MBps per TiB. Valid values are 125, 250,
  * 500, 1000.
  * See [Performance tiers and maximum storage
  * capacities](https://cloud.google.com/managed-lustre/docs/create-instance#performance-tiers)
  * for more information.
  * 
  * If the instance is using the Dynamic tier, this field must not be set or
  * must be set to zero.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#per_unit_storage_throughput LustreInstance#per_unit_storage_throughput}
  */
  readonly perUnitStorageThroughput?: string;
  /**
  * The placement policy name for the instance in the format of
  * projects/{project}/locations/{location}/resourcePolicies/{resource_policy}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#placement_policy LustreInstance#placement_policy}
  */
  readonly placementPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#project LustreInstance#project}
  */
  readonly project?: string;
  /**
  * access_rules_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#access_rules_options LustreInstance#access_rules_options}
  */
  readonly accessRulesOptions?: LustreInstanceAccessRulesOptions;
  /**
  * dynamic_tier_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#dynamic_tier_options LustreInstance#dynamic_tier_options}
  */
  readonly dynamicTierOptions?: LustreInstanceDynamicTierOptions;
  /**
  * maintenance_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#maintenance_policy LustreInstance#maintenance_policy}
  */
  readonly maintenancePolicy?: LustreInstanceMaintenancePolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#timeouts LustreInstance#timeouts}
  */
  readonly timeouts?: LustreInstanceTimeouts;
}
export interface LustreInstanceUpcomingMaintenanceSchedule {
}

export function lustreInstanceUpcomingMaintenanceScheduleToTerraform(struct?: LustreInstanceUpcomingMaintenanceSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function lustreInstanceUpcomingMaintenanceScheduleToHclTerraform(struct?: LustreInstanceUpcomingMaintenanceSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class LustreInstanceUpcomingMaintenanceScheduleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LustreInstanceUpcomingMaintenanceSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LustreInstanceUpcomingMaintenanceSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class LustreInstanceUpcomingMaintenanceScheduleList extends cdktn.ComplexList {

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
  public get(index: number): LustreInstanceUpcomingMaintenanceScheduleOutputReference {
    return new LustreInstanceUpcomingMaintenanceScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LustreInstanceAccessRulesOptionsAccessRules {
  /**
  * The IP address ranges to which to apply this access rule. Accepts
  * non-overlapping CIDR ranges (e.g., '192.168.1.0/24') and IP addresses
  * (e.g., '192.168.1.0').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#ip_address_ranges LustreInstance#ip_address_ranges}
  */
  readonly ipAddressRanges: string[];
  /**
  * The name of the access rule policy group.
  * Must be 16 characters or less and include only alphanumeric characters
  * or '_'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#name LustreInstance#name}
  */
  readonly name: string;
  /**
  * Squash mode for the access rule.
  * Possible values:
  * NO_SQUASH
  * ROOT_SQUASH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#squash_mode LustreInstance#squash_mode}
  */
  readonly squashMode: string;
}

export function lustreInstanceAccessRulesOptionsAccessRulesToTerraform(struct?: LustreInstanceAccessRulesOptionsAccessRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ip_address_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipAddressRanges),
    name: cdktn.stringToTerraform(struct!.name),
    squash_mode: cdktn.stringToTerraform(struct!.squashMode),
  }
}


export function lustreInstanceAccessRulesOptionsAccessRulesToHclTerraform(struct?: LustreInstanceAccessRulesOptionsAccessRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ip_address_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.ipAddressRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    squash_mode: {
      value: cdktn.stringToHclTerraform(struct!.squashMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LustreInstanceAccessRulesOptionsAccessRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LustreInstanceAccessRulesOptionsAccessRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddressRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressRanges = this._ipAddressRanges;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._squashMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.squashMode = this._squashMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LustreInstanceAccessRulesOptionsAccessRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddressRanges = undefined;
      this._name = undefined;
      this._squashMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddressRanges = value.ipAddressRanges;
      this._name = value.name;
      this._squashMode = value.squashMode;
    }
  }

  // ip_address_ranges - computed: false, optional: false, required: true
  private _ipAddressRanges?: string[]; 
  public get ipAddressRanges() {
    return this.getListAttribute('ip_address_ranges');
  }
  public set ipAddressRanges(value: string[]) {
    this._ipAddressRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressRangesInput() {
    return this._ipAddressRanges;
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

  // squash_mode - computed: false, optional: false, required: true
  private _squashMode?: string; 
  public get squashMode() {
    return this.getStringAttribute('squash_mode');
  }
  public set squashMode(value: string) {
    this._squashMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get squashModeInput() {
    return this._squashMode;
  }
}

export class LustreInstanceAccessRulesOptionsAccessRulesList extends cdktn.ComplexList {
  public internalValue? : LustreInstanceAccessRulesOptionsAccessRules[] | cdktn.IResolvable

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
  public get(index: number): LustreInstanceAccessRulesOptionsAccessRulesOutputReference {
    return new LustreInstanceAccessRulesOptionsAccessRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LustreInstanceAccessRulesOptions {
  /**
  * The user squash GID for the default access rule.
  * This user squash GID applies to all root users connecting from clients
  * that are not matched by any of the access rules. If not set, the default
  * is 0 (no GID squash).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#default_squash_gid LustreInstance#default_squash_gid}
  */
  readonly defaultSquashGid?: number;
  /**
  * The squash mode for the default access rule.
  * Possible values:
  * NO_SQUASH
  * ROOT_SQUASH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#default_squash_mode LustreInstance#default_squash_mode}
  */
  readonly defaultSquashMode: string;
  /**
  * The user squash UID for the default access rule.
  * This user squash UID applies to all root users connecting from clients
  * that are not matched by any of the access rules. If not set, the default
  * is 0 (no UID squash).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#default_squash_uid LustreInstance#default_squash_uid}
  */
  readonly defaultSquashUid?: number;
  /**
  * access_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#access_rules LustreInstance#access_rules}
  */
  readonly accessRules?: LustreInstanceAccessRulesOptionsAccessRules[] | cdktn.IResolvable;
}

export function lustreInstanceAccessRulesOptionsToTerraform(struct?: LustreInstanceAccessRulesOptionsOutputReference | LustreInstanceAccessRulesOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_squash_gid: cdktn.numberToTerraform(struct!.defaultSquashGid),
    default_squash_mode: cdktn.stringToTerraform(struct!.defaultSquashMode),
    default_squash_uid: cdktn.numberToTerraform(struct!.defaultSquashUid),
    access_rules: cdktn.listMapper(lustreInstanceAccessRulesOptionsAccessRulesToTerraform, true)(struct!.accessRules),
  }
}


export function lustreInstanceAccessRulesOptionsToHclTerraform(struct?: LustreInstanceAccessRulesOptionsOutputReference | LustreInstanceAccessRulesOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_squash_gid: {
      value: cdktn.numberToHclTerraform(struct!.defaultSquashGid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_squash_mode: {
      value: cdktn.stringToHclTerraform(struct!.defaultSquashMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_squash_uid: {
      value: cdktn.numberToHclTerraform(struct!.defaultSquashUid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    access_rules: {
      value: cdktn.listMapperHcl(lustreInstanceAccessRulesOptionsAccessRulesToHclTerraform, true)(struct!.accessRules),
      isBlock: true,
      type: "list",
      storageClassType: "LustreInstanceAccessRulesOptionsAccessRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LustreInstanceAccessRulesOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LustreInstanceAccessRulesOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSquashGid !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSquashGid = this._defaultSquashGid;
    }
    if (this._defaultSquashMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSquashMode = this._defaultSquashMode;
    }
    if (this._defaultSquashUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSquashUid = this._defaultSquashUid;
    }
    if (this._accessRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessRules = this._accessRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LustreInstanceAccessRulesOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSquashGid = undefined;
      this._defaultSquashMode = undefined;
      this._defaultSquashUid = undefined;
      this._accessRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSquashGid = value.defaultSquashGid;
      this._defaultSquashMode = value.defaultSquashMode;
      this._defaultSquashUid = value.defaultSquashUid;
      this._accessRules.internalValue = value.accessRules;
    }
  }

  // default_squash_gid - computed: false, optional: true, required: false
  private _defaultSquashGid?: number; 
  public get defaultSquashGid() {
    return this.getNumberAttribute('default_squash_gid');
  }
  public set defaultSquashGid(value: number) {
    this._defaultSquashGid = value;
  }
  public resetDefaultSquashGid() {
    this._defaultSquashGid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSquashGidInput() {
    return this._defaultSquashGid;
  }

  // default_squash_mode - computed: false, optional: false, required: true
  private _defaultSquashMode?: string; 
  public get defaultSquashMode() {
    return this.getStringAttribute('default_squash_mode');
  }
  public set defaultSquashMode(value: string) {
    this._defaultSquashMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSquashModeInput() {
    return this._defaultSquashMode;
  }

  // default_squash_uid - computed: false, optional: true, required: false
  private _defaultSquashUid?: number; 
  public get defaultSquashUid() {
    return this.getNumberAttribute('default_squash_uid');
  }
  public set defaultSquashUid(value: number) {
    this._defaultSquashUid = value;
  }
  public resetDefaultSquashUid() {
    this._defaultSquashUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSquashUidInput() {
    return this._defaultSquashUid;
  }

  // access_rules - computed: false, optional: true, required: false
  private _accessRules = new LustreInstanceAccessRulesOptionsAccessRulesList(this, "access_rules", false);
  public get accessRules() {
    return this._accessRules;
  }
  public putAccessRules(value: LustreInstanceAccessRulesOptionsAccessRules[] | cdktn.IResolvable) {
    this._accessRules.internalValue = value;
  }
  public resetAccessRules() {
    this._accessRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRulesInput() {
    return this._accessRules.internalValue;
  }
}
export interface LustreInstanceDynamicTierOptions {
  /**
  * The dynamic tier mode of the instance.
  * Possible values:
  * DISABLED
  * DEFAULT_CACHE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#mode LustreInstance#mode}
  */
  readonly mode: string;
}

export function lustreInstanceDynamicTierOptionsToTerraform(struct?: LustreInstanceDynamicTierOptionsOutputReference | LustreInstanceDynamicTierOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function lustreInstanceDynamicTierOptionsToHclTerraform(struct?: LustreInstanceDynamicTierOptionsOutputReference | LustreInstanceDynamicTierOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LustreInstanceDynamicTierOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LustreInstanceDynamicTierOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LustreInstanceDynamicTierOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate {
  /**
  * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0
  * to specify a year by itself or a year and month where the day isn't
  * significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#day LustreInstance#day}
  */
  readonly day?: number;
  /**
  * Month of a year. Must be from 1 to 12, or 0 to specify a year without a
  * month and day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#month LustreInstance#month}
  */
  readonly month?: number;
  /**
  * Year of the date. Must be from 1 to 9999, or 0 to specify a date without
  * a year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#year LustreInstance#year}
  */
  readonly year?: number;
}

export function lustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateToTerraform(struct?: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference | LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    day: cdktn.numberToTerraform(struct!.day),
    month: cdktn.numberToTerraform(struct!.month),
    year: cdktn.numberToTerraform(struct!.year),
  }
}


export function lustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateToHclTerraform(struct?: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference | LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    day: {
      value: cdktn.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktn.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    year: {
      value: cdktn.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._month = undefined;
      this._year = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._month = value.month;
      this._year = value.year;
    }
  }

  // day - computed: true, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // month - computed: true, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // year - computed: true, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate {
  /**
  * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0
  * to specify a year by itself or a year and month where the day isn't
  * significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#day LustreInstance#day}
  */
  readonly day?: number;
  /**
  * Month of a year. Must be from 1 to 12, or 0 to specify a year without a
  * month and day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#month LustreInstance#month}
  */
  readonly month?: number;
  /**
  * Year of the date. Must be from 1 to 9999, or 0 to specify a date without
  * a year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#year LustreInstance#year}
  */
  readonly year?: number;
}

export function lustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateToTerraform(struct?: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference | LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    day: cdktn.numberToTerraform(struct!.day),
    month: cdktn.numberToTerraform(struct!.month),
    year: cdktn.numberToTerraform(struct!.year),
  }
}


export function lustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateToHclTerraform(struct?: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference | LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    day: {
      value: cdktn.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktn.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    year: {
      value: cdktn.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._month = undefined;
      this._year = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._month = value.month;
      this._year = value.year;
    }
  }

  // day - computed: true, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // month - computed: true, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // year - computed: true, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime {
  /**
  * Hours of a day in 24 hour format. Must be greater than or equal to 0 and
  * typically must be less than or equal to 23. An API may choose to allow the
  * value "24:00:00" for scenarios like business closing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#hours LustreInstance#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of an hour. Must be greater than or equal to 0 and less than or
  * equal to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#minutes LustreInstance#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds, in nanoseconds. Must be greater than or equal to 0
  * and less than or equal to 999,999,999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#nanos LustreInstance#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of a minute. Must be greater than or equal to 0 and typically must
  * be less than or equal to 59. An API may allow the value 60 if it allows
  * leap-seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#seconds LustreInstance#seconds}
  */
  readonly seconds?: number;
}

export function lustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeToTerraform(struct?: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference | LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hours: cdktn.numberToTerraform(struct!.hours),
    minutes: cdktn.numberToTerraform(struct!.minutes),
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.numberToTerraform(struct!.seconds),
  }
}


export function lustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeToHclTerraform(struct?: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference | LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hours: {
      value: cdktn.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktn.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // hours - computed: true, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: true, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: true, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: true, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface LustreInstanceMaintenancePolicyMaintenanceExclusionWindow {
  /**
  * end_date block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#end_date LustreInstance#end_date}
  */
  readonly endDate: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate;
  /**
  * start_date block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#start_date LustreInstance#start_date}
  */
  readonly startDate: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate;
  /**
  * time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#time LustreInstance#time}
  */
  readonly time: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime;
}

export function lustreInstanceMaintenancePolicyMaintenanceExclusionWindowToTerraform(struct?: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference | LustreInstanceMaintenancePolicyMaintenanceExclusionWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_date: lustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateToTerraform(struct!.endDate),
    start_date: lustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateToTerraform(struct!.startDate),
    time: lustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeToTerraform(struct!.time),
  }
}


export function lustreInstanceMaintenancePolicyMaintenanceExclusionWindowToHclTerraform(struct?: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference | LustreInstanceMaintenancePolicyMaintenanceExclusionWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_date: {
      value: lustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateToHclTerraform(struct!.endDate),
      isBlock: true,
      type: "list",
      storageClassType: "LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateList",
    },
    start_date: {
      value: lustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateToHclTerraform(struct!.startDate),
      isBlock: true,
      type: "list",
      storageClassType: "LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateList",
    },
    time: {
      value: lustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeToHclTerraform(struct!.time),
      isBlock: true,
      type: "list",
      storageClassType: "LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LustreInstanceMaintenancePolicyMaintenanceExclusionWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endDate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDate = this._endDate?.internalValue;
    }
    if (this._startDate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate?.internalValue;
    }
    if (this._time?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LustreInstanceMaintenancePolicyMaintenanceExclusionWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endDate.internalValue = undefined;
      this._startDate.internalValue = undefined;
      this._time.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endDate.internalValue = value.endDate;
      this._startDate.internalValue = value.startDate;
      this._time.internalValue = value.time;
    }
  }

  // end_date - computed: false, optional: false, required: true
  private _endDate = new LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference(this, "end_date");
  public get endDate() {
    return this._endDate;
  }
  public putEndDate(value: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate) {
    this._endDate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate.internalValue;
  }

  // start_date - computed: false, optional: false, required: true
  private _startDate = new LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference(this, "start_date");
  public get startDate() {
    return this._startDate;
  }
  public putStartDate(value: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate) {
    this._startDate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate.internalValue;
  }

  // time - computed: false, optional: false, required: true
  private _time = new LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference(this, "time");
  public get time() {
    return this._time;
  }
  public putTime(value: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime) {
    this._time.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time.internalValue;
  }
}
export interface LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime {
  /**
  * Hours of a day in 24 hour format. Must be greater than or equal to 0 and
  * typically must be less than or equal to 23. An API may choose to allow the
  * value "24:00:00" for scenarios like business closing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#hours LustreInstance#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of an hour. Must be greater than or equal to 0 and less than or
  * equal to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#minutes LustreInstance#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds, in nanoseconds. Must be greater than or equal to 0
  * and less than or equal to 999,999,999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#nanos LustreInstance#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of a minute. Must be greater than or equal to 0 and typically must
  * be less than or equal to 59. An API may allow the value 60 if it allows
  * leap-seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#seconds LustreInstance#seconds}
  */
  readonly seconds?: number;
}

export function lustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeToTerraform(struct?: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference | LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hours: cdktn.numberToTerraform(struct!.hours),
    minutes: cdktn.numberToTerraform(struct!.minutes),
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.numberToTerraform(struct!.seconds),
  }
}


export function lustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeToHclTerraform(struct?: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference | LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hours: {
      value: cdktn.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktn.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // hours - computed: true, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: true, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: true, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: true, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows {
  /**
  * Possible values:
  * MONDAY
  * TUESDAY
  * WEDNESDAY
  * THURSDAY
  * FRIDAY
  * SATURDAY
  * SUNDAY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#day_of_week LustreInstance#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * start_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#start_time LustreInstance#start_time}
  */
  readonly startTime: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime;
}

export function lustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsToTerraform(struct?: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference | LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    day_of_week: cdktn.stringToTerraform(struct!.dayOfWeek),
    start_time: lustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeToTerraform(struct!.startTime),
  }
}


export function lustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsToHclTerraform(struct?: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference | LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    day_of_week: {
      value: cdktn.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: lustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeToHclTerraform(struct!.startTime),
      isBlock: true,
      type: "list",
      storageClassType: "LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._startTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeek = undefined;
      this._startTime.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeek = value.dayOfWeek;
      this._startTime.internalValue = value.startTime;
    }
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime = new LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference(this, "start_time");
  public get startTime() {
    return this._startTime;
  }
  public putStartTime(value: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime) {
    this._startTime.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime.internalValue;
  }
}
export interface LustreInstanceMaintenancePolicy {
  /**
  * maintenance_exclusion_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#maintenance_exclusion_window LustreInstance#maintenance_exclusion_window}
  */
  readonly maintenanceExclusionWindow?: LustreInstanceMaintenancePolicyMaintenanceExclusionWindow;
  /**
  * weekly_maintenance_windows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#weekly_maintenance_windows LustreInstance#weekly_maintenance_windows}
  */
  readonly weeklyMaintenanceWindows: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows;
}

export function lustreInstanceMaintenancePolicyToTerraform(struct?: LustreInstanceMaintenancePolicyOutputReference | LustreInstanceMaintenancePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maintenance_exclusion_window: lustreInstanceMaintenancePolicyMaintenanceExclusionWindowToTerraform(struct!.maintenanceExclusionWindow),
    weekly_maintenance_windows: lustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsToTerraform(struct!.weeklyMaintenanceWindows),
  }
}


export function lustreInstanceMaintenancePolicyToHclTerraform(struct?: LustreInstanceMaintenancePolicyOutputReference | LustreInstanceMaintenancePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maintenance_exclusion_window: {
      value: lustreInstanceMaintenancePolicyMaintenanceExclusionWindowToHclTerraform(struct!.maintenanceExclusionWindow),
      isBlock: true,
      type: "list",
      storageClassType: "LustreInstanceMaintenancePolicyMaintenanceExclusionWindowList",
    },
    weekly_maintenance_windows: {
      value: lustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsToHclTerraform(struct!.weeklyMaintenanceWindows),
      isBlock: true,
      type: "list",
      storageClassType: "LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LustreInstanceMaintenancePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LustreInstanceMaintenancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceExclusionWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceExclusionWindow = this._maintenanceExclusionWindow?.internalValue;
    }
    if (this._weeklyMaintenanceWindows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklyMaintenanceWindows = this._weeklyMaintenanceWindows?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LustreInstanceMaintenancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maintenanceExclusionWindow.internalValue = undefined;
      this._weeklyMaintenanceWindows.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maintenanceExclusionWindow.internalValue = value.maintenanceExclusionWindow;
      this._weeklyMaintenanceWindows.internalValue = value.weeklyMaintenanceWindows;
    }
  }

  // maintenance_exclusion_window - computed: false, optional: true, required: false
  private _maintenanceExclusionWindow = new LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference(this, "maintenance_exclusion_window");
  public get maintenanceExclusionWindow() {
    return this._maintenanceExclusionWindow;
  }
  public putMaintenanceExclusionWindow(value: LustreInstanceMaintenancePolicyMaintenanceExclusionWindow) {
    this._maintenanceExclusionWindow.internalValue = value;
  }
  public resetMaintenanceExclusionWindow() {
    this._maintenanceExclusionWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceExclusionWindowInput() {
    return this._maintenanceExclusionWindow.internalValue;
  }

  // weekly_maintenance_windows - computed: false, optional: false, required: true
  private _weeklyMaintenanceWindows = new LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference(this, "weekly_maintenance_windows");
  public get weeklyMaintenanceWindows() {
    return this._weeklyMaintenanceWindows;
  }
  public putWeeklyMaintenanceWindows(value: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows) {
    this._weeklyMaintenanceWindows.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyMaintenanceWindowsInput() {
    return this._weeklyMaintenanceWindows.internalValue;
  }
}
export interface LustreInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#create LustreInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#delete LustreInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#update LustreInstance#update}
  */
  readonly update?: string;
}

export function lustreInstanceTimeoutsToTerraform(struct?: LustreInstanceTimeouts | cdktn.IResolvable): any {
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


export function lustreInstanceTimeoutsToHclTerraform(struct?: LustreInstanceTimeouts | cdktn.IResolvable): any {
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

export class LustreInstanceTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LustreInstanceTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LustreInstanceTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance google_lustre_instance}
*/
export class LustreInstance extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_lustre_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LustreInstance resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LustreInstance to import
  * @param importFromId The id of the existing LustreInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LustreInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_lustre_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/lustre_instance google_lustre_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LustreInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: LustreInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_lustre_instance',
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
    this._capacityGib = config.capacityGib;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._filesystem = config.filesystem;
    this._gkeSupportEnabled = config.gkeSupportEnabled;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._kmsKey = config.kmsKey;
    this._labels = config.labels;
    this._location = config.location;
    this._network = config.network;
    this._perUnitStorageThroughput = config.perUnitStorageThroughput;
    this._placementPolicy = config.placementPolicy;
    this._project = config.project;
    this._accessRulesOptions.internalValue = config.accessRulesOptions;
    this._dynamicTierOptions.internalValue = config.dynamicTierOptions;
    this._maintenancePolicy.internalValue = config.maintenancePolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity_gib - computed: false, optional: false, required: true
  private _capacityGib?: string; 
  public get capacityGib() {
    return this.getStringAttribute('capacity_gib');
  }
  public set capacityGib(value: string) {
    this._capacityGib = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityGibInput() {
    return this._capacityGib;
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // filesystem - computed: false, optional: false, required: true
  private _filesystem?: string; 
  public get filesystem() {
    return this.getStringAttribute('filesystem');
  }
  public set filesystem(value: string) {
    this._filesystem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemInput() {
    return this._filesystem;
  }

  // gke_support_enabled - computed: false, optional: true, required: false
  private _gkeSupportEnabled?: boolean | cdktn.IResolvable; 
  public get gkeSupportEnabled() {
    return this.getBooleanAttribute('gke_support_enabled');
  }
  public set gkeSupportEnabled(value: boolean | cdktn.IResolvable) {
    this._gkeSupportEnabled = value;
  }
  public resetGkeSupportEnabled() {
    this._gkeSupportEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeSupportEnabledInput() {
    return this._gkeSupportEnabled;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
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

  // mount_point - computed: true, optional: false, required: false
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // per_unit_storage_throughput - computed: false, optional: true, required: false
  private _perUnitStorageThroughput?: string; 
  public get perUnitStorageThroughput() {
    return this.getStringAttribute('per_unit_storage_throughput');
  }
  public set perUnitStorageThroughput(value: string) {
    this._perUnitStorageThroughput = value;
  }
  public resetPerUnitStorageThroughput() {
    this._perUnitStorageThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perUnitStorageThroughputInput() {
    return this._perUnitStorageThroughput;
  }

  // placement_policy - computed: false, optional: true, required: false
  private _placementPolicy?: string; 
  public get placementPolicy() {
    return this.getStringAttribute('placement_policy');
  }
  public set placementPolicy(value: string) {
    this._placementPolicy = value;
  }
  public resetPlacementPolicy() {
    this._placementPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementPolicyInput() {
    return this._placementPolicy;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_reason - computed: true, optional: false, required: false
  public get stateReason() {
    return this.getStringAttribute('state_reason');
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

  // upcoming_maintenance_schedule - computed: true, optional: false, required: false
  private _upcomingMaintenanceSchedule = new LustreInstanceUpcomingMaintenanceScheduleList(this, "upcoming_maintenance_schedule", false);
  public get upcomingMaintenanceSchedule() {
    return this._upcomingMaintenanceSchedule;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // access_rules_options - computed: false, optional: true, required: false
  private _accessRulesOptions = new LustreInstanceAccessRulesOptionsOutputReference(this, "access_rules_options");
  public get accessRulesOptions() {
    return this._accessRulesOptions;
  }
  public putAccessRulesOptions(value: LustreInstanceAccessRulesOptions) {
    this._accessRulesOptions.internalValue = value;
  }
  public resetAccessRulesOptions() {
    this._accessRulesOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRulesOptionsInput() {
    return this._accessRulesOptions.internalValue;
  }

  // dynamic_tier_options - computed: false, optional: true, required: false
  private _dynamicTierOptions = new LustreInstanceDynamicTierOptionsOutputReference(this, "dynamic_tier_options");
  public get dynamicTierOptions() {
    return this._dynamicTierOptions;
  }
  public putDynamicTierOptions(value: LustreInstanceDynamicTierOptions) {
    this._dynamicTierOptions.internalValue = value;
  }
  public resetDynamicTierOptions() {
    this._dynamicTierOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicTierOptionsInput() {
    return this._dynamicTierOptions.internalValue;
  }

  // maintenance_policy - computed: false, optional: true, required: false
  private _maintenancePolicy = new LustreInstanceMaintenancePolicyOutputReference(this, "maintenance_policy");
  public get maintenancePolicy() {
    return this._maintenancePolicy;
  }
  public putMaintenancePolicy(value: LustreInstanceMaintenancePolicy) {
    this._maintenancePolicy.internalValue = value;
  }
  public resetMaintenancePolicy() {
    this._maintenancePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenancePolicyInput() {
    return this._maintenancePolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LustreInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LustreInstanceTimeouts) {
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
      capacity_gib: cdktn.stringToTerraform(this._capacityGib),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      filesystem: cdktn.stringToTerraform(this._filesystem),
      gke_support_enabled: cdktn.booleanToTerraform(this._gkeSupportEnabled),
      id: cdktn.stringToTerraform(this._id),
      instance_id: cdktn.stringToTerraform(this._instanceId),
      kms_key: cdktn.stringToTerraform(this._kmsKey),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      network: cdktn.stringToTerraform(this._network),
      per_unit_storage_throughput: cdktn.stringToTerraform(this._perUnitStorageThroughput),
      placement_policy: cdktn.stringToTerraform(this._placementPolicy),
      project: cdktn.stringToTerraform(this._project),
      access_rules_options: lustreInstanceAccessRulesOptionsToTerraform(this._accessRulesOptions.internalValue),
      dynamic_tier_options: lustreInstanceDynamicTierOptionsToTerraform(this._dynamicTierOptions.internalValue),
      maintenance_policy: lustreInstanceMaintenancePolicyToTerraform(this._maintenancePolicy.internalValue),
      timeouts: lustreInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity_gib: {
        value: cdktn.stringToHclTerraform(this._capacityGib),
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
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filesystem: {
        value: cdktn.stringToHclTerraform(this._filesystem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gke_support_enabled: {
        value: cdktn.booleanToHclTerraform(this._gkeSupportEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktn.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key: {
        value: cdktn.stringToHclTerraform(this._kmsKey),
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
      network: {
        value: cdktn.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_unit_storage_throughput: {
        value: cdktn.stringToHclTerraform(this._perUnitStorageThroughput),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      placement_policy: {
        value: cdktn.stringToHclTerraform(this._placementPolicy),
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
      access_rules_options: {
        value: lustreInstanceAccessRulesOptionsToHclTerraform(this._accessRulesOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LustreInstanceAccessRulesOptionsList",
      },
      dynamic_tier_options: {
        value: lustreInstanceDynamicTierOptionsToHclTerraform(this._dynamicTierOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LustreInstanceDynamicTierOptionsList",
      },
      maintenance_policy: {
        value: lustreInstanceMaintenancePolicyToHclTerraform(this._maintenancePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LustreInstanceMaintenancePolicyList",
      },
      timeouts: {
        value: lustreInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LustreInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
