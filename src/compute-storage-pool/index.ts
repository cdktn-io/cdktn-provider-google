/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_storage_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ComputeStoragePoolConfig extends cdktn.TerraformMetaArguments {
  /**
  * Provisioning type of the byte capacity of the pool. Possible values: ["STANDARD", "ADVANCED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_storage_pool#capacity_provisioning_type ComputeStoragePool#capacity_provisioning_type}
  */
  readonly capacityProvisioningType?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_storage_pool#deletion_policy ComputeStoragePool#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Whether Terraform will be prevented from destroying the StoragePool.
  * When the field is set to true or unset in Terraform state, a 'terraform apply'
  * or 'terraform destroy' that would delete the StoragePool will fail.
  * When the field is set to false, deleting the StoragePool is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_storage_pool#deletion_protection ComputeStoragePool#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktn.IResolvable;
  /**
  * A description of this resource. Provide this property when you create the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_storage_pool#description ComputeStoragePool#description}
  */
  readonly description?: string;
  /**
  * Labels to apply to this storage pool. These can be later modified by the setLabels method.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_storage_pool#labels ComputeStoragePool#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the resource. Provided by the client when the resource is created.
  * The name must be 1-63 characters long, and comply with RFC1035.
  * Specifically, the name must be 1-63 characters long and match
  * the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?'
  * which means the first character must be a lowercase letter,
  * and all following characters must be a dash, lowercase letter, or digit,
  * except the last character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_storage_pool#name ComputeStoragePool#name}
  */
  readonly name: string;
  /**
  * Provisioning type of the performance-related parameters of the pool, such as throughput and IOPS. Possible values: ["STANDARD", "ADVANCED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_storage_pool#performance_provisioning_type ComputeStoragePool#performance_provisioning_type}
  */
  readonly performanceProvisioningType?: string;
  /**
  * Size, in GiB, of the storage pool. For more information about the size limits,
  * see https://cloud.google.com/compute/docs/disks/storage-pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_storage_pool#pool_provisioned_capacity_gb ComputeStoragePool#pool_provisioned_capacity_gb}
  */
  readonly poolProvisionedCapacityGb: string;
  /**
  * Provisioned IOPS of the storage pool.
  * Only relevant if the storage pool type is 'hyperdisk-balanced'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_storage_pool#pool_provisioned_iops ComputeStoragePool#pool_provisioned_iops}
  */
  readonly poolProvisionedIops?: string;
  /**
  * Provisioned throughput, in MB/s, of the storage pool.
  * Only relevant if the storage pool type is 'hyperdisk-balanced' or 'hyperdisk-throughput'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_storage_pool#pool_provisioned_throughput ComputeStoragePool#pool_provisioned_throughput}
  */
  readonly poolProvisionedThroughput: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_storage_pool#project ComputeStoragePool#project}
  */
  readonly project?: string;
  /**
  * Type of the storage pool. For example, the
  * following are valid values:
  * 
  * * 'https://www.googleapis.com/compute/v1/projects/{project_id}/zones/{zone}/storagePoolTypes/hyperdisk-balanced'
  * * 'hyperdisk-throughput'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_storage_pool#storage_pool_type ComputeStoragePool#storage_pool_type}
  */
  readonly storagePoolType: string;
  /**
  * A reference to the zone where the storage pool resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_storage_pool#zone ComputeStoragePool#zone}
  */
  readonly zone?: string;
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_storage_pool#params ComputeStoragePool#params}
  */
  readonly params?: ComputeStoragePoolParams;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_storage_pool#timeouts ComputeStoragePool#timeouts}
  */
  readonly timeouts?: ComputeStoragePoolTimeouts;
}
export interface ComputeStoragePoolResourceStatus {
}

