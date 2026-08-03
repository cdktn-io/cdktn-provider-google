/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_storage_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataGoogleComputeStoragePoolConfig extends cdktn.TerraformMetaArguments {
  /**
  * Name of the resource. Provided by the client when the resource is created.
  * The name must be 1-63 characters long, and comply with RFC1035.
  * Specifically, the name must be 1-63 characters long and match
  * the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?'
  * which means the first character must be a lowercase letter,
  * and all following characters must be a dash, lowercase letter, or digit,
  * except the last character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_storage_pool#name DataGoogleComputeStoragePool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_storage_pool#project DataGoogleComputeStoragePool#project}
  */
  readonly project?: string;
  /**
  * A reference to the zone where the storage pool resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_storage_pool#zone DataGoogleComputeStoragePool#zone}
  */
  readonly zone: string;
}
export interface DataGoogleComputeStoragePoolParams {
}

export function dataGoogleComputeStoragePoolParamsToTerraform(struct?: DataGoogleComputeStoragePoolParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleComputeStoragePoolParamsToHclTerraform(struct?: DataGoogleComputeStoragePoolParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeStoragePoolParamsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleComputeStoragePoolParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeStoragePoolParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_manager_tags - computed: true, optional: false, required: false
  private _resourceManagerTags = new cdktn.StringMap(this, "resource_manager_tags");
  public get resourceManagerTags() {
    return this._resourceManagerTags;
  }
}

export class DataGoogleComputeStoragePoolParamsList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleComputeStoragePoolParamsOutputReference {
    return new DataGoogleComputeStoragePoolParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeStoragePoolResourceStatus {
}

export function dataGoogleComputeStoragePoolResourceStatusToTerraform(struct?: DataGoogleComputeStoragePoolResourceStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleComputeStoragePoolResourceStatusToHclTerraform(struct?: DataGoogleComputeStoragePoolResourceStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeStoragePoolResourceStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleComputeStoragePoolResourceStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeStoragePoolResourceStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_count - computed: true, optional: false, required: false
  public get diskCount() {
    return this.getStringAttribute('disk_count');
  }

  // last_resize_timestamp - computed: true, optional: false, required: false
  public get lastResizeTimestamp() {
    return this.getStringAttribute('last_resize_timestamp');
  }

  // max_total_provisioned_disk_capacity_gb - computed: true, optional: false, required: false
  public get maxTotalProvisionedDiskCapacityGb() {
    return this.getStringAttribute('max_total_provisioned_disk_capacity_gb');
  }

  // pool_used_capacity_bytes - computed: true, optional: false, required: false
  public get poolUsedCapacityBytes() {
    return this.getStringAttribute('pool_used_capacity_bytes');
  }

  // pool_used_iops - computed: true, optional: false, required: false
  public get poolUsedIops() {
    return this.getStringAttribute('pool_used_iops');
  }

  // pool_used_throughput - computed: true, optional: false, required: false
  public get poolUsedThroughput() {
    return this.getStringAttribute('pool_used_throughput');
  }

  // pool_user_written_bytes - computed: true, optional: false, required: false
  public get poolUserWrittenBytes() {
    return this.getStringAttribute('pool_user_written_bytes');
  }

  // total_provisioned_disk_capacity_gb - computed: true, optional: false, required: false
  public get totalProvisionedDiskCapacityGb() {
    return this.getStringAttribute('total_provisioned_disk_capacity_gb');
  }

  // total_provisioned_disk_iops - computed: true, optional: false, required: false
  public get totalProvisionedDiskIops() {
    return this.getStringAttribute('total_provisioned_disk_iops');
  }

  // total_provisioned_disk_throughput - computed: true, optional: false, required: false
  public get totalProvisionedDiskThroughput() {
    return this.getStringAttribute('total_provisioned_disk_throughput');
  }
}

export class DataGoogleComputeStoragePoolResourceStatusList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleComputeStoragePoolResourceStatusOutputReference {
    return new DataGoogleComputeStoragePoolResourceStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeStoragePoolStatus {
}

export function dataGoogleComputeStoragePoolStatusToTerraform(struct?: DataGoogleComputeStoragePoolStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleComputeStoragePoolStatusToHclTerraform(struct?: DataGoogleComputeStoragePoolStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeStoragePoolStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleComputeStoragePoolStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeStoragePoolStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_count - computed: true, optional: false, required: false
  public get diskCount() {
    return this.getStringAttribute('disk_count');
  }

  // last_resize_timestamp - computed: true, optional: false, required: false
  public get lastResizeTimestamp() {
    return this.getStringAttribute('last_resize_timestamp');
  }

  // max_total_provisioned_disk_capacity_gb - computed: true, optional: false, required: false
  public get maxTotalProvisionedDiskCapacityGb() {
    return this.getStringAttribute('max_total_provisioned_disk_capacity_gb');
  }

  // pool_used_capacity_bytes - computed: true, optional: false, required: false
  public get poolUsedCapacityBytes() {
    return this.getStringAttribute('pool_used_capacity_bytes');
  }

  // pool_used_iops - computed: true, optional: false, required: false
  public get poolUsedIops() {
    return this.getStringAttribute('pool_used_iops');
  }

  // pool_used_throughput - computed: true, optional: false, required: false
  public get poolUsedThroughput() {
    return this.getStringAttribute('pool_used_throughput');
  }

  // pool_user_written_bytes - computed: true, optional: false, required: false
  public get poolUserWrittenBytes() {
    return this.getStringAttribute('pool_user_written_bytes');
  }

  // total_provisioned_disk_capacity_gb - computed: true, optional: false, required: false
  public get totalProvisionedDiskCapacityGb() {
    return this.getStringAttribute('total_provisioned_disk_capacity_gb');
  }

  // total_provisioned_disk_iops - computed: true, optional: false, required: false
  public get totalProvisionedDiskIops() {
    return this.getStringAttribute('total_provisioned_disk_iops');
  }

  // total_provisioned_disk_throughput - computed: true, optional: false, required: false
  public get totalProvisionedDiskThroughput() {
    return this.getStringAttribute('total_provisioned_disk_throughput');
  }
}

export class DataGoogleComputeStoragePoolStatusList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleComputeStoragePoolStatusOutputReference {
    return new DataGoogleComputeStoragePoolStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_storage_pool google_compute_storage_pool}
*/
export class DataGoogleComputeStoragePool extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_storage_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataGoogleComputeStoragePool resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleComputeStoragePool to import
  * @param importFromId The id of the existing DataGoogleComputeStoragePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_storage_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleComputeStoragePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_storage_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_storage_pool google_compute_storage_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleComputeStoragePoolConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleComputeStoragePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_storage_pool',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.42.0',
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
    this._name = config.name;
    this._project = config.project;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity_provisioning_type - computed: true, optional: false, required: false
  public get capacityProvisioningType() {
    return this.getStringAttribute('capacity_provisioning_type');
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // deletion_policy - computed: true, optional: false, required: false
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }

  // deletion_protection - computed: true, optional: false, required: false
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // label_fingerprint - computed: true, optional: false, required: false
  public get labelFingerprint() {
    return this.getStringAttribute('label_fingerprint');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktn.StringMap(this, "labels");
  public get labels() {
    return this._labels;
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

  // params - computed: true, optional: false, required: false
  private _params = new DataGoogleComputeStoragePoolParamsList(this, "params", false);
  public get params() {
    return this._params;
  }

  // performance_provisioning_type - computed: true, optional: false, required: false
  public get performanceProvisioningType() {
    return this.getStringAttribute('performance_provisioning_type');
  }

  // pool_provisioned_capacity_gb - computed: true, optional: false, required: false
  public get poolProvisionedCapacityGb() {
    return this.getStringAttribute('pool_provisioned_capacity_gb');
  }

  // pool_provisioned_iops - computed: true, optional: false, required: false
  public get poolProvisionedIops() {
    return this.getStringAttribute('pool_provisioned_iops');
  }

  // pool_provisioned_throughput - computed: true, optional: false, required: false
  public get poolProvisionedThroughput() {
    return this.getStringAttribute('pool_provisioned_throughput');
  }

  // project - computed: false, optional: true, required: false
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

  // resource_status - computed: true, optional: false, required: false
  private _resourceStatus = new DataGoogleComputeStoragePoolResourceStatusList(this, "resource_status", false);
  public get resourceStatus() {
    return this._resourceStatus;
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataGoogleComputeStoragePoolStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // storage_pool_type - computed: true, optional: false, required: false
  public get storagePoolType() {
    return this.getStringAttribute('storage_pool_type');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      zone: cdktn.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      zone: {
        value: cdktn.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
