/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ContainerNodePoolConfig extends cdktn.TerraformMetaArguments {
  /**
  * The cluster to create the node pool for. Cluster must be present in location provided for zonal clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#cluster ContainerNodePool#cluster}
  */
  readonly cluster: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#id ContainerNodePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The initial number of nodes for the pool. In regional or multi-zonal clusters, this is the number of nodes per zone. Changing this will force recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#initial_node_count ContainerNodePool#initial_node_count}
  */
  readonly initialNodeCount?: number;
  /**
  * The location (region or zone) of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#location ContainerNodePool#location}
  */
  readonly location?: string;
  /**
  * The maximum number of pods per node in this node pool. Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#max_pods_per_node ContainerNodePool#max_pods_per_node}
  */
  readonly maxPodsPerNode?: number;
  /**
  * The name of the node pool. If left blank, Terraform will auto-generate a unique name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#name ContainerNodePool#name}
  */
  readonly name?: string;
  /**
  * Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#name_prefix ContainerNodePool#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * The number of nodes per instance group. This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#node_count ContainerNodePool#node_count}
  */
  readonly nodeCount?: number;
  /**
  * The list of zones in which the node pool's nodes should be located. Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If unspecified, the cluster-level node_locations will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#node_locations ContainerNodePool#node_locations}
  */
  readonly nodeLocations?: string[];
  /**
  * The ID of the project in which to create the node pool. If blank, the provider-configured project will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#project ContainerNodePool#project}
  */
  readonly project?: string;
  /**
  * The Kubernetes version for the nodes in this pool. Note that if this field and auto_upgrade are both specified, they will fight each other for what the node version should be, so setting both is highly discouraged. While a fuzzy version can be specified, it's recommended that you specify explicit versions as Terraform will see spurious diffs when fuzzy versions are used. See the google_container_engine_versions data source's version_prefix field to approximate fuzzy versions in a Terraform-compatible way.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#version ContainerNodePool#version}
  */
  readonly version?: string;
  /**
  * autoscaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#autoscaling ContainerNodePool#autoscaling}
  */
  readonly autoscaling?: ContainerNodePoolAutoscaling;
  /**
  * management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#management ContainerNodePool#management}
  */
  readonly management?: ContainerNodePoolManagement;
  /**
  * network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#network_config ContainerNodePool#network_config}
  */
  readonly networkConfig?: ContainerNodePoolNetworkConfig;
  /**
  * node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#node_config ContainerNodePool#node_config}
  */
  readonly nodeConfig?: ContainerNodePoolNodeConfig;
  /**
  * node_drain_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#node_drain_config ContainerNodePool#node_drain_config}
  */
  readonly nodeDrainConfig?: ContainerNodePoolNodeDrainConfig[] | cdktn.IResolvable;
  /**
  * placement_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#placement_policy ContainerNodePool#placement_policy}
  */
  readonly placementPolicy?: ContainerNodePoolPlacementPolicy;
  /**
  * queued_provisioning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#queued_provisioning ContainerNodePool#queued_provisioning}
  */
  readonly queuedProvisioning?: ContainerNodePoolQueuedProvisioning;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#timeouts ContainerNodePool#timeouts}
  */
  readonly timeouts?: ContainerNodePoolTimeouts;
  /**
  * upgrade_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#upgrade_settings ContainerNodePool#upgrade_settings}
  */
  readonly upgradeSettings?: ContainerNodePoolUpgradeSettings;
}
export interface ContainerNodePoolAutoscaling {
  /**
  * Location policy specifies the algorithm used when scaling-up the node pool. "BALANCED" - Is a best effort policy that aims to balance the sizes of available zones. "ANY" - Instructs the cluster autoscaler to prioritize utilization of unused reservations, and reduces preemption risk for Spot VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#location_policy ContainerNodePool#location_policy}
  */
  readonly locationPolicy?: string;
  /**
  * Maximum number of nodes per zone in the node pool. Must be >= min_node_count. Cannot be used with total limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#max_node_count ContainerNodePool#max_node_count}
  */
  readonly maxNodeCount?: number;
  /**
  * Minimum number of nodes per zone in the node pool. Must be >=0 and <= max_node_count. Cannot be used with total limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#min_node_count ContainerNodePool#min_node_count}
  */
  readonly minNodeCount?: number;
  /**
  * Maximum number of all nodes in the node pool. Must be >= total_min_node_count. Cannot be used with per zone limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#total_max_node_count ContainerNodePool#total_max_node_count}
  */
  readonly totalMaxNodeCount?: number;
  /**
  * Minimum number of all nodes in the node pool. Must be >=0 and <= total_max_node_count. Cannot be used with per zone limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#total_min_node_count ContainerNodePool#total_min_node_count}
  */
  readonly totalMinNodeCount?: number;
}

export function containerNodePoolAutoscalingToTerraform(struct?: ContainerNodePoolAutoscalingOutputReference | ContainerNodePoolAutoscaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location_policy: cdktn.stringToTerraform(struct!.locationPolicy),
    max_node_count: cdktn.numberToTerraform(struct!.maxNodeCount),
    min_node_count: cdktn.numberToTerraform(struct!.minNodeCount),
    total_max_node_count: cdktn.numberToTerraform(struct!.totalMaxNodeCount),
    total_min_node_count: cdktn.numberToTerraform(struct!.totalMinNodeCount),
  }
}


