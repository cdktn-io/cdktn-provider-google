/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BackupDrRestoreWorkloadConfig extends cdktn.TerraformMetaArguments {
  /**
  * Required. The ID of the backup to restore from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#backup_id BackupDrRestoreWorkload#backup_id}
  */
  readonly backupId: string;
  /**
  * Required. The ID of the backup vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#backup_vault_id BackupDrRestoreWorkload#backup_vault_id}
  */
  readonly backupVaultId: string;
  /**
  * Optional. A field mask used to clear server-side default values during restore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#clear_overrides_field_mask BackupDrRestoreWorkload#clear_overrides_field_mask}
  */
  readonly clearOverridesFieldMask?: string;
  /**
  * Required. The ID of the data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#data_source_id BackupDrRestoreWorkload#data_source_id}
  */
  readonly dataSourceId: string;
  /**
  * Optional. If true (default), running terraform destroy will delete the live resource in GCP.
  * If false, only the restore record is removed from the state, leaving the resource active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#delete_restored_instance BackupDrRestoreWorkload#delete_restored_instance}
  */
  readonly deleteRestoredInstance?: boolean | cdktn.IResolvable;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#deletion_policy BackupDrRestoreWorkload#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#id BackupDrRestoreWorkload#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Required. The location for the backup vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#location BackupDrRestoreWorkload#location}
  */
  readonly location: string;
  /**
  * The resource name of the backup instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#name BackupDrRestoreWorkload#name}
  */
  readonly name?: string;
  /**
  * Optional. An optional request ID to identify requests. Specify a unique request ID
  * so that if you must retry your request, the server will know to ignore
  * the request if it has already been completed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#request_id BackupDrRestoreWorkload#request_id}
  */
  readonly requestId?: string;
  /**
  * compute_instance_restore_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#compute_instance_restore_properties BackupDrRestoreWorkload#compute_instance_restore_properties}
  */
  readonly computeInstanceRestoreProperties?: BackupDrRestoreWorkloadComputeInstanceRestoreProperties;
  /**
  * compute_instance_target_environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#compute_instance_target_environment BackupDrRestoreWorkload#compute_instance_target_environment}
  */
  readonly computeInstanceTargetEnvironment?: BackupDrRestoreWorkloadComputeInstanceTargetEnvironment;
  /**
  * disk_restore_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#disk_restore_properties BackupDrRestoreWorkload#disk_restore_properties}
  */
  readonly diskRestoreProperties?: BackupDrRestoreWorkloadDiskRestoreProperties;
  /**
  * disk_target_environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#disk_target_environment BackupDrRestoreWorkload#disk_target_environment}
  */
  readonly diskTargetEnvironment?: BackupDrRestoreWorkloadDiskTargetEnvironment;
  /**
  * region_disk_target_environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#region_disk_target_environment BackupDrRestoreWorkload#region_disk_target_environment}
  */
  readonly regionDiskTargetEnvironment?: BackupDrRestoreWorkloadRegionDiskTargetEnvironment;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#timeouts BackupDrRestoreWorkload#timeouts}
  */
  readonly timeouts?: BackupDrRestoreWorkloadTimeouts;
}
export interface BackupDrRestoreWorkloadTargetResourceGcpResource {
}