export function computeStoragePoolResourceStatusToTerraform(struct?: ComputeStoragePoolResourceStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function computeStoragePoolResourceStatusToHclTerraform(struct?: ComputeStoragePoolResourceStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeStoragePoolResourceStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeStoragePoolResourceStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeStoragePoolResourceStatus | undefined) {
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

export class ComputeStoragePoolResourceStatusList extends cdktn.ComplexList {

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
  public get(index: number): ComputeStoragePoolResourceStatusOutputReference {
    return new ComputeStoragePoolResourceStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeStoragePoolStatus {
}

export function computeStoragePoolStatusToTerraform(struct?: ComputeStoragePoolStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function computeStoragePoolStatusToHclTerraform(struct?: ComputeStoragePoolStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeStoragePoolStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeStoragePoolStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeStoragePoolStatus | undefined) {
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

export class ComputeStoragePoolStatusList extends cdktn.ComplexList {

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
  public get(index: number): ComputeStoragePoolStatusOutputReference {
    return new ComputeStoragePoolStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeStoragePoolParams {
  /**
  * Resource manager tags to be bound to the storage pool. Tag keys and values have the
  * same definition as resource manager tags. Keys and values can be either in numeric format,
  * such as tagKeys/{tag_key_id} and tagValues/{tag_value_id} or in namespaced format such as
  * {org_id|projectId}/{tag_key_short_name} and {tag_value_short_name}. The field is ignored when empty.
  * The field is immutable and causes resource replacement when mutated. This field is only
  * set at create time and modifying this field after creation will trigger recreation.
  * To apply tags to an existing resource, see the google_tags_tag_binding resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_storage_pool#resource_manager_tags ComputeStoragePool#resource_manager_tags}
  */
  readonly resourceManagerTags?: { [key: string]: string };
}

export function computeStoragePoolParamsToTerraform(struct?: ComputeStoragePoolParamsOutputReference | ComputeStoragePoolParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_manager_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.resourceManagerTags),
  }
}


export function computeStoragePoolParamsToHclTerraform(struct?: ComputeStoragePoolParamsOutputReference | ComputeStoragePoolParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_manager_tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.resourceManagerTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeStoragePoolParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeStoragePoolParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceManagerTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceManagerTags = this._resourceManagerTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeStoragePoolParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceManagerTags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceManagerTags = value.resourceManagerTags;
    }
  }

  // resource_manager_tags - computed: false, optional: true, required: false
  private _resourceManagerTags?: { [key: string]: string }; 
  public get resourceManagerTags() {
    return this.getStringMapAttribute('resource_manager_tags');
  }
  public set resourceManagerTags(value: { [key: string]: string }) {
    this._resourceManagerTags = value;
  }
  public resetResourceManagerTags() {
    this._resourceManagerTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagerTagsInput() {
    return this._resourceManagerTags;
  }
}
export interface ComputeStoragePoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_storage_pool#create ComputeStoragePool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_storage_pool#delete ComputeStoragePool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_storage_pool#update ComputeStoragePool#update}
  */
  readonly update?: string;
}

export function computeStoragePoolTimeoutsToTerraform(struct?: ComputeStoragePoolTimeouts | cdktn.IResolvable): any {
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


export function computeStoragePoolTimeoutsToHclTerraform(struct?: ComputeStoragePoolTimeouts | cdktn.IResolvable): any {
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

export class ComputeStoragePoolTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeStoragePoolTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ComputeStoragePoolTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_storage_pool google_compute_storage_pool}
*/
export class ComputeStoragePool extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_storage_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ComputeStoragePool resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeStoragePool to import
  * @param importFromId The id of the existing ComputeStoragePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_storage_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeStoragePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_storage_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_storage_pool google_compute_storage_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeStoragePoolConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeStoragePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_storage_pool',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.39.0',
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
    this._capacityProvisioningType = config.capacityProvisioningType;
    this._deletionPolicy = config.deletionPolicy;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._labels = config.labels;
    this._name = config.name;
    this._performanceProvisioningType = config.performanceProvisioningType;
    this._poolProvisionedCapacityGb = config.poolProvisionedCapacityGb;
    this._poolProvisionedIops = config.poolProvisionedIops;
    this._poolProvisionedThroughput = config.poolProvisionedThroughput;
    this._project = config.project;
    this._storagePoolType = config.storagePoolType;
    this._zone = config.zone;
    this._params.internalValue = config.params;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity_provisioning_type - computed: true, optional: true, required: false
  private _capacityProvisioningType?: string; 
  public get capacityProvisioningType() {
    return this.getStringAttribute('capacity_provisioning_type');
  }
  public set capacityProvisioningType(value: string) {
    this._capacityProvisioningType = value;
  }
  public resetCapacityProvisioningType() {
    this._capacityProvisioningType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProvisioningTypeInput() {
    return this._capacityProvisioningType;
  }

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

  // performance_provisioning_type - computed: true, optional: true, required: false
  private _performanceProvisioningType?: string; 
  public get performanceProvisioningType() {
    return this.getStringAttribute('performance_provisioning_type');
  }
  public set performanceProvisioningType(value: string) {
    this._performanceProvisioningType = value;
  }
  public resetPerformanceProvisioningType() {
    this._performanceProvisioningType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceProvisioningTypeInput() {
    return this._performanceProvisioningType;
  }

  // pool_provisioned_capacity_gb - computed: false, optional: false, required: true
  private _poolProvisionedCapacityGb?: string; 
  public get poolProvisionedCapacityGb() {
    return this.getStringAttribute('pool_provisioned_capacity_gb');
  }
  public set poolProvisionedCapacityGb(value: string) {
    this._poolProvisionedCapacityGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolProvisionedCapacityGbInput() {
    return this._poolProvisionedCapacityGb;
  }

  // pool_provisioned_iops - computed: false, optional: true, required: false
  private _poolProvisionedIops?: string; 
  public get poolProvisionedIops() {
    return this.getStringAttribute('pool_provisioned_iops');
  }
  public set poolProvisionedIops(value: string) {
    this._poolProvisionedIops = value;
  }
  public resetPoolProvisionedIops() {
    this._poolProvisionedIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolProvisionedIopsInput() {
    return this._poolProvisionedIops;
  }

  // pool_provisioned_throughput - computed: false, optional: false, required: true
  private _poolProvisionedThroughput?: string; 
  public get poolProvisionedThroughput() {
    return this.getStringAttribute('pool_provisioned_throughput');
  }
  public set poolProvisionedThroughput(value: string) {
    this._poolProvisionedThroughput = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolProvisionedThroughputInput() {
    return this._poolProvisionedThroughput;
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

  // resource_status - computed: true, optional: false, required: false
  private _resourceStatus = new ComputeStoragePoolResourceStatusList(this, "resource_status", false);
  public get resourceStatus() {
    return this._resourceStatus;
  }

  // status - computed: true, optional: false, required: false
  private _status = new ComputeStoragePoolStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // storage_pool_type - computed: false, optional: false, required: true
  private _storagePoolType?: string; 
  public get storagePoolType() {
    return this.getStringAttribute('storage_pool_type');
  }
  public set storagePoolType(value: string) {
    this._storagePoolType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolTypeInput() {
    return this._storagePoolType;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
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

  // params - computed: false, optional: true, required: false
  private _params = new ComputeStoragePoolParamsOutputReference(this, "params");
  public get params() {
    return this._params;
  }
  public putParams(value: ComputeStoragePoolParams) {
    this._params.internalValue = value;
  }
  public resetParams() {
    this._params.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeStoragePoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeStoragePoolTimeouts) {
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
      capacity_provisioning_type: cdktn.stringToTerraform(this._capacityProvisioningType),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      deletion_protection: cdktn.booleanToTerraform(this._deletionProtection),
      description: cdktn.stringToTerraform(this._description),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      name: cdktn.stringToTerraform(this._name),
      performance_provisioning_type: cdktn.stringToTerraform(this._performanceProvisioningType),
      pool_provisioned_capacity_gb: cdktn.stringToTerraform(this._poolProvisionedCapacityGb),
      pool_provisioned_iops: cdktn.stringToTerraform(this._poolProvisionedIops),
      pool_provisioned_throughput: cdktn.stringToTerraform(this._poolProvisionedThroughput),
      project: cdktn.stringToTerraform(this._project),
      storage_pool_type: cdktn.stringToTerraform(this._storagePoolType),
      zone: cdktn.stringToTerraform(this._zone),
      params: computeStoragePoolParamsToTerraform(this._params.internalValue),
      timeouts: computeStoragePoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity_provisioning_type: {
        value: cdktn.stringToHclTerraform(this._capacityProvisioningType),
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
      deletion_protection: {
        value: cdktn.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      performance_provisioning_type: {
        value: cdktn.stringToHclTerraform(this._performanceProvisioningType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_provisioned_capacity_gb: {
        value: cdktn.stringToHclTerraform(this._poolProvisionedCapacityGb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_provisioned_iops: {
        value: cdktn.stringToHclTerraform(this._poolProvisionedIops),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_provisioned_throughput: {
        value: cdktn.stringToHclTerraform(this._poolProvisionedThroughput),
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
      storage_pool_type: {
        value: cdktn.stringToHclTerraform(this._storagePoolType),
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
      params: {
        value: computeStoragePoolParamsToHclTerraform(this._params.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeStoragePoolParamsList",
      },
      timeouts: {
        value: computeStoragePoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeStoragePoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