export function containerNodePoolAutoscalingToHclTerraform(struct?: ContainerNodePoolAutoscalingOutputReference | ContainerNodePoolAutoscaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location_policy: {
      value: cdktn.stringToHclTerraform(struct!.locationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    total_max_node_count: {
      value: cdktn.numberToHclTerraform(struct!.totalMaxNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_min_node_count: {
      value: cdktn.numberToHclTerraform(struct!.totalMinNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolAutoscalingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationPolicy = this._locationPolicy;
    }
    if (this._maxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodeCount = this._maxNodeCount;
    }
    if (this._minNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCount = this._minNodeCount;
    }
    if (this._totalMaxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMaxNodeCount = this._totalMaxNodeCount;
    }
    if (this._totalMinNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMinNodeCount = this._totalMinNodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._locationPolicy = undefined;
      this._maxNodeCount = undefined;
      this._minNodeCount = undefined;
      this._totalMaxNodeCount = undefined;
      this._totalMinNodeCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._locationPolicy = value.locationPolicy;
      this._maxNodeCount = value.maxNodeCount;
      this._minNodeCount = value.minNodeCount;
      this._totalMaxNodeCount = value.totalMaxNodeCount;
      this._totalMinNodeCount = value.totalMinNodeCount;
    }
  }

  // location_policy - computed: true, optional: true, required: false
  private _locationPolicy?: string; 
  public get locationPolicy() {
    return this.getStringAttribute('location_policy');
  }
  public set locationPolicy(value: string) {
    this._locationPolicy = value;
  }
  public resetLocationPolicy() {
    this._locationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationPolicyInput() {
    return this._locationPolicy;
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

  // total_max_node_count - computed: false, optional: true, required: false
  private _totalMaxNodeCount?: number; 
  public get totalMaxNodeCount() {
    return this.getNumberAttribute('total_max_node_count');
  }
  public set totalMaxNodeCount(value: number) {
    this._totalMaxNodeCount = value;
  }
  public resetTotalMaxNodeCount() {
    this._totalMaxNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMaxNodeCountInput() {
    return this._totalMaxNodeCount;
  }

  // total_min_node_count - computed: false, optional: true, required: false
  private _totalMinNodeCount?: number; 
  public get totalMinNodeCount() {
    return this.getNumberAttribute('total_min_node_count');
  }
  public set totalMinNodeCount(value: number) {
    this._totalMinNodeCount = value;
  }
  public resetTotalMinNodeCount() {
    this._totalMinNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMinNodeCountInput() {
    return this._totalMinNodeCount;
  }
}
export interface ContainerNodePoolManagement {
  /**
  * Whether the nodes will be automatically repaired. Enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#auto_repair ContainerNodePool#auto_repair}
  */
  readonly autoRepair?: boolean | cdktn.IResolvable;
  /**
  * Whether the nodes will be automatically upgraded. Enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#auto_upgrade ContainerNodePool#auto_upgrade}
  */
  readonly autoUpgrade?: boolean | cdktn.IResolvable;
}

export function containerNodePoolManagementToTerraform(struct?: ContainerNodePoolManagementOutputReference | ContainerNodePoolManagement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_repair: cdktn.booleanToTerraform(struct!.autoRepair),
    auto_upgrade: cdktn.booleanToTerraform(struct!.autoUpgrade),
  }
}


export function containerNodePoolManagementToHclTerraform(struct?: ContainerNodePoolManagementOutputReference | ContainerNodePoolManagement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_repair: {
      value: cdktn.booleanToHclTerraform(struct!.autoRepair),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_upgrade: {
      value: cdktn.booleanToHclTerraform(struct!.autoUpgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolManagementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRepair !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRepair = this._autoRepair;
    }
    if (this._autoUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgrade = this._autoUpgrade;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoRepair = undefined;
      this._autoUpgrade = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoRepair = value.autoRepair;
      this._autoUpgrade = value.autoUpgrade;
    }
  }

  // auto_repair - computed: false, optional: true, required: false
  private _autoRepair?: boolean | cdktn.IResolvable; 
  public get autoRepair() {
    return this.getBooleanAttribute('auto_repair');
  }
  public set autoRepair(value: boolean | cdktn.IResolvable) {
    this._autoRepair = value;
  }
  public resetAutoRepair() {
    this._autoRepair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRepairInput() {
    return this._autoRepair;
  }

  // auto_upgrade - computed: false, optional: true, required: false
  private _autoUpgrade?: boolean | cdktn.IResolvable; 
  public get autoUpgrade() {
    return this.getBooleanAttribute('auto_upgrade');
  }
  public set autoUpgrade(value: boolean | cdktn.IResolvable) {
    this._autoUpgrade = value;
  }
  public resetAutoUpgrade() {
    this._autoUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeInput() {
    return this._autoUpgrade;
  }
}
export interface ContainerNodePoolNetworkConfigAdditionalNodeNetworkConfigs {
  /**
  * Name of the VPC where the additional interface belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#network ContainerNodePool#network}
  */
  readonly network?: string;
  /**
  * Name of the subnetwork where the additional interface belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#subnetwork ContainerNodePool#subnetwork}
  */
  readonly subnetwork?: string;
}

export function containerNodePoolNetworkConfigAdditionalNodeNetworkConfigsToTerraform(struct?: ContainerNodePoolNetworkConfigAdditionalNodeNetworkConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktn.stringToTerraform(struct!.network),
    subnetwork: cdktn.stringToTerraform(struct!.subnetwork),
  }
}


export function containerNodePoolNetworkConfigAdditionalNodeNetworkConfigsToHclTerraform(struct?: ContainerNodePoolNetworkConfigAdditionalNodeNetworkConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktn.stringToHclTerraform(struct!.network),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNetworkConfigAdditionalNodeNetworkConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerNodePoolNetworkConfigAdditionalNodeNetworkConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNetworkConfigAdditionalNodeNetworkConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
      this._subnetwork = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
      this._subnetwork = value.subnetwork;
    }
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

  // subnetwork - computed: true, optional: true, required: false
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
}

export class ContainerNodePoolNetworkConfigAdditionalNodeNetworkConfigsList extends cdktn.ComplexList {
  public internalValue? : ContainerNodePoolNetworkConfigAdditionalNodeNetworkConfigs[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerNodePoolNetworkConfigAdditionalNodeNetworkConfigsOutputReference {
    return new ContainerNodePoolNetworkConfigAdditionalNodeNetworkConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerNodePoolNetworkConfigAdditionalPodNetworkConfigs {
  /**
  * The maximum number of pods per node which use this pod network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#max_pods_per_node ContainerNodePool#max_pods_per_node}
  */
  readonly maxPodsPerNode?: number;
  /**
  * The name of the secondary range on the subnet which provides IP address for this pod range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#secondary_pod_range ContainerNodePool#secondary_pod_range}
  */
  readonly secondaryPodRange?: string;
  /**
  * Name of the subnetwork where the additional pod network belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#subnetwork ContainerNodePool#subnetwork}
  */
  readonly subnetwork?: string;
}

export function containerNodePoolNetworkConfigAdditionalPodNetworkConfigsToTerraform(struct?: ContainerNodePoolNetworkConfigAdditionalPodNetworkConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_pods_per_node: cdktn.numberToTerraform(struct!.maxPodsPerNode),
    secondary_pod_range: cdktn.stringToTerraform(struct!.secondaryPodRange),
    subnetwork: cdktn.stringToTerraform(struct!.subnetwork),
  }
}


export function containerNodePoolNetworkConfigAdditionalPodNetworkConfigsToHclTerraform(struct?: ContainerNodePoolNetworkConfigAdditionalPodNetworkConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_pods_per_node: {
      value: cdktn.numberToHclTerraform(struct!.maxPodsPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_pod_range: {
      value: cdktn.stringToHclTerraform(struct!.secondaryPodRange),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNetworkConfigAdditionalPodNetworkConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerNodePoolNetworkConfigAdditionalPodNetworkConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPodsPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPodsPerNode = this._maxPodsPerNode;
    }
    if (this._secondaryPodRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryPodRange = this._secondaryPodRange;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNetworkConfigAdditionalPodNetworkConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxPodsPerNode = undefined;
      this._secondaryPodRange = undefined;
      this._subnetwork = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxPodsPerNode = value.maxPodsPerNode;
      this._secondaryPodRange = value.secondaryPodRange;
      this._subnetwork = value.subnetwork;
    }
  }

  // max_pods_per_node - computed: true, optional: true, required: false
  private _maxPodsPerNode?: number; 
  public get maxPodsPerNode() {
    return this.getNumberAttribute('max_pods_per_node');
  }
  public set maxPodsPerNode(value: number) {
    this._maxPodsPerNode = value;
  }
  public resetMaxPodsPerNode() {
    this._maxPodsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsPerNodeInput() {
    return this._maxPodsPerNode;
  }

  // secondary_pod_range - computed: false, optional: true, required: false
  private _secondaryPodRange?: string; 
  public get secondaryPodRange() {
    return this.getStringAttribute('secondary_pod_range');
  }
  public set secondaryPodRange(value: string) {
    this._secondaryPodRange = value;
  }
  public resetSecondaryPodRange() {
    this._secondaryPodRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPodRangeInput() {
    return this._secondaryPodRange;
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
}

export class ContainerNodePoolNetworkConfigAdditionalPodNetworkConfigsList extends cdktn.ComplexList {
  public internalValue? : ContainerNodePoolNetworkConfigAdditionalPodNetworkConfigs[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerNodePoolNetworkConfigAdditionalPodNetworkConfigsOutputReference {
    return new ContainerNodePoolNetworkConfigAdditionalPodNetworkConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerNodePoolNetworkConfigNetworkPerformanceConfig {
  /**
  * Specifies the total network bandwidth tier for the NodePool. [Valid values](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.Tier) include: "TIER_1" and "TIER_UNSPECIFIED".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#total_egress_bandwidth_tier ContainerNodePool#total_egress_bandwidth_tier}
  */
  readonly totalEgressBandwidthTier: string;
}

export function containerNodePoolNetworkConfigNetworkPerformanceConfigToTerraform(struct?: ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference | ContainerNodePoolNetworkConfigNetworkPerformanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    total_egress_bandwidth_tier: cdktn.stringToTerraform(struct!.totalEgressBandwidthTier),
  }
}


export function containerNodePoolNetworkConfigNetworkPerformanceConfigToHclTerraform(struct?: ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference | ContainerNodePoolNetworkConfigNetworkPerformanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNetworkConfigNetworkPerformanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totalEgressBandwidthTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEgressBandwidthTier = this._totalEgressBandwidthTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNetworkConfigNetworkPerformanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._totalEgressBandwidthTier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._totalEgressBandwidthTier = value.totalEgressBandwidthTier;
    }
  }

  // total_egress_bandwidth_tier - computed: false, optional: false, required: true
  private _totalEgressBandwidthTier?: string; 
  public get totalEgressBandwidthTier() {
    return this.getStringAttribute('total_egress_bandwidth_tier');
  }
  public set totalEgressBandwidthTier(value: string) {
    this._totalEgressBandwidthTier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEgressBandwidthTierInput() {
    return this._totalEgressBandwidthTier;
  }
}
export interface ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#disabled ContainerNodePool#disabled}
  */
  readonly disabled: boolean | cdktn.IResolvable;
}

export function containerNodePoolNetworkConfigPodCidrOverprovisionConfigToTerraform(struct?: ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference | ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktn.booleanToTerraform(struct!.disabled),
  }
}


export function containerNodePoolNetworkConfigPodCidrOverprovisionConfigToHclTerraform(struct?: ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference | ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktn.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktn.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface ContainerNodePoolNetworkConfig {
  /**
  * The accelerator network profile to use for this node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#accelerator_network_profile ContainerNodePool#accelerator_network_profile}
  */
  readonly acceleratorNetworkProfile?: string;
  /**
  * Whether to create a new range for pod IPs in this node pool. Defaults are provided for pod_range and pod_ipv4_cidr_block if they are not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#create_pod_range ContainerNodePool#create_pod_range}
  */
  readonly createPodRange?: boolean | cdktn.IResolvable;
  /**
  * Whether nodes have internal IP addresses only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#enable_private_nodes ContainerNodePool#enable_private_nodes}
  */
  readonly enablePrivateNodes?: boolean | cdktn.IResolvable;
  /**
  * The IP address range for pod IPs in this node pool. Only applicable if create_pod_range is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) to pick a specific range to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#pod_ipv4_cidr_block ContainerNodePool#pod_ipv4_cidr_block}
  */
  readonly podIpv4CidrBlock?: string;
  /**
  * The ID of the secondary range for pod IPs. If create_pod_range is true, this ID is used for the new range. If create_pod_range is false, uses an existing secondary range with this ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#pod_range ContainerNodePool#pod_range}
  */
  readonly podRange?: string;
  /**
  * The subnetwork name/path for the node pool. Format: subnetwork or projects/{project}/regions/{region}/subnetworks/{subnetwork}. This value may be specified via the nested network_config block (setting this attribute directly is supported for backward compatibility). Once created the node pool's subnetwork is immutable. If not set, the provider/API will choose the subnetwork (e.g. based on IP utilization) and report it here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#subnetwork ContainerNodePool#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * additional_node_network_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#additional_node_network_configs ContainerNodePool#additional_node_network_configs}
  */
  readonly additionalNodeNetworkConfigs?: ContainerNodePoolNetworkConfigAdditionalNodeNetworkConfigs[] | cdktn.IResolvable;
  /**
  * additional_pod_network_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#additional_pod_network_configs ContainerNodePool#additional_pod_network_configs}
  */
  readonly additionalPodNetworkConfigs?: ContainerNodePoolNetworkConfigAdditionalPodNetworkConfigs[] | cdktn.IResolvable;
  /**
  * network_performance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#network_performance_config ContainerNodePool#network_performance_config}
  */
  readonly networkPerformanceConfig?: ContainerNodePoolNetworkConfigNetworkPerformanceConfig;
  /**
  * pod_cidr_overprovision_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#pod_cidr_overprovision_config ContainerNodePool#pod_cidr_overprovision_config}
  */
  readonly podCidrOverprovisionConfig?: ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig;
}

export function containerNodePoolNetworkConfigToTerraform(struct?: ContainerNodePoolNetworkConfigOutputReference | ContainerNodePoolNetworkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerator_network_profile: cdktn.stringToTerraform(struct!.acceleratorNetworkProfile),
    create_pod_range: cdktn.booleanToTerraform(struct!.createPodRange),
    enable_private_nodes: cdktn.booleanToTerraform(struct!.enablePrivateNodes),
    pod_ipv4_cidr_block: cdktn.stringToTerraform(struct!.podIpv4CidrBlock),
    pod_range: cdktn.stringToTerraform(struct!.podRange),
    subnetwork: cdktn.stringToTerraform(struct!.subnetwork),
    additional_node_network_configs: cdktn.listMapper(containerNodePoolNetworkConfigAdditionalNodeNetworkConfigsToTerraform, true)(struct!.additionalNodeNetworkConfigs),
    additional_pod_network_configs: cdktn.listMapper(containerNodePoolNetworkConfigAdditionalPodNetworkConfigsToTerraform, true)(struct!.additionalPodNetworkConfigs),
    network_performance_config: containerNodePoolNetworkConfigNetworkPerformanceConfigToTerraform(struct!.networkPerformanceConfig),
    pod_cidr_overprovision_config: containerNodePoolNetworkConfigPodCidrOverprovisionConfigToTerraform(struct!.podCidrOverprovisionConfig),
  }
}


export function containerNodePoolNetworkConfigToHclTerraform(struct?: ContainerNodePoolNetworkConfigOutputReference | ContainerNodePoolNetworkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accelerator_network_profile: {
      value: cdktn.stringToHclTerraform(struct!.acceleratorNetworkProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_pod_range: {
      value: cdktn.booleanToHclTerraform(struct!.createPodRange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_private_nodes: {
      value: cdktn.booleanToHclTerraform(struct!.enablePrivateNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod_ipv4_cidr_block: {
      value: cdktn.stringToHclTerraform(struct!.podIpv4CidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_range: {
      value: cdktn.stringToHclTerraform(struct!.podRange),
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
    additional_node_network_configs: {
      value: cdktn.listMapperHcl(containerNodePoolNetworkConfigAdditionalNodeNetworkConfigsToHclTerraform, true)(struct!.additionalNodeNetworkConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNetworkConfigAdditionalNodeNetworkConfigsList",
    },
    additional_pod_network_configs: {
      value: cdktn.listMapperHcl(containerNodePoolNetworkConfigAdditionalPodNetworkConfigsToHclTerraform, true)(struct!.additionalPodNetworkConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNetworkConfigAdditionalPodNetworkConfigsList",
    },
    network_performance_config: {
      value: containerNodePoolNetworkConfigNetworkPerformanceConfigToHclTerraform(struct!.networkPerformanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNetworkConfigNetworkPerformanceConfigList",
    },
    pod_cidr_overprovision_config: {
      value: containerNodePoolNetworkConfigPodCidrOverprovisionConfigToHclTerraform(struct!.podCidrOverprovisionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNetworkConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratorNetworkProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorNetworkProfile = this._acceleratorNetworkProfile;
    }
    if (this._createPodRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.createPodRange = this._createPodRange;
    }
    if (this._enablePrivateNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivateNodes = this._enablePrivateNodes;
    }
    if (this._podIpv4CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.podIpv4CidrBlock = this._podIpv4CidrBlock;
    }
    if (this._podRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.podRange = this._podRange;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    if (this._additionalNodeNetworkConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalNodeNetworkConfigs = this._additionalNodeNetworkConfigs?.internalValue;
    }
    if (this._additionalPodNetworkConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalPodNetworkConfigs = this._additionalPodNetworkConfigs?.internalValue;
    }
    if (this._networkPerformanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPerformanceConfig = this._networkPerformanceConfig?.internalValue;
    }
    if (this._podCidrOverprovisionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podCidrOverprovisionConfig = this._podCidrOverprovisionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceleratorNetworkProfile = undefined;
      this._createPodRange = undefined;
      this._enablePrivateNodes = undefined;
      this._podIpv4CidrBlock = undefined;
      this._podRange = undefined;
      this._subnetwork = undefined;
      this._additionalNodeNetworkConfigs.internalValue = undefined;
      this._additionalPodNetworkConfigs.internalValue = undefined;
      this._networkPerformanceConfig.internalValue = undefined;
      this._podCidrOverprovisionConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceleratorNetworkProfile = value.acceleratorNetworkProfile;
      this._createPodRange = value.createPodRange;
      this._enablePrivateNodes = value.enablePrivateNodes;
      this._podIpv4CidrBlock = value.podIpv4CidrBlock;
      this._podRange = value.podRange;
      this._subnetwork = value.subnetwork;
      this._additionalNodeNetworkConfigs.internalValue = value.additionalNodeNetworkConfigs;
      this._additionalPodNetworkConfigs.internalValue = value.additionalPodNetworkConfigs;
      this._networkPerformanceConfig.internalValue = value.networkPerformanceConfig;
      this._podCidrOverprovisionConfig.internalValue = value.podCidrOverprovisionConfig;
    }
  }

  // accelerator_network_profile - computed: false, optional: true, required: false
  private _acceleratorNetworkProfile?: string; 
  public get acceleratorNetworkProfile() {
    return this.getStringAttribute('accelerator_network_profile');
  }
  public set acceleratorNetworkProfile(value: string) {
    this._acceleratorNetworkProfile = value;
  }
  public resetAcceleratorNetworkProfile() {
    this._acceleratorNetworkProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorNetworkProfileInput() {
    return this._acceleratorNetworkProfile;
  }

  // create_pod_range - computed: false, optional: true, required: false
  private _createPodRange?: boolean | cdktn.IResolvable; 
  public get createPodRange() {
    return this.getBooleanAttribute('create_pod_range');
  }
  public set createPodRange(value: boolean | cdktn.IResolvable) {
    this._createPodRange = value;
  }
  public resetCreatePodRange() {
    this._createPodRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPodRangeInput() {
    return this._createPodRange;
  }

  // enable_private_nodes - computed: true, optional: true, required: false
  private _enablePrivateNodes?: boolean | cdktn.IResolvable; 
  public get enablePrivateNodes() {
    return this.getBooleanAttribute('enable_private_nodes');
  }
  public set enablePrivateNodes(value: boolean | cdktn.IResolvable) {
    this._enablePrivateNodes = value;
  }
  public resetEnablePrivateNodes() {
    this._enablePrivateNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateNodesInput() {
    return this._enablePrivateNodes;
  }

  // pod_ipv4_cidr_block - computed: true, optional: true, required: false
  private _podIpv4CidrBlock?: string; 
  public get podIpv4CidrBlock() {
    return this.getStringAttribute('pod_ipv4_cidr_block');
  }
  public set podIpv4CidrBlock(value: string) {
    this._podIpv4CidrBlock = value;
  }
  public resetPodIpv4CidrBlock() {
    this._podIpv4CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podIpv4CidrBlockInput() {
    return this._podIpv4CidrBlock;
  }

  // pod_range - computed: true, optional: true, required: false
  private _podRange?: string; 
  public get podRange() {
    return this.getStringAttribute('pod_range');
  }
  public set podRange(value: string) {
    this._podRange = value;
  }
  public resetPodRange() {
    this._podRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podRangeInput() {
    return this._podRange;
  }

  // subnetwork - computed: true, optional: true, required: false
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

  // additional_node_network_configs - computed: false, optional: true, required: false
  private _additionalNodeNetworkConfigs = new ContainerNodePoolNetworkConfigAdditionalNodeNetworkConfigsList(this, "additional_node_network_configs", false);
  public get additionalNodeNetworkConfigs() {
    return this._additionalNodeNetworkConfigs;
  }
  public putAdditionalNodeNetworkConfigs(value: ContainerNodePoolNetworkConfigAdditionalNodeNetworkConfigs[] | cdktn.IResolvable) {
    this._additionalNodeNetworkConfigs.internalValue = value;
  }
  public resetAdditionalNodeNetworkConfigs() {
    this._additionalNodeNetworkConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalNodeNetworkConfigsInput() {
    return this._additionalNodeNetworkConfigs.internalValue;
  }

  // additional_pod_network_configs - computed: false, optional: true, required: false
  private _additionalPodNetworkConfigs = new ContainerNodePoolNetworkConfigAdditionalPodNetworkConfigsList(this, "additional_pod_network_configs", false);
  public get additionalPodNetworkConfigs() {
    return this._additionalPodNetworkConfigs;
  }
  public putAdditionalPodNetworkConfigs(value: ContainerNodePoolNetworkConfigAdditionalPodNetworkConfigs[] | cdktn.IResolvable) {
    this._additionalPodNetworkConfigs.internalValue = value;
  }
  public resetAdditionalPodNetworkConfigs() {
    this._additionalPodNetworkConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPodNetworkConfigsInput() {
    return this._additionalPodNetworkConfigs.internalValue;
  }

  // network_performance_config - computed: false, optional: true, required: false
  private _networkPerformanceConfig = new ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference(this, "network_performance_config");
  public get networkPerformanceConfig() {
    return this._networkPerformanceConfig;
  }
  public putNetworkPerformanceConfig(value: ContainerNodePoolNetworkConfigNetworkPerformanceConfig) {
    this._networkPerformanceConfig.internalValue = value;
  }
  public resetNetworkPerformanceConfig() {
    this._networkPerformanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPerformanceConfigInput() {
    return this._networkPerformanceConfig.internalValue;
  }

  // pod_cidr_overprovision_config - computed: false, optional: true, required: false
  private _podCidrOverprovisionConfig = new ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference(this, "pod_cidr_overprovision_config");
  public get podCidrOverprovisionConfig() {
    return this._podCidrOverprovisionConfig;
  }
  public putPodCidrOverprovisionConfig(value: ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig) {
    this._podCidrOverprovisionConfig.internalValue = value;
  }
  public resetPodCidrOverprovisionConfig() {
    this._podCidrOverprovisionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podCidrOverprovisionConfigInput() {
    return this._podCidrOverprovisionConfig.internalValue;
  }
}
export interface ContainerNodePoolNodeConfigEffectiveTaints {
}

export function containerNodePoolNodeConfigEffectiveTaintsToTerraform(struct?: ContainerNodePoolNodeConfigEffectiveTaints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function containerNodePoolNodeConfigEffectiveTaintsToHclTerraform(struct?: ContainerNodePoolNodeConfigEffectiveTaints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ContainerNodePoolNodeConfigEffectiveTaintsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerNodePoolNodeConfigEffectiveTaints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigEffectiveTaints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class ContainerNodePoolNodeConfigEffectiveTaintsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerNodePoolNodeConfigEffectiveTaintsOutputReference {
    return new ContainerNodePoolNodeConfigEffectiveTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerNodePoolNodeConfigAdvancedMachineFeatures {
  /**
  * Whether the node should have nested virtualization enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#enable_nested_virtualization ContainerNodePool#enable_nested_virtualization}
  */
  readonly enableNestedVirtualization?: boolean | cdktn.IResolvable;
  /**
  * Level of Performance Monitoring Unit (PMU) requested. If unset, no access to the PMU is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#performance_monitoring_unit ContainerNodePool#performance_monitoring_unit}
  */
  readonly performanceMonitoringUnit?: string;
  /**
  * The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#threads_per_core ContainerNodePool#threads_per_core}
  */
  readonly threadsPerCore: number;
}

export function containerNodePoolNodeConfigAdvancedMachineFeaturesToTerraform(struct?: ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference | ContainerNodePoolNodeConfigAdvancedMachineFeatures): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_nested_virtualization: cdktn.booleanToTerraform(struct!.enableNestedVirtualization),
    performance_monitoring_unit: cdktn.stringToTerraform(struct!.performanceMonitoringUnit),
    threads_per_core: cdktn.numberToTerraform(struct!.threadsPerCore),
  }
}


export function containerNodePoolNodeConfigAdvancedMachineFeaturesToHclTerraform(struct?: ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference | ContainerNodePoolNodeConfigAdvancedMachineFeatures): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_nested_virtualization: {
      value: cdktn.booleanToHclTerraform(struct!.enableNestedVirtualization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    performance_monitoring_unit: {
      value: cdktn.stringToHclTerraform(struct!.performanceMonitoringUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threads_per_core: {
      value: cdktn.numberToHclTerraform(struct!.threadsPerCore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigAdvancedMachineFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableNestedVirtualization !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNestedVirtualization = this._enableNestedVirtualization;
    }
    if (this._performanceMonitoringUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceMonitoringUnit = this._performanceMonitoringUnit;
    }
    if (this._threadsPerCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadsPerCore = this._threadsPerCore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigAdvancedMachineFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableNestedVirtualization = undefined;
      this._performanceMonitoringUnit = undefined;
      this._threadsPerCore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableNestedVirtualization = value.enableNestedVirtualization;
      this._performanceMonitoringUnit = value.performanceMonitoringUnit;
      this._threadsPerCore = value.threadsPerCore;
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

  // performance_monitoring_unit - computed: false, optional: true, required: false
  private _performanceMonitoringUnit?: string; 
  public get performanceMonitoringUnit() {
    return this.getStringAttribute('performance_monitoring_unit');
  }
  public set performanceMonitoringUnit(value: string) {
    this._performanceMonitoringUnit = value;
  }
  public resetPerformanceMonitoringUnit() {
    this._performanceMonitoringUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceMonitoringUnitInput() {
    return this._performanceMonitoringUnit;
  }

  // threads_per_core - computed: false, optional: false, required: true
  private _threadsPerCore?: number; 
  public get threadsPerCore() {
    return this.getNumberAttribute('threads_per_core');
  }
  public set threadsPerCore(value: number) {
    this._threadsPerCore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get threadsPerCoreInput() {
    return this._threadsPerCore;
  }
}
export interface ContainerNodePoolNodeConfigBootDisk {
  /**
  * Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#disk_type ContainerNodePool#disk_type}
  */
  readonly diskType?: string;
  /**
  * Configured IOPs provisioning. Only valid with disk type hyperdisk-balanced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#provisioned_iops ContainerNodePool#provisioned_iops}
  */
  readonly provisionedIops?: number;
  /**
  * Configured throughput provisioning. Only valid with disk type hyperdisk-balanced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#provisioned_throughput ContainerNodePool#provisioned_throughput}
  */
  readonly provisionedThroughput?: number;
  /**
  * Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#size_gb ContainerNodePool#size_gb}
  */
  readonly sizeGb?: number;
}

export function containerNodePoolNodeConfigBootDiskToTerraform(struct?: ContainerNodePoolNodeConfigBootDiskOutputReference | ContainerNodePoolNodeConfigBootDisk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_type: cdktn.stringToTerraform(struct!.diskType),
    provisioned_iops: cdktn.numberToTerraform(struct!.provisionedIops),
    provisioned_throughput: cdktn.numberToTerraform(struct!.provisionedThroughput),
    size_gb: cdktn.numberToTerraform(struct!.sizeGb),
  }
}


export function containerNodePoolNodeConfigBootDiskToHclTerraform(struct?: ContainerNodePoolNodeConfigBootDiskOutputReference | ContainerNodePoolNodeConfigBootDisk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_type: {
      value: cdktn.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    size_gb: {
      value: cdktn.numberToHclTerraform(struct!.sizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigBootDiskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigBootDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._provisionedIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedIops = this._provisionedIops;
    }
    if (this._provisionedThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedThroughput = this._provisionedThroughput;
    }
    if (this._sizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGb = this._sizeGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigBootDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskType = undefined;
      this._provisionedIops = undefined;
      this._provisionedThroughput = undefined;
      this._sizeGb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskType = value.diskType;
      this._provisionedIops = value.provisionedIops;
      this._provisionedThroughput = value.provisionedThroughput;
      this._sizeGb = value.sizeGb;
    }
  }

  // disk_type - computed: true, optional: true, required: false
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

  // provisioned_iops - computed: true, optional: true, required: false
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

  // provisioned_throughput - computed: true, optional: true, required: false
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

  // size_gb - computed: true, optional: true, required: false
  private _sizeGb?: number; 
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
  public set sizeGb(value: number) {
    this._sizeGb = value;
  }
  public resetSizeGb() {
    this._sizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGbInput() {
    return this._sizeGb;
  }
}
export interface ContainerNodePoolNodeConfigConfidentialNodes {
  /**
  * Defines the type of technology used by the confidential node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#confidential_instance_type ContainerNodePool#confidential_instance_type}
  */
  readonly confidentialInstanceType?: string;
  /**
  * Whether Confidential Nodes feature is enabled for all nodes in this pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#enabled ContainerNodePool#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function containerNodePoolNodeConfigConfidentialNodesToTerraform(struct?: ContainerNodePoolNodeConfigConfidentialNodesOutputReference | ContainerNodePoolNodeConfigConfidentialNodes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confidential_instance_type: cdktn.stringToTerraform(struct!.confidentialInstanceType),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function containerNodePoolNodeConfigConfidentialNodesToHclTerraform(struct?: ContainerNodePoolNodeConfigConfidentialNodesOutputReference | ContainerNodePoolNodeConfigConfidentialNodes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confidential_instance_type: {
      value: cdktn.stringToHclTerraform(struct!.confidentialInstanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigConfidentialNodesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigConfidentialNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidentialInstanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidentialInstanceType = this._confidentialInstanceType;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigConfidentialNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._confidentialInstanceType = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._confidentialInstanceType = value.confidentialInstanceType;
      this._enabled = value.enabled;
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig {
  /**
  * URI for the secret that hosts a certificate. Must be in the format 'projects/PROJECT_NUM/secrets/SECRET_NAME/versions/VERSION_OR_LATEST'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#secret_uri ContainerNodePool#secret_uri}
  */
  readonly secretUri: string;
}

export function containerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToTerraform(struct?: ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference | ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_uri: cdktn.stringToTerraform(struct!.secretUri),
  }
}


export function containerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToHclTerraform(struct?: ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference | ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_uri: {
      value: cdktn.stringToHclTerraform(struct!.secretUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretUri = this._secretUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretUri = value.secretUri;
    }
  }

  // secret_uri - computed: false, optional: false, required: true
  private _secretUri?: string; 
  public get secretUri() {
    return this.getStringAttribute('secret_uri');
  }
  public set secretUri(value: string) {
    this._secretUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretUriInput() {
    return this._secretUri;
  }
}
export interface ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig {
  /**
  * List of fully-qualified-domain-names. IPv4s and port specification are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#fqdns ContainerNodePool#fqdns}
  */
  readonly fqdns: string[];
  /**
  * gcp_secret_manager_certificate_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#gcp_secret_manager_certificate_config ContainerNodePool#gcp_secret_manager_certificate_config}
  */
  readonly gcpSecretManagerCertificateConfig: ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig;
}

export function containerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToTerraform(struct?: ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fqdns),
    gcp_secret_manager_certificate_config: containerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToTerraform(struct!.gcpSecretManagerCertificateConfig),
  }
}


export function containerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToHclTerraform(struct?: ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fqdns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gcp_secret_manager_certificate_config: {
      value: containerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToHclTerraform(struct!.gcpSecretManagerCertificateConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdns = this._fqdns;
    }
    if (this._gcpSecretManagerCertificateConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSecretManagerCertificateConfig = this._gcpSecretManagerCertificateConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdns = undefined;
      this._gcpSecretManagerCertificateConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdns = value.fqdns;
      this._gcpSecretManagerCertificateConfig.internalValue = value.gcpSecretManagerCertificateConfig;
    }
  }

  // fqdns - computed: false, optional: false, required: true
  private _fqdns?: string[]; 
  public get fqdns() {
    return this.getListAttribute('fqdns');
  }
  public set fqdns(value: string[]) {
    this._fqdns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnsInput() {
    return this._fqdns;
  }

  // gcp_secret_manager_certificate_config - computed: false, optional: false, required: true
  private _gcpSecretManagerCertificateConfig = new ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference(this, "gcp_secret_manager_certificate_config");
  public get gcpSecretManagerCertificateConfig() {
    return this._gcpSecretManagerCertificateConfig;
  }
  public putGcpSecretManagerCertificateConfig(value: ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig) {
    this._gcpSecretManagerCertificateConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSecretManagerCertificateConfigInput() {
    return this._gcpSecretManagerCertificateConfig.internalValue;
  }
}

export class ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList extends cdktn.ComplexList {
  public internalValue? : ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference {
    return new ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfig {
  /**
  * Whether or not private registries are configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#enabled ContainerNodePool#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * certificate_authority_domain_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#certificate_authority_domain_config ContainerNodePool#certificate_authority_domain_config}
  */
  readonly certificateAuthorityDomainConfig?: ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[] | cdktn.IResolvable;
}

export function containerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigToTerraform(struct?: ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigOutputReference | ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    certificate_authority_domain_config: cdktn.listMapper(containerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToTerraform, true)(struct!.certificateAuthorityDomainConfig),
  }
}


export function containerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigToHclTerraform(struct?: ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigOutputReference | ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    certificate_authority_domain_config: {
      value: cdktn.listMapperHcl(containerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToHclTerraform, true)(struct!.certificateAuthorityDomainConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._certificateAuthorityDomainConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthorityDomainConfig = this._certificateAuthorityDomainConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._certificateAuthorityDomainConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._certificateAuthorityDomainConfig.internalValue = value.certificateAuthorityDomainConfig;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // certificate_authority_domain_config - computed: false, optional: true, required: false
  private _certificateAuthorityDomainConfig = new ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList(this, "certificate_authority_domain_config", false);
  public get certificateAuthorityDomainConfig() {
    return this._certificateAuthorityDomainConfig;
  }
  public putCertificateAuthorityDomainConfig(value: ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[] | cdktn.IResolvable) {
    this._certificateAuthorityDomainConfig.internalValue = value;
  }
  public resetCertificateAuthorityDomainConfig() {
    this._certificateAuthorityDomainConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityDomainConfigInput() {
    return this._certificateAuthorityDomainConfig.internalValue;
  }
}
export interface ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsCa {
  /**
  * URI for the Secret Manager secret that hosts the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#gcp_secret_manager_secret_uri ContainerNodePool#gcp_secret_manager_secret_uri}
  */
  readonly gcpSecretManagerSecretUri?: string;
}

export function containerNodePoolNodeConfigContainerdConfigRegistryHostsHostsCaToTerraform(struct?: ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsCa | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_secret_manager_secret_uri: cdktn.stringToTerraform(struct!.gcpSecretManagerSecretUri),
  }
}


export function containerNodePoolNodeConfigContainerdConfigRegistryHostsHostsCaToHclTerraform(struct?: ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsCa | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_secret_manager_secret_uri: {
      value: cdktn.stringToHclTerraform(struct!.gcpSecretManagerSecretUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsCaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsCa | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpSecretManagerSecretUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSecretManagerSecretUri = this._gcpSecretManagerSecretUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsCa | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gcpSecretManagerSecretUri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gcpSecretManagerSecretUri = value.gcpSecretManagerSecretUri;
    }
  }

  // gcp_secret_manager_secret_uri - computed: false, optional: true, required: false
  private _gcpSecretManagerSecretUri?: string; 
  public get gcpSecretManagerSecretUri() {
    return this.getStringAttribute('gcp_secret_manager_secret_uri');
  }
  public set gcpSecretManagerSecretUri(value: string) {
    this._gcpSecretManagerSecretUri = value;
  }
  public resetGcpSecretManagerSecretUri() {
    this._gcpSecretManagerSecretUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSecretManagerSecretUriInput() {
    return this._gcpSecretManagerSecretUri;
  }
}

export class ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsCaList extends cdktn.ComplexList {
  public internalValue? : ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsCa[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsCaOutputReference {
    return new ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsCaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCert {
  /**
  * URI for the Secret Manager secret that hosts the client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#gcp_secret_manager_secret_uri ContainerNodePool#gcp_secret_manager_secret_uri}
  */
  readonly gcpSecretManagerSecretUri?: string;
}

export function containerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCertToTerraform(struct?: ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCertOutputReference | ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCert): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_secret_manager_secret_uri: cdktn.stringToTerraform(struct!.gcpSecretManagerSecretUri),
  }
}


export function containerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCertToHclTerraform(struct?: ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCertOutputReference | ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCert): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_secret_manager_secret_uri: {
      value: cdktn.stringToHclTerraform(struct!.gcpSecretManagerSecretUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCertOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpSecretManagerSecretUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSecretManagerSecretUri = this._gcpSecretManagerSecretUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcpSecretManagerSecretUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcpSecretManagerSecretUri = value.gcpSecretManagerSecretUri;
    }
  }

  // gcp_secret_manager_secret_uri - computed: false, optional: true, required: false
  private _gcpSecretManagerSecretUri?: string; 
  public get gcpSecretManagerSecretUri() {
    return this.getStringAttribute('gcp_secret_manager_secret_uri');
  }
  public set gcpSecretManagerSecretUri(value: string) {
    this._gcpSecretManagerSecretUri = value;
  }
  public resetGcpSecretManagerSecretUri() {
    this._gcpSecretManagerSecretUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSecretManagerSecretUriInput() {
    return this._gcpSecretManagerSecretUri;
  }
}
export interface ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKey {
  /**
  * URI for the Secret Manager secret that hosts the private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#gcp_secret_manager_secret_uri ContainerNodePool#gcp_secret_manager_secret_uri}
  */
  readonly gcpSecretManagerSecretUri?: string;
}

export function containerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKeyToTerraform(struct?: ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKeyOutputReference | ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_secret_manager_secret_uri: cdktn.stringToTerraform(struct!.gcpSecretManagerSecretUri),
  }
}


export function containerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKeyToHclTerraform(struct?: ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKeyOutputReference | ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_secret_manager_secret_uri: {
      value: cdktn.stringToHclTerraform(struct!.gcpSecretManagerSecretUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpSecretManagerSecretUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSecretManagerSecretUri = this._gcpSecretManagerSecretUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcpSecretManagerSecretUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcpSecretManagerSecretUri = value.gcpSecretManagerSecretUri;
    }
  }

  // gcp_secret_manager_secret_uri - computed: false, optional: true, required: false
  private _gcpSecretManagerSecretUri?: string; 
  public get gcpSecretManagerSecretUri() {
    return this.getStringAttribute('gcp_secret_manager_secret_uri');
  }
  public set gcpSecretManagerSecretUri(value: string) {
    this._gcpSecretManagerSecretUri = value;
  }
  public resetGcpSecretManagerSecretUri() {
    this._gcpSecretManagerSecretUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSecretManagerSecretUriInput() {
    return this._gcpSecretManagerSecretUri;
  }
}
export interface ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClient {
  /**
  * cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#cert ContainerNodePool#cert}
  */
  readonly cert: ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCert;
  /**
  * key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#key ContainerNodePool#key}
  */
  readonly key?: ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKey;
}

export function containerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientToTerraform(struct?: ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: containerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCertToTerraform(struct!.cert),
    key: containerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKeyToTerraform(struct!.key),
  }
}


export function containerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientToHclTerraform(struct?: ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: containerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCertToHclTerraform(struct!.cert),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCertList",
    },
    key: {
      value: containerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKeyToHclTerraform(struct!.key),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClient | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert?.internalValue;
    }
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClient | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cert.internalValue = undefined;
      this._key.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cert.internalValue = value.cert;
      this._key.internalValue = value.key;
    }
  }

  // cert - computed: false, optional: false, required: true
  private _cert = new ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCertOutputReference(this, "cert");
  public get cert() {
    return this._cert;
  }
  public putCert(value: ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCert) {
    this._cert.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert.internalValue;
  }

  // key - computed: false, optional: true, required: false
  private _key = new ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKeyOutputReference(this, "key");
  public get key() {
    return this._key;
  }
  public putKey(value: ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKey) {
    this._key.internalValue = value;
  }
  public resetKey() {
    this._key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }
}

export class ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientList extends cdktn.ComplexList {
  public internalValue? : ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClient[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientOutputReference {
    return new ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeader {
  /**
  * Configures the header key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#key ContainerNodePool#key}
  */
  readonly key: string;
  /**
  * Configures the header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#value ContainerNodePool#value}
  */
  readonly value: string[];
}

export function containerNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeaderToTerraform(struct?: ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.value),
  }
}


export function containerNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeaderToHclTerraform(struct?: ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeader | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeader | cdktn.IResolvable | undefined) {
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

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeaderList extends cdktn.ComplexList {
  public internalValue? : ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeader[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeaderOutputReference {
    return new ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHosts {
  /**
  * Represent the capabilities of the registry host, specifying what operations a host is capable of performing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#capabilities ContainerNodePool#capabilities}
  */
  readonly capabilities?: string[];
  /**
  * Specifies the maximum duration allowed for a connection attempt to complete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#dial_timeout ContainerNodePool#dial_timeout}
  */
  readonly dialTimeout?: string;
  /**
  * Configures the registry host/mirror.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#host ContainerNodePool#host}
  */
  readonly host: string;
  /**
  * Indicate the host's API root endpoint is defined in the URL path rather than by the API specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#override_path ContainerNodePool#override_path}
  */
  readonly overridePath?: boolean | cdktn.IResolvable;
  /**
  * ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#ca ContainerNodePool#ca}
  */
  readonly ca?: ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsCa[] | cdktn.IResolvable;
  /**
  * client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#client ContainerNodePool#client}
  */
  readonly client?: ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClient[] | cdktn.IResolvable;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#header ContainerNodePool#header}
  */
  readonly header?: ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeader[] | cdktn.IResolvable;
}

export function containerNodePoolNodeConfigContainerdConfigRegistryHostsHostsToTerraform(struct?: ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHosts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capabilities: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.capabilities),
    dial_timeout: cdktn.stringToTerraform(struct!.dialTimeout),
    host: cdktn.stringToTerraform(struct!.host),
    override_path: cdktn.booleanToTerraform(struct!.overridePath),
    ca: cdktn.listMapper(containerNodePoolNodeConfigContainerdConfigRegistryHostsHostsCaToTerraform, true)(struct!.ca),
    client: cdktn.listMapper(containerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientToTerraform, true)(struct!.client),
    header: cdktn.listMapper(containerNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeaderToTerraform, true)(struct!.header),
  }
}


export function containerNodePoolNodeConfigContainerdConfigRegistryHostsHostsToHclTerraform(struct?: ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHosts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capabilities: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.capabilities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dial_timeout: {
      value: cdktn.stringToHclTerraform(struct!.dialTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_path: {
      value: cdktn.booleanToHclTerraform(struct!.overridePath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ca: {
      value: cdktn.listMapperHcl(containerNodePoolNodeConfigContainerdConfigRegistryHostsHostsCaToHclTerraform, true)(struct!.ca),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsCaList",
    },
    client: {
      value: cdktn.listMapperHcl(containerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientToHclTerraform, true)(struct!.client),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientList",
    },
    header: {
      value: cdktn.listMapperHcl(containerNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHosts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities;
    }
    if (this._dialTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.dialTimeout = this._dialTimeout;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._overridePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.overridePath = this._overridePath;
    }
    if (this._ca?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca?.internalValue;
    }
    if (this._client?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client?.internalValue;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHosts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capabilities = undefined;
      this._dialTimeout = undefined;
      this._host = undefined;
      this._overridePath = undefined;
      this._ca.internalValue = undefined;
      this._client.internalValue = undefined;
      this._header.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capabilities = value.capabilities;
      this._dialTimeout = value.dialTimeout;
      this._host = value.host;
      this._overridePath = value.overridePath;
      this._ca.internalValue = value.ca;
      this._client.internalValue = value.client;
      this._header.internalValue = value.header;
    }
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities?: string[]; 
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }
  public resetCapabilities() {
    this._capabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }

  // dial_timeout - computed: false, optional: true, required: false
  private _dialTimeout?: string; 
  public get dialTimeout() {
    return this.getStringAttribute('dial_timeout');
  }
  public set dialTimeout(value: string) {
    this._dialTimeout = value;
  }
  public resetDialTimeout() {
    this._dialTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialTimeoutInput() {
    return this._dialTimeout;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // override_path - computed: false, optional: true, required: false
  private _overridePath?: boolean | cdktn.IResolvable; 
  public get overridePath() {
    return this.getBooleanAttribute('override_path');
  }
  public set overridePath(value: boolean | cdktn.IResolvable) {
    this._overridePath = value;
  }
  public resetOverridePath() {
    this._overridePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridePathInput() {
    return this._overridePath;
  }

  // ca - computed: false, optional: true, required: false
  private _ca = new ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsCaList(this, "ca", false);
  public get ca() {
    return this._ca;
  }
  public putCa(value: ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsCa[] | cdktn.IResolvable) {
    this._ca.internalValue = value;
  }
  public resetCa() {
    this._ca.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca.internalValue;
  }

  // client - computed: false, optional: true, required: false
  private _client = new ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientList(this, "client", false);
  public get client() {
    return this._client;
  }
  public putClient(value: ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsClient[] | cdktn.IResolvable) {
    this._client.internalValue = value;
  }
  public resetClient() {
    this._client.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeader[] | cdktn.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}

export class ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsList extends cdktn.ComplexList {
  public internalValue? : ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHosts[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsOutputReference {
    return new ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerNodePoolNodeConfigContainerdConfigRegistryHosts {
  /**
  * Defines the host name of the registry server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#server ContainerNodePool#server}
  */
  readonly server: string;
  /**
  * hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#hosts ContainerNodePool#hosts}
  */
  readonly hosts?: ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHosts[] | cdktn.IResolvable;
}

export function containerNodePoolNodeConfigContainerdConfigRegistryHostsToTerraform(struct?: ContainerNodePoolNodeConfigContainerdConfigRegistryHosts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server: cdktn.stringToTerraform(struct!.server),
    hosts: cdktn.listMapper(containerNodePoolNodeConfigContainerdConfigRegistryHostsHostsToTerraform, true)(struct!.hosts),
  }
}


export function containerNodePoolNodeConfigContainerdConfigRegistryHostsToHclTerraform(struct?: ContainerNodePoolNodeConfigContainerdConfigRegistryHosts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server: {
      value: cdktn.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosts: {
      value: cdktn.listMapperHcl(containerNodePoolNodeConfigContainerdConfigRegistryHostsHostsToHclTerraform, true)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigContainerdConfigRegistryHostsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerNodePoolNodeConfigContainerdConfigRegistryHosts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigContainerdConfigRegistryHosts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._server = undefined;
      this._hosts.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._server = value.server;
      this._hosts.internalValue = value.hosts;
    }
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts = new ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: ContainerNodePoolNodeConfigContainerdConfigRegistryHostsHosts[] | cdktn.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }
}

export class ContainerNodePoolNodeConfigContainerdConfigRegistryHostsList extends cdktn.ComplexList {
  public internalValue? : ContainerNodePoolNodeConfigContainerdConfigRegistryHosts[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerNodePoolNodeConfigContainerdConfigRegistryHostsOutputReference {
    return new ContainerNodePoolNodeConfigContainerdConfigRegistryHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerNodePoolNodeConfigContainerdConfigWritableCgroups {
  /**
  * Whether writable cgroups are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#enabled ContainerNodePool#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function containerNodePoolNodeConfigContainerdConfigWritableCgroupsToTerraform(struct?: ContainerNodePoolNodeConfigContainerdConfigWritableCgroupsOutputReference | ContainerNodePoolNodeConfigContainerdConfigWritableCgroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function containerNodePoolNodeConfigContainerdConfigWritableCgroupsToHclTerraform(struct?: ContainerNodePoolNodeConfigContainerdConfigWritableCgroupsOutputReference | ContainerNodePoolNodeConfigContainerdConfigWritableCgroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigContainerdConfigWritableCgroupsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigContainerdConfigWritableCgroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigContainerdConfigWritableCgroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ContainerNodePoolNodeConfigContainerdConfig {
  /**
  * private_registry_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#private_registry_access_config ContainerNodePool#private_registry_access_config}
  */
  readonly privateRegistryAccessConfig?: ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfig;
  /**
  * registry_hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#registry_hosts ContainerNodePool#registry_hosts}
  */
  readonly registryHosts?: ContainerNodePoolNodeConfigContainerdConfigRegistryHosts[] | cdktn.IResolvable;
  /**
  * writable_cgroups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#writable_cgroups ContainerNodePool#writable_cgroups}
  */
  readonly writableCgroups?: ContainerNodePoolNodeConfigContainerdConfigWritableCgroups;
}

export function containerNodePoolNodeConfigContainerdConfigToTerraform(struct?: ContainerNodePoolNodeConfigContainerdConfigOutputReference | ContainerNodePoolNodeConfigContainerdConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_registry_access_config: containerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigToTerraform(struct!.privateRegistryAccessConfig),
    registry_hosts: cdktn.listMapper(containerNodePoolNodeConfigContainerdConfigRegistryHostsToTerraform, true)(struct!.registryHosts),
    writable_cgroups: containerNodePoolNodeConfigContainerdConfigWritableCgroupsToTerraform(struct!.writableCgroups),
  }
}


export function containerNodePoolNodeConfigContainerdConfigToHclTerraform(struct?: ContainerNodePoolNodeConfigContainerdConfigOutputReference | ContainerNodePoolNodeConfigContainerdConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_registry_access_config: {
      value: containerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigToHclTerraform(struct!.privateRegistryAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigList",
    },
    registry_hosts: {
      value: cdktn.listMapperHcl(containerNodePoolNodeConfigContainerdConfigRegistryHostsToHclTerraform, true)(struct!.registryHosts),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigContainerdConfigRegistryHostsList",
    },
    writable_cgroups: {
      value: containerNodePoolNodeConfigContainerdConfigWritableCgroupsToHclTerraform(struct!.writableCgroups),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigContainerdConfigWritableCgroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigContainerdConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigContainerdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateRegistryAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateRegistryAccessConfig = this._privateRegistryAccessConfig?.internalValue;
    }
    if (this._registryHosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryHosts = this._registryHosts?.internalValue;
    }
    if (this._writableCgroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.writableCgroups = this._writableCgroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigContainerdConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateRegistryAccessConfig.internalValue = undefined;
      this._registryHosts.internalValue = undefined;
      this._writableCgroups.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateRegistryAccessConfig.internalValue = value.privateRegistryAccessConfig;
      this._registryHosts.internalValue = value.registryHosts;
      this._writableCgroups.internalValue = value.writableCgroups;
    }
  }

  // private_registry_access_config - computed: false, optional: true, required: false
  private _privateRegistryAccessConfig = new ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigOutputReference(this, "private_registry_access_config");
  public get privateRegistryAccessConfig() {
    return this._privateRegistryAccessConfig;
  }
  public putPrivateRegistryAccessConfig(value: ContainerNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfig) {
    this._privateRegistryAccessConfig.internalValue = value;
  }
  public resetPrivateRegistryAccessConfig() {
    this._privateRegistryAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateRegistryAccessConfigInput() {
    return this._privateRegistryAccessConfig.internalValue;
  }

  // registry_hosts - computed: false, optional: true, required: false
  private _registryHosts = new ContainerNodePoolNodeConfigContainerdConfigRegistryHostsList(this, "registry_hosts", false);
  public get registryHosts() {
    return this._registryHosts;
  }
  public putRegistryHosts(value: ContainerNodePoolNodeConfigContainerdConfigRegistryHosts[] | cdktn.IResolvable) {
    this._registryHosts.internalValue = value;
  }
  public resetRegistryHosts() {
    this._registryHosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryHostsInput() {
    return this._registryHosts.internalValue;
  }

  // writable_cgroups - computed: false, optional: true, required: false
  private _writableCgroups = new ContainerNodePoolNodeConfigContainerdConfigWritableCgroupsOutputReference(this, "writable_cgroups");
  public get writableCgroups() {
    return this._writableCgroups;
  }
  public putWritableCgroups(value: ContainerNodePoolNodeConfigContainerdConfigWritableCgroups) {
    this._writableCgroups.internalValue = value;
  }
  public resetWritableCgroups() {
    this._writableCgroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writableCgroupsInput() {
    return this._writableCgroups.internalValue;
  }
}
export interface ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig {
  /**
  * Number of local SSDs to be utilized for GKE Data Cache. Uses NVMe interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#data_cache_count ContainerNodePool#data_cache_count}
  */
  readonly dataCacheCount?: number;
  /**
  * Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. Each local SSD must be 375 or 3000 GB in size, and all local SSDs must share the same size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#local_ssd_count ContainerNodePool#local_ssd_count}
  */
  readonly localSsdCount: number;
}

export function containerNodePoolNodeConfigEphemeralStorageLocalSsdConfigToTerraform(struct?: ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference | ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_cache_count: cdktn.numberToTerraform(struct!.dataCacheCount),
    local_ssd_count: cdktn.numberToTerraform(struct!.localSsdCount),
  }
}


export function containerNodePoolNodeConfigEphemeralStorageLocalSsdConfigToHclTerraform(struct?: ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference | ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_cache_count: {
      value: cdktn.numberToHclTerraform(struct!.dataCacheCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_ssd_count: {
      value: cdktn.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataCacheCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCacheCount = this._dataCacheCount;
    }
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataCacheCount = undefined;
      this._localSsdCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataCacheCount = value.dataCacheCount;
      this._localSsdCount = value.localSsdCount;
    }
  }

  // data_cache_count - computed: false, optional: true, required: false
  private _dataCacheCount?: number; 
  public get dataCacheCount() {
    return this.getNumberAttribute('data_cache_count');
  }
  public set dataCacheCount(value: number) {
    this._dataCacheCount = value;
  }
  public resetDataCacheCount() {
    this._dataCacheCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCacheCountInput() {
    return this._dataCacheCount;
  }

  // local_ssd_count - computed: false, optional: false, required: true
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }
}
export interface ContainerNodePoolNodeConfigFastSocket {
  /**
  * Whether or not NCCL Fast Socket is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#enabled ContainerNodePool#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function containerNodePoolNodeConfigFastSocketToTerraform(struct?: ContainerNodePoolNodeConfigFastSocketOutputReference | ContainerNodePoolNodeConfigFastSocket): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function containerNodePoolNodeConfigFastSocketToHclTerraform(struct?: ContainerNodePoolNodeConfigFastSocketOutputReference | ContainerNodePoolNodeConfigFastSocket): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigFastSocketOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigFastSocket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigFastSocket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ContainerNodePoolNodeConfigGcfsConfig {
  /**
  * Whether or not GCFS is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#enabled ContainerNodePool#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function containerNodePoolNodeConfigGcfsConfigToTerraform(struct?: ContainerNodePoolNodeConfigGcfsConfigOutputReference | ContainerNodePoolNodeConfigGcfsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function containerNodePoolNodeConfigGcfsConfigToHclTerraform(struct?: ContainerNodePoolNodeConfigGcfsConfigOutputReference | ContainerNodePoolNodeConfigGcfsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigGcfsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigGcfsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigGcfsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig {
  /**
  * Mode for how the GPU driver is installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#gpu_driver_version ContainerNodePool#gpu_driver_version}
  */
  readonly gpuDriverVersion: string;
}

export function containerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigToTerraform(struct?: ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference | ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gpu_driver_version: cdktn.stringToTerraform(struct!.gpuDriverVersion),
  }
}


export function containerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigToHclTerraform(struct?: ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference | ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gpu_driver_version: {
      value: cdktn.stringToHclTerraform(struct!.gpuDriverVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gpuDriverVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuDriverVersion = this._gpuDriverVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gpuDriverVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gpuDriverVersion = value.gpuDriverVersion;
    }
  }

  // gpu_driver_version - computed: false, optional: false, required: true
  private _gpuDriverVersion?: string; 
  public get gpuDriverVersion() {
    return this.getStringAttribute('gpu_driver_version');
  }
  public set gpuDriverVersion(value: string) {
    this._gpuDriverVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuDriverVersionInput() {
    return this._gpuDriverVersion;
  }
}
export interface ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig {
  /**
  * The type of GPU sharing strategy to enable on the GPU node. Possible values are described in the API package (https://pkg.go.dev/google.golang.org/api/container/v1#GPUSharingConfig)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#gpu_sharing_strategy ContainerNodePool#gpu_sharing_strategy}
  */
  readonly gpuSharingStrategy: string;
  /**
  * The maximum number of containers that can share a GPU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#max_shared_clients_per_gpu ContainerNodePool#max_shared_clients_per_gpu}
  */
  readonly maxSharedClientsPerGpu: number;
}

export function containerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigToTerraform(struct?: ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference | ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gpu_sharing_strategy: cdktn.stringToTerraform(struct!.gpuSharingStrategy),
    max_shared_clients_per_gpu: cdktn.numberToTerraform(struct!.maxSharedClientsPerGpu),
  }
}


export function containerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigToHclTerraform(struct?: ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference | ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gpu_sharing_strategy: {
      value: cdktn.stringToHclTerraform(struct!.gpuSharingStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_shared_clients_per_gpu: {
      value: cdktn.numberToHclTerraform(struct!.maxSharedClientsPerGpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gpuSharingStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuSharingStrategy = this._gpuSharingStrategy;
    }
    if (this._maxSharedClientsPerGpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSharedClientsPerGpu = this._maxSharedClientsPerGpu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gpuSharingStrategy = undefined;
      this._maxSharedClientsPerGpu = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gpuSharingStrategy = value.gpuSharingStrategy;
      this._maxSharedClientsPerGpu = value.maxSharedClientsPerGpu;
    }
  }

  // gpu_sharing_strategy - computed: false, optional: false, required: true
  private _gpuSharingStrategy?: string; 
  public get gpuSharingStrategy() {
    return this.getStringAttribute('gpu_sharing_strategy');
  }
  public set gpuSharingStrategy(value: string) {
    this._gpuSharingStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuSharingStrategyInput() {
    return this._gpuSharingStrategy;
  }

  // max_shared_clients_per_gpu - computed: false, optional: false, required: true
  private _maxSharedClientsPerGpu?: number; 
  public get maxSharedClientsPerGpu() {
    return this.getNumberAttribute('max_shared_clients_per_gpu');
  }
  public set maxSharedClientsPerGpu(value: number) {
    this._maxSharedClientsPerGpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSharedClientsPerGpuInput() {
    return this._maxSharedClientsPerGpu;
  }
}
export interface ContainerNodePoolNodeConfigGuestAccelerator {
  /**
  * The number of the accelerator cards exposed to an instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#count ContainerNodePool#count}
  */
  readonly count: number;
  /**
  * Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#gpu_partition_size ContainerNodePool#gpu_partition_size}
  */
  readonly gpuPartitionSize?: string;
  /**
  * The accelerator type resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#type ContainerNodePool#type}
  */
  readonly type: string;
  /**
  * gpu_driver_installation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#gpu_driver_installation_config ContainerNodePool#gpu_driver_installation_config}
  */
  readonly gpuDriverInstallationConfig?: ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig;
  /**
  * gpu_sharing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#gpu_sharing_config ContainerNodePool#gpu_sharing_config}
  */
  readonly gpuSharingConfig?: ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig;
}

export function containerNodePoolNodeConfigGuestAcceleratorToTerraform(struct?: ContainerNodePoolNodeConfigGuestAccelerator | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    gpu_partition_size: cdktn.stringToTerraform(struct!.gpuPartitionSize),
    type: cdktn.stringToTerraform(struct!.type),
    gpu_driver_installation_config: containerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigToTerraform(struct!.gpuDriverInstallationConfig),
    gpu_sharing_config: containerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigToTerraform(struct!.gpuSharingConfig),
  }
}


export function containerNodePoolNodeConfigGuestAcceleratorToHclTerraform(struct?: ContainerNodePoolNodeConfigGuestAccelerator | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gpu_partition_size: {
      value: cdktn.stringToHclTerraform(struct!.gpuPartitionSize),
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
    gpu_driver_installation_config: {
      value: containerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigToHclTerraform(struct!.gpuDriverInstallationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList",
    },
    gpu_sharing_config: {
      value: containerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigToHclTerraform(struct!.gpuSharingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigGuestAcceleratorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerNodePoolNodeConfigGuestAccelerator | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._gpuPartitionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuPartitionSize = this._gpuPartitionSize;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._gpuDriverInstallationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuDriverInstallationConfig = this._gpuDriverInstallationConfig?.internalValue;
    }
    if (this._gpuSharingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuSharingConfig = this._gpuSharingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigGuestAccelerator | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._gpuPartitionSize = undefined;
      this._type = undefined;
      this._gpuDriverInstallationConfig.internalValue = undefined;
      this._gpuSharingConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._gpuPartitionSize = value.gpuPartitionSize;
      this._type = value.type;
      this._gpuDriverInstallationConfig.internalValue = value.gpuDriverInstallationConfig;
      this._gpuSharingConfig.internalValue = value.gpuSharingConfig;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // gpu_partition_size - computed: false, optional: true, required: false
  private _gpuPartitionSize?: string; 
  public get gpuPartitionSize() {
    return this.getStringAttribute('gpu_partition_size');
  }
  public set gpuPartitionSize(value: string) {
    this._gpuPartitionSize = value;
  }
  public resetGpuPartitionSize() {
    this._gpuPartitionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuPartitionSizeInput() {
    return this._gpuPartitionSize;
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

  // gpu_driver_installation_config - computed: false, optional: true, required: false
  private _gpuDriverInstallationConfig = new ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference(this, "gpu_driver_installation_config");
  public get gpuDriverInstallationConfig() {
    return this._gpuDriverInstallationConfig;
  }
  public putGpuDriverInstallationConfig(value: ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig) {
    this._gpuDriverInstallationConfig.internalValue = value;
  }
  public resetGpuDriverInstallationConfig() {
    this._gpuDriverInstallationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuDriverInstallationConfigInput() {
    return this._gpuDriverInstallationConfig.internalValue;
  }

  // gpu_sharing_config - computed: false, optional: true, required: false
  private _gpuSharingConfig = new ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference(this, "gpu_sharing_config");
  public get gpuSharingConfig() {
    return this._gpuSharingConfig;
  }
  public putGpuSharingConfig(value: ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig) {
    this._gpuSharingConfig.internalValue = value;
  }
  public resetGpuSharingConfig() {
    this._gpuSharingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuSharingConfigInput() {
    return this._gpuSharingConfig.internalValue;
  }
}

export class ContainerNodePoolNodeConfigGuestAcceleratorList extends cdktn.ComplexList {
  public internalValue? : ContainerNodePoolNodeConfigGuestAccelerator[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerNodePoolNodeConfigGuestAcceleratorOutputReference {
    return new ContainerNodePoolNodeConfigGuestAcceleratorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerNodePoolNodeConfigGvnic {
  /**
  * Whether or not gvnic is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#enabled ContainerNodePool#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function containerNodePoolNodeConfigGvnicToTerraform(struct?: ContainerNodePoolNodeConfigGvnicOutputReference | ContainerNodePoolNodeConfigGvnic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function containerNodePoolNodeConfigGvnicToHclTerraform(struct?: ContainerNodePoolNodeConfigGvnicOutputReference | ContainerNodePoolNodeConfigGvnic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigGvnicOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigGvnic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigGvnic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ContainerNodePoolNodeConfigHostMaintenancePolicy {
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#maintenance_interval ContainerNodePool#maintenance_interval}
  */
  readonly maintenanceInterval: string;
}

export function containerNodePoolNodeConfigHostMaintenancePolicyToTerraform(struct?: ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference | ContainerNodePoolNodeConfigHostMaintenancePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintenance_interval: cdktn.stringToTerraform(struct!.maintenanceInterval),
  }
}


export function containerNodePoolNodeConfigHostMaintenancePolicyToHclTerraform(struct?: ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference | ContainerNodePoolNodeConfigHostMaintenancePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maintenance_interval: {
      value: cdktn.stringToHclTerraform(struct!.maintenanceInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigHostMaintenancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceInterval = this._maintenanceInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigHostMaintenancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maintenanceInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maintenanceInterval = value.maintenanceInterval;
    }
  }

  // maintenance_interval - computed: false, optional: false, required: true
  private _maintenanceInterval?: string; 
  public get maintenanceInterval() {
    return this.getStringAttribute('maintenance_interval');
  }
  public set maintenanceInterval(value: string) {
    this._maintenanceInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceIntervalInput() {
    return this._maintenanceInterval;
  }
}
export interface ContainerNodePoolNodeConfigKubeletConfigEvictionMinimumReclaim {
  /**
  * Defines percentage of minimum reclaim for imagefs.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#imagefs_available ContainerNodePool#imagefs_available}
  */
  readonly imagefsAvailable?: string;
  /**
  * Defines percentage of minimum reclaim for imagefs.inodesFree.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#imagefs_inodes_free ContainerNodePool#imagefs_inodes_free}
  */
  readonly imagefsInodesFree?: string;
  /**
  * Defines percentage of minimum reclaim for memory.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#memory_available ContainerNodePool#memory_available}
  */
  readonly memoryAvailable?: string;
  /**
  * Defines percentage of minimum reclaim for nodefs.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#nodefs_available ContainerNodePool#nodefs_available}
  */
  readonly nodefsAvailable?: string;
  /**
  * Defines percentage of minimum reclaim for nodefs.inodesFree.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#nodefs_inodes_free ContainerNodePool#nodefs_inodes_free}
  */
  readonly nodefsInodesFree?: string;
  /**
  * Defines percentage of minimum reclaim for pid.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#pid_available ContainerNodePool#pid_available}
  */
  readonly pidAvailable?: string;
}

export function containerNodePoolNodeConfigKubeletConfigEvictionMinimumReclaimToTerraform(struct?: ContainerNodePoolNodeConfigKubeletConfigEvictionMinimumReclaimOutputReference | ContainerNodePoolNodeConfigKubeletConfigEvictionMinimumReclaim): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    imagefs_available: cdktn.stringToTerraform(struct!.imagefsAvailable),
    imagefs_inodes_free: cdktn.stringToTerraform(struct!.imagefsInodesFree),
    memory_available: cdktn.stringToTerraform(struct!.memoryAvailable),
    nodefs_available: cdktn.stringToTerraform(struct!.nodefsAvailable),
    nodefs_inodes_free: cdktn.stringToTerraform(struct!.nodefsInodesFree),
    pid_available: cdktn.stringToTerraform(struct!.pidAvailable),
  }
}


export function containerNodePoolNodeConfigKubeletConfigEvictionMinimumReclaimToHclTerraform(struct?: ContainerNodePoolNodeConfigKubeletConfigEvictionMinimumReclaimOutputReference | ContainerNodePoolNodeConfigKubeletConfigEvictionMinimumReclaim): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    imagefs_available: {
      value: cdktn.stringToHclTerraform(struct!.imagefsAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imagefs_inodes_free: {
      value: cdktn.stringToHclTerraform(struct!.imagefsInodesFree),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_available: {
      value: cdktn.stringToHclTerraform(struct!.memoryAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodefs_available: {
      value: cdktn.stringToHclTerraform(struct!.nodefsAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodefs_inodes_free: {
      value: cdktn.stringToHclTerraform(struct!.nodefsInodesFree),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pid_available: {
      value: cdktn.stringToHclTerraform(struct!.pidAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigKubeletConfigEvictionMinimumReclaimOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigKubeletConfigEvictionMinimumReclaim | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imagefsAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagefsAvailable = this._imagefsAvailable;
    }
    if (this._imagefsInodesFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagefsInodesFree = this._imagefsInodesFree;
    }
    if (this._memoryAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryAvailable = this._memoryAvailable;
    }
    if (this._nodefsAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodefsAvailable = this._nodefsAvailable;
    }
    if (this._nodefsInodesFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodefsInodesFree = this._nodefsInodesFree;
    }
    if (this._pidAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.pidAvailable = this._pidAvailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigKubeletConfigEvictionMinimumReclaim | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imagefsAvailable = undefined;
      this._imagefsInodesFree = undefined;
      this._memoryAvailable = undefined;
      this._nodefsAvailable = undefined;
      this._nodefsInodesFree = undefined;
      this._pidAvailable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imagefsAvailable = value.imagefsAvailable;
      this._imagefsInodesFree = value.imagefsInodesFree;
      this._memoryAvailable = value.memoryAvailable;
      this._nodefsAvailable = value.nodefsAvailable;
      this._nodefsInodesFree = value.nodefsInodesFree;
      this._pidAvailable = value.pidAvailable;
    }
  }

  // imagefs_available - computed: false, optional: true, required: false
  private _imagefsAvailable?: string; 
  public get imagefsAvailable() {
    return this.getStringAttribute('imagefs_available');
  }
  public set imagefsAvailable(value: string) {
    this._imagefsAvailable = value;
  }
  public resetImagefsAvailable() {
    this._imagefsAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagefsAvailableInput() {
    return this._imagefsAvailable;
  }

  // imagefs_inodes_free - computed: false, optional: true, required: false
  private _imagefsInodesFree?: string; 
  public get imagefsInodesFree() {
    return this.getStringAttribute('imagefs_inodes_free');
  }
  public set imagefsInodesFree(value: string) {
    this._imagefsInodesFree = value;
  }
  public resetImagefsInodesFree() {
    this._imagefsInodesFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagefsInodesFreeInput() {
    return this._imagefsInodesFree;
  }

  // memory_available - computed: false, optional: true, required: false
  private _memoryAvailable?: string; 
  public get memoryAvailable() {
    return this.getStringAttribute('memory_available');
  }
  public set memoryAvailable(value: string) {
    this._memoryAvailable = value;
  }
  public resetMemoryAvailable() {
    this._memoryAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryAvailableInput() {
    return this._memoryAvailable;
  }

  // nodefs_available - computed: false, optional: true, required: false
  private _nodefsAvailable?: string; 
  public get nodefsAvailable() {
    return this.getStringAttribute('nodefs_available');
  }
  public set nodefsAvailable(value: string) {
    this._nodefsAvailable = value;
  }
  public resetNodefsAvailable() {
    this._nodefsAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodefsAvailableInput() {
    return this._nodefsAvailable;
  }

  // nodefs_inodes_free - computed: false, optional: true, required: false
  private _nodefsInodesFree?: string; 
  public get nodefsInodesFree() {
    return this.getStringAttribute('nodefs_inodes_free');
  }
  public set nodefsInodesFree(value: string) {
    this._nodefsInodesFree = value;
  }
  public resetNodefsInodesFree() {
    this._nodefsInodesFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodefsInodesFreeInput() {
    return this._nodefsInodesFree;
  }

  // pid_available - computed: false, optional: true, required: false
  private _pidAvailable?: string; 
  public get pidAvailable() {
    return this.getStringAttribute('pid_available');
  }
  public set pidAvailable(value: string) {
    this._pidAvailable = value;
  }
  public resetPidAvailable() {
    this._pidAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidAvailableInput() {
    return this._pidAvailable;
  }
}
export interface ContainerNodePoolNodeConfigKubeletConfigEvictionSoft {
  /**
  * Defines percentage of soft eviction threshold for imagefs.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#imagefs_available ContainerNodePool#imagefs_available}
  */
  readonly imagefsAvailable?: string;
  /**
  * Defines percentage of soft eviction threshold for imagefs.inodesFree.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#imagefs_inodes_free ContainerNodePool#imagefs_inodes_free}
  */
  readonly imagefsInodesFree?: string;
  /**
  * Defines quantity of soft eviction threshold for memory.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#memory_available ContainerNodePool#memory_available}
  */
  readonly memoryAvailable?: string;
  /**
  * Defines percentage of soft eviction threshold for nodefs.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#nodefs_available ContainerNodePool#nodefs_available}
  */
  readonly nodefsAvailable?: string;
  /**
  * Defines percentage of soft eviction threshold for nodefs.inodesFree.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#nodefs_inodes_free ContainerNodePool#nodefs_inodes_free}
  */
  readonly nodefsInodesFree?: string;
  /**
  * Defines percentage of soft eviction threshold for pid.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#pid_available ContainerNodePool#pid_available}
  */
  readonly pidAvailable?: string;
}

export function containerNodePoolNodeConfigKubeletConfigEvictionSoftToTerraform(struct?: ContainerNodePoolNodeConfigKubeletConfigEvictionSoftOutputReference | ContainerNodePoolNodeConfigKubeletConfigEvictionSoft): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    imagefs_available: cdktn.stringToTerraform(struct!.imagefsAvailable),
    imagefs_inodes_free: cdktn.stringToTerraform(struct!.imagefsInodesFree),
    memory_available: cdktn.stringToTerraform(struct!.memoryAvailable),
    nodefs_available: cdktn.stringToTerraform(struct!.nodefsAvailable),
    nodefs_inodes_free: cdktn.stringToTerraform(struct!.nodefsInodesFree),
    pid_available: cdktn.stringToTerraform(struct!.pidAvailable),
  }
}


export function containerNodePoolNodeConfigKubeletConfigEvictionSoftToHclTerraform(struct?: ContainerNodePoolNodeConfigKubeletConfigEvictionSoftOutputReference | ContainerNodePoolNodeConfigKubeletConfigEvictionSoft): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    imagefs_available: {
      value: cdktn.stringToHclTerraform(struct!.imagefsAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imagefs_inodes_free: {
      value: cdktn.stringToHclTerraform(struct!.imagefsInodesFree),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_available: {
      value: cdktn.stringToHclTerraform(struct!.memoryAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodefs_available: {
      value: cdktn.stringToHclTerraform(struct!.nodefsAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodefs_inodes_free: {
      value: cdktn.stringToHclTerraform(struct!.nodefsInodesFree),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pid_available: {
      value: cdktn.stringToHclTerraform(struct!.pidAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigKubeletConfigEvictionSoftOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigKubeletConfigEvictionSoft | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imagefsAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagefsAvailable = this._imagefsAvailable;
    }
    if (this._imagefsInodesFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagefsInodesFree = this._imagefsInodesFree;
    }
    if (this._memoryAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryAvailable = this._memoryAvailable;
    }
    if (this._nodefsAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodefsAvailable = this._nodefsAvailable;
    }
    if (this._nodefsInodesFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodefsInodesFree = this._nodefsInodesFree;
    }
    if (this._pidAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.pidAvailable = this._pidAvailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigKubeletConfigEvictionSoft | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imagefsAvailable = undefined;
      this._imagefsInodesFree = undefined;
      this._memoryAvailable = undefined;
      this._nodefsAvailable = undefined;
      this._nodefsInodesFree = undefined;
      this._pidAvailable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imagefsAvailable = value.imagefsAvailable;
      this._imagefsInodesFree = value.imagefsInodesFree;
      this._memoryAvailable = value.memoryAvailable;
      this._nodefsAvailable = value.nodefsAvailable;
      this._nodefsInodesFree = value.nodefsInodesFree;
      this._pidAvailable = value.pidAvailable;
    }
  }

  // imagefs_available - computed: false, optional: true, required: false
  private _imagefsAvailable?: string; 
  public get imagefsAvailable() {
    return this.getStringAttribute('imagefs_available');
  }
  public set imagefsAvailable(value: string) {
    this._imagefsAvailable = value;
  }
  public resetImagefsAvailable() {
    this._imagefsAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagefsAvailableInput() {
    return this._imagefsAvailable;
  }

  // imagefs_inodes_free - computed: false, optional: true, required: false
  private _imagefsInodesFree?: string; 
  public get imagefsInodesFree() {
    return this.getStringAttribute('imagefs_inodes_free');
  }
  public set imagefsInodesFree(value: string) {
    this._imagefsInodesFree = value;
  }
  public resetImagefsInodesFree() {
    this._imagefsInodesFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagefsInodesFreeInput() {
    return this._imagefsInodesFree;
  }

  // memory_available - computed: false, optional: true, required: false
  private _memoryAvailable?: string; 
  public get memoryAvailable() {
    return this.getStringAttribute('memory_available');
  }
  public set memoryAvailable(value: string) {
    this._memoryAvailable = value;
  }
  public resetMemoryAvailable() {
    this._memoryAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryAvailableInput() {
    return this._memoryAvailable;
  }

  // nodefs_available - computed: false, optional: true, required: false
  private _nodefsAvailable?: string; 
  public get nodefsAvailable() {
    return this.getStringAttribute('nodefs_available');
  }
  public set nodefsAvailable(value: string) {
    this._nodefsAvailable = value;
  }
  public resetNodefsAvailable() {
    this._nodefsAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodefsAvailableInput() {
    return this._nodefsAvailable;
  }

  // nodefs_inodes_free - computed: false, optional: true, required: false
  private _nodefsInodesFree?: string; 
  public get nodefsInodesFree() {
    return this.getStringAttribute('nodefs_inodes_free');
  }
  public set nodefsInodesFree(value: string) {
    this._nodefsInodesFree = value;
  }
  public resetNodefsInodesFree() {
    this._nodefsInodesFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodefsInodesFreeInput() {
    return this._nodefsInodesFree;
  }

  // pid_available - computed: false, optional: true, required: false
  private _pidAvailable?: string; 
  public get pidAvailable() {
    return this.getStringAttribute('pid_available');
  }
  public set pidAvailable(value: string) {
    this._pidAvailable = value;
  }
  public resetPidAvailable() {
    this._pidAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidAvailableInput() {
    return this._pidAvailable;
  }
}
export interface ContainerNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriod {
  /**
  * Defines grace period for the imagefs.available soft eviction threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#imagefs_available ContainerNodePool#imagefs_available}
  */
  readonly imagefsAvailable?: string;
  /**
  * Defines grace period for the imagefs.inodesFree soft eviction threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#imagefs_inodes_free ContainerNodePool#imagefs_inodes_free}
  */
  readonly imagefsInodesFree?: string;
  /**
  * Defines grace period for the memory.available soft eviction threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#memory_available ContainerNodePool#memory_available}
  */
  readonly memoryAvailable?: string;
  /**
  * Defines grace period for the nodefs.available soft eviction threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#nodefs_available ContainerNodePool#nodefs_available}
  */
  readonly nodefsAvailable?: string;
  /**
  * Defines grace period for the nodefs.inodesFree soft eviction threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#nodefs_inodes_free ContainerNodePool#nodefs_inodes_free}
  */
  readonly nodefsInodesFree?: string;
  /**
  * Defines grace period for the pid.available soft eviction threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#pid_available ContainerNodePool#pid_available}
  */
  readonly pidAvailable?: string;
}

export function containerNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriodToTerraform(struct?: ContainerNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriodOutputReference | ContainerNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    imagefs_available: cdktn.stringToTerraform(struct!.imagefsAvailable),
    imagefs_inodes_free: cdktn.stringToTerraform(struct!.imagefsInodesFree),
    memory_available: cdktn.stringToTerraform(struct!.memoryAvailable),
    nodefs_available: cdktn.stringToTerraform(struct!.nodefsAvailable),
    nodefs_inodes_free: cdktn.stringToTerraform(struct!.nodefsInodesFree),
    pid_available: cdktn.stringToTerraform(struct!.pidAvailable),
  }
}


export function containerNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriodToHclTerraform(struct?: ContainerNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriodOutputReference | ContainerNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    imagefs_available: {
      value: cdktn.stringToHclTerraform(struct!.imagefsAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imagefs_inodes_free: {
      value: cdktn.stringToHclTerraform(struct!.imagefsInodesFree),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_available: {
      value: cdktn.stringToHclTerraform(struct!.memoryAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodefs_available: {
      value: cdktn.stringToHclTerraform(struct!.nodefsAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodefs_inodes_free: {
      value: cdktn.stringToHclTerraform(struct!.nodefsInodesFree),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pid_available: {
      value: cdktn.stringToHclTerraform(struct!.pidAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriodOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imagefsAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagefsAvailable = this._imagefsAvailable;
    }
    if (this._imagefsInodesFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagefsInodesFree = this._imagefsInodesFree;
    }
    if (this._memoryAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryAvailable = this._memoryAvailable;
    }
    if (this._nodefsAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodefsAvailable = this._nodefsAvailable;
    }
    if (this._nodefsInodesFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodefsInodesFree = this._nodefsInodesFree;
    }
    if (this._pidAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.pidAvailable = this._pidAvailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imagefsAvailable = undefined;
      this._imagefsInodesFree = undefined;
      this._memoryAvailable = undefined;
      this._nodefsAvailable = undefined;
      this._nodefsInodesFree = undefined;
      this._pidAvailable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imagefsAvailable = value.imagefsAvailable;
      this._imagefsInodesFree = value.imagefsInodesFree;
      this._memoryAvailable = value.memoryAvailable;
      this._nodefsAvailable = value.nodefsAvailable;
      this._nodefsInodesFree = value.nodefsInodesFree;
      this._pidAvailable = value.pidAvailable;
    }
  }

  // imagefs_available - computed: false, optional: true, required: false
  private _imagefsAvailable?: string; 
  public get imagefsAvailable() {
    return this.getStringAttribute('imagefs_available');
  }
  public set imagefsAvailable(value: string) {
    this._imagefsAvailable = value;
  }
  public resetImagefsAvailable() {
    this._imagefsAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagefsAvailableInput() {
    return this._imagefsAvailable;
  }

  // imagefs_inodes_free - computed: false, optional: true, required: false
  private _imagefsInodesFree?: string; 
  public get imagefsInodesFree() {
    return this.getStringAttribute('imagefs_inodes_free');
  }
  public set imagefsInodesFree(value: string) {
    this._imagefsInodesFree = value;
  }
  public resetImagefsInodesFree() {
    this._imagefsInodesFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagefsInodesFreeInput() {
    return this._imagefsInodesFree;
  }

  // memory_available - computed: false, optional: true, required: false
  private _memoryAvailable?: string; 
  public get memoryAvailable() {
    return this.getStringAttribute('memory_available');
  }
  public set memoryAvailable(value: string) {
    this._memoryAvailable = value;
  }
  public resetMemoryAvailable() {
    this._memoryAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryAvailableInput() {
    return this._memoryAvailable;
  }

  // nodefs_available - computed: false, optional: true, required: false
  private _nodefsAvailable?: string; 
  public get nodefsAvailable() {
    return this.getStringAttribute('nodefs_available');
  }
  public set nodefsAvailable(value: string) {
    this._nodefsAvailable = value;
  }
  public resetNodefsAvailable() {
    this._nodefsAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodefsAvailableInput() {
    return this._nodefsAvailable;
  }

  // nodefs_inodes_free - computed: false, optional: true, required: false
  private _nodefsInodesFree?: string; 
  public get nodefsInodesFree() {
    return this.getStringAttribute('nodefs_inodes_free');
  }
  public set nodefsInodesFree(value: string) {
    this._nodefsInodesFree = value;
  }
  public resetNodefsInodesFree() {
    this._nodefsInodesFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodefsInodesFreeInput() {
    return this._nodefsInodesFree;
  }

  // pid_available - computed: false, optional: true, required: false
  private _pidAvailable?: string; 
  public get pidAvailable() {
    return this.getStringAttribute('pid_available');
  }
  public set pidAvailable(value: string) {
    this._pidAvailable = value;
  }
  public resetPidAvailable() {
    this._pidAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidAvailableInput() {
    return this._pidAvailable;
  }
}
export interface ContainerNodePoolNodeConfigKubeletConfigMemoryManager {
  /**
  * The Memory Manager policy to use. This policy guides how memory and hugepages are allocated and managed for pods on the node, influencing NUMA affinity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#policy ContainerNodePool#policy}
  */
  readonly policy?: string;
}

export function containerNodePoolNodeConfigKubeletConfigMemoryManagerToTerraform(struct?: ContainerNodePoolNodeConfigKubeletConfigMemoryManagerOutputReference | ContainerNodePoolNodeConfigKubeletConfigMemoryManager): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktn.stringToTerraform(struct!.policy),
  }
}


export function containerNodePoolNodeConfigKubeletConfigMemoryManagerToHclTerraform(struct?: ContainerNodePoolNodeConfigKubeletConfigMemoryManagerOutputReference | ContainerNodePoolNodeConfigKubeletConfigMemoryManager): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktn.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigKubeletConfigMemoryManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigKubeletConfigMemoryManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigKubeletConfigMemoryManager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policy = value.policy;
    }
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }
}
export interface ContainerNodePoolNodeConfigKubeletConfigTopologyManager {
  /**
  * The Topology Manager policy to use. This policy dictates how resource alignment is handled on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#policy ContainerNodePool#policy}
  */
  readonly policy?: string;
  /**
  * The Topology Manager scope, defining the granularity at which policy decisions are applied. Valid values are "container" (resources are aligned per container within a pod) or "pod" (resources are aligned for the entire pod).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#scope ContainerNodePool#scope}
  */
  readonly scope?: string;
}

export function containerNodePoolNodeConfigKubeletConfigTopologyManagerToTerraform(struct?: ContainerNodePoolNodeConfigKubeletConfigTopologyManagerOutputReference | ContainerNodePoolNodeConfigKubeletConfigTopologyManager): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktn.stringToTerraform(struct!.policy),
    scope: cdktn.stringToTerraform(struct!.scope),
  }
}


export function containerNodePoolNodeConfigKubeletConfigTopologyManagerToHclTerraform(struct?: ContainerNodePoolNodeConfigKubeletConfigTopologyManagerOutputReference | ContainerNodePoolNodeConfigKubeletConfigTopologyManager): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktn.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigKubeletConfigTopologyManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigKubeletConfigTopologyManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigKubeletConfigTopologyManager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policy = undefined;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policy = value.policy;
      this._scope = value.scope;
    }
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface ContainerNodePoolNodeConfigKubeletConfig {
  /**
  * Defines a comma-separated allowlist of unsafe sysctls or sysctl patterns which can be set on the Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#allowed_unsafe_sysctls ContainerNodePool#allowed_unsafe_sysctls}
  */
  readonly allowedUnsafeSysctls?: string[];
  /**
  * Defines the maximum number of container log files that can be present for a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#container_log_max_files ContainerNodePool#container_log_max_files}
  */
  readonly containerLogMaxFiles?: number;
  /**
  * Defines the maximum size of the container log file before it is rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#container_log_max_size ContainerNodePool#container_log_max_size}
  */
  readonly containerLogMaxSize?: string;
  /**
  * Enable CPU CFS quota enforcement for containers that specify CPU limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#cpu_cfs_quota ContainerNodePool#cpu_cfs_quota}
  */
  readonly cpuCfsQuota?: boolean | cdktn.IResolvable;
  /**
  * Set the CPU CFS quota period value 'cpu.cfs_period_us'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#cpu_cfs_quota_period ContainerNodePool#cpu_cfs_quota_period}
  */
  readonly cpuCfsQuotaPeriod?: string;
  /**
  * Control the CPU management policy on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#cpu_manager_policy ContainerNodePool#cpu_manager_policy}
  */
  readonly cpuManagerPolicy?: string;
  /**
  * Defines the maximum allowed grace period (in seconds) to use when terminating pods in response to a soft eviction threshold being met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#eviction_max_pod_grace_period_seconds ContainerNodePool#eviction_max_pod_grace_period_seconds}
  */
  readonly evictionMaxPodGracePeriodSeconds?: number;
  /**
  * Defines the percent of disk usage after which image garbage collection is always run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#image_gc_high_threshold_percent ContainerNodePool#image_gc_high_threshold_percent}
  */
  readonly imageGcHighThresholdPercent?: number;
  /**
  * Defines the percent of disk usage before which image garbage collection is never run. Lowest disk usage to garbage collect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#image_gc_low_threshold_percent ContainerNodePool#image_gc_low_threshold_percent}
  */
  readonly imageGcLowThresholdPercent?: number;
  /**
  * Defines the maximum age an image can be unused before it is garbage collected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#image_maximum_gc_age ContainerNodePool#image_maximum_gc_age}
  */
  readonly imageMaximumGcAge?: string;
  /**
  * Defines the minimum age for an unused image before it is garbage collected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#image_minimum_gc_age ContainerNodePool#image_minimum_gc_age}
  */
  readonly imageMinimumGcAge?: string;
  /**
  * Controls whether the kubelet read-only port is enabled. It is strongly recommended to set this to `FALSE`. Possible values: `TRUE`, `FALSE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#insecure_kubelet_readonly_port_enabled ContainerNodePool#insecure_kubelet_readonly_port_enabled}
  */
  readonly insecureKubeletReadonlyPortEnabled?: string;
  /**
  * Set the maximum number of image pulls in parallel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#max_parallel_image_pulls ContainerNodePool#max_parallel_image_pulls}
  */
  readonly maxParallelImagePulls?: number;
  /**
  * Controls the maximum number of processes allowed to run in a pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#pod_pids_limit ContainerNodePool#pod_pids_limit}
  */
  readonly podPidsLimit?: number;
  /**
  * Defines whether to enable single process OOM killer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#single_process_oom_kill ContainerNodePool#single_process_oom_kill}
  */
  readonly singleProcessOomKill?: boolean | cdktn.IResolvable;
  /**
  * eviction_minimum_reclaim block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#eviction_minimum_reclaim ContainerNodePool#eviction_minimum_reclaim}
  */
  readonly evictionMinimumReclaim?: ContainerNodePoolNodeConfigKubeletConfigEvictionMinimumReclaim;
  /**
  * eviction_soft block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#eviction_soft ContainerNodePool#eviction_soft}
  */
  readonly evictionSoft?: ContainerNodePoolNodeConfigKubeletConfigEvictionSoft;
  /**
  * eviction_soft_grace_period block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#eviction_soft_grace_period ContainerNodePool#eviction_soft_grace_period}
  */
  readonly evictionSoftGracePeriod?: ContainerNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriod;
  /**
  * memory_manager block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#memory_manager ContainerNodePool#memory_manager}
  */
  readonly memoryManager?: ContainerNodePoolNodeConfigKubeletConfigMemoryManager;
  /**
  * topology_manager block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#topology_manager ContainerNodePool#topology_manager}
  */
  readonly topologyManager?: ContainerNodePoolNodeConfigKubeletConfigTopologyManager;
}

export function containerNodePoolNodeConfigKubeletConfigToTerraform(struct?: ContainerNodePoolNodeConfigKubeletConfigOutputReference | ContainerNodePoolNodeConfigKubeletConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_unsafe_sysctls: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedUnsafeSysctls),
    container_log_max_files: cdktn.numberToTerraform(struct!.containerLogMaxFiles),
    container_log_max_size: cdktn.stringToTerraform(struct!.containerLogMaxSize),
    cpu_cfs_quota: cdktn.booleanToTerraform(struct!.cpuCfsQuota),
    cpu_cfs_quota_period: cdktn.stringToTerraform(struct!.cpuCfsQuotaPeriod),
    cpu_manager_policy: cdktn.stringToTerraform(struct!.cpuManagerPolicy),
    eviction_max_pod_grace_period_seconds: cdktn.numberToTerraform(struct!.evictionMaxPodGracePeriodSeconds),
    image_gc_high_threshold_percent: cdktn.numberToTerraform(struct!.imageGcHighThresholdPercent),
    image_gc_low_threshold_percent: cdktn.numberToTerraform(struct!.imageGcLowThresholdPercent),
    image_maximum_gc_age: cdktn.stringToTerraform(struct!.imageMaximumGcAge),
    image_minimum_gc_age: cdktn.stringToTerraform(struct!.imageMinimumGcAge),
    insecure_kubelet_readonly_port_enabled: cdktn.stringToTerraform(struct!.insecureKubeletReadonlyPortEnabled),
    max_parallel_image_pulls: cdktn.numberToTerraform(struct!.maxParallelImagePulls),
    pod_pids_limit: cdktn.numberToTerraform(struct!.podPidsLimit),
    single_process_oom_kill: cdktn.booleanToTerraform(struct!.singleProcessOomKill),
    eviction_minimum_reclaim: containerNodePoolNodeConfigKubeletConfigEvictionMinimumReclaimToTerraform(struct!.evictionMinimumReclaim),
    eviction_soft: containerNodePoolNodeConfigKubeletConfigEvictionSoftToTerraform(struct!.evictionSoft),
    eviction_soft_grace_period: containerNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriodToTerraform(struct!.evictionSoftGracePeriod),
    memory_manager: containerNodePoolNodeConfigKubeletConfigMemoryManagerToTerraform(struct!.memoryManager),
    topology_manager: containerNodePoolNodeConfigKubeletConfigTopologyManagerToTerraform(struct!.topologyManager),
  }
}


export function containerNodePoolNodeConfigKubeletConfigToHclTerraform(struct?: ContainerNodePoolNodeConfigKubeletConfigOutputReference | ContainerNodePoolNodeConfigKubeletConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_unsafe_sysctls: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedUnsafeSysctls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container_log_max_files: {
      value: cdktn.numberToHclTerraform(struct!.containerLogMaxFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    container_log_max_size: {
      value: cdktn.stringToHclTerraform(struct!.containerLogMaxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_cfs_quota: {
      value: cdktn.booleanToHclTerraform(struct!.cpuCfsQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cpu_cfs_quota_period: {
      value: cdktn.stringToHclTerraform(struct!.cpuCfsQuotaPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_manager_policy: {
      value: cdktn.stringToHclTerraform(struct!.cpuManagerPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eviction_max_pod_grace_period_seconds: {
      value: cdktn.numberToHclTerraform(struct!.evictionMaxPodGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_gc_high_threshold_percent: {
      value: cdktn.numberToHclTerraform(struct!.imageGcHighThresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_gc_low_threshold_percent: {
      value: cdktn.numberToHclTerraform(struct!.imageGcLowThresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_maximum_gc_age: {
      value: cdktn.stringToHclTerraform(struct!.imageMaximumGcAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_minimum_gc_age: {
      value: cdktn.stringToHclTerraform(struct!.imageMinimumGcAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_kubelet_readonly_port_enabled: {
      value: cdktn.stringToHclTerraform(struct!.insecureKubeletReadonlyPortEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_parallel_image_pulls: {
      value: cdktn.numberToHclTerraform(struct!.maxParallelImagePulls),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod_pids_limit: {
      value: cdktn.numberToHclTerraform(struct!.podPidsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    single_process_oom_kill: {
      value: cdktn.booleanToHclTerraform(struct!.singleProcessOomKill),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    eviction_minimum_reclaim: {
      value: containerNodePoolNodeConfigKubeletConfigEvictionMinimumReclaimToHclTerraform(struct!.evictionMinimumReclaim),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigKubeletConfigEvictionMinimumReclaimList",
    },
    eviction_soft: {
      value: containerNodePoolNodeConfigKubeletConfigEvictionSoftToHclTerraform(struct!.evictionSoft),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigKubeletConfigEvictionSoftList",
    },
    eviction_soft_grace_period: {
      value: containerNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriodToHclTerraform(struct!.evictionSoftGracePeriod),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriodList",
    },
    memory_manager: {
      value: containerNodePoolNodeConfigKubeletConfigMemoryManagerToHclTerraform(struct!.memoryManager),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigKubeletConfigMemoryManagerList",
    },
    topology_manager: {
      value: containerNodePoolNodeConfigKubeletConfigTopologyManagerToHclTerraform(struct!.topologyManager),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigKubeletConfigTopologyManagerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigKubeletConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigKubeletConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedUnsafeSysctls !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedUnsafeSysctls = this._allowedUnsafeSysctls;
    }
    if (this._containerLogMaxFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogMaxFiles = this._containerLogMaxFiles;
    }
    if (this._containerLogMaxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogMaxSize = this._containerLogMaxSize;
    }
    if (this._cpuCfsQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuota = this._cpuCfsQuota;
    }
    if (this._cpuCfsQuotaPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuotaPeriod = this._cpuCfsQuotaPeriod;
    }
    if (this._cpuManagerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuManagerPolicy = this._cpuManagerPolicy;
    }
    if (this._evictionMaxPodGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionMaxPodGracePeriodSeconds = this._evictionMaxPodGracePeriodSeconds;
    }
    if (this._imageGcHighThresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGcHighThresholdPercent = this._imageGcHighThresholdPercent;
    }
    if (this._imageGcLowThresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGcLowThresholdPercent = this._imageGcLowThresholdPercent;
    }
    if (this._imageMaximumGcAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageMaximumGcAge = this._imageMaximumGcAge;
    }
    if (this._imageMinimumGcAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageMinimumGcAge = this._imageMinimumGcAge;
    }
    if (this._insecureKubeletReadonlyPortEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureKubeletReadonlyPortEnabled = this._insecureKubeletReadonlyPortEnabled;
    }
    if (this._maxParallelImagePulls !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParallelImagePulls = this._maxParallelImagePulls;
    }
    if (this._podPidsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.podPidsLimit = this._podPidsLimit;
    }
    if (this._singleProcessOomKill !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleProcessOomKill = this._singleProcessOomKill;
    }
    if (this._evictionMinimumReclaim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionMinimumReclaim = this._evictionMinimumReclaim?.internalValue;
    }
    if (this._evictionSoft?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionSoft = this._evictionSoft?.internalValue;
    }
    if (this._evictionSoftGracePeriod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionSoftGracePeriod = this._evictionSoftGracePeriod?.internalValue;
    }
    if (this._memoryManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryManager = this._memoryManager?.internalValue;
    }
    if (this._topologyManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyManager = this._topologyManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigKubeletConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedUnsafeSysctls = undefined;
      this._containerLogMaxFiles = undefined;
      this._containerLogMaxSize = undefined;
      this._cpuCfsQuota = undefined;
      this._cpuCfsQuotaPeriod = undefined;
      this._cpuManagerPolicy = undefined;
      this._evictionMaxPodGracePeriodSeconds = undefined;
      this._imageGcHighThresholdPercent = undefined;
      this._imageGcLowThresholdPercent = undefined;
      this._imageMaximumGcAge = undefined;
      this._imageMinimumGcAge = undefined;
      this._insecureKubeletReadonlyPortEnabled = undefined;
      this._maxParallelImagePulls = undefined;
      this._podPidsLimit = undefined;
      this._singleProcessOomKill = undefined;
      this._evictionMinimumReclaim.internalValue = undefined;
      this._evictionSoft.internalValue = undefined;
      this._evictionSoftGracePeriod.internalValue = undefined;
      this._memoryManager.internalValue = undefined;
      this._topologyManager.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedUnsafeSysctls = value.allowedUnsafeSysctls;
      this._containerLogMaxFiles = value.containerLogMaxFiles;
      this._containerLogMaxSize = value.containerLogMaxSize;
      this._cpuCfsQuota = value.cpuCfsQuota;
      this._cpuCfsQuotaPeriod = value.cpuCfsQuotaPeriod;
      this._cpuManagerPolicy = value.cpuManagerPolicy;
      this._evictionMaxPodGracePeriodSeconds = value.evictionMaxPodGracePeriodSeconds;
      this._imageGcHighThresholdPercent = value.imageGcHighThresholdPercent;
      this._imageGcLowThresholdPercent = value.imageGcLowThresholdPercent;
      this._imageMaximumGcAge = value.imageMaximumGcAge;
      this._imageMinimumGcAge = value.imageMinimumGcAge;
      this._insecureKubeletReadonlyPortEnabled = value.insecureKubeletReadonlyPortEnabled;
      this._maxParallelImagePulls = value.maxParallelImagePulls;
      this._podPidsLimit = value.podPidsLimit;
      this._singleProcessOomKill = value.singleProcessOomKill;
      this._evictionMinimumReclaim.internalValue = value.evictionMinimumReclaim;
      this._evictionSoft.internalValue = value.evictionSoft;
      this._evictionSoftGracePeriod.internalValue = value.evictionSoftGracePeriod;
      this._memoryManager.internalValue = value.memoryManager;
      this._topologyManager.internalValue = value.topologyManager;
    }
  }

  // allowed_unsafe_sysctls - computed: false, optional: true, required: false
  private _allowedUnsafeSysctls?: string[]; 
  public get allowedUnsafeSysctls() {
    return this.getListAttribute('allowed_unsafe_sysctls');
  }
  public set allowedUnsafeSysctls(value: string[]) {
    this._allowedUnsafeSysctls = value;
  }
  public resetAllowedUnsafeSysctls() {
    this._allowedUnsafeSysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUnsafeSysctlsInput() {
    return this._allowedUnsafeSysctls;
  }

  // container_log_max_files - computed: false, optional: true, required: false
  private _containerLogMaxFiles?: number; 
  public get containerLogMaxFiles() {
    return this.getNumberAttribute('container_log_max_files');
  }
  public set containerLogMaxFiles(value: number) {
    this._containerLogMaxFiles = value;
  }
  public resetContainerLogMaxFiles() {
    this._containerLogMaxFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogMaxFilesInput() {
    return this._containerLogMaxFiles;
  }

  // container_log_max_size - computed: false, optional: true, required: false
  private _containerLogMaxSize?: string; 
  public get containerLogMaxSize() {
    return this.getStringAttribute('container_log_max_size');
  }
  public set containerLogMaxSize(value: string) {
    this._containerLogMaxSize = value;
  }
  public resetContainerLogMaxSize() {
    this._containerLogMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogMaxSizeInput() {
    return this._containerLogMaxSize;
  }

  // cpu_cfs_quota - computed: true, optional: true, required: false
  private _cpuCfsQuota?: boolean | cdktn.IResolvable; 
  public get cpuCfsQuota() {
    return this.getBooleanAttribute('cpu_cfs_quota');
  }
  public set cpuCfsQuota(value: boolean | cdktn.IResolvable) {
    this._cpuCfsQuota = value;
  }
  public resetCpuCfsQuota() {
    this._cpuCfsQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaInput() {
    return this._cpuCfsQuota;
  }

  // cpu_cfs_quota_period - computed: false, optional: true, required: false
  private _cpuCfsQuotaPeriod?: string; 
  public get cpuCfsQuotaPeriod() {
    return this.getStringAttribute('cpu_cfs_quota_period');
  }
  public set cpuCfsQuotaPeriod(value: string) {
    this._cpuCfsQuotaPeriod = value;
  }
  public resetCpuCfsQuotaPeriod() {
    this._cpuCfsQuotaPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaPeriodInput() {
    return this._cpuCfsQuotaPeriod;
  }

  // cpu_manager_policy - computed: false, optional: true, required: false
  private _cpuManagerPolicy?: string; 
  public get cpuManagerPolicy() {
    return this.getStringAttribute('cpu_manager_policy');
  }
  public set cpuManagerPolicy(value: string) {
    this._cpuManagerPolicy = value;
  }
  public resetCpuManagerPolicy() {
    this._cpuManagerPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuManagerPolicyInput() {
    return this._cpuManagerPolicy;
  }

  // eviction_max_pod_grace_period_seconds - computed: false, optional: true, required: false
  private _evictionMaxPodGracePeriodSeconds?: number; 
  public get evictionMaxPodGracePeriodSeconds() {
    return this.getNumberAttribute('eviction_max_pod_grace_period_seconds');
  }
  public set evictionMaxPodGracePeriodSeconds(value: number) {
    this._evictionMaxPodGracePeriodSeconds = value;
  }
  public resetEvictionMaxPodGracePeriodSeconds() {
    this._evictionMaxPodGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionMaxPodGracePeriodSecondsInput() {
    return this._evictionMaxPodGracePeriodSeconds;
  }

  // image_gc_high_threshold_percent - computed: false, optional: true, required: false
  private _imageGcHighThresholdPercent?: number; 
  public get imageGcHighThresholdPercent() {
    return this.getNumberAttribute('image_gc_high_threshold_percent');
  }
  public set imageGcHighThresholdPercent(value: number) {
    this._imageGcHighThresholdPercent = value;
  }
  public resetImageGcHighThresholdPercent() {
    this._imageGcHighThresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcHighThresholdPercentInput() {
    return this._imageGcHighThresholdPercent;
  }

  // image_gc_low_threshold_percent - computed: false, optional: true, required: false
  private _imageGcLowThresholdPercent?: number; 
  public get imageGcLowThresholdPercent() {
    return this.getNumberAttribute('image_gc_low_threshold_percent');
  }
  public set imageGcLowThresholdPercent(value: number) {
    this._imageGcLowThresholdPercent = value;
  }
  public resetImageGcLowThresholdPercent() {
    this._imageGcLowThresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcLowThresholdPercentInput() {
    return this._imageGcLowThresholdPercent;
  }

  // image_maximum_gc_age - computed: false, optional: true, required: false
  private _imageMaximumGcAge?: string; 
  public get imageMaximumGcAge() {
    return this.getStringAttribute('image_maximum_gc_age');
  }
  public set imageMaximumGcAge(value: string) {
    this._imageMaximumGcAge = value;
  }
  public resetImageMaximumGcAge() {
    this._imageMaximumGcAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageMaximumGcAgeInput() {
    return this._imageMaximumGcAge;
  }

  // image_minimum_gc_age - computed: false, optional: true, required: false
  private _imageMinimumGcAge?: string; 
  public get imageMinimumGcAge() {
    return this.getStringAttribute('image_minimum_gc_age');
  }
  public set imageMinimumGcAge(value: string) {
    this._imageMinimumGcAge = value;
  }
  public resetImageMinimumGcAge() {
    this._imageMinimumGcAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageMinimumGcAgeInput() {
    return this._imageMinimumGcAge;
  }

  // insecure_kubelet_readonly_port_enabled - computed: true, optional: true, required: false
  private _insecureKubeletReadonlyPortEnabled?: string; 
  public get insecureKubeletReadonlyPortEnabled() {
    return this.getStringAttribute('insecure_kubelet_readonly_port_enabled');
  }
  public set insecureKubeletReadonlyPortEnabled(value: string) {
    this._insecureKubeletReadonlyPortEnabled = value;
  }
  public resetInsecureKubeletReadonlyPortEnabled() {
    this._insecureKubeletReadonlyPortEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureKubeletReadonlyPortEnabledInput() {
    return this._insecureKubeletReadonlyPortEnabled;
  }

  // max_parallel_image_pulls - computed: true, optional: true, required: false
  private _maxParallelImagePulls?: number; 
  public get maxParallelImagePulls() {
    return this.getNumberAttribute('max_parallel_image_pulls');
  }
  public set maxParallelImagePulls(value: number) {
    this._maxParallelImagePulls = value;
  }
  public resetMaxParallelImagePulls() {
    this._maxParallelImagePulls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParallelImagePullsInput() {
    return this._maxParallelImagePulls;
  }

  // pod_pids_limit - computed: false, optional: true, required: false
  private _podPidsLimit?: number; 
  public get podPidsLimit() {
    return this.getNumberAttribute('pod_pids_limit');
  }
  public set podPidsLimit(value: number) {
    this._podPidsLimit = value;
  }
  public resetPodPidsLimit() {
    this._podPidsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podPidsLimitInput() {
    return this._podPidsLimit;
  }

  // single_process_oom_kill - computed: false, optional: true, required: false
  private _singleProcessOomKill?: boolean | cdktn.IResolvable; 
  public get singleProcessOomKill() {
    return this.getBooleanAttribute('single_process_oom_kill');
  }
  public set singleProcessOomKill(value: boolean | cdktn.IResolvable) {
    this._singleProcessOomKill = value;
  }
  public resetSingleProcessOomKill() {
    this._singleProcessOomKill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleProcessOomKillInput() {
    return this._singleProcessOomKill;
  }

  // eviction_minimum_reclaim - computed: false, optional: true, required: false
  private _evictionMinimumReclaim = new ContainerNodePoolNodeConfigKubeletConfigEvictionMinimumReclaimOutputReference(this, "eviction_minimum_reclaim");
  public get evictionMinimumReclaim() {
    return this._evictionMinimumReclaim;
  }
  public putEvictionMinimumReclaim(value: ContainerNodePoolNodeConfigKubeletConfigEvictionMinimumReclaim) {
    this._evictionMinimumReclaim.internalValue = value;
  }
  public resetEvictionMinimumReclaim() {
    this._evictionMinimumReclaim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionMinimumReclaimInput() {
    return this._evictionMinimumReclaim.internalValue;
  }

  // eviction_soft - computed: false, optional: true, required: false
  private _evictionSoft = new ContainerNodePoolNodeConfigKubeletConfigEvictionSoftOutputReference(this, "eviction_soft");
  public get evictionSoft() {
    return this._evictionSoft;
  }
  public putEvictionSoft(value: ContainerNodePoolNodeConfigKubeletConfigEvictionSoft) {
    this._evictionSoft.internalValue = value;
  }
  public resetEvictionSoft() {
    this._evictionSoft.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionSoftInput() {
    return this._evictionSoft.internalValue;
  }

  // eviction_soft_grace_period - computed: false, optional: true, required: false
  private _evictionSoftGracePeriod = new ContainerNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriodOutputReference(this, "eviction_soft_grace_period");
  public get evictionSoftGracePeriod() {
    return this._evictionSoftGracePeriod;
  }
  public putEvictionSoftGracePeriod(value: ContainerNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriod) {
    this._evictionSoftGracePeriod.internalValue = value;
  }
  public resetEvictionSoftGracePeriod() {
    this._evictionSoftGracePeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionSoftGracePeriodInput() {
    return this._evictionSoftGracePeriod.internalValue;
  }

  // memory_manager - computed: false, optional: true, required: false
  private _memoryManager = new ContainerNodePoolNodeConfigKubeletConfigMemoryManagerOutputReference(this, "memory_manager");
  public get memoryManager() {
    return this._memoryManager;
  }
  public putMemoryManager(value: ContainerNodePoolNodeConfigKubeletConfigMemoryManager) {
    this._memoryManager.internalValue = value;
  }
  public resetMemoryManager() {
    this._memoryManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryManagerInput() {
    return this._memoryManager.internalValue;
  }

  // topology_manager - computed: false, optional: true, required: false
  private _topologyManager = new ContainerNodePoolNodeConfigKubeletConfigTopologyManagerOutputReference(this, "topology_manager");
  public get topologyManager() {
    return this._topologyManager;
  }
  public putTopologyManager(value: ContainerNodePoolNodeConfigKubeletConfigTopologyManager) {
    this._topologyManager.internalValue = value;
  }
  public resetTopologyManager() {
    this._topologyManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyManagerInput() {
    return this._topologyManager.internalValue;
  }
}
export interface ContainerNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfig {
  /**
  * Whether to enable accurate time synchronization with PTP-KVM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#enable_ptp_kvm_time_sync ContainerNodePool#enable_ptp_kvm_time_sync}
  */
  readonly enablePtpKvmTimeSync?: boolean | cdktn.IResolvable;
}

export function containerNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfigToTerraform(struct?: ContainerNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfigOutputReference | ContainerNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_ptp_kvm_time_sync: cdktn.booleanToTerraform(struct!.enablePtpKvmTimeSync),
  }
}


export function containerNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfigToHclTerraform(struct?: ContainerNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfigOutputReference | ContainerNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_ptp_kvm_time_sync: {
      value: cdktn.booleanToHclTerraform(struct!.enablePtpKvmTimeSync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablePtpKvmTimeSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePtpKvmTimeSync = this._enablePtpKvmTimeSync;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enablePtpKvmTimeSync = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enablePtpKvmTimeSync = value.enablePtpKvmTimeSync;
    }
  }

  // enable_ptp_kvm_time_sync - computed: false, optional: true, required: false
  private _enablePtpKvmTimeSync?: boolean | cdktn.IResolvable; 
  public get enablePtpKvmTimeSync() {
    return this.getBooleanAttribute('enable_ptp_kvm_time_sync');
  }
  public set enablePtpKvmTimeSync(value: boolean | cdktn.IResolvable) {
    this._enablePtpKvmTimeSync = value;
  }
  public resetEnablePtpKvmTimeSync() {
    this._enablePtpKvmTimeSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePtpKvmTimeSyncInput() {
    return this._enablePtpKvmTimeSync;
  }
}
export interface ContainerNodePoolNodeConfigLinuxNodeConfigHugepagesConfig {
  /**
  * Amount of 1G hugepages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#hugepage_size_1g ContainerNodePool#hugepage_size_1g}
  */
  readonly hugepageSize1G?: number;
  /**
  * Amount of 2M hugepages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#hugepage_size_2m ContainerNodePool#hugepage_size_2m}
  */
  readonly hugepageSize2M?: number;
}

export function containerNodePoolNodeConfigLinuxNodeConfigHugepagesConfigToTerraform(struct?: ContainerNodePoolNodeConfigLinuxNodeConfigHugepagesConfigOutputReference | ContainerNodePoolNodeConfigLinuxNodeConfigHugepagesConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hugepage_size_1g: cdktn.numberToTerraform(struct!.hugepageSize1G),
    hugepage_size_2m: cdktn.numberToTerraform(struct!.hugepageSize2M),
  }
}


export function containerNodePoolNodeConfigLinuxNodeConfigHugepagesConfigToHclTerraform(struct?: ContainerNodePoolNodeConfigLinuxNodeConfigHugepagesConfigOutputReference | ContainerNodePoolNodeConfigLinuxNodeConfigHugepagesConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hugepage_size_1g: {
      value: cdktn.numberToHclTerraform(struct!.hugepageSize1G),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hugepage_size_2m: {
      value: cdktn.numberToHclTerraform(struct!.hugepageSize2M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigLinuxNodeConfigHugepagesConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigLinuxNodeConfigHugepagesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hugepageSize1G !== undefined) {
      hasAnyValues = true;
      internalValueResult.hugepageSize1G = this._hugepageSize1G;
    }
    if (this._hugepageSize2M !== undefined) {
      hasAnyValues = true;
      internalValueResult.hugepageSize2M = this._hugepageSize2M;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigLinuxNodeConfigHugepagesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hugepageSize1G = undefined;
      this._hugepageSize2M = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hugepageSize1G = value.hugepageSize1G;
      this._hugepageSize2M = value.hugepageSize2M;
    }
  }

  // hugepage_size_1g - computed: false, optional: true, required: false
  private _hugepageSize1G?: number; 
  public get hugepageSize1G() {
    return this.getNumberAttribute('hugepage_size_1g');
  }
  public set hugepageSize1G(value: number) {
    this._hugepageSize1G = value;
  }
  public resetHugepageSize1G() {
    this._hugepageSize1G = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hugepageSize1GInput() {
    return this._hugepageSize1G;
  }

  // hugepage_size_2m - computed: false, optional: true, required: false
  private _hugepageSize2M?: number; 
  public get hugepageSize2M() {
    return this.getNumberAttribute('hugepage_size_2m');
  }
  public set hugepageSize2M(value: number) {
    this._hugepageSize2M = value;
  }
  public resetHugepageSize2M() {
    this._hugepageSize2M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hugepageSize2MInput() {
    return this._hugepageSize2M;
  }
}
export interface ContainerNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoading {
  /**
  * The policy for kernel module loading.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#policy ContainerNodePool#policy}
  */
  readonly policy?: string;
}

export function containerNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoadingToTerraform(struct?: ContainerNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoadingOutputReference | ContainerNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoading): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktn.stringToTerraform(struct!.policy),
  }
}


export function containerNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoadingToHclTerraform(struct?: ContainerNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoadingOutputReference | ContainerNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoading): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktn.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoadingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoading | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoading | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policy = value.policy;
    }
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }
}
export interface ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfile {
  /**
  * Specifies the size of the swap space in gibibytes (GiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#swap_size_gib ContainerNodePool#swap_size_gib}
  */
  readonly swapSizeGib?: number;
  /**
  * Specifies the size of the swap space as a percentage of the boot disk size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#swap_size_percent ContainerNodePool#swap_size_percent}
  */
  readonly swapSizePercent?: number;
}

export function containerNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileToTerraform(struct?: ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileOutputReference | ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    swap_size_gib: cdktn.numberToTerraform(struct!.swapSizeGib),
    swap_size_percent: cdktn.numberToTerraform(struct!.swapSizePercent),
  }
}


export function containerNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileToHclTerraform(struct?: ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileOutputReference | ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    swap_size_gib: {
      value: cdktn.numberToHclTerraform(struct!.swapSizeGib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    swap_size_percent: {
      value: cdktn.numberToHclTerraform(struct!.swapSizePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._swapSizeGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.swapSizeGib = this._swapSizeGib;
    }
    if (this._swapSizePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.swapSizePercent = this._swapSizePercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._swapSizeGib = undefined;
      this._swapSizePercent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._swapSizeGib = value.swapSizeGib;
      this._swapSizePercent = value.swapSizePercent;
    }
  }

  // swap_size_gib - computed: false, optional: true, required: false
  private _swapSizeGib?: number; 
  public get swapSizeGib() {
    return this.getNumberAttribute('swap_size_gib');
  }
  public set swapSizeGib(value: number) {
    this._swapSizeGib = value;
  }
  public resetSwapSizeGib() {
    this._swapSizeGib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swapSizeGibInput() {
    return this._swapSizeGib;
  }

  // swap_size_percent - computed: false, optional: true, required: false
  private _swapSizePercent?: number; 
  public get swapSizePercent() {
    return this.getNumberAttribute('swap_size_percent');
  }
  public set swapSizePercent(value: number) {
    this._swapSizePercent = value;
  }
  public resetSwapSizePercent() {
    this._swapSizePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swapSizePercentInput() {
    return this._swapSizePercent;
  }
}
export interface ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfile {
  /**
  * The number of physical local NVMe SSD disks to attach.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#disk_count ContainerNodePool#disk_count}
  */
  readonly diskCount?: number;
}

export function containerNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileToTerraform(struct?: ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileOutputReference | ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_count: cdktn.numberToTerraform(struct!.diskCount),
  }
}


export function containerNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileToHclTerraform(struct?: ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileOutputReference | ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_count: {
      value: cdktn.numberToHclTerraform(struct!.diskCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskCount = this._diskCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskCount = value.diskCount;
    }
  }

  // disk_count - computed: false, optional: true, required: false
  private _diskCount?: number; 
  public get diskCount() {
    return this.getNumberAttribute('disk_count');
  }
  public set diskCount(value: number) {
    this._diskCount = value;
  }
  public resetDiskCount() {
    this._diskCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskCountInput() {
    return this._diskCount;
  }
}
export interface ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfig {
  /**
  * If true, swap space will not be encrypted. Defaults to false (encrypted).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#disabled ContainerNodePool#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
}

export function containerNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigToTerraform(struct?: ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigOutputReference | ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktn.booleanToTerraform(struct!.disabled),
  }
}


export function containerNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigToHclTerraform(struct?: ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigOutputReference | ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktn.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktn.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfile {
  /**
  * Specifies the size of the swap space in gibibytes (GiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#swap_size_gib ContainerNodePool#swap_size_gib}
  */
  readonly swapSizeGib?: number;
  /**
  * Specifies the size of the swap space as a percentage of the ephemeral local SSD capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#swap_size_percent ContainerNodePool#swap_size_percent}
  */
  readonly swapSizePercent?: number;
}

export function containerNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileToTerraform(struct?: ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileOutputReference | ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    swap_size_gib: cdktn.numberToTerraform(struct!.swapSizeGib),
    swap_size_percent: cdktn.numberToTerraform(struct!.swapSizePercent),
  }
}


export function containerNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileToHclTerraform(struct?: ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileOutputReference | ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    swap_size_gib: {
      value: cdktn.numberToHclTerraform(struct!.swapSizeGib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    swap_size_percent: {
      value: cdktn.numberToHclTerraform(struct!.swapSizePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._swapSizeGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.swapSizeGib = this._swapSizeGib;
    }
    if (this._swapSizePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.swapSizePercent = this._swapSizePercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._swapSizeGib = undefined;
      this._swapSizePercent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._swapSizeGib = value.swapSizeGib;
      this._swapSizePercent = value.swapSizePercent;
    }
  }

  // swap_size_gib - computed: false, optional: true, required: false
  private _swapSizeGib?: number; 
  public get swapSizeGib() {
    return this.getNumberAttribute('swap_size_gib');
  }
  public set swapSizeGib(value: number) {
    this._swapSizeGib = value;
  }
  public resetSwapSizeGib() {
    this._swapSizeGib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swapSizeGibInput() {
    return this._swapSizeGib;
  }

  // swap_size_percent - computed: false, optional: true, required: false
  private _swapSizePercent?: number; 
  public get swapSizePercent() {
    return this.getNumberAttribute('swap_size_percent');
  }
  public set swapSizePercent(value: number) {
    this._swapSizePercent = value;
  }
  public resetSwapSizePercent() {
    this._swapSizePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swapSizePercentInput() {
    return this._swapSizePercent;
  }
}
export interface ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfig {
  /**
  * Enables or disables swap for the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#enabled ContainerNodePool#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * boot_disk_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#boot_disk_profile ContainerNodePool#boot_disk_profile}
  */
  readonly bootDiskProfile?: ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfile;
  /**
  * dedicated_local_ssd_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#dedicated_local_ssd_profile ContainerNodePool#dedicated_local_ssd_profile}
  */
  readonly dedicatedLocalSsdProfile?: ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfile;
  /**
  * encryption_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#encryption_config ContainerNodePool#encryption_config}
  */
  readonly encryptionConfig?: ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfig;
  /**
  * ephemeral_local_ssd_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#ephemeral_local_ssd_profile ContainerNodePool#ephemeral_local_ssd_profile}
  */
  readonly ephemeralLocalSsdProfile?: ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfile;
}

export function containerNodePoolNodeConfigLinuxNodeConfigSwapConfigToTerraform(struct?: ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigOutputReference | ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    boot_disk_profile: containerNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileToTerraform(struct!.bootDiskProfile),
    dedicated_local_ssd_profile: containerNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileToTerraform(struct!.dedicatedLocalSsdProfile),
    encryption_config: containerNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigToTerraform(struct!.encryptionConfig),
    ephemeral_local_ssd_profile: containerNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileToTerraform(struct!.ephemeralLocalSsdProfile),
  }
}


export function containerNodePoolNodeConfigLinuxNodeConfigSwapConfigToHclTerraform(struct?: ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigOutputReference | ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    boot_disk_profile: {
      value: containerNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileToHclTerraform(struct!.bootDiskProfile),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileList",
    },
    dedicated_local_ssd_profile: {
      value: containerNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileToHclTerraform(struct!.dedicatedLocalSsdProfile),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileList",
    },
    encryption_config: {
      value: containerNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigToHclTerraform(struct!.encryptionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigList",
    },
    ephemeral_local_ssd_profile: {
      value: containerNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileToHclTerraform(struct!.ephemeralLocalSsdProfile),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._bootDiskProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskProfile = this._bootDiskProfile?.internalValue;
    }
    if (this._dedicatedLocalSsdProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedLocalSsdProfile = this._dedicatedLocalSsdProfile?.internalValue;
    }
    if (this._encryptionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfig = this._encryptionConfig?.internalValue;
    }
    if (this._ephemeralLocalSsdProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralLocalSsdProfile = this._ephemeralLocalSsdProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._bootDiskProfile.internalValue = undefined;
      this._dedicatedLocalSsdProfile.internalValue = undefined;
      this._encryptionConfig.internalValue = undefined;
      this._ephemeralLocalSsdProfile.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._bootDiskProfile.internalValue = value.bootDiskProfile;
      this._dedicatedLocalSsdProfile.internalValue = value.dedicatedLocalSsdProfile;
      this._encryptionConfig.internalValue = value.encryptionConfig;
      this._ephemeralLocalSsdProfile.internalValue = value.ephemeralLocalSsdProfile;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // boot_disk_profile - computed: false, optional: true, required: false
  private _bootDiskProfile = new ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileOutputReference(this, "boot_disk_profile");
  public get bootDiskProfile() {
    return this._bootDiskProfile;
  }
  public putBootDiskProfile(value: ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfile) {
    this._bootDiskProfile.internalValue = value;
  }
  public resetBootDiskProfile() {
    this._bootDiskProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskProfileInput() {
    return this._bootDiskProfile.internalValue;
  }

  // dedicated_local_ssd_profile - computed: false, optional: true, required: false
  private _dedicatedLocalSsdProfile = new ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileOutputReference(this, "dedicated_local_ssd_profile");
  public get dedicatedLocalSsdProfile() {
    return this._dedicatedLocalSsdProfile;
  }
  public putDedicatedLocalSsdProfile(value: ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfile) {
    this._dedicatedLocalSsdProfile.internalValue = value;
  }
  public resetDedicatedLocalSsdProfile() {
    this._dedicatedLocalSsdProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedLocalSsdProfileInput() {
    return this._dedicatedLocalSsdProfile.internalValue;
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }

  // ephemeral_local_ssd_profile - computed: false, optional: true, required: false
  private _ephemeralLocalSsdProfile = new ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileOutputReference(this, "ephemeral_local_ssd_profile");
  public get ephemeralLocalSsdProfile() {
    return this._ephemeralLocalSsdProfile;
  }
  public putEphemeralLocalSsdProfile(value: ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfile) {
    this._ephemeralLocalSsdProfile.internalValue = value;
  }
  public resetEphemeralLocalSsdProfile() {
    this._ephemeralLocalSsdProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralLocalSsdProfileInput() {
    return this._ephemeralLocalSsdProfile.internalValue;
  }
}
export interface ContainerNodePoolNodeConfigLinuxNodeConfig {
  /**
  * cgroupMode specifies the cgroup mode to be used on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#cgroup_mode ContainerNodePool#cgroup_mode}
  */
  readonly cgroupMode?: string;
  /**
  * The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#sysctls ContainerNodePool#sysctls}
  */
  readonly sysctls?: { [key: string]: string };
  /**
  * The Linux kernel transparent hugepage defrag setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#transparent_hugepage_defrag ContainerNodePool#transparent_hugepage_defrag}
  */
  readonly transparentHugepageDefrag?: string;
  /**
  * The Linux kernel transparent hugepage setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#transparent_hugepage_enabled ContainerNodePool#transparent_hugepage_enabled}
  */
  readonly transparentHugepageEnabled?: string;
  /**
  * accurate_time_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#accurate_time_config ContainerNodePool#accurate_time_config}
  */
  readonly accurateTimeConfig?: ContainerNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfig;
  /**
  * hugepages_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#hugepages_config ContainerNodePool#hugepages_config}
  */
  readonly hugepagesConfig?: ContainerNodePoolNodeConfigLinuxNodeConfigHugepagesConfig;
  /**
  * node_kernel_module_loading block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#node_kernel_module_loading ContainerNodePool#node_kernel_module_loading}
  */
  readonly nodeKernelModuleLoading?: ContainerNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoading;
  /**
  * swap_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#swap_config ContainerNodePool#swap_config}
  */
  readonly swapConfig?: ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfig;
}

export function containerNodePoolNodeConfigLinuxNodeConfigToTerraform(struct?: ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference | ContainerNodePoolNodeConfigLinuxNodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cgroup_mode: cdktn.stringToTerraform(struct!.cgroupMode),
    sysctls: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sysctls),
    transparent_hugepage_defrag: cdktn.stringToTerraform(struct!.transparentHugepageDefrag),
    transparent_hugepage_enabled: cdktn.stringToTerraform(struct!.transparentHugepageEnabled),
    accurate_time_config: containerNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfigToTerraform(struct!.accurateTimeConfig),
    hugepages_config: containerNodePoolNodeConfigLinuxNodeConfigHugepagesConfigToTerraform(struct!.hugepagesConfig),
    node_kernel_module_loading: containerNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoadingToTerraform(struct!.nodeKernelModuleLoading),
    swap_config: containerNodePoolNodeConfigLinuxNodeConfigSwapConfigToTerraform(struct!.swapConfig),
  }
}


export function containerNodePoolNodeConfigLinuxNodeConfigToHclTerraform(struct?: ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference | ContainerNodePoolNodeConfigLinuxNodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cgroup_mode: {
      value: cdktn.stringToHclTerraform(struct!.cgroupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sysctls: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.sysctls),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    transparent_hugepage_defrag: {
      value: cdktn.stringToHclTerraform(struct!.transparentHugepageDefrag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transparent_hugepage_enabled: {
      value: cdktn.stringToHclTerraform(struct!.transparentHugepageEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accurate_time_config: {
      value: containerNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfigToHclTerraform(struct!.accurateTimeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfigList",
    },
    hugepages_config: {
      value: containerNodePoolNodeConfigLinuxNodeConfigHugepagesConfigToHclTerraform(struct!.hugepagesConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigLinuxNodeConfigHugepagesConfigList",
    },
    node_kernel_module_loading: {
      value: containerNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoadingToHclTerraform(struct!.nodeKernelModuleLoading),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoadingList",
    },
    swap_config: {
      value: containerNodePoolNodeConfigLinuxNodeConfigSwapConfigToHclTerraform(struct!.swapConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigLinuxNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cgroupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgroupMode = this._cgroupMode;
    }
    if (this._sysctls !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysctls = this._sysctls;
    }
    if (this._transparentHugepageDefrag !== undefined) {
      hasAnyValues = true;
      internalValueResult.transparentHugepageDefrag = this._transparentHugepageDefrag;
    }
    if (this._transparentHugepageEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.transparentHugepageEnabled = this._transparentHugepageEnabled;
    }
    if (this._accurateTimeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accurateTimeConfig = this._accurateTimeConfig?.internalValue;
    }
    if (this._hugepagesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hugepagesConfig = this._hugepagesConfig?.internalValue;
    }
    if (this._nodeKernelModuleLoading?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeKernelModuleLoading = this._nodeKernelModuleLoading?.internalValue;
    }
    if (this._swapConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.swapConfig = this._swapConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigLinuxNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cgroupMode = undefined;
      this._sysctls = undefined;
      this._transparentHugepageDefrag = undefined;
      this._transparentHugepageEnabled = undefined;
      this._accurateTimeConfig.internalValue = undefined;
      this._hugepagesConfig.internalValue = undefined;
      this._nodeKernelModuleLoading.internalValue = undefined;
      this._swapConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cgroupMode = value.cgroupMode;
      this._sysctls = value.sysctls;
      this._transparentHugepageDefrag = value.transparentHugepageDefrag;
      this._transparentHugepageEnabled = value.transparentHugepageEnabled;
      this._accurateTimeConfig.internalValue = value.accurateTimeConfig;
      this._hugepagesConfig.internalValue = value.hugepagesConfig;
      this._nodeKernelModuleLoading.internalValue = value.nodeKernelModuleLoading;
      this._swapConfig.internalValue = value.swapConfig;
    }
  }

  // cgroup_mode - computed: true, optional: true, required: false
  private _cgroupMode?: string; 
  public get cgroupMode() {
    return this.getStringAttribute('cgroup_mode');
  }
  public set cgroupMode(value: string) {
    this._cgroupMode = value;
  }
  public resetCgroupMode() {
    this._cgroupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgroupModeInput() {
    return this._cgroupMode;
  }

  // sysctls - computed: false, optional: true, required: false
  private _sysctls?: { [key: string]: string }; 
  public get sysctls() {
    return this.getStringMapAttribute('sysctls');
  }
  public set sysctls(value: { [key: string]: string }) {
    this._sysctls = value;
  }
  public resetSysctls() {
    this._sysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlsInput() {
    return this._sysctls;
  }

  // transparent_hugepage_defrag - computed: false, optional: true, required: false
  private _transparentHugepageDefrag?: string; 
  public get transparentHugepageDefrag() {
    return this.getStringAttribute('transparent_hugepage_defrag');
  }
  public set transparentHugepageDefrag(value: string) {
    this._transparentHugepageDefrag = value;
  }
  public resetTransparentHugepageDefrag() {
    this._transparentHugepageDefrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentHugepageDefragInput() {
    return this._transparentHugepageDefrag;
  }

  // transparent_hugepage_enabled - computed: true, optional: true, required: false
  private _transparentHugepageEnabled?: string; 
  public get transparentHugepageEnabled() {
    return this.getStringAttribute('transparent_hugepage_enabled');
  }
  public set transparentHugepageEnabled(value: string) {
    this._transparentHugepageEnabled = value;
  }
  public resetTransparentHugepageEnabled() {
    this._transparentHugepageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentHugepageEnabledInput() {
    return this._transparentHugepageEnabled;
  }

  // accurate_time_config - computed: false, optional: true, required: false
  private _accurateTimeConfig = new ContainerNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfigOutputReference(this, "accurate_time_config");
  public get accurateTimeConfig() {
    return this._accurateTimeConfig;
  }
  public putAccurateTimeConfig(value: ContainerNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfig) {
    this._accurateTimeConfig.internalValue = value;
  }
  public resetAccurateTimeConfig() {
    this._accurateTimeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accurateTimeConfigInput() {
    return this._accurateTimeConfig.internalValue;
  }

  // hugepages_config - computed: false, optional: true, required: false
  private _hugepagesConfig = new ContainerNodePoolNodeConfigLinuxNodeConfigHugepagesConfigOutputReference(this, "hugepages_config");
  public get hugepagesConfig() {
    return this._hugepagesConfig;
  }
  public putHugepagesConfig(value: ContainerNodePoolNodeConfigLinuxNodeConfigHugepagesConfig) {
    this._hugepagesConfig.internalValue = value;
  }
  public resetHugepagesConfig() {
    this._hugepagesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hugepagesConfigInput() {
    return this._hugepagesConfig.internalValue;
  }

  // node_kernel_module_loading - computed: false, optional: true, required: false
  private _nodeKernelModuleLoading = new ContainerNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoadingOutputReference(this, "node_kernel_module_loading");
  public get nodeKernelModuleLoading() {
    return this._nodeKernelModuleLoading;
  }
  public putNodeKernelModuleLoading(value: ContainerNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoading) {
    this._nodeKernelModuleLoading.internalValue = value;
  }
  public resetNodeKernelModuleLoading() {
    this._nodeKernelModuleLoading.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeKernelModuleLoadingInput() {
    return this._nodeKernelModuleLoading.internalValue;
  }

  // swap_config - computed: false, optional: true, required: false
  private _swapConfig = new ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfigOutputReference(this, "swap_config");
  public get swapConfig() {
    return this._swapConfig;
  }
  public putSwapConfig(value: ContainerNodePoolNodeConfigLinuxNodeConfigSwapConfig) {
    this._swapConfig.internalValue = value;
  }
  public resetSwapConfig() {
    this._swapConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swapConfigInput() {
    return this._swapConfig.internalValue;
  }
}
export interface ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig {
  /**
  * Number of raw-block local NVMe SSD disks to be attached to the node. Each local SSD is 375 GB in size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#local_ssd_count ContainerNodePool#local_ssd_count}
  */
  readonly localSsdCount: number;
}

export function containerNodePoolNodeConfigLocalNvmeSsdBlockConfigToTerraform(struct?: ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference | ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_ssd_count: cdktn.numberToTerraform(struct!.localSsdCount),
  }
}


export function containerNodePoolNodeConfigLocalNvmeSsdBlockConfigToHclTerraform(struct?: ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference | ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_ssd_count: {
      value: cdktn.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localSsdCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localSsdCount = value.localSsdCount;
    }
  }

  // local_ssd_count - computed: false, optional: false, required: true
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }
}
export interface ContainerNodePoolNodeConfigReservationAffinity {
  /**
  * Corresponds to the type of reservation consumption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#consume_reservation_type ContainerNodePool#consume_reservation_type}
  */
  readonly consumeReservationType: string;
  /**
  * The label key of a reservation resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#key ContainerNodePool#key}
  */
  readonly key?: string;
  /**
  * The label values of the reservation resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#values ContainerNodePool#values}
  */
  readonly values?: string[];
}

export function containerNodePoolNodeConfigReservationAffinityToTerraform(struct?: ContainerNodePoolNodeConfigReservationAffinityOutputReference | ContainerNodePoolNodeConfigReservationAffinity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consume_reservation_type: cdktn.stringToTerraform(struct!.consumeReservationType),
    key: cdktn.stringToTerraform(struct!.key),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function containerNodePoolNodeConfigReservationAffinityToHclTerraform(struct?: ContainerNodePoolNodeConfigReservationAffinityOutputReference | ContainerNodePoolNodeConfigReservationAffinity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ContainerNodePoolNodeConfigReservationAffinityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigReservationAffinity | undefined {
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

  public set internalValue(value: ContainerNodePoolNodeConfigReservationAffinity | undefined) {
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

  // consume_reservation_type - computed: false, optional: false, required: true
  private _consumeReservationType?: string; 
  public get consumeReservationType() {
    return this.getStringAttribute('consume_reservation_type');
  }
  public set consumeReservationType(value: string) {
    this._consumeReservationType = value;
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
export interface ContainerNodePoolNodeConfigSandboxConfig {
  /**
  * Type of the sandbox to use for the node (e.g. 'GVISOR').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#type ContainerNodePool#type}
  */
  readonly type: string;
}

export function containerNodePoolNodeConfigSandboxConfigToTerraform(struct?: ContainerNodePoolNodeConfigSandboxConfigOutputReference | ContainerNodePoolNodeConfigSandboxConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function containerNodePoolNodeConfigSandboxConfigToHclTerraform(struct?: ContainerNodePoolNodeConfigSandboxConfigOutputReference | ContainerNodePoolNodeConfigSandboxConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ContainerNodePoolNodeConfigSandboxConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigSandboxConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigSandboxConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
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
}
export interface ContainerNodePoolNodeConfigSecondaryBootDisks {
  /**
  * Disk image to create the secondary boot disk from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#disk_image ContainerNodePool#disk_image}
  */
  readonly diskImage: string;
  /**
  * Mode for how the secondary boot disk is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#mode ContainerNodePool#mode}
  */
  readonly mode?: string;
}

export function containerNodePoolNodeConfigSecondaryBootDisksToTerraform(struct?: ContainerNodePoolNodeConfigSecondaryBootDisks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_image: cdktn.stringToTerraform(struct!.diskImage),
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function containerNodePoolNodeConfigSecondaryBootDisksToHclTerraform(struct?: ContainerNodePoolNodeConfigSecondaryBootDisks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_image: {
      value: cdktn.stringToHclTerraform(struct!.diskImage),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigSecondaryBootDisksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerNodePoolNodeConfigSecondaryBootDisks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskImage = this._diskImage;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigSecondaryBootDisks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskImage = undefined;
      this._mode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskImage = value.diskImage;
      this._mode = value.mode;
    }
  }

  // disk_image - computed: false, optional: false, required: true
  private _diskImage?: string; 
  public get diskImage() {
    return this.getStringAttribute('disk_image');
  }
  public set diskImage(value: string) {
    this._diskImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskImageInput() {
    return this._diskImage;
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
}

export class ContainerNodePoolNodeConfigSecondaryBootDisksList extends cdktn.ComplexList {
  public internalValue? : ContainerNodePoolNodeConfigSecondaryBootDisks[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerNodePoolNodeConfigSecondaryBootDisksOutputReference {
    return new ContainerNodePoolNodeConfigSecondaryBootDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerNodePoolNodeConfigShieldedInstanceConfig {
  /**
  * Defines whether the instance has integrity monitoring enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#enable_integrity_monitoring ContainerNodePool#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktn.IResolvable;
  /**
  * Defines whether the instance has Secure Boot enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#enable_secure_boot ContainerNodePool#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktn.IResolvable;
}

export function containerNodePoolNodeConfigShieldedInstanceConfigToTerraform(struct?: ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference | ContainerNodePoolNodeConfigShieldedInstanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_integrity_monitoring: cdktn.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktn.booleanToTerraform(struct!.enableSecureBoot),
  }
}


export function containerNodePoolNodeConfigShieldedInstanceConfigToHclTerraform(struct?: ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference | ContainerNodePoolNodeConfigShieldedInstanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigShieldedInstanceConfig | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIntegrityMonitoring = undefined;
      this._enableSecureBoot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIntegrityMonitoring = value.enableIntegrityMonitoring;
      this._enableSecureBoot = value.enableSecureBoot;
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
}
export interface ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity {
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#key ContainerNodePool#key}
  */
  readonly key: string;
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#operator ContainerNodePool#operator}
  */
  readonly operator: string;
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#values ContainerNodePool#values}
  */
  readonly values: string[];
}

export function containerNodePoolNodeConfigSoleTenantConfigNodeAffinityToTerraform(struct?: ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function containerNodePoolNodeConfigSoleTenantConfigNodeAffinityToHclTerraform(struct?: ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity | cdktn.IResolvable | undefined) {
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList extends cdktn.ComplexList {
  public internalValue? : ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference {
    return new ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerNodePoolNodeConfigSoleTenantConfig {
  /**
  * Specifies the minimum number of vCPUs that each sole tenant node must have to use CPU overcommit. If not specified, the CPU overcommit feature is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#min_node_cpus ContainerNodePool#min_node_cpus}
  */
  readonly minNodeCpus?: number;
  /**
  * node_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#node_affinity ContainerNodePool#node_affinity}
  */
  readonly nodeAffinity: ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity[] | cdktn.IResolvable;
}

export function containerNodePoolNodeConfigSoleTenantConfigToTerraform(struct?: ContainerNodePoolNodeConfigSoleTenantConfigOutputReference | ContainerNodePoolNodeConfigSoleTenantConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_node_cpus: cdktn.numberToTerraform(struct!.minNodeCpus),
    node_affinity: cdktn.listMapper(containerNodePoolNodeConfigSoleTenantConfigNodeAffinityToTerraform, true)(struct!.nodeAffinity),
  }
}


export function containerNodePoolNodeConfigSoleTenantConfigToHclTerraform(struct?: ContainerNodePoolNodeConfigSoleTenantConfigOutputReference | ContainerNodePoolNodeConfigSoleTenantConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_node_cpus: {
      value: cdktn.numberToHclTerraform(struct!.minNodeCpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_affinity: {
      value: cdktn.listMapperHcl(containerNodePoolNodeConfigSoleTenantConfigNodeAffinityToHclTerraform, true)(struct!.nodeAffinity),
      isBlock: true,
      type: "set",
      storageClassType: "ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigSoleTenantConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigSoleTenantConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minNodeCpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCpus = this._minNodeCpus;
    }
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigSoleTenantConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minNodeCpus = undefined;
      this._nodeAffinity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minNodeCpus = value.minNodeCpus;
      this._nodeAffinity.internalValue = value.nodeAffinity;
    }
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

  // node_affinity - computed: false, optional: false, required: true
  private _nodeAffinity = new ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList(this, "node_affinity", true);
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity[] | cdktn.IResolvable) {
    this._nodeAffinity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }
}
export interface ContainerNodePoolNodeConfigTaint {
  /**
  * Effect for taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#effect ContainerNodePool#effect}
  */
  readonly effect: string;
  /**
  * Key for taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#key ContainerNodePool#key}
  */
  readonly key: string;
  /**
  * Value for taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#value ContainerNodePool#value}
  */
  readonly value: string;
}

export function containerNodePoolNodeConfigTaintToTerraform(struct?: ContainerNodePoolNodeConfigTaint | cdktn.IResolvable): any {
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


export function containerNodePoolNodeConfigTaintToHclTerraform(struct?: ContainerNodePoolNodeConfigTaint | cdktn.IResolvable): any {
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

export class ContainerNodePoolNodeConfigTaintOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerNodePoolNodeConfigTaint | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ContainerNodePoolNodeConfigTaint | cdktn.IResolvable | undefined) {
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

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ContainerNodePoolNodeConfigTaintList extends cdktn.ComplexList {
  public internalValue? : ContainerNodePoolNodeConfigTaint[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerNodePoolNodeConfigTaintOutputReference {
    return new ContainerNodePoolNodeConfigTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerNodePoolNodeConfigWindowsNodeConfig {
  /**
  * The OS Version of the windows nodepool.Values are OS_VERSION_UNSPECIFIED,OS_VERSION_LTSC2019 and OS_VERSION_LTSC2022
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#osversion ContainerNodePool#osversion}
  */
  readonly osversion?: string;
}

export function containerNodePoolNodeConfigWindowsNodeConfigToTerraform(struct?: ContainerNodePoolNodeConfigWindowsNodeConfigOutputReference | ContainerNodePoolNodeConfigWindowsNodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    osversion: cdktn.stringToTerraform(struct!.osversion),
  }
}


export function containerNodePoolNodeConfigWindowsNodeConfigToHclTerraform(struct?: ContainerNodePoolNodeConfigWindowsNodeConfigOutputReference | ContainerNodePoolNodeConfigWindowsNodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    osversion: {
      value: cdktn.stringToHclTerraform(struct!.osversion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigWindowsNodeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigWindowsNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._osversion !== undefined) {
      hasAnyValues = true;
      internalValueResult.osversion = this._osversion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigWindowsNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._osversion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._osversion = value.osversion;
    }
  }

  // osversion - computed: false, optional: true, required: false
  private _osversion?: string; 
  public get osversion() {
    return this.getStringAttribute('osversion');
  }
  public set osversion(value: string) {
    this._osversion = value;
  }
  public resetOsversion() {
    this._osversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osversionInput() {
    return this._osversion;
  }
}
export interface ContainerNodePoolNodeConfigWorkloadMetadataConfig {
  /**
  * Mode is the configuration for how to expose metadata to workloads running on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#mode ContainerNodePool#mode}
  */
  readonly mode: string;
}

export function containerNodePoolNodeConfigWorkloadMetadataConfigToTerraform(struct?: ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference | ContainerNodePoolNodeConfigWorkloadMetadataConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function containerNodePoolNodeConfigWorkloadMetadataConfigToHclTerraform(struct?: ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference | ContainerNodePoolNodeConfigWorkloadMetadataConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfigWorkloadMetadataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfigWorkloadMetadataConfig | undefined) {
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
export interface ContainerNodePoolNodeConfig {
  /**
  * The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#boot_disk_kms_key ContainerNodePool#boot_disk_kms_key}
  */
  readonly bootDiskKmsKey?: string;
  /**
  * Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#disk_size_gb ContainerNodePool#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#disk_type ContainerNodePool#disk_type}
  */
  readonly diskType?: string;
  /**
  * If enabled boot disks are configured with confidential mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#enable_confidential_storage ContainerNodePool#enable_confidential_storage}
  */
  readonly enableConfidentialStorage?: boolean | cdktn.IResolvable;
  /**
  * Enables Flex Start provisioning model for the node pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#flex_start ContainerNodePool#flex_start}
  */
  readonly flexStart?: boolean | cdktn.IResolvable;
  /**
  * The image type to use for this node. Note that for a given image type, the latest version of it will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#image_type ContainerNodePool#image_type}
  */
  readonly imageType?: string;
  /**
  * The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#labels ContainerNodePool#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The number of local SSD disks to be attached to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#local_ssd_count ContainerNodePool#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * LocalSsdEncryptionMode specified the method used for encrypting the local SSDs attached to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#local_ssd_encryption_mode ContainerNodePool#local_ssd_encryption_mode}
  */
  readonly localSsdEncryptionMode?: string;
  /**
  * Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#logging_variant ContainerNodePool#logging_variant}
  */
  readonly loggingVariant?: string;
  /**
  * The name of a Google Compute Engine machine type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#machine_type ContainerNodePool#machine_type}
  */
  readonly machineType?: string;
  /**
  * The runtime of each node in the node pool in seconds, terminated by 's'. Example: "3600s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#max_run_duration ContainerNodePool#max_run_duration}
  */
  readonly maxRunDuration?: string;
  /**
  * The metadata key/value pairs assigned to instances in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#metadata ContainerNodePool#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#min_cpu_platform ContainerNodePool#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on sole tenant nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#node_group ContainerNodePool#node_group}
  */
  readonly nodeGroup?: string;
  /**
  * The set of Google API scopes to be made available on all of the node VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#oauth_scopes ContainerNodePool#oauth_scopes}
  */
  readonly oauthScopes?: string[];
  /**
  * Whether the nodes are created as preemptible VM instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#preemptible ContainerNodePool#preemptible}
  */
  readonly preemptible?: boolean | cdktn.IResolvable;
  /**
  * The GCE resource labels (a map of key/value pairs) to be applied to the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#resource_labels ContainerNodePool#resource_labels}
  */
  readonly resourceLabels?: { [key: string]: string };
  /**
  * A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#resource_manager_tags ContainerNodePool#resource_manager_tags}
  */
  readonly resourceManagerTags?: { [key: string]: string };
  /**
  * The Google Cloud Platform Service Account to be used by the node VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#service_account ContainerNodePool#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Whether the nodes are created as spot VM instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#spot ContainerNodePool#spot}
  */
  readonly spot?: boolean | cdktn.IResolvable;
  /**
  * The list of Storage Pools where boot disks are provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#storage_pools ContainerNodePool#storage_pools}
  */
  readonly storagePools?: string[];
  /**
  * The list of instance tags applied to all nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#tags ContainerNodePool#tags}
  */
  readonly tags?: string[];
  /**
  * advanced_machine_features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#advanced_machine_features ContainerNodePool#advanced_machine_features}
  */
  readonly advancedMachineFeatures?: ContainerNodePoolNodeConfigAdvancedMachineFeatures;
  /**
  * boot_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#boot_disk ContainerNodePool#boot_disk}
  */
  readonly bootDisk?: ContainerNodePoolNodeConfigBootDisk;
  /**
  * confidential_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#confidential_nodes ContainerNodePool#confidential_nodes}
  */
  readonly confidentialNodes?: ContainerNodePoolNodeConfigConfidentialNodes;
  /**
  * containerd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#containerd_config ContainerNodePool#containerd_config}
  */
  readonly containerdConfig?: ContainerNodePoolNodeConfigContainerdConfig;
  /**
  * ephemeral_storage_local_ssd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#ephemeral_storage_local_ssd_config ContainerNodePool#ephemeral_storage_local_ssd_config}
  */
  readonly ephemeralStorageLocalSsdConfig?: ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig;
  /**
  * fast_socket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#fast_socket ContainerNodePool#fast_socket}
  */
  readonly fastSocket?: ContainerNodePoolNodeConfigFastSocket;
  /**
  * gcfs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#gcfs_config ContainerNodePool#gcfs_config}
  */
  readonly gcfsConfig?: ContainerNodePoolNodeConfigGcfsConfig;
  /**
  * guest_accelerator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#guest_accelerator ContainerNodePool#guest_accelerator}
  */
  readonly guestAccelerator?: ContainerNodePoolNodeConfigGuestAccelerator[] | cdktn.IResolvable;
  /**
  * gvnic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#gvnic ContainerNodePool#gvnic}
  */
  readonly gvnic?: ContainerNodePoolNodeConfigGvnic;
  /**
  * host_maintenance_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#host_maintenance_policy ContainerNodePool#host_maintenance_policy}
  */
  readonly hostMaintenancePolicy?: ContainerNodePoolNodeConfigHostMaintenancePolicy;
  /**
  * kubelet_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#kubelet_config ContainerNodePool#kubelet_config}
  */
  readonly kubeletConfig?: ContainerNodePoolNodeConfigKubeletConfig;
  /**
  * linux_node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#linux_node_config ContainerNodePool#linux_node_config}
  */
  readonly linuxNodeConfig?: ContainerNodePoolNodeConfigLinuxNodeConfig;
  /**
  * local_nvme_ssd_block_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#local_nvme_ssd_block_config ContainerNodePool#local_nvme_ssd_block_config}
  */
  readonly localNvmeSsdBlockConfig?: ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig;
  /**
  * reservation_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#reservation_affinity ContainerNodePool#reservation_affinity}
  */
  readonly reservationAffinity?: ContainerNodePoolNodeConfigReservationAffinity;
  /**
  * sandbox_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#sandbox_config ContainerNodePool#sandbox_config}
  */
  readonly sandboxConfig?: ContainerNodePoolNodeConfigSandboxConfig;
  /**
  * secondary_boot_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#secondary_boot_disks ContainerNodePool#secondary_boot_disks}
  */
  readonly secondaryBootDisks?: ContainerNodePoolNodeConfigSecondaryBootDisks[] | cdktn.IResolvable;
  /**
  * shielded_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#shielded_instance_config ContainerNodePool#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: ContainerNodePoolNodeConfigShieldedInstanceConfig;
  /**
  * sole_tenant_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#sole_tenant_config ContainerNodePool#sole_tenant_config}
  */
  readonly soleTenantConfig?: ContainerNodePoolNodeConfigSoleTenantConfig;
  /**
  * taint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#taint ContainerNodePool#taint}
  */
  readonly taint?: ContainerNodePoolNodeConfigTaint[] | cdktn.IResolvable;
  /**
  * windows_node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#windows_node_config ContainerNodePool#windows_node_config}
  */
  readonly windowsNodeConfig?: ContainerNodePoolNodeConfigWindowsNodeConfig;
  /**
  * workload_metadata_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#workload_metadata_config ContainerNodePool#workload_metadata_config}
  */
  readonly workloadMetadataConfig?: ContainerNodePoolNodeConfigWorkloadMetadataConfig;
}

export function containerNodePoolNodeConfigToTerraform(struct?: ContainerNodePoolNodeConfigOutputReference | ContainerNodePoolNodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_kms_key: cdktn.stringToTerraform(struct!.bootDiskKmsKey),
    disk_size_gb: cdktn.numberToTerraform(struct!.diskSizeGb),
    disk_type: cdktn.stringToTerraform(struct!.diskType),
    enable_confidential_storage: cdktn.booleanToTerraform(struct!.enableConfidentialStorage),
    flex_start: cdktn.booleanToTerraform(struct!.flexStart),
    image_type: cdktn.stringToTerraform(struct!.imageType),
    labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.labels),
    local_ssd_count: cdktn.numberToTerraform(struct!.localSsdCount),
    local_ssd_encryption_mode: cdktn.stringToTerraform(struct!.localSsdEncryptionMode),
    logging_variant: cdktn.stringToTerraform(struct!.loggingVariant),
    machine_type: cdktn.stringToTerraform(struct!.machineType),
    max_run_duration: cdktn.stringToTerraform(struct!.maxRunDuration),
    metadata: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.metadata),
    min_cpu_platform: cdktn.stringToTerraform(struct!.minCpuPlatform),
    node_group: cdktn.stringToTerraform(struct!.nodeGroup),
    oauth_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.oauthScopes),
    preemptible: cdktn.booleanToTerraform(struct!.preemptible),
    resource_labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.resourceLabels),
    resource_manager_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.resourceManagerTags),
    service_account: cdktn.stringToTerraform(struct!.serviceAccount),
    spot: cdktn.booleanToTerraform(struct!.spot),
    storage_pools: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.storagePools),
    tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tags),
    advanced_machine_features: containerNodePoolNodeConfigAdvancedMachineFeaturesToTerraform(struct!.advancedMachineFeatures),
    boot_disk: containerNodePoolNodeConfigBootDiskToTerraform(struct!.bootDisk),
    confidential_nodes: containerNodePoolNodeConfigConfidentialNodesToTerraform(struct!.confidentialNodes),
    containerd_config: containerNodePoolNodeConfigContainerdConfigToTerraform(struct!.containerdConfig),
    ephemeral_storage_local_ssd_config: containerNodePoolNodeConfigEphemeralStorageLocalSsdConfigToTerraform(struct!.ephemeralStorageLocalSsdConfig),
    fast_socket: containerNodePoolNodeConfigFastSocketToTerraform(struct!.fastSocket),
    gcfs_config: containerNodePoolNodeConfigGcfsConfigToTerraform(struct!.gcfsConfig),
    guest_accelerator: cdktn.listMapper(containerNodePoolNodeConfigGuestAcceleratorToTerraform, true)(struct!.guestAccelerator),
    gvnic: containerNodePoolNodeConfigGvnicToTerraform(struct!.gvnic),
    host_maintenance_policy: containerNodePoolNodeConfigHostMaintenancePolicyToTerraform(struct!.hostMaintenancePolicy),
    kubelet_config: containerNodePoolNodeConfigKubeletConfigToTerraform(struct!.kubeletConfig),
    linux_node_config: containerNodePoolNodeConfigLinuxNodeConfigToTerraform(struct!.linuxNodeConfig),
    local_nvme_ssd_block_config: containerNodePoolNodeConfigLocalNvmeSsdBlockConfigToTerraform(struct!.localNvmeSsdBlockConfig),
    reservation_affinity: containerNodePoolNodeConfigReservationAffinityToTerraform(struct!.reservationAffinity),
    sandbox_config: containerNodePoolNodeConfigSandboxConfigToTerraform(struct!.sandboxConfig),
    secondary_boot_disks: cdktn.listMapper(containerNodePoolNodeConfigSecondaryBootDisksToTerraform, true)(struct!.secondaryBootDisks),
    shielded_instance_config: containerNodePoolNodeConfigShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
    sole_tenant_config: containerNodePoolNodeConfigSoleTenantConfigToTerraform(struct!.soleTenantConfig),
    taint: cdktn.listMapper(containerNodePoolNodeConfigTaintToTerraform, true)(struct!.taint),
    windows_node_config: containerNodePoolNodeConfigWindowsNodeConfigToTerraform(struct!.windowsNodeConfig),
    workload_metadata_config: containerNodePoolNodeConfigWorkloadMetadataConfigToTerraform(struct!.workloadMetadataConfig),
  }
}


export function containerNodePoolNodeConfigToHclTerraform(struct?: ContainerNodePoolNodeConfigOutputReference | ContainerNodePoolNodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_disk_kms_key: {
      value: cdktn.stringToHclTerraform(struct!.bootDiskKmsKey),
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
    enable_confidential_storage: {
      value: cdktn.booleanToHclTerraform(struct!.enableConfidentialStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flex_start: {
      value: cdktn.booleanToHclTerraform(struct!.flexStart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_type: {
      value: cdktn.stringToHclTerraform(struct!.imageType),
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
    local_ssd_count: {
      value: cdktn.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_ssd_encryption_mode: {
      value: cdktn.stringToHclTerraform(struct!.localSsdEncryptionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging_variant: {
      value: cdktn.stringToHclTerraform(struct!.loggingVariant),
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
    max_run_duration: {
      value: cdktn.stringToHclTerraform(struct!.maxRunDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    min_cpu_platform: {
      value: cdktn.stringToHclTerraform(struct!.minCpuPlatform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_group: {
      value: cdktn.stringToHclTerraform(struct!.nodeGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.oauthScopes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    preemptible: {
      value: cdktn.booleanToHclTerraform(struct!.preemptible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource_labels: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.resourceLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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
    spot: {
      value: cdktn.booleanToHclTerraform(struct!.spot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_pools: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.storagePools),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    advanced_machine_features: {
      value: containerNodePoolNodeConfigAdvancedMachineFeaturesToHclTerraform(struct!.advancedMachineFeatures),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigAdvancedMachineFeaturesList",
    },
    boot_disk: {
      value: containerNodePoolNodeConfigBootDiskToHclTerraform(struct!.bootDisk),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigBootDiskList",
    },
    confidential_nodes: {
      value: containerNodePoolNodeConfigConfidentialNodesToHclTerraform(struct!.confidentialNodes),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigConfidentialNodesList",
    },
    containerd_config: {
      value: containerNodePoolNodeConfigContainerdConfigToHclTerraform(struct!.containerdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigContainerdConfigList",
    },
    ephemeral_storage_local_ssd_config: {
      value: containerNodePoolNodeConfigEphemeralStorageLocalSsdConfigToHclTerraform(struct!.ephemeralStorageLocalSsdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigList",
    },
    fast_socket: {
      value: containerNodePoolNodeConfigFastSocketToHclTerraform(struct!.fastSocket),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigFastSocketList",
    },
    gcfs_config: {
      value: containerNodePoolNodeConfigGcfsConfigToHclTerraform(struct!.gcfsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigGcfsConfigList",
    },
    guest_accelerator: {
      value: cdktn.listMapperHcl(containerNodePoolNodeConfigGuestAcceleratorToHclTerraform, true)(struct!.guestAccelerator),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigGuestAcceleratorList",
    },
    gvnic: {
      value: containerNodePoolNodeConfigGvnicToHclTerraform(struct!.gvnic),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigGvnicList",
    },
    host_maintenance_policy: {
      value: containerNodePoolNodeConfigHostMaintenancePolicyToHclTerraform(struct!.hostMaintenancePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigHostMaintenancePolicyList",
    },
    kubelet_config: {
      value: containerNodePoolNodeConfigKubeletConfigToHclTerraform(struct!.kubeletConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigKubeletConfigList",
    },
    linux_node_config: {
      value: containerNodePoolNodeConfigLinuxNodeConfigToHclTerraform(struct!.linuxNodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigLinuxNodeConfigList",
    },
    local_nvme_ssd_block_config: {
      value: containerNodePoolNodeConfigLocalNvmeSsdBlockConfigToHclTerraform(struct!.localNvmeSsdBlockConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigList",
    },
    reservation_affinity: {
      value: containerNodePoolNodeConfigReservationAffinityToHclTerraform(struct!.reservationAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigReservationAffinityList",
    },
    sandbox_config: {
      value: containerNodePoolNodeConfigSandboxConfigToHclTerraform(struct!.sandboxConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigSandboxConfigList",
    },
    secondary_boot_disks: {
      value: cdktn.listMapperHcl(containerNodePoolNodeConfigSecondaryBootDisksToHclTerraform, true)(struct!.secondaryBootDisks),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigSecondaryBootDisksList",
    },
    shielded_instance_config: {
      value: containerNodePoolNodeConfigShieldedInstanceConfigToHclTerraform(struct!.shieldedInstanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigShieldedInstanceConfigList",
    },
    sole_tenant_config: {
      value: containerNodePoolNodeConfigSoleTenantConfigToHclTerraform(struct!.soleTenantConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigSoleTenantConfigList",
    },
    taint: {
      value: cdktn.listMapperHcl(containerNodePoolNodeConfigTaintToHclTerraform, true)(struct!.taint),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigTaintList",
    },
    windows_node_config: {
      value: containerNodePoolNodeConfigWindowsNodeConfigToHclTerraform(struct!.windowsNodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigWindowsNodeConfigList",
    },
    workload_metadata_config: {
      value: containerNodePoolNodeConfigWorkloadMetadataConfigToHclTerraform(struct!.workloadMetadataConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolNodeConfigWorkloadMetadataConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskKmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskKmsKey = this._bootDiskKmsKey;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._enableConfidentialStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConfidentialStorage = this._enableConfidentialStorage;
    }
    if (this._flexStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.flexStart = this._flexStart;
    }
    if (this._imageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageType = this._imageType;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    if (this._localSsdEncryptionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdEncryptionMode = this._localSsdEncryptionMode;
    }
    if (this._loggingVariant !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingVariant = this._loggingVariant;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._maxRunDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRunDuration = this._maxRunDuration;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._minCpuPlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._nodeGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroup = this._nodeGroup;
    }
    if (this._oauthScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthScopes = this._oauthScopes;
    }
    if (this._preemptible !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptible = this._preemptible;
    }
    if (this._resourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLabels = this._resourceLabels;
    }
    if (this._resourceManagerTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceManagerTags = this._resourceManagerTags;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._spot !== undefined) {
      hasAnyValues = true;
      internalValueResult.spot = this._spot;
    }
    if (this._storagePools !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePools = this._storagePools;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._advancedMachineFeatures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedMachineFeatures = this._advancedMachineFeatures?.internalValue;
    }
    if (this._bootDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDisk = this._bootDisk?.internalValue;
    }
    if (this._confidentialNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidentialNodes = this._confidentialNodes?.internalValue;
    }
    if (this._containerdConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerdConfig = this._containerdConfig?.internalValue;
    }
    if (this._ephemeralStorageLocalSsdConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralStorageLocalSsdConfig = this._ephemeralStorageLocalSsdConfig?.internalValue;
    }
    if (this._fastSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastSocket = this._fastSocket?.internalValue;
    }
    if (this._gcfsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcfsConfig = this._gcfsConfig?.internalValue;
    }
    if (this._guestAccelerator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestAccelerator = this._guestAccelerator?.internalValue;
    }
    if (this._gvnic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gvnic = this._gvnic?.internalValue;
    }
    if (this._hostMaintenancePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostMaintenancePolicy = this._hostMaintenancePolicy?.internalValue;
    }
    if (this._kubeletConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletConfig = this._kubeletConfig?.internalValue;
    }
    if (this._linuxNodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxNodeConfig = this._linuxNodeConfig?.internalValue;
    }
    if (this._localNvmeSsdBlockConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localNvmeSsdBlockConfig = this._localNvmeSsdBlockConfig?.internalValue;
    }
    if (this._reservationAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationAffinity = this._reservationAffinity?.internalValue;
    }
    if (this._sandboxConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sandboxConfig = this._sandboxConfig?.internalValue;
    }
    if (this._secondaryBootDisks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryBootDisks = this._secondaryBootDisks?.internalValue;
    }
    if (this._shieldedInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shieldedInstanceConfig = this._shieldedInstanceConfig?.internalValue;
    }
    if (this._soleTenantConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.soleTenantConfig = this._soleTenantConfig?.internalValue;
    }
    if (this._taint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taint = this._taint?.internalValue;
    }
    if (this._windowsNodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsNodeConfig = this._windowsNodeConfig?.internalValue;
    }
    if (this._workloadMetadataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadMetadataConfig = this._workloadMetadataConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskKmsKey = undefined;
      this._diskSizeGb = undefined;
      this._diskType = undefined;
      this._enableConfidentialStorage = undefined;
      this._flexStart = undefined;
      this._imageType = undefined;
      this._labels = undefined;
      this._localSsdCount = undefined;
      this._localSsdEncryptionMode = undefined;
      this._loggingVariant = undefined;
      this._machineType = undefined;
      this._maxRunDuration = undefined;
      this._metadata = undefined;
      this._minCpuPlatform = undefined;
      this._nodeGroup = undefined;
      this._oauthScopes = undefined;
      this._preemptible = undefined;
      this._resourceLabels = undefined;
      this._resourceManagerTags = undefined;
      this._serviceAccount = undefined;
      this._spot = undefined;
      this._storagePools = undefined;
      this._tags = undefined;
      this._advancedMachineFeatures.internalValue = undefined;
      this._bootDisk.internalValue = undefined;
      this._confidentialNodes.internalValue = undefined;
      this._containerdConfig.internalValue = undefined;
      this._ephemeralStorageLocalSsdConfig.internalValue = undefined;
      this._fastSocket.internalValue = undefined;
      this._gcfsConfig.internalValue = undefined;
      this._guestAccelerator.internalValue = undefined;
      this._gvnic.internalValue = undefined;
      this._hostMaintenancePolicy.internalValue = undefined;
      this._kubeletConfig.internalValue = undefined;
      this._linuxNodeConfig.internalValue = undefined;
      this._localNvmeSsdBlockConfig.internalValue = undefined;
      this._reservationAffinity.internalValue = undefined;
      this._sandboxConfig.internalValue = undefined;
      this._secondaryBootDisks.internalValue = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
      this._soleTenantConfig.internalValue = undefined;
      this._taint.internalValue = undefined;
      this._windowsNodeConfig.internalValue = undefined;
      this._workloadMetadataConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskKmsKey = value.bootDiskKmsKey;
      this._diskSizeGb = value.diskSizeGb;
      this._diskType = value.diskType;
      this._enableConfidentialStorage = value.enableConfidentialStorage;
      this._flexStart = value.flexStart;
      this._imageType = value.imageType;
      this._labels = value.labels;
      this._localSsdCount = value.localSsdCount;
      this._localSsdEncryptionMode = value.localSsdEncryptionMode;
      this._loggingVariant = value.loggingVariant;
      this._machineType = value.machineType;
      this._maxRunDuration = value.maxRunDuration;
      this._metadata = value.metadata;
      this._minCpuPlatform = value.minCpuPlatform;
      this._nodeGroup = value.nodeGroup;
      this._oauthScopes = value.oauthScopes;
      this._preemptible = value.preemptible;
      this._resourceLabels = value.resourceLabels;
      this._resourceManagerTags = value.resourceManagerTags;
      this._serviceAccount = value.serviceAccount;
      this._spot = value.spot;
      this._storagePools = value.storagePools;
      this._tags = value.tags;
      this._advancedMachineFeatures.internalValue = value.advancedMachineFeatures;
      this._bootDisk.internalValue = value.bootDisk;
      this._confidentialNodes.internalValue = value.confidentialNodes;
      this._containerdConfig.internalValue = value.containerdConfig;
      this._ephemeralStorageLocalSsdConfig.internalValue = value.ephemeralStorageLocalSsdConfig;
      this._fastSocket.internalValue = value.fastSocket;
      this._gcfsConfig.internalValue = value.gcfsConfig;
      this._guestAccelerator.internalValue = value.guestAccelerator;
      this._gvnic.internalValue = value.gvnic;
      this._hostMaintenancePolicy.internalValue = value.hostMaintenancePolicy;
      this._kubeletConfig.internalValue = value.kubeletConfig;
      this._linuxNodeConfig.internalValue = value.linuxNodeConfig;
      this._localNvmeSsdBlockConfig.internalValue = value.localNvmeSsdBlockConfig;
      this._reservationAffinity.internalValue = value.reservationAffinity;
      this._sandboxConfig.internalValue = value.sandboxConfig;
      this._secondaryBootDisks.internalValue = value.secondaryBootDisks;
      this._shieldedInstanceConfig.internalValue = value.shieldedInstanceConfig;
      this._soleTenantConfig.internalValue = value.soleTenantConfig;
      this._taint.internalValue = value.taint;
      this._windowsNodeConfig.internalValue = value.windowsNodeConfig;
      this._workloadMetadataConfig.internalValue = value.workloadMetadataConfig;
    }
  }

  // boot_disk_kms_key - computed: false, optional: true, required: false
  private _bootDiskKmsKey?: string; 
  public get bootDiskKmsKey() {
    return this.getStringAttribute('boot_disk_kms_key');
  }
  public set bootDiskKmsKey(value: string) {
    this._bootDiskKmsKey = value;
  }
  public resetBootDiskKmsKey() {
    this._bootDiskKmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskKmsKeyInput() {
    return this._bootDiskKmsKey;
  }

  // disk_size_gb - computed: true, optional: true, required: false
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

  // disk_type - computed: true, optional: true, required: false
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

  // effective_taints - computed: true, optional: false, required: false
  private _effectiveTaints = new ContainerNodePoolNodeConfigEffectiveTaintsList(this, "effective_taints", false);
  public get effectiveTaints() {
    return this._effectiveTaints;
  }

  // enable_confidential_storage - computed: false, optional: true, required: false
  private _enableConfidentialStorage?: boolean | cdktn.IResolvable; 
  public get enableConfidentialStorage() {
    return this.getBooleanAttribute('enable_confidential_storage');
  }
  public set enableConfidentialStorage(value: boolean | cdktn.IResolvable) {
    this._enableConfidentialStorage = value;
  }
  public resetEnableConfidentialStorage() {
    this._enableConfidentialStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConfidentialStorageInput() {
    return this._enableConfidentialStorage;
  }

  // flex_start - computed: false, optional: true, required: false
  private _flexStart?: boolean | cdktn.IResolvable; 
  public get flexStart() {
    return this.getBooleanAttribute('flex_start');
  }
  public set flexStart(value: boolean | cdktn.IResolvable) {
    this._flexStart = value;
  }
  public resetFlexStart() {
    this._flexStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexStartInput() {
    return this._flexStart;
  }

  // image_type - computed: true, optional: true, required: false
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  public resetImageType() {
    this._imageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
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

  // local_ssd_count - computed: true, optional: true, required: false
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

  // local_ssd_encryption_mode - computed: false, optional: true, required: false
  private _localSsdEncryptionMode?: string; 
  public get localSsdEncryptionMode() {
    return this.getStringAttribute('local_ssd_encryption_mode');
  }
  public set localSsdEncryptionMode(value: string) {
    this._localSsdEncryptionMode = value;
  }
  public resetLocalSsdEncryptionMode() {
    this._localSsdEncryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdEncryptionModeInput() {
    return this._localSsdEncryptionMode;
  }

  // logging_variant - computed: true, optional: true, required: false
  private _loggingVariant?: string; 
  public get loggingVariant() {
    return this.getStringAttribute('logging_variant');
  }
  public set loggingVariant(value: string) {
    this._loggingVariant = value;
  }
  public resetLoggingVariant() {
    this._loggingVariant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingVariantInput() {
    return this._loggingVariant;
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

  // max_run_duration - computed: false, optional: true, required: false
  private _maxRunDuration?: string; 
  public get maxRunDuration() {
    return this.getStringAttribute('max_run_duration');
  }
  public set maxRunDuration(value: string) {
    this._maxRunDuration = value;
  }
  public resetMaxRunDuration() {
    this._maxRunDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRunDurationInput() {
    return this._maxRunDuration;
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

  // node_group - computed: false, optional: true, required: false
  private _nodeGroup?: string; 
  public get nodeGroup() {
    return this.getStringAttribute('node_group');
  }
  public set nodeGroup(value: string) {
    this._nodeGroup = value;
  }
  public resetNodeGroup() {
    this._nodeGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupInput() {
    return this._nodeGroup;
  }

  // oauth_scopes - computed: true, optional: true, required: false
  private _oauthScopes?: string[]; 
  public get oauthScopes() {
    return cdktn.Fn.tolist(this.getListAttribute('oauth_scopes'));
  }
  public set oauthScopes(value: string[]) {
    this._oauthScopes = value;
  }
  public resetOauthScopes() {
    this._oauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthScopesInput() {
    return this._oauthScopes;
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

  // resource_labels - computed: false, optional: true, required: false
  private _resourceLabels?: { [key: string]: string }; 
  public get resourceLabels() {
    return this.getStringMapAttribute('resource_labels');
  }
  public set resourceLabels(value: { [key: string]: string }) {
    this._resourceLabels = value;
  }
  public resetResourceLabels() {
    this._resourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelsInput() {
    return this._resourceLabels;
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

  // service_account - computed: true, optional: true, required: false
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

  // storage_pools - computed: false, optional: true, required: false
  private _storagePools?: string[]; 
  public get storagePools() {
    return this.getListAttribute('storage_pools');
  }
  public set storagePools(value: string[]) {
    this._storagePools = value;
  }
  public resetStoragePools() {
    this._storagePools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolsInput() {
    return this._storagePools;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
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

  // advanced_machine_features - computed: false, optional: true, required: false
  private _advancedMachineFeatures = new ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference(this, "advanced_machine_features");
  public get advancedMachineFeatures() {
    return this._advancedMachineFeatures;
  }
  public putAdvancedMachineFeatures(value: ContainerNodePoolNodeConfigAdvancedMachineFeatures) {
    this._advancedMachineFeatures.internalValue = value;
  }
  public resetAdvancedMachineFeatures() {
    this._advancedMachineFeatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedMachineFeaturesInput() {
    return this._advancedMachineFeatures.internalValue;
  }

  // boot_disk - computed: false, optional: true, required: false
  private _bootDisk = new ContainerNodePoolNodeConfigBootDiskOutputReference(this, "boot_disk");
  public get bootDisk() {
    return this._bootDisk;
  }
  public putBootDisk(value: ContainerNodePoolNodeConfigBootDisk) {
    this._bootDisk.internalValue = value;
  }
  public resetBootDisk() {
    this._bootDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskInput() {
    return this._bootDisk.internalValue;
  }

  // confidential_nodes - computed: false, optional: true, required: false
  private _confidentialNodes = new ContainerNodePoolNodeConfigConfidentialNodesOutputReference(this, "confidential_nodes");
  public get confidentialNodes() {
    return this._confidentialNodes;
  }
  public putConfidentialNodes(value: ContainerNodePoolNodeConfigConfidentialNodes) {
    this._confidentialNodes.internalValue = value;
  }
  public resetConfidentialNodes() {
    this._confidentialNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialNodesInput() {
    return this._confidentialNodes.internalValue;
  }

  // containerd_config - computed: false, optional: true, required: false
  private _containerdConfig = new ContainerNodePoolNodeConfigContainerdConfigOutputReference(this, "containerd_config");
  public get containerdConfig() {
    return this._containerdConfig;
  }
  public putContainerdConfig(value: ContainerNodePoolNodeConfigContainerdConfig) {
    this._containerdConfig.internalValue = value;
  }
  public resetContainerdConfig() {
    this._containerdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerdConfigInput() {
    return this._containerdConfig.internalValue;
  }

  // ephemeral_storage_local_ssd_config - computed: false, optional: true, required: false
  private _ephemeralStorageLocalSsdConfig = new ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference(this, "ephemeral_storage_local_ssd_config");
  public get ephemeralStorageLocalSsdConfig() {
    return this._ephemeralStorageLocalSsdConfig;
  }
  public putEphemeralStorageLocalSsdConfig(value: ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig) {
    this._ephemeralStorageLocalSsdConfig.internalValue = value;
  }
  public resetEphemeralStorageLocalSsdConfig() {
    this._ephemeralStorageLocalSsdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageLocalSsdConfigInput() {
    return this._ephemeralStorageLocalSsdConfig.internalValue;
  }

  // fast_socket - computed: false, optional: true, required: false
  private _fastSocket = new ContainerNodePoolNodeConfigFastSocketOutputReference(this, "fast_socket");
  public get fastSocket() {
    return this._fastSocket;
  }
  public putFastSocket(value: ContainerNodePoolNodeConfigFastSocket) {
    this._fastSocket.internalValue = value;
  }
  public resetFastSocket() {
    this._fastSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastSocketInput() {
    return this._fastSocket.internalValue;
  }

  // gcfs_config - computed: false, optional: true, required: false
  private _gcfsConfig = new ContainerNodePoolNodeConfigGcfsConfigOutputReference(this, "gcfs_config");
  public get gcfsConfig() {
    return this._gcfsConfig;
  }
  public putGcfsConfig(value: ContainerNodePoolNodeConfigGcfsConfig) {
    this._gcfsConfig.internalValue = value;
  }
  public resetGcfsConfig() {
    this._gcfsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcfsConfigInput() {
    return this._gcfsConfig.internalValue;
  }

  // guest_accelerator - computed: false, optional: true, required: false
  private _guestAccelerator = new ContainerNodePoolNodeConfigGuestAcceleratorList(this, "guest_accelerator", false);
  public get guestAccelerator() {
    return this._guestAccelerator;
  }
  public putGuestAccelerator(value: ContainerNodePoolNodeConfigGuestAccelerator[] | cdktn.IResolvable) {
    this._guestAccelerator.internalValue = value;
  }
  public resetGuestAccelerator() {
    this._guestAccelerator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAcceleratorInput() {
    return this._guestAccelerator.internalValue;
  }

  // gvnic - computed: false, optional: true, required: false
  private _gvnic = new ContainerNodePoolNodeConfigGvnicOutputReference(this, "gvnic");
  public get gvnic() {
    return this._gvnic;
  }
  public putGvnic(value: ContainerNodePoolNodeConfigGvnic) {
    this._gvnic.internalValue = value;
  }
  public resetGvnic() {
    this._gvnic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gvnicInput() {
    return this._gvnic.internalValue;
  }

  // host_maintenance_policy - computed: false, optional: true, required: false
  private _hostMaintenancePolicy = new ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference(this, "host_maintenance_policy");
  public get hostMaintenancePolicy() {
    return this._hostMaintenancePolicy;
  }
  public putHostMaintenancePolicy(value: ContainerNodePoolNodeConfigHostMaintenancePolicy) {
    this._hostMaintenancePolicy.internalValue = value;
  }
  public resetHostMaintenancePolicy() {
    this._hostMaintenancePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostMaintenancePolicyInput() {
    return this._hostMaintenancePolicy.internalValue;
  }

  // kubelet_config - computed: false, optional: true, required: false
  private _kubeletConfig = new ContainerNodePoolNodeConfigKubeletConfigOutputReference(this, "kubelet_config");
  public get kubeletConfig() {
    return this._kubeletConfig;
  }
  public putKubeletConfig(value: ContainerNodePoolNodeConfigKubeletConfig) {
    this._kubeletConfig.internalValue = value;
  }
  public resetKubeletConfig() {
    this._kubeletConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletConfigInput() {
    return this._kubeletConfig.internalValue;
  }

  // linux_node_config - computed: false, optional: true, required: false
  private _linuxNodeConfig = new ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference(this, "linux_node_config");
  public get linuxNodeConfig() {
    return this._linuxNodeConfig;
  }
  public putLinuxNodeConfig(value: ContainerNodePoolNodeConfigLinuxNodeConfig) {
    this._linuxNodeConfig.internalValue = value;
  }
  public resetLinuxNodeConfig() {
    this._linuxNodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxNodeConfigInput() {
    return this._linuxNodeConfig.internalValue;
  }

  // local_nvme_ssd_block_config - computed: false, optional: true, required: false
  private _localNvmeSsdBlockConfig = new ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference(this, "local_nvme_ssd_block_config");
  public get localNvmeSsdBlockConfig() {
    return this._localNvmeSsdBlockConfig;
  }
  public putLocalNvmeSsdBlockConfig(value: ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig) {
    this._localNvmeSsdBlockConfig.internalValue = value;
  }
  public resetLocalNvmeSsdBlockConfig() {
    this._localNvmeSsdBlockConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localNvmeSsdBlockConfigInput() {
    return this._localNvmeSsdBlockConfig.internalValue;
  }

  // reservation_affinity - computed: false, optional: true, required: false
  private _reservationAffinity = new ContainerNodePoolNodeConfigReservationAffinityOutputReference(this, "reservation_affinity");
  public get reservationAffinity() {
    return this._reservationAffinity;
  }
  public putReservationAffinity(value: ContainerNodePoolNodeConfigReservationAffinity) {
    this._reservationAffinity.internalValue = value;
  }
  public resetReservationAffinity() {
    this._reservationAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationAffinityInput() {
    return this._reservationAffinity.internalValue;
  }

  // sandbox_config - computed: false, optional: true, required: false
  private _sandboxConfig = new ContainerNodePoolNodeConfigSandboxConfigOutputReference(this, "sandbox_config");
  public get sandboxConfig() {
    return this._sandboxConfig;
  }
  public putSandboxConfig(value: ContainerNodePoolNodeConfigSandboxConfig) {
    this._sandboxConfig.internalValue = value;
  }
  public resetSandboxConfig() {
    this._sandboxConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sandboxConfigInput() {
    return this._sandboxConfig.internalValue;
  }

  // secondary_boot_disks - computed: false, optional: true, required: false
  private _secondaryBootDisks = new ContainerNodePoolNodeConfigSecondaryBootDisksList(this, "secondary_boot_disks", false);
  public get secondaryBootDisks() {
    return this._secondaryBootDisks;
  }
  public putSecondaryBootDisks(value: ContainerNodePoolNodeConfigSecondaryBootDisks[] | cdktn.IResolvable) {
    this._secondaryBootDisks.internalValue = value;
  }
  public resetSecondaryBootDisks() {
    this._secondaryBootDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryBootDisksInput() {
    return this._secondaryBootDisks.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: ContainerNodePoolNodeConfigShieldedInstanceConfig) {
    this._shieldedInstanceConfig.internalValue = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig.internalValue;
  }

  // sole_tenant_config - computed: false, optional: true, required: false
  private _soleTenantConfig = new ContainerNodePoolNodeConfigSoleTenantConfigOutputReference(this, "sole_tenant_config");
  public get soleTenantConfig() {
    return this._soleTenantConfig;
  }
  public putSoleTenantConfig(value: ContainerNodePoolNodeConfigSoleTenantConfig) {
    this._soleTenantConfig.internalValue = value;
  }
  public resetSoleTenantConfig() {
    this._soleTenantConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soleTenantConfigInput() {
    return this._soleTenantConfig.internalValue;
  }

  // taint - computed: false, optional: true, required: false
  private _taint = new ContainerNodePoolNodeConfigTaintList(this, "taint", false);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: ContainerNodePoolNodeConfigTaint[] | cdktn.IResolvable) {
    this._taint.internalValue = value;
  }
  public resetTaint() {
    this._taint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintInput() {
    return this._taint.internalValue;
  }

  // windows_node_config - computed: false, optional: true, required: false
  private _windowsNodeConfig = new ContainerNodePoolNodeConfigWindowsNodeConfigOutputReference(this, "windows_node_config");
  public get windowsNodeConfig() {
    return this._windowsNodeConfig;
  }
  public putWindowsNodeConfig(value: ContainerNodePoolNodeConfigWindowsNodeConfig) {
    this._windowsNodeConfig.internalValue = value;
  }
  public resetWindowsNodeConfig() {
    this._windowsNodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsNodeConfigInput() {
    return this._windowsNodeConfig.internalValue;
  }

  // workload_metadata_config - computed: false, optional: true, required: false
  private _workloadMetadataConfig = new ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference(this, "workload_metadata_config");
  public get workloadMetadataConfig() {
    return this._workloadMetadataConfig;
  }
  public putWorkloadMetadataConfig(value: ContainerNodePoolNodeConfigWorkloadMetadataConfig) {
    this._workloadMetadataConfig.internalValue = value;
  }
  public resetWorkloadMetadataConfig() {
    this._workloadMetadataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadMetadataConfigInput() {
    return this._workloadMetadataConfig.internalValue;
  }
}
export interface ContainerNodePoolNodeDrainConfig {
  /**
  * Whether to respect PodDisruptionBudget policy during node pool deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#respect_pdb_during_node_pool_deletion ContainerNodePool#respect_pdb_during_node_pool_deletion}
  */
  readonly respectPdbDuringNodePoolDeletion?: boolean | cdktn.IResolvable;
}

export function containerNodePoolNodeDrainConfigToTerraform(struct?: ContainerNodePoolNodeDrainConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    respect_pdb_during_node_pool_deletion: cdktn.booleanToTerraform(struct!.respectPdbDuringNodePoolDeletion),
  }
}


export function containerNodePoolNodeDrainConfigToHclTerraform(struct?: ContainerNodePoolNodeDrainConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    respect_pdb_during_node_pool_deletion: {
      value: cdktn.booleanToHclTerraform(struct!.respectPdbDuringNodePoolDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolNodeDrainConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerNodePoolNodeDrainConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._respectPdbDuringNodePoolDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.respectPdbDuringNodePoolDeletion = this._respectPdbDuringNodePoolDeletion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolNodeDrainConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._respectPdbDuringNodePoolDeletion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._respectPdbDuringNodePoolDeletion = value.respectPdbDuringNodePoolDeletion;
    }
  }

  // respect_pdb_during_node_pool_deletion - computed: false, optional: true, required: false
  private _respectPdbDuringNodePoolDeletion?: boolean | cdktn.IResolvable; 
  public get respectPdbDuringNodePoolDeletion() {
    return this.getBooleanAttribute('respect_pdb_during_node_pool_deletion');
  }
  public set respectPdbDuringNodePoolDeletion(value: boolean | cdktn.IResolvable) {
    this._respectPdbDuringNodePoolDeletion = value;
  }
  public resetRespectPdbDuringNodePoolDeletion() {
    this._respectPdbDuringNodePoolDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respectPdbDuringNodePoolDeletionInput() {
    return this._respectPdbDuringNodePoolDeletion;
  }
}

export class ContainerNodePoolNodeDrainConfigList extends cdktn.ComplexList {
  public internalValue? : ContainerNodePoolNodeDrainConfig[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerNodePoolNodeDrainConfigOutputReference {
    return new ContainerNodePoolNodeDrainConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerNodePoolPlacementPolicy {
  /**
  * If set, refers to the name of a custom resource policy supplied by the user. The resource policy must be in the same project and region as the node pool. If not found, InvalidArgument error is returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#policy_name ContainerNodePool#policy_name}
  */
  readonly policyName?: string;
  /**
  * The TPU topology like "2x4" or "2x2x2". https://cloud.google.com/kubernetes-engine/docs/concepts/plan-tpus#topology
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#tpu_topology ContainerNodePool#tpu_topology}
  */
  readonly tpuTopology?: string;
  /**
  * Type defines the type of placement policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#type ContainerNodePool#type}
  */
  readonly type: string;
}

export function containerNodePoolPlacementPolicyToTerraform(struct?: ContainerNodePoolPlacementPolicyOutputReference | ContainerNodePoolPlacementPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_name: cdktn.stringToTerraform(struct!.policyName),
    tpu_topology: cdktn.stringToTerraform(struct!.tpuTopology),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function containerNodePoolPlacementPolicyToHclTerraform(struct?: ContainerNodePoolPlacementPolicyOutputReference | ContainerNodePoolPlacementPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_name: {
      value: cdktn.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tpu_topology: {
      value: cdktn.stringToHclTerraform(struct!.tpuTopology),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolPlacementPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolPlacementPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._tpuTopology !== undefined) {
      hasAnyValues = true;
      internalValueResult.tpuTopology = this._tpuTopology;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolPlacementPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policyName = undefined;
      this._tpuTopology = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policyName = value.policyName;
      this._tpuTopology = value.tpuTopology;
      this._type = value.type;
    }
  }

  // policy_name - computed: false, optional: true, required: false
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // tpu_topology - computed: false, optional: true, required: false
  private _tpuTopology?: string; 
  public get tpuTopology() {
    return this.getStringAttribute('tpu_topology');
  }
  public set tpuTopology(value: string) {
    this._tpuTopology = value;
  }
  public resetTpuTopology() {
    this._tpuTopology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpuTopologyInput() {
    return this._tpuTopology;
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
}
export interface ContainerNodePoolQueuedProvisioning {
  /**
  * Whether nodes in this node pool are obtainable solely through the ProvisioningRequest API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#enabled ContainerNodePool#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function containerNodePoolQueuedProvisioningToTerraform(struct?: ContainerNodePoolQueuedProvisioningOutputReference | ContainerNodePoolQueuedProvisioning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function containerNodePoolQueuedProvisioningToHclTerraform(struct?: ContainerNodePoolQueuedProvisioningOutputReference | ContainerNodePoolQueuedProvisioning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolQueuedProvisioningOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolQueuedProvisioning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolQueuedProvisioning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ContainerNodePoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#create ContainerNodePool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#delete ContainerNodePool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#update ContainerNodePool#update}
  */
  readonly update?: string;
}

export function containerNodePoolTimeoutsToTerraform(struct?: ContainerNodePoolTimeouts | cdktn.IResolvable): any {
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


export function containerNodePoolTimeoutsToHclTerraform(struct?: ContainerNodePoolTimeouts | cdktn.IResolvable): any {
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

export class ContainerNodePoolTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ContainerNodePoolTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ContainerNodePoolTimeouts | cdktn.IResolvable | undefined) {
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
export interface ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy {
  /**
  * Number of blue nodes to drain in a batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#batch_node_count ContainerNodePool#batch_node_count}
  */
  readonly batchNodeCount?: number;
  /**
  * Percentage of the blue pool nodes to drain in a batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#batch_percentage ContainerNodePool#batch_percentage}
  */
  readonly batchPercentage?: number;
  /**
  * Soak time after each batch gets drained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#batch_soak_duration ContainerNodePool#batch_soak_duration}
  */
  readonly batchSoakDuration?: string;
}

export function containerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToTerraform(struct?: ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference | ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_node_count: cdktn.numberToTerraform(struct!.batchNodeCount),
    batch_percentage: cdktn.numberToTerraform(struct!.batchPercentage),
    batch_soak_duration: cdktn.stringToTerraform(struct!.batchSoakDuration),
  }
}


export function containerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToHclTerraform(struct?: ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference | ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_node_count: {
      value: cdktn.numberToHclTerraform(struct!.batchNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_percentage: {
      value: cdktn.numberToHclTerraform(struct!.batchPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_soak_duration: {
      value: cdktn.stringToHclTerraform(struct!.batchSoakDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchNodeCount = this._batchNodeCount;
    }
    if (this._batchPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchPercentage = this._batchPercentage;
    }
    if (this._batchSoakDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSoakDuration = this._batchSoakDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchNodeCount = undefined;
      this._batchPercentage = undefined;
      this._batchSoakDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchNodeCount = value.batchNodeCount;
      this._batchPercentage = value.batchPercentage;
      this._batchSoakDuration = value.batchSoakDuration;
    }
  }

  // batch_node_count - computed: true, optional: true, required: false
  private _batchNodeCount?: number; 
  public get batchNodeCount() {
    return this.getNumberAttribute('batch_node_count');
  }
  public set batchNodeCount(value: number) {
    this._batchNodeCount = value;
  }
  public resetBatchNodeCount() {
    this._batchNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchNodeCountInput() {
    return this._batchNodeCount;
  }

  // batch_percentage - computed: true, optional: true, required: false
  private _batchPercentage?: number; 
  public get batchPercentage() {
    return this.getNumberAttribute('batch_percentage');
  }
  public set batchPercentage(value: number) {
    this._batchPercentage = value;
  }
  public resetBatchPercentage() {
    this._batchPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchPercentageInput() {
    return this._batchPercentage;
  }

  // batch_soak_duration - computed: true, optional: true, required: false
  private _batchSoakDuration?: string; 
  public get batchSoakDuration() {
    return this.getStringAttribute('batch_soak_duration');
  }
  public set batchSoakDuration(value: string) {
    this._batchSoakDuration = value;
  }
  public resetBatchSoakDuration() {
    this._batchSoakDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSoakDurationInput() {
    return this._batchSoakDuration;
  }
}
export interface ContainerNodePoolUpgradeSettingsBlueGreenSettings {
  /**
  * Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#node_pool_soak_duration ContainerNodePool#node_pool_soak_duration}
  */
  readonly nodePoolSoakDuration?: string;
  /**
  * standard_rollout_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#standard_rollout_policy ContainerNodePool#standard_rollout_policy}
  */
  readonly standardRolloutPolicy: ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy;
}

export function containerNodePoolUpgradeSettingsBlueGreenSettingsToTerraform(struct?: ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference | ContainerNodePoolUpgradeSettingsBlueGreenSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_pool_soak_duration: cdktn.stringToTerraform(struct!.nodePoolSoakDuration),
    standard_rollout_policy: containerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToTerraform(struct!.standardRolloutPolicy),
  }
}


export function containerNodePoolUpgradeSettingsBlueGreenSettingsToHclTerraform(struct?: ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference | ContainerNodePoolUpgradeSettingsBlueGreenSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_pool_soak_duration: {
      value: cdktn.stringToHclTerraform(struct!.nodePoolSoakDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standard_rollout_policy: {
      value: containerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToHclTerraform(struct!.standardRolloutPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolUpgradeSettingsBlueGreenSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodePoolSoakDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePoolSoakDuration = this._nodePoolSoakDuration;
    }
    if (this._standardRolloutPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardRolloutPolicy = this._standardRolloutPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolUpgradeSettingsBlueGreenSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodePoolSoakDuration = undefined;
      this._standardRolloutPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodePoolSoakDuration = value.nodePoolSoakDuration;
      this._standardRolloutPolicy.internalValue = value.standardRolloutPolicy;
    }
  }

  // node_pool_soak_duration - computed: true, optional: true, required: false
  private _nodePoolSoakDuration?: string; 
  public get nodePoolSoakDuration() {
    return this.getStringAttribute('node_pool_soak_duration');
  }
  public set nodePoolSoakDuration(value: string) {
    this._nodePoolSoakDuration = value;
  }
  public resetNodePoolSoakDuration() {
    this._nodePoolSoakDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolSoakDurationInput() {
    return this._nodePoolSoakDuration;
  }

  // standard_rollout_policy - computed: false, optional: false, required: true
  private _standardRolloutPolicy = new ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference(this, "standard_rollout_policy");
  public get standardRolloutPolicy() {
    return this._standardRolloutPolicy;
  }
  public putStandardRolloutPolicy(value: ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy) {
    this._standardRolloutPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standardRolloutPolicyInput() {
    return this._standardRolloutPolicy.internalValue;
  }
}
export interface ContainerNodePoolUpgradeSettings {
  /**
  * The number of additional nodes that can be added to the node pool during an upgrade. Increasing max_surge raises the number of nodes that can be upgraded simultaneously. Can be set to 0 or greater.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#max_surge ContainerNodePool#max_surge}
  */
  readonly maxSurge?: number;
  /**
  * The number of nodes that can be simultaneously unavailable during an upgrade. Increasing max_unavailable raises the number of nodes that can be upgraded in parallel. Can be set to 0 or greater.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#max_unavailable ContainerNodePool#max_unavailable}
  */
  readonly maxUnavailable?: number;
  /**
  * Update strategy for the given nodepool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#strategy ContainerNodePool#strategy}
  */
  readonly strategy?: string;
  /**
  * blue_green_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#blue_green_settings ContainerNodePool#blue_green_settings}
  */
  readonly blueGreenSettings?: ContainerNodePoolUpgradeSettingsBlueGreenSettings;
}

export function containerNodePoolUpgradeSettingsToTerraform(struct?: ContainerNodePoolUpgradeSettingsOutputReference | ContainerNodePoolUpgradeSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktn.numberToTerraform(struct!.maxSurge),
    max_unavailable: cdktn.numberToTerraform(struct!.maxUnavailable),
    strategy: cdktn.stringToTerraform(struct!.strategy),
    blue_green_settings: containerNodePoolUpgradeSettingsBlueGreenSettingsToTerraform(struct!.blueGreenSettings),
  }
}


export function containerNodePoolUpgradeSettingsToHclTerraform(struct?: ContainerNodePoolUpgradeSettingsOutputReference | ContainerNodePoolUpgradeSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_surge: {
      value: cdktn.numberToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_unavailable: {
      value: cdktn.numberToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy: {
      value: cdktn.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blue_green_settings: {
      value: containerNodePoolUpgradeSettingsBlueGreenSettingsToHclTerraform(struct!.blueGreenSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerNodePoolUpgradeSettingsBlueGreenSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerNodePoolUpgradeSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerNodePoolUpgradeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._blueGreenSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueGreenSettings = this._blueGreenSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerNodePoolUpgradeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
      this._strategy = undefined;
      this._blueGreenSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSurge = value.maxSurge;
      this._maxUnavailable = value.maxUnavailable;
      this._strategy = value.strategy;
      this._blueGreenSettings.internalValue = value.blueGreenSettings;
    }
  }

  // max_surge - computed: true, optional: true, required: false
  private _maxSurge?: number; 
  public get maxSurge() {
    return this.getNumberAttribute('max_surge');
  }
  public set maxSurge(value: number) {
    this._maxSurge = value;
  }
  public resetMaxSurge() {
    this._maxSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }

  // max_unavailable - computed: true, optional: true, required: false
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // blue_green_settings - computed: false, optional: true, required: false
  private _blueGreenSettings = new ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference(this, "blue_green_settings");
  public get blueGreenSettings() {
    return this._blueGreenSettings;
  }
  public putBlueGreenSettings(value: ContainerNodePoolUpgradeSettingsBlueGreenSettings) {
    this._blueGreenSettings.internalValue = value;
  }
  public resetBlueGreenSettings() {
    this._blueGreenSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueGreenSettingsInput() {
    return this._blueGreenSettings.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool google_container_node_pool}
*/
export class ContainerNodePool extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_container_node_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ContainerNodePool resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContainerNodePool to import
  * @param importFromId The id of the existing ContainerNodePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContainerNodePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_container_node_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/container_node_pool google_container_node_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerNodePoolConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerNodePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'google_container_node_pool',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.31.0',
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
    this._cluster = config.cluster;
    this._id = config.id;
    this._initialNodeCount = config.initialNodeCount;
    this._location = config.location;
    this._maxPodsPerNode = config.maxPodsPerNode;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._nodeCount = config.nodeCount;
    this._nodeLocations = config.nodeLocations;
    this._project = config.project;
    this._version = config.version;
    this._autoscaling.internalValue = config.autoscaling;
    this._management.internalValue = config.management;
    this._networkConfig.internalValue = config.networkConfig;
    this._nodeConfig.internalValue = config.nodeConfig;
    this._nodeDrainConfig.internalValue = config.nodeDrainConfig;
    this._placementPolicy.internalValue = config.placementPolicy;
    this._queuedProvisioning.internalValue = config.queuedProvisioning;
    this._timeouts.internalValue = config.timeouts;
    this._upgradeSettings.internalValue = config.upgradeSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
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

  // initial_node_count - computed: true, optional: true, required: false
  private _initialNodeCount?: number; 
  public get initialNodeCount() {
    return this.getNumberAttribute('initial_node_count');
  }
  public set initialNodeCount(value: number) {
    this._initialNodeCount = value;
  }
  public resetInitialNodeCount() {
    this._initialNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialNodeCountInput() {
    return this._initialNodeCount;
  }

  // instance_group_urls - computed: true, optional: false, required: false
  public get instanceGroupUrls() {
    return this.getListAttribute('instance_group_urls');
  }

  // location - computed: true, optional: true, required: false
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

  // managed_instance_group_urls - computed: true, optional: false, required: false
  public get managedInstanceGroupUrls() {
    return this.getListAttribute('managed_instance_group_urls');
  }

  // max_pods_per_node - computed: true, optional: true, required: false
  private _maxPodsPerNode?: number; 
  public get maxPodsPerNode() {
    return this.getNumberAttribute('max_pods_per_node');
  }
  public set maxPodsPerNode(value: number) {
    this._maxPodsPerNode = value;
  }
  public resetMaxPodsPerNode() {
    this._maxPodsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsPerNodeInput() {
    return this._maxPodsPerNode;
  }

  // name - computed: true, optional: true, required: false
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

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // node_count - computed: true, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // node_locations - computed: true, optional: true, required: false
  private _nodeLocations?: string[]; 
  public get nodeLocations() {
    return cdktn.Fn.tolist(this.getListAttribute('node_locations'));
  }
  public set nodeLocations(value: string[]) {
    this._nodeLocations = value;
  }
  public resetNodeLocations() {
    this._nodeLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLocationsInput() {
    return this._nodeLocations;
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
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

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // autoscaling - computed: false, optional: true, required: false
  private _autoscaling = new ContainerNodePoolAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: ContainerNodePoolAutoscaling) {
    this._autoscaling.internalValue = value;
  }
  public resetAutoscaling() {
    this._autoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingInput() {
    return this._autoscaling.internalValue;
  }

  // management - computed: false, optional: true, required: false
  private _management = new ContainerNodePoolManagementOutputReference(this, "management");
  public get management() {
    return this._management;
  }
  public putManagement(value: ContainerNodePoolManagement) {
    this._management.internalValue = value;
  }
  public resetManagement() {
    this._management.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management.internalValue;
  }

  // network_config - computed: false, optional: true, required: false
  private _networkConfig = new ContainerNodePoolNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: ContainerNodePoolNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  public resetNetworkConfig() {
    this._networkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // node_config - computed: false, optional: true, required: false
  private _nodeConfig = new ContainerNodePoolNodeConfigOutputReference(this, "node_config");
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public putNodeConfig(value: ContainerNodePoolNodeConfig) {
    this._nodeConfig.internalValue = value;
  }
  public resetNodeConfig() {
    this._nodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig.internalValue;
  }

  // node_drain_config - computed: false, optional: true, required: false
  private _nodeDrainConfig = new ContainerNodePoolNodeDrainConfigList(this, "node_drain_config", false);
  public get nodeDrainConfig() {
    return this._nodeDrainConfig;
  }
  public putNodeDrainConfig(value: ContainerNodePoolNodeDrainConfig[] | cdktn.IResolvable) {
    this._nodeDrainConfig.internalValue = value;
  }
  public resetNodeDrainConfig() {
    this._nodeDrainConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDrainConfigInput() {
    return this._nodeDrainConfig.internalValue;
  }

  // placement_policy - computed: false, optional: true, required: false
  private _placementPolicy = new ContainerNodePoolPlacementPolicyOutputReference(this, "placement_policy");
  public get placementPolicy() {
    return this._placementPolicy;
  }
  public putPlacementPolicy(value: ContainerNodePoolPlacementPolicy) {
    this._placementPolicy.internalValue = value;
  }
  public resetPlacementPolicy() {
    this._placementPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementPolicyInput() {
    return this._placementPolicy.internalValue;
  }

  // queued_provisioning - computed: false, optional: true, required: false
  private _queuedProvisioning = new ContainerNodePoolQueuedProvisioningOutputReference(this, "queued_provisioning");
  public get queuedProvisioning() {
    return this._queuedProvisioning;
  }
  public putQueuedProvisioning(value: ContainerNodePoolQueuedProvisioning) {
    this._queuedProvisioning.internalValue = value;
  }
  public resetQueuedProvisioning() {
    this._queuedProvisioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queuedProvisioningInput() {
    return this._queuedProvisioning.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContainerNodePoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContainerNodePoolTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // upgrade_settings - computed: false, optional: true, required: false
  private _upgradeSettings = new ContainerNodePoolUpgradeSettingsOutputReference(this, "upgrade_settings");
  public get upgradeSettings() {
    return this._upgradeSettings;
  }
  public putUpgradeSettings(value: ContainerNodePoolUpgradeSettings) {
    this._upgradeSettings.internalValue = value;
  }
  public resetUpgradeSettings() {
    this._upgradeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeSettingsInput() {
    return this._upgradeSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster: cdktn.stringToTerraform(this._cluster),
      id: cdktn.stringToTerraform(this._id),
      initial_node_count: cdktn.numberToTerraform(this._initialNodeCount),
      location: cdktn.stringToTerraform(this._location),
      max_pods_per_node: cdktn.numberToTerraform(this._maxPodsPerNode),
      name: cdktn.stringToTerraform(this._name),
      name_prefix: cdktn.stringToTerraform(this._namePrefix),
      node_count: cdktn.numberToTerraform(this._nodeCount),
      node_locations: cdktn.listMapper(cdktn.stringToTerraform, false)(this._nodeLocations),
      project: cdktn.stringToTerraform(this._project),
      version: cdktn.stringToTerraform(this._version),
      autoscaling: containerNodePoolAutoscalingToTerraform(this._autoscaling.internalValue),
      management: containerNodePoolManagementToTerraform(this._management.internalValue),
      network_config: containerNodePoolNetworkConfigToTerraform(this._networkConfig.internalValue),
      node_config: containerNodePoolNodeConfigToTerraform(this._nodeConfig.internalValue),
      node_drain_config: cdktn.listMapper(containerNodePoolNodeDrainConfigToTerraform, true)(this._nodeDrainConfig.internalValue),
      placement_policy: containerNodePoolPlacementPolicyToTerraform(this._placementPolicy.internalValue),
      queued_provisioning: containerNodePoolQueuedProvisioningToTerraform(this._queuedProvisioning.internalValue),
      timeouts: containerNodePoolTimeoutsToTerraform(this._timeouts.internalValue),
      upgrade_settings: containerNodePoolUpgradeSettingsToTerraform(this._upgradeSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster: {
        value: cdktn.stringToHclTerraform(this._cluster),
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
      initial_node_count: {
        value: cdktn.numberToHclTerraform(this._initialNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_pods_per_node: {
        value: cdktn.numberToHclTerraform(this._maxPodsPerNode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_prefix: {
        value: cdktn.stringToHclTerraform(this._namePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_count: {
        value: cdktn.numberToHclTerraform(this._nodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_locations: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._nodeLocations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktn.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autoscaling: {
        value: containerNodePoolAutoscalingToHclTerraform(this._autoscaling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerNodePoolAutoscalingList",
      },
      management: {
        value: containerNodePoolManagementToHclTerraform(this._management.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerNodePoolManagementList",
      },
      network_config: {
        value: containerNodePoolNetworkConfigToHclTerraform(this._networkConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerNodePoolNetworkConfigList",
      },
      node_config: {
        value: containerNodePoolNodeConfigToHclTerraform(this._nodeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerNodePoolNodeConfigList",
      },
      node_drain_config: {
        value: cdktn.listMapperHcl(containerNodePoolNodeDrainConfigToHclTerraform, true)(this._nodeDrainConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerNodePoolNodeDrainConfigList",
      },
      placement_policy: {
        value: containerNodePoolPlacementPolicyToHclTerraform(this._placementPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerNodePoolPlacementPolicyList",
      },
      queued_provisioning: {
        value: containerNodePoolQueuedProvisioningToHclTerraform(this._queuedProvisioning.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerNodePoolQueuedProvisioningList",
      },
      timeouts: {
        value: containerNodePoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ContainerNodePoolTimeouts",
      },
      upgrade_settings: {
        value: containerNodePoolUpgradeSettingsToHclTerraform(this._upgradeSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerNodePoolUpgradeSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
