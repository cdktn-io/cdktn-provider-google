/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataprocClusterConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#deletion_policy DataprocCluster#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The timeout duration which allows graceful decomissioning when you change the number of worker nodes directly through a terraform apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#graceful_decommission_timeout DataprocCluster#graceful_decommission_timeout}
  */
  readonly gracefulDecommissionTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#id DataprocCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The list of the labels (key/value pairs) configured on the resource and to be applied to instances in the cluster.
  * 
  * 				**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * 				Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#labels DataprocCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the cluster, unique within the project and zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#name DataprocCluster#name}
  */
  readonly name: string;
  /**
  * The ID of the project in which the cluster will exist. If it is not provided, the provider project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#project DataprocCluster#project}
  */
  readonly project?: string;
  /**
  * The region in which the cluster and associated nodes will be created in. Defaults to global.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#region DataprocCluster#region}
  */
  readonly region?: string;
  /**
  * cluster_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#cluster_config DataprocCluster#cluster_config}
  */
  readonly clusterConfig?: DataprocClusterClusterConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#timeouts DataprocCluster#timeouts}
  */
  readonly timeouts?: DataprocClusterTimeouts;
  /**
  * virtual_cluster_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#virtual_cluster_config DataprocCluster#virtual_cluster_config}
  */
  readonly virtualClusterConfig?: DataprocClusterVirtualClusterConfig;
}
export interface DataprocClusterClusterConfigAutoscalingConfig {
  /**
  * The autoscaling policy used by the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#policy_uri DataprocCluster#policy_uri}
  */
  readonly policyUri: string;
}

export function dataprocClusterClusterConfigAutoscalingConfigToTerraform(struct?: DataprocClusterClusterConfigAutoscalingConfigOutputReference | DataprocClusterClusterConfigAutoscalingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    policy_uri: cdktn.stringToTerraform(struct!.policyUri),
  }
}


export function dataprocClusterClusterConfigAutoscalingConfigToHclTerraform(struct?: DataprocClusterClusterConfigAutoscalingConfigOutputReference | DataprocClusterClusterConfigAutoscalingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    policy_uri: {
      value: cdktn.stringToHclTerraform(struct!.policyUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigAutoscalingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigAutoscalingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyUri = this._policyUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigAutoscalingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policyUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policyUri = value.policyUri;
    }
  }

  // policy_uri - computed: false, optional: false, required: true
  private _policyUri?: string; 
  public get policyUri() {
    return this.getStringAttribute('policy_uri');
  }
  public set policyUri(value: string) {
    this._policyUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyUriInput() {
    return this._policyUri;
  }
}
export interface DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigAccelerators {
  /**
  * The number of the accelerator cards of this type exposed to this instance. Often restricted to one of 1, 2, 4, or 8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#accelerator_count DataprocCluster#accelerator_count}
  */
  readonly acceleratorCount: number;
  /**
  * The short name of the accelerator type to expose to this instance. For example, nvidia-tesla-k80.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#accelerator_type DataprocCluster#accelerator_type}
  */
  readonly acceleratorType: string;
}

export function dataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigAcceleratorsToTerraform(struct?: DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigAccelerators | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accelerator_count: cdktn.numberToTerraform(struct!.acceleratorCount),
    accelerator_type: cdktn.stringToTerraform(struct!.acceleratorType),
  }
}


export function dataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigAcceleratorsToHclTerraform(struct?: DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigAccelerators | cdktn.IResolvable): any {
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

export class DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigAcceleratorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigAccelerators | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigAccelerators | cdktn.IResolvable | undefined) {
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