export function backupDrRestoreWorkloadTargetResourceGcpResourceToTerraform(struct?: BackupDrRestoreWorkloadTargetResourceGcpResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function backupDrRestoreWorkloadTargetResourceGcpResourceToHclTerraform(struct?: BackupDrRestoreWorkloadTargetResourceGcpResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BackupDrRestoreWorkloadTargetResourceGcpResourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupDrRestoreWorkloadTargetResourceGcpResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadTargetResourceGcpResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gcp_resourcename - computed: true, optional: false, required: false
  public get gcpResourcename() {
    return this.getStringAttribute('gcp_resourcename');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class BackupDrRestoreWorkloadTargetResourceGcpResourceList extends cdktn.ComplexList {

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
  public get(index: number): BackupDrRestoreWorkloadTargetResourceGcpResourceOutputReference {
    return new BackupDrRestoreWorkloadTargetResourceGcpResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupDrRestoreWorkloadTargetResource {
}

export function backupDrRestoreWorkloadTargetResourceToTerraform(struct?: BackupDrRestoreWorkloadTargetResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function backupDrRestoreWorkloadTargetResourceToHclTerraform(struct?: BackupDrRestoreWorkloadTargetResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BackupDrRestoreWorkloadTargetResourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupDrRestoreWorkloadTargetResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadTargetResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gcp_resource - computed: true, optional: false, required: false
  private _gcpResource = new BackupDrRestoreWorkloadTargetResourceGcpResourceList(this, "gcp_resource", false);
  public get gcpResource() {
    return this._gcpResource;
  }
}

export class BackupDrRestoreWorkloadTargetResourceList extends cdktn.ComplexList {

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
  public get(index: number): BackupDrRestoreWorkloadTargetResourceOutputReference {
    return new BackupDrRestoreWorkloadTargetResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeatures {
  /**
  * Optional. Whether to enable nested virtualization or not (default is false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#enable_nested_virtualization BackupDrRestoreWorkload#enable_nested_virtualization}
  */
  readonly enableNestedVirtualization?: boolean | cdktn.IResolvable;
  /**
  * Optional. Whether to enable UEFI networking for instance creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#enable_uefi_networking BackupDrRestoreWorkload#enable_uefi_networking}
  */
  readonly enableUefiNetworking?: boolean | cdktn.IResolvable;
  /**
  * Optional. The number of threads per physical core.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#threads_per_core BackupDrRestoreWorkload#threads_per_core}
  */
  readonly threadsPerCore?: number;
  /**
  * Optional. The number of physical cores to expose to an instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#visible_core_count BackupDrRestoreWorkload#visible_core_count}
  */
  readonly visibleCoreCount?: number;
}

export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeaturesToTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeaturesOutputReference | BackupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeatures): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_nested_virtualization: cdktn.booleanToTerraform(struct!.enableNestedVirtualization),
    enable_uefi_networking: cdktn.booleanToTerraform(struct!.enableUefiNetworking),
    threads_per_core: cdktn.numberToTerraform(struct!.threadsPerCore),
    visible_core_count: cdktn.numberToTerraform(struct!.visibleCoreCount),
  }
}


export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeaturesToHclTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeaturesOutputReference | BackupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeatures): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_nested_virtualization: {
      value: cdktn.booleanToHclTerraform(struct!.enableNestedVirtualization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_uefi_networking: {
      value: cdktn.booleanToHclTerraform(struct!.enableUefiNetworking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    threads_per_core: {
      value: cdktn.numberToHclTerraform(struct!.threadsPerCore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    visible_core_count: {
      value: cdktn.numberToHclTerraform(struct!.visibleCoreCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeaturesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableNestedVirtualization !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNestedVirtualization = this._enableNestedVirtualization;
    }
    if (this._enableUefiNetworking !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableUefiNetworking = this._enableUefiNetworking;
    }
    if (this._threadsPerCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadsPerCore = this._threadsPerCore;
    }
    if (this._visibleCoreCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibleCoreCount = this._visibleCoreCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableNestedVirtualization = undefined;
      this._enableUefiNetworking = undefined;
      this._threadsPerCore = undefined;
      this._visibleCoreCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableNestedVirtualization = value.enableNestedVirtualization;
      this._enableUefiNetworking = value.enableUefiNetworking;
      this._threadsPerCore = value.threadsPerCore;
      this._visibleCoreCount = value.visibleCoreCount;
    }
  }

  // enable_nested_virtualization - computed: false, optional: true, required: false
  private _enableNestedVirtualization?: boolean | cdktn.IResolvable; 
  public get enableNestedVirtualization() {
    return this.getBooleanAttribute('enable_nested_virtualization');
  }
  public set enableNestedVirtualization(value: boolean | cdktn.IResolvable) {
    this._enableNestedVirtualization = value;
  }
  public resetEnableNestedVirtualization() {
    this._enableNestedVirtualization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNestedVirtualizationInput() {
    return this._enableNestedVirtualization;
  }

  // enable_uefi_networking - computed: false, optional: true, required: false
  private _enableUefiNetworking?: boolean | cdktn.IResolvable; 
  public get enableUefiNetworking() {
    return this.getBooleanAttribute('enable_uefi_networking');
  }
  public set enableUefiNetworking(value: boolean | cdktn.IResolvable) {
    this._enableUefiNetworking = value;
  }
  public resetEnableUefiNetworking() {
    this._enableUefiNetworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUefiNetworkingInput() {
    return this._enableUefiNetworking;
  }

  // threads_per_core - computed: false, optional: true, required: false
  private _threadsPerCore?: number; 
  public get threadsPerCore() {
    return this.getNumberAttribute('threads_per_core');
  }
  public set threadsPerCore(value: number) {
    this._threadsPerCore = value;
  }
  public resetThreadsPerCore() {
    this._threadsPerCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadsPerCoreInput() {
    return this._threadsPerCore;
  }

  // visible_core_count - computed: false, optional: true, required: false
  private _visibleCoreCount?: number; 
  public get visibleCoreCount() {
    return this.getNumberAttribute('visible_core_count');
  }
  public set visibleCoreCount(value: number) {
    this._visibleCoreCount = value;
  }
  public resetVisibleCoreCount() {
    this._visibleCoreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleCoreCountInput() {
    return this._visibleCoreCount;
  }
}
export interface BackupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinity {
  /**
  *  Possible values: ["TYPE_UNSPECIFIED", "NO_RESERVATION", "ANY_RESERVATION", "SPECIFIC_RESERVATION"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#consume_allocation_type BackupDrRestoreWorkload#consume_allocation_type}
  */
  readonly consumeAllocationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#key BackupDrRestoreWorkload#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#values BackupDrRestoreWorkload#values}
  */
  readonly values?: string[];
}

export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinityToTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinityOutputReference | BackupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    consume_allocation_type: cdktn.stringToTerraform(struct!.consumeAllocationType),
    key: cdktn.stringToTerraform(struct!.key),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinityToHclTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinityOutputReference | BackupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    consume_allocation_type: {
      value: cdktn.stringToHclTerraform(struct!.consumeAllocationType),
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
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumeAllocationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumeAllocationType = this._consumeAllocationType;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumeAllocationType = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumeAllocationType = value.consumeAllocationType;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // consume_allocation_type - computed: false, optional: true, required: false
  private _consumeAllocationType?: string; 
  public get consumeAllocationType() {
    return this.getStringAttribute('consume_allocation_type');
  }
  public set consumeAllocationType(value: string) {
    this._consumeAllocationType = value;
  }
  public resetConsumeAllocationType() {
    this._consumeAllocationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumeAllocationTypeInput() {
    return this._consumeAllocationType;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface BackupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfig {
  /**
  * Optional. Defines whether the instance should have confidential compute enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#enable_confidential_compute BackupDrRestoreWorkload#enable_confidential_compute}
  */
  readonly enableConfidentialCompute?: boolean | cdktn.IResolvable;
}

export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfigToTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfigOutputReference | BackupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_confidential_compute: cdktn.booleanToTerraform(struct!.enableConfidentialCompute),
  }
}


export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfigToHclTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfigOutputReference | BackupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_confidential_compute: {
      value: cdktn.booleanToHclTerraform(struct!.enableConfidentialCompute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableConfidentialCompute !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConfidentialCompute = this._enableConfidentialCompute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableConfidentialCompute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableConfidentialCompute = value.enableConfidentialCompute;
    }
  }

  // enable_confidential_compute - computed: false, optional: true, required: false
  private _enableConfidentialCompute?: boolean | cdktn.IResolvable; 
  public get enableConfidentialCompute() {
    return this.getBooleanAttribute('enable_confidential_compute');
  }
  public set enableConfidentialCompute(value: boolean | cdktn.IResolvable) {
    this._enableConfidentialCompute = value;
  }
  public resetEnableConfidentialCompute() {
    this._enableConfidentialCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConfidentialComputeInput() {
    return this._enableConfidentialCompute;
  }
}
export interface BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKey {
  /**
  * Optional. The name of the encryption key that is stored in Google Cloud KMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#kms_key_name BackupDrRestoreWorkload#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * Optional. The service account being used for the encryption request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#kms_key_service_account BackupDrRestoreWorkload#kms_key_service_account}
  */
  readonly kmsKeyServiceAccount?: string;
  /**
  * Optional. Specifies a 256-bit customer-supplied encryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#raw_key BackupDrRestoreWorkload#raw_key}
  */
  readonly rawKey?: string;
  /**
  * Optional. RSA-wrapped 2048-bit customer-supplied encryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#rsa_encrypted_key BackupDrRestoreWorkload#rsa_encrypted_key}
  */
  readonly rsaEncryptedKey?: string;
}

export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKeyToTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKeyOutputReference | BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_name: cdktn.stringToTerraform(struct!.kmsKeyName),
    kms_key_service_account: cdktn.stringToTerraform(struct!.kmsKeyServiceAccount),
    raw_key: cdktn.stringToTerraform(struct!.rawKey),
    rsa_encrypted_key: cdktn.stringToTerraform(struct!.rsaEncryptedKey),
  }
}


export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKeyToHclTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKeyOutputReference | BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_name: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_service_account: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw_key: {
      value: cdktn.stringToHclTerraform(struct!.rawKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsa_encrypted_key: {
      value: cdktn.stringToHclTerraform(struct!.rsaEncryptedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    if (this._kmsKeyServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyServiceAccount = this._kmsKeyServiceAccount;
    }
    if (this._rawKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawKey = this._rawKey;
    }
    if (this._rsaEncryptedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaEncryptedKey = this._rsaEncryptedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
      this._kmsKeyServiceAccount = undefined;
      this._rawKey = undefined;
      this._rsaEncryptedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
      this._kmsKeyServiceAccount = value.kmsKeyServiceAccount;
      this._rawKey = value.rawKey;
      this._rsaEncryptedKey = value.rsaEncryptedKey;
    }
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }

  // kms_key_service_account - computed: false, optional: true, required: false
  private _kmsKeyServiceAccount?: string; 
  public get kmsKeyServiceAccount() {
    return this.getStringAttribute('kms_key_service_account');
  }
  public set kmsKeyServiceAccount(value: string) {
    this._kmsKeyServiceAccount = value;
  }
  public resetKmsKeyServiceAccount() {
    this._kmsKeyServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyServiceAccountInput() {
    return this._kmsKeyServiceAccount;
  }

  // raw_key - computed: false, optional: true, required: false
  private _rawKey?: string; 
  public get rawKey() {
    return this.getStringAttribute('raw_key');
  }
  public set rawKey(value: string) {
    this._rawKey = value;
  }
  public resetRawKey() {
    this._rawKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawKeyInput() {
    return this._rawKey;
  }

  // rsa_encrypted_key - computed: false, optional: true, required: false
  private _rsaEncryptedKey?: string; 
  public get rsaEncryptedKey() {
    return this.getStringAttribute('rsa_encrypted_key');
  }
  public set rsaEncryptedKey(value: string) {
    this._rsaEncryptedKey = value;
  }
  public resetRsaEncryptedKey() {
    this._rsaEncryptedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaEncryptedKeyInput() {
    return this._rsaEncryptedKey;
  }
}
export interface BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeature {
  /**
  * Optional. The ID of a supported feature. Possible values: ["FEATURE_TYPE_UNSPECIFIED", "VIRTIO_SCSI_MULTIQUEUE", "WINDOWS", "MULTI_IP_SUBNET", "UEFI_COMPATIBLE", "SECURE_BOOT", "GVNIC", "SEV_CAPABLE", "BARE_METAL_LINUX_COMPATIBLE", "SUSPEND_RESUME_COMPATIBLE", "SEV_LIVE_MIGRATABLE", "SEV_SNP_CAPABLE", "TDX_CAPABLE", "IDPF", "SEV_LIVE_MIGRATABLE_V2"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#type BackupDrRestoreWorkload#type}
  */
  readonly type?: string;
}

export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeatureToTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeature | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeatureToHclTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeature | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeatureOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeature | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeature | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
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

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeatureList extends cdktn.ComplexList {
  public internalValue? : BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeature[] | cdktn.IResolvable

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
  public get(index: number): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeatureOutputReference {
    return new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeatureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParams {
  /**
  * Optional. Specifies the disk name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#disk_name BackupDrRestoreWorkload#disk_name}
  */
  readonly diskName?: string;
  /**
  * Optional. URL of the zone where the disk should be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#replica_zones BackupDrRestoreWorkload#replica_zones}
  */
  readonly replicaZones?: string[];
}

export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParamsToTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParamsOutputReference | BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disk_name: cdktn.stringToTerraform(struct!.diskName),
    replica_zones: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.replicaZones),
  }
}


export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParamsToHclTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParamsOutputReference | BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disk_name: {
      value: cdktn.stringToHclTerraform(struct!.diskName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_zones: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.replicaZones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskName !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskName = this._diskName;
    }
    if (this._replicaZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaZones = this._replicaZones;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskName = undefined;
      this._replicaZones = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskName = value.diskName;
      this._replicaZones = value.replicaZones;
    }
  }

  // disk_name - computed: false, optional: true, required: false
  private _diskName?: string; 
  public get diskName() {
    return this.getStringAttribute('disk_name');
  }
  public set diskName(value: string) {
    this._diskName = value;
  }
  public resetDiskName() {
    this._diskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskNameInput() {
    return this._diskName;
  }

  // replica_zones - computed: false, optional: true, required: false
  private _replicaZones?: string[]; 
  public get replicaZones() {
    return this.getListAttribute('replica_zones');
  }
  public set replicaZones(value: string[]) {
    this._replicaZones = value;
  }
  public resetReplicaZones() {
    this._replicaZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaZonesInput() {
    return this._replicaZones;
  }
}
export interface BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisks {
  /**
  * Optional. Specifies whether the disk will be auto-deleted when the instance is deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#auto_delete BackupDrRestoreWorkload#auto_delete}
  */
  readonly autoDelete?: boolean | cdktn.IResolvable;
  /**
  * Optional. Indicates that this is a boot disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#boot BackupDrRestoreWorkload#boot}
  */
  readonly boot?: boolean | cdktn.IResolvable;
  /**
  * Optional. This is used as an identifier for the disks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#device_name BackupDrRestoreWorkload#device_name}
  */
  readonly deviceName?: string;
  /**
  * Optional. Specifies the disk interface to use for attaching this disk. Possible values: ["DISK_INTERFACE_UNSPECIFIED", "SCSI", "NVME", "NVDIMM", "ISCSI"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#disk_interface BackupDrRestoreWorkload#disk_interface}
  */
  readonly diskInterface?: string;
  /**
  * Optional. The size of the disk in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#disk_size_gb BackupDrRestoreWorkload#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Output only. The URI of the disk type resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#disk_type BackupDrRestoreWorkload#disk_type}
  */
  readonly diskType?: string;
  /**
  * Optional. A zero-based index to this disk, where 0 is reserved for the boot disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#index BackupDrRestoreWorkload#index}
  */
  readonly index?: number;
  /**
  * Optional. Type of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#kind BackupDrRestoreWorkload#kind}
  */
  readonly kind?: string;
  /**
  * Optional. Any valid publicly visible licenses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#license BackupDrRestoreWorkload#license}
  */
  readonly license?: string[];
  /**
  * Optional. The mode in which to attach this disk. Possible values: ["DISK_MODE_UNSPECIFIED", "READ_WRITE", "READ_ONLY", "LOCKED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#mode BackupDrRestoreWorkload#mode}
  */
  readonly mode?: string;
  /**
  * Optional. Specifies the saved state of the disk. Possible values: ["DISK_SAVED_STATE_UNSPECIFIED", "PRESERVED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#saved_state BackupDrRestoreWorkload#saved_state}
  */
  readonly savedState?: string;
  /**
  * Optional. Specifies a valid partial or full URL to an existing Persistent Disk resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#source BackupDrRestoreWorkload#source}
  */
  readonly source?: string;
  /**
  * Optional. Specifies the type of the disk. Possible values: ["DISK_TYPE_UNSPECIFIED", "SCRATCH", "PERSISTENT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#type BackupDrRestoreWorkload#type}
  */
  readonly type?: string;
  /**
  * disk_encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#disk_encryption_key BackupDrRestoreWorkload#disk_encryption_key}
  */
  readonly diskEncryptionKey?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKey;
  /**
  * guest_os_feature block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#guest_os_feature BackupDrRestoreWorkload#guest_os_feature}
  */
  readonly guestOsFeature?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeature[] | cdktn.IResolvable;
  /**
  * initialize_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#initialize_params BackupDrRestoreWorkload#initialize_params}
  */
  readonly initializeParams?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParams;
}

export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksToTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_delete: cdktn.booleanToTerraform(struct!.autoDelete),
    boot: cdktn.booleanToTerraform(struct!.boot),
    device_name: cdktn.stringToTerraform(struct!.deviceName),
    disk_interface: cdktn.stringToTerraform(struct!.diskInterface),
    disk_size_gb: cdktn.numberToTerraform(struct!.diskSizeGb),
    disk_type: cdktn.stringToTerraform(struct!.diskType),
    index: cdktn.numberToTerraform(struct!.index),
    kind: cdktn.stringToTerraform(struct!.kind),
    license: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.license),
    mode: cdktn.stringToTerraform(struct!.mode),
    saved_state: cdktn.stringToTerraform(struct!.savedState),
    source: cdktn.stringToTerraform(struct!.source),
    type: cdktn.stringToTerraform(struct!.type),
    disk_encryption_key: backupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKeyToTerraform(struct!.diskEncryptionKey),
    guest_os_feature: cdktn.listMapper(backupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeatureToTerraform, true)(struct!.guestOsFeature),
    initialize_params: backupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParamsToTerraform(struct!.initializeParams),
  }
}


export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksToHclTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_delete: {
      value: cdktn.booleanToHclTerraform(struct!.autoDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    boot: {
      value: cdktn.booleanToHclTerraform(struct!.boot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device_name: {
      value: cdktn.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_interface: {
      value: cdktn.stringToHclTerraform(struct!.diskInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size_gb: {
      value: cdktn.numberToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktn.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktn.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kind: {
      value: cdktn.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.license),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    saved_state: {
      value: cdktn.stringToHclTerraform(struct!.savedState),
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
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_encryption_key: {
      value: backupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKeyToHclTerraform(struct!.diskEncryptionKey),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKeyList",
    },
    guest_os_feature: {
      value: cdktn.listMapperHcl(backupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeatureToHclTerraform, true)(struct!.guestOsFeature),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeatureList",
    },
    initialize_params: {
      value: backupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParamsToHclTerraform(struct!.initializeParams),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDelete = this._autoDelete;
    }
    if (this._boot !== undefined) {
      hasAnyValues = true;
      internalValueResult.boot = this._boot;
    }
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._diskInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskInterface = this._diskInterface;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._license !== undefined) {
      hasAnyValues = true;
      internalValueResult.license = this._license;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._savedState !== undefined) {
      hasAnyValues = true;
      internalValueResult.savedState = this._savedState;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._diskEncryptionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionKey = this._diskEncryptionKey?.internalValue;
    }
    if (this._guestOsFeature?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestOsFeature = this._guestOsFeature?.internalValue;
    }
    if (this._initializeParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initializeParams = this._initializeParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoDelete = undefined;
      this._boot = undefined;
      this._deviceName = undefined;
      this._diskInterface = undefined;
      this._diskSizeGb = undefined;
      this._diskType = undefined;
      this._index = undefined;
      this._kind = undefined;
      this._license = undefined;
      this._mode = undefined;
      this._savedState = undefined;
      this._source = undefined;
      this._type = undefined;
      this._diskEncryptionKey.internalValue = undefined;
      this._guestOsFeature.internalValue = undefined;
      this._initializeParams.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoDelete = value.autoDelete;
      this._boot = value.boot;
      this._deviceName = value.deviceName;
      this._diskInterface = value.diskInterface;
      this._diskSizeGb = value.diskSizeGb;
      this._diskType = value.diskType;
      this._index = value.index;
      this._kind = value.kind;
      this._license = value.license;
      this._mode = value.mode;
      this._savedState = value.savedState;
      this._source = value.source;
      this._type = value.type;
      this._diskEncryptionKey.internalValue = value.diskEncryptionKey;
      this._guestOsFeature.internalValue = value.guestOsFeature;
      this._initializeParams.internalValue = value.initializeParams;
    }
  }

  // auto_delete - computed: false, optional: true, required: false
  private _autoDelete?: boolean | cdktn.IResolvable; 
  public get autoDelete() {
    return this.getBooleanAttribute('auto_delete');
  }
  public set autoDelete(value: boolean | cdktn.IResolvable) {
    this._autoDelete = value;
  }
  public resetAutoDelete() {
    this._autoDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteInput() {
    return this._autoDelete;
  }

  // boot - computed: false, optional: true, required: false
  private _boot?: boolean | cdktn.IResolvable; 
  public get boot() {
    return this.getBooleanAttribute('boot');
  }
  public set boot(value: boolean | cdktn.IResolvable) {
    this._boot = value;
  }
  public resetBoot() {
    this._boot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootInput() {
    return this._boot;
  }

  // device_name - computed: false, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // disk_interface - computed: false, optional: true, required: false
  private _diskInterface?: string; 
  public get diskInterface() {
    return this.getStringAttribute('disk_interface');
  }
  public set diskInterface(value: string) {
    this._diskInterface = value;
  }
  public resetDiskInterface() {
    this._diskInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInterfaceInput() {
    return this._diskInterface;
  }

  // disk_size_gb - computed: false, optional: true, required: false
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // index - computed: false, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // license - computed: false, optional: true, required: false
  private _license?: string[]; 
  public get license() {
    return this.getListAttribute('license');
  }
  public set license(value: string[]) {
    this._license = value;
  }
  public resetLicense() {
    this._license = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license;
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

  // saved_state - computed: false, optional: true, required: false
  private _savedState?: string; 
  public get savedState() {
    return this.getStringAttribute('saved_state');
  }
  public set savedState(value: string) {
    this._savedState = value;
  }
  public resetSavedState() {
    this._savedState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savedStateInput() {
    return this._savedState;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
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

  // disk_encryption_key - computed: false, optional: true, required: false
  private _diskEncryptionKey = new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKeyOutputReference(this, "disk_encryption_key");
  public get diskEncryptionKey() {
    return this._diskEncryptionKey;
  }
  public putDiskEncryptionKey(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKey) {
    this._diskEncryptionKey.internalValue = value;
  }
  public resetDiskEncryptionKey() {
    this._diskEncryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionKeyInput() {
    return this._diskEncryptionKey.internalValue;
  }

  // guest_os_feature - computed: false, optional: true, required: false
  private _guestOsFeature = new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeatureList(this, "guest_os_feature", false);
  public get guestOsFeature() {
    return this._guestOsFeature;
  }
  public putGuestOsFeature(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeature[] | cdktn.IResolvable) {
    this._guestOsFeature.internalValue = value;
  }
  public resetGuestOsFeature() {
    this._guestOsFeature.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestOsFeatureInput() {
    return this._guestOsFeature.internalValue;
  }

  // initialize_params - computed: false, optional: true, required: false
  private _initializeParams = new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParamsOutputReference(this, "initialize_params");
  public get initializeParams() {
    return this._initializeParams;
  }
  public putInitializeParams(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParams) {
    this._initializeParams.internalValue = value;
  }
  public resetInitializeParams() {
    this._initializeParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializeParamsInput() {
    return this._initializeParams.internalValue;
  }
}

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksList extends cdktn.ComplexList {
  public internalValue? : BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisks[] | cdktn.IResolvable

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
  public get(index: number): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksOutputReference {
    return new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDevice {
  /**
  * Optional. Enables display for the Compute Engine VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#enable_display BackupDrRestoreWorkload#enable_display}
  */
  readonly enableDisplay?: boolean | cdktn.IResolvable;
}

export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDeviceToTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDeviceOutputReference | BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDevice): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_display: cdktn.booleanToTerraform(struct!.enableDisplay),
  }
}


export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDeviceToHclTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDeviceOutputReference | BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDevice): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_display: {
      value: cdktn.booleanToHclTerraform(struct!.enableDisplay),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDeviceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableDisplay !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDisplay = this._enableDisplay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableDisplay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableDisplay = value.enableDisplay;
    }
  }

  // enable_display - computed: false, optional: true, required: false
  private _enableDisplay?: boolean | cdktn.IResolvable; 
  public get enableDisplay() {
    return this.getBooleanAttribute('enable_display');
  }
  public set enableDisplay(value: boolean | cdktn.IResolvable) {
    this._enableDisplay = value;
  }
  public resetEnableDisplay() {
    this._enableDisplay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDisplayInput() {
    return this._enableDisplay;
  }
}
export interface BackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAccelerators {
  /**
  * Optional. The number of the guest accelerator cards exposed to this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#accelerator_count BackupDrRestoreWorkload#accelerator_count}
  */
  readonly acceleratorCount?: number;
  /**
  * Optional. Full or partial URL of the accelerator type resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#accelerator_type BackupDrRestoreWorkload#accelerator_type}
  */
  readonly acceleratorType?: string;
}

export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAcceleratorsToTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAccelerators | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accelerator_count: cdktn.numberToTerraform(struct!.acceleratorCount),
    accelerator_type: cdktn.stringToTerraform(struct!.acceleratorType),
  }
}


export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAcceleratorsToHclTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAccelerators | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accelerator_count: {
      value: cdktn.numberToHclTerraform(struct!.acceleratorCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accelerator_type: {
      value: cdktn.stringToHclTerraform(struct!.acceleratorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAcceleratorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAccelerators | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratorCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorCount = this._acceleratorCount;
    }
    if (this._acceleratorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorType = this._acceleratorType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAccelerators | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceleratorCount = undefined;
      this._acceleratorType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceleratorCount = value.acceleratorCount;
      this._acceleratorType = value.acceleratorType;
    }
  }

  // accelerator_count - computed: false, optional: true, required: false
  private _acceleratorCount?: number; 
  public get acceleratorCount() {
    return this.getNumberAttribute('accelerator_count');
  }
  public set acceleratorCount(value: number) {
    this._acceleratorCount = value;
  }
  public resetAcceleratorCount() {
    this._acceleratorCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorCountInput() {
    return this._acceleratorCount;
  }

  // accelerator_type - computed: false, optional: true, required: false
  private _acceleratorType?: string; 
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }
  public set acceleratorType(value: string) {
    this._acceleratorType = value;
  }
  public resetAcceleratorType() {
    this._acceleratorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTypeInput() {
    return this._acceleratorType;
  }
}

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAcceleratorsList extends cdktn.ComplexList {
  public internalValue? : BackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAccelerators[] | cdktn.IResolvable

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
  public get(index: number): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAcceleratorsOutputReference {
    return new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAcceleratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#kms_key_name BackupDrRestoreWorkload#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#kms_key_service_account BackupDrRestoreWorkload#kms_key_service_account}
  */
  readonly kmsKeyServiceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#raw_key BackupDrRestoreWorkload#raw_key}
  */
  readonly rawKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#rsa_encrypted_key BackupDrRestoreWorkload#rsa_encrypted_key}
  */
  readonly rsaEncryptedKey?: string;
}

export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKeyToTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKeyOutputReference | BackupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_name: cdktn.stringToTerraform(struct!.kmsKeyName),
    kms_key_service_account: cdktn.stringToTerraform(struct!.kmsKeyServiceAccount),
    raw_key: cdktn.stringToTerraform(struct!.rawKey),
    rsa_encrypted_key: cdktn.stringToTerraform(struct!.rsaEncryptedKey),
  }
}


export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKeyToHclTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKeyOutputReference | BackupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_name: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_service_account: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw_key: {
      value: cdktn.stringToHclTerraform(struct!.rawKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsa_encrypted_key: {
      value: cdktn.stringToHclTerraform(struct!.rsaEncryptedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    if (this._kmsKeyServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyServiceAccount = this._kmsKeyServiceAccount;
    }
    if (this._rawKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawKey = this._rawKey;
    }
    if (this._rsaEncryptedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaEncryptedKey = this._rsaEncryptedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
      this._kmsKeyServiceAccount = undefined;
      this._rawKey = undefined;
      this._rsaEncryptedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
      this._kmsKeyServiceAccount = value.kmsKeyServiceAccount;
      this._rawKey = value.rawKey;
      this._rsaEncryptedKey = value.rsaEncryptedKey;
    }
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }

  // kms_key_service_account - computed: false, optional: true, required: false
  private _kmsKeyServiceAccount?: string; 
  public get kmsKeyServiceAccount() {
    return this.getStringAttribute('kms_key_service_account');
  }
  public set kmsKeyServiceAccount(value: string) {
    this._kmsKeyServiceAccount = value;
  }
  public resetKmsKeyServiceAccount() {
    this._kmsKeyServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyServiceAccountInput() {
    return this._kmsKeyServiceAccount;
  }

  // raw_key - computed: false, optional: true, required: false
  private _rawKey?: string; 
  public get rawKey() {
    return this.getStringAttribute('raw_key');
  }
  public set rawKey(value: string) {
    this._rawKey = value;
  }
  public resetRawKey() {
    this._rawKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawKeyInput() {
    return this._rawKey;
  }

  // rsa_encrypted_key - computed: false, optional: true, required: false
  private _rsaEncryptedKey?: string; 
  public get rsaEncryptedKey() {
    return this.getStringAttribute('rsa_encrypted_key');
  }
  public set rsaEncryptedKey(value: string) {
    this._rsaEncryptedKey = value;
  }
  public resetRsaEncryptedKey() {
    this._rsaEncryptedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaEncryptedKeyInput() {
    return this._rsaEncryptedKey;
  }
}
export interface BackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#key BackupDrRestoreWorkload#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#value BackupDrRestoreWorkload#value}
  */
  readonly value?: string;
}

export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesLabelsToTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesLabelsToHclTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabelsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabels | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabels | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
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

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabelsList extends cdktn.ComplexList {
  public internalValue? : BackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabels[] | cdktn.IResolvable

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
  public get(index: number): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabelsOutputReference {
    return new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#key BackupDrRestoreWorkload#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#value BackupDrRestoreWorkload#value}
  */
  readonly value?: string;
}

export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItemsToTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItems | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItemsToHclTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItems | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItemsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItems | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItems | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._key = value.key;
      this._value = value.value;
    }
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

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItemsList extends cdktn.ComplexList {
  public internalValue? : BackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItems[] | cdktn.IResolvable

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
  public get(index: number): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItemsOutputReference {
    return new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadata {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#items BackupDrRestoreWorkload#items}
  */
  readonly items?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItems[] | cdktn.IResolvable;
}

export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataToTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataOutputReference | BackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    items: cdktn.listMapper(backupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItemsToTerraform, true)(struct!.items),
  }
}


export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataToHclTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataOutputReference | BackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    items: {
      value: cdktn.listMapperHcl(backupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItems[] | cdktn.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#external_ip BackupDrRestoreWorkload#external_ip}
  */
  readonly externalIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#external_ipv6 BackupDrRestoreWorkload#external_ipv6}
  */
  readonly externalIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#external_ipv6_prefix_length BackupDrRestoreWorkload#external_ipv6_prefix_length}
  */
  readonly externalIpv6PrefixLength?: number;
  /**
  * Optional. The name of this access configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#name BackupDrRestoreWorkload#name}
  */
  readonly name?: string;
  /**
  *  Possible values: ["NETWORK_TIER_UNSPECIFIED", "PREMIUM", "STANDARD"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#network_tier BackupDrRestoreWorkload#network_tier}
  */
  readonly networkTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#public_ptr_domain_name BackupDrRestoreWorkload#public_ptr_domain_name}
  */
  readonly publicPtrDomainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#set_public_ptr BackupDrRestoreWorkload#set_public_ptr}
  */
  readonly setPublicPtr?: boolean | cdktn.IResolvable;
  /**
  * Optional. The type of configuration. Possible values: ["ACCESS_TYPE_UNSPECIFIED", "ONE_TO_ONE_NAT", "DIRECT_IPV6"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#type BackupDrRestoreWorkload#type}
  */
  readonly type?: string;
}

export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigsToTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    external_ip: cdktn.stringToTerraform(struct!.externalIp),
    external_ipv6: cdktn.stringToTerraform(struct!.externalIpv6),
    external_ipv6_prefix_length: cdktn.numberToTerraform(struct!.externalIpv6PrefixLength),
    name: cdktn.stringToTerraform(struct!.name),
    network_tier: cdktn.stringToTerraform(struct!.networkTier),
    public_ptr_domain_name: cdktn.stringToTerraform(struct!.publicPtrDomainName),
    set_public_ptr: cdktn.booleanToTerraform(struct!.setPublicPtr),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigsToHclTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    external_ip: {
      value: cdktn.stringToHclTerraform(struct!.externalIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_ipv6: {
      value: cdktn.stringToHclTerraform(struct!.externalIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_ipv6_prefix_length: {
      value: cdktn.numberToHclTerraform(struct!.externalIpv6PrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_tier: {
      value: cdktn.stringToHclTerraform(struct!.networkTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ptr_domain_name: {
      value: cdktn.stringToHclTerraform(struct!.publicPtrDomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_public_ptr: {
      value: cdktn.booleanToHclTerraform(struct!.setPublicPtr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIp = this._externalIp;
    }
    if (this._externalIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIpv6 = this._externalIpv6;
    }
    if (this._externalIpv6PrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIpv6PrefixLength = this._externalIpv6PrefixLength;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkTier = this._networkTier;
    }
    if (this._publicPtrDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicPtrDomainName = this._publicPtrDomainName;
    }
    if (this._setPublicPtr !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPublicPtr = this._setPublicPtr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalIp = undefined;
      this._externalIpv6 = undefined;
      this._externalIpv6PrefixLength = undefined;
      this._name = undefined;
      this._networkTier = undefined;
      this._publicPtrDomainName = undefined;
      this._setPublicPtr = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalIp = value.externalIp;
      this._externalIpv6 = value.externalIpv6;
      this._externalIpv6PrefixLength = value.externalIpv6PrefixLength;
      this._name = value.name;
      this._networkTier = value.networkTier;
      this._publicPtrDomainName = value.publicPtrDomainName;
      this._setPublicPtr = value.setPublicPtr;
      this._type = value.type;
    }
  }

  // external_ip - computed: false, optional: true, required: false
  private _externalIp?: string; 
  public get externalIp() {
    return this.getStringAttribute('external_ip');
  }
  public set externalIp(value: string) {
    this._externalIp = value;
  }
  public resetExternalIp() {
    this._externalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpInput() {
    return this._externalIp;
  }

  // external_ipv6 - computed: false, optional: true, required: false
  private _externalIpv6?: string; 
  public get externalIpv6() {
    return this.getStringAttribute('external_ipv6');
  }
  public set externalIpv6(value: string) {
    this._externalIpv6 = value;
  }
  public resetExternalIpv6() {
    this._externalIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpv6Input() {
    return this._externalIpv6;
  }

  // external_ipv6_prefix_length - computed: false, optional: true, required: false
  private _externalIpv6PrefixLength?: number; 
  public get externalIpv6PrefixLength() {
    return this.getNumberAttribute('external_ipv6_prefix_length');
  }
  public set externalIpv6PrefixLength(value: number) {
    this._externalIpv6PrefixLength = value;
  }
  public resetExternalIpv6PrefixLength() {
    this._externalIpv6PrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpv6PrefixLengthInput() {
    return this._externalIpv6PrefixLength;
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

  // network_tier - computed: false, optional: true, required: false
  private _networkTier?: string; 
  public get networkTier() {
    return this.getStringAttribute('network_tier');
  }
  public set networkTier(value: string) {
    this._networkTier = value;
  }
  public resetNetworkTier() {
    this._networkTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTierInput() {
    return this._networkTier;
  }

  // public_ptr_domain_name - computed: false, optional: true, required: false
  private _publicPtrDomainName?: string; 
  public get publicPtrDomainName() {
    return this.getStringAttribute('public_ptr_domain_name');
  }
  public set publicPtrDomainName(value: string) {
    this._publicPtrDomainName = value;
  }
  public resetPublicPtrDomainName() {
    this._publicPtrDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicPtrDomainNameInput() {
    return this._publicPtrDomainName;
  }

  // set_public_ptr - computed: false, optional: true, required: false
  private _setPublicPtr?: boolean | cdktn.IResolvable; 
  public get setPublicPtr() {
    return this.getBooleanAttribute('set_public_ptr');
  }
  public set setPublicPtr(value: boolean | cdktn.IResolvable) {
    this._setPublicPtr = value;
  }
  public resetSetPublicPtr() {
    this._setPublicPtr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPublicPtrInput() {
    return this._setPublicPtr;
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

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigsList extends cdktn.ComplexList {
  public internalValue? : BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigs[] | cdktn.IResolvable

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
  public get(index: number): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigsOutputReference {
    return new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#ip_cidr_range BackupDrRestoreWorkload#ip_cidr_range}
  */
  readonly ipCidrRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#subnetwork_range_name BackupDrRestoreWorkload#subnetwork_range_name}
  */
  readonly subnetworkRangeName?: string;
}

export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRangesToTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ip_cidr_range: cdktn.stringToTerraform(struct!.ipCidrRange),
    subnetwork_range_name: cdktn.stringToTerraform(struct!.subnetworkRangeName),
  }
}


export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRangesToHclTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ip_cidr_range: {
      value: cdktn.stringToHclTerraform(struct!.ipCidrRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnetwork_range_name: {
      value: cdktn.stringToHclTerraform(struct!.subnetworkRangeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRanges | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipCidrRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipCidrRange = this._ipCidrRange;
    }
    if (this._subnetworkRangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetworkRangeName = this._subnetworkRangeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRanges | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipCidrRange = undefined;
      this._subnetworkRangeName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipCidrRange = value.ipCidrRange;
      this._subnetworkRangeName = value.subnetworkRangeName;
    }
  }

  // ip_cidr_range - computed: false, optional: true, required: false
  private _ipCidrRange?: string; 
  public get ipCidrRange() {
    return this.getStringAttribute('ip_cidr_range');
  }
  public set ipCidrRange(value: string) {
    this._ipCidrRange = value;
  }
  public resetIpCidrRange() {
    this._ipCidrRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCidrRangeInput() {
    return this._ipCidrRange;
  }

  // subnetwork_range_name - computed: false, optional: true, required: false
  private _subnetworkRangeName?: string; 
  public get subnetworkRangeName() {
    return this.getStringAttribute('subnetwork_range_name');
  }
  public set subnetworkRangeName(value: string) {
    this._subnetworkRangeName = value;
  }
  public resetSubnetworkRangeName() {
    this._subnetworkRangeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkRangeNameInput() {
    return this._subnetworkRangeName;
  }
}

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRangesList extends cdktn.ComplexList {
  public internalValue? : BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRanges[] | cdktn.IResolvable

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
  public get(index: number): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRangesOutputReference {
    return new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#external_ip BackupDrRestoreWorkload#external_ip}
  */
  readonly externalIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#external_ipv6 BackupDrRestoreWorkload#external_ipv6}
  */
  readonly externalIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#external_ipv6_prefix_length BackupDrRestoreWorkload#external_ipv6_prefix_length}
  */
  readonly externalIpv6PrefixLength?: number;
  /**
  * Optional. The name of this access configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#name BackupDrRestoreWorkload#name}
  */
  readonly name?: string;
  /**
  *  Possible values: ["NETWORK_TIER_UNSPECIFIED", "PREMIUM", "STANDARD"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#network_tier BackupDrRestoreWorkload#network_tier}
  */
  readonly networkTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#public_ptr_domain_name BackupDrRestoreWorkload#public_ptr_domain_name}
  */
  readonly publicPtrDomainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#set_public_ptr BackupDrRestoreWorkload#set_public_ptr}
  */
  readonly setPublicPtr?: boolean | cdktn.IResolvable;
  /**
  * Optional. The type of configuration. Possible values: ["ACCESS_TYPE_UNSPECIFIED", "ONE_TO_ONE_NAT", "DIRECT_IPV6"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#type BackupDrRestoreWorkload#type}
  */
  readonly type?: string;
}

export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigsToTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    external_ip: cdktn.stringToTerraform(struct!.externalIp),
    external_ipv6: cdktn.stringToTerraform(struct!.externalIpv6),
    external_ipv6_prefix_length: cdktn.numberToTerraform(struct!.externalIpv6PrefixLength),
    name: cdktn.stringToTerraform(struct!.name),
    network_tier: cdktn.stringToTerraform(struct!.networkTier),
    public_ptr_domain_name: cdktn.stringToTerraform(struct!.publicPtrDomainName),
    set_public_ptr: cdktn.booleanToTerraform(struct!.setPublicPtr),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigsToHclTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    external_ip: {
      value: cdktn.stringToHclTerraform(struct!.externalIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_ipv6: {
      value: cdktn.stringToHclTerraform(struct!.externalIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_ipv6_prefix_length: {
      value: cdktn.numberToHclTerraform(struct!.externalIpv6PrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_tier: {
      value: cdktn.stringToHclTerraform(struct!.networkTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ptr_domain_name: {
      value: cdktn.stringToHclTerraform(struct!.publicPtrDomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_public_ptr: {
      value: cdktn.booleanToHclTerraform(struct!.setPublicPtr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIp = this._externalIp;
    }
    if (this._externalIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIpv6 = this._externalIpv6;
    }
    if (this._externalIpv6PrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIpv6PrefixLength = this._externalIpv6PrefixLength;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkTier = this._networkTier;
    }
    if (this._publicPtrDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicPtrDomainName = this._publicPtrDomainName;
    }
    if (this._setPublicPtr !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPublicPtr = this._setPublicPtr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalIp = undefined;
      this._externalIpv6 = undefined;
      this._externalIpv6PrefixLength = undefined;
      this._name = undefined;
      this._networkTier = undefined;
      this._publicPtrDomainName = undefined;
      this._setPublicPtr = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalIp = value.externalIp;
      this._externalIpv6 = value.externalIpv6;
      this._externalIpv6PrefixLength = value.externalIpv6PrefixLength;
      this._name = value.name;
      this._networkTier = value.networkTier;
      this._publicPtrDomainName = value.publicPtrDomainName;
      this._setPublicPtr = value.setPublicPtr;
      this._type = value.type;
    }
  }

  // external_ip - computed: false, optional: true, required: false
  private _externalIp?: string; 
  public get externalIp() {
    return this.getStringAttribute('external_ip');
  }
  public set externalIp(value: string) {
    this._externalIp = value;
  }
  public resetExternalIp() {
    this._externalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpInput() {
    return this._externalIp;
  }

  // external_ipv6 - computed: false, optional: true, required: false
  private _externalIpv6?: string; 
  public get externalIpv6() {
    return this.getStringAttribute('external_ipv6');
  }
  public set externalIpv6(value: string) {
    this._externalIpv6 = value;
  }
  public resetExternalIpv6() {
    this._externalIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpv6Input() {
    return this._externalIpv6;
  }

  // external_ipv6_prefix_length - computed: false, optional: true, required: false
  private _externalIpv6PrefixLength?: number; 
  public get externalIpv6PrefixLength() {
    return this.getNumberAttribute('external_ipv6_prefix_length');
  }
  public set externalIpv6PrefixLength(value: number) {
    this._externalIpv6PrefixLength = value;
  }
  public resetExternalIpv6PrefixLength() {
    this._externalIpv6PrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpv6PrefixLengthInput() {
    return this._externalIpv6PrefixLength;
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

  // network_tier - computed: false, optional: true, required: false
  private _networkTier?: string; 
  public get networkTier() {
    return this.getStringAttribute('network_tier');
  }
  public set networkTier(value: string) {
    this._networkTier = value;
  }
  public resetNetworkTier() {
    this._networkTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTierInput() {
    return this._networkTier;
  }

  // public_ptr_domain_name - computed: false, optional: true, required: false
  private _publicPtrDomainName?: string; 
  public get publicPtrDomainName() {
    return this.getStringAttribute('public_ptr_domain_name');
  }
  public set publicPtrDomainName(value: string) {
    this._publicPtrDomainName = value;
  }
  public resetPublicPtrDomainName() {
    this._publicPtrDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicPtrDomainNameInput() {
    return this._publicPtrDomainName;
  }

  // set_public_ptr - computed: false, optional: true, required: false
  private _setPublicPtr?: boolean | cdktn.IResolvable; 
  public get setPublicPtr() {
    return this.getBooleanAttribute('set_public_ptr');
  }
  public set setPublicPtr(value: boolean | cdktn.IResolvable) {
    this._setPublicPtr = value;
  }
  public resetSetPublicPtr() {
    this._setPublicPtr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPublicPtrInput() {
    return this._setPublicPtr;
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

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigsList extends cdktn.ComplexList {
  public internalValue? : BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigs[] | cdktn.IResolvable

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
  public get(index: number): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigsOutputReference {
    return new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfaces {
  /**
  * Optional. The prefix length of the primary internal IPv6 range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#internal_ipv6_prefix_length BackupDrRestoreWorkload#internal_ipv6_prefix_length}
  */
  readonly internalIpv6PrefixLength?: number;
  /**
  * Optional. An IPv4 internal IP address to assign to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#ip_address BackupDrRestoreWorkload#ip_address}
  */
  readonly ipAddress?: string;
  /**
  *  Possible values: ["UNSPECIFIED_IPV6_ACCESS_TYPE", "INTERNAL", "EXTERNAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#ipv6_access_type BackupDrRestoreWorkload#ipv6_access_type}
  */
  readonly ipv6AccessType?: string;
  /**
  * Optional. An IPv6 internal network address for this network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#ipv6_address BackupDrRestoreWorkload#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Optional. URL of the VPC network resource for this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#network BackupDrRestoreWorkload#network}
  */
  readonly network?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#network_attachment BackupDrRestoreWorkload#network_attachment}
  */
  readonly networkAttachment?: string;
  /**
  *  Possible values: ["NIC_TYPE_UNSPECIFIED", "VIRTIO_NET", "GVNIC"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#nic_type BackupDrRestoreWorkload#nic_type}
  */
  readonly nicType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#queue_count BackupDrRestoreWorkload#queue_count}
  */
  readonly queueCount?: number;
  /**
  *  Possible values: ["STACK_TYPE_UNSPECIFIED", "IPV4_ONLY", "IPV4_IPV6"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#stack_type BackupDrRestoreWorkload#stack_type}
  */
  readonly stackType?: string;
  /**
  * Optional. The URL of the Subnetwork resource for this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#subnetwork BackupDrRestoreWorkload#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * access_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#access_configs BackupDrRestoreWorkload#access_configs}
  */
  readonly accessConfigs?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigs[] | cdktn.IResolvable;
  /**
  * alias_ip_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#alias_ip_ranges BackupDrRestoreWorkload#alias_ip_ranges}
  */
  readonly aliasIpRanges?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRanges[] | cdktn.IResolvable;
  /**
  * ipv6_access_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#ipv6_access_configs BackupDrRestoreWorkload#ipv6_access_configs}
  */
  readonly ipv6AccessConfigs?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigs[] | cdktn.IResolvable;
}

export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesToTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfaces | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    internal_ipv6_prefix_length: cdktn.numberToTerraform(struct!.internalIpv6PrefixLength),
    ip_address: cdktn.stringToTerraform(struct!.ipAddress),
    ipv6_access_type: cdktn.stringToTerraform(struct!.ipv6AccessType),
    ipv6_address: cdktn.stringToTerraform(struct!.ipv6Address),
    network: cdktn.stringToTerraform(struct!.network),
    network_attachment: cdktn.stringToTerraform(struct!.networkAttachment),
    nic_type: cdktn.stringToTerraform(struct!.nicType),
    queue_count: cdktn.numberToTerraform(struct!.queueCount),
    stack_type: cdktn.stringToTerraform(struct!.stackType),
    subnetwork: cdktn.stringToTerraform(struct!.subnetwork),
    access_configs: cdktn.listMapper(backupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigsToTerraform, true)(struct!.accessConfigs),
    alias_ip_ranges: cdktn.listMapper(backupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRangesToTerraform, true)(struct!.aliasIpRanges),
    ipv6_access_configs: cdktn.listMapper(backupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigsToTerraform, true)(struct!.ipv6AccessConfigs),
  }
}


export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesToHclTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfaces | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    internal_ipv6_prefix_length: {
      value: cdktn.numberToHclTerraform(struct!.internalIpv6PrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_address: {
      value: cdktn.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_access_type: {
      value: cdktn.stringToHclTerraform(struct!.ipv6AccessType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktn.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktn.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_attachment: {
      value: cdktn.stringToHclTerraform(struct!.networkAttachment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nic_type: {
      value: cdktn.stringToHclTerraform(struct!.nicType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_count: {
      value: cdktn.numberToHclTerraform(struct!.queueCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stack_type: {
      value: cdktn.stringToHclTerraform(struct!.stackType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnetwork: {
      value: cdktn.stringToHclTerraform(struct!.subnetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_configs: {
      value: cdktn.listMapperHcl(backupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigsToHclTerraform, true)(struct!.accessConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigsList",
    },
    alias_ip_ranges: {
      value: cdktn.listMapperHcl(backupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRangesToHclTerraform, true)(struct!.aliasIpRanges),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRangesList",
    },
    ipv6_access_configs: {
      value: cdktn.listMapperHcl(backupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigsToHclTerraform, true)(struct!.ipv6AccessConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfaces | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._internalIpv6PrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalIpv6PrefixLength = this._internalIpv6PrefixLength;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipv6AccessType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AccessType = this._ipv6AccessType;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._networkAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAttachment = this._networkAttachment;
    }
    if (this._nicType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nicType = this._nicType;
    }
    if (this._queueCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueCount = this._queueCount;
    }
    if (this._stackType !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackType = this._stackType;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    if (this._accessConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessConfigs = this._accessConfigs?.internalValue;
    }
    if (this._aliasIpRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliasIpRanges = this._aliasIpRanges?.internalValue;
    }
    if (this._ipv6AccessConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AccessConfigs = this._ipv6AccessConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfaces | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._internalIpv6PrefixLength = undefined;
      this._ipAddress = undefined;
      this._ipv6AccessType = undefined;
      this._ipv6Address = undefined;
      this._network = undefined;
      this._networkAttachment = undefined;
      this._nicType = undefined;
      this._queueCount = undefined;
      this._stackType = undefined;
      this._subnetwork = undefined;
      this._accessConfigs.internalValue = undefined;
      this._aliasIpRanges.internalValue = undefined;
      this._ipv6AccessConfigs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._internalIpv6PrefixLength = value.internalIpv6PrefixLength;
      this._ipAddress = value.ipAddress;
      this._ipv6AccessType = value.ipv6AccessType;
      this._ipv6Address = value.ipv6Address;
      this._network = value.network;
      this._networkAttachment = value.networkAttachment;
      this._nicType = value.nicType;
      this._queueCount = value.queueCount;
      this._stackType = value.stackType;
      this._subnetwork = value.subnetwork;
      this._accessConfigs.internalValue = value.accessConfigs;
      this._aliasIpRanges.internalValue = value.aliasIpRanges;
      this._ipv6AccessConfigs.internalValue = value.ipv6AccessConfigs;
    }
  }

  // internal_ipv6_prefix_length - computed: false, optional: true, required: false
  private _internalIpv6PrefixLength?: number; 
  public get internalIpv6PrefixLength() {
    return this.getNumberAttribute('internal_ipv6_prefix_length');
  }
  public set internalIpv6PrefixLength(value: number) {
    this._internalIpv6PrefixLength = value;
  }
  public resetInternalIpv6PrefixLength() {
    this._internalIpv6PrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpv6PrefixLengthInput() {
    return this._internalIpv6PrefixLength;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ipv6_access_type - computed: false, optional: true, required: false
  private _ipv6AccessType?: string; 
  public get ipv6AccessType() {
    return this.getStringAttribute('ipv6_access_type');
  }
  public set ipv6AccessType(value: string) {
    this._ipv6AccessType = value;
  }
  public resetIpv6AccessType() {
    this._ipv6AccessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AccessTypeInput() {
    return this._ipv6AccessType;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // network_attachment - computed: false, optional: true, required: false
  private _networkAttachment?: string; 
  public get networkAttachment() {
    return this.getStringAttribute('network_attachment');
  }
  public set networkAttachment(value: string) {
    this._networkAttachment = value;
  }
  public resetNetworkAttachment() {
    this._networkAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAttachmentInput() {
    return this._networkAttachment;
  }

  // nic_type - computed: false, optional: true, required: false
  private _nicType?: string; 
  public get nicType() {
    return this.getStringAttribute('nic_type');
  }
  public set nicType(value: string) {
    this._nicType = value;
  }
  public resetNicType() {
    this._nicType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicTypeInput() {
    return this._nicType;
  }

  // queue_count - computed: false, optional: true, required: false
  private _queueCount?: number; 
  public get queueCount() {
    return this.getNumberAttribute('queue_count');
  }
  public set queueCount(value: number) {
    this._queueCount = value;
  }
  public resetQueueCount() {
    this._queueCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueCountInput() {
    return this._queueCount;
  }

  // stack_type - computed: false, optional: true, required: false
  private _stackType?: string; 
  public get stackType() {
    return this.getStringAttribute('stack_type');
  }
  public set stackType(value: string) {
    this._stackType = value;
  }
  public resetStackType() {
    this._stackType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackTypeInput() {
    return this._stackType;
  }

  // subnetwork - computed: false, optional: true, required: false
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }

  // access_configs - computed: false, optional: true, required: false
  private _accessConfigs = new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigsList(this, "access_configs", false);
  public get accessConfigs() {
    return this._accessConfigs;
  }
  public putAccessConfigs(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigs[] | cdktn.IResolvable) {
    this._accessConfigs.internalValue = value;
  }
  public resetAccessConfigs() {
    this._accessConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConfigsInput() {
    return this._accessConfigs.internalValue;
  }

  // alias_ip_ranges - computed: false, optional: true, required: false
  private _aliasIpRanges = new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRangesList(this, "alias_ip_ranges", false);
  public get aliasIpRanges() {
    return this._aliasIpRanges;
  }
  public putAliasIpRanges(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRanges[] | cdktn.IResolvable) {
    this._aliasIpRanges.internalValue = value;
  }
  public resetAliasIpRanges() {
    this._aliasIpRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasIpRangesInput() {
    return this._aliasIpRanges.internalValue;
  }

  // ipv6_access_configs - computed: false, optional: true, required: false
  private _ipv6AccessConfigs = new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigsList(this, "ipv6_access_configs", false);
  public get ipv6AccessConfigs() {
    return this._ipv6AccessConfigs;
  }
  public putIpv6AccessConfigs(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigs[] | cdktn.IResolvable) {
    this._ipv6AccessConfigs.internalValue = value;
  }
  public resetIpv6AccessConfigs() {
    this._ipv6AccessConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AccessConfigsInput() {
    return this._ipv6AccessConfigs.internalValue;
  }
}

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesList extends cdktn.ComplexList {
  public internalValue? : BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfaces[] | cdktn.IResolvable

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
  public get(index: number): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesOutputReference {
    return new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfig {
  /**
  *  Possible values: ["TIER_UNSPECIFIED", "DEFAULT", "TIER_1"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#total_egress_bandwidth_tier BackupDrRestoreWorkload#total_egress_bandwidth_tier}
  */
  readonly totalEgressBandwidthTier?: string;
}

export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfigToTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfigOutputReference | BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    total_egress_bandwidth_tier: cdktn.stringToTerraform(struct!.totalEgressBandwidthTier),
  }
}


export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfigToHclTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfigOutputReference | BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    total_egress_bandwidth_tier: {
      value: cdktn.stringToHclTerraform(struct!.totalEgressBandwidthTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totalEgressBandwidthTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEgressBandwidthTier = this._totalEgressBandwidthTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._totalEgressBandwidthTier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._totalEgressBandwidthTier = value.totalEgressBandwidthTier;
    }
  }

  // total_egress_bandwidth_tier - computed: false, optional: true, required: false
  private _totalEgressBandwidthTier?: string; 
  public get totalEgressBandwidthTier() {
    return this.getStringAttribute('total_egress_bandwidth_tier');
  }
  public set totalEgressBandwidthTier(value: string) {
    this._totalEgressBandwidthTier = value;
  }
  public resetTotalEgressBandwidthTier() {
    this._totalEgressBandwidthTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEgressBandwidthTierInput() {
    return this._totalEgressBandwidthTier;
  }
}
export interface BackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#key BackupDrRestoreWorkload#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#value BackupDrRestoreWorkload#value}
  */
  readonly value?: string;
}

export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTagsToTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTagsToHclTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
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

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTagsList extends cdktn.ComplexList {
  public internalValue? : BackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTags[] | cdktn.IResolvable

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
  public get(index: number): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTagsOutputReference {
    return new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupDrRestoreWorkloadComputeInstanceRestorePropertiesParams {
  /**
  * resource_manager_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#resource_manager_tags BackupDrRestoreWorkload#resource_manager_tags}
  */
  readonly resourceManagerTags?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTags[] | cdktn.IResolvable;
}

export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsToTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsOutputReference | BackupDrRestoreWorkloadComputeInstanceRestorePropertiesParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_manager_tags: cdktn.listMapper(backupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTagsToTerraform, true)(struct!.resourceManagerTags),
  }
}


export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsToHclTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsOutputReference | BackupDrRestoreWorkloadComputeInstanceRestorePropertiesParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_manager_tags: {
      value: cdktn.listMapperHcl(backupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTagsToHclTerraform, true)(struct!.resourceManagerTags),
      isBlock: true,
      type: "set",
      storageClassType: "BackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceManagerTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceManagerTags = this._resourceManagerTags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceManagerTags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceManagerTags.internalValue = value.resourceManagerTags;
    }
  }

  // resource_manager_tags - computed: false, optional: true, required: false
  private _resourceManagerTags = new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTagsList(this, "resource_manager_tags", true);
  public get resourceManagerTags() {
    return this._resourceManagerTags;
  }
  public putResourceManagerTags(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTags[] | cdktn.IResolvable) {
    this._resourceManagerTags.internalValue = value;
  }
  public resetResourceManagerTags() {
    this._resourceManagerTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagerTagsInput() {
    return this._resourceManagerTags.internalValue;
  }
}
export interface BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeout {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#nanos BackupDrRestoreWorkload#nanos}
  */
  readonly nanos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#seconds BackupDrRestoreWorkload#seconds}
  */
  readonly seconds?: number;
}

export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeoutToTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeoutOutputReference | BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.numberToTerraform(struct!.seconds),
  }
}


export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeoutToHclTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeoutOutputReference | BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeoutOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
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

  // seconds - computed: false, optional: true, required: false
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
export interface BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#nanos BackupDrRestoreWorkload#nanos}
  */
  readonly nanos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#seconds BackupDrRestoreWorkload#seconds}
  */
  readonly seconds?: number;
}

export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDurationToTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDurationOutputReference | BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.numberToTerraform(struct!.seconds),
  }
}


export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDurationToHclTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDurationOutputReference | BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
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

  // seconds - computed: false, optional: true, required: false
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
export interface BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#key BackupDrRestoreWorkload#key}
  */
  readonly key?: string;
  /**
  *  Possible values: ["OPERATOR_UNSPECIFIED", "IN", "NOT_IN"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#operator BackupDrRestoreWorkload#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#values BackupDrRestoreWorkload#values}
  */
  readonly values?: string[];
}

export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinitiesToTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinitiesToHclTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinities | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinities | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinitiesList extends cdktn.ComplexList {
  public internalValue? : BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinities[] | cdktn.IResolvable

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
  public get(index: number): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinitiesOutputReference {
    return new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupDrRestoreWorkloadComputeInstanceRestorePropertiesScheduling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#automatic_restart BackupDrRestoreWorkload#automatic_restart}
  */
  readonly automaticRestart?: boolean | cdktn.IResolvable;
  /**
  *  Possible values: ["INSTANCE_TERMINATION_ACTION_UNSPECIFIED", "DELETE", "STOP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#instance_termination_action BackupDrRestoreWorkload#instance_termination_action}
  */
  readonly instanceTerminationAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#min_node_cpus BackupDrRestoreWorkload#min_node_cpus}
  */
  readonly minNodeCpus?: number;
  /**
  *  Possible values: ["ON_HOST_MAINTENANCE_UNSPECIFIED", "TERMINATE", "MIGRATE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#on_host_maintenance BackupDrRestoreWorkload#on_host_maintenance}
  */
  readonly onHostMaintenance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#preemptible BackupDrRestoreWorkload#preemptible}
  */
  readonly preemptible?: boolean | cdktn.IResolvable;
  /**
  *  Possible values: ["PROVISIONING_MODEL_UNSPECIFIED", "STANDARD", "SPOT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#provisioning_model BackupDrRestoreWorkload#provisioning_model}
  */
  readonly provisioningModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#termination_time BackupDrRestoreWorkload#termination_time}
  */
  readonly terminationTime?: string;
  /**
  * local_ssd_recovery_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#local_ssd_recovery_timeout BackupDrRestoreWorkload#local_ssd_recovery_timeout}
  */
  readonly localSsdRecoveryTimeout?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeout;
  /**
  * max_run_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#max_run_duration BackupDrRestoreWorkload#max_run_duration}
  */
  readonly maxRunDuration?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDuration;
  /**
  * node_affinities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#node_affinities BackupDrRestoreWorkload#node_affinities}
  */
  readonly nodeAffinities?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinities[] | cdktn.IResolvable;
}

export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingToTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingOutputReference | BackupDrRestoreWorkloadComputeInstanceRestorePropertiesScheduling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    automatic_restart: cdktn.booleanToTerraform(struct!.automaticRestart),
    instance_termination_action: cdktn.stringToTerraform(struct!.instanceTerminationAction),
    min_node_cpus: cdktn.numberToTerraform(struct!.minNodeCpus),
    on_host_maintenance: cdktn.stringToTerraform(struct!.onHostMaintenance),
    preemptible: cdktn.booleanToTerraform(struct!.preemptible),
    provisioning_model: cdktn.stringToTerraform(struct!.provisioningModel),
    termination_time: cdktn.stringToTerraform(struct!.terminationTime),
    local_ssd_recovery_timeout: backupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeoutToTerraform(struct!.localSsdRecoveryTimeout),
    max_run_duration: backupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDurationToTerraform(struct!.maxRunDuration),
    node_affinities: cdktn.listMapper(backupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinitiesToTerraform, true)(struct!.nodeAffinities),
  }
}


export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingToHclTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingOutputReference | BackupDrRestoreWorkloadComputeInstanceRestorePropertiesScheduling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    automatic_restart: {
      value: cdktn.booleanToHclTerraform(struct!.automaticRestart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_termination_action: {
      value: cdktn.stringToHclTerraform(struct!.instanceTerminationAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_node_cpus: {
      value: cdktn.numberToHclTerraform(struct!.minNodeCpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_host_maintenance: {
      value: cdktn.stringToHclTerraform(struct!.onHostMaintenance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preemptible: {
      value: cdktn.booleanToHclTerraform(struct!.preemptible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    provisioning_model: {
      value: cdktn.stringToHclTerraform(struct!.provisioningModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    termination_time: {
      value: cdktn.stringToHclTerraform(struct!.terminationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_ssd_recovery_timeout: {
      value: backupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeoutToHclTerraform(struct!.localSsdRecoveryTimeout),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeoutList",
    },
    max_run_duration: {
      value: backupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDurationToHclTerraform(struct!.maxRunDuration),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDurationList",
    },
    node_affinities: {
      value: cdktn.listMapperHcl(backupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinitiesToHclTerraform, true)(struct!.nodeAffinities),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinitiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesScheduling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticRestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticRestart = this._automaticRestart;
    }
    if (this._instanceTerminationAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTerminationAction = this._instanceTerminationAction;
    }
    if (this._minNodeCpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCpus = this._minNodeCpus;
    }
    if (this._onHostMaintenance !== undefined) {
      hasAnyValues = true;
      internalValueResult.onHostMaintenance = this._onHostMaintenance;
    }
    if (this._preemptible !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptible = this._preemptible;
    }
    if (this._provisioningModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioningModel = this._provisioningModel;
    }
    if (this._terminationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationTime = this._terminationTime;
    }
    if (this._localSsdRecoveryTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdRecoveryTimeout = this._localSsdRecoveryTimeout?.internalValue;
    }
    if (this._maxRunDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRunDuration = this._maxRunDuration?.internalValue;
    }
    if (this._nodeAffinities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinities = this._nodeAffinities?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesScheduling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticRestart = undefined;
      this._instanceTerminationAction = undefined;
      this._minNodeCpus = undefined;
      this._onHostMaintenance = undefined;
      this._preemptible = undefined;
      this._provisioningModel = undefined;
      this._terminationTime = undefined;
      this._localSsdRecoveryTimeout.internalValue = undefined;
      this._maxRunDuration.internalValue = undefined;
      this._nodeAffinities.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticRestart = value.automaticRestart;
      this._instanceTerminationAction = value.instanceTerminationAction;
      this._minNodeCpus = value.minNodeCpus;
      this._onHostMaintenance = value.onHostMaintenance;
      this._preemptible = value.preemptible;
      this._provisioningModel = value.provisioningModel;
      this._terminationTime = value.terminationTime;
      this._localSsdRecoveryTimeout.internalValue = value.localSsdRecoveryTimeout;
      this._maxRunDuration.internalValue = value.maxRunDuration;
      this._nodeAffinities.internalValue = value.nodeAffinities;
    }
  }

  // automatic_restart - computed: false, optional: true, required: false
  private _automaticRestart?: boolean | cdktn.IResolvable; 
  public get automaticRestart() {
    return this.getBooleanAttribute('automatic_restart');
  }
  public set automaticRestart(value: boolean | cdktn.IResolvable) {
    this._automaticRestart = value;
  }
  public resetAutomaticRestart() {
    this._automaticRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticRestartInput() {
    return this._automaticRestart;
  }

  // instance_termination_action - computed: false, optional: true, required: false
  private _instanceTerminationAction?: string; 
  public get instanceTerminationAction() {
    return this.getStringAttribute('instance_termination_action');
  }
  public set instanceTerminationAction(value: string) {
    this._instanceTerminationAction = value;
  }
  public resetInstanceTerminationAction() {
    this._instanceTerminationAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTerminationActionInput() {
    return this._instanceTerminationAction;
  }

  // min_node_cpus - computed: false, optional: true, required: false
  private _minNodeCpus?: number; 
  public get minNodeCpus() {
    return this.getNumberAttribute('min_node_cpus');
  }
  public set minNodeCpus(value: number) {
    this._minNodeCpus = value;
  }
  public resetMinNodeCpus() {
    this._minNodeCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCpusInput() {
    return this._minNodeCpus;
  }

  // on_host_maintenance - computed: false, optional: true, required: false
  private _onHostMaintenance?: string; 
  public get onHostMaintenance() {
    return this.getStringAttribute('on_host_maintenance');
  }
  public set onHostMaintenance(value: string) {
    this._onHostMaintenance = value;
  }
  public resetOnHostMaintenance() {
    this._onHostMaintenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onHostMaintenanceInput() {
    return this._onHostMaintenance;
  }

  // preemptible - computed: false, optional: true, required: false
  private _preemptible?: boolean | cdktn.IResolvable; 
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
  }
  public set preemptible(value: boolean | cdktn.IResolvable) {
    this._preemptible = value;
  }
  public resetPreemptible() {
    this._preemptible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibleInput() {
    return this._preemptible;
  }

  // provisioning_model - computed: false, optional: true, required: false
  private _provisioningModel?: string; 
  public get provisioningModel() {
    return this.getStringAttribute('provisioning_model');
  }
  public set provisioningModel(value: string) {
    this._provisioningModel = value;
  }
  public resetProvisioningModel() {
    this._provisioningModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningModelInput() {
    return this._provisioningModel;
  }

  // termination_time - computed: false, optional: true, required: false
  private _terminationTime?: string; 
  public get terminationTime() {
    return this.getStringAttribute('termination_time');
  }
  public set terminationTime(value: string) {
    this._terminationTime = value;
  }
  public resetTerminationTime() {
    this._terminationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationTimeInput() {
    return this._terminationTime;
  }

  // local_ssd_recovery_timeout - computed: false, optional: true, required: false
  private _localSsdRecoveryTimeout = new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeoutOutputReference(this, "local_ssd_recovery_timeout");
  public get localSsdRecoveryTimeout() {
    return this._localSsdRecoveryTimeout;
  }
  public putLocalSsdRecoveryTimeout(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeout) {
    this._localSsdRecoveryTimeout.internalValue = value;
  }
  public resetLocalSsdRecoveryTimeout() {
    this._localSsdRecoveryTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdRecoveryTimeoutInput() {
    return this._localSsdRecoveryTimeout.internalValue;
  }

  // max_run_duration - computed: false, optional: true, required: false
  private _maxRunDuration = new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDurationOutputReference(this, "max_run_duration");
  public get maxRunDuration() {
    return this._maxRunDuration;
  }
  public putMaxRunDuration(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDuration) {
    this._maxRunDuration.internalValue = value;
  }
  public resetMaxRunDuration() {
    this._maxRunDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRunDurationInput() {
    return this._maxRunDuration.internalValue;
  }

  // node_affinities - computed: false, optional: true, required: false
  private _nodeAffinities = new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinitiesList(this, "node_affinities", false);
  public get nodeAffinities() {
    return this._nodeAffinities;
  }
  public putNodeAffinities(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinities[] | cdktn.IResolvable) {
    this._nodeAffinities.internalValue = value;
  }
  public resetNodeAffinities() {
    this._nodeAffinities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinitiesInput() {
    return this._nodeAffinities.internalValue;
  }
}
export interface BackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#email BackupDrRestoreWorkload#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#scopes BackupDrRestoreWorkload#scopes}
  */
  readonly scopes?: string[];
}

export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccountsToTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccounts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    email: cdktn.stringToTerraform(struct!.email),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccountsToHclTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccounts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    email: {
      value: cdktn.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccountsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccounts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccounts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._scopes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._scopes = value.scopes;
    }
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccountsList extends cdktn.ComplexList {
  public internalValue? : BackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccounts[] | cdktn.IResolvable

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
  public get(index: number): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccountsOutputReference {
    return new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#enable_integrity_monitoring BackupDrRestoreWorkload#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#enable_secure_boot BackupDrRestoreWorkload#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#enable_vtpm BackupDrRestoreWorkload#enable_vtpm}
  */
  readonly enableVtpm?: boolean | cdktn.IResolvable;
}

export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfigToTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfigOutputReference | BackupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_integrity_monitoring: cdktn.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktn.booleanToTerraform(struct!.enableSecureBoot),
    enable_vtpm: cdktn.booleanToTerraform(struct!.enableVtpm),
  }
}


export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfigToHclTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfigOutputReference | BackupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_integrity_monitoring: {
      value: cdktn.booleanToHclTerraform(struct!.enableIntegrityMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_secure_boot: {
      value: cdktn.booleanToHclTerraform(struct!.enableSecureBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_vtpm: {
      value: cdktn.booleanToHclTerraform(struct!.enableVtpm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIntegrityMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIntegrityMonitoring = this._enableIntegrityMonitoring;
    }
    if (this._enableSecureBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecureBoot = this._enableSecureBoot;
    }
    if (this._enableVtpm !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVtpm = this._enableVtpm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIntegrityMonitoring = undefined;
      this._enableSecureBoot = undefined;
      this._enableVtpm = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIntegrityMonitoring = value.enableIntegrityMonitoring;
      this._enableSecureBoot = value.enableSecureBoot;
      this._enableVtpm = value.enableVtpm;
    }
  }

  // enable_integrity_monitoring - computed: false, optional: true, required: false
  private _enableIntegrityMonitoring?: boolean | cdktn.IResolvable; 
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring');
  }
  public set enableIntegrityMonitoring(value: boolean | cdktn.IResolvable) {
    this._enableIntegrityMonitoring = value;
  }
  public resetEnableIntegrityMonitoring() {
    this._enableIntegrityMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntegrityMonitoringInput() {
    return this._enableIntegrityMonitoring;
  }

  // enable_secure_boot - computed: false, optional: true, required: false
  private _enableSecureBoot?: boolean | cdktn.IResolvable; 
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }
  public set enableSecureBoot(value: boolean | cdktn.IResolvable) {
    this._enableSecureBoot = value;
  }
  public resetEnableSecureBoot() {
    this._enableSecureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecureBootInput() {
    return this._enableSecureBoot;
  }

  // enable_vtpm - computed: false, optional: true, required: false
  private _enableVtpm?: boolean | cdktn.IResolvable; 
  public get enableVtpm() {
    return this.getBooleanAttribute('enable_vtpm');
  }
  public set enableVtpm(value: boolean | cdktn.IResolvable) {
    this._enableVtpm = value;
  }
  public resetEnableVtpm() {
    this._enableVtpm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVtpmInput() {
    return this._enableVtpm;
  }
}
export interface BackupDrRestoreWorkloadComputeInstanceRestorePropertiesTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#items BackupDrRestoreWorkload#items}
  */
  readonly items?: string[];
}

export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesTagsToTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesTagsOutputReference | BackupDrRestoreWorkloadComputeInstanceRestorePropertiesTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    items: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.items),
  }
}


export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesTagsToHclTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesTagsOutputReference | BackupDrRestoreWorkloadComputeInstanceRestorePropertiesTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    items: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupDrRestoreWorkloadComputeInstanceRestorePropertiesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface BackupDrRestoreWorkloadComputeInstanceRestoreProperties {
  /**
  * Optional. Allows this instance to send and receive packets with non-matching destination or source IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#can_ip_forward BackupDrRestoreWorkload#can_ip_forward}
  */
  readonly canIpForward?: boolean | cdktn.IResolvable;
  /**
  * Optional. Whether the resource should be protected against deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#deletion_protection BackupDrRestoreWorkload#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktn.IResolvable;
  /**
  * Optional. An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#description BackupDrRestoreWorkload#description}
  */
  readonly description?: string;
  /**
  * Optional. Specifies the hostname of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#hostname BackupDrRestoreWorkload#hostname}
  */
  readonly hostname?: string;
  /**
  * Optional. KeyRevocationActionType of the instance. Possible values: ["KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED", "NONE", "STOP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#key_revocation_action_type BackupDrRestoreWorkload#key_revocation_action_type}
  */
  readonly keyRevocationActionType?: string;
  /**
  * Optional. Full or partial URL of the machine type resource to use for this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#machine_type BackupDrRestoreWorkload#machine_type}
  */
  readonly machineType?: string;
  /**
  * Optional. Minimum CPU platform to use for this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#min_cpu_platform BackupDrRestoreWorkload#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Required. Name of the compute instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#name BackupDrRestoreWorkload#name}
  */
  readonly name: string;
  /**
  * Optional. The private IPv6 google access type for the VM. Possible values: ["INSTANCE_PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED", "INHERIT_FROM_SUBNETWORK", "ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE", "ENABLE_BIDIRECTIONAL_ACCESS_TO_GOOGLE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#private_ipv6_google_access BackupDrRestoreWorkload#private_ipv6_google_access}
  */
  readonly privateIpv6GoogleAccess?: string;
  /**
  * Optional. Resource policies applied to this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#resource_policies BackupDrRestoreWorkload#resource_policies}
  */
  readonly resourcePolicies?: string[];
  /**
  * advanced_machine_features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#advanced_machine_features BackupDrRestoreWorkload#advanced_machine_features}
  */
  readonly advancedMachineFeatures?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeatures;
  /**
  * allocation_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#allocation_affinity BackupDrRestoreWorkload#allocation_affinity}
  */
  readonly allocationAffinity?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinity;
  /**
  * confidential_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#confidential_instance_config BackupDrRestoreWorkload#confidential_instance_config}
  */
  readonly confidentialInstanceConfig?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfig;
  /**
  * disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#disks BackupDrRestoreWorkload#disks}
  */
  readonly disks?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisks[] | cdktn.IResolvable;
  /**
  * display_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#display_device BackupDrRestoreWorkload#display_device}
  */
  readonly displayDevice?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDevice;
  /**
  * guest_accelerators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#guest_accelerators BackupDrRestoreWorkload#guest_accelerators}
  */
  readonly guestAccelerators?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAccelerators[] | cdktn.IResolvable;
  /**
  * instance_encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#instance_encryption_key BackupDrRestoreWorkload#instance_encryption_key}
  */
  readonly instanceEncryptionKey?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKey;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#labels BackupDrRestoreWorkload#labels}
  */
  readonly labels?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabels[] | cdktn.IResolvable;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#metadata BackupDrRestoreWorkload#metadata}
  */
  readonly metadata?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadata;
  /**
  * network_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#network_interfaces BackupDrRestoreWorkload#network_interfaces}
  */
  readonly networkInterfaces?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfaces[] | cdktn.IResolvable;
  /**
  * network_performance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#network_performance_config BackupDrRestoreWorkload#network_performance_config}
  */
  readonly networkPerformanceConfig?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfig;
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#params BackupDrRestoreWorkload#params}
  */
  readonly params?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesParams;
  /**
  * scheduling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#scheduling BackupDrRestoreWorkload#scheduling}
  */
  readonly scheduling?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesScheduling;
  /**
  * service_accounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#service_accounts BackupDrRestoreWorkload#service_accounts}
  */
  readonly serviceAccounts?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccounts[] | cdktn.IResolvable;
  /**
  * shielded_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#shielded_instance_config BackupDrRestoreWorkload#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfig;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#tags BackupDrRestoreWorkload#tags}
  */
  readonly tags?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesTags;
}

export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesToTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesOutputReference | BackupDrRestoreWorkloadComputeInstanceRestoreProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    can_ip_forward: cdktn.booleanToTerraform(struct!.canIpForward),
    deletion_protection: cdktn.booleanToTerraform(struct!.deletionProtection),
    description: cdktn.stringToTerraform(struct!.description),
    hostname: cdktn.stringToTerraform(struct!.hostname),
    key_revocation_action_type: cdktn.stringToTerraform(struct!.keyRevocationActionType),
    machine_type: cdktn.stringToTerraform(struct!.machineType),
    min_cpu_platform: cdktn.stringToTerraform(struct!.minCpuPlatform),
    name: cdktn.stringToTerraform(struct!.name),
    private_ipv6_google_access: cdktn.stringToTerraform(struct!.privateIpv6GoogleAccess),
    resource_policies: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourcePolicies),
    advanced_machine_features: backupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeaturesToTerraform(struct!.advancedMachineFeatures),
    allocation_affinity: backupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinityToTerraform(struct!.allocationAffinity),
    confidential_instance_config: backupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfigToTerraform(struct!.confidentialInstanceConfig),
    disks: cdktn.listMapper(backupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksToTerraform, true)(struct!.disks),
    display_device: backupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDeviceToTerraform(struct!.displayDevice),
    guest_accelerators: cdktn.listMapper(backupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAcceleratorsToTerraform, true)(struct!.guestAccelerators),
    instance_encryption_key: backupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKeyToTerraform(struct!.instanceEncryptionKey),
    labels: cdktn.listMapper(backupDrRestoreWorkloadComputeInstanceRestorePropertiesLabelsToTerraform, true)(struct!.labels),
    metadata: backupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataToTerraform(struct!.metadata),
    network_interfaces: cdktn.listMapper(backupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesToTerraform, true)(struct!.networkInterfaces),
    network_performance_config: backupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfigToTerraform(struct!.networkPerformanceConfig),
    params: backupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsToTerraform(struct!.params),
    scheduling: backupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingToTerraform(struct!.scheduling),
    service_accounts: cdktn.listMapper(backupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccountsToTerraform, true)(struct!.serviceAccounts),
    shielded_instance_config: backupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
    tags: backupDrRestoreWorkloadComputeInstanceRestorePropertiesTagsToTerraform(struct!.tags),
  }
}


export function backupDrRestoreWorkloadComputeInstanceRestorePropertiesToHclTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesOutputReference | BackupDrRestoreWorkloadComputeInstanceRestoreProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    can_ip_forward: {
      value: cdktn.booleanToHclTerraform(struct!.canIpForward),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deletion_protection: {
      value: cdktn.booleanToHclTerraform(struct!.deletionProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_revocation_action_type: {
      value: cdktn.stringToHclTerraform(struct!.keyRevocationActionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_type: {
      value: cdktn.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_cpu_platform: {
      value: cdktn.stringToHclTerraform(struct!.minCpuPlatform),
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
    private_ipv6_google_access: {
      value: cdktn.stringToHclTerraform(struct!.privateIpv6GoogleAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_policies: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourcePolicies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    advanced_machine_features: {
      value: backupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeaturesToHclTerraform(struct!.advancedMachineFeatures),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeaturesList",
    },
    allocation_affinity: {
      value: backupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinityToHclTerraform(struct!.allocationAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinityList",
    },
    confidential_instance_config: {
      value: backupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfigToHclTerraform(struct!.confidentialInstanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfigList",
    },
    disks: {
      value: cdktn.listMapperHcl(backupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksToHclTerraform, true)(struct!.disks),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksList",
    },
    display_device: {
      value: backupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDeviceToHclTerraform(struct!.displayDevice),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDeviceList",
    },
    guest_accelerators: {
      value: cdktn.listMapperHcl(backupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAcceleratorsToHclTerraform, true)(struct!.guestAccelerators),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAcceleratorsList",
    },
    instance_encryption_key: {
      value: backupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKeyToHclTerraform(struct!.instanceEncryptionKey),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKeyList",
    },
    labels: {
      value: cdktn.listMapperHcl(backupDrRestoreWorkloadComputeInstanceRestorePropertiesLabelsToHclTerraform, true)(struct!.labels),
      isBlock: true,
      type: "set",
      storageClassType: "BackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabelsList",
    },
    metadata: {
      value: backupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataList",
    },
    network_interfaces: {
      value: cdktn.listMapperHcl(backupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesToHclTerraform, true)(struct!.networkInterfaces),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesList",
    },
    network_performance_config: {
      value: backupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfigToHclTerraform(struct!.networkPerformanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfigList",
    },
    params: {
      value: backupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsToHclTerraform(struct!.params),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsList",
    },
    scheduling: {
      value: backupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingToHclTerraform(struct!.scheduling),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingList",
    },
    service_accounts: {
      value: cdktn.listMapperHcl(backupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccountsToHclTerraform, true)(struct!.serviceAccounts),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccountsList",
    },
    shielded_instance_config: {
      value: backupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfigToHclTerraform(struct!.shieldedInstanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfigList",
    },
    tags: {
      value: backupDrRestoreWorkloadComputeInstanceRestorePropertiesTagsToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrRestoreWorkloadComputeInstanceRestorePropertiesTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrRestoreWorkloadComputeInstanceRestorePropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupDrRestoreWorkloadComputeInstanceRestoreProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canIpForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.canIpForward = this._canIpForward;
    }
    if (this._deletionProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionProtection = this._deletionProtection;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._keyRevocationActionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyRevocationActionType = this._keyRevocationActionType;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._minCpuPlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._privateIpv6GoogleAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpv6GoogleAccess = this._privateIpv6GoogleAccess;
    }
    if (this._resourcePolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePolicies = this._resourcePolicies;
    }
    if (this._advancedMachineFeatures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedMachineFeatures = this._advancedMachineFeatures?.internalValue;
    }
    if (this._allocationAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationAffinity = this._allocationAffinity?.internalValue;
    }
    if (this._confidentialInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidentialInstanceConfig = this._confidentialInstanceConfig?.internalValue;
    }
    if (this._disks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disks = this._disks?.internalValue;
    }
    if (this._displayDevice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayDevice = this._displayDevice?.internalValue;
    }
    if (this._guestAccelerators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestAccelerators = this._guestAccelerators?.internalValue;
    }
    if (this._instanceEncryptionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceEncryptionKey = this._instanceEncryptionKey?.internalValue;
    }
    if (this._labels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._networkInterfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaces = this._networkInterfaces?.internalValue;
    }
    if (this._networkPerformanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPerformanceConfig = this._networkPerformanceConfig?.internalValue;
    }
    if (this._params?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params?.internalValue;
    }
    if (this._scheduling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduling = this._scheduling?.internalValue;
    }
    if (this._serviceAccounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccounts = this._serviceAccounts?.internalValue;
    }
    if (this._shieldedInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shieldedInstanceConfig = this._shieldedInstanceConfig?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadComputeInstanceRestoreProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._canIpForward = undefined;
      this._deletionProtection = undefined;
      this._description = undefined;
      this._hostname = undefined;
      this._keyRevocationActionType = undefined;
      this._machineType = undefined;
      this._minCpuPlatform = undefined;
      this._name = undefined;
      this._privateIpv6GoogleAccess = undefined;
      this._resourcePolicies = undefined;
      this._advancedMachineFeatures.internalValue = undefined;
      this._allocationAffinity.internalValue = undefined;
      this._confidentialInstanceConfig.internalValue = undefined;
      this._disks.internalValue = undefined;
      this._displayDevice.internalValue = undefined;
      this._guestAccelerators.internalValue = undefined;
      this._instanceEncryptionKey.internalValue = undefined;
      this._labels.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._networkInterfaces.internalValue = undefined;
      this._networkPerformanceConfig.internalValue = undefined;
      this._params.internalValue = undefined;
      this._scheduling.internalValue = undefined;
      this._serviceAccounts.internalValue = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._canIpForward = value.canIpForward;
      this._deletionProtection = value.deletionProtection;
      this._description = value.description;
      this._hostname = value.hostname;
      this._keyRevocationActionType = value.keyRevocationActionType;
      this._machineType = value.machineType;
      this._minCpuPlatform = value.minCpuPlatform;
      this._name = value.name;
      this._privateIpv6GoogleAccess = value.privateIpv6GoogleAccess;
      this._resourcePolicies = value.resourcePolicies;
      this._advancedMachineFeatures.internalValue = value.advancedMachineFeatures;
      this._allocationAffinity.internalValue = value.allocationAffinity;
      this._confidentialInstanceConfig.internalValue = value.confidentialInstanceConfig;
      this._disks.internalValue = value.disks;
      this._displayDevice.internalValue = value.displayDevice;
      this._guestAccelerators.internalValue = value.guestAccelerators;
      this._instanceEncryptionKey.internalValue = value.instanceEncryptionKey;
      this._labels.internalValue = value.labels;
      this._metadata.internalValue = value.metadata;
      this._networkInterfaces.internalValue = value.networkInterfaces;
      this._networkPerformanceConfig.internalValue = value.networkPerformanceConfig;
      this._params.internalValue = value.params;
      this._scheduling.internalValue = value.scheduling;
      this._serviceAccounts.internalValue = value.serviceAccounts;
      this._shieldedInstanceConfig.internalValue = value.shieldedInstanceConfig;
      this._tags.internalValue = value.tags;
    }
  }

  // can_ip_forward - computed: false, optional: true, required: false
  private _canIpForward?: boolean | cdktn.IResolvable; 
  public get canIpForward() {
    return this.getBooleanAttribute('can_ip_forward');
  }
  public set canIpForward(value: boolean | cdktn.IResolvable) {
    this._canIpForward = value;
  }
  public resetCanIpForward() {
    this._canIpForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canIpForwardInput() {
    return this._canIpForward;
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktn.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktn.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
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

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // key_revocation_action_type - computed: false, optional: true, required: false
  private _keyRevocationActionType?: string; 
  public get keyRevocationActionType() {
    return this.getStringAttribute('key_revocation_action_type');
  }
  public set keyRevocationActionType(value: string) {
    this._keyRevocationActionType = value;
  }
  public resetKeyRevocationActionType() {
    this._keyRevocationActionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRevocationActionTypeInput() {
    return this._keyRevocationActionType;
  }

  // machine_type - computed: false, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // min_cpu_platform - computed: false, optional: true, required: false
  private _minCpuPlatform?: string; 
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }
  public set minCpuPlatform(value: string) {
    this._minCpuPlatform = value;
  }
  public resetMinCpuPlatform() {
    this._minCpuPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuPlatformInput() {
    return this._minCpuPlatform;
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

  // private_ipv6_google_access - computed: false, optional: true, required: false
  private _privateIpv6GoogleAccess?: string; 
  public get privateIpv6GoogleAccess() {
    return this.getStringAttribute('private_ipv6_google_access');
  }
  public set privateIpv6GoogleAccess(value: string) {
    this._privateIpv6GoogleAccess = value;
  }
  public resetPrivateIpv6GoogleAccess() {
    this._privateIpv6GoogleAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpv6GoogleAccessInput() {
    return this._privateIpv6GoogleAccess;
  }

  // resource_policies - computed: false, optional: true, required: false
  private _resourcePolicies?: string[]; 
  public get resourcePolicies() {
    return this.getListAttribute('resource_policies');
  }
  public set resourcePolicies(value: string[]) {
    this._resourcePolicies = value;
  }
  public resetResourcePolicies() {
    this._resourcePolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoliciesInput() {
    return this._resourcePolicies;
  }

  // advanced_machine_features - computed: false, optional: true, required: false
  private _advancedMachineFeatures = new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeaturesOutputReference(this, "advanced_machine_features");
  public get advancedMachineFeatures() {
    return this._advancedMachineFeatures;
  }
  public putAdvancedMachineFeatures(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeatures) {
    this._advancedMachineFeatures.internalValue = value;
  }
  public resetAdvancedMachineFeatures() {
    this._advancedMachineFeatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedMachineFeaturesInput() {
    return this._advancedMachineFeatures.internalValue;
  }

  // allocation_affinity - computed: false, optional: true, required: false
  private _allocationAffinity = new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinityOutputReference(this, "allocation_affinity");
  public get allocationAffinity() {
    return this._allocationAffinity;
  }
  public putAllocationAffinity(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinity) {
    this._allocationAffinity.internalValue = value;
  }
  public resetAllocationAffinity() {
    this._allocationAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationAffinityInput() {
    return this._allocationAffinity.internalValue;
  }

  // confidential_instance_config - computed: false, optional: true, required: false
  private _confidentialInstanceConfig = new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfigOutputReference(this, "confidential_instance_config");
  public get confidentialInstanceConfig() {
    return this._confidentialInstanceConfig;
  }
  public putConfidentialInstanceConfig(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfig) {
    this._confidentialInstanceConfig.internalValue = value;
  }
  public resetConfidentialInstanceConfig() {
    this._confidentialInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialInstanceConfigInput() {
    return this._confidentialInstanceConfig.internalValue;
  }

  // disks - computed: false, optional: true, required: false
  private _disks = new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksList(this, "disks", false);
  public get disks() {
    return this._disks;
  }
  public putDisks(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisks[] | cdktn.IResolvable) {
    this._disks.internalValue = value;
  }
  public resetDisks() {
    this._disks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disksInput() {
    return this._disks.internalValue;
  }

  // display_device - computed: false, optional: true, required: false
  private _displayDevice = new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDeviceOutputReference(this, "display_device");
  public get displayDevice() {
    return this._displayDevice;
  }
  public putDisplayDevice(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDevice) {
    this._displayDevice.internalValue = value;
  }
  public resetDisplayDevice() {
    this._displayDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayDeviceInput() {
    return this._displayDevice.internalValue;
  }

  // guest_accelerators - computed: false, optional: true, required: false
  private _guestAccelerators = new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAcceleratorsList(this, "guest_accelerators", false);
  public get guestAccelerators() {
    return this._guestAccelerators;
  }
  public putGuestAccelerators(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAccelerators[] | cdktn.IResolvable) {
    this._guestAccelerators.internalValue = value;
  }
  public resetGuestAccelerators() {
    this._guestAccelerators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAcceleratorsInput() {
    return this._guestAccelerators.internalValue;
  }

  // instance_encryption_key - computed: false, optional: true, required: false
  private _instanceEncryptionKey = new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKeyOutputReference(this, "instance_encryption_key");
  public get instanceEncryptionKey() {
    return this._instanceEncryptionKey;
  }
  public putInstanceEncryptionKey(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKey) {
    this._instanceEncryptionKey.internalValue = value;
  }
  public resetInstanceEncryptionKey() {
    this._instanceEncryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceEncryptionKeyInput() {
    return this._instanceEncryptionKey.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabelsList(this, "labels", true);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabels[] | cdktn.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // network_interfaces - computed: false, optional: true, required: false
  private _networkInterfaces = new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesList(this, "network_interfaces", false);
  public get networkInterfaces() {
    return this._networkInterfaces;
  }
  public putNetworkInterfaces(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfaces[] | cdktn.IResolvable) {
    this._networkInterfaces.internalValue = value;
  }
  public resetNetworkInterfaces() {
    this._networkInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfacesInput() {
    return this._networkInterfaces.internalValue;
  }

  // network_performance_config - computed: false, optional: true, required: false
  private _networkPerformanceConfig = new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfigOutputReference(this, "network_performance_config");
  public get networkPerformanceConfig() {
    return this._networkPerformanceConfig;
  }
  public putNetworkPerformanceConfig(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfig) {
    this._networkPerformanceConfig.internalValue = value;
  }
  public resetNetworkPerformanceConfig() {
    this._networkPerformanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPerformanceConfigInput() {
    return this._networkPerformanceConfig.internalValue;
  }

  // params - computed: false, optional: true, required: false
  private _params = new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsOutputReference(this, "params");
  public get params() {
    return this._params;
  }
  public putParams(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesParams) {
    this._params.internalValue = value;
  }
  public resetParams() {
    this._params.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }

  // scheduling - computed: false, optional: true, required: false
  private _scheduling = new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingOutputReference(this, "scheduling");
  public get scheduling() {
    return this._scheduling;
  }
  public putScheduling(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesScheduling) {
    this._scheduling.internalValue = value;
  }
  public resetScheduling() {
    this._scheduling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingInput() {
    return this._scheduling.internalValue;
  }

  // service_accounts - computed: false, optional: true, required: false
  private _serviceAccounts = new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccountsList(this, "service_accounts", false);
  public get serviceAccounts() {
    return this._serviceAccounts;
  }
  public putServiceAccounts(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccounts[] | cdktn.IResolvable) {
    this._serviceAccounts.internalValue = value;
  }
  public resetServiceAccounts() {
    this._serviceAccounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountsInput() {
    return this._serviceAccounts.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfig) {
    this._shieldedInstanceConfig.internalValue = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesTagsOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: BackupDrRestoreWorkloadComputeInstanceRestorePropertiesTags) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface BackupDrRestoreWorkloadComputeInstanceTargetEnvironment {
  /**
  * Required. Target project for the Compute Engine instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#project BackupDrRestoreWorkload#project}
  */
  readonly project: string;
  /**
  * If true, use the BackupDR P4SA credentials for same-project restores. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#use_project_service_account BackupDrRestoreWorkload#use_project_service_account}
  */
  readonly useProjectServiceAccount?: boolean | cdktn.IResolvable;
  /**
  * Required. The zone of the Compute Engine instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#zone BackupDrRestoreWorkload#zone}
  */
  readonly zone: string;
}

export function backupDrRestoreWorkloadComputeInstanceTargetEnvironmentToTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceTargetEnvironmentOutputReference | BackupDrRestoreWorkloadComputeInstanceTargetEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    project: cdktn.stringToTerraform(struct!.project),
    use_project_service_account: cdktn.booleanToTerraform(struct!.useProjectServiceAccount),
    zone: cdktn.stringToTerraform(struct!.zone),
  }
}


export function backupDrRestoreWorkloadComputeInstanceTargetEnvironmentToHclTerraform(struct?: BackupDrRestoreWorkloadComputeInstanceTargetEnvironmentOutputReference | BackupDrRestoreWorkloadComputeInstanceTargetEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    project: {
      value: cdktn.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_project_service_account: {
      value: cdktn.booleanToHclTerraform(struct!.useProjectServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zone: {
      value: cdktn.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrRestoreWorkloadComputeInstanceTargetEnvironmentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupDrRestoreWorkloadComputeInstanceTargetEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._useProjectServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.useProjectServiceAccount = this._useProjectServiceAccount;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadComputeInstanceTargetEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._project = undefined;
      this._useProjectServiceAccount = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._project = value.project;
      this._useProjectServiceAccount = value.useProjectServiceAccount;
      this._zone = value.zone;
    }
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // use_project_service_account - computed: false, optional: true, required: false
  private _useProjectServiceAccount?: boolean | cdktn.IResolvable; 
  public get useProjectServiceAccount() {
    return this.getBooleanAttribute('use_project_service_account');
  }
  public set useProjectServiceAccount(value: boolean | cdktn.IResolvable) {
    this._useProjectServiceAccount = value;
  }
  public resetUseProjectServiceAccount() {
    this._useProjectServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useProjectServiceAccountInput() {
    return this._useProjectServiceAccount;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface BackupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#kms_key_name BackupDrRestoreWorkload#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#kms_key_service_account BackupDrRestoreWorkload#kms_key_service_account}
  */
  readonly kmsKeyServiceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#raw_key BackupDrRestoreWorkload#raw_key}
  */
  readonly rawKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#rsa_encrypted_key BackupDrRestoreWorkload#rsa_encrypted_key}
  */
  readonly rsaEncryptedKey?: string;
}

export function backupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKeyToTerraform(struct?: BackupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKeyOutputReference | BackupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_name: cdktn.stringToTerraform(struct!.kmsKeyName),
    kms_key_service_account: cdktn.stringToTerraform(struct!.kmsKeyServiceAccount),
    raw_key: cdktn.stringToTerraform(struct!.rawKey),
    rsa_encrypted_key: cdktn.stringToTerraform(struct!.rsaEncryptedKey),
  }
}


export function backupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKeyToHclTerraform(struct?: BackupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKeyOutputReference | BackupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_name: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_service_account: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw_key: {
      value: cdktn.stringToHclTerraform(struct!.rawKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsa_encrypted_key: {
      value: cdktn.stringToHclTerraform(struct!.rsaEncryptedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    if (this._kmsKeyServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyServiceAccount = this._kmsKeyServiceAccount;
    }
    if (this._rawKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawKey = this._rawKey;
    }
    if (this._rsaEncryptedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaEncryptedKey = this._rsaEncryptedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
      this._kmsKeyServiceAccount = undefined;
      this._rawKey = undefined;
      this._rsaEncryptedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
      this._kmsKeyServiceAccount = value.kmsKeyServiceAccount;
      this._rawKey = value.rawKey;
      this._rsaEncryptedKey = value.rsaEncryptedKey;
    }
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }

  // kms_key_service_account - computed: false, optional: true, required: false
  private _kmsKeyServiceAccount?: string; 
  public get kmsKeyServiceAccount() {
    return this.getStringAttribute('kms_key_service_account');
  }
  public set kmsKeyServiceAccount(value: string) {
    this._kmsKeyServiceAccount = value;
  }
  public resetKmsKeyServiceAccount() {
    this._kmsKeyServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyServiceAccountInput() {
    return this._kmsKeyServiceAccount;
  }

  // raw_key - computed: false, optional: true, required: false
  private _rawKey?: string; 
  public get rawKey() {
    return this.getStringAttribute('raw_key');
  }
  public set rawKey(value: string) {
    this._rawKey = value;
  }
  public resetRawKey() {
    this._rawKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawKeyInput() {
    return this._rawKey;
  }

  // rsa_encrypted_key - computed: false, optional: true, required: false
  private _rsaEncryptedKey?: string; 
  public get rsaEncryptedKey() {
    return this.getStringAttribute('rsa_encrypted_key');
  }
  public set rsaEncryptedKey(value: string) {
    this._rsaEncryptedKey = value;
  }
  public resetRsaEncryptedKey() {
    this._rsaEncryptedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaEncryptedKeyInput() {
    return this._rsaEncryptedKey;
  }
}
export interface BackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeature {
  /**
  *  Possible values: ["FEATURE_TYPE_UNSPECIFIED", "VIRTIO_SCSI_MULTIQUEUE", "WINDOWS", "MULTI_IP_SUBNET", "UEFI_COMPATIBLE", "SECURE_BOOT", "GVNIC", "SEV_CAPABLE", "BARE_METAL_LINUX_COMPATIBLE", "SUSPEND_RESUME_COMPATIBLE", "SEV_LIVE_MIGRATABLE", "SEV_SNP_CAPABLE", "TDX_CAPABLE", "IDPF", "SEV_LIVE_MIGRATABLE_V2"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#type BackupDrRestoreWorkload#type}
  */
  readonly type?: string;
}

export function backupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeatureToTerraform(struct?: BackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeature | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function backupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeatureToHclTerraform(struct?: BackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeature | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeatureOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeature | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeature | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
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

export class BackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeatureList extends cdktn.ComplexList {
  public internalValue? : BackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeature[] | cdktn.IResolvable

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
  public get(index: number): BackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeatureOutputReference {
    return new BackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeatureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupDrRestoreWorkloadDiskRestorePropertiesLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#key BackupDrRestoreWorkload#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#value BackupDrRestoreWorkload#value}
  */
  readonly value?: string;
}

export function backupDrRestoreWorkloadDiskRestorePropertiesLabelsToTerraform(struct?: BackupDrRestoreWorkloadDiskRestorePropertiesLabels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function backupDrRestoreWorkloadDiskRestorePropertiesLabelsToHclTerraform(struct?: BackupDrRestoreWorkloadDiskRestorePropertiesLabels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class BackupDrRestoreWorkloadDiskRestorePropertiesLabelsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupDrRestoreWorkloadDiskRestorePropertiesLabels | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: BackupDrRestoreWorkloadDiskRestorePropertiesLabels | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
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

export class BackupDrRestoreWorkloadDiskRestorePropertiesLabelsList extends cdktn.ComplexList {
  public internalValue? : BackupDrRestoreWorkloadDiskRestorePropertiesLabels[] | cdktn.IResolvable

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
  public get(index: number): BackupDrRestoreWorkloadDiskRestorePropertiesLabelsOutputReference {
    return new BackupDrRestoreWorkloadDiskRestorePropertiesLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#key BackupDrRestoreWorkload#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#value BackupDrRestoreWorkload#value}
  */
  readonly value?: string;
}

export function backupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTagsToTerraform(struct?: BackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function backupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTagsToHclTerraform(struct?: BackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class BackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: BackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
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

export class BackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTagsList extends cdktn.ComplexList {
  public internalValue? : BackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTags[] | cdktn.IResolvable

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
  public get(index: number): BackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTagsOutputReference {
    return new BackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupDrRestoreWorkloadDiskRestoreProperties {
  /**
  * Optional. The access mode of the disk. Possible values: ["READ_WRITE_SINGLE", "READ_WRITE_MANY", "READ_ONLY_MANY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#access_mode BackupDrRestoreWorkload#access_mode}
  */
  readonly accessMode?: string;
  /**
  * Optional. The architecture of the source disk. Possible values: ["ARCHITECTURE_UNSPECIFIED", "X86_64", "ARM64"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#architecture BackupDrRestoreWorkload#architecture}
  */
  readonly architecture?: string;
  /**
  * Optional. An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#description BackupDrRestoreWorkload#description}
  */
  readonly description?: string;
  /**
  * Optional. Indicates whether this disk is using confidential compute mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#enable_confidential_compute BackupDrRestoreWorkload#enable_confidential_compute}
  */
  readonly enableConfidentialCompute?: boolean | cdktn.IResolvable;
  /**
  * Optional. A list of publicly available licenses that are applicable to this backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#licenses BackupDrRestoreWorkload#licenses}
  */
  readonly licenses?: string[];
  /**
  * Required. Name of the disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#name BackupDrRestoreWorkload#name}
  */
  readonly name: string;
  /**
  * Optional. Physical block size of the persistent disk, in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#physical_block_size_bytes BackupDrRestoreWorkload#physical_block_size_bytes}
  */
  readonly physicalBlockSizeBytes?: number;
  /**
  * Optional. Indicates how many IOPS to provision for the disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#provisioned_iops BackupDrRestoreWorkload#provisioned_iops}
  */
  readonly provisionedIops?: number;
  /**
  * Optional. Indicates how much throughput to provision for the disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#provisioned_throughput BackupDrRestoreWorkload#provisioned_throughput}
  */
  readonly provisionedThroughput?: number;
  /**
  * Optional. Resource policies applied to this disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#resource_policy BackupDrRestoreWorkload#resource_policy}
  */
  readonly resourcePolicy?: string[];
  /**
  * Required. The size of the disk in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#size_gb BackupDrRestoreWorkload#size_gb}
  */
  readonly sizeGb: number;
  /**
  * Optional. The storage pool in which the new disk is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#storage_pool BackupDrRestoreWorkload#storage_pool}
  */
  readonly storagePool?: string;
  /**
  * Required. URL of the disk type resource describing which disk type to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#type BackupDrRestoreWorkload#type}
  */
  readonly type: string;
  /**
  * disk_encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#disk_encryption_key BackupDrRestoreWorkload#disk_encryption_key}
  */
  readonly diskEncryptionKey?: BackupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKey;
  /**
  * guest_os_feature block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#guest_os_feature BackupDrRestoreWorkload#guest_os_feature}
  */
  readonly guestOsFeature?: BackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeature[] | cdktn.IResolvable;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#labels BackupDrRestoreWorkload#labels}
  */
  readonly labels?: BackupDrRestoreWorkloadDiskRestorePropertiesLabels[] | cdktn.IResolvable;
  /**
  * resource_manager_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#resource_manager_tags BackupDrRestoreWorkload#resource_manager_tags}
  */
  readonly resourceManagerTags?: BackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTags[] | cdktn.IResolvable;
}

export function backupDrRestoreWorkloadDiskRestorePropertiesToTerraform(struct?: BackupDrRestoreWorkloadDiskRestorePropertiesOutputReference | BackupDrRestoreWorkloadDiskRestoreProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_mode: cdktn.stringToTerraform(struct!.accessMode),
    architecture: cdktn.stringToTerraform(struct!.architecture),
    description: cdktn.stringToTerraform(struct!.description),
    enable_confidential_compute: cdktn.booleanToTerraform(struct!.enableConfidentialCompute),
    licenses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.licenses),
    name: cdktn.stringToTerraform(struct!.name),
    physical_block_size_bytes: cdktn.numberToTerraform(struct!.physicalBlockSizeBytes),
    provisioned_iops: cdktn.numberToTerraform(struct!.provisionedIops),
    provisioned_throughput: cdktn.numberToTerraform(struct!.provisionedThroughput),
    resource_policy: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourcePolicy),
    size_gb: cdktn.numberToTerraform(struct!.sizeGb),
    storage_pool: cdktn.stringToTerraform(struct!.storagePool),
    type: cdktn.stringToTerraform(struct!.type),
    disk_encryption_key: backupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKeyToTerraform(struct!.diskEncryptionKey),
    guest_os_feature: cdktn.listMapper(backupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeatureToTerraform, true)(struct!.guestOsFeature),
    labels: cdktn.listMapper(backupDrRestoreWorkloadDiskRestorePropertiesLabelsToTerraform, true)(struct!.labels),
    resource_manager_tags: cdktn.listMapper(backupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTagsToTerraform, true)(struct!.resourceManagerTags),
  }
}


export function backupDrRestoreWorkloadDiskRestorePropertiesToHclTerraform(struct?: BackupDrRestoreWorkloadDiskRestorePropertiesOutputReference | BackupDrRestoreWorkloadDiskRestoreProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_mode: {
      value: cdktn.stringToHclTerraform(struct!.accessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    architecture: {
      value: cdktn.stringToHclTerraform(struct!.architecture),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_confidential_compute: {
      value: cdktn.booleanToHclTerraform(struct!.enableConfidentialCompute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    licenses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.licenses),
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
    physical_block_size_bytes: {
      value: cdktn.numberToHclTerraform(struct!.physicalBlockSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    provisioned_iops: {
      value: cdktn.numberToHclTerraform(struct!.provisionedIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    provisioned_throughput: {
      value: cdktn.numberToHclTerraform(struct!.provisionedThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_policy: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourcePolicy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    size_gb: {
      value: cdktn.numberToHclTerraform(struct!.sizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_pool: {
      value: cdktn.stringToHclTerraform(struct!.storagePool),
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
    disk_encryption_key: {
      value: backupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKeyToHclTerraform(struct!.diskEncryptionKey),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKeyList",
    },
    guest_os_feature: {
      value: cdktn.listMapperHcl(backupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeatureToHclTerraform, true)(struct!.guestOsFeature),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeatureList",
    },
    labels: {
      value: cdktn.listMapperHcl(backupDrRestoreWorkloadDiskRestorePropertiesLabelsToHclTerraform, true)(struct!.labels),
      isBlock: true,
      type: "set",
      storageClassType: "BackupDrRestoreWorkloadDiskRestorePropertiesLabelsList",
    },
    resource_manager_tags: {
      value: cdktn.listMapperHcl(backupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTagsToHclTerraform, true)(struct!.resourceManagerTags),
      isBlock: true,
      type: "set",
      storageClassType: "BackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrRestoreWorkloadDiskRestorePropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupDrRestoreWorkloadDiskRestoreProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessMode = this._accessMode;
    }
    if (this._architecture !== undefined) {
      hasAnyValues = true;
      internalValueResult.architecture = this._architecture;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enableConfidentialCompute !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConfidentialCompute = this._enableConfidentialCompute;
    }
    if (this._licenses !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenses = this._licenses;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._physicalBlockSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalBlockSizeBytes = this._physicalBlockSizeBytes;
    }
    if (this._provisionedIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedIops = this._provisionedIops;
    }
    if (this._provisionedThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedThroughput = this._provisionedThroughput;
    }
    if (this._resourcePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePolicy = this._resourcePolicy;
    }
    if (this._sizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGb = this._sizeGb;
    }
    if (this._storagePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePool = this._storagePool;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._diskEncryptionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionKey = this._diskEncryptionKey?.internalValue;
    }
    if (this._guestOsFeature?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestOsFeature = this._guestOsFeature?.internalValue;
    }
    if (this._labels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels?.internalValue;
    }
    if (this._resourceManagerTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceManagerTags = this._resourceManagerTags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadDiskRestoreProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessMode = undefined;
      this._architecture = undefined;
      this._description = undefined;
      this._enableConfidentialCompute = undefined;
      this._licenses = undefined;
      this._name = undefined;
      this._physicalBlockSizeBytes = undefined;
      this._provisionedIops = undefined;
      this._provisionedThroughput = undefined;
      this._resourcePolicy = undefined;
      this._sizeGb = undefined;
      this._storagePool = undefined;
      this._type = undefined;
      this._diskEncryptionKey.internalValue = undefined;
      this._guestOsFeature.internalValue = undefined;
      this._labels.internalValue = undefined;
      this._resourceManagerTags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessMode = value.accessMode;
      this._architecture = value.architecture;
      this._description = value.description;
      this._enableConfidentialCompute = value.enableConfidentialCompute;
      this._licenses = value.licenses;
      this._name = value.name;
      this._physicalBlockSizeBytes = value.physicalBlockSizeBytes;
      this._provisionedIops = value.provisionedIops;
      this._provisionedThroughput = value.provisionedThroughput;
      this._resourcePolicy = value.resourcePolicy;
      this._sizeGb = value.sizeGb;
      this._storagePool = value.storagePool;
      this._type = value.type;
      this._diskEncryptionKey.internalValue = value.diskEncryptionKey;
      this._guestOsFeature.internalValue = value.guestOsFeature;
      this._labels.internalValue = value.labels;
      this._resourceManagerTags.internalValue = value.resourceManagerTags;
    }
  }

  // access_mode - computed: false, optional: true, required: false
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  public resetAccessMode() {
    this._accessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

  // architecture - computed: false, optional: true, required: false
  private _architecture?: string; 
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  public resetArchitecture() {
    this._architecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture;
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

  // enable_confidential_compute - computed: false, optional: true, required: false
  private _enableConfidentialCompute?: boolean | cdktn.IResolvable; 
  public get enableConfidentialCompute() {
    return this.getBooleanAttribute('enable_confidential_compute');
  }
  public set enableConfidentialCompute(value: boolean | cdktn.IResolvable) {
    this._enableConfidentialCompute = value;
  }
  public resetEnableConfidentialCompute() {
    this._enableConfidentialCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConfidentialComputeInput() {
    return this._enableConfidentialCompute;
  }

  // licenses - computed: false, optional: true, required: false
  private _licenses?: string[]; 
  public get licenses() {
    return this.getListAttribute('licenses');
  }
  public set licenses(value: string[]) {
    this._licenses = value;
  }
  public resetLicenses() {
    this._licenses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licensesInput() {
    return this._licenses;
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

  // physical_block_size_bytes - computed: false, optional: true, required: false
  private _physicalBlockSizeBytes?: number; 
  public get physicalBlockSizeBytes() {
    return this.getNumberAttribute('physical_block_size_bytes');
  }
  public set physicalBlockSizeBytes(value: number) {
    this._physicalBlockSizeBytes = value;
  }
  public resetPhysicalBlockSizeBytes() {
    this._physicalBlockSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalBlockSizeBytesInput() {
    return this._physicalBlockSizeBytes;
  }

  // provisioned_iops - computed: false, optional: true, required: false
  private _provisionedIops?: number; 
  public get provisionedIops() {
    return this.getNumberAttribute('provisioned_iops');
  }
  public set provisionedIops(value: number) {
    this._provisionedIops = value;
  }
  public resetProvisionedIops() {
    this._provisionedIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedIopsInput() {
    return this._provisionedIops;
  }

  // provisioned_throughput - computed: false, optional: true, required: false
  private _provisionedThroughput?: number; 
  public get provisionedThroughput() {
    return this.getNumberAttribute('provisioned_throughput');
  }
  public set provisionedThroughput(value: number) {
    this._provisionedThroughput = value;
  }
  public resetProvisionedThroughput() {
    this._provisionedThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedThroughputInput() {
    return this._provisionedThroughput;
  }

  // resource_policy - computed: false, optional: true, required: false
  private _resourcePolicy?: string[]; 
  public get resourcePolicy() {
    return this.getListAttribute('resource_policy');
  }
  public set resourcePolicy(value: string[]) {
    this._resourcePolicy = value;
  }
  public resetResourcePolicy() {
    this._resourcePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePolicyInput() {
    return this._resourcePolicy;
  }

  // size_gb - computed: false, optional: false, required: true
  private _sizeGb?: number; 
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
  public set sizeGb(value: number) {
    this._sizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGbInput() {
    return this._sizeGb;
  }

  // storage_pool - computed: false, optional: true, required: false
  private _storagePool?: string; 
  public get storagePool() {
    return this.getStringAttribute('storage_pool');
  }
  public set storagePool(value: string) {
    this._storagePool = value;
  }
  public resetStoragePool() {
    this._storagePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolInput() {
    return this._storagePool;
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

  // disk_encryption_key - computed: false, optional: true, required: false
  private _diskEncryptionKey = new BackupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKeyOutputReference(this, "disk_encryption_key");
  public get diskEncryptionKey() {
    return this._diskEncryptionKey;
  }
  public putDiskEncryptionKey(value: BackupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKey) {
    this._diskEncryptionKey.internalValue = value;
  }
  public resetDiskEncryptionKey() {
    this._diskEncryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionKeyInput() {
    return this._diskEncryptionKey.internalValue;
  }

  // guest_os_feature - computed: false, optional: true, required: false
  private _guestOsFeature = new BackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeatureList(this, "guest_os_feature", false);
  public get guestOsFeature() {
    return this._guestOsFeature;
  }
  public putGuestOsFeature(value: BackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeature[] | cdktn.IResolvable) {
    this._guestOsFeature.internalValue = value;
  }
  public resetGuestOsFeature() {
    this._guestOsFeature.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestOsFeatureInput() {
    return this._guestOsFeature.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new BackupDrRestoreWorkloadDiskRestorePropertiesLabelsList(this, "labels", true);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: BackupDrRestoreWorkloadDiskRestorePropertiesLabels[] | cdktn.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // resource_manager_tags - computed: false, optional: true, required: false
  private _resourceManagerTags = new BackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTagsList(this, "resource_manager_tags", true);
  public get resourceManagerTags() {
    return this._resourceManagerTags;
  }
  public putResourceManagerTags(value: BackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTags[] | cdktn.IResolvable) {
    this._resourceManagerTags.internalValue = value;
  }
  public resetResourceManagerTags() {
    this._resourceManagerTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagerTagsInput() {
    return this._resourceManagerTags.internalValue;
  }
}
export interface BackupDrRestoreWorkloadDiskTargetEnvironment {
  /**
  * Required. Target project for the disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#project BackupDrRestoreWorkload#project}
  */
  readonly project: string;
  /**
  * If true, use the BackupDR P4SA credentials for same-project restores. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#use_project_service_account BackupDrRestoreWorkload#use_project_service_account}
  */
  readonly useProjectServiceAccount?: boolean | cdktn.IResolvable;
  /**
  * Required. Target zone for the disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#zone BackupDrRestoreWorkload#zone}
  */
  readonly zone: string;
}

export function backupDrRestoreWorkloadDiskTargetEnvironmentToTerraform(struct?: BackupDrRestoreWorkloadDiskTargetEnvironmentOutputReference | BackupDrRestoreWorkloadDiskTargetEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    project: cdktn.stringToTerraform(struct!.project),
    use_project_service_account: cdktn.booleanToTerraform(struct!.useProjectServiceAccount),
    zone: cdktn.stringToTerraform(struct!.zone),
  }
}


export function backupDrRestoreWorkloadDiskTargetEnvironmentToHclTerraform(struct?: BackupDrRestoreWorkloadDiskTargetEnvironmentOutputReference | BackupDrRestoreWorkloadDiskTargetEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    project: {
      value: cdktn.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_project_service_account: {
      value: cdktn.booleanToHclTerraform(struct!.useProjectServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zone: {
      value: cdktn.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrRestoreWorkloadDiskTargetEnvironmentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupDrRestoreWorkloadDiskTargetEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._useProjectServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.useProjectServiceAccount = this._useProjectServiceAccount;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadDiskTargetEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._project = undefined;
      this._useProjectServiceAccount = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._project = value.project;
      this._useProjectServiceAccount = value.useProjectServiceAccount;
      this._zone = value.zone;
    }
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // use_project_service_account - computed: false, optional: true, required: false
  private _useProjectServiceAccount?: boolean | cdktn.IResolvable; 
  public get useProjectServiceAccount() {
    return this.getBooleanAttribute('use_project_service_account');
  }
  public set useProjectServiceAccount(value: boolean | cdktn.IResolvable) {
    this._useProjectServiceAccount = value;
  }
  public resetUseProjectServiceAccount() {
    this._useProjectServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useProjectServiceAccountInput() {
    return this._useProjectServiceAccount;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface BackupDrRestoreWorkloadRegionDiskTargetEnvironment {
  /**
  * Required. Target project for the disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#project BackupDrRestoreWorkload#project}
  */
  readonly project: string;
  /**
  * Required. Target region for the disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#region BackupDrRestoreWorkload#region}
  */
  readonly region: string;
  /**
  * Required. Target URLs of the replica zones for the disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#replica_zones BackupDrRestoreWorkload#replica_zones}
  */
  readonly replicaZones: string[];
  /**
  * If true, use the BackupDR P4SA credentials for same-project restores. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#use_project_service_account BackupDrRestoreWorkload#use_project_service_account}
  */
  readonly useProjectServiceAccount?: boolean | cdktn.IResolvable;
}

export function backupDrRestoreWorkloadRegionDiskTargetEnvironmentToTerraform(struct?: BackupDrRestoreWorkloadRegionDiskTargetEnvironmentOutputReference | BackupDrRestoreWorkloadRegionDiskTargetEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    project: cdktn.stringToTerraform(struct!.project),
    region: cdktn.stringToTerraform(struct!.region),
    replica_zones: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.replicaZones),
    use_project_service_account: cdktn.booleanToTerraform(struct!.useProjectServiceAccount),
  }
}


export function backupDrRestoreWorkloadRegionDiskTargetEnvironmentToHclTerraform(struct?: BackupDrRestoreWorkloadRegionDiskTargetEnvironmentOutputReference | BackupDrRestoreWorkloadRegionDiskTargetEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    project: {
      value: cdktn.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_zones: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.replicaZones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    use_project_service_account: {
      value: cdktn.booleanToHclTerraform(struct!.useProjectServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrRestoreWorkloadRegionDiskTargetEnvironmentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupDrRestoreWorkloadRegionDiskTargetEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._replicaZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaZones = this._replicaZones;
    }
    if (this._useProjectServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.useProjectServiceAccount = this._useProjectServiceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrRestoreWorkloadRegionDiskTargetEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._project = undefined;
      this._region = undefined;
      this._replicaZones = undefined;
      this._useProjectServiceAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._project = value.project;
      this._region = value.region;
      this._replicaZones = value.replicaZones;
      this._useProjectServiceAccount = value.useProjectServiceAccount;
    }
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // replica_zones - computed: false, optional: false, required: true
  private _replicaZones?: string[]; 
  public get replicaZones() {
    return this.getListAttribute('replica_zones');
  }
  public set replicaZones(value: string[]) {
    this._replicaZones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaZonesInput() {
    return this._replicaZones;
  }

  // use_project_service_account - computed: false, optional: true, required: false
  private _useProjectServiceAccount?: boolean | cdktn.IResolvable; 
  public get useProjectServiceAccount() {
    return this.getBooleanAttribute('use_project_service_account');
  }
  public set useProjectServiceAccount(value: boolean | cdktn.IResolvable) {
    this._useProjectServiceAccount = value;
  }
  public resetUseProjectServiceAccount() {
    this._useProjectServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useProjectServiceAccountInput() {
    return this._useProjectServiceAccount;
  }
}
export interface BackupDrRestoreWorkloadTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#create BackupDrRestoreWorkload#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#delete BackupDrRestoreWorkload#delete}
  */
  readonly delete?: string;
}

export function backupDrRestoreWorkloadTimeoutsToTerraform(struct?: BackupDrRestoreWorkloadTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function backupDrRestoreWorkloadTimeoutsToHclTerraform(struct?: BackupDrRestoreWorkloadTimeouts | cdktn.IResolvable): any {
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

export class BackupDrRestoreWorkloadTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BackupDrRestoreWorkloadTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BackupDrRestoreWorkloadTimeouts | cdktn.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload google_backup_dr_restore_workload}
*/
export class BackupDrRestoreWorkload extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_backup_dr_restore_workload";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BackupDrRestoreWorkload resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BackupDrRestoreWorkload to import
  * @param importFromId The id of the existing BackupDrRestoreWorkload that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BackupDrRestoreWorkload to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_backup_dr_restore_workload", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/backup_dr_restore_workload google_backup_dr_restore_workload} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupDrRestoreWorkloadConfig
  */
  public constructor(scope: Construct, id: string, config: BackupDrRestoreWorkloadConfig) {
    super(scope, id, {
      terraformResourceType: 'google_backup_dr_restore_workload',
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
    this._backupId = config.backupId;
    this._backupVaultId = config.backupVaultId;
    this._clearOverridesFieldMask = config.clearOverridesFieldMask;
    this._dataSourceId = config.dataSourceId;
    this._deleteRestoredInstance = config.deleteRestoredInstance;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._requestId = config.requestId;
    this._computeInstanceRestoreProperties.internalValue = config.computeInstanceRestoreProperties;
    this._computeInstanceTargetEnvironment.internalValue = config.computeInstanceTargetEnvironment;
    this._diskRestoreProperties.internalValue = config.diskRestoreProperties;
    this._diskTargetEnvironment.internalValue = config.diskTargetEnvironment;
    this._regionDiskTargetEnvironment.internalValue = config.regionDiskTargetEnvironment;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_id - computed: false, optional: false, required: true
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // backup_vault_id - computed: false, optional: false, required: true
  private _backupVaultId?: string; 
  public get backupVaultId() {
    return this.getStringAttribute('backup_vault_id');
  }
  public set backupVaultId(value: string) {
    this._backupVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupVaultIdInput() {
    return this._backupVaultId;
  }

  // clear_overrides_field_mask - computed: false, optional: true, required: false
  private _clearOverridesFieldMask?: string; 
  public get clearOverridesFieldMask() {
    return this.getStringAttribute('clear_overrides_field_mask');
  }
  public set clearOverridesFieldMask(value: string) {
    this._clearOverridesFieldMask = value;
  }
  public resetClearOverridesFieldMask() {
    this._clearOverridesFieldMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearOverridesFieldMaskInput() {
    return this._clearOverridesFieldMask;
  }

  // data_source_id - computed: false, optional: false, required: true
  private _dataSourceId?: string; 
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }
  public set dataSourceId(value: string) {
    this._dataSourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceIdInput() {
    return this._dataSourceId;
  }

  // delete_restored_instance - computed: false, optional: true, required: false
  private _deleteRestoredInstance?: boolean | cdktn.IResolvable; 
  public get deleteRestoredInstance() {
    return this.getBooleanAttribute('delete_restored_instance');
  }
  public set deleteRestoredInstance(value: boolean | cdktn.IResolvable) {
    this._deleteRestoredInstance = value;
  }
  public resetDeleteRestoredInstance() {
    this._deleteRestoredInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRestoredInstanceInput() {
    return this._deleteRestoredInstance;
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

  // request_id - computed: false, optional: true, required: false
  private _requestId?: string; 
  public get requestId() {
    return this.getStringAttribute('request_id');
  }
  public set requestId(value: string) {
    this._requestId = value;
  }
  public resetRequestId() {
    this._requestId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestIdInput() {
    return this._requestId;
  }

  // target_resource - computed: true, optional: false, required: false
  private _targetResource = new BackupDrRestoreWorkloadTargetResourceList(this, "target_resource", false);
  public get targetResource() {
    return this._targetResource;
  }

  // compute_instance_restore_properties - computed: false, optional: true, required: false
  private _computeInstanceRestoreProperties = new BackupDrRestoreWorkloadComputeInstanceRestorePropertiesOutputReference(this, "compute_instance_restore_properties");
  public get computeInstanceRestoreProperties() {
    return this._computeInstanceRestoreProperties;
  }
  public putComputeInstanceRestoreProperties(value: BackupDrRestoreWorkloadComputeInstanceRestoreProperties) {
    this._computeInstanceRestoreProperties.internalValue = value;
  }
  public resetComputeInstanceRestoreProperties() {
    this._computeInstanceRestoreProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInstanceRestorePropertiesInput() {
    return this._computeInstanceRestoreProperties.internalValue;
  }

  // compute_instance_target_environment - computed: false, optional: true, required: false
  private _computeInstanceTargetEnvironment = new BackupDrRestoreWorkloadComputeInstanceTargetEnvironmentOutputReference(this, "compute_instance_target_environment");
  public get computeInstanceTargetEnvironment() {
    return this._computeInstanceTargetEnvironment;
  }
  public putComputeInstanceTargetEnvironment(value: BackupDrRestoreWorkloadComputeInstanceTargetEnvironment) {
    this._computeInstanceTargetEnvironment.internalValue = value;
  }
  public resetComputeInstanceTargetEnvironment() {
    this._computeInstanceTargetEnvironment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInstanceTargetEnvironmentInput() {
    return this._computeInstanceTargetEnvironment.internalValue;
  }

  // disk_restore_properties - computed: false, optional: true, required: false
  private _diskRestoreProperties = new BackupDrRestoreWorkloadDiskRestorePropertiesOutputReference(this, "disk_restore_properties");
  public get diskRestoreProperties() {
    return this._diskRestoreProperties;
  }
  public putDiskRestoreProperties(value: BackupDrRestoreWorkloadDiskRestoreProperties) {
    this._diskRestoreProperties.internalValue = value;
  }
  public resetDiskRestoreProperties() {
    this._diskRestoreProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskRestorePropertiesInput() {
    return this._diskRestoreProperties.internalValue;
  }

  // disk_target_environment - computed: false, optional: true, required: false
  private _diskTargetEnvironment = new BackupDrRestoreWorkloadDiskTargetEnvironmentOutputReference(this, "disk_target_environment");
  public get diskTargetEnvironment() {
    return this._diskTargetEnvironment;
  }
  public putDiskTargetEnvironment(value: BackupDrRestoreWorkloadDiskTargetEnvironment) {
    this._diskTargetEnvironment.internalValue = value;
  }
  public resetDiskTargetEnvironment() {
    this._diskTargetEnvironment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTargetEnvironmentInput() {
    return this._diskTargetEnvironment.internalValue;
  }

  // region_disk_target_environment - computed: false, optional: true, required: false
  private _regionDiskTargetEnvironment = new BackupDrRestoreWorkloadRegionDiskTargetEnvironmentOutputReference(this, "region_disk_target_environment");
  public get regionDiskTargetEnvironment() {
    return this._regionDiskTargetEnvironment;
  }
  public putRegionDiskTargetEnvironment(value: BackupDrRestoreWorkloadRegionDiskTargetEnvironment) {
    this._regionDiskTargetEnvironment.internalValue = value;
  }
  public resetRegionDiskTargetEnvironment() {
    this._regionDiskTargetEnvironment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionDiskTargetEnvironmentInput() {
    return this._regionDiskTargetEnvironment.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BackupDrRestoreWorkloadTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BackupDrRestoreWorkloadTimeouts) {
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
      backup_id: cdktn.stringToTerraform(this._backupId),
      backup_vault_id: cdktn.stringToTerraform(this._backupVaultId),
      clear_overrides_field_mask: cdktn.stringToTerraform(this._clearOverridesFieldMask),
      data_source_id: cdktn.stringToTerraform(this._dataSourceId),
      delete_restored_instance: cdktn.booleanToTerraform(this._deleteRestoredInstance),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      request_id: cdktn.stringToTerraform(this._requestId),
      compute_instance_restore_properties: backupDrRestoreWorkloadComputeInstanceRestorePropertiesToTerraform(this._computeInstanceRestoreProperties.internalValue),
      compute_instance_target_environment: backupDrRestoreWorkloadComputeInstanceTargetEnvironmentToTerraform(this._computeInstanceTargetEnvironment.internalValue),
      disk_restore_properties: backupDrRestoreWorkloadDiskRestorePropertiesToTerraform(this._diskRestoreProperties.internalValue),
      disk_target_environment: backupDrRestoreWorkloadDiskTargetEnvironmentToTerraform(this._diskTargetEnvironment.internalValue),
      region_disk_target_environment: backupDrRestoreWorkloadRegionDiskTargetEnvironmentToTerraform(this._regionDiskTargetEnvironment.internalValue),
      timeouts: backupDrRestoreWorkloadTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_id: {
        value: cdktn.stringToHclTerraform(this._backupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_vault_id: {
        value: cdktn.stringToHclTerraform(this._backupVaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clear_overrides_field_mask: {
        value: cdktn.stringToHclTerraform(this._clearOverridesFieldMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_source_id: {
        value: cdktn.stringToHclTerraform(this._dataSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_restored_instance: {
        value: cdktn.booleanToHclTerraform(this._deleteRestoredInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      request_id: {
        value: cdktn.stringToHclTerraform(this._requestId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_instance_restore_properties: {
        value: backupDrRestoreWorkloadComputeInstanceRestorePropertiesToHclTerraform(this._computeInstanceRestoreProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BackupDrRestoreWorkloadComputeInstanceRestorePropertiesList",
      },
      compute_instance_target_environment: {
        value: backupDrRestoreWorkloadComputeInstanceTargetEnvironmentToHclTerraform(this._computeInstanceTargetEnvironment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BackupDrRestoreWorkloadComputeInstanceTargetEnvironmentList",
      },
      disk_restore_properties: {
        value: backupDrRestoreWorkloadDiskRestorePropertiesToHclTerraform(this._diskRestoreProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BackupDrRestoreWorkloadDiskRestorePropertiesList",
      },
      disk_target_environment: {
        value: backupDrRestoreWorkloadDiskTargetEnvironmentToHclTerraform(this._diskTargetEnvironment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BackupDrRestoreWorkloadDiskTargetEnvironmentList",
      },
      region_disk_target_environment: {
        value: backupDrRestoreWorkloadRegionDiskTargetEnvironmentToHclTerraform(this._regionDiskTargetEnvironment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BackupDrRestoreWorkloadRegionDiskTargetEnvironmentList",
      },
      timeouts: {
        value: backupDrRestoreWorkloadTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BackupDrRestoreWorkloadTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