  // accelerator_count - computed: false, optional: false, required: true
  private _acceleratorCount?: number; 
  public get acceleratorCount() {
    return this.getNumberAttribute('accelerator_count');
  }
  public set acceleratorCount(value: number) {
    this._acceleratorCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorCountInput() {
    return this._acceleratorCount;
  }

  // accelerator_type - computed: false, optional: false, required: true
  private _acceleratorType?: string; 
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }
  public set acceleratorType(value: string) {
    this._acceleratorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTypeInput() {
    return this._acceleratorType;
  }
}

export class DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigAcceleratorsList extends cdktn.ComplexList {
  public internalValue? : DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigAccelerators[] | cdktn.IResolvable

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
  public get(index: number): DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigAcceleratorsOutputReference {
    return new DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigAcceleratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigDiskConfig {
  /**
  * Indicates how many IOPS to provision for the disk. This sets the number of I/O operations per second that the disk can handle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#boot_disk_provisioned_iops DataprocCluster#boot_disk_provisioned_iops}
  */
  readonly bootDiskProvisionedIops?: number;
  /**
  * Indicates how much throughput to provision for the disk. This sets the number of throughput mb per second that the disk can handle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#boot_disk_provisioned_throughput DataprocCluster#boot_disk_provisioned_throughput}
  */
  readonly bootDiskProvisionedThroughput?: number;
  /**
  * Size of the primary disk attached to each node, specified in GB. The primary disk contains the boot volume and system libraries, and the smallest allowed disk size is 10GB. GCP will default to a predetermined computed value if not set (currently 500GB). Note: If SSDs are not attached, it also contains the HDFS data blocks and Hadoop working directories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#boot_disk_size_gb DataprocCluster#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * The disk type of the primary disk attached to each node. Such as "pd-ssd" or "pd-standard". Defaults to "pd-standard".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#boot_disk_type DataprocCluster#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
  * Interface type of local SSDs (default is "scsi"). Valid values: "scsi" (Small Computer System Interface), "nvme" (Non-Volatile Memory Express).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#local_ssd_interface DataprocCluster#local_ssd_interface}
  */
  readonly localSsdInterface?: string;
  /**
  * The amount of local SSD disks that will be attached to each master cluster node. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#num_local_ssds DataprocCluster#num_local_ssds}
  */
  readonly numLocalSsds?: number;
}

export function dataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigDiskConfigToTerraform(struct?: DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigDiskConfigOutputReference | DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigDiskConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boot_disk_provisioned_iops: cdktn.numberToTerraform(struct!.bootDiskProvisionedIops),
    boot_disk_provisioned_throughput: cdktn.numberToTerraform(struct!.bootDiskProvisionedThroughput),
    boot_disk_size_gb: cdktn.numberToTerraform(struct!.bootDiskSizeGb),
    boot_disk_type: cdktn.stringToTerraform(struct!.bootDiskType),
    local_ssd_interface: cdktn.stringToTerraform(struct!.localSsdInterface),
    num_local_ssds: cdktn.numberToTerraform(struct!.numLocalSsds),
  }
}


export function dataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigDiskConfigToHclTerraform(struct?: DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigDiskConfigOutputReference | DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigDiskConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    boot_disk_provisioned_iops: {
      value: cdktn.numberToHclTerraform(struct!.bootDiskProvisionedIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    boot_disk_provisioned_throughput: {
      value: cdktn.numberToHclTerraform(struct!.bootDiskProvisionedThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    boot_disk_size_gb: {
      value: cdktn.numberToHclTerraform(struct!.bootDiskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    boot_disk_type: {
      value: cdktn.stringToHclTerraform(struct!.bootDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_ssd_interface: {
      value: cdktn.stringToHclTerraform(struct!.localSsdInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_local_ssds: {
      value: cdktn.numberToHclTerraform(struct!.numLocalSsds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigDiskConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigDiskConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskProvisionedIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskProvisionedIops = this._bootDiskProvisionedIops;
    }
    if (this._bootDiskProvisionedThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskProvisionedThroughput = this._bootDiskProvisionedThroughput;
    }
    if (this._bootDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskSizeGb = this._bootDiskSizeGb;
    }
    if (this._bootDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskType = this._bootDiskType;
    }
    if (this._localSsdInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdInterface = this._localSsdInterface;
    }
    if (this._numLocalSsds !== undefined) {
      hasAnyValues = true;
      internalValueResult.numLocalSsds = this._numLocalSsds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigDiskConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskProvisionedIops = undefined;
      this._bootDiskProvisionedThroughput = undefined;
      this._bootDiskSizeGb = undefined;
      this._bootDiskType = undefined;
      this._localSsdInterface = undefined;
      this._numLocalSsds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskProvisionedIops = value.bootDiskProvisionedIops;
      this._bootDiskProvisionedThroughput = value.bootDiskProvisionedThroughput;
      this._bootDiskSizeGb = value.bootDiskSizeGb;
      this._bootDiskType = value.bootDiskType;
      this._localSsdInterface = value.localSsdInterface;
      this._numLocalSsds = value.numLocalSsds;
    }
  }

  // boot_disk_provisioned_iops - computed: false, optional: true, required: false
  private _bootDiskProvisionedIops?: number; 
  public get bootDiskProvisionedIops() {
    return this.getNumberAttribute('boot_disk_provisioned_iops');
  }
  public set bootDiskProvisionedIops(value: number) {
    this._bootDiskProvisionedIops = value;
  }
  public resetBootDiskProvisionedIops() {
    this._bootDiskProvisionedIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskProvisionedIopsInput() {
    return this._bootDiskProvisionedIops;
  }

  // boot_disk_provisioned_throughput - computed: false, optional: true, required: false
  private _bootDiskProvisionedThroughput?: number; 
  public get bootDiskProvisionedThroughput() {
    return this.getNumberAttribute('boot_disk_provisioned_throughput');
  }
  public set bootDiskProvisionedThroughput(value: number) {
    this._bootDiskProvisionedThroughput = value;
  }
  public resetBootDiskProvisionedThroughput() {
    this._bootDiskProvisionedThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskProvisionedThroughputInput() {
    return this._bootDiskProvisionedThroughput;
  }

  // boot_disk_size_gb - computed: true, optional: true, required: false
  private _bootDiskSizeGb?: number; 
  public get bootDiskSizeGb() {
    return this.getNumberAttribute('boot_disk_size_gb');
  }
  public set bootDiskSizeGb(value: number) {
    this._bootDiskSizeGb = value;
  }
  public resetBootDiskSizeGb() {
    this._bootDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeGbInput() {
    return this._bootDiskSizeGb;
  }

  // boot_disk_type - computed: false, optional: true, required: false
  private _bootDiskType?: string; 
  public get bootDiskType() {
    return this.getStringAttribute('boot_disk_type');
  }
  public set bootDiskType(value: string) {
    this._bootDiskType = value;
  }
  public resetBootDiskType() {
    this._bootDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskTypeInput() {
    return this._bootDiskType;
  }

  // local_ssd_interface - computed: false, optional: true, required: false
  private _localSsdInterface?: string; 
  public get localSsdInterface() {
    return this.getStringAttribute('local_ssd_interface');
  }
  public set localSsdInterface(value: string) {
    this._localSsdInterface = value;
  }
  public resetLocalSsdInterface() {
    this._localSsdInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdInterfaceInput() {
    return this._localSsdInterface;
  }

  // num_local_ssds - computed: true, optional: true, required: false
  private _numLocalSsds?: number; 
  public get numLocalSsds() {
    return this.getNumberAttribute('num_local_ssds');
  }
  public set numLocalSsds(value: number) {
    this._numLocalSsds = value;
  }
  public resetNumLocalSsds() {
    this._numLocalSsds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numLocalSsdsInput() {
    return this._numLocalSsds;
  }
}
export interface DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfig {
  /**
  * The name of a Google Compute Engine machine type to create for the master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#machine_type DataprocCluster#machine_type}
  */
  readonly machineType?: string;
  /**
  * The name of a minimum generation of CPU family for the auxiliary node group. If not specified, GCP will default to a predetermined computed value for each zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#min_cpu_platform DataprocCluster#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Specifies the number of auxiliary nodes to create. If not specified, GCP will default to a predetermined computed value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#num_instances DataprocCluster#num_instances}
  */
  readonly numInstances?: number;
  /**
  * accelerators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#accelerators DataprocCluster#accelerators}
  */
  readonly accelerators?: DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigAccelerators[] | cdktn.IResolvable;
  /**
  * disk_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#disk_config DataprocCluster#disk_config}
  */
  readonly diskConfig?: DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigDiskConfig;
}

export function dataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigToTerraform(struct?: DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigOutputReference | DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    machine_type: cdktn.stringToTerraform(struct!.machineType),
    min_cpu_platform: cdktn.stringToTerraform(struct!.minCpuPlatform),
    num_instances: cdktn.numberToTerraform(struct!.numInstances),
    accelerators: cdktn.listMapper(dataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigAcceleratorsToTerraform, true)(struct!.accelerators),
    disk_config: dataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigDiskConfigToTerraform(struct!.diskConfig),
  }
}


export function dataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigToHclTerraform(struct?: DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigOutputReference | DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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
    num_instances: {
      value: cdktn.numberToHclTerraform(struct!.numInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accelerators: {
      value: cdktn.listMapperHcl(dataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigAcceleratorsToHclTerraform, true)(struct!.accelerators),
      isBlock: true,
      type: "set",
      storageClassType: "DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigAcceleratorsList",
    },
    disk_config: {
      value: dataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigDiskConfigToHclTerraform(struct!.diskConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigDiskConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._minCpuPlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._numInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.numInstances = this._numInstances;
    }
    if (this._accelerators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accelerators = this._accelerators?.internalValue;
    }
    if (this._diskConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskConfig = this._diskConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._machineType = undefined;
      this._minCpuPlatform = undefined;
      this._numInstances = undefined;
      this._accelerators.internalValue = undefined;
      this._diskConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._machineType = value.machineType;
      this._minCpuPlatform = value.minCpuPlatform;
      this._numInstances = value.numInstances;
      this._accelerators.internalValue = value.accelerators;
      this._diskConfig.internalValue = value.diskConfig;
    }
  }

  // instance_names - computed: true, optional: false, required: false
  public get instanceNames() {
    return this.getListAttribute('instance_names');
  }

  // machine_type - computed: true, optional: true, required: false
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

  // min_cpu_platform - computed: true, optional: true, required: false
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

  // num_instances - computed: true, optional: true, required: false
  private _numInstances?: number; 
  public get numInstances() {
    return this.getNumberAttribute('num_instances');
  }
  public set numInstances(value: number) {
    this._numInstances = value;
  }
  public resetNumInstances() {
    this._numInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInstancesInput() {
    return this._numInstances;
  }

  // accelerators - computed: false, optional: true, required: false
  private _accelerators = new DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigAcceleratorsList(this, "accelerators", true);
  public get accelerators() {
    return this._accelerators;
  }
  public putAccelerators(value: DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigAccelerators[] | cdktn.IResolvable) {
    this._accelerators.internalValue = value;
  }
  public resetAccelerators() {
    this._accelerators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorsInput() {
    return this._accelerators.internalValue;
  }

  // disk_config - computed: false, optional: true, required: false
  private _diskConfig = new DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigDiskConfigOutputReference(this, "disk_config");
  public get diskConfig() {
    return this._diskConfig;
  }
  public putDiskConfig(value: DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigDiskConfig) {
    this._diskConfig.internalValue = value;
  }
  public resetDiskConfig() {
    this._diskConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskConfigInput() {
    return this._diskConfig.internalValue;
  }
}
export interface DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroup {
  /**
  * Node group roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#roles DataprocCluster#roles}
  */
  readonly roles: string[];
  /**
  * node_group_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#node_group_config DataprocCluster#node_group_config}
  */
  readonly nodeGroupConfig?: DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfig;
}

export function dataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupToTerraform(struct?: DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    roles: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.roles),
    node_group_config: dataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigToTerraform(struct!.nodeGroupConfig),
  }
}


export function dataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupToHclTerraform(struct?: DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    roles: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_group_config: {
      value: dataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigToHclTerraform(struct!.nodeGroupConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroup | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._nodeGroupConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroupConfig = this._nodeGroupConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroup | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roles = undefined;
      this._nodeGroupConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roles = value.roles;
      this._nodeGroupConfig.internalValue = value.nodeGroupConfig;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // node_group_config - computed: false, optional: true, required: false
  private _nodeGroupConfig = new DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigOutputReference(this, "node_group_config");
  public get nodeGroupConfig() {
    return this._nodeGroupConfig;
  }
  public putNodeGroupConfig(value: DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfig) {
    this._nodeGroupConfig.internalValue = value;
  }
  public resetNodeGroupConfig() {
    this._nodeGroupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupConfigInput() {
    return this._nodeGroupConfig.internalValue;
  }
}

export class DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupList extends cdktn.ComplexList {
  public internalValue? : DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroup[] | cdktn.IResolvable

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
  public get(index: number): DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupOutputReference {
    return new DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataprocClusterClusterConfigAuxiliaryNodeGroups {
  /**
  * A node group ID. Generated if not specified. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of from 3 to 33 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#node_group_id DataprocCluster#node_group_id}
  */
  readonly nodeGroupId?: string;
  /**
  * node_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#node_group DataprocCluster#node_group}
  */
  readonly nodeGroup: DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroup[] | cdktn.IResolvable;
}

export function dataprocClusterClusterConfigAuxiliaryNodeGroupsToTerraform(struct?: DataprocClusterClusterConfigAuxiliaryNodeGroups | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    node_group_id: cdktn.stringToTerraform(struct!.nodeGroupId),
    node_group: cdktn.listMapper(dataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupToTerraform, true)(struct!.nodeGroup),
  }
}


export function dataprocClusterClusterConfigAuxiliaryNodeGroupsToHclTerraform(struct?: DataprocClusterClusterConfigAuxiliaryNodeGroups | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    node_group_id: {
      value: cdktn.stringToHclTerraform(struct!.nodeGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_group: {
      value: cdktn.listMapperHcl(dataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupToHclTerraform, true)(struct!.nodeGroup),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigAuxiliaryNodeGroupsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataprocClusterClusterConfigAuxiliaryNodeGroups | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroupId = this._nodeGroupId;
    }
    if (this._nodeGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroup = this._nodeGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigAuxiliaryNodeGroups | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeGroupId = undefined;
      this._nodeGroup.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeGroupId = value.nodeGroupId;
      this._nodeGroup.internalValue = value.nodeGroup;
    }
  }

  // node_group_id - computed: true, optional: true, required: false
  private _nodeGroupId?: string; 
  public get nodeGroupId() {
    return this.getStringAttribute('node_group_id');
  }
  public set nodeGroupId(value: string) {
    this._nodeGroupId = value;
  }
  public resetNodeGroupId() {
    this._nodeGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupIdInput() {
    return this._nodeGroupId;
  }

  // node_group - computed: false, optional: false, required: true
  private _nodeGroup = new DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroupList(this, "node_group", false);
  public get nodeGroup() {
    return this._nodeGroup;
  }
  public putNodeGroup(value: DataprocClusterClusterConfigAuxiliaryNodeGroupsNodeGroup[] | cdktn.IResolvable) {
    this._nodeGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupInput() {
    return this._nodeGroup.internalValue;
  }
}

export class DataprocClusterClusterConfigAuxiliaryNodeGroupsList extends cdktn.ComplexList {
  public internalValue? : DataprocClusterClusterConfigAuxiliaryNodeGroups[] | cdktn.IResolvable

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
  public get(index: number): DataprocClusterClusterConfigAuxiliaryNodeGroupsOutputReference {
    return new DataprocClusterClusterConfigAuxiliaryNodeGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataprocClusterClusterConfigDataprocMetricConfigMetrics {
  /**
  * Specify one or more [available OSS metrics] (https://cloud.google.com/dataproc/docs/guides/monitoring#available_oss_metrics) to collect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#metric_overrides DataprocCluster#metric_overrides}
  */
  readonly metricOverrides?: string[];
  /**
  * A source for the collection of Dataproc OSS metrics (see [available OSS metrics] (https://cloud.google.com//dataproc/docs/guides/monitoring#available_oss_metrics)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#metric_source DataprocCluster#metric_source}
  */
  readonly metricSource: string;
}

export function dataprocClusterClusterConfigDataprocMetricConfigMetricsToTerraform(struct?: DataprocClusterClusterConfigDataprocMetricConfigMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_overrides: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.metricOverrides),
    metric_source: cdktn.stringToTerraform(struct!.metricSource),
  }
}


export function dataprocClusterClusterConfigDataprocMetricConfigMetricsToHclTerraform(struct?: DataprocClusterClusterConfigDataprocMetricConfigMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_overrides: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.metricOverrides),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    metric_source: {
      value: cdktn.stringToHclTerraform(struct!.metricSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataprocClusterClusterConfigDataprocMetricConfigMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricOverrides = this._metricOverrides;
    }
    if (this._metricSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricSource = this._metricSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigDataprocMetricConfigMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricOverrides = undefined;
      this._metricSource = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricOverrides = value.metricOverrides;
      this._metricSource = value.metricSource;
    }
  }

  // metric_overrides - computed: false, optional: true, required: false
  private _metricOverrides?: string[]; 
  public get metricOverrides() {
    return cdktn.Fn.tolist(this.getListAttribute('metric_overrides'));
  }
  public set metricOverrides(value: string[]) {
    this._metricOverrides = value;
  }
  public resetMetricOverrides() {
    this._metricOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricOverridesInput() {
    return this._metricOverrides;
  }

  // metric_source - computed: false, optional: false, required: true
  private _metricSource?: string; 
  public get metricSource() {
    return this.getStringAttribute('metric_source');
  }
  public set metricSource(value: string) {
    this._metricSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSourceInput() {
    return this._metricSource;
  }
}

export class DataprocClusterClusterConfigDataprocMetricConfigMetricsList extends cdktn.ComplexList {
  public internalValue? : DataprocClusterClusterConfigDataprocMetricConfigMetrics[] | cdktn.IResolvable

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
  public get(index: number): DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference {
    return new DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataprocClusterClusterConfigDataprocMetricConfig {
  /**
  * metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#metrics DataprocCluster#metrics}
  */
  readonly metrics: DataprocClusterClusterConfigDataprocMetricConfigMetrics[] | cdktn.IResolvable;
}

export function dataprocClusterClusterConfigDataprocMetricConfigToTerraform(struct?: DataprocClusterClusterConfigDataprocMetricConfigOutputReference | DataprocClusterClusterConfigDataprocMetricConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics: cdktn.listMapper(dataprocClusterClusterConfigDataprocMetricConfigMetricsToTerraform, true)(struct!.metrics),
  }
}


export function dataprocClusterClusterConfigDataprocMetricConfigToHclTerraform(struct?: DataprocClusterClusterConfigDataprocMetricConfigOutputReference | DataprocClusterClusterConfigDataprocMetricConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics: {
      value: cdktn.listMapperHcl(dataprocClusterClusterConfigDataprocMetricConfigMetricsToHclTerraform, true)(struct!.metrics),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigDataprocMetricConfigMetricsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigDataprocMetricConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigDataprocMetricConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigDataprocMetricConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metrics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metrics.internalValue = value.metrics;
    }
  }

  // metrics - computed: false, optional: false, required: true
  private _metrics = new DataprocClusterClusterConfigDataprocMetricConfigMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataprocClusterClusterConfigDataprocMetricConfigMetrics[] | cdktn.IResolvable) {
    this._metrics.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }
}
export interface DataprocClusterClusterConfigEncryptionConfig {
  /**
  * The Cloud KMS key name to use for PD disk encryption for all instances in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#kms_key_name DataprocCluster#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function dataprocClusterClusterConfigEncryptionConfigToTerraform(struct?: DataprocClusterClusterConfigEncryptionConfigOutputReference | DataprocClusterClusterConfigEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_name: cdktn.stringToTerraform(struct!.kmsKeyName),
  }
}


export function dataprocClusterClusterConfigEncryptionConfigToHclTerraform(struct?: DataprocClusterClusterConfigEncryptionConfigOutputReference | DataprocClusterClusterConfigEncryptionConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigEncryptionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: false, required: true
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface DataprocClusterClusterConfigEndpointConfig {
  /**
  * The flag to enable http access to specific ports on the cluster from external sources (aka Component Gateway). Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#enable_http_port_access DataprocCluster#enable_http_port_access}
  */
  readonly enableHttpPortAccess: boolean | cdktn.IResolvable;
}

export function dataprocClusterClusterConfigEndpointConfigToTerraform(struct?: DataprocClusterClusterConfigEndpointConfigOutputReference | DataprocClusterClusterConfigEndpointConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_http_port_access: cdktn.booleanToTerraform(struct!.enableHttpPortAccess),
  }
}


export function dataprocClusterClusterConfigEndpointConfigToHclTerraform(struct?: DataprocClusterClusterConfigEndpointConfigOutputReference | DataprocClusterClusterConfigEndpointConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_http_port_access: {
      value: cdktn.booleanToHclTerraform(struct!.enableHttpPortAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigEndpointConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigEndpointConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableHttpPortAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHttpPortAccess = this._enableHttpPortAccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigEndpointConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableHttpPortAccess = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableHttpPortAccess = value.enableHttpPortAccess;
    }
  }

  // enable_http_port_access - computed: false, optional: false, required: true
  private _enableHttpPortAccess?: boolean | cdktn.IResolvable; 
  public get enableHttpPortAccess() {
    return this.getBooleanAttribute('enable_http_port_access');
  }
  public set enableHttpPortAccess(value: boolean | cdktn.IResolvable) {
    this._enableHttpPortAccess = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttpPortAccessInput() {
    return this._enableHttpPortAccess;
  }

  // http_ports - computed: true, optional: false, required: false
  private _httpPorts = new cdktn.StringMap(this, "http_ports");
  public get httpPorts() {
    return this._httpPorts;
  }
}
export interface DataprocClusterClusterConfigGceClusterConfigConfidentialInstanceConfig {
  /**
  * Defines the type of Confidential Compute technology to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#confidential_instance_type DataprocCluster#confidential_instance_type}
  */
  readonly confidentialInstanceType?: string;
  /**
  * Defines whether the instance should have confidential compute enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#enable_confidential_compute DataprocCluster#enable_confidential_compute}
  */
  readonly enableConfidentialCompute?: boolean | cdktn.IResolvable;
}

export function dataprocClusterClusterConfigGceClusterConfigConfidentialInstanceConfigToTerraform(struct?: DataprocClusterClusterConfigGceClusterConfigConfidentialInstanceConfigOutputReference | DataprocClusterClusterConfigGceClusterConfigConfidentialInstanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    confidential_instance_type: cdktn.stringToTerraform(struct!.confidentialInstanceType),
    enable_confidential_compute: cdktn.booleanToTerraform(struct!.enableConfidentialCompute),
  }
}


export function dataprocClusterClusterConfigGceClusterConfigConfidentialInstanceConfigToHclTerraform(struct?: DataprocClusterClusterConfigGceClusterConfigConfidentialInstanceConfigOutputReference | DataprocClusterClusterConfigGceClusterConfigConfidentialInstanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    confidential_instance_type: {
      value: cdktn.stringToHclTerraform(struct!.confidentialInstanceType),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigGceClusterConfigConfidentialInstanceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigGceClusterConfigConfidentialInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidentialInstanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidentialInstanceType = this._confidentialInstanceType;
    }
    if (this._enableConfidentialCompute !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConfidentialCompute = this._enableConfidentialCompute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigGceClusterConfigConfidentialInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._confidentialInstanceType = undefined;
      this._enableConfidentialCompute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._confidentialInstanceType = value.confidentialInstanceType;
      this._enableConfidentialCompute = value.enableConfidentialCompute;
    }
  }

  // confidential_instance_type - computed: false, optional: true, required: false
  private _confidentialInstanceType?: string; 
  public get confidentialInstanceType() {
    return this.getStringAttribute('confidential_instance_type');
  }
  public set confidentialInstanceType(value: string) {
    this._confidentialInstanceType = value;
  }
  public resetConfidentialInstanceType() {
    this._confidentialInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialInstanceTypeInput() {
    return this._confidentialInstanceType;
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
export interface DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity {
  /**
  * The URI of a sole-tenant that the cluster will be created on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#node_group_uri DataprocCluster#node_group_uri}
  */
  readonly nodeGroupUri: string;
}

export function dataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityToTerraform(struct?: DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference | DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    node_group_uri: cdktn.stringToTerraform(struct!.nodeGroupUri),
  }
}


export function dataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityToHclTerraform(struct?: DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference | DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    node_group_uri: {
      value: cdktn.stringToHclTerraform(struct!.nodeGroupUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeGroupUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroupUri = this._nodeGroupUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeGroupUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeGroupUri = value.nodeGroupUri;
    }
  }

  // node_group_uri - computed: false, optional: false, required: true
  private _nodeGroupUri?: string; 
  public get nodeGroupUri() {
    return this.getStringAttribute('node_group_uri');
  }
  public set nodeGroupUri(value: string) {
    this._nodeGroupUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupUriInput() {
    return this._nodeGroupUri;
  }
}
export interface DataprocClusterClusterConfigGceClusterConfigReservationAffinity {
  /**
  * Type of reservation to consume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#consume_reservation_type DataprocCluster#consume_reservation_type}
  */
  readonly consumeReservationType?: string;
  /**
  * Corresponds to the label key of reservation resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#key DataprocCluster#key}
  */
  readonly key?: string;
  /**
  * Corresponds to the label values of reservation resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#values DataprocCluster#values}
  */
  readonly values?: string[];
}

export function dataprocClusterClusterConfigGceClusterConfigReservationAffinityToTerraform(struct?: DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference | DataprocClusterClusterConfigGceClusterConfigReservationAffinity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    consume_reservation_type: cdktn.stringToTerraform(struct!.consumeReservationType),
    key: cdktn.stringToTerraform(struct!.key),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function dataprocClusterClusterConfigGceClusterConfigReservationAffinityToHclTerraform(struct?: DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference | DataprocClusterClusterConfigGceClusterConfigReservationAffinity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    consume_reservation_type: {
      value: cdktn.stringToHclTerraform(struct!.consumeReservationType),
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
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigGceClusterConfigReservationAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumeReservationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumeReservationType = this._consumeReservationType;
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

  public set internalValue(value: DataprocClusterClusterConfigGceClusterConfigReservationAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumeReservationType = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumeReservationType = value.consumeReservationType;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // consume_reservation_type - computed: false, optional: true, required: false
  private _consumeReservationType?: string; 
  public get consumeReservationType() {
    return this.getStringAttribute('consume_reservation_type');
  }
  public set consumeReservationType(value: string) {
    this._consumeReservationType = value;
  }
  public resetConsumeReservationType() {
    this._consumeReservationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumeReservationTypeInput() {
    return this._consumeReservationType;
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
    return cdktn.Fn.tolist(this.getListAttribute('values'));
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
export interface DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig {
  /**
  * Defines whether instances have integrity monitoring enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#enable_integrity_monitoring DataprocCluster#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktn.IResolvable;
  /**
  * Defines whether instances have Secure Boot enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#enable_secure_boot DataprocCluster#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktn.IResolvable;
  /**
  * Defines whether instances have the vTPM enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#enable_vtpm DataprocCluster#enable_vtpm}
  */
  readonly enableVtpm?: boolean | cdktn.IResolvable;
}

export function dataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigToTerraform(struct?: DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference | DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig): any {
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


export function dataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigToHclTerraform(struct?: DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference | DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig): any {
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

export class DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig | undefined {
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

  public set internalValue(value: DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig | undefined) {
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
export interface DataprocClusterClusterConfigGceClusterConfig {
  /**
  * By default, clusters are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each instance. If set to true, all instances in the cluster will only have internal IP addresses. Note: Private Google Access (also known as privateIpGoogleAccess) must be enabled on the subnetwork that the cluster will be launched in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#internal_ip_only DataprocCluster#internal_ip_only}
  */
  readonly internalIpOnly?: boolean | cdktn.IResolvable;
  /**
  * A map of the Compute Engine metadata entries to add to all instances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#metadata DataprocCluster#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The name or self_link of the Google Compute Engine network to the cluster will be part of. Conflicts with subnetwork. If neither is specified, this defaults to the "default" network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#network DataprocCluster#network}
  */
  readonly network?: string;
  /**
  * A map of resource manager tags to add to all instances. Keys must be in the format tagKeys/{tag_key_id} and values in the format tagValues/{tag_value_id}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#resource_manager_tags DataprocCluster#resource_manager_tags}
  */
  readonly resourceManagerTags?: { [key: string]: string };
  /**
  * The service account to be used by the Node VMs. If not specified, the "default" service account is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#service_account DataprocCluster#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * The set of Google API scopes to be made available on all of the node VMs under the service_account specified. These can be either FQDNs, or scope aliases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#service_account_scopes DataprocCluster#service_account_scopes}
  */
  readonly serviceAccountScopes?: string[];
  /**
  * The name or self_link of the Google Compute Engine subnetwork the cluster will be part of. Conflicts with network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#subnetwork DataprocCluster#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * The list of instance tags applied to instances in the cluster. Tags are used to identify valid sources or targets for network firewalls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#tags DataprocCluster#tags}
  */
  readonly tags?: string[];
  /**
  * The GCP zone where your data is stored and used (i.e. where the master and the worker nodes will be created in). If region is set to 'global' (default) then zone is mandatory, otherwise GCP is able to make use of Auto Zone Placement to determine this automatically for you. Note: This setting additionally determines and restricts which computing resources are available for use with other configs such as cluster_config.master_config.machine_type and cluster_config.worker_config.machine_type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#zone DataprocCluster#zone}
  */
  readonly zone?: string;
  /**
  * confidential_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#confidential_instance_config DataprocCluster#confidential_instance_config}
  */
  readonly confidentialInstanceConfig?: DataprocClusterClusterConfigGceClusterConfigConfidentialInstanceConfig;
  /**
  * node_group_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#node_group_affinity DataprocCluster#node_group_affinity}
  */
  readonly nodeGroupAffinity?: DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity;
  /**
  * reservation_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#reservation_affinity DataprocCluster#reservation_affinity}
  */
  readonly reservationAffinity?: DataprocClusterClusterConfigGceClusterConfigReservationAffinity;
  /**
  * shielded_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#shielded_instance_config DataprocCluster#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig;
}

export function dataprocClusterClusterConfigGceClusterConfigToTerraform(struct?: DataprocClusterClusterConfigGceClusterConfigOutputReference | DataprocClusterClusterConfigGceClusterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    internal_ip_only: cdktn.booleanToTerraform(struct!.internalIpOnly),
    metadata: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.metadata),
    network: cdktn.stringToTerraform(struct!.network),
    resource_manager_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.resourceManagerTags),
    service_account: cdktn.stringToTerraform(struct!.serviceAccount),
    service_account_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.serviceAccountScopes),
    subnetwork: cdktn.stringToTerraform(struct!.subnetwork),
    tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tags),
    zone: cdktn.stringToTerraform(struct!.zone),
    confidential_instance_config: dataprocClusterClusterConfigGceClusterConfigConfidentialInstanceConfigToTerraform(struct!.confidentialInstanceConfig),
    node_group_affinity: dataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityToTerraform(struct!.nodeGroupAffinity),
    reservation_affinity: dataprocClusterClusterConfigGceClusterConfigReservationAffinityToTerraform(struct!.reservationAffinity),
    shielded_instance_config: dataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
  }
}


export function dataprocClusterClusterConfigGceClusterConfigToHclTerraform(struct?: DataprocClusterClusterConfigGceClusterConfigOutputReference | DataprocClusterClusterConfigGceClusterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    internal_ip_only: {
      value: cdktn.booleanToHclTerraform(struct!.internalIpOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metadata: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    network: {
      value: cdktn.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_manager_tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.resourceManagerTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service_account: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.serviceAccountScopes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnetwork: {
      value: cdktn.stringToHclTerraform(struct!.subnetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    zone: {
      value: cdktn.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confidential_instance_config: {
      value: dataprocClusterClusterConfigGceClusterConfigConfidentialInstanceConfigToHclTerraform(struct!.confidentialInstanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigGceClusterConfigConfidentialInstanceConfigList",
    },
    node_group_affinity: {
      value: dataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityToHclTerraform(struct!.nodeGroupAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityList",
    },
    reservation_affinity: {
      value: dataprocClusterClusterConfigGceClusterConfigReservationAffinityToHclTerraform(struct!.reservationAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigGceClusterConfigReservationAffinityList",
    },
    shielded_instance_config: {
      value: dataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigToHclTerraform(struct!.shieldedInstanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigGceClusterConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigGceClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._internalIpOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalIpOnly = this._internalIpOnly;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._resourceManagerTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceManagerTags = this._resourceManagerTags;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._serviceAccountScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountScopes = this._serviceAccountScopes;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    if (this._confidentialInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidentialInstanceConfig = this._confidentialInstanceConfig?.internalValue;
    }
    if (this._nodeGroupAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroupAffinity = this._nodeGroupAffinity?.internalValue;
    }
    if (this._reservationAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationAffinity = this._reservationAffinity?.internalValue;
    }
    if (this._shieldedInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shieldedInstanceConfig = this._shieldedInstanceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigGceClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._internalIpOnly = undefined;
      this._metadata = undefined;
      this._network = undefined;
      this._resourceManagerTags = undefined;
      this._serviceAccount = undefined;
      this._serviceAccountScopes = undefined;
      this._subnetwork = undefined;
      this._tags = undefined;
      this._zone = undefined;
      this._confidentialInstanceConfig.internalValue = undefined;
      this._nodeGroupAffinity.internalValue = undefined;
      this._reservationAffinity.internalValue = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._internalIpOnly = value.internalIpOnly;
      this._metadata = value.metadata;
      this._network = value.network;
      this._resourceManagerTags = value.resourceManagerTags;
      this._serviceAccount = value.serviceAccount;
      this._serviceAccountScopes = value.serviceAccountScopes;
      this._subnetwork = value.subnetwork;
      this._tags = value.tags;
      this._zone = value.zone;
      this._confidentialInstanceConfig.internalValue = value.confidentialInstanceConfig;
      this._nodeGroupAffinity.internalValue = value.nodeGroupAffinity;
      this._reservationAffinity.internalValue = value.reservationAffinity;
      this._shieldedInstanceConfig.internalValue = value.shieldedInstanceConfig;
    }
  }

  // internal_ip_only - computed: false, optional: true, required: false
  private _internalIpOnly?: boolean | cdktn.IResolvable; 
  public get internalIpOnly() {
    return this.getBooleanAttribute('internal_ip_only');
  }
  public set internalIpOnly(value: boolean | cdktn.IResolvable) {
    this._internalIpOnly = value;
  }
  public resetInternalIpOnly() {
    this._internalIpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpOnlyInput() {
    return this._internalIpOnly;
  }

  // metadata - computed: true, optional: true, required: false
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

  // network - computed: true, optional: true, required: false
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

  // resource_manager_tags - computed: true, optional: true, required: false
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

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // service_account_scopes - computed: true, optional: true, required: false
  private _serviceAccountScopes?: string[]; 
  public get serviceAccountScopes() {
    return cdktn.Fn.tolist(this.getListAttribute('service_account_scopes'));
  }
  public set serviceAccountScopes(value: string[]) {
    this._serviceAccountScopes = value;
  }
  public resetServiceAccountScopes() {
    this._serviceAccountScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountScopesInput() {
    return this._serviceAccountScopes;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktn.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // confidential_instance_config - computed: false, optional: true, required: false
  private _confidentialInstanceConfig = new DataprocClusterClusterConfigGceClusterConfigConfidentialInstanceConfigOutputReference(this, "confidential_instance_config");
  public get confidentialInstanceConfig() {
    return this._confidentialInstanceConfig;
  }
  public putConfidentialInstanceConfig(value: DataprocClusterClusterConfigGceClusterConfigConfidentialInstanceConfig) {
    this._confidentialInstanceConfig.internalValue = value;
  }
  public resetConfidentialInstanceConfig() {
    this._confidentialInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialInstanceConfigInput() {
    return this._confidentialInstanceConfig.internalValue;
  }

  // node_group_affinity - computed: false, optional: true, required: false
  private _nodeGroupAffinity = new DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference(this, "node_group_affinity");
  public get nodeGroupAffinity() {
    return this._nodeGroupAffinity;
  }
  public putNodeGroupAffinity(value: DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity) {
    this._nodeGroupAffinity.internalValue = value;
  }
  public resetNodeGroupAffinity() {
    this._nodeGroupAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupAffinityInput() {
    return this._nodeGroupAffinity.internalValue;
  }

  // reservation_affinity - computed: false, optional: true, required: false
  private _reservationAffinity = new DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference(this, "reservation_affinity");
  public get reservationAffinity() {
    return this._reservationAffinity;
  }
  public putReservationAffinity(value: DataprocClusterClusterConfigGceClusterConfigReservationAffinity) {
    this._reservationAffinity.internalValue = value;
  }
  public resetReservationAffinity() {
    this._reservationAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationAffinityInput() {
    return this._reservationAffinity.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig) {
    this._shieldedInstanceConfig.internalValue = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig.internalValue;
  }
}
export interface DataprocClusterClusterConfigInitializationAction {
  /**
  * The script to be executed during initialization of the cluster. The script must be a GCS file with a gs:// prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#script DataprocCluster#script}
  */
  readonly script: string;
  /**
  * The maximum duration (in seconds) which script is allowed to take to execute its action. GCP will default to a predetermined computed value if not set (currently 300).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#timeout_sec DataprocCluster#timeout_sec}
  */
  readonly timeoutSec?: number;
}

export function dataprocClusterClusterConfigInitializationActionToTerraform(struct?: DataprocClusterClusterConfigInitializationAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    script: cdktn.stringToTerraform(struct!.script),
    timeout_sec: cdktn.numberToTerraform(struct!.timeoutSec),
  }
}


export function dataprocClusterClusterConfigInitializationActionToHclTerraform(struct?: DataprocClusterClusterConfigInitializationAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    script: {
      value: cdktn.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_sec: {
      value: cdktn.numberToHclTerraform(struct!.timeoutSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigInitializationActionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataprocClusterClusterConfigInitializationAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    if (this._timeoutSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSec = this._timeoutSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigInitializationAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._script = undefined;
      this._timeoutSec = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._script = value.script;
      this._timeoutSec = value.timeoutSec;
    }
  }

  // script - computed: false, optional: false, required: true
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // timeout_sec - computed: false, optional: true, required: false
  private _timeoutSec?: number; 
  public get timeoutSec() {
    return this.getNumberAttribute('timeout_sec');
  }
  public set timeoutSec(value: number) {
    this._timeoutSec = value;
  }
  public resetTimeoutSec() {
    this._timeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecInput() {
    return this._timeoutSec;
  }
}

export class DataprocClusterClusterConfigInitializationActionList extends cdktn.ComplexList {
  public internalValue? : DataprocClusterClusterConfigInitializationAction[] | cdktn.IResolvable

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
  public get(index: number): DataprocClusterClusterConfigInitializationActionOutputReference {
    return new DataprocClusterClusterConfigInitializationActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataprocClusterClusterConfigLifecycleConfig {
  /**
  * The time when cluster will be auto-deleted. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#auto_delete_time DataprocCluster#auto_delete_time}
  */
  readonly autoDeleteTime?: string;
  /**
  * The time when cluster will be auto-stopped. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#auto_stop_time DataprocCluster#auto_stop_time}
  */
  readonly autoStopTime?: string;
  /**
  * The duration to keep the cluster alive while idling (no jobs running). After this TTL, the cluster will be deleted. Valid range: [300s, 1209600s].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#idle_delete_ttl DataprocCluster#idle_delete_ttl}
  */
  readonly idleDeleteTtl?: string;
  /**
  * The duration to keep the cluster started while idling (no jobs running). After this TTL, the cluster will be stopped. Valid range: [10m, 14d].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#idle_stop_ttl DataprocCluster#idle_stop_ttl}
  */
  readonly idleStopTtl?: string;
}

export function dataprocClusterClusterConfigLifecycleConfigToTerraform(struct?: DataprocClusterClusterConfigLifecycleConfigOutputReference | DataprocClusterClusterConfigLifecycleConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_delete_time: cdktn.stringToTerraform(struct!.autoDeleteTime),
    auto_stop_time: cdktn.stringToTerraform(struct!.autoStopTime),
    idle_delete_ttl: cdktn.stringToTerraform(struct!.idleDeleteTtl),
    idle_stop_ttl: cdktn.stringToTerraform(struct!.idleStopTtl),
  }
}


export function dataprocClusterClusterConfigLifecycleConfigToHclTerraform(struct?: DataprocClusterClusterConfigLifecycleConfigOutputReference | DataprocClusterClusterConfigLifecycleConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_delete_time: {
      value: cdktn.stringToHclTerraform(struct!.autoDeleteTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_stop_time: {
      value: cdktn.stringToHclTerraform(struct!.autoStopTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_delete_ttl: {
      value: cdktn.stringToHclTerraform(struct!.idleDeleteTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_stop_ttl: {
      value: cdktn.stringToHclTerraform(struct!.idleStopTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigLifecycleConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigLifecycleConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDeleteTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDeleteTime = this._autoDeleteTime;
    }
    if (this._autoStopTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoStopTime = this._autoStopTime;
    }
    if (this._idleDeleteTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleDeleteTtl = this._idleDeleteTtl;
    }
    if (this._idleStopTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleStopTtl = this._idleStopTtl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigLifecycleConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoDeleteTime = undefined;
      this._autoStopTime = undefined;
      this._idleDeleteTtl = undefined;
      this._idleStopTtl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoDeleteTime = value.autoDeleteTime;
      this._autoStopTime = value.autoStopTime;
      this._idleDeleteTtl = value.idleDeleteTtl;
      this._idleStopTtl = value.idleStopTtl;
    }
  }

  // auto_delete_time - computed: false, optional: true, required: false
  private _autoDeleteTime?: string; 
  public get autoDeleteTime() {
    return this.getStringAttribute('auto_delete_time');
  }
  public set autoDeleteTime(value: string) {
    this._autoDeleteTime = value;
  }
  public resetAutoDeleteTime() {
    this._autoDeleteTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteTimeInput() {
    return this._autoDeleteTime;
  }

  // auto_stop_time - computed: false, optional: true, required: false
  private _autoStopTime?: string; 
  public get autoStopTime() {
    return this.getStringAttribute('auto_stop_time');
  }
  public set autoStopTime(value: string) {
    this._autoStopTime = value;
  }
  public resetAutoStopTime() {
    this._autoStopTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoStopTimeInput() {
    return this._autoStopTime;
  }

  // idle_delete_ttl - computed: false, optional: true, required: false
  private _idleDeleteTtl?: string; 
  public get idleDeleteTtl() {
    return this.getStringAttribute('idle_delete_ttl');
  }
  public set idleDeleteTtl(value: string) {
    this._idleDeleteTtl = value;
  }
  public resetIdleDeleteTtl() {
    this._idleDeleteTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleDeleteTtlInput() {
    return this._idleDeleteTtl;
  }

  // idle_start_time - computed: true, optional: false, required: false
  public get idleStartTime() {
    return this.getStringAttribute('idle_start_time');
  }

  // idle_stop_ttl - computed: false, optional: true, required: false
  private _idleStopTtl?: string; 
  public get idleStopTtl() {
    return this.getStringAttribute('idle_stop_ttl');
  }
  public set idleStopTtl(value: string) {
    this._idleStopTtl = value;
  }
  public resetIdleStopTtl() {
    this._idleStopTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleStopTtlInput() {
    return this._idleStopTtl;
  }
}
export interface DataprocClusterClusterConfigMasterConfigAccelerators {
  /**
  * The number of the accelerator cards of this type exposed to this instance. Often restricted to one of 1, 2, 4, or 8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#accelerator_count DataprocCluster#accelerator_count}
  */
  readonly acceleratorCount: number;
  /**
  * The short name of the accelerator type to expose to this instance. For example, nvidia-tesla-k80.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#accelerator_type DataprocCluster#accelerator_type}
  */
  readonly acceleratorType: string;
}

export function dataprocClusterClusterConfigMasterConfigAcceleratorsToTerraform(struct?: DataprocClusterClusterConfigMasterConfigAccelerators | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accelerator_count: cdktn.numberToTerraform(struct!.acceleratorCount),
    accelerator_type: cdktn.stringToTerraform(struct!.acceleratorType),
  }
}


export function dataprocClusterClusterConfigMasterConfigAcceleratorsToHclTerraform(struct?: DataprocClusterClusterConfigMasterConfigAccelerators | cdktn.IResolvable): any {
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

export class DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataprocClusterClusterConfigMasterConfigAccelerators | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataprocClusterClusterConfigMasterConfigAccelerators | cdktn.IResolvable | undefined) {
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

  // accelerator_count - computed: false, optional: false, required: true
  private _acceleratorCount?: number; 
  public get acceleratorCount() {
    return this.getNumberAttribute('accelerator_count');
  }
  public set acceleratorCount(value: number) {
    this._acceleratorCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorCountInput() {
    return this._acceleratorCount;
  }

  // accelerator_type - computed: false, optional: false, required: true
  private _acceleratorType?: string; 
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }
  public set acceleratorType(value: string) {
    this._acceleratorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTypeInput() {
    return this._acceleratorType;
  }
}

export class DataprocClusterClusterConfigMasterConfigAcceleratorsList extends cdktn.ComplexList {
  public internalValue? : DataprocClusterClusterConfigMasterConfigAccelerators[] | cdktn.IResolvable

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
  public get(index: number): DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference {
    return new DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataprocClusterClusterConfigMasterConfigDiskConfig {
  /**
  * Indicates how many IOPS to provision for the disk. This sets the number of I/O operations per second that the disk can handle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#boot_disk_provisioned_iops DataprocCluster#boot_disk_provisioned_iops}
  */
  readonly bootDiskProvisionedIops?: number;
  /**
  * Indicates how much throughput to provision for the disk. This sets the number of throughput mb per second that the disk can handle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#boot_disk_provisioned_throughput DataprocCluster#boot_disk_provisioned_throughput}
  */
  readonly bootDiskProvisionedThroughput?: number;
  /**
  * Size of the primary disk attached to each node, specified in GB. The primary disk contains the boot volume and system libraries, and the smallest allowed disk size is 10GB. GCP will default to a predetermined computed value if not set (currently 500GB). Note: If SSDs are not attached, it also contains the HDFS data blocks and Hadoop working directories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#boot_disk_size_gb DataprocCluster#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * The disk type of the primary disk attached to each node. Such as "pd-ssd" or "pd-standard". Defaults to "pd-standard".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#boot_disk_type DataprocCluster#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
  * Interface type of local SSDs (default is "scsi"). Valid values: "scsi" (Small Computer System Interface), "nvme" (Non-Volatile Memory Express).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#local_ssd_interface DataprocCluster#local_ssd_interface}
  */
  readonly localSsdInterface?: string;
  /**
  * The amount of local SSD disks that will be attached to each master cluster node. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#num_local_ssds DataprocCluster#num_local_ssds}
  */
  readonly numLocalSsds?: number;
}

export function dataprocClusterClusterConfigMasterConfigDiskConfigToTerraform(struct?: DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference | DataprocClusterClusterConfigMasterConfigDiskConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boot_disk_provisioned_iops: cdktn.numberToTerraform(struct!.bootDiskProvisionedIops),
    boot_disk_provisioned_throughput: cdktn.numberToTerraform(struct!.bootDiskProvisionedThroughput),
    boot_disk_size_gb: cdktn.numberToTerraform(struct!.bootDiskSizeGb),
    boot_disk_type: cdktn.stringToTerraform(struct!.bootDiskType),
    local_ssd_interface: cdktn.stringToTerraform(struct!.localSsdInterface),
    num_local_ssds: cdktn.numberToTerraform(struct!.numLocalSsds),
  }
}


export function dataprocClusterClusterConfigMasterConfigDiskConfigToHclTerraform(struct?: DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference | DataprocClusterClusterConfigMasterConfigDiskConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    boot_disk_provisioned_iops: {
      value: cdktn.numberToHclTerraform(struct!.bootDiskProvisionedIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    boot_disk_provisioned_throughput: {
      value: cdktn.numberToHclTerraform(struct!.bootDiskProvisionedThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    boot_disk_size_gb: {
      value: cdktn.numberToHclTerraform(struct!.bootDiskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    boot_disk_type: {
      value: cdktn.stringToHclTerraform(struct!.bootDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_ssd_interface: {
      value: cdktn.stringToHclTerraform(struct!.localSsdInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_local_ssds: {
      value: cdktn.numberToHclTerraform(struct!.numLocalSsds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigMasterConfigDiskConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskProvisionedIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskProvisionedIops = this._bootDiskProvisionedIops;
    }
    if (this._bootDiskProvisionedThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskProvisionedThroughput = this._bootDiskProvisionedThroughput;
    }
    if (this._bootDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskSizeGb = this._bootDiskSizeGb;
    }
    if (this._bootDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskType = this._bootDiskType;
    }
    if (this._localSsdInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdInterface = this._localSsdInterface;
    }
    if (this._numLocalSsds !== undefined) {
      hasAnyValues = true;
      internalValueResult.numLocalSsds = this._numLocalSsds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigMasterConfigDiskConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskProvisionedIops = undefined;
      this._bootDiskProvisionedThroughput = undefined;
      this._bootDiskSizeGb = undefined;
      this._bootDiskType = undefined;
      this._localSsdInterface = undefined;
      this._numLocalSsds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskProvisionedIops = value.bootDiskProvisionedIops;
      this._bootDiskProvisionedThroughput = value.bootDiskProvisionedThroughput;
      this._bootDiskSizeGb = value.bootDiskSizeGb;
      this._bootDiskType = value.bootDiskType;
      this._localSsdInterface = value.localSsdInterface;
      this._numLocalSsds = value.numLocalSsds;
    }
  }

  // boot_disk_provisioned_iops - computed: false, optional: true, required: false
  private _bootDiskProvisionedIops?: number; 
  public get bootDiskProvisionedIops() {
    return this.getNumberAttribute('boot_disk_provisioned_iops');
  }
  public set bootDiskProvisionedIops(value: number) {
    this._bootDiskProvisionedIops = value;
  }
  public resetBootDiskProvisionedIops() {
    this._bootDiskProvisionedIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskProvisionedIopsInput() {
    return this._bootDiskProvisionedIops;
  }

  // boot_disk_provisioned_throughput - computed: false, optional: true, required: false
  private _bootDiskProvisionedThroughput?: number; 
  public get bootDiskProvisionedThroughput() {
    return this.getNumberAttribute('boot_disk_provisioned_throughput');
  }
  public set bootDiskProvisionedThroughput(value: number) {
    this._bootDiskProvisionedThroughput = value;
  }
  public resetBootDiskProvisionedThroughput() {
    this._bootDiskProvisionedThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskProvisionedThroughputInput() {
    return this._bootDiskProvisionedThroughput;
  }

  // boot_disk_size_gb - computed: true, optional: true, required: false
  private _bootDiskSizeGb?: number; 
  public get bootDiskSizeGb() {
    return this.getNumberAttribute('boot_disk_size_gb');
  }
  public set bootDiskSizeGb(value: number) {
    this._bootDiskSizeGb = value;
  }
  public resetBootDiskSizeGb() {
    this._bootDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeGbInput() {
    return this._bootDiskSizeGb;
  }

  // boot_disk_type - computed: false, optional: true, required: false
  private _bootDiskType?: string; 
  public get bootDiskType() {
    return this.getStringAttribute('boot_disk_type');
  }
  public set bootDiskType(value: string) {
    this._bootDiskType = value;
  }
  public resetBootDiskType() {
    this._bootDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskTypeInput() {
    return this._bootDiskType;
  }

  // local_ssd_interface - computed: false, optional: true, required: false
  private _localSsdInterface?: string; 
  public get localSsdInterface() {
    return this.getStringAttribute('local_ssd_interface');
  }
  public set localSsdInterface(value: string) {
    this._localSsdInterface = value;
  }
  public resetLocalSsdInterface() {
    this._localSsdInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdInterfaceInput() {
    return this._localSsdInterface;
  }

  // num_local_ssds - computed: true, optional: true, required: false
  private _numLocalSsds?: number; 
  public get numLocalSsds() {
    return this.getNumberAttribute('num_local_ssds');
  }
  public set numLocalSsds(value: number) {
    this._numLocalSsds = value;
  }
  public resetNumLocalSsds() {
    this._numLocalSsds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numLocalSsdsInput() {
    return this._numLocalSsds;
  }
}
export interface DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionResults {
}

export function dataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionResultsToTerraform(struct?: DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionResults): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionResultsToHclTerraform(struct?: DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionResults): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionResultsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // machine_type - computed: true, optional: false, required: false
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }

  // vm_count - computed: true, optional: false, required: false
  public get vmCount() {
    return this.getNumberAttribute('vm_count');
  }
}

export class DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionResultsList extends cdktn.ComplexList {

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
  public get(index: number): DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionResultsOutputReference {
    return new DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfig {
  /**
  * Indicates how many IOPS to provision for the disk. This sets the number of I/O operations per second that the disk can handle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#boot_disk_provisioned_iops DataprocCluster#boot_disk_provisioned_iops}
  */
  readonly bootDiskProvisionedIops?: number;
  /**
  * Indicates how much throughput to provision for the disk. This sets the number of throughput mb per second that the disk can handle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#boot_disk_provisioned_throughput DataprocCluster#boot_disk_provisioned_throughput}
  */
  readonly bootDiskProvisionedThroughput?: number;
  /**
  * Size of the primary disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#boot_disk_size_gb DataprocCluster#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * The disk type of the primary disk attached to each node. Such as "pd-ssd" or "pd-standard".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#boot_disk_type DataprocCluster#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
  * Interface type of local SSDs (no Local SSDs or NVMe). Valid values: "scsi" (Small Computer System Interface), "nvme" (Non-Volatile Memory Express).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#local_ssd_interface DataprocCluster#local_ssd_interface}
  */
  readonly localSsdInterface?: string;
  /**
  * The amount of local SSD disks that will be attached to each cluster node. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#num_local_ssds DataprocCluster#num_local_ssds}
  */
  readonly numLocalSsds?: number;
}

export function dataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfigToTerraform(struct?: DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfigOutputReference | DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boot_disk_provisioned_iops: cdktn.numberToTerraform(struct!.bootDiskProvisionedIops),
    boot_disk_provisioned_throughput: cdktn.numberToTerraform(struct!.bootDiskProvisionedThroughput),
    boot_disk_size_gb: cdktn.numberToTerraform(struct!.bootDiskSizeGb),
    boot_disk_type: cdktn.stringToTerraform(struct!.bootDiskType),
    local_ssd_interface: cdktn.stringToTerraform(struct!.localSsdInterface),
    num_local_ssds: cdktn.numberToTerraform(struct!.numLocalSsds),
  }
}


export function dataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfigToHclTerraform(struct?: DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfigOutputReference | DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    boot_disk_provisioned_iops: {
      value: cdktn.numberToHclTerraform(struct!.bootDiskProvisionedIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    boot_disk_provisioned_throughput: {
      value: cdktn.numberToHclTerraform(struct!.bootDiskProvisionedThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    boot_disk_size_gb: {
      value: cdktn.numberToHclTerraform(struct!.bootDiskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    boot_disk_type: {
      value: cdktn.stringToHclTerraform(struct!.bootDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_ssd_interface: {
      value: cdktn.stringToHclTerraform(struct!.localSsdInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_local_ssds: {
      value: cdktn.numberToHclTerraform(struct!.numLocalSsds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskProvisionedIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskProvisionedIops = this._bootDiskProvisionedIops;
    }
    if (this._bootDiskProvisionedThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskProvisionedThroughput = this._bootDiskProvisionedThroughput;
    }
    if (this._bootDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskSizeGb = this._bootDiskSizeGb;
    }
    if (this._bootDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskType = this._bootDiskType;
    }
    if (this._localSsdInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdInterface = this._localSsdInterface;
    }
    if (this._numLocalSsds !== undefined) {
      hasAnyValues = true;
      internalValueResult.numLocalSsds = this._numLocalSsds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskProvisionedIops = undefined;
      this._bootDiskProvisionedThroughput = undefined;
      this._bootDiskSizeGb = undefined;
      this._bootDiskType = undefined;
      this._localSsdInterface = undefined;
      this._numLocalSsds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskProvisionedIops = value.bootDiskProvisionedIops;
      this._bootDiskProvisionedThroughput = value.bootDiskProvisionedThroughput;
      this._bootDiskSizeGb = value.bootDiskSizeGb;
      this._bootDiskType = value.bootDiskType;
      this._localSsdInterface = value.localSsdInterface;
      this._numLocalSsds = value.numLocalSsds;
    }
  }

  // boot_disk_provisioned_iops - computed: false, optional: true, required: false
  private _bootDiskProvisionedIops?: number; 
  public get bootDiskProvisionedIops() {
    return this.getNumberAttribute('boot_disk_provisioned_iops');
  }
  public set bootDiskProvisionedIops(value: number) {
    this._bootDiskProvisionedIops = value;
  }
  public resetBootDiskProvisionedIops() {
    this._bootDiskProvisionedIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskProvisionedIopsInput() {
    return this._bootDiskProvisionedIops;
  }

  // boot_disk_provisioned_throughput - computed: false, optional: true, required: false
  private _bootDiskProvisionedThroughput?: number; 
  public get bootDiskProvisionedThroughput() {
    return this.getNumberAttribute('boot_disk_provisioned_throughput');
  }
  public set bootDiskProvisionedThroughput(value: number) {
    this._bootDiskProvisionedThroughput = value;
  }
  public resetBootDiskProvisionedThroughput() {
    this._bootDiskProvisionedThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskProvisionedThroughputInput() {
    return this._bootDiskProvisionedThroughput;
  }

  // boot_disk_size_gb - computed: false, optional: true, required: false
  private _bootDiskSizeGb?: number; 
  public get bootDiskSizeGb() {
    return this.getNumberAttribute('boot_disk_size_gb');
  }
  public set bootDiskSizeGb(value: number) {
    this._bootDiskSizeGb = value;
  }
  public resetBootDiskSizeGb() {
    this._bootDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeGbInput() {
    return this._bootDiskSizeGb;
  }

  // boot_disk_type - computed: false, optional: true, required: false
  private _bootDiskType?: string; 
  public get bootDiskType() {
    return this.getStringAttribute('boot_disk_type');
  }
  public set bootDiskType(value: string) {
    this._bootDiskType = value;
  }
  public resetBootDiskType() {
    this._bootDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskTypeInput() {
    return this._bootDiskType;
  }

  // local_ssd_interface - computed: false, optional: true, required: false
  private _localSsdInterface?: string; 
  public get localSsdInterface() {
    return this.getStringAttribute('local_ssd_interface');
  }
  public set localSsdInterface(value: string) {
    this._localSsdInterface = value;
  }
  public resetLocalSsdInterface() {
    this._localSsdInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdInterfaceInput() {
    return this._localSsdInterface;
  }

  // num_local_ssds - computed: false, optional: true, required: false
  private _numLocalSsds?: number; 
  public get numLocalSsds() {
    return this.getNumberAttribute('num_local_ssds');
  }
  public set numLocalSsds(value: number) {
    this._numLocalSsds = value;
  }
  public resetNumLocalSsds() {
    this._numLocalSsds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numLocalSsdsInput() {
    return this._numLocalSsds;
  }
}
export interface DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListStruct {
  /**
  * Full machine-type names, e.g. "n1-standard-16".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#machine_types DataprocCluster#machine_types}
  */
  readonly machineTypes?: string[];
  /**
  * Preference of this instance selection. Lower number means higher preference. Dataproc will first try to create a VM based on the machine-type with priority rank and fallback to next rank based on availability. Machine types and instance selections with the same priority have the same preference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#rank DataprocCluster#rank}
  */
  readonly rank?: number;
  /**
  * disk_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#disk_config DataprocCluster#disk_config}
  */
  readonly diskConfig?: DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfig;
}

export function dataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListStructToTerraform(struct?: DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    machine_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.machineTypes),
    rank: cdktn.numberToTerraform(struct!.rank),
    disk_config: dataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfigToTerraform(struct!.diskConfig),
  }
}


export function dataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListStructToHclTerraform(struct?: DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    machine_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.machineTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rank: {
      value: cdktn.numberToHclTerraform(struct!.rank),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_config: {
      value: dataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfigToHclTerraform(struct!.diskConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineTypes = this._machineTypes;
    }
    if (this._rank !== undefined) {
      hasAnyValues = true;
      internalValueResult.rank = this._rank;
    }
    if (this._diskConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskConfig = this._diskConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._machineTypes = undefined;
      this._rank = undefined;
      this._diskConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._machineTypes = value.machineTypes;
      this._rank = value.rank;
      this._diskConfig.internalValue = value.diskConfig;
    }
  }

  // machine_types - computed: true, optional: true, required: false
  private _machineTypes?: string[]; 
  public get machineTypes() {
    return this.getListAttribute('machine_types');
  }
  public set machineTypes(value: string[]) {
    this._machineTypes = value;
  }
  public resetMachineTypes() {
    this._machineTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypesInput() {
    return this._machineTypes;
  }

  // rank - computed: true, optional: true, required: false
  private _rank?: number; 
  public get rank() {
    return this.getNumberAttribute('rank');
  }
  public set rank(value: number) {
    this._rank = value;
  }
  public resetRank() {
    this._rank = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rankInput() {
    return this._rank;
  }

  // disk_config - computed: false, optional: true, required: false
  private _diskConfig = new DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfigOutputReference(this, "disk_config");
  public get diskConfig() {
    return this._diskConfig;
  }
  public putDiskConfig(value: DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfig) {
    this._diskConfig.internalValue = value;
  }
  public resetDiskConfig() {
    this._diskConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskConfigInput() {
    return this._diskConfig.internalValue;
  }
}

export class DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListStructList extends cdktn.ComplexList {
  public internalValue? : DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListStruct[] | cdktn.IResolvable

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
  public get(index: number): DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListStructOutputReference {
    return new DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicy {
  /**
  * instance_selection_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#instance_selection_list DataprocCluster#instance_selection_list}
  */
  readonly instanceSelectionList?: DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListStruct[] | cdktn.IResolvable;
}

export function dataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyToTerraform(struct?: DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyOutputReference | DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_selection_list: cdktn.listMapper(dataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListStructToTerraform, true)(struct!.instanceSelectionList),
  }
}


export function dataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyToHclTerraform(struct?: DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyOutputReference | DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_selection_list: {
      value: cdktn.listMapperHcl(dataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListStructToHclTerraform, true)(struct!.instanceSelectionList),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceSelectionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceSelectionList = this._instanceSelectionList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceSelectionList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceSelectionList.internalValue = value.instanceSelectionList;
    }
  }

  // instance_selection_results - computed: true, optional: false, required: false
  private _instanceSelectionResults = new DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionResultsList(this, "instance_selection_results", false);
  public get instanceSelectionResults() {
    return this._instanceSelectionResults;
  }

  // instance_selection_list - computed: false, optional: true, required: false
  private _instanceSelectionList = new DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListStructList(this, "instance_selection_list", false);
  public get instanceSelectionList() {
    return this._instanceSelectionList;
  }
  public putInstanceSelectionList(value: DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyInstanceSelectionListStruct[] | cdktn.IResolvable) {
    this._instanceSelectionList.internalValue = value;
  }
  public resetInstanceSelectionList() {
    this._instanceSelectionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSelectionListInput() {
    return this._instanceSelectionList.internalValue;
  }
}
export interface DataprocClusterClusterConfigMasterConfig {
  /**
  * The URI for the image to use for this master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#image_uri DataprocCluster#image_uri}
  */
  readonly imageUri?: string;
  /**
  * The name of a Google Compute Engine machine type to create for the master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#machine_type DataprocCluster#machine_type}
  */
  readonly machineType?: string;
  /**
  * The name of a minimum generation of CPU family for the master. If not specified, GCP will default to a predetermined computed value for each zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#min_cpu_platform DataprocCluster#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Specifies the number of master nodes to create. If not specified, GCP will default to a predetermined computed value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#num_instances DataprocCluster#num_instances}
  */
  readonly numInstances?: number;
  /**
  * accelerators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#accelerators DataprocCluster#accelerators}
  */
  readonly accelerators?: DataprocClusterClusterConfigMasterConfigAccelerators[] | cdktn.IResolvable;
  /**
  * disk_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#disk_config DataprocCluster#disk_config}
  */
  readonly diskConfig?: DataprocClusterClusterConfigMasterConfigDiskConfig;
  /**
  * instance_flexibility_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#instance_flexibility_policy DataprocCluster#instance_flexibility_policy}
  */
  readonly instanceFlexibilityPolicy?: DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicy;
}

export function dataprocClusterClusterConfigMasterConfigToTerraform(struct?: DataprocClusterClusterConfigMasterConfigOutputReference | DataprocClusterClusterConfigMasterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image_uri: cdktn.stringToTerraform(struct!.imageUri),
    machine_type: cdktn.stringToTerraform(struct!.machineType),
    min_cpu_platform: cdktn.stringToTerraform(struct!.minCpuPlatform),
    num_instances: cdktn.numberToTerraform(struct!.numInstances),
    accelerators: cdktn.listMapper(dataprocClusterClusterConfigMasterConfigAcceleratorsToTerraform, true)(struct!.accelerators),
    disk_config: dataprocClusterClusterConfigMasterConfigDiskConfigToTerraform(struct!.diskConfig),
    instance_flexibility_policy: dataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyToTerraform(struct!.instanceFlexibilityPolicy),
  }
}


export function dataprocClusterClusterConfigMasterConfigToHclTerraform(struct?: DataprocClusterClusterConfigMasterConfigOutputReference | DataprocClusterClusterConfigMasterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    image_uri: {
      value: cdktn.stringToHclTerraform(struct!.imageUri),
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
    num_instances: {
      value: cdktn.numberToHclTerraform(struct!.numInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accelerators: {
      value: cdktn.listMapperHcl(dataprocClusterClusterConfigMasterConfigAcceleratorsToHclTerraform, true)(struct!.accelerators),
      isBlock: true,
      type: "set",
      storageClassType: "DataprocClusterClusterConfigMasterConfigAcceleratorsList",
    },
    disk_config: {
      value: dataprocClusterClusterConfigMasterConfigDiskConfigToHclTerraform(struct!.diskConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigMasterConfigDiskConfigList",
    },
    instance_flexibility_policy: {
      value: dataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyToHclTerraform(struct!.instanceFlexibilityPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigMasterConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigMasterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._minCpuPlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._numInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.numInstances = this._numInstances;
    }
    if (this._accelerators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accelerators = this._accelerators?.internalValue;
    }
    if (this._diskConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskConfig = this._diskConfig?.internalValue;
    }
    if (this._instanceFlexibilityPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceFlexibilityPolicy = this._instanceFlexibilityPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigMasterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageUri = undefined;
      this._machineType = undefined;
      this._minCpuPlatform = undefined;
      this._numInstances = undefined;
      this._accelerators.internalValue = undefined;
      this._diskConfig.internalValue = undefined;
      this._instanceFlexibilityPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageUri = value.imageUri;
      this._machineType = value.machineType;
      this._minCpuPlatform = value.minCpuPlatform;
      this._numInstances = value.numInstances;
      this._accelerators.internalValue = value.accelerators;
      this._diskConfig.internalValue = value.diskConfig;
      this._instanceFlexibilityPolicy.internalValue = value.instanceFlexibilityPolicy;
    }
  }

  // image_uri - computed: true, optional: true, required: false
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  public resetImageUri() {
    this._imageUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
  }

  // instance_names - computed: true, optional: false, required: false
  public get instanceNames() {
    return this.getListAttribute('instance_names');
  }

  // machine_type - computed: true, optional: true, required: false
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

  // min_cpu_platform - computed: true, optional: true, required: false
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

  // num_instances - computed: true, optional: true, required: false
  private _numInstances?: number; 
  public get numInstances() {
    return this.getNumberAttribute('num_instances');
  }
  public set numInstances(value: number) {
    this._numInstances = value;
  }
  public resetNumInstances() {
    this._numInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInstancesInput() {
    return this._numInstances;
  }

  // accelerators - computed: false, optional: true, required: false
  private _accelerators = new DataprocClusterClusterConfigMasterConfigAcceleratorsList(this, "accelerators", true);
  public get accelerators() {
    return this._accelerators;
  }
  public putAccelerators(value: DataprocClusterClusterConfigMasterConfigAccelerators[] | cdktn.IResolvable) {
    this._accelerators.internalValue = value;
  }
  public resetAccelerators() {
    this._accelerators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorsInput() {
    return this._accelerators.internalValue;
  }

  // disk_config - computed: false, optional: true, required: false
  private _diskConfig = new DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference(this, "disk_config");
  public get diskConfig() {
    return this._diskConfig;
  }
  public putDiskConfig(value: DataprocClusterClusterConfigMasterConfigDiskConfig) {
    this._diskConfig.internalValue = value;
  }
  public resetDiskConfig() {
    this._diskConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskConfigInput() {
    return this._diskConfig.internalValue;
  }

  // instance_flexibility_policy - computed: false, optional: true, required: false
  private _instanceFlexibilityPolicy = new DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicyOutputReference(this, "instance_flexibility_policy");
  public get instanceFlexibilityPolicy() {
    return this._instanceFlexibilityPolicy;
  }
  public putInstanceFlexibilityPolicy(value: DataprocClusterClusterConfigMasterConfigInstanceFlexibilityPolicy) {
    this._instanceFlexibilityPolicy.internalValue = value;
  }
  public resetInstanceFlexibilityPolicy() {
    this._instanceFlexibilityPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceFlexibilityPolicyInput() {
    return this._instanceFlexibilityPolicy.internalValue;
  }
}
export interface DataprocClusterClusterConfigMetastoreConfig {
  /**
  * Resource name of an existing Dataproc Metastore service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#dataproc_metastore_service DataprocCluster#dataproc_metastore_service}
  */
  readonly dataprocMetastoreService: string;
}

export function dataprocClusterClusterConfigMetastoreConfigToTerraform(struct?: DataprocClusterClusterConfigMetastoreConfigOutputReference | DataprocClusterClusterConfigMetastoreConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataproc_metastore_service: cdktn.stringToTerraform(struct!.dataprocMetastoreService),
  }
}


export function dataprocClusterClusterConfigMetastoreConfigToHclTerraform(struct?: DataprocClusterClusterConfigMetastoreConfigOutputReference | DataprocClusterClusterConfigMetastoreConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataproc_metastore_service: {
      value: cdktn.stringToHclTerraform(struct!.dataprocMetastoreService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigMetastoreConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigMetastoreConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataprocMetastoreService !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataprocMetastoreService = this._dataprocMetastoreService;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigMetastoreConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataprocMetastoreService = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataprocMetastoreService = value.dataprocMetastoreService;
    }
  }

  // dataproc_metastore_service - computed: false, optional: false, required: true
  private _dataprocMetastoreService?: string; 
  public get dataprocMetastoreService() {
    return this.getStringAttribute('dataproc_metastore_service');
  }
  public set dataprocMetastoreService(value: string) {
    this._dataprocMetastoreService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataprocMetastoreServiceInput() {
    return this._dataprocMetastoreService;
  }
}
export interface DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig {
  /**
  * Indicates how many IOPS to provision for the disk. This sets the number of I/O operations per second that the disk can handle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#boot_disk_provisioned_iops DataprocCluster#boot_disk_provisioned_iops}
  */
  readonly bootDiskProvisionedIops?: number;
  /**
  * Indicates how much throughput to provision for the disk. This sets the number of throughput mb per second that the disk can handle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#boot_disk_provisioned_throughput DataprocCluster#boot_disk_provisioned_throughput}
  */
  readonly bootDiskProvisionedThroughput?: number;
  /**
  * Size of the primary disk attached to each preemptible worker node, specified in GB. The smallest allowed disk size is 10GB. GCP will default to a predetermined computed value if not set (currently 500GB). Note: If SSDs are not attached, it also contains the HDFS data blocks and Hadoop working directories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#boot_disk_size_gb DataprocCluster#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * The disk type of the primary disk attached to each preemptible worker node. Such as "pd-ssd" or "pd-standard". Defaults to "pd-standard".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#boot_disk_type DataprocCluster#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
  * Interface type of local SSDs (default is "scsi"). Valid values: "scsi" (Small Computer System Interface), "nvme" (Non-Volatile Memory Express).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#local_ssd_interface DataprocCluster#local_ssd_interface}
  */
  readonly localSsdInterface?: string;
  /**
  * The amount of local SSD disks that will be attached to each preemptible worker node. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#num_local_ssds DataprocCluster#num_local_ssds}
  */
  readonly numLocalSsds?: number;
}

export function dataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigToTerraform(struct?: DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference | DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boot_disk_provisioned_iops: cdktn.numberToTerraform(struct!.bootDiskProvisionedIops),
    boot_disk_provisioned_throughput: cdktn.numberToTerraform(struct!.bootDiskProvisionedThroughput),
    boot_disk_size_gb: cdktn.numberToTerraform(struct!.bootDiskSizeGb),
    boot_disk_type: cdktn.stringToTerraform(struct!.bootDiskType),
    local_ssd_interface: cdktn.stringToTerraform(struct!.localSsdInterface),
    num_local_ssds: cdktn.numberToTerraform(struct!.numLocalSsds),
  }
}


export function dataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigToHclTerraform(struct?: DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference | DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    boot_disk_provisioned_iops: {
      value: cdktn.numberToHclTerraform(struct!.bootDiskProvisionedIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    boot_disk_provisioned_throughput: {
      value: cdktn.numberToHclTerraform(struct!.bootDiskProvisionedThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    boot_disk_size_gb: {
      value: cdktn.numberToHclTerraform(struct!.bootDiskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    boot_disk_type: {
      value: cdktn.stringToHclTerraform(struct!.bootDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_ssd_interface: {
      value: cdktn.stringToHclTerraform(struct!.localSsdInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_local_ssds: {
      value: cdktn.numberToHclTerraform(struct!.numLocalSsds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskProvisionedIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskProvisionedIops = this._bootDiskProvisionedIops;
    }
    if (this._bootDiskProvisionedThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskProvisionedThroughput = this._bootDiskProvisionedThroughput;
    }
    if (this._bootDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskSizeGb = this._bootDiskSizeGb;
    }
    if (this._bootDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskType = this._bootDiskType;
    }
    if (this._localSsdInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdInterface = this._localSsdInterface;
    }
    if (this._numLocalSsds !== undefined) {
      hasAnyValues = true;
      internalValueResult.numLocalSsds = this._numLocalSsds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskProvisionedIops = undefined;
      this._bootDiskProvisionedThroughput = undefined;
      this._bootDiskSizeGb = undefined;
      this._bootDiskType = undefined;
      this._localSsdInterface = undefined;
      this._numLocalSsds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskProvisionedIops = value.bootDiskProvisionedIops;
      this._bootDiskProvisionedThroughput = value.bootDiskProvisionedThroughput;
      this._bootDiskSizeGb = value.bootDiskSizeGb;
      this._bootDiskType = value.bootDiskType;
      this._localSsdInterface = value.localSsdInterface;
      this._numLocalSsds = value.numLocalSsds;
    }
  }

  // boot_disk_provisioned_iops - computed: false, optional: true, required: false
  private _bootDiskProvisionedIops?: number; 
  public get bootDiskProvisionedIops() {
    return this.getNumberAttribute('boot_disk_provisioned_iops');
  }
  public set bootDiskProvisionedIops(value: number) {
    this._bootDiskProvisionedIops = value;
  }
  public resetBootDiskProvisionedIops() {
    this._bootDiskProvisionedIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskProvisionedIopsInput() {
    return this._bootDiskProvisionedIops;
  }

  // boot_disk_provisioned_throughput - computed: false, optional: true, required: false
  private _bootDiskProvisionedThroughput?: number; 
  public get bootDiskProvisionedThroughput() {
    return this.getNumberAttribute('boot_disk_provisioned_throughput');
  }
  public set bootDiskProvisionedThroughput(value: number) {
    this._bootDiskProvisionedThroughput = value;
  }
  public resetBootDiskProvisionedThroughput() {
    this._bootDiskProvisionedThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskProvisionedThroughputInput() {
    return this._bootDiskProvisionedThroughput;
  }

  // boot_disk_size_gb - computed: true, optional: true, required: false
  private _bootDiskSizeGb?: number; 
  public get bootDiskSizeGb() {
    return this.getNumberAttribute('boot_disk_size_gb');
  }
  public set bootDiskSizeGb(value: number) {
    this._bootDiskSizeGb = value;
  }
  public resetBootDiskSizeGb() {
    this._bootDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeGbInput() {
    return this._bootDiskSizeGb;
  }

  // boot_disk_type - computed: false, optional: true, required: false
  private _bootDiskType?: string; 
  public get bootDiskType() {
    return this.getStringAttribute('boot_disk_type');
  }
  public set bootDiskType(value: string) {
    this._bootDiskType = value;
  }
  public resetBootDiskType() {
    this._bootDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskTypeInput() {
    return this._bootDiskType;
  }

  // local_ssd_interface - computed: false, optional: true, required: false
  private _localSsdInterface?: string; 
  public get localSsdInterface() {
    return this.getStringAttribute('local_ssd_interface');
  }
  public set localSsdInterface(value: string) {
    this._localSsdInterface = value;
  }
  public resetLocalSsdInterface() {
    this._localSsdInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdInterfaceInput() {
    return this._localSsdInterface;
  }

  // num_local_ssds - computed: true, optional: true, required: false
  private _numLocalSsds?: number; 
  public get numLocalSsds() {
    return this.getNumberAttribute('num_local_ssds');
  }
  public set numLocalSsds(value: number) {
    this._numLocalSsds = value;
  }
  public resetNumLocalSsds() {
    this._numLocalSsds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numLocalSsdsInput() {
    return this._numLocalSsds;
  }
}
export interface DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResults {
}

export function dataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResultsToTerraform(struct?: DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResults): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResultsToHclTerraform(struct?: DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResults): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResultsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // machine_type - computed: true, optional: false, required: false
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }

  // vm_count - computed: true, optional: false, required: false
  public get vmCount() {
    return this.getNumberAttribute('vm_count');
  }
}

export class DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResultsList extends cdktn.ComplexList {

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
  public get(index: number): DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResultsOutputReference {
    return new DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfig {
  /**
  * Indicates how many IOPS to provision for the disk. This sets the number of I/O operations per second that the disk can handle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#boot_disk_provisioned_iops DataprocCluster#boot_disk_provisioned_iops}
  */
  readonly bootDiskProvisionedIops?: number;
  /**
  * Indicates how much throughput to provision for the disk. This sets the number of throughput mb per second that the disk can handle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#boot_disk_provisioned_throughput DataprocCluster#boot_disk_provisioned_throughput}
  */
  readonly bootDiskProvisionedThroughput?: number;
  /**
  * Size of the primary disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#boot_disk_size_gb DataprocCluster#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * The disk type of the primary disk attached to each node. Such as "pd-ssd" or "pd-standard".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#boot_disk_type DataprocCluster#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
  * Interface type of local SSDs (no Local SSDs or NVMe). Valid values: "scsi" (Small Computer System Interface), "nvme" (Non-Volatile Memory Express).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#local_ssd_interface DataprocCluster#local_ssd_interface}
  */
  readonly localSsdInterface?: string;
  /**
  * The amount of local SSD disks that will be attached to each cluster node. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#num_local_ssds DataprocCluster#num_local_ssds}
  */
  readonly numLocalSsds?: number;
}

export function dataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfigToTerraform(struct?: DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfigOutputReference | DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boot_disk_provisioned_iops: cdktn.numberToTerraform(struct!.bootDiskProvisionedIops),
    boot_disk_provisioned_throughput: cdktn.numberToTerraform(struct!.bootDiskProvisionedThroughput),
    boot_disk_size_gb: cdktn.numberToTerraform(struct!.bootDiskSizeGb),
    boot_disk_type: cdktn.stringToTerraform(struct!.bootDiskType),
    local_ssd_interface: cdktn.stringToTerraform(struct!.localSsdInterface),
    num_local_ssds: cdktn.numberToTerraform(struct!.numLocalSsds),
  }
}


export function dataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfigToHclTerraform(struct?: DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfigOutputReference | DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    boot_disk_provisioned_iops: {
      value: cdktn.numberToHclTerraform(struct!.bootDiskProvisionedIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    boot_disk_provisioned_throughput: {
      value: cdktn.numberToHclTerraform(struct!.bootDiskProvisionedThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    boot_disk_size_gb: {
      value: cdktn.numberToHclTerraform(struct!.bootDiskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    boot_disk_type: {
      value: cdktn.stringToHclTerraform(struct!.bootDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_ssd_interface: {
      value: cdktn.stringToHclTerraform(struct!.localSsdInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_local_ssds: {
      value: cdktn.numberToHclTerraform(struct!.numLocalSsds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskProvisionedIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskProvisionedIops = this._bootDiskProvisionedIops;
    }
    if (this._bootDiskProvisionedThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskProvisionedThroughput = this._bootDiskProvisionedThroughput;
    }
    if (this._bootDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskSizeGb = this._bootDiskSizeGb;
    }
    if (this._bootDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskType = this._bootDiskType;
    }
    if (this._localSsdInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdInterface = this._localSsdInterface;
    }
    if (this._numLocalSsds !== undefined) {
      hasAnyValues = true;
      internalValueResult.numLocalSsds = this._numLocalSsds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskProvisionedIops = undefined;
      this._bootDiskProvisionedThroughput = undefined;
      this._bootDiskSizeGb = undefined;
      this._bootDiskType = undefined;
      this._localSsdInterface = undefined;
      this._numLocalSsds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskProvisionedIops = value.bootDiskProvisionedIops;
      this._bootDiskProvisionedThroughput = value.bootDiskProvisionedThroughput;
      this._bootDiskSizeGb = value.bootDiskSizeGb;
      this._bootDiskType = value.bootDiskType;
      this._localSsdInterface = value.localSsdInterface;
      this._numLocalSsds = value.numLocalSsds;
    }
  }

  // boot_disk_provisioned_iops - computed: false, optional: true, required: false
  private _bootDiskProvisionedIops?: number; 
  public get bootDiskProvisionedIops() {
    return this.getNumberAttribute('boot_disk_provisioned_iops');
  }
  public set bootDiskProvisionedIops(value: number) {
    this._bootDiskProvisionedIops = value;
  }
  public resetBootDiskProvisionedIops() {
    this._bootDiskProvisionedIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskProvisionedIopsInput() {
    return this._bootDiskProvisionedIops;
  }

  // boot_disk_provisioned_throughput - computed: false, optional: true, required: false
  private _bootDiskProvisionedThroughput?: number; 
  public get bootDiskProvisionedThroughput() {
    return this.getNumberAttribute('boot_disk_provisioned_throughput');
  }
  public set bootDiskProvisionedThroughput(value: number) {
    this._bootDiskProvisionedThroughput = value;
  }
  public resetBootDiskProvisionedThroughput() {
    this._bootDiskProvisionedThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskProvisionedThroughputInput() {
    return this._bootDiskProvisionedThroughput;
  }

  // boot_disk_size_gb - computed: false, optional: true, required: false
  private _bootDiskSizeGb?: number; 
  public get bootDiskSizeGb() {
    return this.getNumberAttribute('boot_disk_size_gb');
  }
  public set bootDiskSizeGb(value: number) {
    this._bootDiskSizeGb = value;
  }
  public resetBootDiskSizeGb() {
    this._bootDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeGbInput() {
    return this._bootDiskSizeGb;
  }

  // boot_disk_type - computed: false, optional: true, required: false
  private _bootDiskType?: string; 
  public get bootDiskType() {
    return this.getStringAttribute('boot_disk_type');
  }
  public set bootDiskType(value: string) {
    this._bootDiskType = value;
  }
  public resetBootDiskType() {
    this._bootDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskTypeInput() {
    return this._bootDiskType;
  }

  // local_ssd_interface - computed: false, optional: true, required: false
  private _localSsdInterface?: string; 
  public get localSsdInterface() {
    return this.getStringAttribute('local_ssd_interface');
  }
  public set localSsdInterface(value: string) {
    this._localSsdInterface = value;
  }
  public resetLocalSsdInterface() {
    this._localSsdInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdInterfaceInput() {
    return this._localSsdInterface;
  }

  // num_local_ssds - computed: false, optional: true, required: false
  private _numLocalSsds?: number; 
  public get numLocalSsds() {
    return this.getNumberAttribute('num_local_ssds');
  }
  public set numLocalSsds(value: number) {
    this._numLocalSsds = value;
  }
  public resetNumLocalSsds() {
    this._numLocalSsds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numLocalSsdsInput() {
    return this._numLocalSsds;
  }
}
export interface DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStruct {
  /**
  * Full machine-type names, e.g. "n1-standard-16".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#machine_types DataprocCluster#machine_types}
  */
  readonly machineTypes?: string[];
  /**
  * Preference of this instance selection. Lower number means higher preference. Dataproc will first try to create a VM based on the machine-type with priority rank and fallback to next rank based on availability. Machine types and instance selections with the same priority have the same preference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#rank DataprocCluster#rank}
  */
  readonly rank?: number;
  /**
  * disk_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#disk_config DataprocCluster#disk_config}
  */
  readonly diskConfig?: DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfig;
}

export function dataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStructToTerraform(struct?: DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    machine_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.machineTypes),
    rank: cdktn.numberToTerraform(struct!.rank),
    disk_config: dataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfigToTerraform(struct!.diskConfig),
  }
}


export function dataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStructToHclTerraform(struct?: DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    machine_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.machineTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rank: {
      value: cdktn.numberToHclTerraform(struct!.rank),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_config: {
      value: dataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfigToHclTerraform(struct!.diskConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineTypes = this._machineTypes;
    }
    if (this._rank !== undefined) {
      hasAnyValues = true;
      internalValueResult.rank = this._rank;
    }
    if (this._diskConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskConfig = this._diskConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._machineTypes = undefined;
      this._rank = undefined;
      this._diskConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._machineTypes = value.machineTypes;
      this._rank = value.rank;
      this._diskConfig.internalValue = value.diskConfig;
    }
  }

  // machine_types - computed: true, optional: true, required: false
  private _machineTypes?: string[]; 
  public get machineTypes() {
    return this.getListAttribute('machine_types');
  }
  public set machineTypes(value: string[]) {
    this._machineTypes = value;
  }
  public resetMachineTypes() {
    this._machineTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypesInput() {
    return this._machineTypes;
  }

  // rank - computed: true, optional: true, required: false
  private _rank?: number; 
  public get rank() {
    return this.getNumberAttribute('rank');
  }
  public set rank(value: number) {
    this._rank = value;
  }
  public resetRank() {
    this._rank = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rankInput() {
    return this._rank;
  }

  // disk_config - computed: false, optional: true, required: false
  private _diskConfig = new DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfigOutputReference(this, "disk_config");
  public get diskConfig() {
    return this._diskConfig;
  }
  public putDiskConfig(value: DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfig) {
    this._diskConfig.internalValue = value;
  }
  public resetDiskConfig() {
    this._diskConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskConfigInput() {
    return this._diskConfig.internalValue;
  }
}

export class DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStructList extends cdktn.ComplexList {
  public internalValue? : DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStruct[] | cdktn.IResolvable

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
  public get(index: number): DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStructOutputReference {
    return new DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyProvisioningModelMix {
  /**
  * The base capacity that will always use Standard VMs to avoid risk of more preemption than the minimum capacity you need.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#standard_capacity_base DataprocCluster#standard_capacity_base}
  */
  readonly standardCapacityBase?: number;
  /**
  * The percentage of target capacity that should use Standard VM. The remaining percentage will use Spot VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#standard_capacity_percent_above_base DataprocCluster#standard_capacity_percent_above_base}
  */
  readonly standardCapacityPercentAboveBase?: number;
}

export function dataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyProvisioningModelMixToTerraform(struct?: DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyProvisioningModelMixOutputReference | DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyProvisioningModelMix): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    standard_capacity_base: cdktn.numberToTerraform(struct!.standardCapacityBase),
    standard_capacity_percent_above_base: cdktn.numberToTerraform(struct!.standardCapacityPercentAboveBase),
  }
}


export function dataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyProvisioningModelMixToHclTerraform(struct?: DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyProvisioningModelMixOutputReference | DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyProvisioningModelMix): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    standard_capacity_base: {
      value: cdktn.numberToHclTerraform(struct!.standardCapacityBase),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    standard_capacity_percent_above_base: {
      value: cdktn.numberToHclTerraform(struct!.standardCapacityPercentAboveBase),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyProvisioningModelMixOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyProvisioningModelMix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._standardCapacityBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardCapacityBase = this._standardCapacityBase;
    }
    if (this._standardCapacityPercentAboveBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardCapacityPercentAboveBase = this._standardCapacityPercentAboveBase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyProvisioningModelMix | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._standardCapacityBase = undefined;
      this._standardCapacityPercentAboveBase = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._standardCapacityBase = value.standardCapacityBase;
      this._standardCapacityPercentAboveBase = value.standardCapacityPercentAboveBase;
    }
  }

  // standard_capacity_base - computed: false, optional: true, required: false
  private _standardCapacityBase?: number; 
  public get standardCapacityBase() {
    return this.getNumberAttribute('standard_capacity_base');
  }
  public set standardCapacityBase(value: number) {
    this._standardCapacityBase = value;
  }
  public resetStandardCapacityBase() {
    this._standardCapacityBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardCapacityBaseInput() {
    return this._standardCapacityBase;
  }

  // standard_capacity_percent_above_base - computed: false, optional: true, required: false
  private _standardCapacityPercentAboveBase?: number; 
  public get standardCapacityPercentAboveBase() {
    return this.getNumberAttribute('standard_capacity_percent_above_base');
  }
  public set standardCapacityPercentAboveBase(value: number) {
    this._standardCapacityPercentAboveBase = value;
  }
  public resetStandardCapacityPercentAboveBase() {
    this._standardCapacityPercentAboveBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardCapacityPercentAboveBaseInput() {
    return this._standardCapacityPercentAboveBase;
  }
}
export interface DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicy {
  /**
  * instance_selection_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#instance_selection_list DataprocCluster#instance_selection_list}
  */
  readonly instanceSelectionList?: DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStruct[] | cdktn.IResolvable;
  /**
  * provisioning_model_mix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#provisioning_model_mix DataprocCluster#provisioning_model_mix}
  */
  readonly provisioningModelMix?: DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyProvisioningModelMix;
}

export function dataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyToTerraform(struct?: DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyOutputReference | DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_selection_list: cdktn.listMapper(dataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStructToTerraform, true)(struct!.instanceSelectionList),
    provisioning_model_mix: dataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyProvisioningModelMixToTerraform(struct!.provisioningModelMix),
  }
}


export function dataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyToHclTerraform(struct?: DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyOutputReference | DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_selection_list: {
      value: cdktn.listMapperHcl(dataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStructToHclTerraform, true)(struct!.instanceSelectionList),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStructList",
    },
    provisioning_model_mix: {
      value: dataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyProvisioningModelMixToHclTerraform(struct!.provisioningModelMix),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyProvisioningModelMixList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceSelectionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceSelectionList = this._instanceSelectionList?.internalValue;
    }
    if (this._provisioningModelMix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioningModelMix = this._provisioningModelMix?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceSelectionList.internalValue = undefined;
      this._provisioningModelMix.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceSelectionList.internalValue = value.instanceSelectionList;
      this._provisioningModelMix.internalValue = value.provisioningModelMix;
    }
  }

  // instance_selection_results - computed: true, optional: false, required: false
  private _instanceSelectionResults = new DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResultsList(this, "instance_selection_results", false);
  public get instanceSelectionResults() {
    return this._instanceSelectionResults;
  }

  // instance_selection_list - computed: false, optional: true, required: false
  private _instanceSelectionList = new DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStructList(this, "instance_selection_list", false);
  public get instanceSelectionList() {
    return this._instanceSelectionList;
  }
  public putInstanceSelectionList(value: DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStruct[] | cdktn.IResolvable) {
    this._instanceSelectionList.internalValue = value;
  }
  public resetInstanceSelectionList() {
    this._instanceSelectionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSelectionListInput() {
    return this._instanceSelectionList.internalValue;
  }

  // provisioning_model_mix - computed: false, optional: true, required: false
  private _provisioningModelMix = new DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyProvisioningModelMixOutputReference(this, "provisioning_model_mix");
  public get provisioningModelMix() {
    return this._provisioningModelMix;
  }
  public putProvisioningModelMix(value: DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyProvisioningModelMix) {
    this._provisioningModelMix.internalValue = value;
  }
  public resetProvisioningModelMix() {
    this._provisioningModelMix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningModelMixInput() {
    return this._provisioningModelMix.internalValue;
  }
}
export interface DataprocClusterClusterConfigPreemptibleWorkerConfig {
  /**
  * Specifies the number of preemptible nodes to create. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#num_instances DataprocCluster#num_instances}
  */
  readonly numInstances?: number;
  /**
  * Specifies the preemptibility of the secondary nodes. Defaults to PREEMPTIBLE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#preemptibility DataprocCluster#preemptibility}
  */
  readonly preemptibility?: string;
  /**
  * disk_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#disk_config DataprocCluster#disk_config}
  */
  readonly diskConfig?: DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig;
  /**
  * instance_flexibility_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#instance_flexibility_policy DataprocCluster#instance_flexibility_policy}
  */
  readonly instanceFlexibilityPolicy?: DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicy;
}

export function dataprocClusterClusterConfigPreemptibleWorkerConfigToTerraform(struct?: DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference | DataprocClusterClusterConfigPreemptibleWorkerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    num_instances: cdktn.numberToTerraform(struct!.numInstances),
    preemptibility: cdktn.stringToTerraform(struct!.preemptibility),
    disk_config: dataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigToTerraform(struct!.diskConfig),
    instance_flexibility_policy: dataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyToTerraform(struct!.instanceFlexibilityPolicy),
  }
}


export function dataprocClusterClusterConfigPreemptibleWorkerConfigToHclTerraform(struct?: DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference | DataprocClusterClusterConfigPreemptibleWorkerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    num_instances: {
      value: cdktn.numberToHclTerraform(struct!.numInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preemptibility: {
      value: cdktn.stringToHclTerraform(struct!.preemptibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_config: {
      value: dataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigToHclTerraform(struct!.diskConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigList",
    },
    instance_flexibility_policy: {
      value: dataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyToHclTerraform(struct!.instanceFlexibilityPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigPreemptibleWorkerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.numInstances = this._numInstances;
    }
    if (this._preemptibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptibility = this._preemptibility;
    }
    if (this._diskConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskConfig = this._diskConfig?.internalValue;
    }
    if (this._instanceFlexibilityPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceFlexibilityPolicy = this._instanceFlexibilityPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigPreemptibleWorkerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numInstances = undefined;
      this._preemptibility = undefined;
      this._diskConfig.internalValue = undefined;
      this._instanceFlexibilityPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numInstances = value.numInstances;
      this._preemptibility = value.preemptibility;
      this._diskConfig.internalValue = value.diskConfig;
      this._instanceFlexibilityPolicy.internalValue = value.instanceFlexibilityPolicy;
    }
  }

  // instance_names - computed: true, optional: false, required: false
  public get instanceNames() {
    return this.getListAttribute('instance_names');
  }

  // num_instances - computed: true, optional: true, required: false
  private _numInstances?: number; 
  public get numInstances() {
    return this.getNumberAttribute('num_instances');
  }
  public set numInstances(value: number) {
    this._numInstances = value;
  }
  public resetNumInstances() {
    this._numInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInstancesInput() {
    return this._numInstances;
  }

  // preemptibility - computed: false, optional: true, required: false
  private _preemptibility?: string; 
  public get preemptibility() {
    return this.getStringAttribute('preemptibility');
  }
  public set preemptibility(value: string) {
    this._preemptibility = value;
  }
  public resetPreemptibility() {
    this._preemptibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibilityInput() {
    return this._preemptibility;
  }

  // disk_config - computed: false, optional: true, required: false
  private _diskConfig = new DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference(this, "disk_config");
  public get diskConfig() {
    return this._diskConfig;
  }
  public putDiskConfig(value: DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig) {
    this._diskConfig.internalValue = value;
  }
  public resetDiskConfig() {
    this._diskConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskConfigInput() {
    return this._diskConfig.internalValue;
  }

  // instance_flexibility_policy - computed: false, optional: true, required: false
  private _instanceFlexibilityPolicy = new DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyOutputReference(this, "instance_flexibility_policy");
  public get instanceFlexibilityPolicy() {
    return this._instanceFlexibilityPolicy;
  }
  public putInstanceFlexibilityPolicy(value: DataprocClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicy) {
    this._instanceFlexibilityPolicy.internalValue = value;
  }
  public resetInstanceFlexibilityPolicy() {
    this._instanceFlexibilityPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceFlexibilityPolicyInput() {
    return this._instanceFlexibilityPolicy.internalValue;
  }
}
export interface DataprocClusterClusterConfigSecurityConfigIdentityConfig {
  /**
  * User to service account mappings for multi-tenancy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#user_service_account_mapping DataprocCluster#user_service_account_mapping}
  */
  readonly userServiceAccountMapping: { [key: string]: string };
}

export function dataprocClusterClusterConfigSecurityConfigIdentityConfigToTerraform(struct?: DataprocClusterClusterConfigSecurityConfigIdentityConfigOutputReference | DataprocClusterClusterConfigSecurityConfigIdentityConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    user_service_account_mapping: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.userServiceAccountMapping),
  }
}


export function dataprocClusterClusterConfigSecurityConfigIdentityConfigToHclTerraform(struct?: DataprocClusterClusterConfigSecurityConfigIdentityConfigOutputReference | DataprocClusterClusterConfigSecurityConfigIdentityConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    user_service_account_mapping: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.userServiceAccountMapping),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigSecurityConfigIdentityConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigSecurityConfigIdentityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userServiceAccountMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.userServiceAccountMapping = this._userServiceAccountMapping;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigSecurityConfigIdentityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userServiceAccountMapping = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userServiceAccountMapping = value.userServiceAccountMapping;
    }
  }

  // user_service_account_mapping - computed: false, optional: false, required: true
  private _userServiceAccountMapping?: { [key: string]: string }; 
  public get userServiceAccountMapping() {
    return this.getStringMapAttribute('user_service_account_mapping');
  }
  public set userServiceAccountMapping(value: { [key: string]: string }) {
    this._userServiceAccountMapping = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userServiceAccountMappingInput() {
    return this._userServiceAccountMapping;
  }
}
export interface DataprocClusterClusterConfigSecurityConfigKerberosConfig {
  /**
  * The admin server (IP or hostname) for the remote trusted realm in a cross realm trust relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#cross_realm_trust_admin_server DataprocCluster#cross_realm_trust_admin_server}
  */
  readonly crossRealmTrustAdminServer?: string;
  /**
  * The KDC (IP or hostname) for the remote trusted realm in a cross realm trust relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#cross_realm_trust_kdc DataprocCluster#cross_realm_trust_kdc}
  */
  readonly crossRealmTrustKdc?: string;
  /**
  * The remote realm the Dataproc on-cluster KDC will trust, should the user enable cross realm trust.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#cross_realm_trust_realm DataprocCluster#cross_realm_trust_realm}
  */
  readonly crossRealmTrustRealm?: string;
  /**
  * The Cloud Storage URI of a KMS encrypted file containing the shared password between the on-cluster
  * Kerberos realm and the remote trusted realm, in a cross realm trust relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#cross_realm_trust_shared_password_uri DataprocCluster#cross_realm_trust_shared_password_uri}
  */
  readonly crossRealmTrustSharedPasswordUri?: string;
  /**
  * Flag to indicate whether to Kerberize the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#enable_kerberos DataprocCluster#enable_kerberos}
  */
  readonly enableKerberos?: boolean | cdktn.IResolvable;
  /**
  * The Cloud Storage URI of a KMS encrypted file containing the master key of the KDC database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#kdc_db_key_uri DataprocCluster#kdc_db_key_uri}
  */
  readonly kdcDbKeyUri?: string;
  /**
  * The Cloud Storage URI of a KMS encrypted file containing the password to the user provided key. For the self-signed certificate, this password is generated by Dataproc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#key_password_uri DataprocCluster#key_password_uri}
  */
  readonly keyPasswordUri?: string;
  /**
  * The Cloud Storage URI of a KMS encrypted file containing
  * the password to the user provided keystore. For the self-signed certificate, this password is generated
  * by Dataproc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#keystore_password_uri DataprocCluster#keystore_password_uri}
  */
  readonly keystorePasswordUri?: string;
  /**
  * The Cloud Storage URI of the keystore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#keystore_uri DataprocCluster#keystore_uri}
  */
  readonly keystoreUri?: string;
  /**
  * The uri of the KMS key used to encrypt various sensitive files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#kms_key_uri DataprocCluster#kms_key_uri}
  */
  readonly kmsKeyUri: string;
  /**
  * The name of the on-cluster Kerberos realm. If not specified, the uppercased domain of hostnames will be the realm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#realm DataprocCluster#realm}
  */
  readonly realm?: string;
  /**
  * The cloud Storage URI of a KMS encrypted file containing the root principal password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#root_principal_password_uri DataprocCluster#root_principal_password_uri}
  */
  readonly rootPrincipalPasswordUri: string;
  /**
  * The lifetime of the ticket granting ticket, in hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#tgt_lifetime_hours DataprocCluster#tgt_lifetime_hours}
  */
  readonly tgtLifetimeHours?: number;
  /**
  * The Cloud Storage URI of a KMS encrypted file containing the password to the user provided truststore. For the self-signed certificate, this password is generated by Dataproc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#truststore_password_uri DataprocCluster#truststore_password_uri}
  */
  readonly truststorePasswordUri?: string;
  /**
  * The Cloud Storage URI of the truststore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#truststore_uri DataprocCluster#truststore_uri}
  */
  readonly truststoreUri?: string;
}

export function dataprocClusterClusterConfigSecurityConfigKerberosConfigToTerraform(struct?: DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference | DataprocClusterClusterConfigSecurityConfigKerberosConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_realm_trust_admin_server: cdktn.stringToTerraform(struct!.crossRealmTrustAdminServer),
    cross_realm_trust_kdc: cdktn.stringToTerraform(struct!.crossRealmTrustKdc),
    cross_realm_trust_realm: cdktn.stringToTerraform(struct!.crossRealmTrustRealm),
    cross_realm_trust_shared_password_uri: cdktn.stringToTerraform(struct!.crossRealmTrustSharedPasswordUri),
    enable_kerberos: cdktn.booleanToTerraform(struct!.enableKerberos),
    kdc_db_key_uri: cdktn.stringToTerraform(struct!.kdcDbKeyUri),
    key_password_uri: cdktn.stringToTerraform(struct!.keyPasswordUri),
    keystore_password_uri: cdktn.stringToTerraform(struct!.keystorePasswordUri),
    keystore_uri: cdktn.stringToTerraform(struct!.keystoreUri),
    kms_key_uri: cdktn.stringToTerraform(struct!.kmsKeyUri),
    realm: cdktn.stringToTerraform(struct!.realm),
    root_principal_password_uri: cdktn.stringToTerraform(struct!.rootPrincipalPasswordUri),
    tgt_lifetime_hours: cdktn.numberToTerraform(struct!.tgtLifetimeHours),
    truststore_password_uri: cdktn.stringToTerraform(struct!.truststorePasswordUri),
    truststore_uri: cdktn.stringToTerraform(struct!.truststoreUri),
  }
}


export function dataprocClusterClusterConfigSecurityConfigKerberosConfigToHclTerraform(struct?: DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference | DataprocClusterClusterConfigSecurityConfigKerberosConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_realm_trust_admin_server: {
      value: cdktn.stringToHclTerraform(struct!.crossRealmTrustAdminServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_realm_trust_kdc: {
      value: cdktn.stringToHclTerraform(struct!.crossRealmTrustKdc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_realm_trust_realm: {
      value: cdktn.stringToHclTerraform(struct!.crossRealmTrustRealm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_realm_trust_shared_password_uri: {
      value: cdktn.stringToHclTerraform(struct!.crossRealmTrustSharedPasswordUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_kerberos: {
      value: cdktn.booleanToHclTerraform(struct!.enableKerberos),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kdc_db_key_uri: {
      value: cdktn.stringToHclTerraform(struct!.kdcDbKeyUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_password_uri: {
      value: cdktn.stringToHclTerraform(struct!.keyPasswordUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keystore_password_uri: {
      value: cdktn.stringToHclTerraform(struct!.keystorePasswordUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keystore_uri: {
      value: cdktn.stringToHclTerraform(struct!.keystoreUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_uri: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realm: {
      value: cdktn.stringToHclTerraform(struct!.realm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_principal_password_uri: {
      value: cdktn.stringToHclTerraform(struct!.rootPrincipalPasswordUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tgt_lifetime_hours: {
      value: cdktn.numberToHclTerraform(struct!.tgtLifetimeHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    truststore_password_uri: {
      value: cdktn.stringToHclTerraform(struct!.truststorePasswordUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    truststore_uri: {
      value: cdktn.stringToHclTerraform(struct!.truststoreUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigSecurityConfigKerberosConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossRealmTrustAdminServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossRealmTrustAdminServer = this._crossRealmTrustAdminServer;
    }
    if (this._crossRealmTrustKdc !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossRealmTrustKdc = this._crossRealmTrustKdc;
    }
    if (this._crossRealmTrustRealm !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossRealmTrustRealm = this._crossRealmTrustRealm;
    }
    if (this._crossRealmTrustSharedPasswordUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossRealmTrustSharedPasswordUri = this._crossRealmTrustSharedPasswordUri;
    }
    if (this._enableKerberos !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableKerberos = this._enableKerberos;
    }
    if (this._kdcDbKeyUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.kdcDbKeyUri = this._kdcDbKeyUri;
    }
    if (this._keyPasswordUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPasswordUri = this._keyPasswordUri;
    }
    if (this._keystorePasswordUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.keystorePasswordUri = this._keystorePasswordUri;
    }
    if (this._keystoreUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.keystoreUri = this._keystoreUri;
    }
    if (this._kmsKeyUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyUri = this._kmsKeyUri;
    }
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    if (this._rootPrincipalPasswordUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootPrincipalPasswordUri = this._rootPrincipalPasswordUri;
    }
    if (this._tgtLifetimeHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgtLifetimeHours = this._tgtLifetimeHours;
    }
    if (this._truststorePasswordUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.truststorePasswordUri = this._truststorePasswordUri;
    }
    if (this._truststoreUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.truststoreUri = this._truststoreUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigSecurityConfigKerberosConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crossRealmTrustAdminServer = undefined;
      this._crossRealmTrustKdc = undefined;
      this._crossRealmTrustRealm = undefined;
      this._crossRealmTrustSharedPasswordUri = undefined;
      this._enableKerberos = undefined;
      this._kdcDbKeyUri = undefined;
      this._keyPasswordUri = undefined;
      this._keystorePasswordUri = undefined;
      this._keystoreUri = undefined;
      this._kmsKeyUri = undefined;
      this._realm = undefined;
      this._rootPrincipalPasswordUri = undefined;
      this._tgtLifetimeHours = undefined;
      this._truststorePasswordUri = undefined;
      this._truststoreUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crossRealmTrustAdminServer = value.crossRealmTrustAdminServer;
      this._crossRealmTrustKdc = value.crossRealmTrustKdc;
      this._crossRealmTrustRealm = value.crossRealmTrustRealm;
      this._crossRealmTrustSharedPasswordUri = value.crossRealmTrustSharedPasswordUri;
      this._enableKerberos = value.enableKerberos;
      this._kdcDbKeyUri = value.kdcDbKeyUri;
      this._keyPasswordUri = value.keyPasswordUri;
      this._keystorePasswordUri = value.keystorePasswordUri;
      this._keystoreUri = value.keystoreUri;
      this._kmsKeyUri = value.kmsKeyUri;
      this._realm = value.realm;
      this._rootPrincipalPasswordUri = value.rootPrincipalPasswordUri;
      this._tgtLifetimeHours = value.tgtLifetimeHours;
      this._truststorePasswordUri = value.truststorePasswordUri;
      this._truststoreUri = value.truststoreUri;
    }
  }

  // cross_realm_trust_admin_server - computed: false, optional: true, required: false
  private _crossRealmTrustAdminServer?: string; 
  public get crossRealmTrustAdminServer() {
    return this.getStringAttribute('cross_realm_trust_admin_server');
  }
  public set crossRealmTrustAdminServer(value: string) {
    this._crossRealmTrustAdminServer = value;
  }
  public resetCrossRealmTrustAdminServer() {
    this._crossRealmTrustAdminServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRealmTrustAdminServerInput() {
    return this._crossRealmTrustAdminServer;
  }

  // cross_realm_trust_kdc - computed: false, optional: true, required: false
  private _crossRealmTrustKdc?: string; 
  public get crossRealmTrustKdc() {
    return this.getStringAttribute('cross_realm_trust_kdc');
  }
  public set crossRealmTrustKdc(value: string) {
    this._crossRealmTrustKdc = value;
  }
  public resetCrossRealmTrustKdc() {
    this._crossRealmTrustKdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRealmTrustKdcInput() {
    return this._crossRealmTrustKdc;
  }

  // cross_realm_trust_realm - computed: false, optional: true, required: false
  private _crossRealmTrustRealm?: string; 
  public get crossRealmTrustRealm() {
    return this.getStringAttribute('cross_realm_trust_realm');
  }
  public set crossRealmTrustRealm(value: string) {
    this._crossRealmTrustRealm = value;
  }
  public resetCrossRealmTrustRealm() {
    this._crossRealmTrustRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRealmTrustRealmInput() {
    return this._crossRealmTrustRealm;
  }

  // cross_realm_trust_shared_password_uri - computed: false, optional: true, required: false
  private _crossRealmTrustSharedPasswordUri?: string; 
  public get crossRealmTrustSharedPasswordUri() {
    return this.getStringAttribute('cross_realm_trust_shared_password_uri');
  }
  public set crossRealmTrustSharedPasswordUri(value: string) {
    this._crossRealmTrustSharedPasswordUri = value;
  }
  public resetCrossRealmTrustSharedPasswordUri() {
    this._crossRealmTrustSharedPasswordUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRealmTrustSharedPasswordUriInput() {
    return this._crossRealmTrustSharedPasswordUri;
  }

  // enable_kerberos - computed: false, optional: true, required: false
  private _enableKerberos?: boolean | cdktn.IResolvable; 
  public get enableKerberos() {
    return this.getBooleanAttribute('enable_kerberos');
  }
  public set enableKerberos(value: boolean | cdktn.IResolvable) {
    this._enableKerberos = value;
  }
  public resetEnableKerberos() {
    this._enableKerberos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKerberosInput() {
    return this._enableKerberos;
  }

  // kdc_db_key_uri - computed: false, optional: true, required: false
  private _kdcDbKeyUri?: string; 
  public get kdcDbKeyUri() {
    return this.getStringAttribute('kdc_db_key_uri');
  }
  public set kdcDbKeyUri(value: string) {
    this._kdcDbKeyUri = value;
  }
  public resetKdcDbKeyUri() {
    this._kdcDbKeyUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcDbKeyUriInput() {
    return this._kdcDbKeyUri;
  }

  // key_password_uri - computed: false, optional: true, required: false
  private _keyPasswordUri?: string; 
  public get keyPasswordUri() {
    return this.getStringAttribute('key_password_uri');
  }
  public set keyPasswordUri(value: string) {
    this._keyPasswordUri = value;
  }
  public resetKeyPasswordUri() {
    this._keyPasswordUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPasswordUriInput() {
    return this._keyPasswordUri;
  }

  // keystore_password_uri - computed: false, optional: true, required: false
  private _keystorePasswordUri?: string; 
  public get keystorePasswordUri() {
    return this.getStringAttribute('keystore_password_uri');
  }
  public set keystorePasswordUri(value: string) {
    this._keystorePasswordUri = value;
  }
  public resetKeystorePasswordUri() {
    this._keystorePasswordUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystorePasswordUriInput() {
    return this._keystorePasswordUri;
  }

  // keystore_uri - computed: false, optional: true, required: false
  private _keystoreUri?: string; 
  public get keystoreUri() {
    return this.getStringAttribute('keystore_uri');
  }
  public set keystoreUri(value: string) {
    this._keystoreUri = value;
  }
  public resetKeystoreUri() {
    this._keystoreUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoreUriInput() {
    return this._keystoreUri;
  }

  // kms_key_uri - computed: false, optional: false, required: true
  private _kmsKeyUri?: string; 
  public get kmsKeyUri() {
    return this.getStringAttribute('kms_key_uri');
  }
  public set kmsKeyUri(value: string) {
    this._kmsKeyUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyUriInput() {
    return this._kmsKeyUri;
  }

  // realm - computed: false, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // root_principal_password_uri - computed: false, optional: false, required: true
  private _rootPrincipalPasswordUri?: string; 
  public get rootPrincipalPasswordUri() {
    return this.getStringAttribute('root_principal_password_uri');
  }
  public set rootPrincipalPasswordUri(value: string) {
    this._rootPrincipalPasswordUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPrincipalPasswordUriInput() {
    return this._rootPrincipalPasswordUri;
  }

  // tgt_lifetime_hours - computed: false, optional: true, required: false
  private _tgtLifetimeHours?: number; 
  public get tgtLifetimeHours() {
    return this.getNumberAttribute('tgt_lifetime_hours');
  }
  public set tgtLifetimeHours(value: number) {
    this._tgtLifetimeHours = value;
  }
  public resetTgtLifetimeHours() {
    this._tgtLifetimeHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtLifetimeHoursInput() {
    return this._tgtLifetimeHours;
  }

  // truststore_password_uri - computed: false, optional: true, required: false
  private _truststorePasswordUri?: string; 
  public get truststorePasswordUri() {
    return this.getStringAttribute('truststore_password_uri');
  }
  public set truststorePasswordUri(value: string) {
    this._truststorePasswordUri = value;
  }
  public resetTruststorePasswordUri() {
    this._truststorePasswordUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truststorePasswordUriInput() {
    return this._truststorePasswordUri;
  }

  // truststore_uri - computed: false, optional: true, required: false
  private _truststoreUri?: string; 
  public get truststoreUri() {
    return this.getStringAttribute('truststore_uri');
  }
  public set truststoreUri(value: string) {
    this._truststoreUri = value;
  }
  public resetTruststoreUri() {
    this._truststoreUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truststoreUriInput() {
    return this._truststoreUri;
  }
}
export interface DataprocClusterClusterConfigSecurityConfig {
  /**
  * identity_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#identity_config DataprocCluster#identity_config}
  */
  readonly identityConfig?: DataprocClusterClusterConfigSecurityConfigIdentityConfig;
  /**
  * kerberos_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#kerberos_config DataprocCluster#kerberos_config}
  */
  readonly kerberosConfig?: DataprocClusterClusterConfigSecurityConfigKerberosConfig;
}

export function dataprocClusterClusterConfigSecurityConfigToTerraform(struct?: DataprocClusterClusterConfigSecurityConfigOutputReference | DataprocClusterClusterConfigSecurityConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity_config: dataprocClusterClusterConfigSecurityConfigIdentityConfigToTerraform(struct!.identityConfig),
    kerberos_config: dataprocClusterClusterConfigSecurityConfigKerberosConfigToTerraform(struct!.kerberosConfig),
  }
}


export function dataprocClusterClusterConfigSecurityConfigToHclTerraform(struct?: DataprocClusterClusterConfigSecurityConfigOutputReference | DataprocClusterClusterConfigSecurityConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identity_config: {
      value: dataprocClusterClusterConfigSecurityConfigIdentityConfigToHclTerraform(struct!.identityConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigSecurityConfigIdentityConfigList",
    },
    kerberos_config: {
      value: dataprocClusterClusterConfigSecurityConfigKerberosConfigToHclTerraform(struct!.kerberosConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigSecurityConfigKerberosConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigSecurityConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigSecurityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityConfig = this._identityConfig?.internalValue;
    }
    if (this._kerberosConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosConfig = this._kerberosConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigSecurityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityConfig.internalValue = undefined;
      this._kerberosConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityConfig.internalValue = value.identityConfig;
      this._kerberosConfig.internalValue = value.kerberosConfig;
    }
  }

  // identity_config - computed: false, optional: true, required: false
  private _identityConfig = new DataprocClusterClusterConfigSecurityConfigIdentityConfigOutputReference(this, "identity_config");
  public get identityConfig() {
    return this._identityConfig;
  }
  public putIdentityConfig(value: DataprocClusterClusterConfigSecurityConfigIdentityConfig) {
    this._identityConfig.internalValue = value;
  }
  public resetIdentityConfig() {
    this._identityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityConfigInput() {
    return this._identityConfig.internalValue;
  }

  // kerberos_config - computed: false, optional: true, required: false
  private _kerberosConfig = new DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference(this, "kerberos_config");
  public get kerberosConfig() {
    return this._kerberosConfig;
  }
  public putKerberosConfig(value: DataprocClusterClusterConfigSecurityConfigKerberosConfig) {
    this._kerberosConfig.internalValue = value;
  }
  public resetKerberosConfig() {
    this._kerberosConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosConfigInput() {
    return this._kerberosConfig.internalValue;
  }
}
export interface DataprocClusterClusterConfigSoftwareConfig {
  /**
  * The Cloud Dataproc image version to use for the cluster - this controls the sets of software versions installed onto the nodes when you create clusters. If not specified, defaults to the latest version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#image_version DataprocCluster#image_version}
  */
  readonly imageVersion?: string;
  /**
  * The set of optional components to activate on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#optional_components DataprocCluster#optional_components}
  */
  readonly optionalComponents?: string[];
  /**
  * A list of override and additional properties (key/value pairs) used to modify various aspects of the common configuration files used when creating a cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#override_properties DataprocCluster#override_properties}
  */
  readonly overrideProperties?: { [key: string]: string };
}

export function dataprocClusterClusterConfigSoftwareConfigToTerraform(struct?: DataprocClusterClusterConfigSoftwareConfigOutputReference | DataprocClusterClusterConfigSoftwareConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image_version: cdktn.stringToTerraform(struct!.imageVersion),
    optional_components: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.optionalComponents),
    override_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.overrideProperties),
  }
}


export function dataprocClusterClusterConfigSoftwareConfigToHclTerraform(struct?: DataprocClusterClusterConfigSoftwareConfigOutputReference | DataprocClusterClusterConfigSoftwareConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    image_version: {
      value: cdktn.stringToHclTerraform(struct!.imageVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional_components: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.optionalComponents),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    override_properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.overrideProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigSoftwareConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigSoftwareConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersion = this._imageVersion;
    }
    if (this._optionalComponents !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalComponents = this._optionalComponents;
    }
    if (this._overrideProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideProperties = this._overrideProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigSoftwareConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageVersion = undefined;
      this._optionalComponents = undefined;
      this._overrideProperties = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageVersion = value.imageVersion;
      this._optionalComponents = value.optionalComponents;
      this._overrideProperties = value.overrideProperties;
    }
  }

  // image_version - computed: true, optional: true, required: false
  private _imageVersion?: string; 
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }
  public set imageVersion(value: string) {
    this._imageVersion = value;
  }
  public resetImageVersion() {
    this._imageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionInput() {
    return this._imageVersion;
  }

  // optional_components - computed: false, optional: true, required: false
  private _optionalComponents?: string[]; 
  public get optionalComponents() {
    return cdktn.Fn.tolist(this.getListAttribute('optional_components'));
  }
  public set optionalComponents(value: string[]) {
    this._optionalComponents = value;
  }
  public resetOptionalComponents() {
    this._optionalComponents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalComponentsInput() {
    return this._optionalComponents;
  }

  // override_properties - computed: false, optional: true, required: false
  private _overrideProperties?: { [key: string]: string }; 
  public get overrideProperties() {
    return this.getStringMapAttribute('override_properties');
  }
  public set overrideProperties(value: { [key: string]: string }) {
    this._overrideProperties = value;
  }
  public resetOverrideProperties() {
    this._overrideProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridePropertiesInput() {
    return this._overrideProperties;
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new cdktn.StringMap(this, "properties");
  public get properties() {
    return this._properties;
  }
}
export interface DataprocClusterClusterConfigWorkerConfigAccelerators {
  /**
  * The number of the accelerator cards of this type exposed to this instance. Often restricted to one of 1, 2, 4, or 8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#accelerator_count DataprocCluster#accelerator_count}
  */
  readonly acceleratorCount: number;
  /**
  * The short name of the accelerator type to expose to this instance. For example, nvidia-tesla-k80.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#accelerator_type DataprocCluster#accelerator_type}
  */
  readonly acceleratorType: string;
}

export function dataprocClusterClusterConfigWorkerConfigAcceleratorsToTerraform(struct?: DataprocClusterClusterConfigWorkerConfigAccelerators | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accelerator_count: cdktn.numberToTerraform(struct!.acceleratorCount),
    accelerator_type: cdktn.stringToTerraform(struct!.acceleratorType),
  }
}


export function dataprocClusterClusterConfigWorkerConfigAcceleratorsToHclTerraform(struct?: DataprocClusterClusterConfigWorkerConfigAccelerators | cdktn.IResolvable): any {
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

export class DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataprocClusterClusterConfigWorkerConfigAccelerators | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataprocClusterClusterConfigWorkerConfigAccelerators | cdktn.IResolvable | undefined) {
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

  // accelerator_count - computed: false, optional: false, required: true
  private _acceleratorCount?: number; 
  public get acceleratorCount() {
    return this.getNumberAttribute('accelerator_count');
  }
  public set acceleratorCount(value: number) {
    this._acceleratorCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorCountInput() {
    return this._acceleratorCount;
  }

  // accelerator_type - computed: false, optional: false, required: true
  private _acceleratorType?: string; 
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }
  public set acceleratorType(value: string) {
    this._acceleratorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTypeInput() {
    return this._acceleratorType;
  }
}

export class DataprocClusterClusterConfigWorkerConfigAcceleratorsList extends cdktn.ComplexList {
  public internalValue? : DataprocClusterClusterConfigWorkerConfigAccelerators[] | cdktn.IResolvable

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
  public get(index: number): DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference {
    return new DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataprocClusterClusterConfigWorkerConfigDiskConfig {
  /**
  * Indicates how many IOPS to provision for the disk. This sets the number of I/O operations per second that the disk can handle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#boot_disk_provisioned_iops DataprocCluster#boot_disk_provisioned_iops}
  */
  readonly bootDiskProvisionedIops?: number;
  /**
  * Indicates how much throughput to provision for the disk. This sets the number of throughput mb per second that the disk can handle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#boot_disk_provisioned_throughput DataprocCluster#boot_disk_provisioned_throughput}
  */
  readonly bootDiskProvisionedThroughput?: number;
  /**
  * Size of the primary disk attached to each node, specified in GB. The primary disk contains the boot volume and system libraries, and the smallest allowed disk size is 10GB. GCP will default to a predetermined computed value if not set (currently 500GB). Note: If SSDs are not attached, it also contains the HDFS data blocks and Hadoop working directories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#boot_disk_size_gb DataprocCluster#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * The disk type of the primary disk attached to each node. Such as "pd-ssd" or "pd-standard". Defaults to "pd-standard".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#boot_disk_type DataprocCluster#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
  * Interface type of local SSDs (default is "scsi"). Valid values: "scsi" (Small Computer System Interface), "nvme" (Non-Volatile Memory Express).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#local_ssd_interface DataprocCluster#local_ssd_interface}
  */
  readonly localSsdInterface?: string;
  /**
  * The amount of local SSD disks that will be attached to each master cluster node. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#num_local_ssds DataprocCluster#num_local_ssds}
  */
  readonly numLocalSsds?: number;
}

export function dataprocClusterClusterConfigWorkerConfigDiskConfigToTerraform(struct?: DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference | DataprocClusterClusterConfigWorkerConfigDiskConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boot_disk_provisioned_iops: cdktn.numberToTerraform(struct!.bootDiskProvisionedIops),
    boot_disk_provisioned_throughput: cdktn.numberToTerraform(struct!.bootDiskProvisionedThroughput),
    boot_disk_size_gb: cdktn.numberToTerraform(struct!.bootDiskSizeGb),
    boot_disk_type: cdktn.stringToTerraform(struct!.bootDiskType),
    local_ssd_interface: cdktn.stringToTerraform(struct!.localSsdInterface),
    num_local_ssds: cdktn.numberToTerraform(struct!.numLocalSsds),
  }
}


export function dataprocClusterClusterConfigWorkerConfigDiskConfigToHclTerraform(struct?: DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference | DataprocClusterClusterConfigWorkerConfigDiskConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    boot_disk_provisioned_iops: {
      value: cdktn.numberToHclTerraform(struct!.bootDiskProvisionedIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    boot_disk_provisioned_throughput: {
      value: cdktn.numberToHclTerraform(struct!.bootDiskProvisionedThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    boot_disk_size_gb: {
      value: cdktn.numberToHclTerraform(struct!.bootDiskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    boot_disk_type: {
      value: cdktn.stringToHclTerraform(struct!.bootDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_ssd_interface: {
      value: cdktn.stringToHclTerraform(struct!.localSsdInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_local_ssds: {
      value: cdktn.numberToHclTerraform(struct!.numLocalSsds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigWorkerConfigDiskConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskProvisionedIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskProvisionedIops = this._bootDiskProvisionedIops;
    }
    if (this._bootDiskProvisionedThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskProvisionedThroughput = this._bootDiskProvisionedThroughput;
    }
    if (this._bootDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskSizeGb = this._bootDiskSizeGb;
    }
    if (this._bootDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskType = this._bootDiskType;
    }
    if (this._localSsdInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdInterface = this._localSsdInterface;
    }
    if (this._numLocalSsds !== undefined) {
      hasAnyValues = true;
      internalValueResult.numLocalSsds = this._numLocalSsds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigWorkerConfigDiskConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskProvisionedIops = undefined;
      this._bootDiskProvisionedThroughput = undefined;
      this._bootDiskSizeGb = undefined;
      this._bootDiskType = undefined;
      this._localSsdInterface = undefined;
      this._numLocalSsds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskProvisionedIops = value.bootDiskProvisionedIops;
      this._bootDiskProvisionedThroughput = value.bootDiskProvisionedThroughput;
      this._bootDiskSizeGb = value.bootDiskSizeGb;
      this._bootDiskType = value.bootDiskType;
      this._localSsdInterface = value.localSsdInterface;
      this._numLocalSsds = value.numLocalSsds;
    }
  }

  // boot_disk_provisioned_iops - computed: false, optional: true, required: false
  private _bootDiskProvisionedIops?: number; 
  public get bootDiskProvisionedIops() {
    return this.getNumberAttribute('boot_disk_provisioned_iops');
  }
  public set bootDiskProvisionedIops(value: number) {
    this._bootDiskProvisionedIops = value;
  }
  public resetBootDiskProvisionedIops() {
    this._bootDiskProvisionedIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskProvisionedIopsInput() {
    return this._bootDiskProvisionedIops;
  }

  // boot_disk_provisioned_throughput - computed: false, optional: true, required: false
  private _bootDiskProvisionedThroughput?: number; 
  public get bootDiskProvisionedThroughput() {
    return this.getNumberAttribute('boot_disk_provisioned_throughput');
  }
  public set bootDiskProvisionedThroughput(value: number) {
    this._bootDiskProvisionedThroughput = value;
  }
  public resetBootDiskProvisionedThroughput() {
    this._bootDiskProvisionedThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskProvisionedThroughputInput() {
    return this._bootDiskProvisionedThroughput;
  }

  // boot_disk_size_gb - computed: true, optional: true, required: false
  private _bootDiskSizeGb?: number; 
  public get bootDiskSizeGb() {
    return this.getNumberAttribute('boot_disk_size_gb');
  }
  public set bootDiskSizeGb(value: number) {
    this._bootDiskSizeGb = value;
  }
  public resetBootDiskSizeGb() {
    this._bootDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeGbInput() {
    return this._bootDiskSizeGb;
  }

  // boot_disk_type - computed: false, optional: true, required: false
  private _bootDiskType?: string; 
  public get bootDiskType() {
    return this.getStringAttribute('boot_disk_type');
  }
  public set bootDiskType(value: string) {
    this._bootDiskType = value;
  }
  public resetBootDiskType() {
    this._bootDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskTypeInput() {
    return this._bootDiskType;
  }

  // local_ssd_interface - computed: false, optional: true, required: false
  private _localSsdInterface?: string; 
  public get localSsdInterface() {
    return this.getStringAttribute('local_ssd_interface');
  }
  public set localSsdInterface(value: string) {
    this._localSsdInterface = value;
  }
  public resetLocalSsdInterface() {
    this._localSsdInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdInterfaceInput() {
    return this._localSsdInterface;
  }

  // num_local_ssds - computed: true, optional: true, required: false
  private _numLocalSsds?: number; 
  public get numLocalSsds() {
    return this.getNumberAttribute('num_local_ssds');
  }
  public set numLocalSsds(value: number) {
    this._numLocalSsds = value;
  }
  public resetNumLocalSsds() {
    this._numLocalSsds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numLocalSsdsInput() {
    return this._numLocalSsds;
  }
}
export interface DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResults {
}

export function dataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResultsToTerraform(struct?: DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResults): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResultsToHclTerraform(struct?: DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResults): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResultsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // machine_type - computed: true, optional: false, required: false
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }

  // vm_count - computed: true, optional: false, required: false
  public get vmCount() {
    return this.getNumberAttribute('vm_count');
  }
}

export class DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResultsList extends cdktn.ComplexList {

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
  public get(index: number): DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResultsOutputReference {
    return new DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfig {
  /**
  * Indicates how many IOPS to provision for the disk. This sets the number of I/O operations per second that the disk can handle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#boot_disk_provisioned_iops DataprocCluster#boot_disk_provisioned_iops}
  */
  readonly bootDiskProvisionedIops?: number;
  /**
  * Indicates how much throughput to provision for the disk. This sets the number of throughput mb per second that the disk can handle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#boot_disk_provisioned_throughput DataprocCluster#boot_disk_provisioned_throughput}
  */
  readonly bootDiskProvisionedThroughput?: number;
  /**
  * Size of the primary disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#boot_disk_size_gb DataprocCluster#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * The disk type of the primary disk attached to each node. Such as "pd-ssd" or "pd-standard".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#boot_disk_type DataprocCluster#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
  * Interface type of local SSDs (no Local SSDs or NVMe). Valid values: "scsi" (Small Computer System Interface), "nvme" (Non-Volatile Memory Express).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#local_ssd_interface DataprocCluster#local_ssd_interface}
  */
  readonly localSsdInterface?: string;
  /**
  * The amount of local SSD disks that will be attached to each cluster node. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#num_local_ssds DataprocCluster#num_local_ssds}
  */
  readonly numLocalSsds?: number;
}

export function dataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfigToTerraform(struct?: DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfigOutputReference | DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boot_disk_provisioned_iops: cdktn.numberToTerraform(struct!.bootDiskProvisionedIops),
    boot_disk_provisioned_throughput: cdktn.numberToTerraform(struct!.bootDiskProvisionedThroughput),
    boot_disk_size_gb: cdktn.numberToTerraform(struct!.bootDiskSizeGb),
    boot_disk_type: cdktn.stringToTerraform(struct!.bootDiskType),
    local_ssd_interface: cdktn.stringToTerraform(struct!.localSsdInterface),
    num_local_ssds: cdktn.numberToTerraform(struct!.numLocalSsds),
  }
}


export function dataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfigToHclTerraform(struct?: DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfigOutputReference | DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    boot_disk_provisioned_iops: {
      value: cdktn.numberToHclTerraform(struct!.bootDiskProvisionedIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    boot_disk_provisioned_throughput: {
      value: cdktn.numberToHclTerraform(struct!.bootDiskProvisionedThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    boot_disk_size_gb: {
      value: cdktn.numberToHclTerraform(struct!.bootDiskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    boot_disk_type: {
      value: cdktn.stringToHclTerraform(struct!.bootDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_ssd_interface: {
      value: cdktn.stringToHclTerraform(struct!.localSsdInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_local_ssds: {
      value: cdktn.numberToHclTerraform(struct!.numLocalSsds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskProvisionedIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskProvisionedIops = this._bootDiskProvisionedIops;
    }
    if (this._bootDiskProvisionedThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskProvisionedThroughput = this._bootDiskProvisionedThroughput;
    }
    if (this._bootDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskSizeGb = this._bootDiskSizeGb;
    }
    if (this._bootDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskType = this._bootDiskType;
    }
    if (this._localSsdInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdInterface = this._localSsdInterface;
    }
    if (this._numLocalSsds !== undefined) {
      hasAnyValues = true;
      internalValueResult.numLocalSsds = this._numLocalSsds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskProvisionedIops = undefined;
      this._bootDiskProvisionedThroughput = undefined;
      this._bootDiskSizeGb = undefined;
      this._bootDiskType = undefined;
      this._localSsdInterface = undefined;
      this._numLocalSsds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskProvisionedIops = value.bootDiskProvisionedIops;
      this._bootDiskProvisionedThroughput = value.bootDiskProvisionedThroughput;
      this._bootDiskSizeGb = value.bootDiskSizeGb;
      this._bootDiskType = value.bootDiskType;
      this._localSsdInterface = value.localSsdInterface;
      this._numLocalSsds = value.numLocalSsds;
    }
  }

  // boot_disk_provisioned_iops - computed: false, optional: true, required: false
  private _bootDiskProvisionedIops?: number; 
  public get bootDiskProvisionedIops() {
    return this.getNumberAttribute('boot_disk_provisioned_iops');
  }
  public set bootDiskProvisionedIops(value: number) {
    this._bootDiskProvisionedIops = value;
  }
  public resetBootDiskProvisionedIops() {
    this._bootDiskProvisionedIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskProvisionedIopsInput() {
    return this._bootDiskProvisionedIops;
  }

  // boot_disk_provisioned_throughput - computed: false, optional: true, required: false
  private _bootDiskProvisionedThroughput?: number; 
  public get bootDiskProvisionedThroughput() {
    return this.getNumberAttribute('boot_disk_provisioned_throughput');
  }
  public set bootDiskProvisionedThroughput(value: number) {
    this._bootDiskProvisionedThroughput = value;
  }
  public resetBootDiskProvisionedThroughput() {
    this._bootDiskProvisionedThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskProvisionedThroughputInput() {
    return this._bootDiskProvisionedThroughput;
  }

  // boot_disk_size_gb - computed: false, optional: true, required: false
  private _bootDiskSizeGb?: number; 
  public get bootDiskSizeGb() {
    return this.getNumberAttribute('boot_disk_size_gb');
  }
  public set bootDiskSizeGb(value: number) {
    this._bootDiskSizeGb = value;
  }
  public resetBootDiskSizeGb() {
    this._bootDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeGbInput() {
    return this._bootDiskSizeGb;
  }

  // boot_disk_type - computed: false, optional: true, required: false
  private _bootDiskType?: string; 
  public get bootDiskType() {
    return this.getStringAttribute('boot_disk_type');
  }
  public set bootDiskType(value: string) {
    this._bootDiskType = value;
  }
  public resetBootDiskType() {
    this._bootDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskTypeInput() {
    return this._bootDiskType;
  }

  // local_ssd_interface - computed: false, optional: true, required: false
  private _localSsdInterface?: string; 
  public get localSsdInterface() {
    return this.getStringAttribute('local_ssd_interface');
  }
  public set localSsdInterface(value: string) {
    this._localSsdInterface = value;
  }
  public resetLocalSsdInterface() {
    this._localSsdInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdInterfaceInput() {
    return this._localSsdInterface;
  }

  // num_local_ssds - computed: false, optional: true, required: false
  private _numLocalSsds?: number; 
  public get numLocalSsds() {
    return this.getNumberAttribute('num_local_ssds');
  }
  public set numLocalSsds(value: number) {
    this._numLocalSsds = value;
  }
  public resetNumLocalSsds() {
    this._numLocalSsds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numLocalSsdsInput() {
    return this._numLocalSsds;
  }
}
export interface DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStruct {
  /**
  * Full machine-type names, e.g. "n1-standard-16".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#machine_types DataprocCluster#machine_types}
  */
  readonly machineTypes?: string[];
  /**
  * Preference of this instance selection. Lower number means higher preference. Dataproc will first try to create a VM based on the machine-type with priority rank and fallback to next rank based on availability. Machine types and instance selections with the same priority have the same preference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#rank DataprocCluster#rank}
  */
  readonly rank?: number;
  /**
  * disk_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#disk_config DataprocCluster#disk_config}
  */
  readonly diskConfig?: DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfig;
}

export function dataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStructToTerraform(struct?: DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    machine_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.machineTypes),
    rank: cdktn.numberToTerraform(struct!.rank),
    disk_config: dataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfigToTerraform(struct!.diskConfig),
  }
}


export function dataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStructToHclTerraform(struct?: DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    machine_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.machineTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rank: {
      value: cdktn.numberToHclTerraform(struct!.rank),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_config: {
      value: dataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfigToHclTerraform(struct!.diskConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineTypes = this._machineTypes;
    }
    if (this._rank !== undefined) {
      hasAnyValues = true;
      internalValueResult.rank = this._rank;
    }
    if (this._diskConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskConfig = this._diskConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._machineTypes = undefined;
      this._rank = undefined;
      this._diskConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._machineTypes = value.machineTypes;
      this._rank = value.rank;
      this._diskConfig.internalValue = value.diskConfig;
    }
  }

  // machine_types - computed: true, optional: true, required: false
  private _machineTypes?: string[]; 
  public get machineTypes() {
    return this.getListAttribute('machine_types');
  }
  public set machineTypes(value: string[]) {
    this._machineTypes = value;
  }
  public resetMachineTypes() {
    this._machineTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypesInput() {
    return this._machineTypes;
  }

  // rank - computed: true, optional: true, required: false
  private _rank?: number; 
  public get rank() {
    return this.getNumberAttribute('rank');
  }
  public set rank(value: number) {
    this._rank = value;
  }
  public resetRank() {
    this._rank = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rankInput() {
    return this._rank;
  }

  // disk_config - computed: false, optional: true, required: false
  private _diskConfig = new DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfigOutputReference(this, "disk_config");
  public get diskConfig() {
    return this._diskConfig;
  }
  public putDiskConfig(value: DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListDiskConfig) {
    this._diskConfig.internalValue = value;
  }
  public resetDiskConfig() {
    this._diskConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskConfigInput() {
    return this._diskConfig.internalValue;
  }
}

export class DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStructList extends cdktn.ComplexList {
  public internalValue? : DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStruct[] | cdktn.IResolvable

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
  public get(index: number): DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStructOutputReference {
    return new DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicy {
  /**
  * instance_selection_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#instance_selection_list DataprocCluster#instance_selection_list}
  */
  readonly instanceSelectionList?: DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStruct[] | cdktn.IResolvable;
}

export function dataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyToTerraform(struct?: DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyOutputReference | DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_selection_list: cdktn.listMapper(dataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStructToTerraform, true)(struct!.instanceSelectionList),
  }
}


export function dataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyToHclTerraform(struct?: DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyOutputReference | DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_selection_list: {
      value: cdktn.listMapperHcl(dataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStructToHclTerraform, true)(struct!.instanceSelectionList),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceSelectionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceSelectionList = this._instanceSelectionList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceSelectionList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceSelectionList.internalValue = value.instanceSelectionList;
    }
  }

  // instance_selection_results - computed: true, optional: false, required: false
  private _instanceSelectionResults = new DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResultsList(this, "instance_selection_results", false);
  public get instanceSelectionResults() {
    return this._instanceSelectionResults;
  }

  // instance_selection_list - computed: false, optional: true, required: false
  private _instanceSelectionList = new DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStructList(this, "instance_selection_list", false);
  public get instanceSelectionList() {
    return this._instanceSelectionList;
  }
  public putInstanceSelectionList(value: DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyInstanceSelectionListStruct[] | cdktn.IResolvable) {
    this._instanceSelectionList.internalValue = value;
  }
  public resetInstanceSelectionList() {
    this._instanceSelectionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSelectionListInput() {
    return this._instanceSelectionList.internalValue;
  }
}
export interface DataprocClusterClusterConfigWorkerConfig {
  /**
  * The URI for the image to use for this master/worker
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#image_uri DataprocCluster#image_uri}
  */
  readonly imageUri?: string;
  /**
  * The name of a Google Compute Engine machine type to create for the master/worker
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#machine_type DataprocCluster#machine_type}
  */
  readonly machineType?: string;
  /**
  * The name of a minimum generation of CPU family for the master/worker. If not specified, GCP will default to a predetermined computed value for each zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#min_cpu_platform DataprocCluster#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * The minimum number of primary worker instances to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#min_num_instances DataprocCluster#min_num_instances}
  */
  readonly minNumInstances?: number;
  /**
  * Specifies the number of worker nodes to create. If not specified, GCP will default to a predetermined computed value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#num_instances DataprocCluster#num_instances}
  */
  readonly numInstances?: number;
  /**
  * accelerators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#accelerators DataprocCluster#accelerators}
  */
  readonly accelerators?: DataprocClusterClusterConfigWorkerConfigAccelerators[] | cdktn.IResolvable;
  /**
  * disk_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#disk_config DataprocCluster#disk_config}
  */
  readonly diskConfig?: DataprocClusterClusterConfigWorkerConfigDiskConfig;
  /**
  * instance_flexibility_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#instance_flexibility_policy DataprocCluster#instance_flexibility_policy}
  */
  readonly instanceFlexibilityPolicy?: DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicy;
}

export function dataprocClusterClusterConfigWorkerConfigToTerraform(struct?: DataprocClusterClusterConfigWorkerConfigOutputReference | DataprocClusterClusterConfigWorkerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image_uri: cdktn.stringToTerraform(struct!.imageUri),
    machine_type: cdktn.stringToTerraform(struct!.machineType),
    min_cpu_platform: cdktn.stringToTerraform(struct!.minCpuPlatform),
    min_num_instances: cdktn.numberToTerraform(struct!.minNumInstances),
    num_instances: cdktn.numberToTerraform(struct!.numInstances),
    accelerators: cdktn.listMapper(dataprocClusterClusterConfigWorkerConfigAcceleratorsToTerraform, true)(struct!.accelerators),
    disk_config: dataprocClusterClusterConfigWorkerConfigDiskConfigToTerraform(struct!.diskConfig),
    instance_flexibility_policy: dataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyToTerraform(struct!.instanceFlexibilityPolicy),
  }
}


export function dataprocClusterClusterConfigWorkerConfigToHclTerraform(struct?: DataprocClusterClusterConfigWorkerConfigOutputReference | DataprocClusterClusterConfigWorkerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    image_uri: {
      value: cdktn.stringToHclTerraform(struct!.imageUri),
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
    min_num_instances: {
      value: cdktn.numberToHclTerraform(struct!.minNumInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_instances: {
      value: cdktn.numberToHclTerraform(struct!.numInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accelerators: {
      value: cdktn.listMapperHcl(dataprocClusterClusterConfigWorkerConfigAcceleratorsToHclTerraform, true)(struct!.accelerators),
      isBlock: true,
      type: "set",
      storageClassType: "DataprocClusterClusterConfigWorkerConfigAcceleratorsList",
    },
    disk_config: {
      value: dataprocClusterClusterConfigWorkerConfigDiskConfigToHclTerraform(struct!.diskConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigWorkerConfigDiskConfigList",
    },
    instance_flexibility_policy: {
      value: dataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyToHclTerraform(struct!.instanceFlexibilityPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigWorkerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfigWorkerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._minCpuPlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._minNumInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNumInstances = this._minNumInstances;
    }
    if (this._numInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.numInstances = this._numInstances;
    }
    if (this._accelerators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accelerators = this._accelerators?.internalValue;
    }
    if (this._diskConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskConfig = this._diskConfig?.internalValue;
    }
    if (this._instanceFlexibilityPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceFlexibilityPolicy = this._instanceFlexibilityPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigWorkerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageUri = undefined;
      this._machineType = undefined;
      this._minCpuPlatform = undefined;
      this._minNumInstances = undefined;
      this._numInstances = undefined;
      this._accelerators.internalValue = undefined;
      this._diskConfig.internalValue = undefined;
      this._instanceFlexibilityPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageUri = value.imageUri;
      this._machineType = value.machineType;
      this._minCpuPlatform = value.minCpuPlatform;
      this._minNumInstances = value.minNumInstances;
      this._numInstances = value.numInstances;
      this._accelerators.internalValue = value.accelerators;
      this._diskConfig.internalValue = value.diskConfig;
      this._instanceFlexibilityPolicy.internalValue = value.instanceFlexibilityPolicy;
    }
  }

  // image_uri - computed: true, optional: true, required: false
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  public resetImageUri() {
    this._imageUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
  }

  // instance_names - computed: true, optional: false, required: false
  public get instanceNames() {
    return this.getListAttribute('instance_names');
  }

  // machine_type - computed: true, optional: true, required: false
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

  // min_cpu_platform - computed: true, optional: true, required: false
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

  // min_num_instances - computed: true, optional: true, required: false
  private _minNumInstances?: number; 
  public get minNumInstances() {
    return this.getNumberAttribute('min_num_instances');
  }
  public set minNumInstances(value: number) {
    this._minNumInstances = value;
  }
  public resetMinNumInstances() {
    this._minNumInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNumInstancesInput() {
    return this._minNumInstances;
  }

  // num_instances - computed: true, optional: true, required: false
  private _numInstances?: number; 
  public get numInstances() {
    return this.getNumberAttribute('num_instances');
  }
  public set numInstances(value: number) {
    this._numInstances = value;
  }
  public resetNumInstances() {
    this._numInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInstancesInput() {
    return this._numInstances;
  }

  // accelerators - computed: false, optional: true, required: false
  private _accelerators = new DataprocClusterClusterConfigWorkerConfigAcceleratorsList(this, "accelerators", true);
  public get accelerators() {
    return this._accelerators;
  }
  public putAccelerators(value: DataprocClusterClusterConfigWorkerConfigAccelerators[] | cdktn.IResolvable) {
    this._accelerators.internalValue = value;
  }
  public resetAccelerators() {
    this._accelerators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorsInput() {
    return this._accelerators.internalValue;
  }

  // disk_config - computed: false, optional: true, required: false
  private _diskConfig = new DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference(this, "disk_config");
  public get diskConfig() {
    return this._diskConfig;
  }
  public putDiskConfig(value: DataprocClusterClusterConfigWorkerConfigDiskConfig) {
    this._diskConfig.internalValue = value;
  }
  public resetDiskConfig() {
    this._diskConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskConfigInput() {
    return this._diskConfig.internalValue;
  }

  // instance_flexibility_policy - computed: false, optional: true, required: false
  private _instanceFlexibilityPolicy = new DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicyOutputReference(this, "instance_flexibility_policy");
  public get instanceFlexibilityPolicy() {
    return this._instanceFlexibilityPolicy;
  }
  public putInstanceFlexibilityPolicy(value: DataprocClusterClusterConfigWorkerConfigInstanceFlexibilityPolicy) {
    this._instanceFlexibilityPolicy.internalValue = value;
  }
  public resetInstanceFlexibilityPolicy() {
    this._instanceFlexibilityPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceFlexibilityPolicyInput() {
    return this._instanceFlexibilityPolicy.internalValue;
  }
}
export interface DataprocClusterClusterConfig {
  /**
  * Specifies the tier of the cluster created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#cluster_tier DataprocCluster#cluster_tier}
  */
  readonly clusterTier?: string;
  /**
  * The type of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#cluster_type DataprocCluster#cluster_type}
  */
  readonly clusterType?: string;
  /**
  * Specifies the engine of the cluster created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#engine DataprocCluster#engine}
  */
  readonly engine?: string;
  /**
  * The Cloud Storage staging bucket used to stage files, such as Hadoop jars, between client machines and the cluster. Note: If you don't explicitly specify a staging_bucket then GCP will auto create / assign one for you. However, you are not guaranteed an auto generated bucket which is solely dedicated to your cluster; it may be shared with other clusters in the same region/zone also choosing to use the auto generation option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#staging_bucket DataprocCluster#staging_bucket}
  */
  readonly stagingBucket?: string;
  /**
  * The Cloud Storage temp bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. Note: If you don't explicitly specify a temp_bucket then GCP will auto create / assign one for you.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#temp_bucket DataprocCluster#temp_bucket}
  */
  readonly tempBucket?: string;
  /**
  * autoscaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#autoscaling_config DataprocCluster#autoscaling_config}
  */
  readonly autoscalingConfig?: DataprocClusterClusterConfigAutoscalingConfig;
  /**
  * auxiliary_node_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#auxiliary_node_groups DataprocCluster#auxiliary_node_groups}
  */
  readonly auxiliaryNodeGroups?: DataprocClusterClusterConfigAuxiliaryNodeGroups[] | cdktn.IResolvable;
  /**
  * dataproc_metric_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#dataproc_metric_config DataprocCluster#dataproc_metric_config}
  */
  readonly dataprocMetricConfig?: DataprocClusterClusterConfigDataprocMetricConfig;
  /**
  * encryption_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#encryption_config DataprocCluster#encryption_config}
  */
  readonly encryptionConfig?: DataprocClusterClusterConfigEncryptionConfig;
  /**
  * endpoint_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#endpoint_config DataprocCluster#endpoint_config}
  */
  readonly endpointConfig?: DataprocClusterClusterConfigEndpointConfig;
  /**
  * gce_cluster_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#gce_cluster_config DataprocCluster#gce_cluster_config}
  */
  readonly gceClusterConfig?: DataprocClusterClusterConfigGceClusterConfig;
  /**
  * initialization_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#initialization_action DataprocCluster#initialization_action}
  */
  readonly initializationAction?: DataprocClusterClusterConfigInitializationAction[] | cdktn.IResolvable;
  /**
  * lifecycle_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#lifecycle_config DataprocCluster#lifecycle_config}
  */
  readonly lifecycleConfig?: DataprocClusterClusterConfigLifecycleConfig;
  /**
  * master_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#master_config DataprocCluster#master_config}
  */
  readonly masterConfig?: DataprocClusterClusterConfigMasterConfig;
  /**
  * metastore_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#metastore_config DataprocCluster#metastore_config}
  */
  readonly metastoreConfig?: DataprocClusterClusterConfigMetastoreConfig;
  /**
  * preemptible_worker_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#preemptible_worker_config DataprocCluster#preemptible_worker_config}
  */
  readonly preemptibleWorkerConfig?: DataprocClusterClusterConfigPreemptibleWorkerConfig;
  /**
  * security_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#security_config DataprocCluster#security_config}
  */
  readonly securityConfig?: DataprocClusterClusterConfigSecurityConfig;
  /**
  * software_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#software_config DataprocCluster#software_config}
  */
  readonly softwareConfig?: DataprocClusterClusterConfigSoftwareConfig;
  /**
  * worker_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#worker_config DataprocCluster#worker_config}
  */
  readonly workerConfig?: DataprocClusterClusterConfigWorkerConfig;
}

export function dataprocClusterClusterConfigToTerraform(struct?: DataprocClusterClusterConfigOutputReference | DataprocClusterClusterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_tier: cdktn.stringToTerraform(struct!.clusterTier),
    cluster_type: cdktn.stringToTerraform(struct!.clusterType),
    engine: cdktn.stringToTerraform(struct!.engine),
    staging_bucket: cdktn.stringToTerraform(struct!.stagingBucket),
    temp_bucket: cdktn.stringToTerraform(struct!.tempBucket),
    autoscaling_config: dataprocClusterClusterConfigAutoscalingConfigToTerraform(struct!.autoscalingConfig),
    auxiliary_node_groups: cdktn.listMapper(dataprocClusterClusterConfigAuxiliaryNodeGroupsToTerraform, true)(struct!.auxiliaryNodeGroups),
    dataproc_metric_config: dataprocClusterClusterConfigDataprocMetricConfigToTerraform(struct!.dataprocMetricConfig),
    encryption_config: dataprocClusterClusterConfigEncryptionConfigToTerraform(struct!.encryptionConfig),
    endpoint_config: dataprocClusterClusterConfigEndpointConfigToTerraform(struct!.endpointConfig),
    gce_cluster_config: dataprocClusterClusterConfigGceClusterConfigToTerraform(struct!.gceClusterConfig),
    initialization_action: cdktn.listMapper(dataprocClusterClusterConfigInitializationActionToTerraform, true)(struct!.initializationAction),
    lifecycle_config: dataprocClusterClusterConfigLifecycleConfigToTerraform(struct!.lifecycleConfig),
    master_config: dataprocClusterClusterConfigMasterConfigToTerraform(struct!.masterConfig),
    metastore_config: dataprocClusterClusterConfigMetastoreConfigToTerraform(struct!.metastoreConfig),
    preemptible_worker_config: dataprocClusterClusterConfigPreemptibleWorkerConfigToTerraform(struct!.preemptibleWorkerConfig),
    security_config: dataprocClusterClusterConfigSecurityConfigToTerraform(struct!.securityConfig),
    software_config: dataprocClusterClusterConfigSoftwareConfigToTerraform(struct!.softwareConfig),
    worker_config: dataprocClusterClusterConfigWorkerConfigToTerraform(struct!.workerConfig),
  }
}


export function dataprocClusterClusterConfigToHclTerraform(struct?: DataprocClusterClusterConfigOutputReference | DataprocClusterClusterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster_tier: {
      value: cdktn.stringToHclTerraform(struct!.clusterTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_type: {
      value: cdktn.stringToHclTerraform(struct!.clusterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    engine: {
      value: cdktn.stringToHclTerraform(struct!.engine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    staging_bucket: {
      value: cdktn.stringToHclTerraform(struct!.stagingBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temp_bucket: {
      value: cdktn.stringToHclTerraform(struct!.tempBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoscaling_config: {
      value: dataprocClusterClusterConfigAutoscalingConfigToHclTerraform(struct!.autoscalingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigAutoscalingConfigList",
    },
    auxiliary_node_groups: {
      value: cdktn.listMapperHcl(dataprocClusterClusterConfigAuxiliaryNodeGroupsToHclTerraform, true)(struct!.auxiliaryNodeGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigAuxiliaryNodeGroupsList",
    },
    dataproc_metric_config: {
      value: dataprocClusterClusterConfigDataprocMetricConfigToHclTerraform(struct!.dataprocMetricConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigDataprocMetricConfigList",
    },
    encryption_config: {
      value: dataprocClusterClusterConfigEncryptionConfigToHclTerraform(struct!.encryptionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigEncryptionConfigList",
    },
    endpoint_config: {
      value: dataprocClusterClusterConfigEndpointConfigToHclTerraform(struct!.endpointConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigEndpointConfigList",
    },
    gce_cluster_config: {
      value: dataprocClusterClusterConfigGceClusterConfigToHclTerraform(struct!.gceClusterConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigGceClusterConfigList",
    },
    initialization_action: {
      value: cdktn.listMapperHcl(dataprocClusterClusterConfigInitializationActionToHclTerraform, true)(struct!.initializationAction),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigInitializationActionList",
    },
    lifecycle_config: {
      value: dataprocClusterClusterConfigLifecycleConfigToHclTerraform(struct!.lifecycleConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigLifecycleConfigList",
    },
    master_config: {
      value: dataprocClusterClusterConfigMasterConfigToHclTerraform(struct!.masterConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigMasterConfigList",
    },
    metastore_config: {
      value: dataprocClusterClusterConfigMetastoreConfigToHclTerraform(struct!.metastoreConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigMetastoreConfigList",
    },
    preemptible_worker_config: {
      value: dataprocClusterClusterConfigPreemptibleWorkerConfigToHclTerraform(struct!.preemptibleWorkerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigPreemptibleWorkerConfigList",
    },
    security_config: {
      value: dataprocClusterClusterConfigSecurityConfigToHclTerraform(struct!.securityConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigSecurityConfigList",
    },
    software_config: {
      value: dataprocClusterClusterConfigSoftwareConfigToHclTerraform(struct!.softwareConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigSoftwareConfigList",
    },
    worker_config: {
      value: dataprocClusterClusterConfigWorkerConfigToHclTerraform(struct!.workerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterClusterConfigWorkerConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterClusterConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterTier = this._clusterTier;
    }
    if (this._clusterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterType = this._clusterType;
    }
    if (this._engine !== undefined) {
      hasAnyValues = true;
      internalValueResult.engine = this._engine;
    }
    if (this._stagingBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.stagingBucket = this._stagingBucket;
    }
    if (this._tempBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.tempBucket = this._tempBucket;
    }
    if (this._autoscalingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingConfig = this._autoscalingConfig?.internalValue;
    }
    if (this._auxiliaryNodeGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auxiliaryNodeGroups = this._auxiliaryNodeGroups?.internalValue;
    }
    if (this._dataprocMetricConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataprocMetricConfig = this._dataprocMetricConfig?.internalValue;
    }
    if (this._encryptionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfig = this._encryptionConfig?.internalValue;
    }
    if (this._endpointConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointConfig = this._endpointConfig?.internalValue;
    }
    if (this._gceClusterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gceClusterConfig = this._gceClusterConfig?.internalValue;
    }
    if (this._initializationAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initializationAction = this._initializationAction?.internalValue;
    }
    if (this._lifecycleConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfig = this._lifecycleConfig?.internalValue;
    }
    if (this._masterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterConfig = this._masterConfig?.internalValue;
    }
    if (this._metastoreConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metastoreConfig = this._metastoreConfig?.internalValue;
    }
    if (this._preemptibleWorkerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptibleWorkerConfig = this._preemptibleWorkerConfig?.internalValue;
    }
    if (this._securityConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityConfig = this._securityConfig?.internalValue;
    }
    if (this._softwareConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareConfig = this._softwareConfig?.internalValue;
    }
    if (this._workerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerConfig = this._workerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterTier = undefined;
      this._clusterType = undefined;
      this._engine = undefined;
      this._stagingBucket = undefined;
      this._tempBucket = undefined;
      this._autoscalingConfig.internalValue = undefined;
      this._auxiliaryNodeGroups.internalValue = undefined;
      this._dataprocMetricConfig.internalValue = undefined;
      this._encryptionConfig.internalValue = undefined;
      this._endpointConfig.internalValue = undefined;
      this._gceClusterConfig.internalValue = undefined;
      this._initializationAction.internalValue = undefined;
      this._lifecycleConfig.internalValue = undefined;
      this._masterConfig.internalValue = undefined;
      this._metastoreConfig.internalValue = undefined;
      this._preemptibleWorkerConfig.internalValue = undefined;
      this._securityConfig.internalValue = undefined;
      this._softwareConfig.internalValue = undefined;
      this._workerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterTier = value.clusterTier;
      this._clusterType = value.clusterType;
      this._engine = value.engine;
      this._stagingBucket = value.stagingBucket;
      this._tempBucket = value.tempBucket;
      this._autoscalingConfig.internalValue = value.autoscalingConfig;
      this._auxiliaryNodeGroups.internalValue = value.auxiliaryNodeGroups;
      this._dataprocMetricConfig.internalValue = value.dataprocMetricConfig;
      this._encryptionConfig.internalValue = value.encryptionConfig;
      this._endpointConfig.internalValue = value.endpointConfig;
      this._gceClusterConfig.internalValue = value.gceClusterConfig;
      this._initializationAction.internalValue = value.initializationAction;
      this._lifecycleConfig.internalValue = value.lifecycleConfig;
      this._masterConfig.internalValue = value.masterConfig;
      this._metastoreConfig.internalValue = value.metastoreConfig;
      this._preemptibleWorkerConfig.internalValue = value.preemptibleWorkerConfig;
      this._securityConfig.internalValue = value.securityConfig;
      this._softwareConfig.internalValue = value.softwareConfig;
      this._workerConfig.internalValue = value.workerConfig;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // cluster_tier - computed: true, optional: true, required: false
  private _clusterTier?: string; 
  public get clusterTier() {
    return this.getStringAttribute('cluster_tier');
  }
  public set clusterTier(value: string) {
    this._clusterTier = value;
  }
  public resetClusterTier() {
    this._clusterTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTierInput() {
    return this._clusterTier;
  }

  // cluster_type - computed: true, optional: true, required: false
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  public resetClusterType() {
    this._clusterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // engine - computed: true, optional: true, required: false
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // staging_bucket - computed: false, optional: true, required: false
  private _stagingBucket?: string; 
  public get stagingBucket() {
    return this.getStringAttribute('staging_bucket');
  }
  public set stagingBucket(value: string) {
    this._stagingBucket = value;
  }
  public resetStagingBucket() {
    this._stagingBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingBucketInput() {
    return this._stagingBucket;
  }

  // temp_bucket - computed: true, optional: true, required: false
  private _tempBucket?: string; 
  public get tempBucket() {
    return this.getStringAttribute('temp_bucket');
  }
  public set tempBucket(value: string) {
    this._tempBucket = value;
  }
  public resetTempBucket() {
    this._tempBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempBucketInput() {
    return this._tempBucket;
  }

  // autoscaling_config - computed: false, optional: true, required: false
  private _autoscalingConfig = new DataprocClusterClusterConfigAutoscalingConfigOutputReference(this, "autoscaling_config");
  public get autoscalingConfig() {
    return this._autoscalingConfig;
  }
  public putAutoscalingConfig(value: DataprocClusterClusterConfigAutoscalingConfig) {
    this._autoscalingConfig.internalValue = value;
  }
  public resetAutoscalingConfig() {
    this._autoscalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingConfigInput() {
    return this._autoscalingConfig.internalValue;
  }

  // auxiliary_node_groups - computed: false, optional: true, required: false
  private _auxiliaryNodeGroups = new DataprocClusterClusterConfigAuxiliaryNodeGroupsList(this, "auxiliary_node_groups", false);
  public get auxiliaryNodeGroups() {
    return this._auxiliaryNodeGroups;
  }
  public putAuxiliaryNodeGroups(value: DataprocClusterClusterConfigAuxiliaryNodeGroups[] | cdktn.IResolvable) {
    this._auxiliaryNodeGroups.internalValue = value;
  }
  public resetAuxiliaryNodeGroups() {
    this._auxiliaryNodeGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auxiliaryNodeGroupsInput() {
    return this._auxiliaryNodeGroups.internalValue;
  }

  // dataproc_metric_config - computed: false, optional: true, required: false
  private _dataprocMetricConfig = new DataprocClusterClusterConfigDataprocMetricConfigOutputReference(this, "dataproc_metric_config");
  public get dataprocMetricConfig() {
    return this._dataprocMetricConfig;
  }
  public putDataprocMetricConfig(value: DataprocClusterClusterConfigDataprocMetricConfig) {
    this._dataprocMetricConfig.internalValue = value;
  }
  public resetDataprocMetricConfig() {
    this._dataprocMetricConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataprocMetricConfigInput() {
    return this._dataprocMetricConfig.internalValue;
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new DataprocClusterClusterConfigEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: DataprocClusterClusterConfigEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }

  // endpoint_config - computed: false, optional: true, required: false
  private _endpointConfig = new DataprocClusterClusterConfigEndpointConfigOutputReference(this, "endpoint_config");
  public get endpointConfig() {
    return this._endpointConfig;
  }
  public putEndpointConfig(value: DataprocClusterClusterConfigEndpointConfig) {
    this._endpointConfig.internalValue = value;
  }
  public resetEndpointConfig() {
    this._endpointConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigInput() {
    return this._endpointConfig.internalValue;
  }

  // gce_cluster_config - computed: false, optional: true, required: false
  private _gceClusterConfig = new DataprocClusterClusterConfigGceClusterConfigOutputReference(this, "gce_cluster_config");
  public get gceClusterConfig() {
    return this._gceClusterConfig;
  }
  public putGceClusterConfig(value: DataprocClusterClusterConfigGceClusterConfig) {
    this._gceClusterConfig.internalValue = value;
  }
  public resetGceClusterConfig() {
    this._gceClusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gceClusterConfigInput() {
    return this._gceClusterConfig.internalValue;
  }

  // initialization_action - computed: false, optional: true, required: false
  private _initializationAction = new DataprocClusterClusterConfigInitializationActionList(this, "initialization_action", false);
  public get initializationAction() {
    return this._initializationAction;
  }
  public putInitializationAction(value: DataprocClusterClusterConfigInitializationAction[] | cdktn.IResolvable) {
    this._initializationAction.internalValue = value;
  }
  public resetInitializationAction() {
    this._initializationAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializationActionInput() {
    return this._initializationAction.internalValue;
  }

  // lifecycle_config - computed: false, optional: true, required: false
  private _lifecycleConfig = new DataprocClusterClusterConfigLifecycleConfigOutputReference(this, "lifecycle_config");
  public get lifecycleConfig() {
    return this._lifecycleConfig;
  }
  public putLifecycleConfig(value: DataprocClusterClusterConfigLifecycleConfig) {
    this._lifecycleConfig.internalValue = value;
  }
  public resetLifecycleConfig() {
    this._lifecycleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigInput() {
    return this._lifecycleConfig.internalValue;
  }

  // master_config - computed: false, optional: true, required: false
  private _masterConfig = new DataprocClusterClusterConfigMasterConfigOutputReference(this, "master_config");
  public get masterConfig() {
    return this._masterConfig;
  }
  public putMasterConfig(value: DataprocClusterClusterConfigMasterConfig) {
    this._masterConfig.internalValue = value;
  }
  public resetMasterConfig() {
    this._masterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterConfigInput() {
    return this._masterConfig.internalValue;
  }

  // metastore_config - computed: false, optional: true, required: false
  private _metastoreConfig = new DataprocClusterClusterConfigMetastoreConfigOutputReference(this, "metastore_config");
  public get metastoreConfig() {
    return this._metastoreConfig;
  }
  public putMetastoreConfig(value: DataprocClusterClusterConfigMetastoreConfig) {
    this._metastoreConfig.internalValue = value;
  }
  public resetMetastoreConfig() {
    this._metastoreConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreConfigInput() {
    return this._metastoreConfig.internalValue;
  }

  // preemptible_worker_config - computed: false, optional: true, required: false
  private _preemptibleWorkerConfig = new DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference(this, "preemptible_worker_config");
  public get preemptibleWorkerConfig() {
    return this._preemptibleWorkerConfig;
  }
  public putPreemptibleWorkerConfig(value: DataprocClusterClusterConfigPreemptibleWorkerConfig) {
    this._preemptibleWorkerConfig.internalValue = value;
  }
  public resetPreemptibleWorkerConfig() {
    this._preemptibleWorkerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibleWorkerConfigInput() {
    return this._preemptibleWorkerConfig.internalValue;
  }

  // security_config - computed: false, optional: true, required: false
  private _securityConfig = new DataprocClusterClusterConfigSecurityConfigOutputReference(this, "security_config");
  public get securityConfig() {
    return this._securityConfig;
  }
  public putSecurityConfig(value: DataprocClusterClusterConfigSecurityConfig) {
    this._securityConfig.internalValue = value;
  }
  public resetSecurityConfig() {
    this._securityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityConfigInput() {
    return this._securityConfig.internalValue;
  }

  // software_config - computed: false, optional: true, required: false
  private _softwareConfig = new DataprocClusterClusterConfigSoftwareConfigOutputReference(this, "software_config");
  public get softwareConfig() {
    return this._softwareConfig;
  }
  public putSoftwareConfig(value: DataprocClusterClusterConfigSoftwareConfig) {
    this._softwareConfig.internalValue = value;
  }
  public resetSoftwareConfig() {
    this._softwareConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareConfigInput() {
    return this._softwareConfig.internalValue;
  }

  // worker_config - computed: false, optional: true, required: false
  private _workerConfig = new DataprocClusterClusterConfigWorkerConfigOutputReference(this, "worker_config");
  public get workerConfig() {
    return this._workerConfig;
  }
  public putWorkerConfig(value: DataprocClusterClusterConfigWorkerConfig) {
    this._workerConfig.internalValue = value;
  }
  public resetWorkerConfig() {
    this._workerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerConfigInput() {
    return this._workerConfig.internalValue;
  }
}
export interface DataprocClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#create DataprocCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#delete DataprocCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#update DataprocCluster#update}
  */
  readonly update?: string;
}

export function dataprocClusterTimeoutsToTerraform(struct?: DataprocClusterTimeouts | cdktn.IResolvable): any {
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


export function dataprocClusterTimeoutsToHclTerraform(struct?: DataprocClusterTimeouts | cdktn.IResolvable): any {
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

export class DataprocClusterTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataprocClusterTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataprocClusterTimeouts | cdktn.IResolvable | undefined) {
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
export interface DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig {
  /**
  * The Hive Metastore configuration for this workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#dataproc_metastore_service DataprocCluster#dataproc_metastore_service}
  */
  readonly dataprocMetastoreService?: string;
}

export function dataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigToTerraform(struct?: DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference | DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataproc_metastore_service: cdktn.stringToTerraform(struct!.dataprocMetastoreService),
  }
}


export function dataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigToHclTerraform(struct?: DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference | DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataproc_metastore_service: {
      value: cdktn.stringToHclTerraform(struct!.dataprocMetastoreService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataprocMetastoreService !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataprocMetastoreService = this._dataprocMetastoreService;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataprocMetastoreService = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataprocMetastoreService = value.dataprocMetastoreService;
    }
  }

  // dataproc_metastore_service - computed: false, optional: true, required: false
  private _dataprocMetastoreService?: string; 
  public get dataprocMetastoreService() {
    return this.getStringAttribute('dataproc_metastore_service');
  }
  public set dataprocMetastoreService(value: string) {
    this._dataprocMetastoreService = value;
  }
  public resetDataprocMetastoreService() {
    this._dataprocMetastoreService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataprocMetastoreServiceInput() {
    return this._dataprocMetastoreService;
  }
}
export interface DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig {
  /**
  * Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#dataproc_cluster DataprocCluster#dataproc_cluster}
  */
  readonly dataprocCluster?: string;
}

export function dataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigToTerraform(struct?: DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference | DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataproc_cluster: cdktn.stringToTerraform(struct!.dataprocCluster),
  }
}


export function dataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigToHclTerraform(struct?: DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference | DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataproc_cluster: {
      value: cdktn.stringToHclTerraform(struct!.dataprocCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataprocCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataprocCluster = this._dataprocCluster;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataprocCluster = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataprocCluster = value.dataprocCluster;
    }
  }

  // dataproc_cluster - computed: false, optional: true, required: false
  private _dataprocCluster?: string; 
  public get dataprocCluster() {
    return this.getStringAttribute('dataproc_cluster');
  }
  public set dataprocCluster(value: string) {
    this._dataprocCluster = value;
  }
  public resetDataprocCluster() {
    this._dataprocCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataprocClusterInput() {
    return this._dataprocCluster;
  }
}
export interface DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig {
  /**
  * metastore_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#metastore_config DataprocCluster#metastore_config}
  */
  readonly metastoreConfig?: DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig;
  /**
  * spark_history_server_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#spark_history_server_config DataprocCluster#spark_history_server_config}
  */
  readonly sparkHistoryServerConfig?: DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig;
}

export function dataprocClusterVirtualClusterConfigAuxiliaryServicesConfigToTerraform(struct?: DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference | DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metastore_config: dataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigToTerraform(struct!.metastoreConfig),
    spark_history_server_config: dataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigToTerraform(struct!.sparkHistoryServerConfig),
  }
}


export function dataprocClusterVirtualClusterConfigAuxiliaryServicesConfigToHclTerraform(struct?: DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference | DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metastore_config: {
      value: dataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigToHclTerraform(struct!.metastoreConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigList",
    },
    spark_history_server_config: {
      value: dataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigToHclTerraform(struct!.sparkHistoryServerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metastoreConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metastoreConfig = this._metastoreConfig?.internalValue;
    }
    if (this._sparkHistoryServerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkHistoryServerConfig = this._sparkHistoryServerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metastoreConfig.internalValue = undefined;
      this._sparkHistoryServerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metastoreConfig.internalValue = value.metastoreConfig;
      this._sparkHistoryServerConfig.internalValue = value.sparkHistoryServerConfig;
    }
  }

  // metastore_config - computed: false, optional: true, required: false
  private _metastoreConfig = new DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference(this, "metastore_config");
  public get metastoreConfig() {
    return this._metastoreConfig;
  }
  public putMetastoreConfig(value: DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig) {
    this._metastoreConfig.internalValue = value;
  }
  public resetMetastoreConfig() {
    this._metastoreConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreConfigInput() {
    return this._metastoreConfig.internalValue;
  }

  // spark_history_server_config - computed: false, optional: true, required: false
  private _sparkHistoryServerConfig = new DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference(this, "spark_history_server_config");
  public get sparkHistoryServerConfig() {
    return this._sparkHistoryServerConfig;
  }
  public putSparkHistoryServerConfig(value: DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig) {
    this._sparkHistoryServerConfig.internalValue = value;
  }
  public resetSparkHistoryServerConfig() {
    this._sparkHistoryServerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkHistoryServerConfigInput() {
    return this._sparkHistoryServerConfig.internalValue;
  }
}
export interface DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling {
  /**
  * The maximum number of nodes in the node pool. Must be >= minNodeCount, and must be > 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#max_node_count DataprocCluster#max_node_count}
  */
  readonly maxNodeCount?: number;
  /**
  * The minimum number of nodes in the node pool. Must be >= 0 and <= maxNodeCount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#min_node_count DataprocCluster#min_node_count}
  */
  readonly minNodeCount?: number;
}

export function dataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingToTerraform(struct?: DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference | DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_node_count: cdktn.numberToTerraform(struct!.maxNodeCount),
    min_node_count: cdktn.numberToTerraform(struct!.minNodeCount),
  }
}


export function dataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingToHclTerraform(struct?: DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference | DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_node_count: {
      value: cdktn.numberToHclTerraform(struct!.maxNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_node_count: {
      value: cdktn.numberToHclTerraform(struct!.minNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodeCount = this._maxNodeCount;
    }
    if (this._minNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCount = this._minNodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxNodeCount = undefined;
      this._minNodeCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxNodeCount = value.maxNodeCount;
      this._minNodeCount = value.minNodeCount;
    }
  }

  // max_node_count - computed: false, optional: true, required: false
  private _maxNodeCount?: number; 
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }
  public set maxNodeCount(value: number) {
    this._maxNodeCount = value;
  }
  public resetMaxNodeCount() {
    this._maxNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeCountInput() {
    return this._maxNodeCount;
  }

  // min_node_count - computed: false, optional: true, required: false
  private _minNodeCount?: number; 
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }
  public set minNodeCount(value: number) {
    this._minNodeCount = value;
  }
  public resetMinNodeCount() {
    this._minNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCountInput() {
    return this._minNodeCount;
  }
}
export interface DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig {
  /**
  * The minimum number of nodes in the node pool. Must be >= 0 and <= maxNodeCount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#local_ssd_count DataprocCluster#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * The name of a Compute Engine machine type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#machine_type DataprocCluster#machine_type}
  */
  readonly machineType?: string;
  /**
  * Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or a newer CPU platform. Specify the friendly names of CPU platforms, such as "Intel Haswell" or "Intel Sandy Bridge".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#min_cpu_platform DataprocCluster#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Whether the nodes are created as preemptible VM instances. Preemptible nodes cannot be used in a node pool with the CONTROLLER role or in the DEFAULT node pool if the CONTROLLER role is not assigned (the DEFAULT node pool will assume the CONTROLLER role).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#preemptible DataprocCluster#preemptible}
  */
  readonly preemptible?: boolean | cdktn.IResolvable;
  /**
  * Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#spot DataprocCluster#spot}
  */
  readonly spot?: boolean | cdktn.IResolvable;
}

export function dataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigToTerraform(struct?: DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference | DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    local_ssd_count: cdktn.numberToTerraform(struct!.localSsdCount),
    machine_type: cdktn.stringToTerraform(struct!.machineType),
    min_cpu_platform: cdktn.stringToTerraform(struct!.minCpuPlatform),
    preemptible: cdktn.booleanToTerraform(struct!.preemptible),
    spot: cdktn.booleanToTerraform(struct!.spot),
  }
}


export function dataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigToHclTerraform(struct?: DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference | DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    local_ssd_count: {
      value: cdktn.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    preemptible: {
      value: cdktn.booleanToHclTerraform(struct!.preemptible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    spot: {
      value: cdktn.booleanToHclTerraform(struct!.spot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._minCpuPlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._preemptible !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptible = this._preemptible;
    }
    if (this._spot !== undefined) {
      hasAnyValues = true;
      internalValueResult.spot = this._spot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localSsdCount = undefined;
      this._machineType = undefined;
      this._minCpuPlatform = undefined;
      this._preemptible = undefined;
      this._spot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localSsdCount = value.localSsdCount;
      this._machineType = value.machineType;
      this._minCpuPlatform = value.minCpuPlatform;
      this._preemptible = value.preemptible;
      this._spot = value.spot;
    }
  }

  // local_ssd_count - computed: false, optional: true, required: false
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  public resetLocalSsdCount() {
    this._localSsdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
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

  // spot - computed: false, optional: true, required: false
  private _spot?: boolean | cdktn.IResolvable; 
  public get spot() {
    return this.getBooleanAttribute('spot');
  }
  public set spot(value: boolean | cdktn.IResolvable) {
    this._spot = value;
  }
  public resetSpot() {
    this._spot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInput() {
    return this._spot;
  }
}
export interface DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig {
  /**
  * The list of Compute Engine zones where node pool nodes associated with a Dataproc on GKE virtual cluster will be located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#locations DataprocCluster#locations}
  */
  readonly locations: string[];
  /**
  * autoscaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#autoscaling DataprocCluster#autoscaling}
  */
  readonly autoscaling?: DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#config DataprocCluster#config}
  */
  readonly config?: DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig;
}

export function dataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigToTerraform(struct?: DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference | DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    locations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.locations),
    autoscaling: dataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingToTerraform(struct!.autoscaling),
    config: dataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigToTerraform(struct!.config),
  }
}


export function dataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigToHclTerraform(struct?: DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference | DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    locations: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.locations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    autoscaling: {
      value: dataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingToHclTerraform(struct!.autoscaling),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingList",
    },
    config: {
      value: dataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locations !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations;
    }
    if (this._autoscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaling = this._autoscaling?.internalValue;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._locations = undefined;
      this._autoscaling.internalValue = undefined;
      this._config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._locations = value.locations;
      this._autoscaling.internalValue = value.autoscaling;
      this._config.internalValue = value.config;
    }
  }

  // locations - computed: false, optional: false, required: true
  private _locations?: string[]; 
  public get locations() {
    return cdktn.Fn.tolist(this.getListAttribute('locations'));
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
  }

  // autoscaling - computed: false, optional: true, required: false
  private _autoscaling = new DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling) {
    this._autoscaling.internalValue = value;
  }
  public resetAutoscaling() {
    this._autoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingInput() {
    return this._autoscaling.internalValue;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}
export interface DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget {
  /**
  * The target GKE node pool. Format: 'projects/{project}/locations/{location}/clusters/{cluster}/nodePools/{nodePool}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#node_pool DataprocCluster#node_pool}
  */
  readonly nodePool: string;
  /**
  * The roles associated with the GKE node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#roles DataprocCluster#roles}
  */
  readonly roles: string[];
  /**
  * node_pool_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#node_pool_config DataprocCluster#node_pool_config}
  */
  readonly nodePoolConfig?: DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig;
}

export function dataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetToTerraform(struct?: DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    node_pool: cdktn.stringToTerraform(struct!.nodePool),
    roles: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.roles),
    node_pool_config: dataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigToTerraform(struct!.nodePoolConfig),
  }
}


export function dataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetToHclTerraform(struct?: DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    node_pool: {
      value: cdktn.stringToHclTerraform(struct!.nodePool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    node_pool_config: {
      value: dataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigToHclTerraform(struct!.nodePoolConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePool = this._nodePool;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._nodePoolConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePoolConfig = this._nodePoolConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodePool = undefined;
      this._roles = undefined;
      this._nodePoolConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodePool = value.nodePool;
      this._roles = value.roles;
      this._nodePoolConfig.internalValue = value.nodePoolConfig;
    }
  }

  // node_pool - computed: false, optional: false, required: true
  private _nodePool?: string; 
  public get nodePool() {
    return this.getStringAttribute('node_pool');
  }
  public set nodePool(value: string) {
    this._nodePool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolInput() {
    return this._nodePool;
  }

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return cdktn.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // node_pool_config - computed: false, optional: true, required: false
  private _nodePoolConfig = new DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference(this, "node_pool_config");
  public get nodePoolConfig() {
    return this._nodePoolConfig;
  }
  public putNodePoolConfig(value: DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig) {
    this._nodePoolConfig.internalValue = value;
  }
  public resetNodePoolConfig() {
    this._nodePoolConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolConfigInput() {
    return this._nodePoolConfig.internalValue;
  }
}

export class DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList extends cdktn.ComplexList {
  public internalValue? : DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget[] | cdktn.IResolvable

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
  public get(index: number): DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference {
    return new DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig {
  /**
  * A target GKE cluster to deploy to. It must be in the same project and region as the Dataproc cluster (the GKE cluster can be zonal or regional). Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#gke_cluster_target DataprocCluster#gke_cluster_target}
  */
  readonly gkeClusterTarget?: string;
  /**
  * node_pool_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#node_pool_target DataprocCluster#node_pool_target}
  */
  readonly nodePoolTarget?: DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget[] | cdktn.IResolvable;
}

export function dataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigToTerraform(struct?: DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference | DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gke_cluster_target: cdktn.stringToTerraform(struct!.gkeClusterTarget),
    node_pool_target: cdktn.listMapper(dataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetToTerraform, true)(struct!.nodePoolTarget),
  }
}


export function dataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigToHclTerraform(struct?: DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference | DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    gke_cluster_target: {
      value: cdktn.stringToHclTerraform(struct!.gkeClusterTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_pool_target: {
      value: cdktn.listMapperHcl(dataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetToHclTerraform, true)(struct!.nodePoolTarget),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gkeClusterTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.gkeClusterTarget = this._gkeClusterTarget;
    }
    if (this._nodePoolTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePoolTarget = this._nodePoolTarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gkeClusterTarget = undefined;
      this._nodePoolTarget.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gkeClusterTarget = value.gkeClusterTarget;
      this._nodePoolTarget.internalValue = value.nodePoolTarget;
    }
  }

  // gke_cluster_target - computed: false, optional: true, required: false
  private _gkeClusterTarget?: string; 
  public get gkeClusterTarget() {
    return this.getStringAttribute('gke_cluster_target');
  }
  public set gkeClusterTarget(value: string) {
    this._gkeClusterTarget = value;
  }
  public resetGkeClusterTarget() {
    this._gkeClusterTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeClusterTargetInput() {
    return this._gkeClusterTarget;
  }

  // node_pool_target - computed: false, optional: true, required: false
  private _nodePoolTarget = new DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList(this, "node_pool_target", false);
  public get nodePoolTarget() {
    return this._nodePoolTarget;
  }
  public putNodePoolTarget(value: DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget[] | cdktn.IResolvable) {
    this._nodePoolTarget.internalValue = value;
  }
  public resetNodePoolTarget() {
    this._nodePoolTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolTargetInput() {
    return this._nodePoolTarget.internalValue;
  }
}
export interface DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig {
  /**
  * The components that should be installed in this Dataproc cluster. The key must be a string from the KubernetesComponent enumeration. The value is the version of the software to be installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#component_version DataprocCluster#component_version}
  */
  readonly componentVersion: { [key: string]: string };
  /**
  * The properties to set on daemon config files. Property keys are specified in prefix:property format, for example spark:spark.kubernetes.container.image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#properties DataprocCluster#properties}
  */
  readonly properties?: { [key: string]: string };
}

export function dataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigToTerraform(struct?: DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference | DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    component_version: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.componentVersion),
    properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.properties),
  }
}


export function dataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigToHclTerraform(struct?: DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference | DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    component_version: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.componentVersion),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._componentVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentVersion = this._componentVersion;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._componentVersion = undefined;
      this._properties = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._componentVersion = value.componentVersion;
      this._properties = value.properties;
    }
  }

  // component_version - computed: false, optional: false, required: true
  private _componentVersion?: { [key: string]: string }; 
  public get componentVersion() {
    return this.getStringMapAttribute('component_version');
  }
  public set componentVersion(value: { [key: string]: string }) {
    this._componentVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentVersionInput() {
    return this._componentVersion;
  }

  // properties - computed: true, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }
}
export interface DataprocClusterVirtualClusterConfigKubernetesClusterConfig {
  /**
  * A namespace within the Kubernetes cluster to deploy into. If this namespace does not exist, it is created. If it exists, Dataproc verifies that another Dataproc VirtualCluster is not installed into it. If not specified, the name of the Dataproc Cluster is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#kubernetes_namespace DataprocCluster#kubernetes_namespace}
  */
  readonly kubernetesNamespace?: string;
  /**
  * gke_cluster_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#gke_cluster_config DataprocCluster#gke_cluster_config}
  */
  readonly gkeClusterConfig: DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig;
  /**
  * kubernetes_software_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#kubernetes_software_config DataprocCluster#kubernetes_software_config}
  */
  readonly kubernetesSoftwareConfig: DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig;
}

export function dataprocClusterVirtualClusterConfigKubernetesClusterConfigToTerraform(struct?: DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference | DataprocClusterVirtualClusterConfigKubernetesClusterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kubernetes_namespace: cdktn.stringToTerraform(struct!.kubernetesNamespace),
    gke_cluster_config: dataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigToTerraform(struct!.gkeClusterConfig),
    kubernetes_software_config: dataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigToTerraform(struct!.kubernetesSoftwareConfig),
  }
}


export function dataprocClusterVirtualClusterConfigKubernetesClusterConfigToHclTerraform(struct?: DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference | DataprocClusterVirtualClusterConfigKubernetesClusterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kubernetes_namespace: {
      value: cdktn.stringToHclTerraform(struct!.kubernetesNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gke_cluster_config: {
      value: dataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigToHclTerraform(struct!.gkeClusterConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigList",
    },
    kubernetes_software_config: {
      value: dataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigToHclTerraform(struct!.kubernetesSoftwareConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterVirtualClusterConfigKubernetesClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubernetesNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesNamespace = this._kubernetesNamespace;
    }
    if (this._gkeClusterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gkeClusterConfig = this._gkeClusterConfig?.internalValue;
    }
    if (this._kubernetesSoftwareConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesSoftwareConfig = this._kubernetesSoftwareConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterVirtualClusterConfigKubernetesClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kubernetesNamespace = undefined;
      this._gkeClusterConfig.internalValue = undefined;
      this._kubernetesSoftwareConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kubernetesNamespace = value.kubernetesNamespace;
      this._gkeClusterConfig.internalValue = value.gkeClusterConfig;
      this._kubernetesSoftwareConfig.internalValue = value.kubernetesSoftwareConfig;
    }
  }

  // kubernetes_namespace - computed: false, optional: true, required: false
  private _kubernetesNamespace?: string; 
  public get kubernetesNamespace() {
    return this.getStringAttribute('kubernetes_namespace');
  }
  public set kubernetesNamespace(value: string) {
    this._kubernetesNamespace = value;
  }
  public resetKubernetesNamespace() {
    this._kubernetesNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesNamespaceInput() {
    return this._kubernetesNamespace;
  }

  // gke_cluster_config - computed: false, optional: false, required: true
  private _gkeClusterConfig = new DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference(this, "gke_cluster_config");
  public get gkeClusterConfig() {
    return this._gkeClusterConfig;
  }
  public putGkeClusterConfig(value: DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig) {
    this._gkeClusterConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeClusterConfigInput() {
    return this._gkeClusterConfig.internalValue;
  }

  // kubernetes_software_config - computed: false, optional: false, required: true
  private _kubernetesSoftwareConfig = new DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference(this, "kubernetes_software_config");
  public get kubernetesSoftwareConfig() {
    return this._kubernetesSoftwareConfig;
  }
  public putKubernetesSoftwareConfig(value: DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig) {
    this._kubernetesSoftwareConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesSoftwareConfigInput() {
    return this._kubernetesSoftwareConfig.internalValue;
  }
}
export interface DataprocClusterVirtualClusterConfig {
  /**
  * A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#staging_bucket DataprocCluster#staging_bucket}
  */
  readonly stagingBucket?: string;
  /**
  * auxiliary_services_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#auxiliary_services_config DataprocCluster#auxiliary_services_config}
  */
  readonly auxiliaryServicesConfig?: DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig;
  /**
  * kubernetes_cluster_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#kubernetes_cluster_config DataprocCluster#kubernetes_cluster_config}
  */
  readonly kubernetesClusterConfig?: DataprocClusterVirtualClusterConfigKubernetesClusterConfig;
}

export function dataprocClusterVirtualClusterConfigToTerraform(struct?: DataprocClusterVirtualClusterConfigOutputReference | DataprocClusterVirtualClusterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    staging_bucket: cdktn.stringToTerraform(struct!.stagingBucket),
    auxiliary_services_config: dataprocClusterVirtualClusterConfigAuxiliaryServicesConfigToTerraform(struct!.auxiliaryServicesConfig),
    kubernetes_cluster_config: dataprocClusterVirtualClusterConfigKubernetesClusterConfigToTerraform(struct!.kubernetesClusterConfig),
  }
}


export function dataprocClusterVirtualClusterConfigToHclTerraform(struct?: DataprocClusterVirtualClusterConfigOutputReference | DataprocClusterVirtualClusterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    staging_bucket: {
      value: cdktn.stringToHclTerraform(struct!.stagingBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auxiliary_services_config: {
      value: dataprocClusterVirtualClusterConfigAuxiliaryServicesConfigToHclTerraform(struct!.auxiliaryServicesConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigList",
    },
    kubernetes_cluster_config: {
      value: dataprocClusterVirtualClusterConfigKubernetesClusterConfigToHclTerraform(struct!.kubernetesClusterConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocClusterVirtualClusterConfigKubernetesClusterConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocClusterVirtualClusterConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocClusterVirtualClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stagingBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.stagingBucket = this._stagingBucket;
    }
    if (this._auxiliaryServicesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auxiliaryServicesConfig = this._auxiliaryServicesConfig?.internalValue;
    }
    if (this._kubernetesClusterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesClusterConfig = this._kubernetesClusterConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterVirtualClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stagingBucket = undefined;
      this._auxiliaryServicesConfig.internalValue = undefined;
      this._kubernetesClusterConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stagingBucket = value.stagingBucket;
      this._auxiliaryServicesConfig.internalValue = value.auxiliaryServicesConfig;
      this._kubernetesClusterConfig.internalValue = value.kubernetesClusterConfig;
    }
  }

  // staging_bucket - computed: false, optional: true, required: false
  private _stagingBucket?: string; 
  public get stagingBucket() {
    return this.getStringAttribute('staging_bucket');
  }
  public set stagingBucket(value: string) {
    this._stagingBucket = value;
  }
  public resetStagingBucket() {
    this._stagingBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingBucketInput() {
    return this._stagingBucket;
  }

  // auxiliary_services_config - computed: false, optional: true, required: false
  private _auxiliaryServicesConfig = new DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference(this, "auxiliary_services_config");
  public get auxiliaryServicesConfig() {
    return this._auxiliaryServicesConfig;
  }
  public putAuxiliaryServicesConfig(value: DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig) {
    this._auxiliaryServicesConfig.internalValue = value;
  }
  public resetAuxiliaryServicesConfig() {
    this._auxiliaryServicesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auxiliaryServicesConfigInput() {
    return this._auxiliaryServicesConfig.internalValue;
  }

  // kubernetes_cluster_config - computed: false, optional: true, required: false
  private _kubernetesClusterConfig = new DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference(this, "kubernetes_cluster_config");
  public get kubernetesClusterConfig() {
    return this._kubernetesClusterConfig;
  }
  public putKubernetesClusterConfig(value: DataprocClusterVirtualClusterConfigKubernetesClusterConfig) {
    this._kubernetesClusterConfig.internalValue = value;
  }
  public resetKubernetesClusterConfig() {
    this._kubernetesClusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesClusterConfigInput() {
    return this._kubernetesClusterConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster google_dataproc_cluster}
*/
export class DataprocCluster extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataproc_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataprocCluster resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataprocCluster to import
  * @param importFromId The id of the existing DataprocCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataprocCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_dataproc_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataproc_cluster google_dataproc_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataprocClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataprocClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataproc_cluster',
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
    this._deletionPolicy = config.deletionPolicy;
    this._gracefulDecommissionTimeout = config.gracefulDecommissionTimeout;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._clusterConfig.internalValue = config.clusterConfig;
    this._timeouts.internalValue = config.timeouts;
    this._virtualClusterConfig.internalValue = config.virtualClusterConfig;
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // graceful_decommission_timeout - computed: false, optional: true, required: false
  private _gracefulDecommissionTimeout?: string; 
  public get gracefulDecommissionTimeout() {
    return this.getStringAttribute('graceful_decommission_timeout');
  }
  public set gracefulDecommissionTimeout(value: string) {
    this._gracefulDecommissionTimeout = value;
  }
  public resetGracefulDecommissionTimeout() {
    this._gracefulDecommissionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulDecommissionTimeoutInput() {
    return this._gracefulDecommissionTimeout;
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // cluster_config - computed: false, optional: true, required: false
  private _clusterConfig = new DataprocClusterClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: DataprocClusterClusterConfig) {
    this._clusterConfig.internalValue = value;
  }
  public resetClusterConfig() {
    this._clusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataprocClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataprocClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // virtual_cluster_config - computed: false, optional: true, required: false
  private _virtualClusterConfig = new DataprocClusterVirtualClusterConfigOutputReference(this, "virtual_cluster_config");
  public get virtualClusterConfig() {
    return this._virtualClusterConfig;
  }
  public putVirtualClusterConfig(value: DataprocClusterVirtualClusterConfig) {
    this._virtualClusterConfig.internalValue = value;
  }
  public resetVirtualClusterConfig() {
    this._virtualClusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualClusterConfigInput() {
    return this._virtualClusterConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      graceful_decommission_timeout: cdktn.stringToTerraform(this._gracefulDecommissionTimeout),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      region: cdktn.stringToTerraform(this._region),
      cluster_config: dataprocClusterClusterConfigToTerraform(this._clusterConfig.internalValue),
      timeouts: dataprocClusterTimeoutsToTerraform(this._timeouts.internalValue),
      virtual_cluster_config: dataprocClusterVirtualClusterConfigToTerraform(this._virtualClusterConfig.internalValue),
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
      graceful_decommission_timeout: {
        value: cdktn.stringToHclTerraform(this._gracefulDecommissionTimeout),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_config: {
        value: dataprocClusterClusterConfigToHclTerraform(this._clusterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataprocClusterClusterConfigList",
      },
      timeouts: {
        value: dataprocClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataprocClusterTimeouts",
      },
      virtual_cluster_config: {
        value: dataprocClusterVirtualClusterConfigToHclTerraform(this._virtualClusterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataprocClusterVirtualClusterConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
